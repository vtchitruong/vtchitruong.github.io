# Floyd-Warshall

## Khái quát

**Floyd-Warshall** là thuật toán tìm đường đi ngắn nhất giữa tất cả cặp đỉnh trong đồ thị.

Thuật toán này do Robert Floyd phát minh năm 1962 và Stephen Warshall cải tiến năm 1962.

Ý tưởng chính của thuật toán là duyệt qua tất cả các cặp đỉnh và cập nhật đường đi ngắn nhất giữa chúng thông qua đỉnh trung gian.

Floyd-Warshall có thể áp dụng cho đồ thị:

- Có hướng hoặc vô hướng
- Có trọng số hoặc không trọng số
- Có chu trình âm, nhưng không thể xác định chu trình âm cụ thể.

Độ phức tạp của thuật toán là $O(n^3)$, với $n$ là số đỉnh của đồ thị.

## Bài toán

### Yêu cầu

Tìm đường đi ngắn nhất từ đỉnh *start* đến đỉnh *finish* bằng thuật toán Floyd-Warshall.

### Input

```pycon
6 10 1 5
1 2 1
2 3 5
2 4 2
2 6 7
3 6 1
4 1 2
4 3 1
4 5 4
5 4 3
6 5 1
```

### Output

```pycon
6
1 2 4 3 6 5
```

### Giải thích

Input:

- Dòng đầu tiên chứa bốn số lần lượt là: 6 đỉnh, 10 cạnh, đỉnh xuất phát là 1 và đỉnh đích là 5.
- Mỗi dòng tiếp theo chứa hai đỉnh theo chiều từ u đến v và khoảng cách giữa chúng.

Phác thảo đồ thị theo input như sau:

![Đồ thị theo input](../graph/images/graph-problem-demo.svg){loading=lazy}

Output:

- Dòng đầu tiên là khoảng cách ngắn nhất từ đỉnh *start* đến đỉnh *finish*. Cụ thể, khoảng cách ngắn nhất từ đỉnh 1 đến đỉnh 5 là 6.
- Dòng thứ hai liệt kê các đỉnh nằm trên đường đi tìm được: 1 -> 2 -> 4 -> 3 -> 6 -> 5.

## Viết chương trình

### Đọc input

Lưu dòng đầu tiên của input vào bốn biến `number_of_vertices`, `number_of_edges`, `start`, `finish`.

Đọc các dòng còn lại của input và biểu diễn các cạnh của đồ thị bằng ma trận kề `graph`, với `graph[u][v]` là trọng số của cạnh u -> v.

=== "C++"

    ```c++ linenums="25"
        cin >> number_of_vertices >> number_of_edges >> start >> finish;

        graph.resize(number_of_vertices + 1, vector<int>(number_of_vertices + 1, 1e9));

        for (int u = 1; u < number_of_vertices + 1; ++u)
        {
            graph[u][u] = 0;
        }

        int u, v, w;
        for (int i = 0; i < number_of_edges; ++i)
        {
            cin >> u >> v >> w;
            graph[u][v] = w;
        }
    ```
=== "Python"

    ```py linenums="19"
            number_of_vertices, number_of_edges, start, finish = map(int, f.readline().split())

            graph = [[float('inf') for _ in range(number_of_vertices + 1)] for _ in range(number_of_vertices + 1)]

            for u in range(1, number_of_vertices + 1):
                graph[u][u] = 0

            for _ in range(number_of_edges):
                u, v, w = map(int, f.readline().split())
                graph[u][v] = w
    ```

### Thực hiện Floyd-Warshall

**Bước 0**: Khởi tạo

Khởi tạo mảng hai chiều `trace` với `trace[u][v]` lưu đỉnh trung gian cuối cùng trên đường đi ngắn nhất từ u đến v.

=== "C++"

    ```c++ linenums="45"
        // Khởi tạo mảng trace
        trace.resize(number_of_vertices + 1, vector<int>(number_of_vertices + 1, 0));

        for (int u = 1; u < number_of_vertices + 1; ++u)
        {
            for (int v = 1; v < number_of_vertices + 1; ++v)
            {
                if (graph[u][v] != 1e9 && u != v)
                    trace[u][v] = u;
            }
        }
    ```
=== "Python"

    ```py linenums="34"
        # Khởi tạo mảng trace
        trace = [[-1 for _ in range(number_of_vertices + 1)] for _ in range(number_of_vertices + 1)]

        for u in range(1, number_of_vertices + 1):
            for v in range(1, number_of_vertices + 1):
                if graph[u][v] != float('inf') and u != v:
                    trace[u][v] = u
    ```

