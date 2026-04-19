import { PageContent } from '@/types/content';

export const healthContent: PageContent = {
  slug: 'health',
  eyebrow: 'Medical Help',
  title: 'Health and Emergency',
  subtitle:
    'Know how to get treatment, use insurance, and find help in urgent situations.',
  cards: [
    {
      emoji: '🏥',
      title: 'Clinics vs Hospitals',
      description:
        'Korea has a clear two-tier system — knowing which to visit saves time and money.',
      bullets: [
        'Local clinics (의원/병원) handle most everyday issues: colds, minor injuries, prescriptions',
        'Bring your ARC card and health insurance card — most clinics charge 5,000–20,000 KRW after insurance',
        'University hospitals and general hospitals are for more serious conditions; expect longer waits',
        'Many clinics near universities have basic English-speaking staff — call ahead if unsure',
        'For recommended international-friendly clinics, search "외국인 진료" near your area',
      ],
      tip: 'This is general information only — not medical advice. For health concerns, consult a qualified medical professional in person.',
    },
    {
      emoji: '💳',
      title: 'National Health Insurance (NHIS)',
      description:
        'Most foreign students become eligible for public health insurance after a period of stay.',
      bullets: [
        'Foreign nationals who have stayed in Korea for 6+ months are generally enrolled automatically in NHIS',
        "Students enrolled at universities may be eligible earlier — check with your school's international office",
        'Monthly premiums vary; your school or district office (구청) can help with registration',
        'Once enrolled, you typically pay 30–50% of clinic fees; the rest is covered',
        'Check your status at nhis.or.kr or call 1577-1000 (multilingual support available)',
      ],
      tip: 'Insurance eligibility rules can change. Verify your status directly with NHIS (nhis.or.kr) or your university, not solely based on this page.',
    },
    {
      emoji: '💊',
      title: 'Pharmacies',
      description:
        'Pharmacies (약국) are everywhere and can handle many minor issues without a doctor visit.',
      bullets: [
        'You can buy common over-the-counter medicines directly — cold medicine, pain relief, digestive aids',
        'For prescription medicine, bring your prescription (처방전) from the clinic',
        'Pharmacies are usually open until 9–10 PM; some operate 24 hours in larger areas',
        'Pharmacists can give basic guidance — pointing and using a translation app works fine in most cases',
      ],
      tip: 'Ask your pharmacist to write the dosage instructions clearly. Keep medication packaging for reference.',
    },
    {
      emoji: '🚨',
      title: 'Emergency Contacts',
      description: 'Save these before you need them.',
      bullets: [
        '119 — Ambulance and fire (operators have basic English assistance available)',
        '112 — Police (criminal emergencies)',
        '1339 — Medical advice hotline, 24 hours (some English support)',
        '1345 — Foreign residents helpline, 24 hours, multilingual',
        'Your university health center number — useful for non-emergencies during campus hours',
      ],
      tip: 'Save all of these in your phone now. In a real emergency, every second matters.',
    },
    {
      emoji: '🧠',
      title: 'Mental Health',
      description:
        'Adjusting to a new country is genuinely hard. Support is available.',
      bullets: [
        'Many universities offer free counseling services for enrolled students — check your student portal',
        'Korea Suicide and Crisis Hotline: 1393 (24 hours, Korean; some English support)',
        'International mental health services vary by city — ask your international office for a referral',
        'Apps like Talkspace or BetterHelp work in Korea if English-language therapy is needed',
      ],
      tip: 'Struggling is not unusual when living abroad. Reaching out early is always the right call.',
    },
  ],
};
