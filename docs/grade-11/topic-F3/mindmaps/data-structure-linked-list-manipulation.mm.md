---
markmap:
  colorFreezeLevel: 3
  maxWidth: 360
---

# Thao tác với danh sách liên kết

## Định nghĩa lớp `Node`

## Định nghĩa lớp `LinkedList`

## Khởi tạo các node và danh sách liên kết

## Duyệt danh sách liên kết

- Dùng vòng lặp và biến `current` để duyệt

## Thêm node mới

### Chèn vào đầu

- Cho `head` trỏ đến node mới

### Thêm vào cuối

- Cho node cuối cùng trỏ đến node mới

### Chèn vào trước một node xác định

- Dùng hai biến `previous` và `current`.
- Cho node mới trỏ đến `current`.
- Cho `previous` trỏ đến node mới.

## Xoá node

### Xoá node đầu tiên

- Cho `head` trỏ đến node kế tiếp.

### Xoá node cuối cùng

- Dùng hai biến `previous` và `current`.
- Cho `previous` trỏ đến `None`.

### Xoá một node xác định

- Dùng hai biến `previous` và `current`.
- Cho `previous` trỏ đến node kế tiếp của `current`.