---
icon: material/format-list-numbered
---

# Kiểu dữ liệu list

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái quát về kiểu dữ liệu `list` của Python.

## Đặt vấn đề

Khi xử lý bảng điểm môn Tin học của một lớp gồm 40 học sinh, việc khai báo 30 biến có vẻ không ổn. Thử xem đoạn mã khai báo sau đây bất tiện như thế nào.  

```py
hs1 = 10
hs2 = 9
hs3 = 9.5
.
.
.
# vân vân mây mây, còn nữa nha...

hs39 = 9.1
hs40 = 9.4
```

Nếu số học sinh nhiều hơn, chẳng hạn 500 học sinh cả khối, thì việc khai báo từng biến là hoàn toàn bất khả thi.  

May thay, các ngôn ngữ lập trình đều có hỗ trợ những ***kiểu dữ liệu*** dành cho trường hợp bảng điểm như trên.  

Python cũng vậy. Một *kiểu dữ liệu* của Python có thể giúp xử lý tập hợp nhiều dữ liệu là kiểu `list`.  

## Khái niệm

`list` là  một trong bốn kiểu dữ liệu *chuẩn* của Python.  

`list` được dùng để lưu trữ và xử lý tập hợp dữ liệu gồm nhiều **phần tử**.

**Ưu điểm:**  các phần tử có thể có **kiểu dữ liệu khác nhau**, chẳng hạn phần tử này kiểu `int`, phần tử kia kiểu `float`, một phần tử khác kiểu `bool`, thậm chí một phần tử khác nữa kiểu `list`.  

**Hạn chế:** tốc độ xử lý của `list` không nhanh bằng kiểu dữ liệu mảng trong một số ngôn ngữ lập trình khác như C++, Java, hay C#.

Ta có thể cập nhật `list` bằng cách:

- Thêm phần tử vào `list`
- Xóa phần tử khỏi `list`
- Thay đổi giá trị của các phần tử trong `list`

Từ đây trở đi, `list` có thể được đề cập bằng thuật ngữ **danh sách**.

!!! question "Hỏi chút chơi - phần 1"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list/quiz1.html">Hỏi chút chơi</iframe>
    </div>

## Khai báo danh sách

Một **danh sách** được khai báo bằng cách đặt các phần tử trong cặp ngoặc vuông `[ ]`. Các phần tử phân cách nhau bằng dấu phẩy `,`.  

Ví dụ:

**Yêu cầu:**

Khai báo bảng điểm Tin học của 10 học sinh.

**Mã lệnh:**

```py linenums="1"
if __name__ == '__main__':
    # Khai báo bảng điểm môn Tin học bằng cách liệt kê các phần tử
    score_list = [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]

    # In danh sách ra màn hình
    print(f'Bảng điểm: {score_list}')
```

**Output:**

```pycon
Bảng điểm: [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]
```

Ví dụ:

**Yêu cầu:**

Khai báo danh sách rỗng, chưa có phần tử.

**Mã lệnh:**

```py linenums="1" hl_lines="3"
if __name__ == '__main__':
    # Khai báo danh sách rỗng
    score_list = []

    # In danh sách ra màn hình
    print(f'Danh sách rỗng: {score_list}')
```

**Output:**

```pycon
Danh sách rỗng: []
```

!!! question "Hỏi chút chơi - phần 2"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list/quiz2.html">Hỏi chút chơi</iframe>
    </div>

## Số lượng phần tử

Để biết số lượng phần tử của danh sách, ta sử dụng hàm `len()`.

Ví dụ:

**Yêu cầu:**

Gán số lượng phần tử của danh sách bảng điểm vào biến `n`.

**Mã lệnh:**

```py linenums="1" hl_lines="6"
if __name__ == '__main__':
    # Khai báo bảng điểm môn Tin học bằng cách liệt kê các phần tử
    score_list = [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]

    # Gán số lượng phần tử của danh sách cho biến n
    n = len(score_list)
    print(f'Số lượng phần tử của danh sách là: {n}')
```

**Output:**

```pycon
Số lượng phần tử của danh sách là: 10
```

!!! question "Hỏi chút chơi - phần 3"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list/quiz3.html">Hỏi chút chơi</iframe>
    </div>

## Truy xuất phần tử

Mỗi phần tử trong danh sách gồm có hai yếu tố: **chỉ số** **giá trị**.

