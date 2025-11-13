---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Mảng

## Khái quát

- Là cấu trúc dữ liệu dùng để xử lý tập hợp nhiều phần tử
- Các phần tử nằm liên tiếp nhau trên bộ nhớ
- Kích thước hoặc độ dài:
  - Là số phần tử của mảng
  - Là hữu hạn
- Mỗi phần tử:
  - Chỉ số (hoặc vị trí)
    - Dùng để truy xuất phần tử
  - Giá trị
    - Cùng kiểu dữ liệu

## Phân loại

### Mảng một chiều

### Mảng hai chiều


#### Khởi tạo

- Liệt kê phần tử
- Hàm `full()`

#### Truy xuất phần tử

- Chỉ số: gồm chỉ số hàng và chỉ số cột
- `A[0][0]` là phần tử đầu tiên.
- `A[2][3]` là phần tử nằm ở hàng 2, cột 3

#### Duyệt mảng

- Dùng hai vòng lặp lồng nhau:
    - Vòng lặp ngoài duyệt hàng
    - Vòng lặp trong duyệt cột