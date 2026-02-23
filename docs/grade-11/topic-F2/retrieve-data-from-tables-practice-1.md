---
icon: simple/postgresql
---

# Thực hành truy vấn dữ liệu - Phần 1

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn truy vấn cơ sở dữ liệu triều Nguyễn.

## Yêu cầu về cơ sở dữ liệu

1\. Tải về [tập tin nguyen-dynasty-script.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/nguyen-dynasty-script.sql){:target="_blank"}.

![Cách tải tập tin .sql trên GitHub](./images/practice-1-download-from-github.png){loading=lazy}

2\. Mở tập tin bằng pgAdmin của PostgreSQL.

3\. Lần lượt chạy từng đoạn mã trong tập tin để tạo cơ sở dữ liệu `nguyen_dynasty` [^1].

[^1]: Dữ liệu được tham khảo từ Internet.

    Dữ liệu có thể chưa đúng hoàn toàn theo lịch sử. Nếu bạn phát hiện sai sót, xin vui lòng góp ý để chúng tôi điều chỉnh.

---

## Lược đồ cơ sở dữ liệu

Lược đồ cơ sở dữ liệu `nguyen_dynasty` chỉ gồm một bảng chứa dữ liệu của các vị vua.

vua(<ins>id</ins>, ten_huy, ten_huy_khac, nam_sinh, nam_mat, nien_hieu, mieu_hieu, thuy_hieu, tai_vi_bat_dau, tai_vi_ket_thuc, vo_chinh, cha, me, con_dai_dien, so_con_trai, so_con_gai)

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `id` | Mã định danh dùng làm khóa chính, đồng thời cũng là số thứ tự thực tế của các vị vua. |
| `ten_huy` | Tên húy: tên thật của vua, kỵ húy |
| `ten_huy_khac` | Tên húy khác: tên sau khi lên ngôi, cũng kỵ húy |
| `nam_sinh`| Năm sinh |
| `nam_mat` | Năm mất |
| `nien_hieu` | Niên hiệu: tên kỷ nguyên tự đặt lúc còn sống |
| `mieu_hieu` | Miếu hiệu: do vua kế vị hoặc triều thần đặt cho sau khi mất |
| `thuy_hieu` | Thụy hiệu: dài, mô tả phẩm chất, cũng do vua kế vị hoặc lễ quan đặt cho sau khi mất |
| `tai_vi_bat_dau` | Năm lên ngôi |
| `tai_vi_ket_thuc` | Năm kết thúc tại vị |
| `vo_chinh` | Tên của người mà có thể xem là vợ chính của vua |
| `cha` | Tên cha của vua |
| `me` | Tên mẹ của vua | 
| `con_dai_dien` | Tên một hoặc một vài người con nổi bật |
| `so_con_trai` | Số người con trai của vua (mang tính ước lượng) |
| `so_con_gai` | Số người con gái của vua (mang tính ước lượng) |

---

## Truy vấn 1

### Đề bài

Hãy cho biết số vị vua thuộc triều đại nhà Nguyễn.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**    
    
    Vì yêu cầu của đề bài là thống kê số lượng nên ta sử dụng hàm `count(*)` để đếm số mẫu tin.

    Ta có thể đặt tên cho cột này là `"Số vị vua"` bằng từ khóa `AS`.

    **2\. Xác định bảng:**`vua`.

??? tip "Viết truy vấn"

    ```sql linenums="2"
    SELECT
        count(*) as "Số vị vua"
    FROM
        vua;
    ```

---

## Truy vấn 2

### Đề bài

Hãy trích xuất toàn bộ thông tin của ba vị vua đầu tiên.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**
    
    Theo yêu cầu, ta cần hiển thị toàn bộ các cột. Do đó, ta dùng dấu `*`.

    **2\. Xác định bảng:**

    Toàn bộ dữ liệu đều nằm trong bảng `vua`.
    
    **3\. Xác định điều kiện:**

    Không có điều kiện trích xuất dữ liệu. Chỉ có ràng buộc về số lượng là 3 mẫu tin đầu tiên.

    Do đó, ta dùng `LIMIT 3`.

