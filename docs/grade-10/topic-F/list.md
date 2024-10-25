---
icon: material/format-list-numbered
---

# Kiểu dữ liệu list

!!! abstract "Tóm lược nội dung"

    Bài này trình bày kiểu dữ liệu `list` của Python.

## Đặt vấn đề

Khi xử lý bảng điểm môn Tin học của một lớp gồm 30 học sinh, việc khai báo 30 biến có vẻ không ổn. Thử xem đoạn mã khai báo sau đây bất tiện như thế nào.  

``` py
hs1 = 10
hs2 = 9
hs3 = 9.5 
.
.
# vân vân mây mây, còn nữa nha...

hs29 = 9.1
hs30 = 9.4
```

Nếu số học sinh nhiều hơn, chẳng hạn 500 học sinh cả khối, thì việc khai báo từng biến là hoàn toàn bất khả thi.  

May thay, các ngôn ngữ lập trình đều có hỗ trợ những ***kiểu dữ liệu*** dành cho trường hợp bảng điểm như trên.  

Python cũng vậy. Một *kiểu dữ liệu* của Python có thể giúp xử lý tập hợp nhiều dữ liệu là kiểu `list`.  

## Khái niệm

`list` là  một trong bốn kiểu dữ liệu *chuẩn* của Python.  

`list` được dùng để lưu trữ và xử lý tập hợp dữ liệu gồm nhiều **phần tử**. Ưu điểm của `list` là các phần tử có thể có kiểu dữ liệu khác nhau, chẳng hạn phần tử này kiểu `int`, phần tử kia kiểu `float`, một phần tử khác kiểu `bool`, thậm chí một phần tử khác nữa kiểu `list`.  

`list` cho phép thay đổi, chẳng hạn như thêm phần tử, xóa phần tử, thay đổi giá trị của phần tử.  

## Khai báo danh sách

Một ***danh sách*** được khai báo bằng cách đặt các phần tử trong **cặp ngoặc vuông** `[ ]`, các phần tử phân cách nhau bằng **dấu phẩy** `,`.  

Ví dụ 1:  
Khai báo bảng điểm Tin học của 10 học sinh. Giả sử điểm số chỉ là số nguyên.
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]
print(bangdiem)  # In ra toàn bộ danh sách
```

Output:
``` pycon
[8, 9, 3, 5, 10, 10, 7, 8, 4, 6]
```

!!! question "Câu hỏi 1"

    `print(bangdiem[0])` in ra màn hình giá trị gì?

    <div>
    <form id="answer-form">
        <label for="userInput_1">Lời giải của bạn:</label><br>
        <textarea id="userInput_1" name="userInput_1" required></textarea>
        <textarea id="solution_1">8</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_1', 'solution_1', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        `bangdiem[0]` là phần tử đầu tiên của danh sách `bangdiem`. Kết quả in ra màn hình là 8.

Ví dụ 2:  
Khai báo danh sách rỗng, chưa có phần tử.
``` py linenums="1"
bangdiem = []
print(bangdiem)
```

Output:
``` pycon
[]
```

## Truy xuất phần tử

Mỗi phần tử của danh sách được đánh chỉ số bắt đầu từ **0**. Cụ thể:

- Chỉ số của phần tử đầu tiên là **0**.
- Chỉ số của phần tử tiếp theo là **1**.
- Chỉ số của phần tử tiếp theo nữa là **2**.
- Chỉ số của phần tử cuối cùng là **n - 1**, với **n** là số lượng phần tử của danh sách đó.  

Như vậy, mỗi phần tử có hai yếu tố: **chỉ số** và **giá trị**.

Để truy xuất **giá trị** của phần tử, ta sử dụng **chỉ số** đặt trong *cặp ngoặc vuông* `[ ]`.  

Ví dụ 3:
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

print(bangdiem[0])      # In phần tử đầu tiên
print(bangdiem[1])      # In phần tử có chỉ số 1

n = len(bangdiem)       # Hàm len cho biết số lượng phần tử của danh sách này
print(bangdiem[n - 1])  # In phần tử cuối cùng
```

Output:
``` pycon
8
9
6
```

!!! question "Câu hỏi 2"

    Giả sử học sinh áp cuối trong danh sách đã làm bài gỡ điểm, được nâng thành 6.  
    Bạn hãy viết lệnh để gán giá trị 6 cho điểm áp cuối này.

    <div>
    <form id="answer-form">
        <label for="userInput_2">Lời giải của bạn:</label><br>
        <textarea id="userInput_2" name="userInput_2" required></textarea>
        <textarea id="solution_2">bangdiem[len(bangdiem) - 2] = 6</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_2', 'solution_2', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        bangdiem[len(bangdiem) - 2] = 6
        ```

## Duyệt phần tử trong danh sách

Trong cùng một danh sách, các phần tử thường được xử lý như nhau. Nghĩa là, những thao tác nào được thực hiện đối với phần tử này, cũng sẽ được thực hiện đối với phần tử khác.  

Nói cách khác, các thao tác xử lý sẽ được lặp đi lặp lại nhiều lần. Do đó, khi làm việc với danh sách, ta thường sử dụng vòng lặp `for`.  

### Sử dụng chỉ số

Cách thứ nhất khi dùng `for` để duyệt danh sách là sử dụng biến `i` để duyệt theo chỉ số.

Ví dụ 4:  
In các điểm số trên từng dòng.
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

n = len(bangdiem)
for i in range(n):
    print(bangdiem[i])
```

