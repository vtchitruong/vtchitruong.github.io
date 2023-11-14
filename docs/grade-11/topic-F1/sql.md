# Ngôn ngữ truy vấn dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái niệm ngôn ngữ SQL và một số ví dụ đơn giản về câu lệnh truy vấn SELECT.

## Khái niệm

**SQL** (Structured Query Language), tạm dịch là **ngôn ngữ truy vấn có cấu trúc**, là ngôn ngữ được thiết kế để quản lý và xử lý cơ sở dữ liệu quan hệ.

SQL được phân thành ba loại dựa trên thao tác đối với dữ liệu:

- **DDL** (Data Definition Language):

    DDL là những câu lệnh dùng để định nghĩa cấu trúc của cơ sở dữ liệu, bao gồm tạo, thay đổi và xóa các đối tượng của cơ sở dữ liệu.

- **DML** (Data Manipulation Language):

    DML là những câu lệnh dùng để quản lý dữ liệu, bao gồm truy hồi, thêm, cập nhật và xóa dữ liệu.

- **DCL** (Data Control Language):

    DCL là những câu lệnh dùng để kiểm soát việc truy xuất dữ liệu, bao gồm cấp và thu hồi quyền và đặc quyền.

Ngoài ra, còn có thêm những loại khác như TCL (Transaction Control Language), DQL và các lệnh tiện ích.

{!grade-11/topic-F1/database/sql-categories.mm.md!}
Hình 1. Phân loại câu lệnh SQL và một số lệnh ví dụ

Trong chương trình phổ thông, ta chủ yếu quan tâm câu lệnh `SELECT`.

## Cú pháp câu lệnh SELECT

!!! note Cú pháp tổng quát
    ``` sql
    SELECT <cột>
    FROM <bảng>
    [WHERE <biểu thức điều kiện>]
    [GROUP BY <cột>]
    [HAVING <điều kiện trên nhóm>]
    [ORDER BY <cột> ASC | DESC]
    ```

!!! note "Quy ước về dấu ngoặc"

    Cặp ngoặc nhọn `< >` nghĩa là bắt buộc phải có.

    Cặp ngoặc vuông `[ ]` nghĩa là tùy chọn, có thể có hoặc không.

## Truy vấn dữ liệu trên một bảng

Cho bảng dữ liệu `ThucDon` gồm 4 cột và 5 bộ (mẫu tin).

| MaMon | TenMon | LoaiMon | DonGia |
| --- | --- | --- | --- |
| 1 | Cà phê sữa đá | drink | 25000 |
| 2 | Rồng xanh vượt sóng đại dương | food | 59000 |
| 3 | Hắc ngọc ẩn mộng tưởng | drink | 49000 |
| 4 | Xúc xắc ngự thảo nguyên | food |65000 |
| 5 | Kim kê ngự Nam Cực | food | 59000 |

### Truy vấn toàn bộ dữ liệu trong bảng

Muốn kết quả hiển thị những cột nào, ta liệt kê tên những cột đó trong mệnh đề `select`.

Sau đó, trong mệnh đề `from`, ta chỉ định tên của những bảng có liên quan.

Trong trường hợp các cột nằm ở nhiều bảng khác nhau, ta phải sử dụng thêm toán tử kết nối bảng.

:   Ví dụ 1:

    ``` sql linenums="1"
    select *
    from ThucDon
    ```

    Dấu sao `*` đại diện cho tất cả cột có trong bảng `ThucDon`. Đồng nghĩa tất cả cột đều được hiển thị.

    Không có mệnh đề điều kiện `where`. Đồng nghĩa tất cả mẫu tin đều được hiển thị.

    Do đó, kết quả của truy vấn này là toàn bộ dữ liệu của bảng `ThucDon`.

### Truy vấn có điều kiện

Không phải lúc nào ta cũng truy vấn toàn bộ mẫu tin, mà chỉ cần lọc ra những mẫu tin thỏa điều kiện nào đó.

Để lọc mẫu tin, ta viết điều kiện trong mệnh đề `where` bằng các toán tử như: bằng `=`, khác `<>`, `>`, `>=`, `<`, `<=`, `<>`, `and`, `or`, `not`, v.v...

#### So sánh bằng

:   Ví dụ 2:  
    Viết truy vấn cho biết cà phê sữa đá giá bao nhiêu.

    ``` sql linenums="1"
    select TenMon, DonGia
    from ThucDon
    where TenMon = "Cà phê sữa đá"
    ```

    Kết quả:

    | TenMon | DonGia |
    | --- | --- |
    | Cà phê sữa đá | 25000 |

