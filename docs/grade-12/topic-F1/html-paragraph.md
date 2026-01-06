---
icon: material/format-paragraph
---

# Tạo đoạn văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để:
    
    - Tạo đoạn văn bản
    - Ngắt dòng
    - Khoảng trắng
    - Giữ nguyên 

## Tạo đoạn, ngắt dòng và khoảng trắng

!!! note "Đoạn"

    **Đoạn** luôn bắt đầu trên một dòng mới,
    
    và có phần không gian trống nằm ở trước và sau nhằm phân cách với những nội dung khác.

Không giống với *"đoạn"* trong văn học, một **đoạn** trong HTML có thể chỉ gồm một vài từ hoặc một câu duy nhất.

Các phần tử dùng để tạo đoạn và ngắt dòng:

| Phần tử | Công dụng |
| --- | --- |
| `<p>` | Tạo một đoạn văn bản |
| `<br>` | Ngắt dòng nhưng vẫn nằm cùng đoạn văn bản |
| `<hr>` | Tạo đường gạch ngang dài bằng độ rộng trang web |

!!! note "Thực thể ký tự"

    Các ký tự đặc biệt bắt đầu bằng dấu `&` và kết thúc bằng `;` được gọi là **thực thể ký tự**.

Các thực thể ký tự dùng để tạo khoảng trắng:

| Thực thể | Công dụng |
| --- | --- |
| `&nbsp;` | 1 khoảng trắng |
| `&ensp;` | 2 khoảng trắng |
| `&emsp;` | 4 khoảng trắng |

Ví dụ:  
Các dòng mã từ 11 đến 15 minh hoạ các phần tử và thực thể ký tự trên:

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

1.  Ngoài công dụng tạo khoảng trắng, các thực thể ký tự trên còn làm cho cụm từ không bị ngắt dòng, giúp người đọc không bị bối rối.

    Ví dụ:  
    Nếu ta viết: `<p>Số nhỏ nhất có bảy chữ số là 1 000 000</p>`  
    thì có thể xảy ra tình huống:
    
    - số `1` nằm cuối dòng trên, `000 000` nằm đầu dòng dưới
    - hoặc `1 000` nằm cuối dòng trên, `000` nằm đầu dòng dưới

    Để tránh bị như vậy, ta nên viết là: `<p>Số nhỏ nhất có bảy chữ số là 1&nbsp;000&nbsp;000</p>`

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-paragraph/portfolio-1.html){:target="_blank"}

---

## Giữ nguyên như mã lệnh

Dù mã lệnh HTML có nhiều khoảng trắng hoặc dòng trống dư thừa, **trình duyệt vẫn xoá hết các khoảng trắng và dòng trống** này.

Để kết xuất dòng trống và khoảng trắng, có hai cách:

- Cách 1: dùng các phần tử và thực thể ký tự như mục trên.
- Cách 2: dùng phần tử `<pre>` (1).
    { .annotate }

    1.  **pre** là viết tắt của **preformatted**, nghĩa là được định dạng sẵn.

    | Phần tử | Công dụng |
    | --- | --- |
    | `<pre>` | Giữ nguyên định dạng như trong mã lệnh |

Ví dụ:  
Các dòng mã từ 16 đến 22 hiển thị bài thơ bằng thẻ `<pre>`.

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

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-paragraph/portfolio-2.html){:target="_blank"}

---

## Xem mã nguồn trang web

Các trình duyệt đều có tính năng **Inspect** giúp lập trình viên thử nghiệm mã lệnh và xem ngay kết quả.

Ta có thể dựa vào tính năng này để học hỏi mã lệnh của người khác. Cách làm như sau:

1. Trong trình duyệt, click phải vào vùng trống.
2. Trong menu hiện ra, chọn mục **Inspect**.
3. Trong cửa sổ bên phải (thường gọi là **Developer Tools**), rê chuột vào một phần tử để đối chiếu với nội dung kết xuất tương ứng ở cửa sổ bên trái.

![Minh hoạ tính năng Inspect](https://live.staticflickr.com/65535/55025540832_d173764c33_b.jpg){loading=lazy}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-paragraph.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đoạn | paragraph |
| đường gạch ngang | horizontal line |
| khoảng trắng | non-breaking space |
| ngắt dòng/đoạn | break |
| thực thể ký tự | character entity |