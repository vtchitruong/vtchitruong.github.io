---
icon: simple/postgresql
---

# Tạo bảng trong PostgreSQL - Phần 2

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày cách tạo thêm bảng, đồng thời kết nối hai bảng với nhau, bằng công cụ pgAdmin 4 của PostgreSQL.

## Khái quát cơ sở dữ liệu

Cơ sở dữ liệu cần tạo là `school_db`, dùng để quản lý điểm số của học sinh, gồm một số bảng như sau:

| Tên bảng | Dữ liệu được lưu trữ |
| --- | --- |
| `classrooms` | Dữ liệu về lớp học |
| `students` | Dữ liệu về học sinh |
| `subjects` | Dữ liệu về môn học |
| `scores` | Dữ liệu về điểm số của học sinh |

[Bài trước](./create-tables-in-postgresql-part-1.md){:target="_blank"} đã hướng dẫn cách tạo một bảng, là `students`.

Bài này trình bày cách tạo thêm bảng `classrooms` và kết nối với bảng `students`.

## Mở tập tin sql

1\. Trong cửa sổ **Query Tool** của **pgAdmin 4**, nhấn nút **Open File**.

![Mở tập tin .sql](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrtsjtdsUe49LgwIhAg/root/content){loading=lazy width=480}

2\. Chọn tập tin **school_db.sql** đã lưu trong bài trước.

## Bảng classrooms

### Tạo bảng

Mô tả của bảng `classrooms` như sau:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `classroom_id` | mã định danh của mỗi lớp | chuỗi gồm 5 ký tự và là khóa chính |
| `classroom_name` | tên đầy đủ của mỗi lớp | chuỗi gồm 50 ký tự |
| `room` | phòng học của mỗi lớp | chuỗi gồm 50 ký tự |
| `head_teacher` | họ tên giáo viên chủ nhiệm | chuỗi gồm 50 ký tự |

Để tạo bảng `classrooms` ứng với mô tả trên, ta thực hiện như sau:

1\. Trong tab **Query**, nhập câu lệnh sau để tạo bảng `classrooms`:

```sql linenums="21"
-- Tạo bảng classrooms
create table classrooms (
	classroom_id char(5) primary key,
	classroom_name varchar(50),
	room varchar(50),
	head_teacher varchar(50)
);
```

2\. Quét khối câu lệnh SQL vừa viết, rồi nhấn ++f5++ để chạy. (Hoặc chỉ cần đặt con trỏ vào vị trí bất kỳ trong câu lệnh, rồi nhấn ++alt++ + ++f5++).

### Thêm dữ liệu

Mã lệnh SQL thêm mới ba mẫu tin (1) vào bảng `classrooms`:
{ .annotate }

1.	Mỗi mẫu tin là một hàng trong bảng, chứa dữ liệu của một thực thể hoặc một sự kiện, cụ thể ở đây, mỗi mẫu tin là dữ liệu của một lớp.

```sql linenums="29"
-- Thêm dữ liệu vào bảng classrooms
insert into classrooms -- (1)!
values ('12CTo', '12 chuyên Toán', '3.14', 'Prof. Ngô Bảo Châu'),
		('11CTi', '11 chuyên Tin', 'Fibonacci', 'Mr School'),
		('10CSi', '10 chuyên Sinh', 'Darwin', 'Dr Black Jack');
```
{ .annotate }

1.	Do thêm dữ liệu vào tất cả thuộc tính trong bảng, ta không cần liệt kê tên từng thuộc tính.

## Kết nối hai bảng

Ta cần kết nối hai bảng `students` và `classrooms` với nhau nhằm lưu trữ và quản lý thông tin "*một học sinh học ở lớp nào*" hoặc "*một lớp có những học sinh nào*". (1)
{ .annotate }

1.	**Kết nối** còn được gọi là **tạo mối quan hệ** giữa hai bảng.

Để kết nối hai bảng, ta cần thực hiện như sau:

1\. Xác định một thuộc tính chung giữa hai bảng. Cụ thể ở đây là thuộc tính `classroom_id`.

2\. Tạo tham chiếu từ bảng này đến bảng kia. Cụ thể, tạo tham chiếu từ thuộc tính `classroom_id` của bảng `students` đến thuộc tính `classroom_id` của bảng `classrooms`.

Hiện nay, bảng `students` chưa có thuộc tính `classroom_id`. Cho nên, ta cần thêm thuộc tính `classroom_id` trước.

### Thêm thuộc tính cho bảng

Để thêm thuộc tính (cột) cho bảng, ta dùng câu lệnh SQL `ALTER TABLE`.

!!! info "Cú pháp lệnh `ALTER TABLE` để thêm thuộc tính (cột)"

    ```sql
    ALTER TABLE bảng
	ADD COLUMN thuộc_tính_mới kiểu_dữ_liệu;
    ```

Ví dụ:

