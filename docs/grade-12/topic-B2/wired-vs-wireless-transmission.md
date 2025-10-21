---
icon: material/wifi
---

# Đường truyền hữu tuyến và vô tuyến

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về đường truyền hữu tuyến và vô tuyến trong mạng máy tính.

## Các loại đường truyền

### Khái quát

Để kết nối các máy tính và thiết bị vào mạng máy tính, ta cần có các đường truyền dữ liệu. Đường truyền dữ liệu có thể chia thành hai loại chính:

- Hữu tuyến, tức có dây.
- Vô tuyến, tức không dây.

### Đường truyền hữu tuyến

**Đường truyền hữu tuyến** sử dụng các loại dây cáp để truyền tín hiệu giữa các thiết bị.

Dữ liệu được truyền qua dây cáp bằng **sóng điện từ** (1) dưới dạng tín hiệu **điện** (2) hoặc **ánh sáng** (3).
{ .annotate }

1.  **Sóng điện từ** là sự lan truyền của năng lượng dưới dạng các dao động của điện trường và từ trường vuông góc với nhau trong không gian.

    Sóng điện từ không cần môi trường vật chất như không khí hay nước để lan truyền, mà có thể lan truyền trong chân không như không gian vũ trụ.

2.  **Tín hiệu điện** là sóng điện từ được dẫn đường trong dây cáp, chứ không phải là electron di chuyển vật lý từ đầu này đến đầu kia.

3.  **Tín hiệu ánh sáng** cũng là sóng điện từ được dẫn đường trong sợi thuỷ tinh hoặc nhựa, bao gồm laser và hồng ngoại, chứ không phải là các hạt photon.

Các loại dây cáp phổ biến:

- Cáp đồng: cáp Ethernet (cáp xoắn đôi) (1), cáp đồng trục.
    { .annotate }

    1.  **Cáp Ethernet** là một loại cáp xoắn đôi, sử dụng đầu nối và cổng **RJ45**. Ngược lại, cáp xoắn đôi chưa chắc là cáp Ethernet.

- Cáp quang.

### Đường truyền vô tuyến

**Đường truyền vô tuyến** truyền dữ liệu mà không cần dây cáp.

Dữ liệu thường được truyền qua **không khí** hoặc **chân không** bằng **sóng điện từ**.

Hiện nay, có một số công nghệ vô tuyến phổ biến sau:

- NFC
- Wi-Fi
- Bluetooth
- Mạng di động: 4G, 5G

| | NFC | Wi-Fi | Bluetooth | Mạng di động |
| --- | --- ---| --- --| --- | --- |
| Tần số | 13.56 MHz | 2.4 GHz hoặc 5 GHz | 2.4 GHz | 700 MHz - 3.5 GHz |
| Phạm vi | 4-10 cm | 10-100 m | 10-100 m | Hàng km |
| Tốc độ truyền | Thấp (424 Kbps) | Cao (lên đến vài Gbps) | Trung bình (1-24 Mbps) | Cao (10 Mbps - vài Gbps) |
| Ứng dụng | - Thanh toán <br> - Chia sẻ dữ liệu gần | - LAN <br> - Internet <br> | - Tai nghe, loa <br> -  Bàn phím, chuột | - Internet di động <br> - Gọi điện thoại |
| Bảo mật | Cao (do phạm vi ngắn) | Trung bình (cần mật khẩu) | Trung bình (cần mã hóa) | Cao (mã hóa mạnh) |

### So sánh

| | Hữu tuyến | Vô tuyến |
| --- | --- | --- |
| Tốc độ | Cao | Thấp hơn |
| Tín hiệu | Ổn định, ít bị nhiễu do môi trường. | Có thể bị nhiễu do môi trường hoặc vật cản |
| Độ trễ | Thấp | Cao hơn |
| Tính linh hoạt | Thấp, do giới hạn của dây cáp. | Cao, di động dễ dàng. |
| Bảo mật | Cao, do cần truy cập trực tiếp vào dây. | Thấp hơn, cần được mã hoá. |
| Lắp đặt | Cần cơ sở hạ tầng phức tạp, tốn kém và mất thời gian để lắp đặt dây cáp. | Ít phức tạp hơn hữu tuyến. |
| Ứng dụng | - Phòng máy tính ở trường học <br> - Trung tâm dữ liệu <br> - Hệ thống mạng doanh nghiệp lớn | - Hộ gia đình <br> - Laptop, máy tính bảng, điện thoại thông minh <br> - IoT |.

## Internet cố định và di động

Dưới đây là bảng so sánh Internet cố định và Internet di động:

| | Internet cố định | Internet di động |
| --- | --- | --- |
| Loại đường truyền | Hữu tuyến (cáp quang, cáp đồng) | Vô tuyến (4G, 5G) |
| Tốc độ | Cao, lên đến vài Gbps. | Thay đổi, phụ thuộc vùng phủ sóng, có thể từ 10 Mbps đến vài Gbps. |
| Độ ổn định | Ổn định, ít bị ảnh hưởng môi trường. | Ít ổn định hơn, dễ bị ảnh hưởng bởi vật cản, thời tiết. |
| Tính linh hoạt | Thấp, chỉ dùng tại vị trí cố định. | Cao, dùng mọi nơi trong vùng phủ sóng. |
| Ứng dụng | Nhà ở, văn phòng, trường học | Người di chuyển nhiều |
| Chi phí | Thường cao hơn , do cần lắp đặt hạ tầng. | Linh hoạt, có thể trả theo gói dữ liệu. |

!!! info "Thống kê tốc độ đường truyền Internet"

    Có một số tổ chức thường thống kê tốc độ đường truyền Internet cố định và di động của các nước, chẳng hạn như [Speedtest Global Index](https://www.speedtest.net/global-index){target="_blank"}.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cổng RJ45 | RJ45 port |
| dây cáp | cable |
| đầu nối RJ45 | RJ45 connector |
| đường truyền hữu tuyến | wired transmission |
| đường truyền vô tuyến | wireless transmission |