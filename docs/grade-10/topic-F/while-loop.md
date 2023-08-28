# Cấu trúc lặp while

## Đặt vấn đề
Lệnh `for` thường được viết như sau:  

``` py
Cách 1: for i in range(n):  
Cách 2: for i in range(m, n):  
Cách 3: for i in range(m, n, step):
```

Trong đó, biến `i` chạy từ số bắt đầu đến số kết thúc, nghĩa là số lần lặp của các thao tác đã được xác định trước. Nói cách khác, khi sử dụng `for` thì ta phải chỉ định rõ vòng lặp sẽ lặp bao nhiêu lần, thông qua các tham số của `range`.  

Như vậy, nếu ta không thể xác định trước được cần lặp bao nhiêu lần, thì phải làm sao?  

Câu trả lời là sử dụng vòng lặp `while`.  

## Khái niệm
Câu lệnh `while` là câu lệnh lặp, áp dụng cho trường hợp người lập trình **không biết trước số lần lặp** của các thao tác liên quan.  

Ví dụ 1:  
Xét tình huống chia số nguyên dương *n* cho 2 nhiều lần, cho đến khi không còn chia được nữa (thương bằng 0).  
Vì *n* là do người dùng nhập vào tùy ý, nên ta không thể biết trước thao tác chia cho 2 sẽ được thực hiện bao nhiêu lần.  

## Cú pháp lệnh while

``` py 
while điều_kiện:
    lệnh_1
    lệnh_2
    ...
    lệnh_n
```

Giải thích:  
- Khi chương trình chạy đến lệnh `while`, chương trình sẽ kiểm tra biểu thức `điều_kiện`. Nếu `điều_kiện` là `True`, thì `lệnh_1 ... lệnh n` sẽ được thực hiện lần thứ nhất.  
- Tiếp đó, chương trình *quay lại* kiểm tra `điều_kiện` lần nữa. Nếu `điều_kiện` vẫn là `True`, thì `lệnh_1 ... lệnh n` sẽ được thực hiện lần thứ hai.  
- Cứ thế, `lệnh 1 ... lệnh n` được lặp đi lặp lại nhiều lần, cho đến khi `điều_kiện` là `False` thì dừng.  
- Diễn nôm là, *trong khi* (while) còn đúng thì còn  làm.   

Ví dụ 2:  
Đoạn mã sau minh họa vòng lặp while. Trong đó, biểu thức điều kiện `i < n` là `True` nên lệnh `print` được lặp.  
Hơn thế nữa, vì điều kiện này luôn `True`, nên lệnh `print` được lặp vô tận, vô số lần.  

``` py linenums="1"
n = 10
i = 1
while i < n:
    print('Coding is absolutely fun.')
```

!!! warning
    Do đó, hãy cẩn thận khi bấm nút Run. Tác giả chỉ code minh họa, chứ *ảnh* không tin lắm vào độ can đảm của bạn. 

Để vòng lặp while dừng lại sau một số lần lặp nào đó, ta phải làm cho biểu thức điều kiện trở thành `False`.  
Một trong những cách thường dùng là chèn thêm lệnh để thay đổi biến `i`.  

Ví dụ 2 bis:  
Chèn thêm lệnh tăng biến `i` để điều kiện bị `False`.  

``` py linenums="1" hl_lines="5"
n = 10
i = 1
while i < n:
    print('Coding is absolutely fun.')
    i = i + 1
```

Output:  
``` pycon
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
```

Trong ví dụ 2bis, mỗi lần `print` xong, biến `i` lại tăng thêm 1 đơn vị. Khi `i` tăng đến 10, biểu thức `i < n` sẽ bị `False` (vì 10 < 10 là sai quá sai!!!), vòng lặp kết thúc.  

Ví dụ 3:  
Đoạn mã tính tổng $S = 1 + 2 + 3 + ... + n$ đã được viết bằng `for` ở bài trước như sau:  

``` py linenums="1"
S = 0
for i in range(n + 1):
    S = S + i
```

Đoạn mã này có thể được viết lại bằng `while` như sau:  

``` py linenums="1"
n = int(input('Nhập n: '))

S = 0             # Khởi tạo biến S bằng 0
i = 1
while i < n + 1:  # Trong khi i vẫn nhỏ hơn n + 1, thì lặp các thao tác:
    S = S + i     # Cộng dồn i vào S
    i = i + 1     # Tăng i thêm 1

print('Tổng là', S)
```

Output:  
``` pycon
Nhập n: 10
Tổng là 55
```

## Lệnh break

Lệnh `break` dùng để ngắt vòng lặp, ngay cả khi biểu thức điều kiện vẫn còn `True`.  

Ví dụ 4:

``` py linenums="1" hl_lines="5 6"
n = 10
i = 1
while i < n:
    print(i)
    if i == 4:  # Khi i đạt đến 4
        break   # thì ngắt vòng lặp
    i = i + 1
```

Output:  
``` pycon
1
2
3
4
```

!!! note
    Lệnh `break` cũng sử dụng được trong vòng lặp `for`.  

??? note "Nhận xét"
    - Lệnh `while` giống lệnh `if` ở chỗ kiểm tra điều kiện trước, nếu điều kiện là `True` thì mới thực hiện các thao tác nằm trong phần thân.  
    - Lệnh `while` khác lệnh `if` ở chỗ: Sau khi thực hiện các thao tác trong phần thân xong, lệnh `while` quay lại kiểm tra điều kiện, còn lệnh `if` thì kết thức, chuyển sang thực hiện các thao tác khác của chương trình.  
    - Lệnh `while` có số lần lặp ít nhất là 0 lần, và số lần lặp nhiều nhất là vô số lần.  

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1HA1SOeJo2WxA6CEdvp7reF8a52JgTXkN?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| ngắt (vòng lặp, chương trình) | break |
| lặp/duyệt với số lần không biết trước | indefinite iteration |
| vòng lặp vô tận | infinite loop |