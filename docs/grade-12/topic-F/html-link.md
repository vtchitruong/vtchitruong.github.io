---
icon: octicons/link-24
---

# Tạo siêu liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày phần tử HTML dùng để tạo siêu liên kết.

## Phần tử tạo siêu liên kết

**Siêu liên kết** giúp truy cập nhanh đến những tài nguyên bên ngoài như trang web, email, v.v... hoặc đến một vị trí khác trong trang web hiện hành.

Để tạo siêu liên kết, ta sử dụng phần tử `<a>`.

```html
<a href="url_của_trang_web_mới"
    target="nơi_mở_trang_web_mới">Nội dung hiển thị</a>
```

Một số giá trị của thuộc tính `target`:

| Giá trị | Công dụng |
| --- | --- |
| `_self` | Đây là giá trị mặc định, mở trang web mới ngay trong tab hiện hành |
| `_blank` | Mở trang web mới trong tab mới |
| tên của `<iframe>` | Mở trang web mới trong iframe nào đó |

Ví dụ:  
Trong bảng đã tạo ở bài trước, ta thêm liên kết dẫn đến trang thông tin của từng người trong bảng.

``` html title="portfolio.html" linenums="63" hl_lines="11 17 23"
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

[Click để xem kết xuất trang portfolio trong tab mới](html-link/portfolio.html#end){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| nơi mở trang web mới, đích đến | target |
| siêu liên kết | hyperlink, link |