---
icon: octicons/list-ordered-24
---

# Định kiểu danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các thuộc tính CSS dành cho các phần tử tạo danh sách.

## Thuộc tính dành cho dấu hoặc số đầu dòng của danh sách

| Thuộc tính | Ý nghĩa | Giá trị phổ biến |
| --- | --- | --- |
| `list-style-type` | Chỉ định kiểu có sẵn | Xem bảng bên dưới |
| `list-style-image` | Sử dụng hình ảnh | `url('đường_dẫn/hình_ảnh.png')` |
| `list-style-position` | Chỉ định vị trí của dấu đầu dòng so với phần nội dung | `inside`, `outside` | 

## Một số giá trị của `list-style-type`

| Giá trị | Giải thích | Phần tử áp dụng |
| --- | --- | --- |
| disc (mặc định) | Hình tròn tô đen | Danh sách không thứ tự `<ul>` |
| circle | Hình tròn rỗng | Danh sách không thứ tự `<ul>` |
| square | Hình vuông | Danh sách không thứ tự `<ul>` |
| decimal | Số thập phân: 1, 2, 3 |  Danh sách có thứ tự `<ol>` |
| decimal-leading-zero | Số thập phân có chữ số 0 ở đầu: 01, 02, 03 | Danh sách có thứ tự `<ol>` |
| lower-roman | Số La Mã thường: i, ii, iii | Danh sách có thứ tự `<ol>` |
| upper-roman | Số La Mã in hoa: I, II, III | Danh sách có thứ tự `<ol>` |
| lower-alpha | Chữ thường: a, b, c | Danh sách có thứ tự `<ol>` |
| upper-alpha | Chữ in hoa: A, B, C | Danh sách có thứ tự `<ol>` |
| none | Không đánh dấu đầu dòng | Cả hai. Thường dùng cho menu. |

Ví dụ:  
Đoạn mã sau minh họa cách định kiểu cho dấu đầu dòng bằng hình ảnh.

```css title="style.css" linenums="48"
ul {
    list-style-image: url('https://img.icons8.com/fluency/24/module.png');
}
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-list/portfolio.html#langlist){:target="_blank"}