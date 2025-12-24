---
icon: material/chart-bell-curve-cumulative
---

# Luyện tập xác định độ phức tạp

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách xác định độ phức tạp của một số đoạn mã.
    
    Các ví dụ trong bài đều tham khảo từ quyển *Cracking the coding interview* [^1].

    [^1]: McDowell, G. L. (2015). Cracking the coding interview: 189 programming questions and solutions (6th ed.). CareerCup.

Với mỗi đoạn mã dưới đây, ta đều có hai cách xác định độ phức tạp:

- **Cách 1: đếm bước**

    Tính $T(n)$, rồi dựa vào đó tìm hàm rút gọn. Cách này mang tính hàn lâm, giúp hiểu rõ bản chất tại sao ra được kết quả.

- **Cách 2: phân tích cấu trúc**

    Áp dụng các quy tắc Big O lên từng khối lệnh. Cách này giúp xác định nhanh chóng. 

---

## Đoạn mã 1

```py linenums="1" hl_lines="7 10"
def func(A):
    n = len(A)
    s = 0
    p = 1

    for i in range(n):
        s = s + A[i]

    for i in range(n):
        p = p * A[i]

    return s, p
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Trong vòng lặp thứ nhất, phép toán tích cực là phép cộng dồn.

    Trong vòng lặp thứ hai, phép toán tích cực là phép nhân dồn.

    **Bước 2:**

    Mỗi vòng lặp chạy $n$ lần.

    Tổng số lần thực hiện phép toán tích cực:
    
    $T(n) = n + n = 2n$

    **Bước 3:**

    Dựa vào hàm $T(n)$ vừa tính được:

    - Giữ lại thành phần bậc cao nhất: $n$.
    - Quy tắc lược bỏ hằng số: lược bỏ hệ số $2$.

    Vậy độ phức tạp của đoạn mã này là $O(n)$.

??? tip "Lời giải đề xuất 2"

    Vòng lặp thứ nhất có độ phức tạp $O(n)$.

    Vòng lặp thứ hai có độ phức tạp $O(n)$.

    Do hai vòng lặp này tuần tự nhau, ta áp dụng quy tắc cộng:

    $O(n) + O(n) = O(\max(n, n)) = O(n)$

---

## Đoạn mã 2

```py linenums="1" hl_lines="6"
def func(A):
    n = len(A)
    
    for i in range(n):
        for j in range(n):
            print(A[i], A[j])
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Phép toán tích cực là lệnh `print()` nằm ở vị trí sâu nhất.

    **Bước 2:**

    Vòng lặp ngoài `for i` chạy $n$ lần.

    Ứng với mỗi `i`, vòng lặp trong `for j` chạy $n$ lần.

    Tổng số lần thực hiện phép toán tích cực:
    
    $T(n) = n \times n = n^2$

    **Bước 3:**

    Hàm $T(n) = n^2$ đã là đơn thức bậc cao nhất.

    Vậy độ phức tạp của đoạn mã này là $O(n^2)$.

??? tip "Lời giải đề xuất 2"

    Vòng lặp thứ nhất có độ phức tạp $O(n)$.

    Vòng lặp thứ hai có độ phức tạp $O(n)$.

    Do hai vòng lặp này lồng nhau, ta áp dụng quy tắc nhân:

    $O(n) \times O(n) = O(n^2)$

---

## Đoạn mã 3

