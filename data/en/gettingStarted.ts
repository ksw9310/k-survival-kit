import { PageContent } from '@/types/content';

export const gettingStartedContent: PageContent = {
  slug: 'getting-started',
  eyebrow: 'First Steps',
  title: 'Getting Started in Korea',
  subtitle:
    'These are the first things most international students should handle after arriving in Korea.',

  cards: [
    {
      emoji: '🪪',
      title: 'Alien Registration Card (ARC)',
      description:
        'One of the most important documents you will need in Korea.',
      bullets: [
        'Register within 90 days of arrival',
        'Bring passport, visa, school documents, and photo',
        'Reservation is required in most cases',
      ],
      tip: 'Processing usually takes 2–4 weeks, so apply early.',
    },
    {
      emoji: '📱',
      title: 'SIM Card',
      description: 'You will need a Korean phone number for daily life.',
      bullets: [
        'Airport SIM is easiest for first arrival',
        'Monthly plans are better for long stays',
        'Passport required for purchase',
      ],
      tip: 'Banking and delivery apps require a Korean number.',
    },
    {
      emoji: '🏦',
      title: 'Bank Account',
      description:
        'A local bank account is essential for payments and part-time jobs.',
      bullets: [
        'Easier after receiving your ARC',
        'Bring passport, ARC, and phone number',
        'Some banks restrict foreign accounts',
      ],
      tip: 'Woori, KB, and Shinhan are commonly used by students.',
    },
    {
      emoji: '🚇',
      title: 'Transportation Card',
      description: 'Use a T-money card for subway and buses.',
      bullets: [
        'Buy at convenience stores',
        'Recharge anytime',
        'Works nationwide',
      ],
      tip: 'You will use this every day.',
    },
    {
      emoji: '🏥',
      title: 'Health Insurance',
      description: 'National Health Insurance is required for long-term stay.',
      bullets: [
        'Automatically applied after 6 months',
        'Monthly fee required',
        'Covers hospital visits',
      ],
      tip: 'Without it, hospital costs can be very high.',
    },
    {
      emoji: '🏠',
      title: 'Housing',
      description: 'Finding housing in Korea can be complex.',
      bullets: [
        'Large deposits are common (Jeonse/Wolse)',
        'Check contract carefully',
        'Avoid unofficial deals',
      ],
      tip: 'Ask school or trusted agents before signing.',
    },
    {
      emoji: '💼',
      title: 'Part-time Job',
      description: 'Students can work part-time under certain conditions.',
      bullets: [
        'Work permit required',
        'Visa restrictions apply',
        'Minimum wage guaranteed',
      ],
      tip: 'Working without permission can cause visa issues.',
    },
    {
      emoji: '🚨',
      title: 'Emergency Contacts',
      description: 'Know important numbers for emergencies.',
      bullets: ['Police: 112', 'Ambulance: 119', 'University support office'],
      tip: 'Save these numbers in your phone.',
    },
  ],
};
