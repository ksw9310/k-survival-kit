import { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  introTitle: 'Practical survival guide for international students in Korea',
  introDesc:
    'Start with the category you need now and expand from there. This structure is easier to manage, easier to read, and much better for scaling.',
  categories: [
    {
      href: '/getting-started',
      title: 'Getting Started',
      description: 'ARC, SIM card, bank account, and first-week essentials.',
    },
    {
      href: '/daily-life',
      title: 'Daily Life',
      description: 'Transport, groceries, delivery apps, and trash rules.',
    },
    {
      href: '/health',
      title: 'Health',
      description: 'Hospitals, insurance, pharmacies, and emergency contacts.',
    },
    {
      href: '/housing',
      title: 'Housing',
      description: 'Dorms, one-rooms, deposits, and rental contracts.',
    },
    {
      href: '/culture',
      title: 'Culture',
      description: 'Basic etiquette, social rules, and public manners.',
    },
    {
      href: '/visa',
      title: 'Visa & Immigration',
      description: 'Visa types, ARC card, extensions, and immigration rules.',
    },
  ],
};
