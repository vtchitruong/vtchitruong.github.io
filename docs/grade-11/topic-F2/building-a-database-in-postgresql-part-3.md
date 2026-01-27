---
icon: simple/postgresql
---

# Xây dựng cơ sở dữ liệu trong PostgreSQL - Phần 3

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày:
	
	- Cách tạo thêm bảng
	- Cách thêm thuộc tính cho bảng
	- Cách cập nhật dữ liệu
	- Cách liên kết hai bảng 

## Khái quát

Cơ sở dữ liệu cần xây dựng là `school_db`, dùng để quản lý điểm số của học sinh.

`school_db` gồm có các bảng sau:

| Tên bảng | Nội dung của dữ liệu |
| --- | --- |
| `classrooms` | Dữ liệu về lớp học |
| `students` | Dữ liệu về học sinh |
| `subjects` | Dữ liệu về môn học |
| `scores` | Dữ liệu về điểm số của học sinh |

Bài này đề cập cách tạo thêm bảng `classrooms` và liên kết với bảng `students`.

---

## Tạo thêm bảng

Ta có thể tạo thêm nhiều bảng cho cùng một cơ sở dữ liệu.

Ví dụ:  
Bảng `classrooms` cần tạo lược đồ như sau:

classrooms(<ins>classroom_id</ins>, classroom_name, room, head_teacher)

Bảng dưới đây mô tả các thuộc tính (cột) của `classrooms`:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `classroom_id` | mã định danh của mỗi lớp và là khoá chính | `char(5)`: chuỗi gồm 5 ký tự |
| `classroom_name` | tên đầy đủ của mỗi lớp | `varchar(5)`: chuỗi gồm 50 ký tự |
| `room` | phòng học của mỗi lớp | `varchar(50)`: chuỗi gồm 50 ký tự |
| `head_teacher` | họ tên giáo viên chủ nhiệm | `varchar(50)`: chuỗi gồm 50 ký tự |

Các bước thực hiện:

1\. Viết câu lệnh SQL để tạo bảng `classrooms`.

```sql linenums="21"
-- Tạo bảng classrooms
create table classrooms (
	classroom_id char(5) primary key,
	classroom_name varchar(50),
	room varchar(50),
	head_teacher varchar(50)
);
```

2\. Quét khối câu lệnh vừa viết, nhấn ++f5++ để chạy.

3\. Refresh lại `school_db` để kiểm tra đã có bảng chưa.

---

## Thêm mẫu tin vào bảng

1\. Viết câu lệnh SQL để thêm ba mẫu tin mới vào bảng `classrooms`.

```sql linenums="29"
-- Thêm dữ liệu vào bảng classrooms
insert into classrooms -- (1)!
values ('12CTo', '12 chuyên Toán', '3.14', 'Prof. Ngô Bảo Châu'),
		('11CTi', '11 chuyên Tin', 'Fibonacci', 'Mr School'),
		('10CSi', '10 chuyên Sinh', 'Darwin', 'Dr Black Jack');
```
{ .annotate }

1.	Do thêm dữ liệu vào tất cả thuộc tính trong bảng, ta không cần liệt kê tên từng thuộc tính.

2\. Quét khối câu lệnh vừa viết, nhấn ++f5++ để chạy.

3\. Chọn menu **View/Edit Data** để xem dữ liệu của bảng.

---

## Thêm thuộc tính cho bảng

!!! info "Cú pháp SQL thêm thuộc tính (cột) cho bảng"

    ```sql
    ALTER TABLE bảng
	ADD COLUMN thuộc_tính_mới kiểu_dữ_liệu;
    ```

Ví dụ:  
Trước khi liên kết hai bảng `students` và `classrooms` với nhau, ta cần tạo thêm thuộc tính `classroom_id` cho bảng `students`. Các bước thực hiện:

1\. Viết câu lệnh SQL để thêm thuộc tính `classroom_id` cho bảng `students`.

```sql linenums="35"
-- Thêm thuộc tính classroom_id vào bảng students
alter table students
add column classroom_id char(5);
```

2\. Quét khối câu lệnh vừa viết, nhấn ++f5++ để chạy.

3\. Refresh lại bảng `students` để kiểm tra đã có thuộc tính mới chưa.

Lúc này, lược đồ của bảng `students` đã trở thành:

students(<ins>student_id</ins>, last_name, first_name, gender, birth_date, birth_place, **classroom_id**)

!!! warning "Về việc thêm thuộc tính"

	Việc tạo thêm thuộc tính cho bảng như trên chỉ nhằm minh hoạ câu lệnh `ALTER TABLE`.
	
	Trong thực tế, cơ sở dữ liệu nên được thiết kế kỹ lưỡng ngay từ đầu. Việc thay đổi cấu trúc bảng (chẳng hạn như thêm thuộc tính) khi hệ thống đã đi vào hoạt động và có lượng dữ liệu lớn thường phức tạp, dễ phát sinh lỗi. 

---

## Liên kết hai bảng

Ta cần liên kết hai bảng `students` và `classrooms` với nhau. **Liên kết** còn được gọi là **tạo mối quan hệ** giữa hai bảng.

Mối quan hệ này giúp ta biết được: một học sinh thuộc về lớp nào, hoặc một lớp có những học sinh nào. Đồng thời, cũng giúp bảo đảm tính toàn vẹn của dữ liệu.

!!! note "Các bước liên kết hai bảng"

	**Bước 1:** Xác định một **thuộc tính chung** giữa hai bảng.
	
	Thuộc tính chung còn được gọi là **khoá chính** đối với bảng cha và **khoá ngoại** đối với bảng con.

	**Bước 2:** Tạo tham chiếu từ bảng này đến bảng kia.

