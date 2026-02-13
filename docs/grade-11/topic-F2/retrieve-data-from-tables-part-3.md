---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 3

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh SELECT và INNER JOIN để truy vấn dữ liệu từ nhiều bảng.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` đã tạo ở bài trước.

Nếu gặp trục trặc về cơ sở dữ liệu, hãy xoá `school_db` (1) và tạo lại từ đầu (2).
{ .annotate }

1.  1\. Trong **pgAdmin**, click chuột phải vào **school_db** và chọn **Delete**.

    2\. Trong hộp thoại hiện ra, chọn **Yes** để xác nhận xoá.

2.  Chạy tập tin [school_db_script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_script.sql){:target="_blank"} bằng pdAdmin của PostgreSQL.

## Truy vấn hai bảng

Để truy vấn dữ liệu từ hai bảng, ta dùng từ khoá `INNER JOIN` để liên kết hai bảng theo các thuộc tính liên kết.

![Minh hoạ thao tác liên kết INNER JOIN](images/inner-join.svg){loading=lazy width=420}

`INNER JOIN` chỉ trả về các mẫu tin mà các thuộc tính liên kết có giá trị khớp nhau. Nếu mẫu tin nào mà thuộc tính liên kết có giá trị không khớp thì mẫu tin đó sẽ không được trả về. 

!!! note "Cú pháp truy vấn hai bảng bằng `INNER JOIN`"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
    FROM bảng_1 INNER JOIN bảng_2 ON bảng_1.thuộc_tính_liên_kết_1 = bảng_2.thuộc_tính_liên_kết_2
    ```

Ví dụ:

**Yêu cầu:** Lập danh sách học sinh, kèm theo lớp và phòng học.

**Phân tích:**

Dữ liệu về học sinh được lưu trong bảng `students`, dữ liệu về lớp học được lưu trong bảng `classrooms`.

Hai bảng này đều có thuộc tính `classroom_id`, được dùng làm thuộc tính liên kết.

Như vậy, mệnh đề `INNER JOIN` sẽ là `inner join classrooms on students.classroom_id = classrooms.classroom_id`.

**Mã lệnh SQL:**

``` sql linenums="1"
-- Lập danh sách học sinh, kèm theo lớp và phòng học
select last_name, first_name, classroom_name, room
from students inner join classrooms on students.classroom_id = classrooms.classroom_id;
```

Với truy vấn trên, nếu những học sinh nào (trong bảng `students`) mà thuộc tính `classroom_id` không có giá trị hoặc giá trị không khớp với bảng `classrooms` thì sẽ không được trả về.

**Output:**

![Dữ liệu trả về khi liên kết hai bảng thông qua thuộc tính classroom_id](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6U_NSf19lqI55Hg7Q/root/content){loading=lazy width=600}

Ví dụ:

**Yêu cầu:** Cũng với danh sách vừa lập ở trên, hãy bổ sung mã lớp học.

**Phân tích:**

Thuộc tính mã lớp học `classroom_id` được lưu trong cả hai bảng: `classrooms` và `students`.

Để tránh sự nhầm lẫn, ta cần chỉ rõ tên bảng nào sẽ trích xuất thuộc tính `classroom_id`. Chẳng hạn, ta chọn bảng `students`.

Như vậy, trong mệnh đề `SELECT`, ta bổ sung: `students.classroom_id`. 

**Mã lệnh SQL:**

``` sql linenums="5"
-- Lập danh sách học sinh, kèm theo mã lớp, tên lớp và phòng học
select last_name, first_name, students.classroom_id, classroom_name, room
from students inner join classrooms on students.classroom_id = classrooms.classroom_id;
```

**Output:**

![Dữ liệu trả về khi bổ sung mã lớp classroom_id](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6VBmnDOGk550uER8Q/root/content){loading=lazy width=660}

## Truy vấn ba bảng

!!! note "Cú pháp truy vấn ba bảng bằng `INNER JOIN`"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
    FROM (bảng_1 INNER JOIN bảng_2 ON bảng_1.thuộc_tính_liên_kết_1 = bảng_2.thuộc_tính_liên_kết_2)
                INNER JOIN bảng_3 ON bảng_2.thuộc_tính_liên_kết_2 = bảng_3.thuộc_tính_liên_kết_3
    ```

**Yêu cầu:** In ra bảng điểm kiểm tra cuối kỳ môn Khoa học máy tính của tất cả học sinh.

**Phân tích:**

![Lược đồ toàn bộ cơ sở dữ liệu](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrt9uhcYkGep8Sb-DTQ/root/content){loading=lazy}

Quan sát lược đồ trên, ta thấy:

Dữ liệu về điểm kiểm tra cuối kỳ được lưu trong bảng `scores`, dữ liệu về môn học được lưu trong bảng `subjects`.

Hai bảng này đều có thuộc tính `subject_id`, được dùng làm thuộc tính liên kết.

Dữ liệu về học sinh được lưu trong bảng `students`, có thuộc tính `student_id` cũng làm thuộc tính liên kết.

Như vậy, mệnh đề `INNER JOIN` sẽ là `inner join subjects on scores.subject_id = subjects.subject_id inner join students on scores.student_id = students.student_id`.

**Mã lệnh SQL:**

``` sql linenums="1"
-- In ra bảng điểm môn Khoa học máy tính của tất cả học sinh
select last_name, first_name, subject_name, final_test
from scores inner join subjects on scores.subject_id = subjects.subject_id
            inner join students on scores.student_id = students.student_id
where subject_name = 'Khoa học máy tính';
```

**Output:**

![Dữ liệu trả về khi liên kết ba bảng](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6VS0u_fr3jZwFAz_Q/root/content){loading=lazy width=600}


??? info "Các loại liên kết khác"

    Ngoài `INNER JOIN`, còn có các loại liên kết khác như: `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`, `OUTER JOIN`, `CROSS JOIN`, `SELF JOIN`, `THETA JOIN`, `NATURAL JOIN`, `EQUI JOIN`, `SEMI JOIN`, `ANTI JOIN`, v.v...

## Sơ đồ tóm tắt

{!grade-11/topic-F1/mindmaps/retrieve-data-from-tables-part-3.mm.md!}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| liên kết | join |

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_select_3.sql){:target="_blank"}.
