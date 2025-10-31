---
icon: octicons/cpu-24
---

# Phần cứng bên trong máy tính

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số thành phần phần cứng của máy tính, chủ yếu là phần cứng bên trong.

## Khái quát

**Phần cứng** là những thiết bị vật lý của máy tính. Nói cách khác, phần cứng là những bộ phận mà ta có thể cầm, nắm hoặc chạm được.

Phần cứng có thể được chia thành hai loại:

- Phần cứng bên trong
- Phần cứng bên ngoài

## Phần cứng bên trong
    
Là những thiết bị gắn trực tiếp trên bo mạch chính hoặc trên các bảng mạch mở rộng.

Chúng nằm "*trong hộp*" (case) của máy tính, thông thường từ ngoài nhìn vào sẽ không thấy.

### Bộ xử lý trung tâm

Viết tắt là **CPU**, được xem là bộ não của máy tính, chịu trách nhiệm thực thi các **chỉ thị** (1).
{ .annotate }

1.  Mỗi **chỉ thị** là một dãy bit nhị phân mà CPU trực tiếp hiểu và thực hiện theo.

    Một số loại chỉ thị của CPU là: 

    - Phép toán số học: cộng, trừ, nhân, chia, v.v...
    - Phép toán logic: AND, OR, XOR, các phép toán so sánh, các phép dịch chuyển bit (shift).
    - Điều khiển luồng: Rẽ nhánh và lặp.
    - Di chuyển dữ liệu: Sao chép dữ liêu qua lại giữa các ô nhớ, thanh ghi, thiết bị vào, ra.
    - Xử lý dữ liệu: nạp, lưu trữ và biến đổi dữ liệu.

Đơn vị dùng để đo tốc độ của CPU là **Ghz** (gigahertz), trong đó hertz có thể hiểu là **số lượng chỉ thị** mà máy tính **thực hiện trong một giây**. Đồng nghĩa rằng, GHz càng cao thì hiệu năng của máy tính càng lớn.

Ví dụ:  
1 Ghz = 1 tỷ Hertz. CPU 1Ghz nghĩa là trong một giây, CPU có thể thực hiện 1 tỷ chỉ thị.

??? info "Kỷ lục về tốc độ CPU"

    Hiện nay, CPU của nhiều máy tính cá nhân có tốc độ từ 1Ghz đến 3Ghz, đủ dùng cho các tác vụ cơ bản như duyệt web, xem video, soạn thảo văn bản, lập trình cơ bản.

    Tính đến đầu tháng 01.2023, **13th-Generation Core i9-13900KS** là CPU đầu tiên đạt đến tốc độ 6 Ghz. 

