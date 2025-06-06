---
icon: material/format-paragraph
---

# Tạo đoạn văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML liên quan đến:
    
    - đoạn văn bản
    - ngắt dòng
    - khoảng trắng

## Đoạn, ngắt dòng và khoảng trắng

Không giống với *đoạn* trong văn học, một **đoạn** trong HTML có thể chỉ gồm một câu duy nhất hoặc vài từ nào đó ghép lại với nhau.

**Đoạn** luôn bắt đầu trên một dòng mới và có phần không gian trống nằm ở trước và sau phân cách với những nội dung khác.

Các phần tử dùng để tạo đoạn và ngắt dòng:

| Phần tử | Công dụng |
| --- | --- |
| `<p>` | Tạo một đoạn văn bản |
| `<br>` | Ngắt dòng nhưng vẫn nằm cùng đoạn văn bản |
| `<hr>` | Tạo đường gạch ngang dài bằng độ rộng trang web |

Các thực thể ký tự dùng để tạo khoảng trắng:

| Thực thể | Công dụng |
| --- | --- |
| `&nbsp;` | 1 khoảng trắng |
| `&ensp;` | 2 khoảng trắng |
| `&emsp;` | 4 khoảng trắng |

Ví dụ:

**Yêu cầu:** Trong tập tin **portfolio.html**, ta tạo thêm đoạn, khoảng trắng và ngắt dòng.

**Mã lệnh:**

```html title="portfolio-1.html" linenums="8" hl_lines="4-8"
<body>
    <h1>Chào mừng bạn ghé thăm portfolio</h1>
    <p>Trang web này tự tay mình dệt nên.</p>
    <br>
    <p>Đây là đường đời bằng phẳng mà bạn ao ước...</p>
    <hr>
    <p>... cho đến khi<br>&emsp;&emsp;&emsp;
        &ensp;&ensp;&nbsp;bạn sụp ổ gà :)</p> <!-- (1)! -->
</body>
```
{ .annotation }

1.  Ngoài công dụng tạo khoảng trắng, các thực thể ký tự trên còn giúp cho cụm từ không bị ngắt dòng, khiến người đọc bối rối.

Ví dụ:

Nếu ta viết trong HTML: `<p>Số nhỏ nhất có bảy chữ số là 1 000 000</p>`  
thì có thể xảy ra tình huống số 1 nằm cuối dòng trên, 000 000 nằm đầu dòng dưới, hoặc 1 000 nằm cuối dòng trên, 000 nằm đầu dòng dưới.

Để tránh bị như vậy, nên viết là: `<p>Số nhỏ nhất có bảy chữ số là 1&nbsp;000&nbsp;000</p>`

[Click để xem kết xuất trang portfolio trong tab mới](html-paragraph/portfolio-1.html){:target="_blank"}

## Giữ nguyên như mã lệnh

Dù mã lệnh HTML có nhiều khoảng trắng hoặc dòng trống dư thừa, trình duyệt vẫn xóa hết các khoảng trắng và dòng trống này.

Cách thứ nhất để kết xuất dòng trống và khoảng trắng là dùng các phần tử và thực thể ký tự như vừa đề cập ở mục trên.

Cách thứ hai là dùng phần tử `<pre>`.

| Phần tử | Công dụng |
| --- | --- |
| `<pre>` | Giữ nguyên ngắt dòng và khoảng trắng như trong mã lệnh |

Ví dụ:

**Yêu cầu:** Thêm bài thơ và sử dụng phần tử `<pre>`.

**Mã lệnh:**

```html title="portfolio.html" linenums="8" hl_lines="9-15"
<body>
    <h1>Chào mừng bạn ghé thăm portfolio</h1>
    <p>Trang web này tự tay mình dệt nên.</p>
    <br>
    <p>Đây là đường đời bằng phẳng mà bạn ao ước...</p>
    <hr>
    <p>... cho đến khi<br>&emsp;&emsp;&emsp;
        &ensp;&ensp;&nbsp;bạn sụp ổ gà :)</p>
    <br>
    <p>Khi sụp rồi thì bạn thường tìm đến những thứ self-help hoặc chữa lành.</p>
    <h2>Một chiều ngược gió</h2>
    <pre>Em ngược đường, ngược nắng để yêu anh
    Ngược phố tan tầm, ngược chiều gió thổi
Ngược lòng mình tìm về nông nổi
    Lãng du đi vô định cánh chim trời.</pre>
</body>
```

[Click để xem kết xuất trang portfolio trong tab mới](html-paragraph/portfolio-2.html){:target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-paragraph.html">Sơ đồ tóm tắt</iframe>
</div>

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/grade-12/topic-f/html-paragraph){:target="_blank"}.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đoạn | paragraph |
| đường gạch ngang | horizontal line |
| khoảng trắng | non-breaking space |
| ngắt dòng/đoạn | break |
| thực thể ký tự | character entity |
