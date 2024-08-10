---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Sắp xếp

## Bài toán

- Input: Mảng `A` gồm `n` phần tử
- Output: Mảng `A` có thứ tự tăng dần

## Thuật toán

### Sắp xếp chọn

### Sắp xếp chèn

#### Duyệt `A` từ `1` đến cuối bằng biến `i`

- Gán `A[i]` cho biến tạm `t`
- Duyệt `A` từ `i - 1` ngược về đầu bằng biến `j`:
    - Dịch chuyển A[j] về sau một vị trí
    - Dừng lặp khi gặp `A[j]` không còn lớn hơn `t`
- Chèn `t` vào vị trí `j + 1`.

### Sắp xếp nổi bọt

### Sắp xếp tráo đổi