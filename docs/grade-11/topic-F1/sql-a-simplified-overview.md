---
icon: material/database-search-outline
---

# Ngôn ngữ truy vấn dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số khái niệm về ngôn ngữ SQL.

## Khái niệm

**SQL** (Structured Query Language), tạm dịch là **ngôn ngữ truy vấn có cấu trúc**, là ngôn ngữ được thiết kế để quản lý và xử lý cơ sở dữ liệu quan hệ. (1)
{ .annotate }

1.  Một số cơ sở dữ liệu không phải là mô hình quan hệ, chẳng hạn cơ sở dữ liệu lai (hybrid database), cũng hỗ trợ SQL nhưng hạn chế hơn.

## Chức năng

SQL được dùng để:

- tạo cơ sở dữ liệu mới hoặc bảng mới,
- trích xuất dữ liệu thoa điều kiện,
- thêm mới, xoá và sửa mẫu tin,
- tạo thủ tục lưu trữ (stored procedure) và hàm,
- tạo chế độ xem (view),
- thiết lập các quyền truy cập và an toàn dữ liệu.

## Phân loại

SQL được phân thành ba loại dựa trên thao tác đối với dữ liệu:

| Tên viết tắt | Tên đầy đủ | Chức năng | Ví dụ |
| --- | --- | --- | --- |
| DDL | Data Definition Language | Dùng để định nghĩa cấu trúc của cơ sở dữ liệu, bao gồm tạo, thay đổi và xóa các đối tượng của cơ sở dữ liệu | `create`, `alter`, `drop` |
| DML | Data Manipulation Language | Dùng để quản lý dữ liệu, bao gồm trích xuất, thêm mới, chỉnh sửa và xóa dữ liệu | `select`, `update`, `insert`, `delete`, `merge` |
| DCL | Data Control Language | Dùng để kiểm soát việc truy xuất dữ liệu, bao gồm cấp và thu hồi quyền và đặc quyền | `grant`, `revoke` |

Ngoài ra, còn có thêm những loại khác như **TCL** (Transaction Control Language), **DQL** và các lệnh tiện ích.

## Một số câu lệnh SQL cơ bản

| Từ khoá | Chức năng |
| --- | --- |
| `select` | Trích xuất dữ liệu thoả điều kiện |
| `insert into` | Thêm mẫu tin mới |
| `delete` | Xoá dữ liệu |
| `update` | Chỉnh sửa dữ liệu |
| `create database` | Tạo cơ sở dữ liệu mới |
| `alter database` | Thay đổi cấu trúc cơ sở dữ liệu |
| `create table` | Tao bảng mới |
| `alter table` | Thay đổi cấu trúc bảng |
| `drop table` | Xoá bảng |

!!! question "Câu hỏi 1"

    SQL là ngôn ngữ có chức năng gì?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="A">A. Lập trình cho thiết bị di động<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="B">B. Tạo trang web động<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="C">C. Truy vấn cơ sở dữ liệu<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="D">D. Ngôn ngữ giao tiếp với người ngoài hành tinh<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_1', 'C', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Đáp án C.


## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/sql-a-simplified-overview.mm.md!}
*Sơ đồ tóm tắt về SQL*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chỉnh sửa | update, modify |
| ngôn ngữ truy vấn có cấu trúc | Structured Query Language (SQL) |
| tạo | create |
| thay đổi | alter |
| thêm mới | add, insert |
| xoá (dữ liệu) | delete |
| xoá toàn bộ | drop |