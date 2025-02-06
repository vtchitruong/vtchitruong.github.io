# Giai thừa

## Yêu cầu

Sử dụng kỹ thuật đệ quy, viết chương trình tính $n!$, biết rằng $0! = 1$ và $1! = 1$.

## Input

Số nguyên dương n.

## Output

Giai thừa của n.

## Bộ test

| STT | Input | Output |
| --- | --- | --- |
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 5 | 120 |
| 4 | 21 | 51090942171709440000 |

## Cách giải đề xuất

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

```py linenums="1"
def factorial(n):
    # Trường hợp cơ sở
    if n == 0 or n == 1:
        return 1

    # Trường hợp đệ quy
    return factorial(n - 1) * n
```

## Mã nguồn

- Chương trình C++ hoàn chỉnh đặt tại [Gist của GitHub](https://gist.github.com/vtchitruong/100ceaaf9b4f6742d583866950c2628d){:target="_blank"}

- Chương trình Python hoàn chỉnh đặt tại [Google Colab](https://colab.research.google.com/drive/14yRy1G-tFj5Fov1NgeT8_V8qtWGDPeaQ?usp=sharing){:target="_blank"}
