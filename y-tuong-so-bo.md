# Ý tưởng sơ bộ (phiên bản rút gọn theo yêu cầu)

## 1) Mục tiêu
Xây dựng **1 web app AI soạn thảo văn bản hành chính** ở mức thực dụng, tập trung vào hiệu quả sử dụng ngay:
- Có **chatbot hỏi trực tiếp** để cán bộ trao đổi nhu cầu.
- Có **bộ mẫu văn bản sẵn có** để chọn nhanh.
- Có phần **cài đặt thông tin riêng** của đơn vị (tên đơn vị, người ký, chức danh, nơi nhận mặc định...).
- Có chức năng **tải tài liệu lên** để AI phân tích và gợi ý mẫu văn bản phù hợp.
- Có chức năng **AI phân tích tài liệu** để gợi ý nội dung tham mưu.
- Đầu ra là **văn bản dự thảo hoàn chỉnh**, có thể tham khảo/sử dụng được khoảng **80%**.

## 2) Phạm vi chức năng chính (chỉ giữ phần cần thiết)

### A. Chatbot AI hỏi đáp trực tiếp
- Người dùng chat bằng tiếng Việt theo ngữ cảnh công việc.
- Chatbot đặt câu hỏi làm rõ thông tin còn thiếu (mục tiêu văn bản, đối tượng nhận, thời hạn, căn cứ).
- Từ hội thoại, chatbot tạo bản nháp văn bản hành chính theo đúng loại người dùng chọn.

### B. Kho mẫu văn bản sẵn có
- Danh sách mẫu cơ bản: công văn, tờ trình, báo cáo, thông báo, quyết định.
- Mỗi mẫu có bố cục chuẩn để AI điền nội dung.
- Cho phép nhân bản mẫu và chỉnh sửa trước khi xuất bản nháp.

### C. Cài đặt thông tin riêng của đơn vị
- Cấu hình một lần, dùng lặp lại cho mọi văn bản:
  - Tên cơ quan/đơn vị.
  - Người ký, chức danh.
  - Thông tin liên hệ/chân trang.
  - Danh sách nơi nhận mặc định.
- Tự động điền vào đúng vị trí trong mẫu.

### D. Tải tài liệu lên để AI phân tích
- Hỗ trợ tải lên tài liệu tham chiếu (PDF/DOCX).
- AI tóm tắt nội dung chính, trích ý quan trọng.
- AI đề xuất **mẫu văn bản phù hợp** với nội dung tài liệu.

### E. AI gợi ý nội dung tham mưu
- Từ tài liệu tải lên + yêu cầu người dùng, AI gợi ý:
  - Bối cảnh.
  - Vấn đề cần xử lý.
  - Phương án/đề xuất tham mưu.
  - Kiến nghị thực hiện.
- Người dùng chọn phương án rồi tạo dự thảo.

### F. Đầu ra dự thảo hoàn chỉnh (~80%)
- Kết quả cuối là bản dự thảo có cấu trúc đầy đủ:
  - Mở đầu, căn cứ, nội dung chính, kiến nghị/nơi nhận.
- Mức chất lượng mục tiêu: dùng được khoảng 80%, người dùng chỉnh sửa 20% còn lại để ban hành.

## 3) Luồng sử dụng đơn giản
1. Chọn loại văn bản hoặc để chatbot gợi ý.
2. Nhập yêu cầu bằng chat.
3. (Tuỳ chọn) tải tài liệu liên quan.
4. AI phân tích tài liệu + gợi ý nội dung tham mưu.
5. AI sinh dự thảo theo mẫu và tự điền thông tin đơn vị.
6. Người dùng chỉnh sửa nhanh và xuất bản dự thảo.

## 4) Kết quả mong đợi
- Rút ngắn mạnh thời gian soạn thảo.
- Chuẩn hoá văn bản theo mẫu thống nhất.
- Tăng chất lượng bản nháp đầu tiên.
- Giảm áp lực viết tay từ đầu cho cán bộ.

## 5) Gợi ý triển khai nhanh (MVP 4-6 tuần)
- Tuần 1-2: giao diện chat + thư viện mẫu + cấu hình thông tin đơn vị.
- Tuần 3-4: tải tài liệu, AI tóm tắt, gợi ý mẫu văn bản.
- Tuần 5-6: AI gợi ý tham mưu + xuất bản dự thảo hoàn chỉnh.

---

## Tóm tắt 1 câu
Đây là một hệ thống web AI tập trung vào 4 trục: **Chatbot trực tiếp + Mẫu sẵn + Cấu hình đơn vị + Phân tích tài liệu**, nhằm tạo ra **dự thảo văn bản hành chính hoàn chỉnh có thể dùng ngay khoảng 80%**.
