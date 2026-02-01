---
icon: simple/loop
---

# Thực hành vòng lặp for - Phần 2

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số bài toán có áp dụng vòng lặp for:

    - In ra bảng cửu chương.
    - In ra dãy số cấp số cộng.
    - Giải bài toán cổ.
    - Đoán nghiệm của phương trình bậc 3.
    - Tính dân số.

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình in ra bảng cửu chương $n$.

**Đầu vào:**

Số nguyên dương `n`.

**Đầu ra:**

$n \times 1 = \cdots$

$n \times 2 = \cdots$

$n \times 3 = \cdots$

$\cdots$

$n \times 10 = \cdots$

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Thao tác được lặp nhiều lần là thao tác nhân.

    Số lần lặp của thao tác nhân là 10, ứng với các hệ số từ 1 đến 10.

??? tip "Viết chương trình"

    1\. Viết hàm `print_multiplication()` dùng để in ra bảng cửu chương `n`.

    Hàm gồm có một tham số đầu vào là `n` và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Dùng vòng lặp `for`, cho `i` chạy từ `1` đến `10`. Ứng với mỗi `i`:
    
        In ra phép nhân `i` với `n`.

    ```py linenums="1"
    def print_multiplication(n):
        print(f'Bảng cửu chương {n}:')

        for i in range(1, 11):
            print(f'{n} x {i:>2} = {n * i:>2}') # (1)!
    ```
    { .annotate }

    1.  `:>` dùng để căn phải 2 ký tự.

    2\. Viết chương trình chính:

    - Cho người dùng nhập `n`.
    - Gọi hàm `print_multiplication()` ra thực hiện.

    ```py linenums="8"
    if __name__ == '__main__':
        n = int(input('Nhập n: '))
        print_multiplication(n)
    ```

    *Lưu ý:*  
    *`n` trong hàm `print_multiplication()` là tham số, đóng vai trò biến cục bộ trong hàm đó. Còn `n` trong chương trình chính là biến toàn cục. Mặc dù trùng tên, hai biến này là khác nhau.*

    3\. Chạy chương trình trên, nhập vô `9`, kết quả như sau:

    ```py
    Nhập n: 9
    Bảng cửu chương 9:
    9 x  1 =  9
    9 x  2 = 18
    9 x  3 = 27
    9 x  4 = 36
    9 x  5 = 45
    9 x  6 = 54
    9 x  7 = 63
    9 x  8 = 72
    9 x  9 = 81
    9 x 10 = 90
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình in ra một dãy số cấp số cộng (1) với số hạng đầu $u_1$ và công sai $d$ cho trước.
{ .annotate }

1.  **Cấp số cộng** là một dãy số mà trong đó, kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$. Nghĩa là:

    $$u_n = u_{n - 1} + d, n \ge 2$$

    $d$ được gọi là **công sai** của cấp số cộng.

**Đầu vào:**

- `u1` và `d`
- Số lượng số hạng `n`

**Đầu ra:**

Dãy số cấp số cộng.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 19 3<br>5| 22 25 28 31 34 |

### Cách giải đề xuất


??? tip "Ý tưởng chính"

    Thao tác được lặp nhiều lần là thao tác cộng với `d`.

    Số lần lặp là `n`, ứng với `n` số hạng sẽ được in ra.

??? tip "Viết chương trình"

    1\. Viết hàm `print_ap()` (arithmethic progressive) dùng để in ra dãy số cấp số cộng.

    Hàm gồm có:
    
    - Ba tham số đầu vào là:
    
        - Số hạng đầu tiên `u`
        - Công sai `d`
        - Số lượng số hạng sẽ được in ra `n`

    - Giá trị trả về là tổng `s`.

    Hàm hoạt động như sau:

    - Dùng vòng lặp `for`, cho `i` chạy từ `0` đến `n - 1`. Ứng với mỗi `i`:
    
        - Tính số hạng `u` tiếp theo.
        - In ra `u`.

    ```py linenums="1"
    def print_ap(u, d, n):
        print(f'Dãy số cấp số cộng với u1 = {u} và công sai {d}:', end=' ')

        for i in range(n):
            u = u + d
            print(f'{u}', end=' ')
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập `u`, `d` và `n`.
    - Gọi hàm `print_ap()` ra thực hiện.

    ```py linenums="9"
    if __name__ == '__main__':
        u = int(input('Nhập số hạng đầu tiên u1: '))
        d = int(input('Nhập công sai d: '))
        n = int(input('Nhập số lượng muốn in ra n: '))

        print_ap(u, d, n)
    ```

    3\. Chạy chương trình trên, nhập số hạng đầu là `100`, công sai là `4`, số lượng số hạng là `12`, kết quả như sau:

    ```py
    Nhập số hạng đầu tiên u1: 100
    Nhập công sai d: 4
    Nhập số lượng muốn in ra n: 12
    Dãy số cấp số cộng với u1 = 100 và công sai 4: 104 108 112 116 120 124 128 132 136 140 144 148 
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình giải bài toán cổ sau:

Vừa gà vừa chó  
Bó lại cho tròn  
Ba mươi sáu con  
Một trăm chân chẵn.

**Đầu vào:**

Có thể xem là không có dữ liệu đầu vào.

**Đầu ra:**

Số gà và số chó.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng hai vòng lặp lồng nhau:

    - Vòng lặp ngoài ứng với số gà
    - Vòng lặp trong ứng với số chó

    Ta tìm một cặp số (gà, chó) sao cho phù hợp với các biểu thức về số con và số chân.

??? tip "Viết chương trình"

    1\. Viết hàm `solve()` dùng để tìm số gà và số chó.

    Hàm không có tham số. Giá trị trả về là một cặp số `chicken` và `dog`.
    
    Hàm hoạt động như sau:

    - Dùng vòng lặp `for`, cho biến `chicken` chạy từ `1` đến `36`: 
    
        Ứng với mỗi `chicken`, dùng vòng lặp `for`, cũng cho biến `dog` chạy từ `1` đến `36`:

        Nếu cặp giá trị nào của `chicken` và `dog` thoả cả hai biểu thức:
            
        - Tổng số con là `36`
        - Tổng số chân là `100`

        thì trả về cặp giá trị đó.

    ```py linenums="1"
    def solve():
    for chicken in range(1, 37):
        for dog in range(1, 37):
            if chicken + dog == 36 and chicken * 2 + dog * 4 == 100:
                return chicken, dog
    ```

    2\. Viết chương trình chính:

    - Gọi hàm `solve()` ra thực hiện, gán kết quả cho biến `c` và `d`, ứng với số gà và số chó.
    - In ra `c` và `d`.

    ```py linenums="8"
    if __name__ == '__main__':
        c, d = solve()
        print(f'Gà: {c} con')
        print(f'Chó: {d} con')
    ```

    3\. Chạy chương trình trên, kết quả như sau:

    ```py
    Gà: 22 con
    Chó: 14 con
    ```

---

## Bài 4

### Đề bài

**Yêu cầu:**

Viết chương trình giải phương trình bậc 3: $x^3 - 6x^2 - 367x + 3060 = 0$

Biết rằng nghiệm đều là nghiệm nguyên.

**Đầu vào:**

Không có dữ liệu đầu vào vì phương trình đã xác định cụ thể.

**Đầu ra:**

Nghiệm.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Nếu `i` nào đó là bội số của `n` thì đồng nghĩa là `i` chia hết cho `n`.

    Như vậy, thao tác được lặp nhiều lần là: kiểm tra xem `i % n` có bằng `0` hay không, với `i` có giá trị từ `a` đến `b`.

??? tip "Viết chương trình"

    1\. Viết hàm `solve()` dùng in ra các nghiệm.

    Hàm không có tham số và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Dùng vòng lặp `for`, cho biến `x` chạy từ `-20` đến `20`:

        Nếu giá trị nào của `x` thoả phương trình thì in ra giá trị đó.

    *Lưu ý:*  
    *Ở đây ta đoán mò rằng nghiệm có thể nằm trong đoạn $[-20, 20]$.*

    ```py linenums="1"
    def solve():
        print(f'Nghiệm của phương trình x^3 - 6x^2 - 367x + 3060 = 0 là:')
        for x in range(-20, 21, 1):
            if x**3 - 6 * x**2 - 367 * x + 3060 == 0:
                print(f'x = {x}')
    ```

    2\. Viết chương trình chính:

    - Gọi hàm `solve()` ra thực hiện.

    ```py linenums="9"
    if __name__ == '__main__':
        solve()
    ```

    3\. Chạy chương trình trên, kết quả như sau:

    ```py
    Nghiệm của phương trình x^3 - 6x^2 - 367x + 3060 = 0 là:
    x = -20
    x = 9
    x = 17
    ```

---


## Bài 5

### Đề bài

**Yêu cầu:**

Viết chương trình cho người dùng nhập vào một năm, tính dân số Việt Nam vào năm đó.

Biết rằng dân số năm 2025 là khoảng 101,876,843 người và tỉ lệ tăng dân là 0.99%.

**Đầu vào:**

Năm dương lịch.

**Đầu ra:**

Dân số.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 2050 | 130,327,116 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Nếu `i` nào đó là bội số của `n` thì đồng nghĩa là `i` chia hết cho `n`.

    Như vậy, thao tác được lặp nhiều lần là: kiểm tra xem `i % n` có bằng `0` hay không, với `i` có giá trị từ `a` đến `b`.

??? tip "Viết chương trình"

    1\. Viết hàm `population()` dùng để tính dân số.

    Hàm gồm có:
    
    - Hai tham số là `rate`, `year`.
    - Giá trị trả về là dân số `p`.

    Hàm hoạt động như sau:

    - Gọi `p` là biến lưu dân số.
    - Khởi tạo dân số năm 2025: `p = 101_876_843`
    - Dùng vòng lặp `for`, cho `i` chạy từ `2025` đến `year`:

        Tính dân số mới của năm `i` và cộng dồn vàp `p`.

    ```py linenums="1"
    def population(rate, year):
        p = 101_876_843 # (1)!

        for i in range(2026, year + 1):
            p = p + rate/100 * p
        
        return p
    ```
    { .annotate }

    1.  Ký tự `_` là cách viết của Python giúp phân cách hàng nghìn cho dễ đọc.

    2\. Viết chương trình chính:

    - Cho người dùng nhập tỉ lệ tăng dân `r` và năm `y`.
    - Nếu `y` trước `2025` thì in ra dân số năm 2025.

        Ngược lại, nếu `y` sau 2050 thì gọi hàm `population()` ra thực hiện, gán kết quả cho biến `result`.

        In ra `result`.

    ```py linenums="10"
    if __name__ == '__main__':
        r = float(input('Tỉ lệ tăng dân số (không nhập %): '))
        n = int(input('Năm cần tính dân số: '))
        
        if n <= 2025:
            print(f'Dân số năm 2025: {101_876_843} người')
        else:
            result = population(r, n)
            print(f'Dân số năm {n}: {result:,.0f} người') # (1)!
    ```
    { .annotate }

    1.  `,` dùng để phân tách hàng ngàn cho dễ đọc.
    
        `.0` dùng để quy định không có chữ số thập phân nào.
        
        `f` dùng để định dạng số thực `float`.

    *Lưu ý:*  
    *Khi nhập tỉ lệ tăng dân số, người dùng không cần nhập ký tự `%`. Bên trong hàm `population()` đã có phép chia cho 100.*

    3\. Chạy chương trình trên, nhập vô `0.99` và`2050`, kết quả như sau:

    ```py
    Tỉ lệ tăng dân số (không nhập %): 0.99
    Năm cần tính dân số: 2050
    Dân số năm 2050: 130,327,116 người
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1BktGsPLuSQoATdWJ1QvYu87XTNR0-DfC?usp=sharing){target="_blank"}