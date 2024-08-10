# Độ phức tạp thuật toán

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm liên quan đến độ phức tạp của thuật toán, trong đó có:
    
    - Giải thích ý nghĩa của Big O.
    - Một số kỹ thuật xác định nhanh độ phức tạp.

## Đặt vấn đề

Giả sử mảng gồm 100 phần tử đã sắp xếp tăng dần.

Khi cần kiểm tra xem giá trị nào đó có tồn tại trong mảng hay không, ta nên sử dụng thuật toán *tìm kiếm tuần tự* hay *tìm kiếm nhị phân*? Căn cứ vào đâu mà ta cho rằng thuật toán này nhanh hơn thuật toán kia?

Một cách khái quát, khi nhiều thuật toán giải quyết cùng một bài toán, thì thuật toán nào *tốt hơn*?

## Khái niệm

Ta luôn muốn chương trình của mình thực thi một thuật toán *tốt*, theo nghĩa chạy nhanh và chiếm ít bộ nhớ. Có nhiều yếu tố dùng để đánh giá thuật toán tốt hay chưa tốt. Một trong số đó có tên gọi là **độ phức tạp của thuật toán**.

!!! note "Độ phức tạp thuật toán"  
    
    Độ phức tạp thuật toán là *cách thức đánh giá thuật toán* dựa trên lượng tài nguyên cần có để thực hiện thuật toán.
    
Theo đó, độ phức tạp thuật toán được phân thành hai loại: **độ phức tạp không gian** và **độ phức tạp thời gian**, ứng với hai dạng tài nguyên chính là bộ nhớ và thời gian.

- **Độ phức tạp không gian**:

    Dùng để xác định dung lượng bộ nhớ cần thiết để thực hiện thuật toán dựa trên kích thước dữ liệu đầu vào.

- **Độ phức tạp thời gian**:

    Dùng để xác định thời gian thực hiện thuật toán dựa trên kích thước dữ liệu đầu vào.  

Cũng có tài liệu nêu rằng, độ phức tạp của thuật toán là **độ đo** đánh giá hiệu quả của thuật toán, chứ không phải **cách thức đo**.  

Với sự phát triển của phần cứng ngày nay, các máy tính thường có đủ bộ nhớ để chạy chương trình. Do đó, độ phức tạp không gian có thể ít được đề cập hơn so với độ phức tạp thời gian. Và bài này chỉ trình bày về độ phức tạp thời gian của thuật toán, từ nay gọi tắt là *độ phức tạp thuật toán*.  

!!! question "Câu hỏi 1"

    Có bao nhiêu loại độ phức tạp thuật toán?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="A">A. 3<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="B">B. 1<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="C">C. 2<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="D">D. 4<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_1', 'C', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Có hai loại là không gian và thời gian. Đáp án: C.

## Ý tưởng xác định độ phức tạp

!!! note inline end "Ý tưởng xác định độ phức tạp"
    
    Độ phức tạp phải được tính dựa trên sự tương quan giữa **số lượng phép toán** và **kích thước của dữ liệu đầu vào**.

Thời gian để thực hiện một chương trình được tính theo đơn vị giây (hoặc milli-giây), phụ thuộc vào nhiều yếu tố khác nhau như ngôn ngữ lập trình, trình biên dịch, hệ điều hành, tốc độ CPU, v.v... Vì thế, khi đánh giá thuật toán của chương trình, ta không dựa vào thời gian thực, mà cần một đơn vị tính khác, độc lập với những yếu tố trên. Cụ thể hơn, thuật toán cần được đánh giá trên cơ sở là bản thân thuật toán và dữ liệu đầu vào.  

!!! note inline end "Phép toán tích cực"

    **Phép toán tích cực** là phép toán được thực hiện **thường xuyên nhất** trong thuật toán.  

Theo ý tưởng này, độ phức tạp thời gian được xác định bằng cách ước lượng số phép toán tích cực cần thực hiện.

<br>
<br>
<br>

