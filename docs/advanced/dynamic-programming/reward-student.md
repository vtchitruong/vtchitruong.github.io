# Chia phần thưởng cho học sinh

## Khái quát về bài toán

Ở đời phần lớn người ta luôn muốn công bằng. Chẳng hạn, khi phân phối sản phẩm, người làm tốt hơn phải hưởng nhiều hơn, hoặc ít ra là bằng, người làm kém hơn.

Bài toán này không nói về một phương án chia thưởng cụ thể, mà chỉ đề cập số phương án chia thưởng. Cụ thể, tính số cách chia phần thưởng để học sinh *chưa giỏi* nhận phần thưởng *không nhiều hơn* những người đã nỗ lực hơn mình.

Bài toán tổng quát cho dạng này là tính số cách để biểu diễn một số tự nhiên thành tổng của các số tự nhiên khác theo thứ tự không tăng.

## Bài toán ví dụ

### Yêu cầu

Có bao nhiêu cách để chia *r* phần thưởng cho *s* học sinh, sao cho mỗi học sinh không nhận ít phần thưởng hơn người xếp hạng thấp hơn mình.[^1]

[^1]: Nội dung chính được tham khảo tại:
    Nguyễn Xuân Huy. *(2015) Sáng tạo trong thuật toán và lập trình - Tập 1*. Hà Nội: Nhà xuất bản Thông tin và Truyền thông. Trang 247 - 255.

### Input

```pycon
7 4
```

### Ouput

```pycon
11
```

### Giải thích

Có 11 cách chia 7 phần thưởng cho 4 học sinh, gồm:

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

### Cách giải đề xuất

#### Xây dựng bảng quy hoạch

Bảng quy hoạch là một mảng hai chiều `d`, gồm:

- `students + 1` hàng, với `students` là số lượng học sinh.
- `rewards + 1` cột, với `rewards` là số lượng phần thưởng.

Mỗi ô `d[s][r]` lưu số cách mà `s` học sinh nhận `r` phần thưởng.

Như vậy, `d[students][rewards]` sẽ là kết quả của bài toán.

#### Khởi tạo

Khởi tạo một số giá trị ban đầu cho bảng quy hoạch `d`:

- Hàng 0: Các ô `d[0, r]` đều bằng `0`, nghĩa là không có cách nào để **0 học sinh** nhận **r phần thưởng**.

- Quy ước phần tử `d[0][0] = 1`, nghĩa là chỉ có **một cách** để **0 học sinh** nhận **0 phần thưởng**.

=== "C++"
    ``` c++ linenums="1"
        d.resize(students + 1, vector<int>(rewards + 1, 0));
        d[0][0] = 1;
    ```

=== "Python"
    ``` py linenums="1"
        global d
        d = [[0 for col in range(rewards + 1)] for row in range(students + 1)]
        d[0][0] = 1
    ```

Code trên cũng *vô tình* khởi tạo giá trị `0` cho toàn bộ bảng. Sau đó gán phần tử đầu là `1`.

#### Thực hiện quy hoạch động

Tiến hành duyệt bảng theo từng hàng (hàng tương ứng số học sinh). Trong mỗi hàng, lần lượt điền giá trị vào từng cột (cột tương ứng số phần thưởng).

Có hai trường hợp:

1. Trường hợp 1: Số phần thưởng ít hơn số học sinh

    Điều này đồng nghĩa không có đủ số phần thưởng cho tất cả học sinh, nên chỉ có **r học sinh** nhận **r phần thưởng**. Nói cách khác, các học sinh xếp hạng từ r + 1 đến s sẽ không được nhận thưởng.

    Như vậy, số cách của trường hợp 1 là `d[r][r]`.

2. Trường hợp 2: Số phần thưởng bằng hoặc nhiều hơn số học sinh

    Ta chia trường hợp này thành hai trường hợp con.

    1. Trường hợp 2a: Học sinh xếp hạng chót lớp không được nhận thưởng.

        Như vậy, số cách của trường hợp 2a là `d[s - 1][r]`, tức **s - 1 học sinh** nhận **r phần thưởng**.

    2. Trường hợp 2b: Học sinh xếp hạng chót lớp được nhận thưởng.

        Điều này có nghĩa mọi học sinh đều nhận thưởng. Lúc này, ta thực hiện truy hồi bằng cách bỏ bớt 1 phần thưởng của mỗi học sinh ra, thì số phần thưởng (tạm thời) bỏ bớt ra là r - s phần thưởng.

        Như vậy, số cách của trường hợp 2b là `d[s][r - s]`, tức **s học sinh** nhận **r - s phần thưởng**.

    Dễ thấy, số cách của trường hợp 2 là tổng (2a + 2b).

=== "C++"
    ``` c++ linenums="1"
        for (int s = 1; s < students + 1; ++s)
        {
            // Case 1: rewards < students            
            for (int r = 0; r < s; ++r)
            {
                d[s][r] = d[r][r];
            }

            // Case 2: rewards >= students
            for (int r = s; r < rewards + 1; ++r)
            {
                d[s][r] = d[s - 1][r] + d[s][r - s];
            }
        }
    ```
=== "Python"
    ``` py linenums="1"
        for s in range(1, students + 1):

        # Case 1: rewards < students
        for r in range(0, s):
            d[s][r] = d[r][r]
        
        # Case 2: rewards >= students
        for r in range(s, rewards + 1):
            d[s][r] = d[s - 1][r] + d[s][r - s]
    ```

### Một cách giải khác

#### Ý tưởng cải tiến

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0  |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1  |
| 2 | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 4  |
| 3 | 1 | 1 | 2 | 3 | 4 | 5 | 7 | 8  |
| 4 | 1 | 1 | 2 | 3 | 5 | 6 | 9 | 11 |

Bảng 1. Bảng quy hoạch `d` sau khi hoàn thành

Quan sát bảng 1, ta nhận thấy các giá trị ở phần đầu của mỗi hàng đều bằng với hàng ngay trên nó. Ví dụ, xét hàng 4, các giá trị từ cột 0 đến cột 3 đều bằng với các giá trị tương ứng ở hàng 3. Lý do là 3 phần thưởng chỉ có thể chia cho tối đa 3 học sinh. Nói cách khác, nếu chỉ có 3 phần thưởng, thì dù có 4 hay 5 hay 10 học sinh, thì số cách vẫn không thay đổi.

Do đó, ta chỉ cần lập mảng một chiều, tức bảng chỉ có một hàng, và tính từ phần tử thứ 4 (cột 4) trở đi.

#### Thực hiện quy hoạch động

- Các phần tử từ có chỉ số `0` đến `s - 1` vẫn giữ nguyên giá trị, không cần tính.

- Các phần tử có chỉ số từ `s` đến hết, tức đến `rewards`, vì chỉ cần duyệt cột nên ta sử dụng biểu thức như cũ và bỏ đi chỉ số hàng.

=== "C++"
    ``` c++ linenums="1"
        for (int s = 1; s < students + 1; ++s)
        {
            for (int r = s; r < rewards + 1; ++r)
            {
                v[r] = v[r] + v[r - s];
            }
        }  
    ```
=== "Python"
    ``` py linenums="1"
        for s in range(1, students + 1):
            for r in range(s, rewards + 1):
                l[r] = l[r] + l[r - s]
    ```

## Toàn bộ chương trình

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/DynamicProgramming/tree/main/RewardStudent){:target="_blank"}.