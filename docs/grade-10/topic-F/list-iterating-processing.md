---
icon: material/format-list-numbered
---

# Duyệt và xử lý danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách duyệt và xử lý các phần tử trong danh sách.

### Khái quát

Để duyệt và xử lý các phần tử trong danh sách, ta có thể sử dụng vòng lặp `for` kết hợp lệnh `if` nằm bên trong.

### Lọc ra các phần tử thoả điều kiện

Ý tưởng chính:

Duyệt từng phần tử trong danh sách, nếu phần tử nào thoả điều kiện thì **nạp vào danh sách mới**.

```py
def filter_function(L):
    n = len(L)
    
    new_list = []
    for i in range(n):
        if L[i] thoả điều kiện:
            new_list.append(L[i])
    
    return new_list
```

Ví dụ:

**Yêu cầu:**

Viết chương trình lọc ra các số chẵn trong danh sách.

**Mã lệnh:**

Thay vì nhập từng phần tử từ bàn phím, ta có thể phát sinh các phần tử một cách ngẫu nhiên.

Trước hết, ta viết hàm `generate()` có tham số đầu vào `n` là số lượng phần tử cần phát sinh.

Hàm này trả về một danh sách chứa `n` số nguyên có giá trị ngẫu nhiên trong phạm vi `[1..100]` (bao gồm cả số `100`).

Để phát sinh ngẫu nhiên, ta dùng hàm `randint()` của thư viện `random`.

```py linenums="1"
import random as rd

# Hàm dùng để phát sinh ngẫu nhiên n số nguyên có giá trị từ 1 đến 100
def generate(n):
    # Khởi tạo danh sách L rỗng
    L = []

    # Lặp n lần thao tác thêm (append) số nguyên vào L
    for i in range(n):
        L.append(rd.randint(1, 100))

    # Trả về danh sách kết quả
    return L
```

Hàm `filter_even()` dùng lọc ra các số chẵn trong danh sách. Điều kiện kiểm tra chẵn là số đó có chia hết cho 2 hay không, cụ thể: `L[i] % 2 == 0`.

Nếu phần tử nào thoả điều kiện thì ta dùng hàm append() để nạp phần tử đó vào cuối danh sách kết quả `even_list`.

```py linenums="16"
# Hàm filter_even() lọc ra các số chẵn trong danh sách
def filter_even(L):
    # Lấy số lượng phần tử của L
    n = len(L)

    # Khởi tạo danh sách kết quả là rỗng
    even_list = []
    
    # Duyệt từng phần tử trong phạm vi [0..n - 1]
    # Nếu phần tử L[i] chẵn thì nạp nó vào danh sách kết quả
    for i in range(n):
        if L[i] % 2 == 0:
            even_list.append(L[i])

    # Trả về danh sách kết quả
    return even_list
```

Trong chương trình chính, ta gọi các hàm vừa viết trên ra thực hiện.

```py linenums="34"
# Chương trình chính
if __name__ == '__main__':
    # Cho người dùng nhập số lượng phần tử
    number_of_elements = int(input('Nhập số lượng phần tử: '))

    # Gọi hàm generate() để phát sinh danh sách ngẫu nhiên
    my_list = generate(number_of_elements)

    # In danh sách ra màn hình
    print(f'Danh sách ban đầu: {my_list}')

    # Gọi hàm filter_even() và in ra danh sách số chẵn
    even_list = filter_even(my_list)
    print(f'Danh sách các số chẵn: {even_list}')
```

**Output:**

```pycon
Nhập số lượng phần tử: 10
Danh sách ban đầu: [96, 43, 25, 37, 18, 32, 94, 22, 21, 13]
Danh sách các số chẵn: [96, 18, 32, 94, 22]
```

!!! note "Lưu ý"

    Do danh sách được phát sinh ngẫu nhiên, nên kết quả có thể khác nhau trong các lần chạy chương trình.

