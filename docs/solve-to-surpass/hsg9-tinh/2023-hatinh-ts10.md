# 2023-2024 Hà Tĩnh - Tuyển sinh 10

## Bài 1: Tổng dãy số (3,0 điểm)

### Đề bài

Cho dãy số $T_1, T_2, T_3, ..., T_n$.

Với số hạng tổng quát là: $T_k = (k+1)^2 - k^2$ ($k$ là số nguyên và $1 \le k \le n$).

**Yêu cầu:** Tính giá trị $S = T_1, T_2, T_3, ..., T_n$

**Dữ liệu:** Vào từ file văn bản SUMS.INP gồm một dòng duy nhất chứa số nguyên dương $n (1 \le n \le 10^9)$.

**Kết quả:** Ghi ra file văn bản SUMS.OUT một số nguyên là giá trị S tính được.

**Ví dụ:**

| SUMS.INP | SUMS.OUT | Giải thích |
| --- | --- | --- |
| 2	| 8 | Với n = 2 ta có: <br> $S = T_1 + T_2 = (1 + 1)^2 – 1^2 + (2 + 1)^2 - 2^2 = 8$ |

**Ràng buộc:**

- Có 70% số test ứng với 70% số điểm thỏa mãn $1 \le n \le 10^6$.
- Có 30% số test còn lại ứng với 30% số điểm không có ràng buộc gì thêm.

### Bài giải đề xuất

Dựa vào biểu thức $T_k = 2k + 1$, ta có:

$$
\begin{aligned}
S &= (2 \cdot 1 + 1) + (2 \cdot 2 + 1) + ... + (2 \cdot n + 1)\\
  &= (2 \cdot 1 + 2 \cdot 2 + ... + 2 \cdot n) + (1 + 1 + ... + 1)
\end{aligned}
$$

Tách tổng này thành hai phần:

$$
2(1 + 2 + 3 + ... + n) = 2 \cdot \frac{n(n+1)}{2} = n(n+1)
$$

và

$$
1 + 1 + ... + 1 = n
$$

Do đó,

$$
S = n(n+1) + n = n(n+2)
$$

Như vậy, bài này chỉ cần giải quyết bằng một dòng lệnh.

Vì giới hạn của $n$ là $10^9$ nên trong C++, ta khai báo kiểu `long long int` cho biến `n` và `S`. 

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2023-hatinh-ts10/sums){:target="_blank"}.

## Bài 2: Số đặc biệt (3,0 điểm)

### Đề bài

Nam phát hiện nhiều số tự nhiên có tính chất: Tổng bình phương các chữ số của nó là số nguyên tố, những số như thế Nam gọi là số đặc biệt.

**Yêu cầu:** Cho số nguyên dương n. Hãy kiểm tra xem n có phải là số đặc biệt hay không.

**Dữ liệu:** Vào từ file văn bản BNUM.INP gồm một dòng duy nhất chứa số nguyên dương $n (10 \le n \le 10^18)$.

**Kết quả:** Ghi ra file văn bản BNUM.OUT gồm 2 dòng:

- Dòng đầu ghi ra 1 nếu n là số đặc biệt, ngược lại ghi -1 nếu n không phải là số đặc biệt.
- Dòng thứ hai ghi tổng bình phương các chữ số của n.

**Ví dụ:**

| BNUM.INP | BNUM.OUT | Giải thích |
| --- | --- | --- |
| 21 | 1 <br> 5| Tổng bình phương chữ số của 21 là 5 (5 là số nguyên tố) |
| 24 | -1 <br> 20 | Tổng bình phương chữ số của 24 là 20 (20 không phải số nguyên tố) |

**Ràng buộc:**

- Có 60% số test ứng với 60% số điểm thỏa mãn: $10 \le n \le 10^3$. 
- 40% số test còn lại ứng với 40% số điểm không có ràng buộc gì thêm.

### Bài giải đề xuất

Để có thể xử lý được từng chữ số, ta đọc giá trị của $n$ theo kiểu `string`.

Kế đến, để chuyển đổi từng ký tự `c` trong chuỗi `n` thành số, ta thực hiện `c - '0'`. Vì trong bảng mã ASCII và UTF-8, các ký tự `'0'`, `'1'`, `'2'`, ..., `'9'` mang các giá trị liên tiếp nhau.

=== "C++"

    ```c++ linenums="43"
        sum_digit = 0; // (1)!
        int digit;

        // Duyệt từng chữ số trong chuỗi n
        for (char c : n)
        {
            // Chuyển đổi chữ số thành số
            digit = c - '0';

            // Tính tổng bình phương
            sum_digit += digit * digit;
        }
    ```
    { .annotate }
    
    1.  `sum_digit` dùng để lưu output tổng bình phương các chữ số, được khai báo toàn cục.

=== "Python"
    
    ```py linenums="41"
        # Duyệt từng chữ số trong chuỗi n
        # chuyển đổi và tính tổng bình phương
        sum_digit = sum((int(c) ** 2) for c in n) # (1)!
        
        prime = 1 if is_prime(sum_digit) else -1
    ```
    { .annotate }
    
    1.  `sum_digit` dùng để lưu output tổng bình phương các chữ số, được khai báo toàn cục.

