const listAnswers = [
    {
        chatbox_id: 1,
        id: 1,
        questions: [
            { id: 1, text: "Hi bạn, hỏi về chuyển tiền" },
            { id: 2, text: "Cho hỏi về chuyển tiền" },
            { id: 3, text: "Chuyển tiền" },
        ],
        answers: [
            {
                id: 1, text: `Tư vấn SCB xin chào Quý khách!
                              Vui lòng chọn nội dung cần hỗ trợ :
                              Chuyển tiền vào TK chứng khoán
                              Chuyển tiền ra TK ngân hàng
                              Chuyển tiền nhưng tiền chưa đến`}
        ]
    },
    {
        chatbox_id: 1,
        id: 2,
        questions: [
            { id: 4, text: "Chuyển tiền nhưng tiền chưa đến" },

        ],
        answers: [
            {
                id: 2, text: `Trường hợp thông tin chuyển tiền là chính xác, thời gian ghi nhận tiền còn phụ thuộc vào ngân hàng chuyển và giờ đi tiền liên ngân hàng, thông thường là 60 phút (giờ hành chính, không tính thứ 7 và Chủ nhật).
                Tôi cần hổ trợ kiểm tra
               Tôi chuyển tiền sai nội dung`}
        ]
    },
    {
        chatbox_id: 1,
        id: 3,
        questions: [
            { id: 5, text: "Tôi chuyển tiền sai nội dung: (Thiếu/Sai Tên hoặc số TK 105C)" },

        ],
        answers: [
            {
                id: 3, text: `Quý khách vui lòng thực hiện tra soát nội dung tại NH chuyển và cung cấp cho TCBS mã điện tra soát thành công. Sau khi có đủ thông tin từ ngân hàng chuyển, TCBS sẽ ghi nhận nhanh nhất vào TKCK của Quý khách.
                Tôi không muốn tra soát`}
        ]
    },
    {
        chatbox_id: 1,
        id: 4,
        questions: [
            { id: 6, text: "Tôi không muốn tra soát" },

        ],
        answers: [
            {
                id: 4, text: `TCBS sẽ thực hiện hoàn tiền về ngân hàng chuyển sau 01 ngày làm việc, thời gian hoàn tiền là 05 ngày nếu chuyển liên ngân hàng và lên đến 1 tháng nếu KH chuyển nhanh 24/7.`
            }
        ]
    },
    {
        chatbox_id: 2,
        id: 5,
        questions: [
            { id: 7, text: "Tôi không muốn hủy thẻ" },
            { id: 8, text: "Thẻ bị mờ không thể sử dụng" },
        ],
        answers: [
            {
                id: 5, text: `vui lòng liên hệ phòng giao dịch gần nhất để được hỗ trợ.`
            }
        ]
    },
    {
        chatbox_id: 2,
        id: 6,
        questions: [
            { id: 9, text: "Tôi không dừng chuyển khoản" },
            { id: 10, text: "Chuyển khoản sai thông tin" },
        ],
        answers: [
            {
                id: 4, text: `TCBS sẽ thực hiện hoàn tiền về ngân hàng chuyển sau 01 ngày làm việc, thời gian hoàn tiền là 05 ngày nếu chuyển liên ngân hàng và lên đến 1 tháng nếu KH chuyển nhanh 24/7..`
            }
        ]
    }
]

const list = [
    {
        chatbox_id: 1,
        description: "Thanh toán"
    },
    {
        chatbox_id: 2,
        description: "Chuyển khoản"
    }
]

module.exports = {
    list,
    listAnswers
}