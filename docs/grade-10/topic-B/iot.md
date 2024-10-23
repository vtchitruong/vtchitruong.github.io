---
icon: material/remote
---

# Internet vạn vật

!!! abstract "Tóm lược nội dung"

    Bài này trình bày sơ nét về IoT.

## Khái niệm

**IoT (Internet of Things)** là thuật ngữ dùng để chỉ mạng lưới các thiết bị có gắn cảm biến và cài đặt phần mềm, cũng như đính kèm những công nghệ khác, để có thể giao tiếp và trao đổi dữ liệu với nhau thông qua Internet.

Các thiết bị có thể là đồ gia dụng, máy móc công nghiệp, xe cộ hoặc thiết bị đeo, chẳng hạn như: máy điều hòa nhiệt độ, hệ thống an ninh trong nhà, xe ô tô, v.v...

## Các thành phần

Các thành phần chủ yếu trong một hệ thống IoT gồm có:  

1. **Thiết bị**
    
    Các thiết bị hoặc đối tượng vật lý có trang bị những bộ phận sau:
    
    - Bộ phận cảm biến    
    - Bộ phận kết nối mạng    
    - Bộ phận truyền động

2. **Cảm biến**

    Dùng để thu thập dữ liệu và phát hiện những thay đổi của môi trường.

3. **Kết nối mạng**

    Gồm Internet và các công nghệ mạng khác: WiFi, Bluetooth, mạng di động, Zigbee, LoRa, v.v...

4. **Bộ phận truyền động**

    Dùng để thực hiện các hành động cơ học hoặc tương tác lại với môi trường xung quanh.

5. **Thành phần xử lý và điện toán đám mây**

    Thiết bị IoT thường có bộ xử lý riêng hoặc dựa vào hệ thống điện toán đám mây để xử lý dữ liệu.

6. **Phần mềm ứng dụng**

    Cài đặt trên máy tính hoặc điện thoại thông minh của người dùng để theo dõi và điều khiển từ xa các thiết bị.

7. **Thành phần đảm bảo an toàn**

    Gồm các phương thức bảo vệ và bảo mật các thiết bị IoT và dữ liệu.

## Nguyên lý hoạt động

Ý tưởng cơ bản của IoT là cho phép các thiết bị thu thập, chia sẻ dữ liệu, và tương tác với môi trường xung quanh mà không cần sự can thiệp của con người. 

Cụ thể, thiết bị trong IoT sử dụng các cảm biến để thu thập dữ liệu từ môi trường xung quanh. Dữ liệu được truyền về hệ thống điện toán đám mây để xử lý. Tiếp đó, hệ thống điện toán đám mây gửi lệnh trở lại cho bộ phận truyền động của thiết bị để thiết bị thực hiện hành động nào đó với môi trường xung quanh hoặc thiết bị khác. 

``` mermaid
sequenceDiagram
    autonumber
    participant C as Điện toán đám mây
    participant D as Thiết bị IoT
    participant E as Môi trường
    E->>D: Thu thập dữ liệu
    D->>C: Truyền về để xử lý
    C->>D: Lệnh điều khiển thiết bị
    D->>E: Tương tác lại môi trường
```
*Sơ đồ khái quát hoạt động của hệ thống IoT*

Việc liên lạc giữa các thiết bị được thực hiện thông qua nhiều loại mạng khác nhau, phụ thuộc các yếu tố như vị trí địa lý, phạm vi, tốc độ truyền dữ liệu, điện năng tiêu thụ, v.v... Internet là một phương án phổ biến, và trong nhiều trường hợp, người ta sử dụng kết hợp các công nghệ mạng để tăng độ tin cậy, để dự phòng và để mở rộng quy mô.

Đối với việc xử lý dữ liệu, thiết bị IoT có thể nhờ vào bộ xử lý riêng. Tuy nhiên, IoT thường tận dụng điện toán đám mây vì những lý do như khối lượng dữ liệu lớn, việc tính toán phức tạp.

## Một số ứng dụng

IoT có phạm vi ứng dụng rộng lớn, bao gồm:

1. Nhà thông minh
    - Hệ thống điều khiển và kiểm soát từ xa các vật dụng như đèn, máy điều hòa nhiệt độ, camera, v.v...
    - Máy đo chỉ số điện tiêu thụ tại gia đình và trợ giúp thanh toán chi phí hằng tháng.

2. Y tế
    - Thiết bị theo dõi sức khỏe.

3. Nông nghiệp
    - Hệ thống giám sát tình trạng của đất, thời tiết và cây trồng để tối ưu hóa tưới tiêu, bón phân.
    - Hệ thống giám sát sức khỏe, vị trí và hành vi của vật nuôi.

4. Công nghiệp
    - Hệ thống kiểm soát quy trình sản xuất sản phẩm theo thời gian thực.
    - Hệ thống bảo trì dựa trên dự đoán.
    - Hệ thống giám sát mạng lưới điện, giúp tối ưu hóa việc phân phối điện năng.

5. Dịch vụ vận tải
    - Hệ thống theo dõi vị trí và tình trạng của hàng hóa trong khi vận chuyển, tối ưu hóa lộ trình.

6. Dịch vụ bán lẻ
    - Hệ thống theo dõi kho hàng giúp cải thiện việc quản lý chuỗi cung ứng và cá nhân hóa trải nghiệm mua sắm của khách hàng. 

7. Thành phố thông minh
    - Hệ thống điều khiển giao thông , giám sát môi trường, quản lý chất thải.

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-B/iot.mm.md!}
*Sơ đồ khái quát về IoT*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ phận truyền động | actuator |
| cảm biến | sensor |
| điện toán đám mây | cloud computing |
| Internet vạn vật | Internet of Things (IoT) |