---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2024-02-17
---

# Tự động click chuột bằng Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left width=360 }

Nếu mình cần điều khiển chuột trong khi lại bận tay hoặc phân tâm việc khác thì nên ứng phó bằng cách nào? Nếu những thao tác chuột cứ lặp đi lặp lại quá đơn điệu thì mình nên làm sao cho đỡ chán và hiệu quả hơn?

Có ít nhất hai phương tiện để giải quyết.

</div>

<!-- more -->

<br>
<br>

Đó là, hoặc AutoIT cho truyền thống, hoặc Python cho đúng trend.

## Khái quát

**AutoIt v3** là ngôn ngữ kịch bản (scripting language, có thể hiểu là thiên về thông dịch hơn biên dịch) tương tự như BASIC, dùng để tự động hóa các thao tác trên Windows.

Tương ứng như vậy trong Python, ta sử dụng **PyAutoGUI**, là thư viện cho phép điều khiển chuột và bàn phím cũng như thực hiện những thao tác tự động khác.

## Cài đặt

=== "AutoIT"

    Tải tập tin cài đặt tại [https://www.autoitscript.com/site/autoit/downloads/](https://www.autoitscript.com/site/autoit/downloads/){:target="_blank"}

=== "Python"

    Cài đặt thư viện PyAutoGUI bằng lệnh

    ``` ps1
    pip install pyautogui
    ```

## Khai báo thư viện

Trong Python, ngoài thư viện **PyAutoGUI**, ta khai báo thêm thư viện **time** để dùng hàm *ngưng đọng* thời gian `sleep()`.

Ngược lại trong AutoIT, ta sử dụng hàm có sẵn luôn mà không cần khai báo gì thêm.

=== "Python"

    ``` py linenums="1"
    import pyautogui as ag
    import time
    ```

## Khai báo biến

Các biến được sử dụng gồm:

- Tọa độ `x` và `y` của vị trí click chuột
- Số lần click chuột `click_number`
- Thời gian tạm ngừng giữa hai lần click.

    Trong Python, hàm `sleep()` tính bằng giây; còn trong AutoIT, hàm `Sleep()` tính theo milli-giây.

=== "AutoIT"
    
    ``` au3 linenums="1"
    ; Position of mouse click
    Local $x = 1200
    Local $y = 640

    ; Interval between clicks in milliseconds
    Local $clickInterval = 2000

    ; Number of clicks
    Local $clickNumber = 3
    ```

=== "Python"

    ``` py linenums="13"
        # Position of mouse click
        x = 2500
        y = 1280

        # Number of clicks
        click_number = 57

        # Interval between clicks in seconds
        click_interval = 2
    ```

## Gọi hàm click tự động

Trong Python, ta *giả vờ* xử lý *cồng kềnh* hơn bằng `try ... except`.

=== "Python"

    ``` py linenums="4"
    def auto_click(x_pos, y_pos):
        try:
            ag.click(x_pos, y_pos)
            print(f'Clicked at position ({x_pos}, {y_pos})')
        except Exception as e:
            print(f'Error: {e}')
    ```

Dùng vòng lặp để chạy hàm click tự động. Mỗi lần click, in ra console thông báo về vị trí click.


=== "AutoIT"
    
    ``` au3 linenums="12"
    For $i = 1 To $clickNumber step 1
        MouseClick("left", $x, $y)
        ConsoleWrite('Clicked at position (' & $x & ', ' & $y & ')' & @CRLF)
        Sleep($clickInterval)
    Next
    ```

=== "Python"

    ``` py linenums="24"
        for i in range(click_number):
            auto_click(x, y)
            time.sleep(2)
    ```

## Một vài khác biệt

| | AutoIT | Python |
| --- | --- | --- |
| Đơn vị thời gian | milli-giây | giây |
| Tọa độ `x` và `y`| Theo kích thước 100% của **Display** trong **Settings** | Theo thực tế của màn hình hiện hành |
| Con trỏ chuột | Nhìn thấy được chuột di chuyển trên màn hình | Chỉ thấy biến mất rồi xuất hiện ở vị trí mới | 

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại:

1. [AutoIT](https://gist.github.com/vtchitruong/a2f23efc235043ee0b9434fa130db5b3){:target="_blank"}

2. [Python](https://gist.github.com/vtchitruong/1b4ab7303510c9d988dfc445066ad6a8){:target="_blank"}