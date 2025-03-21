---
icon: material/source-branch
---

# Cấu trúc điều kiện if

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh điều kiện `if.

## Đặt vấn đề

Không phải bài toán nào cũng được giải quyết theo một *đường thẳng*, tức thực hiện một mạch các câu lệnh từ trên xuống.  

Trên thực tế, rất nhiều con đường có *nhánh rẽ*, rất nhiều bài toán mà trong quá trình giải quyết, phát sinh các trường hợp khác nhau, buộc ta phải chọn một hướng để đi tiếp, không thể *phân thân* để đi nhiều hướng cùng lúc.

## Khái niệm

Câu lệnh `if` là câu lệnh dùng để giải quyết bài toán có nhiều trường hợp.  

Câu lệnh `if` được gọi là *cấu trúc điều kiện*, hoặc một số sách giáo khoa gọi là *cấu trúc rẽ nhánh*.  

## Lệnh if thiếu

!!! note "Cú pháp"
    ``` py
    if điều_kiện:  
        lệnh_1
        lệnh_2
        .
        .
        lệnh_n
    ```

Giải thích:

Nếu `điều_kiện` có giá trị `True`, thì khối lệnh ngay bên dưới được thực hiện. Ngược lại, nếu `điều_kiện` có giá trị `False`, thì không có lệnh nào được thực hiện lệnh cả.

Nói cách khác, nếu đúng thì làm, còn không thì thôi.

Ví dụ 1:
``` py linenums="1"
diem_thi_mos = 871 # Điểm thi Microsoft Office Specialist

if diem_thi_mos >= 700:
    print('Pass. Good job!')
```

Output:
``` pycon
Pass. Good job!
```

!!! question "Câu hỏi 1"

    Biết rằng biến `diem_thi_mos` có giá trị là 700.  
    Sau khi thực hiện đoạn mã của ví dụ 1, kết quả hiển thị trên màn hình là gì?

    <div>
    <form id="answer-form">
        <label for="userInput_1">Lời giải của bạn:</label><br>
        <textarea id="userInput_1" name="userInput_1" required></textarea>
        <textarea id="solution_1">Pass. Good job!</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_1', 'solution_1', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Pass. Good job!

!!! question "Câu hỏi 2"

    Biết rằng biến `diem_thi_mos` có giá trị là 669.  
    Sau khi thực hiện đoạn mã của ví dụ 1, kết quả hiển thị trên màn hình là gì?

    <div>
    <form id="answer-form">
        <label for="userInput_2">Lời giải của bạn:</label><br>
        <textarea id="userInput_2" name="userInput_2" required></textarea>
        <textarea id="solution_2">Không hiển thị kết quả</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_2', 'solution_2', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Màn hình không hiển thị kết quả nào. Vì không có lệnh nào được thực hiện.

## Lệnh if đủ

!!! note "Cú pháp"
    ``` py
    if điều_kiện:
        lệnh_1
        lệnh_2
        .
        .
        lệnh_n
    else:
        lệnh_A
        lệnh_B
        .
        .
        lệnh_Z
    ```

Giải thích:  
Nếu `điều_kiện` có giá trị `True`, thì khối lệnh nằm trên được thực hiện. Ngược lại, nếu `điều_kiện` có giá trị `False`, thì khối lệnh nằm sau `else` được thực hiện.  
Nói cách khác, câu lệnh `if ... else ...` dùng để giải quyết bài toán có **2 trường hợp**.  

Ví dụ 2:
``` py linenums="1"
diem_thi_mos = 691 # Điểm thi Microsoft Office Specialist

if diem_thi_mos >= 700:
    print('Pass. Good job!')
else:
    print('Fail. Try again. Better luck next time.')
```

Output:
``` pycon
Fail. Try again. Better luck next time.
```

Ví dụ 3:
``` py linenums="1"
m = 19

if m % 2 == 1:
    print(m, 'is an odd number.')
else:
    print(m, 'is an even number.')
