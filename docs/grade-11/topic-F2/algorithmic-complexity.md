# Độ phức tạp thuật toán

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm liên quan đến độ phức tạp của thuật toán, trong đó có:
    
    - Giải thích ý nghĩa của Big O.
    - Một số kỹ thuật xác định nhanh độ phức tạp của một thuật toán.

## Đặt vấn đề

Giả sử mảng gồm 100 phần tử đã sắp xếp tăng dần. Khi cần kiểm tra xem một giá trị nào đó có xuất hiện trong mảng hay không, thì ta nên sử dụng thuật toán *tìm kiếm tuần tự* hay *tìm kiếm nhị phân*? Căn cứ vào đâu mà ta cho rằng thuật toán này nhanh hơn thuật toán kia?

Một cách khái quát, khi nhiều thuật toán giải quyết cùng một bài toán, thì thuật toán nào *tốt hơn*?  

## Khái niệm

Ta luôn muốn có được những thuật toán *tốt* theo nghĩa chạy nhanh và chiếm ít bộ nhớ. Đây là cơ sở dẫn đến các khái niệm về độ phức tạp của thuật toán.  

!!! note "Độ phức tạp thuật toán"  
    Độ phức tạp thuật toán là *cách thức đánh giá thuật toán* dựa trên lượng tài nguyên cần có để thực hiện thuật toán.
    
Theo đó, độ phức tạp thuật toán được phân thành hai loại: **độ phức tạp không gian** và **độ phức tạp thời gian**, ứng với hai dạng tài nguyên chính là bộ nhớ và thời gian.  

- Độ phức tạp không gian: xác định dung lượng bộ nhớ cần thiết để thực hiện thuật toán dựa trên kích thước dữ liệu đầu vào.  
- Độ phức tạp thời gian: xác định thời gian thực hiện thuật toán dựa trên kích thước dữ liệu đầu vào.  

Cũng có tài liệu nêu rằng, độ phức tạp của thuật toán là **độ đo** đánh giá hiệu quả của thuật toán, chứ không phải **cách thức đo**.  

Với sự phát triển của phần cứng ngày nay, các máy tính thường có đủ bộ nhớ để chạy chương trình. Do đó, độ phức tạp không gian có thể ít được đề cập hơn so với độ phức tạp thời gian. Và bài này chỉ trình bày về độ phức tạp thời gian của thuật toán, từ nay gọi tắt là *độ phức tạp thuật toán*.  

## Ý tưởng xác định độ phức tạp

Thời gian để thực hiện một chương trình được tính theo đơn vị giây (hoặc milli-giây), phụ thuộc vào nhiều yếu tố khác nhau như ngôn ngữ lập trình, trình biên dịch, hệ điều hành, tốc độ CPU, v.v... Vì thế, khi đánh giá thuật toán của chương trình, ta không dựa vào thời gian thực, mà cần một đơn vị tính khác, độc lập với những yếu tố trên. Cụ thể hơn, thuật toán cần được đánh giá trên cơ sở là bản thân thuật toán và dữ liệu đầu vào.  

!!! note "Ý tưởng xác định độ phức tạp"
    Độ phức tạp phải được tính dựa trên sự tương quan giữa **số lượng phép toán** và **kích thước của dữ liệu đầu vào**.
    
Theo ý tưởng này, độ phức tạp thời gian được xác định bằng cách ước lượng số phép toán tích cực cần thực hiện.  

!!! note "Phép toán tích cực"
    **Phép toán tích cực** là phép toán được thực hiện ***thường xuyên nhất*** trong thuật toán.  

:   Ví dụ 1:
    ``` py linenums="1" hl_lines="2"
    for i in range(n):
        if i % 2 == 0:
            S = S + i
        else:
            P = P * i
    ```

