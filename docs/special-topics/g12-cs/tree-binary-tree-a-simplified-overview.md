# Khái quát về cây nhị phân

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khái niệm chung về cây nhị phân.

## Khái niệm

!!! note ""

    **Cây nhị phân** là loại cây mà mỗi nút có **tối đa hai nút con**: nút con trái và nút con phải.

---

## Các loại cây nhị phân đặc biệt

### Cây tìm kiếm nhị phân

Là loại cây quan trọng nhất để sắp xếp dữ liệu. Quy tắc của nó là:

- Mọi nút ở **cây con bên trái** đều có giá trị **nhỏ hơn** nút gốc.
- Mọi nút ở **cây con bên phải** đều có giá trị **lớn hơn** nút gốc.

### Cây nhị phân cân bằng

Là cây mà tại mỗi nút, sự chênh lệch chiều cao giữa cây con bên trái và cây con bên phải **không vượt quá một giá trị xác định**, thường là 1.

Ví dụ: cây AVL, cây Đỏ-Đen

Các cây này có thể tự động điều chỉnh để chiều cao của các nhánh không chênh lệch quá nhiều.

### Cây biểu thức

Là cây được dùng để tính toán các phép tính phức tạp. Trong đó:

- Nút lá là các **toán hạng**.
- Nút trong là các **toán tử**.

---

## Lợi ích

Lợi ích chủ yếu của cây nhị phân nằm ở khía cạnh tốc độ. Trong một cây tìm kiếm nhị phân cân bằng, thời gian để tìm một giá trị giữa hàng triệu phần tử chỉ mất khoảng $O(log n)$ bước.

Ví dụ:  
Với 1 triệu phần tử, ta chỉ cần khoảng 20 lần so sánh là tìm thấy kết quả.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cây cân bằng | balanced tree |
| cây con trái/phải | left/right subtree |
| cây nhị phân | binary tree |
| cây tìm kiếm nhị phân | binary search tree (BST) |