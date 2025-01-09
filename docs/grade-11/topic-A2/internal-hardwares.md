---
icon: octicons/cpu-24
---

# Phần cứng máy tính

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số thành phần phần cứng của máy tính, chủ yếu là phần cứng bên trong.

## Khái quát

**Phần cứng** là những thiết bị vật lý của máy tính. Nói cách khác, phần cứng là những bộ phận mà ta có thể cầm, nắm hoặc chạm được.

??? info "Phần cứng và phần mềm"

    Bản thân phần cứng không tự hoạt động được, mà phải có phần mềm. Phần mềm là những chương trình dùng để điều khiển phần cứng hoạt động.

    Một cách hình tượng, phần cứng là thể xác, phần mềm là linh hồn. Cả hai hợp lại tạo thành một thể thống nhất của một hệ thống tin học.

Phần cứng có thể tạm chia thành hai loại:

### Phần cứng bên trong
    
Là những thiết bị gắn trực tiếp trên bo mạch chính hoặc trên các bảng mạch mở rộng. Chúng nằm "*trong hộp*" (case) của máy tính, thông thường từ ngoài nhìn vào sẽ không thấy.

Ví dụ:  
CPU, RAM, ROM, GPU, bộ cấp nguồn, hệ thống làm mát, v.v...

### Phần cứng bên ngoài
    
Còn được gọi Là **thiết bị ngoại vi**, là những thiết bị nằm bên ngoài hộp của máy tính và kết nối với máy tính thông qua các cổng trên thân máy.

Ví dụ  
Bàn phím, chuột, màn hình, máy in, máy quét, camera, v.v...

## Một số phần cứng bên trong

Đây là những thành phần này là cần thiết, tối thiểu để tạo nên một máy tính. Cụ thể như sau:

### Bộ xử lý trung tâm

Viết tắt là **CPU**, được xem là bộ não của máy tính, chịu trách nhiệm thực thi các tính toán và chỉ thị (1).
{ .annotate }

1.  Mỗi chỉ thị là một dãy bit nhị phân mà CPU trực tiếp hiểu và thực hiện theo.

    Một số loại chỉ thị của CPU là: 

    - Phép toán số học: cộng, trừ, nhân, chia, v.v...
    - Phép toán logic: AND, OR, XOR, các phép toán so sánh, các phép dịch chuyển bit (shift).
    - Điều khiển luồng: Rẽ nhánh và lặp.
    - Di chuyển dữ liệu: Sao chép dữ liêu qua lại giữa các ô nhớ, thanh ghi, thiết bị vào, ra.
    - Xử lý dữ liệu: nạp, lưu trữ và biến đổi dữ liệu.

Đơn vị dùng để đo tốc độ của CPU là Ghz (gigahertz), trong đó hertz có thể hiểu là số lượng chỉ thị mà máy tính thực hiện trong một giây. Đồng nghĩa rằng, GHz càng cao thì hiệu năng của máy tính càng lớn.

Ví dụ:  
1 Ghz = 1 tỷ Hertz. CPU 1Ghz nghĩa là trong một giây, CPU có thể thực hiện 1 tỷ chỉ thị.

??? info "Kỷ lục về tốc độ CPU"

    Hiện nay, CPU của nhiều máy tính cá nhân có tốc độ từ 1Ghz đến 3Ghz, đủ dùng cho các tác vụ cơ bản như duyệt web, xem video, soạn thảo văn bản, lập trình cơ bản.

    Tính đến đầu tháng 01.2023, **13th-Generation Core i9-13900KS** là CPU đầu tiên đạt đến tốc độ 6Ghz. 