!!! note "Lưu ý"

    MySQL chấp nhận cho cả cặp nháy đơn `' '` và cặp nháy kép `" "` chứa chuỗi ký tự. Tuy nhiên, cần biết rằng vẫn có sự phân biệt trong những hoàn cảnh khác. 

#### So sánh khác

:   Ví dụ 3:  
    Viết truy vấn liệt kê tất cả các món không phải món ăn.

    ``` sql linenums="1"
    select TenMon, LoaiMon
    from ThucDon
    where LoaiMon <> "food"
    ```

    Kết quả:

    | TenMon | LoaiMon |
    | --- | --- |
    | Cà phê sữa đá | drink |
    | Hắc ngọc ẩn mộng tưởng | drink |

:   Ví dụ 4:  
    Viết truy vấn cho biết những món nào có giá từ 30 ngàn trở xuống.

    ``` sql linenums="1"
    select TenMon, DonGia
    from ThucDon
    where DonGia <= 30000
    ```

    Kết quả:

    | TenMon | DonGia |
    | --- | --- |
    | Cà phê sữa đá | 25000 |


!!! note "Lưu ý"

    Trong biểu thức so sánh, chuỗi được đặt vào cặp ngoặc kép `" "`, còn số thì không.
    
    Đối với chuỗi, khoảng trắng dư thừa cũng có thể dẫn đến sai lệch trong kết quả.

#### So sánh chuỗi theo mẫu

Toán tử bằng `=` dùng để so sánh chuỗi chính xác. Trong trường hợp so sánh chuỗi một cách gần đúng hoặc tương đối, còn gọi là so sánh **theo mẫu**, ta sử dụng toán tử `like` (tạm dịch "*giống như là*") và ký tự đại diện.

!!! note "Ký tự đại diện"

    | Ký tự | Đại diện cho |
    | --- | --- |
    | `%` | không ký tự hoặc nhiều ký tự |
    | `_` | một kí tự duy nhất |

:   Ví dụ 5:      
    Viết truy vấn tìm các món có chữ "*ngư*" hoặc "*ngự*" trong tên.

    ``` sql linenums="1"
    select MaMon, TenMon
    from ThucDon
    where TenMon like '%ngu%'
    ```

    Kết quả:

    | MaMon | TenMon |
    | --- | --- |
    | 4 | Xúc xắc ngự thảo nguyên |
    | 5 | Kim kê ngự Nam Cực |

    Thông thường, MySQL không phân biệt *ngư*, *ngự*, *ngừ*, *ngữ*, v... nên ta có thể viết mẫu là `'%ngu%'` để phủ hết các trường hợp liên quan.

### Sắp xếp kết quả hiển thị

Để kết quả hiển thị theo một thứ tự mong muốn, ta liệt kê những cột cần sắp xếp trong mệnh đề `order by`, kèm theo từ khóa chỉ định thứ tự.

!!! note "Từ khóa chỉ định thứ tự sắp xếp"

    | Từ khóa | Thứ tự sắp xếp |
    | --- | --- |
    | `asc` | tăng dần |
    | `desc` | giảm dần |

    Nếu không chỉ định từ khóa, thứ tự mặc định là `asc`.

:   Ví dụ 6:

    Viết truy vấn để lập danh sách các món uống có giá tăng dần.

    ``` sql linenums="1"
    select TenMon, LoaiMon, DonGia
    from ThucDon
    where LoaiMon = 'drink'
    order by DonGia
    ```

    Kết quả:
    
    | TenMon | LoaiMon | DonGia |
    | --- | --- | --- |
    | Cà phê sữa đá | drink | 25000 |
    | Hắc ngọc ẩn mộng tưởng | drink | 49000 |

:   Ví dụ 7:

    Viết truy vấn để lập danh sách các món ăn có giá tăng dần, nếu đồng giá thì sắp xếp tên món giảm dần.

    ``` sql linenums="1"
    select TenMon, LoaiMon, DonGia
    from ThucDon
    where LoaiMon = 'food'
    order by DonGia, TenMon desc
    ```

    Kết quả:
    
    | TenMon | LoaiMon | DonGia |
    | --- | --- | --- |
    | Rồng xanh vượt sóng đại dương | food | 59000 |
    | Kim kê ngự Nam Cực | food | 59000 |
    | Xúc xắc ngự thảo nguyên | food |65000 |

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/database/sql.mm.md!}
Hình 2. Sơ đồ tóm tắt về SQL

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| ký tự đại diện | wildcard character |
| ngôn ngữ truy vấn có cấu trúc | Structured Query Language (SQL) |