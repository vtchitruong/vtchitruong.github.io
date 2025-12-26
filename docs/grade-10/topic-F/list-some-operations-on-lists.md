---
icon: material/format-list-numbered
---

# Một số thao thác trên danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số thao tác trên danh sách trong Python:
    
    - Chỉ số âm
    - Kỹ thuật lát cắt
    - Các hàm thêm phần tử vào danh sách
    - Các hàm xoá phần tử khỏi danh sách
    - Các hàm đếm, tìm kiếm và sắp xếp trên danh sách

## Chỉ số âm

Bên cạnh chỉ số bắt đầu từ `0` và tăng dần từ trái sang phải, Python còn cho phép đếm ngược từ phải sang trái bằng **chỉ số âm**.

!!! note "Quy tắc đếm ngược bằng chỉ số âm"

    `-1` là chỉ số của phần tử cuối cùng.

    `-2` là chỉ số của phần tử áp cuối.

    Cứ thế, chỉ số âm sẽ nhỏ dần khi tiến về đầu danh sách.

Ví dụ:  
Cho danh sách `L = [1, 7, 4, 0, 9, 4, 8, 8]`. Chỉ số của `L` được đánh như bảng sau:

| Chỉ số âm | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chỉ số dương | 0 | 1 | 2| 3 | 4 | 5 | 6 | 7 |
| Giá trị | 1 | 7 | 4 | 0 | 9 | 4 | 8 | 8 |

Ví dụ:  
Dòng lệnh 9 và 10 in ra phần tử đầu tiên và cuối cùng bằng chỉ số âm.

```py linenums="1" hl_lines="9-10"
if __name__ == '__main__':
    # Khởi tạo danh sách L
    L = [1, 7, 4, 0, 9, 4, 8, 8]

    # In
    print(f'Danh sách ban đầu: {L}')

    # In ra phần tử đầu tiên và cuối cùng
    print(f'Phần tử đầu tiên: {L[-8]}')
    print(f'Phần tử cuối cùng: {L[-1]}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Danh sách ban đầu: [1, 7, 4, 0, 9, 4, 8, 8]
Phần tử đầu tiên: 1
Phần tử cuối cùng: 8
```

## Lát cắt

**Lát cắt** là kỹ thuật **trích xuất một phần** của danh sách gốc để tạo ra danh sách mới.

!!! note "Cú pháp lát cắt"

    ```py
    new_list = L[start:stop:step]
    ```

Trong đó, bộ ba tham số `[start:stop:step]` hoạt động giống như các tham số trong hàm `range(start, stop, step)`.

Ví dụ:  
Bảng sau thể hiện một số cách áp dụng lát cắt.

| Lát cắt | Ý nghĩa |
| --- | --- |
| `L[1:4]` | Từ chỉ số `1` đến trước chỉ số `4` |
| `L[:3]` | Từ đầu đến trước chỉ số `3` | 
| `L[2:]` | Từ chỉ số `2` đến cuối |
| `L[:]` | Sao chép toàn bộ danh sách |
| `L[::2]` | Lấy các phần tử ở chỉ số: 0, 2, ,4, 6, v.v... |
| `L[::-1]` | Đảo ngược danh sách |
| `L[-3:]` | 3 phần tử cuối cùng |

Ví dụ:  
Dòng lệnh 13 in ra các phần tử nằm ở vị trí `0`, `2`, `4` và `6`.

```py linenums="1" hl_lines="13"
if __name__ == '__main__':
    # Khởi tạo danh sách L
    L = [1, 7, 4, 0, 9, 4, 8, 8]

    # In
    print(f'Danh sách ban đầu: {L}')

    # In ra phần tử đầu tiên và cuối cùng
    print(f'Phần tử đầu tiên: {L[-8]}')
    print(f'Phần tử cuối cùng: {L[-1]}')

    # In ra các phần tử ở vị trí chẵn
    print(f'Các phần tử ở vị trí chẵn: {L[::2]}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Các phần tử ở vị trí chẵn: [1, 4, 9, 8]
```

## Thêm phần tử

| Hàm | Công dụng |
| --- | --- |
| `append(e)` | Thêm phần tử `e` vào cuối danh sách. |
| `insert(p, e)` | Chèn phần tử `e` vào vị trí `p`. |
| `extend(E)` | Thêm danh sách `E` vào danh sách hiện tại. |

Ví dụ:  
Dòng lệnh 17 thêm phần tử `2` vào cuối danh sách.

