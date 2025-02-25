# Hoán vị và tổ hợp

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các hàm Excel dùng để tính số lượng hoán vị và tổ hợp của các phần tử:
    
    - `FACT()`
    - `COMBIN()`
    - `PERMUT()`.

## Hàm fact()

Hàm `fact()` dùng để tính giai thừa của một số nguyên dương (1). 
{ .annotate }

1.  Giai thừa của một số nguyên dương $n$ là tích của tất cả các số nguyên dương từ 1 đến $n$:

    $$n! = 1.2.3...n$$

Ứng dụng:

Hàm `fact()` có thể được dùng để tính số hoán vị của n phần tử.

Cú pháp:

```excel
=FACT(n)
```
Trong đó:

- `n`: số nguyên dương cần tính giai thừa.

Ví dụ:

**Yêu cầu:**

Cho mã PIN gồm 6 chữ số, được tạo từ các chữ số từ 0 đến 5. Hỏi có bao nhiêu mã PIN khác nhau có thể tạo ra?

**Công thức:**

```excel
=FACT(6)
```

**Kết quả:**

```excel
720
```

## Hàm permut()

Hàm `permut()` dùng để tính **số hoán vị** của k phần tử trong tổng số n phần tử (1).
{ .annotate }

1.  hay còn gọi là **chỉnh hợp chập k của n phần tử**.

Cú pháp:

```excel
=PERMUT(n, k)
```

Trong đó:

- `n`: tổng số phần tử.
- `k`: số phần tử được hoán vị.

Ví dụ:

**Yêu cầu:**

Cho mã PIN gồm 6 chữ số như ví dụ trên, nhưng được tạo từ tất cả chữ số từ 0 đến 9. Hỏi có bao nhiêu mã PIN khác nhau có thể tạo ra?

**Công thức:**

```excel
=PERMUT(9, 6)
```

**Kết quả:**

```excel
60480
```

## Hàm combin()

Hàm `combin()` dùng để tính **số tổ hợp** của k phần tử trong tổng số n phần tử (1).
{ .annotate }

1.  hay còn gọi là **tổ hợp chập k của n phần tử**.

Cú pháp:

```excel
=COMBIN(n, k)
```

Trong đó:

- `n`: tổng số phần tử.
- `k`: số phần tử được chọn để tổ hợp.

Ví dụ:

**Yêu cầu:**

Trong một túi mù có 5 con capybara. Hỏi có bao nhiêu khả năng khi ta lấy ra ngẫu nhiên 3 con capybara khác nhau?

**Công thức:**

```excel
=COMBIN(5, 3)
```

**Kết quả:**

```excel
10
```

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| hoán vị | permutation |
| tổ hợp | combination |
| chỉnh hợp | (có thể được dịch là) arrangement |
