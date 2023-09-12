
# Biểu diễn dữ liệu trong máy tính

## Một số kiểu dữ liệu

Trước khi xử lý, dữ liệu phải được đưa vào và lưu trữ trên máy tính. Dữ liệu và thông tin của thế giới thực rất đa dạng; trong khi đó, không phải mọi dữ liệu đều có thể lưu trữ được trên máy.

Dữ liệu lưu trữ và xử lý được bằng máy tính có thể quy về những kiểu cơ bản sau:  

``` mermaid
flowchart TD
    D(fa:fa-database Dữ liệu)
    D---T(Văn bản)
    D---N(Số)
    D---I(Hình ảnh)
    D---S(Âm thanh) 
    D---E(Yếu tố môi trường)
```

### Dữ liệu số
:   Có 2 kiểu số cơ bản:

    - Số nguyên: là số không có phần thập phân.
    - Số thực: là số có phần thập phân.

    Ví dụ 1:  
    `7` là số *bảy nguyên*, còn `7.0` là số *bảy thập phân*. Mặc dù đối với người, hai số này là như nhau, song máy tính lưu trữ khác nhau.  

### Dữ liệu văn bản
:   Văn bản bao gồm cả *ký tự* lẫn *chuỗi*. Chuỗi là tập hợp gồm không, một hoặc nhiều ký tự.  
    
    Trong một số ngôn ngữ lập trình, ký tự thường đặt trong cặp dấu nháy đơn `''`, còn chuỗi đặt trong cặp dấu nháy kép/ngoặc kép `""`.  

    Ví dụ 2:  
    `'7'` là ký tự, `"7"` là chuỗi gồm một ký tự. Cả ký tự lẫn chuỗi đều không thể tham gia các phép toán cộng, trừ, nhân, chia. Muốn tham gia tính toán, lập trình viên phải chuyển đổi kiểu dữ liệu từ kiểu văn bản sang kiểu số.  

    Một số ngôn ngữ lập trình khác, trong đó có Python, dùng dấu nháy đơn hay nháy kép đều được xem là chuỗi.

### Yếu tố môi trường
:   Đây là tên gọi chung cho các dữ liệu liên quan đến môi trường tự nhiên xung quanh, bao gồm dữ liệu mang tính vật lý, hóa học và sinh học, chẳng hạn: ánh sáng, nhiệt độ, gia tốc, vị trí, góc quay, hướng, dữ liệu sinh trắc (vân tay, tròng mắt, v.v...).

    Dữ liệu yếu tố môi trường được máy tính thu thập thông qua các thiết bị gọi là *cảm biến*.  

## Hệ nhị phân

Hệ nhị phân là hệ thống số đếm chỉ sử dụng hai ký hiệu `0` và `1` để thể hiện các giá trị số khác nhau. Mọi số trong hệ nhị phân đều được tạo ra bằng cách ghép một hoặc nhiều chữ số `0` và `1` lại với nhau.  

Hệ nhị phân là một hệ đếm kỳ diệu. Sự kỳ diệu thể hiện ở chỗ, dù dữ liệu có nhiều dạng khác nhau, khi đưa vào máy tính, chúng đều được biến đổi thành cùng một dạng là các tín hiệu `0` và `1`, gọi là **dãy bit**[^1] hoặc **mã nhị phân** của dữ liệu. Dựa trên mã nhị phân, máy tính có thể lưu trữ và xử lý dữ liệu một cách chính xác.  

[^1]: bit = **b**-inary dig-**it**, tạm dịch là *chữ số nhị phân*.

Chẳng hạn, khi các máy tính "*nói chuyện*" với nhau, nghĩa là truyền dữ liệu qua lại dưới dạng **bit 0** và **bit 1**, mọi dữ liệu đều được truyền một cách chính xác và đầy đủ từ máy này sang máy nọ. Nói cách khác, ta có thể nhận được tin nhắn của bạn bè một cách đầy đủ, có thể nghe các âm thanh của bài nhạc một cách rõ ràng; có thể xem hình ảnh của video với độ nét cao.  

``` mermaid
---
title: Hình 1. Minh họa hai máy tính gửi tin nhắn cho nhau bằng tín hiệu bit
---
sequenceDiagram
    autonumber
    Computer 1->>Computer 2: 01000011 01001111 01000110 01000110 01000101 01000101 00111111
    Computer 2->>Computer 1: 01000111 01010010 01000101 01000001 01010100 00100001
```

