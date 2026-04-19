import { PageContent } from '@/types/content';

export const healthContent: PageContent = {
  slug: 'health',
  eyebrow: '医療サポート',
  title: '医療と緊急時',
  subtitle:
    '病院のかかり方、保険の使い方、緊急時の対応を事前に確認しておきましょう。',
  cards: [
    {
      emoji: '🏥',
      title: 'クリニック',
      description: '軽い症状なら、まずはクリニックに行くことが多いです。',
      bullets: [
        'まずはクリニック受診を考えます',
        '身分証と保険情報を持参します',
        '重い症状なら大きな病院を利用します',
      ],
      tip: '制度に慣れていないからといって受診を先延ばしにしないほうが安全です。',
    },
    {
      emoji: '💳',
      title: '保険',
      description: '保険の適用はビザの状況によって変わることがあります。',
      bullets: [
        '早めに自分の対象可否を確認します',
        '補償内容を把握します',
        '毎月の費用も確認します',
      ],
      tip: '分からなければまず学校に相談するのが安全です。',
    },
    {
      emoji: '🚨',
      title: '緊急時',
      description: '重要な緊急連絡先は事前に把握しておきましょう。',
      bullets: ['119 は救急', '112 は警察'],
      tip: 'これらの番号は先にスマホへ保存しておくと安心です。',
    },
  ],
};
