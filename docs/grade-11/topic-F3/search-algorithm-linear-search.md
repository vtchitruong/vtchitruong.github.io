---
icon: material/table-search
---

# Tìm kiếm tuần tự

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán tìm kiếm tuần tự.

## Ý tưởng

Hãy tưởng tượng hình ảnh tất cả lá bài đều úp. Ta cần tìm xem một lá 3 nút (bất kỳ trong số bốn lá 3 nút) nằm ở vị trí nào.

Cách làm là lần lượt lật từng lá bài lên cho đến khi thấy được lá 3 nút.

Áp dụng cách trên cho mảng, ta lần lượt (tuần tự) so sánh từng phần tử với giá trị `k`, bắt đầu từ phần tử đầu tiên cho đến phần tử cuối cùng, khi nào "*bắt gặp*" `k` thì dừng. Cụ thể như sau:

!!! note "Thuật toán tìm kiếm tuần tự"

    1. Duyệt từng phần tử `A[i]` từ đầu đến cuối mảng, lặp thao tác sau:

        - Nếu `A[i]` đang duyệt mà bằng `k` thì trả về `i`, đây chính là chỉ số (vị trí) tìm thấy.

    2. Khi đã duyệt hết mảng mà vẫn chưa có `i` nào trả về, nghĩa là không có `A[i]` nào bằng `k`, thì trả về `-1`.

        (`-1` là giá trị quy ước cho trường hợp không tìm thấy, vì chỉ số của mảng bắt đầu từ `0`, không có chỉ số âm).


!!! info "Về tên gọi"

    Tìm kiếm tuần tự còn được gọi cách khác là tìm kiếm tuyến tính.

    Cả hai thuật ngữ này đều có thể được sử dụng thay thế cho nhau, trong đó tìm kiếm tuyến tính (linear search) được sử dụng rộng rãi hơn trong các tài liệu nước ngoài. Song bằng một cách nào đó, sách giáo khoa ở nước ta dịch là tìm kiếm tuần tự (sequential search).

---

## Lưu đồ

![Lưu đồ thuật toán tìm kiếm tuần tự](images/search-algorithm-linear-search-flowchart.svg){loading=lazy}

---

## Trực quan hóa

<div>
    <iframe width="100%" height="680px" frameBorder=0 src="/grade-11/topic-F3/visualize/linear-search.html"></iframe>
</div>

---

## Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `linear_search()` dùng để thực hiện thuật toán tìm kiếm tuần tự.

Hàm gồm hai tham số đầu vào: mảng `A` và giá trị cần tìm `k`.

Giá trị trả về là chỉ số `i` nào đó hoặc `-1`.

```py linenums="4"
def linear_search(A, k):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử từ đầu đến cuối mảng
    for i in range(n):
        if A[i] == k:
            # Nếu A[i] nào đó bằng k thì trả về chỉ số i
            return i

    # Không tìm thấy, trả về -1
    return -1
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định và người dùng chỉ phải nhập giá trị cần tìm.

```py linenums="19"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))
```

Gọi hàm `linear_search()` ra thực hiện, gán chỉ số (vị trí) tìm thấy cho biến `found`. 

```py linenums="19" hl_lines="9"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)
```

Dựa vào biến `found`, in ra thông báo tìm thấy hoặc không tìm thấy.

```py linenums="19" hl_lines="11-16"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)

    if found == -1:
        # Nếu chỉ số trả về là -1 thì in ra không tìm thấy
        print(f'Không tìm thấy {key}')
    else:
        # Ngược lại, khác -1, thì in ra tìm thấy tại found
        print(f'Tìm thấy {key} tại vị trí {found}')
```

4\. Chạy chương trình trên, nhập vào `9`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 9
Tìm thấy 9 tại vị trí 4
```

Chạy lại chương trình trên, nhập giá trị cần tìm khác là `6`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 6
Không tìm thấy 6
```

!!! tip "Nhận xét"
    
    Nếu `k` xuất hiện nhiều lần thì thuật toán tìm kiếm tuần tự chỉ trả về **vị trí xuất hiện đầu tiên** của `k` theo trình tự duyệt mảng.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1t09XEPd79MLfHUT2LGX3KVdKByfLAeCq?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| so sánh | compare |
| thuật toán tìm kiếm | search algorithm |
| tìm kiếm tuần tự | sequential search, linear search |
| tìm thấy, không tìm thấy | found, not found |