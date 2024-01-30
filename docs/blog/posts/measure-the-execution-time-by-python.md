---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2022-01-02
---

# Cách đơn giản đo thời gian thực thi một hàm bằng Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left }
Đôi khi ta nổi hứng muốn biết hàm mình vừa code chạy nhanh chậm ra sao. Cách tiện lợi và nhanh nhất là sử dụng module `time` có sẵn của Python.

<br>
<br>

</div>

*Cập nhật: 29.01.2024*

<!-- more -->

<br>

## Cách thực hiện

Ta chỉ cần dùng hàm `time()` chặn ở hai đầu đoạn mã cần đo (dòng lệnh 12 và 14), rồi lấy hiệu hai giá trị này là xong.

Trong đó, hàm `time()` trả về thời điểm hiện hành, được tính theo đơn vị giây.

``` py linenums="1" hl_lines="12 14"
import time

def myFunc():
    S = 0    
    for i in range(int(1e5)):
        if i % 7:
            S += i
    return S


if __name__ == '__main__':
    start_time = time.time()
    print(f'Tổng là: {myFunc()}')
    end_time = time.time()
    
    time_taken = end_time - start_time

    print(f'Start: {start_time}')
    print(f'End: {end_time}')
    print(f'Time taken: {time_taken}')
```

Output:

``` ps1
The sum is 4285685715
Start: 1706519587.5166516
End: 1706519587.5391753
Time taken: 0.02252364158630371
```