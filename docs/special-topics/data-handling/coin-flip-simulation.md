# Mô phỏng trò chơi tung đồng xu

## Yêu cầu

Mô phỏng trò chơi tung đồng xu bằng hàm `rand()` trong Excel.

Tải tập tin Excel **coin-flip-simulation-before.xlsx** tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling){:target="_blank"}.  

## Cách giải đề xuất

**Bước 1:**

Tại ô `B5`, nhập công thức sau để tạo số ngẫu nhiên trong phạm vi [0, 1):

```excel
=rand()
```

![Công thức ô B5](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_Bgx5Ts2SRruG35Tg/root/content){loading=lazy}

Sao chép công thức này đến ô `B24`, ứng với 20 lần tung đồng xu.

!!! info "Lưu ý"

    Khi sao chép công thức hoặc có thao tác nào đó tác động đến bảng tính, Excel sẽ tạo lại số ngẫu nhiên mới.

    Do đó, nếu muốn giữ lại số ngẫu nhiên, ta cần chuyển giá trị ngẫu nhiên thành giá trị cố định bằng cách: sao chép và dán giá trị (Paste Value).

**Bước 2:**

Tại ô C5, nhập công thức sau để xác định mặt ngửa hoặc mặt sấp:

```excel
=if(B5>=0.5,"Ngửa","Sấp")
```

![Công thức ô C5](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_BhCPWv8v21h0dCsQ/root/content){loading=lazy}

Sao chép công thức này đến ô `C24`.

**Bước 3:**

Tại ô D5, nhập công thức sau để hiển thị hình ảnh mặt ngửa hoặc mặt sấp: 

```excel
=if(C5="Ngửa",image($H$1),image($H$2))
```

!!! info "Lưu ý"

    Hàm `image()` chỉ hoat động trên phiên bản Microsoft 365 hoặc Office 2021.

![Công thức ô D5](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_BiLl3W1S6IKYYYQw/root/content){loading=lazy}

Sao chép công thức này đến ô `D24`.

## Thử thách

Chỉnh sửa công thức sao cho xác suất mặt ngửa là 60% và mặt sấp là 40%.

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/random-data){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.