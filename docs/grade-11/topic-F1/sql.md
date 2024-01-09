# Ngôn ngữ truy vấn dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái niệm ngôn ngữ SQL và một số ví dụ đơn giản về câu lệnh truy vấn SELECT.

## Khái niệm

**SQL** (Structured Query Language), tạm dịch là **ngôn ngữ truy vấn có cấu trúc**, là ngôn ngữ được thiết kế để quản lý và xử lý cơ sở dữ liệu quan hệ.

SQL được phân thành ba loại dựa trên thao tác đối với dữ liệu:

- **DDL** (Data Definition Language):

    DDL là những câu lệnh dùng để định nghĩa cấu trúc của cơ sở dữ liệu, bao gồm tạo, thay đổi và xóa các đối tượng của cơ sở dữ liệu.

- **DML** (Data Manipulation Language):

    DML là những câu lệnh dùng để quản lý dữ liệu, bao gồm truy hồi, thêm, cập nhật và xóa dữ liệu.

- **DCL** (Data Control Language):

    DCL là những câu lệnh dùng để kiểm soát việc truy xuất dữ liệu, bao gồm cấp và thu hồi quyền và đặc quyền.

Ngoài ra, còn có thêm những loại khác như TCL (Transaction Control Language), DQL và các lệnh tiện ích.

{!grade-11/topic-F1/database/sql-categories.mm.md!}
Hình 1. Phân loại câu lệnh SQL và một số lệnh ví dụ

Trong chương trình phổ thông, ta chủ yếu quan tâm câu lệnh `SELECT`.

!!! question "Câu hỏi 1"

    SQL là ngôn ngữ có chức năng gì?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="A">A. Lập trình cho thiết bị di động<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="B">B. Tạo trang web động<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="C">C. Truy vấn cơ sở dữ liệu<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_1" value="D">D. Ngôn ngữ giao tiếp với người ngoài hành tinh<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_1', 'C', 'appreciate_1')">Submit</button>
        <div id="appreciate_1"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Đáp án C.

## Cú pháp câu lệnh SELECT

!!! note Cú pháp tổng quát
    ``` sql
    SELECT <cột>
    FROM <bảng>
    [WHERE <biểu thức điều kiện>]
    [GROUP BY <cột>]
    [HAVING <điều kiện trên nhóm>]
    [ORDER BY <cột> ASC | DESC]
    ```

!!! note "Quy ước về dấu ngoặc"

    Cặp ngoặc nhọn `< >` nghĩa là bắt buộc phải có.

    Cặp ngoặc vuông `[ ]` nghĩa là tùy chọn, có thể có hoặc không.

!!! question "Câu hỏi 2"

    Mệnh đề, hoặc từ khóa, nào dùng để sắp xếp kết quả của truy vấn?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="A">A. SELECT<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="B">B. WHERE<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="C">C. GROUP BY<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_2" value="D">D. ORDER BY<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_2', 'D', 'appreciate_2')">Submit</button>
        <div id="appreciate_2"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        D. ORDER BY

## Truy vấn dữ liệu trên một bảng

Cho bảng dữ liệu `ThucDon` gồm 4 cột và 5 bộ (mẫu tin).

| MaMon | TenMon | LoaiMon | DonGia |
| --- | --- | --- | --- |
| 1 | Cà phê sữa đá | drink | 25000 |
| 2 | Rồng xanh vượt sóng đại dương | food | 59000 |
| 3 | Hắc ngọc ẩn mộng tưởng | drink | 49000 |
| 4 | Xúc xắc ngự thảo nguyên | food |65000 |
| 5 | Kim kê ngự Nam Cực | food | 59000 |

### Truy vấn toàn bộ dữ liệu trong bảng

Muốn kết quả hiển thị những cột nào, ta liệt kê tên những cột đó trong mệnh đề `select`.

Dấu sao `*` đại diện cho tất cả cột có trong bảng `ThucDon`. Đồng nghĩa tất cả cột đều được hiển thị.

Trong mệnh đề `from`, ta chỉ định tên của những bảng có liên quan.

Nếu các cột nằm ở nhiều bảng khác nhau thì ta sử dụng toán tử kết nối bảng. (Bài này không đề cập việc kết nối bảng)

Ví dụ 1:

``` sql linenums="1"
select *
from ThucDon
```

!!! question "Câu hỏi 3"

    Câu truy vấn trong ví dụ 1 sẽ hiển thị kết quả gồm mấy cột?

    <div>
    <form id="answer-form">
        <label for="userInput_3">Lời giải của bạn:</label><br>
        <textarea id="userInput_3" name="userInput_3" required></textarea>
        <textarea id="solution_3">4</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_3', 'solution_3', 'appreciate_3')">Submit</button>
        <div id="appreciate_3"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        ``` py linenums="1"
        Dấu sao `*` đại diện cho tất cả cột có trong bảng. Như vậy, kết quả sẽ có đủ 4 cột của bảng `ThucDon`.
        ```

