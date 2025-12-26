---
icon: material/source-branch
---

# Cấu trúc điều kiện if

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cấu trúc điều kiện if.

## Khái quát

Không phải bài toán nào cũng được giải quyết theo một *"đường thẳng"*, tức thực hiện một mạch các dòng lệnh từ trên xuống.  

Trên thực tế, có rất nhiều bài toán mà trong quá trình giải quyết, phát sinh các trường hợp khác nhau, buộc ta phải chọn một hướng duy nhất để đi tiếp, chứ không thể *phân thân* đi nhiều hướng cùng lúc.

!!! note "Câu lệnh if"

    Trong các ngôn ngữ lập trình, `if` là **cấu trúc điều kiện** (1), được dùng để giải quyết bài toán có nhiều trường hợp.
    { .annotate }

    1.  Một số sách giáo khoa gọi là **cấu trúc rẽ nhánh**.  

---

## if thiếu

!!! note "Cú pháp if thiếu"

    ```py
    if điều_kiện:
        # Thực thi nếu điều_kiện đúng
    ```

Nếu `điều_kiện` có giá trị `True` thì thực thi khối lệnh ngay bên dưới.

Ngược lại, nếu `điều_kiện` có giá trị `False` thì không thực thi gì cả.

Nói cách khác, nếu đúng thì làm, không thì thôi.

Ví dụ:  
Dòng lệnh 2 xét xem tham số `s` có bằng `1000` hay không:

- Nếu có thì in ra thông báo (dòng lệnh 3).
- Ngược lại, nếu không thì không làm gì.

```py linenums="1" hl_lines="2-3"
def evaluate_mos_score(s): # (1)!
    if s == 1000:
        print('Xuất sắc! Bạn đã đạt điểm tối đa 🎉')


if __name__ == '__main__':
    score = int(input('Nhập điểm thi MOS của bạn: '))
    
    # Gọi hàm
    evaluate_mos_score(score)
```
{ .annotate }

1.  Hàm `evaluate_mos_score()` dưới đây xét xem điểm MOS (Microsoft Office Specialist) có đạt 1000 hay không.

    Hàm chỉ có một tham số đầu vào là `s`, biểu thị điểm MOS; không có giá trị trả về.

Chạy đoạn mã trên và nhập vào 1000, kết quả như sau:

```pycon
Nhập điểm thi MOS của bạn: 1000
Xuất sắc! Bạn đã đạt điểm tối đa 🎉
```

---

## if đủ dành cho hai trường hợp

!!! note "Cú pháp if hai trường hợp"

    ```py
    if điều_kiện:
        # Thực thi nếu điều_kiện đúng
    else:
        # Thực thi nếu điều_kiện sai
    ```

Nếu `điều_kiện` có giá trị `True` thì thực thi khối lệnh ngay bên dưới.

Ngược lại, nếu `điều_kiện` có giá trị `False` thì thực thi khối lệnh của `else`.

Ví dụ:  
Ta bổ sung `else` vào hàm `evaluate_mos_score()` để xử lý trường hợp điểm MOS khác `1000`.

Theo đó, dòng lệnh 2 xét xem tham số `s` có bằng `1000` hay không:

- Nếu có thì in ra thông báo (dòng lệnh 3).
- Ngược lại, nếu khác `1000` thì in ra thông báo khác (dòng lệnh 5).

```py linenums="1" hl_lines="4-5"
def evaluate_mos_score(s):
    if s == 1000:
        print('Xuất sắc! Bạn đã đạt điểm tối đa 🎉')
    else:
        print('Chưa thể xác định bạn đậu hay rớt 🤔')


if __name__ == '__main__':
    score = int(input('Nhập điểm thi MOS của bạn: '))
    
    # Gọi hàm
    evaluate_mos_score(score)
```

Chạy đoạn mã trên và nhập vào `691`, kết quả như sau:

```pycon
Nhập điểm thi MOS của bạn: 691
Chưa thể xác định bạn đậu hay rớt 🤔
```

---

## if đủ dành cho ba trường hợp trở lên

!!! note "Cú pháp if ba trường hợp"

    ```py
    if điều_kiện_1:
        # Thực thi nếu điều_kiện_1 đúng 
    elif điều_kiện_2:
        # Thực thi nếu điều_kiện_2 đúng
    ...

    elif
        ...
    else:
        # Thực thi đối với các trường hợp còn lại
    ```

Cấu trúc if này xử lý riêng cho từng trường hợp.
  
Ví dụ:  
Ta bổ sung `elif` để xử lý trường hợp "thi đậu", từ 700 điểm trở lên, và chỉnh sửa mã lệnh của `else` để xử lý những trường hợp còn lại.

Theo đó, dòng lệnh 4 xét xem tham số `s` có lớn hơn hoặc bằng `700` không; phần `else` dành cho các trường hợp còn lại.

```py linenums="1" hl_lines="4-8"
def evaluate_mos_score(s):
    if s == 1000:
        print('Xuất sắc! Bạn đã đạt điểm tối đa 🎉')
    elif s >= 700:
        print('Chúc mừng bạn đã đạt chứng chỉ MOS 👍')
    else:
        print('Rớt rồi 🥹')
        print('Buồn ít thôi. Hãy thử lại lần nữa 💪')


if __name__ == '__main__':
    score = int(input('Nhập điểm thi MOS của bạn: '))

    # Gọi hàm
    evaluate_mos_score(score)
```

Chạy đoạn mã trên và nhập vào `691`, kết quả như sau:

```pycon
Nhập điểm thi MOS của bạn: 691
Rớt rồi 🥹
Buồn ít thôi. Hãy thử lại lần nữa 💪
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/191uCIGNbu8wpmDiObg0MFUvKTpwmdvkM?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/conditional-statement-if.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cấu trúc điều kiện <br> câu lệnh điều kiện | conditional statement |
| trường hợp | case |