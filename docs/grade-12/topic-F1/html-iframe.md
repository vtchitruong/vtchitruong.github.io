---
icon: material/page-layout-body
---

# Tạo khung

!!! abstract "Tóm lược nội dung"

    Bài này trình bày phần tử dùng để tạo khung nhúng trang web khác.

## Phần tử iframe

Để nhúng một trang web khác vào bên trong web hiện hành, ta sử dụng phần tử `<iframe>` (inline frame, tức khung nằm cùng dòng).

``` html
<iframe src="url_của_trang_web_mới"
        width="chiều_rộng"
        height="chiều_cao"
        name="tên_của_iframe">
</iframe>
```

Ví dụ:  
Trong tập tin **portfolio.html**, ta tạo ba liên kết và một iframe. Khi nhấn vào một liên kết thì trang web tương ứng sẽ hiển thị trong iframe.

``` html title="iframe.html" linenums="91"
    <h2>Một vài website tham khảo</h2>
    <p><a href="https://htmlreference.io/" target="my_iframe">HTML</a></p>
    <p><a href="https://htmlcheatsheet.com/css/" target="my_iframe">CSS</a></p>
    <p><a href="https://www.fullstackpython.com/" target="my_iframe">Python</a></p>
    <p><iframe src="https://htmlreference.io/" width="80%" height="300" name="my_iframe"></iframe></p>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-iframe/portfolio.html#end){:target="_blank"}

!!! tip "Lưu ý"

    Vì những lý do an toàn và bảo mật, không phải trang web nào cũng cho phép nhúng vào `<iframe>`.

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/html-iframe.mm.md!}
*Sơ đồ tóm tắt cách tạo khung nhúng trang web*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| khung | inline frame |
| nhúng (trang web) | embed |
