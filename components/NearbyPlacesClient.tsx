'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

declare global {
  interface Window { kakao: any; }
}

const DEFAULT_POS = { lat: 37.5665, lng: 126.978 };
const CACHE_KEY = 'ksk_last_position';
const KAKAO_APP_KEY = '085f096caf889be28ed7560edf5a00a9';

type L = 'en' | 'zh' | 'ru' | 'ja';

type Strings = {
  categories: { bank: string; pharmacy: string; supermarket: string; convenience: string; hospital: string; police: string };
  convenienceTip: string;
  locating: string;
  live: string;
  cached: string;
  enableLocation: string;
  locationDeniedMsg: string;
  searching: string;
  checkingLocation: string;
  resultsCount: (count: number, label: string) => string;
  noResults: string;
  myLocation: string;
  directions: string;
};

const STRINGS: Record<L, Strings> = {
  en: {
    categories: { bank: 'Bank', pharmacy: 'Pharmacy', supermarket: 'Supermarket', convenience: 'Convenience Store', hospital: 'Hospital', police: 'Police' },
    convenienceTip: 'Convenience stores (GS25, CU, 7-Eleven, etc.) sell designated trash bags (종량제) and T-money cards.',
    locating: 'Getting location…',
    live: 'Live location',
    cached: 'Last location',
    enableLocation: '📍 Enable location',
    locationDeniedMsg: 'Location access denied. Click 🔒 in the address bar → Location → Allow, then refresh.',
    searching: 'Searching…',
    checkingLocation: 'Getting your location…',
    resultsCount: (count, label) => `${count} ${label} within 1km`,
    noResults: 'No results within 1km.',
    myLocation: '📍 My location',
    directions: 'Directions',
  },
  zh: {
    categories: { bank: '银行', pharmacy: '药店', supermarket: '大型超市', convenience: '便利店', hospital: '医院', police: '警察局' },
    convenienceTip: '便利店（GS25、CU、7-Eleven等）可购买指定垃圾袋（종량제）和T-money交通卡。',
    locating: '定位中…',
    live: '当前位置',
    cached: '上次位置',
    enableLocation: '📍 启用定位',
    locationDeniedMsg: '位置权限已被拒绝。请点击地址栏的🔒图标 → 位置 → 允许，然后刷新页面。',
    searching: '搜索中…',
    checkingLocation: '正在获取您的位置…',
    resultsCount: (count, label) => `周边1km内 ${label} ${count}个`,
    noResults: '周边1km以内无结果。',
    myLocation: '📍 我的位置',
    directions: '导航',
  },
  ru: {
    categories: { bank: 'Банк', pharmacy: 'Аптека', supermarket: 'Супермаркет', convenience: 'Магазин', hospital: 'Больница', police: 'Полиция' },
    convenienceTip: 'В магазинах (GS25, CU, 7-Eleven и др.) продаются мусорные пакеты (종량제) и карты T-money.',
    locating: 'Определение…',
    live: 'Текущее место',
    cached: 'Последнее место',
    enableLocation: '📍 Разрешить доступ',
    locationDeniedMsg: 'Доступ к геолокации запрещён. Нажмите 🔒 в адресной строке → Местоположение → Разрешить, затем обновите.',
    searching: 'Поиск…',
    checkingLocation: 'Определение местоположения…',
    resultsCount: (count, label) => `${label} в радиусе 1 км: ${count}`,
    noResults: 'Нет результатов в радиусе 1 км.',
    myLocation: '📍 Я здесь',
    directions: 'Маршрут',
  },
  ja: {
    categories: { bank: '銀行', pharmacy: '薬局', supermarket: 'スーパー', convenience: 'コンビニ', hospital: '病院', police: '警察署' },
    convenienceTip: 'コンビニ（GS25・CU・7-Eleven等）では指定ゴミ袋（종량제）とT-moneyカードを購入できます。',
    locating: '位置確認中…',
    live: '現在地',
    cached: '前回の位置',
    enableLocation: '📍 位置情報を許可',
    locationDeniedMsg: '位置情報へのアクセスが拒否されました。アドレスバーの🔒→位置情報→許可をクリック後、更新してください。',
    searching: '検索中…',
    checkingLocation: '位置情報を取得中…',
    resultsCount: (count, label) => `半径1km以内の${label}: ${count}件`,
    noResults: '1km以内に結果がありません。',
    myLocation: '📍 現在地',
    directions: 'ルート',
  },
};

