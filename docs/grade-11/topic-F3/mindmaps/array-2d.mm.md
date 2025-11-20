---
markmap:
  colorFreezeLevel: 3
  maxWidth: 360
---

# Mảng hai chiều

## Khái niệm

- Là cấu trúc dữ liệu dùng để lưu trữ các phần tử theo dạng bảng

## Khởi tạo

- Liệt kê bằng các cặp ngoặc lồng nhau `[[ ], [ ], ..., [ ]]` 
- Hàm `full()` của `numpy`

## Truy xuất phần tử

- Chỉ số hàng và chỉ số cột
- `A[0][0]` là phần tử đầu tiên
- `A[row - 1][col - 1]` là phần tử cuối cùng, nằm ở hàng `row - 1`, cột `col - 1`

## Duyệt mảng

- Lấy số hàng: `len(A)`
- Lấy số cột: `len(A[0])`
- Dùng hai vòng lặp lồng nhau:
    - Vòng lặp ngoài duyệt từng hàng
    - Vòng lặp trong duyệt từng cột