# Sắp xếp trộn

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán sắp xếp trộn nhằm minh họa phương pháp chia để trị.

## Bài toán

**Yêu cầu:**

Sắp xếp một mảng số nguyên theo thứ tự tăng dần bằng thuật toán sắp xếp trộn.

**Đầu vào:**

Mảng A gồm n số nguyên.

**Đầu ra:**

Mảng A có thứ tự tăng dần.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| 1 7 4 0 9 4 8 | 0 1 4 4 7 8 9 |

---

## Thuật toán sắp xếp trộn

Chia mảng `A` thành hai mảng con: nửa trái và nửa phải. 

Tiến trình này được thực hiện đệ quy cho đến khi các mảng con chỉ còn một phần tử duy nhất.

Vì mảng mà chỉ có một phần tử luôn được xem là đã có thứ tự nên ta bắt đầu thực hiện thao tác *"trộn"* các mảng con này lại với nhau theo thứ tự tăng dần để hình thành các mảng lớn hơn cũng có thứ tự.

Tiếp tục *"trộn"* các mảng con nửa trái và nửa phải đã có thứ tự như thế cho đến khi thu được mảng như ban đầu và có thứ tự.

Dựa theo ý tưởng trên, sắp xếp trộn được mô tả theo phương pháp chia để trị như sau:

!!! note "Sắp xếp trộn"

    **Bước 1: Chia**

    Chia mảng bằng cách xác định vị trí ở giữa: `mid = (left + right) // 2`.

    **Bước 2: Trị**

    Bước này bao gồm hai trạng thái:

    - Trị trực tiếp đối với trường hợp cơ sở:

        Khi mảng có kích thước bằng 1, thuật toán dừng chia và trả về chính mảng đó vì nó đã mặc nhiên có thứ tự.

    - Trị bằng đệ quy:

        Gọi đệ quy hàm sắp xếp trộn cho nửa trái và nửa phải.
        
        Kết quả của bước này là hai mảng con có thứ tự tăng dần.

    **Bước 3: Kết hợp**

    Thực hiện *"trộn"* hai mảng con đã có thứ tự thành một mảng mới duy nhất và cũng có thứ tự.

Hình sau minh họa thuật toán sắp xếp trộn đối với mảng `A = [1, 7, 4, 0, 9, 4, 8]`.

![Minh họa thuật toán sắp xếp trộn](../divide-and-conquer/images/merge-sort.svg){ loading=lazy width=420 }

---

## Viết chương trình

1\. Viết hàm `merge_sort()` dùng để thực hiện thuật toán sắp xếp trộn.

Hàm gồm có ba tham số đầu vào:

- `A` là mảng ban đầu cần sắp xếp.
- `left` và `right` là chỉ số dùng để xác định ranh giới của hai mảng con trái và phải trong mảng A. 

```py linenums="37"
def merge_sort(A, left, right):
    # Trị đối với trường hợp cơ sở
    if left >= right:
        return

    # Bước 1 - Chia: phân tách mảng A thành mảng con L và R
    mid = (left + right) // 2

    # Bước 2 - Trị: giải quyết đệ quy cho mảng con L và R
    merge_sort(A, left, mid)
    merge_sort(A, mid + 1, right)

    # Bước 3 - Kết hợp: trộn mảng con L và R
    merge_two_arrays(A, left, mid, right)
```

2\. Viết hàm `merge_two_arrays()` dùng để trộn mảng con trái và mảng con phải lại thành một.

Hàm gồm có bốn tham số:

- `A` là mảng ban đầu cần sắp xếp.
- `left`, `mid` và `right` là các chỉ số dùng để xác định ranh giới của hai mảng con trái và phải trong mảng `A`.

Hàm hoạt động như sau:

- Khởi tạo mảng con trái `L` và mảng con phải `R` từ mảng `A`.
- Khởi tạo các biến dùng làm chỉ số cho từng mảng:

    - `L_i`: chỉ số của mảng `L`
    - `R_i`: chỉ số của mảng `R`
    - `A_i`: : chỉ số của mảng `A`

- Trộn hai mảng con vô mảng `A`:

    - So sánh từng cặp phần tử của `L` và `R` với nhau. Nếu phần tử của `L` nhỏ hơn thì nạp vô mảng `A`. Ngược lại, phần tử của `R` nhỏ hơn, nạp phần tử của `R` vô mảng `A`.
    - Tăng chỉ số của các mảng để di chuyển đến vị trí tiếp theo trong mảng.

- Nạp các phần tử còn lại, nếu có, của mảng `L` vô mảng A.
- Nạp các phần tử còn lại, nếu có, của mảng `R` vô mảng A.

```py linenums="2"
def merge_two_arrays(A, left, mid, right):
    # Khởi tạo hai mảng con L và R từ mảng A
    L = A[left : mid + 1]
    R = A[mid + 1 : right + 1]

    # Khởi tạo các biến dùng chỉ số cho từng mảng 
    L_i = 0
    R_i = 0
    A_i = left

    # Trộn hai mảng con vô mảng A
    while L_i < len(L) and R_i < len(R):
        if L[L_i] <= R[R_i]:
            A[A_i] = L[L_i]
            L_i = L_i + 1
        else:
            A[A_i] = R[R_i]
            R_i = R_i + 1

        A_i = A_i + 1

    # Nạp các phần tử còn lại của mảng L vô mảng A
    while L_i < len(L):
        A[A_i] = L[L_i]
        L_i = L_i + 1
        A_i = A_i + 1

    # Nạp các phần tử còn lại của mảng R vô mảng A
    while R_i < len(R):
        A[A_i] = R[R_i]
        R_i = R_i + 1
        A_i = A_i + 1
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định, rồi gọi hàm `merge_sort()` để sắp xếp mảng `Array`.

```py linenums="54"
if __name__ == '__main__':
    # Khởi tạo mảng array
    array = [1, 7, 4, 0, 9, 4, 8]
    print(f'Mảng ban đầu chưa sắp xếp: {array}')

    # Gọi hàm merge_sort()
    merge_sort(array, 0, len(array) - 1)

    # In mảng mới
    print(f'Mảng mới sau khi sắp xếp: {array}')
```

4\. Chạy chương trình trên, kết quả như sau:

```pycon
Mảng ban đầu chưa sắp xếp: [1, 7, 4, 0, 9, 4, 8]
Mảng mới sau khi sắp xếp: [0, 1, 4, 4, 7, 8, 9]
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/13mCBo7ekHHJgvZNA65T_6dao0NvY2Q6G?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| sắp xếp trộn | merge sort |
