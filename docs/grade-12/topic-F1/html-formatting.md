---
icon: material/format-font
---

# Định dạng văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để định dạng nội dung là văn bản.

## Phần tử định dạng văn bản

| Phần tử | Công dụng |
| --- | --- |
| `<strong>` | In đậm, quan trọng |
| `<em>` (emphasized) | In nghiêng, nhấn mạnh |
| `<u>` | Gạch chân |
| `<sup>` (superscript) | Tạo chỉ số trên, ví dụ: số luỹ thừa |
| `<sub>` (subscript) | Tạo chỉ số dưới, ví dụ: công thức hoá học |
| `<mark>` | Tô nổi giống bút dạ quang |
| `<small>` | Làm nhỏ cỡ chữ |

Ví dụ:  
Đoạn mã từ dòng 24 đến 34 minh họa một số hình thức định dạng văn bản.

```html title="portfolio.html" linenums="8" hl_lines="17-27"
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
{ .annotate }

1.  Để viết những công thức toán học khác trong HTML, ta cần sử dụng thêm *"đồ chơi"*, chẳng hạn như [MathJax](https://www.mathjax.org/){:target="_blank"}. Nội dung này nằm ngoài chương trình chính khóa.

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-formatting/portfolio.html){:target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| định dạng | format |
