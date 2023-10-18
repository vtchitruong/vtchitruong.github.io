# Khái quát về cơ sở dữ liệu

## Cơ sở dữ liệu

### Khái niệm

Cơ sở dữ liệu được sử dụng để lưu trữ và quản lý lượng lớn dữ liệu, thông tin của cá nhân lẫn tổ chức trong nhiều lĩnh vực khác nhau.

!!! note "Cơ sở dữ liệu"

    Cơ sở dữ liệu là một tập hợp dữ liệu được tổ chức và lưu trữ sao cho việc tìm kiếm, xử lý và quản lý dữ liệu được hiệu quả.

### Tính chất

#### Tính cấu trúc
Dữ liệu có cấu trúc là dữ liệu được tổ chức và lưu trữ theo một định dạng nhất định.

:   Ví dụ:  
    Dữ liệu được tổ chức thành các bảng gồm nhiều hàng và nhiều cột, hàng và cột đều tuân theo những quy ước đặt ra ban đầu.

#### Tính nhất quán

Là một phần của tính chính xác và tính tin cậy của dữ liệu. Cụ thể, trong quá trình cập nhật, dữ liệu phải được đảm bảo không có lỗi, không sai lệch hay mâu thuẫn. 

:   Ví dụ:  
    Khi bạn Tèo chuyển từ lớp 11A sang lớp 11D, thì dữ liệu của hai lớp này và dữ liệu liên quan đến Tèo đều phải được cập nhật sao cho không xảy ra mâu thuẫn, chẳng hạn cả hai lớp đều có dữ liệu về học sinh Tèo, hoặc kết quả thi đua vẫn tính cho lớp 11A mà lẽ ra phải tính cho lớp 11D.

#### Tính toàn vẹn

Là tính đúng đắn, tính tin cậy và bao gồm cả tính nhất quán của dữ liệu. Cụ thể, trước khi chính thức được lưu vào cơ sở dữ liệu, dữ liệu phải tuân theo các quy định và ràng buộc để đảm bảo luôn đúng đắn, không có dữ liệu "*rác*".

:   Ví dụ:  
    Điểm số bài kiểm tra có giá trị từ 0 đến 10. Nếu người dùng nhập vào 11 điểm mà cơ sở dữ liệu vẫn cho phép lưu vào, thì vi phạm tính toàn vẹn.

#### Tính an toàn 
Là khả năng kiểm soát các truy xuất vào cơ sở dữ liệu nhằm đảm bảo không có truy xuất trái phép, giả mạo, đảm bảo ngăn chặn các thay đổi không hợp lệ đối với dữ liệu.


## Hệ quản trị cơ sở dữ liệu

### Khái niệm

!!! note "Hệ quản trị"
    Hệ quản trị cơ sở dữ liệu (viết tắt là DBMS) là phần mềm dùng để lưu trữ, quản lý, xử lý và tìm kiếm dữ liệu trong cơ sở dữ liệu.  

:   Ví dụ:  
    Một số hệ quản trị cơ sở dữ liệu phổ biến hiện nay:  

    - Oracle
    - MySQL
    - Microsoft SQL Server
    - PostgreSQL
    - MongoDB

### Chức năng
DBMS đóng vai trò trung gian giữa phần mềm ứng dụng và cơ sở dữ liệu, cung cấp cách thức hiệu quả và an toàn để tương tác và kiểm soát dữ liệu. Cụ thể như sau:  

#### Lưu trữ dữ liệu
Quản lý việc lưu trữ dữ liệu về mặt vật lý, trong đó có cách thức dữ liệu lưu trên đĩa, tổ chức dữ liệu theo tập tin và indexing dữ liệu.

#### Tìm kiếm dữ liệu
DBMS giúp người dùng và phần mềm ứng dụng tìm kiếm dữ liệu thông qua các ngôn ngữ truy vấn dữ liệu, chẳng hạn như SQL, .

#### Xử lý dữ liệu
DBMS giúp người dùng thêm, cập nhật và xóa dữ liệu mà vẫn đảm bảo tính nhất quán và tính toàn vẹn của cơ sở dữ liệu. 

Ngoài ra còn có những chức năng khác như:

- Đảm bảo an toàn dữ liệu
- Đảm bảo tính toàn vẹn dữ liệu
- Kiểm soát các truy xuất đồng thời
- Quản lý giao tác
- Sao lưu và khôi phục
- Tối ưu hóa truy vấn
- Thống kê, phân tích và báo cáo
- Hỗ trợ đa người dùng
- v.v...

## Hệ cơ sở dữ liệu

### Các thành phần

Hệ cơ sở dữ liệu là hệ thống gồm có:

- Cơ sở dữ liệu
- Hệ quản trị cơ sở dữ liệu
- Phần mềm ứng dụng

<div style="text-align: center">
    <iframe height="368px" frameBorder=0 src="../database/database-system.html"></iframe>
    <p style="text-align: center; margin: 0">Hình 1. Sơ đồ thể hiện mối quan hệ giữa các thành phần trong một hệ cơ sở dữ liệu</p>
</div>

Mặc dù đã có hệ quản trị cơ sở dữ liệu, nhưng phần mềm ứng dụng vẫn được tạo ra nhằm giúp người dùng dễ dàng và thuận tiện hơn trong các thao tác với cơ sở dữ liệu.

### Kiến trúc của hệ cơ sở dữ liệu

Có hai kiến trúc chủ yếu là **tập trung** và **phân tán**.

#### Kiến trúc cơ sở dữ liệu tập trung

Đây là kiến trúc cổ điển và đơn giản nhất. Toàn bộ dữ liệu được đặt tại một máy chủ, đóng vai trò là điểm trung tâm cho các hoạt động lưu trữ và quản lý dữ liệu. 

Một số hệ quản trị cơ sở dữ liệu thường được sử dụng cho kiến trúc tập trung là Oracle, Microsoft SQL Server và MySQL.

#### Kiến trúc cơ sở dữ liệu phân tán

Đây là kiến trúc phức tạp. Dữ liệu nằm phân tán trên nhiều máy chủ đặt tại các vị trí địa lý khác nhau. Mỗi máy chủ lưu trữ và xử lý một phần dữ liệu, còn dữ liệu có thể được truy xuất từ những máy chủ khác.

Kiến trúc này nhằm hướng đến những mục tiêu như khả năng chịu lỗi, khả năng mở rộng hệ thống và khả năng sẵn sàng đáp ứng.

Một số hệ quản trị cơ sở dữ liệu thường được sử dụng cho kiến trúc phân tán Cassandra, MongoDB, Google Cloud Spanner.

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/database/database-basics.mm.md!}
Hình 1. Sơ đồ tóm tắt những khái niệm về cơ sở dữ liệu

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cơ sở dữ liệu | database |
| hệ quản trị cơ sở dữ liệu | database management system (DBMS) |
| phần mềm ứng dụng | application |