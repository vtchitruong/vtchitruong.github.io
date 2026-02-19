---
icon: material/rectangle-outline
---

# Định kiểu đường viền, vùng đệm, lề và nền

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Phần tử `<div>`
    - Các thuộc tính CSS dành cho đường viền, vùng đệm, lề và nền của các phần tử HTML.

## Phần tử `<div>`

!!! note "Phần tử `<div>`"

    - Thuộc nhóm phần tử **khối** (block-level) (1).
        { .annotate }

        1.  **Phần tử khối** (phần tử block-level) là phần tử luôn bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng của phần tử cha.

    - Được dùng để tạo ra các **khối nội dung** hoặc các **vùng chứa lớn** trên trang web.

Thẻ `<div>` là phần tử trung lập, không mang ý nghĩa cụ thể. Nó đóng vai trò *"thùng chứa"* để gom nhóm các phần tử HTML khác lại với nhau.

Thẻ `<div>` thường áp dụng cho những tình huống:

- Phân chia bố cục: chia trang web thành các phần như: header, main content, sidebar, footer.
- Định vị: tạo ra thùng chứa để sắp xếp các phần tử bên trong bằng CSS.
- Định kiểu tập trung: gom nhóm nhiều phần tử HTML lại với nhau để áp dụng chung một cách định kiểu.

Ví dụ:  
Dòng lệnh 44 và 54 dùng `<div>` bao bọc danh sách các ngôn ngữ lập trình.

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

---

## Đường viền, vùng đệm và lề

!!! note "Đường viền"

    Là một **đường bao quanh** phần tử, nằm giữa vùng đệm và lề.

!!! note "Vùng đệm"

    Là khoảng không gian nằm **bên trong** phần tử, **giữa nội dung và đường viền**.

!!! note "Lề"

    Là khoảng không gian nằm **bên ngoài** phần tử, phía **sau đường viền**, ngăn cách phần tử này với các phần tử xung quanh.

Hình sau mô tả đường viền (màu xám), vùng đệm (màu tím) và lề (màu vàng) của phần nội dung (màu xanh).

![Mô tả đường viền, vùng đệm và lề](./images/css-border-margin-padding-background.png){loading=lazy}

---

## Thuộc tính dành cho đường viền

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
| --- | --- | --- |
| `border-width` | Độ dày | - Từ khóa: `thin`, `medium`, `thick`<br>- Số và đơn vị cụ thể: `2px`, `0.1rem` |
| `border-style` | Kiểu | `solid`, `dotted`, `dashed`, `double` |
| `border-color` | Màu sắc | Tên màu, mã màu, hàm |
| `border-radius` | Độ bo góc | `10px`, `20%` |
| `border` | Thuộc tính rút gọn | `1px solid black` |

Ví dụ:  
Dòng lệnh 44 và 45 minh họa cách định kiểu đường viền bao quanh danh sách.

```html title="portfolio.html" linenums="43" hl_lines="2-3"
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

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-1.html#langlist){:target="_blank"}

---

## Thuộc tính dành cho vùng đệm

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
| --- | --- | --- |
| padding-top | Trên | Số và đơn vị cụ thể |
| padding-right | Phải | Số và đơn vị cụ thể |
| padding-bottom | Dưới | Số và đơn vị cụ thể |
| padding-left | Trái | Số và đơn vị cụ thể |
| padding | Thuộc tính rút gọn | - **1 giá trị:** áp dụng **quy tắc kim đồng hồ** "Trên - Phải - Dưới - Trái". Ví dụ: `padding: 10px;`<br>- **2 giá trị:** áp dụng cho [Trên & Dưới] và [Phải & Trái]. Ví dụ: `padding: 10px 20px;` |

---

## Thuộc tính dành cho lề

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
| --- | --- | --- |
| margin | Cả bốn lề ứng với bốn cạnh của phần tử | Gồm 4 số và đơn vị cụ thể, theo thứ tự cạnh: trên phải dưới trái |
| margin-top | Lề trên | Số và đơn vị cụ thể |
| margin-right | Lề phải | Số và đơn vị cụ thể |
| margin-bottom | Lề dưới | Số và đơn vị cụ thể |
| margin-left | Lề trái | Số và đơn vị cụ thể |
| margin | Thuộc tính rút gọn | - **1 giá trị:** áp dụng **quy tắc kim đồng hồ** "Trên - Phải - Dưới - Trái". Ví dụ: `margin: 10px;`<br>- **2 giá trị:** áp dụng cho [Trên & Dưới] và [Phải & Trái]. Ví dụ: `margin: 10px 20px;` |

Ví dụ:  
Dòng lệnh 46 minh họa cách định kiểu vùng đệm và lề của danh sách.

```html title="portfolio.html" linenums="43" hl_lines="4"
    <h2>Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
    <div style="border: 2px solid #30839f; border-radius: 10px;
    height: auto; width: 360px;
    margin: 25px auto 25px 100px; padding: 20px 30px;"> <!-- (1)! -->
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

1.  Giá trị `auto` thường được dùng để căn giữa một khối.

    Tuy nhiên, do lề trái được chỉ định là 100px nên giá trị `auto` của lề phải sẽ không còn tác dụng căn giữa nữa, mà nó chỉ lấy phần không gian còn lại của phần tử cha.

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-2.html#langlist){:target="_blank"}

Bạn nên click phải chuột vào trang web, chọn **Inspect**, rồi rê chuột đến từng phần tử để quan sát: nội dung của phần tử `div`, padding, border và margin.

---

## Thuộc tính dành cho nền

| Thuộc tính | Ý nghĩa | Giá trị ví dụ |
| --- | --- | --- |
| `background-color` | Màu nền | Tên màu, mã màu hoặc các hàm `rgb`, `rgba`, `hsl`, v.v... |
| `background-image` | Lấy ảnh làm nền | Hàm `url()` có tham số là đường dẫn của tập tin ảnh: `url('hinh.png')` |
| `background-repeat` | Lặp lại ảnh nhiều lần | - `repeat-x`: lặp theo phương ngang<br>- `repeat-y`: lặp theo phương dọc<br>- `no-repeat`: không lặp |
| `background-size` | Kích thước ảnh nền | `cover` (phủ kín), `contain` (hiển thị đủ ảnh)
| `opacity` | Độ trong suốt | - `0` (trong suốt hoàn toàn)<br>- Số thập phân từ `0` đến `1`. Ví dụ: `0.5`(mờ 50%).<br>- `1` (hiển thị hoàn toàn, không trong suốt) |


Ví dụ:  
Dòng lệnh 47 minh họa cách định kiểu nền của danh sách.

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

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-border-margin-padding-background/portfolio-3.html#langlist){:target="_blank"}