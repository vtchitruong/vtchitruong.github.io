---
icon: material/page-layout-body
---

# Tạo khung nhúng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày phần tử HTML dùng để tạo khung nhúng trang web.

## Phần tử tạo khung nhúng

| Phần tử | Công dụng |
| --- | --- |
| `<iframe>` | Nhúng một trang web khác vào bên trong web hiện hành |

**i** là viết tắt của **inline**. Inline frame tạm dịch là **khung nằm cùng dòng**.

Khác với những phần tử kiểu khối (block) luôn chiếm trọn một dòng, `<iframe>` chỉ chiếm không gian vừa đúng bằng nội dung mà nó chứa, tức không tự xuống dòng nếu còn đủ chỗ. 

---

## Thuộc tính của khung nhúng

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `src` | URL của trang web khác |
| `width` | Độ rộng của khung |
| `height` | Độ cao của khung |
| `name` | Tên của khung, dành cho mã lệnh đọc |
| `title` | Tiêu đề của khung, dành cho người dùng đọc |

??? info "Thuộc tính `name` và `title`"

    Tương tự một số phần tử hoặc thuộc tính khác, thuộc tính `title` có tác dụng:

    - Trợ giúp người khiếm thị
    - Trợ giúp trang web đạt chuẩn SEO
    - Hiển thị tooltip trong một số trình duyệt

    Thuộc tính `name` khác với `title` ở chỗ:

    - `name`: dùng để định danh cho `<iframe>`, giúp các mã lệnh lập trình tìm đến đúng.
    - `title`: dùng để hiển thị cho người dùng.

Ví dụ:  
Đoạn mã sau tạo ba liên kết và một khung. Khi click vào một liên kết thì trang web tương ứng sẽ hiển thị trong khung.

```html title="portfolio.html" linenums="91"
    <h2>Một vài website tham khảo</h2>
    <p><a href="https://htmlreference.io/" target="my_iframe">HTML</a></p>
    <p><a href="https://htmlcheatsheet.com/css/" target="my_iframe">CSS</a></p>
    <p><a href="https://www.fullstackpython.com/" target="my_iframe">Python</a></p>
    <p><iframe src="https://htmlreference.io/" width="80%" height="300" name="my_iframe"></iframe></p>
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-iframe/portfolio.html#end){:target="_blank"}

!!! info "Về việc nhúng trang web"

    Vì những lý do an toàn và bảo mật, một số trang web lớn, chẳng hạn như Facebook hoặc Google, không cho phép nhúng bằng `<iframe>`.

    Đối với Youtube, ta bắt buộc phải sử dụng đoạn mã `<iframe>` do họ cung cấp thì mới nhúng được.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| khung | inline frame |
| nhúng (trang web) | embed |
