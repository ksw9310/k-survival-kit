import { PageContent } from '@/types/content';

export const cultureContent: PageContent = {
  slug: 'culture',
  eyebrow: '社会の基本',
  title: '韓国文化のヒント',
  subtitle:
    'こうした習慣を知っておくと、誤解を減らし、より早く適応しやすくなります。',
  cards: [
    {
      emoji: '👀',
      title: '空気を読む',
      description: '韓国では間接的な伝え方がよくあります。',
      bullets: [
        'やわらかい返答でも断りを意味することがあります',
        '言い方や雰囲気を見ます',
        '相手の反応を観察します',
      ],
      tip: '文脈はとても大事です。',
    },
    {
      emoji: '🙏',
      title: '敬意',
      description: '年齢や上下関係は韓国社会で重要です。',
      bullets: ['年上の人への敬意を意識します', '丁寧な動作を心がけます'],
      tip: '小さな礼儀でも大きな違いになります。',
    },
    {
      emoji: '🚇',
      title: '公共マナー',
      description: '公共の場では静かな行動が期待されることが多いです。',
      bullets: [
        '声の大きさを抑える',
        'スピーカー音を出さない',
        '優先席のマナーを守る',
      ],
      tip: '公共の場では静かめを基本にすると安全です。',
    },
  ],
};