**Chỉ số** còn được gọi là **vị trí** của phần tử trong danh sách, được đánh chỉ số từ **0** đến **n - 1**. Cụ thể:

- Chỉ số của phần tử đầu tiên là `0`.
- Chỉ số của phần tử tiếp theo là `1`.
- Chỉ số của phần tử tiếp theo nữa là `2`.
- Chỉ số của phần tử cuối cùng là `n - 1`, trong đó, `n` là số lượng phần tử.  

Để truy xuất **giá trị** của phần tử, ta đặt **chỉ số** vào trong *cặp ngoặc vuông* `[ ]`.  

Ví dụ:

**Yêu cầu:**

In ra phần tử đầu tiên, phần tử có chỉ số `1` và phần tử cuối cùng của bảng điểm môn Tin học.

**Mã lệnh:**

```py linenums="1"
if __name__ == '__main__':
    # Khai báo bảng điểm môn Tin học bằng cách liệt kê các phần tử
    score_list = [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]

    # In ra phần tử đầu tiên
    print(f'Phần tử đầu tiên: {score_list[0]}')

    # In ra phần tử có chỉ số 1
    print(f'Phần tử có chỉ số 1: {score_list[1]}')

    # In ra phẩn tử cuối cùng
    n = len(score_list)
    print(f'Phần tử cuối cùng: {score_list[n - 1]}')
```

**Output:**

```pycon
Phần tử đầu tiên: 8.1
Phần tử có chỉ số 1: 9.6
Phần tử cuối cùng: 6.8
```

!!! question "Hỏi chút chơi - phần 4"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list/quiz4.html">Hỏi chút chơi</iframe>
    </div>

## Duyệt phần tử trong danh sách

Trong cùng một danh sách, các phần tử thường được xử lý như nhau. Nghĩa là, những thao tác nào được thực hiện đối với phần tử này cũng sẽ được thực hiện đối với phần tử khác.  

Như vậy, các thao tác xử lý sẽ được lặp đi lặp lại nhiều lần. Do đó, khi làm việc với danh sách, ta thường sử dụng vòng lặp `for`.  

Khi dùng `for` để duyệt danh sách, ta có hai cách sau để truy xuất phần tử:

- Sử dụng chỉ số của phần tử
- Sử dụng toán tử `in`

### Sử dụng chỉ số

Để duyệt qua từng phần tử trong danh sách, ta sử dụng sử dụng biến `i` để duyệt theo chỉ số.

Ví dụ:

**Yêu cầu:**

In các điểm số trên từng dòng.

**Mã lệnh:**

```py linenums="1"
if __name__ == '__main__':
    # Khai báo bảng điểm môn Tin học bằng cách liệt kê các phần tử
    score_list = [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]

    # In ra các điểm số trên từng dòng
    n = len(score_list)
    for i in range(n):
        print(score_list[i])
```

**Output:**

```pycon
8.1
9.6
3.5
5.5
10
10
7.4
8.4
4.9
6.8
```

### Sử dụng toán tử in

Để duyệt qua từng phần tử trong danh sách mà không cần dùng chỉ số, ta sử dụng toán tử `in`.

Ví dụ:

**Yêu cầu:**

Cũng in ra bảng điểm trên từng dòng nhưng sử dụng toán tử `in`.

**Mã lệnh:**

```py linenums="1"
if __name__ == '__main__':
    # Khai báo bảng điểm môn Tin học bằng cách liệt kê các phần tử
    score_list = [8.1, 9.6, 3.5, 5.5, 10, 10, 7.4, 8.4, 4.9, 6.8]

    # In ra các điểm số trên từng dòng
    for score in score_list:
        print(score)
```

**Output:**

```pycon
8.1
9.6
3.5
5.5
10
10
7.4
8.4
4.9
6.8
```

!!! question "Hỏi chút chơi - phần 5"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list/quiz5.html">Hỏi chút chơi</iframe>
    </div>

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/mindmaps/list.mm.md!}

## Mã nguồn

Các đoạn mã trong bài được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-10/topic-f/list.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1H_MnLvHvWfn22yIZWVBJH2Sr7nsv6Mkl?usp=sharing){:target="_blank"}

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

## Bài tập thực hành

Bạn có thể tự thực hành các bài tập sau tại [Google Colab](https://colab.research.google.com/drive/1-yrOGB4pGboZ-Alvv2M2lmeojfwHoh4z?usp=sharing){:target="_blank"}.