!!! question "Câu hỏi 2"

    Phép toán tích cực trong đoạn mã sau nằm ở dòng nào?

    ``` py linenums="1"
    for i in range(n):
        if i % 2 == 0:
            S = S + i
        else:
            P = P * i
    ```

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="A">A. Dòng 2<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="B">B. Dòng 3<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="C">C. Dòng 5<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_2', 'A', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Ta thấy *phép toán so sánh bằng ==* (dòng 2) luôn được thực hiện dù `i` chẵn hay lẻ, trong khi phép gán cho biến `S` (dòng 3) chỉ thực hiện khi `i` chẵn và phép gán cho biến `P` (dòng 5) chỉ thực hiện khi `i` lẻ.

        ``` py linenums="1" hl_lines="2"
        for i in range(n):
            if i % 2 == 0:
                S = S + i
            else:
                P = P * i
        ```

        Như vậy, phép toán tích cực trong vòng lặp trên là phép toán so sánh.

Phép toán tích cực bao gồm các phép toán sau:

- Phép so sánh
- Phép gán
- Phép toán số học

## Big O

### Ký hiệu Big O

Có ba loại trường hợp khác nhau khi thực hiện thuật toán:

- Trường hợp tốt nhất
- Trường hợp trung bình
- Trường hợp xấu nhất[^1]

!!! note inline end "Ký hiệu Big O"
    
    Độ phức tạp thời gian của thuật toán được ký hiệu là $O(g(n))$. Trong đó, $g(n)$ là một hàm số theo $n$, với $n$ là kích thước của dữ liệu đầu vào.

Mỗi trường hợp có một ký hiệu riêng. Trong đó, ký hiệu $O$, đọc là **Big-Oh**, có thể xem là phổ biến nhất và thường áp dụng cho trường hợp xấu nhất.

[^1]:
    Trường hợp tốt nhất: tạm hiểu là thuật toán hoàn tất nhiệm vụ trong thời gian ngắn nhất có thể.  
    Trường hợp trung bình: tạm hiểu là khả năng thực hiện trung bình của thuật toán đối với một lượng lớn dữ liệu đầu vào.  
    Trường hợp xấu nhất: là trường hợp mà số lần thực hiện phép toán tích cực nhiều nhất.  

<br>

### Cách xác định Big O

Gọi $p$ là thời gian thực hiện một phép toán tích cực,  
&emsp;&emsp;$n$ là kích thước của dữ liệu đầu vào,  
&emsp;&emsp;$c(n)$ là hàm số theo $n$ cho biết số lần thực hiện phép toán tích cực,

thì thời gian thực hiện thuật toán được định nghĩa là:  

$$
T(n) = p . c(n)
$$

Ví dụ 1:  
Áp dụng cho đoạn mã ở câu hỏi 2:

Giả sử mỗi phép toán tích cực được thực hiện trong một đơn vị thời gian, nghĩa là $p = 1$;  
&emsp;&emsp;và phép toán tích cực được thực hiện $c(n) = n$ lần.

Như vậy, thời gian thực hiện đoạn mã là: $T(n) = p . c(n) = 1 . n = n$

Ví dụ 2:  
Cho đoạn mã:

``` py linenums="1"
for i in range(n):
    for j in range(n):
        S = S + a[i][j]
```

Phép toán tích cực trong đoạn mã này là phép cộng dồn cho biến `S`.

Vì số lần lặp của `for i` là $n$ lần và số lần lặp của `for j` là $n$ lần, nên phép toán tích cực được thực hiện $c(n) = n^2$ lần.

Như vậy, thời gian thực hiện đoạn mã là $T(n) = p . c(n) = 1 . n^2 = n^2$

!!! note "Cách xác định Big O"
    
    Xét hàm $g(n)$ không âm với mọi số nguyên $n \ge 0$.

    Nếu $\exists n_0 \in \mathrm{Z}, \exists c \gt 0: \forall n \ge n_0$, $g(n) \le c.f(n)$ thì ta nói rằng “**g(n) là Big-Oh f(n)**”, viết là $g(n) = O(f(n))$.