### Truy vấn có điều kiện

Không phải lúc nào ta cũng muốn lấy tất cả mẫu tin, mà chỉ cần lọc ra những mẫu tin thỏa điều kiện nào đó.

Để lọc mẫu tin, ta viết điều kiện cần lọc trong mệnh đề `where` bằng các toán tử như: bằng `=`, khác `<>`, `>`, `>=`, `<`, `<=`, `<>`, `and`, `or`, `not`, v.v...

Ví dụ 1 ở trên không có mệnh đề `where`. Nghĩa là tất cả mẫu tin đều được hiển thị. Nói cách khác, kết quả truy vấn của ví dụ 1 là toàn bộ dữ liệu của bảng `ThucDon`.

#### So sánh bằng

Ví dụ 2:  
Viết truy vấn cho biết cà phê sữa đá giá bao nhiêu.

``` sql linenums="1"
select TenMon, DonGia
from ThucDon
where TenMon = 'Cà phê sữa đá'
```

Kết quả:

| TenMon | DonGia |
| --- | --- |
| Cà phê sữa đá | 25000 |

!!! note "Lưu ý"

    MySQL chấp nhận cho cả cặp nháy đơn `' '` và cặp nháy kép `" "` chứa chuỗi ký tự. Tuy nhiên, cần biết rằng vẫn có sự phân biệt trong những hoàn cảnh khác. 

!!! question "Câu hỏi 4"

    Truy vấn nào sau đây dùng để lọc ra những món có giá 25 ngàn.

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_4" value="A">A. select TenMon, DonGia
        from ThucDon where DonGia = '25000' <span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_4" value="B">B. select TenMon, DonGia
        from ThucDon where DonGia = '25 ngàn'<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_4" value="C">C. select TenMon, DonGia
        from ThucDon where DonGia = 25000<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_4', 'C', 'appreciate_4')">Submit</button>
        <div id="appreciate_4"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Nếu giá trị so sánh là chuỗi thì ta đặt vào cặp nháy đơn `' '`, còn nếu là số thì không cần.
        
        Như vậy, đáp án là C.

        ``` sql linenums="1"
        select TenMon, DonGia from ThucDon where DonGia = 25000
        ```

!!! note "Lưu ý"
   
    Đối với chuỗi, khoảng trắng dư thừa cũng có thể dẫn đến sai lệch trong kết quả.

#### So sánh khác

Ví dụ 3:  
Viết truy vấn liệt kê tất cả các món không phải món ăn.

``` sql linenums="1"
select TenMon, LoaiMon
from ThucDon
where LoaiMon <> "food"
```

!!! question "Câu hỏi 5"

    Bạn hãy cho biết kết quả của truy vấn trong ví dụ 3 gồm bao nhiêu mẫu tin?

    <div>
    <form id="answer-form">
        <label for="userInput_5">Lời giải của bạn:</label><br>
        <textarea id="userInput_5" name="userInput_5" required></textarea>
        <textarea id="solution_5">2</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_5', 'solution_5', 'appreciate_5')">Submit</button>
        <div id="appreciate_5"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Kết quả gồm 2 mẫu tin, cụ thể như sau: 

        | TenMon | LoaiMon |
        | --- | --- |
        | Cà phê sữa đá | drink |
        | Hắc ngọc ẩn mộng tưởng | drink |

Ví dụ 4:  
Viết truy vấn cho biết những món nào có giá từ 30 ngàn trở xuống.

``` sql linenums="1"
select TenMon, DonGia
from ThucDon
where DonGia <= 30000
```

Kết quả:

| TenMon | DonGia |
| --- | --- |
| Cà phê sữa đá | 25000 |

!!! question "Câu hỏi 6"

    Mệnh đề where nào sau đây dùng để lọc ra những món có giá từ 30 đến 70 ngàn?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_6" value="A">A. where 30000 <= DonGia <= 70000<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_6" value="B">B. where 30000 <= DonGia and DonGia <= 70000<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_6', 'B', 'appreciate_6')">Submit</button>
        <div id="appreciate_6"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        B.

#### So sánh chuỗi theo mẫu

Toán tử bằng `=` dùng để so sánh chuỗi chính xác. Trong trường hợp so sánh chuỗi một cách gần đúng hoặc tương đối, còn gọi là so sánh **theo mẫu**, ta sử dụng toán tử `like` (tạm dịch "*giống như là*") và ký tự đại diện `%` hoặc `_`.

