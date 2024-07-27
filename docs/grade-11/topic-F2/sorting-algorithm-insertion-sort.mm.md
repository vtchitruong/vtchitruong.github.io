---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Sắp xếp

## Bài toán sắp xếp

### Input

- Mảng `A` gồm `n` phần tử

### Output

- Mảng `A` có thứ tự tăng dần

## Thuật toán sắp xếp chèn

### Vòng lặp ngoài: duyệt mảng từ vị trí `1` đến cuối bằng biến `i`

- Gán `A[i]` cho biến tạm `t`.
- Chèn `t` vào vị trí `j + 1`.

### Vòng lặp trong: duyệt mảng từ `i - 1` ngược về đầu bằng biến `j`

- Cho `A[j]` lùi về sau một vị trí.
- Lặp cho đến khi gặp `A[j]` không còn lớn hơn `t`.