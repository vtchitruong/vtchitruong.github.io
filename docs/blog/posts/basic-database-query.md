---
categories:
    - Chase the database
    - Set up & Code down
authors: [mrschool]
date: 2021-10-19
---

# Truy vấn cơ sở dữ liệu cơ bản

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV84EuKmsMN0eAS8GnvLbZTHLnO0Eme7IMh9ZAWOflut-z8T8B42601RXYIlJIfLzpp4twa_wqS13v6av_2npZCIno_jUSfYt9Gzmgz2vyyTU343EuLKG=w1200){ width=360 align=left }

Sách Tin học lớp 12 (chương trình trước 2024) có nội dung về truy vấn cơ sở dữ liệu, minh họa bằng công cụ Query của Microsoft Access. Nội dung này là đúng nhưng chưa ổn.

Bởi trong thế giới công nghiệp, các phần mềm có giao diện khác nhau và thường thay đổi, trong khi dòng lệnh chỉ biến tấu chứ không biến đổi hoàn toàn, lại có tính ứng dụng cao. 
</div>

<!-- more -->

<br>

Cho nên, dạy học sinh truy vấn bằng SQL, dù ở mức cơ bản, vẫn cần thiết hơn và ngầu hơn.

Bài viết này giới thiệu sơ nét về SQL và một số câu lệnh ví dụ, hướng đến học sinh phổ thông.

## SQL

### Khái quát

**SQL**, viết tắt của Structured Query Language, là ngôn ngữ dùng để ### Truy vấn và xử lý cơ sở dữ liệu.

### Cú pháp chung

``` sql linenums="1"
SELECT <các cột cần xem>
FROM <bảng>
[WHERE <điều kiện>]
[GROUP BY <các cột gom nhóm>]
[HAVING <điều kiện trên nhóm>]
[ORDER BY <cột cần sắp xếp> ASC | DESC]
```

Giải thích:

1. Để hiển thị tất cả cột liên quan, ta có thể gõ `SELECT *`.
2. `<điều kiện>` trong mệnh đề `WHERE` sử dụng các toán tử so sánh như `<` `<=` `>` `>=` `=` `<>` (so sánh khác nhau).
3. Trong `<điều kiện>`, chuỗi phải được đặt trong dấu ngoặc kép, còn số thì không.
    Cần cẩn trọng các khoảng trắng dư thừa khi gõ chuỗi.
4. Trong `WHERE`, có thể sử dụng toán tử `LIKE` để so sánh gần bằng/gần giống.
5. Ký tự đại diện khi sử dụng toán tử `LIKE` là:

    - `%` đại diện cho không ký tự, một ký tự hoặc nhiều ký tự.
    - `_` đại diện cho một ký tự duy nhất.

5. Từ khóa trong mệnh đề `ORDER BY`:

    - `DESC`: giảm dần
    - `ASC`: tăng dần. Nếu sắp xếp tăng dần, ta có thể bỏ qua, không cần nêu rõ.

## Công cụ thực hiện truy vấn

