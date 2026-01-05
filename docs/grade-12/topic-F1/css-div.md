---
icon: octicons/sidebar-collapse-24
---

# Định kiểu phần tử div

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách định kiểu cho thẻ `<div>` để tạo bố cục gồm hai khối `div` nằm hai bên trái và phải trên cùng dòng.

## Cách tạo bố cục trái phải

Để tạo bố cục theo dạng: thanh điều hướng nằm bên trái và nội dung nằm bên phải, ta thực hiện như sau:

### Bước 1

Đặt các phần tử vào các cặp thẻ `<div>` như sau:

```html title="portfolio.html" linenums="97" hl_lines="3-7 9-11"
    <h2 id="website">Một vài website tham khảo</h2>
    <div class="container">
        <div class="nav-bar">
            <p><a href="https://htmlreference.io/" target="my_iframe">HTML</a></p>
            <p><a href="https://htmlcheatsheet.com/css/" target="my_iframe">CSS</a></p>
            <p><a href="https://www.fullstackpython.com/" target="my_iframe">Python</a></p>
        </div>

        <div class="iframe-container">
            <iframe src="https://htmlreference.io/" width="100%" height="300" name="my_iframe"></iframe>
        </div>
    </div>
```

### Bước 2

Viết mã lệnh CSS cho lớp `.container`.

```css title="style.css" linenums="74"
.container {
    display: flex; /* (1)! */
    width: 100%;
    height: 40vh; /* (2)! */
}
```
{ .annotate }

1.  Theo mặc định, `.nav-bar` sẽ nằm trên, rồi đến `.iframe-container`.

    `display: flex;` làm cho `.nav-bar` và `.iframe-container` nằm cạnh nhau.

2.  Độ cao là 40% viewport height, trong đó viewport là khu vực hiển thị của trang web trong cửa sổ trình duyệt.

### Bước 3

Viết mã lệnh CSS cho lớp `.nav-bar` và lớp `.iframe-container`.

```css title="style.css" linenums="80"
.nav-bar {
    width: 20%;
    background-color: #f0f0f0;
    padding: 10px;
    box-sizing: border-box; /* (1)! */
}

.iframe-container {
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
}
```
{ .annotate }

1.  Giá trị mặc định của `box-sizing` là `content-box;`, nghĩa là độ cao và độ rộng của phần tử chỉ bao gồm phần nội dung, không bao gồm vùng đệm, đường viền và lề.

    `border-box` làm cho phần nội dung, vùng đệm và đường viền được tính gộp chung thành kích thước của phần tử. 

### Bước 4

Viết thêm mã lệnh CSS cho phần tử iframe bên trong.

```css title="style.css" linenums="93"
.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-div/portfolio.html#website){:target="_blank"}