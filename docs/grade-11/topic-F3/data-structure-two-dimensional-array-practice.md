---
icon: material/table-large
---

# Thực hành mảng hai chiều

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách giải một số bài toán liên quan đến mảng hai chiều:

    - Chuyển đổi mảng hai chiều thành mảng một chiều
    - Chuyển đổi mảng một chiều thành mảng hai chiều
    - Tính điểm trung bình của một lớp theo bảng điểm cho trước
    - Xử lý đường chéo chính và hai tam giác nằm hai bên của ma trận vuông.
    - Tạo ma trận mô phỏng bàn cờ vua

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình chuyển đổi mảng hai chiều thành mảng một chiều. In ra mảng một chiều trên một dòng, các phần tử phân cách nhau bằng khoảng trắng.

**Đầu vào:**

Mảng hai chiều `A`.

**Đầu vào:**

Mảng một chiều `B`.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [[1, 7, 4, 0],<br>[9, 4, 8, 8],<br>[2, 4, 5, 5]] | 1 7 4 0 9 4 8 8 2 4 5 5 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Gọi:

    - `r` và `c` lần lượt là chỉ số hàng và chỉ số cột của mảng hai chiều `A`
    - `i` là chỉ số của mảng một chiều `B`

    Với `r` và `c` biết trước, ta cần tính `i` tương ứng.
    
    Cụ thể: `i = r * col + c`, trong đó `col` là số cột của mảng `A`.

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `convert_2to1()` để chuyển đổi mảng hai chiều thành mảng một chiều.

    Hàm gồm có:
    
    - Một tham số đầu vào là mảng hai chiều `A`.
    - Giá trị trả về là mảng một chiều `B`.

    Hàm hoạt động như sau: 

    - Lấy số hàng `row` và số cột `col` của mảng hai chiều `A`.
    - Khởi tạo `n` là tích của `row` và `col`. 
    - Khởi tạo mảng một chiều `B` gồm `n` phần tử.
    - Duyệt từng hàng của mảng `A`:
        
        Ứng với mỗi hàng, duyệt từng cột của mảng `A`:
        
        - Tính chỉ số `i` tương ứng của mảng `B`
        - Gán phần tử `A[r][c]` cho phần tử `B[i]`

    ```py linenums="3"
    def convert_2to1(A):
        row = len(A)
        col = len(A[0])

        n = row * col

        B = np.full(n, 0)

        for r in range(row):
            for c in range(col):
                i = r * col + c
                B[i] = A[r, c]

        return B
    ```

    3\. Viết chương trình chính.

    - Khởi tạo mảng hai chiều `array_2d`.
    - Gọi hàm `convert_2to1()` để thực hiện chuyển đổi và gán kết quả trả về cho biến `array_1d`.
    - In ra mảng array_1d. Dùng toán tử `*` để phân tách (unpack) các phần tử.

    ```py linenums="19"
    if __name__ == '__main__':
        array_2d = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])
        array_1d = convert_2to1(array_2d)
        print(*array_1d)
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình chuyển đổi mảng một chiều thành mảng hai chiều. In ra mảng hai chiều theo dạng bảng, các phần tử cùng hàng phân cách nhau bằng khoảng trắng.

**Đầu vào:**

Mảng một chiều `A`.

Số hàng và số cột của mảng hai chiều `B`.

**Đầu ra:**

Mảng hai chiều `B`.

**Ví dụ:**

| Đầu vào | Đầu ra |
| --- | --- |
| [1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5]<br>3<br>4 | 1 7 4 0<br>9 4 8 8<br>2 4 5 5 |
| [1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5]<br>3<br>4 | 1 7 4 0 9 4<br>8 82 4 5 5 |

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Gọi:

    - `i` là chỉ số của mảng một chiều `A`
    - `r` và `c` lần lượt là chỉ số hàng và chỉ số cột của mảng hai chiều `B`
    
    Với `i` biết trước, ta cần tính `r` và `c` tương ứng.
    
    Cụ thể: `r = i // col` và `c = i % col`, trong đó `col` là số cột của mảng `B`.

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `convert_1to2()` để chuyển đổi mảng một chiều thành mảng hai chiều.

    Hàm gồm có:
    
    - Tham số đầu vào gồm có: mảng một chiều `A`, số hàng `row` và số cột `col` của mảng hai chiều `B`. 
    - Giá trị trả về là mảng hai chiều `B` hoặc `None` nếu không chuyển đổi được.

    Hàm hoạt động như sau: 

    - Lấy số phần tử `n` của `A`.
    - Để chuyển đổi được, cần thoả điều kiện `row * col == n`. Nếu không được thì trả về `None`.
    - Khởi tạo mảng hai chiều `B` gồm `row` hàng và `col` cột. 
    - Duyệt từng phần tử của `A`:
        
        - Tính chỉ số r và chỉ số c tương ứng của `B`
        - Gán phần tử `A[i]` cho `B[r][c]`

    ```py linenums="3"
    def convert_1to2(A, row, col):
    n = len(A)

    if row * col == n:
        B = np.full((row, col), 0)

        for i in range(n):
            r = i // col
            c = i % col

            B[r][c] = A[i]

        return B
    else:
        return None
    ```

    3\. Viết hàm `show()` để in ra mảng hai chiều. Hàm này gồm một tham số là mảng hai chiều cần in.

    ```py linenums="20"
    def show(A):
        row = len(A)
        col = len(A[0])

        for r in range(row):
            for c in range(col):
                print(A[r][c], end=' ')

            print()
    ```

    4\. Viết chương trình chính.

    - Khởi tạo mảng hai chiều `array_1d`.
    - Gọi hàm `convert_1to2()` để thực hiện chuyển đổi và gán kết quả trả về cho biến `array_2d`.
    - Dựa vào giá trị của `array_2d`, in ra thông báo không thể chuyển đổi hoặc gọi hàm `show()`.

    ```py linenums="31"
    if __name__ == '__main__':
        array_1d = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

        number_of_rows = int(input('Nhập số hàng: '))
        number_of_cols = int(input('Nhập số cột: '))

        array_2d = convert_1to2(array_1d, number_of_rows, number_of_cols)

        if array_2d is None:
            print('Không thể chuyển đổi')
        else:
            show(array_2d)
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Cho bảng điểm của một lớp, lưu trong mảng hai chiều `scores`, gồm lần lượt các cột điểm sau:

- Ba cột điểm thường xuyên
- Một cột điểm giữa kỳ
- Một cột điểm cuối kỳ

Viết chương trình thực hiện những việc sau:

- Tính điểm trung bình của mỗi học sinh và lưu vào mảng một chiều `averages`.
- In ra toàn bộ các cột điểm kể cả điểm trung bình theo dạng bảng.

**Đầu vào:**

Mảng hai chiều `scores`.

**Đầu ra:**

Các cột điểm theo dạng bảng.

**Ví dụ:**

Đầu vào:

```pycon
scores = [[8, 8, 8, 2, 9],
        [0, 0, 0, 8, 9],
        [8, 9, 10, 6, 6],
        [5, 6, 2, 1, 0],
        [3, 4, 1, 6, 7],
        [9, 2, 4, 1, 5],
        [2, 2, 5, 6, 9],
        [9, 8, 3, 8, 1],
        [10, 2, 7, 6, 5],
        [5, 3, 9, 10, 5]]
