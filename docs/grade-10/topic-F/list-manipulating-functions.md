---
icon: material/format-list-numbered
---

# Các hàm thao tác với danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài hàm có sẵn của Python dùng cho việc thao tác với danh sách.

### Thêm phần tử

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `append()` | Thêm phần tử vào cuối danh sách. | `L.append(phần_tử_cần_thêm)` | 
| `insert()` | Chèn phần tử vào vị trí cụ thể. | `L.insert(vị_trí_cần chèn, phần_tử_cần_chèn)` |

Ví dụ:

**Yêu cầu:**

1. Thêm phần tử có giá trị `2` vào cuối danh sách.
2. Chèn phần tử có giá trị `-1` vào đầu danh sách.

**Mã lệnh:**

```py linenums="1" hl_lines="9-10 16-18"
if __name__ == '__main__':
    # Khởi tạo danh sách my_list
    my_list = [1, 7, 4, 0, 9, 4, 8, 8]

    # In danh sách my_list ra màn hình
    print(f'Danh sách ban đầu: {my_list}')    

    # Thêm phần tử có giá trị 2 vào cuối danh sách
    element = 2
    my_list.append(element)

    # In ra danh sách sau khi thêm
    print(f'Danh sách sau khi thêm: {my_list}')

    # Chèn phần tử có giá trị -1 vào vị trí đầu tiên
    position = 0
    element = -1
    my_list.insert(position, element)

    # In ra danh sách sau khi chèn
    print(f'Danh sách sau khi chèn: {my_list}')
```

**Output:**

```pycon hl_lines="2 3"
Danh sách ban đầu: [1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi thêm: [1, 7, 4, 0, 9, 4, 8, 8, 2]
Danh sách sau khi chèn: [-1, 1, 7, 4, 0, 9, 4, 8, 8, 2]
```

!!! question "Hỏi chút chơi - phần 1"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-manipulating-functions/quiz1.html">Hỏi chút chơi</iframe>
    </div>

### Xóa phần tử

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `remove()` | Xóa phần tử có giá trị cụ thể. | `L.remove(giá_trị_cần_xóa)` |
| `pop()` | Xóa phần tử tại vị trí cụ thể. | `L.pop(vị_trí_cần_xóa)` |
| `del` | Xóa phần tử có vị trí cụ thể, gần giống `pop`. | `del L[i]` |

Ví dụ:

**Yêu cầu:**

1. Xoá phần tử có giá trị `2`.
2. Xoá phần tử tại vị trí đầu tiên.

**Mã lệnh:**

```py linenums="23" hl_lines="2-3 9-10"
    # Xoá phần tử có giá trị 2
    element = 2
    my_list.remove(element)

    # In ra danh sách sau khi xoá
    print(f'Danh sách sau khi xoá: {my_list}')

    # Xoá phần tử tại vị trí đầu tiên
    position = 0
    my_list.pop(position)

    # In ra danh sách sau khi xoá
    print(f'Danh sách sau khi xoá: {my_list}')
```

**Output:**

```pycon hl_lines="4 5"
Danh sách ban đầu: [1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi thêm: [1, 7, 4, 0, 9, 4, 8, 8, 2]
Danh sách sau khi chèn: [-1, 1, 7, 4, 0, 9, 4, 8, 8, 2]
Danh sách sau khi xoá: [-1, 1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi xoá: [1, 7, 4, 0, 9, 4, 8, 8]
```

!!! question "Hỏi chút chơi - phần 2"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-manipulating-functions/quiz1.html">Hỏi chút chơi</iframe>
    </div>

### Xóa danh sách

| Hàm | Công dụng | Cú pháp |
| --- | --- | --- |
| `clear()` | Xoá toàn bộ phần tử, làm cho danh sách trở thành rỗng. | `L.clear()` |  
| `del` | Xóa luôn danh sách. | `del L` | 

Ví dụ:

**Yêu cầu:**

Xoá tất cả phần tử trong danh sách.

**Mã lệnh:**

```py linenums="37" hl_lines="2"
    # Xoá toàn bộ phần tử trong danh sách
    my_list.clear()

    # In ra danh sách sau khi xoá
    print(f'Danh sách sau khi xoá: {my_list}')
```

**Output:**

```pycon hl_lines="6"
Danh sách ban đầu: [1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi thêm: [1, 7, 4, 0, 9, 4, 8, 8, 2]
Danh sách sau khi chèn: [-1, 1, 7, 4, 0, 9, 4, 8, 8, 2]
Danh sách sau khi xoá: [-1, 1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi xoá: [1, 7, 4, 0, 9, 4, 8, 8]
Danh sách sau khi xoá: []
```

!!! warning "Lưu ý"

    Mặc dù có hàm xóa danh sách, song nói chung, xóa toàn bộ dữ liệu là việc không nên.

!!! question "Hỏi chút chơi - phần 3"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../list-manipulating-functions/quiz3.html">Hỏi chút chơi</iframe>
    </div>

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-F/mindmaps/list-manipulating-functions.mm.md!}

## Mã nguồn

Các đoạn mã trong bài được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-10/topic-f/list-manipulating-functions.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1Yal5OLOYtUZbgsNJKbRqbz-mAS8Jlgxi?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| thêm | append |
| chèn | insert |
| xóa | remove |

## Bài tập thực hành

Bạn có thể tự thực hành các bài tập sau tại [Google Colab](https://colab.research.google.com/drive/1xh2Db9apAnRbYQJdMSNQOyzKu-fi344V?usp=sharing){:target="_blank"}.


