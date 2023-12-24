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

## Thuật toán sắp xếp chọn

### Vòng lặp ngoài: Duyệt mảng từ đầu đến áp cuối bằng biến `i`

- Hoán vị `A[m]` tìm được với `A[i]`

### Vòng lặp trong: Duyệt mảng từ `i` đến cuối

- Tìm phần tử nhỏ nhất `A[m]`

## Thuật toán sắp xếp chèn

### Vòng lặp ngoài: Duyệt mảng từ `1` đến cuối bằng biến `i`

- Gán `A[i]` cho biến `tmp`
- Chèn `tmp` vào vị trí trống thích hợp

### Vòng lặp trong: Duyệt mảng từ `i - 1` ngược về `0` bằng biến `j`

- Cho `A[j]` lùi về sau một vị trí
- Lặp cho đến khi gặp `A[j]` không lớn `tmp`