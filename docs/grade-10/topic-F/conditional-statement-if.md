# Cấu trúc điều kiện if

!!! abstract "Tóm lược nội dung"

    Bài này trình bày câu lệnh điều kiện `if`, gồm cả `if` thiếu và `if` đủ.

## Đặt vấn đề

Không phải bài toán nào cũng được giải quyết bằng một *đường thẳng*, tức thực hiện một mạch các câu lệnh từ trên xuống.  

Trên thực tế, rất nhiều con đường có *nhánh rẽ*, rất nhiều bài toán mà trong quá trình giải quyết, phát sinh các trường hợp khác nhau, buộc ta phải chọn một hướng để đi tiếp, không thể *phân thân* để đi nhiều hướng cùng lúc.

## Khái niệm

Câu lệnh `if` là câu lệnh dùng để giải quyết bài toán có nhiều trường hợp.  

Câu lệnh `if`` được gọi là *cấu trúc điều kiện*, hoặc một số sách giáo khoa gọi là *cấu trúc rẽ nhánh*.  

## Lệnh if thiếu

!!! note "Cú pháp"
    ``` py
    if điều_kiện:  
        lệnh_1  
        lệnh_2  
        lệnh_n
    ```

Giải thích:  
Nếu `điều_kiện` có giá trị `True`, thì khối lệnh ngay bên dưới được thực hiện. Ngược lại, nếu `điều_kiện` có giá trị `False`, thì không có lệnh nào được thực hiện lệnh cả.  
Nói cách khác, nếu đúng thì làm, còn không thì thôi.  

:   Ví dụ 1:
    ``` py linenums="1"
    diem_thi_mos = 700 # Điểm thi Microsoft Office Specialist

    if diem_thi_mos >= 700:
        print('Pass. Good job!')
    ```

    Output:
    ``` pycon
    Pass. Good job!
    ```

## Lệnh if đủ

!!! note "Cú pháp"
    ``` py
    if điều_kiện:  
        lệnh_1  
        lệnh_2  
        lệnh_n
    else:
        lệnh_A
        lệnh_B
        lệnh_Z
    ```

Giải thích:  
Nếu `điều_kiện` có giá trị `True`, thì khối lệnh nằm trên được thực hiện. Ngược lại, nếu `điều_kiện` có giá trị `False`, thì khối lệnh nằm sau `else` được thực hiện.  
Nói cách khác, câu lệnh `if ... else ...` dùng để giải quyết bài toán có **2 trường hợp**.  

:   Ví dụ 2:
    ``` py linenums="1"
    diem_thi_mos = 691 # Điểm thi Microsoft Office Specialist

    if diem_thi_mos >= 700:
        print('Pass. Good job!')
    else:
        print('Fail. Try again. Better luck next time.')
    ```

    Output:
    ``` pycon
    Fail. Try again. Better luck next time.
    ```

:   Ví dụ 3:
    ``` py linenums="1"
    m = 19

    if m % 2 == 1:
        print(m, 'là số lẻ')
    else:
        print(m, 'là số chẵn')
    ```

    Output:
    ``` pycon
    19 là số lẻ
    ```

## Lệnh if đủ dành cho bài toán có nhiều hơn 2 trường hợp

!!! note "Cú pháp"
    ``` py
    if điều_kiện_trường_hợp_1:  
        khối_lệnh_A
    elif điều_kiện_trường_hợp_2:
        khối_lệnh_B
    elif điều_kiện_trường_hợp_3:
        khối_lệnh_C
    .
    .
    else:
        khối_lệnh_D
    ```

Giải thích:  
- Ứng với trường hợp 1, ta viết lệnh `if`, `khối_lệnh_A` sẽ được thực hiện.  
- Ứng với mỗi trường hợp tiếp theo, ta viết lệnh `elif`, `khối_lệnh_B` hoặc `khối_lệnh_C` sẽ được thực hiện tương ứng.  
- Nếu không có trường hợp nào thỏa, ta viết lệnh  `else`,  `khối_lệnh_D` sẽ được thực hiện.  

:   Ví dụ 4:
    ``` py linenums="1"
    age = 70

    if age < 15:
        print("Bạn chưa đủ tuổi lao động.")
    elif age >= 15 and age <= 62:
        print("Bạn đang nằm trong độ tuổi lao động.")
    else:
        print("Bạn đã vào tuổi hưu.")
    ```

    Output:
    ``` pycon
    Bạn đã vào tuổi hưu.
    ```

??? note "Nhận xét"
    Với bài toán có *n* trường hợp, ta chỉ cần viết *n - 1* lệnh `if` hoặc `elif`.

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1KsgtE-O1YRvLWoczEp3SbYpex7RG_C3K?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  