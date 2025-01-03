---
icon: simple/postgresql
---

# Tạo bảng trong PostgreSQL

!!! abstract "Tóm lược nội dung"
    
    Bài này hướng dẫn cách tạo cơ sở dữ liệu gồm một bảng bằng công cụ pgAdmin 4 của PostgreSQL.

## Khái quát cơ sở dữ liệu

Cơ sở dữ liệu cần tạo là `school_db`, dùng để quản lý điểm số của học sinh.

Cơ sở dữ liệu `school_db` có một số bảng như sau:

| Tên bảng | Dữ liệu được lưu trữ |
| --- | --- |
| `classrooms` | Dữ liệu về lớp học |
| `students` | Dữ liệu về học sinh |
| `subjects` | Dữ liệu về môn học |
| `scores` | Dữ liệu về điểm số của học sinh |

Bài này chỉ trình bày cách tạo một bảng là bảng `students`.

## Mở chương trình pgAdmin 4

1\. Trong **Start menu** của Windows, chọn **pgAdmin 4**.

2\. Trong cửa sổ công cụ **pgAdmin 4**, trong bảng **Object Explorer**, chọn mục **Servers** để chuẩn bị kết nối vào.

3\. Click đôi vào server cần kết nối. Hình dưới đây là **PostgreSQL 17**, bạn có thể chọn server khác theo máy của mình.

4\. Trong hộp thoại **Connect to Server**, nhập mật khẩu (mật khẩu này được tạo trong lúc cài đặt PostgreSQL).

5\. Nhấn **OK**.

