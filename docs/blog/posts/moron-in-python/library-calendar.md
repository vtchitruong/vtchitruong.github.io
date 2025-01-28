---
categories:
    - Moron in Python
authors: [mrschool]
date: 2025-01-15
---

# In lịch ra màn hình console bằng Python

![calendar thumbnail](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9EHOTnNKJ4NnZa75g/root/content){ loading=lazy align=left width=360 }

Thư viện `calendar` trong Python là một module cung cấp các công cụ làm việc với lịch và thực hiện những thao tác liên quan đến ngày tháng một cách thuận tiện.

<br>
<br>
<br>
<br>

<!-- more -->

## Một số tính năng của calendar

- Tạo lịch cho một tháng hoặc một năm cụ thể, hiển thị dưới dạng văn bản hoặc HTML.
- Cung cấp các hàm để lấy thông tin liên quan đến ngày tháng, kiểm tra năm nhuận, tính số ngày giữa hai mốc ngày, v.v...

## Cài đặt

`calendar` là module có sẵn trong Python nên không cần cài đặt bằng `pip`.

## Khai báo thư viện

``` py linenums="1"
import calendar as cld
```

## In lịch năm

Hàm `print_year_calendar()` dưới đây sẽ in lịch của một năm cụ thể ra màn hình console.

Trong đó, các tham số gồm:

- `year`: năm cần in. Mặc định là năm 2025.
- `width`: độ rộng của cột ngày trong mỗi tháng. Mặc định là 2.
- `lines`: số dòng của mỗi tuần trong tháng. Mặc định là 1.
- `spacing`: ký tự trống giữa các tháng. Mặc định là 6.
- `c`: số tháng trong một hàng. Mặc định là 3.

``` py linenums="4"
def print_year_calendar(year=2025, width=2, lines=1, spacing=6, c=3):
    # Tạo đối tượng lịch
    cal = cld.TextCalendar()
    
    # In lịch theo năm
    print(cal.formatyear(year, width, lines, spacing, c))
```

Output:

![Lịch năm trên màn hình console](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNr9EKqEkgvYd4VmlB2g/root/content){ loading=lazy }

## Mã nguồn

Code đầy đủ được đặt tại:

1. [GitHub](https://github.com/vtchitruong/python-libraries/blob/main/calendar/my_calendar.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1PwF7pBENGiCZ2AdD1dQxO0rf2p44uW0k?usp=sharing){:target="_blank"}