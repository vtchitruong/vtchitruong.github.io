---
icon: simple/html5
---

# Cấu trúc trang web

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - Cấu trúc cơ bản của một trang web HTML.
    - Cách tạo trang web HTML đầu tiên.

## Khai báo kiểu tài liệu

!!! note "`<!DOCTYPE html>`"

    Báo cho trình duyệt biết phải kết xuất trang web theo chuẩn HTML5, là phiên bản mới nhất hiện nay của HTML.

Dòng này được viết ở ngay đầu mỗi tập tin .html:

```html title="portfolio.html" linenums="1"
<!DOCTYPE html>
```

!!! tip "Về việc viết mã lệnh trong chủ đề này"

    Tập tin **portfolio.html** được dùng làm ví dụ minh họa xuyên suốt các bài trong chủ đề.

    Qua từng bài, bạn chỉ cần viết thêm các đoạn mã HTML hoặc CSS mới vào trang web hiện có của mình, rồi refresh trang web để xem kết quả.
    
    Nếu trang web không kết xuất như ý, hãy tìm cách điều chỉnh mã lệnh.
    
    Những tập tin .html khác sẽ được đề cập cụ thể khi cần.

---

## Phần tử `<html>`

!!! note "`<html>`"

    - Là phần tử gốc.
    - Bao bọc toàn bộ các phần tử khác.
    - Đánh dấu bắt đầu và kết thúc của tài liệu HTML.
    - Giúp trình duyệt nhận biết và xử lý nội dung theo đúng chuẩn trang web.

Thêm thẻ `<html>` vào dòng 2 và 4:

```html title="portfolio.html" linenums="1" hl_lines="2-4"
<!DOCTYPE html>
<html>

</html>
```

Thêm thẻ `<head>` và `<body>` vào trong `<html>`:

```html title="portfolio.html" linenums="1" hl_lines="3-5 7-9"
<!DOCTYPE html>
<html>
<head>

</head>

<body>

</body>
</html>
```

---

## Phần tử `<head>`

!!! note "`<head>`"

    Phần tử `<head>` chứa các **meta data** của trang web, tạm dịch là **dữ liệu mô tả** hoặc **siêu dữ liệu**.
    
    Người dùng không thể nhìn thấy các nội dung trong phần tử `<head>` một cách trực tiếp (1).
    { .annotate }

    1.  Các phần tử meta có thể cải thiện:
    
        - SEO (Search Engine Optimization), giúp trang web dễ dàng được tìm thấy trên Google.
        - Trải nghiệm người dùng, chẳng hạn như: ngôn ngữ, bảng mã.

Thêm thẻ `<meta>` và `<title>` vào trong thẻ `<head>`:

```html title="portfolio.html" linenums="1" hl_lines="4 5"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> <!-- (1)! -->
    <title>My portfolio</title> <!-- (2)! -->
</head>

<body>

</body>
</html>
```
{ .annotate }

1.  Phần tử `<meta>` báo cho trình duyệt biết phải hiển thị nội dung trang web theo bảng mã utf-8.

2.  Phần tử `<title>` xác định **tiêu đề của trang web**, được hiển thị trên tab của trình duyệt và trang kết quả tìm kiếm của Google hoặc Bing.

---

## Phần tử `<body>`

!!! note "`<body>`"

    Phần tử `<body>` là nơi chứa các phần tử khác mà người dùng trực tiếp thấy được (1).
    { .annotate }

    1. Cũng là nơi thể hiện năng lực và đẳng cấp thiết kế web của bạn.

Thêm thẻ `<h1>` và `<p>` vào trong thẻ `<body>`:

```html title="portfolio.html" linenums="1" hl_lines="9 10"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My portfolio</title>
</head>

<body>
    <h1>Chào mừng bạn ghé thăm portfolio</h1> <!-- (1)! -->
    <p>Trang web này tự tay mình dệt nên.</p> <!-- (2)! -->
</body>
</html>
```
{ .annotate }

1.  Phần tử `<h1>` tạo đề mục cấp 1 (heading 1), là cấp lớn nhất trong trang web.

2.  Phần tử `<p>` tạo một đoạn văn bản (paragraph).

    **Đoạn** có thể hiểu là phần được phân định bằng hai dòng trống ở hai đầu. 

## Xem trang web kết quả

Nhấn ++ctrl+s++ để lưu.

Click đôi vào tập tin **portfolio.html** để xem kết quả.

Trong hình dưới đây:

- Phần bên trái là mã lệnh HTML đã viết.
- Phần bên phải là kết xuất của trang web.

![Tập tin HTML và trang web kết xuất](https://live.staticflickr.com/65535/55024922998_7378961909_b.jpg){ width=800 loading=lazy data-title="Tập tin HTML và trang web kết xuất" data-description="Cửa sổ bên trái là VS Code dùng để viết mã lệnh HTML. Cửa số bên phải là trình duyệt web dùng để kết xuất trang web."}

Như vậy, bạn đã dựng được trang web (bằng mã lệnh) ~có~ ^thể^ ~là~ đầu tiên trong cuộc đời. That was easy 😉!

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-web-page-structure.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| kết xuất | render |
| phần tử | element |