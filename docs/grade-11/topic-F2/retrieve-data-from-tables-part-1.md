---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 1

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh SELECT để truy vấn dữ liệu từ một bảng.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` đã tạo ở những bài trước.

Tải về [tập tin school_db_script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/school_db_script.sql){:target="_blank"}.

**Trường hợp 1:** nếu `school_db` đã tạo hoàn chỉnh từ bài trước thì chạy mã lệnh từ dòng 108 để thêm mẫu tin vô bảng `students` và `scores`.

```sql linenums="108"
insert into students
values
	('221002', 'Tư Mã', 'Ý', 0, '2007-02-11', 'Seoul, South Korea', '12CTo'),
	('220003', 'Tào', 'Phi', 0, '2007-03-20', 'Berlin, Germany', '12CTo'),
	('220004', 'Tào', 'Nhân', 0, '2007-04-18', 'Paris, France', '12CTo'),
    ...
```

**Trường hợp 2:** nếu chưa có `school_db` thì xem lại các bài trước và chạy các đoạn mã trong tập tin vừa tải về.

**Trường hợp 3:** nếu `school_db` bị lỗi thì thực hiện như sau:

1. Đóng hết các tab.
2. Click phải lên `school_db`, chọn **Disconnect from database**.
3. Click chọn cơ sở dữ liệu **postgres** (tức cơ sở dữ liệu mặc định khi cài đặt PostgreSQL).
4. Click nút **Query Tool** để mở tab mới.
5. Gõ và chạy lệnh: `drop database if exists school_db with (force);` để xóa `school_db`.
6. Xem lại các bài trước và chạy các đoạn mã trong tập tin vừa tải về.

---

## Câu lệnh truy vấn SELECT

Để truy vấn, hoặc *trích xuất*, dữ liệu từ bảng, ta dùng câu lệnh `SELECT`.

!!! note "Cú pháp SQL truy vấn dữ liệu"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
    FROM tên_bảng
    [WHERE điều_kiện] -- (1)!
    [GROUP BY thuộc_tính_cần_gom_nhóm]
    [HAVING điều_kiện]
    [ORDER BY thuộc_tính_cần_sắp_xếp ASC | DESC] -- (2)!
    ```
    { .annoate }

    1.  Cặp ngoặc vuông `[ ]` nghĩa là tùy chọn, có thể có hoặc không.
    2.  `ASC` là thứ tự tăng dần, `DESC` là thứ tự giảm dần.

---

## Truy vấn toàn bộ dữ liệu trong bảng

!!! note "Dấu sao `*`"

    Dùng để đại diện cho tất cả các thuộc tính trong bảng. Đồng nghĩa với trích xuất tất cả các cột.

Ví dụ:  
Dòng lệnh 2 và 3 trích xuất toàn bộ dữ liệu trong bảng `students`.

```sql linenums="1"
-- Trích xuất toàn bộ dữ liệu trong bảng students
select *
from students;
```

Chạy câu lệnh trên, kết quả như sau:

![Kết quả thực hiện truy vấn SELECT](./images/select-1-students-asterisk-all.png){loading=lazy}

Trên thanh trạng thái bên dưới của cửa sổ pgAdmin, **Total rows** thể hiện số lượng mẫu tin trong kết quả truy vấn. (1)
{ .annotate }

1.  Mặc định, nếu số lượng mẫu tin trong bảng nhiều hơn 1000 thì pgAdmin sẽ trả về 1000 mẫu tin đầu tiên.

---

## Chỉ định số lượng mẫu tin

!!! note "Từ khóa `LIMIT`"

    Dùng để chỉ định số lượng mẫu tin cần trích xuất.

Ví dụ:  
Dòng lệnh từ 6 đến 8 trích xuất 10 mẫu tin đầu tiên trong bảng `students`.

```sql linenums="5"
-- Trích xuất 10 mẫu tin đầu tiên trong bảng students
select *
from students
limit 10;
```

Chạy câu lệnh trên, kết quả như sau:

![10 mẫu tin đầu tiên](./images/select-1-students-limit.png){loading=lazy}

---

## Chỉ định vị trí của mẫu tin bắt đầu

!!! note "Từ khóa `OFFSET`"

    Dùng để chỉ định vị trí của mẫu tin bắt đầu. Trong đó, mẫu tin đầu tiên trong bảng có vị trí là 0.

Ta cũng có thể hiểu là chỉ định số lượng mẫu tin cần bỏ qua trước khi bắt đầu trích xuất.

Ví dụ:  
Dòng lệnh từ 11 đến 14 trích xuất các mẫu tin từ vị trí 3 đến 7 trong bảng `students`.

```sql linenums="10"
-- Trích xuất các mẫu tin từ vị trí 3 đến 7 trong bảng students
select *
from students
limit 5
offset 3;
```

Chạy câu lệnh trên, kết quả như sau:

![Các mẫu tin từ 3 đến 7](./images/select-1-students-offset.png){loading=lazy}

---

## Truy vấn thuộc tính cụ thể

Để truy vấn các thuộc tính cụ thể, ta chỉ định tên các thuộc tính ngay sau từ khóa `SELECT`.

Ví dụ:  
Dòng lệnh 17 và 18 trích xuất danh sách toàn bộ học sinh và chỉ lấy các cột: cột mã lớp, cột họ và cột tên.

```sql linenums="16"
-- Trích xuất mã lớp, họ và tên học sinh
select classroom_id, last_name, first_name
from students;
```

Chạy câu lệnh trên, kết quả như sau:

![Danh sách toàn bộ học sinh gồm ba thuộc tính](./images/select-1-students-three-columns.png){loading=lazy width=480}

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/school_db_select_1.sql){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/retrieve-data-from-tables-part-1.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| dấu sao | asterisk |
| mẫu tin | record |
| truy vấn | query |
| trích xuất | extract |