Ta thấy *phép toán so sánh bằng ==* luôn được thực hiện dù `i` chẵn hay lẻ, trong khi phép
gán cho biến `S` (dòng lệnh 3) chỉ thực hiện khi `i` chẵn và phép gán cho biến `P` (dòng lệnh 5)
chỉ thực hiện khi `i` lẻ. Như vậy, phép toán tích cực trong vòng lặp trên là phép toán so
sánh.  

Phép toán tích cực bao gồm các phép toán sau: phép so sánh, phép gán, các phép toán số học, v.v...  

## Big O

### Ký hiệu Big O

Có ba loại trường hợp khác nhau khi thực hiện thuật toán, đó là: trường hợp tốt nhất, trường hợp trung bình và trường hợp xấu nhất[^1]. Ứng với mỗi trường hợp, người ta sử dụng một ký hiệu để thể hiện độ phức tạp. Trong đó, ký hiệu $O$, đọc là **Big-Oh**, được xem là phổ biến nhất. Cụ thể như sau:  

[^1]:
    Trường hợp tốt nhất: tạm hiểu là thuật toán hoàn tất nhiệm vụ trong thời gian ngắn nhất có thể.  
    Trường hợp trung bình: tạm hiểu là khả năng thực hiện trung bình của thuật toán đối với một lượng lớn dữ liệu đầu vào.  
    Trường hợp xấu nhất: là trường hợp mà số lần thực hiện phép toán tích cực nhiều nhất.  

!!! note "Ký hiệu Big O"
    Độ phức tạp thời gian của thuật toán được ký hiệu là $O(g(n))$. Trong đó, $g(n)$ là một hàm số theo $n$, với $n$ là kích thước của dữ liệu đầu vào.

### Cách xác định Big O

Gọi $p$ là thời gian thực hiện một phép toán tích cực,  
&emsp;&emsp;$n$ là kích thước của dữ liệu đầu vào,  
&emsp;&emsp;$c(n)$ là hàm số theo $n$ cho biết số lần thực hiện phép toán tích cực,  

thì thời gian thực hiện thuật toán được định nghĩa là:  

$$
T(n) = p . c(n)
$$

:   Ví dụ 2:  
    Áp dụng cho đoạn mã ở ví dụ 1:  
    &emsp;&emsp;Giả sử, mỗi phép toán tích cực được thực hiện trong một đơn vị thời gian, nghĩa là $p = 1$.  
    &emsp;&emsp;Phép toán tích cực được thực hiện $c(n) = n$ lần.  

    Như vậy, thời gian thực hiện đoạn mã là $T(n) = p . c(n) = 1 . n = n$  

:   Ví dụ 3:  
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
    Xét hàm $f(n)$ không âm với mọi số nguyên $n \ge 0$.  
    Ta nói rằng “**f(n) là Big-Oh g(n)**”, viết là $f(n) = O(g(n))$, nếu tồn tại một số nguyên $n_0$ và một hằng số $c > 0$ sao cho với mọi số nguyên $n \ge n_0$ thì $f(n) \le c.g(n)$.

:   Theo đó, Big O của các đoạn mã trên như sau:  

    &emsp;&emsp;Trong ví dụ 2, vì $T(n) = n$ nên $f(n) = O(n)$  

    &emsp;&emsp;Trong ví dụ 3, vì $T(n) = n^2$ nên $f(n) = O(n^2)$  

:   Ví dụ 4:  
    Giả sử một đoạn mã có thời gian thực hiện là: $T(n) = 3n^2 + 7n + 5$  
    Với $T(n)$ như vậy thì $f(n) = O(n^2)$

??? note "Giải thích"
    Ta có:  
    $3n^2 + 7n + 5 = n^2(3 + \frac{7}{n} + \frac{5}{n^2}) \le 5n^2$ khi $n > 7$  

    Chọn $c = 5, n_0 = 7, g(n) = n^2$ thì $T(n) \le 5.g(n)$.  
    Vậy $f(n) = O(n^2)$

### Ý nghĩa của Big O

