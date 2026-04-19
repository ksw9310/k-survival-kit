import { PageContent } from '@/types/content';

export const cultureContent: PageContent = {
  slug: 'culture',
  eyebrow: '社交基础',
  title: '韩国文化小贴士',
  subtitle: '这些习惯能帮助你减少误会，更快适应韩国生活。',
  cards: [
    {
      emoji: '👀',
      title: '察言观色',
      description: '间接表达在韩国很常见。',
      bullets: ['委婉回答有时其实是在拒绝', '注意语气', '多观察对方反应'],
      tip: '语境往往很重要。',
    },
    {
      emoji: '🙏',
      title: '尊重',
      description: '年龄和上下关系在韩国很重要。',
      bullets: ['尊重年长者', '多使用礼貌动作'],
      tip: '小小的尊重会带来很大的差别。',
    },
    {
      emoji: '🚇',
      title: '公共礼仪',
      description: '在公共场所通常会期待你保持安静。',
      bullets: ['说话声音放低', '不要外放声音', '注意让座礼仪'],
      tip: '在公共场合安静一点通常最稳妥。',
    },
  ],
};