// KakaoMap category codes
const KAKAO_CATEGORY: Record<string, string> = {
  bank: 'BK9',
  pharmacy: 'PM9',
  supermarket: 'MT1',
  convenience: 'CS2',
  hospital: 'HP8',
  police: 'PO3',
};

type Category = { key: string; label: string; icon: string; tip?: string };

function getCategories(s: Strings): Category[] {
  return [
    { key: 'bank', label: s.categories.bank, icon: '🏦' },
    { key: 'pharmacy', label: s.categories.pharmacy, icon: '💊' },
    { key: 'hospital', label: s.categories.hospital, icon: '🏥' },
    { key: 'police', label: s.categories.police, icon: '🚔' },
    { key: 'supermarket', label: s.categories.supermarket, icon: '🛒' },
    { key: 'convenience', label: s.categories.convenience, icon: '🏪', tip: s.convenienceTip },
  ];
}

type Place = { id: string; name: string; address: string; lat: number; lng: number; distance: number };
type LocationState = 'idle' | 'locating' | 'cached' | 'live' | 'denied';

function loadCachedPosition(): { lat: number; lng: number } | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.lat === 'number' && typeof parsed.lng === 'number') return parsed;
  } catch {}
  return null;
}

function savePosition(pos: { lat: number; lng: number }) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(pos)); } catch {}
}

