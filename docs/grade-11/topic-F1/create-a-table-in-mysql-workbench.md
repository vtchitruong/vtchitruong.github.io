---
icon: simple/mysql
---

# Tạo bảng trong MySQL Workbench

!!! abstract "Tóm lược nội dung"
    
    Bài này hướng dẫn cách tạo một bảng dữ liệu trong công cụ MySQL Workbench.

## Khái quát cơ sở dữ liệu

Cơ sở dữ liệu cần tạo có tên là `coffee_shop`, dùng để quản lý việc kinh doanh ăn uống tại cửa hàng cà phê, gồm ba bảng:

| Tên bảng | Lưu trữ dữ liệu |
| --- | --- |
| `customers` | Thông tin cá nhân của khách hàng |
| `menu` | Các món ăn hoặc món uống của cửa hàng |
| `invoice` | Các giao dịch của khách hàng |

Lược đồ cơ sở dữ liệu như sau: (1)
{ .annotate }

1.  Đây chỉ là cơ sở dữ liệu minh họa, đừng áp dụng vào thực tế khi chưa chỉnh sửa cho hoàn thiện, trừ phi bạn muốn nhanh chóng phá sản.

- customers(<ins>**customer_id**</ins>, customer_name, phone, district, province, customer_type)
- menu(<ins>**item_id**</ins>, item_name, item_type, price, item_real_name)
- invoice(<ins>**invoice_id**</ins>, invoice_date, customer_id*, item_id*, amount, actual_price, total)

Bài này chỉ trình bày cách tạo một bảng, là bảng `customers` chứa dữ liệu khách hàng.

## Tạo tập tin SQL script

Trước hết, ta mở một tab mới trong Workbench:

