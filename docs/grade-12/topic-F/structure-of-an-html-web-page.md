# Cấu trúc của trang web

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - Cấu trúc cơ bản của một trang web HTML.
    - Cách tạo trang web HTML đầu tiên.

## Phần tử `<html>`

Phần tử gốc `<html>` nằm ngoài cùng, bao các phần tử khác và dùng để báo cho trình duyệt biết đang làm việc với tài liệu HTML.

Ngoài ra, dòng trên cùng có thêm khai báo `<!DOCTYPE>` dùng để báo cho trình duyệt biết phải kết xuất trang web này theo chuẩn HTML5, là phiên bản mới nhất hiện nay của HTML.

``` html title="portfolio.html" linenums="1" hl_lines="2-4"
<!DOCTYPE html>
<html>

</html>
```

!!! tip "Ghi chú về việc viết mã lệnh trong chủ đề F"

    Tập tin **portfolio.html** được dùng làm ví dụ minh họa xuyên suốt các bài trong chủ đề.

    Bạn chỉ cần lần lượt viết thêm mã lệnh vào, rồi làm mới lại trang web để xem kết quả. Nếu trang web kết xuất không như ý, bạn quay lại điều chỉnh mã lệnh.
    
    Những tập tin .html khác sẽ được đề cập cụ thể khi cần.

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

Phần tử `<head>` chứa các **metadata** của trang web, chẳng hạn:

- `<title>` dùng để báo cho trình duyệt biết tiêu đề của trang web, hiển thị trên tab của trình duyệt và làm đầu đề trong trang kết quả của những cỗ máy tìm kiếm như Google.

- `<meta charset="utf-8">` dùng để báo cho trình duyệt biết phải dịch nội dung trang web theo bảng mã nào, trường hợp này là utf-8.

Người dùng không trực tiếp nhìn thấy những nội dung trong phần tử `<head>` này.

``` html title="portfolio.html" linenums="1" hl_lines="4 5"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My portfolio</title>
</head>

<body>

</body>
</html>
```

## Phần tử `<body>`

Phần tử `<body>` là nơi chứa các phần tử khác mà người dùng trực tiếp thấy được, là nơi thể hiện năng lực và đẳng cấp thiết kế web của bạn.

Chẳng hạn, phần tử `<h1>` dùng để đánh dấu cấp đề mục cấp 1 (heading 1), là cấp lớn nhất; phần tử `<p>` dùng để đánh dấu một đoạn văn bản (paragraph).

``` html title="portfolio.html" linenums="1" hl_lines="9 10"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My portfolio</title>
</head>

<body>
    <h1>Chào mừng bạn ghé thăm portfolio</h1>
    <p>Trang web này tự tay mình dệt nên.</p>
</body>
</html>
```

Nhấn ++ctrl+s++ và xem trang web kết xuất như hình dưới đây.

![Tập tin HTML và trang web kết xuất](https://lh3.googleusercontent.com/pw/AP1GczMTBLYaQJ6Ge20t9LmubGSKt6hpqbRaQh2FeHLXogde00SzH2KpzgH2XNoRCtTjafaPSV_yQE-nRa5cuyMPKd44VaVGcgubKE5qMUeop2wcMkmlv2Pt=w2400){ width=800 loading=lazy data-title="Tập tin HTML và trang web kết xuất" data-description="Cửa sổ bên trái là VS Code dùng để viết mã lệnh HTML. Cửa số bên phải là trình duyệt web dùng để kết xuất trang web."}

Như vậy, bạn đã dựng được trang web bằng mã lệnh ~có~ ^thể^ ~là~ đầu tiên trong cuộc đời. Just easy 😉

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/structure-of-an-html-web-page.mm.md!}
*Sơ đồ tóm tắt cấu trúc của một tập tin HTML*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chương trình soạn thảo văn bản | text editor |
| kết xuất | render |
| làm mới lại | refresh |
| phần tử | element |
| thẻ | tag |
| thuộc tính | attribute |