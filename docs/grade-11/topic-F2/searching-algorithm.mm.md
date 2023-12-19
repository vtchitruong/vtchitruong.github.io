---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Tìm kiếm

## Bài toán tìm kiếm

- Input: Mảng `A` và giá trị cần tìm `k`
- Output: Vị trí tìm thấy `k`

## Thuật toán tìm kiếm

### Tìm kiếm tuần tự

#### Ý tưởng

- Duyệt mảng từ đầu đến cuối
- So sánh từng phần tử với `k`

#### Viết chương trình

- Dùng vòng lặp `for`

### Tìm kiếm nhị phân

#### Ý tưởng

- Chia đôi mảng thành nửa trái và nửa phải
- Xét xem `k` nằm ở bên nào để tiếp tục chia đổi nửa mảng con đó

#### Viết chương trình

- Dùng vòng lặp `while`