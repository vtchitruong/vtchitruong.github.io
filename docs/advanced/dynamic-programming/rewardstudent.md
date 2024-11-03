# Chia phần thưởng

## Khái quát

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **tính số cách biểu diễn một số tự nhiên bằng tổng của các số tự nhiên theo thứ tự không tăng**.

Bài toán này yêu cầu tính số cách chia số phần thưởng cho học sinh. Bài toán không nói về một phương án chia thưởng cụ thể, mà chỉ đề cập số phương án chia thưởng. Cụ thể, tính số cách chia phần thưởng để học sinh *chưa giỏi* nhận phần thưởng *không nhiều hơn* những người đã nỗ lực hơn mình.

## Bài toán

### Yêu cầu

Có bao nhiêu cách để chia *r* phần thưởng cho *s* học sinh, sao cho mỗi học sinh không nhận ít phần thưởng hơn người xếp hạng thấp hơn mình.[^1]

[^1]: Nguyễn Xuân Huy, Sáng tạo trong thuật toán và lập trình - Tập 1. Hà Nội: Nhà xuất bản Thông tin và Truyền thông, 2015.

### Input

```pycon
7 4
```

### Ouput

```pycon
11
```

### Giải thích

Có 11 cách chia 7 phần thưởng cho 4 học sinh:

```pycon
7 0 0 0
6 1 0 0
5 2 0 0
5 1 1 0
4 3 0 0
4 2 1 1
3 3 1 0
3 2 2 0
4 1 1 1
3 2 1 1
2 2 2 1
``` 

## Cách giải đề xuất

### Xây dựng bảng quy hoạch

Bảng quy hoạch là một mảng hai chiều `D` gồm:

- `student + 1` hàng, với `student` là số lượng học sinh.
- `reward + 1` cột, với `reward` là số lượng phần thưởng.

Mỗi phần tử `D[s][r]` lưu số cách mà `s` học sinh nhận `r` phần thưởng.

Như vậy, phần tử cuối cùng `D[student][reward]` sẽ là kết quả của bài toán.

**Bước 1:** Khởi tạo

Khởi tạo một số giá trị ban đầu cho bảng quy hoạch `D`:

- Hàng `0`: Các phần tử `D[0, r]` đều bằng `0`, nghĩa là không có cách nào để `0` học sinh nhận `r` phần thưởng.

- Quy ước phần tử `D[0][0] = 1`, nghĩa là chỉ có `1` cách để `0` học sinh nhận `0` phần thưởng.

=== "C++"

    ```c++ linenums="1"
        // Khởi tạo giá trị 0 cho toàn bảng quy hoạch
        D.resize(student + 1, vector<int>(reward + 1, 0)); // (1)!

        // Chỉ có 1 cách để 0 học sinh nhận 0 phần thưởng
        D[0][0] = 1;
    ```
    { .annotate }

    1.  Dòng lệnh này *vô tình* khởi tạo giá trị `0` cho toàn bộ bảng quy hoạch.

=== "Python"

    ```py linenums="1"
        # Khởi tạo giá trị 0 cho toàn bảng quy hoạch
        D = [[0 for col in range(reward + 1)] for row in range(student + 1)]
        
        # Chỉ có 1 cách để 0 học sinh nhận 0 phần thưởng
        D[0][0] = 1
    ```

**Bước 2:** Thực hiện quy hoạch động

Tiến hành duyệt bảng theo từng hàng (tương ứng với số học sinh). Trong mỗi hàng, lần lượt điền giá trị vào từng cột (tương ứng với số phần thưởng).

Có hai trường hợp:

**Trường hợp 1:** Số phần thưởng ít hơn số học sinh

Điều này đồng nghĩa không có đủ số phần thưởng cho tất cả học sinh, nên chỉ có `r` học sinh được nhận `r` phần thưởng. Nói cách khác, các học sinh xếp hạng từ `r + 1` đến `s` sẽ không được nhận thưởng.

Như vậy, số cách để `s` học sinh nhận `r` phần thưởng cũng bằng với số cách để `r` học sinh nhận `r` phần thưởng. Số cách của trường hợp 1 là `D[r][r]`.

**Trường hợp 2:** Số phần thưởng bằng hoặc nhiều hơn số học sinh

Ta chia trường hợp này thành hai trường hợp con.

- **Trường hợp 2a:** Học sinh xếp hạng chót không được nhận thưởng.

    Như vậy, số cách để `s` học sinh nhận `r` phần thưởng cũng bằng với số cách `s - 1` học sinh (tức trừ đi học sinh hạng chót) nhận `r` phần thưởng. Số cách của trường hợp 2a là `D[s - 1][r]`.

