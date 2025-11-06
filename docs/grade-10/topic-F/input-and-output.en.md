---
icon: material/invoice-import-outline
---

# Nhập và xuất dữ liệu bản tiếng Anh

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thao tác nhập và xuất dữ liệu trong Python.

testing English version

## Khái quát

Trong lập trình, **nhập** là cách chương trình nhận dữ liệu từ người dùng, còn **xuất** là cách chương trình hiển thị thông tin ra màn hình.

## Nhập dữ liệu

Để người dùng có thể nhập dữ liệu vào chương trình, ta dùng hàm `input()`.

![Minh hoạ hàm input()](./input-and-output/input.png){loading=lazy width=300}

Ví dụ:  
Dòng lệnh 2 và 3 yêu cầu người dùng nhập vào tên đăng nhập và mật khẩu.

```py linenums="1"  hl_lines="2 3"
if __name__ == '__main__':
    username = input('Tên đăng nhập: ')
    password = input('Mật khẩu: ')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Tên đăng nhập: mrschool
Mật khẩu: 12345678
```

## Xuất thông tin

Để chương trình xuất thông tin ra màn hình, ta dùng hàm `print()`.

![Minh hoạ hàm print()](./input-and-output/print.png){loading=lazy width=300}

Từ đây về sau, ta sẽ gọi tắt là: *"in ra màn hình"* hoặc *"in ra"*.

Ví dụ:  
Dòng lệnh 5 và 6 in ra màn hình tên đăng nhập và mật khẩu mà người dùng vừa nhập. 

```py linenums="1" hl_lines="5 6"
if __name__ == '__main__':
    username = input('Tên đăng nhập: ')
    password = input('Mật khẩu: ')

    print(f'Tên đăng nhập của bạn là {username} và mật khẩu là {password}')
    print('Bạn đã bị hack 😆')
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
Tên đăng nhập: mrschool
Mật khẩu: 12345678
Tên đăng nhập của bạn là mrschool và mật khẩu là 12345678
Bạn đã bị hack 😆
```

!!! info "f-string"

    **f-string** = formatted string, tạm dịch là *chuỗi được định dạng*.
    
    f-string được dùng để chèn trực tiếp biến vào chuỗi, cụ thể:

    - `f` nằm trước chuỗi `'... chuỗi gì đó ...'`.
    - Biến được đặt trong cặp ngoặc nhọn `{ }`.

    Áp dụng f-string trong hàm `print()` là cách làm hiện đại, chuyên nghiệp và dễ đọc.

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1u5xFZD97jD0R5hm8TREJ5y5Pd0gjKzmS?usp=sharing){target="_blank"}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/input-and-output.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| dữ liệu đầu vào | input |
| thông tin đầu ra | output |