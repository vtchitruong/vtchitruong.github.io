---
icon: simple/postgresql
---

# Tạo bảng trong PostgreSQL - Phần 1

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày cách tạo cơ sở dữ liệu gồm một bảng bằng công cụ pgAdmin 4 của PostgreSQL.

## Khái quát cơ sở dữ liệu

Cơ sở dữ liệu cần tạo là `school_db`, dùng để quản lý điểm số của học sinh, gồm có một số bảng sau:

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

![Mở chương trình pgAdmin 4](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttMmLvqXnNZRJkm2Q/root/content){loading=lazy}

## Mở công cụ Query Tool

1\. Click chọn **Database**.

2\. Click chọn cơ sở dữ liệu cần làm việc. Nếu chưa có cơ sở dữ liệu nào, ta click chọn **postgres**. (1)
{ .annotate }

1.	**postgres** là cơ sở dữ liệu quản trị mặc định, được tạo sẵn sau khi cài đặt PostgreSQL, dành cho các thao tác quản lý user, role và config.

3\. Nhấn nút **Query Tool**. (1)
{ .annotate }

1.	**Query Tool** là công cụ để nhập và thực thi các câu lệnh SQL.

![Mở công cụ Query dùng để nhập câu lệnh SQL](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttLIsLVifPjpfpGXw/root/content){loading=lazy}

## Tạo cơ sở dữ liệu

Để tạo cơ sở dữ liệu mới, ta dùng câu lệnh SQL `CREATE DATABASE`.

!!! info "Cú pháp lệnh `CREATE DATABASE`"

    ```sql
    CREATE DATABASE tên_cơ_sở_dữ_liệu;
    ```

Ví dụ:

Để tạo cơ sở dữ liệu `school_db`, ta thực hiện như sau:

1\. Trong tab **Query**, nhập câu lệnh `CREATE DATABASE`:

```sql linenums="2"
create database school_db;
```

2\. Nhấn ++f5++ để chạy. (Hoặc nhấn nút **Execute script** trên thanh công cụ.)

3\. Xem kết quả thực hiện trong tab **Messages** ở phần dưới cửa sổ.

![Tab Message](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttN7Z75bxNkMnlp-A/root/content){loading=lazy width=600}

3\. Click phải lên **Databases**,

4\. Click chọn **Refresh** để thấy được cơ sở dữ liệu vừa tạo.

![Refresh để xem các cơ sở dữ liệu đã tạo](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttO51nzxSmwzlLnqQ/root/content){loading=lazy width=480}

5\. Cũng trong mục **Databases**, click chọn `school_db` để chuẩn bị làm việc với cơ sở dữ liệu này.

![Chọn cơ sở dữ liệu để làm việc](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttPK0vFfo3LZf53-A/root/content){loading=lazy width=480}

## Lưu tập tin SQL script

Để lưu tập tin chứa mã lệnh SQL cho những lần sử dụng về sau, ta thực hiện:

1\. Nhấn nút có biểu tượng hình cái đĩa mềm hoặc nhấn ++ctrl++ + ++s++.

2\. Chọn thư mục để lưu và nhập tên tập tin tuỳ ý, chẳng hạn **school_db.sql**. (1) (Mặc định trong Windows thì không cần gõ phần mở rộng .sql)
{ .annotate }

1.	Tập tin **.sql** là tập tin chứa các mã lệnh SQL dùng để tương tác với cơ sở dữ liệu.

    Khi cơ sở dữ liệu gặp trục trặc, ta có thể chạy tập tin này để phần nào đó khôi phục lại cơ sở dữ liệu ban đầu.

## Tạo bảng

Để tạo bảng, ta dùng câu lênh SQL `CREATE TABLE`.

!!! info "Cú pháp lệnh `CREATE TABLE`"

    ```sql
    CREATE TABLE table_name (
    	thuộc_tính_1 kiểu_dữ_liệu_1 [ràng buộc],
    	thuộc_tính_2 kiểu_dữ liệu 2 [ràng buộc],
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

![Xem kết quả thực hiện tạo bảng](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttQ5sbIuW5wQYKp3g/root/content){loading=lazy width=480}

## Thêm dữ liệu vào bảng

Để thêm dữ liệu vào một bảng, ta dùng câu lệnh SQL `INSERT INTO`.

!!! info "Cú pháp lệnh `INSERT INTO`"

    ```sql
    INSERT INTO bảng (thuộc_tính_1, thuộc_tính_2, ..., thuộc_tính_n)
    VALUES (giá_trị_1, giá_trị_2, ..., giá_trị_n);
    ```

    Trong trường hợp thêm dữ liệu cho tất cả cột, ta có thể bỏ qua không gần nhập tên cột.

    ```sql
    INSERT INTO bảng
    VALUES (giá_trị_1, giá_trị_2, ..., giá_trị_n);
    ```

Ví dụ:

Để thêm mới 3 mẫu tin (1) vào bảng `students`, ta nhập mã lệnh SQL như sau:
{ .annotate }

1.	Mỗi mẫu tin là một hàng trong bảng, chứa dữ liệu của một thực thể hoặc một sự kiện, cụ thể ở đây, mỗi mẫu tin là dữ liệu của một học sinh.

```sql linenums="14"
-- Thêm dữ liệu vào bảng students
insert into students(student_id, last_name, first_name, gender, birth_date, birth_place) 
values
	('220001', 'Tào', 'Tháo', 0, '2007-01-15', 'Osaka, Japan'),
	('230001', 'Lưu', 'Bị', 0, '2008-01-14', 'Istanbul, Turkey'),
	('240021', 'Tôn', 'Quyền', 0, '2009-02-18', 'Dublin, Ireland');
```

Như vậy, cơ sở dữ liệu `school_db` đã có một bảng, đó là`students` gồm 3 mẫu tin.

Để xem tất cả mẫu tin của bảng, ta thực hiện như sau:

1\. Trong **Object Explorer**, click phải vào bảng **students**.

2\. Chọn **View/Edit Data**.

3\. Chọn **All rows**.

![Xem tất cả mẫu tin của bảng](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrvUlfB6gwFtIFdlrTw/root/content){loading=lazy}

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/create-tables-in-postgresql-part-1.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng trong PostgreSQL*

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_create_1.sql){:target="_blank"}.
