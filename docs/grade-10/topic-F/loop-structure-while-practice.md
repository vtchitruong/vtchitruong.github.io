---
icon: simple/loop
---

# Thực hành vòng lặp while

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số bài toán có áp dụng vòng lặp while:

    - Mô phỏng kiểm tra đăng nhập.
    - Tìm ước số chung lớn nhất của hai số nguyên dương.
    - Tính tổng chữ số lặp.
    - Mô phỏng phép chia bằng phép trừ.

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình mô phỏng việc đăng nhập của người dùng.

**Đầu vào:**

Tên tài khoản và mật khẩu.

**Đầu ra:**

Thông báo đăng nhập thành công hoặc cho đăng nhập lại.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Thao tác lặp là thao tác nhập tên tài khoản và mật khẩu.

    Ta dùng vòng lặp while vì chưa biết người dùng sẽ nhập lại (vì sai) bao nhiêu lần.

    Dùng một biến cờ hiệu để kiểm soát việc đăng nhập.

??? tip "Viết chương trình"

    1\. Viết hàm `login()` dùng để cho người dùng đăng nhập.

    Hàm không có tham số và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Khởi tạo biến cờ hiệu `success` là `False`, nghĩa là đăng nhập chưa thành công.
    - Trong khi `success` vẫn là `False`:

        - Cho người dùng nhập tên tài khoản và mật khẩu, lưu vào hai biến `username` và `password`.
        - Nếu `username` và `password` có giá trị đúng thì thông báo đăng nhập thành công. Đồng thời, gán `True` cho `success` để thoát khỏi vòng lặp.
        - Ngược lại, nếu thông báo đăng nhập chưa được. Vòng lặp sẽ tiếp tục chạy vì `success` là `False`.

    ```py linenums="1"
    def login():
        success = False

        while not success:
            username = input('Tên người dùng: ')
            password = input('Mật khẩu: ')

            if username == 'admin' and password == '1234': # (1)!
                print('Đăng nhập thành công!')
                success = True
            else:
                print('Sai username hoặc password. Vui lòng nhập lại.')
    ```
    { .annotate }

    1.  Giả sử tên tài khoản và mật khẩu có các giá trị cố định là `admin` và `1234`. Trên thực tế việc lưu trữ và kiểm tra phức tạp hơn.

    2\. Viết chương trình chính:

    - Gọi hàm `login()` ra thực hiện.

    ```py linenums="15"
    if __name__ == '__main__':
        login()
    ```

    3\. Chạy chương trình trên, thử nhập sai trước và đúng sau, kết quả như sau:

    ```py
    Tên người dùng: admin
    Mật khẩu: 1235
    Sai username hoặc password. Vui lòng nhập lại.
    Tên người dùng: admin
    Mật khẩu: 1234
    Đăng nhập thành công!
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Tìm ước số chung lớn nhất của hai số nguyên dương.

**Đầu vào:**

Hai số nguyên dương `a` và `b`.

**Đầu ra:**

Ước chung lớn nhất.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 60 45 | 15 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Để tìm ước chung lớn nhất của hai số nguyên dương, ta áp dụng thuật toán Euclide nguyên bản (dựa trên phép trừ).
    
    Cụ thể: lấy số lớn trừ số nhỏ, lặp lại thao tác này nhiều lần cho đến khi hai số bằng nhau, thì giá trị bằng nhau đó chính là ước chung lớn nhất.
    
    Ví dụ:

    | Trừ| a | b |
    | --- | --- | --- |
    | | 60 | 45 |
    | a = a - b | 15 | 45 |
    | b = b - a | 15 | 30 |
    | b = b - a | 15 | 15 |

    Thao tác lặp là thao tác so sánh xem số nào lớn hơn và thao tác trừ.

    Ta dùng vòng lặp while vì chưa biết thao tác trừ sẽ diễn ra bao nhiêu lần cho đến khi đạt giá trị bằng nhau.

??? tip "Viết chương trình"

    1\. Viết hàm `gcd()` (greatest common divisor)) dùng để tìm ước chung lớn nhất.

    Hàm gồm có:
    
    - Hai tham số đầu vào là số nguyên dương `a` và `b`.
    - Giá trị trả về là ước chung lớn nhất.

    Hàm hoạt động như sau:

    Trong khi `a` và `b` chưa bằng nhau:
    
    - Nếu `a` lớn hơn `b` thì lấy `a` trừ `b`, gán lại cho `a`.
    - Ngược lại, nếu `b` lớn hơn thì lấy `b` trừ `a`, gán lại cho `b`.

    Khi `a` và `b` đã bằng nhau, trả về `a`.

    ```py linenums="1"
    def gcd(a, b):
        while a != b:
            if a > b:
                a = a - b
            else:
                b = b - a

        return a
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập hai số nguyên dương, lưu vào biến `a` và `b`.
    - Gọi hàm `gcd()` ra thực hiện, gán kết quả cho biến `g`.
    - In ra `g`.

    ```py linenums="11"
    if __name__ == '__main__':
        a = int(input('Số thứ nhất: '))
        b = int(input('Số thứ hai: '))

        g = gcd(a, b)
        print(f'Ước chung lớn nhất của {a} và {b} là {g}')
    ```

    3\. Chạy chương trình trên, nhập số hạng đầu là `100`, công sai là `4`, số lượng số hạng là `12`, kết quả như sau:

    ```py
    Số thứ nhất: 60
    Số thứ hai: 45
    Ước chung lớn nhất của 60 và 45 là 15
    ```

---

## Bài 3

### Đề bài

