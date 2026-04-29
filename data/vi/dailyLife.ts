import { PageContent } from '@/types/content';

export const dailyLifeContent: PageContent = {
  slug: 'daily-life',
  eyebrow: 'Cơ bản hàng ngày',
  title: 'Cuộc sống hàng ngày tại Hàn Quốc',
  subtitle:
    'Những điều hàng ngày bạn sẽ phải xử lý nhiều nhất khi là du học sinh sống tại Hàn Quốc.',
  cards: [
    {
      emoji: '🚇',
      title: 'Di chuyển (Giao thông)',
      description:
        'Mạng lưới giao thông công cộng của Hàn Quốc nhanh, giá phải chăng và dễ điều hướng khi bạn biết những điều cơ bản.',
      bullets: [
        'Mua thẻ T-money (티머니 카드) tại bất kỳ cửa hàng tiện lợi nào với giá khoảng 3.000 KRW. Nạp tiền và dùng cho tàu điện ngầm, xe buýt và thậm chí một số taxi. Tiết kiệm hơn vé lẻ.',
        'Giá tàu điện ngầm bắt đầu từ khoảng 1.400–1.500 KRW và tăng nhẹ theo khoảng cách. Chuyển tiếp giữa tàu điện ngầm và xe buýt trong vòng 30 phút không mất thêm phí khi quẹt thẻ T-money.',
        'Naver Maps (네이버 지도) là ứng dụng điều hướng chính xác nhất tại Hàn Quốc — hiển thị xe buýt thời gian thực, tuyến tàu điện ngầm, đường đi bộ và ước tính taxi.',
        'KakaoTaxi là ứng dụng taxi chủ đạo. Taxi tính theo đồng hồ và thường an toàn. Giá cơ bản khoảng 4.800 KRW (ban ngày). Lưu địa chỉ của bạn bằng tiếng Hàn cho tài xế.',
        'Đi liên tỉnh: KTX (tàu cao tốc) kết nối Seoul với Busan trong khoảng 2,5 giờ. Mua vé qua Korail (korail.com) hoặc ứng dụng KORAIL.',
      ],
      tip: 'Luôn giữ ít nhất 5.000–10.000 KRW trên thẻ T-money. Hết tiền giữa chừng rất bất tiện.',
    },
    {
      emoji: '🛒',
      title: 'Mua sắm thực phẩm',
      description:
        'Hàn Quốc có nhiều lựa chọn mua sắm thực phẩm — từ siêu thị lớn đến cửa hàng tiện lợi 24 giờ đến giao hàng trực tuyến.',
      bullets: [
        'Siêu thị lớn (이마트, 롯데마트, 홈플러스) là lựa chọn tốt nhất để mua thực phẩm số lượng lớn với giá hợp lý. Mang túi tái sử dụng — túi nhựa dùng một lần tốn thêm tiền.',
        'Cửa hàng tiện lợi (GS25, CU, 7-Eleven) có khắp nơi — thường trong vòng 2 phút đi bộ. Tuyệt vời cho bữa ăn nhanh, đồ ăn vặt và nhu yếu phẩm. Giá cao hơn 20–40% so với siêu thị.',
        'Chợ truyền thống (시장) thường có nông sản tươi nhất và giá tốt nhất. Đáng khám phá vào cuối tuần.',
        'Coupang (쿠팡) là nền tảng thương mại điện tử chủ đạo của Hàn Quốc. Với thành viên trả phí (Rocket Wow), nhiều mặt hàng giao ngay hôm sau hoặc thậm chí trong vài giờ.',
        'Đối với hàng nhập khẩu (ngũ cốc phương Tây, phô mai, gia vị cụ thể), thử Costco (cần thành viên) hoặc khu nhập khẩu chuyên biệt tại siêu thị lớn.',
      ],
      tip: 'Nếu ngân sách hạn chế, mua sắm tại chợ địa phương hoặc siêu thị lớn một lần mỗi tuần tiết kiệm hơn nhiều so với cửa hàng tiện lợi.',
    },
    {
      emoji: '🗑️',
      title: 'Quy tắc rác & Tái chế',
      description:
        'Hàn Quốc có một trong những quy định xử lý rác thải nghiêm ngặt nhất thế giới. Vi phạm có thể bị phạt.',
      bullets: [
        'Rác thải thông thường (일반쓰레기) phải đựng trong túi nhựa được chỉ định chính thức (종량제 봉투), bán tại cửa hàng tiện lợi và siêu thị. Không dùng túi nhựa thông thường.',
        'Tái chế (재활용) bỏ vào thùng riêng — không cần túi. Bao gồm: giấy/bìa cứng, hộp nhựa (rửa sạch trước), chai thủy tinh, lon và xốp.',
        'Rác thực phẩm (음식물쓰레기) được thu gom riêng — hầu hết các tòa nhà chung cư có thùng chứa riêng hoặc thùng RFID gần lối vào.',
        'Đồ vật lớn (đồ nội thất cũ, thiết bị) không thể bỏ vào rác thường. Bạn cần mua "nhãn xử lý đồ vật lớn" (대형폐기물 스티커) từ văn phòng quận.',
        'Giờ thu rác khác nhau theo tòa nhà — hầu hết thu vào buổi tối hoặc sáng sớm. Hỏi quản lý tòa nhà (관리자) về lịch trình.',
      ],
      tip: 'Tuần đầu tiên: hỏi hàng xóm hoặc quản lý tòa nhà về vị trí từng thùng rác. Vi phạm gây ra vấn đề thực sự với hàng xóm.',
    },
    {
      emoji: '💳',
      title: 'Thanh toán & Ngân hàng',
      description:
        'Hiểu cách tiền hoạt động trong cuộc sống hàng ngày tại Hàn Quốc tránh nhầm lẫn từ ngày đầu.',
      bullets: [
        'Thanh toán thẻ được chấp nhận rộng rãi — hầu hết nhà hàng, quán cà phê, cửa hàng tiện lợi và taxi chấp nhận thẻ Visa/Mastercard nước ngoài.',
        'ATM tại KEB Hana Bank, Woori Bank và nhiều cửa hàng tiện lợi (GS25, CU) chấp nhận thẻ nước ngoài. Chọn tùy chọn "Global ATM" hoặc "English".',
        'KakaoPay và Naver Pay là ứng dụng ví điện tử chủ đạo. Cài đặt cần tài khoản ngân hàng Hàn Quốc.',
        'Tiền tip không phổ biến tại Hàn Quốc và đôi khi gây khó xử. Giá đã niêm yết — không cần phí dịch vụ.',
        'Toss (토스) là ứng dụng fintech Hàn Quốc phổ biến để chuyển tiền giữa bạn bè ngay lập tức.',
      ],
      tip: 'Mở tài khoản ngân hàng Hàn Quốc ngay sau khi có thẻ ARC giúp thanh toán hàng ngày dễ dàng hơn nhiều.',
    },
    {
      emoji: '📱',
      title: 'Ứng dụng thiết yếu',
      description:
        'Những ứng dụng này không phải tùy chọn — đây là cách cuộc sống hàng ngày tại Hàn Quốc thực sự hoạt động.',
      bullets: [
        'KakaoTalk: Ứng dụng nhắn tin chủ đạo tại Hàn Quốc — được hầu như mọi người sử dụng. Hầu hết giao tiếp thực tế (với chủ nhà, bạn học, bác sĩ, dịch vụ giao hàng) đều diễn ra ở đây.',
        'Naver Maps: Chính xác hơn Google Maps cho Hàn Quốc. Hướng dẫn giao thông công cộng, tuyến đường đi bộ, giờ mở cửa và theo dõi xe buýt thời gian thực.',
        'Baemin (배달의민족) hoặc Coupang Eats: Ứng dụng giao đồ ăn. Cần thiết để đặt thức ăn, đặc biệt vào các ngày trong tuần.',
        'Naver Papago hoặc Google Translate: Để dịch tại chỗ. Papago có chế độ camera đọc văn bản tiếng Hàn theo thời gian thực.',
        'Toss (토스): Ngân hàng di động và chuyển tiền. Dễ sử dụng hơn hầu hết ứng dụng ngân hàng Hàn Quốc.',
      ],
      tip: 'Cài đặt KakaoTalk vào ngày đầu tiên — nếu không có nó, bạn sẽ bỏ lỡ chat nhóm, thông báo lớp học và liên lạc với chủ nhà.',
    },
    {
      emoji: '☀️',
      title: 'Thời tiết & Mùa',
      description: 'Hàn Quốc có bốn mùa rõ rệt, mỗi mùa cần sự chuẩn bị khác nhau.',
      bullets: [
        'Mùa xuân (tháng 3–5): Ôn hòa và dễ chịu, nhưng bụi mịn (미세먼지) từ Trung Quốc có thể làm chất lượng không khí kém. Tải ứng dụng chất lượng không khí như "AirKorea".',
        'Mùa hè (tháng 6–8): Nóng và ẩm, với mùa mưa gió mùa (장마) từ cuối tháng 6 đến giữa tháng 7. Mang ô nhỏ hàng ngày từ cuối tháng 6.',
        'Mùa thu (tháng 9–11): Mùa đẹp nhất — mát mẻ, khô ráo và đầy màu sắc.',
        'Mùa đông (tháng 12–2): Lạnh nhưng thường khô. Seoul thường xuống dưới -10°C. Cần áo khoác mùa đông, lớp nhiệt và giày tốt.',
        'Sưởi sàn Ondol (온돌) là tiêu chuẩn trong các căn hộ Hàn Quốc — làm nóng sàn thay vì không khí. Rất hiệu quả vào mùa đông.',
      ],
      tip: 'Bụi mịn (미세먼지) là mối quan tâm sức khỏe thực sự vào mùa xuân. Khẩu trang KF94 (tiêu chuẩn Hàn Quốc, tương tự N95) có sẵn rộng rãi và được khuyến nghị vào những ngày bụi nhiều.',
    },
  ],
};
