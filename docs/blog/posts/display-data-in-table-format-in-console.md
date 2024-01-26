---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-11-20
---

# Hiển thị dữ liệu theo dạng bảng trong console

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV84rdNDtp174FmUgYbOwIqKKnXLuBT3pA76fGsK14get9HB9GSUNw0Z6cDFmLP_EiwMtRr9ZJFRNT_K_S8MhJuafq2HynUsY87Z11l99h7GGZeVPjLuv=w360){ align=left }

Bài viết này hướng dẫn thực hiện truy vấn SQL đối với cơ sở dữ liệu SQLite và hiển thị kết quả lên bảng được kẻ bằng các ký tự `-` và `|` trong màn hình console.
</div>

*Cập nhật: 25.01.2024*

<br>

<!-- more -->

<br>

## Cài đặt

**PrettyTable** là một thư viện của Python giúp hiển thị dữ liệu theo dạng bảng bằng ký tự ASCII, cụ thể là các ký tự `-`, `|` và `+`.

Trước hết, ta cài đặt **PrettyTable** bằng `pip`.

``` ps1
python -m pip install -U prettytable
```

Tiếp theo, khai báo các thư viện.

``` py linenums="1"
import sqlite3
from prettytable import from_db_cursor
from pathlib import Path
```

## Khởi tạo

Lấy đường dẫn của file SQLite, nằm cùng thư mục với chương trình này.

``` py linenums="7"
database_file = str(Path(__file__).parent) + '\\coffee_shop.sqlite3'
```

Kết nối cơ sở dữ liệu và khởi tạo `cursor` cho cơ sở dữ liệu.

``` py linenums="9"
connection = sqlite3.connect(database_file)
cursor = connection.cursor()
```

Thực thi câu truy vấn SQL.

``` py linenums="12"
sql = '''SELECT customer_id, customer_name, major
FROM customers
WHERE major = 'Vaccinologist'
ORDER BY customer_name
'''
cursor.execute(sql)
```

## Hiển thị dữ liệu dạng bảng

Gán dữ liệu kết quả cho **PrettyTable** để kẻ bảng và in ra.

``` py linenums="19"
table = from_db_cursor(cursor)



print(table)
```

Ngoài ra, ta có thể tùy chỉnh căn trái hoặc căn phải cho các cột. Mặc định các cột đều được canh giữa. Ví dụ:

``` py linenums="20"
table.align['customer_name'] = 'l'
table.align['major'] = 'r'
```

Output trông như sau:

``` pycon
+-------------+-------------------------------------------------------+---------------+
| customer_id | customer_name                                         |         major |
+-------------+-------------------------------------------------------+---------------+
|    529907   | Dame Sarah Catherine Gilbert DBE (Oxford AstraZeneca) | Vaccinologist |
|    527825   | Hồ Nhân (Nanogen Nanocovax Vietnam)                   | Vaccinologist |
|    423534   | Ozlem Tureci (BioNTech Pfizer)                        | Vaccinologist |
|    198325   | Ugur Sahin (BioNTech Pfizer)                          | Vaccinologist |
+-------------+-------------------------------------------------------+---------------+
```

Nếu không muốn in ra, mà chỉ muốn lấy chuỗi của PrettyTable, ta dùng phương thức `get_string()`. Chuỗi trả về cũng giống như output trên.

``` py
mystring = table.get_string()
```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/PrettyTable/tree/main/connect_sqlite3){:target="_blank"}.
