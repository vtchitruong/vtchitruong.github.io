---
tags:
    - quy hoạch động
    - tổng của tập con
---

# Chia kẹo

## Khái quát

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **tổng của tập con** (subset sum problem).

Bên cạnh đó, bài toán này cũng thuộc dạng chỉ cần tìm ra một lời giải thoả mãn điều kiện, mà không cần phải chỉ ra tất cả lời giải. Lời giải được chỉ ra chưa chắc là tốt nhất.

## Bài toán

**Yêu cầu:**

Cho $n$ gói kẹo ($n \le 200$), mỗi gói chứa không quá 200 viên kẹo, và một số $m \le 40000$. Hãy chỉ ra một cách ra một số các gói kẹo để được tổng số kẹo là $m$, hoặc thông báo rằng không thể thực hiện việc đó. [^1]

[^1]: Lê, M. H. (2002). *Giải thuật và lập trình*. Hà Nội, Việt Nam: Nhà xuất bản Đại học Sư phạm Hà Nội.

**Input:**

```pycon
10 32
4 9 5 6 2 10 3 7 8 1
```

**Output:**

```pycon
2 3 4 5 6
```

**Giải thích:**

Input:

- Dòng thứ nhất chứa $n$ gói và $m$ kẹo cần đạt.
- Dòng thứ hai là số kẹo trong mỗi gói. Số thứ tự của các gói được đánh từ 1.

Output:

- Số thứ tự của các gói được chọn để đạt được $m$ kẹo.

    Cụ thể, số kẹo của các gói 2, 3, 4, 5 và 6 là $9 + 5 + 6 + 2 + 10 = 32$ kẹo.

## Cách giải đề xuất

### Xây dựng bảng quy hoạch

Gọi `D[candy_amount]` là số thứ tự của gói được chọn để đạt được `candy_amount` kẹo và là nhỏ nhất khi thực hiện quá trình chọn từ gói `D[1]` đến gói `D[candy_amount]`.

Cũng nhờ vậy mà lời giải (nếu có) sẽ có thứ tự từ điển.

**Bước 1:**

Khởi tạo giá trị vô cực cho các phần tử của mảng `D`. Sau khi duyệt xong mà `D[m]` vẫn mang giá trị vô cực thì có nghĩa là không tìm được lời giải.

=== "C++"

    ```c++ linenums="43"
        // Khởi tạo giá trị vô cực cho toàn bảng quy hoạch
        D.resize(m + 1, INT_MAX);

        // Không có gói nào được chọn cho D[candy_amount = 0]
        D[0] = 0;
    ```
=== "Python"

    ```py linenums="31"
        # Khởi tạo giá trị vô cực cho toàn bảng quy hoạch
        D = [float('inf')] * (m + 1)

        # Không có gói nào được chọn cho D[candy_amount = 0]
        D[0] = 0
    ```

**Bước 2:** Thực hiện quy hoạch động

Duyệt từng gói, gói thứ `i` sẽ được chọn khi nó thoả hai điều kiện sau:

1. Số kẹo của gói thứ `i` phải ít hơn `candy_amount` kẹo đang xét: `pack[i] <= candy_amount`.

2. Số thứ tự của gói được chọn trước đó phải nhỏ hơn `i`: `P[candy_amount - pack[i]] < i`. Trong đó:

    - `pack[i]` là số kẹo của gói thứ `i`.
    - `candy_amount - pack[i]` là số kẹo cần đạt trước khi chọn gói `i`.
    - `P[candy_amount - pack[i]] < i` là số thứ tự của gói nào đó trước khi chọn gói `i`.

=== "C++"

    ```c++ linenums="49"
        // Duyệt số kẹo cần lấy từ 1 đến m
        for (int candy_amount = 1; candy_amount < m + 1; ++candy_amount)
        {
            // Duyệt từng gói từ 1 đến n
            for (int i = 1; i < n + 1; ++i)
            {
                // Số kẹo của gói thứ i phải ít hơn số candy_amount kẹo đang xét
                if (pack[i] <= candy_amount)
                {
                    // D[candy_amount - pack[i]] là số thứ tự của gói nào đó trước khi chọn gói i
                    if (D[candy_amount - pack[i]] < i)
                    {
                        // Đánh dấu chọn gói i để đạt được candy_amount kẹo
                        D[candy_amount] = i;

                        // Thoát vòng lặp i ngay khi tìm được gói i đầu tiên nhằm thoả yêu cầu ưu tiên chọn gói có số thứ tự nhỏ nhất
                        break;
                    }
                }
            }
        }
    ```

