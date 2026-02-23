---
icon: simple/postgresql
---

# Thực hành truy vấn dữ liệu - Phần 2

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn truy vấn cơ sở dữ liệu Thủy Hử.

## Yêu cầu về cơ sở dữ liệu

1\. Tải về [tập tin water-margin-script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/water-margin-script.sql){:target="_blank"}.

![Cách tải tập tin .sql trên GitHub](./images/practice-2-download-from-github.png){loading=lazy}

2\. Mở tập tin bằng pgAdmin của PostgreSQL.

3\. Lần lượt chạy từng đoạn mã trong tập tin để tạo cơ sở dữ liệu `water_margin` [^1].

[^1]: Dữ liệu được tham khảo từ Internet.

    Dữ liệu có thể chưa đúng hoàn toàn theo nguyên tác. Nếu bạn phát hiện sai sót, xin vui lòng góp ý để chúng tôi điều chỉnh.

---

## Lược đồ cơ sở dữ liệu

Lược đồ cơ sở dữ liệu `water_margin` chỉ gồm một bảng chứa dữ liệu của các nhân vật hảo hán.

figures(<ins>id</ins>, name, ten, nickname, biet_danh, biet_danh_giai_nghia, type_of_destiny_star, destiny_title, sao_chieu_menh, rank, position_role, chuc_vu_vai_tro, is_historical_status, merits_activities)

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `id` | Mã định danh dùng làm khóa chính, đồng thời cũng là số thứ tự thực tế của các nhân vật. |
| `name` | Tên thật của nhân vật bằng tiếng Anh |
| `ten` | Tên thật của nhân vật bằng tiếng Việt |
| `nickname`| Biệt danh bằng tiếng Anh |
| `biet_danh` | Biệt danh bằng tiếng Việt |
| `biet_danh_giai_nghia` | Giải thích ý nghĩa của biệt danh |
| `type_of_destiny_star` | Phân loại sao chiếu mệnh: `heavenly spirit` (thiên cang), `earthly fiend` (địa sát) |
| `destiny_title` | Sao chiếu mệnh bằng tiếng Anh |
| `sao_chieu_menh` | Sao chiếu mệnh bằng tiếng Việt |
| `rank` | Thứ hạng trong 108 người |
| `position_role` | Mô tả chức vụ, vai trò bằng tiếng Anh | 
| `chuc_vu_vai_tro` | Mô tả chức vụ, vai trò bằng tiếng Việt |
| `is_historical_status` | Là nhân vật có thật hay hư cấu: `historical`, `fiction`, `debated` |
| `merits_activities` | Một số chiến công hoặc hoạt động liên quan |

---

## Truy vấn 1

### Đề bài

Có tổng cộng bao nhiêu hảo hán được ghi nhận trong cơ sở dữ liệu?

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**
    
    Mỗi mẫu tin là dữ liệu của một hảo hán.

    Vì yêu cầu là thống kê số lượng nên ta dùng hàm `count(*)` để đếm số mẫu tin.

    Ta có thể đặt tên cho cột này là `"Số hảo hán"` bằng từ khóa `AS`.

    **2\. Xác định bảng:**
    
    Toàn bộ dữ liệu đều nằm trong bản `figures`.

??? tip "Viết truy vấn"

    ```sql linenums="2"
    SELECT
        count(*) as "Số hảo hán"
    FROM
        figures;
    ```

---

## Truy vấn 2

### Đề bài

Có bao nhiêu hảo hán là địa sát?

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**
    
    Tương tự truy vấn trên, ta dùng hàm `count(*)` để đếm số mẫu tin, và đặt tên cho cột này là `"Số lượng địa sát"` bằng từ khóa `AS`.

    **2\. Xác định bảng:**

    Toàn bộ dữ liệu đều nằm trong bảng `figures`.
    
    **3\. Xác định điều kiện:**

    Giá trị phân loại "thiên cang" hay "địa sát" nằm ở cột `type_of_destiny_star`.

    Do đó, điều kiện trích xuất các mẫu tin là: `type_of_destiny_star = 'earthly fiend'`.

??? tip "Viết truy vấn"

    ```sql linenums="8"
    SELECT
        count(*) as "Số lượng địa sát"
    FROM
        figures
    WHERE
        type_of_destiny_star = 'earthly fiend';
    ```

---

## Truy vấn 3

### Đề bài