Theo đó, Big O của các đoạn mã trên như sau:

- Trong ví dụ 1, vì $T(n) = n$ nên $g(n) = O(n)$
- Trong ví dụ 2, vì $T(n) = n^2$ nên $g(n) = O(n^2)$

!!! question "Câu hỏi 3"

    Giả sử một đoạn mã có thời gian thực hiện là $T(n) = 3n^2 + 7n + 5$.
    
    Bạn hãy cho biết Big O của đoạn mã này.

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">O(n^2)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Ta có: $3n^2 + 7n + 5 = n^2(3 + \frac{7}{n} + \frac{5}{n^2}) \le 5n^2$ khi $n > 7$

        Chọn $c = 5, n_0 = 7, f(n) = n^2$ thì $T(n) \le 5.f(n)$.

        Vậy $T(n) = O(n^2)$, hay Big O của đoạn mã là $O(n^2)$.

### Ý nghĩa của Big O

Khi phân tích độ phức tạp, ta thường tập trung vào trường hợp xấu nhất, là trường hợp cho thấy được *giới hạn cận trên* của thuật toán. Ký hiệu **Big O** cũng thường được sử dụng để chỉ trường hợp xấu nhất này.

Do đó, Big O được dùng để khái quát độ phức tạp của các thuật toán. Dựa vào Big O, ta có thể phân loại các thuật toán khi kích thước dữ liệu vào là như nhau. Nói cách khác,

!!! note "Ý nghĩa của Big O"
    
    Với hai thuật toán có độ phức tạp lần lượt là $O(f_1(n))$ và $O(f_2(n))$:

    Khi $n$ đủ lớn, nếu $f_1(n) < f_2(n)$ thì thuật toán có $O(f_1(n))$ nhanh hơn thuật toán có $O(f_2(n))$.

!!! question "Câu hỏi 4"

    Bảng sau đây so sánh độ phức tạp của hai thuật toán tìm kiếm tuần tự và nhị phân. Dữ liệu đầu vào là mảng gồm $n$ phần tử đã sắp xếp tăng dần.

    | Nội dung so sánh | Kích thước dữ liệu đầu vào | Tìm kiếm tuần tự | Tìm kiếm nhị phân |
    | | | ---: | ---: |
    | Số lần thực hiện phép toán tích cực | $n = 10$ |10 | 4 |
    | Số lần thực hiện phép toán tích cực | $n = 100$ | 100 | 7 |
    | | Độ phức tạp | $O(n)$ | $O(log n)$ [^2] |

    Dựa vào bảng này, bạn hãy cho biết thuật toán nào nhanh hơn?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_4" value="A">A. Tìm kiếm tuần tự<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_4" value="B">B. Tìm kiếm nhị phân<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_4', 'B', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Dễ thấy, $log n < n$ nên thuật toán tìm kiếm nhị phân nhanh hơn thuật toán tìm kiếm tuần tự.

[^2]: Trong tin học, $log n$ thường được hiểu là hàm logarit cơ số 2 của $n$. Chẳng hạn ở ví dụ 5, $log_2{100} = 7$.

### Một số Big O phổ biến

*Bảng 1. Một số Big O phổ biến và tên gọi của chúng.*

| Big O | Tên gọi về thời gian thực thi |
| --- | --- |
| $O(1)$ | Constant Time |
| $O(logn)$ | Logarithmic Time |
| $O(n)$ | Linear Time |
| $O(n logn)$ | Log Linear Time |
| $O(n^2)$ | Quadratic Time |
| $O(n^p)$ | Polynomial Time |
| $O(c^n)$ | Exponential Time |
| $O(n!)$ |	Factorial Time |

