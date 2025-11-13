# Module trong lập trình

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái niệm module trong lập trình.

## Khái niệm

**Module** là một phần của chương trình máy tính chứa một hoặc nhiều chức năng. Mỗi module đảm nhận một hoặc nhiều hoạt động tương đối độc lập với các module khác. Thông thường, mỗi module bao gồm nhiều hàm.

**Thiết kế chương trình theo module** là kỹ thuật chia nhỏ các chức năng của chương trình thành các module độc lập. Mỗi module thực hiện những chức năng khác nhau và cũng có thể gọi tới các module khác để thực thi những chức năng bổ sung.

Các module giao tiếp với nhau thông qua **giao diện**, là các thành phần nhận dữ liệu đầu vào hoặc trả về kết quả đầu ra.

Ví dụ:

Viết một chương trình để quản lý điểm số của học sinh. Chương trình cần có các chức năng:

1. Nhập thông tin và điểm của học sinh.
2. Tính điểm trung bình và xếp loại.
3. Tìm kiếm học sinh theo tên.
4. In ra danh sách học sinh cùng với điểm và xếp loại.

Chương trình này có thể được phân thành thành các module sau:

| STT module | Tên module |  Chức năng | Một vài hàm ví dụ |
| --- | --- | --- | --- |
| 1 | input | Nhập tên và điểm số của học sinh | `input_data()`
| 2 | utility | Thực hiện các tính toán, sắp xếp, tìm kiếm | `average_score()` <br> `sort_by_score()` <br> `search_by_name()` |
| 3 | statistics | Thực hiện thống kê | `average()` <br> 'median()' |
| 4 | output | In ra các thông tin | `print_all()` <br> `print_one()` |  

## Lợi ích

### Khả năng tái sử dụng

Nếu chương trình được viết thành một khối dính liền thì mã lệnh sẽ *gắn chặt* trong chương trình đó và không thể sử dụng lại, trong khi mã lệnh này rất có thể hữu ích đối với những chương trình khác.

Ngược lại, khi tổ chức chương trình theo dạng module thì module này có thể tái sử dụng trong các module khác của cùng chương trình hoặc trong chương trình khác.

Một module sẽ dễ dàng tích hợp được vào bất kỳ chương trình nào thoả mãn yêu cầu về dữ liệu đầu vào và dữ liệu đầu ra của module đó. Đồng thời, việc tái sử dụng module cũng giúp tiết kiệm thời gian phát triển chương trình.

Ví dụ:  
Chức năng tìm trung vị của Module 3 sẽ tái sử dụng chức năng sắp xếp của Module 2.

### Trợ giúp cùng phát triển chương trình

Việc chia nhỏ thành các module giúp cho chương trình dễ hiểu, dễ thiết kế và dễ kiểm thử hơn so với chương trình lớn.

Bên cạnh đó, các lập trình viên có thể đồng thời tham gia phát triển các module riêng lẻ, rồi tích hợp vào chương trình hoàn chỉnh.

Ví dụ:  
Theo bảng phân chia module ở mục trên, một nhóm có thể phân công bốn thành viên phụ trách các module từ 1 đến 4. Thành viên thứ năm, là trưởng nhóm, phụ trách chương trình chính và tích hợp các module lại.

### Dễ dàng bảo trì và phát triển chương trình

Nếu tổ chức chương trình thành một khối dính liền, lỗi phát sinh có thể khiến cho toàn bộ chương trình không hoạt động được.

Ngược lại, khi tổ chức theo dạng module, ta sẽ tìm ra module có lỗi dễ dàng hơn. Việc khắc phục cũng đơn giản và ít tốn kém hơn.

Module sau khi chỉnh sửa hoặc thay thế có thể được tích hợp vào chương trình mà không làm ảnh hưởng chương trình.

Ví dụ:  
Nếu muốn cải thiện chức năng sắp xếp thì ta chỉ cần chỉnh sửa Module 2 mà không làm ảnh hưởng các module khác, chương trình vẫn hoạt động bình thường.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảo trì | maintenance |
| dữ liệu đầu vào | input data |
| dữ liệu đầu ra | output data |
| tái sử dụng, khả năng tái sử dụng | reuse, reusability |
| tích hợp | intergrate, integration |