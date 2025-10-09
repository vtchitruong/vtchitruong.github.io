---
tags:
    - quy hoạch động
    - dãy con tăng dần dài nhất
---

# Dãy con tăng dần dài nhất

## Khái quát

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **tìm dãy con tăng dần dài nhất** (LIS - Longest Increasing Subsequence).

## Bài toán

**Yêu cầu:**

Cho một mảng các số nguyên không có thứ tự. Tìm độ dài của dãy con tăng dần dài nhất. Biết rằng dãy con không nhất thiết phải gồm các phần tử liên tiếp nhau.

**Input:**

```pycon
7
3 4 -1 0 6 2 3
```

**Output:**

```pycon
4
-1 0 2 3
```

**Giải thích:**

Mảng A có 7 phần tử.

Dãy con tăng dần dài nhất gồm 4 phần tử là -1 0 2 3.

## Cách giải đề xuất

### Xây dựng bảng quy hoạch

Bảng quy hoạch `D` là mảng một chiều có số phần tử như mảng `A`, trong đó `D[i]` lưu độ dài của dãy con dài nhất tính từ đầu đến phần tử `A[i]`.

Theo đó, `D[i]` nào có giá trị lớn nhất thì nó chính là độ dài của dãy con dài nhất cần tìm.

**Bước 1:** Khởi tạo

Trong trường hợp xấu nhất, mảng `A` là giảm dần. Lúc này, độ dài dài nhất của dãy con tăng dần là 1, tức mỗi dãy con chỉ có một phần tử, không có phần tử thứ hai làm cho nó tăng nữa.

Bên cạnh đó, để xuất ra dãy con dài nhất đó, ta khởi tạo mảng `trace` để lưu trữ kết nối của các phần tử thuộc cùng một dãy con. Cụ thể, `trace[i] = j`, nghĩa là trước phần tử `A[i]` là phần tử `A[j]`.

Ban đầu, chưa có kết nối nào, ta gán giá trị `-1` toàn bộ mảng `trace`.

=== "C++"

    ```c++ linenums="42"
        D.resize(n, 1);

        trace.resize(n, -1);
    ```
=== "Python"

    ```py linenums="32"
        D = [1 for _ in range(n)]

        trace = [-1 for _ in range(n)]
    ```

**Bước 2:** Thực hiện quy hoạch động

Duyệt toàn bộ mảng `A` bằng biến `i`, lặp thao tác:

- Duyệt dãy con của mảng `A` bằng biến j trong đoạn `[0..i - 1]`, lặp thao tác:  

    - Xét xem `A[i]` có được "*kết nạp*" vào dãy con mà `A[j]` đang có mặt trong đó hay không. Muốn được "*kết nạp*", `A[i]` phải thỏa hai điều kiện sau:

        1. Bảo đảm dãy con của `A[j]` vẫn tăng dần: `A[j] < A[i]`.
        2. Bảo đảm `D[j]` (1) khi thêm một đơn vị (tức thêm một phần tử là `A[i]`) thì phải lớn hơn `D[i]` (2): `D[j] + 1 > D[i]`.
            { .annotate }

            1.  `D[j]` là độ dài dài nhất của dãy con nào đó tính từ đầu mảng `A` đến `j`.
            2.  `D[i]` là độ dài dài nhất của dãy con nào đó tính từ đầu mảng `A` đến `i`.

    - Nếu hai điều kiện này được thỏa thì ta ghi nhận độ dài dài nhất mới và ghi nhận sự kết nối của `A[i]` và `A[j]` vào mảng `trace`.

