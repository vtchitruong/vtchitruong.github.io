---
tags:
    - quay lui
    - chuỗi AB
---

# Chuỗi AB

## Bài toán

**Yêu cầu:**

Liệt kê các chuỗi có độ dài `n` gồm hai ký tự 'A' và 'B', trong đó không có hai ký tự 'B' nào đứng cạnh nhau.

**Đầu vào:**

Một dòng ghi số nguyên $n (n \le 28)$ là số ký tự của một chuỗi. 

**Đầu ra:**

Các chuỗi AB hợp lệ theo thứ tự từ điển.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| 3 | AAA<br>AAB<br>ABA<br>BAA<br>BAB |

## Cách giải đề xuất

### Ý tưởng chính

1\. Sử dụng kỹ thuật quay lui đối với hai ký tự `A` và `B`.

2\. Gọi $a(n)$ là số chuỗi hợp lệ gồm $n$ ký tự. Có hai trường hợp:

**Trường hợp 1:** chuỗi bắt đầu bằng `A`

Điều này có nghĩa là, phần còn lại gồm `n - 1` ký tự và vẫn phải hợp lệ (không có hai `B` kề nhau).

Như vậy, số chuỗi của trường hợp này là $a(n - 1)$.

**Trường hợp 2:** chuỗi bắt đầu bằng `B`

Vì hai `B` không thể kề nhau nên chuỗi có dạng `BA*`.

Điều này có nghĩa là, phần còn lại gồm `n - 2` ký tự và vẫn phải hợp lệ.

Như vậy, số chuỗi của trường hợp này là $a(n - 2)$.

Do đó, tổng số chuỗi hợp lệ là: $a(n) = a(n - 1) + a(n - 2)$.

Công thức này chính là định nghĩa của dãy Fibonacci.

Điểm khác so với Fibonacci là các phần tử đầu.

- Với $n = 1, a(n) = a(1) = 1$. Đó là các chuỗi: `A`, `B`
- Với $n = 2, a(n) = a(2) = 3$. Đó là các chuỗi: `AA`, `AB`, `BA`

3\. Với $n = 28$, ta dễ dàng tính được số chuỗi hợp lệ là: $a(25) = 832,040$.

Mà mỗi chuỗi có $n + 1 = 28 + 1 = 29$ ký tự, gồm 28 ký tự `A` hoặc `B` và ký tự xuống dòng, tương đương $29$ byte.

Do đó, với $n = 28$, dung lượng đầu ra là $29 \times 832,040 = 24,129,160$ byte $\approx 23 MB$.

4\. Những việc tính toán trên là để hiểu rõ về đầu ra. Còn trong chương trình này, ta thực hiện theo hướng:

- Dùng kiểu `char[]` để ghi chuỗi tạm nhanh hơn, tránh bị các chi phí phụ (overhead) của `string`.
- Biến `result` sẽ đóng vai trò là bộ đệm tạm thời (buffer tạm), nó không lưu tất cả chuỗi hợp lệ mà chỉ lưu nhiều chuỗi trong giới hạn trước khi ghi.
- Mỗi khi bộ đệm đầy thì dùng `fwrite()` để ghi ra tập tin.

Cách này phù hợp với đầu ra có dung lượng lớn vì giảm được số lần ghi tập tin và tiết kiệm bộ nhớ RAM. 

### Viết chương trình

0\. Khai báo các biến liên quan.

biến `s` kiểu mảng, chứa tối đa 29 ký tự, dùng để lưu một chuỗi cặp ngoặc hợp lệ.

```c++ linenums="9"
// Khai báo hằng số kích thước để lưu tạm output là 1 MB
const size_t BUFFER_LIMIT = 1 << 20;

int n;

// biến lưu chuỗi hoàn chỉnh
char s[28];

// con trỏ FILE dùng fwrite để ghi nhanh
FILE *f;

// biến lưu toàn bộ output
string result = "";
```

1\. Viết hàm `flush_buffer()` để đẩy hết bộ đệm ra tập tin output.

```c++ linenums="36"
inline void flush_buffer()
{
    // Nếu có dữ liệu
    if (!result.empty())
    {
        // thì ghi tất cả dữ liệu ra tập tin
        fwrite(result.data(), 1, result.size(), f);

        // Xoá để chuẩn bị ghi tiếp
        result.clear();
    }
}
```

2\. Viết hàm `backtracking()` để phát sinh một chuỗi hợp lệ `s`.

Sau khi `s` được phát sinh hoàn chỉnh, ta đặt ký tự `\0` vào cuối mảng để kết thúc chuỗi, nhằm ghi được ra tập tin output.

Ngoài tham số `i`, hàm dùng thêm tham số `previous` để kiểm soát việc hai ký tự `B` đứng cạnh nhau.

```c++ linenums="28"
void backtracking(int i, char previous)
{
    // Nếu đã đủ số lượng ký tự
    if (i == n)
    {
        // thì thêm n ký tự của s vào result
        result.append(s, s + n);

        // và thêm ký tự xuống dòng
        result.push_back('\n');

        // Nếu result đầy rồi thì ghi ra tập tin
        if (result.size() >= BUFFER_LIMIT)
            flush_buffer();

        return;
    }

    // Gán A cho vị trí i
    s[i] = 'A';

    // Ứng với i, gọi đệ quy để chuẩn bị gán cho vị trí i + 1
    backtracking(i + 1, 'A');

    // Nếu ký tự liền trước khác B
    if (previous != 'B')
    {
        // Gán B cho vị trí i
        s[i] = 'B';

        // Gọi đệ quy để chuẩn bị gán cho vị trí i + 1
        backtracking(i + 1, 'B');
    }
}
```

3\. Gọi hàm `backtracking()` ra thực hiện.

```c++ linenums="86"
void process_output()
{
    // Khởi tạo s gồm n ký tự 'A'
    memset(s, 'A', n);

    // Đặt trước dư ra 1024 byte cho result để tránh realloc nhiều lần
    result.reserve(BUFFER_LIMIT + 1024);

    f = fopen(output_file, "wb");

    backtracking(0, '?');

    // Ghi phần còn sót lại ra tập tin
    flush_buffer();

    fclose(f);
}
```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/backtracking/ab-string){target="_blank"}.