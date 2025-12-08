---
icon: material/source-branch
---

# Thực hành cấu trúc điều kiện if

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách giải một số bài toán có dùng câu lệnh if:

    - Giải phương trình bậc hai
    - Số ngày trong tháng
    - Xét ba đoạn thẳng có tạo thành tam giác hay không
    - Đánh giá tình trạng cơ thể dựa trên chỉ số BMI

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình giải phương trình bậc hai $ax^2 + bx + c = 0 (a \neq 0)$.

**Đầu vào:**

Hệ số $a, b, c$.

**Đầu vào:**

Nghiệm của phương trình.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 1 1 1 | Vô nghiệm |
| 1 2 1 | Nghiệm kép: x1 = -1, x2 = -1 |
| 1 3 -4 | Hai nghiệm phân biệt: x1 = -4, x2 = 1 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng cấu lệnh `if` để xét các trường hợp của `delta` so với `0`.

??? tip "Viết chương trình"

    1\. Viết hàm `solve_quadratic()` để giải phương trình bậc hai.

    Hàm gồm có:
    
    - Ba tham số đầu vào là `a`, `b` và `c`.
    - Giá trị trả về `x1` và `x2`.

    Hàm hoạt động như sau: 

    - Tính `delta`.
    - Nếu `delta` nhỏ hơn `0`: trả về `None` (dùng để chỉ định một biến không có giá trị)
    - Nếu `delta` bằng `0`: tính `x` và trả về hai giá trị `x` giống nhau.
    - Ngược với hai trường hợp trên, chắc chắn `delta` lớn hơn `0`, tính và trả về `x1`, `x2`.

    ```py linenums="3"
    def solve_quadratic(a, b, c):
        delta = b ** 2 - 4 * a * c

        if delta < 0:
            return None, None
        elif delta == 0:
            x = -b / (2 * a)
            return x, x
        else:
            x1 = (- b - math.sqrt(delta)) / (2 * a)
            x2 = (- b + math.sqrt(delta)) / (2 * a)
            return x1, x2
    ```

    2\. Do có dùng hàm `sqrt()` để tính căn, ta cần nạp thư viện `math`. 
    
    ```py linenums="1"
    import math
    ```

    3\. Viết chương trình chính.

    - Cho người dùng nhập ba hệ số của phương trình.
    - Gọi hàm `solve_quadratic()` để giải phương trình bậc hai và gán nghiệm trả về cho biến `n1` và `n2`.
    - Dùng câu lệnh `if` xét `n1` và `n2` để in ra thông báo về nghiệm.

    ```py linenums="17"
    if __name__ == '__main__':
        heso_a = int(input('Nhập hệ số a: '))
        heso_b = int(input('Nhập hệ số b: '))
        heso_c = int(input('Nhập hệ số c: '))

        n1, n2 = solve_quadratic(heso_a, heso_b, heso_c)

        if n1 is None:
            print('Phương trình vô nghiệm')
        elif n1 == n2:
            print(f'Phương trình có nghiệm kép: x1 = x2 = {n1}')
        else:
            print('Phương trình có hai nghiệm phân biệt:')
            print(f'x1 = {n1}, x2 = {n2}')
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình cho người dùng nhập vào tháng, in ra số ngày trong tháng đó.

Nếu tháng nhập vào là tháng 2 thì cần xác định năm thường hay năm nhuận.

Năm nhuận là năm chia hết cho 4.

Nếu năm đó chia hết cho 100 thì cũng phải chia hết cho 400.

Ví dụ:

năm 2024 là năm nhuận, vì chia hết cho 4.

Năm 2000 là năm nhuận, vì chia hết cho 100 và chia hết cho 400.

Năm 1900 không phải là năm nhuận, vì chia hết cho 100 nhưng không chia hết cho 400.

**Đầu vào:**

Tháng và năm.

**Đầu ra:**

Số ngày trong tháng.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 11<br>2025 | Tháng 11 có 30 ngày |
| 2<br>2024 | Tháng 2 năm 2024 có 29 ngày |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ta cần viết hai hàm:

    - Một hàm kiểm tra năm nhuận hay không.
    - Một hàm cho biết số ngày trong tháng. Trong đó, nếu là tháng 2, thì gọi hàm kiểm tra năm nhuận để biết chính xác là 28 hay 29 ngày.

??? tip "Viết chương trình"

    1\. Viết hàm `get_days_in_month()` để cho biết số ngày trong tháng.

    Hàm gồm có:
    
    - Hai tham số là `month` và `year` ứng với tháng và năm.
    - Giá trị trả về là số ngày.

    Hàm hoạt động như sau: 

    - Nếu là tháng 2 (`month == 2`) thì gọi hàm `is_leaf_year()` để xét năm nhuận (hàm này sẽ được viết sau).

        Nếu hàm `is_leaf_year()` trả về `True` thì hàm `get_days_in_month()` trả về `29`.

        Ngược lại, 'False', thì trả về `28`.

    - Nếu là tháng 4, 6, 9 hoặc 11 thì trả về `30`.

    - Với các tháng còn lại, trả về `31`.

    ```py linenums="5"
    def get_days_in_month(month, year):
        if month == 2:
            if is_leaf_year(year) == True:
                return 29
            else:
                return 28
        elif month == 4 or month == 6 or month == 9 or month == 11:
            return 30
        else:
            return 31
    ```

    2\. Viết hàm `is_leaf_year()` để kiểm tra năm nhuận.

    Hàm gồm có một tham số là `year`, ứng với năm cần xét.
    
    Giá trị trả về là `True` hoặc `False`, ứng với nhuận hoặc không nhuận.

    Dưới đây là một cách viết hàm `is_leaf_year()`.

    ```py linenums="1"
    def is_leaf_year(year):
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
    ```

    3\. Viết chương trình chính.

    - Cho người dùng nhập tháng.
    - Nếu người dùng nhập tháng `2` thì cho nhập tiếp năm. Ngược lại, thì không cần nhập năm.
    - Gọi hàm `get_days_in_month()` và gán số ngày trả về cho biến `result`.
    - In ra số ngày.

    ```py linenums="17"
    if __name__ == '__main__':
        m = int(input('Nhập tháng: '))

        if m == 2:
            y = int(input('Nhập năm: '))
        else:
            y = 2025

        result = get_days_in_month(m, y)

        if m == 2:
            print(f'Tháng {m} năm {y} có {result} ngày')
        else:
            print(f'Tháng {m} có {result} ngày')
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình cho biết ba đoạn thẳng nhập vào có tạo thành tam giác hay không.

