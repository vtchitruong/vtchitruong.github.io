---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Mảng

## Khái quát

- Là cấu trúc dữ liệu dùng để xử lý tập hợp nhiều phần tử.
- Các phần tử nằm liên tiếp nhau trên bộ nhớ.
- **Kích thước**:
  - Là số phần tử của mảng.
  - Là hữu hạn.
- Mỗi phần tử:
  - **Giá trị**
    - Các phần tử đều cùng kiểu dữ liệu.
  - **Chỉ số**
    - Dùng để truy xuất phần tử.
- Trong Python, dùng `list` để biểu diễn mảng.

## Phân loại

### Mảng một chiều

### Mảng hai chiều

- Dùng để xử lý:
  - Lưới
  - Bảng
  - Ma trận
- Chỉ số: gồm **chỉ số hàng** và **chỉ số cột**

#### Khởi tạo

- Liệt kê phần tử
- Toán tử `*`
- List comprehension

#### Truy xuất phần tử

- `B[0][0]` là phần tử đầu tiên.
- `B[2][3]` là phần tử nằm ở hàng 2 và cột 3.

#### Duyệt mảng

- Dùng hai vòng lặp lồng nhau:
    - Vòng lặp ngoài duyệt hàng.
    - Vòng lặp trong duyệt cột.