**Bước 1:** Duyệt đỉnh và cập nhật đường đi

Duyệt từng đỉnh trung gian `k` và duyệt từng cặp đỉnh `u`, `v`:

Nếu có thể đi từ đỉnh `u` đến đỉnh `v` nhanh hơn bằng cách đi thông qua đỉnh `k` thì:

- Cập nhật lại khoảng cách từ `u` đến `v`.
- Lưu vết đường đi từ `u` đến `v` thông qua `k` vào mảng `trace`.

=== "C++"

    ```c++ linenums="57"
        // Duyệt từng đỉnh trung gian k
        for (int k = 1; k < number_of_vertices + 1; ++k)
        {
            // Duyệt từng cặp đỉnh u, v
            for (int u = 1; u < number_of_vertices + 1; ++u)
            {
                for (int v = 1; v < number_of_vertices + 1; ++v)
                {
                    // Nếu có thể đi u -> k và k -> v nhanh hơn so với u -> v
                    if (graph[u][k] != 1e9 && graph[k][v] != 1e9 && graph[u][k] + graph[k][v] < graph[u][v])
                    {
                        // thi cập nhật lại khoảng cách u -> v
                        graph[u][v] = graph[u][k] + graph[k][v];

                        // Lưu vết đường đi u -> v thông qua k (u -> k -> v)
                        trace[u][v] = trace[k][v];
                    }
                }
            }
        }
    ```
=== "Python"

    ```py linenums="42"
        # Duyệt từng đỉnh trung gian k
        for k in range(1, number_of_vertices + 1):
            # Duyệt từng cặp đỉnh u, v
            for u in range(1, number_of_vertices + 1):
                for v in range(1, number_of_vertices + 1):
                    # Nếu có thể đi u -> k và k -> v nhanh hơn so với u -> v
                    if graph[u][k] + graph[k][v] < graph[u][v]:
                        # thi cập nhật lại khoảng cách u -> v
                        graph[u][v] = graph[u][k] + graph[k][v]

                        # Lưu vết đường đi u -> v thông qua k (u -> k -> v)
                        trace[u][v] = trace[k][v]
    ```

### Truy vết đường đi

Truy vết từ đỉnh `start` đến đỉnh `finish` và lưu vào ngăn xếp `path`.

=== "C++"

    ```c++ linenums="92"
        stack<int> path;

        // Biến tạm fn để lưu đỉnh hiện hành
        int fn = finish;

        // Trong khi fn chưa về đến đỉnh start
        while (fn != start)
        {
            // Thêm đỉnh fn vào đường đi
            path.push(fn);

            // Lùi về đỉnh trước đó
            fn = trace[start][fn];
        }

        // Thêm đỉnh start vào đường đi
        path.push(start);
    ```
=== "Python"

    ```py linenums="66"
        path = []

        # Biến tạm fn để lưu đỉnh hiện hành
        fn = finish

        # Trong khi fn chưa về đến đỉnh start
        while fn != start:
            # Thêm đỉnh fn vào đường đi
            path.append(fn)

            # Lùi về đỉnh trước đó
            fn = trace[start][fn]

        # Thêm đỉnh start vào đường đi
        path.append(start)
    ```

### In kết quả

Dựa vào ngăn xếp `path`, ta in ra đường đi bằng cách lấy từng phần tử ra khỏi ngăn xếp.

=== "C++"

    ```c++ linenums="110"
        // In ra khoảng cách ngắn nhất từ đỉnh start đến đỉnh finish
        cout << graph[start][finish] << '\n';

        // In ra đường đi ngắn nhất từ đỉnh start đến đỉnh finish
        while (!path.empty())
        {
            cout << path.top();
            if (path.size() != 1) cout << ' ';
            path.pop();
        }
    ```
=== "Python"

    ```py linenums="82"
        with open(output_file, 'w') as f:
            # In ra khoảng cách ngắn nhất từ đỉnh start đến đỉnh finish
            f.write(f'{graph[start][finish]}\n')

            # In ra đường đi ngắn nhất từ đỉnh start đến đỉnh finish
            output_path = ' '.join(map(str, path[::-1]))
            f.write(f'{output_path}')  # In ra đường đi
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Graph/tree/main/Floyd-Warshall){:target="_blank"}.