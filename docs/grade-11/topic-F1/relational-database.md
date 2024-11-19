---
icon: material/relation-zero-or-one-to-one-or-many
---

# Cơ sở dữ liệu quan hệ

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những khái niệm liên quan đến mô hình cơ sở dữ liệu quan hệ.

## Khái quát

![Chân dung nhà khoa học Edgar Frank Codd](https://upload.wikimedia.org/wikipedia/en/5/58/Edgar_F_Codd.jpg){loading=lazy align=right}

Mô hình dữ liệu quan hệ được nhà khoa học người Mỹ gốc Anh đề xuất vào năm 1970. Mô hình này đã trở thành một trong những mô hình dữ liệu được sử dụng phổ biến nhất trong nhiều thập kỷ qua, từ những hệ thống nhỏ cho đến những doanh nghiệp quy mô lớn. 

**Cơ sở dữ liệu quan hệ** lưu trữ và tổ chức dữ liệu theo dạng bảng, gồm hàng và cột.

Một số hệ quản trị có hỗ trợ cơ sở dữ liệu quan hệ là:  

- Oracle
- Microsoft SQL Server
- Microsoft Access
- MySQL
- PostgreSQL
- IBM Db2
- SQLite
- v.v...

## Một số khái niệm

Cơ sở dữ liệu quan hệ có những thuật ngữ và khái niệm sau:

### Quan hệ

Mỗi **bảng** là một **quan hệ**.
 
Và dữ liệu trong các quan hệ có... *mối quan hệ* với nhau.

Ví dụ:  

Một cơ sở dữ liệu trường học có những quan hệ sau:

- Quan hệ `students` là bảng dữ liệu về học sinh.
- Quan hệ `subjects` là bảng dữ liệu về môn học.
- Quan hệ 'scores' là bảng dữ liệu về điểm số.

### Bộ

Mỗi hàng trong bảng là một **bộ**, cách gọi khác là **mẫu tin** hoặc **bản ghi**.

Mỗi **bộ** là một tập hợp dữ liệu về một thực thể.

Ví dụ:

- Trong quan hệ `students`, mỗi hàng là một bộ chứa dữ liệu mô tả một bạn học sinh.
- Trong quan hệ `learning`, mỗi hàng là một bộ chứa dữ liệu mô tả học sinh H học môn M và đạt điểm D.

### Thuộc tính

Mỗi cột trong bảng là một **thuộc tính**, cách gọi khác là **trường**.

Mỗi thuộc tính đều được có **kiểu dữ liệu** và **miền giá trị**.

Miền giá trị là tập hợp các giá trị được cho phép của thuộc tính đó.

Ví dụ:

Trong quan hệ `students`, các thuộc tính có thể có là: `student_id`, `last_name`, `first_name`, `gender`, `birth_date`, `birth_place`, v.v...

Miền giá trị của thuộc tính `gender` là tập hợp gồm hai giá trị là 0 và 1, biểu thị cho nam và nữ.

<figure markdown>
  ![Minh họa quan hệ, thuộc tính và bộ](database/relation.svg){loading=lazy}  
  <figcaption>Minh họa quan hệ, thuộc tính và bộ</figcaption>  
</figure>

### Khóa chính

Trong cùng một quan hệ (bảng), không thể có hai bộ trùng nhau hoàn toàn trên mọi thuộc tính. Người ta đặt ra khái niệm **khóa chính** để phân biệt các bộ với nhau.

**Khóa chính** của một quan hệ là tập hợp gồm một hoặc nhiều thuộc tính dùng để xác định một bộ là duy nhất, không trùng với bộ khác trong cùng quan hệ.

Ví dụ:

Trong quan hệ `students`, nếu hai học sinh là anh em sinh đôi, thì dữ liệu có thể trùng nhau ở các thuộc tính như `gender`, `birth_date`, `birth_place`, v.v..., thậm chí là `last_name` và `first_name`.

Việc này khiến cho hai bộ bị trùng nhau.

Để khắc phục, ta chọn `student_id` làm khóa chính, vì thuộc tính này giúp phân biệt các bộ với nhau. Nói cách khác, hai anh em song sinh có thể trùng nhau ở những dữ liệu khác, nhưng mỗi người có *mã số học sinh* khác nhau.

### Khóa ngoại

**Khóa ngoại** của một quan hệ là một thuộc tính được dùng để tạo *mối quan hệ* với quan hệ (bảng) khác.

*Mối quan hệ* giữa hai quan hệ (bảng) được thể hiện bằng liên kết giữa khóa ngoại của bảng này và khóa chính của bảng kia.  

Ví dụ:

Cơ sở dữ liệu trường học còn có một bảng khác là `classrooms`. Bảng này có khóa chính là thuộc tính `class_id` (mã lớp).

Bảng `students` có một thuộc tính cũng mang tên là `class_id`, cho biết một học sinh đang ở lớp nào.

Theo đó, `class_id` của bảng `students` là khóa ngoại, được liên kết tới khóa chính `class_id` của bảng `classrooms`.

### Lược đồ

**Lược đồ cơ sở dữ liệu** là bản thiết kế hoặc mô hình tổng thể của cơ sở dữ liệu, dùng để mô tả cách tổ chức dữ liệu và các mối quan hệ giữa các yếu tố trong cơ sở dữ liệu với nhau.

Nói cách khác, lược đồ là bộ khung của cơ sở dữ liệu. Lược đồ chỉ mô tả, chứ không chứa dữ liệu thực.

Ví dụ:

Một phần của cơ sở dữ liệu trường học được thể hiện theo lược đồ sau:

- students(<ins>**student_id**</ins>, first_name, last_name, ..., class_id)
- scores(<ins>**student_id\*, subject_id**</ins>, score)

Trong đó:

- `students` và `scores` là tên các quan hệ (bảng).
- Các thuộc tính được đặt trong cặp ngoặc và phân cách nhau bằng dấu phẩy.
- Khoá chính được ký hiệu bằng gạch dưới.
- Khoá ngoại được ký hiệu bằng dấu hoa thị, hoặc ghi `(FK)`.

Hình dưới đây thể hiện lược đồ vừa nêu, kèm theo dữ liệu thực.

<figure markdown>
  ![Một phần cơ sở dữ liệu trường học](database/school-database.svg){loading=lazy}  
  <figcaption>Một phần cơ sở dữ liệu trường học</figcaption>  
</figure>

!!! Question "Câu hỏi"

    Bạn hãy quan sát hình 3 và cho biết:

    1. Hình 3 thể hiện mấy quan hệ?
    2. Mỗi quan hệ có bao nhiêu thuộc tính?
    3. Khóa chính của mỗi quan hệ có thể là thuộc tính nào?
    4. Mỗi quan hệ có bao nhiêu bộ?
    5. Có những khóa ngoại nào?

??? Tip "Đáp án"

    Hình 3 thể hiện hai quan hệ của cơ sở dữ liệu trường học.

    Quan hệ `students`:

    - Có nhiều hơn 4 thuộc tính.
    - Khóa chính là thuộc tính `student_id`.
    - Có 3 bộ.

    Quan hệ `scores`:

    - Có nhiều hơn 3 thuộc tính.
    - Khóa chính gồm 2 thuộc tính là `student_id` và `subject_id`.
    - Có 5 bộ.
    - Khóa ngoại là thuộc tính `student_id`, được liên kết với `student_id` của quan hệ `students`.

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/relational-database.mm.md!}
*Sơ đồ tóm tắt cơ sở dữ liệu quan hệ*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bộ | tuple |
| khóa chính | primary key |
| khóa ngoại | foreign key |
| lược đồ cơ sở dữ liệu | schema |
| mối quan hệ | relationship |
| quan hệ (bảng) | relation |
| thuộc tính | attribute |