Sau đó, ta gọi hàm `isPrime()` để kiểm tra `sum_digit` có phải nguyên tố hay không. Hàm `isPrime()` được viết như sau:

=== "C++"

    ```c++ linenums="23"
    bool isPrime(int n)
    {
        if (n < 2) return false;
        if (n < 4) return true;
        if (n % 2 == 0) return false;
        if (n % 3 == 0) return false;

        // Kiểm tra n có chia hết cho 5, 7, 11, 13, 17, 19, v.v...
        for (int i = 5; i * i <= n; i += 6)
        {
            if (n % i == 0) return false;
            if (n % (i + 2) == 0) return false;
        }

        return true;
    }
    ```
=== "Python"

    ```py linenums="20"
    def is_prime(x):
        if x < 2:
            return False
        if x < 4:
            return True
        if x % 2 == 0 :
            return False
        if x % 3 == 0:
            return False
        for i in range(5, int(x**0.5) + 1, 6):
            if n % i == 0:
                return False
            if n % (i + 2) == 0:
                return False

        return True
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2023-hatinh-ts10/bnum){:target="_blank"}.

## Bài 3: Dãy đặc trưng (2,0 điểm)

### Đề bài

Cho một dãy A gồm n số nguyên $a_1, a_2, ..., a_n$, mỗi phần tử có giá trị tuyệt đối không quá $10^9$.

Dãy đặc trưng A1 của A là dãy con gồm các phần tử liên tiếp nhau thỏa mãn:

- Trong dãy A1 tất cả các số đều dương hoặc đều âm.
- Số lượng phần tử của dãy A1 là lớn nhất.

**Yêu cầu:** Tìm dãy A1 và ghi ra số lượng phần tử của nó.

**Dữ liệu:** Vào từ file văn bản SPEC.INP gồm 2 dòng:

- Dòng đầu chứa số nguyên dương $n (n \le 10^6)$.
- Dòng thứ hai chứa n số a1, a2, …, an.

**Kết quả:** Ghi ra file văn bản SPEC.OUT số lượng phần tử của dãy A1.

**Ví dụ:**

| SPEC.INP | SPEC.OUT | Giải thích |
| --- | --- | --- |
| 9 <br> 1 -3 -2 1 3 1 5 -3 -4 | 4 | Dãy A1 là: 1 3 1 5. <br> Dãy có 4 phần tử. |
| 7 <br> 8 -1 -2 -3 -5 -6 4 | 5 | Dãy A1 là: -1 -2 -3 -5 -6. <br> Dãy có 5 phần tử. |

**Ràng buộc:**

- Có 60% số test ứng với 60% số điểm thỏa mãn: $n \le 10^3$.
- 40% số test còn lại ứng với 40% số điểm không có ràng buộc gì thêm.

### Bài giải đề xuất

Vì mỗi phần tử của mảng input có giới hạn giá trị lên đến $10^9$ và thao tác chủ yếu chỉ là xét âm hoặc dương nên để cải thiện hiệu suất, ta không lưu các phần tử như input, mà chỉ lưu `1` và `0`, ứng với dương và âm.

=== "C++"

    ```c++ linenums="27"
        cin >> n;

        int x;
        for (int i = 0; i < n; ++i)
        {
            cin >> x;

            if (x > 0)
                A.push_back(1);
            else
                A.push_back(0);
        }
    ```
=== "Python"

    ```py linenums="13"
        with open(input_file, 'r') as f:
            n = int(f.readline().strip())
            A = list(map(lambda x: 1 if int(x) > 0 else 0, f.readline().split()))
    ```

**Bước 1:** Khởi tạo bộ đếm số dương `count_positive = 0` (đếm các phần tử `1`) và bộ đếm số âm `count_negative = 0` (đếm các phần tử `0`).

**Bước 2:** Duyệt mảng `A` (chứa các phần tử `0` và `1`):

- Nếu phần tử tiếp theo là âm hoặc dương thì tăng 1 cho bộ đếm tương ứng và gán 0 cho bộ đếm còn lại.
- Ghi nhận độ dài âm lớn nhất và độ dài dương lớn nhất.

=== "C++"

    ```c++ linenums="45"
        // Duyệt mảng A
        for (char a : A)
        {
            // Tăng 1 cho bộ đếm tương ứng với âm hoặc dương
            // và gán 0 cho bộ đếm còn lại
            if (a == 1)
            {
                count_positive += 1;
                count_negative = 0;
            }
            else
            {
                count_positive = 0;
                count_negative += 1;
            }

            // Ghi nhận hai độ dài lớn nhất
            max_positive = max(max_positive, count_positive);
            max_negative = max(max_negative, count_negative);
        }
    ```
=== "Python"

    ```py linenums="29"
        # Duyệt mảng A
        for a in A:
            # Tăng 1 cho bộ đếm tương ứng với âm hoặc dương
            # và gán 0 cho bộ đếm còn lại
            if a == 1:
                count_positive += 1
                count_negative = 0
            else:
                count_positive = 0
                count_negative += 1

            # Ghi nhận hai độ dài lớn nhất
            max_positive = max(max_positive, count_positive)
            max_negative = max(max_negative, count_negative)
    ```

**Bước 3:** So sánh hai độ dài lớn nhất để trả về độ dài lớn hơn.

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2023-hatinh-ts10/spec){:target="_blank"}.

## Bài 4: Đoạn thẳng (2,0 điểm)

### Đề bài

Trên trục Ox cho n điểm, điểm thứ $i$ ở vị trí tọa độ là $x_i (1 \le i \le n)$. Mỗi điểm được tô một trong ba màu xanh, đỏ, vàng.

**Yêu cầu:** Tìm trên trục số một đoạn thẳng thỏa mãn:

- Trong đoạn đó mỗi màu xuất hiện ít nhất một lần.
- Độ dài đoạn thẳng là nhỏ nhất.

**Dữ liệu:** Vào từ file PPOINT.INP:

- Dòng đầu chứa số nguyên dương $n (1 \le n \le 10^6)$.
- n dòng tiếp theo, mỗi dòng gồm hai giá trị $x_i$ và $m_i$:

    - Số nguyên $x_i$ là tọa độ của điểm thứ $i$ trên trục số $(1 \le x_i \le 10^9, 1 \le i \le n)$.
    - Số nguyên $m_i$ là ký hiệu màu của các điểm, trong đó $m_i = 1$ là màu xanh, $m_i = 2$ là màu đỏ, 
$m_i = 3$ là màu vàng.

**Kết quả:** Ghi ra file PPOINT.OUT một số là độ dài đoạn thẳng thỏa mãn yêu cầu, nếu không tìm thấy đoạn nào thỏa mãn thì ghi -1.

**Ví dụ:**

| PPOINT.INP | PPOINT.OUT | Giải thích |
| --- | --- | --- |
| 6 <br> 2 1 <br> 4 1 <br> 5 2 <br> 7 2 <br> 8 3 <br> 10 3 | 4 | Đoạn thẳng từ điểm có tọa độ 4 đến điểm có tọa độ 8 có độ dài là 8 – 4 = 4 gồm có 1 điểm màu xanh, 2 điểm màu đỏ và 1 điểm màu vàng. |

**Ràng buộc:**

- Có 30% số test ứng với 30% số điểm thỏa mãn: $1 \le n \le 10^2$.
- 30% số test khác ứng với 30% số điểm thỏa mãn: $n \le 10^3$.
- 40% số test còn lại ứng với 40% số điểm không có ràng buộc gì thêm.

### Bài giải đề xuất

**Bước 0:** Trong C++, tạo cấu trúc point gồm hai thành phần `x` và `m`.

=== "C++"

    ```c++ linenums="10"
        struct point
        {
            int x;
            int m;
        };
    ```

**Bước 1:** Sắp xếp mảng `P` gồm các điểm theo thứ tự toạ độ tăng dần.

**Bước 2:** Khởi tạo `last_green = -1`, `last_red = -1` và `last_yellow = -1`. Các biến này dùng để ghi nhận toạ độ mới nhất tìm thấy các màu xanh, đỏ và vàng tương ứng.

**Bước 3:** Duyệt mảng `P`:

- Mỗi khi tìm thấy màu nào thì ghi nhận toạ độ mới của màu đó.
- Nếu tìm thấy đủ cả ba toạ độ của ba màu thì tính độ dài của đoạn thẳng tương ứng (bằng cách lấy toạ độ cuối trừ toạ độ đầu). Đây chính là độ dài nhỏ nhất cần tìm.

=== "C++"

    ```c++ linenums="57"
        // Duyệt mảng P
        for (int i = 0; i < n; ++i)
        {
            // Ghi nhận toạ độ mới khi tìm thấy màu
            if (P[i].m == 1)
                last_green = P[i].x;
            else if (P[i].m == 2)
                last_red = P[i].x;
            else if (P[i].m == 3) 
                last_yellow = P[i].x;

            // Nếu đã tìm thấy đủ ba toạ độ
            // thì tính độ dài đoạn thẳng
            if (last_green != -1)
                if (last_red != -1)
                    if (last_yellow != -1)
                    {
                        min_pos = min({last_green, last_red, last_yellow});
                        max_pos = max({last_green, last_red, last_yellow});
                        min_len = min(min_len, max_pos - min_pos);
                    }
        }
    ```
=== "Python"

    ```py linenums="32"
        # Duyệt mảng P
        for p in P:
            # Ghi nhận toạ độ mới khi tìm thấy màu
            if p[1] == 1:
                last_green = p[0]
            elif p[1] == 2:
                last_red = p[0]
            elif p[1] == 3:
                last_yellow = p[0]

            # Nếu đã tìm thấy đủ ba toạ độ
            # thì tính độ dài đoạn thẳng
            if last_green != -1 and last_red != -1 and last_yellow != -1:
                min_pos = min(last_green, last_red, last_yellow)
                max_pos = max(last_green, last_red, last_yellow)
                min_len = min(min_len, max_pos - min_pos)
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2023-hatinh-ts10/ppoint){:target="_blank"}.
