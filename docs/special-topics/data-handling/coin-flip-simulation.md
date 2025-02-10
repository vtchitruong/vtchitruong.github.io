# Mô phỏng trò chơi tung đồng xu

## Yêu cầu

Mô phỏng trò chơi tung đồng xu bằng hàm 'rand()' trong Excel.

Tải tập tin Excel **coin-flip-simulation-before.xlsx** tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling){:target="_blank"}.  

## Cách giải đề xuất

**Bước 1:**

Tại ô `B5`, nhập công thức sau:

```excel
=rand()
```

![https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_Bgx5Ts2SRruG35Tg/root/content](loading=lazy)

Sao chép công thức này đến ô `B24`, ứng với 20 lần tung đồng xu.

**Bước 2:**

Tại ô C5, nhập công thức sau:

```excel
=if(B5>=0.5,"Ngửa","Sấp")
```

![https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_BhCPWv8v21h0dCsQ/root/content](loading=lazy)

Sao chép công thức này đến ô `C24`.

**Bước 3:**

Tại ô D5, nhập công thức sau:

```excel
=if(C5="Ngửa",image($H$1),image($H$2))
```

![https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr_BiLl3W1S6IKYYYQw/root/content](loading=lazy)
Sao chép công thức này đến ô `D24`.

## Thử thách

Chỉnh sửa công thức sao cho xác suất mặt ngửa là 60% và mặt sấp là 40%.

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.