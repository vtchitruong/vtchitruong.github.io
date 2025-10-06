---
icon: /octicons/file-binary-24
---

# Biểu diễn dữ liệu trong máy tính

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về ý tưởng biểu diễn chúng trong máy tính.

## Khái quát

Dù thuộc kiểu gì hoặc dạng nào, dữ liệu đều được mã hoá thành các bit `0` và `1`. Biểu diễn dữ liệu trong máy tính là thao tác chuyển đổi và lưu trữ dữ liệu dưới dạng các dãy bit trước khi xử lý.

!!! info "Số hoá"

    Đây cũng chính là lý giải cho thuật ngữ **số hoá**. Hiểu theo nghĩa hẹp, số hoá là chuyển đổi dữ liệu của thế giới xung quanh thành `0` và `1`.

Sau đây là tóm tắt cách mã hoá nhị phân đối với những kiểu dữ liệu phổ biến:  

## Văn bản

Để mã hoá văn bản, người ta sử dụng các **bảng mã** (1) để quy ước các ký tự và dãy bit tương ứng của nó.
{ .annotate }

1.  Có nơi gọi là **bộ mã**.

### ASCII

**ASCII** (American Standard Code for Information Interchange) là một trong những bảng mã đầu tiên của thế giới khoa học máy tính. Bảng mã ASCII được xây dựng vào đầu thập niên 1960 và sử dụng rộng rãi cho đến ngày nay.

ASCII sử dụng 8 bit để mã hoá một ký tự, và do đó, nó có thể mã hoá tối đa $2^8 = 256$ ký tự.

Ví dụ:

| Số thứ tự | Ký tự | Mã nhị phân |
| --- | --- | --- |
| 13 | Phím Enter | 00001101 |
| 32 | Khoảng trắng | 00100000 |
| 65 | A | 01000001 |
| 97 | a | 01100001 |