![CPU của Intel](https://i.pcmag.com/imagery/articles/02InbmluflyOPmvBXM7NMBI-1.fit_lim.size_1600x900.v1616592951.jpg){loading=lazy}  
*CPU của Intel*[^1]

[^1]: Hình lấy tại [PC Magazine](https://www.pcmag.com/news/intels-7nm-pc-chip-will-arrive-in-2023-using-tsmcs-tech){:target="_blank"}.

![Thông số của CPU Intel Core i9-13900K Raptor Lake](https://b2c-contenthub.com/wp-content/uploads/2022/09/Intel-Raptor-Lake-platform-1.png?w=800){loading=lazy}  
*Thông số của CPU Intel Core i9-13900K Raptor Lake*[^2]

[^2]: Hình lấy tại [PC World](https://www.pcworld.com/article/1073245/intel-13th-gen-core-cpus-raptor-lake-reveal.html){:target="_blank"}.

### Bộ nhớ trong

Còn gọi là **bộ nhớ chính**, gồm có RAM và ROM.

#### RAM

Lưu trữ những dữ liệu mà CPU đang xử lý. Việc lưu trữ chỉ là tạm thời, dữ liệu sẽ mất đi khi tắt máy hoặc máy mất điện.

![Thanh RAM 48 GB](https://content.crucial.com/content/dam/crucial/dram-products/laptop/images/product/crucial-ddr5-32gb-sodimm-image.psd.transform/medium-png/image.png){loading=lazy}  
*Thanh RAM 48 GB*[^3]

[^3]: Hình lấy tại [Crucial](https://www.crucial.com/memory/ddr5/ct48g56c46s5){:target="_blank"}.

#### ROM

Bộ nhớ này có thể lưu trữ lâu dài, nhưng chỉ dành cho dữ liệu của nhà sản xuất thiết bị, không dễ cho người dùng ghi đè lên.

??? info "Sự nhập nhằng của thuật ngữ ROM giữa máy tính để bàn và điện thoại thông minh"
    
    ROM của điện thoại thông minh không hoàn toàn giống khái niệm ở mục 2, vốn dành cho máy tính để bàn. ROM của điện thoại thông minh là một loại bộ nhớ flash, còn có thể gọi là **thiết bị lưu trữ bên trong**, gồm hai phần:
    
    - Một phần dùng để lưu trữ hệ điều hành, người dùng không dễ chỉnh sửa được;
    - Phần còn lại dành cho dữ liệu và ứng dụng của người dùng, người dùng có thể tùy nghi lưu trữ hoặc cài đặt theo nhu cầu.

### Thiết bị lưu trữ

Là những thiết bị dùng để lưu trữ lâu dài. Dữ liệu chứa trong thiết bị lưu trữ sẽ không bị mất đi khi mất điện hoặc tắt máy.

??? info "Dữ liệu trong thiết bị lưu trữ không thực sự bị xóa mất"

    Khi ta nhấn xóa hoặc định dạng thiết bị lưu trữ, dữ liệu không hoàn toàn bị mất, mà là ta mất khả năng tham chiếu đến dữ liệu đó.

    Để thực sự xóa dữ liệu, người khác không thể truy hồi được, ta có một vài cách sau:

    1. Ghi đè dữ liệu cần xóa bằng dữ liệu ngẫu nhiên, và thực hiện nhiều lần, trên toàn bộ diện tích lưu trữ.
    2. Mã hóa dữ liệu trước khi lưu trữ, để khi cần xóa, thì xóa các khóa dùng cho việc mã hóa, làm cho dữ liệu không còn truy xuất được nữa.
    3. Phá hủy thiết bị về mặt vật lý, chẳng hạn đập nát hoặc đốt, để không còn sửa chữa được, làm cho dữ liệu không thể phục hồi. 

Những thiết bị lưu trữ gắn trong máy gồm có:

#### Đĩa cứng

1.  **HDD** (Hard Disk Drive):
    
    Là đĩa cứng truyền thống, sử dụng từ tính để lưu trữ dữ liệu. HDD có một ổ đĩa quay và một đầu đọc/ghi dữ liệu cơ học.  

2.  **SSD** (Solid-State Drive):
    
    Sử dụng các chip nhớ flash để lưu trữ dữ liệu, tức không có những bộ phận cơ học như HDD. Việc này giúp truy xuất dữ liệu nhanh hơn và tin cậy hơn.

![HDD và SSD](https://lh3.googleusercontent.com/pw/AIL4fc9bSpTDl6XrxFRRqcFdWSq5h7zfCdz3JV9b57kUeQqn5C6hmoMiWyVpJnYscXqZeaXd-0JoI2qUexV4F2cyYwB3qynVyl5bKzxHrwNjXuxNe4w69vAM=w800){loading=lazy}  
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

Ngoài ra, còn có một số thiết bị lưu trữ khác, được xem là *phần cứng bên ngoài*, đó là: đĩa flash, thẻ nhớ, đĩa cứng gắn ngoài.

??? info "USB flash drive"

    Đĩa flash là thiết bị lưu trữ gắn ngoài, kết nối vào máy tính thông qua cổng USB. Do nó là một trong những thiết bị dùng cổng USB đầu tiên có mặt ở thị trường nước ta, nên người ta quen gọi là USB.

    Mặc dù hiện nay có nhiều thiết bị kết nối vào máy tính thông qua cổng USB, cách gọi này vẫn còn khá phổ biến.

### Bộ xử lý đồ họa

Viết tắt là **GPU**, dùng để xử lý hình ảnh và video, có vai trò quan trọng trong các tác vụ liên quan đến đồ họa và khía cạnh trực quan như chơi game, chỉnh sửa ảnh, biên tập video và tạo mô hình 3 chiều.

Bên cạnh đó, GPU còn góp phần trong các ứng dụng đòi hỏi sức mạnh tính toán lớn như khoa học kỹ thuật và trí tuệ nhân tạo.

![GPU của NVIDIA](https://lh3.googleusercontent.com/pw/AIL4fc_OQmstGEWx7I-4dKbm9mQ4pf6pXRtOFClvH7ar7-zSx3Sq-ldwadmIoVJmRwymqYhC5vbbS0_Bv_ckIBJ2Ep6NBJW3EPFG_JuZ2exoo0G_0ZLWFj_X=w800){loading=lazy}  
*GPU của NVIDIA*[^6]

[^6]: Hình lấy tại [Nvidia](https://www.nvidia.com/en-us/geforce/news/geforce-rtx-founders-graphics-card-breakdown){:target="_blank"}.

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-A2/internal-hardwares.mm.md!}
*Sơ đồ phân loại phần cứng theo bên trong và bên ngoài*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cổng | port |
| chỉ thị | instruction |
| bộ nhớ truy xuất ngẫu nhiên | Random Access Memory (RAM) |
| bộ nhớ chỉ đọc (chỉ cho phép đọc) | Read-Only Memory (ROM) |
| bộ xử lý trung tâm | Central Processing Unit (CPU) |
| bộ xử lý đồ họa | Graphics Processing Unit (GPU) |
| đĩa cứng thể rắn | solid-state drive |
| đĩa cứng ổ quay truyền thống | hard disk drive |
| đĩa quang học | optical disc |
| hộp, thân máy | case |
| phần cứng | hardware |
| thiết bị lưu trữ | storage device |