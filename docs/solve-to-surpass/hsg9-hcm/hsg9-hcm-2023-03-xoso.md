---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2023-03-27
---

# HSG9 HCM 03.2023: Xổ số

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Tựa là *xổ số* nhưng không phải là xổ số truyền thống hay Vietlott, mà chỉ là cái cớ để thử lòng chúng sanh về back-tracking.

Bài toán trích từ đề thi Học sinh giỏi lớp 9 Thành phố tháng 03.2023.

</div>

<br>

<!-- more -->

<br>

## Đề bài

Hội xuân tại trường năm nay có gian hàng xổ số trúng điểm thưởng. Có N phiếu, mỗi phiếu có một mặt giống nhau, mặt còn lại ghi một số nguyên không âm ngẫu nhiên. Ban đầu mặt ghi số được đặt úp xuống mặt bàn. Người chơi được chọn K phiếu bất kỳ và nhận được số điểm thưởng là số lớn nhất trong K phiếu trên. Hùng rất hào hứng với trò chơi này và muốn biết tổng điểm thưởng mình được nhận là bao nhiêu nếu Hùng thử hết tất cả các cách chọn.

Gọi S là tổng điểm thưởng được nhận nếu Hùng thử hết tất cả các cách chọn phiếu. Xét ví dụ N = 4, K = 2 và giá trị của các phiếu lần lượt là 6, 7, 6, 5 thì Hùng có 6 cách chọn và tổng điểm thưởng S là 39, giá trị điểm thưởng của từng cách được cho trong bảng sau:

| Cách | Giá trị của phiếu chọn | Điểm thưởng |
| --- | --- | --- |
| Cách 1: chọn phiếu thứ 1, thứ 2 |	6, 7 | 7 |
| Cách 2: chọn phiếu thứ 1, thứ 3 |	6, 6 | 6 |
| Cách 3: chọn phiếu thứ 1, thứ 4 | 6, 5 | 6 |
| Cách 4: chọn phiếu thứ 2, thứ 3 | 7, 6 | 7 |

### Yêu cầu

Hãy viết một chương trình cho biết phần dư khi chia S cho $10^{9} + 7$.

### Dữ liệu

Vào từ file văn bản XOSO.INP, dòng đầu chứa hai số nguyên N và K. Dòng thứ hai chứa N số nguyên $X_i ~ (0 \leq X_i \leq10^{6})$ lần lượt cho biết giá trị của N phiếu.

### Kết quả

Ghi ra file văn bản XOSO.OUT trên một dòng là phần dư khi chia S cho $10^{9} + 7$.

### Ràng buộc

30% test ứng với 30% số điểm của bài có $N \leq 1000 ~ và ~ 1 \leq K \leq 3$

20% test ứng với 20% số điểm của bài có $N \leq 25 ~ và ~ 1 \leq K \leq 12$

50% test ứng với 50% số điểm của bài có $N \leq 100000 ~ và ~ 1 \leq K \leq 50$

### Ví dụ

**Input**

4 2  
6 7 6 5

**Output**

39

**Giải thích**

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

    ``` c++ linenums="38"
    void Generate(vector<int>& choice, int next)
    {
        // Nếu một bộ đã có đủ k số thì nạp vào choices và dừng đệ quy
        if (choice.size() == k)
        {
            choices.push_back(choice);
            return;
        }

        // Ứng với mỗi số x trong n số:
        // - Nạp số x này vào bộ đang xét chọn
        // - Gọi đệ quy để nạp số tiếp theo vào vị trí tiếp theo của bộ đang xét chọn
        // - Gỡ bỏ x ở vị trí cuối của bộ đang xét chọn 
        for (int i = next; i < a.size(); ++i)
        {
            choice.push_back(a[i]);
            Generate(choice, i + 1);
            choice.pop_back();
        }
    }
    ```
=== "Python"

    ``` py linenums="20"
    def generate(choice, next):
        # Nếu một bộ đã có đủ k số thì nạp vào choices và dừng đệ quy
        global a, choices
        if len(choice) == k:
            choices.append(choice.copy())
            return

        # Ứng với mỗi số x trong n số:
        # - Nạp số x này vào bộ đang xét chọn
        # - Gọi đệ quy để nạp số tiếp theo vào vị trí tiếp theo của bộ đang xét chọn
        # - Gỡ bỏ x ở vị trí cuối của bộ đang xét chọn 
        for i in range(next, len(a)):
            choice.append(a[i])
            generate(choice, i + 1)
            choice.pop()
    ```

### Bước 2

Tìm giá trị lớn nhất của mỗi bộ. Nạp các giá trị lớn nhất này vào mảng `bonus`.

=== "C++"

    ``` c++ linenums="66"
        // Mảng chứa các điểm thưởng
        vector<int> bonus;

        // Tính điểm thưởng của từng bộ số rồi nạp vào bonus
        for (int i = 0; i < choices.size(); ++i)
        {
            int m = *max_element(choices[i].begin(), choices[i].end());
            bonus.push_back(m);
        }
    ```
=== "Python"

    ``` py linenums="42"
        # Mảng chứa các điểm thưởng
        bonus = []

        # Tính điểm thưởng của từng bộ số rồi nạp vào bonus
        global choices
        for i in range(len(choices)):
            m = max(choices[i])
            bonus.append(m)
    ```

### Bước 3

Tính tổng các điểm thưởng, cũng chính là các phần tử trong mảng `bonus`.

Đối với C++, `lli` là viết tắt của kiểu dữ liệu `long long int` được quy ước ở đầu chương trình.

Đối với Python, kiểu `int` có giá trị tối đa là $2^{31} - 1 = 2,147,483,647$ trong hệ thống 32-bit, và có thể tự mở rộng khi cần dựa trên lượng bộ nhớ còn trống. 

=== "C++"

    ``` c++ linenums="76"
        // Tính tổng điểm thưởng
        lli sum_bonus = (lli)accumulate(bonus.begin(), bonus.end(), 0);
        return sum_bonus % (lli)(10E9 + 7);
    ```
=== "Python"

    ``` py linenums="51"
        # Tính tổng điểm thưởng
        sum_bonus = sum(bonus, 0)
        return int(sum_bonus % (10e9 + 7))
    ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/XoSo){:target="_blank"}.