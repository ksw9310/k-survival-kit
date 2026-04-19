import { PageContent } from '@/types/content';

export const visaContent: PageContent = {
  slug: 'visa',
  eyebrow: 'Stay Legal',
  title: 'Visa & Immigration',
  subtitle:
    'Understand your visa type, how to extend your stay, and what to do if something goes wrong.',
  cards: [
    {
      emoji: '🎓',
      title: 'D-2 Student Visa',
      description:
        'Generally the most common visa category for international students enrolled at Korean universities. Confirm your specific type with your university.',
      bullets: [
        'Typically obtained before arrival through a Korean embassy or consulate — requirements vary by country',
        'Usually linked to active university enrollment — changes in enrollment status may affect visa validity',
        'Some D-2 holders may be permitted limited part-time work; always confirm conditions with immigration or your school',
        'Foreign nationals staying over 90 days are generally required to apply for an ARC card — verify current rules at immigration.go.kr',
      ],
      tip: 'Keep your Certificate of Enrollment (재학증명서) on hand — it is commonly requested. Requirements can change, so confirm with your university international office.',
    },
    {
      emoji: '🔄',
      title: 'Visa Extension',
      description:
        'Extensions are generally handled before expiry. Processing times and requirements can vary.',
      bullets: [
        'Applications can typically be submitted at an Immigration Office (출입국관리사무소) or via the HiKorea portal (hikorea.go.kr) — check which applies to your situation',
        'Commonly required documents include passport, ARC card, Certificate of Enrollment, and tuition payment proof — verify the current list at hikorea.go.kr',
        'Applying well in advance (often at least 4–6 weeks) is strongly advisable to allow processing time',
        'Fees vary by duration and visa type — check the official immigration website for current amounts',
      ],
      tip: 'Immigration office wait times can be long. Check hikorea.go.kr for current requirements before your visit, as rules are updated periodically.',
    },
    {
      emoji: '🌍',
      title: 'Other Visa Types',
      description:
        'Korea offers several visa categories. The rules below are general — always verify your specific situation officially.',
      bullets: [
        'D-4 (Language Training): generally for students at language institutes, not full degree programs',
        'F-1 (Family): typically for dependents of Korean residents; work rights depend on specific permit conditions',
        'Working Holiday: available to certain nationalities within specific age ranges — eligibility and quotas vary; check with the Korean embassy in your country',
        'D-10 (Job Seeker): may be available after completing a degree in Korea; conditions and duration are set by immigration',
      ],
      tip: "Visa conditions differ significantly between categories and individual circumstances. Your school's international office or a certified immigration consultant can help clarify your specific situation.",
    },
    {
      emoji: '🏢',
      title: 'Immigration Office',
      description:
        'The Hi Korea portal and local offices handle most immigration matters.',
      bullets: [
        'Find office locations and book appointments at immigration.go.kr or hikorea.go.kr',
        'Wait times can be long — booking in advance is recommended where possible',
        'Bring originals and copies of all documents; requirements may differ by case',
        'Immigration foreigner helpline (multilingual support): 1345',
      ],
      tip: 'Check hikorea.go.kr for your specific requirements before visiting. The information on this site is for general guidance only.',
    },
    {
      emoji: '⚠️',
      title: 'Overstay & Violations',
      description:
        'Staying beyond your authorized period can have serious legal consequences.',
      bullets: [
        'Penalties for overstaying can include fines, restrictions on future visas, or deportation — severity depends on circumstances',
        'It is strongly advisable to resolve any visa status issues before your authorized stay expires',
        "If you have concerns about your visa status, contact the immigration helpline (1345) or consult your school's international office promptly",
        "If your passport is lost or stolen, notify your home country's embassy or consulate as a first step",
      ],
      tip: 'This information is for general awareness only and does not constitute legal advice. If you have a specific immigration concern, seek guidance from a qualified immigration professional or official authority.',
    },
  ],
};
