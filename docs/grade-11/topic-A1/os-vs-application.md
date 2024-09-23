---
icon: material/microsoft-windows
---

# Hệ điều hành, phần mềm ứng dụng và phần cứng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:

    - những điểm khác nhau,
    - vai trò,
    - mối quan hệ
    
    giữa phần cứng, hệ điều hành và phần mềm ứng dụng.

## Phân biệt

**Phần cứng** là các thiết bị vật lý (1) liên quan đến máy tính.
{ .annotate }

1.  Nghĩa là có thể nhìn thấy và chạm vào được.

Muốn phần cứng hoạt động được, cần phải có phần mềm, là những chương trình điều khiển phần cứng hoạt động.

Hệ điều hành và phần mềm ứng dụng đều là phần mềm được cài đặt trên máy tính. Trong đó:

**Hệ điều hành** có chức năng chủ yếu là quản lý và kiểm soát tài nguyên của máy tính(1), đồng thời cung cấp giao diện để người dùng tương tác với máy tính.
{ .annotate }

1.  Tài nguyên của một hệ thống máy tính bao gồm toàn bộ phần cứng, phần mềm và dữ liệu của hệ thống máy tính đó.

**Phần mềm ứng dụng** được thiết kế để đáp ứng những công việc cụ thể nào đó của người dùng.

Bảng sau thể hiện một số điểm khác nhau giữa hệ điều hành và phần mềm ứng dụng:

| &nbsp; | Hệ điều hành | Phần mềm ứng dụng |
| --- | --- | --- |
| Chức năng chính | Điều khiển và quản lý mọi hoạt động của máy tính. | Đáp ứng một công việc cụ thể nào đó. |	
| Cài đặt trên máy tính | Phải cài đặt. | Tùy nhu cầu người dùng. |
| Sự phụ thuộc khi hoạt động | Phụ thuộc khả năng phần cứng, ví dụ như CPU. | Chạy trên nền tảng của một hệ điều hành cụ thể. |
| Tương tác của người dùng | Đóng vai trò trung gian giữa người dùng và máy tính. | Người dùng tương tác trên giao diện của phần mềm. |

## Vai trò

**Phần cứng** đóng vai trò cung cấp các thành phần vật lý cần thiết cho các tiến trình nhập, xuất, xử lý, lưu trữ và truyền dẫn dữ liệu. Nếu không có phần cứng thì phần mềm sẽ không có *"chỗ"* để thực thi các tác vụ.

**Hệ điều hành** đóng vai trò là nền tảng cốt lõi, trung tâm đảm bảo mọi hoạt động của phần cứng, phần mềm trong hệ thống và vai trò là trung gian giữa người dùng và hệ thống.

**Phần mềm ứng dụng** đóng vai trò cung cấp cho người dùng các công cụ và giao diện để thực hiện những công việc cụ thể nào đó.

## Mối quan hệ

1\. Mỗi phần mềm ứng dụng chỉ chạy được trên một nền tảng hệ điều hành nhất định.

Muốn chạy được trên hệ điều hành khác, phần mềm ứng dụng cần được điều chỉnh, bổ sung hoặc lập trình lại cho phù hợp với nền tảng hệ điều hành mới.

Ví dụ:  
Game A chạy được trên Windows và Android, nhưng không chạy được trên MacOS. Game B chạy được trên Nintendo nhưng không chắc chạy được trên Windows.

2\. Các phần mềm ứng dụng muốn sử dụng CPU, bộ nhớ, v.v... cho công việc của mình thì phải thông qua hệ điều hành. Hệ điều hành có chức năng phân phối CPU, bộ nhớ, v.v... một cách hợp lý khi có nhiều phần mềm ứng dụng yêu cầu cùng lúc.

3\. Phần cứng trước khi hoạt động được thì phải được hệ điều hành nhận biết.

Ví dụ:  
Sau khi cắm vào máy tính, máy in muốn in được thì phải được hệ điều hành nhận biết. Hệ điều hành nhận biết máy in bằng driver (1) đã có sẵn hoặc do người dùng cài đặt thêm vào.
{ .annotate }

1.  Driver, còn gọi là **trình điều khiển**, là chương trình gắn liền với một thiết bị cụ thể nhằm:

    - giúp hệ điều hành và thiết bị này giao tiếp được với nhau.
    - bảo đảm cho thiết bị hoạt động đúng chức năng. 

Hình sau thể hiện mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng. Các mũi tên thể hiện hướng tương tác qua lại giữa các đối tượng này.

![Mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng](./os-vs-application/os-and-application.svg){ loading=lazy width=240 }

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-A1/os-vs-application.mm.md!}
*Sơ đồ phân loại phần mềm*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hệ điều hành | operating system |
| nền tảng | platform |
| phần cứng | hardware |
| phần mềm ứng dụng | application software |
| tài nguyên | resource |