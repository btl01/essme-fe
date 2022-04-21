import { createI18n } from "vue-i18n";
export let locale = "en"
export const i18n = createI18n({
    locale: locale,
    legacy: false,
    globalInjection: true,
    messages: {
        en: {
            message: {
                // header
                language: "Language",
                home: "Home",
                expert: "Expert",
                fqas: "FQAs",
                askquestion: "Ask Question",
                orderexpert: "Order Expert",
                expertprofile: "Expert Profile",
                expertinfo: "Expert Info",
                events: "Events",
                news: "News",
                profilesetting: "Profile Setting",
                history: "history",
                logout: "Log Out",
                login: "Log in",
                // home
                leadingexpert: "Leading Experts",
                degree: "Degree",
                researcharea: "Research Area",
                viewallexperts: "View all experts",
                fields: "Fields",
                showmore: "Show more",
                seemoreanswers: "See more answers",
                viewallnews: "View all news",
                answer: "Answer",
                question: "Question",
                // footer
                Feature: "Feature",
                FindanExpert: "Find an Expert",
                FindEvents: "Find Events",
                Discover: "Discover",
                Security: "Security",
                Sponsor: "Sponsor",
                Information: "Information",
                Rules: "Rules",
                Aboutus: "About us",
                Community: "Community",
                // FQAs answer
                Askyourquestion: "Ask your question",
                Question: "Question",
                Answer: "Answer",
                Send: "Send",
                Signintopostanswer: "Sign in to post answer!",
                Postyouranswersuccessfully: "Post your answer successfully!",
                FailtoPostyouranswer: "Fail to Post your answer! ",
                Maybeyouhavenotupdatedyourprofile: "Maybe you have not updated your profile",
                Youhavetobeexperttopostanswer: "You have to be expert to post answer",
                Return: "Return",
                BacktoHomepage: "Back to Homepage",
                Pleasetypeyouranswerforthisquestion: "Please type your answer for this question",
                Youhavetobecustomertosendrequest: "You have to be customer to send request",
                // FQA
                // events
                ByFields: "By Fields",
                ByTags: "By Tags",
                Filter: "Filter",
                ByTypes: "By Types",
                // expertpage
                Choosethefield: "Choose the field",
                INTRODUCTION: "INTRODUCTION",
                APPELLATION: "APPELLATION",
                POSITION: "POSITION",
                AFFILIATE: "AFFILIATE",
                EXPERTISE: "EXPERTISE",
                SOCIALMEDIA: "SOCIAL MEDIA",
                ORDEREXPERT: "ORDER EXPERT",
                Title: "Title",
                Yourrequirement: "Your requirement",
                PleaseInput: "Please Input",
                Enteryourrequirement: "Enter your requirement",
                noresult: "no result",
                RELATEDEXPERTS: "RELATED EXPERTS",

                // expert order
                Choosethefieldwhichyouwanttoaskabout: "Choose the field which you want to ask about",
                RelatedExperts: "Related Experts",
                notfound: "not found",
                FindtheFields: "Find the Fields",
                Findmoreexperts: "Find more experts",
                PostyourOrder: "Post your Order",

                // expert field
                Experttitle: "Expert title",
                Readmore: "Read more",
                // question sheet
                Askapublicquestion: "Ask a public question",
                YourQuestion: "Your Question",
                Pleaseselectfields: "Please select fields",
                Findquestion: "Find question",
                Findexpert: "Find expert",
                Postyourquestion: "Post your question",


            }
        },
        vi: {
            message: {
                language: "Ngôn ngữ",
                home: "Trang chủ",
                expert: "Chuyên gia",
                fqas: "Câu hỏi",
                askquestion: "Hỏi đáp",
                orderexpert: "Đặt hàng",
                expertprofile: "Chuyên gia",
                expertinfo: "Thông tin chuyên gia",
                events: "Sự kiện",
                news: "Tin tức",
                profilesetting: "Thay đổi thông tin",
                history: "Lịch sử",
                logout: "Đăng xuất",
                login: "Đăng nhập",
                // home
                leadingexpert: "Chuyên gia đầu ngành",
                viewallexperts: "Tất cả chuyên gia",
                fields: "Lĩnh vực",
                showmore: "Xem thêm",
                degree: "Trình độ",
                researcharea: "Lĩnh vực",
                seemoreanswers: "Chi tiết",
                viewallnews: "Xem thêm",
                answer: "Trả lời",
                question: "Câu hỏi",
                // footer
                Feature: "Tính năng",
                FindanExpert: "Tìm kiếm chuyên gia",
                FindEvents: "Tìm kiếm sự kiện",
                Discover: "Khám phá",
                Security: "Bảo mật",
                Sponsor: "Tài trợ",
                Information: "Thông tin",
                Rules: "Quy tắc",
                Aboutus: "Về Chúng tôi",
                Community: "Cộng đồng",
                // FQA answer
                Askyourquestion: "Hỏi đáp",
                Question: "Câu hỏi",
                Answer: "Trả lời",
                Send: "Gửi",
                Signintopostanswer: "Đăng nhập để gửi câu trả lời",
                Postyouranswersuccessfully: "Gửi câu trả lời thành công",
                FailtoPostyouranswer: "Không thể gửi câu trả lời",
                Maybeyouhavenotupdatedyourprofile: "Cập nhật thông tin cá nhân để thực hiện chức năng này!",
                Youhavetobeexperttopostanswer: "Bạn phải là chuyên gia mới thực hiện được phần này",
                Return: "Trở lại",
                BacktoHomepage: "Trở về trang chủ",
                Pleasetypeyouranswerforthisquestion: "Nhập câu trả lời của bạn",
                Youhavetobecustomertosendrequest: "Bạn phải là khách hàng để gửi yêu cầu",
                // FQA
                ByFields: "Theo lĩnh vực",
                // events
                ByTags: "Theo Tag",
                Filter: "Lọc",
                ByTypes: "Theo thể loại",
                // expertpage
                Choosethefield: "Lĩnh vực",
                INTRODUCTION: "GIỚI THIỆU",
                APPELLATION: "DANH HIỆU",
                POSITION: "CHỨC VỤ",
                AFFILIATE: "LIÊN KẾT",
                EXPERTISE: "CHUYÊN MÔN",
                SOCIALMEDIA: "PHƯƠNG TIỆN TRUYỀN THÔNG XÃ HỘI",
                ORDEREXPERT: "ĐẶT HÀNG CHUYÊN GIA",
                Title: "Chủ đề",
                Yourrequirement: "Yêu cầu",
                PleaseInput: "nhập tiêu đề",
                Enteryourrequirement: "Nhập yêu cầu của bạn",
                noresult: "Không có kết quả trả về",
                RELATEDEXPERTS: "CHUYÊN GIA NỔI BẬT",
                // expert order
                Choosethefieldwhichyouwanttoaskabout: "Chọn lĩnh vực mà bạn muốn đặt câu hỏi",
                RelatedExperts: "Chuyên gia nổi bật",
                notfound: "Không có kết quả trả về",
                FindtheFields: "Tìm kiếm theo lĩnh vực",
                Findmoreexperts: "Tìm kiếm chuyên gia",
                PostyourOrder: "Gửi yêu cầu",
                // expert field
                Experttitle: "Chuyên gia",
                Readmore: "Đọc thêm",
                // question sheet
                Askapublicquestion: "Hỏi đáp câu hỏi",
                YourQuestion: "Câu hỏi của bạn",
                Pleaseselectfields: "Chọn lĩnh vực",
                Findquestion: "Tìm kiếm câu hỏi",
                Findexpert: "Tìm kiếm chuyên gia",
                Postyourquestion: "Gửi câu hỏi",

            }
        },
    }
});


// export enum Locales {
//     EN = 'en',
//     VI = 'vi',
// }Send

// export const defaultLocale = Locales.EN;