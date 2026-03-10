---
tags:
    - quy hoạch động
    - bước nhảy và tổng điểm
---

# Bước nhảy trong dãy số

## Bài toán

Cho một số gồm $N$ phấn tử $(N \le 10000)$, mỗi phẩn tử có một giá trị nằm trong đoạn $\left[ -1000 \cdots 1000 \right]$.

Ban đấu, bạn sẽ ở ô số 0 với tổng điểm là 0. Mỗi nước đi, người chơi có thể di chuyền sang phải tổi thiểu là $1$ bước và lớn nhất là $K$ bước $(K \le 10)$. Khi dừng lại ở một ô nào đó thì giá trị của ô đó sẽ được cộng vào tổng điềm.

Bạn có thể dừng cuộc chơi bất cứ lúc nào.

**Yêu cầu:** Hãy tìm cách chơi sao cho tống điểm nhận được là nhiều nhất.

**Đầu vào:** DAYSO.INP

- Dòng đầu ghi hai số $N$ và $K$.
- Dòng thứ hai chứa $N$ số của dãy, mỗi số nằm trong đoạn $\left[ -1000 \cdots 1000 \right]$.

**Đầu vào:** DAYSO.OUT

Số điểm lớn nhất đạt được.

**Ví dụ:**

| DAYSO.INP | DAYSO.OUT |
| --- | --- |
| 5 2<br>-2 3 -6 -4 5 | 4 |

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"
    
    1\. Gọi `d[i]` là điểm số lớn nhất mà người chơi đạt được khi dừng cuộc chơi tại ô `i`.
    
    **Trường hợp cơ sở:**
    
    Người chơi bắt đầu tại ô `0` với điểm số là `0`: `d[0] = 0`.

    **Thay đổi trạng thái:**
    
    Để đến được ô `i`, người chơi có thể đi từ ô `i - j` bất kỳ nào trước đó, với `j` là kích thước bước nhảy từ `1` đến `K` và `i - j >= 0`.
    
    Do đó, điểm số lớn nhất tại ô `i` sẽ là giá trị lớn nhất của điểm số trong tất cả các ô hợp lệ trước đó cộng với giá trị của ô hiện tại `A[i]`: `d[i] = max(`d[i - j]) + A[i]`.
        
    2\. Vì người chơi có thể dừng bất kỳ lúc nào nên điểm số tổng thể lớn nhất cần tìm là giá trị lớn nhất trong mảng `d`.

??? tip "Viết chương trình"

    0\. Khai báo các biến liên quan.

    === "C++"

        ```c++ linenums="10"
        const int INF = 1e9;

        int n, K;
        vector<int> a;
        int result;

        // d[i] là điểm số lớn nhất khi người chơi dừng cuộc chơi tại vị trí i
        vector<int> d;
        ```

    === "Python"

        ```py linenums="9"
        n = K = 0
        a = []
        result = 0

        # d[i] là điểm số lớn nhất khi người chơi dừng cuộc chơi tại vị trí i
        d = []
        ```

    1\. Thực hiện quy hoạch động.

    === "C++"

        ```c++ linenums="36"
        void process()
        {
            // Khởi tạo mảng d
            d.resize(n + 1, -INF);
            d[0] = 0;

            // Duyệt từng ô trong dãy số
            for (int i = 1; i <= n; ++i)
            {
                // Duyệt số bước nhảy
                for (int k = 1; k <= K; ++k)
                {
                    if (i - k >= 0)
                    {
                        d[i] = max(d[i], d[i - k] + a[i]);
                    }
                }

                // Cập nhật điểm số tổng thể lớn nhất
                result = max(result, d[i]);
            }
        }
        ```

    === "Python"

        ```py linenums="33"
        def process():
            global result

            # Khởi tạo mảng d
            d = [-INF] * (n + 1)
            d[0] = 0

            # Duyệt từng ô trong dãy số
            for i in range(1, n + 1):
                # Duyệt số bước nhảy
                for k in range(1, K + 1):
                    if i - k >= 0:
                        d[i] = max(d[i], d[i - k] + a[i])

                # Cập nhật điểm số tổng thể lớn nhất
                result = max(result, d[i])
        ```

---

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/dynamic-programming/dayso){:target="_blank"}.