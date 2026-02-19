---
icon: material/form-select
---

# Định kiểu biểu mẫu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các bộ chọn dành cho các phần tử tạo biểu mẫu.

## Mã lệnh HTML

Đoạn mã sau sử dụng phần tử `<div>` bao bọc phần tử `<p>` và `<form>`. Đồng thời, gán lớp `form-container` cho `<div>` này để phục vụ cho việc định kiểu CSS.

Ngoài ra, các phần tử `<br>` đều được bỏ đi.

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

## Định kiểu thẻ form và nhãn

## Bộ chọn lớp `form-container`

!!! note "Thuộc tính `font-family`"

    Dùng để thiết lập **danh sách các font chữ ưu tiên** cho một phần tử.

    Giá trị của `font-family` gồm nhiều tên font, cách nhau bằng dấu phẩy. Trình duyệt sẽ kiểm tra từ trái sang phải: nếu không có font thứ nhất thì nó thử font thứ hai.

Ví dụ:  
`font-family: 'Roboto', sans-serif;` nghĩa là: Roboto là font chữ mà ta mong muốn; nếu quá trình nhúng font gặp sự cố thì `sans-serif`, tức nhóm font chữ không có chân, có sẵn trên máy tính người dùng sẽ được thay thế.

Ví dụ:  
Đoạn mã sau sử dụng bộ chọn lớp `.form-container` để định kiểu cho phần tử `<div>` bao bọc toàn bộ biểu mẫu.

Trong đó, thuộc tính `font-family: 'Roboto'` có được là nhờ dòng lệnh `@import` để nhúng font từ website của Google.

```css title="style.css" linenums="99"
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.form-container {
    font-family: 'Roboto', sans-serif;
    background-color: #FFFBFE;
    color: #1C1B1F;
    width: 100%;
}
```

## Bộ chọn phần tử `form`

!!! note "Thuộc tính `box-shadow`"

    Dùng để tạo hiệu ứng đổ bóng cho các phần tử, giúp tạo ra chiều sâu và làm cho giao diện trông giống 3D.

    Gồm 4 giá trị chính:

    - Offset-x: độ dời của bóng theo trục ngang.
    - Offset-y: độ dời của bóng theo trục dọc.
    - Blur-radius: độ nhòe của bóng. Số càng lớn thì bóng càng mờ và lan rộng, tạo cảm giác mềm mại.
    - Màu sắc của bóng.

Ví dụ:  
`box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);` nghĩa là:

- Offset-x = 0: bóng nằm ngay chính giữa phần tử, không lệch sang trái hay phải.
- Offset-y = 4px: đẩy bóng xuống phía dưới 4px, tạo cảm giác phần tử đang bay hơi cao so với nền.
- Blur-radius = 6px
- Màu sắc = rgba(0, 0, 0, 0.1) là màu xám, có độ trong suốt là 0.1, tức 10%, tạo hiệu ứng bóng mờ nhẹ nhàng và tự nhiên.

Dòng lệnh này mô phỏng cách ánh sáng từ trên cao chiếu xuống vật thể trong thực tế, tạo nên phân cấp thị giác, giúp người dùng nhận diện rõ ràng đâu là biểu mẫu quan trọng cần chú ý trên nền web.

Ví dụ:  
Đoạn mã sau sử dụng bộ chọn phần tử để định kiểu cho phần tử `<form>`.

```css title="style.css" linenums="108"
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Bộ chọn phần tử `label`

!!! note "Thuộc tính `display`"

    Dùng để chỉ định **cách thức hiển thị của một phần tử** trên giao diện web. Cụ thể, `display` quy định cách phần tử chiếm không gian và cách mà nó tương tác với các phần tử xung quanh.

Một số giá trị của thuộc tính `display`:

| Giá trị | Ý nghĩa |
| --- | --- |
| `block` | Phần tử chiếm trọn 100% chiều ngang của phần tử cha bao bọc nó. |
| `inline` | Phần tử chỉ chiếm không gian vừa đủ cho nội dung bên trong nó. Không thể chỉnh `width` và `height`. Không bắt đầu dòng mới, nghĩa là nhiều phần tử `inline` có thể nằm cạnh nhau trên cùng một dòng. |
| `inline-block` | Các phần tử có thể nằm cạnh nhau trên cùng một dòng. Có thể tùy chỉnh `width`, `height`, `margin` và `padding`. |
| `flex` | Phần tử trở thành một flex-container. Cho phép căn giữa, chia cột hoặc đảo trật tự các phần tử con bên trong. |

Ví dụ:  
Đoạn mã sau sử dụng bộ chọn phần tử để định kiểu cho các phần tử `label`.

```css title="style.css" linenums="117"
label {
    display: block;
    margin-bottom: 0.2rem;
    color: #1C1B1F;
}
```

## Các bộ chọn liên quan phần tử `<input>` và `<textarea>`

!!! note "Thuộc tính `transition`"

    Dùng để tạo ra các **hiệu ứng chuyển cảnh** khi phần tử thay đổi từ trạng thái này sang trạng thái khác.

    Gồm 3 giá trị chính:

    - Thuộc tính chịu tác động
    - Thời gian chuyển cảnh
    - Kiểu chuyển cảnh: hàm thời gian quy định tốc độ nhanh hay chậm của hiệu ứng

Ví dụ:  
`transition: border-color 0.3s ease;` nghĩa là:

- Thuộc tính chịu tác động = border-color: chỉ áp dụng hiệu ứng này cho màu đường viền.
- Thời gian chuyển cảnh = 0.3s: tốc độ của hiệu ứng là 0.3 giây. Đây là giá trị hợp lý, đủ nhanh để người dùng thấy ngay phản hồi, đủ chậm để mắt cảm nhận được sự mượt mà.
- Kiểu chuyển cảnh = ease: bắt đầu chậm, sau đó nhanh dần và kết thúc chậm lại, tạo cảm giác tự nhiên và tinh tế.

Ví dụ:
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

## Các bộ chọn liên quan phần tử `<button>`

!!! note "Thuộc tính `cursor`"

    Dùng để **thay đổi hình dáng của trỏ chuột** khi nó di chuyển vào vùng không gian của một phần tử cụ thể.

Một số giá trị của thuộc tính `cursor`:

| Giá trị | Ý nghĩa |
| --- | --- |
| `default` | hình mũi tên tiêu chuẩn. |
| `pointer` | hình bàn tay 👆, để người dùng nhận biết là có thể click được. |
| `text` | hình chữ  `I`, để người dùng nhận biết vùng này có thể quét khối hoặc nhập văn bản. |
| `not-allowed` | hình tròn gạch chéo 🚫, để người dùng nhận biết là hành động hiện đang bị cấm. |

Ví dụ:  
Đoạn mã sau sử dụng bộ chọn thuộc tính (`button[type="submit"]`) và lớp giả (`:hover`) để định kiểu cho nút gửi dữ liệu (phần tử `<button>`) ở trạng thái mặc định và trạng thái có trỏ chuột nằm trên.

```css title="style.css" linenums="142"
button[type="submit"] {
    background-color: #f5f5f5;
    color: #0097be;
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #0097be;
    color: #fff;
}
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-form/portfolio.html#end){:target="_blank"}