Khi phân tích độ phức tạp, người ta thường tập trung vào trường hợp xấu nhất, vì nó cho thấy được *giới hạn cận trên* của thuật toán. Và ký hiệu **Big O** cũng thường được sử dụng để chỉ trường hợp xấu nhất này.  

Do đó, Big O được dùng để khái quát độ phức tạp của các thuật toán. Dựa vào Big O, các thuật toán được phân loại khi chúng có cùng kích thước dữ liệu vào. Nói cách khác:   

!!! note "Ý nghĩa của Big O"
    Với hai thuật toán có độ phức tạp lần lượt là $O(f(n))$ và $O(g(n))$:  
        Khi $n$ đủ lớn, nếu $f(n) < g(n)$ thì thuật toán có $O(f(n))$ nhanh hơn thuật toán có $O(g(n))$.  

:   Ví dụ 5:  
    Bảng sau đây so sánh độ phức tạp của hai thuật toán tìm kiếm tuần tự và nhị phân. Dữ liệu đầu vào là mảng gồm $n$ phần tử đã sắp xếp tăng dần.  

    | Kích thước dữ liệu đầu vào | Nội dung so sánh | Tìm kiếm tuần tự | Tìm kiếm nhị phân |
    | | | ---: | ---: |
    | $n = 10$  | Số lần thực hiện phép toán tích cực | 10 | 4 |
    | $n = 100$  | Số lần thực hiện phép toán tích cực | 100 | 7 |
    | | Độ phức tạp | $O(n)$ | $O(log n)$ [^2] |

    Vì $log n < n$ nên thuật toán tìm kiếm nhị phân nhanh hơn thuật toán tìm kiếm tuần tự.  

[^2]: Trong tin học, $log n$ thường được hiểu là hàm logarit cơ số 2 của $n$. Chẳng hạn ở ví dụ 5, $log_2{100} = 7$.

### Một số Big O phổ biến

Bảng sau liệt kê một số Big O phổ biến và tên gọi của chúng.  

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

Biểu đồ dưới đây biểu diễn các Big O trên, trừ $O(n^p)$ nhằm tránh bị rối. Trong đó, các Big O được minh họa từ màu xanh, mang ý nghĩa là thuật toán *chạy nhanh*, chuyển dần cho đến màu đỏ, mang ý nghĩa là *chạy rất chậm*. Cũng xin lưu ý, biểu đồ chỉ mang tính minh họa, giúp người học dễ hình dung về các độ phức tạp, chứ không chính xác về mặt toán học.  

<div>
    <iframe width="100%" height="480px" frameBorder=0 src="../complexity/big-o-chart.html"></iframe>
    <p style="margin: 0">Hình 1. Biểu đồ minh họa sự tương quan giữa một số Big O</p>
</div>

## Một số quy tắc xác định độ phức tạp

Việc xác định độ phức tạp của một thuật toán bất kỳ là tương đối... phức tạp (!!!). Tuy nhiên, ta có thể áp dụng những quy tắc sau đây để tính Big O.  

### Quy tắc hằng số

1. Độ phức tạp của mỗi câu lệnh gán, đọc và ghi là $O(1)$. Đây là độ phức tạp hằng số và không phụ thuộc dữ liệu đầu vào.  

    :   Ví dụ 6:  
        `x = 5` có độ phức tạp là $O(1)$.  
        `print(x)` có độ phức tạp là $O(1)$.  

2. $O(C.f(n)) = O(f(n))$, với $C$ là hằng số. Nói cách khác, ta có thể bỏ đi hằng số $C$.  

    Như vậy, khi có nhiều lệnh gán, thì độ phức tạp vẫn được tính là $O(1)$.  

    :   Ví dụ 7:  
        Đoạn mã hoán vị hai biến `a` và `b` sau có độ phức tạp là $O(1)$.

        ``` py linenums="1"
        t = a
        a = b
        b = t
        ```

### Quy tắc cộng

