---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 4

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh SELECT và INNER JOIN để trích xuất dữ liệu từ nhiều bảng.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` như ở bài trước.

---

## Truy vấn hai bảng

!!! note "Từ khóa `INNER JOIN`"

    Dùng để liên kết các mẫu tin từ hai bảng khi giá trị của các thuộc tính liên kết **khớp nhau**.
    
Hình dưới đây minh họa thao tác liên kết INNER JOIN.

![Minh họa thao tác liên kết INNER JOIN](images/inner-join.svg){loading=lazy width=420}

Nếu một mẫu tin trong bảng A mà không tìm thấy giá trị tương ứng trong bảng B thì sẽ bị loại bỏ khỏi kết quả trích xuất.

!!! note "Cú pháp SQL truy vấn hai bảng bằng `INNER JOIN`"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
    FROM bảng_1
    INNER JOIN bảng_2 ON bảng_1.thuộc_tính_liên_kết = bảng_2.thuộc_tính_liên_kết
    ```

Ví dụ:  
**Yêu cầu:**

Lập danh sách học sinh, kèm theo lớp và phòng học.

**Phân tích:**

Dữ liệu về học sinh được lưu trong bảng `students`, dữ liệu về lớp học được lưu trong bảng `classrooms`.

Hai bảng này đều có thuộc tính `classroom_id`, được dùng làm thuộc tính liên kết.

Như vậy, mệnh đề `INNER JOIN` sẽ là `inner join classrooms on students.classroom_id = classrooms.classroom_id`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="1"
-- Trích xuất họ, tên, lớp học và phòng học của các học sinh
select last_name, first_name, classroom_name, room
from students
inner join classrooms
on students.classroom_id = classrooms.classroom_id;
```

Với truy vấn trên, nếu những học sinh nào (trong bảng `students`) mà thuộc tính `classroom_id` không có giá trị hoặc giá trị không khớp với bảng `classrooms` thì sẽ không được trả về.

2\. Chạy câu lệnh trên, kết quả như sau:

![Dữ liệu trả về khi liên kết hai bảng thông qua thuộc tính classroom_id](./images/select-4-students-inner-join-2-tables.png){loading=lazy width=600}

---

## Viết tắt mệnh đề `ON`

!!! note "Từ khóa `USING`"

    Dùng để chỉ định thuộc tính liên kết của cả hai bảng.

    `USING` được dùng khi:

    - Thuộc tính liên kết ở hai bảng có **tên giống hệt nhau**.
    - Thuộc tính liên kết ở hai bảng có **cùng kiểu dữ liệu**.

`USING` làm cho câu truy vấn ngắn lại, giúp tập trung vào bản chất của việc liên kết.

Ví dụ:  
**Yêu cầu:**

Viết lại truy vấn trên bằng cách dùng `USING`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="6"
-- Dùng USING
select last_name, first_name, classroom_name, room
from students
inner join classrooms using(classroom_id);
```

2\. Chạy câu lệnh trên, kết quả vẫn không đổi.

---

## Chỉ định tên bảng

Khi tên của một thuộc tính xuất hiện trong hai bảng trở lên, ta cần chỉ định cụ thể tên bảng nào sẽ đi kèm với thuộc tính để tránh gây ra sự mơ hồ cho hệ thống.

Ví dụ:  
**Yêu cầu:**

Cũng với truy vấn trên, hãy bổ sung mã lớp học.

**Phân tích:**

Thuộc tính mã lớp học `classroom_id` được lưu trong cả hai bảng: `classrooms` và `students`.

Để tránh sự nhầm lẫn, ta cần chỉ rõ tên bảng nào sẽ trích xuất thuộc tính `classroom_id`. Chẳng hạn, ta chọn bảng `students`.

Như vậy, trong mệnh đề `SELECT`, ta bổ sung: `students.classroom_id`. 

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="11"
-- Trích xuất họ, tên, mã lớp học, tên lớp học và phòng học của các học sinh
select last_name, first_name, students.classroom_id, classroom_name, room
from students
inner join classrooms using(classroom_id);
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Dữ liệu trả về khi bổ sung mã lớp classroom_id](./images/select-4-students-inner-join-specify-table-name.png){loading=lazy width=660}

---

## Truy vấn ba bảng

!!! note "Cú pháp SQL truy vấn ba bảng bằng `INNER JOIN`"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
    FROM (bảng_1
    INNER JOIN bảng_2 ON bảng_1.thuộc_tính_liên_kết = bảng_2.thuộc_tính_liên_kết
    INNER JOIN bảng_3 ON bảng_2.thuộc_tính_liên_kết = bảng_3.thuộc_tính_liên_kết
    ```

Ví dụ:  
**Yêu cầu:**

In ra bảng điểm kiểm tra cuối kỳ môn Khoa học máy tính của tất cả học sinh.

**Phân tích:**

![Lược đồ toàn bộ cơ sở dữ liệu](./images/part-4-whole-database-relationship-diagram.png){loading=lazy}

Quan sát lược đồ trên, ta thấy:

Dữ liệu về điểm kiểm tra cuối kỳ được lưu trong bảng `scores`, dữ liệu về môn học được lưu trong bảng `subjects`.

Hai bảng này đều có thuộc tính `subject_id`, được dùng làm thuộc tính liên kết (khóa chính và khóa ngoại).

Dữ liệu về học sinh được lưu trong bảng `students`, có thuộc tính `student_id` cũng làm thuộc tính liên kết (khóa chính và khóa ngoại).

Như vậy, mệnh đề `INNER JOIN` sẽ là `inner join subjects on scores.subject_id = subjects.subject_id inner join students on scores.student_id = students.student_id`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="16"
-- Trích xuất họ, tên, tên môn học và điểm thi cuối kỳ của các học sinh trong môn Khoa học máy tính
select last_name, first_name, subject_name, final_test
from scores
inner join subjects on scores.subject_id = subjects.subject_id
inner join students on scores.student_id = students.student_id
where subject_name = 'Khoa học máy tính';
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Dữ liệu trả về khi liên kết ba bảng](./images/select-4-students-inner-join-3-tables.png){loading=lazy width=600}

??? info "Các loại liên kết khác"

    Ngoài `INNER JOIN`, còn có các loại liên kết khác như: `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`, `OUTER JOIN`, `CROSS JOIN`, `SELF JOIN`, `THETA JOIN`, `NATURAL JOIN`, `EQUI JOIN`, `SEMI JOIN`, `ANTI JOIN`, v.v...

---

3\. Ta cũng có thể dùng `USING` cho truy vấn trên.

```sql linenums="23"
-- Dùng USING
select last_name, first_name, subject_name, final_test
from scores
inner join subjects using(subject_id)
inner join students using(student_id)
where subject_name = 'Khoa học máy tính';
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/school_db_select_4.sql){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/retrieve-data-from-tables-part-4.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| liên kết | join |
