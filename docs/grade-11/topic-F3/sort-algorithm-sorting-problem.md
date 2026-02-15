---
icon: material/sort
---

# Bài toán sắp xếp

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái quát về bài toán sắp xếp.

## Đặt vấn đề

Với bảng điểm của lớp, làm sao để lấy ra 10 bạn có điểm số cao nhất?

Một cách làm đơn giản là sắp xếp bảng điểm giảm dần, sau đó lấy ra 10 bạn đầu tiên. Đó là 10 bạn có điểm số cao nhất.

---

## Phát biểu bài toán

Sắp xếp dữ liệu là tác vụ cơ bản và quan trọng trong xử lý dữ liệu, tạo thuận lợi cho việc tìm kiếm, truy xuất và phân tích dữ liệu.

**Sắp xếp dữ liệu** là tiến trình **tổ chức lại dữ liệu theo một trật tự có nghĩa** nào đó.

Trong chủ đề F, ta chỉ xét bài toán đơn giản là sắp xếp mảng một chiều theo thứ tự tăng dần (1).
{ .annotate }

1.  **Tăng dần** được hiểu theo nghĩa cho phép bằng nhau, phần tử liền sau **lớn hơn hoặc bằng** phần tử liền trước.

    Còn **tăng nghiêm ngặt** thì không cho phép bằng nhau, phần tử liền sau phải lớn hơn phần tử liền trước.

!!! note "Bài toán sắp xếp"

    Được phát biểu như sau:
    
    | Đầu vào | Đầu ra |
    | --- | --- |
    | Mảng một chiều `A` gồm `n` phần tử đều là số nguyên. | Mảng một chiều `A` có thứ tự tăng dần. |

---

## Thuật toán sắp xếp

!!! note "Một số thuật toán sắp xếp"

    - Sắp xếp chọn
    - Sắp xếp chèn
    - Sắp xếp nổi bọt
    - Sắp xếp tráo đổi
    - Sắp xếp nhanh
    - Sắp xếp trộn

Hầu hết đều thực hiện thao tác so sánh các phần tử với nhau để xác định rằng một phần tử sẽ đứng trước hay đứng sau một phần tử khác.

---

## Lợi ích và ứng dụng

Trong lập trình, sắp xếp dữ liệu giúp cho tập dữ liệu trở nên dễ đọc hơn cũng như việc tìm kiếm và xử lý dữ liệu thuận tiện hơn.

Nhìn chung, thuật toán sắp xếp được ứng dụng trong các vấn đề về tìm kiếm thông tin và so khớp dữ liệu. Một số bài toán liên quan là:

- Bài toán quản lý, trong đó cần sắp xếp mã định danh, họ tên, thời gian, nơi chốn, v.v...
- Bài toán đồ thị như Prim, Dijkstra, Kruscal, v.v..., trong đó cần sắp xếp các cạnh theo trọng số.
- Bài toán thống kê như tìm trung vị, tìm tứ phân vị.
- Bài toán tìm phần tử trùng lắp, trộn các tập dữ liệu, chia để trị, tìm kiếm theo khoảng.
- Bài toán sắp xếp sự kiện theo thời gian trong mô phỏng, trò chơi, lịch trình công việc, xử lý gói tin mạng, v.v...

Hiện nay, các ngôn ngữ lập trình và hệ thống phần mềm đã có sẵn công cụ sắp xếp để người dùng dễ dàng sử dụng. Song việc tìm hiểu các thuật toán sắp xếp vẫn là cần thiết giúp người học phát triển tư duy và kỹ năng lập trình.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-sorting-problem.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán sắp xếp | sorting problem |