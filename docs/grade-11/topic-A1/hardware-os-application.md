---
icon: material/laptop
---

# Phần cứng, hệ điều hành và phần mềm ứng dụng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về:
    
    - Phần cứng
    - Hệ điều hành
    - Phần mềm ứng dụng

    Các điểm liên quan được đề cập:

    - Khái niệm
    - Vai trò
    - Mối quan hệ giữa chúng

## Khái niệm

**Phần cứng** là các thiết bị vật lý (1) liên quan đến máy tính.
{ .annotate }

1.  Nghĩa là có thể nhìn thấy và chạm vào được.

Muốn phần cứng hoạt động được, cần phải có phần mềm, là những chương trình điều khiển phần cứng hoạt động.

**Hệ điều hành** và **phần mềm ứng dụng** đều là những chương trình được cài đặt trên máy tính. Trong đó:

- **Hệ điều hành** có chức năng chủ yếu là **quản lý và kiểm soát** tài nguyên của hệ thống (1), đồng thời **cung cấp giao diện** (2) để người dùng tương tác với máy tính.
    { .annotate }

    1.  **Tài nguyên** của một hệ thống máy tính bao gồm toàn bộ phần cứng, phần mềm và dữ liệu của hệ thống máy tính đó.

    2.  Có hai loại giao diện:

        - **Giao diện dòng lệnh**: người dùng gõ lệnh để điều khiển máy tính.
        - **Giao diện đồ hoạ**: người dùng sử dụng chuột hoặc màn hình cảm ứng để tương tác với các đối tượng như biểu tượng, cửa sổ, menu, v.v...   

- **Phần mềm ứng dụng** được thiết kế để đáp ứng những công việc cụ thể nào đó của người dùng.

!!! tip "Ví von phần cứng và phần mềm"

    Một cách hình tượng, phần cứng là thể xác, phần mềm là linh hồn. Cả hai hợp lại tạo thành một thể thống nhất của một hệ thống tin học.

## Vai trò

Vai trò của các thành phần trên như sau:

- **Phần cứng:** **cung cấp các thành phần vật lý** cần thiết cho các tiến trình nhập, xuất, xử lý, lưu trữ và truyền dẫn dữ liệu. Nếu không có phần cứng thì phần mềm sẽ không có *"chỗ"* để thực thi các tác vụ.

- **Hệ điều hành:**

    - **Làm nền tảng** bảo đảm mọi hoạt động của phần cứng và phần mềm trong hệ thống.
    - **Làm trung gian** giữa người dùng và hệ thống.

- **Phần mềm ứng dụng:** **cung cấp** cho người dùng các **công cụ và giao diện** để thực hiện công việc cụ thể nào đó.

## Mối quan hệ

### Hệ điều hành và phần mềm ứng dụng

1. Mỗi phần mềm ứng dụng chỉ chạy được trên một nền tảng hệ điều hành nhất định.

    Muốn chạy được trên hệ điều hành khác, phần mềm ứng dụng cần được điều chỉnh, bổ sung hoặc lập trình lại cho phù hợp.

    Ví dụ:

    - Game A chạy được trên Windows và Android, nhưng không chạy được trên MacOS.
    - Game B chạy được trên Nintendo nhưng không chắc chạy được trên Windows.

2. Các phần mềm ứng dụng muốn sử dụng CPU, bộ nhớ, v.v... cho công việc của mình thì phải thông qua hệ điều hành.

    Hệ điều hành có chức năng phân phối CPU, bộ nhớ, v.v... một cách hợp lý khi có nhiều phần mềm ứng dụng yêu cầu cùng lúc.

### Hệ điều hành và phần cứng

Phần cứng trước khi hoạt động được thì phải được hệ điều hành nhận biết.

Ví dụ:  
Sau khi cắm vào máy tính, máy in muốn hoạt động thì phải được hệ điều hành nhận biết. Hệ điều hành nhận biết máy in bằng driver (1) đã có sẵn hoặc do người dùng cài đặt thêm vào.
{ .annotate }

1.  Driver, còn gọi là **trình điều khiển**, là chương trình gắn liền với một thiết bị cụ thể nhằm:

    - Giúp hệ điều hành và thiết bị này giao tiếp được với nhau.
    - Bảo đảm cho thiết bị hoạt động đúng. 

Hình sau thể hiện mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng. Các mũi tên thể hiện hướng tương tác qua lại giữa các đối tượng này.

![Mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng](./hardware-os-application/hardware-os-application.svg){ loading=lazy width=240 }

## Phân biệt hệ điều hành và phần mềm ứng dụng

Bảng sau thể hiện một số điểm khác nhau giữa hệ điều hành và phần mềm ứng dụng:

| &nbsp; | Hệ điều hành | Phần mềm ứng dụng |
| --- | --- | --- |
| Chức năng chính | Quản lý và kiểm soát mọi hoạt động của hệ thống. | Đáp ứng một công việc cụ thể nào đó. |	
| Cài đặt trên máy tính | Bắt buộc cài đặt. | Tùy nhu cầu người dùng. |
| Phụ thuộc | Phụ thuộc vào khả năng của phần cứng, chẳng hạn như CPU. | Chạy trên nền tảng của một hệ điều hành cụ thể. |
| Tương tác của người dùng | Người dùng tương tác với máy tính thông qua trung gian là hệ điều hành. | Người dùng tương tác trên giao diện của phần mềm. |

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/hardware-os-application.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| giao diện dòng lệnh | command line interface - CLI |
| giao diện đồ hoạ | graphical user interface - GUI |
| hệ điều hành | operating system |
| nền tảng | platform |
| phần cứng | hardware |
| phần mềm ứng dụng | application software |
| tài nguyên | resource |