Biểu đồ dưới đây biểu diễn các Big O trên, trừ $O(n^p)$ nhằm tránh bị rối. Trong đó, các Big O được minh họa từ màu xanh, nghĩa là thuật toán *chạy nhanh*, chuyển dần cho đến màu đỏ, nghĩa là *chạy rất chậm*. Cũng xin lưu ý, biểu đồ chỉ là phác thảo mang tính minh họa, giúp người học dễ hình dung về các độ phức tạp, chứ không chính xác một cách chi tiết.

<div>
    <iframe width="100%" height="480px" frameBorder=0 src="../complexity/big-o-chart.html"></iframe>
    <p style="margin: 0"><em>Hình 1. Biểu đồ minh họa sự tương quan giữa một số Big O</em></p>
</div>

## Quy tắc xác định độ phức tạp

Việc xác định độ phức tạp của một thuật toán bất kỳ là tương đối... phức tạp (!!!). Tuy nhiên, ta có thể áp dụng những quy tắc sau đây để tính Big O.

### Quy tắc hằng số

1. Độ phức tạp của mỗi câu lệnh **gán**, **đọc** và **ghi** là $O(1)$. Đây là độ phức tạp hằng số và không phụ thuộc dữ liệu đầu vào.

    !!! question "Câu hỏi 5"

        Dòng lệnh `x = 5` có độ phức tạp là gì?

        <div>
        <form id="answer-form">
            <label for="userInput_5">Lời giải của bạn:</label><br>
            <textarea id="userInput_5" name="userInput_5" required></textarea>
            <textarea id="solution_5">O(1)</textarea><br>
            <button class="submitButton" type="button" onclick="process_answer('userInput_5', 'solution_5', 'appreciate_5')">Submit</button>
            <div id="appreciate_5"></div>
        </form>
        </div>

        ??? tip "Đáp án"

            `x = 5` là lệnh gán, độ phức tạp là $O(1)$.

2. $O(c.f(n)) = O(f(n))$, với $c$ là hằng số. Nói cách khác, ta có thể **bỏ đi hằng số** $c$.

    Hệ quả là, khi có nhiều lệnh gán, thì độ phức tạp vẫn được tính là $O(1)$.

    !!! question "Câu hỏi 6"

        Đoạn mã hoán vị hai biến `a` và `b` sau có độ phức tạp là?

        ``` py linenums="1"
        t = a
        a = b
        b = t
        ```

        <div>
        <form id="answer-form">
            <label for="userInput_6">Lời giải của bạn:</label><br>
            <textarea id="userInput_6" name="userInput_6" required></textarea>
            <textarea id="solution_6">O(1)</textarea><br>
            <button class="submitButton" type="button" onclick="process_answer('userInput_6', 'solution_6', 'appreciate_6')">Submit</button>
            <div id="appreciate_6"></div>
        </form>
        </div>

        ??? tip "Đáp án"

            Độ phức tạp của đoạn mã trên là $3.O(1) = O(1)$.

### Quy tắc cộng

1. Đối với thuật toán có một vòng lặp, độ phức tạp được tính **dựa trên số lần lặp**.  

    !!! question "Câu hỏi 7"

        Đoạn mã tính tổng từ `1` đến `n` sau có độ phức tạp là gì?

        ``` py linenums="1" hl_lines="2"
        for i in range(n):
            S = S + i
        ```

        <div>
        <form id="answer-form">
            <label for="userInput_7">Lời giải của bạn:</label><br>
            <textarea id="userInput_7" name="userInput_7" required></textarea>
            <textarea id="solution_7">O(n)</textarea><br>
            <button class="submitButton" type="button" onclick="process_answer('userInput_7', 'solution_7', 'appreciate_7')">Submit</button>
            <div id="appreciate_7"></div>
        </form>
        </div>

        ??? tip "Đáp án"

            Dòng lệnh 2 có độ phức tạp là $O(1)$ và lệnh này được thực hiện $n$ lần.
            
            Do đó, độ phức tạp là $n.O(1) = O(n)$.


