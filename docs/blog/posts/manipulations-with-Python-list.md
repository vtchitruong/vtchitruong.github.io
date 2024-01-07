---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2023-06-10
---

# Một vài chiêu thức với list của Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left width=360 }

Bài này giới thiệu một vài cách viết mã lệnh đối với kiểu `list` của Python, chủ yếu dựa vào những đặc trưng của ngôn ngữ này.[^1]
</div>

[^1]: Bài viết được tham khảo từ những website Python nổi tiếng.

<br>
<br>

<!-- more -->

<br>

## Đảo ngược danh sách

Để đảo ngược danh sách, cách thức *truyền thống* là gán phần tử từ danh sách gốc sang danh sách mới dựa trên chỉ số:

- Phần tử `0` được gán từ phần tử `n - 1`
- Phần tử `1` <- Phần tử `n - 2`
- Phần tử `2` <- Phần tử `n - 3`
- Phần tử `i` <- Phần tử `n - 1 - i`

``` py linenums="1"
# Code theo truyền thống
if __name__ == '__main__':
    L = [14, 2, 19, 5, 1, 6, 2, 9, 20, 11]

    n = len(L)

    # Khởi tạo danh sách mới
    L_reversed = [0 for _ in range(n)]

    # Duyệt danh sách và gán giá trị theo chỉ số
    for i in range(n):
        L_reversed[i] = L[n - i - 1]

    print(L_reversed)
```

Output:

``` pycon
[11, 20, 9, 2, 6, 1, 5, 19, 2, 14]
```

Trong Python, ta có thể dùng kỹ thuật slicing với số bước là `-1`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = [14, 2, 19, 5, 1, 6, 2, 9, 20, 11]

    # Dùng slicing
    L_reversed = L[::-1]
    print(L_reversed)
```

Output:

``` pycon
[11, 20, 9, 2, 6, 1, 5, 19, 2, 14]
```







## Kiểm tra danh sách rỗng

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = []
    if not L:
        print('L rỗng')
```

Output

``` pycon
L rỗng
```

## Đếm số lần xuất hiện của các phần tử

Nếu chỉ đếm một phần tử nào đó, ta sử dụng hàm `count()`.

``` py linenums="1"
# Đếm số lần xuất hiện của một phần tử cụ thể
if __name__ == '__main__':
    L = [1, 1, 14, 2, 1, 5, 1, 6, 2, 9, 5, 9]
    e = 1
    cnt = L.count(e)
    print(f'{e} occurs {cnt} time(s).')
```

Output:

``` pycon
1 occurs 4 time(s).
```

Còn nếu đếm tất cả phần tử, ta sử dụng lớp con `Counter` của thư viện `collections`.

``` py linenums="1"
# Đếm số lần xuất hiện của tất cả phần tử
from collections import Counter

if __name__ == '__main__':
    L = [1, 1, 14, 2, 1, 5, 1, 6, 2, 9, 5, 9]

    c = Counter(L)
    for e in set(L):
        print(f'{e} occurs {c[e]} time(s).')
```

Output:

``` pycon
1 occurs 4 time(s).
2 occurs 2 time(s).
5 occurs 2 time(s).
6 occurs 1 time(s).
9 occurs 2 time(s).
14 occurs 1 time(s).
```

## Xóa các phần tử trùng nhau

Một cách code truyền thống là, trước hết, sắp xếp lại danh sách tăng dần; sau đó duyệt danh sách, bỏ qua các phần tử trùng (đã đứng cạnh nhau sau khi sắp xếp), chỉ *giữ lại* các giá trị không trùng.  

``` py linenums="1"
# Code theo truyền thống
if __name__ == '__main__':
    L = [1, 2, 2, 3, 3, 3, 4, 4, 5, 4, 4]

    L.sort()

    n = len(L)
    i = 0  # i là chỉ số của danh sách mới

    for j in range(n):
        if L[j] != L[i]:  # Nếu không trùng
            i = i + 1     # thì tăng i
            L[i] = L[j]   # gán phần tử không trùng vào vị trí mới
                            # Ngược lại, nếu trùng thì bỏ qua.

    # Cập nhật lại số phần tử của danh sách
    n = i + 1

    # In danh sách mới
    for i in range(n):
        print(L[i], end=' ')
```

