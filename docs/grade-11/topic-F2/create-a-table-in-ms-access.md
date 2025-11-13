---
icon: material/microsoft-access
---

# Tạo bảng trong Microsoft Access

!!! abstract "Tóm lược nội dung"
    
    Bài này hướng dẫn cách tạo bảng dữ liệu trong phần mềm Microsoft Access.

    Thao tác hướng dẫn được thực hiện trên Access phiên bản Microsoft 365 (ảnh chụp màn hình vào tháng 02.2022). Bạn có thể thực hiện tương tự trên các phiên bản 2013, 2016, 2019, 2021 và 2024.

    Đây là bài viết cũ dành cho học sinh lớp 12 chương trình trước 2024 (chương trình trước GDPT 2018). Mr School thấy tiếc quá nên *chép* lại.
    
    Đối với lớp 11 chương trình mới hiện nay, bạn có thể chọn sử dụng một trong số những phương án sau:
    
    - Hệ cơ sở dữ liệu MySQL thông qua công cụ phpMyAdmin.
    - Hệ cơ sở dữ liệu MySQL thông qua công cụ Workbench của Oracle.
    - Hệ cơ sở dữ liệu PostgreSQL thông qua công cụ pgAdmin.

## Tạo tập tin Access

Mở Access và thực hiện các thao tác sau:

