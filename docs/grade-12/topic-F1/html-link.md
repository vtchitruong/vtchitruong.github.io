---
icon: octicons/link-24
---

# Tạo siêu liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày phần tử HTML dùng để tạo siêu liên kết.

## Phần tử tạo siêu liên kết

| Phần tử | Công dụng |
| --- | --- |
| `<a>` (anchor) | Tạo siêu liên kết |

Siêu liên kết giúp truy cập:

- Tài nguyên bên ngoài như trang web khác, email, v.v...
- Một vị trí khác trong trang web hiện hành.

---

## Thuộc tính của siêu liên kết

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `href` | URL của trang web mới cần truy cập |
| `target` | Nơi mở trang web mới |

Một số giá trị của thuộc tính `target`:

| Giá trị | Công dụng |
| --- | --- |
| `_self` | Đây là giá trị mặc định, mở trang web mới ngay trong tab hiện hành |
| `_blank` | Mở trang web mới trong tab mới |
| tên của `<iframe>` | Mở trang web mới trong khung nhúng |

Ví dụ:  
Bổ sung bảng đã tạo ở bài trước: đoạn mã ở các dòng 73, 79 và 85 tạo siêu liên kết đến trang thông tin của từng người trong bảng.

```html title="portfolio.html" linenums="63" hl_lines="11 17 23"
    <h2>Một vài bạn bè thân thiết</h2>
    <table border="1">
        <tr>
            <th>Hạng</th>
            <th>Tên</th>
            <th>Nguồn gốc</th>
            <th>Tài sản</th>
        </tr>
        <tr>
            <td>1</td>
            <td><a href="https://www.forbes.com/profile/bernard-arnault/" target="_blank">Bernard Arnault</a></td>
            <td>LVMH</td>
            <td>$211 B</td>
        </tr>
        <tr>
            <td>2</td>
            <td><a href="https://www.forbes.com/profile/elon-musk/" target="_blank">Elon Musk</a></td>
            <td>Tesla, SpaceX</td>
            <td>$180 B</td>
        </tr>
        <tr>
            <td>6</td>
            <td><a href="https://www.forbes.com/profile/bill-gates/" target="_blank">Bill Gates</a></td>
            <td>Microsoft</td>
            <td>$104 B</td>
        </tr>
    </table>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-link/portfolio.html#end){:target="_blank"}

!!! tip "Gợi ý dùng giá trị của `target`"

    Nên dùng `_blank` khi muốn người dùng không rời bỏ trang web của mình.

    Nên dùng `_self` khi truy cập trang nội bộ trong cùng website.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| nơi mở trang web mới, đích đến | target |
| siêu liên kết | hyperlink |