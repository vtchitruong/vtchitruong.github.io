---
icon: material/table-large
---

# Thực hành tìm kiếm nhị phân

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách giải một số bài toán liên quan đến thuật toán tìm kiếm nhị phân:
    
    - Xác định vị trí xuất hiện đầu tiên và cuối cùng
    - Kiểm tra số chính phương

---

## Bài 1

### Đề bài

**Yêu cầu:**

Áp dụng thuật toán tìm kiếm nhị phân, viết chương trình xác định vị trí xuất hiện đầu tiên và cuối cùng của một giá trị `k` trong mảng một chiều `A` đã có thứ tự tăng dần.

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

    Đối với vị trí xuất hiện đầu tiên: khi tìm được giá trị `k`, ta không dừng lại như trong bài học, mà vẫn tiếp tục thực hiện tìm kiếm nhị phân đối với mảng con bên trái. 
    
    Nói cách khác, khi `A[mid] == k`, ta không `return mid` ngay, mà thay đổi mốc phải `right` để tiếp tục tìm kiếm trên mảng con bên trái, cho đến khi không thể chia đôi mảng được nữa.

    Tương tự, đối với vị trí xuất hiện cuối cùng: khi `A[mid] == k`, ta không `return mid` ngay, mà thay đổi mốc trái `left` để tiếp tục tìm kiếm trên mảng con bên phải, cho đến khi không thể chia đôi mảng được nữa.

??? tip "Viết chương trình"

    0\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    1\. Viết hàm `find_first_occurrence()` dùng để tìm vị trí xuất hiện đầu tiên.

    Hàm gồm có:
    
    - Hai tham số đầu vào là mảng `A` tăng dần và giá trị `k`.
    - Giá trị trả về là vị trí đầu tiên tìm thấy.

    Hàm hoạt động như sau:

    - Khởi tạo biến `result` dùng để lưu vị trí `mid` tìm thấy `k`.
    - Khi `A[mid] == k` thì gán `mid` cho `result` và thay đổi mốc phải để tiếp tục tìm trên mảng con bên trái: `right = mid - 1`.
    - Trả về `result`.

    ```py linenums="3"
    def find_first_occurrence(A, k):
        left = 0
        right = len(A) - 1

        result = -1
        while left <= right:
            mid = (left + right) // 2

            if A[mid] == k:
                result = mid
                right = mid - 1
            elif A[mid] < k:
                left = mid + 1
            else:
                right = mid - 1

        return result
    ```

    2\. Viết hàm `find_last_occurrence()` dùng để tìm vị trí xuất hiện cuối cùng.

    Hàm gồm có:
    
    - Hai tham số đầu vào là mảng `A` tăng dần và giá trị `k`.
    - Giá trị trả về là vị trí cuối cùng tìm thấy.

    Hàm hoạt động như sau:
    
    - Khởi tạo biến `result` dùng để lưu vị trí `mid` tìm thấy `k`.
    - Khi `A[mid] == k` thì gán `mid` cho `result` và thay đổi mốc trái để tiếp tục tìm trên mảng con bên phải: `left = mid + 1`.
    - Trả về `result`.

    ```py linenums="22"
    def find_last_occurrence(A, k):
        left = 0
        right = len(A) - 1

        result = -1
        while left <= right:
            mid = (left + right) // 2

            if A[mid] == k:
                result = mid
                left = mid + 1
            elif A[mid] < k:
                left = mid + 1
            else:
                right = mid - 1

        return result
    ```

    3\. Viết chương trình chính.

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

## Bài 2

### Đề bài

**Yêu cầu:**

Áp dụng thuật toán tìm kiếm nhị phân, viết chương trình kiểm tra xem số nguyên dương $n (n > 1)$ có phải là số chính phương không.

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
   
    Nếu tồn tại một giá trị ở giữa $mid$ sao cho $mid^2$ bằng $n$ thì $n$ là số chính phương.

    Ngược lại, không tồn tại $mid$ thì $n$ không phải là số chính phương.

    Do đó, ta dùng thuật toán tìm kiếm nhị phân để tìm $mid$ này.

??? tip "Viết chương trình"

    1\. Viết hàm `is_square_number()` để kiểm tra chính phương.

    Hàm gồm có tham số `n` là số cần kiểm tra.
    
    Giá trị trả về là `i` hoặc `-1`.
   
    Hàm hoạt động như sau: 

    - Khởi tạo `left = 2` và `right == n // 2 + 1` 
    - Nếu `mid * mid == n` thì trả về `mid`.
    - Ngược lại, thay đổi mốc trái `left` hoặc mốc phải `right`.

    ```py linenums="1"
    def is_square_number(n):
        left = 2
        right = n // 2 + 1

        while left <= right:
            mid = (left + right) // 2

            if mid * mid == n:
                return mid

            if mid * mid < n:
                left = mid + 1
            else:
                right = mid - 1

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

- [Google Colab](https://colab.research.google.com/drive/1ijeIWEwOIP9AerYZFFyNrSCstW4sUlnG?usp=sharing){target="_blank"}