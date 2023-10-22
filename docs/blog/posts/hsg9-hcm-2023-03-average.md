---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2023-03-15
---

# HSG9 HCM 03.2023: Trung bình cộng

Bài toán liên quan đến trung bình cộng của n phần tử đầu tiên trong mảng, trích từ đề thi Học sinh giỏi Lớp 9 Thành phố tháng 03.2023.

<!-- more -->

## Khái quát về bài toán

### Yêu cầu

Mảng *b* gồm *n* số như sau:  

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 15 | 25 | -25 | 5 | 40 |


Mảng *a* cũng có *n* phần tử, trong đó phần tử thứ *i* là trung bình cộng của *i* phần tử đầu tiên trong mảng *b*.  

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 15 | 20 | 5 | 5 | 12 |

Yêu cầu bài toán là từ mảng *a*, tìm ra mảng *b*.  

### Input
5  
15 20 5	5 12  

### Output
15 25 -25 5 40  

### Giải thích
No explanation available here.  

## Cách giải đề xuất

### Ý tưởng chính

Lấy tổng tất cả phần tử trừ đi tổng của những phần tử đã có sẽ ra được phần tử tiếp theo của mảng output.

### Bước 1

1. Khởi tạo mảng `b` gồm các phần tử `0`.
2. Vì trung bình cộng của một phần tử là chính nó, nên gán `a[0]` cho `b[0]`.  

    === "C++"
        ``` c++ linenums="1"
            vector<int> b(n, 0);
            b[0] = a[0];    
        ```
    === "Python"
        ``` py linenums="1"

        ```

### Bước 2

Duyệt mảng `a`, lặp các thao tác sau:  

1. Lấy giá trị trung bình cộng (là `a[i]`) nhân với số lượng phần tử (là `i` phần tử), ra được tổng tất cả phần tử, đặt là `sum_all`.  

2. Tính tổng của những phần tử đã có trước đó trong mảng `b`, đặt là `sum_before`.  

3. Lấy **tổng tất cả** trừ đi **tổng các phần tử đã có**, ra được phần tử `b[i]` cần tìm.  

    === "C++"
        ``` c++ linenums="1"
            for (int i = 1; i < n; ++i)
            {
                int sum_all = a[i] * (i + 1);
                int sum_before = accumulate(b.begin(), b.begin() + i + 1, 0);
                b[i] = sum_all - sum_before;
            }
        ```
    === "Python"
        ``` py linenums="1"

        ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/TrungBinhCong){:target="_blank"}.