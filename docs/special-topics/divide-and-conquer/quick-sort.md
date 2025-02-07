# Sắp xếp nhanh

## Yêu cầu

Sắp xếp một mảng số nguyên theo thứ tự tăng dần bằng thuật toán sắp xếp nhanh.

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

## Thuật toán sắp xếp nhanh

Tương tự sắp xếp trộn, thuật toán sắp xếp nhanh cũng chia mảng thành hai mảng con trái và phải.

Nếu như sắp xếp trộn chia mảng dựa vào vị trí của phần tử giữa thì sắp xếp nhanh chia mảng dựa vào tiến trình phân hoạch (partition).

Phân hoạch là tiến trình chọn một phần tử trục (pivot) để phân chia mảng thành hai mảng con:

- Một mảng con chứa các phần tử nhỏ hơn hoặc bằng pivot.
- Một mảng con chứa các phần tử lớn hơn pivot.

Tiến trình phân hoạch được lặp lại cho đến khi mỗi mảng con chỉ còn một phần tử, đồng nghĩa không thể chia đôi được nữa.

![Minh hoạ sắp xếp nhanh](./images/quick-sort.svg){ loading=lazy }

Dựa theo ý tưởng trên, sắp xếp nhanh được mô tả theo kỹ thuật chia để trị như sau:

**Thao tác chia**

Được thể hiện ở chỗ: chia mảng ban đầu thành hai mảng con: trái và phải.

Cụ thể, chia bằng cách xác định vị trí của phần tử trục (pivot) và đặt các phần tử còn lại vào mảng con trái hoặc phải.

Phần tử trục có thể được chọn bằng nhiều cách:

- Chọn phần tử ở giữa mảng.
- Chọn phần tử ở cuối mảng.
- Chọn phần tử ở đầu mảng.

**Thao tác trị**

Được thể hiện ở hai chỗ:

- Trị đối với trường hợp cơ sở:
    - Mảng chỉ còn một phần tử, không thể chia đôi được nữa.
- Trị đối với trường hợp tổng quát:
    - Gọi đệ quy cho mảng con bên trái.
    - Gọi đệ quy cho mảng con bên phải.

Lệnh gọi đệ quy vừa đóng vai trò "chia" vừa đóng vai trò "trị".

**Thao tác kết hợp**

Thao tác kết hợp không cần thiết vì các phần tử trong mỗi mảng con đã được sắp xếp theo thứ tự tăng dần.

## Cách giải đề xuất

### Hàm phân hoạch

Hàm `partition()` dùng để phân hoạch mảng `A` thành hai mảng con trái và phải.

Hàm này gồm ba tham số:

- `A`: mảng ban đầu
- `left`, ``right`: là phạm vi của mảng cần phân hoạch.

Cách thức phân hoạch như sau:

**Bước 0:**

- Chọn phần tử trục (pivot) là phần tử cuối cùng của mảng.
- Khởi tạo biến `i` là chỉ số trước phần tử đầu tiên của mảng (`left`).

**Bước 1:**

Duyệt qua các phần tử `A[j]` trong phạm vi `[left..right - 1]`, ứng với mỗi `A[j]`:
- Nếu phần tử `A[j]` nhỏ hơn hoặc bằng `pivot` thì:
    - Tăng chỉ số `i` lên một đơn vị để mở rộng mảng con trái.
    - Hoán vị phần tử `A[i]` và `A[j]`.

Sau vòng lặp này, các `A[j]` nhỏ hơn hoặc bằng `pivot` sẽ nằm trong đoạn `[left..i]` và các `A[j]` lớn hơn `pivot` sẽ nằm trong đoạn `[i+1..right-1]`.

**Bước 2:**

- Hoán vị phần tử `A[i + 1]` và `A[right]`.
- Trả về chỉ số `i + 1`, là vị trí mới của phần tử trục.

```py linenums="1"
# Hàm dùng để phân hoạch mảng A từ vị trí left đến vị trí right
def partition(A, left, right):
    # Chọn phần tử trục là phần tử cuối mảng con
    pivot = A[right]
    
    # Khởi tạo i để theo dõi phần tử cuối cùng nhỏ hơn hoặc bằng pivot
    i = left - 1
    
    # Duyệt qua các phần tử trong phạm vi [left..right - 1]
    for j in range(left, right):
        # Nếu phần tử A[j] nhỏ hơn hoặc bằng pivot
        if A[j] <= pivot:
            # Tăng i trước khi hoán vị để đảm bảo vùng nhỏ hơn pivot được mở rộng
            i = i + 1

            # Hoán vị A[i] và A[j]
            A[i], A[j] = A[j], A[i]

    # Hoán vị pivot, tức A[right], với phần tử ở vị trí i + 1
    A[i + 1], A[right] = A[right], A[i + 1]
    
    # Trả về chỉ số mới của pivot
    return i + 1
```

### Hàm sắp xếp nhanh

Hàm `quick_sort()` dùng để sắp xếp mảng `A` trong phạm vi `[left..right]`.

```py linenums="26"
# Hàm dùng để sắp xếp theo thuật toán sắp xếp nhanh
def quick_sort(A, left, right):
    # Thác tác trị
    # Nếu chỉ còn một phần tử hoặc không còn phần tử nào thì kết thúc hàm
    if left >= right:
        return
    
    # Thao tác chia
    # Phân hoạch mảng A từ vị trí left đến vị trí right
    pivot_idx = partition(A, left, right)
    
    # Thao tác chia và trị
    quick_sort(A, left, pivot_idx - 1)
    quick_sort(A, pivot_idx + 1, right)
```

### In kết quả

Trong chương trình chính, ta gọi hàm `quick_sort()` ra thực hiện.

```py linenums="42"
# Chương trình chính
if __name__ == '__main__':
    # Mảng cần sắp xếp
    array = [1, 7, 4, 0, 9, 4, 8]
    print(f'Mảng gốc chưa có thứ tự: {array}')

    # Gọi hàm quick_sort để sắp xếp mảng
    quick_sort(array, 0, len(array) - 1)

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

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/special-topics/divide-and-conquer/quick-sort.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1wuMvmYzgzIOAIs9LO_2bqr7mSOQTRmz_?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| phân hoạch, phân vùng | partition |
| sắp xếp nhanh | quick sort |

