import { PageContent } from '@/types/content';

export const healthContent: PageContent = {
  slug: 'health',
  eyebrow: '医疗帮助',
  title: '医疗与紧急情况',
  subtitle: '了解如何看病、使用保险，以及在紧急情况下该怎么做。',
  cards: [
    {
      emoji: '🏥',
      title: '诊所',
      description: '小病小痛通常先去诊所。',
      bullets: [
        '先考虑去诊所就诊',
        '携带身份证明和保险信息',
        '严重情况再去大型医院',
      ],
      tip: '不要因为不熟悉制度而拖太久。',
    },
    {
      emoji: '💳',
      title: '保险',
      description: '保险资格通常和你的签证情况有关。',
      bullets: ['尽早确认自己是否符合资格', '了解保障范围', '确认每月费用'],
      tip: '不清楚时可以先询问学校。',
    },
    {
      emoji: '🚨',
      title: '紧急情况',
      description: '提前记住重要的紧急联系电话。',
      bullets: ['119 救护车', '112 警察'],
      tip: '把这些号码提前存进手机。',
    },
  ],
};
