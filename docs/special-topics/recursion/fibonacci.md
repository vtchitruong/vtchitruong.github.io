# Dãy Fibonacci

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán dãy Fibonacci bằng kỹ thuật đệ quy.

## Bài toán

**Yêu cầu:**

Dãy số Fibonacci được định nghĩa như sau:  

- $F_0 = 0$
- $F_1 = 1$
- $F_n = F_{n - 1} + F_{n - 2} \text{ với } n > 1$

Viết chương trình xác định số Fibonacci thứ n.

**Đầu vào:**

Số nguyên dương n.

**Đầu ra:**

Số Fibonacci thứ n.

**Bộ kiểm thử:**

| STT | Đầu vào | Đầu ra |
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

### Ý tưởng chính

1. **Trường hợp cơ sở:**

    Bài toán này có hai trường hợp cơ sở:

    - `n == 0`: trả về giá trị `0`.
    - `n == 1`: trả về giá trị `1`.

2. **Trường hợp đệ quy:**

    Hàm đệ quy gọi lại chính nó theo công thức truy hồi $F_n = F_{n - 1} + F_{n - 2}$.

### Viết chương trình

1. Viết hàm `fibonacci` gồm có một tham số là `n`.

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

2. Viết chương trình chính.

    ```py linenums="13"
    if __name__ == '__main__':
        number = int(input('Nhập n nguyên dương: '))

        result = fibonacci(num)
        print(f'Số Fibonacci thứ {num} là {result}')
    ```

3. Chạy chương trình trên, kết quả như sau:

    ```pycon
    Nhập n nguyên dương: 10
    Fibonacci[10] = 55
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/176a-A851JGV_YITz7kM-qWzTde6STgBn?usp=sharing){target="_blank"}