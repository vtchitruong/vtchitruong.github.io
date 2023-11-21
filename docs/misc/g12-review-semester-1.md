# Ôn tập học kỳ 1 Tin học 12

!!! success "Lưu ý"
    Hy vọng bạn có câu trả lời trong đầu trước khi nhấn vào phần gợi ý. Bởi vì như vậy sẽ tốt hơn cho bạn.

## Những khái niệm chung về cơ sở dữ liệu

Xem bài lý thuyết [tại đây](https://vtchitruong.github.io/grade-11/topic-F1/database-basics/){:target="_blank"}.

1. Cơ sở dữ liệu là gì?
    
    1. Các ứng dụng dành cho người dùng cuối.
    2. Cơ sở sản xuất tư nhân có chứa dữ liệu.
    3. Chương trình quản lý và khai thác dữ liệu.
    4. Tập hợp dữ liệu có liên quan với nhau.

    ??? tip "Gợi ý"
        Đáp án: D

2. DBMS là gì?

    ??? tip "Gợi ý"
        Database Management System - Chương trình quản lý và khai thác CSDL.

3. Hệ quản trị CSDL là 

    1. phần cứng quản lý cơ sở dữ liệu.
    2. phần mềm quản lý cơ sở dữ liệu.

    ??? tip "Gợi ý"
        Đáp án: B

4. Chức năng chính của một hệ quản trị CSDL là gì?

    1. Dùng cho việc truy vấn cơ sở dữ liệu.
    2. Quản trị các tập tin dữ liệu.
    3. Tạo môi trường thao tác thuận lợi cho người dùng cuối.
    4. Tạo lập, cập nhật và khai thác dữ liệu.

    ??? tip "Gợi ý"
        Đáp án: D

5. Một hệ cơ sở dữ liệu đầy đủ gồm có các thành phần nào?
    
    1. Hệ quản trị CSDL và phần mềm ứng dụng.
    2. Phần cứng và phần mềm.
    3. CSDL và phần mềm ứng dụng.
    4. CSDL, hệ quản trị và phần mềm ứng dụng.

    ??? tip "Gợi ý"
        Đáp án: D

6. Một bảng dữ liệu có chứa 2 cột là Năm sinh và Tuổi. Bảng này có thể vi phạm tính chất gì của cơ sở dữ liệu?

    ??? tip "Gợi ý"
        Tính dư thừa

7. Việc chia dữ liệu thành nhiều bảng, nhiều cột, nhiều dòng có thể được gọi là tính chất gì của cơ sở dữ liệu?

    ??? tip "Gợi ý"
        Tính cấu trúc

8. Mỗi dòng dữ liệu là một mẫu tin; mỗi mẫu tin có cùng số lượng thuộc tính; các thuộc tính phân cách nhau bằng dấu phẩy. Đây là tính chất gì của CSDL?

    1. Tính toàn vẹn
    2. Tính không dư thừa
    3. Tính nhất quán
    4. Tính cấu trúc

    ??? tip "Gợi ý"
        Dữ liệu này được tổ chức theo một cấu trúc xác định, nên đây là tính cấu trúc của cơ sở dữ liệu. Tên gọi của định dạng này là CSV.
        
        Đáp án: D

9. Giáo viên bộ môn Tin đã sửa điểm kiểm tra cho bạn Tèo thành 9 điểm, nhưng giáo viên chủ nhiệm mở máy lên vẫn thấy 5 điểm. Hệ CSDL này chưa đảm bảo tính chất gì?

    1. Tính an toàn
    2. Tính cấu trúc
    3. Tính không dư thừa
    4. Tính nhất quán

    ??? tip "Gợi ý"
        Trong cùng một hệ CSDL, dữ liệu lưu ở hai nơi mà lại khác nhau nghĩa là vi phạm tính nhất quán.
        
        Đáp án: D

        Tuy nhiên, cũng nên biết rằng ngoài đời không có hệ thống *vớ vẩn* vậy đâu nhé. 

10. Trong CSDL của một khách sạn, mẫu tin của khách hàng Z có ghi: ngày check-in là 16.12, ngày check-out là 14.12. Hệ CSDL này đã vi phạm tính chất gì?

    1. Tính nhất quán
    2. Tính cấu trúc
    3. Tính an toàn
    4. Tính toàn vẹn

    ??? tip "Gợi ý"
        Ngày check-out lại diễn ra trước ngày check-in chỉ có thể có trong phim khoa học viễn tưởng. Như vậy, hệ CSDL này đã vi phạm tính toàn vẹn dữ liệu.
        
        Đáp án: D

11. Quy định nhà trường chỉ cho phép mỗi học sinh được mượn tối đa 2 quyển sách một lần. Cơ sở dữ liệu của thư viện cho phép lưu thông tin bạn Nhi vừa mới mượn 2 quyển, trong khi Nhi chưa trả 1 quyển khác. Cơ sở dữ liệu này đã vi phạm tính chất gì?

    ??? tip "Gợi ý"
        Tính toàn vẹn

12. Trong khung nhìn của học sinh, tiết 1 học môn Tin, còn khung nhìn của giáo viên bộ môn lại là môn Thể dục. Cơ sở dữ liệu này đã vi phạm tính chất gì?

    ??? tip "Gợi ý"
        Tính nhất quán

13. Cho biết tên của một ngôn ngữ truy vấn dữ liệu phổ biến.

    1. C++
    1. Python
    2. DML
    4. SQL

    ??? tip "Gợi ý"
        Đáp án: D

14. Vì sao phải có các phần mềm ứng dụng để khai thác CSDL mặc dù đã có DBMS?

    1. Tạo sự đa dạng cho hệ sinh thái CSDL.
    2. DBMS không đủ chức năng để khai thác CSDL.
    3. Việc làm trong thời gian rảnh của lập trình viên.
    4. Tiện lợi hơn cho người dùng cuối.

    ??? tip "Gợi ý"
        Đáp án: D

15. DBMS nào được thường được cài đặt mặc định trên các điện thoại Android và iOS?

    1. Cassandra
    2. MobileDB
    3. SQL Server
    4. SQLite

    ??? tip "Gợi ý"
        Đáp án: D

16. MySQL là hệ quản trị CSDL như thế nào?

    1. Được tạo ra bởi một người tên My
    2. Miễn phí
    3. Hoàn toàn thương mại
    4. Mã nguồn mở

    ??? tip "Gợi ý"
        Đáp án: D

17. SQL Server là hệ quản trị CSDL của công ty nào?

    1. IBM
    2. Oracle
    3. Amazon
    4. Microsoft

    ??? tip "Gợi ý"
        Đáp án: D

18. Oracle là hệ quản trị CSDL của công ty nào?

    1. Orion Chocopie
    2. Google
    3. Amazon
    4. Oracle

    ??? tip "Gợi ý"
        Đáp án: D

19. Một ứng dụng CSDL từ điển chứa những dữ liệu cơ bản gì?

    1. Tên người và số điện thoại
    2. Học sinh và điểm số
    3. Tên người và ngày giờ mượn sách
    4. Từ khóa và nghĩa của từ

    ??? tip "Gợi ý"
        Giáo viên của bạn không nghĩ rằng bạn sẽ trả lời sai câu này.
        
        Đáp án: D

20. Microsoft Excel là hệ quản trị CSDL như thế nào?

    ??? tip "Gợi ý"
        Excel không phải là hệ quản trị CSDL, mà chỉ là chương trình bảng tính. Excel thiếu một số chức năng để trở thành hệ quản trị CSDL. 

## Thao tác với dữ liệu trên Excel

1. Trong Excel, để trích xuất dữ liệu, ta thao tác như thế nào?
    
    ??? tip "Gợi ý"
        Data > Filter

2. Trong Excel, khi trích xuất dữ liệu, ta chọn mục nào để lấy ra những điểm số từ 5 trở lên?

    ??? tip "Gợi ý"
        Number Filters > Greater Than Or Equal To

## Cơ sở dữ liệu quan hệ

Xem bài lý thuyết [tại đây](https://vtchitruong.github.io/grade-11/topic-F1/relational-database/){:target="_blank"}.

Cho cơ sở dữ liệu MovieDB gồm một bảng như sau:

Movies(<ins>**MovieID**</ins>, Title, ReleaseYear, Genre, Director)

| MovieID | Title | ReleaseYear | Genre | Director |
| --- | --- | --- | --- | --- |
| 6	| The Social Network | 2010	| Biography	| David Fincher |
| 7	| La La Land | 2016	| Musical | Damien Chazelle |
| 8	| Mad Max: Fury Road | 2015	| Action | George Miller |
| 9	| Interstellar | 2014 | Sci-Fi | Christopher Nolan |
| 10 | Black Panther | 2018	| Action | Ryan Coogler |
| 11 | The Revenant	| 2015 | Adventure | Alejandro González Iñárritu |
| 12 | Get Out | 2017 | Horror | Jordan Peele |
| 13 | The Shape of Water | 2017 | Drama | Guillermo del Toro |
| 14 | Avengers: Infinity War | 2018 | Action | Anthony and Joe Russo |
| 15 | Parasite	| 2019 | Drama | Bong Joon-ho |


1.	Cơ sở dữ liệu MovieDB có bao nhiêu quan hệ?

    ??? tip "Gợi ý"	
        Mỗi bảng trong cơ sở dữ liệu quan hệ là một quan hệ.

2.	Bảng Movies có bao nhiêu thuộc tính?

    ??? tip "Gợi ý"
        Thuộc tính là cột.

3.	Bảng Movies có bao nhiêu bộ?

    ??? tip "Gợi ý"
        Bộ là mẫu tin hoặc hàng trong bảng.

4.	Theo lược đồ nêu trên, khóa chính của bảng Movies gồm những thuộc tính nào?

    ??? tip "Gợi ý"
        Khóa chính thường được ký hiệu bằng gạch dưới (gạch chân).

5. Các giá trị có thể có trong cùng một thuộc tính được gọi là gì?

    1. Bộ
    2. Dữ liệu hợp lệ
    3. Cột
    4. Miền giá trị

    ??? tip "Gợi ý"

        Đáp án: D

6. Cho biết miền giá trị của thuộc tính ReleaseYear.

    1. {2010, 2014, 2015, 2016, 2017, 2018, 2019}
    2. {x | x < 2023}
    3. Năm
    4. { x | x > 1800}

    ??? tip "Gợi ý"
        Điện ảnh xuất hiện sau năm 1800. Do đó, năm phát hành phải là một số nguyên lớn hơn 1800.

        Đáp án: D    

7. Với cách đánh giá hiện nay, thuộc tính TheDuc, dùng để lưu kết quả môn thể dục của học sinh, có miền giá trị là gì?

    1. {Điền kinh, Bóng chuyền, Đá cầu}
    2. {Chưa đạt, Sém đạt, Quá đạt}
    3. [0, 10]
    4. {Đạt, Chưa đạt}
    
    ??? tip "Gợi ý"

        Đáp án: D  

8. Để hạn chế các giá trị không phù hợp của thuộc tính khi nhập liệu, người ta cài đặt gì trong cơ sở dữ liệu?

    ??? tip "Gợi ý"
        Người ta cài đặt các ràng buộc toàn vẹn nhằm ngăn chặn việc lưu những dữ liệu không hợp lệ.

9. Trong một quan hệ, khóa chính gồm bao nhiêu thuộc tính?

    1. Duy nhất một
    2. 1 hoặc 2
    3. 2
    4. Một hoặc nhiều

    ??? tip "Gợi ý"

        Đáp án: D  

10. Trong cơ sở dữ liệu, thuộc tính gì thường được dùng để xác định một thực thể nào đó là duy nhất?

    1. Họ tên
    2. Ngày sinh và nơi sinh
    3. Nhan sắc
    4. Mã định danh ID

    ??? tip "Gợi ý"
        Đáp án: D  

## Tạo bảng trong Access

Xem bài lý thuyết [tại đây](https://vtchitruong.github.io/grade-11/topic-F1/create-table-in-ms-access/){:target="_blank"}.

1. Access là chương trình thuộc bộ phần mềm nào?

    ??? tip "Gợi ý"
        Microsoft Office

2. Trong Access, dữ liệu được lưu trữ bằng công cụ nào?

    ??? tip "Gợi ý"
        Table

3. Trong Access, để tạo bảng, ta thực hiện như thế nào?

    1. Table Design > Primary Key
    2. Create > Form Design
    3. Database Tools > Relationships
    4. Create > Table Design

    ??? tip "Gợi ý"
        Đáp án: D

4. Trong Access, để tạo khóa chính, ta bấm vào nút gì?

    1. Create Key
    2. Generate a key
    3. Relationships
    4. Primary Key

    ??? tip "Gợi ý"
        Đáp án: D

5. Trong Access, để tạo liên kết giữa các bảng, ta thực hiện như thế nào?

    1. Create > Table Design
    2. Help > Contact Support
    3. Table Design > Primary Key
    4. Database Tools > Relationships

    ??? tip "Gợi ý"
        Đáp án: D

6. Trong Access, đối với thuộc tính có giá trị là ký tự hoặc văn bản, ta chọn kiểu dữ liệu gì?

    1. Alphabet
    2. Number
    3. String
    4. Text

    ??? tip "Gợi ý"
        Đáp án: D

7. Trong Access, khi tạo thuộc tính mã định danh, ta sử dụng kiểu dữ liệu gì?

    1. Yes/No
    2. Currency
    3. Number Double
    4. Short text

    ??? tip "Gợi ý"
        Đáp án: D

8. Trong Acces, Kiểu dữ liệu Short Text trong Microsoft Access chứa tối đa bao nhiêu kí tự?

    1. 252
    2. 225
    3. 250
    4. 255

    ??? tip "Gợi ý"
        Đáp án: D

9. Trong Access, để lưu trữ giá trị là số có phần thập phân, ta sử dụng kiểu dữ liệu nào?

    1. Number > Integer
    2. Number > Long Integer
    3. Large Number
    4. Number > Double

    ??? tip "Gợi ý"
        Đáp án: D

10. Tập tin cơ sở dữ liệu của Microsoft Access có phần mở rộng là gì?

    ??? tip "Gợi ý"
        Đáp án: .accdb