export default function NearbyPlacesClient({
  initialCategory = 'bank',
  lang = 'en',
}: {
  initialCategory?: string;
  lang?: string;
}) {
  const s = STRINGS[(lang as L) in STRINGS ? (lang as L) : 'en'];
  const CATEGORIES = getCategories(s);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const userMarkerRef = useRef<any>(null);

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [locationState, setLocationState] = useState<LocationState>('idle');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  // Load KakaoMap SDK
  useEffect(() => {
    if (window.kakao?.maps) { setMapReady(true); return; }
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => setMapReady(true));
    };
    document.head.appendChild(script);
  }, []);

  const searchPlaces = useCallback(
    (categoryKey: string, pos: { lat: number; lng: number }) => {
      if (!window.kakao?.maps) return;
      setLoading(true);
      setPlaces([]);
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      const ps = new window.kakao.maps.services.Places();
      const categoryCode = KAKAO_CATEGORY[categoryKey] ?? 'BK9';
      const location = new window.kakao.maps.LatLng(pos.lat, pos.lng);

      ps.categorySearch(
        categoryCode,
        (data: any[], status: string) => {
          if (status !== window.kakao.maps.services.Status.OK) {
            setPlaces([]);
            setLoading(false);
            return;
          }
          const results: Place[] = data.map((item: any) => ({
            id: item.id,
            name: item.place_name,
            address: item.road_address_name || item.address_name,
            lat: parseFloat(item.y),
            lng: parseFloat(item.x),
            distance: parseInt(item.distance, 10),
          }));
          setPlaces(results);
          if (mapRef.current) {
            results.forEach((place) => {
              const markerPos = new window.kakao.maps.LatLng(place.lat, place.lng);
              const marker = new window.kakao.maps.Marker({ position: markerPos, map: mapRef.current });
              const infowindow = new window.kakao.maps.InfoWindow({ content: `<div style="padding:5px;font-size:12px">${place.name}</div>` });
              window.kakao.maps.event.addListener(marker, 'click', () => infowindow.open(mapRef.current, marker));
              markersRef.current.push(marker);
            });
          }
          setLoading(false);
        },
        { location, radius: 1000, sort: window.kakao.maps.services.SortBy.DISTANCE }
      );
    },
    [lang] // eslint-disable-line react-hooks/exhaustive-deps
  );

  function addUserMarker(pos: { lat: number; lng: number }) {
    if (!mapRef.current || !window.kakao?.maps) return;
    if (userMarkerRef.current) userMarkerRef.current.setMap(null);
    const markerPos = new window.kakao.maps.LatLng(pos.lat, pos.lng);
    const customOverlay = new window.kakao.maps.CustomOverlay({
      position: markerPos,
      content: '<div style="width:16px;height:16px;background:#3b82f6;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>',
      zIndex: 10,
    });
    customOverlay.setMap(mapRef.current);
    userMarkerRef.current = customOverlay;
  }

  function requestLiveLocation() {
    if (!navigator.geolocation) return;
    setLocationState('locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        savePosition(newPos);
        setPosition(newPos);
        setLocationState('live');
        addUserMarker(newPos);
        mapRef.current?.setCenter(new window.kakao.maps.LatLng(newPos.lat, newPos.lng));
        searchPlaces(selectedCategory, newPos);
      },
      () => { setLocationState((prev) => (prev === 'cached' ? 'cached' : 'denied')); },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  useEffect(() => {
    if (!mapReady || !mapContainerRef.current || mapRef.current) return;
    const cached = loadCachedPosition();
    const initialPos = cached ?? DEFAULT_POS;
    const center = new window.kakao.maps.LatLng(initialPos.lat, initialPos.lng);
    mapRef.current = new window.kakao.maps.Map(mapContainerRef.current, {
      center,
      level: cached ? 4 : 6,
    });
    if (cached) {
      setPosition(cached);
      setLocationState('cached');
      addUserMarker(cached);
      searchPlaces(selectedCategory, cached);
    }
    requestLiveLocation();
  }, [mapReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    if (position) searchPlaces(key, position);
  };

  const fmt = (m: number) => m < 1000 ? `${Math.round(m)}m` : `${(m / 1000).toFixed(1)}km`;
  const activeCat = CATEGORIES.find((c) => c.key === selectedCategory);

  const locationBadge = () => {
    if (locationState === 'live')
      return <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{s.live}</span>;
    if (locationState === 'cached')
      return <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600"><span className="h-2 w-2 rounded-full bg-amber-400" />{s.cached}</span>;
    if (locationState === 'locating')
      return <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600"><span className="inline-block h-2 w-2 animate-spin rounded-full border border-blue-500 border-t-transparent" />{s.locating}</span>;
    if (locationState === 'denied')
      return <button onClick={requestLiveLocation} className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 underline">{s.enableLocation}</button>;
    return null;
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button key={cat.key} onClick={() => handleCategoryChange(cat.key)}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${selectedCategory === cat.key ? 'bg-slate-950 text-white shadow-sm' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'}`}
          >
            <span>{cat.icon}</span><span>{cat.label}</span>
          </button>
        ))}
        <div className="ml-auto">{locationBadge()}</div>
      </div>

      {locationState === 'denied' && !position && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{s.locationDeniedMsg}</div>
      )}

      {activeCat?.tip && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <span className="shrink-0">💡</span><p>{activeCat.tip}</p>
        </div>
      )}

      <div ref={mapContainerRef} className="h-72 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md md:h-80" />

      <div>
        <p className="mb-3 text-sm font-semibold text-slate-500">
          {!position && locationState !== 'denied'
            ? s.checkingLocation
            : loading
            ? s.searching
            : s.resultsCount(places.length, activeCat?.label ?? '')}
        </p>
        {(loading || (!position && locationState !== 'denied')) && (
          <div className="flex items-center justify-center py-10">
            <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
          </div>
        )}
        {!loading && position && places.length === 0 && (
          <p className="rounded-xl border border-slate-200 bg-white py-8 text-center text-sm text-slate-500">{s.noResults}</p>
        )}
        {!loading && places.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
            {places.map((place, idx) => (
              <div key={place.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">{idx + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900">{place.name}</p>
                  {place.address && <p className="mt-0.5 truncate text-xs text-slate-500">{place.address}</p>}
                </div>
                <div className="shrink-0 flex flex-col items-end gap-1">
                  <span className="text-sm font-bold text-blue-600">{fmt(place.distance)}</span>
                  <a
                    href={`https://maps.google.com/?q=${place.lat},${place.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-xs font-medium text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    {s.directions}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
