---
icon: material/image
---

# Tạo thành phần đa phương tiện

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các phần tử HTML giúp thêm ảnh, âm thanh và video vào trang web.

## Hình ảnh

**Đa phương tiện** là sự kết hợp các loại phương tiện truyền thông như chữ, đồ họa, âm thanh, hình ảnh tĩnh, hình ảnh động, v.v...

Để thêm hình ảnh vào trang web, ta sử dụng phần tử `<img>` và các thuộc tính sau:

| Thuộc tính | Ý nghĩa |
|--- | --- |
| `src="url"` | Đường dẫn của tập tin ảnh |
| `width` | Chiều rộng hiển thị |
| `height` | Chiều cao hiển thị |
| `alt="nội_dung"` | nội_dung sẽ hiển thị để thay thế nếu vì lý do nào đó ảnh không hiển thị được |
| `title="nội_dung"` | nội_dung sẽ hiển thị khi rê chuột lên ảnh |

Ví dụ:  
Trong tập tin **portfolio.html**, ta thêm một ảnh, biết rằng, ảnh gốc có kích thước 736x736 pixel, còn kích thước hiển thị là 400x400 pixel.

``` html title="portfolio.html" linenums="97" hl_lines="2 3"
    <h2>Ảnh mình thích trên Pinterest</h2>
    <img src="https://i.pinimg.com/736x/43/f5/59/43f559c452d2dd745b8dba5ee23c854f.jpg"
    width="400px" alt="Ảnh do AI tạo đăng trên Pinterest" title="Some town of Japan"> 
```

[Click để xem kết xuất trang portfolio trong tab mới](html-multimedia/portfolio.html#end){:target="_blank"}

## Âm thanh và video

Các phần tử dùng để tạo thành phần âm thanh và hình ảnh:

| Phần tử | Công dụng |
| --- | --- |
| `<video>` | Tạo thành phần video |
| `<audio>` | Tạo thành phần âm thanh |

Thuộc tính của hai phần tử trên như sau:

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `src` | Đường dẫn của tập tin video hoặc âm thanh |
| `autoplay` | Tự động phát khi người dùng truy cập trang web |
| `controls` | Hiển thị các nút điều khiển |
| `loop` | Tự động phát lại khi kết thúc |
| `muted` | Tắt âm thanh |
| `height` | Chiều cao hiển thị của video | 
| `width` | Chiều rộng hiển thị của video |

!!! tip "Thuộc tính autoplay"

    Một số trình duyệt có thể vô hiệu hoá thuộc tính `autoplay` hoặc cho phép thuộc tính `autoplay` đi kèm với thuộc tính `muted`.

Một số định dạng âm thanh và hình ảnh được HTML hỗ trợ:

| Âm thanh | Video |
| --- | --- |
| .avi .mp4 .mpg .mpeg .webm | .wav .mp3 .aac |

!!! tip "Lưu ý"

    Nhiều dịch vụ nhạc hoặc video trực tuyến không cho phép nhúng link trực tiếp bằng các thẻ HTML trên, thay vào đó phải sử dụng đoạn mã do họ cung cấp thì mới đăng lên trang web của mình được. Vì vậy, có hai hướng:

    - Hoặc sử dụng đoạn mã do những dịch vụ đó cung cấp.
    - Hoặc lưu tập tin đa phương tiện trên máy chủ của riêng mình và sử dụng các phần tử HTML như trên.

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/html-multimedia.mm.md!}
*Sơ đồ tóm tắt cách thêm hình ảnh và đa phương tiện vào trang web*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| âm thanh | audio, sound |
| hình ảnh | image |
| hình ảnh động | animation |