```

Output:
``` pycon
19 là số lẻ
```

!!! question "Câu hỏi 3"

    Biết rằng biến `m` có giá trị là 0.

    Sau khi thực hiện đoạn mã của ví dụ 3, kết quả hiển thị trên màn hình là gì?

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">0 is an even number.</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        0 is an even number.


## Lệnh if đủ dành cho bài toán có nhiều hơn 2 trường hợp

!!! note "Cú pháp"
    ``` py
    if điều_kiện_trường_hợp_1:  
        khối_lệnh_A
    elif điều_kiện_trường_hợp_2:
        khối_lệnh_B
    elif điều_kiện_trường_hợp_3:
        khối_lệnh_C
    .
    .
    else:
        khối_lệnh_D
    ```

Giải thích:  
- Ứng với trường hợp 1, ta viết lệnh `if`, `khối_lệnh_A` sẽ được thực hiện.  
- Ứng với mỗi trường hợp tiếp theo, ta viết lệnh `elif`, `khối_lệnh_B` hoặc `khối_lệnh_C` sẽ được thực hiện tương ứng.  
- Nếu không có trường hợp nào thỏa, ta viết lệnh  `else`,  `khối_lệnh_D` sẽ được thực hiện.  

Ví dụ 4:
``` py linenums="1"
age = 70

if age < 15:
    print('Bạn chưa đủ tuổi lao động.')
elif age >= 15 and age <= 62:
    print('Bạn đang nằm trong độ tuổi lao động.')
else:
    print('Bạn đã vào tuổi hưu.')
```

Output:
``` pycon
Bạn đã vào tuổi hưu.
```

!!! question "Câu hỏi 4"

    Biết rằng biến `age` có giá trị là 1.  
    Sau khi thực hiện đoạn mã của ví dụ 4, kết quả hiển thị trên màn hình là gì?

    <div>
    <form id="answer-form">
        <label for="userInput_4">Lời giải của bạn:</label><br>
        <textarea id="userInput_4" name="userInput_4" required></textarea>
        <textarea id="solution_4">Bạn chưa đủ tuổi lao động.</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_4', 'solution_4', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Bạn chưa đủ tuổi lao động.  
        Tuy nhiên, xét về mặt thực tế, giá trị `1` có gì đó không ổn.

!!! question "Câu hỏi 5"

    Dòng lệnh `elif` của ví dụ 4 có thể được viết lại thành `elif 15 <= age <= 62:` được không?

    <div>
    <form id="answer-form">
        <label for="userInput_5">Lời giải của bạn:</label><br>
        <textarea id="userInput_5" name="userInput_5" required></textarea>
        <textarea id="solution_5">Được</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_5', 'solution_5', 'appreciate_5')">Submit</button>
        <div id="appreciate_5"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Được. Python cho phép diễn đạt giống như biểu thức toán học.  
        Tuy nhiên, bạn nên biết rằng, cách diễn đạt $a \le x \le b$ của phần lớn các ngôn ngữ lập trình là `x >= a and x <= b`.

!!! question "Câu hỏi 6"

    Nếu bài toán có $n$ trường hợp thì ta cần viết bao nhiêu lệnh `if` lẫn `elif`?

    <div>
    <form id="answer-form">
        <label for="userInput_6">Lời giải của bạn:</label><br>
        <textarea id="userInput_6" name="userInput_6" required></textarea>
        <textarea id="solution_6">n - 1</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_6', 'solution_6', 'appreciate_6')">Submit</button>
        <div id="appreciate_6"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Với bài toán có $n$ trường hợp, ta chỉ cần viết $n - 1$ lệnh `if` hoặc `elif`. Vì trường hợp cuối cùng không cần xét nữa.

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/conditional-statement-if.mm.md!}
Hình 1. Sơ đồ tóm tắt lệnh if

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1KsgtE-O1YRvLWoczEp3SbYpex7RG_C3K?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| câu lệnh điều kiện | conditional statement |
| trường hợp | case |

## Bài tập thực hành

1. [Bài tập if-1](https://colab.research.google.com/drive/1w-ApSwPvQSO37KzMEIgZtZeK2Qa9maXZ?usp=sharing){:target="_blank"}

2. [Bài tập if-2](https://colab.research.google.com/drive/1cuiRHPxRMJHtNJvcnB8ITl5mezuvWgjL?usp=sharing){:target="_blank"}