!!! question "Hỏi chút chơi - phần 1"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-iterating-processing/quiz1.html">Hỏi chút chơi</iframe>
    </div>

### Đếm số lượng phần tử thoả điều kiện

Ý tưởng chính:

Duyệt từng phần tử trong danh sách, nếu phần tử nào thoả điều kiện thì **tăng biến đếm lên 1**.

```py
def count_function(L):
    n = len(L)
    
    counter = 0
    for i in range(n):
        if L[i] thoả điều kiện:
            counter = counter + 1

    return counter
```

Ví dụ:

**Yêu cầu:**

Viết chương trình đếm số lượng phần tử vừa chia hết cho 3 vừa chia hết cho 5 trong danh sách.

**Mã lệnh:**

!!! note "Lưu ý"

    Từ đây trở đi sẽ không viết lại hàm `generate()` nữa, mà chỉ viết những hàm mới liên quan.

    Người học có thể tự đặt các hàm mới vào trước chương trình chính. Sau đó, trong chương trình chính, chỉ cần gọi các hàm mới ra thực hiện.

Hàm `count_multiple_of_3_and_5()` dùng để đếm số lượng các số chia hết cho cả 3 và 5.

Để kết hợp hai điều kiện xảy ra đồng thời, ta dùng toán tử `and`.

```py linenums="34"
# Hàm count_multiple_of_3_and_5() dùng để đếm các số chia hết cho 3 và 5
def count_multiple_of_3_and_5(L):
    # Lấy số lượng phần tử của L
    n = len(L)

    # Khởi tạo biến đếm bằng 0
    counter = 0
    
    # Duyệt từng phần tử trong phạm vi [0..n - 1]
    # Nếu phần tử L[i] chia hết cho cả 3 và 5 thì tăng biến đếm lên 1
    for i in range(n):
        if L[i] % 3 == 0 and L[i] % 5 == 0:
            counter = counter + 1

    # Trả về kết quả
    return counter
```

Trong chương trình chính, ta gọi hàm `count_multiple_of_3_and_5()` như sau:

```py linenums="100"
    # Gọi hàm count_multiple_of_3_and_5() và in ra số lượng
    count_result = count_multiple_of_3_and_5(my_list)
    print(f'Số lượng các số chia hết cho 3 và 5: {count_result}')
```

**Output:**

```pycon
Số lượng các số chia hết cho 3 và 5: 1
```

!!! question "Hỏi chút chơi - phần 2"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-iterating-processing/quiz2.html">Hỏi chút chơi</iframe>
    </div>

### Tìm phần tử thoả điều kiện

Ý tưởng chính:

Duyệt từng phần tử trong danh sách, nếu phần tử nào thoả điều kiện thì **trả về chỉ số (vị trí) của phần tử đó**.

Ngược lại, nếu đã duyệt hết danh sách, nghĩa là không có phần tử nào thoả điều kiện, thì **trả về -1** (1).
{ .annotate }

1.  Do chỉ số của các phần tử trong danh sách không bao giờ âm, nên `-1` có thể được xem là tín hiệu cho biết không tìm thấy phần tử thoả điều kiện.

```py
def find_function(L):
    n = len(L)
    
    for i in range(n):
        if L[i] thoả điều kiện:
            return i

    return -1
```

Ví dụ:

**Yêu cầu:**

Viết chương trình tìm phần tử đầu tiên trong danh sách mà có giá trị bằng k. Trong đó, k là một số nguyên do người dùng nhập vào. 

**Mã lệnh:**

Hàm `find()` dưới đây gồm có hai tham số đầu vào:

- Tham số `L` là danh sách cần tìm kiếm.
- Tham số `k` là giá trị cần tìm.