=== "C++"

    ```c++ linenums="48"
        // Duyệt từng phần tử A[i] trong phạm vi [1..n - 1]
        for (int i = 1; i < n; ++i)
        {
            // Duyệt từng phần tử A[j] trong dãy con [0..i - 1]
            for (int j = 0; j < i; ++j)
            {
                // Nếu A[i] vẫn bảo đảm cho dãy con của A[j] tăng dần
                if (A[j] < A[i])
                {               
                    // D[j] + 1 là độ dài dài nhất của dãy con [0..j] cộng thêm 1 phần tử (là A[i])
                    // D[i] là độ dài dài nhất của dãy con [0..i]
                    // Nếu vẫn bảo đảm độ dài là dài nhất: D[j] + 1 > D[i]
                    if (D[j] + 1 > D[i])
                    {
                        // thì ghi nhận độ dài dài nhất mới
                        D[i] = D[j] + 1;

                        // và ghi nhận kết nối A[i] với A[j]
                        trace[i] = j;
                    }
                }
            }
        }
    ```

=== "Python"

    ```py linenums="37"
        # Duyệt từng phần tử A[i] trong phạm vi [1..n - 1]
        for i in range(1, n):
            # Duyệt từng phần tử A[j] trong dãy con [0..i - 1]
            for j in range(i):
                # Nếu A[i] vẫn bảo đảm cho dãy con của A[j] tăng dần
                if A[j] < A[i]: # if increasing
                    
                    # D[j] + 1 là độ dài dài nhất của dãy con [0..j] cộng thêm 1 phần tử (là A[i])
                    # D[i] là độ dài dài nhất của dãy con [0..i]
                    # Nếu vẫn bảo đảm độ dài là dài nhất: D[j] + 1 > D[i]
                    if D[j] + 1 > D[i]:
                        # thì ghi nhận độ dài dài nhất mới
                        D[i] = D[j] + 1

                        # và ghi nhận kết nối A[i] với A[j]
                        trace[i] = j
    ```

### Xuất output

Trước hết, ta tìm xem vị trí của phần tử trong mảng `D` lưu độ dài dài nhất, gọi là `finish`.

Theo bộ test trên, phần tử đó là `D[6]`, tức `finish == 6`, như bảng dưới đây:

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `A` | 3 | 4 | -1 | 0 | 6 | 2 | 3 |
| `D` | 1 | 2 | 1 | 2 | 3 | 3 | 4 |
| `trace` | -1 | 0 | -1 | 2 | 1 | 3 | 5 |

=== "C++"

    ```c++ linenums="77"
        vector<int>::iterator max_len = max_element(D.begin(), D.end());
        int finish = max_len - D.begin();
    ```
=== "Python"

    ```py linenums="56"
        max_length = max(D)
        finish = D.index(max_length)
    ```

Dựa vào mảng `trace`, ta cho `finish` *lui dần* về phía đầu của mảng `A` để xuất ra dãy con có độ dài dài nhất.

=== "C++"

    ```c++ linenums="80"
        // Dùng ngăn xếp để lưu các phần tử của dãy con dài nhất cần tìm
        stack<int> sub_seq; // subsequence
        while (!(trace[finish] == -1))
        {
            // Đẩy phần tử A[finish] vào ngăn xếp
            sub_seq.push(A[finish]);

            // Thực hiện truy ngược, lấy vị trí finish mới
            finish = trace[finish];
        }

        // Đẩy phần tử đầu tiên của dãy con dài nhất vào ngăn xếp
        sub_seq.push(A[finish]);
    ```

=== "Python"

    ```py linenums="60"
        # Dùng ngăn xếp để lưu các phần tử của dãy con dài nhất cần tìm
        sub_seq = deque() #subsequence
        while not trace[finish] == -1:
            # Đẩy phần tử A[finish] vào ngăn xếp
            sub_seq.append(A[finish])

            # Thực hiện truy ngược, lấy vị trí finish mới
            finish = trace[finish]
        
        # Đẩy phần tử đầu tiên của dãy con dài nhất vào ngăn xếp
        sub_seq.append(A[finish])
    ```

## Mã nguồn
Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/thnc/tree/main/dynamicprogramming/longest-increasing-subsequence" target="_blank">GitHub</a>.