??? tip "Viết truy vấn"

    ```sql linenums="8"
    SELECT *
    FROM vua
    LIMIT 3;
    ```

---

## Truy vấn 3

### Đề bài

Hãy cho biết tên thật của vua Thành Thái.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị các cột: niên hiệu của vua là cột `nien_hieu`, tên thật của vua gồm cột `ten_huy` và cột `ten_huy_khac`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `vua`.
    
    **3\. Xác định điều kiện:**
    
    Chỉ trích xuất các mẫu tin mà giá trị tại cột niên hiệu là `'Thành Thái'`: `nien_hieu = 'Thành Thái'`.
    
??? tip "Viết truy vấn"

    ```sql linenums="13"
    SELECT
        nien_hieu,
        ten_huy
        ten_huy_khac
    FROM
        vua
    WHERE
        nien_hieu = 'Thành Thái';
    ```

---

## Truy vấn 4

### Đề bài

Những vị vua nào có thời gian trị vì trong thế kỷ XX? Sắp xếp theo thứ tự tăng dần đối với năm bắt đầu lên ngôi.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột dữ liệu:**
    
    Theo yêu cầu, ta cần hiển thị các cột: tên của vua gồm `nien_hieu` và `ten_huy`, năm bắt đầu tại vị là `tai_vi_bat_dau`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `vua`.

    **3\. Xác định điều kiện:**

    Điều kiện "có thời gian trị vì trong thế kỷ XX" đồng nghĩa năm kết thúc tại vị phải từ năm 1900 trở đi.

    Do đó, điều kiện trích xuất các mẫu tin là: `tai_vi_ket_thuc >= 1900`.
    
    **4\. Sắp xếp thứ tự:**

    Sắp xếp tăng dần theo cột `tai_vi_bat_dau`. Không cần viết `ASC` do thứ tự tăng dần là mặc định.

??? tip "Viết truy vấn"

    ```sql linenums="13"
    SELECT 
        nien_hieu,
        tai_vi_bat_dau,
        tai_vi_ket_thuc
    FROM
        vua
    WHERE
        tai_vi_ket_thuc >= 1900
    ORDER BY
        tai_vi_bat_dau;
    ```

---

## Truy vấn 5

### Đề bài

Hãy cho biết vị vua nào có cha là vua Thiệu Trị và mẹ là hoàng hậu Từ Dụ.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    **1\. Xác định cột:**
    
    Theo yêu cầu, ta cần hiển thị các cột: tên của vua gồm cột `nien_hieu` và cột `ten_huy`, cha mẹ của vua gồm cột `cha` và `me`.

    **2\. Xác định bảng:**
    
    Các cột này đều nằm trong bảng `vua`.
    
    **3\. Xác định điều kiện:**
    
    Vì tên "Thiệu Trị" hoặc "Từ Dụ" có thể nằm trong chuỗi dữ liệu dài nên ta không thể dùng toán tử `=` mà phải dùng toán tử `LIKE` kết hợp với ký tự đại diện `%`.
    
    Vì phải thỏa đồng thời cả hai điều kiện về cha và mẹ nên ta dùng toán tử `AND`.

    Như vậy, điều kiện để trích xuất dữ liệu là: `cha LIKE '%Thiệu Trị%' AND me LIKE '%Từ Dụ%'`.

??? tip "Viết truy vấn"

    ```sql linenums="23"
    SELECT
        nien_hieu,
        ten_huy,
        cha,
        me
    FROM
        vua
    WHERE
        cha LIKE '%Thiệu Trị%'
        AND me LIKE '%Từ Dụ%';
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/retrieve-data-from-tables-practice-1.sql){target="_blank"}