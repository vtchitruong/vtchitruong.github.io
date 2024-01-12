---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2023-03-27
---

# HSG9 HCM 03.2023: Xổ số

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }
Bài toán trích từ đề thi Học sinh giỏi Lớp 9 Thành phố tháng 03.2023.

Tựa là *xổ số* nhưng không phải là xổ số truyền thống hay Vietlott, mà chỉ là cái cớ để thử lòng chúng sanh về back-tracking.

</div>

<br>
<br>

<!-- more -->

<br>

## Khái quát về bài toán

### Yêu cầu

Cho N số và chọn K số trong đó. Ứng với mỗi lần chọn một bộ gồm K số, số lớn nhất trong bộ sẽ là điểm thưởng của bộ đó.

Tính S là tổng điểm thưởng của các bộ, trong đó kết quả là phần dư của phép chia S cho 10^9 + 7.

### Input
4 2  
6 7 6 5

### Output
39

### Giải thích
N = 4 và K = 2, tức chọn bộ gồm 2 số từ 4 số ban đầu.

Có tất cả 6 cách chọn, tương ứng với 6 bộ. Tổng điểm thưởng (tổng các giá trị lớn nhất) là 39.

| Bộ số | Số được chọn | Điểm thưởng (là giá trị lớn nhất) |
| --- | --- | --- |
| 1 | 6 7 | 7 |
| 2 | 6 6 | 6 |
| 3 | 6 5 | 6 |
| 4 | 7 6 | 7 |
| 5 | 7 5 | 7 |
| 6 | 6 5 | 6 |

## Cách giải đề xuất

### Ý tưởng chính

Áp dụng kỹ thuật back-tracking để phát sinh các bộ số, rồi tính giá trị lớn nhất của từng bộ.

### Bước 1
Tạo hàm `Generate()` để phát sinh (chọn) một bộ số bằng back-tracking và đệ quy.

- Điều kiện dừng đệ quy:  
    Nếu một bộ đã có đủ `k` số thì dừng đệ quy và nạp bộ này vào mảng `choices`.

- Phần đệ quy:  
    Ứng với mỗi số `x` trong `n` số:  

    - Nạp số `x` này vào bộ đang xét chọn (biến `choice`).  
    - Gọi đệ quy để nạp số tiếp theo (trong `n` số) vào vị trí `i` tiếp theo của bộ đang xét chọn `choice`.  
    - Back-track: Gỡ bỏ số `x` ở vị trị cuối của bộ đang xét chọn `choice` (để chuẩn bị nạp số tiếp theo).  

    === "C++"
        ``` c++ linenums="1"
        void Generate(vector<int>& choice, int next)
        {
            if (choice.size() == k)
            {
                choices.push_back(choice);
                return;
            }

            for (int i = next; i < a.size(); ++i)
            {
                choice.push_back(a[i]);
                Generate(choice, i + 1);
                choice.pop_back();
            }
        }
        ```
    === "Python"
        ``` py linenums="1"

        ```

### Bước 2

Tính giá trị lớn nhất của mỗi bộ. Nạp các giá trị lớn nhất vào mảng `bonus`.

=== "C++"
    ``` c++ linenums="1"
        vector<int> bonus;

        for (int i = 0; i < choices.size(); ++i)
        {
            int m = *max_element(choices[i].begin(), choices[i].end());
            bonus.push_back(m);
        }
    ```
=== "Python"
    ``` py linenums="1"

    ```

### Bước 3

Tính tổng các phần tử trong mảng `bonus`.

Đối với C++, `lli` là viết tắt của kiểu dữ liệu `long long int` được quy ước ở đầu chương trình.  

=== "C++"
    ``` c++ linenums="1"
        lli sum_bonus = (lli)accumulate(bonus.begin(), bonus.end(), 0);
        return sum_bonus % (lli)(10E9 + 7);
    ```
=== "Python"
    ``` py linenums="1"

    ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/XoSo){:target="_blank"}.