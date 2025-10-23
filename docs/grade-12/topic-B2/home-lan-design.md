---
icon: material/lan
---

# Thiết kế mạng tại hộ gia đình

!!! abstract "Tóm lược nội dung"

    Bài này trình bày sơ nét về thiết kế mạng tại hộ gia đình.

## Khái quát

**Mạng cục bộ**, còn gọi là **LAN**, giúp kết nối các thiết bị đầu cuối với nhau trong một khu vực giới hạn, chẳng hạn như hộ gia đình, văn phòng, phòng máy thực hành của trường học.

Những thiết bị đầu cuối có thể kết nối trong LAN bao gồm: máy tính cá nhân, máy chủ, máy in, v.v...

Với mạng cục bộ tại hộ gia đình, ta có thể:

- Truy cập Internet.
- Chia sẻ tập tin giữa các thiết bị.
- Điều khiển từ xa các thiết bị thông minh bằng app trên điện thoại.
- Lắp đặt các camera giám sát và cảm biến.

![Sơ đồ khái quát LAN tại hộ gia đình](./lan-design/home-network-diagram.png){ loading=lazy width=420 }

*Sơ đồ khái quát LAN tại hộ gia đình*

## Các bước thiết kế

### Xem xét điều kiện lắp đặt

Ta cần xem xét các điều kiện sau:

- Mục đích sử dụng:

    - Chỉ lướt web, học tập.
    - Chơi game, streaming video.
    - Kết nối nhiều camera hoặc thiết bị IoT.

- Số lượng thiết bị cần kết nối vào mạng:

    - Số lượng máy tính, điện thoại thông minh, tivi thông minh.
    - Số lượng camera.
    - Số lượng thiết bị IoT.

- Không gian nhà:

    - Diện tích sàn là bao nhiêu?
    - Có bao nhiêu tầng, bao nhiêu phòng?
    - Có cần phủ sóng Wi-Fi khắp nhà không?

- Ngân sách.

### Xác định các thiết bị

Ta cần xác định những thiết bị như sau:

- Ổ cắm điện:

    - Mua thêm các ổ cắm điện mở rộng nếu cần.

- Modem hoặc ONT:

    - Thường do ISP cung cấp.
    - Chọn loại có thể chịu tải đủ thiết bị.

- Router và switch:

    - Nên có chức năng phát sóng Wi-Fi.
    - Số lượng đủ để phủ sóng những nơi cần thiết.
    - Tên Wi-Fi và mật khẩu.

- Cáp Ethernet và đầu nối RJ45:

    - Tổng chiều dài dây cáp.
    - Số lượng đầu nối.
    - Kìm bấm cáp mạng.

- Các thiết bị phụ trợ khác như máng cáp, nẹp cáp, ống luồn dây điện:

    - Tổng chiều dài hoặc số lượng.
    
### Vẽ sơ đồ

- Dự tính các vị trí trước khi tiến hành lắp đặt thực tế:

    - Vị trí có nguồn điện an toàn và ổn định.
    - Vị trí đặt modem, router và switch.
    - Hướng đi dây từ thiết bị này đến thiết bị khác.

Ví dụ:  
Hình sau minh hoạ mạng tại hộ gia đình.

![Minh hoạ mạng tại hộ gia đình](./lan-design/home-lan-design.png){ loading=lazy }

Trong hình trên:

- Hộ gia đình này sử dụng Internet cáp quang, kết nối từ **modem** (gọi đúng là ONT) đến nhà mạng.
- Mặc dù modem có chức năng phát sóng Wi-Fi, hộ này vẫn dùng thêm hai **router** khác có chức năng phát Wi-Fi để phủ sóng đến các khu vực khác trong nhà.
- Để theo dõi khi vắng nhà, hộ đã trang bị hai **camera IP** (1). Cả hai đều được kết nối vào **NVR** (2) bằng cáp Ethernet có hỗ trợ PoE (3), và NVR được kết nối vào modem.
    { .annotate }

    1.  **IP camera** (Internet Protocol camera) là loại camera giám sát sử dụng giao thức mạng để truyền video và âm thanh qua LAN hoặc Internet.

    2.  **NVR** (Network Video Recorder) là thiết bị dùng để ghi và quản lý video từ các camera IP.

    3. **PoE** (Power over Ethernet) là công nghệ cho phép truyền cả dữ liệu và nguồn điện qua cùng một cáp Ethernet.

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/8/t/9/l/12/s/28/q/1/){:target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/home-lan-design.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lắp đặt thiết bị mạng | network device installation |
| mạng cục bộ | LAN |
| thiết kế mạng | network design |