```py linenums="52"
# Hàm find() dùng để tìm phần tử có giá trị k trong danh sách 
def find(L, k):
    # Lấy số lượng phần tử của L
    n = len(L)

    # Duyệt từng phần tử trong phạm vi [0..n - 1]
    # Nếu phần tử L[i] bằng k thì trả về i
    for i in range(n):
        if L[i] == k:
            return i

    # Nếu không tìm thấy thì trả về -1
    return -1
```

Trong chương trình chính, ta gọi hàm `find()` như sau:

```py linenums="86"
    # Cho người dùng nhập số cần tìm và gọi hàm find()
    key = int(input('Nhập số cần tìm đi bạn hiền: '))
    index = find(my_list, key)

    # Xét chỉ số kết quả và in ra thông báo tương ứng
    if index == -1:
        print('Có không giữ mất đừng tìm')
    else:
        print(f'Tìm thấy {key} tại vị trí {index}')
```

**Output:**

```pycon
Nhập số cần tìm đi bạn hiền: 87
Tìm thấy 87 tại vị trí 7
```

!!! question "Hỏi chút chơi - phần 3"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-iterating-processing/quiz3.html">Hỏi chút chơi</iframe>
    </div>

### Tìm phần tử lớn nhất

Ý tưởng chính:

Duyệt từng phần tử trong danh sách, nếu phần tử nào lớn hơn giá trị lớn nhất hiện tại thì **cập nhật giá trị lớn nhất mới**.

```py
def max_function(L):
    n = len(L)
    
    max_value = L[0]
    for i in range(1, n):
        if L[i] > max_value:
            max_value = L[i]

    return max_value`
```

Ví dụ:

**Yêu cầu:**

Viết chương trình tìm phần tử lớn nhất trong danh sách.

**Mã lệnh:**

Hàm `max_value()` sau đây thực hiện theo các bước:

1.  Giả sử phần tử đầu tiên là lớn nhất. Gán phần tử này cho biến `max_val`.
2.  Lần lượt so sánh các phần tử tiếp theo với `max_val` bằng cách:

    Duyệt từng phần tử trong phạm vi `[1..n - 1]`:
    
    Nếu phần tử `L[i]` lớn hơn `max_val` thì gán `L[i]` cho `max_val`.

Cần lưu ý, giá trị của `max_val` có thể thay đổi trong quá trình duyệt.

```py linenums="67"
# Hàm max_value() dùng để tìm giá trị lớn nhất trong danh sách
def max_value(L):
    # Lấy số lượng phần tử của L
    n = len(L)

    # Khởi tạo max_val bằng giá trị của phần tử đầu tiên
    max_val = L[0]

    # Duyệt từng phần tử trong phạm vi [1..n - 1]
    # Nếu phần tử L[i] lớn hơn max_val thì cập nhật giá trị mới cho max_val
    for i in range(n):
        if L[i] > max_val:
            max_val = L[i]

    # Trả về giá trị lớn nhất tìm được
    return max_val
```

Trong chương trình chính, ta gọi hàm `max_value()` như sau:

```py linenums="114"
    # Gọi hàm max_value() và in ra giá trị lớn nhất
    my_max = max_value(my_list)
    print(f'Giá trị lớn nhất: {my_max}')
```

**Output:**

```pycon
Giá trị lớn nhất: 77
```

!!! question "Hỏi chút chơi - phần 4"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-iterating-processing/quiz4.html">Hỏi chút chơi</iframe>
    </div>

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/mindmaps/list-iterating-processing.mm.md!}

## Mã nguồn

Các đoạn mã trong bài được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-10/topic-f/list-iterating-processing.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1uxodOjKqNY1dqhrxqKy0Ld41W4lVVcAh?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| duyệt (phần tử trong danh sách) | iterate |
| điều kiện | condition, criteria |
| khởi tạo | initialize |

## Bài tập thực hành

Bạn có thể tự thực hành các bài tập sau tại [Google Colab](https://colab.research.google.com/drive/11bOGQPBTpOQcroYQlad_Fn-vKfHGuGXv?usp=sharing){:target="_blank"}.
