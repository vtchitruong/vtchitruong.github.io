---
tags:
    - bội chung nhỏ nhất
    - ước chung lớn nhất
    - sắp xếp
    - chuỗi đối xứng dài nhất
    - phát sinh tổ hợp theo thứ tự từ điển
---

# Học sinh giỏi 9 Thừa Thiên - Huế 2022 - 2023

## Bài 1: Mật mã

### Đề bài

Khi biết Hưng đã biết đi xe đạp vững vàng, ba Hưng mua tặng một xe đạp mới.

Để bảo vệ chiếc xe, Hưng dùng khoá dây mật mã mà mẹ tặng và chọn một số nguyên dương nhỏ nhất vừa chia hết cho tổng của các số là ngày, tháng, năm sinh của mẹ Hưng vừa chia hết cho tổng của các số là ngày, tháng, năm sinh của ba Hưng để làm mật mã của khoá xe.

**Yêu cầu:** tìm mật mã khoá xe.

**Dữ liệu vào:** MATMA.INP

- Dòng thứ nhất chứa các số lần lượt là ngày, tháng, năm sinh của mẹ Hưng.
- Dòng thứ hai chứa các số lần lượt là ngày, tháng, năm sinh của ba Hưng.

**Kết quả:** MATMA.OUT

Mật mã của khoá xe.

**Ví dụ:**

| MATMA.INP | MATMA.OUT |
| --- | --- |
| 1 1 1982 <br> 4 8 1980 | 494016 |

### Bài giải đề xuất

#### Ý tưởng chính

Mật mã là số nguyên dương nhỏ nhất chia hết cho tổng ngày sinh của ba và tổng ngày sinh của mẹ. Điều này đồng nghĩa mật mã là bội chung nhỏ nhất của hai số tổng.

#### Viết chương trình

**Bước 1:**

Viết hàm tìm ước chung lớn nhất của hai số nguyên dương.

=== "C++"

    ```c++ linenums="29"
    int gcd(int a, int b)
    {
        while (b > 0)
        {
            a %= b;
            swap(a, b);
        }

        return a;
    }
    ```

=== "Python"

    ```py linenums="23"
    def gcd(a, b):
        while b > 0:
            a, b = b, a % b

        return a
    ```

**Bước 2:**

Tìm bội chung nhỏ nhất theo công thức $BCNN(a, b) = \frac{a \times b}{UCLN(a, b)}$.

=== "C++"

    ```c++ linenums="43"
        int mom_sum = mom_day + mom_month + mom_year;

        int dad_sum = dad_day + dad_month + dad_year;

        int g = gcd(mom_sum, dad_sum);

        code = mom_sum / g * dad_sum;
    ```

=== "Python"

    ```py linenums="33"
        mom_sum = mom_day + mom_month + mom_year

        dad_sum = dad_day + dad_month + dad_year

        g = gcd(mom_sum, dad_sum)

        code = mom_sum // g * dad_sum
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2022-2023-thuathienhue/matma){:target="_blank"}.

## Bài 2: Ngày công

### Đề bài

Bác An là tổ trưởng của tổ sản xuất thuộc xí nghiệp bánh kẹo Hải Thành. Ngoài công việc tham gia sản xuất, mỗi tuần bác An còn phải quản lý tình hình làm việc của các công nhân trong tổ.

**Yêu cầu:** hãy giúp bác An sắp xếp số ngày làm việc của các công nhân trong tổ theo thứ tự giảm dần; tính tổng số ngày làm việc của tất cả công nhân; tính số ngày làm việc trung bình của tổ.

**Dữ liệu vào:** NGAYCONG.INP

- Dòng thứ nhất chứa $n (1 \le n < 10^5)$ là số công nhân trong tổ.
- Dòng thứ hai chứa $n$ phần tử là số ngày làm việc của mỗi công nhân.

**Kết quả:** NGAYCONG.OUT

Số ngày làm việc của các công nhân sau khi sắp xếp theo thứ tự giảm dần; tổng số ngày làm ciệc của tất cả công nhân; số ngày làm việc trung bình.

**Ví dụ:**

| NGAYCONG.INP | NGAYCONG.OUT |
| --- | --- |
| 5 <br> 1 6 3 7 2 | 7 6 3 2 1 <br> 19 3.80 |

### Bài giải đề xuất

#### Ý tưởng chính

Để sắp xếp, ta có thể dùng hàm `sort()`, có trong cả C++ lẫn Python.

Để tính tổng, ta có thể dùng hàm `accumulate()` của C++ hoặc `sum()` của Python.

#### Viết chương trình

=== "C++"

    ```c++ linenums="39"
        // Sắp xếp ngày công giảm dần
        sort(days.begin(), days.end(), greater<int>());

        // Tính tổng số ngày
        total = accumulate(days.begin(), days.end(), 0);

        // Tính trung bình cộng
        average = (float) total / days.size();
    ```

=== "Python"

    ```py linenums="26"
        # Sắp xếp ngày công giảm dần
        days.sort(reverse=True)
        
        # Tính tổng số ngày
        total = sum(days)

        # Tính trung bình cộng
        average = total / n
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2022-2023-thuathienhue/ngaycong){:target="_blank"}.

