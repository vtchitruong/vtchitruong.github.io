---
icon: material/format-font
---

# Định dạng văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để thực hiện những định dạng đơn giản đối với văn bản.

## Phần tử định dạng văn bản

Một số phần tử thông dụng giúp định dạng văn bản:

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

**Yêu cầu:** Thực hiện một vài định dạng đơn giản như in đậm, in nghiêng, gạch dưới, v.v... đối với đoạn văn bản.

**Mã lệnh:**

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

1.  Để viết những công thức toán học khác trong HTML, ta cần sử dụng thêm "*đồ chơi*", chẳng hạn như [MathJax](https://www.mathjax.org/){:target="_blank"}. Nội dung này nằm ngoài chương trình chính khóa.

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-formatting/portfolio.html){:target="_blank"}

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/tree/main/grade-12/topic-f/html-paragraph){:target="_blank"}.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| định dạng | format |
