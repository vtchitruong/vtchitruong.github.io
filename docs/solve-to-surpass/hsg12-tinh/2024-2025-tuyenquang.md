# 2024-2025 Tuyên Quang

## Câu 1: TÍNH TỔNG

### Đề bài

Cho dãy A gồm n phần tử $a_1, a_2, ..., a_n$. Hãy lập trình tính tổng các phần tử có chữ số hàng đơn vị lớn hơn chữ số hàng chục trong dãy.

**Dữ liệu:** TINHTONG.INP

- Dòng đầu tiên chứa số nguyên dương n $(1 \le n \le 10^6)$.
- Dòng thứ hai chứa n số nguyên $a_1, a_2, ..., a_n$ $(10 \le a_i \le 10^6; 1 \le i \le n)$.

**Kết quả:** TINHTONG.OUT

**Ví dụ:**

| TINHTONG.INP | TINHTONG.OUT |
| --- | --- |
| 5 <br> 15 141 28 66 79 | 122 |

**Ràng buộc:**

- Có 40% số test tương ứng với 40% số điểm của bài có $n \le 10^3; a_i \le 10^3$.
- Có 30% số test tương ứng với 30% số điểm của bài có $n \le 10^3; a_i \le 10^6$.
- Có 30% số test tương ứng với 30% số điểm của bài có $10^3 < n \le 10^6$.

### Bài giải đề xuất

=== "C++"

    ```c++ linenums="22"
        cin >> n;
        
        int a;

        // Đọc từng số của input
        for (int i = 0; i < n; ++i)
        {
            cin >> a;

            // Kiểm tra thoả điều kiện và cộng dồn
            if (a % 10 > a / 10 % 10)
                result += a;
        }
    ```
