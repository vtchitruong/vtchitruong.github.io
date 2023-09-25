# Đệ quy

## Khái niệm

Nhiều bài toán thực tế có thể được phân tách thành những bài toán con tương tự nhưng có kích thước nhỏ hơn.

Tận dung đặc điểm này, kỹ thuật đệ quy có thể giúp giải quyết bài toán ban đầu bằng cách giải quyết những bài toán con, rồi sau đó kết hợp các lời giải lại.

Bởi vì, **đệ quy** là một kỹ thuật lập trình mà trong đó, một hàm gọi lại chính nó để giải quyết bài toán ban đầu.

## Cấu trúc chung của hàm đệ quy

Trong một hàm đệ quy, ta cần xác định hai trường hợp sau:

1. **Trường hợp cơ sở**

    Trường hợp này là một bài toán con mà có thể giải quyết dễ dàng, không cần đến đệ quy, và quá trình đệ quy trước đó sẽ dừng lại.  
    Nói cách khác, nếu không chỉ ra trường hợp cơ sở, thì quá trình đệ quy sẽ tiếp tục đến vô tận, gây tràn bộ nhớ và bài toán ban đầu không được giải quyết.

2. **Trường hợp đệ quy**

    Trong trường hợp này, ta chỉ ra cách thức mà hàm đệ quy gọi lại chính nó, với tham số truyền vào tương ứng với kích thước nhỏ hơn của bài toán.  
    Như vậy, mỗi lần gọi đệ quy sẽ giúp tiến gần hơn đến trường hợp cơ sở, và việc gọi đệ quy sẽ kết thúc khi đạt đến trường hợp cơ sở.

## Bài toán ví dụ 1

### Yêu cầu

Viết chương trình tính $n!$, biết rằng $0! = 1$ và $1! = 1$.

### Bộ test

| STT | Input | Output |
| --- | --- | --- |
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 5 | 120 |
| 4 | 21 | 51090942171709440000 |

### Cách giải đề xuất bằng đệ quy

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

    Với trường hợp này, hàm đệ quy sẽ gọi lại chính nó, với tham số truyền vào là `n - 1` để tính $(n - 1)!$, rồi nhân thêm $n$.

    Ví dụ:  
    Để tính $5!$, hàm đệ quy sẽ gọi lại chính nó để tính $(5 - 1)! = 4!$, rồi nhân thêm $5$.  

Phân tích cụ thể như sau:

- Hàm `factorial(5)` sẽ gọi đệ quy hàm `factorial(4)`.
- Hàm `factorial(4)` sẽ gọi đệ quy hàm `factorial(3)`.
- Hàm `factorial(3)` sẽ gọi đệ quy hàm `factorial(2)`.
- Hàm `factorial(2)` sẽ gọi đệ quy hàm `factorial(1)`.
- Hàm `factorial(1)` không gọi đệ quy nữa, mà sẽ trả về giá trị là 1.


Hàm `factorial` được viết như sau:

``` py linenums="1"
def factorial(n):
    # Trường hợp cơ sở
    if n == 0 or n == 1:
        return 1

    # Trường hợp đệ quy
    return factorial(n - 1) * n
```

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |