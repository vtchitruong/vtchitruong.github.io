---
icon: simple/loop
---

# Vòng lặp for

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày vòng lặp `for` và những khái niệm liên quan như `range`, `start`, `stop`, `step`.

## Khái quát

Học sinh bị giáo viên bắt chép phạt là một tình huống đã từng xảy ra. Chẳng hạn, chép phạt 100 lần câu "Tôi hứa sẽ luôn cố gắng nâng cấp bản thân".

Làm sao để thực hiện yêu cầu này một cách nhanh nhất và đẹp nhất?

Trong lập trình, để giải quyết các công việc có tính chất lặp đi lặp lại như trên một cách nhanh chóng và chính xác, chúng ta sử dụng cấu trúc lặp.

!!! note "Khái niệm vòng lặp for"

    Câu lệnh `for` là một dạng **cấu trúc lặp**, áp dụng khi ta **biết trước số lần lặp** của một thao tác nào đó.

Chẳng hạn, nếu cần thực hiện thao tác nào đó với số lần cụ thể là 100 hoặc 1000 lần thì ta có thể sử dụng vòng lặp `for`.

Vòng lặp giúp tận dụng được ưu điểm của máy tính, đó là **tốc độ xử lý cực nhanh** và **sự bền bỉ**.

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

Để 
Đoạn mã sau in ra số thứ tự *"giúp chép phạt"* 20 lần và kèm theo số thứ tự.













    ??? tip "Đáp án"

        Tương tự ví dụ 1, `range(10000)` đồng nghĩa `print` được thực hiện 10000 lần.
        
        Tuy nhiên, tác giả chỉ code minh họa, chứ *ảnh* không nghĩ là bạn sẽ bấm *run* đoạn mã này đâu.


!!! question "Câu hỏi 1"

    ```py linenums="1"
    n = 10000
    for i in range(n):
        print('Programming is my most favorite subject.')
    ```

    Dòng lệnh `print` trong đoạn mã trên sẽ được thực hiện bao nhiêu lần?

    <div>
    <form id="answer-form">
        <label for="userInput_1">Lời giải của bạn:</label><br>
        <textarea id="userInput_1" name="userInput_1" required></textarea>
        <textarea id="solution_1">10000</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_1', 'solution_1', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Tương tự ví dụ 1, `range(10000)` đồng nghĩa `print` được thực hiện 10000 lần.
        
        Tuy nhiên, tác giả chỉ code minh họa, chứ *ảnh* không nghĩ là bạn sẽ bấm *run* đoạn mã này đâu.

## Hàm range

Hàm `range()` dùng để tạo ra một dãy số. Tuỳ thuộc vào tham số đầu vào mà nó có thể tạo ra những dãy số khác nhau.

Theo đó, có ba cách viết hàm `range()`, ứng với số lượng tham số khác nhau.

### range(stop)

Đây là dạng đơn giản nhất, chỉ gồm một tham số.

```py
for i in range(stop):
```

Khi lệnh này được thực hiện, biến `i` chạy **từ `0` đến `stop - 1`**.

Trong toán học, điều này tương đương nửa khoảng $i \in [0, stop)$. Nghĩa là, lấy mốc đầu (là `0`), nhưng không lấy mốc cuối (là `stop`).  

!!! tip "Phạm vi do `range()` tạo ra"

    Lấy mốc đầu, bỏ mốc cuối.

Ví dụ:  
Dòng lệnh 4 và 5 in ra các số từ 0 đến 9.

```py linenums="1" hl_lines="4-5"
if __name__ == '__main__':
    n = 10

    for i in range(n):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
0 1 2 3 4 5 6 7 8 9 
```

Ví dụ:  
Dòng lệnh 4 và 5 in ra các số từ 0 đến 10.

```py linenums="1" hl_lines="9-10"
if __name__ == '__main__':
    n = 10

    for i in range(n):
        print(i, end=' ')

    print()

    for i in range(n + 1):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
0 1 2 3 4 5 6 7 8 9 10 
```

Trong ví dụ 3, để *lấy* được số 10, ta phải viết là `range(n + 1)`.

    Sau khi thực hiện đoạn mã dưới đây, kết quả in trên màn hình là gì?

    ```py linenums="1"
    n = 5
    for i in range(n - 1):
        print(i)
    ```


    ??? tip "Đáp án"

        0  
        1  
        2  
        3  

Ví dụ 4:  
Tính tổng $S = 1 + 2 + 3 + ... + n$.

```py linenums="1"
n = int(input('Nhập n: '))

S = 0                   # Khởi tạo biến S bằng 0
for i in range(n + 1):  # Cho i chạy từ 0 đến n:
    S = S + i           # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)     # In kết quả ra màn hình
```

Output:
```pycon
Nhập n: 7
Tổng là 28
```

Trong ví dụ 4, `S = S + i` được gọi là thao tác **cộng dồn**, cộng dồn `i` vào `S`.  

### range(start, stop)

Dạng có hai tham số, chỉ định rõ mốc đầu.

```py
for i in range(start, stop):
```

Khi lệnh này được thực hiện, biến `i` chạy **từ `start` đến `stop - 1`**.

