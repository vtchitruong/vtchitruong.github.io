---
icon: material/table-search
---

# Tìm kiếm nhị phân

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán tìm kiếm nhị phân.

## Khái quát

Xem lại khái quát về bài toán và thuật toán tìm kiếm [tại đây](search-algorithm-linear-search.md/#khai-quat){target="_blank"}.

---

## Thuật toán tìm kiếm nhị phân

### Ý tưởng

Hãy tưởng tượng tình huống tìm một thuật ngữ bắt đầu bằng chữ cái T trong từ điển.

Giả sử quyển từ điển đang mở ở một trang nào đó.

Điều ta cần làm không phải là lật lại từ trang 1 của quyển từ điển, mà ta xét xem chữ T nằm ở phần trước hay phần sau của trang đang mở, rồi tìm tiếp trong phần có chứa chữ T đó.

Đây là động tác giới hạn phạm vi tìm kiếm, chỉ tập trung vào xét phạm vi mà chữ cái T xuất hiện.

Áp dụng ý tưởng trên cho mảng, thuật toán tìm kiếm nhị phân được thực hiện như sau:

- Xác định **phần tử giữa** nhằm chia mảng ban đầu thanh hai mảng con: **nửa trái** và **nửa phải**.
- **So sánh** phần tử giữa với giá trị cần tìm `k` để loại bỏ mảng con không chứa `k`.
- Lặp lại nhiều lần hai thao tác trên đối với mảng con còn lại cho đến khi tìm thấy `k` hoặc không còn chia đôi mảng được nữa.

Cụ thể:

1. Đặt mốc trái `left` là vị trí đầu mảng và mốc phải `right` là vị trí cuối mảng.

2. Trong khi mốc `left` vẫn chưa vượt quá mốc `right`, lặp các thao tác sau:

    - Xác định mốc giữa: `mid = (left + right) / 2`, lấy phần nguyên.
    - Nếu `A[mid] == k` thì đây chính là vị trí tìm thấy. Kết thúc thuật toán.
    - Nếu `A[mid] < k` thì *dời* mốc `left` sang bên phải của `mid`: `left = mid + 1` để xét mảng con bên phải.
    - Nếu `A[mid] > k` thì *dời* mốc `right` sang bên trái của `mid`: `right = mid - 1` để xét mảng con bên trái.

3. Khi vòng lặp kết thúc, tức mốc `left` đã vượt quá mốc `right`, nghĩa là không có `A[mid]` nào bằng `k`, thì trả về `-1`.
    
    (`-1` là giá trị quy ước cho trường hợp không tìm thấy, vì chỉ số của mảng bắt đầu từ `0`, không có chỉ số âm).

### Ví dụ minh hoạ

![Ví dụ minh hoạ tiến trình tìm kiếm nhị phân](images/search-algorithm-binary-search-manual-run.svg){loading=lazy}

### Lưu đồ

![Lưu đồ thuật toán tìm kiếm nhị phân](images/search-algorithm-binary-search-flowchart.svg){loading=lazy}

### Trực quan hoá

<div>
    <iframe width="100%" height="760px" frameBorder=0 src="/grade-11/topic-F3/visualize/binary-search.html"></iframe>
</div>

### Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `binary_search()` để thực hiện thuật toán tìm kiếm nhị phân.

Hàm gồm hai tham số đầu vào: mảng `A` và giá trị cần tìm `k`.

Giá trị trả về là chỉ số `i` nào đó hoặc `-1`.

``` py linenums="4"
def binary_search(A, k):
    # Khởi tạo mốc trái và mốc phải
    left = 0
    right = len(A) - 1

    # Trong khi left chưa vượt quá right    
    while left <= right:
        # Xác định mid
        mid = (left + right) // 2

        # So sánh A[mid] với k
        if A[mid] == k:
            return mid
        elif A[mid] < k:
            left = mid + 1
        else:
            right = mid - 1

    # Không tìm thấy, trả về -1
    return -1
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định và người dùng chỉ phải nhập giá trị cần tìm.

```py linenums="27"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = [0, 1, 2, 4, 4, 4, 5, 5, 7, 8, 8, 9]

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))
```

Gọi hàm `binary_search()` ra thực hiện, gán chỉ số (vị trí) tìm thấy cho biến `found`.

```py linenums="27" hl_lines="9"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = [0, 1, 2, 4, 4, 4, 5, 5, 7, 8, 8, 9]

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm binary_search()
    found = binary_search(Array, key)
```

Dựa vào biến `found`, in ra thông báo tìm thấy hoặc không tìm thấy.

```py linenums="27" hl_lines="11-16"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = [0, 1, 2, 4, 4, 4, 5, 5, 7, 8, 8, 9]

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm binary_search()
    found = binary_search(Array, key)

    if found == -1:
        # Nếu chỉ số trả về là -1 thì in ra không tìm thấy
        print(f'Không tìm thấy {key}')
    else:
        # Ngược lại, khác -1, thì in ra tìm thấy tại found
        print(f'Tìm thấy {key} tại vị trí {found}')
```

4\. Chạy chương trình trên, nhập vào `4`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 4
Tìm thấy 4 tại vị trí 5
```

Chạy lại chương trình trên, nhập giá trị cần tìm khác là `6`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 6
Không tìm thấy 6
```

!!! note "Nhận xét"
    
    Trước khi thực hiện tìm kiếm nhị phân, mảng phải được sắp xếp tăng dần hoặc giảm dần.  

---

## So sánh hai thuật toán tìm kiếm

Hai thuật toán có một vài khác biệt chủ yếu sau:

| Đặc tính | Tìm kiếm tuần tự | Tìm kiếm nhị phân |
| --- | --- | --- |
| Ý tưởng | Xét từng phần tử từ đầu mảng cho đến khi tìm thấy. | Xét xem phần tử cần tìm nằm ở mảng con nửa trái hay nửa phải. |
| Vị trí tìm thấy | Là vị trí xuất hiện đầu tiên tính từ đầu mảng. | Có thể là bất kỳ vị trí nào. |  
| Áp dụng | Phù hợp cho tập hợp dữ liệu nhỏ và không có thứ tự. | Phù hợp cho tập dữ liệu lớn và đã sắp xếp thứ tự. |
| Độ phức tạp thời gian | $O(n)$ | $O(log n)$ |

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1xhy3RfkEaeQQuWfXm1b5Ev_txYnw9jjr?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/search-algorithm-binary-search.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| tìm kiếm nhị phân | binary search |
| mảng con | subarray |
