# Những khái niệm về trang web

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khái niệm liên quan đến trang web bao gồm:
    
    - Siêu văn bản
    - Siêu liên kết
    - Trang web, website
    - HTML
    - Trình duyệt web

## Siêu văn bản

Siêu văn bản là văn bản

- hiển thị trên máy tính và những thiết bị số khác
- và có chứa các [siêu liên kết](#sieu-lien-ket) cho phép người đọc truy xuất ngay đến những thông tin hữu quan khác.

Văn bản có chứa video hoặc ảnh động thì vẫn không phải là siêu văn bản.

## Siêu liên kết

Siêu liên kết, có thể gọi tắt là *liên kết*, là một tham chiếu hoặc một kết nối giữa hai phần thông tin trong cùng một siêu văn bản hoặc giữa các văn bản khác nhau.

Nói cách khác, siêu liên kết có thể dẫn đến phần nội dung khác của cùng siêu văn bản hoặc dẫn đến một văn bản khác.

![Minh hoạ siêu văn bản và siêu liên kết](./html-vs-web-page/hypertext.svg){ loading=lazy }

## Trang web

Trang web là một tài liệu nằm trên hệ thống World Wide Web (1) và được hiển thị trên trình duyệt web.
{ .annotate }

1.  World Wide Web, viết tắt là www, là hệ thống thông tin mà trong đó mỗi tài liệu hoặc mỗi tài nguyên web được xác định bằng một URL (Uniform Resource Locators) và có thể được truy cập qua Internet.

Trang web là một ví dụ của siêu văn bản. 

Khi đang truy cập một trang web, người dùng có thể nhấn vào siêu liên kết nào đó để truy cập ngay phần nội dung khác của cùng trang web hoặc trang web khác.

## Website

Website là tập hợp các trang web hữu quan và đứng chung dưới một tên miền.

Ví dụ:  
Website của Samsung là tập hợp các trang web liên quan đến các sản phẩm của Samsung và đứng chung dưới tên miền [samsung.com](https://www.samsung.com/){:target="_blank"}.

## HTML

HTML (Hypertext Markup Language) là ngôn ngữ cơ bản dùng để tạo nên một trang web.

Phiên bản mới nhất hiện nay là [HTML5](https://html.spec.whatwg.org/multipage/){:target="_blank"}.

Ngoài HTML, còn có những ngôn ngữ hoặc công nghệ khác góp phần tạo nên một trang web (1).
{ .annotate }

1.  Trong khi HTML giúp định nghĩa cấu trúc và nội dung của trang web, thì những ngôn ngữ khác kết hợp với HTML nhằm tăng thêm tính năng cho trang web. Chẳng hạn như:
    
    - **CSS**: xử lý bố cục và cách thể hiện của trang web, giúp trang web thêm trực quan và đẹp mắt.
    - **JavaScript**: xử lý hành vi của trang web, làm cho trang web tương tác được với người dùng.

### Phần tử HTML

Ngôn ngữ HTML định nghĩa cấu trúc của trang web bằng cách sử dụng các phần tử HTML.

Các phần tử HTML này có tác dụng tổ chức những nội dung sẽ hiển thị trên trang web.

Nói cách khác, mỗi thành phần của trang web như văn bản, hình ảnh, âm thanh, video, v.v... đều được xác định bởi những phần tử HTML tương ứng.

### Thẻ và thuộc tính

Mỗi phần tử HTML được đại diện bằng một thẻ HTML (1) và có thể có nhiều thuộc tính. 
{ .annotate }

1.  Trong nhiều tài liệu, thuật ngữ **phần tử** và **thẻ** được sử dụng thay thế cho nhau.

Tên thẻ đặt trong cặp ngoặc `< >`.

Có hai loại thẻ:

- **Thẻ mở**: đánh dấu chỗ bắt đầu phần tử.
- **Thẻ đóng**: đánh dấu chỗ kết thúc phần tử.

Ngoài ra, còn có các phần tử không cần thẻ đóng, có thể gọi là *thẻ tự đóng*.

| Cặp thẻ đóng mở | Thẻ tự đóng | 
| --- | --- |
| `<h1> </h1>` `<h2> </h2>` ... `<h6> </h6>` <br> `<div> </div>` <br> `<p> </p>` | `<img>` <br> `<br>` <br> `<hr>` <br> `<link>` |

## Trình duyệt web

Trình duyệt web là phần mềm giúp truy cập và khám phá các website.

Ví dụ:  
Những trình duyệt phổ biến hiện nay: Microsoft Edge, Google Chrome, Mozilla Firefox, Opera, Samsung Internet, v.v...

Khi người dùng truy cập một trang web bằng trình duyệt web, có ba công đoạn diễn ra:

1. Trình duyệt tải xuống mã nguồn HTML của trang web này từ máy chủ chứa website. Công đoạn này được minh hoạ tại hình ngay bên dưới.
2. Trình duyệt phân tích mã nguồn HTML để hiểu cấu trúc và nội dung của trang web.
3. Trình duyệt kết xuất trang web, trong đó bao gồm các thao tác như: thông dịch các phần tử HTML, áp dụng mã CSS và thực thi mã javascript.[^1]

[^1]: CSS được đề cập trong những bài sau, còn Javascript không có trong chương trình học.

![Trình duyệt và HTML](./html-vs-web-page/html-browser.svg){ loading=lazy width=800 loading=lazy data-title="Minh hoạ công đoạn 1" data-description="Trình duyệt tải mã nguồn HTML từ web server."}


Về cơ bản, các trình duyệt đều kết xuất trang web một cách tương tự nhau, do chúng đều tuân theo những tiêu chuẩn chung, chẳng hạn HTML5. Tuy nhiên, vẫn còn nhiều yếu tố tạo ra sự khác biệt khi các trình duyệt kết xuất cùng một trang web, dẫn đến việc người dùng sẽ có những trải nghiệm khác nhau trên các trình duyệt.

Vì vậy, các nhà phát triển web phải kiểm thử trang web của mình trên nhiều trình duyệt lẫn thiết bị khác nhau để đảm bảo trang web hoạt động tốt. Các hình dưới đây minh họa kết xuất của một trang web trên những trình duyệt khác nhau.

=== "Chrome trên Windows 11"
    ![Kết xuất trang web bằng trình duyệt Chrome trên Windows 11](https://lh3.googleusercontent.com/pw/ABLVV84zywOuRgZvc3eM7ZeqWZnXH9vnNoqNSHChtdDyt69_7EDtbO1Z6AHpLMRl8hdPf3mZGo4td1u-KDFvxiOM2_zYx8blFXGoxb8TnEugt_lJ-9guy__u=w2400){ width=800 loading=lazy}

=== "Firefox trên Windows 11"
    ![Kết xuất trang web bằng trình duyệt Firefox trên Windows 11](https://lh3.googleusercontent.com/pw/ABLVV84n1phQ1XmuNJH6ybBW33pXjYFlRJJCbanaOUyghV5kc1YIDp-awVmJRIj9wXI15ygsOrS0bgPYdOfBrfa4yTlRFc9et_jr2ynGlQ5mZ_P5ShLkQAzD=w2400){ width=800 loading=lazy}

=== "Safari trên Macbook Air"
    ![Kết xuất trang web bằng trình duyệt Safari trên Macbook Air](https://lh3.googleusercontent.com/pw/ABLVV84k_GJjaQKMIIFncZ59vWz_TiSwAIzAVzxfISwfDx-Eon0cLvJHxeKUycQ6Yk_wllWUzyAOYpontPbKEjch9gzjaPdi0b-FlVgi0KI802_zEwSa4J3w=w2400){ width=688 loading=lazy}

=== "Galaxy S21 Ultra"
    ![Kết xuất trang web trên Galaxy S21 Ultra](https://lh3.googleusercontent.com/pw/ABLVV86F8L1HZG6O-x0Gv-Gv0eHQxtwZWjP7IPvegb5c5yTLX-xiyt_Frx2V8k_ijotSapS-jYo_NuKfh9-lnTHSgqTqUyrJmH_fOBFqB-OIUApQIt1v8U--=w2400){ width=198 loading=lazy}

=== "iPhone 13 PRO MAX"
    ![Kết xuất trang web trên iPhone 13 PRO MAX](https://lh3.googleusercontent.com/pw/ABLVV843ZnYnpOS_1qY_kwvr6qSxlm2QeKFOUJFGhY9FcAOCsy8PUAj15Xye7hn8Yq66JzUyxlNR4oYFHVRDko7gbfv7HhlSJMatRIZUpLq_TDfdvxY_4LRZ=w2400){ width=213 loading=lazy}

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/concepts-of-web-page.mm.md!}
*Sơ đồ tóm tắt những khái niệm về trang web*

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

