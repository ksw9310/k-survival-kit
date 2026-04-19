import { PageContent } from '@/types/content';

export const housingContent: PageContent = {
  slug: 'housing',
  eyebrow: 'Where You Live',
  title: 'Housing Guide',
  subtitle:
    'Understand housing types, deposits, contracts, and risks before signing anything.',
  cards: [
    {
      emoji: '🏢',
      title: 'Housing Types',
      description:
        'Students in Korea typically choose between dorms, one-rooms (원룸), goshiwons (고시원), or shared housing — each with very different trade-offs.',
      bullets: [
        'University dorms: Easiest and safest option for your first semester. Apply early — spots fill up fast, especially at competitive schools.',
        'One-room apartments (원룸): Your own private studio, usually 10–20㎡. Most common choice for students after their first year. Typically requires a deposit of 1,000,000–5,000,000 KRW plus monthly rent of 300,000–600,000 KRW depending on location.',
        'Officetel (오피스텔): A mix between a residential apartment and an office space. More expensive, but often newer and better equipped. Usually needs a higher deposit.',
        'Goshiwon (고시원): Very small private rooms (often just a bed and desk) in a shared building with communal bathrooms and sometimes kitchens. Cheapest option — around 200,000–400,000 KRW/month — but limited space and privacy.',
        'Shared housing (쉐어하우스): Rent a room in a shared apartment. Cheaper than a private one-room; often comes with furnished common areas. Popular among students wanting a social environment.',
      ],
      tip: 'Do not choose housing based on price alone. Factor in commute time, safety of the neighborhood, and building condition before deciding.',
    },
    {
      emoji: '💰',
      title: 'Deposits & Rent (월세 vs 전세)',
      description:
        'Korea has a unique rental system that surprises most new arrivals. Understanding it before you sign is essential.',
      bullets: [
        'Wolse (월세): Standard monthly rent with a smaller upfront deposit (보증금). Most common for foreign students. Deposit is typically 500,000–10,000,000 KRW, returned at the end of your lease if there is no damage.',
        'Jeonse (전세): A lump-sum deposit system where you pay a very large sum (often tens of millions of KRW) upfront and pay zero monthly rent. The landlord returns 100% at the end. Not practical for most students but important to understand.',
        'Always confirm the full monthly cost — many listings quote rent without utilities. Ask explicitly: "Does this include electricity, water, gas, internet, and management fees (관리비)?"',
        'Management fees (관리비) are charged separately in most buildings, typically 50,000–150,000 KRW/month. They often cover cleaning common areas, elevator use, and building insurance.',
        'Typical total cost for a student: one-room in Seoul near a university runs 500,000–800,000 KRW/month all-in. Outside Seoul (Busan, Daejeon, Daegu) tends to be 30–40% cheaper.',
      ],
      tip: 'Always ask for the total monthly cost in writing before agreeing to anything. "Deposit" money is yours — but only if you protect it legally (see the Contracts card below).',
    },
    {
      emoji: '📝',
      title: 'Contracts & Legal Protection',
      description:
        'Signing a rental contract in Korea without knowing the basics can cost you your deposit. Take these steps seriously.',
      bullets: [
        'Never pay a deposit or rent without a signed written contract (임대차계약서). Verbal agreements are not enforceable.',
        'Register your lease (전입신고) at your local district office (주민센터) within 14 days of moving in. This legally protects your deposit if the landlord defaults or the property is sold.',
        'Check the property registration document (등기부등본) before signing — a real estate agent (부동산) can pull this for you. It shows whether there are existing mortgages on the property that could endanger your deposit.',
        'Take time-stamped photos or videos of every room, wall, and appliance before moving in. Share them with the landlord via KakaoTalk to create a record. This protects you from unfair deductions when you leave.',
        'Your lease period is usually 12 or 24 months. Check the termination clause carefully — breaking a lease early often incurs a penalty.',
      ],
      tip: 'Registering your lease and checking the property registration are the two most important things you can do to protect your deposit. Most students skip this — do not.',
    },
    {
      emoji: '🔍',
      title: 'Finding Housing',
      description:
        'Knowing where to look — and what to avoid — saves you time and protects you from scams.',
      bullets: [
        'Naver Real Estate (네이버 부동산) and Zigbang (직방) are the most popular listing platforms. Listings include photos, deposit/rent details, and floor plans.',
        'For English-language support, try Foreigner-friendly Facebook groups such as "Seoul Foreigners Housing" or search "[your city] foreigner housing" — many landlords who rent to foreigners advertise there.',
        'Going through a licensed real estate agent (공인중개사) is safer than dealing directly with landlords. Agents charge a legally capped commission (typically 0.3–0.5% of the deposit + annual rent).',
        'Be cautious of listings that are significantly cheaper than average for the area — too-good-to-be-true prices are sometimes associated with fraud or hidden problems.',
        'Many universities maintain a list of verified off-campus housing options or partnerships with nearby landlords. Check your international office or school housing portal first.',
      ],
      tip: 'Visit at least two or three options in person before deciding. Never transfer a deposit to an account you cannot verify belongs to the legal landlord.',
    },
    {
      emoji: '📦',
      title: 'Moving In Checklist',
      description:
        'The first 48 hours in your new place are the most important for protecting yourself.',
      bullets: [
        'Photograph everything — walls, floors, ceiling, appliances, windows. Upload to KakaoTalk or Google Drive immediately and share with your landlord.',
        'Test all appliances: water heater, gas range, washing machine, AC unit, and any heating system (Korean apartments often use under-floor heating / 온돌).',
        'Locate the electricity breaker box and gas shutoff valve in case of emergencies.',
        'Register your new address (전입신고) at the nearest 주민센터 within 14 days — bring your ARC card and lease contract.',
        'Set up internet — most Korean landlords allow or facilitate Gigabit LAN installation. KT, SKT Broadband, and LG U+ are the main providers. Installation usually takes 1–3 days.',
      ],
      tip: 'Complete the address registration the same week you move in. This one step legally protects your entire deposit.',
    },
  ],
};
