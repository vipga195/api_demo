
const constant = {
    status: [
        { id: 1, text: "Đang chờ" },
        { id: 2, text: "Chatbox đang trả lời" },
        { id: 3, text: "Đang trả lời" },
        { id: 4, text: "Mất kết nối từ khách hàng" },
    ],
    project: [
        { id: 1, text: "SCB Internet Banking" },
        { id: 2, text: "SCB Mobile Banking" },
    ],
    active: [
        { id: 1, text: "Join" },
        { id: 2, text: "Leave" },
    ]
}

const convertContant = (value, array, index = "id") => {
    let params = array.find(e => e[index] == value);
    if (params) {
        return params.text
    }
    else {
        return { id: 0, text: "", data: "" }
    }
}
// JSON data
const List = [
    {
        id: 1,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "https://photo-cms-tpo.zadn.vn/665x449/uploads/2017/11/5a185e28459b3-here-s-how-to-catch-pikachus-before-they-become-super-rare-in-pokemon-go-600x450.jpg",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test01",
        messages: "Xin chào",
        time: "9:08:46"
    },
    {
        id: 2,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "4",
        status_text: convertContant(4, constant.status),
        user_name: "0104093590",
        messages: "Chào bạn, cho hỏi Soft OTP có chức năng gì bạn ?",
        time: "0:18:56"
    },
    {
        id: 3,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "2",
        status_text: convertContant(2, constant.status),
        user_name: "test02",
        messages: "Xin chào",
        time: "2:20:46"
    },
    {
        id: 4,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "https://i.pinimg.com/originals/b2/f4/84/b2f4846f5c8aeec84b45849ce4fb5c30.png",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test03",
        messages: "Xin chào",
        time: "9:08:46"
    },
    {
        id: 5,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "https://tabinoshop.com/wp-content/uploads/2020/01/mo-hinh-pokemon-mega-sieu-dang-cap-cho-be-1.jpg",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "3",
        status_text: convertContant(3, constant.status),
        user_name: "0104093590",
        messages: "Hi, hỏi về chức năng tiết kiệm hàng tháng",
        time: "2:08:01"
    },
    {
        id: 6,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test06",
        messages: "Cách lấy lại mật khẩu của tài khoản thì sao bạn.",
        time: "20:18:46"
    },
    {
        id: 7,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "3",
        status_text: convertContant(3, constant.status),
        user_name: "test07",
        messages: "Cách lấy lại mật khẩu của tài khoản thì sao bạn.",
        time: "9:08:46"
    },
    {
        id: 8,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "2",
        status_text: convertContant(2, constant.status),
        user_name: "0104093590  ",
        messages: "Chào bạn, chức năng chuyển khoản ?",
        time: "00:10:46"
    },
    {
        id: 9,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "2",
        status_text: convertContant(2, constant.status),
        user_name: "nguyentuan1990",
        messages: "Hi bạn, mình là khách hàng mới, cần hỏi một số vấn đề ...",
        time: "9:08:46"
    },
    {
        id: 10,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "https://i.pinimg.com/originals/0c/3c/25/0c3c25ef6a5fe2f02e3e2b185bcf7cda.png",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "3",
        status_text: convertContant(3, constant.status),
        user_name: "test10",
        messages: "Xin chào!",
        time: "9:08:46"
    },
    {
        id: 11,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test11",
        messages: "Xin chào",
        time: "11:11:12"
    },
    {
        id: 12,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test12",
        messages: "Xin chào!",
        time: "12:12:13"
    },
    {
        id: 13,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "2",
        status_text: convertContant(2, constant.status),
        user_name: "test13",
        messages: "Xin chào@@",
        time: "12:13:14"
    },
    {
        id: 14,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test14",
        messages: "Xin chào!!",
        time: "12:12:15"
    },
    {
        id: 15,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "3",
        status_text: convertContant(3, constant.status),
        user_name: "test13",
        messages: "Xin chào 13",
        time: "12:12:16"
    },
    {
        id: 16,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 2,
        active_text: convertContant(2, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test16",
        messages: "Hello ",
        time: "12:12:46"
    },
    {
        id: 17,
        project_id: 2,
        project_name: convertContant(2, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "4",
        status_text: convertContant(4, constant.status),
        user_name: "test17",
        messages: "Xin chào",
        time: "9:08:46"
    },
    {
        id: 18,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test18",
        messages: "Xin chào",
        time: "9:08:46"
    },
    {
        id: 19,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test19",
        messages: "Xin chào",
        time: "9:08:46"
    },
    {
        id: 20,
        project_id: 1,
        project_name: convertContant(1, constant.project),
        agents_url: "",
        active_id: 1,
        active_text: convertContant(1, constant.active),
        status_id: "1",
        status_text: convertContant(1, constant.status),
        user_name: "test20",
        messages: "Xin chào",
        time: "9:08:46"
    },

];

module.exports = {
    List
};