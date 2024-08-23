---
icon: material/format-letter-spacing-variant
---

# Định kiểu font và văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách dùng thẻ `<span>`, các thuộc tính CSS dành cho font và text để định kiểu riêng cho một phần văn bản.

## Thẻ span

Thẻ `<span>` thuộc nhóm phần tử **inline** (1), được dùng để gom nhóm một phần văn bản nào đó trong cả đoạn hoặc các phần tử nằm trên cùng một dòng như: từ, cụm từ, thẻ `<a>`, `<strong>`, `<em>`, v.v...
{ .annotate }

1.  **Inline element** là những phần tử mà khi hiển thị trên trang web, chúng sẽ nằm cùng dòng với các phần tử khác, trừ khi gặp thẻ ngắt dòng như `<br>`.

    Nói cách khác, inline element không tự động xuống dòng như các block-level element.

Thẻ `<span>` thường áp dụng cho những tình huống như:

- Định kiểu CSS cho một phần nhỏ của văn bản.
- Đánh dấu một phần văn bản để đặt các thuộc tính JavaScript.

Ví dụ:

```html title="portfolio.html" linenums="24"
    <p>Một cách <em>chữa lành</em> tốt là hãy <em>"tựa"</em> vào <span>khoa học</span>.</p>
```

## Định kiểu font chữ

Một số thuộc tính CSS dùng cho font:

| Thuộc tính | Ý nghĩa | Giá trị |
|--- | --- | --- |
| `font-family` | Tên font chữ | `Arial`, `Times New Roman`, `Georgia`, `Impact`, v.v... |
| `font-size`	| Cỡ chữ | 1. Từ khóa: `medium`, `large`, `x-large`, v.v... <br> 2. Theo tỉ lệ phần trăm: `150%`, v.v... <br> 3. Số và đơn vị cụ thể: `16px`, `2em`, `1.5rem`, v.v... |
| `font-style` | In nghiêng | `normal`, `italic`, `oblique` |
| `font-weight` |	Độ in đậm | 1. Từ khóa: `normal`, `lighter`, `bold`, `bolder`. <br> 2. Số: `100`, `200`, `300`,... `800`, `900`.
| `font-variant` | Chữ in hoa cỡ nhỏ | `normal`, `small-caps` |

!!! note "font-family"

    Nếu muốn sử dụng những font khác với các font mặc định, trong tập tin CSS, ta cần thêm dòng lệnh `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`.

## Định kiểu văn bản

Một số thuộc tính CSS dùng cho văn bản:

| Thuộc tính | Ý nghĩa | Giá trị |
| --- | --- | --- |
| `text-color` | Màu chữ | Tên màu, mã màu hoặc các hàm `rgb`, `rgba`, `hsl`, v.v... |
| `background-color` | Màu nền | Tên màu, mã màu hoặc các hàm `rgb`, `rgba`, `hsl`, v.v... |
| `text-align` | Căn chỉnh theo phương ngang | `left`, `right`, `center`, `justify` |
| `vertical-align` | Căn chỉnh theo phương dọc | `top`, `bottom`, `middle`, `sub`, `super`, v.v... |
| `text-decoration` | Thêm đường thẳng vào văn bản | `overline`, `line-through`, `underline` |
| `text-transformation` | Biển đổi thành chữ thường hoặc in hoa | `uppercase`, `lowercase`, `capitalize` |
| `text-shadow` | Đổ bóng | Gồm 4 giá trị lần lượt là phương ngang, phương dọc, hiệu ứng mờ và màu sắc của bóng: `text-shadow: 2px 2px 4px grey` |
| `letter-spacing` | Khoảng cách giữa các ký tự | Số dương hoặc âm, kèm đơn vị cụ thể |
| `word-spacing` | Khoảng cách giữa các từ | Số dương hoặc âm, kèm đơn vị cụ thể |

Ví dụ:

```html title="portfolio.html" linenums="24"
    <p>Một cách <em>chữa lành</em> tốt là hãy <em>"tựa"</em> vào <span style="font-family: Georgia; font-size: 2.5rem; font-style: oblique; font-weight: 700; color: #00d86c; letter-spacing: -7px;">khoa học</span>.</p>
```

[Click để xem kết xuất trang portfolio trong tab mới](css-font-text/portfolio.html){:target="_blank"}