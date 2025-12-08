---
icon: material/division
---

# Biến và toán tử cơ bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Cách nhập dữ liệu kiểu số
    - Khái niệm biến
    - Một số toán tử cơ bản

## Nhập dữ liệu kiểu số

Để nhập số nguyên, ta dùng hàm `int()` để chuyển đổi dữ liệu của `input()` thành số nguyên.

Ví dụ:  
Dòng lệnh 2 yêu cầu người dùng nhập vào một số nguyên và gán cho biến `a`.

```py linenums="1" hl_lines="2"
if __name__ == '__main__':
    a = int(input('Nhập số nguyên a: '))
    print(f'Tăng thêm một: {a + 1}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Nhập số nguyên a: 9
Tăng thêm một: 10
```

Python có hai kiểu số:

- `int`: số không có phần thập phân, gọi là **số nguyên**.
- `float`: số có phần thập phân, gọi là **số thực**.

Ví dụ:

- `7` là số nguyên.
- `7.0` là số thực.
- Trong máy tính nói chung, `7` và `7.0` là hai số khác nhau.

!!! tip "Nhập số thực"

    Để nhập dữ liệu kiểu số thực, ta dùng hàm `float()`.

## Biến

Trong đoạn mã trên, khi người dùng nhập dữ liệu từ hàm `input()`, hệ điều hành sẽ tìm một vùng nhớ thích hợp trên bộ nhớ RAM để đặt dữ liệu vào đó.

Cái tên dùng để tham chiếu vùng nhớ đó được gọi là **biến**, trong trường hợp này là biến `a`.

Trong lập trình, **biến** là tên tham chiếu đến một vùng nhớ chứa giá trị nào đó có chứa giá trị. Giá trị này có thể hợp lệ hoặc chưa xác định.

Nói ví von, biến là một cái hộp để ta đặt dữ liệu vào đó và có thể sử dụng nhiều lần trong chương trình của mình.  

## Toán tử gán

Toán tử **gán** được dùng để gán giá trị ở bên vế phải cho biến ở bên trái.

Ví dụ:  
Trong đoạn mã trên, chương trình sẽ gán giá trị của vế phải `int(input('Nhập số nguyên a: '))` cho biến `a` bên vế trái.

Ví dụ:  
`p = 3.14 * 2 * r`

Trong dòng lệnh trên, chương trình sẽ:

1. Tính giá trị của biểu thức bên vế phải: `3.14 * 2 * r`.
2. Gán giá trị kết quả cho biến `p` bên vế trái.

## Một số toán tử khác

Python hỗ trợ các phép toán giống như toán học:

| Phép toán | Ký hiệu | Ví dụ | Mô tả |
| --- | --- | --- | --- |
| Cộng | `+` | `a + b` | Lấy tổng hai biến `a` và `b` |
| Trừ | `-` | `a - b` | Lấy hiệu của hai biến `a` và `b` |
| Nhân | `*` | `a * b` | Lấy tích của hai biến `a` và `b` |
| Chia | `/` | `a / b` | Lấy thương (số thực) của hai biến `a` và `b` |
| Chia lấy nguyên | `//` | `a // b` | Lấy phần nguyên của `a` chia `b` |
| Chia lấy dư | `%` | `a % b` | Lấy phần dư của `a` chia `b` |
| Lũy thừa | `**` | `a ** b` | Lấy giá trị của $a^b$ |

Ví dụ:  
Dòng lệnh từ 5 đến 11 in ra kết quả của các phép toán cơ bản.

```py linenums="1" hl_lines="5-11"
if __name__ == '__main__':
    a = int(input('Nhập số nguyên a: '))
    b = int(input('Nhập số nguyên b: '))

    print(f'Tổng: {a + b}')
    print(f'Hiệu: {a - b}')
    print(f'Tích: {a * b}')
    print(f'Thương: {a / b}')
    print(f'Chia lấy nguyên: {a // b}')
    print(f'Chia lấy dư: {a % b}')
    print(f'Lũy thừa: {a ** b}')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Nhập số nguyên a: 10
Nhập số nguyên b: 3
Tổng: 13
Hiệu: 7
Tích: 30
Thương: 3.3333333333333335
Chia lấy nguyên: 3
Chia lấy dư: 1
Lũy thừa: 1000
```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1XnIzg0vAZRBZiRXB9OZlKVeCcnT5MyS_?usp=sharing){target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/variable-basic-operators.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| biến | variable |
| toán tử | operator |
| toán tử gán | assignment operator |