---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 4

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh truy vấn SELECT có dùng hàm tổng hợp và mệnh đề gom nhóm dữ liệu.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` đã tạo ở bài trước.

Nếu gặp trục trặc về cơ sở dữ liệu, hãy xoá `school_db` (1) và tạo lại từ đầu (2).
{ .annotate }

1.  1\. Trong **pgAdmin**, click chuột phải vào **school_db** và chọn **Delete**.

    2\. Trong hộp thoại hiện ra, chọn **Yes** để xác nhận xoá.

2.  Chạy tập tin [school_db_script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_script.sql){:target="_blank"} bằng pdAdmin của PostgreSQL.

## Các hàm tổng hợp

**Hàm tổng hợp** là hàm dùng để thực hiện các phép toán tổng hợp trên một tập hợp các giá trị và trả về một giá trị duy nhất.

Một số phép toan tổng hợp phổ biến là:

| Hàm | Giá trị trả về |
| --- | --- |
| `SUM` | Tổng của một cột |
| `AVG` | Trung bình cộng của một cột |
| `COUNT` | Số lượng giá trị của một cột |
| `MAX` | Giá trị lớn nhất của một cột |
| `MIN` | Giá trị nhỏ nhất của một cột |

!!! note "Cú pháp hàm COUNT"

    ```sql
    SELECT thuộc_tính, tên_hàm(tên_cột)
    FROM tên_bảng
    [WHERE điều_kiện]
    [GROUP BY thuộc_tính_cần_gom_nhóm]
    [HAVING điều_kiện]
    ```

Các hàm tổng hợp thường được sử dụng cùng với mệnh đề `GROUP BY` trong truy vấn `SELECT`.

`GROUP BY` được dùng để gom nhóm các mẫu tin theo giá trị của một hoặc nhiều cột.

`HAVING` được dùng để lọc các nhóm dựa trên điều kiện.

## Hàm COUNT

Để đếm số lượng giá trị của một cột, ta dùng hàm `COUNT`. Hàm này trả về số lượng giá trị khác `NULL` của cột đó.

### Số lượng tổng thể

Ví dụ:

**Yêu cầu:** Tính số lượng mẫu tin hiện có trong bảng `scores`. Biết rằng không được dùng `SELECT *`.

**Phân tích:**

Trong bảng `scores`, thuộc tính `student_id` thuộc khoá chính (1), nghĩa là không được để rỗng.
{ .annotate }

1.  Khoá chính của bảng `scores` là cặp thuộc tính `student_id` và `subject_id`.

Do đó, ta có thể dùng hàm `COUNT` để đếm các giá trị trong cột `student_id`.

**Mã lệnh SQL:**

``` sql linenums="1"
-- Tính số lượng mẫu tin trong bảng scores
select count(student_id) as "Số lượng" -- (1)!
from scores;
```
{ .annotate }

1.  Từ khoá `as` dùng để đặt tên cho một cột.

**Output:**

![Số lượng mẫu tin trong bảng scores](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9BE9ycfeoHkQrr-tg/root/content){loading=lazy width=300}

### Kết hợp với WHERE

Ví dụ:

**Yêu cầu:** Cho biết số lượng điểm cuối kỳ từ 5 trở lên ở tất cả các môn.

**Phân tích:**

Trong số tất cả 66 mẫu tin của bảng `scores`, ta chỉ đếm số mẫu tin mà điểm cuối kỳ từ 5 trở lên.

Như vậy, ta vẫn giữ lại truy vấn trên, nhưng thêm mệnh đề `WHERE` để lọc ra các mẫu tin thỏa điều kiện.

**Mã lệnh SQL:**

``` sql linenums="5"
-- Tính số lượng điểm cuối kỳ từ 5 trở lên ở tất cả các môn
select count(student_id)
from scores
where final_test >= 5;
```

**Output:**

![Số lượng mẫu tin có điểm cuối kỳ từ 5 trở lên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9BFwMAfhuCLRtlt8w/root/content){loading=lazy width=300}

### Kết hợp với WHERE và GROUP BY

Ví dụ:

**Yêu cầu:** Cho biết số lượng điểm cuối kỳ từ 5 trở lên theo từng môn.

**Phân tích:**

Để biết số lượng điểm cuối kỳ từ 5 trở lên theo từng môn, ta cần gom nhóm các mẫu tin theo mã môn học `subject_id`.

Như vậy, ta thêm mệnh đề `GROUP BY` vào truy vấn trên: `group by subject_id`. Đồng thời, thêm cột `subject_id` vào mệnh đề `SELECT`.

**Mã lệnh SQL:**

``` sql linenums="10"
-- Tính số lượng điểm cuối kỳ từ 5 trở lên theo từng môn
select subject_id, count(student_id) 
from scores
where final_test >= 5
group by subject_id;
```

**Output:**

![Số lượng mẫu tin có điểm cuối kỳ từ 5 trở lên theo từng môn](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9BQS-1xZ92gK30SUw/root/content){loading=lazy width=300}

!!! note "Lưu ý"

    Khi trong mệnh đề `SELECT` vừa có thuộc tính vừa có hàm tổng hợp, ta cần thực hiện gom nhóm bằng `GORUP BY` đối với các thuộc tính.

### Kết hợp với WHERE, GROUP BY và HAVING

Ví dụ:

**Yêu cầu:** Cho biết những môn nào đạt số lượng hơn 10 học sinh mà có điểm cuối kỳ từ 5 trở lên.

**Phân tích:**

Vẫn là truy vấn trên, nhưng chỉ lấy những môn mà số lượng hơn 10.

Như vậy, ta sẽ thêm mệnh đề `HAVING`: `having count(student_id) > 10`.

**Mã lệnh SQL:**

``` sql linenums="16"
-- Tính số lượng điểm cuối kỳ từ 5 trở lên theo từng môn, chỉ lấy môn nào có số lượng hơn 10
select subject_id, count(student_id) as "Số lượng"
from scores
where final_test >= 5
group by subject_id
having count(student_id) > 10;
```

**Output:**

![Các môn có số lượng điểm trên trung bình đạt hơn 10 học sinh](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9BUbL8m_S48ZVWYeg/root/content){loading=lazy width=300}

!!! note "Lưu ý"

    Mệnh đề `HAVING` chỉ có thể được sử dụng sau mệnh đề `GROUP BY`.

    Phân biệt `WHERE` và `HAVING`:

    | | WHERE | HAVING |
    | --- | --- | --- |
    | Công dụng | Lọc các mẫu tin trước khi gom nhóm | Lọc các nhóm sau khi gom nhóm |
    | Điều kiện | Áp dụng cho từng mẫu tin | Áp dụng cho từng nhóm |

## Hàm AVG

Để tính trung bình cộng của một cột, ta dùng hàm `AVG`.

### Kết hợp với GROUP BY

Ví dụ:

**Yêu cầu:** Nhằm đánh giá chất lượng giảng dạy, hãy tính giá trị trung bình của cột điểm cuối kỳ theo từng môn. Kết quả trả về phải có tên môn học cụ thể, chứ không phải mã môn.

**Phân tích:**

![Lược đồ toàn bộ cơ sở dữ liệu](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNrt9uhcYkGep8Sb-DTQ/root/content){loading=lazy}

Quan sát lược đồ trên, ta thấy điểm cuối kỳ được lưu trong bảng `scores`, tên môn học được lưu trong bảng `subjects`.

Do đó, ta liên kết hai bảng này bằng `INNER JOIN`.

Để biết điểm trung bình của tất cả học sinh trong trường, ta dùng hàm `AVG` đối với cột `final_test`.

Để phân theo từng môn, ta thực hiện gom nhóm các mẫu tin theo tên môn.

Như vậy, mệnh đề `GROUP BY` sẽ là `group by subject_name`.

**Mã lệnh SQL:**

``` sql linenums="23"
-- Tính giá trị trung bình của cột điểm cuối kỳ theo từng môn
-- Kết quả trả về phải có tên môn
select subject_name, avg(final_test) as "Điểm trung bình"
from scores inner join subjects on scores.subject_id = subjects.subject_id
group by subject_name;
```

**Output:**

![Giá trị trung bình điểm cuối kỳ](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9Bc0d2c0JHeaWaCjw/root/content){loading=lazy width=300}

### Kết hợp với WHERE và GROUP BY

Ví dụ: 

**Yêu cầu:** Tính giá trị trung bình của cột điểm cuối kỳ cho riêng môn Khoa học máy tính.

**Phân tích:**

Truy vấn này tương tự truy vấn trên, nhưng chỉ lấy môn Khoa học máy tính.

Như vậy, ta thêm mệnh đề `WHERE` vào truy vấn: `where subject_name = 'Khoa học máy tính'`.

**Mã lệnh SQL:**

``` sql linenums="29"
-- Tính giá trị trung bình của cột điểm cuối kỳ cho riêng môn Khoa học máy tính
select subject_name, avg(final_test) as "Điểm trung bình"
from scores inner join subjects on scores.subject_id = subjects.subject_id
where subject_name = 'Khoa học máy tính'
group by subject_name;
```

**Output:**

![Giá trị trung bình điểm cuối kỳ môn Khoa học máy tính](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9Bhvf63hFVc8YwCkw/root/content){loading=lazy width=360}

### Kết hợp với GROUP BY và HAVING

Ví dụ: 

**Yêu cầu:** Lọc ra các môn mà giá trị trung bình của cột điểm cuối kỳ lớn hơn 7.

**Phân tích:**

Truy vấn này tương tự truy vấn trên, nhưng không lấy môn Khoa học máy tính, mà lấy các môn nào có giá trị trung bình lớn hơn 7.

Nhu vậy, ta bỏ mệnh đề `WHERE` của truy vấn trên, thay bằng mệnh đề `HAVING`: `having avg(final_test) > 7`.

**Mã lệnh SQL:**

``` sql linenums="35"
-- Lọc ra các môn mà giá trị trung bình của cột điểm cuối kỳ lớn hơn 7
select subject_name, avg(final_test) as "Điểm trung bình"
from scores inner join subjects on scores.subject_id = subjects.subject_id
group by subject_name
having avg(final_test) > 7;
```

**Output:**

![Các môn có giá trị trung bình điểm cuối kỳ trên 7](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9BlpyE89tOE-QvmqA/root/content){loading=lazy width=360}

## Sơ đồ tóm tắt

{!grade-11/topic-F1/mindmaps/retrieve-data-from-tables-part-4.mm.md!}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| gom nhóm | group by |
| hàm tổng hợp | aggregate function |

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_select_4.sql){:target="_blank"}.
