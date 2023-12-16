# Kiểu dữ liệu chuỗi

!!! abstract "Tóm lược nội dung"

    Bài này trình bày kiểu dữ liệu chuỗi của Python.

## Khái niệm

**Chuỗi** là một dãy các ký tự. Một số tài liệu khác sử dụng thuật ngữ *xâu*. Trong Python, kiểu dữ liệu chuỗi là `str`. 

Một chuỗi được đặt trong **cặp nháy đơn** `' '` hoặc **cặp nháy kép** `" "`.

Chuỗi cũng là danh sách mà mỗi phần tử là một **ký tự**.

## Truy xuất ký tự

Vì chuỗi cũng là danh sách, nên chuỗi có những đặc điểm tương tự danh sách như:

- Độ dài của chuỗi là số ký tự có trong chuỗi, biết được nhờ hàm `len()`.  
- Mỗi ký tự được truy xuất dựa trên chỉ số của ký tự đó, chẳng hạn `s[7]` là ký tự có chỉ số 7 của chuỗi `s`.  
- Ký tự đầu tiên có chỉ số là **0**.  
- Ký tự cuối cùng có chỉ số là `len(s) - 1`.

Ví dụ 1:
``` py linenums="1"
s = 'Lê Quý Đôn'
print(s[0])           # In ra ký tự đầu tiên
print(s[7])           # In ra ký tự có chỉ số 7
print(s[len(s) - 1])  # In ra ký tự cuối cùng
```

Output:
``` pycon
L
Đ
n
```

!!! question "Câu hỏi 1"

    `print(s[2])` in ra màn hình ký tự gì?

    <div>
    <form id="answer-form">
        <label for="userInput_1">Lời giải của bạn:</label><br>
        <textarea id="userInput_1" name="userInput_1" required></textarea>
        <textarea id="solution_1">khoảng trắng</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_1', 'solution_1', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Ký tự có chỉ số 2 là khoảng trắng.

Ví dụ 2:  
In mỗi ký tự của chuỗi trên một dòng.
``` py linenums="1"
s = 'Lê Quý Đôn'

n = len(s)
for i in range(n):
    print(s[i])
```

Output:  
``` pycon
L
ê

Q
u
ý

Đ
ô
n
```

!!! question "Câu hỏi 2"

    Bạn hãy viết đoạn mã có tác dụng tương tự ví dụ 2 nhưng sử dụng toán tử `in`.   

    <div>
    <form id="answer-form">
        <label for="userInput_2">Lời giải của bạn:</label><br>
        <textarea id="userInput_2" name="userInput_2" required></textarea>
        <textarea id="solution_2">for c in s:.newline.    print&#40;c&#41;</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_2', 'solution_2', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py
        for c in s:
            print(c)
        ```

Hàm `print()` của Python cung cấp tham số `sep` dùng để truyền vào **ký tự phân cách** khi in chuỗi.

Ví dụ 3:  
In chuỗi trên cùng một dòng, các ký tự cách nhau bởi ký tự gạch ngang.
``` py linenums="1"
s = 'Lê Quý Đôn'
print(*s, sep='-')
```

Output:
``` pycon
L-ê- -Q-u-ý- -Đ-ô-n
```

## Một vài hàm xử lý chuỗi

Python cung cấp nhiều hàm giúp cho việc xử lý chuỗi được tiện lợi hơn. Sau đây là một số hàm phổ biến.

### split()

Hàm `split()` dùng để cắt chuỗi ban đầu thành các chuỗi con dựa trên **ký tự phân cách**.

Hàm này có *tham số* là **ký tự phân cách** và *giá trị trả về* là một danh sách gồm các phần tử là chuỗi con.

Ví dụ 4:  
Đế biết chuỗi có bao nhiêu từ, trước hết ta tách chuỗi thành một danh sách các từ. Sau đó tính số phần tử có trong danh sách này.

``` py linenums="1"
s = 'Ngọc bất trác bất thành khí. Nhân bất học bất tri lý.'

word_list = s.split(' ')         # Tách chuỗi s dựa trên ký tự khoảng trắng
print(word_list)                 # In danh sách
print('Số từ:', len(word_list))  # In số phần tử của word_list
```

Output:
``` pycon
['Ngọc', 'bất', 'trác', 'bất', 'thành', 'khí.', 'Nhân', 'bất', 'học', 'bất', 'tri', 'lý.']
Số từ: 12
```

Nếu hàm `split()` không có tham số, thì mặc định Python sẽ tách chuỗi theo *khoảng trắng*. Do đó, dòng lệnh này có thể viết là `word_list = s.split()`.

!!! question "Câu hỏi 3"

    Bạn hãy chỉnh sửa hàm `split()` để tách chuỗi `s` của ví dụ 4 thành các câu riêng biệt.  
    Gợi ý:  
    ``` py
    sentences = ...
    print(sentences)
    ```

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">sentences = s.split('.')</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py
        sentences = s.split('.')
        ```

### join()
Hàm `join()` dùng để ghép các phần tử của danh sách lại thành một chuỗi.

Ví dụ 5:  
Ghép các phần tử trong danh sách `word_list` lại thành chuỗi `s`.
``` py linenums="1"
word_list = ['Dĩ', 'bất', 'biến', 'ứng', 'vạn', 'biến']

s = ' '.join(word_list)
print(s)
```

Output:
``` pycon
Dĩ bất biến ứng vạn biến
```

