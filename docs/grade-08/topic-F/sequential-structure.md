---
icon: material/view-sequential
---

# Cấu trúc tuần tự

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - Cấu trúc tuần tự.
    - Tạo một chương trình Scratch đơn giản.

## Cấu trúc tuần tự

Khi đọc một cuốn truyện, ta thường đọc từ trang 1, hết trang 1 rồi mới đến trang 2, trang 3, và cứ thế đến hết cuốn truyện. Cách đọc này gọi là *tuần tự*.

Lập trình cũng vậy, khi các khối trong script được thực hiện lần lượt từ trên xuống, không bỏ sót khối nào, thì đó được gọi là **cấu trúc tuần tự**.

Nói cách khác, **cấu trúc tuần tự** nghĩa là các bước được sắp xếp liên tiếp nhau.

## Tạo chương trình Scratch đơn giản

### Yêu cầu

Tạo chương trình Scratch làm cho nhân vật (sprite) Mèo di chuyển dọc hai cạnh của màn hình.

### Thuật toán

Trước khi tạo chương trình, ta cần xác định ý tưởng hoặc thuật toán, chẳng hạn như sau:

1. Đặt nhân vật (sprite) Mèo tại vị trí xuất phát là góc trái dưới của sân khấu (stage).
2. Cho Mèo hướng mặt lên trên.
3. Di chuyển dọc cạnh trái.
4. Đổi hướng, quay mặt sang phải.
5. Di chuyển dọc cạnh trên.

Có thể thấy, thuật toán này được mô tả theo *cấu trúc tuần tự*.

### Tạo chương trình

Dựa theo thuật toán trên, ta lần lượt kéo các khối lệnh (block) tương ứng như sau:

**Bước 0:**

Mở chương trình Scratch.

Lưu tập tin với tên tuỳ ý.

Tên tập tin Scratch có phần mở rộng là `.sb3`.

![Thao tác lưu tập tin](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNYC6WFWATUNEl5PQ/root/content){loading=lazy width=480}

**Bước 1:** Thiết lập vị trí xuất phát

Trong nhóm **Motion**, kéo khối `go to x: ( ) y: ( )`.

Đặt tham số tọa độ là `x: (-200)` và `y: (-150)` (1).
{ .annotate }

1.  Ứng với góc trái dưới của màn hình sân khấu (stage).


![Thiết lập vị trí xuất phát của Mèo](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNXfjOj7zEIIG3drw/root/content){loading=lazy}

**Bước 2:** Hướng mặt lên trên

Trong nhóm **Motion**, kéo khối `point in direction ( )`.

Đặt tham số `direction` là `0` (1).
{ .annotate }

1.  `direction 0` nghĩa là 0 độ.

    Khi thiết lập tham số `direction`, có một mặt đồng hồ chọn hướng (direction picker) hiện lên. Ta có thể chọn hướng bằng cách xoay mũi tên trên mặt đồng hồ này.

![Hướng mặt lên trên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNWMEGjXb3HAwDkbg/root/content){loading=lazy}

!!! tip "Lưu tập tin"

    Nhớ thường xuyên lưu tập tin: **File** > **Save to your computer**.

**Bước 3:** Di chuyển dọc cạnh trái

Trong nhóm **Motion**, kéo khối `glide 1 secs to x: ( ) y: ( )`.

Đặt tham số thời gian là `2 secs` (1), `x: (-200)` và `y: (150)` (2).
{ .annotate }

1.  Tổng thời gian di chuyển là 2 giây.

2.  Ứng với góc trái trên của màn hình sân khấu (stage).

![Di chuyển dọc cạnh trái](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNVYwjauHsbxru9qg/root/content){loading=lazy}

!!! tip "Chạy thử"

    Ta có thể click chuột vào bất kỳ khối (block) nào để chạy thử chương trình.

**Bước 4:** Quay mặt sang phải

Trong nhóm **Motion**, kéo khối `point in direction (90)`.

![Quay mặt sang phải](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNUYYH8tg0Frq9wdA/root/content){loading=lazy}

**Bước 5:** Di chuyển dọc cạnh trên

Trong nhóm **Motion**, kéo khối `glide 3 secs to x: (200) y: (150)` (1).
{ .annotate }

1.  Ứng với góc phải trên của màn hình sân khấu (stage).

![Di chuyển dọc cạnh trên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNTY5eKVAdZKgqHrg/root/content){loading=lazy}

Ngoài ra, ta cần cho máy tính biết phải bắt đầu chạy từ lệnh nào, bằng cách:

**Bước 6:** Tạo điểm bắt đầu chương trình

Trong nhóm **Events**, kéo khối `when green flag clicked` (1).
{ .annotate }

1.  Khối `When green flag clicked` đóng vai trò là nút "Bắt đầu" cho toàn bộ chương trình.

![Tạo điểm bắt đầu chương trình](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNSqej-5LSQr7HclA/root/content){loading=lazy}

Bây giờ, ta có thể bấm vào nút lá cờ xanh để xem sản phẩm.

![Chạy chương trình](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsNNgzRs98Vv6cmtMBw/root/content){loading=lazy width=480}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cấu trúc tuần tự | sequential structure |
| hướng | direction |
| trượt | glide |
