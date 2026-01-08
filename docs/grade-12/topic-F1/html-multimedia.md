---
icon: material/image
---

# Tạo đa phương tiện

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách thêm ảnh, âm thanh và video vào trang web.

## Phần tử tạo nội dung đa phương tiện

| Phần tử | Công dụng |
| --- | --- |
| `<img>` (image) | Tạo hình ảnh trong trang web | 
| `<audio>` | Tạo âm thanh trong trang web |
| `<video>` | Tạo video trong trang web |

!!! note "Đa phương tiện"

    Là sự kết hợp các loại phương tiện truyền thông như chữ, đồ hoạ, âm thanh, hình ảnh tĩnh, hình ảnh động, v.v...

Một số định dạng âm thanh và hình ảnh được HTML hỗ trợ:

| Video | Âm thanh |
| --- | --- |
| .avi .mp4 .mpg .mpeg .webm | .wav .mp3 .aac |

---

## Thuộc tính của các nội dung đa phương tiện

### Hình ảnh

| Thuộc tính | Ý nghĩa |
|--- | --- |
| `src` | URL của tập tin hình |
| `width` | Độ rộng hiển thị của hình |
| `height` | Độ cao hiển thị của hình |
| `alt` (alternative text) | Nội dung sẽ hiển thị để thay thế nếu hình không hiển thị được |
| `title` | Nội dung sẽ hiển thị khi rê chuột lên hình |

!!! tip "Tỉ lệ hình"

    Ta nên khai báo chỉ một trong hai, hoặc `width` hoặc `height`, trình duyệt sẽ tự động tính toán giá trị còn lại để giữ đúng tỉ lệ gốc của hình.

Ví dụ:  
Đoạn mã sau tạo một hình có kích thước gốc là 736x736 pixel, hiển thị ở kích thước 400x400 pixel.

```html title="portfolio.html" linenums="97" hl_lines="2 3"
    <h2>Hình mình thích trên Pinterest</h2>
    <img src="https://i.pinimg.com/736x/43/f5/59/43f559c452d2dd745b8dba5ee23c854f.jpg"
    width="400px" alt="Hình do AI tạo đăng trên Pinterest" title="Some town of Japan"> 
```

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-multimedia/portfolio.html#end){:target="_blank"}

### Âm thanh và video

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `src` | URL của tập tin âm thanh hoặc video |
| `autoplay` | Tự động phát video khi người dùng truy cập trang web |
| `controls` | Hiển thị các nút điều khiển |
| `loop` | Tự động phát lại khi kết thúc |
| `muted` | Tắt âm thanh |
| `width` | Độ rộng hiển thị của video |
| `height` | Độ cao hiển thị của video |

!!! info "Thuộc tính `autoplay`"

    Một số trình duyệt có thể vô hiệu hoá thuộc tính `autoplay` hoặc cho phép `autoplay` đi kèm với `muted`.

!!! warning "Lưu ý"

    Nhiều dịch vụ nhạc hoặc video trực tuyến không cho phép nhúng link trực tiếp bằng các phần tử HTML trên. Thay vào đó, ta phải lấy đoạn mã do họ cung cấp đặt vào trang web của mình.
    
    Như vậy, có hai cách tạo nội dung đa phương tiện:

    - Cách 1: dùng đoạn mã do những dịch vụ chính chủ cung cấp.
    - Cách 2: lưu tập tin đa phương tiện trên máy chủ của riêng mình và dùng các phần tử HTML như trên.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-multimedia.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| âm thanh | audio, sound |
| hình ảnh | image |