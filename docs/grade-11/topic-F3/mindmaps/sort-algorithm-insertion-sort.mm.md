---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Sắp xếp

## Bài toán

- Đầu vào: mảng `A` gồm `n` số nguyên
- Đầu ra: mảng `A` có thứ tự tăng dần

## Thuật toán

### Sắp xếp chọn

### Sắp xếp chèn

- Duyệt `A[i]` từ 1 đến cuối mảng:

  Duyệt `A[j]` từ `i - 1` ngược về đầu mảng:

    - Dịch chuyển `A[j]` sang phải một vị trí    
    - Chèn `t` vào vị trí `j + 1`
    - Dừng vòng lặp khi `j` âm hoặc gặp `A[j] <= A[i]`
    
### Sắp xếp nổi bọt

### Sắp xếp tráo đổi