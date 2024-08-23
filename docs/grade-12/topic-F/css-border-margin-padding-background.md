---
icon: material/border-radius
---

# Định kiểu đường viền, lề, vùng đệm và nền

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách dùng thẻ `<div>` và các thuộc tính CSS dành cho lề, đường viền, vùng đệm và nền của những phần tử HTML.

## Thẻ div

Thẻ `<div>` thuộc nhóm phần tử **block-level** (1), được dùng để tạo ra các **khối nội dung** trên trang web.
{ .annotate }

1.  **Block-level element** là những phần tử luôn bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng của phần tử cha (parent).

    Nói cách khác, chúng sẽ tự động xuống dòng sau khi kết thúc.

Thẻ `<div>` không mang ý nghĩa rõ ràng như tiêu đề, đoạn hoặc liên kết, mà chỉ là một thùng chứa có tác dụng gom nhóm các phần tử HTML khác.

Thẻ `<div>` thường áp dụng cho những tình huống như:

- Phân chia nội dung thành các khối.
- Chia trang web thành các phần riêng biệt, chẳng hạn như: header, sidebar, main content, footer, v.v...
- Tạo các thùng chứa để định vị các phần tử HTML.
- Gom nhóm các phần tử HTML lại với nhau để định kiểu CSS chung.

Ví dụ:

```html title="portfolio.html" linenums="43" hl_lines="2 12"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>C#</li>
            <li>Typescript</li>    
        </ul>
    </div>
```

## Định kiểu đường viền

Một số thuộc tính CSS dùng cho đường viền:

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| `border-width` | Độ dày | 1. Từ khóa: `thin`, `medium`, `thick` <br> 2. Số và đơn vị cụ thể như `px`, `pt`, `em`, v.v... |
| `border-style` | Kiểu |	`solid`, `dotted`, `dashed`, `double`, v.v... |
| `border-color` | Màu sắc | Tên màu, mã màu, hàm `rgba`, v.v... |
| `border-radius` | Độ bo góc | Số và đơn vị cụ thể |

Ví dụ:

```html title="portfolio.html" linenums="43" hl_lines="2"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <div style="border: 2px solid #30839f; border-radius: 10px;
    height: auto; width: 360px;"> <!-- (1)! -->
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>C#</li>
            <li>Typescript</li>    
        </ul>
    </div>
```
{ .annotate }

1.  Đường viền có độ cao tự động điều chỉnh ứng với nội dung bên trong và độ rộng cố định 360 pixel.

[Click để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-1.html#langlist){:target="_blank"}

## Định kiểu lề và vùng đệm

Lề là phần không gian xung quanh nằm bên ngoài đường viền của phần tử.

Một số thuộc tính CSS dùng cho lề:

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| margin | Cả bốn lề ứng với bốn cạnh của phần tử | Gồm 4 số và đơn vị cụ thể, theo thứ tự cạnh: trên phải dưới trái |
| margin-top | Lề trên | Số và đơn vị cụ thể |
| margin-right | Lề phải | Số và đơn vị cụ thể |
| margin-bottom | Lề dưới | Số và đơn vị cụ thể |
| margin-left | Lề trái | Số và đơn vị cụ thể |

Vùng đệm là phần không gian xung quanh nội dung của phần tử và nằm bên trong đường viền của phần tử.

Một số thuộc tính CSS dùng cho vùng đệm:

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| padding | Cả bốn vùng đệm ứng với bốn cạnh của phần tử | Gồm 4 số và đơn vị cụ thể, theo thứ tự cạnh: trên phải dưới trái | 
| padding-top | Trên | Số và đơn vị cụ thể |
| padding-right | Phải | Số và đơn vị cụ thể |
| padding-bottom | Dưới | Số và đơn vị cụ thể |
| padding-left | Trái | Số và đơn vị cụ thể |

Ví dụ:

```html title="portfolio.html" linenums="43" hl_lines="4"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <div style="border: 2px solid #30839f; border-radius: 10px;
    height: auto; width: 360px;
    margin: 25px auto 25px 100px; padding: 20px 30px;">
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>C#</li>
            <li>Typescript</li>    
        </ul>
    </div>
```

[Click để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-2.html#langlist){:target="_blank"}

Bạn nên click phải chuột vào trang web, chọn **Inspect**, rồi rê chuột đến từng phần tử để quan sát: nội dung của phần tử `div`, padding, border và margin.

## Định kiểu nền

Một số thuộc tính CSS dùng cho nền

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| `background-color` | Màu sắc | Tên màu, mã màu hoặc các hàm `rgb`, `rgba`, `hsl`, v.v... |
| `background-image` | Lấy ảnh làm nền | Hàm `url` có tham số là đường dẫn của tập tin ảnh: `url(‘hinh.png’)` |
| `opacity` | Độ trong suốt | Số thập phân từ `0` đến `1`, với `0` là hoàn toàn trong suốt. |
| `background-repeat` | Lặp lại ảnh nhiều lần | `repeat-x`: lặp theo phương ngang <br> `repeat-y`: lặp theo phương dọc <br> `no-repeat`: không lặp |

Ví dụ:

```html title="portfolio.html" linenums="43" hl_lines="5"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <div style="border: 2px solid #30839f; border-radius: 10px;
    height: auto; width: 360px;
    margin: 25px auto 25px 100px; padding: 20px 30px;
    background: radial-gradient(ellipse, #53adcb, #80c2d9);"> <!-- (1)! -->
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>C#</li>
            <li>Typescript</li>    
        </ul>
    </div>
```

1.  Hàm `radial-gradient()` tạo màu chuyển sắc từ trong ra ngoài theo dạng ellipse.

[Click để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-3.html#langlist){:target="_blank"}