1. Chọn **Home**.
2. Click vào **Blank database**.

    ![Cách tạo tập tin cơ sở dữ liệu mới](https://lh3.googleusercontent.com/PKOmSA5kDRP_GTQo1Iz24_Wh_CD0X04CT2CEW1LE7bhhNTbVD9QSTB3BpW_jgdBe7ceBSvahwx0ghC86P-P1Hn8EOTiqD18_hJP_0R-YqmXK9ws96BCm3tg_3vqK2tOQlN7pXGRokQE=w2400){loading=lazy width=320}

3. Trong hộp thoại hiện ra, chọn thư mục lưu trữ và nhập tên tập tin.
4. Điều chỉnh tên tập tin nếu cần. Đuôi tập tin **.accdb** đã có sẵn.
5. Bấm nút **Create**.

    ![Cách đặt tên tập tin và nơi lưu](https://lh3.googleusercontent.com/PXAiELIE7TQGhTYeUtnAKp87WLbHBDOgq3O8Tu3_mnekHgniJ7Fh_SKUvjHJi6_iuUUox6mu_MFkRZTmCBI3vtqKcvmJM0NZ54Zs2Hma-9vnrt8IdugR7d-5fYVn4eVlUbgFeVG4iLQ=w2400){loading=lazy width=400}

## Tạo bảng

Một bảng tên là **Table1** đã có sẵn. Ta có thể thao tác luôn hoặc đóng lại để tạo bảng mới.

Trong bài này, ta đóng lại bằng cách bấm vào nút **X** (1).
{ .annotate }

1.  Trong phiên bản Access 2016, nút **X** nằm ở phía xa bên phải.

![Cách đóng tab của bảng đang thao tác](https://lh3.googleusercontent.com/WYUFFAq6PaqMCBwwG3QrsSXffrbTSGl_XkEuNbPUAXx4rp3Z9LPjy4adh3cTPBVO1ehSyjirfao0OBDfrcqz42khhNxWdf26KtLOk6YQJn55KITz4Ysox1oo8484zsVODeT5jnTSV7w=w2400){loading=lazy width=320}

Để tạo bảng mới:

1. Chọn tab **Create**.
2. Bấm nút **Table Design**.

    ![Cách tạo bảng mới](https://lh3.googleusercontent.com/3aEuwv93q3txbFJ8e3FuQVKrJrjEuXUWw0q7CPA-5HSj2bI825rTsJbat_R8tjT27jmElYf6FBf0t66MybTYEqhtkx6SZu0aGn8GP8oo90ZvHo2-W6Bzh-IH0ajsxrqZ468l4r0nFl0=w2400){loading=lazy width=320}

## Nhập các thuộc tính của bảng

Giả sử ta có lược đồ sau:

HocSinh(**<ins>MaHocSinh</ins>**, Ho, Ten, GioiTinh, NgaySinh, NoiSinh, TonGiao, SoDienThoai, MaLop) (1)
{ .annotate }

1.  Tên bảng là `HocSinh`, còn các thuộc tính được đặt trong ngoặc đơn. `MaHocSinh` là khóa chính, được quy ước bằng gạch dưới.

Bảng HocSinh được mô tả như dưới đây:

| Thuộc tính | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| MaHocSinh	| Short Text (7) | Mã định danh học sinh |
| Ho | Short Text (30) | Họ và chữ đệm |
| Ten | Short Text (10) | Tên |
| GioiTinh | Yes/No	| Tạm quy ước nữ là 1, nam là 0 |
| NgaySinh | DateTime | Ngày sinh |
| NoiSinh | Short Text (20) | Nơi sinh |
| QueQuan | Short Text (20) | Quê quán |
| TonGiao | Short Text (20) | Tôn giáo |
| SoDienThoai | Text (10) | Số điện thoại di động có tối đa 10 chữ số |
| MaLop | Text (5) | Mã của lớp mà học sinh đó đang học |

Ta lần lượt nhập như sau:

- Nhập tên các thuộc tính vào cột **Field Name**. Lưu ý: không gõ dấu tiếng Việt và khoảng trắng.
- Nhập kiểu dữ liệu tương ứng vào cột **Data Type**.
- Cột **Description** là tùy chọn (optional) nên có thể bỏ qua.

Đối với những thuộc tính có kiểu `Short Text` như `MaHocSinh`, ta nhập thêm số ký tự tối đa ở mục **Field Size** bên dưới. Việc này làm cho người dùng chỉ được nhập dữ liệu có số ký tự bằng hoặc nhỏ hơn 7. Nếu người dùng cố ý nhập hơn 7 thì máy tính sẽ không cho nhập tiếp.

![Cách nhập thuộc tính của bảng](https://lh3.googleusercontent.com/kG-SrwLrfmizqbRUTFLYiWZzzfIgsF4TKDcRQzVshWbGpBuj8Gk1f633lbAKYpI95d86OqcE9XOhw36vwpPkUzyfzbUw9AM-T2Z3obitLO94VM57z9ii4WuzU3-6ew-ir97CE1dbasw=w2400){loading=lazy width=600}

## Tạo khóa chính

Mỗi bảng có một khóa chính. Khóa chính có thể gồm một hoặc nhiều thuộc tính, dùng để phân biệt các mẫu tin với nhau.

Trong bảng này, khóa chính là `MaHocSinh`. Nghĩa là, hai học sinh bất kỳ có thể trùng nhau về họ, tên, giới tính, ngày sinh, v.v... (chẳng hạn anh em song sinh), nhưng **mã định danh** (`MaHocSinh`) của họ là phải khác nhau.

Để tạo khóa chính:

1. Click chọn `MaHocSinh`.
2. Chọn tab **Table Design**.
3. Click nút **Primary Key**.

![Cách tạo khóa chính của bảng](https://lh3.googleusercontent.com/khHr9OrXOgn9eYo4lzwPpjkmtjgsCpcQuJy23gOSHBoztiPxGPAdyR0RQz5ksA6AGsFw3-mVXkhPIfAG_aHZmTSmW6rFxEa2a2VJoz6USKBsfnQQs4F04F9adPj7f88NKx3d_uxEz-Y=w2400){loading=lazy width=480}    

Một biểu tượng chìa khóa sẽ xuất hiện ở phía đầu của thuộc tính.

Tiếp đó, ta bấm nút **X** để đóng bảng lại. Trong hộp thoại xác nhận **"Do you want to save... "** hiện ra, bạn bấm **Yes**.

![Hộp thoại xác nhận lưu bảng](https://lh3.googleusercontent.com/V7y4WDVbC8UrzZW9kklHa_aGCpzRl4WqpEsjtuyqQkoazFF5zryG_s9dyzeb2BDHEXeFJtNtnQFtwzu8FeXNpK14ohQ_lLOU93PjIg1PYOsLy9Su5LCW-6lqOhzNSWWunXb6ixd3gng=w2400){loading=lazy width=320}

Trong hộp thoại **Save As** hiện ra:

1. Nhập tên bảng là `HocSinh`, 
2. Bấm *OK*.

![Cách đặt tên cho bảng vừa tạo](https://lh3.googleusercontent.com/C5jEHR0XyKkfp1pCUj-5ic4NKl20eDfAFJJ4hdk7rgB4HnMG-iZPZUfVksgShMXCWJV-YuIK_ZAkgwdbqPOMbOQp4zW9rGZKwVKFQBVcKZI8UaVqkUFJRURfsYxL9RVHQ-0eF086SQQ=w2400){loading=lazy width=240}

Vậy là xong. Bảng `HocSinh` sẽ xuất hiện ở panel **All Access Objects** bên trái.

Nếu cần đổi tên, ta click phải vào bảng, rồi chọn **Rename**.

Nếu cần điều chỉnh thiết kế, ta click phải vào bảng, rồi chọn **Design View**.

![Cách đổi tên và chỉnh sửa thiết kế của bảng](https://lh3.googleusercontent.com/lqfl6XoAiqabh7m2MgCq0jEgnOP_ef0otIDDcNPJVw5TVLtD2BfCfep9odWTesoZJZH0WxDVJvjOWTO8TAwv3UVSHoD-vlN73Kg8_BbDtk4WWASCZ4oQWz8rJIcnalu2EKEyc83CUS0=w2400){loading=lazy width=240}

## Nhập dữ liệu

Để kiểm tra bảng, ta thử nhập một số dòng dữ liệu giả vào bằng cách:

1. Click đôi bảng **HocSinh** ở panel bên trái.
2. Nhập thử hai dòng dữ liệu.

    Lưu ý: Do `MaHocSinh` là khóa chính, ta không được nhập trùng với mã đã có và cũng không được bỏ trống.

![Dữ liệu trong bảng sau khi nhập](https://lh3.googleusercontent.com/4n1BgFCBzyWFNBtE532HCmK6pIMztKq9ab4NmUWsauamtFJ0or-Qeg83LBTYW_nHGQeePCMN9vDjmKLgoKhCDIEylYUPE4x7vyzKVn0oCIP2nFogVdGtGL41-HN-z3zYgguBMCZXLBY=w2400){loading=lazy}

Thông thường, khi nhập dữ liệu, Access sẽ tự động lưu. Nếu ta thay đổi độ rộng các cột thì khi đóng bảng, Access sẽ hiển thị hộp thoại xác nhận lưu.

!!! info "Về các tập tin liên quan"

    Trong quá trình thao tác, Access tạo ra một tập tin phụ, dung lượng 1 KB, có thể ẩn hoặc hiển thị tùy thuộc thiết lập của Windows.
    
    Khi hoàn tất công việc, ta phải đóng cửa sổ Access để Windows xóa tập tin phụ này, giúp ta không bị nhầm lẫn giữa các tập tin.
