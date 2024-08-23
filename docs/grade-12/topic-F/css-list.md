---
icon: octicons/list-ordered-24
---

# Định kiểu danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các thuộc tính CSS dành cho danh sách.

## Định kiểu số và dấu đầu dòng

Một số thuộc tính CSS dùng cho số đầu dòng hoặc dấu đầu dòng của mỗi mục trong danh sách:

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| `list-style-type` | Kiểu có sẵn | Xem bảng ngay bên dưới |
| `list-style-image` | Sử dụng hình ảnh khác | `url('đường dẫn và tên tập tin hình ảnh')` |
| `list-style-position` | Vị trí so với phần nội dung | `inside`, `outside` | 


| Giá trị của `list-style-type` | Giải thích | 
| --- | --- |
| disc (mặc định) | Hình tròn tô đen |
| circle | Hình tròn rỗng |
| square | Hình vuông |
| none | Không đánh dấu đầu dòng |
| decimal | Số thập phân: 1, 2, 3 |
| decimal-leading-zero | Số thập phân có chữ số 0 ở đầu: 01, 02, 03 |
| lower-roman | Số La Mã thường: i, ii, iii |
| upper-roman | Số La Mã in hoa: I, II, III |
| lower-alpha | Chữ thường: a, b, c |
| upper-alpha | Chữ in hoa: A, B, C |

Ví dụ:

```css title="style.css" linenums="48"
ul {
    list-style-image: url('https://img.icons8.com/fluency/24/module.png');
}
```

[Click để xem kết xuất trang portfolio trong tab mới](css-list/portfolio.html#langlist){:target="_blank"}
