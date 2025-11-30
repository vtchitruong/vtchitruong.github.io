---
tags:
    - quay lui
    - chuỗi ngoặc hợp lệ
---

# Chuỗi ngoặc hợp lệ

## Bài toán

**Yêu cầu:**

Hãy liệt kê các cách đặt n dấu mở ngoặc và n dấu đóng ngoặc sao cho biểu thức đó hợp lệ.

**Đầu vào:**

Một dòng ghi số nguyên $n (n \le 14)$ là số cặp ngoặc. 

**Đầu ra:**

Các chuỗi mở ngoặc và đóng ngoặc hợp lệ theo thứ tự từ điển.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 3 | ((()))<br>(()())<br>(())()<br>()(())<br>()()() |

## Cách giải đề xuất

### Ý tưởng chính

1\. Sử dụng kỹ thuật quay lui đối với hai ký tự `(` và `)`.

2\. Số Catalan thứ $n$, ký hiệu $C_n$, xuất hiện trong nhiều bài toán tổ hợp liên quan đến "cấu trúc hợp lệ" của cây, chuỗi, đường đi.

Trong bài toán này, số Catalan cho biết số cách để sắp xếp $n$ cặp ngoặc hợp lệ (cân bằng), tức số chuỗi cặp ngoặc hợp lệ.

Công thức: $\mathrm{C}_{n}=\frac{1}{n+1}\binom{2n}{n}$

Ví dụ:

Với $n = 3$ cặp ngoặc, ta có:

$$$
\begin{align}
\mathrm{C}_{3} = \frac{1}{n+1}\binom{2n}{n} &= \frac{1}{3 + 1} \binom{2 \times 3}{3} \\
&= \frac{1}{4} \times \frac{6!}{3!(6-3)!} \\
&= \frac{1}{4} \times\frac{4 \times 5 \times 6}{1 \times 2 \times 3} \\
&= 5
\end{align}
$$$

3\. Với $n = 14$, số chuỗi phát sinh là $C_{14} = 2,674,440$.

Mà mỗi chuỗi có $2n + 1 = 2 \times 14 + 1 = 29$ ký tự, gồm $2 \times 14$ ngoặc và ký tự xuống dòng, tương đương $29$ byte.

Do đó, với $n = 14$, dung lượng đầu ra là $2,674,440 \times 29 = 77,558,760$ byte $\approx 73$ MB.

Với đầu ra lớn hơn 10 MB, ta có thể thực hiện theo hướng: vừa phát sinh chuỗi vừa ghi vào tập tin.

### Viết chương trình

0\. Khai báo biến `s` kiểu mảng, chứa tối đa 29 ký tự, dùng để lưu một chuỗi cặp ngoặc hợp lệ.

```c++ linenums="1"
char s[29];
```

1\. Viết hàm `backtracking()` để phát sinh một chuỗi hợp lệ `s`.

Sau khi `s` được phát sinh hoàn chỉnh, ta đặt ký tự `\0` vào cuối mảng để kết thúc chuỗi, nhằm ghi được ra tập tin output.

Ngoài tham số `i`, hàm dùng thêm hai tham số `open` và `close` để kiểm soát số lượng ngoặc mở và số lượng ngoặc đóng.

```c++ linenums="25"
void backtracking(int i, int open, int close)
{
    // Nếu đã đủ số lượng ngoặc
    if (close == n && open == n)
    {
        // thì đặt ký tự '\0' để kết thúc chuỗi
        s[i] = '\0';
        cout << s << '\n';
        return;
    }

    // Nếu chưa đủ số lượng ngoặc mở 
    if (open < n)
    {
        // thì mở ngoặc tại vị trí i
        s[i] = '(';

        // Ứng với i, gọi đệ quy để mở ngoặc tại vị trí i + 1 cho đủ số lượng
        backtracking(i + 1, open + 1, close);
    }

    // Nếu chưa đủ số lượng đóng ngoặc
    if (close < open)
    {
        // thì đóng ngoặc tại vị trí i
        s[i] = ')';

        // Ứng với i, gọi đệ quy để đóng ngoặc tại vị trí i + 1 cho đủ số lượng
        backtracking(i + 1, open, close + 1);
    }
}
```

2\. Gọi hàm `backtracking()` ra thực hiện.

```c++ linenums="52"
void process_output()
{
    freopen(output_file, "w", stdout);

    backtracking(0, 0, 0);
}
```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/backtracking/balanced-parentheses){target="_blank"}.