=== "Python"

    ```py linenums="27"
        # Duyệt từng phần tử trong mảng A
        for a in A:
            # Kiểm tra thoả điều kiện và cộng dồn
            if a % 10 > a // 10 % 10:
                result += a
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tuyenquang/tinhtong){:target="_blank"}.

## Câu 2: TƯƠNG ĐỒNG

### Đề bài

Gia đình Thỏ con vừa xây xong một căn nhà khang trang. Công việc tiếp theo là hoàn thiện nội thất. Thỏ con được bố mẹ giao nhiệm vụ tìm mua hai bức tranh để trang trí phòng khách.

Tại cửa hàng, có tất cả $n$ bức tranh đánh số từ 1 đến $n$. Bức tranh thứ $i$ có mã màu là $a_i$.

Thỏ con muốn mua hai bức tranh sao cho màu sắc của chúng tương đồng nhau, tức hiệu số mã màu của hai bức tranh đó phải không lớn hơn $X$.

**Yêu cầu:** hãy cho biết Thỏ con có bao nhiêu cách chọn ra hai bức tranh để mua mà màu sắc tương đồng nhau.

**Dữ liệu:** TUONGDONG.INP

- Dòng đầu tiên chứa hai số nguyên dương $n, X (n \le 10^7; X \le 10^6)$.
- Dòng thứ hai chứa $n$ số nguyên dương $a_1, a_2, ..., a_n (a_i \le 10^6; 1 \le i \le n)$.

**Kết quả:** TUONGDONG.OUT

Một số nguyên duy nhất là số cách chọn ra hai bức tranh để mua thoả mãn yêu cầu.

**Ví dụ:**

| TUONGDONG.INP | TUONGDONG.OUT |
| --- | --- |
| 4 3 <br> 5 6 9 2 | 3 |

**Giải thích:**

Có 3 cách chọn sau:

- Chọn tranh 1 và 2
- Chọn tranh 1 và 4
- Chọn tranh 2 và 3

**Ràng buộc:**

- Có 40% số test tương ứng với 40% số điểm của bài có $n \le 10^3$.
- Có 30% số test tương ứng với 30% số điểm của bài có $10^3 < n \le 10^5$.
- Có 30% số test tương ứng với 30% số điểm của bài có $10^5 < n \le 10^7$.

### Bài giải đề xuất

Ý tưởng chính:

Sắp xếp mảng `pictures` chứa các mã màu của dữ liệu đầu vào theo thứ tự tăng dần.

Giả sử ta đang chọn bức tranh `i` có mã màu là `pictures[i]`.

Như vậy, số cách chọn hai bức tranh (mà trong đó đã chọn bức tranh `i`) chính là số cách chọn bức tranh thứ hai `j` sao cho `pictures[j] \le pictures[i] + X`.

Để xác định vị trí `j`, trong C++, ta dùng hàm `upper_bound()` để tìm vị trí đầu tiên lớn hơn `pictures[i] + X`.

Mặc định trong Python không có hàm `upper_bound()`, cho nên ta dùng vòng lặp while để xác định vị trí `j`.

=== "C++"

    ```c++ linenums="39"
        // Sắp xếp mảng pictures theo thứ tự tăng dần
        sort(pictures.begin() + 1, pictures.end());

        // Giới hạn màu sắc tương đồng
        int limit;

        // Duyệt từng tranh từ 1 đến áp cuối
        for (int i = 1; i < n; ++i)
        {
            // Tính giới hạn màu sắc
            limit = pictures[i] + X;

            // Tìm vị trí đầu tiên mà màu sắc vượt quá giới hạn
            vector<int>::iterator it = upper_bound(pictures.begin() + i + 1, pictures.end(), limit);

            // Số cách chọn hai bức tranh chính là số lượng bức tranh thứ hai có thể chọn 
            number_of_ways += distance(pictures.begin() + i + 1, it);
        }
    ```
=== "Python"

    ```py linenums="25"
        # Sắp xếp mảng pictures theo thứ tự tăng dần
        pictures.sort()

        # Duyệt từng tranh từ 0 đến áp cuối
        for i in range(n - 1):
            # Tính giới hạn màu sắc
            limit = pictures[i] + X

            # Tìm vị trí đầu tiên mà màu sắc vượt quá giới hạn
            j = i + 1
            while j < n and pictures[j] <= limit:
                j += 1

            # Số cách chọn hai bức tranh chính là số lượng bức tranh thứ hai có thể chọn 
            number_of_ways += (j - (i + 1))
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tuyenquang/tuongdong){:target="_blank"}.

## Câu 3: TRÒ CHƠI

### Đề bài

Nhân dịp đầu năm mới, Đoàn Thanh niên tổ chức chương trình khai xuân cho học sinh chơi các trò chơi. Có tất cả $n$ học sinh $(1 \le n \le 10^9)$ đăng ký tham gia. Các bạn học sinh này xếp thành hàng ngang và đánh số từ 1 đến $n$.

Có tất cả $k (1 \le k \le 10^6)$ trò chơi. Trò chơi thứ $i$ gồm các học sinh có số thứ tự từ $l_i$ đến $r_i$ tham gia. Sau khi tham gia xong trò chơi đó, học sinh quay về vị trí cũ trong hàng.

**Yêu cầu:** kết thúc chương trình, ban tổ chức muốn biết $q (1 \le q \le 10^6)$ học sinh có số thứ tự lần lượt là $b_1, b_2, ..., b_q$, mỗi bạn đã tham gia bao nhiêu trò chơi.

**Dữ liệu:** TROCHOI.INP

- Dòng đầu tiên chứa ba số nguyên dương $n, k, q$.
- Dòng thứ i trong k dòng tiếp theo chứa hai số nguyên dương $l_i, r_i (1 \le li \le ri \le n)$.
- Dòng cuối cùng chứa $q$ số nguyên dương $b_1, b_2, ..., bq (1 \le bi \le n; 1 \le i \le q)$.

**Kết quả:** TROCHOI.OUT

Dòng thứ $i (1 \le i \le q)$ chứa một số nguyên là số lượng trò chơi mà học sinh $b_i$ đã tham gia.

**Ví dụ:**

