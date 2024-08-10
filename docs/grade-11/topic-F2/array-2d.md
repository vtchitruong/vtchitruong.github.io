# Mảng hai chiều

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm về mảng hai chiều.

## Đặt vấn đề

Làm thế nào xử lý khi dữ liệu không phải là một dãy, mà là một bảng số liệu? 

## Khái quát về mảng

Tương tự [bài học trước](../topic-F2/array-1d.md/#khai-quat-ve-mang){:target="_blank"}, **mảng** là cấu trúc dữ liệu dùng để lưu trữ và xử lý tập hợp các phần tử.

Bài học này đề cập **mảng hai chiều**.

## Mảng hai chiều

**Mảng hai chiều** dùng để lưu trữ và xử lý dữ liệu theo dạng **lưới**, dạng **bảng** hoặc **ma trận**, gồm nhiều hàng và nhiều cột.

Ví dụ:  
Một số hình ảnh của mảng hai chiều là:

- Bàn cờ vua
- Bảng số Sudoku
- Bảng tính Excel

Trong mảng hai chiều, số phần tử của mỗi hàng ứng với số cột của mảng. Nói cách khác, các hàng đều có số phần tử bằng nhau, hoặc các hàng đều có số cột như nhau.  

<figure markdown>
  ![Minh họa mảng hai chiều B](array/array-2d.svg){loading=lazy}
  <figcaption>Minh họa mảng hai chiều B</figcaption>
</figure>

Mảng hai chiều có thể được xem là **mảng của các mảng**, nghĩa là, mỗi phần tử của mảng hai chiều là mảng một chiều.  

### Khởi tạo  

Tương tự mảng một chiều, kiểu `list` của Python cho phép khởi tạo bằng cách liệt kê phần tử hoặc [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.  

Khi liệt kê, ta sử dụng các cặp ngoặc vuông lồng nhau: `[[ ], [ ], ... ]`

Ví dụ 1:  
Khởi tạo mảng hai chiều bằng cách liệt kê phần tử.

``` py linenums="1"
if __name__ == '__main__':
    # Mảng B gồm 3 hàng và 4 cột
    B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
    print(B)
```

Output:
``` pycon
[[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
```

Ví dụ 2:  
Khởi tạo mảng một chiều bằng toán tử `*`.

``` py linenums="1"
if __name__ == '__main__':
    # Khai báo số hàng và số cột
    rows = 3
    cols = 4

    # Mảng zero_array gồm các phần tử có giá trị 0
    zero_array = [[0] * cols] * rows
    print(zero_array)
```

Output:
``` pycon
[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

Ví dụ 3:  
Khởi tạo mảng hai chiều bằng cú pháp [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.

``` py linenums="1"
if __name__ == '__main__':
    # Khai báo số hàng và số cột
    rows = 3
    cols = 4

    # Mảng zero_array gồm các phần tử có giá trị 0
    one_array = [[1 for c in range(cols)] for r in range(rows)]
    print(one_array)
```

Output:
``` pycon
[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
```

### Truy xuất phần tử  

Mỗi phần tử của mảng hai chiều được truy xuất bằng hai chỉ số, gọi là **chỉ số hàng** và **chỉ số cột**, đặt trong hai cặp ngoặc vuông `[][]`, chỉ số hàng nằm trước, chỉ số cột nằm sau.

Ví dụ 4:  
In ra màn hình giá trị của một vài phần tử.

``` py linenums="1"
if __name__ == '__main__':
    # Khởi tạo mảng B
    B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]

    # In ra phần tử đầu tiên
    print(B[0][0])

    # In ra phần tử cuối cùng
    print(B[2][3])
```

Output:
``` pycon
1
5
```

!!! question "Câu hỏi 1"

    Cũng với mảng `B` của ví dụ 3, dòng lệnh `print(B[1][2])` sẽ in ra màn hình kết quả gì?
    
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

        `B[1][2]` là phần tử ở hàng giữa, có chỉ số cột là 2. Như vậy, kết quả in ra là 8.

Ví dụ 5:  
In ra số hàng và số cột của mảng hai chiều.

``` py linenums="1"
if __name__ == '__main__':
    # Khởi tạo mảng B
    B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
    
    # In ra số hàng của mảng B
    print(len(B))

    # In ra số cột của mảng B
    print(len(B[0]))
```

Output:
``` pycon
3
4
```

!!! question "Câu hỏi 2"

    Cũng với mảng B của ví dụ 4, dòng lệnh `print(len(B[1])) ` sẽ in ra màn hình kết quả gì?

    <div>
    <form id="answer-form">
        <label for="userInput_2">Lời giải của bạn:</label><br>
        <textarea id="userInput_2" name="userInput_2" required></textarea>
        <textarea id="solution_2">4</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_2', 'solution_2', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        `B[1]` là hàng có chỉ số 1 của mảng B. Vì các hàng đều có số cột bằng nhau, nên lệnh `len(B[1])` là tương đương với `len(B[0])`.  
        Như vậy, kết quả in ra là 4.

### Duyệt mảng  

Khi duyệt mảng hai chiều, ta thường sử dụng hai vòng lặp lồng nhau:

- *Vòng lặp ngoài* dùng để duyệt các hàng.
- *Vòng lặp trong* dùng để duyệt các cột, tức các phần tử của hàng đang duyệt.

Ví dụ 6:  
In mảng hai chiều theo dạng hàng và cột.

``` py linenums="1"
if __name__ == '__main__':
    B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]

    # Khai báo số hàng và số cột
    rows = 3
    cols = 4

    # Duyệt từ hàng đầu đến hàng cuối. Ứng với mỗi hàng r:
    # Duyệt từ cột đầu đến cột cuối
    for r in range(rows):        
        for c in range(cols):       
            # In ra phần tử nằm ở hàng r và cột c, kèm theo khoảng trắng
            print(B[r][c], end=' ')
        
        # Xuống dòng sau khi đã in hết các cột
        print()
```

Output:
``` pycon
1 7 4 0 
9 4 8 8 
2 4 5 5 
```

!!! question "Câu hỏi 3"

    Bạn hãy chỉnh sửa các dòng lệnh của vòng lặp để in ra màn hình tất cả phần tử của mảng B trên cùng một dòng.

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">for r in range(rows):.newline.    for c in range(cols):.newline.        print(B[r][c], end=' ')</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        for r in range(rows):
            for c in range(cols):
                print(B[r][c], end=' ')
        ```

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F2/array-2d.mm.md!}
*Sơ đồ tóm tắt mảng hai chiều*

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1jcgXcdZQWSuitaS-9cYGAup7sD77T75F?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cột | column |
| hàng | row |
| mảng của mảng | array of arrays |
| mảng hai chiều | two-dimensional array |

## Bài tập thực hành

1. [Bài tập 2D-array-1](https://colab.research.google.com/drive/1TtnLVtu1H6N9bG6b23oo5PiWfukcks_p?usp=sharing){:target="_blank"}

2. *Chưa có*