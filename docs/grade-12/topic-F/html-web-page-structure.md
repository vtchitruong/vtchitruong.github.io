---
icon: simple/html5
---

# Cấu trúc trang web

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - Cấu trúc cơ bản của một trang web HTML.
    - Cách tạo trang web HTML đầu tiên.

## Khai báo kiểu tài liệu

Khai báo sau đây được viết ở dòng đầu tiên của tập tin .html:

``` html title="portfolio.html" linenums="1"
<!DOCTYPE html>
```
`<!DOCTYPE html>` cho trình duyệt biết phải kết xuất trang web theo chuẩn HTML5, là phiên bản mới nhất hiện nay của HTML.

!!! tip "Ghi chú về việc viết mã lệnh trong chủ đề F"

    Tập tin **portfolio.html** được dùng làm ví dụ minh họa xuyên suốt các bài trong chủ đề.

    Qua từng bài, bạn chỉ cần viết thêm các đoạn mã HTML hoặc CSS mới vào trang web hiện có của mình, rồi refresh trang web để xem kết quả. Nếu trang web không kết xuất như ý, hãy tìm cách điều chỉnh mã lệnh.
    
    Những tập tin .html khác sẽ được đề cập cụ thể khi cần.

## Phần tử `<html>`

Phần tử gốc `<html>` dùng để đánh dấu bắt đầu và kết thúc của tập tin HTML, chứa toàn bộ nội dung của trang web và báo cho trình duyệt biết đang làm việc với tài liệu HTML.

Phần tử gốc `<html>` nằm ở ngoài cùng và bao các phần tử khác.

``` html title="portfolio.html" linenums="1" hl_lines="2-4"
<!DOCTYPE html>
<html>

</html>
```

Bên trong phần tử `<html>` là hai phần tử thiết yếu: `<head>` và `<body>`.

``` html title="portfolio.html" linenums="1" hl_lines="3-5 7-9"
<!DOCTYPE html>
<html>
<head>

</head>

<body>

</body>
</html>
```

## Phần tử `<head>`

Phần tử `<head>` chứa các **meta data** của trang web. Người dùng không thể nhìn thấy các nội dung trong phần tử `<head>` một cách trực tiếp (1).
{ .annotate }

1.  Các thẻ meta giúp cải thiện SEO (Search Engine Optimization), khả năng truy cập và trải nghiệm người dùng.

``` html title="portfolio.html" linenums="1" hl_lines="4 5"
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

1.  Dùng để báo cho trình duyệt biết phải dịch nội dung trang web theo bảng mã utf-8.

2.  Dòng này là tiêu đề của trang web, có thể hiển thị trên tab của trình duyệt và làm đầu đề trong trang kết quả của những cỗ máy tìm kiếm như Google.

## Phần tử `<body>`

Phần tử `<body>` là nơi chứa các phần tử khác mà người dùng trực tiếp thấy được (1).
{ .annotate }

1. Cũng là nơi thể hiện năng lực và đẳng cấp thiết kế web của bạn.

``` html title="portfolio.html" linenums="1" hl_lines="9 10"
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

1.  Phần tử `<h1>` dùng để tạo đề mục cấp 1 (heading 1), là cấp lớn nhất trong trang web.

2.  Phần tử `<p>` dùng để tạo một đoạn văn bản (paragraph). Có thể tạm hiểu, **đoạn** là phần được phân cách bởi hai dòng trống ở hai đầu. 

Nhấn ++ctrl+s++ và xem trang web kết xuất như hình dưới đây.

![Tập tin HTML và trang web kết xuất](https://lh3.googleusercontent.com/pw/AP1GczMTBLYaQJ6Ge20t9LmubGSKt6hpqbRaQh2FeHLXogde00SzH2KpzgH2XNoRCtTjafaPSV_yQE-nRa5cuyMPKd44VaVGcgubKE5qMUeop2wcMkmlv2Pt=w2400){ width=800 loading=lazy data-title="Tập tin HTML và trang web kết xuất" data-description="Cửa sổ bên trái là VS Code dùng để viết mã lệnh HTML. Cửa số bên phải là trình duyệt web dùng để kết xuất trang web."}

Như vậy, bạn đã dựng được trang web (bằng mã lệnh) ~có~ ^thể^ ~là~ đầu tiên trong cuộc đời. That was easy 😉!

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-web-page-structure.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chương trình soạn thảo văn bản | text editor |
| kết xuất | render |
| làm mới lại | refresh |
| phần tử | element |
| thẻ | tag |
| thuộc tính | attribute |