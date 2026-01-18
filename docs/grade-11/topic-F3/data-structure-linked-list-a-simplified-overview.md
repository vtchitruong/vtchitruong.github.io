---
icon: material/link
---

# Danh sách liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm về danh sách liên kết.

## Đặt vấn đề

Khi xử lý tập hợp gồm nhiều phần tử, mảng là một lựa chọn phù hợp. Song mảng vẫn có những hạn chế như:

- Kích thước của mảng là cố định. Số lượng phần tử của mảng không thể tăng hoặc giảm một cách linh hoạt. Ta thường phải khai báo dư so với số lượng sử dụng thực tế.
- Khi cần chèn hoặc xoá phần tử, ta phải dịch chuyển những phần tử khác, gây hao phí thời gian. Trong một số trường hợp, có thể phải sao chép các phần tử của mảng hiện hành sang vùng nhớ mới, khiến hiệu quả xử lý bị giảm sút. (1)
    { .annotate }

    1.  Đối với cấu trúc `list` trong Python, về bản chất, hệ thống vẫn phải thực hiện việc cấp phát lại bộ nhớ và sao chép phần tử khi danh sách quá lớn.

Vì thế, ta cần một cấu trúc dữ liệu khác có thể khắc phục những hạn chế này.

---

## Khái niệm

!!! note "Danh sách liên kết"

    **Danh sách liên kết** là một cấu trúc dữ liệu tuyến tính, trong đó các phần tử được **liên kết với nhau** thông qua **tham chiếu** (1).
    { .annotate }

    1.  **Tham chiếu** có thể hiểu là  sợi dây nối từ một cái tên đến đồ vật nào đó.

        Tham chiếu không phải là bản thân đồ vật, mà là cách để ta tìm đến đồ vật đó.

    Khác với mảng, các phần tử của danh sách liên kết không được lưu trữ tại các ô nhớ liền kề nhau.

Xe lửa có thể xem là hình ảnh minh hoạ cho danh sách liên kết: xe lửa gồm nhiều toa, toa liền trước *"kết nối"* với toa liền sau.

![Xe lửa, theo nghĩa nào đó, là một danh sách liên kết](images/train.svg){loading=lazy}

*(Hình được tải tại [Free SVG](https://freesvg.org/){:target="_blank"}.)*

!!! note "Phần tử của danh sách liên kết"

    **Phần tử** của danh sách liên kết được gọi là **node**, thường gồm hai phần:

    1. Dữ liệu, đặt là `data`.
    2. Tham chiếu đến node kế tiếp, đặt là `next`.

    ![Minh hoạ node](images/node.svg){loading=lazy}

Khi `next` của node liền trước chứa địa chỉ của node liền sau, ta nói rằng, node trước *"trỏ vào"* hoặc *"trỏ tới"*, *"trỏ đến"* node liền sau.

Node cuối cùng của danh sách liên kết trỏ vào `None` (1). `None` giúp nhận biết không còn node tiếp theo. Đây là dấu hiệu quan trọng cho biết đã đến cuối danh sách và là điều kiện dừng khi duyệt danh sách.
{ .annotate }

1.  Trong Python, `None` là một đối tượng đặc biệt đại diện cho **sự vắng mặt của giá trị**. 

---

## Phân loại 

Có nhiều loại danh sách liên kết, chẳng hạn:

| Loại | Mô tả |
| --- | --- |
| Danh sách liên kết đơn | Mỗi node chỉ trỏ đến node tiếp theo. |
| Danh sách liên kết đôi | Mỗi node có hai tham chiếu: một trỏ đến node tiếp theo, một trỏ đến node trước đó. |
| Danh sách liên kết vòng | Thay vì trỏ vào `None`, node cuối cùng trỏ vào lại node đầu tiên, tạo thành vòng khép kín. |

Bài học này chỉ đề cập **danh sách liên kết đơn**, từ đây gọi tắt là *"danh sách liên kết"*.

![Minh hoạ danh sách liên kết đơn](images/linked-list.svg){loading=lazy}

*Minh hoạ danh sách liên kết đơn*

---

## Ứng dụng

Danh sách liên kết có thể được áp dụng trong những bài toán mà:

- Thao tác chèn thêm hoặc xoá bớt thường xuyên diễn ra.
- Không thể biết trước số lượng phần tử cần xử lý.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/data-structure-linked-list-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| danh sách liên kết đôi | doubly linked list |
| danh sách liên kết đơn | singly linked list |
| danh sách liên kết vòng | circular linked list |