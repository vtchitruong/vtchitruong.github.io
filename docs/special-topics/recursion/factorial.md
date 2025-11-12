# Giai thừa

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán giai thừa bằng kỹ thuật đệ quy.

## Bài toán

**Yêu cầu:**

Sử dụng kỹ thuật đệ quy, viết chương trình tính $n!$, biết rằng $0! = 1$ và $1! = 1$.

**Đầu vào:**

Một số nguyên dương $n$.

**Đầu ra:**

Một số nguyên là giai thừa của $n$.

**Bộ kiểm thử:**

| STT | Đầu vào | Đầu ra |
| --- | --- | --- |
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 6 | 720 |
| 4 | 21 | 51090942171709440000 |

## Cách giải đề xuất

### Ý tưởng chính

Ta có công thức truy hồi tính giai thừa như sau:

$$
n! =
\begin{cases}
    1 & \text{nếu } n = 0 \text{ hoặc } n = 1 \\
    (n - 1)! \times n & \text{nếu } n > 1 \\
\end{cases}
$$

Theo công thức trên:

1. **Trường hợp cơ sở:** `n == 0` hoặc `n == 1`.
    
    Với trường hợp này, hàm đệ quy không cần gọi đệ quy nữa, mà chỉ trả về `1`. 

2. **Trường hợp đệ quy:** các giá trị $n$ còn lại. Giả sử không nhập `n` nguyên âm.

    Với trường hợp này, hàm đệ quy sẽ gọi lại chính nó, tham số truyền vào là `n - 1` để tính $(n - 1)!$, rồi nhân thêm $n$.

    Ví dụ:  
    Để tính $5!$, hàm đệ quy sẽ gọi lại chính nó để tính $(5 - 1)! = 4!$, rồi nhân thêm $5$.  

    Cụ thể:

    - Hàm `factorial(5)` sẽ gọi đệ quy `factorial(4)`.
    - Hàm `factorial(4)` sẽ gọi đệ quy `factorial(3)`.
    - Hàm `factorial(3)` sẽ gọi đệ quy `factorial(2)`.
    - Hàm `factorial(2)` sẽ gọi đệ quy `factorial(1)`.
    - Hàm `factorial(1)` không gọi đệ quy nữa, mà sẽ trả về `1`.

### Viết chương trình

1. Viết hàm `factorial()` gồm có một tham số là `n`.

    ```py linenums="1"
    def factorial(n):
        # Trường hợp cơ sở
        if n == 0 or n == 1:
            return 1

        # Trường hợp đệ quy
        return factorial(n - 1) * n
    ```

2. Viết chương trình chính.

    ```py linenums="10"
    if __name__ == '__main__':
        number = int(input('Nhập n nguyên dương: '))

        result = factorial(number)
        print(f'{number}! = {result}')
    ```

3. Chạy chương trình trên, kết quả như sau:

    ```pycon
    Nhập n nguyên dương: 6
    6! = 720
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/14yRy1G-tFj5Fov1NgeT8_V8qtWGDPeaQ?usp=sharing){target="_blank"}
