---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 2

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh SELECT để truy vấn dữ liệu từ một bảng mà thỏa điều kiện nào đó.


## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` như ở bài trước.

---

## Khái quát về truy vấn có điều kiện

Không phải lúc nào ta cũng muốn truy vấn tất cả mẫu tin, mà chỉ cần trích xuất những mẫu tin thỏa điều kiện nào đó.

!!! note "Mệnh đề `WHERE`"

    Dùng để trích xuất các mẫu tin theo điều kiện.

!!! note "Cú pháp SQL truy vấn có điều kiện"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2, ...
    FROM tên_bảng
    WHERE biểu_thức_điều_kiện
    ```

Biểu thức điều kiện gồm các toán tử như sau:

| Toán tử | Ý nghĩa |
| --- | --- |
| `=` | Bằng |
| `<>` | Khác |
| `>` | Lớn hơn |
| `>=` | Lớn hơn hoặc bằng |
| `<` | Nhỏ hơn |
| `<=` | Nhỏ hơn hoặc bằng |
| `LIKE` | Tương tự |
| `BETWEEN ... AND ...` | Nằm trong khoảng |
| `IN` | Nằm trong tập hợp |
| `and`, `or`, `not` | Kết hợp |

---

## Trích xuất dữ liệu kiểu số

Để trích xuất các mẫu tin dựa trên các thuộc tính chứa số, ta dùng các toán tử `=`, `<>`, `>`, `>=`, `<`, `<=`.

Ví dụ:  
**Yêu cầu:**

Lập danh sách các học sinh nữ. Danh sách chỉ cần có cột họ, tên và giới tính.

**Phân tích:**

Giới tính nữ được thể hiện ở thuộc tính `gender` bằng giá trị `1`.

Như vậy, biểu thức điều kiện là `gender = 1`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="1"
-- Trích xuất họ và tên của các học sinh có giới tính là nữ
select last_name, first_name, gender
from students
where gender = 1;
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Thuộc tính gender đều có giá trị 1 trong tất cả mẫu tin trả về](./images/select-2-students-where-gender.png){loading=lazy width=420}

!!! info "Vê kết quả trích xuất"

    Nếu bạn thấy trong bảng có nhân vật là nữ mà lại không có trong kết quả trích xuất thì lỗi có thể nằm ở dữ liệu (`gender` bị ghi sai giá trị thành `0`), chứ không phải do lỗi cú pháp lệnh.

---

## Trích xuất dữ liệu kiểu chuỗi chính xác

Để trích xuất các mẫu tin có giá trị chuỗi khớp hoàn toàn, ta dùng các toán tử `=` hoặc `<>`.

*Lưu ý:*  
*Giá trị của chuỗi phải được đặt trong dấu nháy đơn `' '`.

Ví dụ:  
**Yêu cầu:**

Lập danh sách các học sinh sinh tại thành phố Osaka, Nhật Bản. Danh sách chỉ cần có cột họ, tên và nơi sinh.

**Phân tích:**

Nơi sinh được thể hiện ở thuộc tính `birth_place`.

Thành phố Osaka, Nhật Bản được lưu trong cơ sở dữ liệu là `'Osaka, Japan'`.

Như vậy, biểu thức điều kiện là `birth_place = 'Osaka, Japan'`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="6"
-- Trích xuất họ và tên của các học sinh có nơi sinh là Osaka, Japan
select last_name, first_name, birth_place
from students
where birth_place = 'Osaka, Japan';
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Thuộc tính `birth_place` đều có giá trị 'Osaka, Japan' trong tất cả mẫu tin trả về](./images/select-2-students-where-birth-place.png){loading=lazy width=420}

!!! warning "Lưu ý"
   
    Đối với chuỗi, chỉ một khoảng trắng dư thừa cũng dẫn đến sai lệch trong kết quả.

---

## Trích xuất dữ liệu kiểu chuỗi theo mẫu

Khác với trích xuất chuỗi khớp hoàn toàn, *"theo mẫu"* có nghĩa là giá trị chuỗi chỉ khớp một phần hoặc tuân theo một quy tắc nhất định.

!!! note "Toán tử `LIKE`"

    Dùng để trích xuất các mẫu tin có giá trị chuỗi khớp một phần.

    Hai ký tự đại diện thường được dùng là:

    | Ký tự đại diện | Đại diện cho |
    | --- | --- |
    | `%` | chuỗi bất kỳ, kể cả chuỗi rỗng |
    | `_` | một ký tự duy nhất |

Ví dụ:  
**Yêu cầu:**

Lập danh sách các học sinh sinh tại Nhật Bản. Danh sách chỉ cần có cột họ, tên và giới tính.

**Phân tích:**

Vì thuộc tính `birth_place` chứa cả thành phố và quốc gia, trong khi yêu cầu chỉ đề cập quốc gia, nên ta không thể dùng toán tử `=`, mà phải dùng toán tử `LIKE` để so sánh chuỗi.

Trước chuỗi `'Japan'`, ta không biết thành phố nào, gồm những ký tự gì, nên ta dùng ký tự đại diện `%`.

Như vậy, biểu thức điều kiện là `birth_place LIKE '%Japan'`. `%Japan` nghĩa là chuỗi kết thúc bằng 'Japan', các ký tự trước 'Japan' là bất kỳ.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="11"
-- Trích xuất họ và tên của các học sinh có nơi sinh là Japan
select last_name, first_name, birth_place
from students
where birth_place like '%Japan';
```

2\. Chạy câu lệnh trên, kết quả như sau:

![Kết quả trả về có nhiều hơn một mẫu tin so với truy vấn trước đó](./images/select-2-students-where-like.png){loading=lazy width=420}

---

## Kết hợp nhiều điều kiện

Để kết hợp nhiều điều kiện, ta dùng toán tử logic `AND`, `OR`, `NOT`.

Ví dụ:  
**Yêu cầu:**

Lập danh sách các học sinh sinh trong tháng 11 và tháng 12. Danh sách chỉ cần có cột họ, tên và ngày sinh.

**Phân tích:**

Mặc dù theo văn nói, *"sinh trong tháng 11 và tháng 12"*, nhưng theo toán học, ta cần diễn đạt rằng: *"sinh trong tháng 11 hoặc trong tháng 12"*. Bởi vì không có ai vừa sinh trong tháng 11 (lại) vừa sinh trong tháng 12.

Tháng sinh được trích xuất từ thuộc tính `birth_date` bằng hàm `extract(month from birth_date)`.

Như vậy, biểu thức điều kiện là `extract(month from birth_date) = 11 or extract(month from birth_date) = 12`.

**Cách thực hiện:**

1\. Viết mã lệnh SQL.

```sql linenums="16"
-- Trích xuất họ và tên của các học sinh có tháng sinh là 11 hoặc 12
select last_name, first_name, birth_date
from students
where extract(month from birth_date) = 11 or extract(month from birth_date) = 12; -- (1)!
```
{ .annotate }

1.  Trong PostgreSQL, hàm `extract` dùng để lấy ra một phần của ngày tháng.

    `extract(month from birth_date)` sẽ lấy ra tháng từ `birth_date`.

2\. Chạy câu lệnh trên, kết quả như sau:

![Tất cả mẫu tin trả về đều có thuộc tính `birth_date` là tháng 11 hoặc 12](./images/select-2-students-where-or.png){loading=lazy width=420}

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/school_db_select_2.sql){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/retrieve-data-from-tables-part-2.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| điều kiện | criteria |
| ký tự đại diện | wildcard character |