!!! note "Ký tự đại diện"

    | Ký tự | Đại diện cho |
    | --- | --- |
    | `%` | không ký tự hoặc nhiều ký tự |
    | `_` | một kí tự duy nhất |

Ví dụ 5   
Viết truy vấn tìm các món có chữ "*ngư*" hoặc "*ngự*" trong tên.

``` sql linenums="1"
select MaMon, TenMon
from ThucDon
where TenMon like '%ngu%'
```

Kết quả:

| MaMon | TenMon |
| --- | --- |
| 4 | Xúc xắc ngự thảo nguyên |
| 5 | Kim kê ngự Nam Cực |

Thông thường, MySQL không phân biệt *ngư*, *ngự*, *ngừ*, *ngữ*, v... nên ta có thể viết mẫu là `'%ngu%'` để phủ hết các trường hợp liên quan.

!!! question "Câu hỏi 7"

    Kết quả của truy vấn sau đây gồm mấy mẫu tin?

    ``` sql linenums="1"
    select TenMon
    from ThucDon
    where TenMon like '%g'
    ```

    <div>
    <form id="answer-form">
        <label for="userInput_7">Lời giải của bạn:</label><br>
        <textarea id="userInput_7" name="userInput_7" required></textarea>
        <textarea id="solution_7">2</textarea><br>
        <button class="submitButton" type="button" onclick="process_answer('userInput_7', 'solution_7', 'appreciate_7')">Submit</button>
        <div id="appreciate_7"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        Điều kiện `TenMon like '%g'` dùng để lọc ra tên các món có ký tự cuối cùng là `'g'`. Có 2 tên món tận cùng bằng `'g'`, cụ thể như sau:

        | TenMon |
        | --- |
        | Rồng xanh vượt sóng đại dương |
        | Hắc ngọc ẩn mộng tưởng |

### Sắp xếp kết quả hiển thị

Để kết quả hiển thị theo một thứ tự mong muốn, ta liệt kê những cột cần sắp xếp trong mệnh đề `order by`, kèm theo từ khóa chỉ định thứ tự *tăng dần* hoặc *giảm dần*.

!!! note "Từ khóa chỉ định thứ tự sắp xếp"

    | Từ khóa | Thứ tự sắp xếp |
    | --- | --- |
    | `asc` | tăng dần |
    | `desc` | giảm dần |

    Nếu không chỉ định từ khóa, thứ tự mặc định là *tăng dần*.

Ví dụ 6:  
Viết truy vấn để lập danh sách các món uống có giá tăng dần.

``` sql linenums="1"
select TenMon, LoaiMon, DonGia
from ThucDon
where LoaiMon = 'drink'
order by DonGia
```

Kết quả:

| TenMon | LoaiMon | DonGia |
| --- | --- | --- |
| Cà phê sữa đá | drink | 25000 |
| Hắc ngọc ẩn mộng tưởng | drink | 49000 |

Ví dụ 7:

``` sql linenums="1"
select TenMon, LoaiMon, DonGia
from ThucDon
where LoaiMon = 'food'
order by DonGia, TenMon desc
```

!!! question "Câu hỏi 8"

    Mệnh đề `order by` của ví dụ 7 có ý nghĩa sắp xếp như thế nào?

    <div>
    <form id="option-quiz-form">
        <label class="container"><input class="option-input radio" type="radio" name="userInput_8" value="A">A. Đơn giá tăng dần, nếu đồng giá thì tên món giảm dần.<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_8" value="B">B. Đơn giá giảm dần, nếu đồng giá thì tên món giảm dần.<span class="checkmark"></span></label>
        <label class="container"><input class="option-input radio" type="radio" name="userInput_8" value="C">C. Đơn giá và tên món đều cùng giảm dần.<span class="checkmark"></span></label>
        <button class="submitButton" type="button" onclick="process_options_quiz('userInput_8', 'A', 'appreciate_8')">Submit</button>
        <div id="appreciate_8"></div>
    </form>
    </div>

    ??? tip "Đáp án"

        `DonGia` không được chỉ định thứ tự, nên mặc định là tăng dần. Nếu DonGia trùng nhau, tức đồng giá, thì mới sắp xếp `TenMon` giảm dần. Kết quả cụ thể như sau:

        | TenMon | LoaiMon | DonGia |
        | --- | --- | --- |
        | Rồng xanh vượt sóng đại dương | food | 59000 |
        | Kim kê ngự Nam Cực | food | 59000 |
        | Xúc xắc ngự thảo nguyên | food |65000 |

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F1/database/sql.mm.md!}
Hình 2. Sơ đồ tóm tắt về SQL

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| điều kiện | criteria |
| giảm dần | descending |
| ký tự đại diện | wildcard character |
| ngôn ngữ truy vấn có cấu trúc | Structured Query Language (SQL) |
| tăng dần | ascending |