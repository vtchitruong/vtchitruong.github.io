---
icon: material/lan
---

# Thiết kế mạng tại hộ gia đình

!!! abstract "Tóm lược nội dung"

    Bài này trình bày sơ nét về cách thiết kế mạng tại hộ gia đình.

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

### Xác định hoàn cảnh

Ta cần cân nhắc các yếu tố sau:

- Số lượng thiết bị.
- Mục đích sử dụng.
- Không gian:

    - Nhà có mấy tầng?
    - Diện tích sàn là bao nhiêu?
    - Có cần phủ sóng Wi-Fi khắp nhà không?

- Ngân sách.

### Thiết bị cần có

Ta cần chuẩn bị những thiết bị sau:

- Các ổ cắm điện: chọn vị trí có điện an toàn và ổn định.
- Modem hoặc ONT: thường do ISP cung cấp.
- Router: nên có chức năng phát sóng Wi-Fi.
- Cáp Ethernet và đầu nối RJ45: cần tính trước chiều dài dây cáp.
- Switch: có thể cần hoặc không.

### Kế hoạch lắp đặt

Ta cần tính toán những yếu tố sau:

- Số lượng router.
- Vị trí đặt các router và switch.
- Hướng đi dây cáp để có thể kết nối các thiết bị.
- Tên Wi-Fi và mật khẩu.

### Minh hoạ

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

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/home-lan-design.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| mạng cục bộ | LAN |
