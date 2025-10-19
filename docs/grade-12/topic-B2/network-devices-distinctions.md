---
icon: material/router-network-wireless
---

# Nhận diện và phân biệt thiết bị mạng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về hình dạng và chức năng của các thiết bị mạng giúp cho việc nhận diện và phân biệt.

    Một vài nội dung có thể giống bài thiết bị mạng trong chủ đề B1.

## Thiết bị đầu cuối và máy chủ

| | Thiết bị đầu cuối | Máy chủ |
| --- | --- | --- |
| Khái niệm | Là những thiết bị mà ta sử dụng hằng ngày để kết nối vào mạng. | Là máy tính có nhiệm vụ cung cấp thông tin, dịch vụ hoặc tài nguyên cho các thiết bị đầu cuối. |
| Đặc điểm | Thuật ngữ "đầu cuối" được hiểu là thiết bị nằm ở điểm cuối của đường truyền mạng, nơi dữ liệu được gửi đi hoặc nhận về. | Cấu hình mạnh, hoạt động liên tục và thường được đặt ở những trung tâm dữ liệu. |
| Vai trò | Sử dụng dịch vụ, gửi và nhận dữ liệu. | Cung cấp dịch vụ, lưu trữ dữ liệu. |
| Vị trí logic trong mạng | Nằm ở điểm cuối của đường truyền. | Nằm ở trung tâm của toàn mạng, hoặc ở trung gian trong các mạng phức tạp. |
| Người dùng | Người dùng cuối, trực tiếp | Cá nhân hoặc tổ chức |

Ví dụ:

- Trong phòng máy thực hành ở trường:

    - Thiết bị đầu cuối: là máy tính của học sinh, dùng để xem bài giảng hoặc nộp tập tin bài làm.
    - Máy chủ: có thể là máy tính của thầy cô, dùng để lưu trữ bài giảng,  hoặc bài làm do học sinh nộp.

- Khi người dùng xem YouTube:

    - Thiết bị đầu cuối: máy tính bảng hoặc điện thoại di động có app Youtube.
    - Máy chủ: máy chủ của YouTube gửi video đến thiết bị của người dùng. 

![Máy chủ](https://www.flickr.com/photo_download.gne?size=l&id=54860729826&secret=5291249f1f){ loading=lazy width=360 }

*Máy chủ*

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/8/t/9/l/10/s/23/q/1/){:target="_blank"}

## Thiết bị kết nối

|  | Modem | Bộ định tuyến | Bộ chuyển mạch | Điểm truy cập | Bộ khuếch đại |
| --- | --- | --- | --- | --- | --- |
| Tên tiếng Anh | modem | router | switch | access point | repeater | 
| Chức năng | Chuyển đổi qua lại giữa tín hiệu số và tín hiệu tương tự. | Tìm đường đi cho gói tin. | Kết nối các thiết bị trong LAN. | Tạo ra hoặc mở rộng kết nối không dây trong LAN. | Khuếch đại tín hiệu Wi-Fi để tăng phạm vi phủ sóng. |
| Vai trò | Cầu nối giữa LAN và ISP. | Chuyển tiếp gói tin giữa các mạng khác nhau. | Trung tâm trong LAN. | Cầu nối giữa mạng không dây và có dây trong LAN. | Mở rộng vùng phủ sóng Wi-Fi trong LAN. |

???+ info "Tích hợp các thiết bị trong một"

    Trong các hệ thống mạng gia đình hoặc doanh nghiệp nhỏ, phần lớn bộ định tuyến được thiết kế theo kiểu *tất cả trong một* nhằm tiết kiệm không gian, chi phí và tính tiện lợi. Những bộ định tuyến này thường tích hợp chức năng của nhiều thiết bị khác, bao gồm: modem, bộ chuyển mạch, điểm truy cập không dây, tường lửa.

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/8/t/9/l/10/s/24/q/1/){:target="_blank"}

## Cáp mạng

| | Cáp đồng trục | Cáp xoắn đôi | Cáp quang |
| --- | --- | --- | --- |
| Mô tả | Lõi bằng đồng, bao quanh bởi lớp chống nhiễu, vỏ kim loại hoặc vỏ nhựa | Nhiều cặp dây đồng xoắn lại, gồm hai loại là UTP và STP | Lõi là các sợi thủy tinh hoặc nhựa. |
| Tín hiệu truyền dẫn | Điện | Điện | Ánh sáng |
| Khoảng cách | Có thể truyền xa hàng trăm mét. | Tối đa ~100m. | Có thể truyền xa 200 km. |
| Tốc độ | Thấp hơn cáp quang. | Chậm, phổ biến hiện nay là 10 Gbps. | Rất cao, từ 10 Gbps lên đến hàng trăm Gbps hoặc Tbps, tuỳ bối cảnh. |
| Ứng dụng | Truyền hình cáp, Internet | LAN | Internet tốc độ cao, mạng viễn thông, trung tâm dữ liệu |


![Cáp đồng trục](https://www.flickr.com/photo_download.gne?size=l&id=54861015205&secret=c6e3210b1f){ loading=lazy width=480 }

*Cáp đồng trục*

![Cáp xoắn đôi và jack cắm RJ45](https://www.flickr.com/photo_download.gne?id=54861015345&secret=4e1673b8f4&size=l&source=photoPageEngagement){ loading=lazy width=480 }

*Cáp xoắn đôi và jack cắm RJ45*

![Cáp quang](https://www.flickr.com/photo_download.gne?size=l&id=54860713406&secret=db06b33714){ loading=lazy width=480 }

*Cáp quang*

!!! question "Hỏi chút chơi"
    
    [Nhấn vào đây để tự kiểm tra việc đọc hiểu.](https://mrschool.vn/tin-hoc-gdpt-2018/g/8/t/9/l/10/s/25/q/1/){:target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/network-devices-distinctions.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cáp đồng trục | co-axial cable |
| cáp quang | optic fiber cable |
| cáp xoắn đôi | twisted-pair cable, RJ45 cable |
| máy chủ | server |
| thiết bị đầu cuối | terminal device, end device |