Bạn có thể tra cứu bảng mã ASCII tại [www.ascii-code.com](https://www.ascii-code.com/){:target="_blank"}.

### Unicode

Vì ASCII chỉ mã hoá được các ký tự tiếng Anh, trong khi thế giới lại có rất nhiều ngôn ngữ, nên các bảng mã khác đã ra đời. Unicode là một trong số đó.

Bảng mã **Unicode** nhắm đến việc mã hoá tất cả ký tự của mọi ngôn ngữ trên thế giới, kể cả các ký hiệu tượng hình và emoji.

Unicode quy ước một mã nhất quán (gọi là code point) cho mỗi ký tự, thường được biểu diễn bằng ký hiệu `U+` kèm theo một giá trị thập lục phân. Ví dụ: `U+0041` ứng với chữ cái `'A'`.

Điều này bảo đảm tính nhất quán trên các nền tảng và hệ thống khác nhau, cho phép các hệ thống có thể trao đổi qua lại và hiển thị ký tự một cách chính xác.

Việc mã hoá các code point này thành dữ liệu máy tính sử dụng các định dạng như **UTF-8**, **UTF-16** và **UTF-32**:

- UTF-8: sử dụng 1 đến 4 byte để mã hoá, tùy thuộc vào ký tự. Đây là định dạng phổ biến nhất vì tiết kiệm không gian cho các ký tự phổ biến như tiếng Anh.
- UTF-16: sử dụng 2 hoặc 4 byte để mã hoá, phù hợp với các ký tự phức tạp hơn.
- UTF-32: sử dụng cố định 4 byte cho mỗi ký tự, ít phổ biến do tốn bộ nhớ.

??? info "Phiên bản Unicode"

    Hiện nay, Unicode đã cập nhật đến phiên bản 15.0, mã hoá được tổng cộng 149,186 (1) ký tự.
    { .annotate }

    1.  Trong website này, dấu phẩy `,` dùng để gom nhóm 3 chữ số hàng nghìn, hàng triệu, v.v...

    Bạn có thể tìm hiểu thêm tại [home.unicode.org](https://home.unicode.org/){:target="_blank"}.

## Số

Để biểu diễn dữ liệu số trong máy tính, ta cần quan tâm đến các thao tác:

- Tính toán để chuyển đổi hệ đếm **từ thập phân** (là hệ đếm mà loài người sử dụng) **sang nhị phân** (là hệ đếm mà máy tính hiểu và lưu trữ được).
- Cách tính toán hoặc tổ chức các bit để biểu diễn giá trị **dương +** hoặc giá trị **âm -**.
- Đối với số có phần thập phân, cần quan tâm thêm cách tính toán hoặc tổ chức các bit để biểu diễn **số mũ** và **phần lẻ thập phân**.

Ngoài ra, việc biểu diễn dữ liệu số còn tùy thuộc vào kiến trúc phần cứng.

## Hình ảnh

Có nhiều kỹ thuật mã hoá khác nhau (dẫn đến có nhiều định dạng tập tin ảnh khác nhau). Một trong số đó là biểu diễn ảnh dưới dạng **lưới các ô vuông**, mỗi ô gọi là một **pixel** (1).
{ .annotate }

1.  pixel = **pic**-ture **el**-ement.

Trong hệ màu RGB, màu sắc của mỗi pixel là sự kết hợp của ba kênh màu <span style="color: #f00">Red</span>, <span style="color: #0f0">Green</span> và <span style="color: #00f">Blue</span>. Cường độ của mỗi kênh màu được thể hiện bằng một số nguyên **từ 0 đến 255**.

Ví dụ:

| Giá trị RGB | Màu |
| --- | --- |
| (255, 0, 0) | <span style="background-color: #f00; color: #fff">Đỏ</span> |
| (255, 255, 0) | <span style="background-color: #ff0; color: #fff"">Vàng</span> |
| (255, 0, 255) | <span style="background-color: #f0f; color: #fff"">Tím</span> |

<div>
    <iframe width="100%" height="545px" frameBorder=0 src="../pixel-illustration/mario-in-pixel.html"></iframe>
    <p style="margin: 0">Minh hoạ pixel trong ảnh</p>
</div>

Giá trị màu của RGB còn có thể được thể hiện bằng **hệ thập lục phân**. Cụ thể, mỗi màu được ghi bằng một chuỗi, bắt đầu bằng ký tự dấu thăng `#`, theo sau đó là 6 chữ số thuộc hệ thập lục phân.

Ví dụ:

| Giá trị màu trong hệ thập phân | Màu | Giá trị màu trong hệ thập lục phân |
| --- | --- | --- |
| (255, 0, 0) | <span style="background-color: #f00; color: #fff">Đỏ</span> | #FF0000 |
| (255, 255, 0) | <span style="background-color: #ff0; color: #fff"">Vàng</span> | #FFFF00 |
| (255, 0, 255) | <span style="background-color: #f0f; color: #fff"">Tím</span> | #FF00FF |

??? info "Hệ màu RGB"

    Giá trị của mỗi kênh màu là từ 0 đến 255, đồng nghĩa mỗi kênh màu chiếm 8 bit bộ nhớ. Như vậy, độ sâu màu của hệ màu RGB là $8 + 8 + 8 = 24$ bit.

    Cũng vì mỗi kênh màu có 256 giá trị, nên số lượng màu mà RGB có thể mã hoá là $256 \times 256 \times 256 = 16,777,216$ màu.

    RGB còn được gọi là hệ màu ánh sáng. Một cách hình tượng, ta xem mỗi kênh là một bóng đèn. Nếu bật sáng tối đa cả ba bóng, ta sẽ có cảm giác *chói lòa*. Đây chính là màu trắng, với giá trị là (255, 255, 255). Ngược lại, nếu tắt cả ba bóng, xung quanh sẽ *tối thui*. Đây chính là màu đen, với giá trị là (0, 0, 0). 

## Âm thanh

Để biểu diễn âm thanh trong máy tính, ta cần chuyển âm thanh từ **dạng sóng** sang **dạng số**, để từ đó mã hoá thành nhị phân. Cụ thể, ta cần xử lý hai yếu tố của âm thanh là **sample rate** và **bit rate**.

### Sample rate

Là số lượng mẫu được lấy trong mỗi giây của âm thanh. Sample rate càng lớn, nghĩa là số mẫu trong một giây càng nhiều, thì âm thanh càng rõ, càng chất lượng.

<div>
    <iframe width="100%" height="800px" frameBorder=0 src="../sound-wave/sample-rate.html"></iframe>
    <p style="margin: 0">Minh hoá chất lượng âm thanh phụ thuộc vào sample rate</p>
</div>

Trong hai hình này, màu xanh là đường biểu diễn sóng âm, màu đỏ là đường biểu diễn cách lấy mẫu.

Ở hình trên, số đoạn màu đỏ ít, nghĩa là sample rate thấp, trong khi ở hình dưới, số đoạn màu đỏ nhiều, nghĩa là sample rate cao. Dễ thấy rằng, đường màu đỏ ở hình dưới mô phỏng gần sát với đường sóng âm màu xanh hơn so với hình trên, đồng nghĩa chất lượng âm thanh tốt hơn.

### Bit rate

Là số lượng bit được dùng để lưu trữ một mẫu. Số lượng bit càng nhiều thì âm thanh càng rõ, càng chất lượng.

Ví dụ:  
Một tập tin nhạc mp3 có bit rate 320 kbps (1) thì có chất lượng âm thanh tốt hơn tập tin có bit rate 128 kbps.
{ .annotate }

1.  kbps = kilobit per second.

    320 kbps nghĩa là 1 giây âm thanh được lưu trữ trong 320 kilobit, tương đương 40 kilobyte.

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/data-representation-in-cs.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| độ sâu màu | color bit depth |
| hệ thập lục phân | hexadecimal |
| hệ thập phân | decimal |
| kênh màu | color channel |