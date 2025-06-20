---
tags:
    - mảng cộng dồn
    - tổng tiền tố
    - tổng lớn nhất của mảng con có độ dài chẵn
    - quy hoạch động
    - cửa sổ trượt
    - hàng đợi
    - cây
---

# Học sinh giỏi 12 Tây Ninh 2024 - 2025 (buổi 1)

## Bài 1: Bản nhạc hoàn hảo

### Đề bài

Tại thành phố T, nơi nổi tiếng với các bản nhạc đàn ca tài tử, một cuộc thi sáng tác nhạc đã được tổ chức nhằm tìm kiếm bản nhạc hay nhất để trình diễn trong Lễ hội Ánh Trăng.

Các nghệ sĩ trong cuộc thi phải sáng tác những bản nhạc kết hợp từ hai loại nhạc cụ chính là đàn kìm và đàn tranh, bản nhạc là sự kết nối của nhiều đoạn nhạc, trong đó mỗi đoạn chỉ chơi một loại đàn và không có 2 đoạn liên tiếp nào có cùng loại đàn.

Ban giám khảo đã đưa ra tiêu chí đánh giá độ hấp dẫn của mỗi bản nhạc dựa trên độ hấp dẫn của các đoạn nhạc liên tiếp sử dụng hai loại nhạc cụ này.

Có tổng cộng $N$ đoạn nhạc được đánh số từ $1$ đến $N$, đoạn thứ $i$ được chơi bởi một trong hai loại nhạc cụ trên và có một độ hấp dẫn $A_i (1 \le i \le N)$ tương ứng, được biểu diễn dưới dạng một số nguyên.

Một bản nhạc hoàn hảo phải thỏa mãn các điều kiện sau:

- Có ít nhất 4 đoạn nhạc liên tiếp.
- Số lượng đoạn nhạc sử dụng đàn kìm và đàn tranh phải bằng nhau.

Độ hấp dẫn của một bản nhạc hoàn hảo được tính bằng tổng độ hấp dẫn của các đoạn nhạc liên tiếp đó.

**Yêu cầu:** hãy tính độ hấp dẫn lớn nhất của một bản nhạc hoàn hảo có thể được trình diễn.

**Dữ liệu:** MUSIC.INP

- Dòng đầu chứa số nguyên dương $N (4 \le N \le 3 \cdot 10^5)$ là số lượng đoạn nhạc.
- Dòng thứ hai chứa $N$ số nguyên $A_1, A_2, ..., A_n (|A_i| \le 10^9$ với $1 \le i\le N)$, mỗi số đại diện cho độ hấp dẫn của một đoạn nhạc (có thể là dương hoặc âm). Hai số liên tiếp được ghi cách nhau bởi một dấu cách.

**Kết quả:** MUSIC.OUT

Một số nguyên duy nhất là độ hấp dẫn lớn nhất của một bản nhạc hoàn hảo có thể được trình diễn.

**Ví dụ:**

| MUSIC.INP | MUSIC.OUT |
| --- | --- |
| 7 <br> -3 6 4 -5 -2 7 1 | 11 |

Giải thích: Bản nhạc gồm 6 đoạn có số thứ tự $2, 3, 4, 5, 6, 7$ sẽ có độ hấp dẫn là $6 + 4 +(-5) + (-2) + 7 + 1 = 11$.

**Ràng buộc:**

- Subtask 1 (50%): $N \le 300$
- Subtask 2 (30%): $300 < N \le 5000$
- Subtask 3 (20%): $5000 < N \le 3 \cdot 10^5$

### Bài giải đề xuất

#### Ý tưởng chính

Sử dụng mảng tổng tiền tố (prefix sum).

#### Viết chương trình

**Bước 0:**

Khai báo các biến cần thiết.

=== "C++"

    ```c++ linenums="10"
    typedef long long int lli;

    int n;
    vector<int> A;

    // mảng tổng tiền tố (prefix sum)
    // ps[i] là tổng các phần tử trong đoạn [0..i - 1]
    vector<lli> ps;

    // độ hấp dẫn lớn nhất cần tìm
    lli max_attractive = numeric_limits<lli>::min();    
    ```
=== "Python"

    ```py linenums="7"
    n = 0
    A = []

    # mảng tổng tiền tố prefix_sum
    # ps[i] là tổng các phần tử trong đoạn [0..i - 1]
    ps = []

    # độ hấp dẫn lớn nhất cần tìm
    max_attractive = max_attractive = float('-inf')  
    ```

