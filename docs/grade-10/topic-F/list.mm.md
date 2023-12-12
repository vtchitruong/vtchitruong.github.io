---
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Kiểu dữ liệu `list`

## Công dụng

- Xử lý danh sách gồm nhiều phần tử.

## Phần tử

- Các phần tử có thể có kiểu dữ liệu khác nhau.
- Mỗi phần tử có hai yếu tố: **chỉ số** và **giá trị**.
- Phần tử đầu có chỉ số là **0**, phần tử cuối cùng có chỉ số là **n - 1**.

## Duyệt danh sách

### Dùng chỉ số

- `for i in range(len(L)): do_something`

### Dùng toán tử `in`

- `for x in L: do_something`

### if lồng trong for

- `for i in range(len(L)): if ...`

## Hàm xử lý danh sách

- Lấy số lượng phần tử: `len()`
- Thêm phần tử: `append()`, `insert()`
- Xóa phần tử: `remove`, `pop`, `del`
- Xóa danh sách: `clear`, `del`