# Khái quát về hàng đợi

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về cấu trúc dữ liệu hàng đợi (queue).

## Khái niệm

!!! note "Hàng đợi"

    Là cấu trúc dữ liệu hoạt động theo nguyên tắc **vào trước, ra trước** (**FIFO - First In, First Out**).

Nghĩa là, trong hàng đợi, phần tử thêm vào đầu tiên sẽ được lấy ra đầu tiên, phần tử thêm vào sau cùng sẽ được lấy ra sau cùng.

Vi dụ:  
Một số hình ảnh minh hoạ cho hàng đợi:

- Xếp hàng trước quầy thanh toán trong siêu thị.
- Xếp hàng chờ đến lượt phục vụ trong các cơ quan hành chính hoặc cơ sở dịch vụ.

Hình dưới đây minh hoạ hàng đợi gồm năm phần tử. Mỗi phần tử là một chuỗi.

![Minh hoạ hàng đợi](./images/queue.svg){loading=lazy }  

*Minh hoạ hàng đợi*

Các thao tác cơ bản trên hàng đợi bao gồm:

- Thêm phần tử vào cuối hàng đợi.
- Lấy phần tử ở đầu ra khỏi hàng đợi.

---

## Triển khai hàng đợi

Hàng đợi có thể được biểu diễn bằng các cấu trúc dữ liệu khác nhau như mảng, danh sách liên kết hoặc các cấu trúc dữ liệu phức tạp hơn tùy thuộc vào yêu cầu cụ thể.

Trong Python, ta có thể triển khai hàng đợi bằng nhiều cách, bao gồm:

- Cấu trúc `list`, với các hàm như `append()` và `pop()` (1).
    { .annotate }

    1.  `append()`: thêm phần tử vào cuối danh sách.
        `pop(0)`: xoá phần tử đầu tiên khỏi danh sách.

- Lớp `queue.PriorityQueue`: hàng đợi mà trong đó các phần tử được truy xuất dựa trên độ ưu tiên, phần tử có độ ưu tiên cao hơn sẽ được ra trước.
- Lớp `queue.Queue`: hàng đợi hoạt động theo nguyên tắc FIFO.

Bài học này dùng lớp `Queue` của module `queue` để triển khai hàng đợi.

---

## Chương trình minh hoạ

Chương trình sau đây minh hoạ một số thao tác cơ bản trên hàng đợi.

### Nạp module

Dòng lệnh 1 nạp lớp `Queue` của module `queue`.    

```py linenums="1"
from queue import Queue
```

### Khởi tạo

Dòng lệnh 5 khởi tạo hàng đợi `q`.

```py linenums="1" hl_lines="3-5"
from queue import Queue

if __name__ == '__main__':
    # Khởi tạo hàng đợi
    q = Queue()
```

### Thêm phần tử

Để thêm phần tử vào hàng đợi, ta dùng phương thức `put()`.

Các dòng lệnh từ 8 đến 12 lần lượt nạp từng phần tử, là chuỗi, vào hàng đợi.

Sau khi thực hiện xong, phần tử ở đầu hàng đợi là chuỗi `'Bernard Arnault'`, phần tử ở cuối hàng đợi là chuỗi `'Larry Ellison'`.

```py linenums="1" hl_lines="7-12"
from queue import Queue

if __name__ == '__main__':
    # Khởi tạo hàng đợi
    q = Queue()

    # Thêm phần tử vào hàng đợi
    q.put('Bernard Arnault')
    q.put('Elon Musk')
    q.put('Jeff Bezos')
    q.put('Mark Zuckerberg')
    q.put('Larry Ellison')
```

### In hàng đợi

Module `queue` không có hàm in tất cả phần tử của hàng đợi. Thay vào đó, ta có thể chuyển đổi hàng đợi thành cấu trúc `list` trước khi in.

