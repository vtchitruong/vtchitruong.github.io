# Cấu trúc lặp while

!!! abstract "Tóm lược nội dung"

    Bài này trình bày vòng lặp while.

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
Câu lệnh `while` là câu lệnh lặp, áp dụng cho trường hợp người lập trình **không biết trước số lần lặp** của những thao tác liên quan.

Ví dụ 1:  

Xét bài toán chuyển đổi số nguyên dương *n* từ hệ thập phân sang hệ nhị phân.

Thuật toán giải quyết bài toán này là chia *n* cho 2 nhiều lần, cho đến khi thương bằng 0.

Vì *n* do người dùng nhập vào tùy ý, nên ta không thể biết trước thao tác chia cho 2 sẽ được thực hiện bao nhiêu lần. Vì thế, ta sử dụng vòng lặp while.

## Cú pháp

!!! note "Cú pháp"
    ``` py 
    while điều_kiện:
        khối_lệnh
    ```

Giải thích:  

- Khi chạy đến lệnh `while`, chương trình sẽ kiểm tra biểu thức `điều_kiện`. Nếu `điều_kiện` là `True`, thì `khối_lệnh` sẽ được thực hiện lần thứ nhất.  
- Tiếp đó, chương trình *quay lại* kiểm tra `điều_kiện` lần nữa. Nếu `điều_kiện` vẫn là `True`, thì `khối_lệnh` sẽ được thực hiện lần thứ hai.  
- Cứ thế, `khối_lệnh` được lặp đi lặp lại nhiều lần, cho đến khi `điều_kiện` là `False` thì dừng.  
- Nói cách khác, *"trong khi"* `điều_kiện` còn đúng thì còn làm.   

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

!!! question "Câu hỏi 1"

    Hãy thể hiện chỉ số IQ của bạn bằng cách đề xuất một phương án để vòng lặp trong ví dụ 2 dừng lại sau một số lần lặp.

    ??? tip "Đáp án"

        Phương án ở ngay dưới đây.

Để vòng lặp while dừng lại sau một số lần lặp nào đó, ta phải làm cho biểu thức điều kiện trở thành `False`.

Một cách thường dùng là chèn thêm lệnh để thay đổi giá trị của biến `i`.

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

Trong ví dụ 2 bis, mỗi lần `print` xong, biến `i` lại tăng thêm 1. Khi `i` tăng đến 10, biểu thức `i < n` sẽ bị `False` (vì 10 < 10 là sai quá sai!!!), vòng lặp kết thúc.

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

!!! question "Câu hỏi 2"

    Bạn hãy đối chiếu cách viết của hai vòng lặp for và while trong ví dụ 3 theo các gợi ý sau:

    1. Cách khởi tạo giá trị của biến `i`.
    2. Biểu thức tăng `i` thêm 1.
    3. Điều kiện để dừng vòng lặp.

    ??? tip "Đáp án"

        | | for | while |
        | 1. Khởi tạo biến `i` | Do lệnh `range` | `i = 1` trước `while` |
        | 2. Tăng `i` | Do lệnh 'range` | `i = i + 1` nằm ở khối lệnh lặp của `while` |
        | 3. Điều kiện dừng lặp | Do lệnh 'range` | `i < n + 1` nằm ngay dòng `while` | 

!!! question "Câu hỏi 3"

    Bạn hãy *giả vờ* suy nghĩ xem, vòng lặp while có thể lặp ít nhất và nhiều nhất bao nhiêu lần?

    ??? tip "Đáp án"

        - While có thể không lặp lần nào, tức 0 lần, khi điều kiện bị `False` ngay từ đầu, và lặp nhiều nhất vô số lần khi điều kiện luôn `True`.

!!! question "Câu hỏi 4"

    Bạn hãy so sánh điểm giống và khác nhau giữa while và if.

    ??? tip "Đáp án"

        1. While và if giống nhau ở chỗ: Cả hai đều kiểm tra điều kiện trước, nếu điều kiện là `True` thì mới thực hiện những thao tác nằm trong phần thân.  
    
        2. While và if khác nhau ở chỗ: Sau khi thực hiện xong những thao tác trong phần thân, lệnh `while` quay lại kiểm tra điều kiện, còn lệnh `if` thì kết thúc, chuyển sang những lệnh khác khác của chương trình.  

## Lệnh break

Lệnh `break` dùng để dừng vòng lặp ở nửa chừng. Nói cách khác, đây là cách để *ngắt ngang* vòng lặp, kể cả khi `điều_kiện` vẫn còn `True`.   

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

!!! note "Lưu ý"
    Lệnh `break` cũng sử dụng được trong vòng lặp `for`.  

## Lệnh continue

Lệnh `continue` được dùng để bỏ qua các lệnh còn lại trong lần lặp hiện hành và chuyển sang lần lặp tiếp theo.

Ví dụ 5:
``` py linenums="1" hl_lines="5 6"
n = 5
i = 0
while i < n:
    i = i + 1
    if i == 3:    # Khi i đạt đến 3
        continue  # thì bỏ qua print
    print(i)
```

Output:
``` pycon
1
2
4
5
```

!!! question "Câu hỏi 5"

    Trong ví dụ 5, vì sao `n` có giá trị là `5` và điều kiện là `i < n` mà giá trị `5` vẫn được in ra màn hình?

    ??? tip "Đáp án"

        Ta chỉ cần theo dõi lại từng bước chạy của đoạn mã này.  
        Khi `i` bằng `4`, lệnh `i = i + 1` nằm trong vòng lặp while làm `i` tăng thành `5`. Tiếp đó, lệnh `print` in `5` ra màn hình.

!!! note "Lưu ý"
    Lệnh `continue` cũng sử dụng được trong vòng lặp `for`.  

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/while-loop.mm.md!}
Hình 1. Sơ đồ tóm tắt lệnh while

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1HA1SOeJo2WxA6CEdvp7reF8a52JgTXkN?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| lặp với số lần không biết trước | indefinite iteration |
| ngắt (vòng lặp, chương trình) | break |
| vòng lặp vô tận | infinite loop |