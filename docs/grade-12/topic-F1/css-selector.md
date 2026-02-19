---
icon: material/selection-drag
---

# Định kiểu bằng bộ chọn

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Khái quát về bộ chọn
    - Cách định kiểu bằng các bộ chọn: phần tử, id và lớp

## Khái niệm

!!! note "Bộ chọn"

    **Bộ chọn** (1) là thành phần trong mã lệnh CSS dùng để xác định chính xác những phần tử HTML nào sẽ chịu tác động của các quy tắc định kiểu.
    { .annotate }

    1.  Các sách giáo khoa đều dịch chữ **CSS selector** là **vùng chọn**.

---

## Lợi ích

Những lợi ích chính khi định kiểu bằng bộ chọn:

1. **Linh hoạt**

    Có thể chọn một phần tử duy nhất hoặc hàng loạt phần tử cùng lúc chỉ bằng một dòng lệnh.

2. **Tách biệt**

    Tách riêng HTML và CSS, giúp mã lệnh sạch sẽ và chuyên nghiệp.

3. **Dễ bảo trì**

    Khi cần thay đổi giao diện toàn hệ thống, ta chỉ cần chỉnh sửa bộ chọn trong tập tin CSS, thay vì phải rà soát hàng ngàn dòng lệnh HTML.

---

## Phân loại

Bảng sau liệt kê các bộ chọn cơ bản, xếp theo thứ tự độ ưu tiên từ thấp đến cao.

| STT | Loại bộ chọn | Ký hiệu | Ý nghĩa | Độ ưu tiên |
| --- | --- | --- | --- | --- |
| 1 | Toàn cục | `*` | Chọn mọi phần tử | (0, 0, 0, 0)
| 2 | Phần tử | Tên thẻ. Ví dụ: `h1` | Chọn theo tên thẻ | (0, 0, 0, 1) |
| 3 | Phần tử giả | `::before`, `::after` | Chọn một phần của phần tử | (0, 0, 0, 1) |
| 4 | Lớp | Dấu chấm và tên lớp. Ví dụ: `.highlight` | Chọn theo nhóm | (0, 0, 1, 0) |
| 5 | Thuộc tính | Tên thuộc tính. Ví dụ: `[type="text"]` | Chọn theo các thuộc tính bên trong thẻ | (0, 0, 1, 0) |
| 6 | Bộ chọn giả | Tên trạng thái. Ví dụ: `:hover` | Chọn theo trạng thái hoặc vị trí logic | (0, 0, 1, 0) |
| 7 | ID | Dấu # và tên định dạnh. Ví dụ: `#id` | Chọn theo định danh duy nhất | (0, 1, 0, 0) |

Ngoài ra, còn có những bộ chọn khác như: bộ chọn con, hậu duệ, anh em, v.v... Thực chất, những bộ chọn này là sự kết hợp của các bộ chọn cơ bản trong bảng trên.

Bài học này chỉ đề cập ba bộ chọn cơ bản là: phần tử, id và lớp.

---

## Bộ chọn phần tử

!!! note "Bộ chọn phần tử"

    - Còn gọi là **bộ chọn thẻ**.
    - Dùng để chọn và định kiểu cho tất cả phần tử cùng tên trong trang web.

Ví dụ:  
Các bước sau đây định kiểu cho tất cả đề mục cấp 2 (heading 2).

0\. Tạo tập tin **style.css** nằm cùng thư mục với tập tin **portfolio.html**.

1\. Trong tập tin **style.css**, viết mã lệnh để định nghĩa các thuộc tính cho phần tử `<h2>`.

```css title="style.css" linenums="1"
h2 {
    font-size: 1.2rem;
    border: 2px solid #0097be;
    border-left: none;
    border-radius: 0 30px 30px 0;
    margin-left: -10px;
    padding: 10px 20px;
    width: 30%;
    text-align: right;
}
```

2\. Trong tập tin **portfolio.html**, viết thẻ `<link>` để liên kết đến tập tin **style.css**.

```html title="portfolio.html" linenums="1" hl_lines="6"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
```

[Click để xem kết xuất trang portfolio trong tab mới](css-selector/portfolio-1.html){:target="_blank"}

---

## Bộ chọn id

!!! note "Bộ chọn id"

    Dùng để chọn và định kiểu một phần tử duy nhất theo **giá trị của thuộc tính `id`**.

Mọi phần tử HTML đều có thể có thuộc tính `id`, và giá trị `id` phải là duy nhất, không trùng với phần tử nào khác trong cùng trang web.

Ví dụ:  
Các bước sau đây định kiểu cho một đề mục `<h2>` khác với các `<h2>` còn lại.

1\. Trong tập tin **portfolio.html**, đặt tên định danh là `langlist` cho đề mục `<h2>` cần định kiểu.

```html title="portfolio.html" linenums="44"
<h2 id="langlist">Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
```

2\. Trong tập tin **style.css**, khai báo id cần định kiểu là `#langlist` bằng dấu `#`, rồi viết mã lệnh CSS.

```css title="style.css" linenums="12"
#langlist {
    color: #fff;
    background-color: #0097be;
    margin-left: 50px;
    border-radius: 20px;
    width: 500px;
    text-align: center;
}
```

[Click để xem kết xuất trang portfolio trong tab mới](css-selector/portfolio-2.html#langlist){:target="_blank"}

---

## Bộ chọn lớp

!!! note "Bộ chọn phần tử"

    Dùng để chọn và định kiểu cho tất cả phần tử có **cùng giá trị của thuộc tính `class`**, bất kể chúng có cùng tên hay không.

Ví dụ:  
Các bước sau đây định kiểu giống nhau cho một số phần tử khác tên.

1\. Trong tập tin **style.css**, khai báo lớp `.my-class` bằng dấu chấm, rồi viết mã lệnh CSS.

```css title="style.css" linenums="21"
.my-class {
    color: #9c4957;
    font-weight: 700;
    font-size: 1.3rem;
    word-spacing: 1rem;;
}
```

2\. Trong tập tin **portfolio.html**, thêm `class="my-class"` cho các phần tử muốn định kiểu.

```html title="portfolio.html" linenums="11"
    <p class="my-class">Trang web này tự tay mình dệt nên.</p>
```

```html title="portfolio.html" linenums="37"
    <h1 class="my-class">Kỷ nguyên Trí tuệ nhân tạo</h1>
```

```html title="portfolio.html" linenums="49" hl_lines="6"
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li class="my-class">Python</li>
            <li>C#</li>
            <li>Typescript</li>    
        </ul>
```

[Click để xem kết xuất trang portfolio trong tab mới](css-selector/portfolio-3.html){:target="_blank"}

!!! tip "Gán lớp cho phần tử"

    Ta có thể **gán nhiều lớp cho cùng một phần tử** bằng cách viết các tên lớp cách nhau bằng khoảng trắng.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ chọn lớp | class selector |
| bộ chọn id | id selector |
| bộ chọn phần tử | element selector |
| lớp giả | pseudo-class |
| phần tử giả | pseudo-element |
