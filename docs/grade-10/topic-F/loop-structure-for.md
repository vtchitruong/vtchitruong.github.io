---
icon: simple/loop
---

# Vòng lặp for

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày:
    
    - Vòng lặp `for`
    - Hàm `range()` trong vòng lặp `for`

## Khái quát

Học sinh bị giáo viên bắt chép phạt là một tình huống đã từng xảy ra. Chẳng hạn, chép phạt 100 lần câu "Tôi hứa sẽ luôn cố gắng nâng cấp bản thân".

Làm sao để thực hiện yêu cầu này một cách nhanh nhất và đẹp nhất?

Trong lập trình, để giải quyết các công việc có tính chất lặp đi lặp lại như trên một cách nhanh chóng và chính xác, chúng ta sử dụng cấu trúc lặp.

!!! note "Vòng lặp for"

    Câu lệnh `for` là một dạng **cấu trúc lặp**, áp dụng khi ta **biết trước số lần lặp** của một thao tác nào đó.

Chẳng hạn, nếu cần thực hiện thao tác nào đó với số lần cụ thể là 100 hoặc 1000 lần thì ta có thể sử dụng vòng lặp `for`.

Vòng lặp giúp tận dụng được ưu điểm của máy tính, đó là **tốc độ xử lý cực nhanh** và **sự bền bỉ**.

---

## Cú pháp

!!! note "Cú pháp"

    ```py
    for i in range(số_lần_lặp):
        khối_lệnh
    ```

Trong đó:  

- `i` gọi là **biến chạy** hoặc **biến điều khiển**. Sau mỗi lần lặp. Giá trị của `i` sẽ tự động tăng lên.
- `range()`: là hàm tạo ra một dãy số. (Xem phần tiếp theo trong bài này).
- `số_lần_lặp` là số lần thực hiện `khối_lệnh` (gồm một hoặc nhiều lệnh). Cụ thể:
    - `i = 0`: Thực hiện `khối_lệnh` **lần đầu tiên**.
    - `i = 1`: Thực hiện `khối_lệnh` lần thứ hai.
    - `i = 2`: Thực hiện `khối_lệnh` lần tiếp theo.
    - ...
    - `i = số_lần_lặp - 1`: Thực hiện `khối_lệnh` **lần cuối cùng**.
    - `i = số_lần_lặp`: Không thực hiện nữa. Vòng lặp kết thúc.

Ví dụ:  
Dòng lệnh 4 và 5 *"giúp chép phạt"* 10 lần.

```py linenums="1" hl_lines="4-5"
if __name__ == '__main__':
    times = 10

    for i in range(times):
        print('Programming is my most favorite subject')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
Programming is my most favorite subject
```

Ví dụ:  
Ta thay đổi số lần lặp lưu trong biến `times` ở dòng 2, và bổ sung hàm `print()` để in ra số thứ tự của mỗi dòng.

```py linenums="1" hl_lines="2 4-5"
if __name__ == '__main__':
    times = 20

    for i in range(times):
        print(f'Lần {i + 1}: Programming is my most favorite subject')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Lần 1: Programming is my most favorite subject
Lần 2: Programming is my most favorite subject
Lần 3: Programming is my most favorite subject
Lần 4: Programming is my most favorite subject
Lần 5: Programming is my most favorite subject
```

---

## Hàm range

Hàm `range()` dùng để tạo ra một dãy số.

Tuỳ thuộc vào tham số đầu vào mà nó có thể tạo ra những dãy số khác nhau. Theo đó, có ba cách viết hàm `range()`, ứng với số lượng tham số.

### range(stop)

Đây là dạng đơn giản nhất, chỉ gồm một tham số: **mốc cuối** (mốc kết thúc).

!!! note "Cú pháp range() một tham số"

    ```py
    for i in range(stop):
    ```

Khi lệnh này được thực hiện, biến `i` chạy từ `0` đến `stop - 1`.

Trong toán học, điều này tương đương nửa khoảng: $i \in [0, stop)$. Nghĩa là, lấy mốc đầu (là `0`), nhưng không lấy mốc cuối (là `stop`).  

!!! tip "Phạm vi do `range()` tạo ra"

    Lấy mốc đầu, bỏ mốc cuối.

Ví dụ:  
Dòng lệnh 5 và 6 in ra các số từ 0 đến 9.

```py linenums="1" hl_lines="5-6"
if __name__ == '__main__':
    n = 10

    # dạng range() một tham số
    for i in range(n):
        print(i, end=' ')

    print()
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
0 1 2 3 4 5 6 7 8 9 
```

Ví dụ:  
Dòng lệnh 10 và 11 in ra các số từ 0 đến 10.

```py linenums="10"
    for i in range(n + 1):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
0 1 2 3 4 5 6 7 8 9 10 
```

### range(start, stop)

Dạng có hai tham số: **mốc đầu** và **mốc cuối**.

!!! note "Cú pháp range() hai tham số"

    ```py
    for i in range(start, stop):
    ```

Khi lệnh này được thực hiện, biến `i` chạy từ `start` đến `stop - 1`.

Trong toán học, điều này tương đương nửa khoảng: $i \in [start, stop)$.

Ví dụ:  
Dòng lệnh 15 và 16 in ra các số từ 5 đến 9.

```py linenums="15" hl_lines="2-3"
    # dạng range() hai tham số
    for i in range(5, n):
        print(i, end=' ')

    print()
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
5 6 7 8 9 
```

### range(start, stop, step)

Dạng đầy đủ gồm ba ba tham số: **mốc bắt đầu**, **mốc kết thúc** và **bước chạy**.

!!! note "Cú pháp range() ba tham số"

    ```py
    for i in range(start, stop, step):
    ```

Khi lệnh này được thực hiện, biến `i` chạy từ `start` đến `stop - 1`. Đồng thời, sau mỗi lần lặp, `i` không tăng thêm `1`, mà tăng thêm `step`.

Ví dụ:  
Dòng lệnh 22 và 23 in ra các số lẻ từ 1 đến 9.

```py linenums="21" hl_lines="2-3"
    # dạng range() ba tham số
    for i in range(1, n, 2):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
1 3 5 7 9 
```

Ví dụ:  
Dòng lệnh 27 và 28 in ra các số từ 10 ngược về 1.

```py linenums="27"
    for i in range(n, 0, -1):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
10 9 8 7 6 5 4 3 2 1 
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1jr872x9_by5xO53MJSmrbEueqQazBe37?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/loop-structure-for.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lặp đi lặp lại | repeatedly |
| số lần lặp | number of iterations |
| vòng lặp | loop |