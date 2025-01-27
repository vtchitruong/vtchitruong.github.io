---
categories:
    - Moron in Python
authors: [mrschool]
date: 2021-11-26
---

# Chạy script dưới dạng command line kèm tham số

![Python thumbnail](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9B5wUKxJOOTQJ3QKw/root/content){ loading=lazy align=left width=360 }

Bài này hướng dẫn cách gọi thực thi file .py theo dạng dòng lệnh (command line) kèm nhiều tham số (argument) trong Windows PowerShell hoặc Command Prompt.

Việc này giúp bạn truyền tham số ngay trong dòng lệnh, mà không mất công chờ nhập từ hàm `input()`.

<br>
<br>

<!-- more -->

## Viết hàm

Đầu tiên, bạn viết hàm giải quyết bài toán của mình, chẳng hạn tính chỉ số khối cơ thể BMI.

```py linenums="3"
def bmi(w, h):
    b = w / (h**2)
    print(f'Your BMI is {b:.2f}')
```

## Viết chương trình chính

Sau đó, bạn viết chương trình chính, bắt đầu bằng dòng lệnh `if __name__ == '__main__':`, và truyền tham số vào các biến tương ứng. Danh sách tham số có chỉ số bắt đầu từ `1`.

```py linenums="8"
if __name__ == "__main__":
    weight = int(sys.argv[1])
    height = float(sys.argv[2])
    bmi(weight, height)
```

Sở dĩ tham số có chỉ số bắt đầu từ 1, mà không phải từ 0, là vì tham số `sys.argv[0]` chính là tên của script sẽ thực thi, ở đây là `bmi.py`.

Đừng quên thêm thư viện `sys`.

```py linenums="1"
import sys
```

Lưu chương trình, đặt tên là **bmi.py**.

## Chạy script

Trong cửa số Command Prompt hoặc Windows PowerShell, bạn chuyển tới thư mục chứa file **bmi.py**, rồi gõ lệnh chạy script này kèm theo hai tham số cân nặng 70 kg và chiều cao 1.89 m.

```pycon
PS C:\> cd D:\python\test
PS D:\python\test> python bmi.py 70 1.89
Your BMI is 19.60
```