---
icon: material/format-letter-spacing-variant
---

# Định kiểu font chữ và văn bản

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Phần tử `<span>`
    - Các thuộc tính CSS dành cho font chữ và văn bản

## Phần tử `<span>`

!!! note "Phần tử `<span>`"

    - Thuộc nhóm phần tử **nội dòng** (inline) (1).
        { .annotate }

        1.  **Phần tử nội dòng** (phần tử inline) là phần tử mà khi hiển thị sẽ nằm cùng dòng với các phần tử và nội dung lân cận. Nó không tự động xuống dòng mới như các phần tử block-level.

            Phần tử nội dòng có đặc điểm:

            - Kích thước bao vừa đủ nội dung bên trong, kể cả `padding` và `border`.
            - Không thể thiết lập `width` và `height`.
            - `margin-top` và `margin-bottom` không có tác dụng.

    - Được dùng để khoanh vùng một phần văn bản hoặc các phần tử nằm trên cùng một dòng (`<a>`, `<strong>`, `<em>`, v.v...) nhằm phục vụ cho việc định kiểu.
    
Thẻ `<span>` thường được áp dụng cho những tình huống:

- Định kiểu màu sắc, font chữ hoặc hiệu ứng riêng cho một phần nhỏ của văn bản mà không phá vỡ cấu trúc của đoạn.
- Thay đổi nội dung bằng mã lệnh JavaScript.

Ví dụ:  
Đoạn mã sau thêm `<span>` cho từ "khoa học" nhằm chuẩn bị định kiểu riêng cho từ này.

```html title="portfolio.html" linenums="24"
    <p>Một cách <em>chữa lành</em> tốt là hãy <em>"tựa"</em> vào <span>khoa học</span>.</p>
```

## Thuộc tính dành cho font chữ

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
|--- | --- | --- |
| `font-family` | Tên font chữ | `Arial`, `Times New Roman`, `Georgia`, `Impact` |
| `font-size`	| Cỡ chữ | - Từ khóa: `medium`, `large`, `x-large`<br>- Theo tỷ lệ phần trăm: `150%`<br>- Số và đơn vị cụ thể: `16px`, `2em`, `1.5rem` |
| `font-style` | Kiểu nghiêng | `normal`, `italic` (chữ nghiêng do thiết kế), `oblique` (chữ nghiêng do trình duyệt làm nghiêng) |
| `font-weight` | Độ in đậm | 1. Từ khóa: `normal`, `lighter`, `bold`, `bolder`. <br> 2. Số: `100`, `200`, `300`,... `800`, `900`.
| `font-variant` | Biến thể | `normal`, `small-caps` (in hoa cỡ nhỏ) |

!!! tip "font-family"

    Nếu muốn sử dụng những font không có sẵn trên hệ điều hành của người dùng, ta có hai cách như sau:
    
    - Cách 1:
    
        Ở ngay đầu tập tin CSS, thêm dòng lệnh `@import`. 

        ```css        
        `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`.
        ```

    - Cách 2:

        Trong tập tin HTML, sử dụng thẻ `<link>` bên trong `<head>` để tối ưu tốc độ tải trang.

        ```html
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        ```

## Thuộc tính dành cho văn bản

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
| --- | --- | --- |
| `color` | Màu chữ | - Tên màu: `red`<br>- Mã màu: `#ff0000`<br>- Các hàm `rgb`, `rgba`, `hsl`: `rgba(255,0,0,0.5)`|
| `background-color` | Màu nền | Tên màu, mã màu hoặc các hàm |
| `text-align` | Căn chỉnh vị trí của `<span>` theo phương ngang | `left`, `right`, `center`, `justify` |
| `vertical-align` | Căn chỉnh vị trí của `<span>` theo phương dọc so với dòng văn bản chứa nó | `top`, `bottom`, `middle`, `sub`, `super` |
| `text-decoration` | Đường trang trí | `overline`, `line-through`, `underline` |
| `text-transform` | Biển đổi thành chữ thường hoặc in hoa | `uppercase`, `lowercase`, `capitalize` |
| `text-shadow` | Đổ bóng | Gồm 4 giá trị lần lượt là phương ngang, phương dọc, hiệu ứng mờ và màu sắc của bóng: `text-shadow: 2px 2px 4px grey` |
| `letter-spacing` | Khoảng cách giữa các ký tự | `2px`, `-1px` |
| `word-spacing` | Khoảng cách giữa các từ | `10px`, `-3px` |
| `line-height` | Chiều cao của dòng | `1.5`, `2.4px` |

Ví dụ:  
Đoạn mã sau minh họa cách định kiểu cho từ "khoa học".

```html title="portfolio.html" linenums="24"
    <p>Một cách <em>chữa lành</em> tốt là hãy <em>"tựa"</em> vào <span style="font-family: Georgia; font-size: 2.5rem; font-style: oblique; font-weight: 700; color: #00d86c; letter-spacing: -7px;">khoa học</span>.</p>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-font-text/portfolio.html){:target="_blank"}