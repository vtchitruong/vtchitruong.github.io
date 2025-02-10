# Dữ liệu ngẫu nhiên

!!! abstract "Tóm lược nội dung"

    Bài này trình bày hai hàm Excel dùng để chọn trực tiếp ngẫu nhiên các mẫu dữ liệu:
    
    - `RAND()`
    - `RANDBETWEEN()`.

## Mẫu dữ liệu ngẫu nhiên

### Khái niệm

**Dữ liệu ngẫu nhiên** là dữ liệu được tạo ra một cách ngẫu nhiên, không có bất kỳ quy luật hoặc trật tự nào.

**Mẫu dữ liệu ngẫu nhiên**, còn gọi là **mẫu ngẫu nhiên**, là mẫu dữ liệu được chọn từ một tập hợp các mẫu một cách ngẫu nhiên, mà mỗi mẫu đều có cùng xác suất được chọn.

### Đặc điểm

- **Tính đại diện**

    Mẫu ngẫu nhiên được kỳ vọng là đại diện cho tổng thể mà nó được chọn ra. 
    
    Nghĩa là các đặc điểm của mẫu phải phản ánh đúng các đặc điểm của tổng thể.

- **Tính ngẫu nhiên**

    Việc chọn mẫu phải được thực hiện một cách ngẫu nhiên, không có sự thiên vị hoặc ưu tiên nào đối với bất kỳ phần tử nào của tổng thể.

- **Xác suất chọn bằng nhau**

    Mỗi phần tử của tổng thể phải có cùng xác suất được chọn vào mẫu.

### Lợi ích

- **Tiết kiệm thời gian và chi phí**

    Thay vì phải thu thập dữ liệu từ toàn bộ tổng thể, ta có thể thu thập dữ liệu từ một mẫu ngẫu nhiên nhỏ hơn nhưng vẫn đảm bảo tính đại diện.

- **Độ tin cậy**

    Các kết quả phân tích từ mẫu ngẫu nhiên có thể được sử dụng để suy luận về tổng thể với độ tin cậy nhất định.

### Ứng dụng

- **Nghiên cứu khoa học**

    Việc chọn mẫu ngẫu nhiên giúp tiết kiệm thời gian và chi phí, đồng thời bảo đảm tính đại diện và độ tin cậy của kết quả.

- **Thống kê**

    Mẫu ngẫu nhiên được sử dụng để kiểm tra giả thuyết, dự đoán hoặc ước lượng các thông số của tổng thể.

- **Khoa học máy tính**

    - Tạo dữ liệu mô phỏng.
    - Kiểm thử mô hình.
    - Tạo dữ liệu huấn luyện cho các mô hình máy học.
    - Mã hóa dữ liệu.
    - Tạo mật khẩu ngẫu nhiên.
    
- **Nghệ thuật**

    - Tạo hình ảnh, âm thanh, video ngẫu nhiên.
    - Tạo tác phẩm nghệ thuật độc đáo.

## Hàm rand()

Hàm `RAND()` dùng để tạo một số ngẫu nhiên trong khoảng [0, 1) (1).
{ .annotate }

1.  Nghĩa là số ngẫu nhiên tạo ra sẽ lớn hơn hoặc bằng 0 và nhỏ hơn 1.

Cú pháp:

```excel
=RAND()
```

Ví dụ:

```excel
=RAND()
```

Kết quả:

```excel
0.123456789
```

## Hàm randbetween()

Hàm `RANDBETWEEN()` dùng để tạo một số ngẫu nhiên trong đoạn `[bottom, top]` (1).
{ .annotate }

1.  Nghĩa là số ngẫu nhiên tạo ra có thể bằng bottom hoặc bằng top.

Cú pháp:

```excel
=RANDBETWEEN(bottom, top)
```

Trong đó:

- `bottom`: giá trị nhỏ nhất của khoảng.
- `top`: giá trị lớn nhất của khoảng.

Ví dụ:

```excel
=RANDBETWEEN(1, 100)
```

Kết quả:

```excel
42
```

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| dữ liệu ngẫu nhiên | random data |



    