![CPU của Intel](https://i.pcmag.com/imagery/articles/02InbmluflyOPmvBXM7NMBI-1.fit_lim.size_1600x900.v1616592951.jpg){ loading=lazy width=420 }

*CPU của Intel*[^1]

[^1]: Hình lấy tại [PC Magazine](https://www.pcmag.com/news/intels-7nm-pc-chip-will-arrive-in-2023-using-tsmcs-tech){:target="_blank"}.

### Bộ nhớ trong

Còn gọi là **bộ nhớ chính**, gồm có RAM và ROM.

| | RAM | ROM |
| --- | --- | --- |
| Vai trò | Dùng để lưu trữ dữ liệu mà CPU đang xử lý. | Dùng để lưu trữ dữ liệu của nhà sản xuất thiết bị. |
| Quyền truy xuất | Cho phép đọc lẫn ghi. | Chỉ cho phép đọc, không dễ cho người dùng ghi đè lên. |  
| Khả năng lưu trữ | Lưu trữ tạm thời, dữ liệu sẽ mất đi khi tắt máy hoặc máy mất điện. | Lưu trữ lâu dài, không bị mất khi mất điện. |

![Thanh RAM 48 GB](https://content.crucial.com/content/dam/crucial/dram-products/laptop/images/product/crucial-ddr5-32gb-sodimm-image.psd.transform/medium-png/image.png){ loading=lazy width=420 }  
*Thanh RAM 48 GB*[^3]

[^3]: Hình lấy tại [Crucial](https://www.crucial.com/memory/ddr5/ct48g56c46s5){:target="_blank"}.

Hiện nay, đơn vị phổ biến dùng để đo dung lượng của RAM là **gigabyte** (GB).

??? info "Sự nhập nhằng của thuật ngữ ROM giữa máy tính để bàn và điện thoại thông minh"
    
    Đối với điện thoại thông minh, cái gọi là "ROM" thể hiện trên website của một số đại lý phân phối là do thói quen dùng sai thuật ngữ.

    Nó nên được gọi là *"bộ nhớ trong"* hoặc *"thiết bị lưu trữ bên trong"*.
    
    Thực chất, nó là bộ nhớ flash, bao gồm hai phần:
    
    - Một phần dùng để lưu trữ hệ điều hành, người dùng không dễ chỉnh sửa được.
    - Phần còn lại dành cho dữ liệu và ứng dụng của người dùng, có thể tuỳ nghi lưu trữ hoặc cài đặt.

### Bộ xử lý đồ hoạ

Viết tắt là **GPU**, dùng để xử lý hình ảnh và video, có vai trò quan trọng trong các tác vụ liên quan đến đồ hoạ và khía cạnh trực quan như chơi game, chỉnh sửa ảnh, biên tập video và tạo mô hình ba chiều.

Bên cạnh đó, GPU còn góp phần trong các ứng dụng đòi hỏi sức mạnh tính toán lớn như khoa học kỹ thuật và trí tuệ nhân tạo.

![GPU của NVIDIA](https://lh3.googleusercontent.com/pw/AIL4fc_OQmstGEWx7I-4dKbm9mQ4pf6pXRtOFClvH7ar7-zSx3Sq-ldwadmIoVJmRwymqYhC5vbbS0_Bv_ckIBJ2Ep6NBJW3EPFG_JuZ2exoo0G_0ZLWFj_X=w800){ loading=lazy width=420 }

*GPU của NVIDIA*[^6]

[^6]: Hình lấy tại [Nvidia](https://www.nvidia.com/en-us/geforce/news/geforce-rtx-founders-graphics-card-breakdown){:target="_blank"}.

Đơn vị dùng để đo hiệu năng của GPU là **TFLOPS** (Tera Floating Point Operations Per Second), nghĩa là một nghìn tỷ phép tính dấu phẩy động mỗi giây.

Tuy nhiên, khi kinh doanh, các nhà sản xuất thường thể hiện các đơn vị khác, chẳng hạn như:

- Số nhân xử lý (CUDA cores)
- Bộ nhớ VRAM

### Thiết bị lưu trữ

Dùng để **lưu trữ dữ liệu lâu dài**.

Các thiết bị lưu trữ có thể thuộc vào nhóm phần cứng bên trong hoặc phần cứng bên ngoài:

- Bên trong: HDD, SSD.
- Bên ngoài: USB Flash, đĩa cứng di động, thẻ nhớ, đĩa quang.

Hiện nay, đơn vị phổ biến dùng để đo dung lượng của thiết bị lưu trữ là **gigabyte** (GB) và **terabyte** (TB).

??? info "Dữ liệu trong thiết bị lưu trữ không thực sự bị xoá mất"

    Khi ta xoá, dữ liệu không hoàn toàn bị mất, mà là ta mất khả năng tham chiếu đến dữ liệu đó.

    Để thực sự xoá dữ liệu, người khác không thể truy hồi được, ta có một vài cách sau:

    1. Ghi đè dữ liệu cần xoá bằng dữ liệu ngẫu nhiên và thực hiện nhiều lần, trên toàn bộ diện tích lưu trữ.
    2. Mã hoá dữ liệu trước khi lưu trữ, để khi cần xóa, thì xoá các khoá dùng cho việc mã hoá, làm cho dữ liệu không còn truy xuất được nữa.
    3. Phá hủy thiết bị về mặt vật lý, chẳng hạn đập nát hoặc đốt, để không còn sửa chữa được nữa, làm cho dữ liệu không thể phục hồi. 

Những thiết bị lưu trữ gắn trong máy gồm có:

#### Đĩa cứng

1.  **HDD** (Hard Disk Drive):
    
    Là đĩa cứng truyền thống, sử dụng từ tính để lưu trữ dữ liệu. Cấu tạo bao gồm một ổ đĩa quay và một đầu đọc/ghi dữ liệu cơ học.  

2.  **SSD** (Solid-State Drive):
    
    Sử dụng các chip nhớ flash để lưu trữ dữ liệu, tức không có những bộ phận cơ học như HDD. Việc này giúp truy xuất dữ liệu nhanh hơn và tin cậy hơn.

![HDD và SSD](https://lh3.googleusercontent.com/pw/AIL4fc9bSpTDl6XrxFRRqcFdWSq5h7zfCdz3JV9b57kUeQqn5C6hmoMiWyVpJnYscXqZeaXd-0JoI2qUexV4F2cyYwB3qynVyl5bKzxHrwNjXuxNe4w69vAM=w800){ loading=lazy width=540 }

**HDD và SSD**[^4]

[^4]: Hình lấy tại [medium.com](https://medium.com/@rodbauer/hdd-vs-ssd-what-does-the-future-for-storage-hold-dc8653f16366){:target="_blank"}.

??? info "Kỷ lục về dung lượng SSD"
    
    Hiện nay, nhiều máy tính cá nhân đã trang bị SSD. Dung lượng SSD phổ biến là 128GB, 256GB, 512GB, 1TB. 

    Tính đến tháng 8.2023, dung lượng của một SSD đã đạt đến 100TB (1).
    { .annotate } 

    1.  Sản phẩm của [Nimbus Data](https://nimbusdata.com/products/exadrive/){:target="_blank"} đã được bán ra thị trường.

#### Đĩa quang

Gồm có CD, DVD và Blu-ray.

Loại đĩa này sử dụng tia laser để đọc và ghi dữ liệu. Hiện nay, chúng dần không còn phổ biến trên máy tính.

#### USB Flash drive

USB flash là thiết bị lưu trữ gắn ngoài, kết nối vào máy tính thông qua cổng USB.

Do nó là một trong những thiết bị dùng cổng USB đầu tiên có mặt ở thị trường nước ta, nên người ta quen gọi là USB. Mặc dù hiện nay có nhiều thiết bị kết nối vào máy tính thông qua cổng USB, cách gọi này vẫn còn khá phổ biến.

## Phần cứng bên ngoài
    
Còn được gọi Là **thiết bị ngoại vi**, là những thiết bị nằm bên ngoài hộp của máy tính và kết nối với máy tính thông qua các cổng trên thân máy.

### Thiết bị vào

Dùng để đưa dữ liệu từ bên ngoài vào máy tính.

Ví dụ:

- Bàn phím
- Chuột    
- Camera
- Microphone
- Máy quét
- Cảm biến
- Màn hình cảm ứng
- Bút stylus

### Thiết bị ra

Dùng để đưa dữ liệu từ trong máy tính ra bên ngoài.

Ví dụ:

- Màn hình
- Loa, tai nghe
- Máy in
- Máy chiếu

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/internal-hardwares.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cổng | port |
| chỉ thị | instruction |
| bộ nhớ truy xuất ngẫu nhiên | Random Access Memory (RAM) |
| bộ nhớ chỉ đọc (chỉ cho phép đọc) | Read-Only Memory (ROM) |
| bộ xử lý trung tâm | Central Processing Unit (CPU) |
| bộ xử lý đồ hoạ | Graphics Processing Unit (GPU) |
| đĩa cứng thể rắn | solid-state drive |
| đĩa cứng ổ quay truyền thống | hard disk drive |
| đĩa quang học | optical disc |
| hộp, thân máy | case |
| phần cứng bên ngoài | external hardware |
| phần cứng bên trong | internal hardware |
| thiết bị lưu trữ | storage device |