**Bước 1:**

Tính mảng tổng tiền tố.

=== "C++"

    ```c++ linenums="44"
        ps.resize(n + 1, 0);

        for (int i = 0; i < n; ++i)
        {
            ps[i + 1] = ps[i] + A[i];
        }
    ```

=== "Python"

    ```py linenums="31"
        ps = [0] * (n + 1)

        for i in range(n):
            ps[i + 1] = ps[i] + A[i]  
    ```

**Bước 2:**

Gọi `ps[right]` (tổng các phần tử trong đoạn `A[0..right]`) là tổng đang xét. `right` cũng là vị trí kết thúc của mảng con đang xét.

Ta cần tìm vị trí `i` sao cho `ps[right] - ps[i - 1]` là đạt giá trị lớn nhất (cùng với những điều kiện khác, sẽ đề cập sau).

Với `right` là vị trí đang xét, thì `ps[right]` là một số không đổi. Cho nên, để `ps[right] - ps[i - 1]` đạt giá trị lớn nhất, `ps[i - 1]` phải đạt giá trị nhỏ nhất.

Yêu cầu "số lượng đoạn nhạc sử dụng đàn kìm và đàn tranh phải bằng nhau" nghĩa là độ dài `right - i + 1` phải là số chẵn. Điều này đồng nghĩa, `right` và `i - 1` phải cùng chẵn hoặc cùng lẻ.

Do đó, ta dùng hai biến `min_ps_even` và `min_ps_odd` để theo dõi giá trị `ps[i - 1]` nhỏ nhất ứng với trường hợp chẵn và lẻ.

=== "C++"

    ```c++ linenums="51"
        // min_ps_even lưu giá trị ps[i - 1] nhỏ nhất, với i - 1 là chẵn.
        // i - 1 = 0 là chẵn, ps[0] = 0
        lli min_ps_even = ps[0];

        // min_ps_odd lưu giá trị ps[i - 1] nhỏ nhất, với i - 1 là lẻ.
        lli min_ps_odd = numeric_limits<lli>::max();    
    ```
=== "Python"

    ```py linenums="36"
        # min_ps_even Lưu giá trị ps[i - 1] nhỏ nhất, với i - 1 là chẵn.
        # i - 1 = 0 là chẵn, ps[0] = 0
        min_ps_even = ps[0]

        # min_ps_odd lưu giá trị ps[i - 1] nhỏ nhất, với i - 1 là lẻ.
        min_ps_odd = float('inf')   
    ```

**Bước 3:**

Duyệt từng phần tử `ps[right]` trong đoạn `[4..n]`, do yêu cầu có ít nhất 4 đoạn nhạc liên tiếp. Ứng với mỗi `right`, ta thực hiện

- Cập nhật các biến `min_ps_even` và `min_ps_odd`.

    Do yêu cầu có ít nhất 4 đoạn nhạc liên tiếp, nên ta có `right - i + 1 >= 4`.  Suy ra `i - 1 <= right - 4`. Đặt `k = right - 4`.

    Như vậy, ta cần cập nhật các biến `min_ps_even` và `min_ps_odd` dựa trên chỉ số `k = j - 4`. Đây là vị trí bắt đầu xa nhất có thể của mảng con (vị trí kết thúc là `right`).

- Tính độ hấp dẫn lớn nhất.

    Ta xét `right` là chẵn hoặc lẻ để sử dụng `min_ps_even` và `min_ps_odd` tương ứng.

=== "C++"

    ```c++ linenums="58"
        // Duyệt mảng tổng tiền tố trong đoạn [4..n]
        for (int right = 4; right < n + 1; ++right)
        {
            int k = right - 4;

            // Cập nhật giá trị min_ps_even và min_ps_odd
            if (k % 2 == 0)
                min_ps_even = min(min_ps_even, ps[k]);
            else
                min_ps_odd = min(min_ps_odd, ps[k]);

            // Tính độ hấp dẫn lớn nhất
            if (right % 2 == 0)
            {
                max_attractive = max(max_attractive, ps[right] - min_ps_even);
            }
            else
            {
                if (min_ps_odd != numeric_limits<lli>::max())
                    max_attractive = max(max_attractive, ps[right] - min_ps_odd);
            }
        }
    ```

