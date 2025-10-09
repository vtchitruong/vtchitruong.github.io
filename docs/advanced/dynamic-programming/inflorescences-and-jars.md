---
tags:
    - quy hoạch động
    - lựa chọn tối ưu với ràng buộc thứ tự
---

# Cắm hoa

## Khái quát

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **lựa chọn tối ưu với ràng buộc thứ tự** (optimal selection with order constraint).

## Bài toán

**Yêu cầu:**

Cần cắm hết $k$ bó hoa khác nhau vào $n$ lọ thẳng hàng sao cho bó hoa có số hiệu nhỏ phải đặt trước bó hoa có số hiệu lớn.

Mỗi bó hoa $i$ khi cắm vào lọ $j$ sẽ cho ra giá trị thẩm mỹ $v_{ij}$.

Hãy xác định một phương án cắm hoa sao cho tổng giá trị thẩm mỹ là lớn nhất.[^1]

[^1]: Nguyễn, X. H. (2015). *Sáng tạo trong thuật toán và lập trình: Tập 1*. Hà Nội, Việt Nam: Nhà xuất bản Thông tin và Truyền thông.

**Input:**

```pycon
4 6
1 1 6 4 3 10
9 1 4 7 2 7
7 2 6 10 2 3
6 10 7 1 3 9
```

**Output:**

```pycon
24
1 3 4 6 
```

**Giải thích:**

Input:

- Dòng đầu là k = 4 bó hoa và n = 6 lọ.
- Các dòng tiếp theo là các giá trị $v_{ij} \in [0, 10]$, với $n \in [1,k], j \in [1, n], 1 \le k \le 100$.

Output:

- Dòng đầu là tổng giá trị thẩm mỹ: 24.
- Dòng thứ hai dãy số hiệu của các lọ được chọn cắm hoa


Kết quả như sau:

- Bó hoa 1 cắm vào lọ 1: thẩm mỹ 1
- Bó hoa 2 cắm vào lọ 3: thẩm mỹ 4
- Bó hoa 3 cắm vào lọ 4: thẩm mỹ 10
- Bó hoa 4 cắm vào lọ 6: thẩm mỹ 9

## Cách giải đề xuất

### Xây dựng bảng quy hoạch

Bảng quy hoạch là mảng hai chiều `D` gồm:

- `k + 1` hàng, ứng với bó hoa.
- `n + 1` cột, ứng với lọ.

Mỗi phần tử `D[i][j]` lưu tổng giá trị thẩm mỹ lớn nhất khi đã cắm được `i` bó hoa đầu tiên vào `j` lọ đầu tiên.

Như vậy, phần tử cuối cùng `D[k][n]` sẽ lưu tổng giá trị thẩm mỹ cần tìm.

**Bước 1:** Khởi tạo

Khởi tạo giá trị `0` cho toàn bảng quy hoạch `D`.

=== "C++"

    ```c++ linenums="43"
        D.resize(k + 1, vector<int>(n + 1, 0));
    ```

=== "Python"

    ```py linenums="31"
        D = [[0 for j in range(n + 1)] for i in range(k + 1)]
    ```

**Bước 2:** Thực hiện quy hoạch động

Tiến hành duyệt bảng theo từng hàng (tương ứng với bó hoa). Trong mỗi hàng, lần lượt điền giá trị vào từng cột (tương ứng với lọ).

Ta có một số nhận xét sau:

a. Nếu số bó hoa nhiều hơn số lọ (`i > j`) thì không có cách nào cắm vì đề bài yêu cầu phải cắm hết các bó hoa. Do đó: `D[i][j] = 0`.

b. Nếu số bó hoa bằng số lọ(`i == j`) thì chỉ có một cách cắm là mỗi lọ một bó hoa.

c. Nếu số bó hoa ít hơn số lọ (`i < j`) thì ta cân xét hai trường hợp:

- Trường hợp 1: lọ cuối cùng (lọ `j`) không được chọn cắm.

    Điều này có nghĩa là `i` bó hoa phải được cắm vào `j - 1` lọ đầu tiên. Lúc này, tổng giá trị thẩm mỹ là `D[i][j] = D[i][j - 1]`.

