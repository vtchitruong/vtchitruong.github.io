---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2024-02-01
---

# Olympic lớp 10 HCM 04.2021: Phô mai

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Viết chương trình tính số lần cáo chia phô mai cho hai gấu con.

Bài toán trích từ đề thi Olympic Thành phố tháng 04.2021 dành cho lớp 10.

</div>

<br>

<!-- more -->

<br>

## Đề bài

![Image title](https://lh3.googleusercontent.com/pw/ABLVV84nimOak0WAX78B0g0bBTrY7P0Fsz6h6lSChoJpnIK3pzAioHw03tKowZq98s8biQJpV2DWRHep8ztCv3_JuHCVab-nH401s-IxJ8BSfu-WYgyvq0Uc=w1200){ width=800 loading=lazy }

## Cách giải đề xuất

### Ý tưởng chính

Theo đề bài, khi cáo chia phô mai thành 2 phần, 3 phần hoặc 5 phần thì cáo sẽ ăn $\frac{1}{2}$, $\frac{2}{3}$ hoặc $\frac{4}{5}$. $\frac{1}{2}$, $\frac{1}{3}$ hoặc $\frac{1}{5}$ còn lại được tiếp tục chia cho 2, 3 hoặc 5, và cứ như thế. Điều này có nghĩa rằng trọng lượng phô mai còn lại cuối cùng là ước của phép chia cho $2^x.3^y.5^z$.

Cáo thực hiện chia nhiều lần cho đến khi trọng lương còn lại cuối cùng của miếng phô mai $a$ và miếng phô mai $b$ bằng nhau, có nghĩa rằng trọng lượng này chính là ước chung lớn nhất của $a$ và $b$.

Như vậy, ta sẽ:

- Bước 1: Tìm ước chung lớn nhất của $a$ và $b$.
- Bước 2: Đếm số lần chia $a$ cho 2, 3 và 5 để đạt được ước chung lớn nhất, là $x + y + z$.
- Bước 3: Tương tự, đếm số lần chia $b$ cho 2, 3 và 5 để đạt được ước chung lớn nhất.
- Bước 4: Tổng số lần trên chính là kết quả bài toán.

### Bước 1

Viết hàm tìm ước chung lớn nhất của hai số nguyên.

=== "C++"

    ``` c++ linenums="25"
    int GCD(int m, int n)
    {
        while (n != 0)
        {
            int t = n;
            n = m % n;
            m = t;
        }

        return m;
    }
    ```
=== "Python"

    ``` py linenums="17"
    def gcd(m, n):
        while n != 0:
            m, n = n, m % n

        return m
    ```

### Bước 2

Đếm số lần chia `a` lần lượt cho 2, 3 và 5 cho đến khi không còn chia được nữa.

Nếu giá trị `a` còn lại vẫn không bằng ước chung lớn nhất thì kết thúc bài toán, không có cách chia phô mai thỏa yêu cầu.

=== "C++"

    ``` c++ linenums="47"
        // Lần lượt chia a cho 2, 3 và 5 để đếm số lần cắn phô mai của cáo
        vector<int> v = {2, 3, 5};

        for (int i : v)
        {
            while (a % i == 0)
            {
                // Nếu đã bằng UCLN thì không cần cắn miếng phô mai a nữa
                if (a == gcd) break;
                a = a / i;
                c++;
            }
        }

        // Nếu a vẫn chưa chạm được tới UCLN thì không thể chia phô mai được
        if (a != gcd) return -1;
    ```
=== "Python"

    ``` py linenums="34"
        # Lần lượt chia a cho 2, 3 và 5 để đếm số lần cắn phô mai của cáo
        for i in [2, 3, 5]:
            while a % i == 0:
                # Nếu đã bằng UCLN thì không cần cắn miếng phô mai a nữa
                if a == g:
                    break
                a = a / i
                c += 1

        # Nếu a vẫn chưa chạm được tới UCLN thì không thể chia phô mai được
        if a != g:
            return -1
    ```

### Bước 3

Thực hiện tương tự bước 2, đếm số lần chia `b` lần lượt cho 2, 3 và 5 cho đến khi không còn chia được nữa.

Nếu giá trị `b` còn lại vẫn không bằng ước chung lớn nhất thì kết thúc bài toán, không có cách chia phô mai thỏa yêu cầu.

=== "C++"

    ``` c++ linenums="64"
        // Lần lượt chia b cho 2, 3 và 5 để đếm số lần cắn phô mai của cáo
        for (int i : v)
        {
            while (b % i == 0)
            {
                // Nếu đã bằng UCLN thì không cần cắn miếng phô mai a nữa
                if (b == gcd) break;
                b = b / i;
                c++;
            }
        }

        // Nếu b vẫn chưa chạm được tới UCLN thì không thể chia phô mai được
        if (b == gcd)
            return c;
        else
            return -1;
    ```
=== "Python"

    ``` py linenums="47"
        # Lần lượt chia b cho 2, 3 và 5 để đếm số lần cắn phô mai của cáo
        for i in [2, 3, 5]:
            while b % i == 0:
                # Nếu đã bằng UCLN thì không cần cắn miếng phô mai a nữa
                if b == g:
                    break
                b = b / i
                c += 1 

        # Nếu b vẫn chưa chạm được tới UCLN thì không thể chia phô mai được
        if b == g:
            return c
        else:
            return -1
    ```

### Bước 4

Không cần tính tổng các lần đếm, vì mỗi lần chia ở bước 2 và 3, ta đã tăng biến `c` lên 1.

## Toàn bộ chương trình

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/OlympicT4/tree/main/2021-g10/phomai){:target="_blank"}.