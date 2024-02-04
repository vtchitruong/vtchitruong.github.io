---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2023-03-15
---

# HSG9 HCM 03.2023: Trung bình cộng

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Bài toán liên quan đến trung bình cộng của n phần tử đầu tiên trong mảng, trích từ đề thi Học sinh giỏi Lớp 9 Thành phố tháng 03.2023.

</div>

<br>
<br>
<br>

<!-- more -->

<br>

## Đề bài

Tuấn thường hỗ trợ em An củng cố kiến thức bài học bằng cách cho em làm những bài luyện tập. Để ôn tập những phép tính cơ bản, Tuấn cho An bài toán tính trung bình cộng như sau.

Cho một dãy số nguyên A có N phần tử, các phần tử được đánh số từ 1 đến N. An được yêu cầu tạo một dãy số nguyên B có N phần tử và phần tử thứ i của dãy B là trung bình cộng i số đầu tiên của dãy A. Ví dụ với dãy A là: 15, 25, -25, 25, 60 thì dãy B nếu được tạo đúng sẽ là: 15, 20, 5, 10, 20.

An cũng thường thử thách anh Tuấn bằng những câu hỏi thú vị. Sau khi giải xong bài toàn trung bình cộng của Tuấn, An liền đưa Tuấn đáp án là dãy số B và hỏi lại Tuấn xem anh có thể tạo lại dãy số A ban đầu từ dãy số B không.

### Yêu cầu

Hãy viết chương trình giúp Tuấn tìm dãy số A từ dãy số B.

### Dữ liệu

Vào từ file văn bản TBC.INP.

Dòng đầu chứa một số nguyên N.

Dòng thứ hai chứa N số nguyên $B_i ~ (-10^{6} \leq B_i \leq10^{6})$ lần lượt cho biết giá trị của N phần tử dãy B.

### Kết quả

Ghi ra file văn bản TBC.OUT trên một dòng N số nguyên lần lượt là N phần tử của dãy A. Có thể giả sử dữ liệu cho sẽ đảm bảo các giá trị phần tử dãy A là số nguyên.

### Ràng buộc

50% test ứng với 50% số điểm của bài có $N \leq 5$.

50% test ứng với 50% số điểm của bài có $5<N\leq100000$.

### Ví dụ

**Input**

TBC.INP

5  
15 20 5 10 20

**Output**

TBC.OUT

15 25 -25 25 60

**Giải thích**

Mảng A gồm N phần tử như sau:  

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 15 | 25 | -25 | 25 | 60 |

Mảng B cũng có N phần tử, trong đó phần tử thứ i là trung bình cộng của i phần tử đầu tiên trong mảng A. 

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 15 | 20 | 5 | 10 | 20 |

Yêu cầu bài toán là từ mảng B, tìm ra mảng A.

## Cách giải đề xuất

### Ý tưởng chính

Lấy tổng các phần tử suy ra từng giá trị trung bình trừ đi tổng của những phần tử đã có sẽ ra được phần tử tiếp theo của mảng output.

### Bước 1

1. Khởi tạo mảng `A` gồm các phần tử `0`.
2. Vì trung bình cộng của một phần tử là chính nó, nên gán `B[0]` cho `A[0]`.  

=== "C++"

    ``` c++ linenums="35"
        // Khởi tạo mảng A gồm các phần tử 0
        vector<int> A(N, 0);
        A[0] = B[0];
    ```
=== "Python"

    ``` py linenums="18"
        # Khởi tạo mảng A gồm các phần tử 0
        global N, B
        A = [0 for _ in range(N)]
        A[0] = B[0]
    ```

### Bước 2

Duyệt mảng `B`, lặp các thao tác sau:  

1. Lấy giá trị trung bình cộng (là `B[i]`) nhân với số lượng phần tử (là `i` phần tử), ra được tổng, đặt là `totalAverage`.  

2. Tính tổng của các phần tử hiện có trong mảng `A`, đặt là `totalCurrent`.  

3. Lấy **tổng suy ra từ giá trị trung bình** trừ đi **tổng các phần tử hiện có**, ra được phần tử `A[i]`.  

=== "C++"

    ``` c++ linenums="39"
        // Lấy tổng suy từ giá trị trung bình trừ đi tổng các phần tử hiện có
        for (int i = 1; i < N; ++i)
        {
            // Tính tổng suy từ giá trị trung bình
            int totalAverage = B[i] * (i + 1);
            
            // Tính tổng các phần tử hiện có trong mảng A
            int totalCurrent = accumulate(A.begin(), A.begin() + i + 1, 0);
            
            // Tính A[i]
            A[i] = totalAverage - totalCurrent;
        }
    ```
=== "Python"

    ``` py linenums="23"
        # Lấy tổng suy từ giá trị trung bình trừ đi tổng các phần tử hiện có
        for i in range(1, N):
            # Tính tổng suy từ giá trị trung bình
            total_average = B[i] * (i + 1)

            # Tính tổng các phần tử hiện có trong mảng A
            total_current = sum(A[0: i + 1])

            # Tính A[i]
            A[i] = total_average - total_current
    ```

## Toàn bộ chương trình

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/TrungBinhCong){:target="_blank"}.