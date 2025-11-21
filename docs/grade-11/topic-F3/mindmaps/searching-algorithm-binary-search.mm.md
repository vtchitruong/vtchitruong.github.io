---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Tìm kiếm

## Bài toán

- Đầu vào: mảng `A` và giá trị cần tìm `k`
- Đầu ra: chỉ số tìm thấy `k` hoặc `-1`

## Thuật toán

### Tuần tự

### Nhị phân

#### Ý tưởng

- Xác định mốc giữa `mid` từ mốc trái và mốc phải
- Nếu `A[mid] == k` thì trả về `mid`.
- Ngược lại, xét xem `k` nằm ở nửa mảng con bên trái hay bên phải.

#### Viết chương trình

- Dùng vòng lặp `while`