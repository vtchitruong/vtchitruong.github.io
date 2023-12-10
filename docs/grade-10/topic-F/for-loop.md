# Cấu trúc lặp for

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày vòng lặp `for` và những khái niệm liên quan như `range`, `start`, `stop`, `step`.

## Đặt vấn đề

Học sinh bị giáo viên bắt chép phạt là một tình huống đã từng xảy ra. Chẳng hạn, chép phạt 100 lần câu "Tôi hứa sẽ luôn cố gắng nâng cấp bản thân".

Làm sao để thực hiện yêu cầu này một cách nhanh nhất, đẹp nhất và thông minh nhất?  

## Khái niệm

Câu lệnh `for` là câu lệnh **lặp**, áp dụng cho trường hợp người lập trình **biết trước số lần lặp** của thao tác nào đó. Nói cách khác, nếu ta thấy cần phải thực hiện thao tác nào đó 100 lần hoặc 1000 lần sẽ ra được kết quả, thì ta có thể sử dụng vòng lặp `for`.

Các loại vòng lặp, trong đó có `for`, được sử dụng nhằm tận dụng sức mạnh "*trâu bò*" của máy tính, thực hiện lặp đi lặp lại những thao tác nào đó cho đến khi ra được kết quả.

## Câu lệnh for cơ bản

!!! note "Cú pháp"
    ``` py
    for i range(số_lần_lặp):
        khối_lệnh
    ```

Trong đó:  

- `i` gọi là **biến chạy** hoặc **biến điều khiển**. `i` có giá trị xuất phát từ 0, lần lượt thay đổi thành 1, 2, 3, v.v... cho đến $số lần lặp - 1$.
- Mặc định `i` chạy từ 0, ta vẫn có thể chỉ định một giá trị xuất phát khác. (Xem những phần tiếp theo trong bài này).
- `số_lần_lặp` là số lần thực hiện `khối_lệnh` (gồm một hoặc nhiều lệnh). Cụ thể:
    - i = 0: Thực hiện `khối_lệnh` lần đầu tiên.
    - i = 1: Thực hiện `khối_lệnh` lần thứ 2.
    - i = 2: Thực hiện `khối_lệnh` lần tiếp theo.
    - ...
    - i = số_lần_lặp - 1: Thực hiện `khối_lệnh` lần cuối cùng.
    - i = số_lần_lặp: Không thực hiện nữa. Vòng lặp kết thúc.

Ví dụ 1:  
Đoạn mã sau *giúp chép phạt* 100 lần.
``` py linenums="1"
n = 100
for i in range(n):
    print('Programming is my most favorite subject.')
```

Ví dụ 2:  
Đoạn mã sau *giúp chép phạt* 10 ngàn lần.
``` py linenums="1"
n = 10000
for i in range(n):
    print('Programming is my most favorite subject.')
```
!!! warning
    
    Tác giả chỉ code minh họa, và *ảnh* không nghĩ rằng bạn sẽ bấm *run* cái ví dụ này đâu.

## Lệnh range

### range(stop)

Trường hợp `range` chỉ có một tham số duy nhất:

``` py
for i in range(stop):
```

Khi lệnh này được thực hiện, biến `i` chạy **từ `0` đến `stop - 1`**.

Diễn giải theo toán học là: $i \in [0, stop)$. Nói cách khác, lấy mốc đầu (là `0`), nhưng không lấy mốc cuối (là `stop`).  

Ví dụ 3:  
In ra các số từ 0 đến 9.
``` py linenums="1"
n = 10
for i in range(n):
    print(i)
```

Output:
``` pycon
0
1
2
3
4
5
6
7
8
9
```

Ví dụ 4:  
In ra các số từ 0 đến 10.

``` py linenums="1"
n = 10
for i in range(n + 1):
    print(i)
```

Output:  
``` pycon
0
1
2
3
4
5
6
7
8
9
10
```

Trong ví dụ 4, để *lấy* được số 10, ta phải viết là `range(n + 1)`.

!!! question "Câu hỏi 1"

    Sau khi thực hiện đoạn mã dưới đây, kết quả in trên màn hình là gì?

    ``` py linenums="1"
    n = 5
    for i in range(n - 1):
        print(i)
    ```

    ??? tip "Đáp án"

        0  
        1  
        2  
        3  

Ví dụ 5:  
Tính tổng $S = 1 + 2 + 3 + ... + n$.
``` py linenums="1"
n = int(input('Nhập n: '))

S = 0                   # Khởi tạo biến S bằng 0
for i in range(n + 1):  # Cho i chạy từ 0 đến n:
    S = S + i           # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)     # In kết quả ra màn hình
```

