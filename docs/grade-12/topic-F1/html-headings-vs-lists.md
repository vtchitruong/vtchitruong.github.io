---
icon: octicons/list-ordered-24
---

# Tạo đề mục và danh sách

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để:
    
    - Tạo đề mục
    - Tạo danh sách

## Tạo đề mục

!!! note "Heading"

    **Heading**, tạm dịch là **đề mục** hoặc **tiêu đề con**, đóng vai trò làm tựa đề cho những phần nội dung khác nhau trong tài liệu.

Ví dụ:  
Trong một cuốn sách, ta có phân bổ như sau:

- `<h1>`: tên cuốn sách
- `<h2>`: tên các chương
- `<h3>`: tên các mục nhỏ trong chương

??? info "Lợi ích của heading"

    - Giúp người đọc hiểu được cách tổ chức nội dung, từ đó định hướng tốt hơn khi đọc tài liệu.
    - Giúp các cỗ máy tìm kiếm như Google Search và Microsoft Bing hiểu được cấu trúc của trang web.
    - Giúp trình duyệt tạo mục lục.
    - Giúp người khiếm thị khi dùng các phần mềm Screen Reader.

Các phần tử dùng để tạo sáu cấp độ của đề mục:

| Phần tử | Công dụng |
| --- | --- |
| `<h1>` | Tạo đề mục cấp 1 |
| `<h2>` | Tạo đề mục cấp 2 |
| `<h3>` | Tạo đề mục cấp 3 |
| `<h4>` | Tạo đề mục cấp 4 |
| `<h5>` | Tạo đề mục cấp 5 |
| `<h6>` | Tạo đề mục cấp 6 |

Khi được đánh dấu bằng các thẻ này, văn bản sẽ có định dạng khác với những phần văn bản còn lại, chẳng hạn, cỡ chữ lớn hơn, in đậm, có khoảng trống so với dòng trên và dưới.

!!! tip "Lưu ý"

    Đừng chọn thẻ chỉ vì kích thước chữ của nó. Hãy chọn theo thứ tự cấp độ quan trọng.

Ví dụ:  
Đoạn mã sau tạo tất cả 6 cấp độ đề mục.

```html title="portfolio.html" linenums="35"
    <p>Đây là một góc của thế giới mà mình sống trong đó</p>
    <h1>Kỷ nguyên Trí tuệ nhân tạo</h1>
    <h2>Thời đại Máy học (Machine Learning)</h2>
    <h3>Sự trỗi dậy của mạng Nơron (Neural networks)</h3>
    <h4>Kiến trúc Học sâu (Deep Learning)</h4>
    <h5>Mô hình Ngôn ngữ lớn (Large Language Models), một ứng dụng Deep Learning</h5>
    <h6>Transformer và Attention, kỹ thuật quan trọng trong mô hình Ngôn ngữ lớn</h6>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-headings-vs-lists/portfolio-1.html#end){:target="_blank"}

---

## Tạo danh sách

!!! note "Danh sách"

    **Danh sách** được dùng để gom nhóm các mục hoặc nội dung có liên quan với nhau, giúp trang web dễ theo dõi hơn.

HTML hỗ trợ hai loại danh sách: **không có thứ tự** và **có thứ tự**. (1)
{ .annotate }

1.  HTML còn hỗ trợ loại danh sách thứ ba là [description list](https://www.w3schools.com/html/html_lists_other.asp){:target="_blank"}.

Các phần tử dùng để tạo danh sách:

| Phần tử | Công dụng |
| --- | --- |
| `<ul>` (unordered list) | Tạo danh sách không có thứ tự |
| `<ol>` (ordered list) | Tạo danh sách có thứ tự |
| `<li>` (list item) | Tạo từng mục bên trong danh sách |

### Không có thứ tự

Kiểu danh sách này thường dùng ký hiệu **đĩa tròn màu đen** &#8226; để đánh dấu đầu dòng cho các mục. Ký hiệu này sẽ thay đổi khi các danh sách lồng nhau.

Ví dụ:  
Đoạn mã sau tạo danh sách mà có thể không quan trọng thứ tự của các mục.

```html title="portfolio.html" linenums="43"
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

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-headings-vs-lists/portfolio-2.html#end){:target="_blank"}

### Có thứ tự

Kiểu danh sách này dùng số hoặc chữ để đánh thứ tự cho các mục.

Để chọn kiểu đánh thứ tự, ta dùng thuộc tính `type` và các giá trị như sau:

| Giá trị | Ý nghĩa |
| --- | --- |
| `type="1"` | Số: 1, 2, 3,... |
| `type="A"` | Chữ cái in hoa: A, B, C,... |
| `type="a"` | Chữ cái thường: a, b, c,... |
| `type="I"` | Số La Mã in hoa I, II, III,... |
| `type="i"` | Số La Mã thường: i, ii, iii,... |

Ví dụ:  
Đoạn mã sau tạo danh sách có đánh thứ tự bằng số bình thường.

```html title="portfolio.html" linenums="54"
    <h2>Những môn thể thao mà mình yêu thích từ nhiều nhất đến ít nhất</h2>
    <ol>
        <li>Bóng đá</li>
        <li>Bóng rổ</li>
        <li>Võ thuật</li>
        <li>Nhảy dây</li>
        <li>Búng thun</li>
    </ol>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-headings-vs-lists/portfolio-3.html#end){:target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-headings-vs-lists.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| danh sách | list |
| danh sách có thứ tự | ordered list |
| danh sách không có thứ tự | unordered list |
| đề mục | heading |
| mục trong danh sách | list item |