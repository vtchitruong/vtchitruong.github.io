---
icon: octicons/link-24
---

# Định kiểu siêu liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các bộ chọn lớp giả và thuộc tính CSS dành cho phần tử `<a>`.

## Kiểu nền tảng

Mặc định, trình duyệt hiển thị liên kết có màu xanh và gạch dưới.

Đây là trạng thái chưa được tương tác của `<a>` khi trang web vừa được tải.

Để thay đổi, ta có thể dùng bộ chọn phần tử.

Ví dụ:  
Đoạn mã sau thiết lập màu cam và loại bỏ đường gạch dưới cho tất cả liên kết trong trang web.

```css title="style.css" linenums="28"
a {
    color: #ffa500;
    text-decoration: none;
}
```

## Quy tắc thứ tự LVHA

Bộ chọn `a` trên đã thiết lập các thuộc tính chung nhất cho mọi liên kết, không phân biệt trạng thái, đóng vai trò là kiểu nền tảng.

Sau khi có kiểu nền tảng, ta có thể viết thêm các bộ chọn lớp giả để thay đổi kiểu dựa trên hành vi tương tác của người dùng.

Các bộ chọn lớp giả phải tuân theo **thứ tự bắt buộc** sau đây, gọi là **quy tắc LVHA**, để chúng không triệt tiêu lẫn nhau.

| Thứ tự | Lớp giả | Trạng thái của liên kết |
| --- | --- | --- |
| 1 | `:link` | Chưa truy cập |
| 2 | `:visited` | Đã truy cập |
| 3 | `:hover` | Đang có trỏ chuột ở trên |
| 4 | `:active` | Đang được nhấn giữ chuột |

## Lớp giả `:link`

!!! note "Bộ chọn `a:link`"

    - Dành cho trạng thái mà các liên kết **chưa được truy cập**.
    - Nhằm phân biệt các liên kết cũ và mới.

Nó có độ ưu tiên cao hơn một chút so với bộ chọn phần tử `a`.

Ví dụ:
Đoạn mã sau thiết lập màu cam và không gạch dưới cho các liên kết còn mới. Đoạn mã này chỉ mang tính minh họa, không được viết vào tập tin **style.css**.

```css
a:link {
    color: #ffa500;
    text-decoration: none;
}
```

!!! info "Mức độ phổ biến của `:link`"

    `:link` có thể ít phổ biến vì:

    - Tính tối giản:

        Nhiều nhà thiết kế web không muốn phân biệt các liên kết là "đã truy cập" hay "chưa truy cập" nhằm giữ cho giao diện đồng bộ.

    - Sự tiện lợi:

        Viết `a { ... }` ngắn gọn hơn và bao quát được toàn bộ trạng thái cơ bản trước khi thêm các hiệu ứng khác.

## Lớp giả `:visited`

!!! note "Bộ chọn `a:visited`"

    - Dành cho trạng thái mà **liên kết đã được truy cập**.

        Trạng thái này xuất hiện sau khi liên kết của thẻ `<a>` đã tồn tại trong lịch sử duyệt web.
    
    - Nhằm giúp người dùng nhận biết các nội dung mà họ đã xem.

Ví dụ:  
Đoạn mã sau thiết lập màu tím khi liên kết đã truy cập, tức trang web của liên kết đã tải xong.

```css title="style.css" linenums="33"
a:visited {
    color: #7360f2;
}
```

## Lớp giả `:hover`

!!! note "Bộ chọn `a:hover`"

    - Dành cho trạng thái mà người dùng **đặt trỏ chuột vào vùng không gian của liên kết**.
    - Nhằm tạo phản hồi thị giác khi người dùng tương tác bằng chuột.

Ví dụ:  
Đoạn mã sau thiết lập màu hồng, gạch dưới, tăng cỡ chữ và in đậm khi người dùng di chuyển chuột lên liên kết.

```css title="style.css" linenums="37"
a:hover {
    color: #fd98a9;
    text-decoration: underline;
    font-size: 1.1rem;
    font-weight: 700;
}
```

## Lớp giả `:active`

!!! note "Bộ chọn `a:active`"

    - Dành cho trạng thái mà người dùng **đang nhấn giữ chuột vào liên kết** nhưng chưa nhả ra.
    - Nhằm thể hiện phản ứng tức thì khi người dùng nhấn chuột.

Ví dụ:  
Đoạn mã sau thiết lập màu đỏ cho liên kết khi người dùng nhấn chuột.

```css title="style.css" linenums="44"
a:active {
    color: #fc3758;
}
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-link/portfolio.html#website){:target="_blank"}