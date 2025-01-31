---
icon: material/table-row
---

# Mảng một chiều

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm về mảng nói chung và mảng một chiều nói riêng.

## Đặt vấn đề

Khi xử lý bảng điểm môn Tin học của một lớp gồm 30 học sinh, việc khai báo 30 biến có vẻ không ổn. Thử xem đoạn mã khai báo sau đây bất tiện như thế nào.

```py
hs1 = 10
hs2 = 9
hs3 = 9.5 
.
.
.
hs29 = 9.1
hs30 = 9.4
```

Nếu số học sinh nhiều hơn, chẳng hạn 500 học sinh cả khối, thì việc khai báo từng biến là hoàn toàn bất khả thi.

May thay, các ngôn ngữ lập trình đều có hỗ trợ những **kiểu dữ liệu** dành cho trường hợp bảng điểm như trên, và Python cũng vậy.

Python cũng vậy. Một *kiểu dữ liệu* của Python có thể giúp xử lý tập hợp nhiều dữ liệu là kiểu `list`.

## Khái quát về mảng

**Mảng** là cấu trúc dữ liệu dùng để lưu trữ và xử lý tập hợp các phần tử, trong đó:

- Các phần tử được lưu trữ liên tiếp nhau trên bộ nhớ.
- Trong nhiều ngôn ngữ, **kích thước** hoặc **độ dài** của mảng là **số lượng phần tử** mà mảng có thể chứa. Số lượng phần tử là hữu hạn.
- Mỗi phần tử gồm có hai yếu tố: **giá trị** và **chỉ số**.
    - Mỗi phần tử được truy xuất thông qua chỉ số của nó.
    - Giá trị của các phần tử đều cùng kiểu dữ liệu.

Mảng thường được dùng để giải quyết những bài toán có nhiều giá trị liên quan và cùng kiểu dữ liệu.

Ví dụ:

- Điểm số môn Tin học của các học sinh trong lớp.
- Dữ liệu thời gian ghi nhận được ở các lần đo trong thí nghiệm đo thời gian rơi của một vật.

!!! info "Nói rõ thêm về mảng"
    
    1.  Về mặt khái niệm, các phần tử của một mảng được lưu trữ liên tiếp nhau trong bộ nhớ. Tuy nhiên, trên thực tế, trong khi **mảng tĩnh** vẫn được lưu trữ liên tiếp nhau, thì **mảng động** hoặc các cấu trúc dữ liệu tương đương thì không nhất thiết lưu trữ liên tiếp nhau, mà các phần tử có thể nằm rải rác trên bộ nhớ.

    2. Trong một số ngôn ngữ "*truyền thống*" như C hay Java, các phần tử của mảng phải có cùng kiểu dữ liệu. Trái lại, một số ngôn ngữ hiện đại như JavaScript, Ruby, Python cho phép mảng (danh sách) chứa các phần tử có kiểu dữ liệu khác nhau. 

Phân loại theo **chiều**, các loại mảng gồm có:

- Mảng một chiều
- Mảng hai chiều
- Mảng đa chiều.

Bài học này chỉ đề cập **mảng một chiều**.

!!! question "Hỏi chút chơi - phần 1"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../array-1d/quiz1.html">Hỏi chút chơi</iframe>
    </div>

## Mảng trong Python

Trong Python, kiểu dữ liệu `list` có thể được sử dụng để biểu diễn mảng. (Do đã được đề cập trong chương trình lớp 10, nên các bài học về mảng ở lớp 11 sẽ không dùng kiểu `list` nữa.)

Bên cạnh đó, Python cũng có sẵn thư viện `array` để làm việc với mảng.

