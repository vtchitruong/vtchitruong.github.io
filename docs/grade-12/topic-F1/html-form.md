---
icon: material/form-select
---

# Tạo biểu mẫu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để tạo các thành phần trong biểu mẫu web.

## Khái quát

!!! note "Biểu mẫu web"

    Là thành phần cho phép người dùng **tương tác với trang web**, chẳng hạn như:

    - Nhập dữ liệu văn bản, số, email, mật khẩu.
    - Chọn một hoặc nhiều phương án.
    - Click chuột để nhấn nút.

Một số biểu mẫu phổ biến:

- Biểu mẫu đăng nhập
- Biểu mẫu thanh toán
- Biểu mẫu góp ý
- Biểu mẫu nhận xét, đánh giá

---

## Phần tử tạo biểu mẫu rỗng

| Phần tử | Công dụng |
| --- | --- |
| `<form>` | Tạo biểu mẫu rỗng, chưa có thành phần nào |

---

## Thuộc tính của biểu mẫu

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `action` | URL của trang web mà biểu mẫu sẽ gửi dữ liệu đến |
| `method` | Phương thức gửi dữ liệu |

Các phương thức gửi dữ liệu của `method`:

| Đặc điểm | `method="GET"` | `method="POST"` |
| --- | --- | --- |
| Mục đích | Truy xuất dữ liệu | Gửi hoặc cập nhật dữ liệu |
| Vị trí của dữ liệu | Gắn kèm theo URL | Nằm trong gói tin gửi đi |
| Tính bảo mật | Dữ liệu công khai, không bảo mật | Bảo mật hơn |
| Dữ liệu đa phương tiện | Không thể gửi đi | Có thể gửi đi | 

Ví dụ:  
Đoạn mã sau tạo biểu mẫu góp ý nằm ở cuối trang web.

```html title="portfolio.html" linenums="101"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">

    </form>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-1.html#end){:target="_blank"}

---

## Phần tử tạo nhãn và thành phần nhập liệu

| Phần tử | Công dụng | Ghi chú |
| --- | --- | --- |
| `<label>` | Tạo label, tạm dịch là **nhãn tên** | Có thẻ đóng |
| `<input>` | Tạo ô nhập liệu, có hình dáng và tính năng tuỳ theo thuộc tính `type` | Không có thẻ đóng | 
| `<textarea>` | Tạo hộp văn bản cho phép nhập nhiều dòng | Có thẻ đóng |

---

## Thuộc tính của `<label>`, `<input>` và `<textarea>`

| Phần tử | Thuộc tính | Ý nghĩa | Ghi chú |
| --- | --- | --- | --- |
| `<label>` | `for` | Kết nối giữa label và input | Phải cùng giá trị với `id` của `<input>` |
| `<input>` | `id` | - Kết nối giữa label và input<br>- Dùng để làm việc với CSS hoặc JavaScript | - Phải cùng giá trị với `for` của `<label>`<br>- Phải là duy nhất trong trang web. |
| `<input>` | `name` | Dùng để giao tiếp với máy chủ |  
| `<input>` | `type` | Chức năng và hình dáng của input |
| `<textarea>` | `required` | Bắt buộc người dùng nhập dữ liệu, không được để trống |

Một số giá trị thông dụng của thuộc tính `<type>`:

| Giá trị | Ý nghĩa |
| --- | --- |
| `text` | Tạo hộp văn bản |
| `email` | Tạo ô nhập email |
| `password` | Tạo ô nhập mật khẩu |
| `radio` | Tạo nút tròn cho phép chọn một mục duy nhất |
| `checkbox` | Tạo **ô đánh dấu** (còn gọi là **hộp kiểm**) cho phép chọn nhiều mục |
| `submit` | Tạo nút nộp biểu mẫu |

??? info "Một số giá trị khác của thuộc tính `<type>`"

    | Giá trị | Ý nghĩa |
    | --- | --- |
    | `number` | Tạo một ô chọn số |
    | `date` | Tạo hộp chọn ngày |
    | `color` | Tạo hộp chọn màu |
    | `file` | Tạo nút để chọn tập tin trên máy |
    | `hidden` | Tạo một nơi chứa dữ liệu mà người dùng không thể nhìn thấy |
    | `button` | Tạo nút nhấn |
    | `reset` | Đặt lại các thành phần của biểu mẫu về giá trị mặc định |

Ví dụ:  
Đoạn mã dòng 105 và 106 tạo nhãn và hộp văn bản để người dùng nhập tên. 

```html title="portfolio.html" linenums="101" hl_lines="5 6"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">
        <label for="realname">Tên của bạn</label><br>
        <input type="text" id="realname" name="realname" value="">
    </form>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-2.html#end){:target="_blank"}

Ví dụ:  
Đoạn mã dòng 108 và 109 tạo nhãn và ô nhập email. 

```html title="portfolio.html" linenums="101" hl_lines="8 9"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">
        <label for="realname">Tên của bạn</label><br>
        <input type="text" id="realname" name="realname" value="">
        <br>
        <label for="gmail">Email của bạn</label><br>
        <input type="email" id="gmail" name="gmail" value="@gmail.com">
        <br>
    </form>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-3.html#end){:target="_blank"}

Ví dụ:  
Đoạn mã dòng 111 và 112 tạo hộp văn bản cho phép người dùng nhập khối văn bản lớn. 

```html title="portfolio.html" linenums="101" hl_lines="11 12"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">
        <label for="realname">Tên của bạn</label><br>
        <input type="text" id="realname" name="realname" value="">
        <br>
        <label for="gmail">Email của bạn</label><br>
        <input type="email" id="gmail" name="gmail" value="@gmail.com">
        <br>
        <label for="feedback">Ý kiến đóng góp của bạn</label><br>
        <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea>
    </form>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-4.html#end){:target="_blank"}

---

## Phần tử tạo nút nhấn nộp

Có hai cách tạo nút nhấn để *"nộp"* dữ liệu của biểu mẫu lên máy chủ:

| Cách | Phần tử | Ghi chú |
| --- | --- | --- |
| 1 | `<input type="submit" value="Gửi ý kiến">` | Không có thẻ đóng |
| 2 | `<button type="submit">Gửi ý kiến</button>` | Có thẻ đóng |

Ví dụ:  
Đoạn mã dòng 114 tạo nút nộp vào biểu mẫu theo cách 2. 

```html title="portfolio.html" linenums="101" hl_lines="14"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">
        <label for="realname">Tên của bạn</label><br>
        <input type="text" id="realname" name="realname" value="">
        <br>
        <label for="gmail">Email của bạn</label><br>
        <input type="email" id="gmail" name="gmail" value="@gmail.com">
        <br>
        <label for="feedback">Ý kiến đóng góp của bạn</label><br>
        <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea>
        <br>
        <button type="submit">Gửi ý kiến</button>
    </form>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-5.html#end){:target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-form.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| biểu mẫu | form, web form |
| hộp văn bản | textbox |
| nhãn | label |
| nộp (biểu mẫu) | submit |
| nút nhấn | button |