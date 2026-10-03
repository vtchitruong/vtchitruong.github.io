---
tags:
    - prefix sum
    - tổng cộng dồn
    - difference array
    - mảng hiệu
level: "nâng cao"
level_url: "/advanced/advanced-index/"

difficulty: "medium"
updated: "04/10/2026"
---

# Tìm giá trị lớn nhất của mảng sau cùng

## Đề bài

**Yêu cầu**:  
Tìm giá trị lớn nhất của mảng sau khi thực hiện loạt thao tác cộng thêm vào các phần tử.

**Input**:  
`n` là số lượng các phần tử trong mảng `a`.

Mảng các thao tác cộng `queries`, mỗi phần tử gồm 3 số:

- Vị trí bắt đầu `left`
- Vị trí kết thúc `right`
- Giá trị `k` mà sẽ được cộng vô các phần tử trong mảng `a`.

**Output**:  
Giá trị lớn của mảng `a` sau khi hoàn thành các thao tác cộng của `queries`.

**Ví dụ:**

Input:  
`n = 10`

`queries`:

| `left` | `right` | `k` |
| --- | --- | --- |
| 1 | 5 | 3 |
| 4 | 8 | 7 |
| 6 | 9 | 1 |

Output:  
`max = 10`

Giải thích:  

| Vị trí | 1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mảng `a` | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| | 3 | 3 | 3 | 3 | 3 | 0 | 0 | 0 | 0 | 0 |
| | 3 | 3 | 3 | 10 | 10 | 7 | 7 | 7 | 0 | 0 |
| | 3 | 3 | 3 | 10 | 10 | 8 | 8 | 8 | 1 | 0 |

---

## Bài giải đề xuất

### Ý tưởng chính

Ứng với mỗi truy vấn, thay vì cập nhật từng phần tử trong đoạn `[left..right]`, ta dùng **mảng hiệu** để ghi nhận sự thay đổi tại vị trí `left` và `right + 1`.

Sau đó, dùng một vòng lặp để cộng dồn nhằm khôi phục giá trị thực sự của các phần tử trong mảng `a`.

### Viết chương trình

**Bước 1:**  
Do mảng được đánh thứ tự từ `1`, ta khởi tạo mảng `a` gồm `n + 1` đều là `0`.

=== "C++"

    ```c++ linenums="8"
        // Khởi tạo mảng a gồm n + 1 phần tử
        vector<long> a(n + 1, 0);
    ```
=== "Python"

    ```py linenums="2"
        # Khởi tạo mảng a gồm n + 1 phần tử
        a = [0] * (n + 1)
    ```

**Bước 2:**  
Duyệt từng truy vấn của mảng `queries`, ứng với mỗi truy vấn:

- Vì phần tử tại vị trí `left` tăng thêm `k` so với phần tử đứng trước nó nên ta thực hiện: `a[left] += k`.

    Giá trị `a[left]` này sẽ lan đến các vị trí tiếp theo, ta tạm thời không cộng `k` vào các vị trí tiếp theo đó.

- Vì phần tử tại vị trí `right + 1` không được cộng thêm `k`, trong khi phần tử tại vị trí `right` được cộng thêm `k` và lan đến vị trí `right + 1`, nên ta thực hiện `a[right + 1] -= k` để chấm dứt việc lan này.

=== "C++"

    ```c++ linenums="11"
        // Duyệt từng truy vấn
        for (int i = 0; i < queries.size(); ++i)
        {
            int left = queries[i][0];
            int right = queries[i][1];
            int k = queries[i][2];

            // Đánh dấu vị trí bắt đầu cộng
            // Giá trị tại vị trí bắt đầu này sẽ ảnh hưởng đến mọi vị trí >= left
            a[left] += k;

            // Đánh dấu vị trí kết thúc cộng
            // Việc này giúp ngăn giá trị +k lan sang các vị trí > right
            if (right + 1 < n + 1)
                a[right + 1] -= k;
        }
    ```
=== "Python"

    ```py linenums="5"
        # Duyệt từng truy vấn
        for i in range(len(queries)):
            left = queries[i][0]
            right = queries[i][1]
            k = queries[i][2]

            # Đánh dấu vị trí bắt đầu cộng
            # Giá trị tại vị trí bắt đầu này sẽ ảnh hưởng đến mọi vị trí >= left
            a[left] += k

            # Đánh dấu vị trí kết thúc cộng
            # Việc này giúp ngăn giá trị +k lan sang các vị trí > right
            if right + 1 < n + 1:
                a[right + 1] -= k
    ```

**Bước 3:**   
Đến lúc này, mảng `a` là **mảng hiệu**. Ta cần khôi phục các giá trị thực sự của mảng `a`.

Giả sử `D` là mảng hiệu, ta có `D[i] = A[i] - A[i - 1]`, nghĩa là tại vị trí `i`, hiệu của phần tử `A[i]` và phần tử đứng trước nó là `D[i]`.

Như vậy, nếu `A[i]` là giá trị sau cùng (sau khi hoàn thành các truy vấn trong `queries`) của phần tử tại vị trí `i` trong mảng `a` thì `A[i] = D[i] + A[i - 1]`.

Nói cách khác, sau bước 2, `a[i]` chính là phần tử thứ `i` của mảng hiệu `D[i]`, nên để tính giá trị sau cùng `A[i]`, ta cộng dồn hiệu `D[i]` vô giá trị tích lũy `A[i - 1]` đứng trước nó.

Trong đoạn mã dưới đây, `A[i]` chính là giá trị của biến `prefix_sum` sau khi cộng dồn.

=== "C++"

    ```c++ linenums="28"
        long max_value = 0;
        long prefix_sum = a[0];

        // Duyệt và khôi phục mảng a
        for (int i = 1; i < n + 1; ++i)
        {
            // Cộng dồn để lấy giá trị thực của phần tử tại vị trí i
            prefix_sum += a[i];

            // Cập nhật giá trị lớn nhất trong mảng
            if (prefix_sum > max_value)
                max_value = prefix_sum;
        }

        return max_value;
    ```
=== "Python"

    ```py linenums="20"
        max_value = 0
        prefix_sum = a[0]

        # Duyệt và khôi phục mảng a
        for i in range(1, n + 1):    
            # Cộng dồn để lấy giá trị thực của phần tử tại vị trí i
            prefix_sum += a[i]

            # Cập nhật giá trị lớn nhất trong mảng
            if prefix_sum > max_value:
                max_value = prefix_sum
        
        return max_value
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/prefix-sum){:target="_blank"}.