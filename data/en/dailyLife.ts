import { PageContent } from '@/types/content';

export const dailyLifeContent: PageContent = {
  slug: 'daily-life',
  eyebrow: 'Everyday Basics',
  title: 'Daily Life in Korea',
  subtitle:
    'The day-to-day things you will deal with most often as a student living in Korea.',
  cards: [
    {
      emoji: '🚇',
      title: 'Getting Around (Transport)',
      description:
        "Korea's public transport network is fast, affordable, and easy to navigate once you know the basics.",
      bullets: [
        'Get a T-money card (티머니 카드) at any convenience store for around 3,000 KRW. Load money onto it and use it for subway, bus, and even some taxis. It saves you money versus single-trip tickets.',
        'Subway fares start at around 1,400–1,500 KRW and increase slightly with distance. Transfers between subway and bus within 30 minutes cost nothing extra if you swipe your T-money card.',
        'Naver Maps (네이버 지도) is the most accurate navigation app in Korea — it shows real-time bus arrivals, subway routes, walking paths, and even taxi estimates. Download it before you arrive.',
        'KakaoTaxi is the dominant taxi app. Taxis are metered and generally safe. A basic fare starts around 4,800 KRW (daytime). Keep your address saved in Korean for the driver.',
        'Intercity travel: KTX (high-speed rail) connects Seoul to Busan in about 2.5 hours. Buy tickets via Korail (korail.com) or the KORAIL app. Student discounts are sometimes available.',
      ],
      tip: 'Keep at least 5,000–10,000 KRW on your T-money card at all times. Running out mid-commute is a real inconvenience.',
    },
    {
      emoji: '🛒',
      title: 'Groceries & Shopping',
      description:
        'Korea has a range of options for food shopping — from mega-marts to 24-hour convenience stores to online delivery.',
      bullets: [
        'Large marts (이마트, 롯데마트, 홈플러스) are your best bet for bulk groceries at reasonable prices. Look for these near major subway stations. Bring reusable bags — single-use plastic bags cost extra.',
        'Convenience stores (GS25, CU, 7-Eleven) are everywhere — often within a 2-minute walk. Great for quick meals, snacks, and basics. Prices are 20–40% higher than marts for the same items.',
        'Traditional markets (시장) often have the freshest produce and best prices. Worth exploring on weekends.',
        "Coupang (쿠팡) is Korea's dominant online marketplace. With a paid membership (Rocket Wow), many items arrive next day or even within hours. Excellent for non-perishables and household goods.",
        'For imported goods (Western cereal, cheese, specific condiments), try Costco (membership required) or specialty import sections at large marts.',
      ],
      tip: "If you're on a budget, shopping at local markets or large marts once a week saves significantly more than relying on convenience stores.",
    },
    {
      emoji: '🗑️',
      title: 'Trash & Recycling Rules',
      description:
        'Korea has some of the strictest waste disposal rules in the world. Getting this wrong can result in fines.',
      bullets: [
        'General trash (일반쓰레기) must go in officially designated plastic bags (종량제 봉투), sold at convenience stores and supermarkets. Do not use random plastic bags — it causes real problems.',
        'Recyclables (재활용) go in a separate bin — no bag needed. This includes: paper/cardboard, plastic containers (rinse them first), glass bottles, cans, and styrofoam. Each type usually has a labeled bin in your building.',
        'Food waste (음식물쓰레기) is collected separately — most apartment buildings have a dedicated container or RFID bin near the entrance.',
        'Large items (old furniture, appliances) cannot go in regular trash. You need to purchase a "large item disposal sticker" (대형폐기물 스티커) from your local district office before leaving items on the street.',
        'Trash pickup times vary by building — most collect in the evening or early morning. Ask your building manager (관리자) for the schedule.',
      ],
      tip: 'Your first week: ask a neighbor or building manager where each bin is located. Getting this wrong causes genuine problems with neighbors.',
    },
    {
      emoji: '💳',
      title: 'Payments & Banking',
      description:
        'Understanding how money works in everyday Korea saves confusion from day one.',
      bullets: [
        'Card payments are widely accepted — most restaurants, cafes, convenience stores, and taxis take foreign Visa/Mastercard. Carry some cash as backup; small local restaurants may be cash-only.',
        'ATMs at KEB Hana Bank, Woori Bank, and many convenience store ATMs (GS25, CU) accept foreign cards. Use the "Global ATM" or "English" option.',
        'KakaoPay and Naver Pay are the dominant digital wallet apps. Setting these up requires a Korean bank account, but once done they make most everyday payments frictionless.',
        'Tipping is not customary in Korea and can sometimes cause awkwardness. Prices are as listed — no service charge expected.',
        'Toss (토스) is a popular Korean fintech app for sending money between friends instantly. Many students use this for splitting restaurant bills or shared costs.',
      ],
      tip: 'Opening a Korean bank account as soon as you have your ARC card makes daily payments much easier. See the Getting Started section for which banks are most foreigner-friendly.',
    },
    {
      emoji: '📱',
      title: 'Essential Apps',
      description:
        'These apps are not optional — they are how daily life in Korea actually works.',
      bullets: [
        'KakaoTalk: The dominant messaging app in Korea — used by virtually everyone. Most real-world communications (with landlords, classmates, doctors, delivery services) happen here.',
        'Naver Maps: Far more accurate than Google Maps for Korea. Transit directions, walking routes, business hours, and bus real-time tracking.',
        'Baemin (배달의민족) or Coupang Eats: Food delivery apps. Essential for ordering food, especially on weeknights. Both work without perfect Korean — use filters and menu photos.',
        'Naver Papago or Google Translate: For on-the-spot translation. Papago has a camera mode that reads Korean text in real time, useful for menus, labels, and signs.',
        'Toss (토스): Mobile banking and money transfers. Easier to use than most Korean bank apps and works in English for basic functions.',
      ],
      tip: 'Set up KakaoTalk on your first day — without it, you will miss group chats, class announcements, and landlord communications.',
    },
    {
      emoji: '☀️',
      title: 'Weather & Seasons',
      description:
        'Korea has four distinct seasons, each requiring different preparation.',
      bullets: [
        'Spring (March–May): Mild and pleasant, but fine dust (미세먼지) from China can make air quality poor. Download an air quality app like "AirKorea" and check before outdoor plans.',
        'Summer (June–August): Hot and humid, with a rainy monsoon season (장마) in late June to mid-July. Carry a compact umbrella daily from late June onward.',
        'Autumn (September–November): The best season — cool, dry, and colorful.',
        'Winter (December–February): Cold but usually dry. Seoul regularly drops below -10°C. A proper winter coat, thermal layers, and good boots are essential.',
        'Ondol (온돌) underfloor heating is standard in Korean apartments — it heats the floor rather than the air. Very effective in winter once you get used to it.',
      ],
      tip: 'Fine dust (미세먼지) is a real health consideration in spring. KF94 masks (Korean standard, similar to N95) are widely available and recommended on high dust days.',
    },
  ],
};