2. Đối với thuật toán gồm hai đoạn mã tuần tự F~1~ và F~2~, nếu F~1~ có độ phức tạp $O(f_1(n))$ và F~2~ có độ phức tạp $O(f_2(n))$ thì độ phức tạp của cả thuật toán được xác định bằng đoạn mã có độ phức tạp lớn hơn.

    $$
    O(f_1(n)) + O(f_2(n)) = O(max(f_1(n), f_2(n)))
    $$

    Theo đó, quy tắc này còn được gọi là **quy tắc lấy max**.

    !!! question "Câu hỏi 8"

        Đoạn mã tính tổng các số chẵn và tổng các số lẻ từ 0 đến n sau có độ phức tạp là gì?

        ``` py linenums="1" hl_lines="4 7"
        n = 10
        sum_even, sum_odd = 0, 0

        for i in range(0, n, 2):      # Đoạn mã F1 gồm dòng lệnh 4 và 5
            sum_even = tong_even + i

        for i in range(1, n, 2):      # Đoạn mã F2 gồm dòng lệnh 7 và 8
            sum_odd = sum_odd  + i
        ```

        <div>
        <form id="answer-form">
            <label for="userInput_8">Lời giải của bạn:</label><br>
            <textarea id="userInput_8" name="userInput_8" required></textarea>
            <textarea id="solution_8">O(n)</textarea><br>
            <button class="submitButton" type="button" onclick="process_answer('userInput_8', 'solution_8', 'appreciate_8')">Submit</button>
            <div id="appreciate_8"></div>
        </form>
        </div>

        ??? tip "Đáp án"

            Vòng lặp F~1~ có $\frac{n}{2}$ lần lặp, nên độ phức tạp là $O(n)$. (Do hệ số $\frac{1}{2}$ trong $\frac{n}{2}$ được lược bỏ).

            Tương tự, vòng lặp F~2~ có $\frac{n}{2}$ lần lặp, nên độ phức tạp là $O(n)$.

            Thuật toán này có hai vòng lặp tuần tự F~1~ và F~2~ nên có độ phức tạp là $max(O(n), O(n)) = O(n)$.

3. Đối với cấu trúc điều kiện if có dạng

    ``` py
    if điều_kiện:
        khối_lệnh_1
    else:
        khối_lệnh_2
    ```

    vì độ phức tạp của câu lệnh kiểm tra `điều_kiện` thường là $O(1)$ nên độ phức tạp sẽ là độ phức tạp lớn nhất của `khối_lệnh_1` hoặc `khối_lệnh_2`.

    !!! question "Câu hỏi 9"

        Đoạn mã tính tổng dương và tổng âm theo điều kiện của `x` sau có độ phức tạp là gì?

        ``` py linenums="1" hl_lines="2 4"
        if x > 0:
            sum_positive = sum_positive + x
        else:
            sum_negative = sum_negative + x
        ```

        <div>
        <form id="answer-form">
            <label for="userInput_9">Lời giải của bạn:</label><br>
            <textarea id="userInput_9" name="userInput_9" required></textarea>
            <textarea id="solution_9">O(1)</textarea><br>
            <button class="submitButton" type="button" onclick="process_answer('userInput_9', 'solution_9', 'appreciate_9')">Submit</button>
            <div id="appreciate_9"></div>
        </form>
        </div>

        ??? tip "Đáp án"

            Dòng lệnh 2 và 4 đều có độ phức tạp là $O(1)$, nên độ phức tạp của thuật toán này là $O(1)$.

### Quy tắc nhân

Đối với thuật toán gồm hai cấu trúc lặp lồng nhau F~1~ và F~2~, nếu F~1~ có độ phức tạp $O(f_1(n))$ và F~2~ có độ phức tạp $O(f_2(n))$ thì độ phức tạp của thuật toán được xác định bằng độ phức tạp của tích $f_1$ và $f_2$.

$$
O(f_1(n)).O(f_2(n)) = O(f_1(n).f_2(n))
$$