=== "Python"

    ```py linenums="37"
        # Duyệt số kẹo cần lấy từ 1 đến m
        for candy_amount in range(1, m + 1):
            # Duyệt từng gói từ 1 đến n
            for i in range(1, n + 1):
                # Số kẹo của gói thứ i phải ít hơn số candy_amount kẹo đang xét
                if pack[i] <= candy_amount:
                    # D[candy_amount - pack[i]] là số thứ tự của gói nào đó trước khi chọn gói i
                    if D[candy_amount - pack[i]] < i:
                        # Đánh dấu chọn gói i để đạt được candy_amount kẹo
                        D[candy_amount] = i

                        # Thoát vòng lặp i ngay khi tìm được gói i đầu tiên nhằm thoả yêu cầu ưu tiên chọn gói có số thứ tự nhỏ nhất
                        break
    ```

### Xuất output

Sau khi được điền đầy đủ, bảng quy hoạch `D` như sau:

| `candy_amount` | `D[candy_amount]` |
| --- | --- |
| 1 | 10 |
| 2 | 5 |
| 3 | 7 |
| 4 | 1 |
| 5 | 3 |
| 6 | 4 |
| 7 | 5 |
| 8 | 5 |
| 9 | 2 |
| 10 | 4 |
| 11 | 4 |
| 12 | 5 |
| 13 | 2 |
| 14 | 3 |
| 15 | 4 |
| 16 | 5 |
| 17 | 5 |
| 18 | 3 |
| 19 | 4 |
| 20 | 4 |
| 21 | 5 |
| 22 | 5 |
| 23 | 6 |
| 24 | 4 |
| 25 | 6 |
| 26 | 5 |
| 27 | 6 |
| 28 | 6 |
| 29 | 6 |
| 30 | 6 |
| 31 | 6 |
| 32 | 6 |

Để biết được những gói được chọn, ta thực hiện truy ngược từ cuối bảng về đầu bảng:

- Nếu `D[m]` vẫn mang giá trị vô cực thì nghĩa là không có lời giải, xuất `-1`.
- Nếu `D[m]` mang giá trị cụ thể thì:
    - `D[m]` là số thứ tự của gói đầu tiên (tính từ cuối mảng) được chọn, ta nạp `D[m]` vào ngăn xếp `chosen_packs`.
    - Lặp các thao tác sau:
        - Nạp `D[remaining_amount]` là số thứ tự của gói tiếp theo được chọn vào ngăn xếp `chosen_packs`.
        - Đặt `remaining_amount` là số kẹo còn lại sau khi trừ đi số kẹo của gói vừa chọn trước đó: `remaining_amount = remaing_candy - pack[số thứ tự của gói vừa chọn trước đó]`.
        - Vòng lặp dừng khi không còn kẹo để xét nữa: `remaining_amount == 0`.

=== "C++"

    ```c++ linenums="75"
        // ngăn xếp chứa các gói được chọn
        stack<int> chosen_packs;

        // Nếu D[m] là vô cực thì không tìm được lời giải
        // Ngược lại, thì thực hiện truy ngược từ D[m] về đầu mảng
        if (D[m] != INT_MAX)
        {
            // Số kẹo còn lại dùng để truy ngược
            int remaining_amount = m;

            // Trong khi vẫn còn kẹo
            while (remaining_amount > 0)
            {
                // Nạp gói được chọn vào chosen_packs
                chosen_packs.push(D[remaining_amount]);
                
                // Trừ đi số kẹo của gói vừa nạp vào
                remaining_amount -= pack[chosen_packs.top()];
            }
        }
    ```
=== "Python"

    ```py linenums="55"
        # ngăn xếp chứa các gói được chọn
        chosen_packs = []

        # Nếu D[m] là vô cực thì không tìm được lời giải
        # Ngược lại, thì thực hiện truy ngược từ D[m] về đầu mảng
        if D[m] != int(1e12):
            # Số kẹo còn lại dùng để truy ngược
            remaining_amount = m

            # Trong khi vẫn còn kẹo để xét
            while remaining_amount > 0:
                # Nạp số thứ tự của gói được chọn vào chosen_packs
                chosen_packs.append(D[remaining_amount])

                # Trừ đi số kẹo của gói vừa nạp vào
                remaining_amount -= pack[chosen_packs[-1]]
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/dynamic-programming/candy-pack){target="_blank"}.


