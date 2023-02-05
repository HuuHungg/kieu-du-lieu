Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẫn

Cách sử dụng:

1. Thêm "use strict" và đầu file .js
2. Thêm "use strict" vào ngay sau thẻ mở <script>
3. Thêm "use strict" vào đầu phạm vi hàm 

- usestrict phải đứng đầu phạm vi trước nó không được có đoạn code nào cả 

- Báo lỗi khi gán lại giá trị cho thuộc tinh có writeable: false
- Báo lỗi khi hàm có tham số trùng tên
- Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
- Không đặt tên biến tên hàm bằng một số từ khoá 'nhạy cảm' của ngôn ngữ

// Công dụng
1. Tránh quên những từ khoá khai báo biến
2. Tránh trùng tên biến dẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
