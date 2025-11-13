---
icon: simple/postgresql
---

# Truy vấn dữ liệu - Phần 2

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh truy vấn SELECT để:
    
    - truy vấn dữ liệu thoả điều kiện cho trước từ một bảng.
    - sắp xếp dữ liệu trả về.

## Yêu cầu về cơ sở dữ liệu

Tiếp tục sử dụng cơ sở dữ liệu `school_db` đã tạo ở bài trước.

Nếu gặp trục trặc về cơ sở dữ liệu, hãy xoá `school_db` (1) và tạo lại từ đầu (2).
{ .annotate }

1.  1\. Trong **pgAdmin**, click chuột phải vào **school_db** và chọn **Delete**.

    2\. Trong hộp thoại hiện ra, chọn **Yes** để xác nhận xoá.

2.  Chạy tập tin [school_db_script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_script.sql){:target="_blank"} bằng pdAdmin của PostgreSQL.

## Truy vấn có điều kiện

Không phải lúc nào ta cũng muốn trích xuất tất cả mẫu tin, mà chỉ cần lọc ra những mẫu tin thỏa điều kiện nào đó.

Để lọc mẫu tin theo điều kiện, ta viết biểu thức điều kiện trong mệnh đề `WHERE`.

!!! note "Cú pháp truy vấn có điều kiện"

    ```sql
    SELECT thuộc_tính_1, thuộc tính_2,...
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

### So sánh dữ liệu kiểu số

Để so sánh dữ liệu kiểu số, ta dùng các toán tử `=`, `<>`, `>`, `>=`, `<`, `<=`.

Ví dụ:

**Yêu cầu:** Lập danh sách các học sinh nữ.

**Phân tích:**

Giới tính nữ được thể hiện ở thuộc tính `gender` với giá trị bằng `1`.

Như vậy, biểu thức điều kiện là `gender = 1`.

**Mã lệnh SQL:**

``` sql linenums="1"
-- Lập danh sách các học sinh nữ
select last_name, first_name, gender
from students
where gender = 1;
```

**Output:**

![Thuộc tính gender đều có giá trị 1 trong tất cả mẫu tin trả về](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6UrzeiUwcMfnhlXsA/root/content){loading=lazy width=420}

### So sánh dữ liệu kiểu chuỗi

Khi so sánh chuỗi, ta cần đặt chuỗi vào dấu nháy đơn `'chuỗi'`.

Ví dụ:

**Yêu cầu:** Lập danh sách các học sinh sinh tại thành phố Osaka, Nhật Bản.

**Phân tích:**

Nơi sinh được thể hiện ở thuộc tính `birth_place`.

Thành phố Osaka, Nhật Bản được lưu trong cơ sở dữ liệu với giá trị là `'Osaka, Japan'`.

Như vậy, biểu thức điều kiện là `birth_place = 'Osaka, Japan'`.

**Mã lệnh SQL:**

``` sql linenums="6"
-- Lập danh sách các học sinh sinh tại Osaka, Nhật Bản
select last_name, first_name, birth_place
from students
where birth_place = 'Osaka, Japan';
```

**Output:**

![Thuộc tính `birth_place` đều có giá trị 'Osaka, Japan' trong tất cả mẫu tin trả về](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6UtDmPGtnV_kOJ5FQ/root/content){loading=lazy width=420}

!!! warning "Lưu ý"
   
    Đối với chuỗi, chỉ một khoảng trắng dư thừa cũng dẫn đến sai lệch trong kết quả.

Toán tử bằng `=` dùng để so sánh chuỗi chính xác. Trong trường hợp muốn so sánh chuỗi một cách gần đúng hoặc tương đối, ta dùng toán tử `LIKE`.

Toán tử `LIKE` dùng để so sánh chuỗi theo một mẫu nào đó.

Hai ký tự đại diện được dùng kết hợp với toán tử `LIKE` là:

| Ký tự đại diện | Đại diện cho |
| --- | --- |
| `%` | 0 hoặc 1 hoặc nhiều ký tự |
| `_` | một kí tự duy nhất |

Ví dụ:

**Yêu cầu:** Lập danh sách các học sinh sinh tại Nhật Bản.

**Phân tích:**

Vì thuộc tính `birth_place` chứa cả thành phố và quốc gia, trong khi yêu cầu chỉ đề cập quốc gia, nên ta không thể dùng toán tử `=`, mà phải dùng toán tử `LIKE` để so sánh chuỗi.

Trước chuỗi `'Japan'`, ta không biết thành phố nào, gồm những ký tự gì, nên ta dùng ký tự đại diện `%`.

Như vậy, biểu thức điều kiện là `birth_place LIKE '%Japan'`.

**Mã lệnh SQL:**

``` sql linenums="11"
-- Lập danh sách các học sinh sinh tại Nhật Bản
select last_name, first_name, birth_place
from students
where birth_place like '%Japan'; -- (1)!
```
{ .annotate }

1.  `%Japan` nghĩa là chuỗi kết thúc bằng 'Japan', các ký tự trước 'Japan' là bất kỳ.

**Output:**

![Kết quả trả về có nhiều hơn một mẫu tin so với truy vấn trước đó](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6UyzZA-SDKVuAVltQ/root/content){loading=lazy width=420}

### Kết hợp nhiều điều kiện

Để kết hợp nhiều điều kiện, ta dùng toán tử logic `AND`, `OR`, `NOT`.

Ví dụ:

**Yêu cầu:** Lập danh sách các học sinh sinh trong tháng 11 và tháng 12.

**Phân tích:**

Mặc dù theo văn nói, "*sinh trong tháng 11 và tháng 12*", (nhưng) theo toán học, ta cần diễn đạt rằng: "*sinh trong tháng 11 hoặc trong tháng 12*". Bởi vì không có ai vừa sinh trong tháng 11 (lại) vừa sinh trong tháng 12.

Tháng sinh được trích xuất từ thuộc tính `birth_date` bằng hàm `extract(month from birth_date)`.

Như vậy, biểu thức điều kiện là `extract(month from birth_date) = 11 or extract(month from birth_date) = 12`.

**Mã lệnh SQL:**

``` sql linenums="16"
-- Lập danh sách các học sinh sinh trong tháng 1 và tháng 12
select last_name, first_name, birth_date
from students
where extract(month from birth_date) = 12 or extract(month from birth_date) = 1; -- (1)!
```
{ .annotate }

1.  Trong PostgreSQL, hàm `extract` dùng để trích xuất một phần của ngày tháng.

    `extract(month from birth_date)` sẽ trích xuất tháng từ `birth_date`.

**Output:**

![Tất cả mẫu tin trả về đều có thuộc tính `birth_date` là tháng 11 hoặc 12](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6U0Peo8QNyU3yEW-g/root/content){loading=lazy width=420}

## Sắp xếp dữ liệu trả về

Để sắp xếp dữ liệu trả về theo một hoặc nhiều thuộc tính, ta sử dụng từ khóa `ORDER BY`.

!!! note "Cú pháp sắp xếp dữ liệu trả về"

    ```sql
    SELECT thuộc_tính_1, thuộc_tính_2,...
    FROM tên_bảng
    WHERE biểu_thức_điều_kiện
    ORDER BY thuộc_tính_1 [ASC|DESC], thuộc_tính_2 [ASC|DESC],...
    ```

Trong đó, từ khóa chỉ định thứ tự sắp xếp là:

| Từ khóa | Thứ tự sắp xếp |
| --- | --- |
| `ASC` | tăng dần |
| `DESC` | giảm dần |

Nếu không chỉ định từ khóa, thứ tự mặc định là *tăng dần*.

`ORDER BY` chỉ sắp xếp dữ liệu trả về, không ảnh hưởng đến dữ liệu thực trong cơ sở dữ liệu.

Ví dụ:

**Yêu cầu:** Lập danh sách các học sinh mang họ Tào và họ Tư Mã. Danh sách phải được sắp xếp theo thứ tự: họ từ Z về A và và tên từ A đến Z.

**Phân tích:**

Họ Tào và họ Tư Mã được lưu trong thuộc tính `last_name`. Để lọc ra học sinh mang họ Tào và họ Tư Mã, ta dùng biểu thức điều kiện `last_name = 'Tào' or last_name = 'Tư Mã'`.

Để sắp xếp họ theo thứ tự Z-A, ta ghi `last_name DESC`, tức giảm dần. Để sắp xếp tên theo thứ tự A-Z, đồng nghĩa tăngg dần, ta không cần ghi rõ `ASC`.

Như vậy, mệnh đề sắp xếp là `order by last_name DESC, first_name`.

Với cách sắp xếp này, các mẫu tin có họ Tư Mã sẽ nằm trước các mẫu tin có họ Tào. Nếu cùng họ thì mới bắt đầu sắp xếp theo tên, tăng dần theo thứ tự bảng chữ cái.

**Mã lệnh SQL:**

``` sql linenums="21"
-- Lập danh sách các học sinh mang họ Tào và họ Tư Mã
-- Sắp xếp họ theo thứ tự Z-A (giảm dần) và tên theo thứ tự A-Z (tăng dần)
select last_name, first_name, birth_date
from students
where last_name = 'Tào' or last_name = 'Tư Mã'
order by last_name DESC, first_name;
```

**Output:**

![Kết quả sắp xếp dữ liệu](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr6UpZDxbSWU7k7gFZg/root/content){loading=lazy width=420}

## Sơ đồ tóm tắt

{!grade-11/topic-F1/mindmaps/retrieve-data-from-tables-part-2.mm.md!}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| điều kiện | criteria |
| giảm dần | descending |
| ký tự đại diện | wildcard character |
| tăng dần | ascending |

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/school_db_select_2.sql){:target="_blank"}.
