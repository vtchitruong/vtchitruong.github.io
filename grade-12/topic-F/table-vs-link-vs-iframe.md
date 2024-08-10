# Bảng, siêu liên kết và khung

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách tạo:
    
    - Bảng
    - Siêu liên kết
    - Khung, dùng để nhúng trang web khác vào.

## Bảng

Để tạo bảng với hàng đầu tiên là hàng tiêu đề, ta sử dụng các phần tử trong bảng 1.

*Bảng 1. Các phần tử định nghĩa bảng*

| Phần tử | Công dụng |
| --- | --- |
| `<table>` | Định nghĩa toàn bảng |
| `<tr>` | Định nghĩa một hàng |
| `<th>` | Định nghĩa một ô của hàng tiêu đề |
| `<td>` | Định nghĩa một ô của hàng dữ liệu (các hàng còn lại) |

Ví dụ 1:  
Đoạn mã trong tập tin **portfolio.html** minh họa cách tạo bảng gồm 1 hàng tiêu đề, 3 hàng dữ liệu và 4 cột.

``` html title="porfolio.html" linenums="63"
    <h2>Một vài bạn bè thân thiết</h2>
    <table border="1"> <!-- (1) -->
        <tr>
            <th>Hạng</th>
            <th>Tên</th>
            <th>Nguồn gốc</th>
            <th>Tài sản</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Bernard Arnault</td>
            <td>LVMH</td>
            <td>$211 B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Elon Musk</td>
            <td>Tesla, SpaceX</td>
            <td>$180 B</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Bill Gates</td>
            <td>Microsoft</td>
            <td>$104 B</td>
        </tr>
    </table>
```
{ .annotate }

1.  `border="1"` giúp vẽ thêm đường viền dày 1 pixel xung quanh bảng và xung quanh mỗi ô. Nếu không có thuộc tính `border`, bảng sẽ không có đường viền nào cả.

    Nếu muốn *vẽ* đường viền đẹp hơn, ta phải nhờ đến CSS, được đề cập trong những bài sau. 

[Click để xem kết xuất trang portfolio trong tab mới](table/portfolio-1.html#end){:target="_blank"}

Để thêm phần *linh hoạt* cho bảng, ta có thể sử dụng các thuộc tính được liệt kê trong bảng 2.

*Bảng 2. Những thuộc tính dành cho bảng*

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `border` | Đường viền |
| `cellspacing` | Khoảng cách giữa các ô |
| `cellpadding`  | Khoảng cách từ nội dung đến các đường viền của ô |
| `colspan="4"` | Số ô gộp vào trên cùng một hàng. Ví dụ: gộp 4 ô |
| `rowspan="2"` | Số ô gộp trên cùng một cột. Ví dụ: gộp 2 ô |
| `width="75%"` | Chiều rộng chiếm 75% |
| `height="50px` | Chiều cao 50 pixel |
| `bgcolor` | Màu nền |
| `align` | Căn lề bảng với trang hoặc căn lề nội dung bên trong một hàng hoặc ô |

!!! tip "Lưu ý về định dạng bảng"

    Trên thực tế, người ta không định dạng bảng những thuộc tính HTML này, thay vào đó sử dụng CSS.

## Siêu liên kết

Siêu liên kết giúp truy cập nhanh đến những tài nguyên bên ngoài như trang web, email, v.v... hoặc đến một vị trí khác trong trang web hiện hành.

Để tạo siêu liên kết, ta sử dụng phần tử `<a>`.

``` html
<a href="url_của_trang_web_mới"
    target="nơi_mở_trang_web_mới">Nội dung hiển thị</a>
```

Mặc định, trang web mới sẽ hiển thị trong tab hiện hành của trình duyệt, trang web hiện hành tạm *mất đi*.

*Bảng 3. Giá trị của thuộc tính `type`*

| Giá trị | Công dụng |
| --- | --- |
| `_self` | Mở trang web mới ngay trong tab hiện hành |
| `_blank` | Mở trang web mới trong tab mới |
| tên của `<iframe>` | Mở trang web mới trong iframe nào đó |

Ví dụ 2:  
Bổ sung liên kết dẫn đến trang thông tin của từng người trong bảng.

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

[Click để xem kết xuất trang portfolio trong tab mới](table/portfolio-2.html#end){:target="_blank"}

## Khung

Để nhúng một trang web khác vào bên trong web hiện hành, ta sử dụng phần tử `<iframe>` (inline frame, tức khung nằm cùng dòng).

``` html
<iframe src="url_của_trang_web_mới"
        width="chiều_rộng"
        height="chiều_cao"
        name="tên_của_iframe">
</iframe>
```

Ví dụ 3:  
Đoạn mã trong tập tin **portfolio.html** minh họa ba liên kết và một iframe. Khi nhấn vào một liên kết thì trang web tương ứng sẽ hiển thị trong iframe.

``` html title="iframe.html" linenums="91"
    <h2>Một vài website tham khảo</h2>
    <p><a href="https://htmlreference.io/" target="my_iframe">HTML</a></p>
    <p><a href="https://htmlcheatsheet.com/css/" target="my_iframe">CSS</a></p>
    <p><a href="https://www.fullstackpython.com/" target="my_iframe">Python</a></p>
    <p><iframe src="https://htmlreference.io/" width="80%" height="300" name="my_iframe"></iframe></p>
```

[Click để xem kết xuất trang portfolio trong tab mới](table/portfolio-3.html#end){:target="_blank"}


!!! tip "Lưu ý"

    Vì những lý do an toàn và bảo mật, không phải trang web nào cũng cho phép nhúng vào `<iframe>`.

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/table-vs-link-vs-iframe.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng, liên kết và khung*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảng | table |
| hàng | row |
| khung | inline frame |
| nhúng (trang web) | embed |
| nơi mở trang web mới, đích đến | target |
| ô của hàng tiêu đề | header cell |
| ô của hàng dữ liệu | data cell |
| siêu liên kết | hyperlink, link |