Thống kê số lượng của mỗi loại sao chiếu mạng: thiên cang, địa sát và không phân loại.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị hai cột: cột `type_of_destiny_star` dùng để hiển thị tên của từng loại, cột `count(*)` dùng để đếm số mẫu tin ứng với mỗi loại.

    **2\. Xác định bảng:**
    
    Toàn bộ dữ liệu đều nằm trong bảng `figures`.
    
    **3\. Gom nhóm:**
    
    Ta cần gom các mẫu tin có cùng giá trị trong cột `type_of_destiny_star` lại thành các nhóm (các loại sao chiếu mạng): `GROUP BY type_of_destiny_star`
    
??? tip "Viết truy vấn"

    ```sql linenums="16"
    SELECT
        type_of_destiny_star,
        count(*) as "Số lượng"
    FROM
        figures
    GROUP BY
        type_of_destiny_star;
    ```

---

## Truy vấn 4

### Đề bài

Hãy trích xuất toàn bộ dữ liệu của 10 mẫu tin cuối cùng.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**
    
    Theo yêu cầu, ta cần hiển thị toàn bộ các cột. Do đó, ta dùng dấu `*`.

    **2\. Xác định bảng:**
    
    Toàn bộ dữ liệu đều nằm trong bảng `figures`.

    **3\. Xác định điều kiện:**

    Vì bảng này có 109 mẫu tin gồm Tiều Cái và 108 vị hảo hán nên ta có thể dùng `OFFSET` bỏ qua 99 mẫu tin đầu tiên. Hệ thống sẽ bắt đầu lấy dữ liệu từ mẫu tin 100 đến mẫu tin 109.

??? tip "Viết truy vấn"

    ```sql linenums="25"
    SELECT *
    FROM figures
    OFFSET 99;
    ```

---

## Truy vấn 5

### Đề bài

Lập danh sách các hảo hán là thiên cang. Danh sách phải có biệt danh và tên thật, đồng thời sắp xếp theo thứ tự bảng chữ cái đối với tên thật.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị các cột: `biet_danh`, `ten` và `type_of_destiny_star`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `figures`.
    
    **3\. Xác định điều kiện:**

    Điều kiện để trích xuất dữ liệu là: `type_of_destiny_star = 'heavenly spirit'`.

    **4\. Sắp xếp thứ tự:**

    Sắp xếp tăng dần theo cột `ten`. Không cần viết `ASC` do thứ tự tăng dần là mặc định.

??? tip "Viết truy vấn"

    ```sql linenums="30"
    SELECT
        biet_danh,
        ten,
        type_of_destiny_star
    FROM
        figures
    WHERE
        type_of_destiny_star = 'heavenly spirit'
    ORDER BY
        ten;
    ```

---


## Truy vấn 6

### Đề bài

Hãy cho biết những ai được xếp vào hàng ngũ hổ tướng.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị các cột: `biet_danh`, `ten` và `chuc_vu_vai_tro`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `figures`.
    
    **3\. Xác định điều kiện:**

    Vì chuỗi "ngũ hổ tướng" có thể nằm trong chuỗi dữ liệu dài nên ta không thể dùng toán tử `=` mà phải dùng toán tử `LIKE` kết hợp với ký tự đại diện `%`.

    Do đó, điều kiện để trích xuất dữ liệu là: `chuc_vu_vai_tro LIKE '%ngũ hổ tướng%'`.

??? tip "Viết truy vấn"

    ```sql linenums="42"
    SELECT
        biet_danh,
        ten,
        chuc_vu_vai_tro
    FROM
        figures
    WHERE
        chuc_vu_vai_tro LIKE '%ngũ hổ tướng%';
    ```

---


## Truy vấn 7

### Đề bài

Hãy cho biết những người mang biệt danh sau có tên thật và sao chiếu mạng là gì: Mẫu Đại Hổ, Mẫu Dạ Xoa và Nhất Trượng Thanh.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị các cột: `biet_danh`, `ten` và `sao_chieu_menh`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `figures`.
    
    **3\. Xác định điều kiện:**

    Thay vì dùng toán tử `OR`: `biet_danh = 'A' OR biet_danh = 'B' OR biet_danh = 'C'`, ta dùng toán tử `IN` để kiểm tra giá trị của `biet_danh` có khớp với phần tử nào trong danh sách ('A', 'B', 'C') hay không.
    
    Như vậy, điều kiện để trích xuất dữ liệu là: `biet_danh IN ('Mẫu Đại Hổ', 'Mẫu Dạ Xoa', 'Nhất Trượng Thanh')`.

??? tip "Viết truy vấn"

    ```sql linenums="42"
    SELECT
        biet_danh,
        ten,
        sao_chieu_menh	
    FROM
        figures
    WHERE
        biet_danh IN ('Mẫu Đại Hổ', 'Mẫu Dạ Xoa', 'Nhất Trượng Thanh');
    ```
---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/retrieve-data-from-tables-practice-2.sql){target="_blank"}