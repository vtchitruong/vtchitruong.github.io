---
icon: material/format-list-numbered
---

# Thực hành danh sách - Phần 2

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn áp dụng các thao tác thông dụng trên danh sách:

    - Phát sinh số ngẫu nhiên
    - Lọc ra các số chẵn
    - In ra các số chẵn lớn nhất

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình khởi tạo ngẫu nhiên danh sách gồm `n` số nguyên.

**Đầu vào:**

Số nguyên `n`

**Đầu ra:**

Danh sách gồm `n` số nguyên.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 20 | [10, 52, 36, 52, 13, 59, 90, 42, 40, 80, 75, 36, 13, 33, 81, 28, 85, 17, 90, 47] |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Dùng thư viện `random` của Python để thực hiện tạo ngẫu nhiên.

    Dùng vòng lặp để thực hiện `n` lần việc tạo ngẫu nhiên và thêm phần tử vừa tạo vô danh sách bằng các hàm có sẵn của Python.
    
??? tip "Viết chương trình"

    0\. Nạp thư viện `random`.

    ```py linenums="1"
    import random as rd
    ```

    1\. Viết hàm `generate()` (1) dùng để phát sinh ngẫu nhiên danh sách gồm `n` số nguyên có giá trị từ ` đến 100.

    Hàm gồm có:
    
    - Một tham số đầu vào là danh sách `L`.
    - Giá trị trả về là tổng `s`.

    Hàm hoạt động như sau:

    - Khởi tạo danh sách `L` rỗng.
    - Dùng vòng lặp for, cho `i` chạy từ `0` đến `n - 1`:

        - Phát sinh ngẫu nhiên một số `number` có giá trị từ `1` đến `100`.
        - Thêm `number` vô danh sách `L` bằng hàm `append()`.


    ```py linenums="3"
    def generate(n):
        L = []

        for i in range(n):
            L.append(rd.randint(1, 100))

        return L
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số lượng phần tử, lưu trong biến `size`.
    - Gọi hàm `generate()` để phát sinh danh sách, gán kết quả cho danh sách `numbers`.
    - In ra `numbers`.

    ```py linenums="10"
    if __name__ == '__main__':
        size = int(input('Nhập số lượng phần tử: '))
        numbers = generate(size)
        print(f'Phát sinh ngẫu nhiên: {numbers}')
    ```

    3\. Chạy chương trình trên, nhập vô `20`, kết quả có hình thức tương tự như sau:
    
    ```py
    Nhập số lượng phần tử: 20
    Phát sinh ngẫu nhiên: [10, 52, 36, 52, 13, 59, 90, 42, 40, 80, 75, 36, 13, 33, 81, 28, 85, 17, 90, 47]
    ```

!!! info "Phát sinh ngẫu nhiên"

    Mỗi lần chạy lại chương trình, máy tính sẽ phát sinh các số một cách ngẫu nhiên, không giống những lần khác.

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình lọc ra danh sách các số chẵn của danh sách phát sinh ban đầu.

**Đầu vào:**

Danh sách các số nguyên `L`.

**Đầu ra:**

Danh sách các số chẵn của `L`.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| Danh sách phát sinh ngẫu nhiên ở trên. | [10, 52, 36, 52, 90, 42, 40, 80, 36, 28, 90] |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Duyệt các phần tử trong danh sách ban đầu, nếu phần tử nào là chẵn thì thêm vô danh sách mới.    

??? tip "Viết chương trình"

    1\. Viết hàm `filter_even()` dùng để lọc ra các số chẵn.

    Hàm gồm có:
        
    - Một tham số đầu vào là danh sách `L`.
    - Giá trị trả về là danh sách các số chẵn `result`.

    Hàm hoạt động như sau:

    - Khởi tạo danh sách rỗng `result`.
    - Duyệt từng phần tử `e` trong `L` bằng toán tử `in`:
    
        Nếu `e` chia hết cho 2 (tức là chẵn) thì thêm `e` vô `result`.
    
    - Trả về `evens`.

    ```py linenums="12"
    def filter_even(L):
        result = []

        for e in L:
            if e % 2 == 0:
                result.append(e)

        return result
    ```

    2\. Viết chương trình chính:

    - Gọi hàm `filter_even()` để lọc ra số chẵn, gán kết quả cho biến `evens`.
    - In ra `evens`.

    ```py linenums="14" hl_lines="6-7"
    if __name__ == '__main__':
        size = int(input('Nhập số lượng phần tử: '))
        numbers = generate(size)
        print(f'Phát sinh ngẫu nhiên: {numbers}')

        evens = filter_even(numbers)
        print(f'Danh sách các số chẵn: {evens}')
    ```

    3\. Chạy chương trình trên, kết quả có hình thức tương tự như sau:

    ```py
    Danh sách các số chẵn: [10, 52, 36, 52, 90, 42, 40, 80, 36, 28, 90]
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình in ra `n` phần tử lớn nhất của danh sách các số chẵn đã lọc ra.

**Đầu vào:**

Danh sách các số số chẵn `E`.

**Đầu ra:**

`n` phần tử lớn nhất của `E`.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [6, -2, -5, -4, 6, 6, 0, -3, 10, 5] | 10 |

### Cách giải đề xuất


??? tip "Ý tưởng chính"

    Sắp xếp danh sách `evens` của bài 2 theo thứ tự giảm dần.

    Dùng kỹ thuật lát cắt để lấy ra `n` phần tử đầu tiền, đó chính là `n` phần tử lớn nhất. 

??? tip "Viết chương trình"

    1\. Viết hàm `get_largest()` dùng để lấy ra `n` phần tử lớn nhất trong danh sách.

    Hàm gồm có:
    
    - Hai tham số đầu vào là danh sách `E` và `n`.
    - Giá trị trả về `n` phần tử đầu tiên.

    Hàm hoạt động như sau:

    - Dùng hàm `sorted()` để sắp xếp `E` giảm dần, gán kết quả cho biến danh sách `result`.
    - Trả về `n` phần tử đầu tiên của `result` bằng lát cắt.
    
    - Trả về `m`.

    ```py linenums="22"
    def get_largest(E, n):
        result = sorted(E, reverse=True)
        return result[:n]
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập vào số phần tử lớn nhất muốn in ra, lưu vô biến `n`.
    
    - Gọi hàm `get_largest()` để lấy ra `n` phần tử lớn nhất của danh sách `evens`, gán kết quả cho biến `largest_evens`.
    - In ra `largest_evens`.

    ```py linenums="35"
        n = int(input('Số lượng phần tử muốn in ra: '))
        largest_evens = get_largest(evens, n)
        print(f'{n} phần tử chẵn lớn nhất: {largest_evens}')
    ```

    3\. Chạy chương trình trên, nhập vô `5`, kết quả có hình thức tương tự như sau:

    ```py
    Số lượng phần tử muốn in ra: 5
    5 phần tử chẵn lớn nhất: [90, 90, 80, 52, 52]
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1uxodOjKqNY1dqhrxqKy0Ld41W4lVVcAh?usp=sharing){target="_blank"}