Mã lệnh SQL thêm thuộc tính `classroom_id` vào bảng `students`:

```sql linenums="35"
-- Thêm thuộc tính classroom_id vào bảng students
alter table students
add column classroom_id char(5);
```

### Kết nối bảng

Để kết nối (nói cách khác là tạo **mối quan hệ**) giữa hai bảng, ta cần dựa vào khoá ngoại (1) và khoá chính của chúng.
{ .annotate }

1.	**Khóa ngoại** là một hoặc nhiều thuộc tính (cột) tham chiếu đến khoá chính của bảng khác, nhằm bảo đảm tính toàn vẹn dữ liệu và duy trì mối quan hệ giữa các bảng.

Theo đó, ta cần tạo ra **ràng buộc khoá ngoại** cho thuộc tính `classroom_id` trong bảng `students`. Ràng buộc này bảo đảm rằng giá trị của khoá ngoại `classroom_id` trong bảng `students` phải tham chiếu đến khoá chính `classroom_id` của bảng `classrooms`.

Nói cách khác, giá trị `classroom_id` của mỗi học sinh trong bảng `students` phải khớp với một giá trị `classroom_id` có sẵn trong bảng `classrooms`.

Chẳng hạn, nếu ta muốn cập nhật `classroom_id` của một học sinh thành `10A17`, mà giá trị `10A17` lại không tồn tại trong bảng `classrooms`, thì cơ sở dữ liệu sẽ không cho cập nhật. Ràng buộc khoá ngoại ngăn chặn cập nhật là nhằm bảo đảm tính nhất quán của cơ sở dữ liệu.

Để bổ sung ràng buộc khoá ngoại cho một bảng, ta cũng dùng câu lệnh SQL `ALTER TABLE`.

!!! info "Cú pháp lệnh `ALTER TABLE` để thêm ràng buộc khoá ngoại"

    ```sql
	ALTER TABLE bảng
	ADD CONSTRAINT tên_của_ràng_buộc FOREIGN KEY (thuộc_tính_muốn_tham_chiếu)
	REFERENCES bảng_được_tham_chiếu(thuộc_tính_được_tham_chiếu);
    ```

Ví dụ:

Mã lệnh SQL thêm ràng buộc khoá ngoại từ bảng `students` đến bảng `classrooms`:

```sql linenums="39"
-- Thêm tham chiếu từ students đến classrooms
alter table students
add constraint fk_classroom_id foreign key (classroom_id) -- (1)!
references classrooms(classroom_id); -- (2)!
```
{ .annotate }

1.	`fk_classroom_id` là tên của ràng buộc.

	`classroom_id` là thuộc tính sẽ làm khoá ngoại của của bảng `students`.

2.	Dòng này có nghĩa là: tham chiếu đến `classroom_id` của bảng `classrooms`.

Sau câu lệnh trên, mối quan hệ giữa hai bảng `students` và `classrooms` được thể hiện qua sơ đồ dưới đây:

![Sơ đồ mối quan hệ giữa các bảng](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttJzvDaNnStumQMAA/root/content){loading=lazy width=600}

Trong đó:

- Bảng `classrooms` được gọi là **bảng cha**.
- Bảng `students` được gọi là **bảng con**.

### Cập nhật giá trị của thuộc tính

Để cập nhật giá trị của thuộc tính trong bảng, ta dùng câu lệnh SQL `UPDATE`.

!!! info "Cú pháp lệnh `UPDATE`"

    ```sql
	UPDATE bảng
	SET thuộc_tính_1 = giá_trị_1, thuộc_tính_2 = giá_trị_2, ...
	WHERE điều_kiện_của_các_mẫu_tin_sẽ_cập_nhật;
    ```

Ví dụ:

Mã lệnh SQL cập nhật giá trị của thuộc tính `classroom_id` trong bảng `students`:

```sql linenums="44"
-- Cập nhật dữ liệu lớp cho bảng students
update students
set classroom_id = '12CTo'
where student_id = '221001'; -- (1)!

update students
set classroom_id = '11CTi'
where student_id = '231001';

update students
set classroom_id = '10CSi'
where student_id = '241021';
```
{ .annotate }

1.	`where`: dùng để lọc ra các mẫu tin thoả điều kiện.

	`student_id = '221001'`: mẫu tin nào có thuộc tính `student_id` bằng với chuỗi `'221001'` sẽ được cập nhật.

Xem toàn bộ dữ liệu của bảng `students` vừa cập nhật bằng cách: click phải lên bảng `students` > chọn **View/Edit Data** > chọn **All Rows**.

![Toàn bộ bảng students](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrttD-GXLp22RCJsyng/root/content){loading=lazy}

## Sơ đồ tóm tắt

{!grade-11/topic-F1/mindmaps/create-tables-in-postgresql-part-2.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng trong PostgreSQL*

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_create_2.sql){:target="_blank"}.
