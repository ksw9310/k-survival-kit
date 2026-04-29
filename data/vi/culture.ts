import { PageContent } from '@/types/content';

export const cultureContent: PageContent = {
  slug: 'culture',
  eyebrow: 'Cơ bản xã hội',
  title: 'Mẹo văn hóa Hàn Quốc',
  subtitle:
    'Những thói quen này sẽ giúp bạn tránh hiểu lầm và thích nghi nhanh hơn.',
  cards: [
    {
      emoji: '👀',
      title: 'Đọc không khí',
      description: 'Giao tiếp gián tiếp rất phổ biến.',
      bullets: ['Câu trả lời nhẹ có thể có nghĩa là không', 'Chú ý giọng điệu', 'Quan sát phản ứng'],
      tip: 'Bối cảnh quan trọng rất nhiều.',
    },
    {
      emoji: '🙏',
      title: 'Tôn trọng',
      description: 'Thứ bậc rất quan trọng.',
      bullets: ['Tôn trọng người lớn tuổi hơn', 'Dùng cử chỉ lịch sự'],
      tip: 'Sự tôn trọng nhỏ tạo ra sự khác biệt lớn.',
    },
    {
      emoji: '🚇',
      title: 'Cách cư xử nơi công cộng',
      description: 'Hành vi yên lặng được mong đợi.',
      bullets: ['Giữ giọng nhỏ', 'Không bật loa ngoài', 'Tôn trọng ghế ngồi'],
      tip: 'Giữ yên lặng ở nơi công cộng.',
    },
  ],
};
