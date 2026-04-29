import { PageContent } from '@/types/content';

export const healthContent: PageContent = {
  slug: 'health',
  eyebrow: 'Hỗ trợ y tế',
  title: 'Sức khỏe và khẩn cấp',
  subtitle:
    'Biết cách nhận điều trị, sử dụng bảo hiểm và tìm kiếm sự trợ giúp trong các tình huống khẩn cấp.',
  cards: [
    {
      emoji: '🏥',
      title: 'Phòng khám và Bệnh viện',
      description:
        'Hàn Quốc có hệ thống hai tầng rõ ràng — biết nơi nào cần đến giúp tiết kiệm thời gian và tiền bạc.',
      bullets: [
        'Phòng khám địa phương (의원/병원) xử lý hầu hết các vấn đề thông thường: cảm cúm, thương tích nhẹ, kê đơn thuốc',
        'Mang theo thẻ ARC và thẻ bảo hiểm y tế — hầu hết phòng khám tính 5.000–20.000 KRW sau bảo hiểm',
        'Bệnh viện đại học và bệnh viện đa khoa dành cho các bệnh nặng hơn; chờ đợi lâu hơn',
        'Nhiều phòng khám gần trường đại học có nhân viên nói tiếng Anh cơ bản — gọi điện trước nếu không chắc',
        'Để tìm phòng khám thân thiện với người nước ngoài, tìm kiếm "외국인 진료" gần khu vực của bạn',
      ],
      tip: 'Đây chỉ là thông tin chung — không phải lời khuyên y tế. Hãy tham khảo chuyên gia y tế có chuyên môn.',
    },
    {
      emoji: '💳',
      title: 'Bảo hiểm y tế quốc gia (NHIS)',
      description:
        'Hầu hết du học sinh nước ngoài đủ điều kiện tham gia bảo hiểm y tế công sau một thời gian lưu trú.',
      bullets: [
        'Người nước ngoài ở Hàn Quốc từ 6 tháng trở lên thường được tự động tham gia NHIS',
        'Sinh viên đại học có thể đủ điều kiện sớm hơn — kiểm tra với văn phòng quốc tế của trường',
        'Phí hàng tháng khác nhau; trường hoặc văn phòng quận (구청) có thể hỗ trợ đăng ký',
        'Sau khi đăng ký, bạn thường trả 30–50% phí phòng khám; phần còn lại được bảo hiểm',
        'Kiểm tra trạng thái tại nhis.or.kr hoặc gọi 1577-1000 (hỗ trợ đa ngôn ngữ)',
      ],
      tip: 'Quy tắc đủ điều kiện có thể thay đổi. Xác minh trực tiếp với NHIS hoặc trường đại học của bạn.',
    },
    {
      emoji: '💊',
      title: 'Nhà thuốc',
      description:
        'Nhà thuốc (약국) có khắp nơi và có thể xử lý nhiều vấn đề nhỏ mà không cần đến bác sĩ.',
      bullets: [
        'Bạn có thể mua thuốc không kê đơn trực tiếp — thuốc cảm, giảm đau, hỗ trợ tiêu hóa',
        'Với thuốc kê đơn, mang theo đơn thuốc (처방전) từ phòng khám',
        'Nhà thuốc thường mở đến 9–10 giờ tối; một số hoạt động 24 giờ ở các khu vực lớn hơn',
        'Dược sĩ có thể hướng dẫn cơ bản — chỉ tay và dùng ứng dụng dịch thuật hoạt động tốt trong hầu hết trường hợp',
      ],
      tip: 'Nhờ dược sĩ ghi rõ hướng dẫn dùng thuốc. Giữ lại bao bì thuốc để tham khảo.',
    },
    {
      emoji: '🚨',
      title: 'Số liên lạc khẩn cấp',
      description: 'Lưu các số này trước khi cần.',
      bullets: [
        '119 — Cứu thương và cứu hỏa (có hỗ trợ tiếng Anh cơ bản)',
        '112 — Cảnh sát (khẩn cấp hình sự)',
        '1339 — Đường dây tư vấn y tế, 24 giờ (một số hỗ trợ tiếng Anh)',
        '1345 — Đường dây hỗ trợ người nước ngoài, 24 giờ, đa ngôn ngữ',
        'Số trung tâm y tế trường đại học — hữu ích cho các trường hợp không khẩn cấp',
      ],
      tip: 'Lưu tất cả các số này vào điện thoại ngay bây giờ. Trong tình huống khẩn cấp thực sự, mỗi giây đều quan trọng.',
    },
    {
      emoji: '🧠',
      title: 'Sức khỏe tâm thần',
      description: 'Thích nghi với một đất nước mới thực sự rất khó. Có hỗ trợ sẵn sàng.',
      bullets: [
        'Nhiều trường đại học cung cấp dịch vụ tư vấn miễn phí cho sinh viên — kiểm tra cổng thông tin sinh viên',
        'Đường dây hỗ trợ khủng hoảng Hàn Quốc: 1393 (24 giờ, tiếng Hàn; một số hỗ trợ tiếng Anh)',
        'Dịch vụ sức khỏe tâm thần quốc tế khác nhau theo thành phố — hỏi văn phòng quốc tế để được giới thiệu',
        'Các ứng dụng như Talkspace hoặc BetterHelp hoạt động tại Hàn Quốc nếu cần trị liệu bằng tiếng Anh',
      ],
      tip: 'Gặp khó khăn không phải là điều bất thường khi sống ở nước ngoài. Tìm kiếm sự giúp đỡ sớm luôn là quyết định đúng đắn.',
    },
  ],
};
