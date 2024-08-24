---
icon: material/form-select
---

# Biểu mẫu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách tạo biểu mẫu web.

## Khái niệm

Biểu mẫu web là thành phần để người dùng tương tác với trang web, chẳng hạn:

- nhập dữ liệu văn bản, số, email, mật khẩu.
- chọn một phương án.
- chọn nhiều phương án.
- click chuột vào nút nhấn.

Một số biểu mẫu phổ biến:

- Biểu mẫu đăng nhập
- Biểu mẫu thanh toán
- Biểu mẫu góp ý
- Biểu mẫu nhận xét, đánh giá

## Những thành phần thông dụng

### Biểu mẫu rỗng

Để bắt đầu tạo biểu mẫu, ta sử dụng phần tử `<form>`:

``` html
<form action="địa_chỉ_trang_nhận_dữ_liệu" method="cách_gửi_dữ_liệu"> <!-- (1)! -->
    Các thành phần của biểu mẫu
</form>
```
{ .anootate }

1.  `action`: chỉ định địa chỉ trang mà biểu mẫu sẽ gửi dữ liệu đến để xử lý.

    `method`: chỉ định phương thức gửi dữ liệu.
    
    - `GET`: Dữ liệu biểu mẫu sẽ gắn kèm vào địa chỉ trang nhận dữ liệu và hiển thị trên thanh địa chỉ của trình duyệt. 
    - `POST`: Dữ liệu biểu mẫu sẽ được gửi dưới dạng gói tin đến trang nhận dữ liệu.

Ví dụ:  
Trong tập tin **portfolio.html**, ta tạo thêm biểu mẫu góp ý nằm ở cuối trang. Biểu mẫu này không chỉ định trang xử lý.

``` html title="portfolio.html" linenums="101"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">

    </form>
```

[Click để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-1.html#end){:target="_blank"}

### Nhãn tên và ô nhập liệu 

Các phần tử tạo nhãn tên và thành phần nhập liệu:

| Phần tử | Công dụng |
| --- | --- |
| `<label>` | Định nghĩa nhãn tên |
| `<input>` | Định nghĩa thành phần nhập liệu |

Ví dụ:  
Thêm hộp văn bản vào biểu mẫu để người dùng gõ họ tên, kèm theo nhãn tên tương ứng. 

``` html title="portfolio.html" linenums="101" hl_lines="5 6"
    <hr>
    <h2>Biểu mẫu góp ý</h2>
    <p>Xin bạn vui lòng bỏ ít thời gian góp ý cho trang portfolio của mình</p>
    <form method="POST">
        <label for="realname">Tên của bạn</label><br> <!-- (1)! -->
        <input type="text" id="realname" name="realname" value="">
    </form>
```
{ .annotate }

1.   Thuộc tính `for` của `<label>` phải đồng nhất với thuộc tính `id` của `<input>` đi cùng. Chẳng hạn, trường trường hợp này, `for` và `id` đều có giá trị là `realname`.

    Thuộc tính `id` dùng cho việc thao tác với CSS hoặc JavaScript, còn thuộc tính `name` dùng cho việc gửi biểu mẫu lên máy chủ.

[Click để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-2.html#end){:target="_blank"}

Ngoài `type="text"` để tạo hộp văn bản, `type` còn nhiều giá trị khác giúp tạo ra các thành phần nhập liệu khác nhau. 

Một số giá trị của thuộc tính `type`:

| Giá trị | Ý nghĩa |
| --- | --- |
| `email` | Tạo ô nhập email |
| `password` | Tạo ô nhập mật khẩu |
| `radio` | Tạo nút tròn chỉ cho phép chọn một phương án duy nhất |
| `checkbox` | Tạo hộp kiểm cho phép chọn nhiều phương án |
| `button` | Tạo nút nhấn |
| `submit` | Tạo nút nộp biểu mẫu |

Ví dụ:  
Thêm ô nhập email và nhãn đính kèm vào biểu mẫu. 

``` html title="portfolio.html" linenums="101" hl_lines="8 9"
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

[Click để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-3.html#end){:target="_blank"}

### Hộp văn bản nhiều dòng

Hộp văn bản `type="text"` chỉ cho phép nhập một dòng. Để có thể nhập nhiều dòng, ta sử dụng phần tử `<textarea>`.

Ví dụ:  
Thêm hộp văn bản nhiều dòng vào biểu mẫu. 

``` html title="portfolio.html" linenums="101" hl_lines="11 12"
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
        <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea> <!-- (1)! -->
    </form>
```
{ .annotate }

1.  Thuộc tính `required` dùng để bắt buộc người dùng nhập dữ liệu, không được để trống.

[Click để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-4.html#end){:target="_blank"}

### Nút nhấn nộp biểu mẫu

Có hai cách tạo nút nhấn nộp dữ liệu của biểu mẫu:

- Cách 1: sử dụng phần tử `<input>`.

    ``` html
        <input type="submit" value="Gửi ý kiến">
    ```

- Cách 2: sử dụng phần tử `<button>`.

Ví dụ:  
Thêm nút nộp vào biểu mẫu theo cách 2. 

``` html title="portfolio.html" linenums="101" hl_lines="14"
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

[Click để xem kết xuất trang portfolio trong tab mới](html-form/portfolio-5.html#end){:target="_blank"}

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/html-form.mm.md!}
*Sơ đồ tóm tắt cách tạo biểu mẫu web*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| biểu mẫu | form, web form |
| hộp văn bản | textbox |
| nộp (biểu mẫu) | submit |
| nút nhấn | button |