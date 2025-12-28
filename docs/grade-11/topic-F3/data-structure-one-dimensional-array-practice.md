---
icon: material/table-row
---

# Thực hành mảng một chiều

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số bài toán liên quan đến mảng một chiều:

    - Phát sinh ngẫu nhiên mảng một chiều.
    - Tìm phần tử lớn nhất.
    - Tính tổng tích luỹ trong phạm vi cho trước.
    - Đánh dấu các phần tử thoả yêu cầu.

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình phát sinh `n` phần tử ngẫu nhiên cho mảng một chiều. Các phần tử đều là số nguyên trong phạm vi từ 0 đến 10.

**Đầu vào:**

Số phần tử cần phát sinh `n`.

**Đầu vào:**

Mảng một chiều `A` gồm `n` phần tử nguyên.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 20 | [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8] |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng hàm `randint()` trong module `random` của thư viện Numpy để phát sinh ngẫu nhiên.

??? tip "Viết chương trình"

    0\. Cài đặt thư viện Numpy.

    ```py linenums="1"
    !pip install numpy
    ```
    
    Sau khi cài đặt Numpy, hãy tạo cell mới để viết mã lệnh của chương trình.

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `generate()` dùng để phát sinh ngẫu nhiên mảng một chiều.

    Hàm gồm có:
    
    - Một tham số đầu vào là `n`.
    - Giá trị trả về là mảng một chiều `A`.

    ```py linenums="3"
    def generate(n):
        return np.random.randint(0, 11, n) # (1)!
    ```
    { .annotate }

    1.  Hàm `randint()` phát sinh `n` số nguyên, có giá trị ngẫu nhiên từ `0` đến `10`.

    3\. Viết chương trình chính.

    - Cho người dùng nhập vào số phần tử, lưu vào biến `size`.
    - Gọi hàm `generate()` ra thực hiện, gán kết quả cho biến `A`.
    - In ra mảng `A`.

    ```py linenums="7"
    if __name__ == '__main__':
        size = int(input('Số phần tử cần phát sinh: '))

        A =  generate(size)
        print(A)
    ```

    4\. Chạy chương trình trên, nhập vô `20`, kết quả tương tự như sau:

    ```py
    Số phần tử cần phát sinh: 20
    [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8]
    ```

!!! info "Phát sinh ngẫu nhiên"

    Mỗi lần chạy lại chương trình, máy tính sẽ phát sinh các số một cách ngẫu nhiên, không giống những lần khác.

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình tìm phần tử lớn nhất trong mảng đã phát sinh ở bài 1.

**Đầu vào:**

Mảng một chiều `A`.

**Đầu ra:**

Giá trị của phần tử lớn nhất và vị trí của nó.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8] | Lớn nhất: 10<br>Vị trí: 10 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Trong cùng chương trình với bài trên, ta viết thêm hàm tìm giá trị lớn nhất.

    Để tìm giá trị lớn nhất trong mảng:

    - Ta tạm coi phần tử đầu là lớn nhất.
    - Duyệt mảng từ phần tử thứ hai trở đi:

        Nếu phần tử nào lớn hơn phần tử lớn nhất (tạm thời) thì nó là lớn nhất, ta cập nhật giá trị lớn nhất mới.