Output:
``` pycon
Nhập n: 7
Tổng là 28
```

Trong ví dụ 5, `S = S + i` được gọi là thao tác *cộng dồn*, cộng dồn `i` vào `S`.  

### range(start, stop)

Trường hợp `range` có hai tham số:

``` py
for i in range(start, stop):
```

Trường hợp này áp dụng khi ta không muốn `i` chạy từ `0`, mà từ một số khác, cụ thể là từ `start`.

Diễn giải theo toán học là: $[start, stop)$. Nói cách khác, lấy mốc bắt đầu là `start` và mốc kết thúc là `stop - 1`, tức ngay trước `stop`.  

Ví dụ 5 bis:  
Vẫn là tính tổng $S = 1 + 2 + 3 + ... + n$.

Lệnh `range` trong ví dụ 5 có thể được sửa lại thành `range(1, n + 1)` để bỏ qua thao tác thừa là cộng dồn số 0.

``` py linenums="1" hl_lines="4"
n = int(input('Nhập n: '))

S = 0                      # Khởi tạo biến S bằng 0
for i in range(1, n + 1):  # Cho i chạy từ 1 đến n:
    S = S + i              # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)        # In kết quả ra màn hình
```

Output:
``` pycon
Nhập n: 7
Tổng là 28
```

Ví dụ 6:  
Tính tổng các số từ m đến n, với m, n đều là số nguyên dương.  
Chẳng hạn, với m = 5, n = 8, thì tổng bằng 5 + 6 + 7 + 8 = 26.
``` py linenums="1"
m = int(input('Nhập m: '))
n = int(input('Nhập n: '))

S = 0                      # Khởi tạo biến S bằng 0
for i in range(m, n + 1):  # Cho i chạy từ m đến n:
    S = S + i              # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

Output:  
``` pycon
Nhập m: 5
Nhập n: 8
Tổng là 26
```

!!! question "Câu hỏi 2"

    Biết rằng m và n vẫn được nhập giá trị lần lượt là 5 và 8.  
    Nếu dòng lệnh for của ví dụ 6 được sửa lại thành `for i in range(m, n):` thì kết quả in ra màn hình là gì?

    ??? tip "Đáp án"

        Lúc này, biến `i` chạy từ 5 đến 7. Biến `S` sẽ lần lượt được cộng dồn với 5, 6 và 7.  
        Do đó, `S` có giá trị là 18.

### range(start, stop, step)

Trường hợp `range` có đầy đủ ba tham số:

``` py
for i in range(start, stop, step):
```

Trường hợp này áp dụng khi ta không muốn biến `i` tăng 1 đơn vị sau mỗi lần lặp, mà tăng theo `step` nào đó.

Chẳng hạn, nếu muốn `i` tăng 2 đơn vị, ta thiết lập tham số `step` là 2.

Một cách tổng quát, nếu muốn `i` ***nhảy*** $x$ bước, ta thiết lập `step` là $x$.  

Ví dụ 7:  
Tính tổng các số chẵn từ 0 đến n.
``` py linenums="1"
n = int(input('Nhập n: '))

S = 0                         # Khởi tạo biến S bằng 0
for i in range(0, n + 1, 2):  # Cho i chạy từ 0 đến n, với bước nhảy là 2:
    S = S + i                 # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

Output:
``` pycon
Nhập n: 6
Tổng là 12
```

!!! question "Câu hỏi 3"

    Bạn hãy điều chỉnh dòng lệnh for của ví dụ 7 để đoạn mã trở thành tính tổng các số lẻ.

    ??? tip "Đáp án"

        `for i in range(1, n + 1, 2):`

### Tham số step có giá trị âm

Nếu đặt `step` là số âm thì biến `i` sẽ chạy ***từ số lớn ngược về số nhỏ***.  

Ví dụ 8:  
In các số từ 10 giảm dần về 2.  
``` py linenums="1"
n = 10
for i in range(n, 1, -1):
    print(i)
```

Output:  
``` pycon
10
9
8
7
6
5
4
3
2
```

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/for-loop.mm.md!}
Hình 1. Sơ đồ tóm tắt câu lệnh for

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1jr872x9_by5xO53MJSmrbEueqQazBe37?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lặp đi lặp lại | repeatedly |
| số lần lặp | number of iterations |
| vòng lặp | loop |