=== "Python"

    ```py linenums="43"
        # Duyệt mảng tổng tiền tố trong đoạn [4..n]
        for right in range(n + 1):
            k = right - 4

            # Cập nhật giá trị min_ps_even và min_ps_odd
            if k % 2 == 0:
                min_ps_even = min(min_ps_even, ps[k])
            else:
                min_ps_odd = min(min_ps_odd, ps[k])

            # Tính độ hấp dẫn lớn nhất
            if right % 2 == 0:
                max_attractive = max(max_attractive, ps[right] - min_ps_even)
            else:
                if min_ps_odd != float('inf'):
                    max_attractive = max(max_attractive, ps[right] - min_ps_odd)
    ```


### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tayninh-buoi-1/music){:target="_blank"}.

## Bài 2: Lễ hội bánh trung thu

Trong lễ hội Trung thu tại một làng quê nổi tiếng với nghề làm bánh, có $N$ loại bánh trung thu đặc biệt được bày bán, mỗi chiếc bánh được đánh số từ $1$ đến $N$. Mỗi chiếc bánh trung thu không chỉ có vẻ ngoài đẹp mắt mà còn mang trong mình một giá trị đặc biệt về hương vị, được mô tả bằng giá trị $A_i$ của bánh thứ $i$.

Trong lễ hội, người tham gia được phép chọn bánh trong $K$ lượt chơi. Mỗi lượt, người chơi sẽ chọn một chiếc bánh để thưởng thức và họ sẽ nhận được một điểm thưởng dựa trên giá trị của chiếc bánh đã chọn. Điểm số trong lượt thứ $i$ của người chơi sẽ là $i \times$ giá trị của chiếc bánh đã chọn trong lượt đó.

Tuy nhiên, có một điều kiện đặc biệt: người chơi không thể chọn những chiếc bánh quá xa nhau. Cụ thể, nếu ở lượt thứ $i$ người chơi chọn chiếc bánh có số thứ tự $p_i$, thì phải bảo đảm $1 \le p_i - p_{i - 1} \le M$.

Nhiệm vụ của bạn là tính tổng điểm thưởng cao nhất mà người chơi có thể đạt được sau $K$ lượt chọn bánh.

**Dữ liệu:** CAKE.INP

- Dòng đầu tiên ghi 3 số nguyên $N, M, K (M \le N \le 2 \cdot 10^5, K \le min(N, 200))$ lần lượt là số bánh, khoảng cách chọn bánh và số lượt chọn.
- Dòng tiếp theo gồm $N$ số nguyên dương $A_1, A_2, ..., A_N (1 \le A_i \le 10^9)$ là các giá trị của mỗi cái bánh.

**Kết quả:** CAKE.OUT

Một số nguyên duy nhất là tổng điểm thưởng cao nhất mà người chơi có thể đạt được.

**Ví dụ:**

| CAKE.INP | CAKE.OUT |
| --- | --- |
| 7 6 3 <br> 1 10 1 4 6 3 8 | 46 |
| 7 6 3 <br> 3 10 1 4 6 3 8 | 47 |

**Giải thích:**

- Test 1: Ta chọn các cái bánh ở vị trí 2, 5 và 7. Tổng điểm sẽ là $1 \cdot 10 + 2 \cdot 6 + 3 \cdot 8 = 46$
- Test 2: Ta chọn các cái bánh ở vị trí 1, 2 và 7. Tổng điểm sẽ là $1 \cdot 3 + 2 \cdot 10 + 3 \cdot 8 = 47$

**Ràng buộc:**

- Subtask 1 (50%): $N \le 20$
- Subtask 2 (30%): $M \le 100, K \le 20$
- Subtask 3 (20%): Không có ràng buộc gì thêm.

### Bài giải đề xuất

#### Ý tưởng chính

Giải bài toán theo hướng quy hoạch động.

Cụ thể, tạo mảng hai chiều `D` với `D[choice][cake]` là tổng điểm thưởng cao nhất sau `choice` lượt chọn, và chiếc bánh được chọn ở lượt thứ `choice` (lượt cuối cùng) là bánh có thứ tự `cake`.

`D[choice][cake]` được tính theo công thức:

`D[choice][cake] = D[choice - 1][cake nào đó] + choice * A[cake]`

