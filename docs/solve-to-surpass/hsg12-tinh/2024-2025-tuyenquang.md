# 2024-2025 Tuyên Quang

## Câu 1:

### Đề bài

### Bài giải đề xuất

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](){:target="_blank"}.


## Câu 2:

### Đề bài

### Bài giải đề xuất

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](){:target="_blank"}.


## Câu 3:

### Đề bài

### Bài giải đề xuất

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](){:target="_blank"}.

## Câu 4:

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

        // Đánh dấu false cho các bội của số nguyên tố p
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


**Bước 2:**

Viết hàm tìm số nguyên tố tiếp theo lớn hơn trọng số của cạnh.


=== "C++"

    ```c++ linenums="69"
    // Hàm dùng để tìm số nguyên tố tiếp theo lớn hơn w
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

            // Dừng thuật toán khi đã đến đích
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

                    // Thêm v vào q với khoảng cách ngắn nhất từ start đến v là d[v]
                    q.insert({D[v], v});
                }
            }
        }
    }
    ```

### Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/hsg/tree/main/hsg12-tinh/2024-2025-tuyenquang/ddnt){:target="_blank"}.