Output:

``` pycon
1 2 3 4 5
```

Theo cách viết trên, thực chất các phần tử trùng vẫn còn *sống*, nằm ở phần sau của `L`, nhưng được *ẩn đi* nhờ giá trị của `n`.

Python có `set` là kiểu dữ liệu không lưu giá trị trùng. Tận dụng đặc điểm này, ta chuyển từ `list` sang `set` để `set` tự loại bỏ trùng, rồi chuyển ngược từ `set` về `list`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = [1, 2, 2, 3, 3, 3, 4, 4, 5, 4, 4]
    L = list(set(L))
    print(L)
```

Output:

``` pycon
[1, 2, 3, 4, 5]
```

## Kiểm tra các phần tử là duy nhất

Tương tự mục trên, ta sắp xếp danh sách trước, rồi kiểm tra xem một phần tử có bằng với phần tử liền trước hay không. 

``` py linenums="1"
# Code theo truyền thống
if __name__ == '__main__':
    L = [1, 2, 3, 4, 5, 6, 9, 8, 9]

    L.sort()

    unique = True
    for i in range(1, len(L)):
        if L[i] == L[i - 1]:
            unique = False
            break

    if unique == True:
        print('All elements are unique')
    else:
        print('Some element is not unique')
```

Output:

``` pycon
Some element is not unique
```

Cũng tương tự mục trên, ta dựa vào lợi thế của kiểu `set` để dùng hàm `len()` so sánh số lượng phần tử của `list L` và `set L`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = [1, 2, 3, 4, 5, 6, 9, 8, 9]

    if len(L) == len(set(L)):
        print('All elements are unique')
    else:
        print('Some element is not unique')
```

Output:

``` pycon
Some element is not unique
```

## Xóa các phần tử có giá trị x

Một trong những cách truyền thống là, duyệt danh sách, ghi đè phần tử sau lên phần tử liền trước (gán phần tử `j` ở sau cho phần tử `i` phía trước, `i` tăng chậm hơn `j`), bỏ qua phần tử nào bằng *x*.  

``` py linenums="1"
# Code theo truyền thống
if __name__ == '__main__':
    L = [1, 2, 3, 2, 3, 4, 2, 2, 6, 7]

    n = len(L)
    x = 2 # Giá trị cần xóa

    i = 0
    for j in range(n):
        if L[j] != x:    # Nếu không phải là x
            L[i] = L[j]  # thì cứ đôn phần tử ở sau lên trước
            i = i + 1    # tăng i lên 1
                         # Ngược lại, thì bỏ qua, duyệt phần tử j kế tiếp.

    # Cập nhật lại số phần tử của danh sách
    n = i

    # In danh sách mới
    for i in range(n):
        print(L[i], end=' ')
```

Output:

``` pycon
1 3 3 4 6 7
```

Với Python, ta dùng `list comprehension` để tạo danh sách mới gồm các phần tử cũ (mà) khác `x`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = [1, 2, 3, 2, 3, 4, 2, 2, 6, 7]

    x = 2
    L = [e for e in L if e != x]
    print(L)
```

Output:

``` pycon
[1, 3, 3, 4, 6, 7]
```

## Làm phẳng danh sách lồng nhau

Nếu code truyền thống, ta dùng hai vòng lặp lồng nhau để lấy ra từng phần tử.

Trong Python, ta cũng thực hiện tương tự, song viết bằng `list comprehension` thì trông có vẻ gọn hơn.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    L = [[1, 2], [3, 4, 5], [6, 7]]

    L_flattened = [e for sub_list in L for e in sub_list]
    print(L_flattened)
```

Output:

``` pycon
[1, 2, 3, 4, 5, 6, 7]
```

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1v0x8pfKE59uAKxuIOss19h27M6xQ0nll?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.