```py linenums="15" hl_lines="3"
    # Thêm 2 vào cuối
    e = 2
    L.append(e)

    print(f'Thêm 2 vào cuối: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Thêm 2 vào cuối: [1, 7, 4, 0, 9, 4, 8, 8, 2]
```

Ví dụ:  
Dòng lệnh 24 chèn phần tử `-1` vào đầu danh sách.

```py linenums="21" hl_lines="4"
    # Chèn -1 vào vị trí đầu tiên
    p = 0
    e = -1
    L.insert(p, e)

    print(f'Chèn -1 vào đầu: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Chèn -1 vào đầu: [-1, 1, 7, 4, 0, 9, 4, 8, 8, 2]
```

Ví dụ:  
Dòng lệnh 30 thêm 4 phần tử của danh sách `E` vào danh sách `L`.

```py linenums="28" hl_lines="3"
    # Thêm 3 phần tử vào cuối
    E = [4, 5, 5]
    L.extend(E)

    print(f'Thêm 3 phần tử vào cuối: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Thêm 4 phần tử: [-1, 1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5]
```

---

## Xoá phần tử

| Hàm | Công dụng |
| --- | --- |
| `remove(e)` | Xoá phần tử có giá trị `e`. |
| `pop(p)` | Xoá phần tử tại vị trí `p`. |
| `clear()` | Xoá toàn bộ phần tử trong danh sách. |

Ví dụ:  
Dòng lệnh 34 xoá phần tử có giá trị là `0`.

```py linenums="34" hl_lines="3"
    # Xoá phần tử có giá trị là 0
    e = 0
    L.remove(e)

    print(f'Xoá phần tử 0: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Xoá phần tử 0: [-1, 1, 7, 4, 9, 4, 8, 8, 2, 4, 5, 5]
```

Ví dụ:  
Dòng lệnh 42 xoá phần tử đầu danh sách, tức có chỉ số là `0`.

```py linenums="40" hl_lines="3"
    # Xoá phần tử đầu danh sách
    p = 0
    L.pop(p)

    print(f'Xoá phần tử đầu tiên: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Xoá phần tử đầu tiên: [1, 7, 4, 9, 4, 8, 8, 2, 4, 5, 5]
```

!!! warning "Lưu ý"

    Mặc dù có hàm xoá danh sách, việc xoá toàn bộ dữ liệu là không nên.

---

## Đếm, tìm kiếm, sắp xếp

| Hàm | Công dụng |
| --- | --- |
| `count(e)` | Đếm số lần xuất hiện phần tử `e`. |
| `index(e)` | Tìm kiếm vị trí xuất hiện đầu tiên của `e`. |
| `sort()` | Sắp xếp danh sách theo thứ tự tăng dần. |
| `sort(reverse=True)` | Sắp xếp danh sách theo thứ tự giảm dần. |

Ví dụ:  
Dòng lệnh 48 đếm số lần xuất hiện của phần tử có giá trị là `4`, gán kết quả vào biến `occurrence`.

```py linenums="46" hl_lines="3"
    # Phần tử 4 xuất hiện bao nhiêu lần
    e = 4
    occurrence = L.count(e)
    print(f'Số lần xuất hiện của {e}: {occurrence} lần')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Số lần xuất hiện của 4: 3 lần
```

Ví dụ:  
Dòng lệnh 52 tìm vị trí xuất hiện đầu tiên của phần tử có giá trị `4`, gán kết quả vào biến `first_occur`.

```py linenums="51" hl_lines="2"
    # Vị trí xuất hiện đầu tiên của 4
    first_occur = L.index(4)
    print(f'{e} xuất hiện lần đầu tại vị trí {first_occur}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
4 xuất hiện lần đầu tại vị trí 2
```

Ví dụ:  
Dòng lệnh 56 sắp xếp danh sách `L` theo thứ tự tăng dần.

```py linenums="55" hl_lines="2"
    # Sắp xếp danh sách tăng dần
    L.sort()
    print(f'Danh sách sau khi sắp xếp: {L}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Danh sách sau khi sắp xếp: [1, 2, 4, 4, 4, 5, 5, 7, 8, 8, 9]
```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1Yal5OLOYtUZbgsNJKbRqbz-mAS8Jlgxi?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/list-some-operations-on-lists.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| chèn | insert |
| chỉ số âm | negative indexing |
| lát cắt | slicing |
| thêm | append |
| xoá | remove |