## Biểu diễn dữ liệu trong máy tính

Dù thuộc kiểu gì hoặc dạng nào, dữ liệu đều được mã hóa thành các bit 0 và 1. Biểu diễn dữ liệu trong máy tính là thao tác chuyển đổi và lưu trữ dữ liệu dưới dạng các dãy bit trước khi xử lý.  

??? note "Số hóa"
    Đây cũng chính là lý giải cho thuật ngữ **số hóa**. Hiểu theo nghĩa hẹp, số hóa là chuyển đổi dữ liệu của thế giới xung quanh thành 0 và 1.

Sau đây là tóm tắt cách mã hóa nhị phân đối với những kiểu dữ liệu phổ biến:  

### Văn bản

Để mã hóa văn bản, người ta sử dụng các **bảng mã**[^2] để quy ước các ký tự và dãy bit tương ứng của nó.

[^2]: Có nơi gọi là **bộ mã**.

#### ASCII

ASCII (American Standard Code for Information Interchange) là một trong những bảng mã đầu tiên của thế giới khoa học máy tính. Bảng mã ASCII được xây dựng vào đầu thập niên 1960 và sử dụng rộng rãi cho đến ngày nay.  

ASCII sử dụng 8 bit để mã hóa một ký tự, và do đó, nó có thể mã hóa tối đa $2^8 = 256$ ký tự.  

Ví dụ 3:  

| Số thứ tự | Ký tự | Mã nhị phân |
| --- | --- | --- |
| 13 | Phím Enter | 00001101 |
| 32 | Khoảng trắng | 00100000 |
| 65 | A | 01000001 |
| 97 | a | 01100001 |

