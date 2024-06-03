# Cấu trúc cơ bản của trang web HTML

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số việc ban đầu khi tạo một trang web, bao gồm:

    - Sử dụng một trình soạn thảo
    - Tạo tập tin .html
    - Viết một trang web HTML cơ bản

## Công cụ viết mã HTML

Để viết mã lệnh HTML, ta có thể sử dụng bất kỳ chương trình soạn thảo văn bản (1) nào tùy ý, chẳng hạn những chương trình phổ biến hiện nay là:
{ .annotate }

1.  Mặc dù **text editor** và **word processor** đều là chương trình làm việc với văn bản, chúng vẫn khác nhau về tính năng và mục đích.

    Bằng một cách nào đó, một số tài liệu tiếng Việt, bao gồm sách giáo khoa, dịch chung là **chương trình soạn thảo văn bản**, nên có thể dẫn tới một vài nhầm lẫn nho nhỏ.

&nbsp;

- [Visual Studio Code](https://code.visualstudio.com/){:target="_blank}
- [VS Code for the Web](https://vscode.dev/){:target="_blank} (là bản web của Visual Studio Code)
- [Notepad++](https://notepad-plus-plus.org/){:target="_blank}
- [Sublime Text](https://www.sublimetext.com/){:target="_blank}
- [Atom](https://atom-editor.cc/){:target="_blank}
- [Brackets](https://brackets.io/){:target="_blank}
- [Phoenix Code](https://phcode.dev/){:target="_blank} (chạy online)
- [CodePen](https://codepen.io/){:target="_blank} (chạy online)
- [PlayCode](https://playcode.io/){:target="_blank} (chạy online)
- v.v...

## Thao tác trên các chương trình online

Phần lớn các trình soạn thảo online đều có các khung để viết mã lệnh HTML, CSS và Javascript, và một khung kết xuất trang web ngay tức thì.

Do đó, ta chỉ cần gõ mã lệnh HTML, không cần cài đặt thêm gì.

!!! info "Gợi ý về công cụ dùng làm minh họa"

    Trong bối cảnh của chương trình lớp 12, chủ thớt nhận thấy [PlayCode](https://playcode.io/){:target="_blank} là công cụ minh họa phù hợp.

## Thao tác trên các chương trình cài đặt desktop

**Bước 1: Tạo thư mục chứa website**

Tạo thư mục có tên tùy ý, ví dụ **mysite**. Không nên gõ dấu tiếng Việt và khoảng trắng.

**Bước 2: Tạo tập tin .html**

Chọn một trình soạn thảo tùy ý, tạo tập tin có phần tên mở rộng là **.html**, ví dụ **portfolio.html** (1).
{ .annotate }

1.  Portfolio là trang web dùng để *flex* về bản thân, bao gồm thông tin cá nhân và những dự án hoặc sản phẩm mà mình đã thực hiện.

Thao tác tạo là tương tự nhau giữa các trình soạn thảo: chọn menu **File** > chọn mục **New**.

Thao tác lưu cũng vậy: chọn menu **File** > chọn mục **Save**, hoặc nhấn ++ctrl+s++.

!!! tip "Save"

    Nhớ ==thường xuyên **save**== để thể hiện sự trân trọng thành quả của mình.

**Bước 3: Xem trang web sản phẩm**

Sau mỗi lần lưu, ta xem trang web bằng một trong hai cách:

- Click đôi vào tập tin .html để mở bằng trình duyệt mặc định trên máy.
- Trong trình duyệt, nhấn phím ++f5++ để làm mới lại trang web.

## Cấu trúc tập tin HTML

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

Phần tử `<head>` chứa các **metadata** của trang web. Chẳng hạn, `<title>` để báo cho trình duyệt biết về tiêu đề của trang web, giúp hiển thị trên tab của trình duyệt và làm đầu đề trong trang kết quả của những cỗ máy tìm kiếm như Google.

Hoặc `<meta charset="utf-8">` dùng để báo cho trình duyệt biết phải dịch nội dung trang web theo bảng mã nào, trường hợp này là utf-8.

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

{!grade-12/topic-F/basic-structure-of-an-html-web-page.mm.md!}
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