---
icon: simple/loop
---

# Thực hành vòng lặp for - Phần 1

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số bài toán có áp dụng vòng lặp for:

    - Tính tổng từ 1 đến n.
    - Tính tổng các nghịch đảo từ 1 đến n.
    - Tìm các ước số của một số nguyên dương.
    - Tìm các bội số của một số nguyên dương.

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình tính tổng: $S = 1 + 2 + 3 + ... + n$

**Đầu vào:**

Số nguyên dương `n`.

**Đầu ra:**

Tổng.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 10 | 55 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Lặp nhiều lần thao tác cộng đối với các số trong đoạn $[1, n]$.


??? tip "Viết chương trình"

    1\. Viết hàm `sum_to_n()` (1) dùng để tính tổng từ `1` đến `n`.
    { .annotate }

    1.  Ta không đặt tên là `sum()` vì trùng tên với hàm `sum()` có sẵn của Python.

    Hàm gồm có:
    
    - Một tham số đầu vào là `n`.
    - Giá trị trả về là tổng `s`.

    Hàm hoạt động như sau:

    - Khởi tạo biến tổng `s = 0`.
    - Dùng vòng lặp `for`, cho `i` chạy từ `1` đến `n`. Ứng với mỗi `i`:
    
        Cộng dồn `i` vào `s`.

    - Trả về `s`.

    Ví dụ:

    | `i` | Lặp thao tác cộng | `s` |
    | --- | --- | --- |
    | | | 0 |
    | 1 | s + i = 0 + 1 | 1 |
    | 2 | s + i = 1 + 2 | 3 |
    | 3 | s + i = 3 + 3 | 6 |
    | 4 | s + i = 6 + 4 | 10 |
    | 5 | s + i = 10 + 5 | 15 | 

    ```py linenums="1"
    def sum_to_n(n):
        s = 0

        for i in range(n + 1):
            s = s + i

        return s
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập `n`.
    - Gọi hàm `sum_to_n()` ra thực hiện, gán kết quả cho biến `result`.
    - In ra `result`.
    
    ```py linenums="10"
    if __name__ == '__main__':
        n = int(input('Nhập n: '))

        result = sum_to_n(n)
        print(f'1 + 2 + ... + {n} = {result}')
    ```

    *Lưu ý:*  
    *`n` trong hàm `sum_to_n()` là tham số, đóng vai trò biến cục bộ trong hàm đó. Còn `n` trong chương trình chính là biến toàn cục. Mặc dù trùng tên, hai biến này là khác nhau.*

    3\. Chạy chương trình trên, nhập vô `10`, kết quả như sau:

    ```py
    Nhập n: 10
    1 + 2 + ... + 10 = 55
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình tính tổng các nghịch đảo:

$S = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + ... + \frac{1}{n}$

**Đầu vào:**

Số nguyên dương `n`.

**Đầu ra:**

Tổng các nghịch đảo.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 5 | 2.283 |

### Cách giải đề xuất


??? tip "Ý tưởng chính"

    Ý tưởng giải bài này tương tự bài 1, trong đó:

    - Thao tác được lặp nhiều lần là thao tác cộng.
    - Các toán hạng có dạng $\frac{1}{i}$.

??? tip "Viết chương trình"

    1\. Viết hàm `sum_reciprocals_to_n()` dùng để tính tổng các nghịch đảo từ `1` đến `n`.

    Hàm gồm có:
    
    - Một tham số đầu vào là `n`.
    - Giá trị trả về là tổng `s`.

    Hàm hoạt động như sau:

    - Khởi tạo biến tổng `s = 1`.
    - Dùng vòng lặp `for`, cho `i` chạy từ `2` đến `n`. Ứng với mỗi `i`:
    
        Cộng dồn `1 / i` vào `s`.

    - Trả về `s`.

    ```py linenums="1"
    def sum_reciprocals_to_n(n):
        s = 1

        for i in range(2, n + 1):
            s = s + 1/i

        return s
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập `n`.
    - Gọi hàm `sum_reciprocals_to_n()` ra thực hiện, gán kết quả cho biến `result`.
    - In ra `result`.
    
    ```py linenums="10"
    if __name__ == '__main__':
        n = int(input('Nhập n: '))

        result = sum_reciprocals_to_n(n)
        print(f'1 + 1/2 + 1/3 + ... + 1/{n} = {result}')
    ```

    3\. Chạy chương trình trên, nhập vô `5`, kết quả như sau:

    ```py
    Nhập n: 5
    1 + 1/2 + 1/3 + ... + 1/5 = 2.283333333333333
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình in ra các ước số của `n`.

**Đầu vào:**

Số nguyên dương `n`.