- Trường hợp 2: lọ cuối cùng (lo `j`) được chọn cắm.

    Điều này có nghĩa là `i - 1` bó hoa đầu tiên sẽ được căm vào `j - 1` lọ đầu tiên. Lúc này, tổng giá trị thẩm mỹ là `D[i][j] = D[i - 1][j - 1] + values[i][j]`.

Để `D[i][j]` lưu giá trị tốt nhất, ta so sánh hai trường hợp trên và chọn ra trường hợp có giá trị lớn hơn.

=== "C++"

    ```c++ linenums="45"
        // giá trị thẩm mỹ lớn nhất trong trường hợp 1 và 2
        int j_not_chosen, j_chosen;

        // Duyệt từng hàng i (inflorescence)
        for (int i = 1; i < k + 1; ++i)
        {
            // Duyệt từng cột j (jar)
            for (int j = 1; j < n + 1; ++j)
            {
                // Nếu số bó hoa ít hơn hoặc bằng số lọ
                if (i <= j)
                {
                    // TH1: lọ j không được chọn cắm
                    j_not_chosen = D[i][j - 1];

                    // TH2: lọ j được chọn cắm
                    j_chosen = D[i - 1][j - 1] + values[i][j];
                    
                    // Lấy giá trị thẩm mỹ tốt nhất
                    D[i][j] = max(j_not_chosen, j_chosen);
                }
            }
        }
    ```

=== "Python"

    ```py linenums="33"
        # Duyệt từng hàng i (inflorescence)
        for i in range(1, k + 1):
            # Duyệt từng cột j (jar)
            for j in range(1, n + 1):
                if i <= j:
                    # TH1: lọ j không được chọn cắm
                    j_not_chosen = D[i][j - 1]

                    # TH2: lọ j được chọn cắm
                    j_chosen = D[i - 1][j - 1] + values[i][j]

                    # Lấy giá trị thẩm mỹ tốt nhất
                    D[i][j] = max(j_not_chosen, j_chosen)
    ```

### Xuất output

Để xuất ra các lọ được chọn cắm, ta thực hiện truy vết dựa theo bảng quy hoạch `D` dưới đây:

| bó hoa \\ lọ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 6 | 6 | 6 | 10 |
| 2 | 0 | 2 | 5 | 13 | 13 | 13 |
| 3 | 0 | 0 | 8 | 15 | 15 | 16 |
| 4 | 0 | 0 | 0 | 9 | 18 | 24 |

Cụ thể, xuất phát từ phần tử cuối cùng `D[4][6]` (`D[k][n]`), duyệt ngược về đầu, thực hiện lặp thao tác sau:

- Nếu số bó hoa ít hơn hoặc bằng số lọ (`i <= j`) theo lập luận ở phần trên và các giá trị `D` giữa hai cột có sự khác biệt thì chọn bó hoa số hiệu `i` đó và lọ số hiệu `j` đó, rồi cho lùi về hàng và cột liền trước.

- Ngược lại, điều kiện trên không thoả mãn, thì chỉ cho lùi cột, tức xét lọ liền trước.

=== "C++"

    ```c++ linenums="73"
        // inflorescence
        // inflor[i] = j: chọn lọ j cho bó hoa i
        vector<int> inflor(k + 1, 0);

        int i = k;
        int j = n;

        while (i > 0 && j > 0)
        {
            if (i <= j)
                if (D[i][j] != D[i][j - 1])
                {
                    // Chọn lọ j cho bó hoa i
                    inflor[i] = j;
                    
                    // Lùi về bó hoa liền trước
                    --i;

                    // Lùi về lọ liền trước
                    --j;
                }        
            else
            {
                // Chỉ lùi về lọ liền trước
                --j;
            }
        }
    ```

=== "Python"

    ```py linenums="51"
        # inflorescence
        # inflor[i] = j: chọn lọ j cho bó hoa i
        inflor = [0] * (k + 1)

        i = k
        j = n

        while i > 0 and j > 0:
            if i <= j and D[i][j] != D[i][j - 1]:
                # Chọn lọ j cho bó hoa i
                inflor[i] = j

                # Lùi về bó hoa liền trước
                i -= 1

                # Lùi về lọ liền trước
                j -= 1
            else:
                # Chỉ lùi về lọ liền trước
                j -= 1
    ```


## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/thnc/tree/main/dynamicprogramming/inflorescences-and-jars" target="_blank">GitHub</a>.