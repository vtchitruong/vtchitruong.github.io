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

## Thuật toán sắp xếp nổi bọt

### Vòng lặp ngoài: duyệt mảng từ vị trí `0` đến áp cuối bằng biến `i`

### Vòng lặp trong: duyệt mảng từ vị trí `0` đến `n - 1 - i` bằng biến `j`

- So sánh và hoán vị `A[j]` và `A[j + 1]`