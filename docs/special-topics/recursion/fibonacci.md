# Dãy Fibonacci

## Yêu cầu

Dãy số Fibonacci được định nghĩa như sau:  

- $F_0 = 0$
- $F_1 = 1$
- $F_n = F_{n - 1} + F_{n - 2} \text{ với } n > 1$

Viết chương trình xác định số Fibonacci thứ n.

## Input

Số nguyên dương n.

## Output

Số Fibonacci thứ n.

## Bộ test

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

## Cách giải đề xuất

1. Trường hợp cơ sở:

    Bài toán này có 2 trường hợp cơ sở:

    - `n == 0`: trả về giá trị `0`.
    - `n == 1`: trả về giá trị `1`.

2. Trường hợp đệ quy:

    Hàm đệ quy gọi lại chính nó theo công thức truy hồi $F_n = F_{n - 1} + F_{n - 2}$.
 
Như vậy, hàm `fibonacci` được viết như sau:

```py linenums="1"
def fibonacci(n):
    # Trường hợp cơ sở
    if n == 0:
        return 0
    
    if n == 1:
        return 1

    # Trường hợp đệ quy
    return fibonacci(n - 1) + fibonacci(n - 2)
```

## Mã nguồn

- Chương trình C++ hoàn chỉnh đặt tại [Gist của GitHub](https://gist.github.com/vtchitruong/c71114739d742b80c51b45081a429694){:target="_blank"}

- Chương trình Python hoàn chỉnh đặt tại [Google Colab](https://colab.research.google.com/drive/176a-A851JGV_YITz7kM-qWzTde6STgBn?usp=sharing){:target="_blank"}
