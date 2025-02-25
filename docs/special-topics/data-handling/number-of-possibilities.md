# Tính số cách chọn

## Bài 1

**Yêu cầu:**

Lớp mình có tất cả 36 bạn.

Hỏi giáo viên chủ nhiệm có tất cả bao nhiêu cách sắp xếp chỗ ngồi?

Tải tập tin Excel **combination-before.xlsx** tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/combination){:target="_blank"}.

**Công thức:**

Cách 1: dùng hàm `FACT()`.

Bước 1:

Tại ô `B9`, nhập số `36`.

Bước 2:

Tại ô `B10`, nhập công thức sau:

```excel
=FACT(B9)
```

Cách 2: dùng hàm PERMUT()

Bước 1:

Tại ô `F9`, nhập số `36`.

Bước 2:

Tại ô `F10`, nhập công thức sau:

```excel
=PERMUT(F9,F9)
```

## Bài 2

**Yêu cầu:**

Vẫn là lớp mình như bài 1. Nhưng chỉ có 9 bạn có thể chơi bóng rổ.

Có bao nhiêu cách chọn 5 bạn vào đội hình chính thức để thi đấu bóng rổ cho lớp?

**Công thức:**

Bước 1:

Tại ô `B17`, nhập số `9`.

Bước 2:

Tại ô `B18`, nhập số `5`.

Bước 3:

Tại ô `B19`, nhập công thức sau:

```excel
=COMBIN(B17,B18)
```

## Bài 3

**Yêu cầu:**

Vẫn là chọn đội tuyển bóng rổ như bài 2. Nhưng có tính đến vị trí của từng bạn trong đội hình.

Có bao nhiêu cách chọn 5 bạn mà có quan tâm đến vị trí của từng người trong đội hình?

**Công thức:**

Bước 1:

Tại ô `B26`, nhập số `9`.

Bước 2:

Tại ô `B27`, nhập số `5`.

Bước 3:

Tại ô `B28`, nhập công thức sau:

```excel
=COMBIN(B17,B18)
```

## Mã nguồn

Các tập tin Excel liên quan đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/special-topics/data-handling/combination){:target="_blank"} (1).
{ .annotate }

1.  Phần đuôi "-before" là tập tin không có lời giải.

    Phần đuôi "-after" là tập tin có lời giải.