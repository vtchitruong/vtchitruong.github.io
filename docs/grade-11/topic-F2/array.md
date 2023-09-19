# Mảng

## Đặt vấn đề

Vấn đề của bài này đã được nêu ra trong bài [Kiểu dữ liệu list của Python](../../grade-10/topic-F/list.md){:target="_blank"}, hầu hết các ngôn ngữ lập trình đều có những *kiểu dữ liệu* giúp lưu trữ và xử lý một tập hợp nhiều phần tử.  

## Khái niệm chung về mảng

**Mảng** là  cấu trúc dữ liệu cho phép lưu trữ và xử lý một tập hợp gồm hữu hạn phần tử có cùng *kiểu dữ liệu*.  

Mỗi phần tử của mảng được truy xuất thông qua *chỉ số* của nó.  

Kích thước của mảng là số lượng phần tử có trong mảng.

Về tổng quát, mảng có thể là một chiều hoặc đa chiều. Bài học này chỉ đề cập hai kiểu mảng phổ biến là **mảng một chiều** và **mảng hai chiều**.  

??? note "Việc lưu trữ mảng trong bộ nhớ"
    Về mặt khái niệm, các phần tử của một mảng được lưu trữ liên tiếp nhau trong bộ nhớ. Tuy nhiên, khác với những hệ thống trước đây, một số kiến trúc máy tính hiện đại lưu trữ mảng phức tạp hơn. Đó là, do nhiều yếu tố khác nhau, các phần tử không thực sự nằm cạnh nhau liên tiếp trên bộ nhớ vật lý. 

## Mảng một chiều

### Khái niệm mảng một chiều

**Mảng một chiều** là dãy hữu hạn các phần tử có cùng *kiểu dữ liệu*.

Một dãy các phòng học, một dãy ghế trong rạp chiếu phim là hình ảnh minh họa của mảng một chiều.  

Mảng một chiều được dùng để chứa một hàng dữ liệu hoặc một cột dữ liệu.

Mỗi phần tử của mảng một chiều được truy xuất thông qua *chỉ số* của nó. Các ngôn ngữ lập trình có cách đánh chỉ số khác nhau: chỉ số có thể bắt đầu từ **0** hoặc từ **1**.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc-kBchv6Xx7RbfwyjKXCCq1IVhHYlyBAUImnznluuywUTHVwcYqYtbFOZxGQ8ZGEZLl8u7Ay513Hc8hLy0ivo7n5koBGrvo2VVKojo61364_b3MsUOj=w400){ width="400", loading=lazy }
  <figcaption>Hình 1. Minh họa mảng một chiều A</figcaption>
</figure>

Python không có kiểu dữ liệu mảng chuẩn như những ngôn ngữ *truyền thống* (C/C++ hay Java), mà thay vào đó là kiểu dữ liệu `list` linh hoạt hơn. Ta có thể sử dụng kiểu `list` để giải quyết các bài toán liên quan đến mảng. Các đoạn mã ví dụ trong bài học này đều sử dụng `list` để minh họa mảng.  

??? note "Kiểu mảng trong Python"
    Mặc dù vậy, Python vẫn cung cấp một module tên là `array` giúp người dùng làm việc với mảng theo đúng nghĩa truyền thống của mảng nếu muốn.  

### Khởi tạo  

Kiểu `list` của Python cho phép khởi tạo mảng một chiều bằng cách liệt kê các phần tử trong cặp ngoặc vuông `[ ]` và phân cách nhau bởi dấu phẩy `,`.

Ví dụ 1:  
Khởi tạo mảng một chiều bằng cách liệt kê phần tử.  

``` py linenums="1"
# Mảng gồm các số nguyên
A = [1, 7, 4, 0, 9, 4, 8, 8]
print(A)

# Mảng gồm các chuỗi
word_array =  ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
print(word_array)
```

Output:  
``` pycon
[1, 7, 4, 0, 9, 4, 8, 8]
['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
```

Ví dụ 2:  
Khởi tạo mảng một chiều bằng toán tử `*`.

``` py linenums="1"
# Mảng gồm 8 phần tử đều mang giá trị 0
zero_array = [0] * 8
print(zero_array)
```

Output:  
``` pycon
[0, 0, 0, 0, 0, 0, 0, 0]
```

