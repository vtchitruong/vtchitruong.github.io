---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Tìm kiếm

## Bài toán

- Input: Mảng `A` và giá trị cần tìm `k`
- Output: Vị trí tìm thấy `k`

## Thuật toán

### Tuần tự

### Nhị phân

#### Ý tưởng

- Chia đôi mảng thành nửa trái và nửa phải
- Nếu `A[mid]` bằng `k` thì trả về `mid`.
- Ngược lại, xét xem `k` nằm ở bên nào để tiếp tục chia đôi nửa mảng con đó.

#### Viết chương trình

- Dùng vòng lặp `while`