Ví dụ:  
Hai bước để liên kết bảng `students` và bảng `classrooms`:

- Bước 1: thuộc tính chung của hai bảng `students` và `classrooms` là `classroom_id`. Trong đó:

	- `classrooms` là bảng cha. `classroom_id` của `classrooms` là khoá chính.
	- `students` là bảng con. `classroom_id` của `students` là khoá ngoại. 

- Bước 2: tạo tham chiếu từ thuộc tính `classroom_id` của bảng `students` (khoá ngoại) đến thuộc tính `classroom_id` của bảng `classrooms` (khoá chính).

Trong SQL, việc liên kết hai bảng được thực hiện bằng cách **thiết lập một ràng buộc khóa ngoại**. Ràng buộc này bắt buộc giá trị tại `classroom_id` của `students` phải tham chiếu chính xác đến khoá chính `classroom_id` của `classrooms`.

Nói cách khác, mọi mã lớp được nhập cho học sinh trong bảng `students` bắt buộc phải tồn tại sẵn trong `classroom_id` của bảng `classrooms`. Việc xếp học sinh vào một lớp không có thực sẽ làm cho cơ sở dữ liệu mất tính toàn vẹn.

Ví dụ:  
Nếu ta chỉnh sửa `classroom_id` của một học sinh thành `11A17`, mà giá trị `11A17` lại không tồn tại trong bảng `classrooms`, thì cơ sở dữ liệu sẽ không còn đúng đắn, mất tính toàn vẹn.

Ràng buộc khoá ngoại là nhằm giúp ngăn chặn những tình huống này xảy ra.

!!! info "Cú pháp SQL tạo ràng buộc khoá ngoại"

    ```sql
	ALTER TABLE bảng
	ADD CONSTRAINT tên_của_ràng_buộc FOREIGN KEY (thuộc_tính_muốn_tham_chiếu)
	REFERENCES bảng_được_tham_chiếu(thuộc_tính_được_tham_chiếu);
    ```

Ví dụ:  
1\. Viết câu lệnh SQL để tạo ràng buộc khoá ngoại từ bảng `students` tham chiếu đến bảng `classrooms`:

```sql linenums="39"
-- Tạo ràng buộc khoá ngoại từ students tham chiếu đến classrooms
alter table students
add constraint fk_classroom_id foreign key (classroom_id) -- (1)!
references classrooms(classroom_id); -- (2)!
```
{ .annotate }

1.	`fk_classroom_id` là tên của ràng buộc.

	`classroom_id` là thuộc tính sẽ làm khoá ngoại của bảng `students`.

2.	Dòng này có nghĩa là: tham chiếu đến `classroom_id` của bảng `classrooms`.

2\. Quét khối câu lệnh vừa viết, nhấn ++f5++ để chạy.

Sau khi chạy câu lệnh trên, mối quan hệ giữa hai bảng `students` và `classrooms` được thể hiện qua sơ đồ dưới đây. Mối quan hệ này được gọi là **1-nhiều**.

![Sơ đồ mối quan hệ giữa hai bảng `students` và `classrooms`](./images/part-3-classrooms-students-entity-relationship-diagram.png){loading=lazy width=480}

## Cập nhật dữ liệu

Lúc này, trong bảng `students`, dữ liệu của thuộc tính `classroom_id` đang rỗng. Ta cần chỉnh sửa lại bằng cách nhập mã lớp cụ thể vào.

Thao tác chỉnh sửa được gọi là **cập nhật dữ liệu**.

!!! info "Cú pháp SQL cập nhật dữ liệu"

    ```sql
	UPDATE bảng
	SET thuộc_tính_1 = giá_trị_1, thuộc_tính_2 = giá_trị_2, ...
	WHERE điều_kiện_của_các_mẫu_tin_sẽ_cập_nhật;
    ```

Ví dụ:  
1\. Viết câu lệnh SQL để cập nhật thuộc tính `classroom_id` cho học sinh có mã `221001`.

```sql linenums="44"
-- Cập nhật dữ liệu lớp cho bảng students
update students
set classroom_id = '12CTo' -- (1)!
where student_id = '221001'; -- (2)!
```
{ .annotate }

1.	Đặt giá trị cho `classroom_id` thành `12CTo`.

2.	Chỉ áp dụng cho học sinh nào có `student_id` là `221001`.

!!! warning "Về điều kiện trong WHERE"

	Trước khi thực thi câu lệnh, ta phải kiểm tra kỹ điều kiện sau từ khoá `WHERE`, vì chỉ một sai sót nhỏ cũng có thể làm thay đổi dữ liệu của tất cả các mẫu tin trong bảng.

2\. Viết câu lệnh SQL để cập nhật thuộc tính `classroom_id` cho hai học sinh có mã `231001` và `241021`.

```sql linenums="49"
update students
set classroom_id = '11CTi'
where student_id = '231001';

update students
set classroom_id = '10CSi'
where student_id = '241021';
```

3\. Quét khối cả ba câu lệnh vừa viết, nhấn ++f5++ để chạy.

4\. Chọn menu **View/Edit Data** để xem dữ liệu của bảng. Kết quả như hình dưới đây.

![Toàn bộ dữ liệu trong bảng students](./images/part-3-data-in-students-table.png){loading=lazy}

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/building-a-database-in-postgresql-part-3.sql){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/building-a-database-in-postgresql-part-3.html">Sơ đồ tóm tắt</iframe>
</div>