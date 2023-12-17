# Mảng một chiều

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm liên quan đến mảng một chiều.

## Đặt vấn đề

Vấn đề của bài này đã được nêu ra trong bài [Kiểu dữ liệu list](../../grade-10/topic-F/list.md){:target="_blank"}, đó là hầu hết các ngôn ngữ lập trình đều có những *kiểu dữ liệu* giúp lưu trữ và xử lý một tập hợp gồm nhiều phần tử.  

## Khái niệm chung về mảng

**Mảng** là cấu trúc dữ liệu cho phép lưu trữ và xử lý một tập hợp gồm **hữu hạn** phần tử có **cùng kiểu dữ liệu**.

Giá trị của mỗi phần tử được truy xuất thông qua **chỉ số** của phần tử đó.

**Kích thước** của mảng là **số lượng phần tử** có trong mảng.

Về tổng quát, mảng có thể là một chiều hoặc đa chiều. Bài này chỉ đề cập **mảng một chiều**.

??? note "Việc lưu trữ mảng trong bộ nhớ"
    Về mặt khái niệm, các phần tử của một mảng được lưu trữ liên tiếp nhau trong bộ nhớ. Tuy nhiên, khác với những hệ thống trước đây, một số kiến trúc máy tính hiện đại lưu trữ mảng phức tạp hơn, các phần tử có thể không thực sự nằm liên tiếp nhau trên bộ nhớ vật lý. 

## Mảng một chiều

Mảng một chiều là **dãy hữu hạn** các phần tử có **cùng kiểu dữ liệu**.

Mảng một chiều có thể dùng để biểu diễn một hàng hoặc một cột nào đó trong bảng.

Hình ảnh mảng một chiều trong thực tế: một dãy các phòng học, một dãy ghế trong rạp chiếu phim.

Giá trị của phần tử được truy xuất thông qua **chỉ số** của phần tử đó. Mỗi ngôn ngữ lập trình có cách đánh chỉ số khác nhau: có thể bắt đầu từ **0** hoặc từ **1**.  

<figure markdown>
  ![Image title](array/array-1d.svg){loading=lazy}  
  <figcaption>Hình 1. Minh họa mảng một chiều A</figcaption>  
</figure>

Python không có kiểu dữ liệu mảng chuẩn như những ngôn ngữ *truyền thống* (C/C++, Java), mà thay vào đó là kiểu dữ liệu `list` linh hoạt hơn. Ta có thể sử dụng kiểu `list` để giải quyết những bài toán liên quan đến mảng. Các ví dụ trong bài này đều sử dụng `list` để minh họa mảng.

??? note "Kiểu mảng trong Python"
    Mặc dù vậy, Python vẫn cung cấp một module tên là `array` giúp người dùng làm việc với mảng theo đúng nghĩa truyền thống.  

## Khởi tạo  

Kiểu `list` của Python cho phép khởi tạo mảng một chiều bằng cách liệt kê các phần tử trong cặp ngoặc vuông `[ ]` và phân cách nhau bằng dấu phẩy `,`.

Ví dụ 1:  
Khởi tạo mảng một chiều bằng cách liệt kê phần tử.

``` py linenums="1"
# Mảng gồm các số nguyên
A = [1, 7, 4, 0, 9, 4, 8, 8]
print(A)

# Mảng gồm các chuỗi
word_array =  ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
print(word_array)
```

Output:
``` pycon
[1, 7, 4, 0, 9, 4, 8, 8]
['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
```

Ví dụ 2:  
Khởi tạo mảng một chiều bằng toán tử `*`.

``` py linenums="1"
# Mảng gồm 8 phần tử đều mang giá trị 0
zero_array = [0] * 8
print(zero_array)
```

Output:
``` pycon
[0, 0, 0, 0, 0, 0, 0, 0]
```