!!! question "Câu hỏi 10"

    Chương trình sau in ra các số nguyên tố nhỏ hơn n. Bạn hãy cho biết độ phức tạp của chương trình này.

    ``` py linenums="1" hl_lines="2 5"
    def print_prime_numbers(n):
        for i in range(2, n):      # Vòng lặp F1
            prime = True
            
            for j in range(2, i):  # Vòng lặp F2
                if i % j == 0:
                    prime = False
            
            if prime == True:
                print(i)
    ```

    <div>
    <form id="answer-form">
        <label for="userInput_10">Lời giải của bạn:</label><br>
        <textarea id="userInput_10" name="userInput_10" required></textarea>
        <textarea id="solution_10">O(n^2)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_10', 'solution_10', 'appreciate_10')">Submit</button>
        <div id="appreciate_10"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Vòng lặp F~1~ có $n – 1$ lần lặp, nên độ phức tạp là $O(n)$.

        Vòng lặp F~2~ có $i – 1$ lần lặp, nên độ phức tạp là $O(i)$. Vì $i = 1, 2, ..., n$ nên độ phức tạp của vòng lặp F~2~ sẽ là $O(n)$.

        Thuật toán này có hai vòng lặp, trong đó F~2~ lồng trong F~1~, nên độ phức tạp là $O(n) × O(n) = O(n^2)$.

## Độ phức tạp của những thuật toán tìm kiếm và sắp xếp

!!! note "Tóm tắt trình tự xác định độ phức tạp"

    1. Xác định phép toán tích cực.  
    2. Tính số lần thực hiện phép toán tích cực.  
    3. Áp dụng các quy tắc ở mục trên để xác định độ phức tạp.  

### Thuật toán tìm kiếm tuần tự

``` py linenums="1" hl_lines="3"
def linear_search(A, k):
    for i in range(len(A)):
        if A[i] == k:
            return i
    
    return -1
```

!!! question "Câu hỏi 11"

    Bạn hãy cho biết phép toán tích cực của chương trình trên nằm ở dòng số mấy?

    <div>
    <form id="answer-form">
        <label for="userInput_11">Lời giải của bạn:</label><br>
        <textarea id="userInput_11" name="userInput_11" required></textarea>
        <textarea id="solution_11">3</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_11', 'solution_11', 'appreciate_11')">Submit</button>
        <div id="appreciate_11"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Chủ thớt không tin rằng bạn không nhìn thấy phép toán tích cực, là phép so sánh, đã được làm nổi bật sẵn, ở dòng 3.

!!! question "Câu hỏi 12"

    Dựa vào phép toán tích cực đó, bạn hãy cho biết độ phức tạp của thuật toán tìm kiếm tuần tự.

    <div>
    <form id="answer-form">
        <label for="userInput_12">Lời giải của bạn:</label><br>
        <textarea id="userInput_12" name="userInput_12" required></textarea>
        <textarea id="solution_12">O(n)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_12', 'solution_12', 'appreciate_12')">Submit</button>
        <div id="appreciate_12"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Trong trường hợp xấu nhất, phần tử có giá trị bằng `k` nằm ở vị trí cuối cùng của mảng, phép toán tích cực được thực hiện $n$ lần.

        Vậy độ phức tạp của thuật toán tìm kiếm tuần tự là $n.O(1) = O(n)$.

### Thuật toán tìm kiếm nhị phân

