# Cấu trúc lặp for

## Đặt vấn đề

Học sinh bị giáo viên bắt chép phạt là một tình huống đã từng xảy ra. Chẳng hạn, chép phạt 100 lần câu "Tôi hứa sẽ luôn cố gắng nâng cấp bản thân".  
Làm sao để thực hiện yêu cầu này một cách nhanh nhất, đẹp nhất và thông minh nhất?  

## Khái niệm

Câu lệnh `for` là câu lệnh **lặp**, áp dụng cho trường hợp người lập trình **biết trước số lần lặp** của thao tác nào đó.  

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

## Lệnh range(n)

``` py
for i in range(n):
```

Khi lệnh này được thực hiện, biến `i` chạy **từ 0 đến n - 1**.  
Diễn giải theo toán học, $i \in [0, n)$. Nói cách khác, lấy mốc đầu (là 0), mà không lấy mốc cuối (là n).  

Ví dụ 3:  
In ra các số từ 0 đến 9  

``` py linenums="1"
n = 10
for i in range(n):
    print(i)
```

Ví dụ 4:  
In ra các số từ 1 đến 10  

``` py linenums="1"
n = 10
for i in range(n + 1):
    print(i)
```

Trong ví dụ 4, để *lấy* được số 10, ta phải viết là `range(n + 1)`.

Ví dụ 5:  
Tính tổng $S = 1 + 2 + 3 + ... + n$  

``` py linenums="1"
n = int(input('Nhập n: '))

S = 0                   # Khởi tạo biến S bằng 0
for i in range(n + 1):  # Cho i chạy từ 0 đến n:
    S = S + i           # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)     # In kết quả ra màn hình
```

Trong ví dụ 5, `S = S + i` được gọi là thao tác *cộng dồn*, cộng dồn `i` vào `S`.  

## Lệnh range(start, stop)

Nếu không muốn bắt đầu từ 0, mà bắt đầu từ một số khác, ta bổ sung tham số  `start`.  
Diễn giải theo toán học, lệnh `range(start, stop)` này tương ứng với nửa đoạn $[start, stop)$, nghĩa là bắt đầu từ số `start` (lấy `start`) và kết thúc tại số `stop - 1` (trước `stop`).  

Lệnh `range` trong ví dụ 5 có thể được sửa lại thành `range(1, n + 1)` để bỏ qua thao tác thừa là cộng dồn số 0.  

Ví dụ 5bis:  
Tính tổng $S = 1 + 2 + 3 + ... + n$  

``` py linenums="1" hl_lines="4"
n = int(input('Nhập n: '))

S = 0                      # Khởi tạo biến S bằng 0
for i in range(1, n + 1):  # Cho i chạy từ 1 đến n:
    S = S + i              # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)        # In kết quả ra màn hình
```

Ví dụ 6:  
Tính tổng các số từ m đến n, với m, n đều là số nguyên dương.  
Ví dụ, với m = 5, n = 8, thì tổng bằng 5 + 6 + 7 + 8 = 26.   

``` py linenums="1"
m = int(input('Nhập m: '))
n = int(input('Nhập n: '))

S = 0                      # Khởi tạo biến S bằng 0
for i in range(m, n + 1):  # Cho i chạy từ m đến n:
    S = S + i              # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

## range(start, stop, step)

Mặc định sau mỗi lần lặp, biến `i` tăng 1 đơn vị.  
Nếu muốn `i` tăng 2 đơn vị, ta bổ sung tham số `step` với giá trị là 2.  
Một cách tổng quát, nếu muốn `i` nhảy *x* bước, ta bổ sung tham số `step` với giá trị là *x*.  

Ví dụ 7:  
Tính tổng các số chẵn từ 0 đến n.  

``` py linenums="1"
n = int(input('Nhập n: '))

S = 0                         # Khởi tạo biến S bằng 0
for i in range(0, n + 1, 2):  # Cho i chạy từ 0 đến n, với bước nhảy là 2:
    S = S + i                 # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

### Tham số step có giá trị âm

Nếu đặt `step` là số âm thì biến `i` sẽ chạy *từ số lớn ngược về số nhỏ*.  

Ví dụ 8:  
In các số từ 10 giảm dần về 2.

``` py linenums="1"
n = 10
for i in range(n, 1, -1):
    print(i)
```

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1jr872x9_by5xO53MJSmrbEueqQazBe37?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  