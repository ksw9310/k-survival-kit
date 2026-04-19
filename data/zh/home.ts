import { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  introTitle: '为国际留学生准备的韩国生活实用指南',
  introDesc:
    '先从你当前最需要的主题开始，再逐步扩展。这样的结构更容易阅读，也更方便后续扩展。',
  categories: [
    {
      href: '/getting-started',
      title: '入门指南',
      description: 'ARC、SIM卡、银行账户以及刚到韩国第一周需要处理的事项。',
    },
    {
      href: '/daily-life',
      title: '日常生活',
      description: '交通、买菜、外卖应用和垃圾分类规则。',
    },
    {
      href: '/health',
      title: '医疗',
      description: '医院、保险、药店和紧急联系电话。',
    },
    {
      href: '/housing',
      title: '住房',
      description: '宿舍、单间、公寓押金和租房合同。',
    },
    {
      href: '/culture',
      title: '文化',
      description: '基本礼仪、社交规则和公共场所礼节。',
    },
    {
      href: '/visa',
      title: '签证与出入境',
      description: '签证类型、外国人登录证、延期以及出入境规定。',
    },
  ],
};
