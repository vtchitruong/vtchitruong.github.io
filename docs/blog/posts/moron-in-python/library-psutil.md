---
categories:
    - Moron in Python
authors: [mrschool]
date: 2025-01-17
---

# Xem thông tin của hệ thống bằng Python

![psutil thumbnail](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9E9kqgVDK2JAZtHJA/root/content){ loading=lazy align=left width=360 }

Thư viện `psutil`, viết tắt của "*process and system utilities*", giúp lấy thông tin của hệ thống như tình trạng CPU, bộ nhớ và các tiến trình đang chạy.

<br>
<br>
<br>
<br>
<br>
<br>

<!-- more -->

## Một số tính năng của psutil

- Kiểm tra tỷ lệ và thời gian sử dụng CPU cũng như bộ nhớ RAM.
- Liệt kê thông tin của các tiến trình đang chạy, bao gồm tên và tình trạng chiếm dụng CPU và bộ nhớ RAM của tiến trình.
- Truy xuất các thông tin về phân vùng đĩa.

## Cài đặt

Cài đặt thư viện `psutil` bằng lệnh sau:

```ps1
pip install psutil
```

## Khai báo thư viện

``` py linenums="1"
import psutil as pu
```

## Liệt kê các tiến trình

Đoạn mã sau minh hoạ thao tác liệt kê các tiến trình mà chiếm trên 100 MB bộ nhớ RAM:

``` py linenums="18"
    for proc in pu.process_iter():
        try:
            # Chỉ in các tiến trình chiếm bộ nhớ > 100 MB
            if float(proc.memory_info().rss / (1024 ** 2)) > 100:
                pid = proc.pid
                name = proc.name() or 'N/A'
                cpu = f'{proc.cpu_percent(interval=0.1):.2f} %' or 'N/A'
                memory_usage = f'{proc.memory_info().rss / (1024 ** 2):.2f} MB' or 'N/A'
                user = proc.username() or 'N/A'

                print(f'{pid:<10} {name:<30} {cpu:<12} {memory_usage:<10} {user:<20}')
        except (pu.NoSuchProcess, pu.AccessDenied, pu.ZombieProcess):
            pass
```

Output:

![Thông tin CPU, RAM và các tiến trình](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9FE0qgU4c5iNUOqaA/root/content){ loading=lazy }

## Mã nguồn

Code đầy đủ được đặt tại:

1. [GitHub](https://github.com/vtchitruong/python-libraries/blob/main/psutil/cpu_ram_checking.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1dc5rt4dBnh6GZVeZ7-8gb8S1WUxzB4Rw?usp=sharing){:target="_blank"}