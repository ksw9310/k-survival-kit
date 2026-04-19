import { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  introTitle: '留学生のための韓国生活実用ガイド',
  introDesc:
    '今必要なテーマから見始めて、少しずつ広げていけば大丈夫です。この構成のほうが読みやすく、あとからの拡張もしやすいです。',
  categories: [
    {
      href: '/getting-started',
      title: 'はじめに',
      description: 'ARC、SIMカード、銀行口座、到着後最初の1週間で必要なこと。',
    },
    {
      href: '/daily-life',
      title: '日常生活',
      description: '交通、買い物、配達アプリ、ゴミのルール。',
    },
    {
      href: '/health',
      title: '医療',
      description: '病院、保険、薬局、緊急連絡先。',
    },
    {
      href: '/housing',
      title: '住居',
      description: '寮、ワンルーム、保証金、賃貸契約。',
    },
    {
      href: '/culture',
      title: '文化',
      description: '基本的な礼儀、社会ルール、公共マナー。',
    },
    {
      href: '/visa',
      title: 'ビザと在留管理',
      description: 'ビザの種類、外国人登録証、延長手続き、在留管理のルール。',
    },
  ],
};
