---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 5

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh SELECT có dùng hàm COUNT() và mệnh đề gom nhóm dữ liệu.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` như ở bài trước.

---

## Các hàm tổng hợp

**Hàm tổng hợp** là hàm dùng để thực hiện các thống kê tổng hợp trên một tập hợp các giá trị và trả về một giá trị duy nhất.

Bảng sau liệt kê một số hàm tổng hợp phổ biến.

| Hàm | Giá trị trả về |
| --- | --- |
| `SUM` | Tổng của một cột |
| `AVG` | Trung bình cộng của một cột |
| `COUNT` | Số lượng giá trị của một cột |
| `MAX` | Giá trị lớn nhất của một cột |
| `MIN` | Giá trị nhỏ nhất của một cột |

!!! note "Cú pháp SQL có hàm tổng hàm"

    ```sql
    SELECT thuộc_tính, tên_hàm(thuộc_tính)
    FROM tên_bảng
    [WHERE điều_kiện]
    [GROUP BY thuộc_tính_cần_gom_nhóm]
    [HAVING điều_kiện]
    ```

Hàm tổng hợp thường được sử dụng **kết hợp với mệnh đề `GROUP BY`** để thực hiện thống kê theo từng nhóm đối tượng.

Ví dụ:  
Tính điểm trung bình theo từng lớp hoặc theo từng môn.

!!! note "Mệnh đề `GROUP BY` và `HAVING`"

    `GROUP BY` được dùng để **gom nhóm** các mẫu tin theo giá trị của một hoặc nhiều **thuộc tính**.
    
    `HAVING` được dùng để **lọc** các nhóm theo **điều kiện**.

---

## Thống kê số lượng

!!! note "Hàm `COUNT()`"

    Dùng để đếm số lượng giá trị khác `NULL` của một thuộc tính.

Ví dụ:  
**Yêu cầu:**

Cho biết số lượng mẫu tin hiện có trong bảng `scores`.

**Phân tích:**

Để đếm số lượng mẫu tin, ta dùng hàm `COUNT(*)`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="1"
-- Đếm số lượng mẫu tin trong bảng scores
select count(*) as "Số lượng"
from scores;
```
{ .annotate }

1.  Từ khóa `as` dùng để đặt tên cho một thuộc tính.

2\. Chạy câu lệnh trên, kết quả như sau:

![Số lượng mẫu tin trong bảng scores](./images/select-5-count.png){loading=lazy width=300}

---

## Kết hợp với `WHERE`

Ví dụ:  
**Yêu cầu:**

Cho biết số lượng điểm kiểm tra cuối kỳ từ 5 trở lên tính chung tất cả các môn.

**Phân tích:**

Trong tổng cộng 36 mẫu tin của bảng `scores`, ta chỉ đếm số mẫu tin mà điểm cuối kỳ từ 5 trở lên.

Như vậy, ta vẫn giữ lại truy vấn trên, và thêm mệnh đề `WHERE` để lọc ra các mẫu tin thỏa điều kiện.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="5"
-- Đếm số lượng điểm cuối kỳ từ 5 trở lên tính chung các môn
select count(*) as "Số lượng"
from scores
where final_test >= 5;
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Số lượng mẫu tin có điểm cuối kỳ từ 5 trở lên](./images/select-5-count-where.png){loading=lazy width=300}

---

## Kết hợp với `WHERE` và `GROUP BY`

Ví dụ:  
**Yêu cầu:**

Cho biết số lượng điểm cuối kỳ từ 5 trở lên theo từng môn.

**Phân tích:**

Để biết số lượng điểm cuối kỳ từ 5 trở lên theo từng môn, ta cần gom nhóm các mẫu tin theo mã môn học `subject_id`.

Như vậy, ta thêm mệnh đề `GROUP BY` vô truy vấn trên: `group by subject_id`.

Đồng thời, thêm thuộc tính `subject_id` vô mệnh đề `SELECT` để giúp nhận biết mỗi số lượng trong kết quả là của môn học nào.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="10"
-- Đếm số lượng điểm cuối kỳ từ 5 trở lên theo từng môn
select subject_id, count(*) as "Số lượng"
from scores
where final_test >= 5
group by subject_id;
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Số lượng mẫu tin có điểm cuối kỳ từ 5 trở lên theo từng môn](./images/select-5-count-where-group-by.png){loading=lazy width=300}

!!! note "Về việc viết truy vấn có `GROUP BY`"

    Các thuộc tính **nằm ngoài** hàm tổng hợp phải được khai báo trong `GROUP BY`.

---

## Kết hợp với `WHERE`, `GROUP BY` và `HAVING`

Ví dụ:  
**Yêu cầu:**

Cho biết những môn nào đạt số lượng hơn 10 học sinh mà có điểm cuối kỳ từ 5 trở lên.

**Phân tích:**

Vẫn là truy vấn trên, và chỉ lấy những môn mà số lượng hơn 10.

Như vậy, ta cần thêm mệnh đề `HAVING`: `having count(student_id) > 10`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="16"
-- Đếm số lượng điểm cuối kỳ từ 5 trở lên theo từng môn, chỉ lấy môn nào có số lượng học sinh lớn hơn 10
select subject_id, count(*) as "Số lượng"
from scores
where final_test >= 5
group by subject_id
having count(*) > 10;
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Các môn có số lượng điểm trên trung bình đạt hơn 10 học sinh](./images/select-5-count-where-group-by-having.png){loading=lazy width=300}

---

## So sánh `WHERE` và `GROUP BY`

Bảng sau giúp phân biệt `WHERE` và `HAVING`.

| Đặc điểm | `WHERE` | `HAVING` |
| --- | --- | --- |
| Công dụng | Lọc các mẫu tin trước khi gom nhóm | Lọc các nhóm sau khi gom nhóm |
| Đối tượng tác động | Từng mẫu tin riêng lẻ | Kết quả của một nhóm hoặc hàm tổng hợp |
| Hàm tổng hợp | Không được phép dùng | Được phép dùng |
| Vị trí trong mã lệnh | Đứng trước `GROUP BY` | Đứng sau `GROUP BY` |

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/school_db_select_5.sql){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/retrieve-data-from-tables-part-5.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| gom nhóm | group by |
| hàm tổng hợp | aggregate function |