Trong toán học, điều này tương đương nửa khoảng $i \in [start, stop)$.

Ví dụ:  
Dòng lệnh 14 và 5 in ra các số từ 0 đến 9.

```py linenums="1" hl_lines="14-15"
if __name__ == '__main__':
    n = 10

    for i in range(n):
        print(i, end=' ')

    print()

    for i in range(n + 1):
        print(i, end=' ')

    print()

    for i in range(5, n):
        print(i, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
5 6 7 8 9 
```


Trường hợp này áp dụng khi ta không muốn `i` chạy từ `0`, mà từ một số khác, cụ thể là từ `start`.

Diễn giải theo toán học là: $[start, stop)$. Nói cách khác, lấy mốc bắt đầu là `start` và mốc kết thúc là `stop - 1`, tức ngay trước `stop`.  


    Vẫn là tính tổng $S = 1 + 2 + 3 + ... + n$.  
    
    Bạn hãy viết lại dòng lệnh `for` và điều chỉnh hàm `range` của ví dụ 4 sao cho chương trình không thực hiện thao tác thừa là cộng dồn với `0`.



    ??? tip "Đáp án"

        Trong ví dụ 4, `range(n + 1)` nghĩa là `i` chạy từ `0`, và `0` sẽ được cộng dồn vào `S`. Đây là thao tác thừa.

        Để bỏ qua thao tác này, ta sửa lại thành `range(1, n + 1)`, cụ thể như sau:

        ```py linenums="1" hl_lines="4"
        n = int(input('Nhập n: '))

        S = 0
        for i in range(1, n + 1):  # Cho i chạy từ 1 đến n:
            S = S + i

        print('Tổng là', S)
        ```

        Output:
        ```pycon
        Nhập n: 7
        Tổng là 28
        ```

Ví dụ 5:  
Tính tổng các số từ m đến n, với m, n đều là số nguyên dương.  
Chẳng hạn, với m = 5, n = 8, thì tổng bằng 5 + 6 + 7 + 8 = 26.

```py linenums="1"
m = int(input('Nhập m: '))
n = int(input('Nhập n: '))

S = 0                      # Khởi tạo biến S bằng 0
for i in range(m, n + 1):  # Cho i chạy từ m đến n:
    S = S + i              # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

Output:  
```pycon
Nhập m: 5
Nhập n: 8
Tổng là 26
```


    Biết rằng m và n vẫn được nhập giá trị lần lượt là 5 và 8.  
    Nếu dòng lệnh for của ví dụ 6 được sửa lại thành `for i in range(m, n):` thì kết quả in ra màn hình là gì?


    ??? tip "Đáp án"

        Lúc này, biến `i` chạy từ 5 đến 7. Biến `S` sẽ lần lượt được cộng dồn với 5, 6 và 7.  
        Do đó, `S` có giá trị là 18.

### range(start, stop, step)

Dạng đầy đủ gồm ba ba tham số: **mốc bắt đầu**, **mốc kết thúc** và **bước nhảy**.

```py
for i in range(start, stop, step):
```

Khi lệnh này được thực hiện, biến `i` chạy **từ `0` đến `stop - 1`**, mỗi lần không tăng thêm `1`, mà tăng thêm `step`.

Ví dụ 6:  
Tính tổng các số chẵn từ 0 đến n.

```py linenums="1"
n = int(input('Nhập n: '))

S = 0                         # Khởi tạo biến S bằng 0
for i in range(0, n + 1, 2):  # Cho i chạy từ 0 đến n, với bước nhảy là 2:
    S = S + i                 # Thực hiện lặp thao tác S = S + i

print('Tổng là', S)
```

Output:
```pycon
Nhập n: 6
Tổng là 12
```


    Bạn hãy điều chỉnh dòng lệnh for của ví dụ 6 để đoạn mã trở thành tính tổng các số lẻ.

    
    ??? tip "Đáp án"

        ```py linenums="1"
        for i in range(1, n + 1, 2):
        ```

### Tham số step có giá trị âm

Nếu đặt `step` là số âm thì biến `i` sẽ chạy ***từ số lớn ngược về số nhỏ***.  

Ví dụ 7:  
In các số từ 10 giảm dần về 2.

```py linenums="1"
n = 10
for i in range(n, 1, -1):
    print(i)
```

Output:  
```pycon
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

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1jr872x9_by5xO53MJSmrbEueqQazBe37?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lặp đi lặp lại | repeatedly |
| số lần lặp | number of iterations |
| vòng lặp | loop |

## Bài tập thực hành

1. [Bài tập for-1](https://colab.research.google.com/drive/19DqezCNqTgMl9P2Uk4jp6lPO4Fg-GnqK?usp=sharing){:target="_blank"}

2. [Bài tập for-2](https://colab.research.google.com/drive/1bLq1sReLdIPR_xdDxWF9mMXqyhVudUal?usp=sharing){:target="_blank"}

3. [Bài tập for-3](https://colab.research.google.com/drive/13FiksfMbinKxv304sQV3RCJ16o5dUT6Q?usp=sharing){:target="_blank"}