``` py linenums="1" hl_lines="8"
def binary_search(A, k):
    left = 0
    right = len(A) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if A[mid] == k:
            return mid
        elif A[mid] < k:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

!!! question "Câu hỏi 13"

    Bạn hãy cho biết phép toán tích cực của chương trình trên nằm ở dòng số mấy?

    <div>
    <form id="answer-form">
        <label for="userInput_13">Lời giải của bạn:</label><br>
        <textarea id="userInput_13" name="userInput_13" required></textarea>
        <textarea id="solution_13">8</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_13', 'solution_13', 'appreciate_13')">Submit</button>
        <div id="appreciate_13"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Phép toán tích cực, là phép so sánh, cũng đã được tô sẵn ở dòng 8.

!!! question "Câu hỏi 14"

    Bạn hãy đoán xem độ phức tạp của thuật toán tìm kiếm nhị phân là gì.

    <div>
    <form id="answer-form">
        <label for="userInput_14">Lời giải của bạn:</label><br>
        <textarea id="userInput_14" name="userInput_14" required></textarea>
        <textarea id="solution_14">O(logn)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_14', 'solution_14', 'appreciate_14')">Submit</button>
        <div id="appreciate_14"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Giả sử phép toán tích cực này phải được thực hiện $t$ lần thì mới tìm thấy `k`.

        - Lần 1: Số phần tử còn lại cần xét là $\frac{n}{2}=\frac{n}{2^1}$.
        - Lần 2: Số phần tử còn lại cần xét là $\frac{n}{4}=\frac{n}{2^2}$.
        - Lần 3: Số phần tử còn lại cần xét là $\frac{n}{8}=\frac{n}{2^3}$.
        - ...

        Suy ra, đối với lần $t$, số phần tử còn lại cần xét là $\frac{n}{2^t}$.

        Mà ở lần $t$, là lần tìm thấy `k`, số phần tử còn lại là $1$.

        Ta có:  
        $\frac{n}{2^t} = 1 \Rightarrow 2^t = n \Rightarrow t = log_2(n)$

        Vậy độ phức tạp của thuật toán tìm kiếm nhị phân là $O(log n)$.  

### Thuật toán sắp xếp nổi bọt

``` py linenums="1"
def bubble_sort(A):
    n = len(A)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
```

!!! question "Câu hỏi 15"

    Bạn hãy cho biết phép toán tích cực của chương trình trên nằm ở dòng số mấy?

    <div>
    <form id="answer-form">
        <label for="userInput_15">Lời giải của bạn:</label><br>
        <textarea id="userInput_15" name="userInput_15" required></textarea>
        <textarea id="solution_15">6</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_15', 'solution_15', 'appreciate_15')">Submit</button>
        <div id="appreciate_15"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Phép toán tích cực là phép so sánh ở dòng 6.

??? note "Mẹo vặt"

    Với các đoạn mã gồm nhiều vòng lặp lồng nhau, phép toán tích cực thường nằm ở vòng lặp trong cùng.

!!! question "Câu hỏi 16"

    Bạn hãy dựa vào [quy tắc nhân](#quy-tac-nhan) để tính độ phức tạp của thuật toán sắp xếp nổi bọt.

    <div>
    <form id="answer-form">
        <label for="userInput_16">Lời giải của bạn:</label><br>
        <textarea id="userInput_16" name="userInput_16" required></textarea>
        <textarea id="solution_16">O(n^2)</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_16', 'solution_16', 'appreciate_16')">Submit</button>
        <div id="appreciate_16"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Xét vòng lặp của biến `j`, trong trường hợp `i` = 0, phép so sánh sẽ được thực hiện $n – 1$ lần. Theo quy tắc hằng số, ta có thể bỏ qua $-1$. Như vậy, độ phức tạp của vòng lặp này là $O(n)$.  

        Xét vòng lặp của `i`, thân của vòng lặp này có thể được thực hiện $n$ lần.  

        Do đó, theo quy tắc nhân, độ phức tạp của thuật toán sắp xếp nổi bọt là $O(n).O(n) = O(n.n) = O(n^2)$.

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F2/algorithmic-complexity.mm.md!}
*Hình 2. Sơ đồ tóm tắt độ phức tạp thuật toán*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| độ phức tạp thuật toán | algorithmic complexity |
| độ phức tạp không gian | space complexity |
| độ phức tạp thời gian | time complexity |
| giây, milli-giây | second, millisecond |
| ký hiệu $O$ | Big O notation |
| phép toán tích cực | dominant operation |