| TROCHOI.INP | TROCHOI.OUT |
| --- | --- |
| 10 2 3 <br> 3 9 <br> 8 9 <br> 6 8 2 | 1 <br> 2 <br> 0 |

**Ràng buộc:**

- Có 40% số test tương ứng với 40% số điểm của bài có $1 \le n, k, q \le 10^3$.
- Có 30% số test tương ứng với 30% số điểm của bài có $n \le 10^6$.
- Có 30% số test tương ứng với 30% số điểm của bài có $10^6 < n \le 10^9$.

### Bài giải đề xuất

Ý tưởng chính: vì số lượng học sinh lên đến $10^9$, ta nên sử dụng mảng chênh lệch và mảng cộng dồn để giảm thời gian tính toán.

**Bước 0:** Khai báo biến

Khai báo mảng chênh lệch `diff` và mảng tần số kết quả `join`.

Để tiết kiệm bộ nhớ, trong C++, ta sử dụng kiểu `map`. Đặc điểm của `map` là tự động sắp xếp các phần tử theo thứ tự tăng dần của khóa.

Trong Python, ta sử dụng kiểu `dict`. Đặc điểm của `dict` là không sắp xếp các phần tử theo thứ tự tăng dần của khóa. Cho nên, ta cần gọi hàm để sắp xếp lại.

=== "C++"

    ```c++ linenums="15"
    // Mảng chênh lệch (difference array) (dùng kiểu map để tránh trường hợp lớn)
    map<int, int> diff;

    // Mảng lưu tần số xuất hiện (dùng kiểu map để tránh trường hợp lớn)
    map<int, int> join;
    ```
=== "Python"

    ```py linenums="12"
    # Mảng chênh lệch (difference array) (dùng kiểu dict để tránh trường hợp lớn)
    diff = {}

    # Mảng lưu tần số xuất hiện (dùng kiểu dict để tránh trường hợp lớn)
    join = {}
    ```

**Bước 1:** Đọc và khởi tạo

Vừa đọc các dữ liệu đầu vào vừa cập nhật mảng chênh lệch `diff`.

=== "C++"

    ```c++ linenums="29"
        cin >> n >> k >> q;

        int l, r;
        for (int i = 1; i < k + 1; ++i)
        {
            cin >> l >> r;

            // Cộng 1 vào học sinh l
            diff[l]++;

            // Trừ 1 khỏi học sinh r + 1
            diff[r + 1]--;
        }
    ```
=== "Python"

    ```py linenums="23"
            n, k, q = map(int, file.readline().split())

            for i in range(1, k + 1):
                l, r = map(int, file.readline().split())

                # Cộng 1 vào học sinh l
                diff[l] = diff.get(l, 0) + 1

                # Trừ 1 vào học sinh r + 1
                diff[r + 1] = diff.get(r + 1, 0) - 1

            # Đọc thông tin các học sinh cần kiểm tra
            students = list(map(int, file.readline().split()))
    ```

**Bước 2:** Xử lý

Tính mảng cộng dồn `join` (`join[i]` là số lần tham gia của học sinh `i`) từ mảng chênh lệch `diff`.

=== "C++"

    ```c++ linenums="56"
        // Khởi tạo giá trị cộng dồn hiện tại
        int current = 0;

        // Duyệt từng phần tử của mảng chênh lệch
        int student_id, difference;   
        for (auto &d : diff)
        {
            // Gán biến nhằm làm rõ nghĩa hơn
            student_id = d.first;
            difference = d.second;

            // Thực hiện cộng dồn
            current += difference;
            join[student_id] = current;
        }
    ```
=== "Python"

    ```py linenums="42"
        # Khởi tạo giá trị cộng dồn hiện tại
        current = 0

        # Duyệt từng phần tử của mảng chênh lệch
        for key in sorted(diff.keys()):
            # Gán biến nhằm làm rõ nghĩa hơn
            student_id = key
            difference = diff[key]

            # Thực hiện cộng dồn
            current += difference
            join[student_id] = current
    ```


