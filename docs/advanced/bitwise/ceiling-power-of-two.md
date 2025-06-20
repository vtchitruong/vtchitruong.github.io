---
tags:
    - bitwise
    - Phép dịch phải
    - OR
    - Luỹ thừa của 2
---

# Luỹ thừa của 2 gần nhất

## Đề bài

**Yêu cầu**: tìm số là luỹ thừa của 2 nhỏ nhất mà lớn hơn hoặc bằng n.

**Input** số nguyên dương n.

**Output**: số x sao cho x là lũy thừa của 2 và lớn hơn hoặc bằng n.

**Ví dụ:**

| Input | Output |
| --- | --- |
| n = 16 | 16 |
| n = 20 | 32 |
| n = 21 | 32 |

## Bài giải đề xuất

### Ý tưởng chính

Một số nguyên dương `x` là luỹ thừa của 2 có dạng nhị phân là: `...1000...0`, tức bit tại vị trí `p` là `1`, các bit còn lại bên phải đều là `0`.

Số nguyên liền trước `x` có dạng nhị phân là: `...0111..1`, tức bit tại vị trí `p` là `0`, các bit còn lại bên phải đều là `1`.

Để tìm được số nguyên liền trước `x`, ta sẽ sử dụng kỹ thuật (tạm gọi) là **lấp đầy bit** hoặc **lan truyền bit**, có thể được viết minh hoạ là: `n |= n >> 1` hoặc `n = n | (n >> 1)`.

Cách làm cụ thể như sau:

**Bước 1:** trừ `1` khỏi `n`

Bằng cách trừ `n` đi `1`, ta đưa bài toán về **tìm số luỹ thừa của 2 nhỏ nhất mà lớn hơn hẳn `n - 1`**.

Ví dụ:

Nếu `n = 8`, ta trừ 1 để `n` thành 7. Mục tiêu là tìm số luỹ thừa của 2 nhỏ nhất mà lớn hơn `7`, tức tìm `8`.

Nếu `n = 7`, ta trừ 1 để `n` thành 6. Mục tiêu là tìm số luỹ thừa của 2 nhỏ nhất mà lớn hơn `6`, tức tìm `8`.

**Bước 2:** dịch phải `k` bit và phép toán `OR`

Thao tác này nhằm làm cho các bit từ vị trí `p` xuống đến vị trí `0` đều trở thành bit `1`.

Ví dụ:

Với `n = 7`, sau khi trừ `1`, `n = 6`.

`n |= n >> 1 => 00000110 | 00000011 = 00000111` (bằng 7)

`n |= n >> 2 => 00000111 | 00000001 = 00000111` (bằng 7)

`n |= n >> 4 => 00000111 | 00000000 = 00000111` (bằng 7)

`n |= n >> 8: ...`

Kết quả cuối cùng là `00000111`, tức bằng `7`.

**Bước 3:** cộng `1` vào `n`

Sau khi n có dạng `0...00111...1`, ta cộng thêm `1` để làm cho các bit `1` trở thành bit `0` và bit ngay bên trái của chúng đang từ `0` trở thành `1`. Đây chính là số luỹ thừa của 2 cần tìm.

Ví dụ:

`00000111` (bằng `7`) + `1` = `00001000` (bằng `8`).

### Viết chương trình


=== "C++"

    ```c++ linenums="8"
    ui ceiling_power_of_two(ui n)
    {
        if (n == 0) return 1;

        n--;
        
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        
        n++;

        return n;
    }
    ```
=== "Python"

    ```py linenums="1"
    def ceiling_power_of_two(n):
        if n == 0:
            return 1

        n -= 1
        
        n |= n >> 1
        n |= n >> 2
        n |= n >> 4
        n |= n >> 8
        n |= n >> 16
        
        n += 1

        return n
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/bitwise/ceiling_power_of_two){:target="_blank"}.
