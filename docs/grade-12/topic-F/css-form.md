---
icon: material/form-select
---

# Định kiểu biểu mẫu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách định kiểu cho một số thành phần trong biểu mẫu.

## Định kiểu thẻ form và nhãn

### Bước 0

Đặt biểu mẫu vào thẻ `<div>`. Bỏ hết các thẻ `<br>`.

```html title="portfolio.html" linenums="115" hl_lines="2 13"
    <h2>Biểu mẫu góp ý</h2>
    <div class="form-container">
        <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
        <form method="POST">
            <label for="realname">Tên của bạn</label>
            <input type="text" id="realname" name="realname" value="">
            <label for="gmail">Email của bạn</label>
            <input type="email" id="gmail" name="gmail" value="@gmail.com">
            <label for="feedback">Ý kiến đóng góp của bạn</label>
            <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea>
            <button type="submit">Gửi ý kiến</button>
        </form>   
    </div>
```

### Bước 1

Viết mã lệnh CSS cho lớp `.form-container`, thẻ `form` và nhãn.

```css title="style.css" linenums="99"
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'); /* (1)! */

.form-container {
    font-family: 'Roboto', sans-serif;
    background-color: #FFFBFE;
    color: #1C1B1F;
    width: 100%;
}
 
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
  
label {
    display: block;
    margin-bottom: 0.2rem;
    color: #1C1B1F;
}
```
{ .annotate }

1.  Nhúng font từ website của Google.

## Định kiểu hộp văn bản

Viết mã lệnh CSS cho các hộp văn bản ở trạng thái mặc định và trạng thái đang nhận con trỏ chuột.

```css title="style.css" linenums="123"
input[type="text"],
input[type="email"],
textarea {
    width: 90%;
    padding: 12px;
    margin: 0.3rem auto 1.5rem auto;
    border: 1px solid #79747E;
    border-radius: 30px;
    font-size: 1rem;
    transition: border-color 0.3s ease; /* (1)! */
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
    border-color: #0097be;
}
```
{ .annotate }

1.  Tạo hiệu ứng chuyển cảnh mượt mà khi thay đổi màu sắc của thuộc tính `border-color`.

## Định kiểu nút nhấn

Viết mã lệnh CSS cho nút nhấn ở trạng thái mặc định và trạng thái đang có con trỏ chuột nằm trên.

```css title="style.css" linenums="142"
button[type="submit"] {
    background-color: #f5f5f5;
    color: #0097be;
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 1rem;
    cursor: pointer; /* (1)! */
    transition: background-color 0.3s ease; /* (2)! */
}

button[type="submit"]:hover {
    background-color: #0097be;
    color: #fff;
}
```
{ .annotate }

1.  Biến con trỏ chuột thành hình bàn tay nhỏ có ngón tay đang trỏ vào nút nhấn :fontawesome-regular-hand-pointer:

2.  Tạo hiệu ứng chuyển cảnh mượt mà khi thay đổi màu sắc của thuộc tính `background-color`.

[Click để xem kết xuất trang portfolio trong tab mới](css-form/portfolio.html#end){:target="_blank"}