Ví dụ 3:  
Khởi tạo mảng một chiều bằng cú pháp [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.  

``` py linenums="1"
# Mảng gồm 8 phần tử đều mang giá trị 1
one_array = [1 for i in range(8)]
print(one_array)
```

Output:
``` pycon
[1, 1, 1, 1, 1, 1, 1, 1]
```

!!! question "Câu hỏi 1"

    Bạn hãy viết dòng lệnh khai báo mảng `my_array` gồm `n` phần tử đều có giá trị 0 bằng list comprehension.  
    Biết rằng `n` là biến int đã được khai báo trước giá trị nào đó. 

    <div>
    <form id="answer-form">
        <label for="userInput_1">Lời giải của bạn:</label><br>
        <textarea id="userInput_1" name="userInput_1" required></textarea>
        <textarea id="solution_1">my_array = [0 for i in range(n)]</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_1', 'solution_1', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        my_array = [0 for i in range(n)]
        ```

## Truy xuất phần tử  

Mỗi phần tử của mảng một chiều được truy xuất thông qua chỉ số. Phần tử đầu tiên có chỉ số là `0` và phần tử cuối cùng có chỉ số là `len(mảng) - 1`.  

Chỉ số được đặt trong cặp ngoặc vuông `[ ]`.  

Ví dụ 4:

``` py linenums="1"
A = [1, 7, 4, 0, 9, 4, 8, 8]

print(A[0])  # In ra phần tử đầu tiên
print(A[7])  # In ra phần tử cuối cùng
print(A[8])  # Chương trình báo lỗi tại dòng lệnh này
```

Output:
``` pycon
1
8
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
<ipython-input-6-0c2aa77ea20d> in <cell line: 7>()
      3 print(A[0])  # In ra phần tử đầu tiên
      4 print(A[7])  # In ra phần tử cuối cùng
----> 5 print(A[8])  # Chương trình báo lỗi tại dòng lệnh này

IndexError: list index out of range
```

!!! question "Câu hỏi 2"

    Cũng với mảng A của ví dụ 4, dòng lệnh `print(A[len(A) - 1])` sẽ in ra màn hình kết quả gì?

    <div>
    <form id="answer-form">
        <label for="userInput_2">Lời giải của bạn:</label><br>
        <textarea id="userInput_2" name="userInput_2" required></textarea>
        <textarea id="solution_2">8</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_2', 'solution_2', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        `len(A) - 1` là chỉ số của phần tử cuối cùng. Như vậy, kết quả in ra màn hình là 8.

## Duyệt mảng  

Trong nhiều bài toán, các phần tử của mảng đều được xử lý *một loạt* tương tự nhau, theo thứ tự từ phần tử đầu đến phần tử cuối. Do đó, ta thường sử dụng vòng lặp để duyệt mảng.  

Ví dụ 5:  
Duyệt mảng và in ra các phần tử từ đầu đến cuối.  

``` py linenums="1"
word_array = ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
for i in range(len(word_array)):
    print(word_array[i])
```

Output:
``` pycon
vân tán
tuyết tiêu
hoa tàn
nguyệt khuyết
```

!!! question "Câu hỏi 3"

    Giả sử lớp có 5 học sinh và ta muốn cộng điểm cho cả lớp.  
    Gọi `scores` là mảng chứa điểm số của lớp: `scores = [9, 7, 9, 8, 8, 7]`.

    Bạn hãy viết vòng lặp for để cộng 1 điểm cho mỗi học sinh.

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">for i in range(len(scores)):.newline.    scores[i] = scores[i] + 1</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        for i in range(len(scores)):
            scores[i] = scores[i] + 1
        ```

Ví dụ 6:  
Duyệt mảng và in ra các phần tử từ cuối ngược về đầu.

``` py linenums="1"
word_array = ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
n = len(word_array)
for i in range(n - 1, -1, -1):
    print(word_array[i])
```

Output:
``` pycon
nguyệt khuyết
hoa tàn
tuyết tiêu
vân tán
```

!!! question "Câu hỏi 4"

    Nếu ta chỉnh sửa vòng lặp for của ví dụ 6 thành `for i in range(n - 2, 0, -1):` thì kết quả in ra màn hình gồm mấy phần tử?

    <div>
    <form id="answer-form">
        <label for="userInput_4">Lời giải của bạn:</label><br>
        <textarea id="userInput_4" name="userInput_4" required></textarea>
        <textarea id="solution_4">2</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_4', 'solution_4', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Biến `i` chạy từ `n - 2` nghĩa là xuất phát từ phần tử áp cuối, và kết thúc tại phần tử trước `0`, cụ thể là `1`.  
        Do đó, kết quả in ra màn hình gồm 2 phần tử là 'hoa tàn' và 'tuyết tiêu'.

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F2/array-1d.mm.md!}
*Hình 2. Sơ đồ tóm tắt mảng một chiều*

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1EqTwaewXMPJOQvS2EawPPip_JO46PsEn?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chỉ số (của phần tử) | index |
| đánh chỉ số từ 0 | zero-based indexing |
| giá trị (của phần tử) | value |
| mảng một chiều | one-dimensional array |
| phần tử | element, item |