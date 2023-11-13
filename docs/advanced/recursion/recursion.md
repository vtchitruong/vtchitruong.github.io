# Khái quát về đệ quy

## Khái niệm

Có những bài toán có thể được phân tách thành những bài toán con tương tự nhưng có kích thước nhỏ hơn.

Tận dung đặc điểm này, kỹ thuật đệ quy có thể giúp giải quyết bài toán ban đầu bằng cách giải quyết những bài toán con, rồi sau đó kết hợp các lời giải lại.

Bởi vì, **đệ quy** là một kỹ thuật lập trình mà trong đó, một hàm gọi lại chính nó để giải quyết bài toán ban đầu.

## Cấu trúc chung của hàm đệ quy

Trong một hàm đệ quy, ta cần xác định hai loại trường hợp sau:

1. **Trường hợp cơ sở**

    Loại trường hợp này là một bài toán con mà có thể giải quyết dễ dàng, không cần đến đệ quy. Và tại trường hợp này, quá trình đệ quy trước đó sẽ dừng lại.  
    
    Nói cách khác, nếu không chỉ ra trường hợp cơ sở, thì quá trình đệ quy sẽ tiếp tục đến vô tận, gây tràn bộ nhớ khiến bài toán ban đầu không giải quyết được.

2. **Trường hợp đệ quy**

    Với loại trường hợp này, ta chỉ ra cách thức mà hàm đệ quy gọi lại chính nó, với tham số truyền vào tương ứng với kích thước nhỏ hơn của bài toán. Cụ thể hơn, ta thường dựa vào công thức truy hồi để gọi đệ quy.

    Như vậy, mỗi lần gọi đệ quy sẽ giúp tiến gần hơn đến trường hợp cơ sở, và việc gọi đệ quy sẽ kết thúc khi đạt đến trường hợp cơ sở.

## Bài toán ví dụ 1

### Yêu cầu

Viết chương trình tính $n!$, biết rằng $0! = 1$ và $1! = 1$.

### Input

Số nguyên dương n.

### Output

Giai thừa của n.

### Bộ test

| STT | Input | Output |
| --- | --- | --- |
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 5 | 120 |
| 4 | 21 | 51090942171709440000 |

### Cách giải đề xuất

Ta có công thức truy hồi tính giai thừa như sau:

$$
n! =
\begin{cases}
    1 & \text{nếu } n = 0 \text{ hoặc } n = 1 \\
    (n - 1)! \times n & \text{nếu } n > 1 \\
\end{cases}
$$

Theo công thức trên:

1. Trường hợp cơ sở là `n == 0` hoặc `n == 1`.
    
    Với trường hợp này, hàm đệ quy không cần gọi đệ quy nữa, mà chỉ trả về giá trị là `1`. 

2. Trường hợp đệ quy là các giá trị $n$ còn lại. (Giả sử ta không nhập `n` nguyên âm).

    Với trường hợp này, hàm đệ quy sẽ gọi lại chính nó, tham số truyền vào là `n - 1` để tính $(n - 1)!$, rồi nhân thêm $n$.

    Ví dụ:  
    Để tính $5!$, hàm đệ quy sẽ gọi lại chính nó để tính $(5 - 1)! = 4!$, rồi nhân thêm $5$.  

    Phân tích cụ thể:

    - Hàm `factorial(5)` sẽ gọi đệ quy hàm `factorial(4)`.
    - Hàm `factorial(4)` sẽ gọi đệ quy hàm `factorial(3)`.
    - Hàm `factorial(3)` sẽ gọi đệ quy hàm `factorial(2)`.
    - Hàm `factorial(2)` sẽ gọi đệ quy hàm `factorial(1)`.
    - Hàm `factorial(1)` không gọi đệ quy nữa, mà sẽ trả về giá trị là 1.

Như vậy, hàm `factorial` được viết như sau:

``` py linenums="1"
def factorial(n):
    # Trường hợp cơ sở
    if n == 0 or n == 1:
        return 1

    # Trường hợp đệ quy
    return factorial(n - 1) * n
```

## Bài toán ví dụ 2

### Yêu cầu

Dãy số Fibonacci được định nghĩa như sau:  

- $F_0 = 0$
- $F_1 = 1$
- $F_n = F_{n - 1} + F_{n - 2} \text{ với } n > 1$

Viết chương trình xác định số Fibonacci thứ n.

### Input

Số nguyên dương n.

### Output

Số Fibonacci thứ n.

### Bộ test

| STT | Input | Output |
| --- | --- | --- |
| 1 | 0 | 0 |
| 2 | 1 | 1 |
| 3 | 2 | 1 |
| 4 | 3 | 2 | 
| 5 | 4 | 3 |
| 6 | 5 | 5 |
| 7 | 10 | 55 |
| 8 | 30 | 832040 |

### Cách giải đề xuất

1. Trường hợp cơ sở:

    Bài toán này có 2 trường hợp cơ sở:

    - `n == 0`: trả về giá trị `0`.
    - `n == 1`: trả về giá trị `1`.

2. Trường hợp đệ quy:

    Hàm đệ quy gọi lại chính nó theo công thức truy hồi $F_n = F_{n - 1} + F_{n - 2}$.
 
Như vậy, hàm `fibonacci` được viết như sau:

``` py linenums="1"
def fibonacci(n):
    # Trường hợp cơ sở
    if n == 0:
        return 0
    
    if n == 1:
        return 1

    # Trường hợp đệ quy
    return fibonacci(n - 1) + fibonacci(n - 2)
```

## Toàn bộ chương trình

=== "C++"

    Chương trình C++ hoàn chỉnh của các bài toán ví dụ đặt tại Gist của GitHub:

    - [Bài toán ví dụ 1](https://gist.github.com/vtchitruong/100ceaaf9b4f6742d583866950c2628d){:target="_blank"}
    - [Bài toán ví dụ 2](https://gist.github.com/vtchitruong/c71114739d742b80c51b45081a429694){:target="_blank"}

=== "Python"

    Chương trình Python hoàn chỉnh của các bài toán ví dụ đặt tại <a href="https://colab.research.google.com/drive/14yRy1G-tFj5Fov1NgeT8_V8qtWGDPeaQ?usp=sharing" target="_blank">Google Colab</a>. 

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |