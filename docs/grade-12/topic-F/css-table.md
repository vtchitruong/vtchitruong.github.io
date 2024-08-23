---
icon: octicons/table-24
---

# Định kiểu bảng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách định kiểu cho đường kẻ, hàng tiêu đề và các hàng nội dung của bảng.

## Định kiểu đường kẻ

Để tạo đường kẻ đơn, ta thực hiện như sau:

```css title="style.css" linenums="52"
table {
    border-collapse: collapse; /* (1)! */
}

td {
    border: 1px solid #0097be;
}
```
{ .annotate }

1.  Theo mặc định, mỗi ô trong bảng có đường kẻ riêng biệt, dẫn đến việc khi hiển thị, bảng có đường kẻ đôi giữa hai ô kề nhau.

    `border-collapse: collapse;` có tác dụng kết hợp đường kẻ đôi thành đường kẻ đơn.

## Định kiểu hàng tiêu đề

Để định kiểu cho các ô của hàng tiêu đề, ta thực hiện như sau:

```css title="style.css" linenums="60"
th {
    background-color: #0097be;
    height: 1.5rem;
    min-width: 80px;
}
```

## Định kiểu các hàng nội dung

Để các hàng chẵn và lẻ có màu nền xen kẽ nhau, ta thực hiện như sau:

```css title="style.css" linenums="66"
tr:nth-child(even) { /* (1)! */
    background-color: #e5e5e5;
}
```
{ .annotate }

1.  `:nth-child(even)` là bộ chọn pseudo-class, dùng để chọn các hàng chẵn trong bảng.

Để làm nổi bật cho hàng khi rê chuột vào, ta thực hiện như sau:

```css title="style.css" linenums="70"
tr:hover {
    background-color: #ceeaff;
}
```

[Click để xem kết xuất trang portfolio trong tab mới](css-table/portfolio.html#friendlist){:target="_blank"}
