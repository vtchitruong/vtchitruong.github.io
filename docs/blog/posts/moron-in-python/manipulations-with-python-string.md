---
categories:
    - Moron in Python
authors: [mrschool]
date: 2023-06-11
---

# Một vài chiêu thức với string của Python

![Python thumbnail](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9B5wUKxJOOTQJ3QKw/root/content){ loading=lazy align=left width=360 }

Bài này giới thiệu một vài cách viết mã lệnh đối với kiểu chuỗi `str` của Python, chủ yếu dựa vào những đặc trưng của ngôn ngữ này.[^1]

[^1]: Bài viết được tham khảo từ những website Python nổi tiếng.

<br>
<br>
<br>
<br>
<br>
<br>

<!-- more -->

## Chuyển đổi chuỗi thành danh sách

Ta chỉ cần dùng hàm `list()`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    s = 'Thiên lý chi hành, thủy ư túc hạ.'
    l = list(s)
    print(l)
```

Output:

``` pycon
['T', 'h', 'i', 'ê', 'n', ' ', 'l', 'ý', ' ', 'c', 'h', 'i', ' ', 'h', 'à', 'n', 'h', ',', ' ', 't', 'h', 'ủ', 'y', ' ', 'ư', ' ', 't', 'ú', 'c', ' ', 'h', 'ạ', '.']
```

## Xóa các khoảng trắng thừa trong chuỗi

Trước hết, ta chia tách các từ trong chuỗi bằng hàm `split()`.  

Sau đó, ghép nối *các mảnh* lại bằng hàm `join()`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    s = '   Băng    thanh ngọc     khiết   '
    new_string = ' '.join(s.split())
    print(new_string)
```

Output:

``` pycon
Băng thanh ngọc khiết
```

## Kiểm tra chuỗi palindrome

Đầu tiên, ta cần một thao tác phụ trợ là xử lý khoảng trắng và chữ in hoa. Sau đó dùng `slicing`, là một kỹ thuật đặc trưng của Python khi xử lý danh sách hoặc chuỗi.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    s = 'Never odd or even'

    # Xóa các khoảng trắng và viết thường
    tmp_s = (''.join(s.split())).lower()
    
    if tmp_s == tmp_s[::-1]:
        print('This is a palindrome string')
```

Output:

``` pycon
This is a palindrome string
```

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1aljeGj7ZBbW_gZ-cAQMtlXz7CrYtrv3h?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.