# Mô phỏng trò chơi tung đồng xu

## Bài 1

**Yêu cầu:**

Mô phỏng trò chơi tung đồng xu bằng hàm `rand()` trong Excel.

Tải tập tin Excel **coin-flip-simulation-before.xlsx** tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/random-data){:target="_blank"}.  

**Công thức:**

Bước 1:

Tại ô `B7`, nhập công thức sau để tạo số ngẫu nhiên trong phạm vi [0, 1):

```excel
=rand()
```

Sao chép công thức này đến ô `B26`, ứng với 20 lần tung đồng xu.

!!! info "Lưu ý"

    Khi sao chép công thức hoặc có thao tác nào đó tác động đến bảng tính, Excel sẽ tạo lại số ngẫu nhiên mới.

    Do đó, nếu muốn giữ lại số ngẫu nhiên, ta cần chuyển giá trị ngẫu nhiên thành giá trị cố định bằng cách: sao chép và dán giá trị (Paste Value).

Bước 2:

Tại ô `C7`, nhập công thức sau để xác định mặt ngửa hoặc mặt sấp:

```excel
=if(B7>=0.5,"Ngửa","Sấp")
```

Sao chép công thức này đến ô `C26`.

Bước 3:

Tại ô `D7`, nhập công thức sau để hiển thị hình ảnh đồng tiền ngửa hoặc sấp: 

```excel
=if(C7="Ngửa",image($H$3),image($H$4))
```

!!! info "Lưu ý"

    Hàm `image()` chỉ hoat động trên phiên bản Microsoft 365 hoặc Office 2021.

Sao chép công thức này đến ô `D24`.

## Bài 2

**Yêu cầu:**

Chỉnh sửa công thức sao cho xác suất mặt ngửa là 60% và mặt sấp là 40%.

**Công thức:**

Thực hiện tương tự như bài 1. Nhưng tại ô `C32`, nhập công thức sau:

```excel
=IF(B32<0.6,"Ngửa","Sấp")
```

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/random-data){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.