Output:
``` pycon
8
9
3
5
10
10
7
8
4
6
```

!!! question "Câu hỏi 3"

    Bạn hãy điều chỉnh dòng lệnh `for` của ví dụ 4 để in bảng điểm theo chiều ngược lại:  
    6  
    4  
    8  
    ...

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">for i in range(len(bangdiem) - 1, -1, -1):</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        for i in range(len(bangdiem) - 1, -1, -1):
        ```

### Sử dụng toán tử in

Một cách khác để duyệt danh sách mà không cần dùng chỉ số, là sử dụng toán tử `in`.  

Ví dụ 5:  
Cũng in ra bảng điểm trên từng dòng như ví dụ 4.
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

for diem in bangdiem:
    print(diem)
```

Output:
``` pycon
8
9
3
5
10
10
7
8
4
6
```

### Lệnh if lồng trong for

Nếu muốn xử lý phần tử theo những hướng khác nhau, ta có thể sử dụng lệnh `if` nằm bên trong thân vòng lặp `for`.

Ví dụ 6:  
In ra những điểm số dưới trung bình (điểm nhỏ hơn 5).
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

n = len(bangdiem)
for i in range(n):
    if bangdiem[i] < 5:
        print(bangdiem[i])
```

Output:
``` pycon
3
4
```

!!! question "Câu hỏi 4"

    Với bảng điểm như ví dụ 6, giả sử ta cần tuyên dương những học sinh đạt điểm 10.  
    Bạn hãy in ra chỉ số của những phần tử có giá trị 10 trong `bang_diem` này.

    <div>
    <form id="answer-form">
        <label for="userInput_4">Lời giải của bạn:</label><br>
        <textarea id="userInput_4" name="userInput_4" style="height:3rem" required></textarea>
        <textarea id="solution_4">for i in range(len(bangdiem)):.newline.    if bangdiem[i] == 10:.newline.        print(i)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_4', 'solution_4', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        for i in range(len(bangdiem)):
            if bangdiem[i] == 10:
                print(i)
        ```

        Output:
        ``` pycon
        4
        5
        ```

## Một vài hàm xử lý danh sách

Python cung cấp sẵn nhiều hàm giúp cho việc thao tác với danh sách được tiện lợi. Sau đây là một số hàm phổ biến:  

### Thêm phần tử

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `append` | Thêm phần tử vào cuối danh sách. | `L.append(phần_tử_cần_thêm)` | 
| `insert` | Thêm phần tử vào vị trí cụ thể. | `L.insert(vị_trí, phần_tử_cần_thêm)` |

### Xóa phần tử

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `remove` | Xóa phần tử có giá trị cụ thể. | `L.remove(phần_tử_cần_xóa)` |
| `pop` | Xóa phần tử có chỉ số cụ thể. | `L.pop(vị_trí_cần_xóa)` |
| `del` | Xóa phần tử có chỉ số cụ thể, gần giống `pop`. | `del L[i]` |

### Xóa danh sách

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `clear` | Chỉ xóa phần tử, danh sách vẫn còn, nghĩa là trở thành danh sách rỗng. | `L.clear()` |  
| `del` | Xóa cả danh sách. | `del L` | 

Ví dụ 7:
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

#------------------------------------------------------------
bangdiem.append(5)  # Thêm 5 vào cuối danh sách
bangdiem.append(7)  # Thêm 7 vào cuối danh sách

bangdiem.insert(0, 10)  # Thêm 10 vào đầu danh sách
bangdiem.insert(0, 2)   # Tiếp tục thêm 2 vào đầu danh sách

print('Sau khi thêm phần tử:', bangdiem)

#------------------------------------------------------------
bangdiem.remove(10)  # Xóa điểm 10 đầu tiên trong số 3 điểm 10
bangdiem.pop(0)      # Xóa phần tử đầu tiên
bangdiem.pop()       # Nếu không chỉ định chỉ số, mặc định pop sẽ xóa phần tử cuối cùng

print('Sau khi xóa phần tử:', bangdiem)

#------------------------------------------------------------
bangdiem.clear()  # Xóa tất cả phần tử
print('Sau khi xóa tất cả phần tử:', bangdiem)

#------------------------------------------------------------
del bangdiem       # Xóa luôn danh sách bangdiem
# print(bangdiem)  # Lệnh này sẽ gặp lỗi, vì lúc này không còn bangdiem nào nữa
```

Output:

``` pycon
Sau khi thêm phần tử: [2, 10, 8, 9, 3, 5, 10, 10, 7, 8, 4, 6, 5, 7]
Sau khi xóa phần tử: [8, 9, 3, 5, 10, 10, 7, 8, 4, 6, 5]
Sau khi xóa tất cả phần tử: []
```

!!! warning "Lưu ý"
    Mặc dù có lệnh xóa danh sách, song nói chung, xóa toàn bộ dữ liệu là việc không nên.

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/list.mm.md!}
Hình 1. Sơ đồ tóm tắt kiểu dữ liệu `list`

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1H_MnLvHvWfn22yIZWVBJH2Sr7nsv6Mkl?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

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

1. [Bài tập list 1](https://colab.research.google.com/drive/1xh2Db9apAnRbYQJdMSNQOyzKu-fi344V?usp=sharing){:target="_blank"}

2. [Bài tập list 2](https://colab.research.google.com/drive/11bOGQPBTpOQcroYQlad_Fn-vKfHGuGXv?usp=sharing){:target="_blank"}