1. Chọn menu **File**.
2. Chọn **New Query Tab**.

    ![Image title](https://lh3.googleusercontent.com/pw/ABLVV85cta72Besn-eLl39nrWa8HBUj4SyJClmCYlJ5MGrdAcxm8lojD38n1CYT-OBJnl_CmPTx4jB-kF1eeAuCrV5SrrBHJ3tXFYSUBND2PVr7tmNIIERZJ=w2400){loading=lazy width=280}

Tiếp theo, ta lưu tập tin của tab đang mở này, mặc dù chưa có nội dung gì:

1. Chọn menu **File**.
2. Chọn **Save Script As...**

    ![Image title](https://lh3.googleusercontent.com/pw/ABLVV85fXN3J7ZQcf7S5Cz7CmtkgB_grFZ9mAoFSb7sleiBaTrkrZK0ujQltoX4R_81eXnY6iWrc77I-WNLwMpMXib-jzzaP7LQTGjyXKUUz8NU1p-f7_9tD=w2400){loading=lazy width=280}

3. Trong hộp thoại hiện ra, chọn thư mục để lưu tùy ý và nhập tên tập tin cũng tùy ý.
4. Click nút **Save**.

Trong quá trình gõ mã lệnh, ta nên thường xuyên nhấn ++ctrl++ + ++s++ để lưu tập tin.

!!! info "Tập tin .sql"

    Tập tin **.sql** là tập tin chứa các mã lệnh SQL dùng để tương tác với cơ sở dữ liệu.

    Khi cơ sở dữ liệu gặp trục trặc, ta có thể chạy tập tin này để phần nào đó khôi phục lại cơ sở dữ liệu ban đầu.

## Tạo cơ sở dữ liệu

Câu lệnh tạo cơ sở dữ liệu như sau:

``` sql linenums="2"
create database coffee_shop;
```

Hệ thống không cho phép các cơ sở dữ liệu trùng tên nhau. Do đó, để phòng hờ cơ sở dữ liệu trùng tên `coffee_shop` đã tồn tại, ta thêm dòng lệnh `drop database` để xóa cơ sở dữ liệu này.

(*Lưu ý: dòng lệnh này chỉ áp dụng cho giờ học thực hành, cần cân nhắc khi áp dụng thực tế*)

``` sql linenums="1"
drop database if exists coffee_shop;
create database coffee_shop;
```

Để chạy đoạn mã trên, ta quét khối đoạn mã, rồi click nút **Execute** (biểu tượng sấm sét).

![Nút Execute](https://lh3.googleusercontent.com/pw/ABLVV86OsrOLG13gK7_NAL2SBVX2O_r4dRHC4zF2fVojQQSvnfxhGABL0xH9ks7I0aIeFaeghhjunI4Il_5l33gSGxPR4du0ZqfBoDbMOFPv-ouecIF7JPIZ=w600){loading=lazy}

Nếu không quét khối, mà chỉ click nút **Execute**, thì toàn bộ mã lệnh trong tập tin sẽ thực thi, có thể làm ảnh hưởng dữ liệu ngoài ý muốn.

Do đó, khi cần chạy đoạn mã nào, bạn nên quét khối đoạn mã đó cẩn thận rồi mới nhấn nút Execute. 

## Tạo bảng

Mô tả của bảng `customers` như sau:

| Thuộc tính | Ý nghĩa | Kiểu dữ liệu |
| --- | --- | --- |
| `customer_id` | mã định danh của mỗi khách hàng | chuỗi gồm 6 ký tự và là khóa chính |
| `customer_name` | họ tên khách hàng | chuỗi gồm 100 ký tự |
| `phone` | số điện thoại | chuỗi gồm 10 ký tự |
| `district` | nơi ở của khách hàng theo quận | chuỗi gồm 50 ký tự |
| `province` | nơi ở của khách hàng theo tỉnh | chuỗi gồm 50 ký tự |
| `customer_type` | loại khách hàng: VIP, thân thiết hoặc vãng lai | một ký tự, là: V, F hoặc C | 

Ứng với mô tả trên, đoạn mã tạo bảng `customers` là:

``` sql linenums="3"
use coffee_shop; -- (1)!

create table `customers` (
	`customer_id` char(6) primary key,
	`customer_name` nvarchar(100) not null,
	`phone` char(10),
	`district` nvarchar(50),
	`province` nvarchar(50),
	`customer_type` char(1)
) engine=InnoDB default charset=utf8mb4;
```
{ .annotate }

1.  Đây là dòng lệnh phụ, thêm vào để cho máy chủ biết ta chuyển sang làm việc với cơ sở dữ liệu này.

## Thêm dữ liệu vào bảng

Để thêm dữ liệu vào một bảng, ta sử dụng câu lệnh SQL `INSERT INTO`.

Cú pháp lệnh `INSERT INTO`:

``` sql
INSERT INTO <bảng> (<cột 1>, <cột 2>, ..., <cột n>)
VALUES (<giá trị 1>, <giá trị 2>, ..., <giá trị n>);
```

Trong trường hợp thêm dữ liệu cho tất cả cột, ta có thể bỏ qua không gần gõ tên cột.

``` sql
INSERT INTO <bảng>
VALUES (<giá trị 1>, <giá trị 2>, ..., <giá trị n>);
```

Ví dụ: năm dòng lệnh sau dùng để thêm năm mẫu tin vào bảng `customers`.

``` sql linenums="34"
insert into customers values('315533',N'Larry Ellison','0922638352',N'Nhà Bè',N'Ho Chi Minh City','V'); -- (1)!
insert into customers values('350112',N'Christopher Edward Nolan CBE','0989686766',N'',N'Gia Lai','F');
insert into customers values('527951',N'Bill Gates','0974539210',N'5',N'Ho Chi Minh City','V');
insert into customers values('806518',N'Lionel Messi','0952637964',N'Tân Phú',N'Ho Chi Minh City','V');
insert into customers values('744486',N'Cristiano Ronaldo','0997851356',N'12',N'Ho Chi Minh City','V');
```
{ .annotate }

1. Tiếp đầu ngữ `N` đứng trước một số chuỗi dùng để chỉ định chuỗi tương ứng là Unicode.

Như vậy, cơ sở dữ liệu `coffee_shop` đã có một bảng, đó là`customers` gồm năm mẫu tin.