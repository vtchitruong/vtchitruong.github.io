---
tags:
    - quay lui
    - chuỗi tam phân
---

# Chuỗi tam phân

## Bài toán

**Yêu cầu:**

Chuỗi tam phân là chuỗi chỉ gồm các ký tự 0, 1 và 2 dùng để biểu diễn các số trong hệ cơ số 3.

Hãy liệt kê theo thứ tự từ điển các chuỗi tam phân độ dài n.

**Đầu vào:**

Một dòng ghi số nguyên không âm $n (0 \lt n \le 10)$ biểu thị độ dài của một chuỗi. 

**Đầu ra:**

Các chuỗi tam phân theo thứ tự từ điển.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 2 | 00<br>01<br>02<br>10<br>11<br>12<br>20<br>21<br>22 |

## Cách giải đề xuất

### Ý tưởng chính

1\. Sử dụng kỹ thuật quay lui đối với ba ký tự `0`, `1` và `2`.

2\. Với $n = 10$, số chuỗi tam phân được tạo ra là $3^{10} = 59,049$

Mà mỗi chuỗi có 11 ký tự, gồm 10 ký tự tam phân và 1 ký tự xuống dòng.

Do đó, với $n = 10$, dung lượng đầu ra là $59,049 \times 11 = 649,539$ byte $\approx 0.62$ MB.

Với đầu ra từ 10 MB trở xuống, ta có thể thực hiện theo hướng: nạp tất cả chuỗi tam phân hoàn chỉnh vào chung một biến `result` và chỉ ghi ra tập tin một lần duy nhất.

### Viết chương trình

1\. Viết hàm `backtracking()` để phát sinh một chuỗi tam phân `s`.

Sau khi `s` được phát sinh hoàn chỉnh, ta nạp `s` vào biến `result`, chờ ghi `result` một lần duy nhất ra tập tin output.

```c++ linenums="29"
void backtracking(int i)
{
    // Nếu chuỗi đã đủ số ký tự 
    if (i == n)
    {
        // thì nạp vào result
        result += s;
        result += '\n';
        return;
    }

    // Duyệt từng ký tự
    for (char c : {'0', '1', '2'})
    {
        // Gán ký tự đang duyệt cho vị trí i
        s[i] = c;

        // Ứng với i, gọi đệ quy để chuẩn bị gán cho vị trí i + 1
        backtracking(i + 1);
    }
}
```

2\. Khởi tạo các biến liên quan và gọi hàm `backtracking()` ra thực hiện.

```c++ linenums="52"
void process()
{
    // Đặt kích thước cho s là 3 ký tự
    s.resize(n);

    // Đặt trước dung lượng cho đầu ra
    result.reserve((n + 1) * pow(3, n));

    // Gọi backtracking() bắt đầu từ vị trí 0
    backtracking(0);
}
```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/backtracking/ternary-string){target="_blank"}.