![Mở chương trình pgAdmin 4](https://lh3.googleusercontent.com/pw/AP1GczPRT2wJC5AfqVSAZ7vATzM98YILObXUf78X6wCwminr95-VE5gpvJfdZNA_LlGlUlilqRwvcfAdDD9UJ1nGb-3pL3b3Km4h9iYyoIdRCpVEUKj3d8Aw=w2400){loading=lazy}

## Mở công cụ Query Tool

1\. Click chọn **Database**.

2\. Click chọn cơ sở dữ liệu cần làm việc. Nếu chưa có cơ sở dữ liệu nào, ta click chọn **postgres**. (1)
{ .annotate }

1.	**postgres** là cơ sở dữ liệu quản trị mặc định, được tạo sẵn sau khi cài đặt PostgreSQL, dành cho các thao tác quản lý user, role và config.

3\. Nhấn nút **Query Tool**. (1)
{ .annotate }

1.	**Query Tool** là công cụ để nhập và thực thi các câu lệnh SQL.

![Mở công cụ Query dùng để nhập câu lệnh SQL](https://lh3.googleusercontent.com/pw/AP1GczOcKq17UzBBIVQ4DzUdddP3BYsWsM7PGHnpZbriANFKv8oum7q1jzO0lcGQPVCVQON56tahZQB-7-kpLTmvxQ8RgW19qmWAZJYV9f6106q4-jS_4DXO=w2400){loading=lazy}

## Tạo cơ sở dữ liệu

Để tạo cơ sở dữ liệu mới, ta dùng câu lệnh SQL `CREATE DATABASE`.

!!! info "Cú pháp lệnh `CREATE DATABASE`"

    ```sql
    CREATE DATABASE <tên cơ sở dữ liệu>;
    ```

Ví dụ:

Để tạo cơ sở dữ liệu `school_db`, ta thực hiện như sau:

1\. Trong tab **Query**, nhập câu lệnh `CREATE DATABASE`:

```sql linenums="2"
create database school_db;
```

2\. Nhấn ++f5++ để chạy. (Hoặc nhấn nút **Execute script** trên thanh công cụ.)

3\. Xem kết quả thực hiện trong tab **Messages** ở phần dưới cửa sổ.

![Image title](https://lh3.googleusercontent.com/pw/AP1GczNZTf4M0uQ2G-WXcEzSeFn-ZRK4Wmx5BwqpHt3p6Raj9zqL7XsucIZB1CCwPoHms8bj5HslOc-tFd4casvosLNRfmR5h2fnO98MxDQwLnRhAypOVdIz=w2400){loading=lazy width=600}

3\. Click phải lên **Databases**,

4\. Click chọn **Refresh** để thấy được cơ sở dữ liệu vừa tạo.

![Refresh để xem các cơ sở dữ liệu đã tạo](https://lh3.googleusercontent.com/pw/AP1GczNx62KP1KahZpbt7ZmAubDHHlntw0jsAY3sZLdt3jX2KcUAv8CJJyYGEmfgbbqE3VtW71t5l3nCSdfcsgto-Tw1D4ohTMtsUUuYYUsjYFMOgzRBXURa=w2400){loading=lazy width=480}

5\. Cũng trong mục **Databases**, click chọn `school_db` để chuẩn bị làm việc với cơ sở dữ liệu này.

![Chọn cơ sở dữ liệu để làm việc](https://lh3.googleusercontent.com/pw/AP1GczMd6EOXUDFbe_Uxo7FdjKOJVcgCKwV9JG7-XV8KqF9UNUuknzEOSvhuJIelGbBH-XwzkwE6fIPJy4NO9vG_XTLDBgS5S3pgcfOnpXMEfvJGk0WEMEWp=w2400){loading=lazy width=480}

## Lưu tập tin SQL script

Để lưu tập tin chứa mã lệnh SQL cho những lần sử dụng về sau, ta thực hiện:

1\. Nhấn nút có biểu tượng hình cái đĩa mềm hoặc nhấn ++ctrl++ + ++s++.

2\. Chọn thư mục để lưu và nhập tên tập tin tuỳ ý, chẳng hạn **school_db.sql**. (1) (Mặc định trong Windows thì không cần gõ phần mở rộng .sql)
{ .annotate }

1.	Tập tin **.sql** là tập tin chứa các mã lệnh SQL dùng để tương tác với cơ sở dữ liệu.

    Khi cơ sở dữ liệu gặp trục trặc, ta có thể chạy tập tin này để phần nào đó khôi phục lại cơ sở dữ liệu ban đầu.

## Tạo bảng

Để tạo bảng, ta dùng câu lênh SQL `CREATE TABLE`.

!!! info "Cú pháp lệnh ``CREATE TABLE`"

    ```sql
    CREATE TABLE table_name (
    	<thuộc tính 1> <kiểu dữ liệu 1> [ràng buộc],
    	<thuộc tính 2> <kiểu dữ liệu 2> [ràng buộc],
    	...
    	[các ràng buộc của bảng]
	);
    ```

Ví dụ:

Mô tả của bảng `students` như sau:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `student_id` | mã định danh của mỗi học sinh | chuỗi gồm 6 ký tự và là khóa chính |
| `last_name` | họ và chữ đệm của học sinh | chuỗi gồm 50 ký tự |
| `first_name` | tên của học sinh | chuỗi gồm 50 ký tự |
| `gender` | giới tính | 0 là nam, 1 là nữ |
| `birth_date` | ngày sinh | giá trị gồm ngày, tháng và năm |
| `birth_place` | nơi sinh | chuỗi gồm 50 ký tự |

Để tạo bảng `students` ứng với mô tả trên, ta thực hiện như sau:

1\. Trong tab **Query**, nhập tiếp câu lệnh `CREATE TABLE` như các dòng được tô nổi dưới đây.

```sql linenums="1" hl_lines="5-12"
-- Tạo cơ sở dữ liệu (1)
create database school_db;

-- Tạo bảng students
create table students (
	student_id char(6) primary key, -- (2)!
	last_name varchar(50), -- (3)!
	first_name varchar(50),
	gender smallint, -- (4)!
	birth_date date, -- (5)!
	birth_place varchar(50)
);
```
{ .annotate }

1.	Để nhập chú thích cho các dòng lệnh, ta gõ hai dấu gạch ngang `--`.
2.	Khai báo thuộc tính `student_id` là mã học sinh, có kiểu dữ liệu `char`, chứa tối đa 6 ký tự và đặt làm khoá chính.
3.	Khai báo các thuộc tính `last_name`, `first_name` và `birth_place` ứng với họ, tên và nơi sinh, đều có kiểu dữ liệu chuỗi là `varchar`, chứa tối đa 50 ký tự.
4.	Khai báo thuộc tính `gender` là giới tính, có kiểu dữ liệu số nguyên là `smallint`, ngầm định hiểu 0 là nam, 1 là nữ.
5.	Khai báo  thuộc tính `birth_date` là ngày sinh, có kiểu dữ liệu là `date`.

2\. Quét khối câu lệnh SQL vừa viết, rồi nhấn ++f5++ để chạy. (Hoặc chỉ cần đặt con trỏ vào vị trí bất kỳ trong câu lệnh, rồi nhấn ++alt++ + ++f5++).

Thử xem kết quả tạo bảng bằng cách:

3\. Trong **Object Explorer**, click phải vào **school_db** rồi chọn **Refresh...**.

4\. Click mở **school_db**.

5\. Click mở **Schemas**.

6\. Click mở **public**.

7\. Click mở **Tables**, rồi xem đã có bảng `students` hay chưa.

![Xem kết quả thực hiện tạo bảng](https://lh3.googleusercontent.com/pw/AP1GczPUweIR5ffvATvztXPmoAckzwlDF6Q8dtuYd7kCoYRf3cLVxbv_toVT_bV0MYdlpWK_nc2pNveiFgeBiAMA4H8ycAA2jhY53c19TOxb2TPkYf8vAIhh=w2400){loading=lazy width=480}

## Thêm dữ liệu vào bảng

Để thêm dữ liệu vào một bảng, ta dùng câu lệnh SQL `INSERT INTO`.

!!! info "Cú pháp lệnh `INSERT INTO`"

    ```sql
    INSERT INTO <bảng> (<cột 1>, <cột 2>, ..., <cột n>)
    VALUES (<giá trị 1>, <giá trị 2>, ..., <giá trị n>);
    ```

    Trong trường hợp thêm dữ liệu cho tất cả cột, ta có thể bỏ qua không gần nhập tên cột.

    ```sql
    INSERT INTO <bảng>
    VALUES (<giá trị 1>, <giá trị 2>, ..., <giá trị n>);
    ```

Ví dụ:

Để thêm mới 18 mẫu tin (1) vào bảng `students`, ta thực hiện như sau:
{ .annotate }

1.	Mỗi mẫu tin là một dòng trong bảng, chứa dữ liệu của một thực thể hoặc một sự kiện, cụ thể ở đây, mỗi mẫu tin là dữ liệu của một học sinh.

```sql linenums="34"
-- Thêm dữ liệu vào bảng students
insert into students(student_id, last_name, first_name, gender, birth_date, birth_place) 
values
	('231001', 'Lưu Huyền', 'Anh', 0, '2008-02-14', 'Amsterdam, Netherlands'),
	('221001', 'Tào Mạnh', 'Đức', 0, '2007-01-01', 'Dublin, Ireland'),
	('241001', 'Tôn Trọng', 'Mưu', 0, '2009-03-08', 'Hong Kong, China'),
	('231002', 'Gia Cát', 'Lượng', 0, '2008-11-20', 'Milan, Italy'),
	('231003', 'Triệu Tử', 'Long', 0, '2008-09-23', 'Taipei, Taiwan'),
	('220002', 'Điển', 'Vi', 0, '2007-01-04', 'Sydney, Australia'),
	('220003', 'Hoàng Hán', 'Thăng', 0, '2007-11-07', 'Edinburgh, United Kingdom'),
	('231004', 'Hoàng Nguyệt', 'Anh', 1, '2008-12-31', 'Abu Dhabi, United Arab Emirates'),
	('240010', 'Tôn Thượng', 'Hương', 1, '2009-08-19', 'Lisbon, Portugal'),
	('240011', 'Đại', 'Kiều', 1, '2009-09-05', 'Stockholm, Sweden'),
	('240012', 'Tiểu', 'Kiều', 1, '2009-09-05', 'Stockholm, Sweden'),
	('230005', 'Khương Bá', 'Ước', 0, '2008-01-05', 'Prague, Czech Republic'),
	('231006', 'Mã Mạnh', 'Khởi', 0, '2008-07-27', 'Heraklion, Greece'),
	('220004', 'Hứa Trọng', 'Khang', 0, '2007-05-07', 'Ohio, United States'),
	('220091', 'Chân', 'Lạc', 1, '2007-09-02', 'Makkah, Saudi Arabia'),
	('221017', 'Điêu', 'Thuyền', 1, '2007-02-27', 'Tallinn, Estonia'),
	('230007', 'Quan Vân', 'Trường', 0, '2008-01-06', 'Madrid, Spain'),
	('230008', 'Trương Dực', 'Đức', 0, '2008-03-10', 'Istanbul, Turkey');
```

Như vậy, cơ sở dữ liệu `school_db` đã có một bảng, đó là`students` gồm 18 mẫu tin.

Để xem tất cả mẫu tin của bảng, ta thực hiện như sau:

1\. Trong **Object Explorer**, click phải vào bảng **students**.

2\. Chọn **View/Edit Data**.

3\. Chọn **All rows**.

![Xem tất cả mẫu tin của bảng](https://lh3.googleusercontent.com/pw/AP1GczMd6EOXUDFbe_Uxo7FdjKOJVcgCKwV9JG7-XV8KqF9UNUuknzEOSvhuJIelGbBH-XwzkwE6fIPJy4NO9vG_XTLDBgS5S3pgcfOnpXMEfvJGk0WEMEWp=w2400){loading=lazy}

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/create-a-table-in-postgresql.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng trong PostgreSQL*