Ví dụ 3:  
Khởi tạo mảng một chiều bằng cú pháp [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.  

``` py linenums="1"
# Mảng gồm 8 phần tử đều mang giá trị 1
one_array = [1 for i in range(8)]
print(one_array)
```

Output:  
``` pycon
[1, 1, 1, 1, 1, 1, 1, 1]
```

### Truy xuất phần tử  

Mỗi phần tử của mảng một chiều được truy xuất thông qua chỉ số, bắt đầu từ **0** và không được bằng hay vượt quá kích thước mảng.  

Chỉ số được đặt trong cặp ngoặc vuông `[ ]`.  

Ví dụ 4:  

``` py linenums="1"
A = [1, 7, 4, 0, 9, 4, 8, 8]

print(A[0])           # In ra phần tử đầu tiên
print(A[7])           # In ra phần tử cuối cùng
print(A[len(A) - 1])  # In ra phần tử cuối cùng như lệnh trên
print(A[8])           # Chương trình báo lỗi tại dòng lệnh này
```

Output:  

``` pycon
1
8
8
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
<ipython-input-26-83e6d2734f8f> in <cell line: 8>()
      6 print(A[7])                  # In ra phần tử cuối cùng
      7 print(A[len(A) - 1])   # In ra phần tử cuối cùng như lệnh trên
----> 8 print(A[8])                 # Chương trình báo lỗi tại dòng lệnh này

IndexError: list index out of range
```

### Duyệt mảng  

Trong nhiều bài toán, các phần tử của mảng một chiều được xử lý *một loạt* tương tự nhau, theo thứ tự từ phần tử đầu đến phần tử cuối, hoặc từ phần tử cuối ngược về phần tử đầu. Do đó, ta thường sử dụng vòng lặp để duyệt mảng.  

Ví dụ 5:  
Duyệt mảng và in ra các phần tử từ đầu đến cuối.  

``` py linenums="1"
word_array = ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
for i in range(len(word_array)):
    print(word_array[i])
```

Output:  
``` pycon
vân tán
tuyết tiêu
hoa tàn
nguyệt khuyết
```

Ví dụ 6:  
Duyệt mảng và in ra các phần tử từ cuối ngược về đầu.  
``` py linenums="1"
word_array = ['vân tán', 'tuyết tiêu', 'hoa tàn', 'nguyệt khuyết']
n = len(word_array)
for i in range(n - 1, -1, -1):
    print(word_array[i])
```

Output:  
``` pycon
nguyệt khuyết
hoa tàn
tuyết tiêu
vân tán
```

## Mảng hai chiều

### Khái niệm mảng hai chiều

**Mảng hai chiều** được dùng để thể hiện dữ liệu theo dạng lưới, bảng hoặc ma trận gồm nhiều hàng và nhiều cột.  

Các hàng đều có số phần tử bằng nhau, nghĩa là số cột của mỗi hàng đều như nhau.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc9_HAAYVxTbG02strN-vrL9NmV5cGmtadVmoK0P01Wz0FWsZkAbpkvM6S9gH3kmAhUOZKG8oehWHlXHvDJmyH_iXDu5eeeMHOknFJNFqHPKh9moukYp=w400){ width="400", loading=lazy }
  <figcaption>Hình 2. Minh họa mảng hai chiều B</figcaption>
</figure>

Mảng hai chiều có thể được xem là *mảng của các mảng*, nghĩa là, mảng chứa các phần tử mà mỗi phần tử là mảng một chiều.  

Bàn cờ vua, bảng số Sudoku là hình ảnh minh họa của mảng hai chiều.  

### Khởi tạo  

Tương tự mảng một chiều, kiểu `list` của Python cho phép khởi tạo bằng cách liệt kê phần tử hoặc [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.  

Ví dụ 7:  
Khởi tạo mảng hai chiều bằng cách liệt kê phần tử.  

``` py linenums="1"
# Mảng B gồm 3 hàng và 4 cột
B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
print(B)
```

Output:  
``` pycon
[[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
```

Ví dụ 8:  
Khởi tạo mảng hai chiều bằng cú pháp [list comprehension](https://peps.python.org/pep-0202/){:target="_blank"}.  

``` py linenums="1"
# Mảng gồm 3 hàng và 4 cột chứa toàn các phần tử 0
rows = 3
cols = 4
zero_array = [[0 for c in range(cols)] for r in range(rows)]
print(zero_array)
```

Output:  
``` pycon
[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

### Truy xuất phần tử  

Mỗi phần tử trong mảng hai chiều được truy xuất bằng hai chỉ số, gọi là *chỉ số hàng* và *chỉ số cột*.  

Mỗi chỉ số hàng hoặc cột được đặt trong cặp ngoặc vuông `[ ]`, với chỉ số hàng trước, chỉ số cột sau.  

Ví dụ 9:  

``` py linenums="1"
B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]

print(B[0][0])  # In ra phần tử đầu tiên
print(B[2][3])  # In ra phần tử cuối cùng
print(B[1][2])  # In ra phần tử ở hàng giữa, có chỉ số cột là 2
```

Output:  
``` pycon
1
5
8
```

Ví dụ 10:  
In ra số hàng và số cột của mảng hai chiều.  

``` py linenums="1"
B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]
print(len(B))        # In số hàng
print(len(B[0]))  # In số cột
```

Output:  
``` pycon
3
4
```

### Duyệt mảng  

Khi duyệt mảng hai chiều, ta thường sử dụng hai vòng lặp lồng nhau:  
- Vòng lặp ngoài dùng để duyệt các hàng.  
- Vòng lặp trong dùng để duyệt các cột, tức các phần tử trong cùng một hàng.  

Ví dụ 11:  
In mảng hai chiều theo dạng hàng và cột bằng vòng lặp `for`.  

``` py linenums="1"
B = [[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]]

rows = 3
cols = 4
for r in range(rows):             # Duyệt từ hàng đầu đến hàng cuối
    for c in range(cols):         # Ứng với mỗi hàng r, duyệt từ cột đầu đến cột cuối
        print(B[r][c], end=' ')  # In ra phần tử nằm ở hàng r và cột c, kèm theo khoảng trắng
    print()  # Xuống dòng sau mỗi hàng
```

Output:  
``` pycon
1 7 4 0 
9 4 8 8 
2 4 5 5 
```

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1EqTwaewXMPJOQvS2EawPPip_JO46PsEn?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chỉ số | index |
| cột | column |
| đánh chỉ số từ 0 | zero-based indexing |
| hàng | row |
| mảng của mảng | array of arrays |
| mảng hai chiều | two-dimensional array |
| mảng một chiều | one-dimensional array |
| phần tử | element |