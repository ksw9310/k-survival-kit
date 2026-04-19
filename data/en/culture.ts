import { PageContent } from '@/types/content';

export const cultureContent: PageContent = {
  slug: 'culture',
  eyebrow: 'Social Basics',
  title: 'Korean Culture Tips',
  subtitle:
    'These habits will help you avoid misunderstandings and adapt faster.',
  cards: [
    {
      emoji: '👀',
      title: 'Reading the Room',
      description: 'Indirect communication is common.',
      bullets: ['Soft answer may mean no', 'Watch tone', 'Observe reactions'],
      tip: 'Context matters a lot.',
    },
    {
      emoji: '🙏',
      title: 'Respect',
      description: 'Hierarchy matters.',
      bullets: ['Respect older people', 'Use polite gestures'],
      tip: 'Small respect makes big difference.',
    },
    {
      emoji: '🚇',
      title: 'Public Manners',
      description: 'Quiet behavior is expected.',
      bullets: ['Keep voice low', 'No speaker sound', 'Respect seats'],
      tip: 'Stay quiet in public.',
    },
  ],
};
