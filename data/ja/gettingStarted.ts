import { PageContent } from '@/types/content';

export const gettingStartedContent = {
  slug: 'getting-started',
  eyebrow: '最初のステップ',
  title: '韓国生活の始め方',
  subtitle: '韓国到着後、留学生が最初に行うべき重要な手続きです。',
  cards: [
    {
      emoji: '🪪',
      title: '外国人登録証 (ARC)',
      description: '韓国で最も重要な身分証明書の一つです。',
      bullets: [
        '入国後90日以内に申請',
        'パスポート、ビザ、在学証明書、写真が必要',
        '事前予約が必要な場合が多い',
      ],
      tip: '発行まで2〜4週間かかるため早めに申請してください。',
    },
    {
      emoji: '📱',
      title: 'SIMカード',
      description: '多くのサービスで韓国の電話番号が必要です。',
      bullets: [
        '空港での購入が便利',
        '長期は月額プランがおすすめ',
        'パスポートが必要',
      ],
      tip: '銀行や配達アプリに必須です。',
    },
    {
      emoji: '🏦',
      title: '銀行口座',
      description: '支払い・送金・アルバイトに必要です。',
      bullets: [
        'ARC取得後がスムーズ',
        'パスポート、ARC、電話番号が必要',
        '外国人制限がある銀行もある',
      ],
      tip: 'KB・新韓・ウリ銀行が一般的です。',
    },
    {
      emoji: '🚇',
      title: '交通カード',
      description: '地下鉄やバスで使用します。',
      bullets: ['コンビニで購入可能', '簡単にチャージできる', '全国で利用可能'],
      tip: '毎日使う必須アイテムです。',
    },
    {
      emoji: '🏥',
      title: '健康保険',
      description: '長期滞在者は加入が必要です。',
      bullets: ['6ヶ月後に自動加入', '月額保険料あり', '医療費をカバー'],
      tip: '未加入だと医療費が高額になります。',
    },
    {
      emoji: '🏠',
      title: '住居',
      description: '韓国の住宅契約は複雑です。',
      bullets: ['高額な保証金制度', '契約内容を必ず確認', '非公式取引は避ける'],
      tip: '学校や信頼できる仲介を利用しましょう。',
    },
    {
      emoji: '💼',
      title: 'アルバイト',
      description: '条件付きでアルバイト可能です。',
      bullets: ['許可が必要', 'ビザ制限あり', '最低賃金適用'],
      tip: '無許可労働はビザに影響します。',
    },
    {
      emoji: '🚨',
      title: '緊急連絡先',
      description: '緊急時に必要な番号です。',
      bullets: ['警察：112', '救急：119', '大学サポートセンター'],
      tip: 'スマホに保存しておきましょう。',
    },
  ],
};