!!! question "Câu hỏi 4"

    Bạn hãy chỉnh sửa ví dụ 5 để ghép các từ bằng ký tự gạch ngang `-`.

    <div>
    <form id="answer-form">
        <label for="userInput_4">Lời giải của bạn:</label><br>
        <textarea id="userInput_4" name="userInput_4" required></textarea>
        <textarea id="solution_4">s = '-'.join(word_list)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_4', 'solution_4', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py
        s = '-'.join(word_list)
        ```

### Toán tử cộng `+`

Toán tử `+` cũng được dùng để nối chuỗi.

Ví dụ 6:  
``` py linenums="1"
phrase_1 = 'Many thanks'
phrase_2 = 'for reading my website'

s = phrase_1 + ' ' + phrase_2
print(s)
```

Output:
``` pycon
Many thanks for reading my website
```

!!! question "Câu hỏi 5"

    Nếu dòng lệnh nối chuỗi của ví dụ 6 được sửa lại thành `s = phrase_2 + ' ' + phrase_1` thì kết quả in ra màn hình là gì?

    <div>
    <form id="answer-form">
        <label for="userInput_5">Lời giải của bạn:</label><br>
        <textarea id="userInput_5" name="userInput_5" required></textarea>
        <textarea id="solution_5">for reading my website Many thanks</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_5', 'solution_5', 'appreciate_5')">Submit</button>
        <div id="appreciate_5"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        for reading my website Many thanks

###  title(), upper(), lower()

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `title()` | In hoa ký tự đầu tiên của các từ. | `s.title()` |  
| `upper()` | In hoa tất cả ký tự. | `s.upper()` |
| `lower()` | Chuyển tất cả ký tự thành dạng viết thường. | `s.lower()` |  

Ví dụ 7:
``` py linenums="1"
s = 'Phi điểu tận, lương cung tàng. Giảo thố tử, tẩu cẩu phanh.'

s1 = s.title()
print('Hàm title():', s1)

s2 = s.upper()
print('Hàm upper():', s2)

s3 = s.lower()
print('Hàm lower():', s3)
```

Output:
``` pycon
Hàm title(): Phi Điểu Tận, Lương Cung Tàng. Giảo Thố Tử, Tẩu Cẩu Phanh.
Hàm upper(): PHI ĐIỂU TẬN, LƯƠNG CUNG TÀNG. GIẢO THỐ TỬ, TẨU CẨU PHANH.
Hàm lower(): phi điểu tận, lương cung tàng. giảo thố tử, tẩu cẩu phanh.
```

### find()

Hàm `find()` dùng để tìm tìm chuỗi trong chuỗi.

Hàm này có *giá trị trả về* là **vị trí xuất hiện đầu tiên** của *chuỗi con* cần tìm trong chuỗi gốc, hoặc **-1** nếu không tìm thấy *chuỗi con*.  

Ta cũng có thể chỉ định **vị trí bắt đầu** và **vị trí kết thúc** tìm kiếm. Mặc định, hàm `find()` luôn bắt đầu tìm từ vị trí **0** và tìm hết chuỗi, tức kết thúc ở vị trị cuối cùng.

Ví dụ 8:  
Xác định xem có chuỗi con `'chi'` có trong chuỗi gốc hay không.
``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.'

position = s.find('chi')
print(position)
```

Output:
``` pycon
8
```

Trong ví dụ 8, chuỗi con `'chi'` xuất hiện 3 lần trong chuỗi gốc. Tuy nhiên, hàm `find()` chỉ cho biết vị trí xuất hiện đầu tiên, là 8.  

Ví dụ 9:  
Xác định xem từ dấu phẩy đầu tiên trở đi, chuỗi con `'chi'` còn xuất hiện hay không.
``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.'
start = 15

position = s.find('chi', start)
print(position)
```

Output:
``` pycon
43
```

Trong ví dụ 9, hàm `find()` bắt đầu tìm từ ký tự có chỉ số 15, là dấu phẩy, cho đến hết chuỗi. Lúc này, chuỗi con `'chi'` xuất hiện hai lần, trong đó lần đầu tiên tại vị trí 43.   

!!! question "Câu hỏi 6"

    Thực hiện đoạn mã sau với chuỗi `s` của ví dụ 9, kết quả in ra màn hình là gì?

    ``` py linenums="1"
    start = s.find(';')
    pos = s.find('vu', start)
    print(pos)
    ```

    <div>
    <form id="answer-form">
        <label for="userInput_6">Lời giải của bạn:</label><br>
        <textarea id="userInput_6" name="userInput_6" required></textarea>
        <textarea id="solution_6">58</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_6', 'solution_6', 'appreciate_6')">Submit</button>
        <div id="appreciate_6"></div>
    </form>
    </div>

    ??? tip "Đáp án"
        
        Dòng lệnh 1: Tìm vị trí của ký tự `;`, `start` được gán giá trị 32.  
        Dòng lệnh 2: Tìm chuỗi `vu` bắt đầu từ vị trí 32, `pos` được gán giá trị 58.

Ví dụ 10:  
Xác định xem có ký tự `'T'` trong chuỗi hay không.

``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.'

position = s.find('T')
print(position)
```

Output:
``` pycon
70
```
Trong ví dụ 10, chuỗi gốc có nhiều ký tự `'t'`, song ký tự cần tìm là `'T'` in hoa. Chỉ có một ký tự `'T'` in hoa trong chuỗi gốc, xuất hiện tại vị trí 70.  

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/string.mm.md!}
Hình 1. Sơ đồ tóm tắt kiểu dữ liệu chuỗi

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1wo26gDR7lTDnUH9aMLgAv_UuETyY0KbQ?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| chuỗi, xâu | string |
| dấu nháy đơn `' '`| apostrophe |
| dấu nháy kép `" "` | quotation mark |
| ký tự | character |
| viết in hoa | upper |
| viết thường | lower |
 