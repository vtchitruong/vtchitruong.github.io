---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Sắp xếp

## Bài toàn sắp xếp

### Input

- Mảng A, n phần tử

### Output

- Mảng A có thứ tự tăng dần

## Thuật toán sắp xếp nổi bọt

### Vòng lặp ngoài: Duyệt mảng từ đầu đến áp cuối bằng biến `i`

### Vòng lặp trong: Duyệt mảng từ đầu đến `n - 1 - i` bằng biến `j`

- Hoán vị `A[j]` và `A[j + 1]`

## Thuật toán sắp xếp tráo đổi

### Vòng lặp ngoài: Duyệt mảng từ đầu đến áp cuối bằng biến `i`

### Vòng lặp trong: Duyệt mảng từ `i + 1` đến cuối bằng biến `j`

- Hoán vị `A[i]` và `A[j]`