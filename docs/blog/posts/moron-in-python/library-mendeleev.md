---
categories:
    - Moron in Python
authors: [mrschool]
date: 2025-01-16
---

# Lấy thông tin nguyên tố hoá học bằng Python

![mendeleev thumbnail](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9Earn0ioqS4sQC48g/root/content){ loading=lazy align=left width=360 }

Thư viện `mendeleev` của Python giúp truy xuất thông tin của các nguyên tố hóa học trong bảng tuần hoàn như: khối lượng nguyên tử, nhóm, chu kỳ, cấu hình electron, v.v...

<br>
<br>
<br>
<br>
<br>

<!-- more -->

## Một số tính năng của mendeleev

- Tìm kiếm nguyên tố theo tên đầy đủ hoặc ký hiệu.
- Truy xuất rất nhiều thông tin về các nguyên tố.

## Cài đặt

Cài đặt thư viện `mendeleev` bằng lệnh sau:

```ps1
pip install mendeleev
```

## Khai báo thư viện

``` py linenums="1"
import mendeleev as mdl
```

## Truy xuất thông tin nguyên tố

Hàm `element()` cho phép truy xuất thông tin chi tiết về một nguyên tố hóa học.

Ta có thể truyền vào hàm này một trong ba tham số sau:

- Số hiệu nguyên tử: `atomic_number`
- Ký hiệu hóa học của nguyên tố: `symbol`. Ví dụ: C (là carbon)
- Tên đầy đủ của nguyên tố: `name`. Ví dụ: Oxygen

Đoạn mã sau có tham số đầu vào là ký hiệu hoá học.

Sau khi lấy được thông tin của nguyên tố bằng hàm `element()` và lưu vào biến `e`, ta có thể truy xuất một số thuộc tính của `e`.

``` py linenums="6"
            e = mdl.element(symbol)

            print(f'- Tên nguyên tố: {e.name}')
            print(f'- Ký hiệu hoá học: {e.symbol}')
            print(f'- Số hiệu nguyên tử: {e.atomic_number}')
            print(f'- Khối lượng nguyên tử: {e.atomic_weight:.2f} u')
            print(f'- Cấu hình electron: {e.econf}')
            print(f'- Nhóm: {e.group_id}')
            print(f'- Chu kỳ: {e.period}')
```

Output:

![Thông tin về nguyên tố](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9EeRN0J-l69_Du-WA/root/content){ loading=lazy }

## Mã nguồn

Code đầy đủ được đặt tại:

1. [GitHub](https://github.com/vtchitruong/python-libraries/blob/main/mendeleev/chemistry.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1bDcBcYC1ajlMDd4PErePyDRGfEaMHGwS?usp=sharing){:target="_blank"}