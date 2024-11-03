# Chia kẹo

## Khái quát

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **tổng của tập con** (subset sum problem).

Bên cạnh đó, bài toán này cũng thuộc dạng chỉ cần tìm ra một lời giải thoả mãn điều kiện, mà không cần phải chỉ ra tất cả lời giải. Lời giải được chỉ ra chưa chắc là tốt nhất.

## Bài toán

### Yêu cầu

Cho $n$ gói kẹo ($n \le 200$), mỗi gói chứa không quá 200 viên kẹo, và một số $m \le 40000$. Hãy chỉ ra một cách ra một số các gói kẹo để được tổng số kẹo là $m$, hoặc thông báo rằng không thể thực hiện việc đó. [^1]

[^1]: Lê Minh Hoàng, Giải thuật và lập trình. Hà Nội: Nhà xuất bản Đại học Sư phạm Hà Nội, 1999-2002.

### Input

```pycon
10 32
4 9 5 6 2 10 3 7 8 1
```

### Output

```pycon
2 3 4 5 6
```

### Giải thích

Input:

- Dòng thứ nhất chứa `n` gói kẹo và `m` viên kẹo cần đạt.
- Dòng thứ hai là số kẹo trong mỗi gói. Số thứ tự của các gói được đánh từ 1.

Output:

- Số thứ tự của các gói kẹo được chọn để đạt được `m` viên kẹo.

Cụ thể, số viên kẹo của các gói 2, 3, 4, 5 và 6 là 9 + 5 + 6 + 2 + 10 = 32 viên kẹo.

## Cách giải đề xuất

### Đọc input

Gọi `pack[i]` là số viên kẹo của gói thứ `i`. 

=== "C++"

    ```c++ linenums="1"
        cin >> n >> m;

        // Gói thứ 0 không có kẹo
        pack.push_back(0);

        int x;
        for (int i = 1; i < n + 1; ++i)
        {
            cin >> x;
            pack.push_back(x);
        }
    ```
=== "Python"

    ```py linenums="1"
        n, m = map(int, f.readline().split())

        # gói thứ 0 không có kẹo
        pack = [0]
        some_packs = list(map(int, f.readline().split()))
        pack.extend(some_packs)
    ```

### Xây dựng bảng quy hoạch

Gọi `P[candy]` là số thứ tự của gói được chọn để đạt `candy` viên kẹo và là nhỏ nhất khi thực hiện quá trình chọn từ gói `P[1]` đến gói `P[candy]`.

Khởi tạo giá trị vô cực cho các phần tử của mảng `P`. Mục đích là sau khi duyệt xong mà `P[m]` vẫn mang giá trị vô cực thì có nghĩa là không có lời giải.

=== "C++"

    ```c++ linenums="1"
        P.resize(m + 1, INT_MAX);
        P[0] = 0;
    ```
=== "Python"

    ```py linenums="1"
        P = [int(1e12)] * (m + 1)
        P[0] = 0
    ```

Trong khi duyệt từng gói kẹo, gói kẹo thứ `i` được chọn khi nó thoả các điều kiện sau:

1. Số viên kẹo của gói thứ `i` phải ít hơn `candy` viên kẹo đang xét, tức `pack[i] <= candy`.

2. Số thứ tự của gói kẹo được chọn trước đó phải nhỏ hơn `i`, cụ thể: `P[candy - pack[i]] < i`. Trong đó:

    - `pack[i]` là số viên kẹo của gói thứ `i`.
    - `candy - pack[i]` là số viên kẹo cần đạt trước khi chọn gói `i`.
    - `P[candy - pack[i]] < i` là số thứ tự của gói kẹo nào đó trước khi chọn gói `i`.

=== "C++"

    ```c++ linenums="1"
        // Duyệt số kẹo cần lấy từ 1 đến m
        for (int candy = 1; candy < m + 1; ++candy)
        {
            // Duyệt gói kẹo từ 1 đến n
            for (int i = 1; i < n + 1; ++i)
            {
                // Số viên kẹo của gói thứ i phải ít hơn số candy viên kẹo đang xét
                if (pack[i] <= candy)
                {
                    // P[candy - pack[i]] là số thứ tự của gói nào đó trước khi chọn gói i
                    if (P[candy - pack[i]] < i)
                    {
                        P[candy] = i;
                        break;
                    }
                }
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        # Duyệt số kẹo cần lấy từ 1 đến m
        for candy in range(1, m + 1):
            # Duyệt qua từng gói kẹo từ 1 đến n
            for i in range(1, n + 1):
                # Số kẹo của gói thứ i phải ít hơn số candy kẹo đang xét
                if pack[i] <= candy:
                    # P[candy - pack[i]] là số thứ tự của gói nào đó trước khi chọn gói i
                    if P[candy - pack[i]] < i:
                        P[candy] = i
                        break
    ```

### Xuất output

Sau khi bảng quy hoạch `P` đã điền đầy đủ, ta thực hiện truy ngược từ cuối bảng về đầu bảng:

- Nếu `P[m]` vẫn mang giá trị vô cực thì nghĩa là không có lời giải, xuất `-1`.
- Nếu `P[m]` mang giá trị cụ thể thì:
    - `P[m]` là số thứ tự của gói đầu tiên (tính từ cuối mảng) được chọn, ta nạp `P[m]` vào mảng `result`.
    - Lặp các thao tác sau:
        - Đặt `remaining_candy` là số kẹo còn lại sau khi trừ đi số kẹo của gói vừa chọn trước đó, ví dụ tại bước duyệt này là `P[m]`: `remaining_candy = remaing_candy - pack[số thứ tự của gói vừa chọn trước đó]`.
        - Nạp `P[remaining_candy]` là số thứ tự của gói tiếp theo được chọn vào mảng `result`.
        - Vòng lặp dừng khi không còn kẹo để xét nữa: `remaining_candy == 0`.

=== "C++"

    ```c++ linenums="1"
        if (P[m] == INT_MAX)
        {
            result.push_back(-1);
        }
        else
        {
            // Số kẹo còn lại dùng để truy ngược
            int remaining_candy = m;

            // Trong khi vẫn còn kẹo để xét
            while (remaining_candy > 0)
            {
                // Nạp số thứ tự của gói kẹo được chọn vào result
                result.push_back(P[remaining_candy]);
                
                // Trừ đi số kẹo của gói vừa nạp vào
                remaining_candy -= pack[result.back()];
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        if P[m] == int(1e12):
            result.append(-1)
        else:
            # Số kẹo còn lại dùng để truy ngược
            remaining_candy = m

            # Trong khi vẫn còn kẹo để xét
            while remaining_candy > 0:
                # Nạp số thứ tự của gói kẹo được chọn vào result
                result.append(P[remaining_candy])

                # Trừ đi số kẹo của gói vừa nạp vào
                remaining_candy -= pack[result[-1]]
    ```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/DynamicProgramming/tree/main/CandyPack" target="_blank">GitHub</a>.


