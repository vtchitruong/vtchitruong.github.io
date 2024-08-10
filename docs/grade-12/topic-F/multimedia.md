# Đa phương tiện

!!! abstract "Tóm lược nội dung"

    Bài này gợi ý cách thêm ảnh, âm thanh và video vào trang web.

## Hình ảnh

Đa phương tiện là sự kết hợp các loại phương tiện truyền thông như chữ, đồ họa, âm thanh, hình ảnh tĩnh, hình ảnh động, v.v...

Để thêm hình ảnh vào trang web, ta sử dụng phần tử `<img>` và các thuộc tính trong bảng 1.

*Bảng 1. Những thuộc tính của thẻ `<img>`*

| Thuộc tính | Ý nghĩa |
|--- | --- |
| `src="url"` | Đường dẫn của tập tin ảnh |
| `width="200px"` | Chiều rộng hiển thị. Ví dụ: 200 pixel |
| `height="100px"` | Chiều cao hiển thị. Ví dụ: 100 pixel |
| `alt="nội_dung"` | nội_dung sẽ hiển thị để thay thế nếu vì lý do nào đó ảnh không hiển thị được |
| `title="nội_dung"` | nội_dung sẽ hiển thị khi rê chuột lên ảnh |

Ví dụ:  
Đoạn mã trong tập tin **portfolio.html** minh họa cách thêm hình ảnh vào trang web. Trong đó, ảnh gốc có kích thước 736x736 pixel, còn kích thước hiển thị là 400x400 pixel.

``` html title="portfolio.html" linenums="97"
    <h2>Ảnh mình thích trên Pinterest</h2>
    <img src="https://i.pinimg.com/736x/43/f5/59/43f559c452d2dd745b8dba5ee23c854f.jpg"
    width="400px" alt="Ảnh do AI tạo đăng trên Pinterest" title="Some town of Japan"> 
    <a name="end"></a>
```

[Click để xem kết xuất trang portfolio trong tab mới](multimedia/portfolio.html#end){:target="_blank"}

## Âm thanh và video

Để thêm âm thanh và video vào trang web, ta sử dụng các phần tử `<audio>` và `<video>`.

*Bảng 2. Các phần tử dùng để định nghĩa âm thanh và hình ảnh*

| Phần tử | Công dụng |
| --- | --- |
| `<video>` | Địng nghĩa nội dung là video |
| `<audio>` | Định nghĩa nội dung là âm thanh |

Thuộc tính của các phần tử trên được liệt kê trong bảng 3.

*Bảng 3. Những thuộc tính của `<video>` và `<audio>`*

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

Một số định dạng âm thanh và hình ảnh được HTML hỗ trợ liệt kê trong bảng 4 dưới đây.

*Bảng 4. Một số định dạng tập tin đa phương tiện*

| Âm thanh | Video |
| --- | --- |
| .avi .mp4 .mpg .mpeg .webm | .wav .mp3 .aac |

!!! tip "Lưu ý"

    Nhiều dịch vụ nhạc hoặc video trực tuyến không cho phép nhúng link trực tiếp bằng các thẻ HTML trên, thay vào đó phải sử dụng đoạn mã do họ cung cấp sẵn thì mới đăng lên được trang web của mình. Vì vậy, có hai hướng:

    - Hoặc sử dụng đoạn mã do những dịch vụ đó cung cấp.
    - Hoặc tập tin đa phương tiện phải đặt trên máy chủ của riêng mình thì mới dùng được các thẻ HTML như trên.

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/multimedia.mm.md!}
*Sơ đồ tóm tắt cách thêm dữ liệu hình ảnh và đa phương tiện*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| âm thanh | audio, sound |
| hình ảnh | image |
| hình ảnh động | animation |