Như vậy, để `D[choice][cake]` là cao nhất, ta phải chọn bánh thứ `cake nào đó` ở lượt thứ `choice - 1` sao cho `D[choice - 1][cake nào đó]` là cao nhất.
 
Mặt khác, theo yêu cầu "nếu ở lượt thứ $i$ người chơi chọn chiếc bánh có số thứ tự $p_i$, thì phải bảo đảm $1 \le p_i – p_{i - 1} \le M$.", ta có:

`cake - m <= cake nào đó <= cake - 1`

Như vậy, với mỗi vị trí `cake`, ta phải duyệt đoạn `[cake - m..cake - 1]`.

Để tránh phải duyệt đoạn trên nhiều lần, ta dùng cửa sổ trượt để khi `cake` tăng lên, cửa sổ sẽ trượt theo.

Cụ thể, ta sẽ biểu diễn cửa sổ trượt này bằng hàng đợi hai đầu `deque`. Hàng đợi này sẽ lưu các chỉ số (vị trí) `cake nào đó` sao cho:

1. Các chỉ số `cake nào đó` tăng dần.

    Tức nếu chỉ số `cake nào đó` quá cũ (`cake < cake - m`) thì sẽ bị loại ra khỏi hàng đợi.
    
    Nói cách khác, các chỉ số cũng nhất luôn nằm ở đầu hàng đợi (`Q.front()`).

2. Các giá trị `D[choice - 1][]` giảm dần.

    Tức nếu giá trị `D[choice - 1][cake trước đó] <= D[choice - 1][cake mới]` thì `cake trước đó` sẽ bị loại ra khỏi hàng đợi.

    Nói cách khác, `D[][]` có giá trị cao nhất luôn nằm ở đầu hàng đợi (`Q.front()`), để khi muốn lấy max, ta chỉ cần lấy phần tử đầu hàng đợi, mà không cần phải duyệt hay so sánh.

#### Viết chương trình

**Bước 0:**

Khai báo các biến cần thiết.

=== "C++"

    ```c++ linenums="14"
    typedef long long int lli;

    // hằng số âm vô cực
    const lli INF = numeric_limits<lli>::min();

    int n, m, k;
    vector<lli> A;

    // điểm thưởng cao nhất cần tìm
    lli max_score = 0;
    ```

=== "Python"

    ```py linenums="8"
    # hằng số âm vô cực
    INF = float('-inf')

    n = m = k = 0
    A = []

    # điểm thưởng cao nhất cần tìm
    max_score = 0
    ```

**Bước 1:**

Khởi tạo bảng quy hoạch động `D` trong phần ý tưởng chính.

Ở lượt chọn đầu tiên, ta có thể chọn bất kỳ chiếc bánh nào.

=== "C++"

    ```c++ linenums="44"
        // Khởi tạo bảng quy hoạch động gồm k + 1 lượt chọn (hàng)
        // Mỗi hàng gồm n + 1 điểm thưởng cao nhất (cột)
        // D[choice][cake] là điểm thưởng cao nhất sau choice lượt chọn, kết thúc ở bánh thứ cake
        vector<vector<lli>> D(k + 1, vector<lli>(n + 1, INF));

        // Khởi tạo lượt chọn 1 (hàng 1)
        for (int cake = 1; cake < n + 1; ++cake)
        {
            D[1][cake] = A[cake];
        }
    ```

=== "Python"

    ```py linenums="30"
        # Khởi tạo bảng quy hoạch động gồm k + 1 lượt chọn (hàng)
        # Mỗi hàng gồm n + 1 điểm thưởng cao nhất (cột)
        # D[choice][cake] là điểm thưởng cao nhất sau choice lượt chọn, kết thúc ở bánh thứ cake
        D = [[INF]  * (n + 1) for _ in range(k + 1)]

        # Khởi tạo lượt chọn 1 (hàng 1)
        for cake in range(1, n + 1):
            D[1][cake] = A[cake]
    ```

**Bước 2:**

Điền bảng quy hoạch `D` bằng cách duyệt hàng và cột.

