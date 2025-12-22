---
icon: material/chart-bell-curve-cumulative
---

# Quy tắc xác định độ phức tạp

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số quy tắc giúp xác định độ phức tạp của một thuật toán.

Việc xác định chính xác độ phức tạp của thuật toán đôi khi lại tương đối... phức tạp (!!!). Tuy nhiên, ta có thể áp dụng các quy tắc sau đây để xác định nhanh Big O.

## Độ phức tạp hằng số

Độ phức tạp của mỗi phép toán cơ bản trên các biến đơn (1) như:
{ .annotate }

1.  Biến đơn có thể là: số nguyên, ký tự, bool, v.v...

- so sánh: `<`, `<=`, `>`, `>=`, `==`, `!=`
- số học: `+`, `-`, `*`, `/`, `%`
- logic: `not`, `and`, `or`
- gán: `=`
- truy xuất phần tử của mảng: `A[i]`
- đọc, ghi: `input()`, `print()`

đều là $O(1)$.

Đây là độ phức tạp hằng số và không phụ thuộc dữ liệu đầu vào.

Ví dụ:  
Dòng lệnh `x = 5` có độ phức tạp là $O(1)$.

## Quy tắc lược bỏ hằng số

Trong Big O, ta không quan tâm đến các hằng số $c$, bất kể nó nằm trong hay ngoài.

- Hệ số nằm trong: $O(c \times f(n)) = O(f(n))$
- Hệ số nằm ngoài: $c \times O(f(n)) = O(f(n))$

Ví dụ:  
$O(5n^2) = O(n^2)$ (lược bỏ hệ số 5)

Ví dụ:  
Cho đoạn mã hoán vị hai biến `a` và `b` sau:

```py linenums="1"
t = a
a = b
b = t
```

Độ phức tạp của đoạn mã trên là: $O(1) + O(1) + O(1) = 3 \times O(1) = O(1)$.

## Quy tắc cộng (quy tắc lấy max)

Khi các đoạn mã được thực hiện nối tiếp nhau hoặc rẽ nhánh, độ phức tạp tổng thể sẽ được quyết định bởi **phần tốn thời gian nhất**.

### Các đoạn mã tuần tự

Cho thuật toán gồm hai đoạn mã tuần tự F~1~ và F~2~.

!!! note "Quy tắc lấy max"

    Nếu
    
    - F~1~ có độ phức tạp $O(f_1(n))$
    
    - F~2~ có độ phức tạp $O(f_2(n))$
    
    thì

    $$
    O(f_1(n)) + O(f_2(n)) = O(max(f_1(n), f_2(n)))
    $$

Ví dụ:  
Cho đoạn mã sau gồm hai giai đoạn:

- Giai đoạn 1 gồm các dòng lệnh từ 1 đến 3.
- Giai đoạn 2 gồm các dòng lệnh từ 5 đến 6. 

```py linenums="1" hl_lines="1-3 5-6"
for i in range(n):
    for j in range(n):
        print(i * j)

for k in range(n):
    print(k)
```

Giai đoạn 1 có độ phức tạp là $O(n^2)$.

Giai đoạn 2 có độ phức tập là $O(n)$.

Áp dụng quy tắc cộng, ta có độ phức tạp tổng thể là:

$O(n^2) + O(n) = O(\max(n^2, n)) = O(n^2)$ (vì $n^2$ "lấn át" $n$).

### Cấu trúc rẽ nhánh (cấu trúc điều kiện)

Cho đoạn mã có cấu trúc rẽ nhánh sau:

```py
if điều_kiện:
    khối_lệnh_1
else:
    khối_lệnh_2
```

Vì ta xét trường hợp xấu nhất nên:

!!! note "Quy tắc lấy max đối với cấu trúc rẽ nhánh"

    Độ phức tạp của cả cấu trúc là độ phức tạp lớn nhất trong hai nhánh:

    $$\max(O(\text{khối_lệnh_1}), O(\text{khối_lệnh_2}))$$

Ví dụ:  
Cho đoạn mã sau gồm hai nhánh:

- Nhánh 1 gồm dòng lệnh 2.
- Nhánh 2 gồm các dòng lệnh 4 và 5.

```py linenums="1" hl_lines="2 4-5"
if n % 2 == 0:
    print('even number')
else:
    for i in range(n):
        print(i)
```

Nhánh 1 có độ phức tạp $O(1)$.

Nhánh 2 có độ phức tạp $O(n)$.

Trong trường hợp xấu nhất, tức rơi vào `else`, độ phức tạp tổng thể là: $max(O(1), O(n)) = O(n)$.

## Quy tắc nhân

Quy tắc nhân được áp dụng chủ yếu cho các cấu trúc lặp.

### Vòng lặp đơn

!!! note "Quy tắc vòng lặp đơn"

    Độ phức tạp của vòng lặp đơn là:
    
    $$\text{Số lần lặp} \times O(\text{Thân vòng lặp})$$

    Trong đó:

    - $\text{Số lần lặp}$: thường phụ thuộc vào $n$.
    - $\text{Thân vòng lặp}$: là các lệnh bên trong.

Ví dụ:  
Cho đoạn mã sau:

```py linenums="1"
for i in range(n):      # Lặp n lần
    S = S + i           # Tốn O(1)
```

Dòng lệnh 1 cho biết số lần lặp là $n$ lần.

Dòng lệnh 2 là thân vòng lặp, có độ phức tạp $O(1)$.

Độ phức tạp tổng thể là: $n \times O(1) = O(n)$.

### Vòng lặp lồng nhau

!!! note "Quy tắc nhân"

    Độ phức tạp của hai cấu trúc lặp lồng nhau được tính bằng tích của độ phức tạp của vòng lặp ngoài và độ phức tạp của vòng lặp trong:

    $$O(f_1(n)) \times O(f_2(n)) = O(f_1(n) \times f_2(n))$$

Ví dụ:  
Chương trình sau in ra các số nguyên tố nhỏ hơn $n$.

```py linenums="1" hl_lines="2 5"
def print_prime_numbers(n):
    for i in range(2, n):      # Vòng lặp F1
        prime = True
        
        for j in range(2, i):  # Vòng lặp F2
            if i % j == 0:
                prime = False
        
        if prime == True:
            print(i)
```

Vòng lặp ngoài `for i` có số lần lặp xấp xỉ $n$ lần. Do đó, độ phức tạp là $O(n)$.

Vòng lặp trong `for j`:

- Khi $i$ nhỏ, vòng lặp chạy ít.
- Khi $i$ tiến gần đến $n$, tức trường hợp xấu nhất, vòng lặp chạy xấp xỉ $n$ lần.

Do đó, độ phức tạp là $O(n)$.

Do có hai vòng lặp lồng nhau, độ phức tạp tổng thể là: $O(n) \times O(n) = O(n^2)$

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/algorithmic-complexity-rules-for-determining.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| độ phức tạp hằng số | constant time complexity |
| quy tắc cộng | sum rule |
| quy tắc lấy max | maximum rule |
| quy tắc lược bỏ hằng số | drop constants rule |
| quy tắc nhân | product rule |