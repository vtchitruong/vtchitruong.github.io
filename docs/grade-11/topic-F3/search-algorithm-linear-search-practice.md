---
icon: material/table-search
---

# Thực hành tìm kiếm tuần tự

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách giải một số bài toán liên quan đến thuật toán tìm kiếm tuần tự:

    - Tính tần số xuất hiện.
    - Xác định vị trí xuất hiện đầu tiên và cuối cùng.
    - Kiểm tra số chính phương.

    *Lưu ý: các bài tập này dùng cho mục đích luyện tập thuật toán tìm kiếm tuần tự, cho nên cách giải đề xuất trong bài viết chưa chắc là tốt nhất.*

## Bài 1

### Đề bài

**Yêu cầu:**

Áp dụng thuật toán tìm kiếm tuần tự, viết chương trình tính tần số của giá trị `k` trong mảng một chiều `A`.

**Đầu vào:**

Mảng một chiều `A` và giá trị `k`.

**Đầu ra:**

Tần số của `k`.

**Ví dụ:**

| Đầu vào | Đầu ra | Giải thích |
| --- | --- | --- |
| [1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5]<br>4 | 3 | Số 4 xuất hiện 3 lần |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Gọi `counter` là bộ đếm, dùng để lưu tần số của `k`.

    Duyệt mảng `A` từ đầu đến cuối: ứng với mỗi phần tử `A[i]` bằng `k`, ta tăng biến đếm `counter` thêm `1` đơn vị.

??? tip "Viết chương trình"

    0\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    1\. Viết hàm `occurrence()` dùng để tính tần số của `k` trong `A`.

    Hàm gồm có:
    
    - Hai tham số đầu vào là mảng `A` và giá trị `k`.
    - Giá trị trả về là tần số.

    Hàm hoạt động như sau: 

    - Khởi tạo biến `counter` là `0`.
    - Duyệt mảng `A`: nếu `A[i] == k` thì cộng thêm 1 cho `counter`.

    ```py linenums="3"
    def occurrence(A, k):
        n = len(A)

        counter = 0
        for i in range(n):
            if A[i] == k:
                counter = counter + 1

        return counter
    ```

    3\. Viết chương trình chính.

    - Khởi tạo mảng `arr`.
    - Cho người dùng nhập giá trị cần tính tần số, lưu vào biến `key`.
    - Gọi hàm `occurrence()` ra thực hiện và gán kết quả trả về cho biến `c`.
    - In ra tần số `c`.

    ```py linenums="14"
    if __name__ == '__main__':
        arr = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])
        key = int(input('Nhập giá trị cần tìm: '))

        c = occurrence(arr, key)

        print(f'Tần số của {key} trong mảng là: {c}')
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Áp dụng thuật toán tìm kiếm tuần tự, viết chương trình xác định vị trí xuất hiện đầu tiên và cuối cùng của một giá trị `k` trong mảng một chiều `A` đã có thứ tự tăng dần.

**Đầu vào:**

Mảng một chiều `A` tăng dần và giá trị `k`.

**Đầu ra:**

Vị trí bắt đầu và vị trí kết thúc.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [0, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 7, 8, 8, 9]<br>4 | Vị trí bắt đầu: 3<br>Vị trí kết thúc: 12 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ta dùng thuật toán tìm kiếm tuần tự để xác định vị trí xuất hiện đầu tiên của `k`.

    Ta cũng dùng thuật toán này nhưng với chiều duyệt từ cuối ngược về đầu để xác định vị trí xuất hiện cuối cùng.

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `find_first_occurrence()` dùng để tìm vị trí xuất hiện đầu tiên.

    Hàm gồm có:
    
    - Hai tham số đầu vào là mảng `A` tăng dần và giá trị `k`.
    - Giá trị trả về là vị trí đầu tiên tìm thấy.

    ```py linenums="3"
    def find_first_occurrence(A, k):
        n = len(A)

        for i in range(n):
            if A[i] == k:
                return i

        return -1
    ```

    2\. Viết hàm `find_last_occurrence()` dùng để tìm vị trí xuất hiện cuối cùng.

    Hàm gồm có:
    
    - Hai tham số đầu vào là mảng `A` tăng dần và giá trị `k`.
    - Giá trị trả về là vị trí cuối cùng tìm thấy.

    Hàm hoạt động như sau:

    - Duyệt từ cuối mảng ngược về đầu: nếu `A[i] == k` thì trả về `i`.

    ```py linenums="13"
    def find_last_occurrence(A, k):
        n = len(A)

        for i in range(n - 1, -1, -1):
            if A[i] == k:
                return i

        return -1
    ```

    4\. Viết chương trình chính.

    - Khởi tạo mảng `arr`.
    - Cho người dùng nhập giá trị `key`.
    - Gọi hàm `find_first_occurrence()` ra thực hiện và gán kết quả trả về cho biến `first`.
    - Gọi hàm `find_last_occurrence()` ra thực hiện và gán kết quả trả về cho biến `last`.
    - In ra `first` và `last`.

    ```py linenums="22"
    if __name__ == '__main__':
        arr = np.array([0, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 7, 8, 8, 9])
        key = int(input('Nhập giá trị cần tìm: '))

        first = find_first_occurrence(arr, key)
        last = find_last_occurrence(arr, key)

        if first == -1:
            print(f'Không tìm thấy {key} trong mảng')
        else:
            print(f'{key} xuất hiện trong phạm vị từ {first} đến {last}')
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Áp dụng thuật toán tìm kiếm tuần tự, viết chương trình kiểm tra xem số nguyên dương $n (n > 1)$ có phải là số chính phương không.

**Đầu vào:**

Số nguyên dương `n`.

**Đầu ra:**

Là số chính phương hoặc không.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 81 | Là số chính phương |
| 82 | Không phải là số chính phương |
| 6241 | Là số chính phương |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Nếu tồn tại một giá trị $i$ sao cho $i^2$ bằng $n$ thì $n$ là số chính phương.

    Ngược lại, không tồn tại $i$ thì $n$ không phải là số chính phương.

    Do đó, ta dùng thuật toán tìm kiếm tuần tự để tìm $i$ này, bắt đầu từ $2$.

??? tip "Viết chương trình"

    1\. Viết hàm `is_square_number()` dùng để kiểm tra chính phương.

    Hàm gồm có tham số `n` là số cần kiểm tra.
    
    Giá trị trả về là `i` hoặc `-1`.
   
    Hàm hoạt động như sau: 

    - Dùng vòng lặp cho `i` chạy từ `2` đến `n // 2 + 1`. (Vì $\sqrt{n}$ không vượt quá $\frac{n}{2} + 1$):

        - Nếu `i * i == n` thì trả về `i`.
        - Nếu `i * i > n` thì trả về `-1`.


    ```py linenums="1"
    def is_square_number(n):
        for i in range(2, n // 2 + 1):
            if i * i == n:
                return i

            if i * i > n:
                return -1
    ```

    2\. Viết chương trình chính.

    - Gọi hàm `is_square_number()` ra thực hiện và gán kết quả trả về cho biến `s`.
    - Dựa vào giá trị của `s`, in ra thông báo là chính phương hoặc không.

    ```py linenums="10"
    if __name__ == '__main__':
        num = int(input('Nhập số nguyên dương: '))

        s = is_square_number(num)

        if s == -1:
            print(f'{num} không phải là số chính phương')
        else:
            print(f'{num} là số chính phương vì {s}^2 = {num}')
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1Kkc-4-mKKnSSFmBKbpidwTpXDYmZth9T?usp=sharing){target="_blank"}