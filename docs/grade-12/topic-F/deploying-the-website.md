---
icon: simple/netlify
---

# Triển khai website lên máy chủ


!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách tải website đã tạo lên một dịch vụ máy chủ (hosting) để mọi người có thể truy cập.

## Khát quát

Khi website kỷ yếu được tạo ra trên máy tính cá nhân, ta chỉ xem được website trên máy tính này.

Để người khác có thể truy cập được website bằng máy tính của họ, ta cần một nơi "*đặt*" các thư mục và tập tin của website. Nơi đó được gọi là **hosting**, hoặc **web hosting**, tạm dịch là **máy chủ**.

Nói cách khác, khi đặt trên hosting, website của mình mới có thể được truy cập công khai từ bất kỳ đâu trên thế giới bằng Internet.

Hơn nữa, máy chủ hosting luôn hoạt động liên tục để phục vụ mọi lúc mọi nơi.

## Hướng dẫn sử dụng Netlify

### Giới thiệu

[Netlify](https://www.netlify.com/){target="_blank"} là nền tảng giúp người dùng xuất bản các trang web tĩnh (chẳng hạn như các trang web đã học trong chủ đề F này) lên Internet.

Ưu điểm của Netlify là dễ sử dụng và có gói miễn phí, vừa đủ đáp ứng nhu cầu triển khai trang web trong các bài đã học.

### Chuẩn bị

1\. Cần bảo đảm toàn bộ thư mục và tập tin của website đều nằm trong cùng một thư mục chung.

Ví dụ:

Tham khảo cây thư mục dưới đây. Trong đó:

- Tập tin `index.html` là trang chủ của website kỷ yếu, chứa các đường link liên kết đến các trang portfolio. Tập tin này bắt buộc phải có khi tải lên Netlify.
- Thư mục `css` chứa các tập tin định kiểu `.css`.
- Thư mục `html` chứa các tập tin `portfolio-*.html` của các thành viên trong lớp.
- Những tập tin và thư mục khác.

Toàn bộ các thư mục và tập tin trên được đặt trong thư mục `web-yearbook`.

```
web-yearbook/
├── index.html  <-- File này bắt buộc phải có!
├── css/
│   └── style.css
├── html/
│   └── portfolio-1.html
│   └── portfolio-2.html
│   └── portfolio-3.html
│   └── portfolio-4.html
└── thư_mục_khác/
    ├── tập_tin_khác.*
    └── tập_tin_khác_2.*
```

2\. Tạo tài khoản và đăng nhập vào [https://www.netlify.com/](https://www.netlify.com/){:target="_blank"}.

3\. Sau khi đăng nhập, ta sẽ được điều hướng tự động đến trang quản lý. Nếu chưa được, hãy vào [https://app.netlify.com/](https://app.netlify.com/){:target="_blank"}.

### Tải website lên

1\. Trong menu bên trái, chọn mục **Sites**.

2\. Tìm khu vực có nội dung tương tự như **Want to deploy a new site without connecting to Git? Drag and drop your site output folder here. Or, browse to upload.**

3\. Click vào **browse to upload.**

![browse to upload](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsMUjMyTiWzp1LzpJdQ/root/content){loading=lazy}

4\. Trong hộp thoại hiện ra, chọn thư mục chứa website của mình.

Khi tải lên, Netlify sẽ hiển thị thông báo thành công hoặc không.

![browse to upload](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsMUl6J-LvSiMB7R3Mg/root/content){loading=lazy}

### Đổi tên website

Khi có thông báo triển khai thành công, mọi người đã có thể truy cập website. Tuy nhiên, ta nên đổi tên website lại cho thân thiện hơn.

1\. Trong menu bên trái, chọn mục **Site configuration**.

2\. Click nút **Change site name**.

![browse to upload](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsMU8TUEGXc9QiBrgEA/root/content){loading=lazy}

3\. Trong hộp thoại hiện ra, gõ tên website tuỳ ý (1).
{ .annotate }

1.  Tên này còn được gọi chính xác là **tên miền phụ** (sub-domain).

    Tên miền chính là `netlify.app`. Nếu muốn sử dụng tên miền khác, chẳng hạn như `.com`, `.vn`, v.v... ta phải trả phí hằng năm cho một công ty quản lý tên miền nào đó.

4. Click nút **Save**.

### Xem thành quả

Ta có thể mở trình duyệt bất kỳ và nhập vào địa chỉ vừa thay đổi để truy cập website.

### Cập nhật website

Sau mỗi lần bổ sung hoặc chỉnh sửa, ta có thể cập nhật website bằng cách thực hiện lại việc tải lên Netlify tương tự như bước đầu.

1\. Trong menu bên trái, chọn mục **Deploys**.

2\. Click vào **browse to upload**.

![browse to upload](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsMVAtq9lhdnm7vkEWQ/root/content){loading=lazy}

3\. Trong hộp thoại hiện ra, chọn thư mục chứa website của mình.