**Bước 3:** In kết quả

Để tránh trường hợp không có học sinh cần truy vấn trong mảng `join`, trong C++, ta dùng `upper_bound()` để lấy giá trị gần nhất.

Trong Python, ta sắp xếp lại mảng `join` và dùng hàm `next()` để lấy giá trị gần nhất.

=== "C++"

    ```c++ linenums="78"
    for (int i = 1; i < q + 1; ++i)
    {
        // Tìm học sinh đầu tiên có mã số lớn hơn students[i]
        map<int, int>::iterator it = join.upper_bound(students[i]);

        // Nếu không tìm thấy học sinh students[i] thì in ra 0
        if (it == join.begin())
            cout << 0;
        else
            // Ngược lại, tìm thấy, thì in ra số trò chơi mà học sinh students[i] tham gia
            cout << prev(it)->second; 

        // Xuống dòng nếu không phải học sinh cuối cùng
        if (i != q) cout << '\n';
    }
    ```
=== "Python"

    ```py linenums="60" 
            for student in students:
                # Tìm học sinh đầu tiên có mã số lớn hơn students[i]
                keys = sorted(join.keys())
                it = next((key for key in keys if key > student), None)

                # Nếu không tìm thấy học sinh students[i] thì in ra 0
                if it is None:
                    file.write('0')
                else:
                    # Ngược lại, tìm thấy, thì in ra số trò chơi mà học sinh students[i] tham gia
                    prev_key = keys[keys.index(it) - 1] if keys.index(it) > 0 else None
                    if prev_key is None:
                        file.write('0')
                    else:
                        file.write(f'{join[prev_key]}')
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tuyenquang/trochoi){:target="_blank"}.

## Câu 4: ĐƯỜNG ĐI NGUYÊN TỐ

### Đề bài

Cho một đồ thị vô hướng, liên thông gồm $n$ đỉnh được đánh số từ 1 đến $n$ và $m$ cạnh được đánh số từ 1 đến $m$.

Cạnh thứ $i$ nối đỉnh $u_i$ với đỉnh $v_i$ và có trọng số $w_i$. Mỗi cạnh của đồ thị có thể tăng thêm một đại lượng nguyên không âm để trọng số của cạnh đó là nguyên tố.

**Yêu cầu:** hãy tìm một đường đi từ đỉnh $s$ đến đỉnh $t chỉ đi qua các cạnh có trọng số là số nguyên tố (sau khi đã tăng) với tổng giá trị tăng của các cạnh là nhỏ nhất có thể.

**Dữ liệu:** DDNT.INP

- Dòng thứ nhất: gồm bốn số nguyên dương $n, m, s, t (n, m \le 10^5; s, t \le n)$.
- Dòng thứ $i$ trong $m$ dòng sau chứa ba số nguyên dương $u_i, v_i, w_i (1 \le u_i, v_i \le n; w_i \le 10^6)$.

**Kết quả:** DDNT.OUT

Một số nguyên duy nhất là tổng giá trị tăng nhỏ nhất của các cạnh tìm được.

**Ví dụ:**

| DDNT.INP | DDNT.OUT |
| --- | --- |
| 4 5 1 4 <br> 1 2 20 <br> 1 3 3 <br> 2 4 10 <br> 3 4 6 <br> 1 4 15 | 1 |

**Giải thích:**

Đường đi từ đỉnh 1 đến đỉnh 4 là: 1 - 3 - 4

Cạnh 1 - 3: trọng số là 3. Tăng 0. (3 + 0 = 3 là nguyên tố)

Cạnh 3 - 4: trọng số là 6. Tăng 1. (6 + 1 = 7 là nguyên tố)

Tổng giá trị tăng là: 0 + 1 = 1.

**Ràng buộc:**

- Có 20% số test tương ứng với 20% số điểm của bài có $u_i + 1 = v_i; \forall i = 1..m$.
- Có 40% số test tương ứng với 40% số điểm của bài có $n, m \le 2000$.
- Có 40% số test tương ứng với 40% số điểm của bài có $2000 < n, m \le 10^5$.

### Bài giải đề xuất

Ý tưởng chính là áp dụng thuật toán Dijkstra để tìm đường đi ngắn nhất từ đỉnh $s$ đến đỉnh $t$ trên đồ thị đã cho.

Cần chú ý, khoảng cách nhỏ nhất không phải được tính từ trọng số các cạnh trong dữ liệu đầu vào, mà được tính từ các **giá trị tăng** để đạt được số nguyên tố.

Do đó, ta cần viết riêng một hàm để tính **giá trị tăng** này.

Để kiểm tra số nguyên tố trong phạm vi $[0..10^6]$, ta tạo sàng Eratosthenes.

**Bước 1:**

Tạo sàng Eratosthenes từ 1 đến 1 triệu lẻ 3, vì đây là số nguyên tố đầu tiên lớn hơn $10^6$.

=== "C++"

    ```c++ linenums="42"
    // Hàm dùng để tạo sàng nguyên tố trong phạm vi đến 1 triệu lẻ 3
    void sieve()
    {
        int number = 1E6 + 3;

        // Giả sử mọi số đều nguyên tố
        prime.resize(number + 1, true);
        
        // 0 và 1 không phải số nguyên tố
        prime[0] = false;
        prime[1] = false;

        // Duyệt từ 2 đến căn bậc 2 của number
        for (int p = 2; p * p < number + 1; ++p)
        {
            // Nếu p là nguyên tố thì đánh dấu false cho bội của p
            if (prime[p] == true)
            {
                for (int i = p * p; i < number + 1; i += p)
                {
                    prime[i] = false;
                }
            }
        }
    }
    ```
=== "Python"

    ```py linenums="32" 
    # Hàm dùng để tạo sàng nguyên tố trong phạm vi đến 1 triệu lẻ 3
    def sieve():
        global prime

        number = 1000003

        # Giả sử mọi số đều nguyên tố
        prime = [True] * number

        # 0 và 1 không phải số nguyên tố
        prime[0] = prime[1] = False

        # Duyệt từ 2 đến căn bậc 2 của number
        for p in range(2, int(number ** 0.5) + 1):
            # Nếu p là số nguyên tố thì đánh dấu false cho các bội của p
            if prime[p]:
                for i in range(p * p, number + 1, p):
                    prime[i] = False
    ```


**Bước 2:**

Viết hàm tính **giá trị tăng** để đạt được số nguyên tố tiếp theo lớn hơn `w`.

=== "C++"

    ```c++ linenums="69"
    // Hàm dùng để tính giá trị tăng thêm để đạt được số nguyên tố tiếp theo lớn hơn w
    int increase_to_next_prime(int w)
    {
        // Nếu w là số nguyên tố thì trả về 0
        if (prime[w])
            return 0;

        // Tìm số nguyên tố tiếp theo lớn hơn w
        int next_prime = w + 1;
        while (!prime[next_prime])
            ++next_prime;

        return next_prime - w;
    }
    ```
=== "Python"

    ```py linenums="51" 
    # Hàm dùng để tính giá trị tăng thêm để đạt được số nguyên tố tiếp theo lớn hơn w
    def increase_to_next_prime(w):
        global prime

        # Nếu w là số nguyên tố thì trả về 0
        if prime[w]:
            return 0

        # Tìm số nguyên tố tiếp theo lớn hơn w
        next_prime = w + 1
        while prime[next_prime] == False:
            next_prime += 1
        
        return next_prime - w
    ```
**Bước 3:**

Thực hiện thuật toán Dijkstra. Trong đó, ta thường xuyên cập nhật mảng `D` khoảng cách ngắn nhất từ đỉnh xuất phát đến các đỉnh khác.

Khoảng cách ngắn nhất lưu trong mảng `D` này được tính từ các **giá trị tăng** (để đạt được số nguyên tố), chứ không phải tình từ các trọng số của cạnh.

=== "C++"

    ```c++ linenums="85"
    void dijkstra()
    {
        // Mảng D dùng để lưu trữ khoảng cách từ đỉnh start đến các đỉnh còn lại
        D.resize(n + 1, INT_MAX);
        D[start] = 0;

        // Mỗi phần tử trong set là {d, u}, trong đó d là khoảng cách ngắn nhất từ start đến u
        set<pair<int, int>> q;
        q.insert({0, start});

        // Trong khi q vẫn còn phần tử
        while (!q.empty())
        {
            // Lấy ra đỉnh u có khoảng cách ngắn nhất từ start (vì set đã sắp xếp theo khoảng cách)
            int u = q.begin()->second;

            // Lấy ra khoảng cách ngắn nhất từ start đến u
            int d = q.begin()->first;
            q.erase(q.begin());

            // Dừng khi đã đến đích
            if (u == finish)
                break;

            // Nếu đã có một đường đi ngắn hơn từ start đến u thì không cần xét đỉnh u nữa
            if (d > D[u])
                continue;

            // Duyệt từng đỉnh v kề với đỉnh u
            for (int i = 0; i < graph[u].size(); ++i)
            {
                // v là đỉnh kề với u
                int v = graph[u][i].first;

                // w là trọng số của cạnh u -> v
                int w = graph[u][i].second;

                // Tìm giá trị tăng thêm để đạt được số nguyên tố tiếp theo lớn hơn w
                int increase = increase_to_next_prime(w);

                // Nếu có thể đi start -> u -> v nhanh hơn so với start -> v
                if (D[u] + increase < D[v])
                {
                    // Nếu v đã có trong q thì xóa phần tử liên quan
                    q.erase({D[v], v});

                    // Cập nhật lại khoảng cách ngắn nhất từ đỉnh start đến đỉnh v
                    D[v] = D[u] + increase;

                    // Thêm v vào q với khoảng cách ngắn nhất từ start đến v là D[v]
                    q.insert({D[v], v});
                }
            }
        }
    }
    ```
=== "Python"

    ```py linenums="67" 
    def dijkstra():
        global n, start, graph, D, prime

        # Mảng D dùng để lưu trữ khoảng cách từ đỉnh start đến các đỉnh còn lại
        D = [float('inf')] * (n + 1)
        D[start] = 0

        # Mỗi phần tử trong set là {d, u}, trong đó d là khoảng cách ngắn nhất từ start đến u
        q = []
        q.append((0, start))

        # Trong khi q vẫn còn phần tử
        while q:
            # Lấy ra đỉnh u có khoảng cách ngắn nhất từ start
            min_element = min(q, key=lambda x: x[0])
            d = min_element[0]
            u = min_element[1]
            q.remove(min_element)

            # Dừng khi đã đến đỉnh finish
            if u == finish:
                break

            # Nếu đã có một đường đi ngắn hơn từ start đến u thì không cần xét đỉnh u nữa
            if d > D[u]:
                continue

            # Duyệt từng đỉnh v kề với đỉnh u
            for i in range(len(graph[u])):
                
                # v là đỉnh kề với u
                v = graph[u][i][0]

                # w là trọng số của cạnh u -> v
                w = graph[u][i][1]

                # Tìm giá trị tăng thêm để đạt được số nguyên tố tiếp theo lớn hơn w
                increase = increase_to_next_prime(w)

                # Nếu có thể đi start -> u -> v nhanh hơn so với start -> v
                if D[u] + increase < D[v]:
                    # Nếu v đã có trong hàng đợi thì xoá phần tử liên quan
                    if (D[v], v) in q:
                        q.remove((D[v], v))

                    # Cập nhật lại khoảng cách ngắn nhất từ đỉnh start đến đỉnh v
                    D[v] = D[u] + increase

                    # Thêm v vào q với khoảng cách ngắn nhất từ start đến v là D[v]
                    q.append((D[v], v))
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tuyenquang/ddnt){:target="_blank"}.