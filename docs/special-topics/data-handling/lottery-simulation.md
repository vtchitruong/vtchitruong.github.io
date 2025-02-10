# Mô phỏng trò chơi xổ số

## Yêu cầu

Mô phỏng trò chơi xổ số bằng hàm 'randbetween()' trong Excel.

Tải tập tin Excel **lottery-simulation-before.xlsx** tại [GitHub](){:target="_blank"}.

## Cách giải đề xuất

**Bước 1:**

Tại ô `D5`, nhập công thức sau để ghép họ và tên:

```excel
=B5&" "&C5
```
![](loading=lazy)
Sao chép công thức này đến ô `D41`.

**Bước 2:**

Tại ô `G5`, nhập công thức sau để tạo số ngẫu nhiên từ 1 đến 37, ứng với sĩ số lớp:

```excel
=RANDBETWEEN(1, 37)
```
![](loading=lazy)
**Bước 3:**

Tại ô `H5`, nhập công thức sau để hiển thị họ tên của người được "*chọn*":

```excel
=VLOOKUP(G5,$A$5:$D$41,4,0)
```

![](loading=lazy)

## Thử thách

Bổ sung bảng tính sao cho gọi được ngẫu nhiên một số bạn từ các nhóm khác nhau.

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.