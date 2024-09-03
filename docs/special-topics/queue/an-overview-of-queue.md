# Khái quát về hàng đợi

## Khái niệm

**Hàng đợi** là cấu trúc dữ liệu phổ biến trong lập trình, được sử dụng để quản lý các phần tử theo thứ tự "vào trước, ra trước" (FIFO - First In, First Out).

Nói cách khác, trong hàng đợi, phần tử đầu tiên được thêm vào sẽ là phần tử đầu tiên được xóa khỏi hàng đợi.

Một số ứng dụng của hàng đợi là: xử lý hàng đợi công việc, quản lý tài nguyên, xử lý sự kiện trong các hệ thống phần mềm.

Các thao tác cơ bản trên hàng đợi bao gồm:

- Thêm phần tử vào cuối hàng đợi (enqueue)
- Xóa phần tử ở đầu hàng đợi (dequeue).

và một số thao tác khác.

Hàng đợi có thể được biểu diễn bằng các cấu trúc dữ liệu khác nhau như mảng, danh sách liên kết hoặc các cấu trúc dữ liệu phức tạp hơn tùy thuộc vào yêu cầu cụ thể.

Trong Python, hàng đợi có thể được triển khai bằng kiểu dữ liệu `list` hoặc module có sẵn là `queue`. Module `queue` gồm có các lớp:

- `Queue`: hàng đợi vào trước, ra trước (FIFO).
- `LifoQueue`: hàng đợi vào sau, ra trước (LIFO), hoạt động giống như một ngăn xếp.
- `PriorityQueue`: hàng đợi mà trong đó các phần tử được truy xuất dựa trên độ ưu tiên, phần tử có độ ưu tiên thấp hơn sẽ được ra trước.

Bài học này chỉ đề cập đến `Queue`.

## Triển khai hàng đợi






Ngoài ra, các thao tác như kiểm tra hàng đợi có rỗng hay không, truy cập phần tử ở đầu hàng đợi mà không xóa nó, và lấy kích thước của hàng đợi cũng là các hoạt động thường được thực hiện.


## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| hàng đợi | queue |
| vào trước, ra trước | FIFO - First In, First Out |