Bạn có thể tra cứu bảng mã ASCII tại [www.ascii-code.com](https://www.ascii-code.com/){:target="_blank"}.  

#### Unicode

Vì ASCII chỉ mã hóa được các ký tự tiếng Anh, trong khi thế giới lại có rất nhiều ngôn ngữ, nên các bảng mã khác đã ra đời. Unicode là một trong số đó.    

Bảng mã Unicode nhắm đến việc mã hóa tất cả ký tự của mọi ngôn ngữ trên thế giới, kể cả các ký hiệu tượng hình và emoji. Unicode quy ước một mã nhất quán cho mỗi ký tự, cho phép các hệ thống máy tính khác nhau có thể trao đổi qua lại và hiển thị ký tự một cách chính xác.  

Unicode sử dụng cả 8 bit, 16 bit và 32 bit để mã hóa một ký tự.  

Hiện nay, Unicode đã cập nhật đến phiên bản 15.0, mã hóa được tổng cộng 149,186[^3] ký tự.  

[^3]: Trong website này, dấu phẩy `,` dùng để gom nhóm 3 chữ số hàng nghìn, hàng triệu, v.v...

Bạn có thể tìm hiểu thêm tại [home.unicode.org](https://home.unicode.org/){:target="_blank"}.  

### Số

Để biểu diễn dữ liệu số trong máy tính, ta cần quan tâm đến các thao tác:  

- Tính toán để chuyển đổi hệ đếm từ số thập phân (là số mà loài người sử dụng) sang số nhị phân (là số mà máy tính hiểu được).
- Cách tính toán hoặc tổ chức các bit để biểu diễn dấu dương + hoặc dấu âm -.
- Đối với số có phần thập phân, cân quan tâm thêm cách tính toán hoặc tổ chức các bit để biểu diễn số mũ và phần thập phân.

Ngoài ra, việc biểu diễn dữ liệu số còn tùy thuộc vào kiến trúc phần cứng.   

### Hình ảnh

Có nhiều kỹ thuật mã hóa khác nhau (dẫn đến có nhiều định dạng file ảnh khác nhau). Một trong số đó là biểu diễn ảnh dưới dạng *lưới các ô vuông*, mỗi ô gọi là một **pixel**[^4].  

Trong hệ màu RGB, màu sắc của mỗi pixel là sự kết hợp của ba kênh màu <span style="color: #f00">Red</span>, <span style="color: #0f0">Green</span> và <span style="color: #00f">Blue</span>. Cường độ của mỗi kênh màu được thể hiện bằng một số nguyên **từ 0 đến 255**.  

Ví dụ 4:  

| Giá trị RGB | Màu |
| --- | --- |
| (255, 0, 0) | <span style="background-color: #f00; color: #fff">Đỏ</span> |
| (255, 255, 0) | <span style="background-color: #ff0; color: #fff"">Vàng</span> |
| (255, 0, 255) | <span style="background-color: #f0f; color: #fff"">Tím</span> |

[^4]: pixel = **pic**-ture **el**-ement.


<div>
    <iframe width="100%" height="545px" frameBorder=0 src="../pixel-illustration/mario-in-pixel.html"></iframe>
    <p style="margin: 0">Hình 2. Minh họa pixel trong ảnh</p>
</div>

Giá trị màu của RGB còn có thể được thể hiện bằng **hệ thập lục phân**. Cụ thể, mỗi màu được ghi bằng một chuỗi, bắt đầu bằng ký tự dấu thăng `#`, theo sau đó là 6 chữ số thuộc hệ thập lục phân.

Ví dụ 5:

| Giá trị màu trong hệ thập phân | Màu | Giá trị màu trong hệ thập lục phân |
| --- | --- | --- |
| (255, 0, 0) | <span style="background-color: #f00; color: #fff">Đỏ</span> | #FF0000 |
| (255, 255, 0) | <span style="background-color: #ff0; color: #fff"">Vàng</span> | #FFFF00 |
| (255, 0, 255) | <span style="background-color: #f0f; color: #fff"">Tím</span> | #FF00FF |

??? abstract "Hệ màu RGB"
    Giá trị của mỗi kênh màu là từ 0 đến 255, đồng nghĩa mỗi kênh màu chiếm 8 bit bộ nhớ. Như vậy, độ sâu màu của hệ màu RGB là $8 + 8 + 8 = 24$ bit.  

    Cũng vì mỗi kênh màu có 256 giá trị, nên số lượng màu mà RGB có thể mã hóa là $256 \times 256 \times 256 = 16,777,216$ màu.  

    RGB còn được gọi là hệ màu ánh sáng. Một cách hình tượng, ta xem mỗi kênh là một bóng đèn. Nếu bật sáng tối đa cả ba bóng, ta sẽ có cảm giác *chói lòa*. Đây chính là màu trắng, với giá trị là (255, 255, 255). Ngược lại, nếu tắt cả ba bóng, xung quanh sẽ *tối thui*. Đây chính là màu đen, với giá trị là (0, 0, 0). 

### Âm thanh

Để biểu diễn âm thanh trong máy tính, ta cần chuyển âm thanh từ dạng sóng sang dạng số, để từ đó mã hóa thành nhị phân. Cụ thể, ta cần xử lý hai yếu tố của âm thanh là **sample rate** và **bit rate**.  

#### Sample rate

:   Là số lượng mẫu được lấy trong mỗi giây của âm thanh. Sample rate càng lớn, nghĩa là số mẫu trong một giây càng nhiều, thì âm thanh càng rõ, càng chất lượng.  

<div>
    <iframe width="100%" height="788px" frameBorder=0 src="../sound-wave/sample-rate.html"></iframe>
    <p style="margin: 0">Hình 3. Minh họa chất lượng âm thanh phụ thuộc vào sample rate</p>
</div>

Trong hình 3, màu xanh là đường biểu diễn sóng âm, màu đỏ là đường biểu diễn cách lấy mẫu. Ở hình trên, số đoạn màu đỏ ít, nghĩa là sample rate thấp, trong khi ở hình dưới, số đoạn màu đỏ nhiều, nghĩa là sample rate cao. Dễ thấy, đường màu đỏ ở hình dưới mô phỏng gần sát với đường sóng âm màu xanh hơn hình trên, đồng nghĩa chất lượng âm thanh tốt hơn.  

#### Bit rate

:   Là số lượng bit được dùng để lưu trữ một mẫu. Số lượng bit càng nhiều thì âm thanh càng rõ, càng chất lượng.

Ví dụ 6:  
Một file nhạc mp3 có bit rate 320 kbps[^5] thì có chất lượng âm thanh tốt hơn file có bit rate 128 kbps.   

[^5]: kbps = kilobit per second

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| âm thanh | sound |
| cảm biến | sensor |
| độ sâu màu | color bit depth |
| hệ nhị phân | binary |
| hệ thập lục phân | hexadecimal |
| hệ thập phân | decimal |
| hình ảnh | image |
| kênh màu | color channel |
| số | number |
| số nguyên | integer |
| số thập phân | floating-point number |
| văn bản | text |
