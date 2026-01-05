---
icon: material/selection-drag
---

# Định kiểu bằng bộ chọn

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách định kiểu bằng các bộ chọn như: tag, id, class.

## Khát quát về bộ chọn

### Khái niệm

**Bộ chọn** (1) là khuôn mẫu dùng để chỉ định chính xác những phần tử HTML nào trên trang web sẽ được định kiểu theo ý muốn.
{ .annotate }

1.  Các sách giáo khoa đều dịch chữ **CSS selector** là **vùng chọn**.

### Phân loại

Các bộ chọn cơ bản gồm:

- Bộ chọn phần tử
- Bộ chọn id
- Bộ chọn lớp

Các bộ chọn phức tạp hơn: bộ chọn con, hậu duệ, anh em, thuộc tính, lớp giả, phần tử giả, v.v...

### Lợi ích

Những lợi ích chính khi định kiểu bằng bộ chọn:

- Linh hoạt trong việc chọn các phần tử cần định kiểu.
- Tách riêng HTML và CSS, giúp mã lệnh sạch hơn và dễ bảo trì hơn.
- Tái sử dụng kiểu cho các phần tử khác.

Bài học này chỉ đề cập ba bộ chọn cơ bản.

## Bộ chọn phần tử

**Bộ chọn phần tử**, hay còn gọi là **bộ chọn thẻ**, dùng để chọn tất cả phần tử cùng tên trong trang web.

Ví dụ:  
Để định kiểu cho tất cả đề mục cấp 2 (heading 2), ta thực hiện như sau:

### Bước 0

Tạo tập tin **style.css** nằm cùng thư mục với tập tin **portfolio.html**.

### Bước 1

Trong tập tin **style.css**, gõ mã lệnh CSS theo mong muốn.

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

### Bước 2

Trong tập tin **portfolio.html**, thêm liên kết đến tập tin **style.css**.

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

## Bộ chọn id

**Bộ chọn id** dùng để chọn phần tử có giá trị id cụ thể.

Mọi phần tử đều có thể có thuộc tính id, nhưng giá trị id của mỗi phần tử là duy nhất, không trùng với phần tử nào khác trong cùng trang web.

Ví dụ:  
Để định kiểu riêng cho một đề mục `h2` khác với các `h2` còn lại, ta thực hiện như sau:

### Bước 1

Trong tập tin **portfolio.html**, đặt id cho tiêu đề `h2` cần định kiểu riêng.

```html title="portfolio.html" linenums="44"
<h2 id="langlist">Những ngôn ngữ giúp mình giỏi hơn trong môn... bơi lội</h2>
```

### Bước 2

Trong tập tin **style.css**, khai báo id cần định kiểu là `#langlist` (bắt đầu bằng dấu `#`), rồi gõ mã lệnh CSS theo mong muốn.

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

## Bộ chọn lớp

**Bộ chọn lớp** dùng để chọn các phần tử có cùng giá trị của thuộc tính `class`.

Bộ chọn lớp áp dụng trong tình huống cần định kiểu cho các phần tử không cùng tên.

Ví dụ:  
Để định kiểu giống nhau cho một số phần tử khác tên, ta thực hiện như sau:

### Bước 1

Trong tập tin **style.css**, khai báo lớp `.my-class` (bắt đầu bằng dấu chấm), rồi gõ mã lệnh CSS theo mong muốn.

```css title="style.css" linenums="21"
.my-class {
    color: #9c4957;
    font-weight: 700;
    font-size: 1.3rem;
    word-spacing: 1rem;;
}
```

### Bước 2

Trong tập tin **portfolio.html**, khai báo `class="my-class"` cho các phần tử nào muốn định kiểu.

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

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ chọn lớp | class selector |
| bộ chọn id | id selector |
| bộ chọn phần tử | element selector |
| lớp giả | pseudo-class |
| phần tử giả | pseudo-element |