- **Trường hợp 2b:** Học sinh xếp hạng chót được nhận thưởng.

    Điều này có nghĩa mọi học sinh đều nhận thưởng. Lúc này, ta thực hiện truy hồi bằng cách bỏ bớt 1 phần thưởng của mỗi học sinh ra.
    
    Có thể thấy, số cách để `s` học sinh nhận `r` phần thưởng bằng với số cách để `s` học sinh nhận `s - r` phần thưởng (tức tạm thời bỏ bớt `r` phần thưởng của `r` học sinh). Số cách của trường hợp 2b là `D[s][r - s]`.

Dễ thấy, số cách của trường hợp 2 là: số cách của 2a + số cách của 2b.

=== "C++"

    ```c++ linenums="1"
        // Duyệt hàng (số học sinh) bằng biến s trong phạm vi [1..student]
        for (int s = 1; s < student + 1; ++s)
        {
            // Trường hợp 1: số phần thưởng < số học sinh
            // Chỉ có r học sinh được nhận r phần thưởng

            // Duyệt cột (số phần thưởng) bằng biến r trong phạm vi [0..s - 1]
            for (int r = 0; r < s; ++r)
            {
                D[s][r] = D[r][r];
            }

            // Trường họp 2: số phần thưởng >= số học sinh
            // Trường họp 2a: học sinh hạng chót sẽ không được nhận thưởng
            // Số cách chia thưởng là D[s - 1][r]

            // Trường họp 2b: học sinh hạng chót vẫn được nhận thưởng
            // Số cách chia thưởng D[s][r] sẽ không thay đổi nếu ta bỏ bớt 1 phần thưởng của mỗi học sinh. Số phần thưởng tạm bỏ bớt là (r - s) 
            // Số cách chia thưởng là D[s][r - s]

            // Duyệt cột (số phần thưởng) bằng biến r trong phạm vi [s..reward]
            for (int r = s; r < reward + 1; ++r)
            {
                D[s][r] = D[s - 1][r] + D[s][r - s];
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        # Duyệt hàng (số học sinh) bằng biến s trong phạm vi [1..student]
        for s in range(1, student + 1):
            # Trường hợp 1: số phần thưởng < số học sinh
            # Chỉ có r học sinh được nhận r phần thưởng

            # Duyệt cột (số phần thưởng) bằng biến r trong phạm vi [0..s - 1]
            for r in range(0, s):
                D[s][r] = D[r][r]
            
            # Trường họp 2: số phần thưởng >= số học sinh
            # Trường họp 2a: học sinh hạng chót sẽ không được nhận thưởng
            # Số cách chia thưởng là D[s - 1][r]

            # Trường họp 2b: học sinh hạng chót vẫn được nhận thưởng
            # Số cách chia thưởng D[s][r] sẽ không thay đổi nếu ta bỏ bớt 1 phần thưởng của mỗi học sinh. Số phần thưởng tạm bỏ bớt là (r - s) 
            # Số cách chia thưởng là D[s][r - s]

            # Duyệt cột (số phần thưởng) bằng biến r trong phạm vi [s..reward]        
            for r in range(s, reward + 1):
                D[s][r] = D[s - 1][r] + D[s][r - s]
    ```

## Một cách giải khác

### Ý tưởng cải tiến

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **0** | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0  |
| **1** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1  |
| **2** | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 4  |
| **3** | 1 | 1 | 2 | 3 | 4 | 5 | 7 | 8  |
| **4** | 1 | 1 | 2 | 3 | 5 | 6 | 9 | 11 |

Quan sát bảng quy hoạch `D` trên, ta nhận thấy các giá trị ở phần đầu của mỗi hàng đều bằng với hàng ngay trên nó. Ví dụ, xét hàng 4, các giá trị từ cột 0 đến cột 3 đều bằng với các giá trị tương ứng ở hàng 3. Lý do là 3 phần thưởng chỉ có thể chia cho tối đa 3 học sinh. Nói cách khác, nếu chỉ có 3 phần thưởng, thì dù có 4 hay 5 hay 10 học sinh, thì số cách vẫn không thay đổi.

Do đó, ta chỉ cần lập mảng một chiều, tức bảng chỉ có một hàng, và tính từ phần tử thứ 4 (cột 4) trở đi.

### Thực hiện quy hoạch động

Dựa theo ý tưởng trên:

- Đối với các phần tử trong phạm vi `[0..s - 1]`, ta giữ nguyên giá trị, không cần tính.
- Đối với các phần tử trong phạm vi `[s..reward]`, vì chỉ cần duyệt cột nên ta sử dụng biểu thức như cũ và bỏ đi chỉ số hàng.

=== "C++"

    ```c++ linenums="1"
        for (int s = 1; s < student + 1; ++s)
        {
            for (int r = s; r < reward + 1; ++r)
            {
                v[r] = v[r] + v[r - s];
            }
        }  
    ```
=== "Python"

    ```py linenums="1"
        for s in range(1, student + 1):
            for r in range(s, reward + 1):
                L[r] = L[r] + L[r - s]
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/DynamicProgramming/tree/main/RewardStudent){:target="_blank"}.