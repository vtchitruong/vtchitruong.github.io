---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-11-14
---

# Thiết lập DNS trên PC bằng Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left width=360 }

Đã có nhiều bài viết trên mạng chỉ cách đổi DNS. Vấn đề là đổi sao cho ngầu.

Bài này hướng dẫn cách thiết lập DNS bằng mã lệnh Python, cool ngầu.
</div>

*Cập nhật: 20.01.2024*

<br>

<!-- more -->

<br>

## Khởi tạo danh sách DNS

Đầu tiên, ta khai báo danh sách DNS bằng `dictionary`.

``` py linenums="5"
my_dns = {'Cloudflare DNS': ('1.1.1.1', '1.0.0.1'),
          'Google DNS': ('8.8.8.8', '8.8.4.4'),
          'Open DNS': ('208.67.222.222', '208.67.220.220')}
```

## Thiết lập DNS

Trước hết, ta lấy tên tất cả các card mạng (interface) của máy.

``` py linenums="17"
    interface_string = subprocess.check_output('netsh interface show interface').decode('utf-8')
```

Để chạy được dòng trên, ta khai báo module `subprocess`.

``` py linenums="1"
import subprocess
```

Tách chuỗi trả về thành danh sách các dòng, mỗi dòng chứa thông tin về một interface.

``` py linenums="20"
    interface_list = interface_string.splitlines()
```

Lấy interface nào đang kết nối mạng.

``` py linenums="23"
    connected_interface = [itf for itf in interface_list if 'Connected' in itf]
```

Để lấy được tên của interface, ta cần xóa các chuỗi và khoảng trắng dư thừa.

``` py linenums="26"
    interface_name = ''
    if connected_interface:
        interface_name = connected_interface[0]
        interface_name = interface_name.replace('Enabled', '')
        interface_name = interface_name.replace('Connected', '')
        interface_name = interface_name.replace('Dedicated', '')    
        interface_name = interface_name.strip()
```

Dựa vào biến `opt` là lựa chọn do người dùng nhập vào, gán hai giá trị DNS tương ứng cho `Preferred DNS` và `Alternate DNS`.

``` py linenums="35"
    preferred_dns = ''
    alternate_dns = ''
    for i, (key, value) in enumerate(my_dns.items()):
        if i == opt - 1:
            preferred_dns = value[0]
            alternate_dns = value[1]
            break
```

Thiết lập Preferred DNS và Alternate DNS bằng cách chạy lệnh `netsh`.


``` py linenums="44"
    os.system(f'netsh interface ip set dns name="{interface_name}" static {preferred_dns}')
    os.system(f'netsh interface ip add dns name="{interface_name}" {alternate_dns} index=2')
```

Để chạy dòng lệnh trên, ta khai báo module `os`.

``` py linenums="2"
import os
```

## Chạy tập tin .py

Việc chạy chương trình đổi DNS này cần đến quyền Administrator, nên nhấn F5 ngay thì có thể không chạy được.

Thay vào đó, ta làm như sau:

Mở cửa sổ **Windows PowerShell** hoặc **Command Prompt** với quyền Administrator.

Chuyển đến thư mục chứa file Python vừa viết, rồi gõ lệnh chạy file này.

``` ps1 linenums="1"
cd D:\<thư mục chứa file .py>
python set_dns.py
```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Network/blob/main/DNS/set_dns.py){:target="_blank"}.