Dòng lệnh 16 chuyển đổi hàng đợi `s` thành `list`, rồi gọi hàm `print()` để in ra danh sách. Việc chuyển đổi này được thực hiện trên bản sao của hàng đợi, nên không làm ảnh hưởng đến hàng đợi.

```py linenums="1" hl_lines="14-16"
from queue import Queue

if __name__ == '__main__':
    # Khởi tạo hàng đợi
    q = Queue()

    # Thêm phần tử vào hàng đợi
    q.put('Bernard Arnault')
    q.put('Elon Musk')
    q.put('Jeff Bezos')
    q.put('Mark Zuckerberg')
    q.put('Larry Ellison')

    # In hàng đợi bằng cách chuyển đổi sang list
    print('Hàng đợi theo thứ tự của list:', end=' ')
    print(*list(q.queue)) # (1)!
```
{ .annotate }

1.  Toán tử `*` dùng để *"mở gói"* hoặc *"giải nén"* danh sách.

Chạy chương trình trên, kết quả như sau:

```pycon
Hàng đợi theo thứ tự của list: Bernard Arnault Elon Musk Jeff Bezos Mark Zuckerberg Larry Ellison
```

!!! warning "Lưu ý"

    Việc chuyển đổi sang `list` chỉ là đặc trưng của Python, chứ không phổ quát cho mọi ngôn ngữ.

    Cách truy xuất phổ quát phải là dùng vòng lặp để lấy ra từng phần tử nằm ở đầu của hàng đợi theo nguyên tắc FIFO.

### Truy xuất phần tử

Như đã đề cập ở phần Lưu ý, các dòng lệnh từ 21 đến 23 truy xuất từng phần tử trong hàng đợi bằng vòng lặp while. Trong đó:

- Phương thức `empty()` trả về `True` nếu hàng đợi rỗng, không còn phần tử nào.
- Phương thức `get()` có tác dụng lấy phần tử nằm ở đầu ra khỏi hàng đợi.

```py linenums="1" hl_lines="18-23"
from queue import Queue

if __name__ == '__main__':
    # Khởi tạo hàng đợi
    q = Queue()

    # Thêm phần tử vào hàng đợi
    q.put('Bernard Arnault')
    q.put('Elon Musk')
    q.put('Jeff Bezos')
    q.put('Mark Zuckerberg')
    q.put('Larry Ellison')

    # In hàng đợi bằng cách chuyển đổi sang list
    print('Hàng đợi theo thứ tự của list:', end=' ')
    print(*list(q.queue))

    # In hàng đợi theo FIFO bằng vòng lặp
    print('Hàng đợi được truy xuất theo FIFO:', end=' ')

    while not q.empty():
        item = q.get()
        print(item, end=' ')
```

Chạy chương trình trên, kết quả như sau:

```pycon hl_lines="2"
Hàng đợi theo thứ tự của list: Bernard Arnault Elon Musk Jeff Bezos Mark Zuckerberg Larry Ellison
Hàng đợi được truy xuất theo FIFO: Bernard Arnault Elon Musk Jeff Bezos Mark Zuckerberg Larry Ellison
```

!!! warning "Lưu ý"

    Sau khi thực hiện xong vòng lặp while, hàng đợi không còn phần tử nào nữa.

---

## Ứng dụng

Một số ứng dụng của hàng đợi là:

- Xử lý hàng đợi công việc: phổ biến trong hệ thống đa nhiệm, lập lịch công việc như in ấn, xử lý tác vụ nền, v.v...
- Quản lý tài nguyên: bộ nhớ đệm (buffer), lập lịch cho CPU scheduling, quản lý kết nối mạng, v.v...
- Xử lý sự kiện trong các hệ thống phần mềm.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1S16HMuP18hXlaO-DMID0enxqFQuU-biK?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| hàng đợi | queue |
| phần tử đầu | front element |
| phần tử cuối | rear element |
| vào trước, ra trước | FIFO - First In, First Out |