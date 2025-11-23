---
icon: simple/handshake_protocol
---

# Giao thức mạng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - Khái quát về giao thức mạng
    - Giao thức TCP/IP

## Khái niệm

**Giao thức** là một **tập hợp các quy tắc** được thiết lập sẵn nhằm kiểm soát việc truyền và nhận dữ liệu giữa các thiết bị trong hệ thống mạng.

Nói cách khác, giao thức giống như một *ngôn ngữ chung* mà các thiết bị sử dụng để trao đổi với nhau.

Ví dụ:

Mạng có thể được chia thành bốn tầng theo mô hình TCP/IP. Mỗi tầng có một số giao thức phổ biến như sau:

- Tầng ứng dụng:

    - **HTTP**: dùng để truyền tải các siêu văn bản, chủ yếu là các trang web.
    - **HTTPS**: là phiên bản bảo mật của HTTP, mã hoá dữ liệu để an toàn hơn.
    - **FTP**: dùng để truyền tải tập tin giữa các máy tính.
    - **SMTP**: dùng để gửi và chuyển tiếp email từ máy tính của người gửi đến máy chủ hoặc giữa các máy chủ.
    - **POP3**: dùng để nhận email từ máy chủ về máy tính của người dùng.
    - **IMAP**: cũng là giao thức để nhận email, nhưng cho phép người dùng quản lý email trực tiếp trên máy chủ, đồng thời truy cập email từ nhiều thiết bị khác.
    - **DNS**: dịch tên miền thành địa chỉ IP để tìm máy chủ.
    - **DHCP**: tự động cấp địa chỉ IP cho thiết bị khi kết nối mạng.

- Tầng giao vận:

    - **TCP**: bảo đảm dữ liệu được gửi đến đúng, đầy đủ và theo thứ tự, dành cho web, email.
    - **UDP**: Truyền dữ liệu nhanh nhưng không kiểm tra lỗi, dành cho video hoặc game trực tuyến.

- Tầng Internet:
    
    - **IP**: xác định địa chỉ của thiết bị để gửi dữ liệu đến đúng nơi.

- Tầng truy cập:

    - **Ethernet**: điều khiển cách dữ liệu được truyền qua cáp.
    - **Wi-Fi**: điều khiển cách dữ liệu được truyền qua mạng không dây.

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/7/t/8/l/9/s/21/q/1/){:target="_blank"}

## Bộ giao thức TCP/IP

### Khái quát

**TCP/IP** là viết tắt của Transmission Control Protocol/Internet Protocol, tạm dịch là **giao thức điều khiển truyền tải** và **giao thức Internet**.

TCP/IP là bộ giao thức được sử dụng để kết nối các thiết bị trên Internet và trên các mạng máy tính khác.

TCP/IP là nền tảng của Internet, cho phép các máy tính trên toàn thế giới giao tiếp với nhau.

### Mô hình TCP/IP

Bộ giao thức TCP/IP được "mô hình hoá" thành 4 tầng như sau:

![Mô hình TCP/IP](./network-protocols/tcp-ip-model.svg){ loading=lazy width=480 }

*Mô hình TCP/IP*

1. **Tầng ứng dụng**:

    Đóng vai trò cầu nối giữa các ứng dụng trên máy tính và các dịch vụ mạng.
        
    Nói cách khác, đây là nơi của các chương trình mà ta sử dụng hằng ngày như: trình duyệt web, phần mềm gửi email, phần mềm truyền file, v.v... giao tiếp với mạng.

    Ví dụ:  
    Giao thức HTTPS hoạt động khi ta mở trình duyệt để vào trang web docs.mrschool.vn.

2. **Tầng giao vận**:

    Chịu trách nhiệm về độ tin cậy, kiểm soát luồng và hiệu chỉnh dữ liệu gửi qua mạng.

    Ví dụ:  
    Giao thức TCP bảo đảm video mà ta đang xem trên YouTube được tải đúng thứ tự, không bị mất đoạn.

3. **Tầng Internet**:

    Chịu trách nhiệm gửi các gói tin từ bất kỳ mạng nào đến được đích, bất kể gói tin đi theo đường nào.

    Ví dụ:  
    Giao thức IP giúp gửi email từ máy của mình đến máy chủ ở Mỹ.

4. **Tầng truy cập**:
    
    Chịu trách nhiệm truyền thông tin giữa hai thiết bị trên cùng một mạng.

    Tầng này là sự kết hợp của tầng vật lý và tầng liên kết dữ liệu của mô hình OSI.
    
    Ví dụ:  
    Bộ giao thức Wi-Fi hoặc Ethernet giúp máy tính kết nối mạng nội bộ trong nhà.

### Hai giao thức chính

**TCP** và **IP** là hai giao thức nền tảng trong bộ giao thức TCP/IP.

- **TCP** (Transmission Control Protocol):

    - TCP kiểm soát việc truyền tải, bảo đảm dữ liệu được truyền đi một cách chính xác, đầy đủ và theo đúng thứ tự.
    
        Cụ thể, TCP chia dữ liệu thành các gói tin nhỏ, đánh số thứ tự cho từng gói tin và kiểm tra xem tất cả gói tin đã được nhận đầy đủ chưa.
    
    - TCP thường được dùng cho các ứng dụng đòi hỏi độ tin cậy cao như gửi email, truyền file, truy cập web.

- **IP** (Internet Protocol):

    - IP chịu trách nhiệm định tuyến các gói tin trên mạng đến được địa chỉ đích.

    - IP cung cấp địa chỉ duy nhất cho mỗi thiết bị kết nối vào mạng.

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/7/t/8/l/9/s/22/q/1/){:target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/network-protocols.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ giao thức | suite of communication protocols |
| giao thức | protocol |
| tầng giao vận | tranport layer |
| tầng Internet | internet layer, network layer |
| tầng truy cập | network access layer |
| tầng ứng dụng | application layer |
