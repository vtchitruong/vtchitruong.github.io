# Phần mềm thương mại và phần mềm mã nguồn mở

## Phần mềm mã nguồn mở

### Khái niệm
**Mã nguồn** là một dạng của phần mềm máy tính mà con người có thể đọc được, bao gồm các dòng văn bản là các lệnh viết bằng ngôn ngữ lập trình dùng để điều khiển hoạt động của máy tính.  

**Phần mềm mã nguồn mở**[^1] là phần mềm có giấy phép cho phép người dùng được quyền xem, sử dụng, bổ sung và phân phối lại mã nguồn. Nói cách khác, mã nguồn của loại phần mềm này được công khai để công chúng kiểm tra và bổ sung.  

[^1]: Một số sách ghi ngắn gọn hơn là *phần mềm nguồn mở*.

:   Ví dụ:  
    Chromium là trình duyệt web mã nguồn mở. Mã nguồn của Chromium có thể xem tại [https://chromium.googlesource.com/chromium/src/](https://chromium.googlesource.com/chromium/src/){:target="_blank"}

### Một số đặc điểm của mã nguồn mở

1. Tính minh bạch  
    Việc truy xuất mã nguồn giúp người dùng hiểu được cơ chế vận hành của phần mềm và thực hiện các điều chỉnh cho phù hợp với nhu cầu của mình. Bản chất *mở* làm cho các vấn đề bảo mật và các lỗ hổng tiềm ẩn được phát hiện sớm và khắc phục nhanh hơn, khi có rất nhiều cặp mắt theo dõi, đồng nghĩa phần mềm sẽ an toàn hơn. Sự minh bạch này cũng thúc đẩy khả năng học tập và cộng tác.  

2. Khả năng cộng tác        
    Phần mềm mã nguồn mở có thể phát triển mạnh nhờ cộng đồng lập trình viên. Các lập trình viên hoặc người biết lập trình trên thế giới có thể đóng góp cho phần mềm bằng cách sửa lỗi, bổ sung tính năng hoặc cải thiện chất lượng của phần mềm.  

3. Cộng đồng  
    Một số phần mềm mã nguồn mở có cộng đồng lớn giúp người dùng có thể tìm được sự trợ giúp khi cần.

4. Tính đa dạng  
    Vì những người đóng góp cho phần mềm có nền tảng bản thân khác nhau, nên phần mềm có thể được phân hóa/phân mảnh, dẫn đến các quan điểm và giải pháp sáng tạo khác nhau. Ví dụ: Một thống kê cho biết, có đến hơn 600 bản phân phối Linux, chưa kể 500 bản khác đang phát triển.   

5. Chi phí  
    Phần mềm mã nguồn mở thường miễn phí, giúp cá nhân, tổ chức có thể tiết kiệm chi phí.

!!! note "Lưu ý"
    Điều này không đồng nghĩa phần mềm mã nguồn mở luôn miễn phí hay người dùng sẽ luôn tiết kiệm được chi phí đối với phần mềm mã nguồn mở, bởi vì nhiều yếu tố khác có thể xuất hiện trong quá trình sử dụng khiến chi phí phát sinh.

### Giấy phép mã nguồn mở

Là giấy phép đi kèm phần mềm mã nguồn mở, nêu rõ các điều khoản và điều kiện liên quan đến việc sử dụng, sửa đổi và phân phối lại phần mềm. Mỗi loại giấy phép có những yêu cầu riêng, chẳng hạn ghi công tác giả gốc, miễn trừ trách nhiệm của người phân phối, bắt buộc công bố mã nguồn chỉnh sửa mới, chia sẻ các sửa đổi theo cùng một giấy phép, không sử dụng phần mềm vì mục đích cụ thể nào đó, v.v...
    
Một số giấy phép mã nguồn mở thông dụng là: GNU General Public License (GPL), Apache License, MIT License, v.v...  

!!! abstract "GNU General Public License (GPL)"
    GNU General Public License (GPL) là giấy phép phần mềm mã nguồn mở phổ biến và có tầm ảnh hưởng lớn. Nó được tổ chức Free Software Foundation (FSF) tạo ra, thuộc dự án GNU, là dự án phát triển hệ điều hành mã nguồn mở và tự do dựa trên nền tảng Unix, nhằm bảo vệ và khuyến khích các nguyên tắc của phần mềm tự do, trong đó có tự do sử dụng, bổ sung và phân phối.  
    
    Một số nguyên tắc của GNU GPL là:

    - **Copyleft**: Nếu bạn chỉnh sửa lại và phân phối lại mã nguồn, thì bạn cũng phải làm cho mã nguồn của bạn *mở* theo đúng giấy phép GPL. Nguyên tắc này dùng để đảm bảo phần mềm phái sinh từ GPL vẫn là mã mguồn mở.  
    - **Freedom to use**: Người dùng có quyền tự do chạy phần mềm, nghiên cứu phần mềm và sử dụng phần mềm với bất kỳ mục đích gì. Nguyên tắc này nhằm nhấn mạnh quyền tự do của người dùng.
    - **Freedom to Modify**: Cho phép người dùng bổ sung mã nguồn phù hợp với nhu cầu của mình.  
    - **Freedom to Distribute**: Cho phép người dùng phân phối lại, kể cả bán lại, miễn là tuân theo điều khoản của giấy phép GPL này.

    Giấy phép GPL đã trải qua nhiều phiên bản, trong đó đang phổ biến là **GPL version 2 (GPLv2)** và **GPL version 3 (GPLv3)**. Mỗi phiên bản đều có những cải tiến và làm rõ hơn những điều khoản của phiên bản trước.

    Toàn văn của GPLv3 [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html){:target="_blank"}

## Phân biệt các loại phần mềm

Khi phân loại theo phương thức chuyển giao sử dụng, phần mềm được chia làm ba loại:  

- Phần mềm thương mại
- Phần mềm mã nguồn mở
- Phần mềm miễn phí 

Bảng sau so sánh một số đặc điểm của ba loại phần mềm này:  

*Bảng 1. Những điểm khác biệt giữa các loại phần mềm*  

| &nbsp; | Phần mềm thương mại | Phần mềm mã nguồn mở | Phần mềm miễn phí |
| --- | --- | --- | --- |
| Giấy phép sử dụng | Giấy phép độc quyền | Các loại phép mã nguồn mở | Không có giấy phép |
| Quyền của người dùng | Được/bị ràng buộc bởi các điều khoản trong End-User License Agreement (EULA). | Tự do xem, bổ sung và phân phối lại mã nguồn theo điều khoản của giấy phép mã nguồn mở. | Tùy theo điều khoản của nhà phát triển.  |
| Phát triển và sở hữu | Thường do một công ty phát triển và bảo trì.</br>Quy trình phát triển do công ty kiểm soát. | Có thể do cộng đồng phát triển.<br/>Quy trình phát triển cho phép bất kỳ ai cũng có thể đóng góp. | Quy trình phát triển do nhà phát triển kiểm soát. |  
| Mã nguồn | Thường không công khai | Được công khai, cho phép truy xuất | Thường không công khai | 
| Chi phí | Có phí sử dụng theo nhiều hình thức khác nhau. | Miễn phí khi tải và sử dụng. Người dùng phải trả phí thêm cho những yêu cầu khác. | Miễn phí khi tải và sử dụng. |
| Hỗ trợ kỹ thuật | Người dùng được hỗ trợ chính thức từ nhà phát triển hoặc đại lý. | Người dùng được cộng đồng hỗ trợ thông qua các tài liệu hoặc diễn đàn trực tuyến. Một số sự hỗ trợ từ nhà phát triển có thể tốn phí. | Thường rất ít hoặc không có. |
| Khả năng tùy biến | Giới hạn trong Settings do nhà phát triển cung cấp sẵn. | Mở rộng, tùy biến được cả mã nguồn. | Rất hạn chế. |
| Tính minh bạch | Người dùng gặp hạn chế trong việc biết được hoạt động bên trong của phần mềm. | Cộng đồng giám sát được mã nguồn. | Không minh bach. |
| An toàn và bảo mật | Tùy thuộc khả năng của nhà phát triển. | Việc sửa lỗi hoặc vá lỗi thường diễn ra nhanh hơn. | Tùy tâm nhà phát triển. |
| Vai trò đối với sự phát triển ICT | Đem lại nguồn lợi về kinh tế cho nhà phát triển nói riêng và đất nước nói chung. | Cho người dùng thêm lựa chọn về giải pháp.<br/>Thúc đẩy sự phát triển của cộng đồng lập trình viên nói riêng và xã hội nói chung. |  Cho người dùng thêm lựa chọn về giải pháp. |

Mỗi loại phần mềm đều có những ưu điểm và hạn chế riêng. Việc lựa chọn loại phần mềm nào tùy thuộc vào nhu cầu và điều kiện của mỗi cá nhân, tổ chức.  

!!! success "Tản mạn về chữ free"
    Chữ **free** trong giấy phép GNU của phần mềm mã nguồn mở mang ý nghĩa tự do (freedom), đề cao quyền tự do xem, sử dụng, bổ sung và phân phối lại mã nguồn. Trong khi đó, chữ **free** của *freeware* mang ý nghĩa miễn phí (free of charge, no cost). Cho nên, dịch *freeware* là *phần mềm tự do* e là không ổn.


Ví dụ cụ thể được nêu trong bảng dưới đây.  

*Bảng 2: Tên các phần mềm thương mại, mã nguồn mở và miễn phí có cùng tính năng được*  

| Chức năng chính | Phần mềm thương mại | Phần mềm mã nguồn mở | Phần mềm miễn phí |
| --- | --- | --- | --- |
| Hệ điều hành | Microsoft Windows | Ubuntu | / |
| Soạn thảo, bảng tính, trình chiếu | Microsoft Office | LibreOffice | WPS Office |
| Trình duyệt web | / | Mozilla Firefox | Microsoft Edge |
| Vẽ hình vector | Adobe Illustrator | Inkscape | / |
| Chỉnh sửa ảnh | Adobe Photoshop | GIMP | / |
| Biên tập phim | Adobe Premiere Pro | OpenShot | DaVinci Resolve |
| Hệ quản trị cơ sở dữ liệu | Microsoft SQL Server | MySQL | / |

!!! note "Lưu ý"
    Một số phần mềm có cả phiên bản miễn phí với tính năng cơ bản lẫn phiên bản có phí với tính năng nâng cao.

| Vietnamese | Tiếng Anh |
| --- | --- |
| giấy phép | license |
| phần mềm mã nguồn mở | open source software |
| phần mềm miễn phí | freeware |
| phần mềm thương mại | commercial software |