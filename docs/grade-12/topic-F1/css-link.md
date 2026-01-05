---
icon: octicons/link-24
---

# Định kiểu siêu liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các thuộc tính và lớp giả CSS dành cho phần tử tạo siêu liên kết `<a>`.

## Trạng thái mặc định

Mặc định, liên kết có màu xanh và gạch dưới.

Đây là trạng thái ban đầu của liên kết khi trang web được tải lần đầu tiên.

Để thay đổi, ta thực hiện như sau:

```css title="style.css" linenums="28"
a {
    color: #ffa500;
    text-decoration: none; /* (1)! */
}
```
{ .annotate }

1.  Bỏ đường gạch dưới.

## Trạng thái hover

Trạng thái này xảy ra khi người dùng di chuyển trỏ chuột lên trên liên kết.

```css title="style.css" linenums="33"
a:hover {
    color: #fd98a9;
    text-decoration: underline;
    font-size: 1.1rem;
    font-weight: 700;
}
```

## Trạng thái active

Trạng thái này xảy ra khi người dùng click vào liên kết nhưng chưa nhả chuột.

```css title="style.css" linenums="40"
a:active {
    color: #fc3758;
}
```

## Trạng thái visited

Trạng thái này xảy ra sau khi trang web của liên kết đã được tải.

```css title="style.css" linenums="44"
a:visited {
    color: #7360f2;
}
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-link/portfolio.html#website){:target="_blank"}