```py linenums="1" hl_lines="6"
def func(A):
    n = len(A)
    
    for i in range(n):
        for j in range(i + 1, n):
            print(A[i], A[j])
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Phép toán tích cực là lệnh `print()` nằm ở vị trí sâu nhất.

    **Bước 2:**

    Vòng lặp ngoài `for i` chạy $n$ lần.
    
    Vòng lặp trong `for j` phụ thuộc vào `i`:

    - $i = 0$: chạy từ $1$ đến $n-1$, tức $n-1$ lần.
    - $i = 1$: chạy từ $2$ đến $n-1$, tức $n-2$ lần
    - ...
    - $i = n-2$: chạy 1 lần.

    Tổng số lần thực hiện phép toán tích cực:
    
    $T(n) = (n - 1) + (n - 2) + ... + 1$

    $= \frac{n(n - 1)}{2} = \frac{1}{2}n^2 - \frac{1}{2}n$

    **Bước 3:**

    Dựa vào hàm $T(n)$ vừa tính được:

    - Giữ lại thành phần bậc cao nhất: $n^2$.
    - Quy tắc lược bỏ hằng số: lược bỏ hệ số $\frac{1}{2}$.

    Vậy độ phức tạp của đoạn mã này là $O(n^2)$.

??? tip "Lời giải đề xuất 2"

    Vòng lặp ngoài `for i`có độ phức tạp $O(n)$.
    
    Vòng lặp trong `for j` phụ thuộc vào `i`, có độ phức tạp $O(n/2) = O(\frac{1}{2}n) = O(n)$.

    Do hai vòng lặp này lồng nhau, ta áp dụng quy tắc nhân:

    $O(n) \times O(n) = O(n^2)$

---

## Đoạn mã 4

```py linenums="1" hl_lines="7-8"
def print_unordered_pairs(A, B):
    n = len(A)
    m = len(B)

    for i in range(n):
        for j in range(m):
            if A[i] < B[j]:
                print(A[i], B[j])
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Phép toán tích cực là phép so sánh của `if` và lệnh `print`.

    **Bước 2:**

    Vòng lặp ngoài chạy $n$ lần.

    Ứng với mỗi `i`, vòng lập trong chạy $m$ lần.

    Tổng số lần thực hiện: $T(n) = n \times m$

    **Bước 3:**

    Độ phức tạp của đoạn mã này là $O(n \times m)$.

    **Nhận xét:**

    Khi có nhiều loại dữ liệu đầu vào (trường hợp này là hai mảng `A` và `B`), Big O phải thể hiện được sự phụ thuộc vào tất cả các đầu vào đó. 
    
    Độ phức tạp $O(n^2)$ chỉ đúng khi hai mảng có cùng kích thước.

??? tip "Lời giải đề xuất 2"

    Vòng lặp thứ nhất có độ phức tạp $O(n)$.

    Vòng lặp thứ hai có độ phức tạp $O(m)$.

    Do hai vòng lặp này lồng nhau, ta áp dụng quy tắc nhân:

    $O(n) \times O(m) = O(m \cdot n)$

---

## Đoạn mã 5

```py linenums="1" hl_lines="8"
def print_unordered_pairs(A, B):
    n = len(A)
    m = len(B)

    for i in range(n):
        for j in range(m):
            for k in range(100000):
                print(A[i], B[j])
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Phép toán tích cực là lện `print()`.

    **Bước 2:**

    Vòng lặp thứ nhất chạy $n$ lần.

    Vòng lặp thứ hai chạy $m$ lần.

    Vòng lặp thứ ba chạy cố định $100,000$ lần.

    Tổng số lần thực hiện: $T(n) = n \times m \times 100,000$

    **Bước 3:**

    Dựa vào hàm $T(n)$ vừa tính được:

    - Quy tắc lược bỏ hằng số: lược bỏ hệ số $100,000$.

    Độ phức tạp của đoạn mã này là $O(n \times m)$.

??? tip "Lời giải đề xuất 2"

    Vòng lặp thứ nhất có độ phức tạp $O(n)$.

    Vòng lặp thứ hai có độ phức tạp $O(m)$.

    Vòng lặp thứ ba có độ phức tạp $O(100,000) = O(1)$.

    Do ba vòng lặp này lồng nhau, ta áp dụng quy tắc nhân:

    $O(n) \times O(m) \times O(1) = O(m \cdot n)$

---

## Đoạn mã 6

```py linenums="1" hl_lines="5-9"
def func(A):
    n = len(A)

    for i in range(n // 2):
        j = n - i - 1

        t = A[i]
        A[i] = A[j]
        A[j] = t
```

??? tip "Lời giải đề xuất 1"

    **Bước 1:**

    Phép toán tích cực là toàn bộ khối lệnh bên trong vòng lặp. Các lệnh này đều là phép toán cơ bản, có độ phức tạp $O(1)$.

    **Bước 2:**

    Tổng số lần thực hiện phép toán tích cực: $T(n) = \frac{n}{2}$

    **Bước 3:**

    Độ phức tạp của đoạn mã này là $O(n)$.

    **Nhận xét:**

    Về mặt thời gian thực, duyệt một nửa mảng thì nhanh hơn so với duyệt hết mảng.

    Nhưng về mặt Big O, nếu $n$ tăng gấp đôi thì thời gian chạy của thuật toán này cũng tăng gấp đôi. Sự tăng trưởng vẫn là tuyến tính.
    
    Do đó, $O(n)$, $O(2n)$, hay $O(n/2)$ đều thuộc cùng một lớp $O(n)$.


??? tip "Lời giải đề xuất 2"

    Dòng lệnh for có độ phức tạp $O(\frac{n}{2}) = O(\frac{1}{2} \cdot n) = O(n)$.

    Các lệnh trong thân vòng lặp có độ phức tạp $O(1)$.
   
    Vậy độ phức tạp của đoạn mã là:

    $O(n) \times O(1) = O(n)$
