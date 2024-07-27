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

## Thuật toán sắp xếp chọn

### Vòng lặp ngoài: duyệt mảng từ đầu đến áp cuối bằng biến `i`

- Hoán vị `A[min]` tìm được với `A[i]`.

### Vòng lặp trong: duyệt mảng từ `i + 1` đến cuối bằng biến `j`

- Tìm phần tử nhỏ nhất `A[min]`.