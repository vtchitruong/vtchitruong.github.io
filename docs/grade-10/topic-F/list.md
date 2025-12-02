---
icon: material/format-list-numbered
---

# Cấu trúc dữ liệu list

!!! abstract "Tóm lược nội dung"

    Bài này trình bày đôi nét về cấu trúc dữ liệu `list` của Python.

## Khái quát về list

### Đặt vấn đề

Khi xử lý bảng điểm môn Tin học của một lớp gồm 30 học sinh, việc khai báo 30 biến có vẻ không ổn. Thử xem đoạn mã khai báo sau đây bất tiện như thế nào.

```py
hs1 = 10
hs2 = 9
hs3 = 9.5
.
.
.
hs39 = 9.1
hs40 = 9.4
```

Nếu số học sinh nhiều hơn, chẳng hạn 500 học sinh cả khối, thì việc khai báo từng biến là hoàn toàn bất khả thi.

May thay, các ngôn ngữ lập trình đều có hỗ trợ những cấu trúc dữ liệu giúp xử lý bảng điểm như trên, đối với Python là **list**.

### Khái niệm

`list` là một **cấu trúc dữ liệu** (1) của Python, được dùng để lưu trữ và xử lý tập hợp gồm nhiều **phần tử**.
{ .annotate }

1.  `list` có thể xem là **kiểu dữ liệu** hoặc **cấu trúc dữ liệu** tuỳ góc nhìn.

`list` còn được gọi bằng thuật ngữ **danh sách**.

### Ưu điểm

Các phần tử trong cùng một `list` có thể có **kiểu dữ liệu khác nhau**, chẳng hạn phần tử này kiểu `int`, phần tử kia kiểu `float`, một phần tử khác kiểu `bool`, thậm chí một phần tử khác nữa kiểu `list`.

### Hạn chế

Tốc độ xử lý của `list` không nhanh bằng mảng truyền thống trong những ngôn ngữ lập trình khác như C++, Java.

---

## Thao tác cơ bản với list

### Khởi tạo

Để khởi tạo danh sách, ta liệt kê các phần tử trong cặp ngoặc vuông `[ ]`, phân cách nhau bằng dấu phẩy `,`.

Ví dụ:  
Dòng lệnh 3 khởi tạo danh sách `scores` bằng cách liệt kê phần tử. Mỗi phần tử là điểm số bài kiểm tra môn Tin học của một bạn.

```py linenums="1" hl_lines="3"
if __name__ == '__main__':
    # Khởi tạo danh sách scores
    scores = [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]

    # In danh sách
    print(f'Bảng điểm: {scores}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Bảng điểm: [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]
```

Để khởi tạo danh sách rỗng, ta có thể viết: `scores = []`

### Lấy số phần tử

Để lấy số phần tử (1) của danh sách, ta dùng hàm `len()`.
{ .annotate }

1.  Khi nói *"số phần tử"*, người ta thường hiểu là *"số lượng phần tử"*.

Ví dụ:  
Dòng lệnh 6 lấy số phần tử của danh sách `scores` rồi gán cho biến `n`.  

```py linenums="1" hl_lines="6"
if __name__ == '__main__':
    # Khởi tạo danh sách scores
    scores = [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]

    # Lấy số phần tử và gán cho biến n
    n = len(scores)

    # In ra số phần tử
    print(f'Số lượng phần tử: {n}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Số lượng phần tử: 10
```

### Truy xuất phần tử

Mỗi phần tử trong danh sách gồm có hai yếu tố: **chỉ số** và **giá trị**.

Chỉ số được đánh thứ tự từ `0` đến `n - 1`. Cụ thể:

- Chỉ số của phần tử đầu tiên là `0`.
- Chỉ số của phần tử tiếp theo là `1`.
- Chỉ số của phần tử tiếp theo nữa là `2`.
- Chỉ số của phần tử cuối cùng là `n - 1`, với `n` là số phần tử của danh sách.  

Chỉ số còn được gọi là **vị trí**.

Để truy xuất giá trị của một phần tử, ta viết **chỉ số** của phần tử đó trong cặp ngoặc vuông `[ ]`.

Ví dụ:  
Dòng lệnh 6 và 12 lần lượt in ra phần tử đầu tiên và cuối cùng của dành sách.

```py linenums="1" hl_lines="6 12"
if __name__ == '__main__':
    # Khởi tạo danh sách scores
    scores = [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]

    # In ra phần tử đầu tiên
    print(f'Phần tử đầu tiên: {scores[0]}')

    # Lấy số phần tử
    n = len(scores)

    # In ra phần tử cuối cùng
    print(f'Phần tử cuối cùng: {scores[n - 1]}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Phần tử đầu tiên: 8
Phần tử cuối cùng: 6
```

### Duyệt danh sách

Trong cùng một danh sách, các phần tử thường được xử lý tương tự nhau. Cho nên, các thao tác xử lý sẽ được lặp nhiều lần. Do đó, ta có thể sử dụng vòng lặp khi làm việc với danh sách.  

Với vòng lặp `for`, ta có hai cách duyệt danh sách (1):
{ .annotate }

1.  Vẫn còn cách duyệt thứ ba là sử dụng `enumerate`.

- Sử dụng chỉ số của phần tử
- Sử dụng toán tử `in`

**Sử dụng chỉ số:**

Ví dụ:  
Dòng lệnh 9 và 10 duyệt danh sách `scores` bằng chỉ số để in ra tất cả điểm số. Mỗi điểm số nằm trên một dòng.

```py linenums="1" hl_lines="9 10"
if __name__ == '__main__':
    # Khởi tạo danh sách scores
    scores = [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]

    # Lấy số phần tử
    n = len(scores)
    
    # Duyệt danh sách và in ra điểm số
    for i in range(n):
        print(scores[i])
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
8
9
3
5
10
10
7
8
5
6
```

**Sử dụng toán tử `in`:**

Ví dụ:  
Dòng lệnh 6 và 7 duyệt danh sách bằng toán tử `in` để in ra tất cả điểm số trên cùng một dòng.

```py linenums="1" hl_lines="6 7"
if __name__ == '__main__':
    # Khởi tạo danh sách scores
    scores = [8, 9, 3, 5, 10, 10, 7, 8, 5, 6]

    # In ra các điểm số trên từng dòng
    for score in scores:
        print(score, end=' ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
8 9 3 5 10 10 7 8 5 6 
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1H_MnLvHvWfn22yIZWVBJH2Sr7nsv6Mkl?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/list.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| chỉ số | index |
| danh sách | list |
| dấu ngoặc vuông | square bracket(s) |
| dấu phẩy | comma |
| duyệt | iterate |
| giá trị | value |
| phần tử | element, item |
| phân cách, ký tự phân cách | delimit, delimiter |