1. Đối với thuật toán có một vòng lặp, độ phức tạp được tính dựa trên số lần lặp.  

:   Ví dụ 8:  
    Đoạn mã sau tính tổng từ 1 đến n, với n nguyên dương.

    ``` py linenums="1" hl_lines="2"
    for i in range(n):
        S = S + i
    ```    
    Dòng lệnh 2 có độ phức tạp là $O(1)$ và lệnh này được thực hiện $n$ lần.  
    Do đó, độ phức tạp là $n.O(1) = O(n)$.

2. Đối với thuật toán gồm hai đoạn mã tuần tự nhau F và G, nếu F có độ phức tạp $O(f(n))$ và G có độ phức tạp $O(g(n))$ thì độ phức tạp của cả thuật toán được xác định bằng đoạn mã có độ phức tạp lớn hơn.  

    $$
    O(f(n)) + O(g(n)) = O(max(f(n), g(n)))
    $$

    Theo đó, quy tắc này còn được gọi là **quy tắc lấy max**.

:   Ví dụ 9:  
    Đoạn mã sau tính tổng các số chẵn và tổng các số lẻ trong đoạn từ 0 đến n, với n nguyên dương.

    ``` py linenums="1" hl_lines="4 6"
    n = 10
    sum_even, sum_odd = 0, 0
    for i in range(0, n, 2): # Đoạn mã F gồm dòng lệnh 3 và 4
        sum_even = tong_even + i
    for i in range(1, n, 2): # Đoạn mã G gồm dòng lệnh 5 và 6
        sum_odd = sum_odd  + i
    ```

    Vòng lặp F có $\frac{n}{2}$ lần lặp, nên độ phức tạp là $O(n)$ (Do hệ số $\frac{1}{2}$ trong $\frac{n}{2}$ được lược bỏ).  

    Tương tự, vòng lặp G có $\frac{n}{2}$ lần lặp, nên độ phức tạp là $O(n)$.  

    Thuật toán này có 2 vòng lặp tuần tự F và G nên có độ phức tạp là $max(O(n), O(n)) = O(n)$.

3. Đối với cấu trúc điều kiện if có dạng

    ``` py
    if điều_kiện:
        khối_lệnh_1
    else:
        khối_lệnh_2
    ```

    vì độ phức tạp của câu lệnh kiểm tra `điều_kiện` thường là $O(1)$ nên độ phức tạp sẽ là độ phức tạp lớn nhất của khối_lệnh_1` hoặc `khối_lệnh_2`.  

:   Ví dụ 10:  
    Đoạn mã sau tính tổng dương và tổng âm theo điều kiện của `x`.  

    ``` py linenums="1" hl_lines="2 4"
    if x > 0:
        sum_positive = sum_positive + x
    else:
        sum_negative = sum_negative + x
    ```
    
    Dòng lệnh 2 và 4 đều có độ phức tạp là $O(1)$, nên độ phức tạp của thuật toán này là $O(1)$.

### Quy tắc nhân

Đối với thuật toán gồm hai cấu trúc lặp lồng nhau F và G, nếu F có độ phức tạp $O(f(n))$ và G có độ phức tạp $O(g(n))$ thì độ phức tạp của thuật toán được xác định bằng độ phức tạp của tích $f(n).g(n)$.  

$$
O(f(n)).O(g(n)) = O(f(n).g(n))
$$

:   Ví dụ 11:  
    Thuật toán sau in ra các số nguyên tố nhỏ hơn n, với n nguyên dương.  

    ``` py linenums="1" hl_lines="3 7"
    def print_prime_numbers(n):
        # Duyệt các số i từ 2 đến trước n
        for i in range(2, n): # Vòng lặp F
            prime = True
            
            # Xét xem i có chia hết cho số j nào hay không
            for j in range(2, i): # Vòng lặp G
                if i % j == 0:
                    prime = False
            
            if prime == True:
                print(i)
    ```

    Vòng lặp F có $n – 1$ lần lặp, nên độ phức tạp là $O(n)$.  

    Vòng lặp G có $i – 1$ lần lặp, nên độ phức tạp là $O(i)$.  Vì $i = 1, 2,... , n$ nên độ phức tạp
    của vòng lặp G sẽ là $O(n)$.  

    Thuật toán này có 2 vòng lặp, trong đó G lồng trong F, nên độ phức tạp là $O(n) × O(n) = O(n^2)$.

## Độ phức tạp của những thuật toán tìm kiếm và sắp xếp

### Thuật toán tìm kiếm tuần tự

``` py linenums="1" hl_lines="3"
def linear_search(A, key):
    for i in range(len(A)): 
        if A[i] == key:
            return i
    
    return -1