=== "C++"

    ```c++ linenums="55"
        // Điền bảng quy hoạch động từ lượt (hàng) 2 đến k
        // Duyệt từng lượt chọn (hàng)
        for (int choice = 2; choice < k + 1; ++choice)
        {
            // Khai báo hàng đợi hai đầu lưu chỉ số cake của lượt choice - 1
            deque<int> Q;

            // Duyệt từng bánh (cột)
            for (int cake = 1; cake < n + 1; ++cake)
            {
                if (D[choice - 1][cake - 1] != INF)
                {
                    // Loại bỏ các D[][] nhỏ hơn ở cuối hàng đợi (tức bên phải)
                    while (!Q.empty() && D[choice - 1][Q.back()] <= D[choice - 1][cake - 1])
                        Q.pop_back();

                    // Nạp cake - 1 vào cuối hàng đợi
                    Q.push_back(cake - 1);
                }

                // Loại bỏ chỉ số ở đầu hàng đợi Q vì nó nằm ngoài cửa sổ [cake - m, cake - 1]
                if (!Q.empty() && Q.front() < cake - m) Q.pop_front();

                // Tính D[choice][cake]
                if (!Q.empty())
                {
                    if (D[choice - 1][Q.front()] != INF)
                        D[choice][cake] = D[choice - 1][Q.front()] + (lli)choice * A[cake];
                }
            }
        }
    ```

=== "Python"

    ```py linenums="39"
        # Điền bảng quy hoạch động từ lượt (hàng) 2 đến k
        # Duyệt từng lượt chọn (hàng)
        for choice in range(2, k + 1):
            # Khai báo hàng đợi hai đầu lưu chỉ số cake của lượt choice - 1
            Q = deque()

            # Duyệt từng bánh (cột)
            for cake in range(1, n + 1):
                if D[choice - 1][cake - 1] != INF:
                    # Loại bỏ các D[][] nhỏ hơn ở cuối hàng đợi (tức bên phải)
                    while Q and D[choice - 1][Q[-1]] <= D[choice - 1][cake - 1]:
                        Q.pop()

                    # Nạp cake - 1 vào cuối hàng đợi
                    Q.append(cake - 1)

                # Loại bỏ chỉ số ở đầu hàng đợi Q vì nó nằm ngoài cửa sổ [cake - m, cake - 1]
                if Q and Q[0] < cake - m:
                    Q.popleft()

                # Tính D[choice][cake]
                if Q:
                    if D[choice - 1][Q[0]] != INF:
                        D[choice][cake] = D[choice - 1][Q[0]] + choice * A[cake]
    ```

**Bước 3:**

Duyệt hàng cuối cùng trong `D`, lấy ra giá trị cao nhất trong số các giá trị cao nhất.

=== "C++"

    ```c++ linenums="87"
        // Duyệt các điểm cao nhất trong lượt k (hàng k) để lấy ra kết quả cao nhất
        max_score = *max_element(D[k].begin(), D[k].end());
    ```

