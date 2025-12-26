---
icon: material/format-list-numbered
---

# Thực hành danh sách - Phần 1

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách giải bài toán liên quan đến duyệt danh sách:

    - Tính tổng
    - Tính trung bình cộng
    - Tìm giá trị lớn nhất

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình tính tổng các phần tử trong danh sách.

**Đầu vào:**

Danh sách các số nguyên `L`.

**Đầu ra:**

Tổng các phần tử.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [6, -2, -5, -4, 6, 6, 0, -3, 10, 5] | 19 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Duyệt danh sách từ đầu đến cuối, cộng dồn từng phần tử vào biến tổng kết quả.

??? tip "Viết chương trình"

    1\. Viết hàm `sum_list()` (1) dùng để tính tổng các phần tử trong danh sách.
    { .annotate }

    1.  Ta không đặt tên là `sum()` vì trùng tên với hàm `sum()` có sẵn của Python.

    Hàm gồm có:
    
    - Một tham số đầu vào là danh sách `L`.
    - Giá trị trả về là tổng `s`.

    Hàm hoạt động như sau:

    - Khởi tạo tổng `s = 0`.
    - Dùng vòng lặp `for` và toán tử `in`:

        Ứng với mỗi phần tử `e`, cộng dồn `e` vào `s`.

    ```py linenums="1"
    def sum_list(L):
        s = 0

        for e in L:
            s = s + e

        return s
    ```

    2\. Viết chương trình chính:

    - Khởi tạo biến danh sách `numbers` (1).
        { .annotate }

        1.  Ta tạm thời khai báo *"cứng"* danh sách, không cho người dùng nhập thủ công từng phần tử. Mục đích là tiết kiệm thời gian và tập trung vào ý tưởng duyệt danh sách, tránh sa vào vấn đề khác.

    - Gọi hàm `sum_list()` để lấy tổng, gán kết quả cho biến `sum_numbers`.
    - In ra `sum_numbers`.
    
    ```py linenums="10"
    if __name__ == '__main__':
        numbers = [6, -2, -5, -4, 6, 6, 0, -3, 10, 5]

        sum_numbers = sum_list(numbers)

        print(f'Tổng các phần tử: {sum_numbers}')
    ```

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình tính trung bình cộng của các phần tử trong danh sách.

**Đầu vào:**

Danh sách các số nguyên `L`.

**Đầu ra:**

Trung bình cộng của các phần tử.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [6, -2, -5, -4, 6, 6, 0, -3, 10, 5] | 1.9 |

### Cách giải đề xuất


??? tip "Ý tưởng chính"

    Ta có thể viết hàm tính trung bình cộng vào chung chương trình của bài 1.

    Trong hàm này, ta gọi hàm `sum_list()` để tính tổng, trước khi thực hiện chia để tính trung bình.

??? tip "Viết chương trình"

    1\. Viết hàm `sum_list()` như bài 1.

    ```py linenums="1"
    def sum_list(L):
        s = 0

        for e in L:
            s = s + e

        return s
    ```

    2\. Viết hàm `average()` dùng để tính trung bình cộng.

    Hàm gồm có:
        
    - Một tham số đầu vào là danh sách `L`.
    - Giá trị trả về là trung bình cộng.

    Hàm hoạt động như sau:

    - Gọi hàm `len()` để lấy số phần tử của `L`.
    - Gọi hàm `sum_list()` để tính tổng các phần tử của `L`.
    - Thực hiện phép chia để lấy trung bình cộng.

    ```py linenums="10"
    def average(L):
        return sum_list(L) / len(L)
    ```

    3\. Viết chương trình chính:

    - Gọi hàm `average()` để lấy trung bình cộng, gán kết quả cho biến `avg`.
    - In ra `avg`.

    ```py linenums="14" hl_lines="7-8"
    if __name__ == '__main__':
        numbers = [6, -2, -5, -4, 6, 6, 0, -3, 10, 5]

        sum_numbers = sum_list(numbers)
        print(f'Tổng các phần tử: {sum_numbers}')
        
        avg = average(numbers)
        print(f'Trung bình cộng các phần tử: {avg}')
    ```

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình tính tìm giá trị lớn nhất trong danh sách.

**Đầu vào:**

Danh sách các số nguyên `L`.

**Đầu ra:**

Giá trị lớn nhất.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [6, -2, -5, -4, 6, 6, 0, -3, 10, 5] | 10 |

### Cách giải đề xuất


??? tip "Ý tưởng chính"

    Trong cùng chương trình với hai bài trên, ta viết thêm hàm tìm giá trị lớn nhất.

    Để tìm giá trị lớn nhất trong danh sách:

    - Ta tạm coi phần tử đầu là lớn nhất.
    - Duyệt danh sách từ phần tử thứ hai trở đi:
    
        Nếu phần tử nào lớn hơn phần tử lớn nhất (tạm thời) thì nó là lớn nhất, ta cập nhật giá trị lớn nhất mới.

??? tip "Viết chương trình"

    1\. Viết hàm `maximum()` (1) dùng để tìm giá trị lớn nhất trong danh sách.
    { .annotate }

    1.  Ta không đặt tên là `max()` vì trùng tên với hàm `max()` có sẵn của Python.

    Hàm gồm có:
    
    - Một tham số đầu vào là danh sách `L`.
    - Giá trị trả về là vị trí `m` của phần tử lớn nhất (tức `L[m]` là lớn nhất).

    Hàm hoạt động như sau:

    - Biến `m` dùng để lưu vị trí của phần tử lớn nhất.
    - Tạm coi phần tử đầu tiên là lớn nhất: khởi tạo `m = 0`.
    - Duyệt mảng bằng biến `i` từ chỉ số `1` đến hết:

        Nếu `L[i] > L[m]` thì cập nhật `m` mới.
    
    - Trả về `m`.

    ```py linenums="14"
    def maximum(L):
        n = len(L)

        m = 0
        for i in range(1, n):
            if L[i] > L[m]:
                m = i

        return m
    ```

    2\. Viết chương trình chính:

    - Gọi hàm `maximum()` để lấy chỉ số của phần tử lớn nhất, gán kết quả cho biến `max_index`.
    - Dùng biến `max_value` để lưu giá trị lớn nhất.
    - In ra cả `max_index` lẫn `max_value`.
        
    ```py linenums="14" hl_lines="10-12"
    if __name__ == '__main__':
        numbers = [6, -2, -5, -4, 6, 6, 0, -3, 10, 5]

        sum_numbers = sum_list(numbers)
        print(f'Tổng các phần tử: {sum_numbers}')
        
        avg = average(numbers)
        print(f'Trung bình cộng các phần tử: {avg}')

        max_index = maximum(numbers)
        max_value = numbers[max_index]
        print(f'Giá trị lớn nhất là {max_value}, nằm tại vị trí {max_index}')
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1-yrOGB4pGboZ-Alvv2M2lmeojfwHoh4z?usp=sharing){target="_blank"}