Chương trình sử dụng: [SQL Online IDE](https://sqliteonline.com/){:target="_blank"}.

Nếu chưa biết, bạn hãy xem sơ bài [Hướng dẫn thực hành ### Truy vấn cơ sở dữ liệu trực tuyến](https://vtchitruong.github.io/blog/2021/10/17/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-th%E1%BB%B1c-h%C3%A0nh-truy-v%E1%BA%A5n-c%C6%A1-s%E1%BB%9F-d%E1%BB%AF-li%E1%BB%87u-tr%E1%BB%B1c-tuy%E1%BA%BFn/){:target:"_blank"}

## Cơ sở dữ liệu minh họa

Cơ sở dữ liệu minh họa trong bài là Coffee shop, tải [tại đây](https://1drv.ms/u/s!ApQ3j6n6-2wNmL9RUuC6EcJSY-2nJQ?e=ohB03r){:target="_blank"}.

Đây là cơ sở dữ liệu theo dạng SQLite, phần mở rộng của tập tin là **.sqlite** hoặc **.sqlite3**

Nếu link hết hạn, bạn có thể liên lạc theo email vtchitruong@gmail.com hoặc tự tìm trên mạng một cơ sở dữ liệu SQLite khác.

Lược đồ cơ sở dữ liệu **Coffee shop** như sau:

- customers(<ins>customer_id</ins>, customer_name, phone, district, province, customer_type, major, achievements)

- menu(<ins>item_id</ins>, item_name, item_type, price, description, real_name)

- invoice(<ins>invoice_id</ins>, invoice_date, customer_id, item_id, amount, actual_price, total)

## Một số truy vấn ví dụ

### Truy vấn 1

Lập danh sách các khách hàng vip.

:   *Gợi ý:*

    *Ở góc độ là người học, bạn không nên dùng `SELECT *`, mà hãy tự liệt kê các thuộc tính (cột) có liên quan.*  
    *Khách hàng vip là khách có dữ liệu `"V"` ở thuộc tính `customer_type`.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type
    FROM customers
    WHERE customer_type = "V"
    ```

### Truy vấn 2

Lập danh sách các khách hàng vip và thân thiết.

:    *Gợi ý:*

    *Khách hàng thân thiết là khách có dữ liệu `“F”` ở thuộc tính `customer_type`.*  
    *Thêm mệnh đề `OR`, chứ không phải `AND`.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type
    FROM customers
    WHERE customer_type = "V" OR customer_type = "F"
    ```

### Truy vấn 3

Lập danh sách các khách hàng vip là tỉ phú.

:    *Gợi ý:*

    *Gõ thêm thuộc tính mới là `major`.*  
    *Thêm mệnh đề `AND` với thuộc tính `major`.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type, major
    FROM customers
    WHERE customer_type = "V" AND major = "Billionaire"
    ```

### Truy vấn 4

Lập danh sách các khách hàng có tên bắt đầu bằng chữ N và T.

:    *Gợi ý:*

    *Sử dụng toán tử so sánh gần bằng `LIKE` và ký tự đại diện `%`*.

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type, major
    FROM customers
    WHERE customer_name LIKE "T%" OR customer_name LIKE "N%"
    ```

### Truy vấn 5

Cùng truy vấn trên, sắp xếp danh sách tăng dần theo lĩnh vực công tác của khách hàng.

:    *Gợi ý:*

    *Thêm mệnh đề `ORDER BY` vào truy vấn trên.*  
    *Sắp xếp tăng dần thì không cần gõ từ khóa `ASC` (Ascending).*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type, major
    FROM customers
    WHERE customer_name LIKE "T%" OR customer_name LIKE "N%"
    ORDER BY major
    ```

### Truy vấn 6

Cùng truy vấn trên, nếu khách trùng nhau về lĩnh vực công tác thì sắp xếp loại khách giảm dần.

:    *Gợi ý:*

    *Thêm thuộc tính `customer_type` vào mệnh đề `ORDER BY`.*  
    *Từ khóa `DESC` (Descending) dùng để sắp xếp giảm dần.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT customer_name, customer_type, major
    FROM customers
    WHERE customer_name LIKE "T%" OR customer_name LIKE "N%"
    ORDER BY major, customer_type DESC

    ```
### Truy vấn 7

Lập danh sách các món là thức ăn. Sắp xếp theo giá giảm dần.

:    *Gợi ý:*

    *Chuyển sang truy vấn dữ liệu ở bảng `menu`.*  
    *Thức ăn là các mẫu tin có dữ liệu `"Food"` ở thuộc tính `item_type`.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT item_name, item_type, price
    FROM menu
    WHERE item_type = "Food"
    ORDER BY price DESC
    ```

### Truy vấn 8

Lập danh sách các món là thức uống. Sắp xếp theo giá giảm dần.

:    *Gợi ý:*

    *Cách 1: Dùng toán tử `OR` để liệt kê các dữ liệu như `"Coffee"`, `"Tea"`, v.v... của thuộc tính `item_type`.*  
    *Cách 2: Dùng toán tử so sánh khác `<>` để lấy các mẫu tin không phải `"Food"`.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT item_name, item_type, price
    FROM menu
    WHERE item_type <> "Food"
    ORDER BY price DESC
    ```

### Truy vấn 9

Cùng truy vấn trên, sắp xếp các món theo loại món giảm dần, nếu trùng thì sắp xếp theo đơn giá giảm dần.

:    *Gợi ý:*

    *Khi sắp xếp giảm dần, phải ghi từ khóa `DESC` ngay sau mỗi thuộc tính cần sắp xếp.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT item_name, item_type, price
    FROM menu
    WHERE item_type <> "Food"
    ORDER BY item_type DESC, price DESC
    ```

### Truy vấn 10

Lập danh sách tất cả các món có giá từ 50 ngàn đến 200 ngàn. Sắp xếp theo loại món giảm dần và tên món tăng dần.

:    *Gợi ý:*

    *Thuộc tính `price` nằm trong đoạn [50k, 200k] nên ta sử dụng toán tử `AND`.*  
    *Yêu cầu sắp xếp được hiểu rằng: sắp xếp loại món trước, nếu trùng loại món thì mới sắp xếp tên món.*

??? success "Hôm nay, tôi không thông minh hơn học sinh lớp 5."

    ``` sql linenums="1"
    SELECT item_name, item_type, price
    FROM menu
    WHERE price >= 50000 and price <= 200000
    ORDER BY item_type DESC, item_name
    ```