**Đầu ra:**

Các ước số.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 60 | 1 2 3 4 5 6 10 12 15 20 30 60 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Nếu `i` nào đó là ước số của `n` thì đồng nghĩa là `n` chia hết cho `i`.

    Như vậy, thao tác được lặp nhiều lần là: kiểm tra xem `n % i` có bằng `0` hay không, với `i` có giá trị từ `1` đến `n`.

??? tip "Viết chương trình"

    1\. Viết hàm `get_divisors()` dùng để in ra các ước số của `n`.

    Hàm gồm một tham số là `n` và không có giá trị trả về.

    Hàm hoạt động như sau:

    - In ra `1`, vì `n` nào cũng có ước là `1`
    - Dùng vòng lặp `for`, cho `i` chạy từ `2` đến `n - 1`:

        Nếu `n % i` bằng `0` thì in ra `i`.

    - In ra `n`, vì `n` nào cũng có ước là chính nó.

    ```py linenums="1"
    def get_divisors(n):
        print(f'Các ước số của {n}:', end=' ') # (1)!
        print(1, end=' ')

        for i in range(2, n):
            if n % i == 0:
                print(i, end=' ')

        print(n, end=' ')
    ```
    { .annotate }

    1.  Tham số `end=' '` làm cho hàm `print()` in ra mà không xuống dòng, giúp cho nội dung của lệnh `print()` tiếp theo vẫn nằm cùng dòng.

    2\. Viết chương trình chính:

    - Cho người dùng nhập `n`.
    - Gọi hàm `get_divisors()` ra thực hiện.
        
    ```py linenums="12"
    if __name__ == '__main__':
        n = int(input('Nhập n: '))
        get_divisors(n)
    ```

    3\. Chạy chương trình trên, nhập vô `60`, kết quả như sau:

    ```py
    Nhập n: 60
    Các ước số của 60: 1 2 3 4 5 6 10 12 15 20 30 60 
    ```

---


## Bài 4

### Đề bài

**Yêu cầu:**

Viết chương trình in ra các bội số của $n$ trong đoạn $[a, b]$.

**Đầu vào:**

Ba số nguyên dương `a`, `b` và `n`.

**Đầu ra:**

Các bội số.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 7 21<br>3 | 9 12 15 18 21 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Nếu `i` nào đó là bội số của `n` thì đồng nghĩa là `i` chia hết cho `n`.

    Như vậy, thao tác được lặp nhiều lần là: kiểm tra xem `i % n` có bằng `0` hay không, với `i` có giá trị từ `a` đến `b`.

??? tip "Viết chương trình"

    1\. Viết hàm `get_multiples()` dùng để in ra các bội số của `n`.

    Hàm gồm ba tham số là `a`, `b` và `n`, và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Dùng vòng lặp `for`, cho `i` chạy từ `a` đến `b`:

        Nếu `i % n` bằng `0` thì in ra `i`.

    ```py linenums="1"
    def get_multiples(a, b, n):
        print(f'Các bội số của {n} trong đoạn[{a}, {b}]:', end=' ') # (1)!

        for i in range(a, b + 1):
            if i % n == 0:
                print(i, end=' ')
    ```
    { .annotate }

    1.  Tham số `end=' '` làm cho hàm `print()` in ra mà không xuống dòng, giúp cho nội dung của lệnh `print()` tiếp theo vẫn nằm cùng dòng.

    2\. Viết chương trình chính:

    - Cho người dùng nhập `n`.
    - Gọi hàm `get_divisors()` ra thực hiện.
        
    ```py linenums="9"
    if __name__ == '__main__':
        a, b = map(int, input('Nhập hai mốc của đoạn [a, b]: ').split()) # (1)!
        n = int(input('Nhập n: '))
        get_multiples(a, b, n)
    ```
    { .annotate }

    1.  Hàm `split()` dùng để tách chuỗi nhập vào thành các phần tử riêng lẻ, dựa trên khoảng trắng.

        Hàm `map()` dùng để áp dụng hàm `int()` lên từng phần tử riêng lẻ nhằm chuyển đổi chúng thành số nguyên.

        `a, b = ...` nghĩa là gán lần từng số nguyên cho `a`, rồi `b`.

    3\. Chạy chương trình trên, nhập vô `2000 2050` và `4`, kết quả như sau:

    ```py
    Nhập hai mốc của đoạn [a, b]: 2000 2050
    Nhập n: 4
    Các bội số của 4 trong đoạn[2000, 2050]: 2000 2004 2008 2012 2016 2020 2024 2028 2032 2036 2040 2044 2048 
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1bLq1sReLdIPR_xdDxWF9mMXqyhVudUal?usp=sharing){target="_blank"}