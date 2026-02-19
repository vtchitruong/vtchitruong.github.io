---
icon: octicons/sidebar-collapse-24
---

# Định kiểu phần tử div để tạo bố cục

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách định kiểu cho phần tử `<div>` theo mô hình Flexbox để tạo bố cục.

## Khái quát

Bố cục cần tạo là hai khối **nằm ở hai bên trái và phải** trên cùng một dòng. Trong đó:

- Khối bên trái: chứa thanh điều hướng.
- Khối bên phải: trang web được truy cập khi click chuột vào một liên kết ở khối bên trái.

| Khối bên trái | Khối bên phải |
| --- | --- |
| Liên kết 1<br>Liên kết 2<br>Liên kết 3 | Trang web của liên kết vừa được click |

Để tạo bố cục trên, ta có thể sử dụng các phần tử hiện đại của HTML5 như: `<nav>`, `<aside>`, `<section>`, v.v...

Tuy nhiên, trong giới hạn của chương trình phổ thông, bài này chỉ sử dụng phần tử `<div>`.

---

## Mã lệnh HTML

Đoạn mã sau sử dụng các phần tử `<div>` để bao bọc các phần tử `<p>`, `<a>` và `<iframe>`. Đồng thời, gán các lớp `container`, `nav-bar` và `iframe-container` cho các `<div>` này để phục vụ cho việc định kiểu CSS.

```html title="portfolio.html" linenums="97" hl_lines="3-7 9-11"
    <h2 id="website">Một vài website tham khảo</h2>
    <div class="container">
        <div class="nav-bar">
            <p><a href="https://htmlreference.io/" target="my_iframe">HTML</a></p>
            <p><a href="https://htmlcheatsheet.com/css/" target="my_iframe">CSS</a></p>
            <p><a href="https://www.fullstackpython.com/" target="my_iframe">Python</a></p>
        </div>

        <div class="iframe-container">
            <iframe src="https://htmlreference.io/" width="100%" height="300" name="my_iframe"></iframe>
        </div>
    </div>
```

*Lưu ý:*  
*Giá trị thuộc tính `target` của phần tử `<a>` phải trùng với giá trị thuộc tính `name` của phần tử `<iframe>` để liên kết có thể mở đúng chỗ.*

---

## Lớp `nav-bar` và `iframe-container`

!!! note "Thuộc tính `box-sizing`"

    Dùng để thay đổi **cách tính tổng độ rộng và độ cao** của một phần tử.

Một số giá trị của thuộc tính `box-sizing`:

| Giá trị | Ý nghĩa |
| --- | --- |
| `content-box;` | Độ rộng và độ cao của phần tử chỉ bao gồm phần nội dung, không bao gồm đường viền và vùng đệm. |
| `border-box` | Gộp phần nội dung với đường viền và vùng đệm vào chung kích thước của phần tử: độ rộng = nội dung + đường viền + vùng đệm. |

Ví dụ:  
Đoạn mã sau sử dụng các bộ chọn lớp `.nav-bar` và `.iframe-container` để định kiểu cho các phần tử `<div>` tương ứng. Trong đó, `.nav-bar` dành cho khối bên trái và `.iframe-container` dành cho khối bên phải.

```css title="style.css" linenums="80"
.nav-bar {
    width: 20%;
    background-color: #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
}

.iframe-container {
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
}
```

Bên cạnh đó, đoạn mã sau sử dụng **bộ chọn hậu duệ** (`.iframe-container iframe`) để định kiểu riêng cho phần tử `<iframe>` nằm bên trong lớp `iframe-container`, nhằm không làm ảnh hưởng đến các `<iframe>` khác trong trang web.

```css title="style.css" linenums="93"
.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}
```

---

## Lớp `container`

!!! note "Mô hình Flexbox"

    CSS cung cấp mô hình Flexbox, tạm dịch là **hộp linh hoạt**, với các khái niệm cốt lõi sau:

    - `display: flex;`: là dòng lệnh kích hoạt mô hình, trong đó phần tử sẽ thay đổi cơ chế hiển thị từ dạng khối (block) thông thường sang dạng trục tọa độ để điều phối các thành phần bên trong.

    - **Flex-container**, tạm dịch là **khối chứa**, là phần tử trực tiếp nhận lệnh `display: flex;`. Nó đóng vai trò là *"môi trường"* kiểm soát, có quyền quyết định các phần tử con sẽ nằm ngang hay dọc, căn trái hay căn phải.

    - **Flex-item**, tạm dịch là **phần tử con**, là các phần tử nằm bên trong Flex-container. Các phần tử này sẽ tự động tuân thủ các quy tắc sắp xếp của Flex-container.

    - Mặc định, các Flex-item sẽ xếp theo trục ngang, tạo nên bố cục trái-phải.

Ví dụ:  
Đoạn mã sau sử dụng bộ chọn lớp `.container` để định kiểu phần tử `<div>` mang lớp này trở thành một Flex-container.

Điều này làm cho các phần tử con mang lớp `nav-bar` và `iframe-container` (cũng là các phần tử `<div>`) trở thành Flex-item, được đặt nằm cạnh nhau từ trái sang phải.

```css title="style.css" linenums="74"
.container {
    display: flex;
    width: 100%;
    height: 40vh; /* (1)! */
}
```
{ .annotate }

1.  Độ cao là 40% viewport height, trong đó viewport là khu vực hiển thị của trang web trong cửa sổ trình duyệt.

[Click dòng này để xem kết xuất trang portfolio trong tab mới](css-layout-div/portfolio.html#website){:target="_blank"}