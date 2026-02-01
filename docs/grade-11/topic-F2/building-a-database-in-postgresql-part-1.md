---
icon: simple/postgresql
---

# Xây dựng cơ sở dữ liệu trong PostgreSQL - Phần 1

!!! abstract "Tóm lược nội dung"
    
    Bài này trình bày:
    
    - Cách kết nối vào server trong **pgAdmin** của PostgreSQL
    - Cách tạo cơ sở dữ liệu

## Khái quát

Cơ sở dữ liệu cần xây dựng là `school_db`, dùng để quản lý điểm số của học sinh.

`school_db` gồm có các bảng sau:

| Tên bảng | Nội dung của dữ liệu |
| --- | --- |
| `classrooms` | Dữ liệu về lớp học |
| `students` | Dữ liệu về học sinh |
| `subjects` | Dữ liệu về môn học |
| `scores` | Dữ liệu về điểm số của học sinh |

Bài này chỉ đề cập cách tạo cơ sở dữ liệu, chưa đề cập việc tạo bảng.

---

## Kết nối server trong pgAdmin 4

1\. Trong **Start menu**, chọn **pgAdmin 4**.

2\. Trong cửa sổ **pgAdmin 4**, trong ngăn **Object Explorer** bên trái, chọn **Servers**.

3\. Click đôi vào server cần kết nối. Ví dụ trong hình dưới là **PostgreSQL 17**.

4\. Trong hộp thoại **Connect to Server**, nhập mật khẩu (1).
{ .annotate }

1.  Mật khẩu này được tạo trong lúc cài đặt PostgreSQL, hoặc có thể được thay đổi sau khi cài đặt xong.

5\. Click **OK**.

![Cách kết nối vào server trong pgAdmin 4](./images/part-1-pgadmin-connect-to-server.png){loading=lazy}

---

## Mở công cụ Query Tool

1\. Click chọn **Databases**.

2\. Click chọn cơ sở dữ liệu **postgres** (1).
{ .annotate }

1.	**postgres** là cơ sở dữ liệu quản trị mặc định, được tạo sẵn sau khi cài đặt PostgreSQL, dành cho các thao tác quản lý user, role và config.

Ở những lần sau, khi đã tạo xong cơ sở dữ liệu của mình, ta không chọn **postgres** nữa, mà chọn trực tiếp cơ sở dữ liệu đó.

3\. Nhấn nút **Query Tool** (1).
{ .annotate }

1.	**Query Tool** là công cụ cho phép nhập, chỉnh sửa và thực thi các câu lệnh SQL.

![Cách mở công cụ Query Tool](./images/part-1-pgadmin-query-tool.png){loading=lazy}

---

## Tạo cơ sở dữ liệu

!!! note "Cú pháp SQL tạo cơ sở dữ liệu"

    ```sql
    CREATE DATABASE tên_cơ_sở_dữ_liệu;
    ```

Ví dụ:  
1\. Trong tab **Query**, dòng lệnh 2 tạo cơ sở dữ liệu `school_db`.

```sql linenums="1"
-- Tạo cơ sở dữ liệu
create database school_db;
```

!!! info "Chú thích"

    Trong PostgreSQL, hai ký tự `--` dùng để tạo chú thích. Máy tính sẽ bỏ qua không thực thi các dòng chú thích.

2\. Để chạy dòng lệnh trên, nhấn ++f5++.

Hoặc nhấn nút **Execute script** (có biểu tượng hình tam giác) trên thanh công cụ.

3\. Xem thông báo về việc thực thi các lệnh trong tab **Messages** ở phần dưới của cửa sổ.

Nếu thấy thông báo đại loại như `Query returned successfully in 787 msec` thì ta biết rằng các câu lệnh đã thực thi thành công.

![Tab Message dùng để xem thông báo về việc thực thi](./images/part-1-pgadmin-tab-message.png){loading=lazy width=540}

Để thấy được cơ sở dữ liệu vừa tạo, ta thực hiện như sau:

4\. Click phải lên **Databases**.

5\. Click chọn **Refresh** 

![Refresh để xem các cơ sở dữ liệu đã tạo](./images/part-1-pgadmin-refresh.png){loading=lazy width=420}

6\. Cũng trong mục **Databases**, click chọn `school_db` để bắt đầu làm việc với cơ sở dữ liệu này.

![Chọn cơ sở dữ liệu để làm việc](./images/part-1-pgadmin-select-school-db.png){loading=lazy width=420}

!!! warning "Chọn đúng cơ sở dữ liệu"

    Hãy luôn bảo đảm mở **Query Tool** từ đúng cơ sở dữ liệu mà mình muốn làm việc để tránh việc tạo bảng nhầm vào cơ sở dữ liệu hệ thống `postgres`.

---

## Lưu tập tin SQL script

Ta nên lưu dòng lệnh vừa viết trên thành tập tin `.sql`. Ở lần sau, ta có thể mở ra lại để viết thêm và thực thi các câu lệnh SQL khác.

Khi cơ sở dữ liệu gặp trục trặc, ta cũng có thể chạy tập tin này để phần nào đó khôi phục lại cơ sở dữ liệu ban đầu.

!!! note "Cách lưu tập tin SQL"

    1\. Nhấn tổ hợp phím ++ctrl++ + ++s++.

    Hoặc nhấn nút có biểu tượng hình cái đĩa mềm.

    2\. Chọn thư mục để lưu và nhập tên tập tin tuỳ ý, chẳng hạn **school_db.sql**.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/building-a-database-in-postgresql-part-1.html">Sơ đồ tóm tắt</iframe>
</div>