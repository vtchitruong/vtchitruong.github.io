---
icon: material/spider-web
---

# Khái quát về HTML và web

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số khái niệm liên quan đến web, bao gồm:
    
    - Siêu văn bản
    - Siêu liên kết
    - URL
    - World Wide Web
    - Trang web, website
    - HTML
    - Trình duyệt web

## Siêu văn bản

!!! note "Siêu văn bản"

    Là **văn bản**:

    - Hiển thị trên máy tính và những thiết bị số khác.
    - **Có chứa các [siêu liên kết](#hyperlink)** (1) cho phép truy cập ngay đến những thông tin liên quan khác.
    { .annotate }
        
        1.  Văn bản có chứa video hoặc ảnh động thì chưa chắc là siêu văn bản.

---

## Siêu liên kết {#hyperlink}

!!! note "Siêu liên kết"

    Là một **kết nối** giữa:

    - Hai phần thông tin trong cùng một siêu văn bản.
    - Hai phần thông tin giữa các siêu văn bản khác nhau.

Siêu liên kết, gọi tắt là **liên kết**, có công dụng giúp truy cập ngay các nguồn tài nguyên khác trên mạng.

![Minh hoạ siêu văn bản và siêu liên kết](./html-web-fundamentals/hypertext.svg){loading=lazy width=360}

---

## URL

!!! note "URL"

    **URL**, viết tắt của **Uniform Resource Locator**, là một **địa chỉ định danh duy nhất** được sử dụng để xác định vị trí của một tài nguyên trên môi trường mạng.
    
Mỗi tài liệu như trang web, hình ảnh, video khi đưa lên Internet đều được gán một URL để các trình duyệt có thể truy cập chính xác.

---

## World Wide Web

!!! note "World Wide Web"

    Viết tắt là **WWW**, là một **không gian thông tin toàn cầu** vận hành trên nền tảng hạ tầng Internet.
    
    Trong không gian này, mỗi tài nguyên như văn bản, hình ảnh, video:
    
    - Được định danh bằng một URL.
    - Được kết nối thông qua siêu liên kết.

---

## Trang web

!!! note "Trang web"

    Là một **tài liệu nằm trên hệ thống World Wide Web** và được hiển thị trên trình duyệt web.

Trang web là hình thái phổ biến nhất của siêu văn bản, vì nó sử dụng ngôn ngữ HTML để tổ chức nội dung và chứa các siêu liên kết để kết nối với các tài nguyên khác trên Internet.

---

## Website

!!! note "Website"

    Là **tập hợp các trang web** liên quan và đứng chung dưới một tên miền.

Ví dụ:  
Website của Samsung là tập hợp các trang web liên quan đến các sản phẩm của Samsung và đứng chung dưới tên miền [samsung.com](https://www.samsung.com/){:target="_blank"}.

---

## HTML

### Ngôn ngữ HTML

!!! note "Ngôn ngữ HTML"

    Viết tắt của **Hypertext Markup Language** (1), là **ngôn ngữ cơ bản** dùng để tạo nên một trang web.
    { .annotate }

    1.  Phiên bản mới nhất hiện nay là [HTML5](https://html.spec.whatwg.org/multipage/){:target="_blank"}.

Ngoài HTML, còn có những ngôn ngữ hoặc công nghệ khác góp phần tạo nên một trang web (1).
{ .annotate }

1.  Trong khi HTML giúp định nghĩa cấu trúc và nội dung của trang web, thì những ngôn ngữ khác kết hợp với HTML nhằm tăng thêm tính năng cho trang web. Chẳng hạn như:
    
    - **CSS**: xử lý cách thể hiện của trang web, giúp trang web thêm trực quan và đẹp mắt.
    - **JavaScript**: xử lý hành vi của trang web, giúp trang web tương tác được với người dùng.

### Phần tử HTML

!!! note "Phần tử HTML"

    Là **đơn vị cấu trúc cơ bản nhất** được sử dụng để xây dựng và tổ chức nội dung cho một trang web.

Mỗi phần tử đóng vai trò xác định loại nội dung và cách thức nội dung đó được trình duyệt xử lý.

Nói cách khác, mỗi thành phần của trang web như văn bản, hình ảnh, âm thanh, video, v.v... đều được xác định bằng một phần tử HTML tương ứng.

Mỗi phần tử HTML đầy đủ được cấu thành từ bốn thành phần sau:

1. **Thẻ mở:** dùng để đánh dấu chỗ bắt đầu của phần tử.

2. **Thuộc tính:**: nằm bên trong thẻ mở, chứa các thông tin bổ sung hoặc thông số kỹ thuật của phần tử. (ví dụ: id, class, src, href).

3. **Nội dung:** nằm giữa thẻ mở và thẻ đóng, có thể là văn bản, hình ảnh hoặc các phần tử con khác.

4. **Thẻ đóng:** dùng để đánh dấu chỗ kết thúc của phần tử.

*Lưu ý:*  
*Trong nhiều tài liệu, thuật ngữ **phần tử** và **thẻ** thường được sử dụng thay thế cho nhau.*

Dựa trên cách thức đóng gói nội dung, có hai loại phần tử HTML:

1. **Phần tử có nội dung**

    Phải có đầy đủ thẻ mở và thẻ đóng để bao bọc nội dung bên trong.

2. **Phần tử rỗng**

    Còn gọi là **thẻ tự đóng**, là những phần tử không chứa nội dung văn bản và không cần thẻ đóng.

Ví dụ:

| Phần tử có nội dung<br>(Cặp thẻ đóng mở) | Phần tử rỗng<br>(Thẻ tự đóng) | 
| --- | --- |
| `<h1> </h1>`, `<h2> </h2>`, ..., `<h6> </h6>` <br> `<div> </div>` <br> `<p> </p>` | `<img>` <br> `<br>` <br> `<hr>` <br> `<link>` |

---

## Trình duyệt web

### Khái niệm

!!! note "Trình duyệt web"

    Là **phần mềm** giúp truy cập và khám phá các website.

Ví dụ:

Những trình duyệt phổ biến hiện nay:

- [Microsoft Edge](https://www.microsoft.com/en-us/edge){target="_blank"}
- [Google Chrome](https://www.google.com/chrome/){target="_blank"}
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/){target="_blank"}
- [Opera](https://www.opera.com/){target="_blank"}
- [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet){target="_blank"}

### Quy trình xử lý và kết xuất trang web

1. **Truy cập**

    Người dùng nhập URL hoặc kích hoạt một siêu liên kết.

2. **Gửi yêu cầu**

    Trình duyệt gửi một **HTTP Request**, tạm dịch là **yêu cầu HTTP**, đến máy chủ web (1).
    { .annotate }

    1.  Máy chủ web là máy tính có nhiệm vụ lưu trữ, xử lý và phân phối các tài nguyên web đến người dùng.

3. **Phản hồi**

    Máy chủ xử lý yêu cầu và phản hồi bằng một **HTTP Response**, tạm dịch là **phản hồi HTTP**, có chứa mã nguồn HTML của trang web.

4. **Phân tích cú pháp**

    Trình duyệt phân tích mã HTML để hiểu cấu trúc và nội dung của trang web.

5. **Kết xuất**

    Trình duyệt kết xuất trang web, trong đó bao gồm các thao tác:
    
    - Thông dịch các phần tử HTML
    - Áp dụng các quy tắc định kiểu CSS
    - Thực thi các hành vi tương tác JavaScript.

![Các công đoạn xử lý khi duyệt web](./html-web-fundamentals/html-browser.svg){loading=lazy}

### Kết quả kết xuất

Về cơ bản, các trình duyệt đều tuân thủ những tiêu chuẩn chung (1), nên chúng kết xuất cùng một trang web một cách tương tự nhau. Tuy nhiên, do còn nhiều yếu tố khác, nên với cùng một trang web, người dùng sẽ có những trải nghiệm khác nhau trên các trình duyệt khác nhau.
{ .annotate }

1.  Một số tiêu chuẩn phổ biến hiện nay:
    
    - HTML5: phiên bản mới nhất của ngôn ngữ HTML.
    - CSS3: phiên bản mới nhất của ngôn ngữ CSS.
    - ECMAScript 6: phiên bản mới nhất của ngôn ngữ JavaScript.

Vì vậy, các nhà phát triển web phải kiểm thử trên nhiều trình duyệt lẫn thiết bị khác nhau để bảo đảm trang web hoạt động tốt.

Các hình dưới đây minh họa kết xuất của một trang web trên những trình duyệt khác nhau.

=== "Chrome trên Windows 11"
    ![Kết xuất trang web bằng trình duyệt Chrome trên Windows 11](https://live.staticflickr.com/65535/55023766757_2bd1a64e56_b.jpg){loading=lazy}

=== "Firefox trên Windows 11"
    ![Kết xuất trang web bằng trình duyệt Firefox trên Windows 11](https://live.staticflickr.com/65535/55024655736_0591173b87_b.jpg){loading=lazy}

=== "Safari trên Macbook Air"
    ![Kết xuất trang web bằng trình duyệt Safari trên Macbook Air](https://live.staticflickr.com/65535/55024910644_0a8b0d751c_b.jpg){width=688 loading=lazy}

=== "Galaxy S21 Ultra"
    ![Kết xuất trang web trên Galaxy S21 Ultra](https://live.staticflickr.com/65535/55024655731_1bfb98ca03_c.jpg){width=198 loading=lazy}

=== "iPhone 13 PRO MAX"
    ![Kết xuất trang web trên iPhone 13 PRO MAX](https://live.staticflickr.com/65535/55024983775_504ed0ecb4_b.jpg){width=213 loading=lazy}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-web-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| kết xuất | render |
| ngôn ngữ đánh dấu siêu văn bản | HTML (HyperText Markup Language) |
| phần tử HTML | HTML element |
| siêu liên kết | hyperlink |
| siêu văn bản | hypertext |
| thẻ | tag |
| thuộc tính | attribute |
| trang web | web page |
| trình duyệt web | web browser |
