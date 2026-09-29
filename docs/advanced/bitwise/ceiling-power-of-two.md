---
tags:
    - bitwise
    - dịch phải
    - toán tử or
    - lũy thừa của 2
level: "nâng cao"
level_url: "/advanced/advanced-index/"

difficulty: "easy"
updated: "28/09/2026"
---

# Lũy thừa của 2 gần nhất

## Đề bài

**Yêu cầu**:  
Tìm số là lũy thừa của 2 nhỏ nhất mà lớn hơn hoặc bằng `n`.

**Input**  
Số nguyên dương `n`.

**Output**:  
Số `x` là lũy thừa của 2 và lớn hơn hoặc bằng `n`.

**Ví dụ:**

| Input | Output |
| --- | --- |
| n = 7 | 8 |
| n = 16 | 16 |
| n = 20 | 32 |
| n = 21 | 32 |

---

## Bài giải đề xuất

### Ý tưởng chính

Gọi `x` là số cần tìm.

`x` phải là lũy thừa của 2 nên `x` có dạng nhị phân: `...1000...0`, tức bit tại vị trí `p` là `1`, các bit còn lại bên phải đều là `0`.

`x - 1` là số nguyên liền trước `x`, có dạng nhị phân là: `...0111..1`, tức bit tại vị trí `p` là `0`, các bit còn lại bên phải đều là `1`.

Ta có thể tìm `x - 1` trước, rồi cộng thêm 1 để ra được `x`.

Để tìm được số `x - 1`, ta dùng kỹ thuật **lấp đầy bit** hoặc **lan truyền bit**, có thể được viết minh họa là: `n |= n >> 1` hoặc `n = n | (n >> 1)`.

Cách làm cụ thể như sau:

**Bước 1:**  
Cho `n` trừ đi 1.

Bằng cách trừ `n` đi `1`, ta đưa bài toán về **tìm số lũy thừa của 2 nhỏ nhất mà lớn hơn hẳn `n - 1`**.

Ví dụ:  
Nếu `n = 8`, ta trừ 1 để `n` thành `7`. Mục tiêu là tìm số lũy thừa của 2 nhỏ nhất mà lớn hơn `7`, tức tìm `8`.

Nếu `n = 7`, ta trừ 1 để `n` thành `6`. Mục tiêu là tìm số lũy thừa của 2 nhỏ nhất mà lớn hơn `6`, tức tìm `8`.

**Bước 2:**  
Dịch phải `k` bit và thực hiện `OR`.

Thao tác này nhằm làm cho tất cả các bit đứng sau bit `1` cao nhất của `n` đều biến thành bit `1`.

Thay vì dùng vòng lặp dịch từng bit một (độ phức tạp là $O(w)$), ta dùng kỹ thuật **nhân đôi block bit `1`** khi dịch chuyển (độ phức tạp trở thành $O(\log w)$):

Ví dụ:  
Với `n = 21`, sau khi trừ `1`, `n = 20`.

`20` có biểu diễn nhị phân là `00010100` (bit `1` cao nhất nằm ở vị trí 4, và  $2^4 = 16$).

Mục tiêu là biến toàn bộ các bit đứng sau bit `1` cao nhất đó thành bit `1` hết, tức biến `00010100` thành `00011111`, là biểu diễn nhị phân của số 31.

```pycon
n = n | (n >> 1) = 0001 0100 | 0000 1010 = 0001 1110
n = n | (n >> 2) = 0001 1110 | 0000 0111 = 0001 1111
n = n | (n >> 4) = 0001 1111 | 0000 0001 = 0001 1111
n = n | (n >> 8) = 0001 1111 | 0000 0000 = 0001 1111
n = n | (n >> 16) = 0001 1111 | 0000 0000 = 0001 1111
```

Kết quả cuối cùng là `0001 1111`, tức bằng 31.

**Bước 3:**  
Cộng `1` vô `n`.

Sau khi `n` có dạng `0...00111...1`, ta cộng thêm `1` để làm cho các bit `1` trở thành bit `0` và bit nằm ngay bên trái của chúng đang từ `0` trở thành `1`. Đây chính là số lũy thừa của 2 cần tìm.

Ví dụ:  
```pycon
`0001 1111` (bằng 31) + `1` = `0010 0000` (bằng 32).
```

### Viết chương trình


=== "C++"

    ```c++ linenums="7"
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

---

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/bitwise/ceiling_power_of_two){:target="_blank"}.
