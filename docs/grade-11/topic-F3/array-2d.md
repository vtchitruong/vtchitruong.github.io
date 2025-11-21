---
icon: material/table-large
---

# Mảng hai chiều

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về mảng hai chiều.

## Đặt vấn đề

Làm thế nào xử lý khi dữ liệu không còn là dãy số, mà là một bảng số liệu? Chẳng hạn như:

- Bảng điểm của lớp với nhiều cột điểm.
- Ma trận toán học.
- Hình ảnh, vốn là tập hợp các pixel.

Khi đó, mảng một chiều không còn đủ mạnh nữa. Ta cần một cấu trúc mới có thể biểu diễn dữ liệu theo dạng hàng và cột, đó là **mảng hai chiều**.

## Khái niệm

**Mảng hai chiều** là cấu trúc dữ liệu dùng để lưu trữ các phần tử theo dạng bảng, gồm hàng và cột.

Trong đó, mỗi phần tử được định vị bằng hai chỉ số:

- Chỉ số hàng
- Chỉ số cột

Số phần tử của mỗi hàng ứng với số cột của mảng. Đồng thời, các hàng đều có số phần tử bằng nhau.

Hình sau minh hoạ mảng hai chiều A.

![Minh hoạ mảng hai chiều A](/grade-11/topic-F3/images/array-2d.svg){loading=lazy}

Nói cách khác, mảng hai chiều có thể được xem là **mảng của các mảng**. Nghĩa là, mỗi phần tử của mảng hai chiều là một mảng-một-chiều.

Hình ảnh mảng hai chiều trong thực tế:

- Bàn cờ vua
- Bảng số Sudoku
- Bảng tính Excel

Mảng hai chiều có thể áp dụng khi xử lý:

- Bảng
- Lưới
- Ma trận

## Mảng hai chiều trong Python

Tương tự bài trước, ta sẽ sử dụng thư viện mã nguồn mở [numpy](https://numpy.org/){target="_blank"} để biểu diễn mảng hai chiều.

### Cài đặt thư viện numpy

Xem lại cách cài đặt thư viện `numpy` [tại đây](/grade-11/topic-F3/array-1d#cai-at-thu-vien-numpy){target="_blank"}.

### Nạp thư viện

Sau khi cài đặt, ta nạp thư viện `numpy` bằng lệnh `import`. Đồng thời, quy ước tên gọi tắt của `numpy` là `np`.

```py linenums="1"
import numpy as np
```

### Khởi tạo  

Để khởi tạo mảng hai chiều, ta sử dụng hàm `array()` của `numpy`.

Các phần tử được liệt kê trong **các cặp ngoặc vuông lồng nhau**: `[[ ], [ ], ..., [ ]]`

Ví dụ:  
Dòng lệnh 5 khởi tạo mảng hai chiều `A` bằng cách liệt kê phần tử.

```py linenums="1" hl_lines="5"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}') # (1)!
```
{ .annotate }

1.  `\n` là ký tự xuống dòng.

Chạy đoạn mã trên, kết quả như sau:

```pycon
Mảng A:
[[1 7 4 0]
 [9 4 8 8]
 [2 4 5 5]]
```

Để khởi tạo mảng hai chiều gồm các phần tử có cùng giá trị, ta dùng hàm `full()` của `numpy`.

Ví dụ:  
Dòng lệnh 13 khởi tạo mảng `zeros` gồm 3 hàng, 4 cột, các phần tử đều có giá trị `0`.

```py linenums="1" hl_lines="10-14"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}')

    # Khởi tạo mảng zeros gồm 3 hàng, 4 cột, tất cả phần tử đều mang giá trị 0
    row = 3
    col = 4
    zeros = np.full((row, col), 0)
    print(f'Mảng zeros:\n{zeros}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Mảng zeros:
[[0 0 0 0]
 [0 0 0 0]
 [0 0 0 0]]
```

### Truy xuất phần tử  

Mỗi phần tử được truy xuất thông qua **chỉ số hàng** và **chỉ số cột**, đặt trong hai cặp ngoặc vuông `[][]`, với *hàng trước và cột sau*.

Ví dụ:  
Dòng lệnh 11 và 14 in ra:

- Phần tử đầu tiên
- Phần tử nằm ở hàng 2, cột 3 của mảng `A`, cũng chính là phần tử cuối cùng.

```py linenums="1" hl_lines="11 14"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}')

    # In ra phần tử đầu tiên
    print(f'Phần tử đầu tiên: {A[0][0]}')

    # In ra phần tử nằm ở hàng 2, cột 3
    print(f'Phần tử nằm ở hàng 2, cột 3: {A[2][3]}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Mảng A:
[[1 7 4 0]
 [9 4 8 8]
 [2 4 5 5]]
Phần tử đầu tiên: 1
Phần tử nằm ở hàng 2, cột 3: 5
```

### Duyệt mảng

Nếu xem mảng `A` là mảng một chiều thì mỗi phần tử của `A` là một hàng. Để lấy số hàng của `A`, ta viết `len(A)`.

Mỗi hàng của mảng hai chiều `A` cũng là một mảng-một-chiều. Do đó, để lấy số cột của mảng `A`, tức là số phần tử trong mỗi hàng, ta dùng hàm `len()` cho một hàng bất kỳ, chẳng hạn: `len(A[0])` là độ dài của hàng đầu tiên.

Ví dụ:  
Dòng lệnh 8 và 12 lấy số hàng và số cột của mảng `A` rồi gán cho biến `row` và biến `col`.

```py linenums="1" hl_lines="8 12"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In ra số hàng của mảng A
    row = len(A)
    print(f'Số hàng: {row}')

    # In ra số cột của mảng A
    col = len(A[0])
    print(f'Số cột: {col}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Số hàng: 3
Số cột: 4
```

Khi duyệt mảng hai chiều, ta thường dùng **hai vòng lặp lồng nhau**:

- **Vòng lặp ngoài** dùng để duyệt từng hàng.
- **Vòng lặp trong** dùng để duyệt từng cột, tức từng phần tử của hàng đang duyệt.

Ví dụ:  
Dòng lệnh từ 16 đến 23 dùng hai vòng lặp for lồng nhau để in ra mảng A theo dạng bảng.

```py linenums="1" hl_lines="15-23"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In ra số hàng của mảng A
    row = len(A)
    print(f'Số hàng: {row}')

    # In ra số cột của mảng A
    col = len(A[0])
    print(f'Số cột: {col}')

    # Duyệt hàng từ 0 đến row - 1
    for r in range(row):
        # Duyệt cột từ 0 đến col - 1
        for c in range(col):
            # In ra phần tử tại hàng r, cột c
            print(A[r][c], end=' ') # (1)!

        # Xuống hàng tiếp theo
        print()
```
{ .annotate }

1.  In thêm khoảng trắng ngay sau mỗi phần tử.

Chạy đoạn mã trên, kết quả như sau:

```pycon
Số hàng: 3
Số cột: 4
1 7 4 0 
9 4 8 8 
2 4 5 5 
```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1M7LQMTxdGAOcC6tyqgz-1wE6mtlK5bXF?usp=sharing){target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 500px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/array-2d.html">Sơ đồ tóm tắt</iframe>
</div>


## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cột | column |
| hàng | row |
| mảng của mảng | array of arrays |
| mảng hai chiều | two-dimensional array |