## Bài 3: Xâu đối xứng

### Đề bài

Xâu S được gọi là xâu đối xứng khi những ký tự thuộc xâu S được viết từ trái qua phải cho kết quả giống như khi viết từ phải qua trái.

Xâu con của xâu S là một dạy các ký tự liên tiếp thuộc xâu S.

Cho một xâu S bất kỳ có độ dài $n (1 \le n < 256)$.

**Yêu cầu:** cho biết độ dài của xâu con đối xứng dài nhất của xâu S.

**Dữ liệu vào:** PALINDROME.INP

Xâu S.

**Kết quả:** PALINDROME.OUT

Một số nguyên chỉ độ dài của xâu con đối xứng dài nhất của xâu S.

**Ví dụ:**

| PALINDROME.INP | PALINDROME.OUT |
| --- | --- |
| Daua mua cacao | 3 |

### Bài giải đề xuất

#### Ý tưởng chính

Để xét chuỗi con là palindrome dài nhất, ta sử dụng kỹ thuật **mở rộng từ tâm** (expand around center).

Duyệt từng ký tự của chuỗi `s`:

- Ứng với vị trí `i` đang xét, tiến hành mở rộng sang trái và sang phải.
- Trong khi mở rộng sang hai bên, nếu hai ký tự ở hai đầu trái và phải vẫn còn giống nhau, tức đối xứng, thì ta cập nhật độ dài đối xứng mới. 

Cần lưu ý xét cả hai trường hợp: tâm chỉ có một ký tự và tâm có hai ký tự.

#### Viết chương trình

=== "C++"

    ```c++ linenums="27"
        int n = s.length();

        int left, right;
        int tmp_length;

        // Duyệt từng ký tự của s
        for (int i = 0; i < n; ++i)
        {
            // Kiểm tra chuỗi đối xứng có độ dài lẻ
            left = i;
            right = i;

            // Nếu hai đầu left và right giống nhau
            while (left >= 0 && right < n && s[left] == s[right])
            {
                // thì tính độ dài từ left đến right
                tmp_length = right - left + 1;

                // Cập nhật độ dài lớn nhất
                max_length = max(max_length, tmp_length);
                
                // Tiếp tục mở rộng hai bên
                --left;
                ++right;
            }

            // Kiểm tra chuỗi đối xứng có độ dài chẵn
            left = i;
            right = i + 1;

            // Nếu hai đầu left và right giống nhau
            while (left >= 0 && right < n && s[left] == s[right])
            {
                // thì tính độ dài từ left đến right
                tmp_length = right - left + 1; 

                // Cập nhật độ dài lớn nhất
                max_length = max(max_length, tmp_length);

                // Tiếp tục mở rộng hai bên
                --left;
                ++right;
            }
        }
    ```

