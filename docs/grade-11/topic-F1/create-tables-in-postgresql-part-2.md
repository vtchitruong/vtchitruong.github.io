---
icon: simple/postgresql
---

# Tạo nhiều bảng trong PostgreSQL - phần 2

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày cách tạo thêm bảng nhằm hoàn chỉnh cơ sở dữ liệu quản lý điểm số học sinh bằng công cụ pgAdmin 4 của PostgreSQL.

## Khái quát cơ sở dữ liệu

Cơ sở dữ liệu cần tạo là `school_db`, dùng để quản lý điểm số của học sinh, gồm có một số bảng sau:

| Tên bảng | Dữ liệu được lưu trữ |
| --- | --- |
| `classrooms` | Dữ liệu về lớp học |
| `students` | Dữ liệu về học sinh |
| `subjects` | Dữ liệu về môn học |
| `scores` | Dữ liệu về điểm số của học sinh |

[Bài trước](./create-tables-in-postgresql-part-1.md){:target="_blank"} đã hướng dẫn cách tạo bảng `classrooms` và kết nối với bảng `students`.

Bài này trình bày cách tạo hai bảng còn lại là `subjects` và `scores`.

## Bảng subjects

### Tạo bảng

Mô tả của bảng `subjects` như sau:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `subject_id` | mã định danh của mỗi môn học | chuỗi gồm 2 ký tự và là khóa chính |
| `subject_name` | tên đầy đủ của mỗi môn học | chuỗi gồm 100 ký tự |
| `description` | mô tả môn học | văn bản dài |
| `is_mandatory` | là môn học bắt buộc hoặc không | `true` hoặc `false` |

Mã lệnh SQL tạo bảng `subjects`:

```sql linenums="71"
-- Tạo bảng subjects
create table subjects (
    subject_id char(2) primary key,
    subject_name varchar(100),
    description text, -- (1)!
    is_mandatory boolean default true -- (2)!
);
```
{ .annotate }

1.	`text` là kiểu dữ liệu dùng cho khối văn bản lớn, nhưng hiệu năng không bằng kiểu `varchar`.
2.	Giá trị mặc định của thuộc tính `is_mandatory` trong mỗi mẫu tin là true.

### Thêm dữ liệu

Mã lệnh SQL thêm mới ba mẫu tin (1) vào bảng `subjects`:
{ .annotate }

1.	Mỗi mẫu tin là một hàng trong bảng, chứa dữ liệu của một môn học.

```sql linenums="79"
-- Thêm dữ liệu vào bảng subjects
insert into subjects
values
	('CS', 'Khoa học máy tính', 'Khoa học xử lý dữ liệu và thông tin bằng máy tính', true),
	('PH', 'Phòng chống nghệ thuật hắc ám', 'Phương pháp và kỹ thuật hiệu quả chống lại nghệ thuật và các sinh vật hắc ám', true),
	('MH', 'Muggle học', 'Khoa học về những người không có phép thuật', false);
```

## Bảng scores

### Tạo bảng

Mô tả của bảng `scores` như sau:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `student_id` | mã định danh của mỗi học sinh | chuỗi gồm 6 ký tự |
| `subject_id` | mã định danh của mỗi môn học | chuỗi gồm 2 ký tự |
| `regular_1` | điểm kiểm tra thường xuyên 1 | số thực |
| `regular_2` | điểm kiểm tra thường xuyên 2 | số thực |
| `regular_3` | điểm kiểm tra thường xuyên 3 | số thực |
| `midterm` | điểm kiểm tra giữa kỳ | số thực |
| `final_test` | điểm kiểm tra cuối kỳ | số thực |

Lược đồ của bảng `scores` có thể được ghi như sau:

scores(<ins>**student_id, subject_id**</ins>, regular_1, regular_2, regular_3, midterm, final_test)

Trong đó:

- Khoá chính gồm hai thuộc tính là `student_id` và `subject_id`.
- Hai khoá ngoại gồm:
	- Khoá ngoại 1: thuộc tính `student_id` sẽ tham chiếu đến thuộc tính `student_id` của bảng `students`.
	- Khoá ngoại 2: thuộc tính `subject_id` sẽ tham chiếu đến thuộc tính `subject_id` của bảng `subjects`.

Mã lệnh SQL tạo bảng `scores`:

```sql linenums="86"
-- Tạo bảng scores
create table scores (
	student_id char(6),
	subject_id char(2),
	regular_1 float,
	regular_2 float,
	regular_3 float,
	midterm float,
	final_test float,
	primary key (student_id, subject_id),
	foreign key (student_id) references students(student_id), -- (1)!
	foreign key (subject_id) references subjects(subject_id)
);
```
{ .annotate }

1.	Dòng lệnh này khai báo khoá ngoại trực tiếp trong lệnh `CREATE TABLE`, mà không cần dùng viết thêm lệnh `ALTER TABLE`.

Như vậy, cho đến lúc này, ta đã có được cơ sở dữ liệu (tạm) hoàn chỉnh như sau:

![Lược đồ toàn bộ cơ sở dữ liệu](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrt9uhcYkGep8Sb-DTQ/root/content){loading=lazy}

### Thêm dữ liệu

Mã lệnh SQL thêm mới mười mẫu tin (1) vào bảng `scores`:
{ .annotate }

1.	Mỗi mẫu tin là một hàng trong bảng, chứa dữ liệu điểm số các bài kiểm tra của một học sinh và một môn học.

```sql linenums="100"
-- Thêm dữ liệu vào bảng scores
insert into scores
values
	('231001', 'CS', 9.2, 9.4, 8.3, 9.1, 8.5),
	('231001', 'PH', 7.1, 9.2, 8.8, 8.2, 8.8),
	('231002', 'MH', 9.2, 9.3, 9, 9.2, 9.3),
	('220002', 'CS', 8.3, 8.5, 9.2, 8.5, 10),
	('220002', 'PH', 8.6, 7.8, 7.2, 9.2, 9.5),
	('221001', 'MH', 7.5, 7.2, 8.6, 8.5, 7.8),
	('241001', 'CS', 9.2, 9.2, 9.3, 9.4, 7.5),
	('241001', 'PH', 8.2, 8, 7.2, 8.5, 7.8),
	('231002', 'CS', 10, 9.5, 9.3, 7.2, 9),
	('231002', 'PH', 9, 7.3, 8.9, 10, 8.5);
```

Xem toàn bộ dữ liệu của bảng `scores` bằng cách: click phải lên bảng `scores` > chọn **View/Edit Data** > chọn **All Rows**.

![Dữ liệu của bảng score](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrt91d0img754XXvvxg/root/content){loading=lazy}

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/create-tables-in-postgresql-part-2.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng trong PostgreSQL*