??? tip "Viết chương trình"

    1\. Viết hàm `maximum`() (1) dùng để tìm chỉ số của phần tử lớn nhất trong mảng.
    { .annotate }

    1.  Ta không đặt tên là `max()` vì trùng tên với hàm `max()` có sẵn của Python hoặc của thư viện Numpy.

    Hàm gồm có:

    - Một tham số đầu vào là mảng `array`.
    - Giá trị trả về là chỉ số `m` của phần tử lớn nhất (tức `array[m]` là lớn nhất).
    
    Hàm hoạt động như sau:

    - Biến `m` dùng để lưu chỉ số của phần tử lớn nhất.
    - Tạm coi phần tử đầu tiên là lớn nhất: khởi tạo `m = 0`.
    - Duyệt mảng bằng biến `i` từ chỉ số `1` đến cuối mảng:

        Nếu `array[i]` lớn hơn `array[m]` thì cập nhật `m` mới.

    - Trả về m.

    ```py linenums="7"
    def maximum(array):
        m = 0

        for i in range(1, array.size):
            if array[i] > array[m]:
                m = i

        return m
    ```

    2\. Viết chương trình chính:

    - Gọi hàm `maximum()` ra thực hiện, gán kết quả cho biến `index`.
    - Dùng biến `value` để lưu giá trị lớn nhất.
    - In ra `index` và `value`.

    ```py linenums="18" hl_lines="7-9"
    if __name__ == '__main__':
        size = int(input('Số phần tử cần phát sinh: '))

        A =  generate(size)
        print(A)

        index = maximum(A)
        value = A[index]
        print(f'Phần tử lớn nhất có giá trị là {value}, nằm ở vị trí {index}')
    ```

    3\. Chạy chương trình trên, kết quả tương tự như sau:

    ```py
    Số phần tử cần phát sinh: 20
    [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8]
    Phần tử lớn nhất có giá trị là 10, nằm ở vị trí 10
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình tính tổng luỹ của mảng một chiều ở bài 1, biết rằng:

- Phạm vi tính tổng là từ chỉ số `begin` đến chỉ số `end` (không bao gồm `end`).
- Tổng có giá trị ban đầu là `init`.

**Đầu vào:**

- Mảng một chiều `A`.
- Chỉ số bắt đầu `begin`.
- Chỉ số kết thúc `end`.
- Giá trị tổng ban đầu `init`.

**Đầu ra:**

Tổng tích luỹ.

**Ví dụ:**

|Đầu vào | Đầu ra |
| --- | --- |
| [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8]<br>15 20 2 | 27 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng vòng lặp để duyệt mảng `A` trong phạm vi cho trước, cộng dồn các phần tử vào biến tổng.
    
??? tip "Viết chương trình"

    1\. Viết hàm `accumulate()` dùng để tính tổng.

    Hàm gồm có 4 tham số:

    - Mảng một chiều `array`
    - Chỉ số bắt đầu `begin`
    - Chỉ số kết thức `end`
    - Tổng ban đầu `init`
    
    Giá trị trả về là tổng.

    Hàm hoạt động như sau:

    - Khởi tạo biến `s` là tổng ban đầu có giá trị là `init`.
    - Duyệt mảng `array` từ `begin` đến `end` (không bao gồm `end`):

        Cộng dồn `array[i]` vào biến `s`.
   
    ```py linenums="17"
    def accumulate(array, begin, end, init):
        s = init

        for i in range(begin, end):
            s = s + array[i]

        return s
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập chỉ số bắt đầu, chỉ số kết thúc và tổng ban đầu, lưu vào các biến `b`, `e`, `t`.
    - Gọi hàm `accumulate()` ra thực hiện, gán kết quả cho biến `result`.
    - In ra `result`.

    ```py linenums="36"
        b = int(input('Vị trí bắt đầu: '))
        e = int(input('Vị trí kết thúc: '))
        t = int(input('Tổng ban đầu: '))

        result = accumulate(A, b, e, t)
        print(f'Tổng từ {b} đến trước {e}, cộng thêm {t} là {result}')
    ```

    3\. Chạy chương trình trên, kết quả tương tự như sau:

    ```py
    Vị trí bắt đầu: 15
    Vị trí kết thúc: 20
    Tổng ban đầu: 2
    Tổng từ 15 đến trước 20, cộng thêm 2 là 27
    ```

---

## Bài 4

### Đề bài

**Yêu cầu:**

Viết chương trình đánh dấu mảng một chiều ở bài 1, cụ thể:

- Phần tử từ 5 trở xuống được đánh dấu True.
- Phần tử lớn hơn 5 được đánh dấu False.

**Đầu vào:**

Mảng một chiều `A`.

**Đầu ra:**

Mảng một chiều gốm các giá trị True và False.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [ 3  8  4  0  8  8  3  4  6  8 10 10  3  0  1  3  1  8  5  8] | [ True False  True  True False False  True  True False False False False  True  True  True  True  True False  True False] |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng vòng lặp `for` để duyệt mảng.
    
    Dùng câu lệnh `if` để xét các phần tử nhỏ hơn hay lớn hơn 5, gán giá trị `True` hoặc `False` tương ứng vào mảng mới.

??? tip "Viết chương trình"

    1\. Viết hàm `mark()` dùng để đánh dấu.

    Hàm gồm có:

    - Một tham số đầu vào là mảng một chiều `array`.
    - Giá trị trả về là mảng một chiều `M`.

    Hàm hoạt động như sau:

    - Khởi tạo mảng một chiều `M` có số phần tử bằng với mảng `array`, tất cả phần tử đầu là `True`.
    - Duyệt mảng `array` từ đầu đến cuối:

        Nếu `array[i]` lớn hơn `5` thì đánh dấu `M[i]` tương ứng là `False`.
   
    - Trả về mảng `M`.

    ```py linenums="26"
    def mark(array):
        M = np.full(array.size, True)

        for i in range(array.size):
            if array[i] > 5:
                M[i] = False

        return M
    ```
    
    2\. Viết chương trình chính:

    - Gọi hàm `mark()` ra thực hiện, gán kết quả cho biến `marked_A`.
    - In ra `marked_A`.

    ```py linenums="53"
        marked_A = mark(A)
        print(f'Mảng đánh dấu: {marked_A}')
    ```

    3\. Chạy chương trình trên, kết quả tương tự như sau:

    ```py
    Mảng đánh dấu: [ True False  True  True False False  True  True False False False False  True  True  True  True  True False  True False]
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1l13UdJ5qKLOeYULqQ3wWM2Q2oIkFMB6u?usp=sharing){target="_blank"}

