---
grade: "lớp 12"
grade_url: "/grade-12/grade-12-index/"

level: "chuyên để"
level_url: "/special-topics/g12-cs/topic-index/"

difficulty: "easy"
updated: "29/09/2026"
---

# Thao tác cơ bản trên hàng đợi

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số thao tác cơ bản trên hàng đợi thông qua việc mô phỏng tiến trình phục vụ tại ngân hàng.

## Bài toán

Một ngân hàng cần xây dựng hệ thống quản lý tiến trình phục vụ khách hàng. Khi đến ngân hàng, khách hàng sẽ được mời ngồi ở hàng ghế chờ và chờ đến lượt được phục vụ. 

**Yêu cầu:**  
Viết chương trình mô phỏng tiến trình như trên bằng các thao tác:

- Thêm khách hàng vô hàng đợi.
- Lấy từng khách hàng ra khỏi hàng đợi để phục vụ.

**Input:**  
Tên các khách hàng.

**Output:**  
Tên từng khách hàng được phục vụ.

---

## Viết chương trình

**Bước 0:**  
Nạp lớp `Queue` của module `queue`.    

```py linenums="1"
from queue import Queue
```

**Bước 1:**  
Khởi tạo hàng đợi `q`.

```py linenums="3"
if __name__ == '__main__':
    # Khởi tạo hàng đợi
    q = Queue()
```

**Bước 2:**  
Thêm phần tử vô hàng đợi.

!!! note "Thêm phần tử"

    Để thêm phần tử vô vị trí cuối của hàng đợi, ta dùng phương thức `put()`.

Các dòng lệnh từ 8 đến 14 lần lượt thêm từng chuỗi vô hàng đợi, mỗi chuỗi là tên một khách hàng.

```py linenums="7"
    # Thêm phần tử vô hàng đợi
    q.put('Elon Musk')
    q.put('Jeff Bezos')
    q.put('Mark Zuckerberg')
    q.put('Bernard Arnault')
    q.put('Larry Ellison')
    q.put('Jensen Huang')
    q.put('Andrej Karpathy')
```

**Bước 3:**  
In hàng đợi ra màn hình.

!!! note "In hàng đợi"

    Để in các phần tử trong hàng đợi ra màn hình, ta dùng hàm `print()` và toán tử giải nén `*` (unpack).

Dòng lệnh 18 giải nén/mở gói hàng đợi `q.queue` rồi gọi hàm `print()` để in ra màn hình.

```py linenums="16"
    # In hàng đợi
    print('Hàng đợi hiện tại:')
    print(*q.queue, sep=', ') # (1)!
```
{ .annotate }

1.  Tham số `sep` dùng để thêm dấu phẩy `', '` phân cách các phần tử khi in ra.

**Bước 3b:**  
Chạy chương trình trên, kết quả như sau:

```pycon
Hàng đợi hiện tại:
Elon Musk, Jeff Bezos, Mark Zuckerberg, Bernard Arnault, Larry Ellison, Jensen Huang, Andrej Karpathy
```

**Bước 4:**  
Lấy phần tử ra khỏi hàng đợi.

!!! note "Lấy phần tử ra"

    Để lấy phần tử nằm ở vị trí đầu ra khỏi hàng đợi, ta dùng phương thức `get()`.

```py linenums="20"
    # Lấy phần tử ra khỏi hàng đợi
    customer = q.get()
    print(f'Đang phục vụ {customer}')

    customer = q.get()
    print(f'Đang phục vụ {customer}')

    customer = q.get()
    print(f'Đang phục vụ {customer}')

    customer = q.get()
    print(f'Đang phục vụ {customer}')

    customer = q.get()
    print(f'Đang phục vụ {customer}')

    customer = q.get()
    print(f'Đang phục vụ {customer}')
    
    customer = q.get()
    print(f'Đang phục vụ {customer}')
```

**Bước 4b:**  
Chạy chương trình trên, kết quả như sau:

```pycon
Đang phục vụ Elon Musk
Đang phục vụ Jeff Bezos
Đang phục vụ Mark Zuckerberg
Đang phục vụ Bernard Arnault
Đang phục vụ Larry Ellison
Đang phục vụ Jensen Huang
Đang phục vụ Andrej Karpathy
```

!!! warning "Lưu ý"

    Sau khi thực hiện xong các dòng lệnh `get()`, hàng đợi không còn phần tử nào.

**Bước 4c:**  
Lấy phần tử ra khỏi hàng đợi bằng vòng lặp while.

Vì các dòng lệnh từ 21 đến 40 được thực hiện tương tự nhiều lần nên ta thay chúng bằng vòng lặp.

Vì không thể biết thao tác lấy phần tử ra được thực hiện bao nhiêu lần nên ta dùng vòng lặp while. Điều kiện của vòng lặp while là kiểm tra hàng đợi còn phần tử hay không. Khi nào còn phần tử thì còn thực hiện.

!!! note "Kiểm tra hàng đợi rỗng"

    Để kiểm tra hàng đợi còn hay không còn phần tử, ta dùng phương thức `empty()`.

    - `empty()` trả về `True` nghĩa là hàng đợi không còn phần tử nào.
    - `empty()` trả về `False` nghĩa là hàng đợi vẫn còn ít nhất một phần tử.

Thay các dòng lệnh từ 21 đến 40 bằng các dòng sau:

```py linenums="20"
    # Lấy phần tử ra khỏi hàng đợi
    while not q.empty():
        customer = q.get()
        print(f'Đang phục vụ {customer}')
```

**Bước 4d:**  
Chạy chương trình trên, kết quả vẫn như cũ.

!!! warning "Lưu ý"

    Sau khi thực hiện xong vòng lặp while, hàng đợi không còn phần tử nào.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1S16HMuP18hXlaO-DMID0enxqFQuU-biK?usp=sharing){target="_blank"}

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/special-topics/queue/queue-fundamental-operations.py){target="_blank"}