**Đầu vào:**

Ba số biểu thị cho độ dài của ba đoạn thằng.

**Đầu ra:**

Thông bao tạo thành tam giác hay không.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 3 4 5 | Tạo thành tam giác |
| 1 1 7 | Không tạo thành tam giác |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Để tạo thành tam giác, tổng của hai cạnh bất kỳ cũng phải lớn hơn cạnh còn lại.

    Do đó, ta dùng câu lệnh `if` và toán tử `and` để xét ba điều kiện sau xảy ra đồng thời:

    - `a + b > c`
    - `b + c > a`
    - `a + c > b`

??? tip "Viết chương trình"

    1\. Viết hàm `is_triangle()` để xét các điều kiện.

    Hàm gồm có:

    - Ba tham số `a`, `b` và `c` biểu thi cho độ dài ba đoạn thẳng.
    - Giá trị trả về là `True` hoặc `False` ứng với tạo thành hoặc không tạo thành.

    Thay vì dùng câu lệnh `if`, ta có thể viết như sau:

    ```py linenums="1"
    def is_triangle(a, b, c):
        return a + b > c and b + c > a and c + a > b
    ```

    2\. Viết chương trình chính.

    - Cho người dùng nhập vào độ dài ba đoạn thẳng`.
    - Gọi hàm `is_triangle()` và dùng câu lệnh `if` để xét giá trị trả về là `True` hay `False` để in ra thông báo tương ứng.
    
    ```py linenums="5"
    if __name__ == '__main__':
        d1 = float(input('Độ dài đoạn thứ nhất: '))
        d2 = float(input('Độ dài đoạn thứ hai: '))
        d3 = float(input('Độ dài đoạn thứ ba: '))

        if is_triangle(d1, d2, d3):
            print(f'Ba đoạn {d1}, {d2} và {d3} tạo thành tam giác')
        else:
            print(f'Ba đoạn {d1}, {d2} và {d3} không tạo thành tam giác')
    ```

## Bài 4

### Đề bài

**Yêu cầu:**

Viết chương trình cho người dùng nhập vào cân nặng (đơn vị kg) và chiều cao (đơn vị mét), in ra chỉ số BMI và trạng thái cơ thể tương ứng.

BMI (Body Mass Index) là chỉ số khối cơ thể, đánh giá tình trạng dinh dưỡng và sức khỏe tổng thể.

| Phạm vi BMI | Tình trạng |
| --- | --- |
| $BMI \lt 18.5$ | Thiếu ký |
| $18.5 \le BMI \lt 23$ | Bình thường |
| $23 \le BMI \lt 25$ | Dư ký |
| $BMI \ge 25$ | Béo phì cấp độ I trở lên |

**Đầu vào:**

Một số nguyên là kích thước của ma trận vuông.

**Đầu ra:**

Ma trận theo yêu cầu.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 68<br>1.75 | 22.20<br>Bình thường |
| 80<br>1.6 | 31.24<br>Béo phì |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ta cần viết hai hàm:

    - Một hàm tính chỉ số BMI.
    - Một hàm phân loại BMI.

??? tip "Viết chương trình"

    1\. Viết hàm `calculate_bmi()` để tính chỉ số BMI.

    Hàm gồm có:
    
    - Hai tham số đầu vào là `weight` và `height`, ứng với cân nặng và chiều cao.
    - Giá trị trả về là chỉ số BMI.

    ```py linenums="1"
    def calculate_bmi(weight, height):
        return weight / (height ** 2)
    ```

    2\. Viết hàm `categorize_bmi()` để phân loại BMI.

    Hàm gồm có:
    
    - Một tham số đầu vào là `bmi`.
    - Giá trị trả về là một trong các loại: `underweight`, `normal`, `overweight` và `obesity`.

    ```py linenums="5"
    def categorize_bmi(bmi):
        if bmi < 18.5:
            return 'underweight'
        elif bmi < 23:
            return 'normal'
        elif bmi < 25:
            return 'overweight'
        else:
            return 'obesity'
    ```

    3\. Viết chương trình chính.

    - Cho người dùng nhập vào cân nặng và chiều cao.
    - Gọi hàm `calculate_bmi()`.
    - Gọi hàm `categorize_bmi()` và gán giá trị trả về cho biến `category`.
    - Dựa trên giá trị của biến `category`, dùng câu lệnh `if` để in ra thông báo tương ứng.

    ```py linenums="16"
    if __name__ == '__main__':
        w = float(input('Bạn nặng bao nhiêu ký? '))
        h = float(input('Bạn cao bao nhiêu mét? '))

        b = calculate_bmi(w, h)
        category = categorize_bmi(b)

        print(f'BMI của bạn: {b}')

        if category == 'underweight':
            print('Bạn bị thiếu ký, ốm nhom')
        elif category == 'normal':
            print('Thân hình bạn bình thường')
        elif category == 'overweight':
            print('Bạn hơi dư ký')
        else:
            print('Bạn bị béo phì rồi')
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1SOi_GyZ84ufwWJM1RvqhJAPC-FEFZ5ec?usp=sharing){target="_blank"}