```

Đầu ra:

```pycon
  8   8   8   2   9  | 6.9
  0   0   0   8   9  | 5.4
  8   9  10   6   6  | 7.1
  5   6   2   1   0  | 1.9
  3   4   1   6   7  | 5.1
  9   2   4   1   5  | 4.0
  2   2   5   6   9  | 6.0
  9   8   3   8   1  | 4.9
 10   2   7   6   5  | 5.8
  5   3   9  10   5  | 6.5
```

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Bài tập này chủ yếu tập trung vào việc duyệt hàng và cột.

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `calculate_average()` để tính điểm trung bình của từng học sinh.

    Hàm gồm có:
    
    - Một tham số đầu vào là mảng hai chiều `S`.
    - Giá trị trả về là mảng một chiều `A`.

    Hàm hoạt động như sau:

    - Duyệt từng hàng `r` của `S` (ứng với từng học sinh):

        Tính điểm trung bình từ các cột và lưu vào phần tử `A[r]` tương ứng.

    ```py linenums="3"
    def calculate_average(S):
        row = len(S)
        col = len(S[0])

        A = np.full(row, 0.)

        for r in range(row):
            A[r] =round((S[r][0] + S[r][1] + S[r][2] + S[r][3] * 2 + S[r][4] * 3) / 8, 1)

        return A
    ```

    3\. Viết hàm `show()` để in ra các điểm số theo dạng bảng.

    Hàm có hai tham số đầu vào là mảng hai chiều `S` (điểm thành phần) và mảng một chiều `A` (điểm trung bình); không có giá trị trả về.

    Hàm hoạt động như sau:

    - Duyệt từng hàng `r` của `S` (ứng với từng học sinh):

        Duyệt từng cột `c` của `S` (ứng với từng cột điểm):
        
            In ra điểm số tại hàng `r`, cột `c`. Dùng định dạng căn phải `:>3` để bảo đ.

    ```py linenums="15"
    def show(S, A):
        row = len(S)
        col = len(S[0])

        for r in range(row):
            for c in range(col):
                print(f'{S[r][c]:>3}', end=' ')

            print(f' | {A[r]}')
    ```

    4\. Viết chương trình chính.

    - Khởi tạo mảng hai chiều `scores`.
    - Gọi hàm `calculate_average()` để tính điểm trung bình và gán kết quả trả về cho biến `averages`.
    - Gọi hàm `show()` để in ra các cột điểm.

    ```py linenums="31"
    if __name__ == '__main__':
        scores = [[8, 8, 8, 2, 9],
                [0, 0, 0, 8, 9],
                [8, 9, 10, 6, 6],
                [5, 6, 2, 1, 0],
                [3, 4, 1, 6, 7],
                [9, 2, 4, 1, 5],
                [2, 2, 5, 6, 9],
                [9, 8, 3, 8, 1],
                [10, 2, 7, 6, 5],
                [5, 3, 9, 10, 5]]

        averages = calculate_average(scores)

        show(scores, averages)
    ```

## Bài 4

### Đề bài

**Yêu cầu:**

Ma trận vuông $n \times n$ là mảng hai chiều gồm $n$ hàng và $n$ cột.

Đường chéo chính của ma trận $M$ này gồm các phần tử $m_{ij}$ có chỉ số hàng và chỉ số cột bằng nhau, tức $i = j$.

Phần ma trận nằm phía trên đường chéo chính tạm gọi là *"tam giác trên"*, phần ma trận nằm phía dưới đường chéo chính tạm gọi là *"tam giác dưới"*.

Viết chương trình thực hiện những việc sau:

1. Khởi tạo giá trị `0` cho toàn bộ các phần tử của ma trận vuông `n × n`.
2. Gán giá trị `1` cho các phần tử nằm trên đường chéo chính.
3. Gán giá trị `2` cho các phần tử thuộc tam giác dưới của ma trận.
4. Gán giá trị `3` cho các phần tử thuộc tam giác trên của ma trận.

**Đầu vào:**

Một số nguyên là kích thước của ma trận vuông.

**Đầu ra:**

Ma trận theo yêu cầu.

**Ví dụ:**

Đầu vào:

```pycon
n = 10
```

Đầu ra:

```pycon
1 3 3 3 3 3 3 3 3 3 
2 1 3 3 3 3 3 3 3 3 
2 2 1 3 3 3 3 3 3 3 
2 2 2 1 3 3 3 3 3 3 
2 2 2 2 1 3 3 3 3 3 
2 2 2 2 2 1 3 3 3 3 
2 2 2 2 2 2 1 3 3 3 
2 2 2 2 2 2 2 1 3 3 
2 2 2 2 2 2 2 2 1 3 
2 2 2 2 2 2 2 2 2 1
```

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Bài tập này chủ yếu tập trung vào việc duyệt hàng và cột.

    Khác với bài tập trên, ta không duyệt toàn bộ hàng hay toàn bộ cột, mà cần cân nhắc phạm vi duyệt của từng vòng lặp. 

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `fill_main_diagonal()` để gán `1` vào đường chéo chính.

    Hàm có một tham số đầu vào là mảng hai chiều `A`; không có giá trị trả về.
    
    Các phần tử nằm trên đường chéo chính có đặc điểm: chỉ số hàng và chỉ số cột bằng nhau, cụ thể là `A[i][i]`.

    Do đó, ta chỉ cần một vòng lặp để duyệt từ `0` đến `n - 1`. 

    ```py linenums="3"
    def fill_main_diagonal(A):
        n = len(A)

        for i in range(n):
            A[i][i] = 1
    ```

    3\. Viết hàm `fill_lower_triangle()` để gán `2` vào tam giác dưới.

    Hàm có một tham số đầu vào là mảng hai chiều `A`; không có giá trị trả về.

    Tam giác dưới có đặc điểm: tại hàng `r`, các phần tử đều bắt đầu từ cột `0` và kết thúc trước cột có chỉ số bằng chỉ số hàng, là `r`. 

    ```py linenums="10"
    def fill_lower_triangle(A):
        n = len(A)

        for r in range(n):
            for c in range(r):
                A[r][c] = 2
    ```

    4\. Viết hàm `fill_upper_triangle()` để gán `3` vào tam giác trên.

    Hàm có một tham số đầu vào là mảng hai chiều `A`; không có giá trị trả về.

    Tam giác trên có đặc điểm: tại hàng `r`, các phần tử đều bắt đầu từ cột `r + 1` và kết thúc tại cột cuối cùng. 

    ```py linenums="18"
    def fill_upper_triangle(A):
        n = len(A)

        for r in range(n):
            for c in range(r + 1, n):
                A[r][c] = 3
    ```

    5\. Viết hàm `show()` để in ra ma trận.

    ```py linenums="26"
    def show(A):
        n = len(A)

        for r in range(n):
            for c in range(n):
                print(A[r][c], end=' ')

            print()
    ```

    6\. Viết chương trình chính.

    - Cho người dùng nhập vào kích thước ma trận, lưu vào biến `size`.
    - Khởi tạo ma trận `matrix` có kích thước `size`.
    - Lần lượt gọi các hàm `fill_*` để gán giá trị theo yêu cầu.
    - Gọi hàm `show()` để in ra ma trận kết quả.

    ```py linenums="36"
    if __name__ == '__main__':
        size = int(input('Nhập kích thước của ma trận: '))

        matrix = np.full((size, size), 0)
        fill_main_diagonal(matrix)
        fill_lower_triangle(matrix)
        fill_upper_triangle(matrix)

        show(matrix)
    ```

## Bài 5

### Đề bài

**Yêu cầu:**

Viết chương trình tạo mảng hai chiều có kích thước 8 × 8 để biểu diễn bàn cờ vua, trong đó các phần tử có giá trị 0 và 1 xen kẽ nhau, biểu thị cho các ô trắng và ô đen.

Quy ước: ô đầu tiên ở góc trên bên trái, toạ độ `[0, 0]` có giá trị là `0`, biểu thị màu trắng.

**Đầu vào:**

Không có dữ liệu đầu vào.

**Đầu ra:**

```pycon
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
```

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Ô `[0, 0]` có giá trị là `0`.

    Xét các ô lân cận với ô `[0, 0]`: 

    - Ô bên phải `[0, 1]` có giá trị là `1`.
    - Ô bên dưới `[1, 0]` có giá trị là `1`.
    - Ô góc dưới phải `[1, 1]` có giá trị là `0`.

    Ta nhận thấy rằng, tổng của chỉ số hàng và chỉ số cột có ảnh hưởng đến giá trị của ô. 

??? tip "Viết chương trình"

    1\. Nạp thư viện `numpy`.

    ```py linenums="1"
    import numpy as np
    ```

    2\. Viết hàm `fill_chess_board()` để gán `0` và `1` vào các ô của bàn cờ.

    Hàm gồm có:
    
    - Một tham số đầu vào là kích thước bàn cờ cần tạo.
    - Giá trị trả về là mảng hai chiều `B` biểu thị bàn cờ.

    Hàm hoạt động như sau:

    - Khởi tạo mảng hai chiều `B` gồm `n` hàng và `n` cột.
    - Duyệt từng hàng `r` của `B`:

        Duyệt từng cột `c` của `B`:

            Xét xem tổng của `r` và `c` là chẵn hay lẻ để gán tương ứng là `0` hoặc `1`.

    ```py linenums="3"
    def fill_chess_board(n):
        B = np.full((n, n), 0)

        for r in range(n):
            for c in range(n):
                B[r][c] = (r + c) % 2

        return B
    ```

    3\. Viết hàm `show()` để in ra bàn cờ.

    ```py linenums="13"
    def show(A):
        n = len(A)

        for r in range(n):
            print(*A[r])
    ```

    4\. Viết chương trình chính.

    ```py linenums="20"
    if __name__ == '__main__':
        size = 8
        board = fill_chess_board(size)
        show(board)
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1I5AfLQAF9cVn4HaihEuIRvQgWTnGSpRx?usp=sharing){target="_blank"}