=== "Python"

    ```py linenums="23"
        n = len(s)

        # Duyệt từng ký tự của s
        for i in range(n):
            # Kiểm tra chuỗi đối xứng có độ dài lẻ
            left = i
            right = i

            # Nếu hai đầu left và right giống nhau
            while left >= 0 and right < n and s[left] == s[right]:
                # thì tính độ dài từ left đến right
                tmp_length = right - left + 1

                # Cập nhật độ dài lớn nhất
                max_length = max(max_length, tmp_length)

                # Tiếp tục mở rộng hai bên
                left -= 1
                right += 1

            # Kiểm tra chuỗi đối xứng có độ dài chẵn
            left = i
            right = i + 1

            # Nếu hai đầu left và right giống nhau
            while left >= 0 and right < 1 and s[left] == s[right]:
                # thì tính độ dài từ left đến right
                tmp_length = right - left + 1

                # Cập nhật độ dài lớn nhất
                max_length = max(max_length, tmp_length)

                # Tiếp tục mở rộng hai bên
                left -= 1
                right += 1
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2022-2023-thuathienhue/palindrome){:target="_blank"}.

## Bài 4: Chọn người

### Đề bài

Công ty nấm Hương Sơn nằm trong khu nông nghiệp công nghệ cao. Nhằm trang bị thêm kiến thức nâng cao về nuôi trồng nấm cho đội ngũ công nhân, công ty xây dựng kế hoạch cử một đoàn công tác sang Nhật để học tập kinh nghiệm. Bộ phận nhân sự đã đề xuất $N$ người để giám đốc công ty chọn ra $K$ người tham gia.

**Yêu cầu:** hãy cho biết tất cả khả năng mà giám đốc đã đưa ra để chọn đúng $K$ trong số $N$ người.

**Dữ liệu vào:** CHONNGUOI.INP

Hai số $N, K ( 1 \le K < N \le 10^5)$.

**Kết quả:** CHONNGUOI.OUT

- Các dòng hiển thị theo thứ tự từ điển các khả năng chọn đúng $K$ trong số $N$ người.
- Dòng cuối cùng chứa tổng số các khả năng để chọn đúng $K$ trong số $N$ người.

**Ví dụ:**

| CHONNGUOI.INP | CHONNGUOI.OUT |
| --- | --- |
| 3 2 | 1 2 <br> 1 3 <br> 2 3 <br> 3 |

### Bài giải đề xuất

#### Ý tưởng chính

Đặt `A` là mảng dùng để lưu một tổ hợp.

Tổ hợp đầu tiên là `{1, 2, ..., k}`.

Bắt đầu từ tổ hợp trên, ta phát sinh tổ hợp tiếp theo bằng cách tìm vị trí `i` lớn nhất sao cho `A[i]` có thể tăng (`A[i] < n - (k - i - 1)`), bằng cách tăng `A[i]` lên 1 và cập nhật các phần tử tiếp sau nó.

!!! bug "Lưu ý về hiệu suất" 

    Có lẽ đề bài này đã có nhầm lẫn gì đó. Bởi số tổ hợp $\mathrm{C}_{n}^{k}$ với $n \le 10^5$ là rất lớn, dẫn đến mất thời gian trong việc liệt kê tổ hợp và tập tin output tạo ra là rất lớn.

    Ví dụ:

    Với $k = 2$, ta có $\mathrm{C}_{10^5}^{2} = \frac{10^5 \times (10^5 - 1)}{2} = 4,999,950,000 \simeq 5 \times 10^{9}$ tổ hợp.

    Còn với $k = \frac{n}{2} = 500,000$, số tổ hợp là... oh my god 😱😱😱!!!

#### Viết chương trình

**Bước 1:**

Viết hàm phát sinh tổ hợp.

=== "C++"

    ```c++ linenums="27"
    bool combination(vector<int>& A)
    {
        // Duyệt từ phần tử cuối ngược về đầu
        for (int i = k - 1; i >= 0; --i)
        {
            // Kiểm tra xem A[i] có thể tăng lên mà vẫn bảo đảm các phần tử sau nó có thể được cập nhật hợp lệ
            // N - (K - i - 1) là giá trị tối đa mà A[i] có thể nhận để sau khi tăng, vẫn còn đủ giá trị lớn hơn cho các phần tử sau
            if (A[i] < n - (k - i - 1))
            {
                A[i]++;

                // Cập nhật các phần tử sau A[i] để chúng là các giá trị nhỏ nhất có thể, mà vẫn lớn hơn phần tử trước đó
                for (int j = i + 1; j < k; ++j)
                {
                    A[j] = A[j - 1] + 1;
                }

                // Trả về true nhằm cho biết một tổ hợp mới đã được sinh ra
                return true;
            }
        }

        // Nếu không có phần tử nào có thể tăng, đồng nghĩa tổ hợp hiện tại là tổ hợp cuối cùng
        return false;
    }
    ```

=== "Python"

    ```py linenums="23"
    def combination(A):
        global n, k

        # Duyệt từ phần tử cuối ngược về đầu
        for i in range(k - 1, -1, -1):
            # Kiểm tra xem A[i] có thể tăng lên mà vẫn bảo đảm các phần tử sau nó có thể được cập nhật hợp lệ
            # N - (K - i - 1) là giá trị tối đa mà A[i] có thể nhận để sau khi tăng, vẫn còn đủ giá trị lớn hơn cho các phần tử sau
            if A[i] < n - (k - i - 1):
                A[i] += 1

                # Cập nhật các phần tử sau A[i] để chúng là các giá trị nhỏ nhất có thể, mà vẫn lớn hơn phần tử trước đó
                for j in range(i + 1, k):
                    A[j] = A[j - 1] + 1

                # Trả về true nhằm cho biết một tổ hợp mới đã được sinh ra
                return True
        
        # Nếu không có phần tử nào có thể tăng, đồng nghĩa tổ hợp hiện tại là tổ hợp cuối cùng
        return False
    ```

**Bước 2:**

Gọi hàm phát sinh tổ hợp và ghi kết quả ra file.

=== "C++"

    ```c++ linenums="63"
        // Khởi tạo bộ ban đầu: 1, 2, 3, ..., k
        C.resize(k);

        for (int i = 0; i < k; ++i)
        {
            C[i] = i + 1;
        }

        // Liệt kê và ghi các tổ hợp ra file
        do
        {
            for (int i = 0; i < k; ++i)
            {
                cout << C[i];
                if (i < k - 1) cout << ' ';
            }

            cout << '\n';
            number_of_combinations++;

        } while (combination(C));
        
        cout << number_of_combinations;
    ```

=== "Python"

    ```py linenums="48"
        # Khởi tạo bộ ban đầu: 1, 2, 3, ..., k
        C = [0] * k

        for i in range(k):
            C[i] = i + 1

        # Liệt kê và ghi các tổ hợp ra file
        with open(output_file, 'w') as f:
            while True:
                for i in range(k):
                    f.write(str(C[i]))
                    
                    if i < k - 1:
                        f.write(' ')

                f.write('\n')
                number_of_combinations += 1

                if not combination(C):
                    break
            
            f.write(str(number_of_combinations))
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg9-tinh/2022-2023-thuathienhue/chonnguoi){:target="_blank"}.