---
icon: material/format-paragraph
---

# Tạo đoạn văn bản và định dạng đơn giản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Những phần tử liên quan đến đoạn văn bản, ngắt dòng và khoảng trắng
    - Những phần tử dùng để định dạng văn bản đơn giản 

## Đoạn, ngắt dòng và khoảng trắng

Không giống với *đoạn* trong văn học, một **đoạn văn bản** trong HTML có thể chỉ gồm một câu duy nhất hoặc vài từ nào đó ghép lại với nhau.

Đoạn văn bản luôn bắt đầu trên một dòng mới và có phần không gian trống nằm ở trước và sau nhằm phân cách với những nội dung khác.

Các phần tử dùng để tạo đoạn và ngắt dòng:

| Phần tử | Công dụng |
| --- | --- |
| `<p>` | Tạo một đoạn văn bản |
| `<br>` | Ngắt dòng nhưng vẫn nằm cùng đoạn văn bản |
| `<hr>` | Gạch ngang giúp phân rõ hai phần nội dung |

Các thực thể ký tự dùng để tạo khoảng trắng:

| Thực thể | Công dụng |
| --- | --- |
| `&nbsp;` | 1 khoảng trắng |
| `&ensp;` | 2 khoảng trắng |
| `&emsp;` | 4 khoảng trắng |

Ví dụ:  
Trong tập tin **portfolio.html**, ta tạo thêm đoạn, khoảng trắng và ngắt dòng.

``` html title="portfolio-1.html" linenums="8" hl_lines="4-8"
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

[Click để xem kết xuất trang portfolio trong tab mới](html-paragraph-formatting/portfolio-1.html){:target="_blank"}

## Giữ nguyên văn bản như đã viết trong mã lệnh

Dù mã lệnh HTML có nhiều khoảng trắng hoặc dòng trống dư thừa, trình duyệt vẫn xóa hết các khoảng trắng và dòng trống này.

Một cách để kết xuất dòng trống và khoảng trắng là dùng các phần tử và thực thể ký tự như vừa đề cập ở mục trên.

Một cách khác là dùng phần tử `<pre>`.

| Phần tử | Công dụng |
| --- | --- |
| `<pre>` | Giữ nguyên ngắt dòng và khoảng trắng như trong mã lệnh |

Ví dụ:  
Thêm bài thơ và sử dụng phần tử `<pre>`.

``` html title="portfolio.html" linenums="8" hl_lines="9-15"
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

[Click để xem kết xuất trang portfolio trong tab mới](html-paragraph-formatting/portfolio-2.html){:target="_blank"}

## Định dạng văn bản

Một số phần tử giúp định dạng văn bản đơn giản:

| Phần tử | Công dụng |
| --- | --- |
| `<strong>` hoặc `<b>` | In đậm |
| `<em>` hoặc `<i>` | In nghiêng |
| `<u>` | Gạch chân |
| `<sup>` | Tạo chỉ số trên |
| `<sub>` | Tạo chỉ số dưới |
| `<mark>` | Tô nổi (highlight) |
| `<small>` | Làm nhỏ cỡ chữ |

Ví dụ:  

``` html title="portfolio.html" linenums="8" hl_lines="17-27"
<body>
    <h1>Chào mừng bạn ghé thăm portfolio</h1>
    <p>Trang web này tự tay mình dệt nên.</p>
    <br>
    <p>Đây là đường đời bằng phẳng mà bạn ao ước...</p>
    <hr>
    <p>... cho đến khi<br>&emsp;&emsp;&emsp;
        &ensp;&ensp;&nbsp;bạn sụp ổ gà :)</p>
    <br>
    <br>
    <p>Khi sụp rồi thì bạn thường tìm đến những thứ self-help hoặc chữa lành.</p>
    <h2>Một chiều ngược gió</h2>
    <pre>Em ngược đường, ngược nắng để yêu anh
    Ngược phố tan tầm, ngược chiều gió thổi
Ngược lòng mình tìm về nông nổi
    Lãng du đi vô định cánh chim trời.</pre>
    <br>
    <p>Một cách <em>chữa lành</em> tốt là hãy <em>"tựa"</em> vào khoa học.</p>
    <p><strong>The law of conservation of energy</strong> states that 
        <em>energy cannot be created <small>or</small> destroyed, 
        <mark>only transformed from one form to another 
        or transferred from one system to another</mark>, 
        <small>but</small> the total energy of the system 
        <u>remains constant</u></em>.</p>
    <p>For example,</p>
    <p>E<sub>total</sub> = E<sub>kinetic</sub> + E<sub>gravitational</sub> =
        1/2mv<sup>2</sup> + mgh</p> <!-- (1)! -->
</body>
```
{ .annotate}

1.  Để viết phân số hoặc những công thức toán học khác trong HTML, ta cần *độ* thêm *đồ chơi*, chẳng hạn như [MathJax](https://www.mathjax.org/){:target="_blank"}. Nội dung này nằm ngoài chương trình chính khóa.

[Click để xem kết xuất trang portfolio trong tab mới](html-paragraph-formatting/portfolio-3.html){:target="_blank"}

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/html-paragraph-formatting.mm.md!}
*Sơ đồ tóm tắt các phần tử tạo đoạn và định dạng văn bản*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| định dạng | format |
| đoạn | paragraph |
| đường gạch ngang | horizontal line |
| khoảng trắng | non-breaking space |
| ngắt dòng/đoạn | break |
| thực thể ký tự | character entity |
