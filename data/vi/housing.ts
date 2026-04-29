import { PageContent } from '@/types/content';

export const housingContent: PageContent = {
  slug: 'housing',
  eyebrow: 'Nơi bạn sống',
  title: 'Hướng dẫn nhà ở',
  subtitle:
    'Hiểu rõ các loại nhà ở, tiền đặt cọc, hợp đồng và rủi ro trước khi ký bất cứ thứ gì.',
  cards: [
    {
      emoji: '🏢',
      title: 'Các loại nhà ở',
      description:
        'Du học sinh tại Hàn Quốc thường chọn giữa ký túc xá, phòng trọ (원룸), goshiwon (고시원) hoặc nhà ở chung — mỗi loại có những đánh đổi rất khác nhau.',
      bullets: [
        'Ký túc xá trường đại học: Lựa chọn dễ nhất và an toàn nhất cho học kỳ đầu. Đăng ký sớm vì chỗ hết rất nhanh.',
        'Phòng trọ (원룸): Phòng studio riêng tư, thường 10–20㎡. Lựa chọn phổ biến nhất sau năm đầu. Thường cần đặt cọc 1.000.000–5.000.000 KRW cộng thuê tháng 300.000–600.000 KRW tùy vị trí.',
        'Officetel (오피스텔): Kết hợp giữa căn hộ dân dụng và văn phòng. Đắt hơn nhưng thường mới và tiện nghi hơn. Thường cần đặt cọc cao hơn.',
        'Goshiwon (고시원): Phòng riêng rất nhỏ (thường chỉ giường và bàn) trong tòa nhà chung có phòng tắm và đôi khi bếp chung. Rẻ nhất — khoảng 200.000–400.000 KRW/tháng — nhưng không gian và riêng tư hạn chế.',
        'Nhà ở chung (쉐어하우스): Thuê phòng trong căn hộ chung. Rẻ hơn phòng riêng; thường có khu vực chung được trang bị nội thất.',
      ],
      tip: 'Đừng chọn nhà ở chỉ dựa trên giá. Cân nhắc thời gian đi lại, an toàn khu vực và tình trạng tòa nhà trước khi quyết định.',
    },
    {
      emoji: '💰',
      title: 'Đặt cọc & Thuê nhà (월세 vs 전세)',
      description:
        'Hàn Quốc có hệ thống thuê nhà độc đáo khiến hầu hết người mới đến bất ngờ. Hiểu rõ trước khi ký là điều cần thiết.',
      bullets: [
        'Wolse (월세): Thuê tháng tiêu chuẩn với tiền đặt cọc nhỏ (보증금). Phổ biến nhất với du học sinh nước ngoài. Đặt cọc thường 500.000–10.000.000 KRW, hoàn trả khi hết hợp đồng nếu không có hư hỏng.',
        'Jeonse (전세): Hệ thống đặt cọc một lần với số tiền rất lớn (thường hàng chục triệu KRW) và không trả tiền thuê hàng tháng. Chủ nhà hoàn trả 100% khi kết thúc. Không thực tế với hầu hết sinh viên nhưng quan trọng phải hiểu.',
        'Luôn xác nhận tổng chi phí hàng tháng — nhiều niêm yết chưa tính tiện ích. Hỏi rõ: "Có bao gồm điện, nước, gas, internet và phí quản lý (관리비) không?"',
        'Phí quản lý (관리비) được tính riêng trong hầu hết tòa nhà, thường 50.000–150.000 KRW/tháng.',
        'Chi phí tổng thể thông thường: phòng trọ ở Seoul gần trường đại học khoảng 500.000–800.000 KRW/tháng. Ngoài Seoul (Busan, Daejeon, Daegu) rẻ hơn 30–40%.',
      ],
      tip: 'Luôn yêu cầu tổng chi phí hàng tháng bằng văn bản trước khi đồng ý. Tiền đặt cọc là của bạn — nhưng chỉ khi bạn bảo vệ nó về mặt pháp lý.',
    },
    {
      emoji: '📝',
      title: 'Hợp đồng & Bảo vệ pháp lý',
      description:
        'Ký hợp đồng thuê nhà tại Hàn Quốc mà không biết những điều cơ bản có thể khiến bạn mất tiền đặt cọc.',
      bullets: [
        'Không bao giờ trả đặt cọc hoặc tiền thuê mà không có hợp đồng văn bản đã ký (임대차계약서). Thỏa thuận miệng không có hiệu lực pháp lý.',
        'Đăng ký hợp đồng thuê (전입신고) tại văn phòng quận địa phương (주민센터) trong vòng 14 ngày sau khi chuyển đến. Điều này bảo vệ tiền đặt cọc của bạn về mặt pháp lý.',
        'Kiểm tra tài liệu đăng ký tài sản (등기부등본) trước khi ký — môi giới bất động sản (부동산) có thể lấy cho bạn. Nó cho thấy liệu có thế chấp hiện có trên tài sản có thể gây nguy hiểm cho tiền đặt cọc của bạn.',
        'Chụp ảnh hoặc quay video có dấu thời gian mọi phòng, tường và thiết bị trước khi chuyển vào. Chia sẻ qua KakaoTalk với chủ nhà để tạo hồ sơ.',
        'Thời hạn hợp đồng thường là 12 hoặc 24 tháng. Kiểm tra kỹ điều khoản chấm dứt — phá vỡ hợp đồng sớm thường bị phạt.',
      ],
      tip: 'Đăng ký hợp đồng thuê và kiểm tra đăng ký tài sản là hai việc quan trọng nhất để bảo vệ tiền đặt cọc. Hầu hết sinh viên bỏ qua điều này — đừng như vậy.',
    },
    {
      emoji: '🔍',
      title: 'Tìm nhà ở',
      description:
        'Biết nơi nào để tìm — và điều gì cần tránh — giúp tiết kiệm thời gian và bảo vệ bạn khỏi lừa đảo.',
      bullets: [
        'Naver Real Estate (네이버 부동산) và Zigbang (직방) là các nền tảng niêm yết phổ biến nhất. Niêm yết bao gồm ảnh, chi tiết đặt cọc/thuê và mặt bằng.',
        'Để được hỗ trợ bằng tiếng Anh, thử các nhóm Facebook thân thiện với người nước ngoài như "Seoul Foreigners Housing" hoặc tìm "[thành phố] foreigner housing".',
        'Sử dụng môi giới bất động sản có giấy phép (공인중개사) an toàn hơn là giao dịch trực tiếp với chủ nhà. Môi giới tính hoa hồng theo quy định pháp luật (thường 0,3–0,5% đặt cọc + tiền thuê hàng năm).',
        'Cẩn thận với các niêm yết rẻ hơn đáng kể so với mức trung bình khu vực — giá quá tốt đôi khi liên quan đến gian lận hoặc vấn đề ẩn.',
        'Nhiều trường đại học có danh sách nhà ở ngoại trú được xác minh. Kiểm tra văn phòng quốc tế hoặc cổng thông tin nhà ở trường trước.',
      ],
      tip: 'Đến xem trực tiếp ít nhất hai hoặc ba lựa chọn trước khi quyết định. Không bao giờ chuyển tiền đặt cọc vào tài khoản bạn không thể xác minh thuộc về chủ nhà hợp pháp.',
    },
    {
      emoji: '📦',
      title: 'Danh sách khi chuyển vào',
      description: '48 giờ đầu tiên trong nhà mới là quan trọng nhất để bảo vệ bản thân.',
      bullets: [
        'Chụp ảnh mọi thứ — tường, sàn, trần, thiết bị, cửa sổ. Tải lên KakaoTalk hoặc Google Drive ngay và chia sẻ với chủ nhà.',
        'Kiểm tra tất cả thiết bị: bình nước nóng, bếp gas, máy giặt, điều hòa và hệ thống sưởi (căn hộ Hàn Quốc thường dùng sưởi sàn / 온돌).',
        'Xác định vị trí hộp cầu dao điện và van khóa gas trong trường hợp khẩn cấp.',
        'Đăng ký địa chỉ mới (전입신고) tại 주민센터 gần nhất trong vòng 14 ngày — mang theo thẻ ARC và hợp đồng thuê.',
        'Cài đặt internet — hầu hết chủ nhà Hàn Quốc cho phép cài Gigabit LAN. KT, SKT Broadband và LG U+ là nhà cung cấp chính. Cài đặt thường mất 1–3 ngày.',
      ],
      tip: 'Hoàn thành đăng ký địa chỉ trong cùng tuần chuyển vào. Bước này bảo vệ toàn bộ tiền đặt cọc của bạn về mặt pháp lý.',
    },
  ],
};
