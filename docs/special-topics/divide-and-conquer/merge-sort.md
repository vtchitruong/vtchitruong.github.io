# Sắp xếp trộn

## Yêu cầu

Sắp xếp một mảng số nguyên theo thứ tự tăng dần bằng thuật toán sắp xếp trộn.

## Input

Mảng A gồm n số nguyên.

## Output

Mảng A có thứ tự tăng dần.

## Bộ test

### Input mẫu

```pycon
1 7 4 0 9 4 8
```

### Ouput mẫu

```pycon
0 1 4 4 7 8 9
```

## Thuật toán sắp xếp trộn

Ý tưởng chính của thuật toán là chia mảng A thành hai mảng con trái và phải. Sau đó, sắp xếp hai mảng con này. Cuối cùng, trộn hai mảng con lại thành mảng có thứ tự tăng dần.

Tiến trình chia thành hai mảng con được lặp lại nhiều lần cho đến khi mỗi mảng con chỉ còn một phần tử, đồng nghĩa không thể chia đôi được nữa.

Mảng có một phần tử được xem là mảng đã sắp xếp. Lúc này, ta có thể thực hiện trộn hai mảng lại với nhau.

Với thao tác trộn, ta duyệt đồng thời hai mảng con trái và phải. Lần lượt so sánh phần tử của hai mảng với nhau và đặt chúng vào đúng thứ tự của mảng kết quả.

![Minh hoạ sắp xếp trộn](./images/merge-sort.svg){ loading=lazy width=400 }

Dựa theo ý tưởng trên, sắp xếp trộn được mô tả theo kỹ thuật chia để trị như sau:

**Thao tác chia**

Được thể hiện ở chỗ: chia mảng ban đầu thành hai mảng con: trái và phải.

Cụ thể, chia bằng cách xác định vị trí của phần tử ở giữa: `mid = (left + right) // 2`.

**Thao tác trị**

Được thể hiện ở hai chỗ:

- Trị đối với trường hợp cơ sở:
    - Mảng chỉ còn một phần tử, không thể chia đôi được nữa.
- Trị đối với trường hợp tổng quát:
    - Gọi đệ quy cho mảng con bên trái.
    - Gọi đệ quy cho mảng con bên phải.

Lệnh gọi đệ quy vừa đóng vai trò "chia" vừa đóng vai trò "trị".

**Thao tác kết hợp**

Được thể hiện ở chỗ: trộn hai mảng con đã có thứ tự.

Khi trộn mảng con bên trái đã có thự tự và mảng con bên phải đã có thứ tự, kết quả nhận được cũng sẽ là một mảng có thứ tự.

## Cách giải đề xuất

### Hàm trộn hai mảng con

Hàm `merge_two_arrays()` dùng để trộn hai mảng con đã có thứ tự lại với nhau.

Hàm này gồm bốn tham số:

- `A`: mảng ban đầu
- `left`, `mid`, `right`: là các vị trí dùng để xác định mảng con trái và phải.

Cách thức trộn như sau:

**Bước 0:**

- Tạo hai mảng con `L` và `R` từ mảng `A`.
- Khởi tạo ba biến `left_idx`, `right_idx`, `A_idx` lần lượt là chỉ số của mảng con `L`, `R` và `A`.

**Bước 1:**

So sánh từng phần tử của L và R với nhau, nếu phần tử của L nhỏ hơn thì đặt vào mảng A, ngược lại đặt phần tử của R vào mảng A.

Sau đó di chuyển các chỉ số của các mảng đến vị trí tiếp theo để chuẩn bị cho lần so sánh tiếp theo.

**Bước 2:**

- Nếu mảng `L` vẫn còn phần tử thì đặt các phần tử còn lại vào mảng `A`.
- Nếu mảng `R` vẫn còn phần tử thì đặt các phần tử còn lại vào mảng `A`.

```py linenums="1"
# Hàm dùng để trộn hai mảng con thành một
def merge_two_arrays(A, left, mid, right):
    # Tính số phần tử của hai mảng con trái và phải
    number_of_left = mid - left + 1
    number_of_right = right - mid

    # Khởi tạo hai mảng con L và R từ mảng A 
    L = A[left : left + number_of_left]
    R = A[mid + 1 : mid + 1 + number_of_right]

    # Khởi tạo các biến chỉ số cho mảng L, R và A
    left_idx = 0
    right_idx = 0
    A_idx = left
    
    # Trong khi cả hai mảng L và R còn phần tử
    while left_idx < number_of_left and right_idx < number_of_right:
        # Nếu phần tử của mảng L nhỏ hơn hoặc bằng phần tử của mảng R
        if L[left_idx] <= R[right_idx]:
            # thì đặt phần tử của mảng L vào mảng A
            A[A_idx] = L[left_idx]

            # Di chuyển chỉ số của mảng L sang vị trí tiếp theo
            left_idx = left_idx + 1
        else:
            # Ngược lại, đặt phần tử của mảng R vào mảng A
            A[A_idx] = R[right_idx]

            # Di chuyển chỉ số của mảng R sang vị trí tiếp theo
            right_idx = right_idx + 1

        # Di chuyển chỉ số của mảng A sang vi trí tiếp theo
        A_idx = A_idx + 1

    # Trong khi mảng L còn phần tử
    while left_idx < number_of_left:
        # Đặt phần tử của mảng L vào mảng A
        A[A_idx] = L[left_idx]

        # Di chuyển chỉ số của mảng L sang vị trí tiếp theo
        left_idx = left_idx + 1

        # Di chuyển chỉ số của mảng A sang vi trí tiếp theo
        A_idx = A_idx + 1
    
    # Trong khi mảng R còn phần tử
    while right_idx < number_of_right:
        # Đặt phần tử của mảng R vào mảng A
        A[A_idx] = R[right_idx]

        # Di chuyển chỉ số của mảng R sang vị trí tiếp theo
        right_idx = right_idx + 1

        # Di chuyển chỉ số của mảng A sang vi trí tiếp theo
        A_idx = A_idx + 1
```

### Hàm sắp xếp trộn

Hàm `merge_sort()` dùng để sắp xếp mảng `A` theo thứ tự tăng dần.

```py linenums="58"
# Hàm dùng để sắp xếp theo thuật toán trộn
def merge_sort(A, left, right):
    # Thao tác trị
    # Nếu chỉ còn một phần tử thì kết thúc hàm
    if left == right:
        return
    
    # Thao tác chia
    mid = (left + right) // 2

    # Thao tác chia và trị
    merge_sort(A, left, mid)
    merge_sort(A, mid + 1, right)

    # Thao tác kết hợp
    merge_two_arrays(A, left, mid, right)
```

### In kết quả

Trong chương trình chính, ta gọi hàm `merge_sort()` ra thực hiện.

```py linenums="77"
if __name__ == '__main__':
    # Mảng cần sắp xếp
    array = [1, 7, 4, 0, 9, 4, 8]
    print(f'Mảng gốc chưa có thứ tự: {array}')
    
    # Gọi hàm merge_sort để sắp xếp mảng
    merge_sort(array, 0, len(array) - 1)

    # In mảng sau khi sắp xếp
    print(f'Mảng có thứ tự tăng dần: {array}')
```

Output:

```pycon
Mảng gốc chưa có thứ tự: [1, 7, 4, 0, 9, 4, 8]
Mảng có thứ tự tăng dần: [0, 1, 4, 4, 7, 8, 9]
```

## Mã nguồn

Code đầy đủ được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/special-topics/divide-and-conquer/merge-sort.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/13mCBo7ekHHJgvZNA65T_6dao0NvY2Q6G?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| sắp xếp trộn | merge sort |
