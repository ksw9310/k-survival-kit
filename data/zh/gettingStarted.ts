import { PageContent } from '@/types/content';

export const gettingStartedContent = {
  slug: 'getting-started',
  eyebrow: '初到韩国',
  title: '在韩国的第一步',
  subtitle: '以下是大多数留学生在到达韩国后需要尽快处理的事项。',
  cards: [
    {
      emoji: '🪪',
      title: '外国人登录证 (ARC)',
      description: '在韩国生活最重要的证件之一。',
      bullets: [
        '入境后90天内必须申请',
        '准备护照、签证、在学证明、照片',
        '通常需要提前预约',
      ],
      tip: '办理时间一般需要2–4周，建议尽早申请。',
    },
    {
      emoji: '📱',
      title: '手机卡',
      description: '很多服务都需要韩国手机号。',
      bullets: ['机场购买最方便', '长期建议办理月租套餐', '需要护照'],
      tip: '银行和外卖App都需要手机号。',
    },
    {
      emoji: '🏦',
      title: '银行账户',
      description: '用于转账、打工和日常支付。',
      bullets: [
        '拿到ARC后更容易办理',
        '需要护照、ARC、手机号',
        '部分银行限制外国人开户',
      ],
      tip: '友利银行、KB、Shinhan较常见。',
    },
    {
      emoji: '🚇',
      title: '交通卡',
      description: '使用T-money卡乘坐地铁和公交。',
      bullets: ['便利店即可购买', '可随时充值', '全国通用'],
      tip: '每天都会用到，非常重要。',
    },
    {
      emoji: '🏥',
      title: '健康保险',
      description: '长期居留必须加入国家健康保险。',
      bullets: ['通常6个月后自动加入', '需要每月缴费', '可报销医疗费用'],
      tip: '没有保险看病会非常贵。',
    },
    {
      emoji: '🏠',
      title: '住房',
      description: '在韩国找房较为复杂。',
      bullets: ['押金较高（全租/月租）', '务必仔细查看合同', '避免私下交易'],
      tip: '建议通过学校或正规中介。',
    },
    {
      emoji: '💼',
      title: '打工',
      description: '留学生可在条件允许下兼职。',
      bullets: ['需要打工许可', '受签证限制', '有最低工资标准'],
      tip: '非法打工可能影响签证。',
    },
    {
      emoji: '🚨',
      title: '紧急电话',
      description: '紧急情况必须知道的号码。',
      bullets: ['警察：112', '急救：119', '学校支援中心'],
      tip: '建议保存到手机中。',
    },
  ],
};