Trong toán học, **tổng chữ số lặp** (digital root) của một số nguyên dương thu được bằng cách cộng tất cả các chữ số của số đó, sau đó lặp lại quá trình cho đến khi kết quả chỉ còn một chữ số duy nhất.

Ví dụ:

Tổng chữ số lặp của $31122025$ là:

$3 + 1 + 1 + 2 + 2 + 0 + 2 + 5 = 16$

$16 = 1 + 6 = 7$

**Yêu cầu:**

Viết chương trình tính digital root của một số nguyên dương.

**Đầu vào:**

Số nguyên dương.

**Đầu ra:**

Tổng chữ số lặp.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 31122025 | 7 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ta thực hiện hai vòng lặp lồng nhau:

    Vòng lặp trong:
    
    - Lặp thao tác phân tách từng chữ số bằng cách chia 10 lấy phần dư, và cộng dồn vào tổng, cho đến khi không còn phân tách được nữa.
    - Vì chưa biết có bao nhiêu chữ số nên ta dùng vòng lặp while.

    Vòng lặp ngoài:

    - Lặp quá trình trên (của vòng lặp trong) nhiều lần cho đến khi chỉ còn một chữ số, không thể cộng được nữa.
    - Vì chưa biết khi nào còn một chữ số nên ta dòng vòng lặp while.    

??? tip "Viết chương trình"

    1\. Viết hàm `digital_root()` dùng để tính tổng chữ số lặp.

    Hàm gồm có:

    - Một tham số đầu vào là `n`.
    - Giá trị trả về là tổng chữ số lặp.
    
    Hàm hoạt động như sau:

    - Trong khi vẫn còn hai chữ số trở lên, tức `n >= 10`:

        - Khởi tạo tổng `s = 0`.
        - Trong khi `n` vẫn còn phân tách chữ số được, tức `n  > 0`:
    
            Tách chữ số: `n % 10`.
            
            Cộng dồn vào tổng `s`.

            Bỏ chữ số vừa cộng dồn đi: `n = n // 10`

        - Gán tổng `s` cho `n` để `n` trở thành số mới, chuẩn bị cho tiến trình cộng chữ số tiếp theo.

    - Trả về `n`.

    ```py linenums="1"
    def digital_root(n):
        while n >= 10:
            s = 0
            
            while n > 0:
                s = s + n % 10
                n = n // 10

            n = s

        return n
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số nguyên, lưu vào biến `n`.
    - Gọi hàm `digital_root()` ra thực hiện, nhập vô `31122025`, gán kết quả cho biến `result`.
    - In ra `result`.

    ```py linenums="14"
    if __name__ == '__main__':
        n = int(input('Nhập n: '))

        result = digital_root(n)
        print(f'Tổng chữ số lặp của {n}: {result}')
    ```

    3\. Chạy chương trình trên, kết quả như sau:

    ```py
    Nhập n: 31122025
    Tổng chữ số lặp của 31122025: 7
    ```

---

## Bài 4

### Đề bài

**Yêu cầu:**

Viết chương trình mô phỏng phép chia bằng cách thực hiện phép trừ nhiều lần.

**Đầu vào:**

Số bị chia `a` và số chia `b`.

**Đầu ra:**

Thương số `q` và số dư `r`.

**Ví dụ:**

| Đầu vào | Đầu ra | Giải thích |
| --- | --- | --- |
| 35 4 | 8 3 | 35 : 4 = 8 dư 3 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ta lấy số bị chia `a` trừ cho số trừ `b` nhiều lần cho đến khi `a` nhỏ hơn `b`, không trừ được nữa.

    Thao tác lặp là thao tác trừ.

    Ta dùng vòng lặp while vì chưa biết thực hiện phép trừ bao nhiêu lần.

??? tip "Viết chương trình"

    1\. Viết hàm `divide()` dùng để tìm thương và số dư.

    Hàm gồm có:
    
    - Hai tham số là số bị chia `a` và số chia `b`.
    - Giá trị trả về là thương `quotient` và số dư `remainder`.

    Hàm hoạt động như sau:

    - Khởi tạo thương `quotient = 0`.
    - Khởi tạo số dư `remainder = a` (1)
        { .annotate }

        1.  Lệnh này nhằm hai mục đích:

            - Giữ nguyên giá trị của `a` và vai trò số bị chia của nó.
            - Giúp chương trình dễ đọc: trừ nhiều lần cho đến khi số dư nhỏ hơn số chia. 

    - Trong khi số dư vẫn lơn hơn số chia, tức `remainder >= b`:

        - Lấy số dư trừ cho số chia.
        - Tăng thương thêm `1`.

    - Trả về `quotient` và `remainder`.

    ```py linenums="1"
    def divide(a, b):
        quotient = 0
        remainder = a

        while remainder >= b:
            remainder = remainder - b
            quotient = quotient + 1

        return quotient, remainder
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số bị chia và số chia, lưu vào biến `a` và `b`.
    - Gọi hàm `divide()` ra thực hiện, gán kết quả cho biến `q` và `r`.
    - In ra `q` và `r`.

    ```py linenums="12"
    if __name__ == '__main__':
        a = int(input('Nhập số bị chia: '))
        b = int(input('Nhập số chia: '))
        
        q, r = divide(a, b)
        print(f'{a} : {b} = {q} dư {r}')
    ```

    3\. Chạy chương trình trên, nhập vô `35` và `4`, kết quả như sau:

    ```py
    Nhập số bị chia: 35
    Nhập số chia: 4
    35 : 4 = 8 dư 3
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/17srfAm7VTZqojD4MDJWLMyEenCBMv636?usp=sharing){target="_blank"}