Đặc biệt, thư viện mã nguồn mở [numpy](https://numpy.org/){target="_blank"} giúp xử lý mảng nhanh hơn.

Một số bài học ở lớp 11 này sẽ sử dụng thư viện `numpy` khi minh hoạ các vấn đề liên quan đến mảng.

!!! question "Hỏi chút chơi - phần 2"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../array-1d/quiz2.html">Hỏi chút chơi</iframe>
    </div>

## Mảng một chiều

Hình ảnh mảng một chiều trong thực tế:

- Dãy các phòng học
- Dãy ghế trong rạp chiếu phim

Mảng một chiều có thể áp dụng khi xử lý:

- Một dãy số
- Một hàng hoặc một cột trong bảng

Chỉ số của các phần tử được đánh từ **0** hoặc từ **1**, tuỳ ngôn ngữ lập trình. Chỉ số còn có thể xem là **vị trí** của phần tử trong mảng.

![Minh họa mảng một chiều A](./images/array-1d.svg){loading=lazy}

*Minh họa mảng một chiều A*

### Cài đặt thư viện numpy

Để sử dụng thư viện `numpy`, ta cài đặt bằng `pip`.

Trong cửa sổ **Terminal** của Visual Studio Code (1) (hoặc **PowerShell** hoặc **Command Prompt** của Windows), gõ lệnh sau:
{ .annotate }

1.  Mở cửa sổ Terminal bằng phím tắt ++ctrl+grave++ hoặc chọn menu **View** > **Terminal**.

```ps1
pip install numpy
```

### Import thư viện numpy

Để sử dụng thư viện `numpy`, ta cần import nó vào chương trình Python.

```py linenums="1"
import numpy as np
```

### Khởi tạo  

Để khởi tạo mảng một chiều bằng thư viện `numpy`, ta sử dụng hàm `array()` của thư viện.

Các phần tử được liệt kê trong cặp ngoặc vuông `[ ]` và phân cách nhau bằng dấu phẩy `,`.

Ví dụ:

**Yêu cầu:** Khởi tạo mảng một chiều `A` bằng cách liệt kê phần tử.

```py linenums="3"
if __name__ == '__main__':
    # Khởi tạo mảng một chiều A gồm 12 phần tử là số nguyên
    A = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])
    print(f'Mảng A: {A}') # (1)!
```
{ .annotate }

1.  `f'...'` là cú pháp f-string (formatted string literal) của Python giúp hiển thị giá trị của biến `A`.

    Khi sử dụng f-string, các biến hoặc biểu thức bên trong dấu `{}` sẽ được thay thế bằng giá trị tương ứng.

**Output:**

```pycon
Mảng A: [1 7 4 0 9 4 8 8 2 4 5 5]
```

Để khởi tạo mảng một chiều gồm các phần tử cùng giá trị, ta dùng hàm `full()` của thư viện `numpy`.

Ví dụ:

**Yêu cầu:** Khởi tạo mảng một chiều `zeros` gồm toàn các phần tử có giá trị `0`.

```py linenums="8"
    # Khởi tạo mảng zeros gồm 8 phần tử đều mang giá trị 0
    zeros = np.full(8, 0)
    print(f'Mảng zeros: {zeros}')
```

**Output:**

```pycon
Mảng zeros: [0 0 0 0 0 0 0 0]
```

!!! question "Hỏi chút chơi - phần 3"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../array-1d/quiz3.html">Hỏi chút chơi</iframe>
    </div>

### Truy xuất phần tử  

Mỗi phần tử của mảng một chiều được truy xuất thông qua chỉ số. Chỉ số được đặt trong cặp ngoặc vuông `[ ]`.

Phần tử đầu tiên có chỉ số là `0` và phần tử cuối cùng có chỉ số là `len(mảng) - 1`.

Ví dụ:

**Yêu cầu:** In ra màn hình giá trị của phần tử đầu tiên và cuối cùng của mảng A.


```py linenums="12"
    # In ra phần tử đầu tiên của mảng A
    print(f'Phần tử đầu tiên của mảng A: {A[0]}')

    # In ra phần tử cuối cùng của mảng A
    print(f'Phần tử cuối cùng của mảng A: {A[len(A) - 1]}')
```

**Output:**

```pycon
Phần tử đầu tiên của mảng A: 1
Phần tử cuối cùng của mảng A: 5
```

Đoạn mã sau đây bị lỗi vì mảng `A` không có phần tử mang chỉ số `12`.

```py linenums="18"
    # Chương trình báo lỗi vì không có chỉ số 12 trong mảng A
    print(f'Phần tử thứ 12 của mảng A: {A[12]}')
```

Nội dung báo lỗi trong Visual Studio Code:

```pycon
Exception has occurred: IndexError
index 12 is out of bounds for axis 0 with size 12
  File "D:\ProjectLocal\gdpt-2018\g11\topic-f2\array-1-dimension-numpy.py", line 19, in <module>
    print(f'Phần tử thứ 12 của mảng A: {A[12]}')
                                        ~^^^^
IndexError: index 12 is out of bounds for axis 0 with size 12
```

!!! question "Hỏi chút chơi - phần 4"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../array-1d/quiz4.html">Hỏi chút chơi</iframe>
    </div>

### Duyệt mảng  

Trong nhiều bài toán, các phần tử của mảng thường được xử lý *một loạt* tương tự nhau, theo thứ tự từ phần tử đầu đến phần tử cuối. Do đó, ta thường sử dụng vòng lặp để duyệt mảng.

Ví dụ:

**Yêu cầu:** Duyệt mảng để in ra các phần tử từ đầu đến cuối. Mỗi phần tử nằm trên một dòng.

```py linenums="21"
    # In các phần tử của mảng A trên từng dòng
    for i in range(len(A)):
        print(f'A[{i}] = {A[i]}')
```

**Output:**

```pycon
A[0] = 1
A[1] = 7
A[2] = 4
A[3] = 0
A[4] = 9
A[5] = 4
A[6] = 8
A[7] = 8
A[8] = 2
A[10] = 5
A[11] = 5
```

Ví dụ:

**Yêu cầu:** Duyệt mảng để in ra các phần tử từ cuối ngược về đầu. Các phần tử nằm trên cùng một dòng.

```py linenums="25"
    # In mảng A theo thứ tự từ cuối ngược về đầu
    for i in range(len(A) - 1, -1, -1):
        print(A[i], end=' ') # (1)!
```
{ .annotate }

1.  Tham số `end` của hàm `print()` có giá trị mặc định là `'\n'`, nghĩa là xuống dòng sau khi in ra từng phần tử.

    `end=' '` giúp in ra khoảng trắng sau mỗi phần tử.

**Output:**

```pycon
5 5 4 2 8 8 4 9 0 4 7 1
```

!!! question "Hỏi chút chơi - phần 5"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../array-1d/quiz5.html">Hỏi chút chơi</iframe>
    </div>

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F2/array-1d.mm.md!}
*Sơ đồ tóm tắt về mảng và mảng một chiều*

## Mã nguồn

Các đoạn mã trong bài được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/g11/topic-f2/array-1-dimension-numpy.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1pq2-LFJ9I8U52pmCXqe9BMo-aeLyAPAN?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chỉ số (của phần tử) | index |
| đánh chỉ số từ 0 | zero-based indexing |
| giá trị (của phần tử) | value |
| mảng một chiều | one-dimensional array |
| phần tử | element, item |