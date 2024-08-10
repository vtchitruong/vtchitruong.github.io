# Đề mục và danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách tạo:

    - Các đề mục của một bài viết
    - Nội dung theo dạng danh sách

## Đề mục

**Headings**, có thể tạm dịch là *đề mục* hoặc *tiêu đề con*, đóng vai trò làm tựa đề cho những phần nội dung khác nhau trong tài liệu.

Headings chủ yếu dùng để giúp người đọc hiểu được cách tổ chức nội dung, từ đó định hướng tốt hơn khi đọc tài liệu.

*Bảng 1. Sáu cấp độ của đề mục*

| Phần tử | Công dụng |
| --- | --- |
| `<h1>` | Tạo đề mục cấp 1 |
| `<h2>` | Tạo đề mục cấp 2 |
| `<h3>` | Tạo đề mục cấp 3 |
| `<h4>` | Tạo đề mục cấp 4 |
| `<h5>` | Tạo đề mục cấp 5 |
| `<h6>` | Tạo đề mục cấp 6 |

Khi được đánh dấu bằng các thẻ này, văn bản sẽ có định dạng khác với những phần văn bản còn lại, chẳng hạn, cỡ chữ lớn hơn, in đậm, có khoảng trống so với dòng trên và dưới.

Do đó, ta không nên định dạng cỡ chữ lớn hoặc đậm cho các headings, chỉ thay đổi font hoặc màu sắc nếu muốn.

Ví dụ 1:  
Đoạn mã trong tập tin **portfolio.html** minh họa các đề mục bằng các thẻ từ `<h1>` đến `<h6>`.

``` html title="portfolio.html" linenums="35"
    <p>Đây là một góc của thế giới mà mình sống trong đó</p>
    <h1>Kỷ nguyên Trí tuệ nhân tạo</h1>
    <h2>Thời đại Máy học (Machine Learning)</h2>
    <h3>Sự trỗi dậy của mạng Nơron (Neural networks)</h3>
    <h4>Kiến trúc Học sâu (Deep Learning)</h4>
    <h5>Mô hình Ngôn ngữ lớn (Large Language Models), một ứng dụng Deep Learning</h5>
    <h6>Transformer và Attention, kỹ thuật quan trọng trong mô hình Ngôn ngữ lớn</h6>
```

[Click để xem kết xuất trang portfolio trong tab mới](headings-vs-lists/portfolio-1.html#end){:target="_blank"}

## Danh sách

**Danh sách** được dùng để gom nhóm những mục hoặc nội dung có liên quan với nhau.

HTML hỗ trợ hai loại danh sách: **không có thứ tự** và **có thứ tự**. (1)
{ .annotate }

1.  HTML còn hỗ trợ loại danh sách thứ ba là [description list](https://www.w3schools.com/html/html_lists_other.asp){:target="_blank"}.

*Bảng 2. Danh sách*

| Phần tử | Công dụng |
| --- | --- |
| `<ul>` | Định nghĩa danh sách không có thứ tự |
| `<ol>` | Định nghĩa danh sách có thứ tự |
| `<li>` | Định nghĩa từng mục bên trong cả hai loại danh sách |

### Danh sách không có thứ tự

Kiểu danh sách này thường dùng ký hiệu **đĩa tròn màu đen** &#8226; để đánh dấu đầu dòng cho các mục. Ký hiệu này sẽ thay đổi khi cấp độ của đề mục thay đổi.

Ví dụ 2:  
Đoạn mã trong tập tin **portfolio.html** minh họa danh sách không có thứ tự.

``` html title="portfolio.html" linenums="43"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Python</li>
        <li>C#</li>
        <li>Typescript</li>    
    </ul>
```

[Click để xem kết xuất trang portfolio trong tab mới](headings-vs-lists/portfolio-2.html#end){:target="_blank"}

### Danh sách có thứ tự

Kiểu danh sách này dùng các ký hiệu số hoặc chữ như: **1**, **A**, **a**, **I**, **i** để đánh số đầu dòng cho các mục.

Để chọn kiểu đánh số thứ tự, ta chỉ định giá trị cho thuộc tính `type`, chẳng hạn `type="1"`, `type="A"`, v.v...

Nếu không muốn thứ tự bắt đầu từ 1 hoặc A, ta cũng chỉ rõ trong `type`, chẳng hạn: `type="3"`, `type="C"`, v.v...

Ví dụ 3:  
Đoạn mã trong tập tin **portfolio.html** minh họa danh sách có thứ tự, đánh số theo số La Mã.

``` html title="portfolio.html" linenums="54"
    <h2>Những môn thể thao mà mình yêu thích từ nhiều nhất đến ít nhất</h2>
    <ol>
        <li>Bóng đá</li>
        <li>Bóng rổ</li>
        <li>Võ thuật</li>
        <li>Nhảy dây</li>
        <li>Búng thun</li>
    </ol>
```

[Click để xem kết xuất trang portfolio trong tab mới](headings-vs-lists/portfolio-3.html#end){:target="_blank"}

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/headings-vs-lists.mm.md!}
*Sơ đồ tóm tắt các phần tử đánh dấu đề mục và danh sách*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| danh sách | list |
| danh sách có thứ tự | ordered list |
| danh sách không có thứ tự | unordered list |
| đề mục | headings |
| mục trong danh sách | list item |
| văn bản | text |
