import { PageContent } from '@/types/content';

export const visaContent: PageContent = {
  slug: 'visa',
  eyebrow: 'Ở lại hợp pháp',
  title: 'Visa & Nhập cư',
  subtitle:
    'Hiểu loại visa của bạn, cách gia hạn lưu trú và cách xử lý khi có vấn đề.',
  cards: [
    {
      emoji: '🎓',
      title: 'Visa sinh viên D-2',
      description:
        'Thường là loại visa phổ biến nhất cho du học sinh quốc tế theo học tại các trường đại học Hàn Quốc. Xác nhận loại cụ thể với trường của bạn.',
      bullets: [
        'Thường được cấp trước khi đến qua đại sứ quán hoặc lãnh sự quán Hàn Quốc — yêu cầu khác nhau theo quốc gia',
        'Thường gắn với tình trạng đăng ký đại học đang hoạt động — thay đổi tình trạng đăng ký có thể ảnh hưởng đến hiệu lực visa',
        'Một số người có D-2 có thể được phép làm thêm bán thời gian có giới hạn; luôn xác nhận điều kiện với cơ quan xuất nhập cảnh hoặc trường',
        'Người nước ngoài ở lại quá 90 ngày thường phải đăng ký thẻ ARC — xác minh quy tắc hiện tại tại immigration.go.kr',
      ],
      tip: 'Giữ Giấy xác nhận đăng ký (재학증명서) trong tầm tay — thường được yêu cầu. Yêu cầu có thể thay đổi, hãy xác nhận với văn phòng quốc tế trường.',
    },
    {
      emoji: '🔄',
      title: 'Gia hạn visa',
      description:
        'Gia hạn thường được xử lý trước khi hết hạn. Thời gian xử lý và yêu cầu có thể khác nhau.',
      bullets: [
        'Đơn xin thường có thể nộp tại Văn phòng Xuất nhập cảnh (출입국관리사무소) hoặc qua cổng thông tin HiKorea (hikorea.go.kr)',
        'Tài liệu thường yêu cầu bao gồm hộ chiếu, thẻ ARC, Giấy xác nhận đăng ký và bằng chứng đóng học phí — xác minh danh sách hiện tại tại hikorea.go.kr',
        'Nộp đơn sớm (thường ít nhất 4–6 tuần trước) được khuyến nghị mạnh mẽ để có thời gian xử lý',
        'Phí khác nhau theo thời hạn và loại visa — kiểm tra trang web xuất nhập cảnh chính thức để biết số tiền hiện tại',
      ],
      tip: 'Thời gian chờ đợi tại văn phòng xuất nhập cảnh có thể lâu. Kiểm tra hikorea.go.kr để biết yêu cầu hiện tại trước khi đến.',
    },
    {
      emoji: '🌍',
      title: 'Các loại visa khác',
      description:
        'Hàn Quốc có nhiều loại visa. Các quy tắc dưới đây là chung — luôn xác minh tình huống cụ thể của bạn một cách chính thức.',
      bullets: [
        'D-4 (Đào tạo ngôn ngữ): thường dành cho học sinh tại các học viện ngôn ngữ, không phải chương trình bằng cấp đầy đủ',
        'F-1 (Gia đình): thường dành cho người phụ thuộc của cư dân Hàn Quốc; quyền làm việc phụ thuộc vào điều kiện giấy phép cụ thể',
        'Working Holiday: có sẵn cho một số quốc tịch nhất định trong độ tuổi cụ thể — điều kiện và chỉ tiêu khác nhau; kiểm tra với đại sứ quán Hàn Quốc tại nước bạn',
        'D-10 (Tìm việc): có thể có sau khi hoàn thành bằng cấp tại Hàn Quốc; điều kiện và thời hạn do xuất nhập cảnh quy định',
      ],
      tip: 'Điều kiện visa khác nhau đáng kể giữa các loại và hoàn cảnh cá nhân. Văn phòng quốc tế của trường hoặc tư vấn xuất nhập cảnh có chứng chỉ có thể giúp làm rõ tình huống cụ thể của bạn.',
    },
    {
      emoji: '🏢',
      title: 'Văn phòng xuất nhập cảnh',
      description:
        'Cổng thông tin Hi Korea và các văn phòng địa phương xử lý hầu hết các vấn đề xuất nhập cảnh.',
      bullets: [
        'Tìm địa điểm văn phòng và đặt lịch hẹn tại immigration.go.kr hoặc hikorea.go.kr',
        'Thời gian chờ có thể lâu — đặt lịch hẹn trước được khuyến nghị khi có thể',
        'Mang bản gốc và bản sao tất cả tài liệu; yêu cầu có thể khác nhau theo trường hợp',
        'Đường dây hỗ trợ người nước ngoài của xuất nhập cảnh (hỗ trợ đa ngôn ngữ): 1345',
      ],
      tip: 'Kiểm tra hikorea.go.kr để biết yêu cầu cụ thể của bạn trước khi đến. Thông tin trên trang này chỉ để hướng dẫn chung.',
    },
    {
      emoji: '⚠️',
      title: 'Ở quá hạn & Vi phạm',
      description:
        'Ở lại quá thời gian được phép có thể có hậu quả pháp lý nghiêm trọng.',
      bullets: [
        'Hình phạt cho việc ở quá hạn có thể bao gồm phạt tiền, hạn chế visa trong tương lai hoặc trục xuất — mức độ nghiêm trọng phụ thuộc vào hoàn cảnh',
        'Được khuyến nghị mạnh mẽ là giải quyết bất kỳ vấn đề tình trạng visa nào trước khi thời gian lưu trú được phép hết hạn',
        'Nếu bạn lo ngại về tình trạng visa, hãy liên hệ đường dây hỗ trợ xuất nhập cảnh (1345) hoặc tham khảo văn phòng quốc tế của trường ngay',
        'Nếu hộ chiếu của bạn bị mất hoặc bị đánh cắp, thông báo cho đại sứ quán hoặc lãnh sự quán nước bạn là bước đầu tiên',
      ],
      tip: 'Thông tin này chỉ để nâng cao nhận thức chung và không cấu thành tư vấn pháp lý. Nếu bạn có mối quan tâm xuất nhập cảnh cụ thể, hãy tìm kiếm sự hướng dẫn từ chuyên gia xuất nhập cảnh có chuyên môn.',
    },
  ],
};
