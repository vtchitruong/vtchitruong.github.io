---
icon: octicons/database-24
---

# Bảo mật hệ cơ sở dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày tầm quan trọng và một số biện pháp bảo mật hệ cơ sở dữ liệu.

## Tầm quan trọng

Bảo mật cơ sở dữ liệu là việc giữ cho cơ sở dữ liệu tránh khỏi các mối đe dọa như:

- Truy cập trái phép
- Thay đổi
- Phá hủy
- Đánh cắp

Nếu cơ sở dữ liệu bị xâm phạm thì hậu quả có thể rất nghiêm trọng, chẳng hạn như:

1. **Bị lợi dụng cho những mục đích xấu**

    Việc lộ hoặc rò rỉ dữ liệu có thể dẫn đến lừa đảo, tống tiền hoặc phân biệt đối xử. 

2. **Thiệt hại về uy tín và kinh tế**

    Doanh nghiệp bị xâm phạm cơ sở dữ liệu có thể bị mất uy tín, rơi vào kiện tụng và thiệt hại kinh tế.

3. **Rủi ro an ninh**

    Các cơ quan, tổ chức có thể bị tấn công, ảnh hưởng đến an ninh và an toàn ở các mặt của đời sống xã hội.
    
Ngược lại, bảo mật cơ sở dữ liệu hiệu quả giúp duy trì:

1. **Tính bảo mật**

    Chỉ người được phép mới truy cập được cơ sở dữ liệu.

2. **Tính sẵn sàng**

    Cơ sở dữ liệu luôn truy xuất được khi cần.

3. **Tính toàn vẹn**

    Khi truy xuất, dữ liệu luôn đúng đắn, không bị sai lệch.

---

## Một số giải pháp

### Ý thức người dùng

**Ý thức người dùng** chính là **giải pháp chủ động và quyết định** đối với sự an toàn của hệ cơ sở dữ liệu. Đây cũng chính là lớp bảo vệ đầu tiên cũng như lớp bảo vệ cuối cùng đối với hệ thống.

---

### Phân quyền và xác thực

**Phân quyền** là **gán tập hợp quyền cho người dùng** nhằm kiểm soát hành vi tương tác với hệ cơ sở dữ liệu. Mỗi tài khoản cá nhân hoặc mỗi vai trò người dùng sẽ có những quyền nhất định khi truy xuất cơ sở dữ liệu.

Ví dụ:  
Một số quyền trong hệ cơ sở dữ liệu là:

- Đọc dữ liệu
- Thêm mẫu tin
- Xoá mẫu tin

??? info "Một số quyền trong hệ cơ sở dữ liệu"
    
    | Quyền | Mô tả | Ví dụ |
    | --- | --- | --- |
    | SELECT | Đọc dữ liệu từ bảng/view | Học sinh có quyền xem điểm cá nhân. |
    | INSERT | Thêm mẫu tin mới | Giáo viên có quyền nhập điểm kiểm tra. |
    | UPDATE | Sửa đổi mẫu tin hiện có | Giáo viên bộ môn sửa điểm kiểm tra. |
    | DELETE | Xoá mẫu tin | Quản trị viên của nhà trường có quyền xoá học sinh đã thôi học. |
    | EXECUTE | Thực thi stored procedure hoặc hàm | Quản trị viên của nhà trường có quyền chạy hàm tính điểm trung bình. |
    | CREATE | Tạo đối tượng mới | Quản trị viên của hệ thống có quyền tạo bảng mới. |
    | ALTER | Thay đổi cấu trúc của đối tượng | Quản trị viên của hệ thống có quyền thêm cột điểm rèn luyện. |
    | DROP | Xóa object | Quản trị viên của hệ thống có quyền xoá bảng hoặc cơ sở dữ liệu. |
    | REFERENCES | Tạo khóa ngoại tham chiếu | Lập trình viên có quyền tạo ràng buộc khoá ngoại giữa các bảng. |

**Xác thực** là **xác minh danh tính** của người dùng hoặc thiết bị trước khi cho phép truy xuất cơ sở dữ liệu.

??? info "Ba yếu tố xác thực"

    | Yếu tố xác thực | Mô tả cơ chế | Cụ thể |
    | --- | --- | --- |
    | Điều bạn biết | Dựa vào **kiến thức** mà chỉ có người dùng biết | mật khẩu, PIN, câu hỏi bảo mật |
    | Điều bạn có | Dựa vào **vật sở hữu** mà chỉ có người dùng nắm giữ | thẻ bảo mật (có gắn chip hoặc dải từ), token vật lý, điện thoại sinh mã OTP |
    | Điều bạn là | Dựa vào **đặc điểm sinh trắc** của người dùng | vân tay, khuôn mặt, mống mắt, giọng nói |

Ví dụ:  
Một số phương thức xác thực trong hệ cơ sở dữ liệu là:

- Mật khẩu tĩnh
- Mã OTP
- Sinh trắc học
- Xác thực hai yếu tố (2FA)  

??? tip "Mật khẩu"

    Mật khẩu được xem là đủ mạnh nếu kết hợp:
    
    - Chữ hoa
    - Chũ thường
    - Số
    - Ký tự đặc biệt
    - Dài ít nhất 12 ký tự

---

### Mã hoá dữ liệu

**Mã hoá** là cơ chế **biến đổi dữ liệu thành dạng không thể đọc được** dựa trên những thuật toán mã hoá.

Nghĩa là, nếu kẻ gian đánh cắp được dữ liệu thì cũng bị hạn chế khả năng đọc vì dữ liệu đã được mã hoá.

Ví dụ:  
Dữ liệu thường được mã hoá ở hai trạng thái:

- Trạng thái lưu trữ: dữ liệu được mã hoá trên đĩa.
- Trạng thái truyền tải: dữ liệu được mã hoá trên đường truyền.

---

### Sao lưu và khôi phục dữ liệu

**Sao lưu dữ liệu định kỳ** vào nơi an toàn, chẳng hạn như: ổ cứng ngoài, đám mây.

Thường xuyên **kiểm tra khả năng khôi phục** để tránh mất dữ liệu.

Ví dụ:  
Áp dụng quy tắc 3-2-1: 3 bản sao, 2 loại thiết bị, 1 bản ngoại vi.

---

### Cập nhật và giám sát

**Luôn cập nhật** hệ quản trị cơ sở dữ liệu để vá lỗ hổng.

**Thường xuyên theo dõi** hoạt động của hệ thống, chẳng hạn như sử dụng tường lửa, hệ thống phát hiện xâm nhập.

!!! note "Giải pháp hữu hiệu nhất?"

    Bảo mật hệ cơ sở dữ liệu không chỉ là nhiệm vụ của chuyên gia mà còn là ý thức của mọi người dùng.
    
    Không có giải pháp nào là tuyệt đối, mà cần phải phối hợp nhiều giải pháp với nhau.
    
    Không tồn tại hệ thống bất khả xâm phạm, mà cần duy trì kiến trúc bảo mật thông qua chu kỳ phát hiện, cập nhật và vá lỗi liên tục.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảo mật cơ sở dữ liệu | database security |
| mã hoá (dữ liệu) | encryption |
| phân quyền | authorization |
| quyền, đặc quyền | permission, privilege |
| tính bảo mật | confidentiality |
| tính sẵn sàng | availability |
| xác thực | authentication |