=== "Python"

    ```py linenums="64"
        # Duyệt các điểm cao nhất trong lượt k (hàng k) để lấy ra kết quả cao nhất
        max_score = max(D[k])
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tayninh-buoi-1/cake){:target="_blank"}.

## Bài 3: Bảo tồn rừng quốc gia

### Đề bài

Rừng quốc gia CR đang được chính quyền địa phương và các tổ chức bảo tồn môi trường theo dõi chặt chẽ để đảm bảo sự phát triển bền vững. Khu rừng này bắt đầu từ một khu bảo tồn ban đầu, được đánh số 0, số khu bảo tồn n bằng 1, từ đó các khu vực rừng mới dần dần được mở rộng. Mỗi khi một khu vực rừng mới được phát triển, nó sẽ được kết nối với một khu vực rừng hiện có.

Tuy nhiên, các tổ chức bảo tồn cũng cần quản lý rừng một cách khoa học. Đôi khi, một số khu vực rừng sẽ bị tách ra khỏi hệ thống quản lý do thiên tai hoặc can thiệp từ bên ngoài và toàn bộ hệ thống con của nó cũng bị tách ra khỏi hệ thống quản lý. Ngoài ra, họ cần thường xuyên kiểm tra số lượng cây xanh và khu vực còn được bảo vệ trong một khu vực rừng cụ thể. Có thể hình dung hệ thống quản lý rừng giống như đồ thị dạng cây nhưng luôn biến đổi một cách tự nhiên.

Cụ thể, có q truy vấn về việc quản lý rừng, bao gồm các hoạt động sau:

- 1: $+ u (0 \le u < n)$: Mở rộng thêm một khu vực rừng mới có nhãn $i = n$, và $n$ tăng thêm 1. Nối khu vực $i$ vào khu vực $u$, và lúc này $u$ sẽ là cha (tổ tiên trực tiếp) của $i$.
- 2: $- u (0 \le u < n)$: Xóa bỏ khu vực $u$ và hệ thống con của $u$.
- 3: $? u (0 \le u < n)$: Báo cáo số lượng khu vực rừng $u$ và hệ thống con của nó, bao gồm chính khu vực $u$.

Với mỗi truy vấn loại 3, bạn hãy in ra kết quả của câu hỏi đó.

**Dữ liệu:** TREE.INP

- Dòng đầu tiên gồm số $q (1 < q \le 10^5)$ là số lượng truy vấn.
- $q$ dòng tiếp theo dòng thứ $i$ lần lượt chứa ký tự $c$ và số $u$ cho biết nội dung của truy vấn. Đề bài bảo đảm các điều kiện tại ngay trước thời điểm hỏi của mỗi truy vấn: $c \in \{+, -, ?\}, 0 \leq u < n$  và $u$ chưa bị xóa.

**Kết quả:** TREE.OUT

- Với mỗi lượt truy vấn loại 3, in ra một số nguyên duy nhất là số khu vực rừng đang được bảo vệ trong hệ thống con của khu vực u bao gồm cả chính u.



| TREE.INP | TREE.OUT |
| --- | --- |
| 8<br>+ 0<br>+ 0<br>+ 0<br>- 1<br>? 0<br>+ 2<br>- 3<br>? 2 | 3<br>2 |

**Giải thích:**

Với truy vấn loại 3 đầu tiên (? 0), cây gốc 0 chỉ còn 2 nút con là 2 và 3, xuất ra 3 vì đếm cả nút 0.

**Ràng buộc:**

- Subtask 1 (50%): $q \le 10^3$
- Subtask 2 (30%): Không tồn tại truy vấn loại 2
- Subtask 3 (20%): $q \le 10^5$

### Bài giải đề xuất

#### Ý tưởng chính

Lưu và cập nhật kích thước của các cây con bằng cách biến sau:

- Mảng một chiều `parent[]` lưu nút cha của một nút nào đó.
- Mảng `children[]` mà mỗi phần tử là một vector để lưu các con trực tiếp của một nút nào đó.
- Mảng một chiều `tree_size[]` lưu số lượng nút trong cây con gốc của một nút nào đó.

#### Viết chương trình

**Bước 0:**

Khai báo các biến cần thiết.

=== "C++"

    ```c++ linenums="10"
    const int MAX = 100002; 

    int number_of_queries;

    // nhãn của khu nút mới
    int n;

    // parent[i] là cha của nút i
    int parent[MAX];

    // children[i] là vector lưu các con trực tiếp của i
    vector<int> children[MAX];

    // tree_size[i] là số lượng nút trong cây con có gốc là i, bao gồm cả i
    int tree_size[MAX];
    ```

=== "Python"

    ```py linenums="7"
    MAX = 100002 

    # nhãn của khu nút mới
    n = 0

    # parent[i] là cha của nút i
    parent = [0] * MAX

    # children[i] là vector lưu các con trực tiếp của i
    children = [[] for _ in range(MAX)]

    # tree_size[i] là số lượng nút trong cây con có gốc là i, bao gồm cả i
    tree_size = [0] * MAX
    ```

**Bước 1:**

Viết hàm `add()` thể thêm nút con vào nút `u`. Hàm này hoạt động như sau:

- Tạo nút mới `new_node` có nhãn là `n`.
- Đặt nút cha của `new_node` là `u`.
- Thêm `new_node` vào danh sách `children[u]`.
- Khởi tạo kích thước bằng 1 cho `new_node`.
- Cập nhật kích thước cây con của các nút tổ tiên.
- Tăng `n` lên 1 để chuẩn bị cho những lần thêm nút về sau.

=== "C++"

    ```c++ linenums="28"
    void add(int u)
    {
        // Nút mới có nhãn là n
        int new_node = n;

        // Thiết lập liên kết cha và con đối với nút mới
        parent[new_node] = u;
        children[u].push_back(new_node);

        // Khởi tạo kích thước cho nút mới
        tree_size[new_node] = 1;

        // Cập nhật kích thước cây con của các nút tổ tiên
        // bằng cách duyệt ngược từ u về gốc
        int current = u;
        while (current != -1)
        {
            tree_size[current]++;
            current = parent[current];
        }

        // Tăng nhãn cho nút tiếp theo
        n++;
    }
    ```

=== "Python"

    ```py linenums="23"
    def add(u):
        global n, parent, children, tree_size

        # Nút mới có nhãn là n
        new_node = n

        # Thiết lập liên kết cha và con đối với nút mới
        parent[new_node] = u
        children[u].append(new_node)

        # Khởi tạo kích thước cho nút mới
        tree_size[new_node] = 1

        # Cập nhật kích thước cây con của các nút tổ tiên
        # bằng cách duyệt ngược từ u về gốc
        current = u
        while current != -1:    
            tree_size[current] += 1
            current = parent[current]
        
        # Tăng nhãn cho nút tiếp theo
        n += 1
    ```

**Bước 2:**

Viết hàm `remove()` để xoá nút `u`. Hàm này hoạt động như sau:

- Khai báo các biến tạm để lưu nút cha của `u` và kích thước cây con của `u`.
- Xoá nút `u` bằng cách loại bỏ `u` khỏi danh sách `children[p]` (`p` là nút cha của `u`).

    Ta không cần xoá các nút con của `u` vì chúng đã bị ngắt liên kết khỏi cây chính.

- Cập nhật kích thước cây con của các nút tổ tiên.

=== "C++"

    ```c++ linenums="55"
    void remove(int u)
    {
        // nút cha của nút u
        int p = parent[u];
        
        // kích thước của hệ thống con của u
        int size_u = tree_size[u];

        if (p != -1)
        {
            // Khai báo tham chiếu đến vector children[p]
            vector<int>& ref = children[p];

            // Xoá nút u (là con của nút p)
            ref.erase(remove(ref.begin(), ref.end(), u), ref.end());
        }
        
        // Cập nhật kích thước cây con của các nút tổ tiên
        // bằng cách duyệt ngược từ p về gốc
        int current = p;
        while (current != -1)
        {
            tree_size[current] -= size_u;
            current = parent[current];
        }
    }
    ```

=== "Python"

    ```py linenums="48"
    def remove(u):
        global n, parent, children, tree_size

        # nút cha của nút u
        p = parent[u]
        
        # kích thước của hệ thống con của u
        size_u = tree_size[u]

        if p != -1:
            children[p].remove(u)
            
        # Cập nhật kích thước cây con của các nút tổ tiên
        # bằng cách duyệt ngược từ p về gốc
        current = p
        while current != -1:
            tree_size[current] -= size_u
            current = parent[current]
    ```

**Bước 3:**

Viết hàm `get_size()` lấy kích thước cây con của nút `u`. Hàm này chỉ truy xuất giá trị đã được lưu sẵn là `tree_size[u]`.

=== "C++"

    ```c++ linenums="84"
    int get_size(int u)
    {
        return tree_size[u];
    }
    ```

=== "Python"

    ```py linenums="69"
    def get_size(u):
        global tree_size

        return tree_size[u]
    ```

**Bước 4:**

Đối với bài này, ta vừa đọc input, vừa xử lý và vừa ghi ra output.

=== "C++"

    ```c++ linenums="98"
        // Khởi tạo nút 0
        parent[0] = -1;
        tree_size[0] = 1;
        
        // nhãn của nút tiếp theo sẽ là 1
        n = 1;

        // Đọc số truy vấn
        cin >> number_of_queries;

        // Duyệt từng truy vấn q
        for (int q = 0; q < number_of_queries; ++q)
        {
            char task;
            int u;
            cin >> task >> u;
            
            if (task == '+')
                add(u);
            else if (task == '-')
                remove(u);
            else
                cout << get_size(u) << '\n';
        }
    ```

=== "Python"

    ```py linenums="23"
        with open(input_file, 'r') as fi, open(output_file, 'w') as fo:
                # Khởi tạo nút 0
                parent[0] = -1
                tree_size[0] = 1
                
                # nhãn của nút tiếp theo sẽ là 1
                n = 1

                # Đọc số truy vấn
                number_of_queries = int(fi.readline()) 

                # Duyệt từng truy vấn q
                for q in range(number_of_queries):
                    task, u = fi.readline().split()
                    u = int(u)

                    if task == '+':
                        add(u)
                    elif task == '-':
                        remove(u)
                    else:
                        fo.write(f'{get_size(u)}\n')
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tayninh-buoi-1/tree){:target="_blank"}.
