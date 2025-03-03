---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 1

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh truy vấn SELECT để truy vấn dữ liệu từ một bảng.

## Yêu cầu về cơ sở dữ liệu

1\. Tiếp tục sử dụng cơ sở dữ liệu `school_db` đã tạo ở những bài trước.

2\. Tải tập tin [school_db_script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_script.sql){:target="_blank"} và mở bằng pgAdmin của PostgreSQL.

3\. Chạy từ dòng lệnh 110 để bổ sung dữ liệu vào `school_db`.

```sql linenums="109"
-- Bổ sung dữ liệu
insert into students
values
	('221002', 'Tư Mã', 'Ý', 0, '2007-02-11', 'Seoul, South Korea', '12CTo'),
	('220003', 'Tào', 'Phi', 0, '2007-03-20', 'Berlin, Germany', '12CTo'),
	('220004', 'Tào', 'Nhân', 0, '2007-04-18', 'Paris, France', '12CTo'),
    ...
```

## Câu lệnh truy vấn SELECT

Để truy vấn (hay còn gọi là *trích xuất*) dữ liệu từ bảng, ta dùng câu lệnh SQL `SELECT`.

!!! note "Cú pháp tổng quát lệnh `SELECT`"

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

## Truy vấn toàn bộ dữ liệu trong bảng

Để truy vấn toàn bộ dữ liệu trong bảng, ta sử dụng dấu sao `*`.

Ví dụ:

Mã lệnh SQL liệt kê toàn bộ dữ liệu trong trong bảng `students`:

```sql linenums="1"
-- Liệt kê toàn bộ dữ liệu trong bảng students
select * -- (1)!
from students;
```
{ .annotate }

1.  Dấu sao `*` đại diện cho tất cả thuộc tính trong bảng.

Kết quả thực hiện truy vấn như hình dưới đây:

![Kết quả thực hiện truy vấn SELECT](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6Rbxmizf4b48WH1ZA/root/content){loading=lazy}

Trên thanh trạng thái bên dưới của cửa sổ pgAdmin, **Total rows** thể hiện số lượng mẫu tin được trả về sau khi thực hiện truy vấn. (1)
{ .annotate }

1.  Mặc định, nếu số lượng mẫu tin trong bảng nhiều hơn 1000 thì pgAdmin sẽ trả về 1000 mẫu tin đầu tiên.

    Do đó, để xem toàn bộ dữ liệu, ta cần thực hiện thêm những truy vấn khác.

## Chỉ định số lượng mẫu tin trả về

Để chỉ định số lượng mẫu tin trả về, ta sử dụng từ khóa `LIMIT`.

Ví dụ:

Mã lệnh SQL trả về 10 mẫu tin đầu tiên trong bảng `students`:

```sql linenums="5"
-- Liệt kê 10 mẫu tin đầu tiên trong bảng students
select *
from students
limit 10;
```

![10 mẫu tin đầu tiên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6RiI2APSzUGeguIhw/root/content){loading=lazy}

## Chỉ định vị trí của mẫu tin bắt đầu

Để chỉ định vị trí của mẫu tin bắt đầu, ta sử dụng từ khóa `OFFSET`.

Trong đó, mẫu tin đầu tiên có vị trí là 0. `OFFSET 10` nghĩa là bắt đầu từ mẫu tin ở vị trí 11.

Ví dụ:

Mã lệnh SQL trả về các mẫu tin từ 11 đến 15 trong bảng `students`:

```sql linenums="10"
-- Liệt kê các mẫu tin từ 11 đến 15 trong bảng students
select *
from students
limit 5
offset 10;
```

![Các mẫu tin từ 11 đến 15](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6Ru96gxx0Hc-qI0Kw/root/content){loading=lazy}

## Truy vấn thuộc tính

Để truy vấn các thuộc tính cụ thể, ta chỉ định tên các thuộc tính ngay sau từ khóa `SELECT`.

Ví dụ:

Mã lệnh SQL trả về danh sách toàn bộ học sinh gồm mã lớp và họ tên:

```sql linenums="16"
-- Liệt kê lớp và họ tên học sinh
select classroom_id, last_name, first_name
from students;
```

![Danh sách toàn bộ học sinh gồm ba thuộc tính](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6R-uP7la19d-zlEzg/root/content){loading=lazy width=480}

## Sơ đồ tóm tắt

{!grade-11/topic-F1/mindmaps/retrieve-data-from-tables-part-1.mm.md!}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| dấu sao | asterisk |
| mẫu tin | record |
| truy vấn | query |
| trích xuất | extract |

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_select_1.sql){:target="_blank"}.