```

Phép toán tích cực trong đoạn mã trên là phép so sánh ở dòng lệnh 3. Trong trường
hợp xấu nhất, phần tử có giá trị bằng `k` nằm ở vị trí cuối cùng của mảng, phép toán này
được thực hiện $n$ lần.  

Vậy độ phức tạp của thuật toán tìm kiếm tuần tự là $n.O(1) = O(n)$.

### Thuật toán tìm kiếm nhị phân

``` py linenums="1" hl_lines="8"
def binary_search(A, key):
    left = 0
    right = len(A) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if A[mid] == key:
            return mid
        elif A[mid] < key:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

Phép toán tích cực trong đoạn mã trên là phép so sánh ở dòng lệnh 8.  

Giả sử phép toán tích cực này phải được thực hiện $t$ lần thì mới tìm thấy `k`.  

Lần 1: Số phần tử còn lại cần xét là $\frac{n}{2}=\frac{n}{2^1}$  

Lần 1: Số phần tử còn lại cần xét là $\frac{n}{4}=\frac{n}{2^2}$  

Lần 1: Số phần tử còn lại cần xét là $\frac{n}{8}=\frac{n}{2^3}$  

...

Suy ra, đối với lần $t$: Số phần tử còn lại cần xét là $\frac{n}{2^t}$  

Mà ở lần $t$, là lần tìm thấy `k`, thuật toán dừng, số phần tử còn lại là 1.

Ta có:  
$\frac{n}{2^t} = 1 \Rightarrow 2^t = n \Rightarrow t = log_2(n)$

Vậy độ phức tạp của thuật toán tìm kiếm nhị phân là $O(log n)$.  

### Thuật toán sắp xếp nổi bọt

``` py linenums="1" hl_lines="6"
def bubble_sort(A):
    n = len(A)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
```

Phép toán tích cực trong đoạn mã trên là phép so sánh ở dòng lệnh 6.  

Xét vòng lặp của biến `j`, trong trường hợp `i` = 0, phép so sánh sẽ được thực hiện $n – 1$ lần. Theo quy tắc hằng số, ta có thể bỏ qua $-1$. Như vậy, độ phức tạp của vòng lặp này là $O(n)$.  

Xét vòng lặp của `i`, thân của vòng lặp này có thể được thực hiện $n$ lần.  

Do đó, theo quy tắc nhân, độ phức tạp của thuật toán sắp xếp nổi bọt là $O(n).O(n) = O(n.n) = O(n^2)$.

??? note "Mẹo vặt"
    Với các đoạn mã gồm nhiều vòng lặp lồng nhau, phép toán tích cực thường nằm ở vòng lặp trong cùng.

!!! note "Tóm tắt trình tự xác định độ phức tạp"
    1. Xác định phép toán tích cực.  
    2. Tính số lần thực hiện phép toán tích cực.  
    3. Áp dụng các quy tắc ở mục trên để xác định độ phức tạp.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| độ phức tạp thuật toán | algorithmic complexity |
| độ phức tạp không gian | space complexity |
| độ phức tạp thời gian | time complexity |
| ký hiệu $O$ | Big O notation |
| phép toán tích cực | basic operation, elementary operation |