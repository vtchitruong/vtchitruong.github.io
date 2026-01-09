---
icon: material/view-module
---

# Thiết kế chương trình theo module

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái niệm module trong lập trình.

## Khái niệm

**Module**, tạm dịch là **khối chức năng**, là một **đơn vị cấu trúc** của chương trình máy tính, dùng để đóng gói các hàm, biến và dữ liệu liên quan.

Mỗi module đảm nhận một nhiệm vụ cụ thể và hoạt động **tương đối độc lập** với các phần còn lại của hệ thống.

!!! mote "Thiết kế chương trình theo module"

    Là kỹ thuật phân chia một chương trình lớn thành các phần nhỏ (module) tách biệt.

Các module tương tác với nhau **thông qua các giao diện**. Đây là *"cổng kết nối"* định nghĩa cách thức dữ liệu đi vào và thông tin đi ra của module, giúp các phần khác nhau của chương trình có thể hiểu và làm việc với nhau mà không cần biết chi tiết bên trong mỗi module.

Ví dụ:  
Hệ thống Quản lý điểm số của học sinh có thể được chia thành các module chuyên biệt như sau:

| STT module | Tên module | Chức năng | Một vài hàm ví dụ |
| --- | --- | --- | --- |
| 1 | input<br>(nhập liệu) | Nhập tên và điểm số của học sinh | `input_data()`: nhập dữ liệu<br>`validate()`: kiểm tra tính hợp lệ của dữ liệu | 
| 2 | calculation & stats<br>(tính toán và thống kê) | Thực hiện các tính toán và phân tích dữ liệu | `calculate_gpa()`: tính điểm trung bình <br> |`calculate_stats()`: thực hiện thống kê |
| 3 | search & sort<br>(sắp xếp và tìm kiếm) | Truy xuất thông tin và thay đổi trình tự dữ liệu | `search_by_name()`: tìm kiếm theo tên<br>`sort_by_score()`: sắp xếp theo điểm <br> `sort_by_name()`: sắp xếp theo tên |
| 4 | output<br>(xuất thông tin) | Hiển thị các thông tin | `print_all()`: in tất cả học sinh<br> `print_one()`: in thông tin một học sinh |  

---

## Lợi ích

Nếu chương trình được viết theo dạng đơn khối, nghĩa là tất cả mã lệnh nằm trong một khối duy nhất, thì các chức năng sẽ bị gắn chặt vào ngữ cảnh của chương trình đó và rất khó mang sang sử dụng ở nơi khác.

!!! note "Khả năng tái sử dụng"

    Thiết kế theo module **cho phép ta sử dụng lại** một đơn vị mã nguồn nhiều lần trong cùng một hệ thống hoặc trong các dự án khác.

Một module được thiết kế tốt sẽ có thể *"lắp đặt"* được vào chương trình khác, miễn là bảo đảm đúng giao diện đầu vào và đầu ra. Việc này giúp giảm thiểu đáng kể thời gian và công sức phát triển phần mềm.

Ví dụ:  
Hàm `sort_by_score()` trong module 3 có thể được tái sử dụng để làm nền tảng cho chức năng tìm trung vị (thống kê) trong module 2.

!!! note "Khả năng làm việc đồng thời"

    Việc chia nhỏ chương trình thành các module giúp cấu trúc mã nguồn trở nên rõ ràng, dễ hiểu và dễ kiểm thử hơn. 

    Quan trọng hơn, nó cho phép **nhiều lập trình viên có thể làm việc song song, đồng thời**.    
    
Mỗi người có thể tập trung hoàn thiện một module riêng biệt mà ít khi phải chờ đợi hoặc gây ảnh hưởng đến công việc của người khác.

Ví dụ:  
Dựa trên bảng phân chia ở mục trên, một nhóm gồm 5 học sinh có thể làm việc như sau:

- Bốn thành viên mỗi người phụ trách một module từ 1 đến 4.
- Trưởng nhóm thiết kế cấu trúc tổng thể và thực hiện tích hợp các module này lại thành một chương trình hoàn chỉnh.

Trong một chương trình đơn khối, một lỗi nhỏ phát sinh có thể gây hiệu ứng dây chuyền, khiến toàn bộ hệ thống ngừng hoạt động và rất khó để tìm ra nguyên nhân.

!!! note "Dễ dàng bảo trì và nâng cấp"

    Khi tổ chức theo module, việc cô lập lỗi trở nên đơn giản hơn: lỗi ở chức năng nào thì ta **tập trung kiểm tra module tương ứng**.

    Ta cũng có thể nâng cấp hoặc thay thế một module bằng phiên bản tốt hơn mà không cần phải viết lại toàn bộ chương trình.

Ví dụ:  
Nếu nhận thấy có thuật toán sắp xếp tốt hơn thì ta chỉ cần cập nhật mã lệnh bên trong module 3. Các module khác không cần thay đổi bất cứ điều gì mà chương trình vẫn vận hành trơn tru với tốc độ cao hơn.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/modular-software-design.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảo trì | maintenance |
| lập trình (theo kiểu) module | modular programming |
| giao diện | interface |
| tái sử dụng, khả năng tái sử dụng | reuse, reusability |
| tích hợp | intergrate, integration |