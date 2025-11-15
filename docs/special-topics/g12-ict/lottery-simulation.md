# Mô phỏng trò chơi xổ số

## Bài 1

**Yêu cầu:**

Mô phỏng trò chơi xổ số bằng hàm `randbetween()` trong Excel.

Tải tập tin Excel **lottery-simulation-before.xlsx** tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/random-data){:target="_blank"}.

**Công thức:**

Bước 1:

Tại ô `D7`, nhập công thức sau để ghép họ và tên:

```excel
=B7&" "&C7
```

Sao chép công thức này đến ô `D43`.

Bước 2:

Tại ô `G7`, nhập công thức sau để tạo số ngẫu nhiên từ 1 đến 37, ứng với sĩ số lớp:

```excel
=RANDBETWEEN(1, 37)
```

**Bước 3:**

Tại ô `H7`, nhập công thức sau để hiển thị họ tên của người được "*chọn*":

```excel
=VLOOKUP(G7,$A$7:$D$43,4,0)
```

## Bài 2

**Yêu cầu:**

Bổ sung bảng tính sao cho gọi được ngẫu nhiên một số bạn từ các nhóm khác nhau.

**Công thức:**

Bước 1:

Giả sử có 4 nhóm.

Từ ô `D50` đến `D53`, lần lượt nhập từ 1 đến 4.

Bước 2:

Tại cột `E` và cột `F`, lần lượt nhập các cặp số bắt đầu và kết thúc của mỗi nhóm: 1-9, 10-19, 20-29, 30-37.

Bước 3:

Tại ô `G50`, nhập công thức sau để chọn ngẫu nhiên một số bạn từ nhóm 1:

```excel
=RANDBETWEEN(E50,F50)
```

Sao chép công thức này đến ô `G53`.

Bước 4:

Tại ô `H50`, nhập công thức sau để hiển thị họ tên của người được "*chọn*":

```excel
=VLOOKUP(G50,$A$7:$D$43,4,0)
```

Sao chép công thức này đến ô `H53`.

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/random-data){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.