---
icon: material/router-network-wireless
---

# Thiết bị mạng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày sơ nét về một số thiết bị mạng thông dụng.

## Khái niệm

Thiết bị mạng là những phần cứng được sử dụng để kết nối các máy tính và các thiết bị khác với nhau nhằm tạo ra mạng máy tính.

## Một số thiết bị mạng

Những thiết bị mạng thông dụng trong gia đình bao gồm:

### Modem

- Chức năng:

    Là viết tắt của Modulator and Demodulator, tạm dịch là bộ **điều chế** và **giải điều chế**. (1)
    { .annotate }

    1. Hình như không có cách dịch hoàn hảo cho cho thuật ngữ *modem*.

    - Điều chế: chuyển đổi dữ liệu kỹ thuật số thành tín hiệu tương tự, tức từ digital sang analog.
    - Giải điều chế: chuyển đổi ngược lại từ tín hiệu tương tự sang dữ liệu kỹ thuật số.

- Vai trò:

    Là thiết bị truyền dẫn tín hiệu Internet giữa ISP (1) và hộ gia đình thông qua các loại đường truyền khác nhau (2).
    { .annotate }

    1.  Viết tắt của Internet Service Provider, tạm dịch là nhà cung cấp dịch vụ Internet. Một số ISP lớn ở Việt Nam là: VNPT, Viettel, FPT, CMC Telecom, SCTV.

    2.  Một số loại đường truyền:
    
        - Đường dây điện thoại (dial-up)
        - DSL (Digital Subscriber Line)
        - Cáp đồng trục (dùng để đi chung truyền hình cáp và Internet)
        - Phổ biến hiện nay là cáp quang.

???+ note "Nói thêm cho rõ"

    Đối với đường truyền cáp quang, người ta dùng ONT (Optical Network Terminal) để chuyển đổi tín hiệu ánh sáng thành tín hiệu điện mà máy tính tại nhà có thể sử dụng được.

    Thiết bị ONT này vẫn thường được gọi là *modem* theo thói quen, mặc dù về mặt kỹ thuật thì không phải như vậy.

!["Modem" dành cho Internet cáp quang](https://lh3.googleusercontent.com/pw/AP1GczMfxIQNiIEUvlM0W6TBMK01jsAFFx5SESPBJJ0rnC20Kua8CXOvmO6YpJKcOkoqtXzz2aSa2wMJkRw3E_--W6Vwq4KM6uM6XluKUXHQezckqX0s0yzZ=w2400){ loading=lazy width=400 }

*"Modem" dành cho Internet cáp quang*

### Bộ chuyển mạch

- Chức năng: chuyển tiếp dữ liệu giữa các thiết bị trong một mạng máy tính.

- Vai trò: là thiết bị trung tâm trong việc kết nối các thiết bị trong cùng một mạng.

![Bộ chuyển mạch](https://lh3.googleusercontent.com/pw/AP1GczPt_6GYj3uNeC9tkaac2Rt20KWp6EA_pkQRNkuMVT5cTVnceSBzZ4w3YQ_fTboKf8snKXDi1bjgFlRpPchl74CFEGQ_47LjCHo6PfebEG8z_Lki5znM=w2400){ loading=lazy width=400 }

*Bộ chuyển mạch*

### Bộ định tuyến

- Chức năng: xác định đường đi tối ưu cho gói tin từ nguồn đến đích.

- Vai trò: là thiết bị chuyển tiếp gói tin giữa các mạng máy tính khác nhau.

![Bộ định tuyến kèm chức năng của bộ chuyển mạch](https://lh3.googleusercontent.com/pw/AP1GczOvWHS26WmEAaQM8dJK_0zGg454uX0KqbehOKLhH-OURnJHMb7ZMXQ9tLHXVPEmqbbaB8Rixvx-0voGTWg1l2psuuR187c3AbslqjqtFWMTyV1lj_ie=w2400){ loading=lazy width=400 }

*Bộ định tuyến kèm chức năng của bộ chuyển mạch*

### Điểm truy cập không dây

- Chức năng: tạo ra một vùng phủ sóng WiFi.

- Vai trò: làm cầu nối kết nối mạng không dây với mạng có dây, giúp mở rộng vùng phủ sóng WiFi.

???+ note "Lưu ý"

    Hiện nay, phần lớn các thiết bị mạng đều được tích hợp nhiều chức năng khác nhau. Do đó, việc gọi tên thiết bị có thể chỉ mang tính tương đối.

Trong các doanh nghiệp, đặc biệt là những doanh nghiệp có quy mô lớn và nhu cầu sử dụng mạng phức tạp, người ta còn sử dụng những thiết bị mạng khác như: core switch, load balancer, firewall, VPN concentrator.

!!! question "Câu hỏi 1"

    <div>
        <iframe style="width: 100%; height: 740px" frameBorder=0 src="../network-devices/matching-quiz.html">Câu hỏi so khớp</iframe>
    </div>

## Mạng cục bộ

Còn gọi cách khác là mạng nội bộ, là hệ thống kết nối nhiều thiết bị như máy tính, máy in, máy chủ, v.v... trong một khu vực giới hạn, chẳng hạn như một hộ gia đình, một văn phòng, một trường học.

Mạng gia đình là một ví dụ của mạng cục bộ, kết nối máy tính, điện thoại thông minh, tivi, máy chơi game, v.v... trong một ngôi nhà.

Nhờ mạng gia đình, ta có thể:

- truy cập Internet,
- chia sẻ tài nguyên như file, hình ảnh, video giữa các thiết bị,
- điều khiển các thiết bị thông minh từ xa thông qua app trên điện thoại,
- lắp đặt camera giám sát và các cảm biến.

![Ví dụ sơ đồ mạng gia đình](./home-network-diagram.png){ loading=lazy width=400}

*Ví dụ sơ đồ mạng gia đình*

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-B/network-devices.mm.md!}
*Sơ đồ tóm tắt về thiết bị mạng*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ chuyển mạch | switch |
| bộ định tuyến | router |
| điểm truy cập không dây | wireless access point |
| kỹ thuật số | digital |
| mạng cục bộ | LAN - Local Area Network |
| thiết bị mạng | network device |
| tín hiệu tương tự | analog |


