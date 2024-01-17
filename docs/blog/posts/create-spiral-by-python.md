---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-12-19
---

# Vẽ hình xoắn ốc bằng Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left width=360 }

Hình xoắn ốc là đường cong xoay quanh một điểm cố định và tăng dần khoảng cách với điểm đó. Bài viết này hướng dẫn cách tạo hình trông giống xoắn ốc, được ghép từ các lục giác.

Ý tưởng chủ yếu là vẽ các hình lục giác với kích thước tăng dần và xếp chúng lệch nhau. Đồng thời thêm mắm dặm muối bằng cách thiết lập cho các cạnh của lục giác các màu khác nhau.

<!-- more -->

<br>

## Cài đặt

Ta cài đặt thư viện đồ họa Turtle như sau:

``` ps1
pip install PythonTurtle
```

Khai báo thư viện Turtle:

``` py linenums="1"
import turtle
```

## Khởi tạo

Khởi tạo danh sách `colors` gồm 6 màu.

``` py linenums="4"
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
```

Khởi tạo màn hình với nền đen.

``` py linenums="7"
s = turtle.getscreen()
turtle.Screen().bgcolor('black')
```

## Tiến hành vẽ

Để vẽ các cạnh của lục giác theo các màu khác nhau, ta đặt màu cho bút vẽ bằng phép chia lấy dư cho 6.

``` py linenums="18"
    p.pencolor(colors[x % 6])
```

Ta cũng thiết lập độ dày cho nét vẽ tăng lên theo độ tăng dần của kích thước lục giác. Trong code dưới đây, ta sử dụng toán tử `//`, là toán tử chia lấy phần nguyên cận dưới (làm tròn xuống). Như vậy, khi vòng lặp chạy 360 lần và `// 100`, độ dày của bút vẽ tăng từ 0 đến 3.

``` py linenums="21"
    p.width(x // 100)
```

Sau đó, ta lần lượt vẽ từng cạnh của lục giác.

``` py linenums="24"
    p.forward(x)
```

Trước khi lặp lại các thao tác trên cho cạnh tiếp theo, ta cho bút vẽ *quẹo trái* một góc nào đó, chẳng hạn 59° hoặc 61°. Sở dĩ lẻ như vậy là để tạo độ lệch cho các lục giác nhằm tạo hiệu ứng xoắn ốc. Nếu cho rẽ trái 60°, ta sẽ có các lục giác xếp đều từ nhỏ đến lớn, và trông giống mạng nhện hơn, không còn hiệu ứng xoắn.

``` py linenums="27"
    p.left(61)
```

Tất cả thao tác trên được đặt vào một vòng lặp với `range` có tham số chia hết cho 6.

## Cách làm khác

Cách này sử dụng hai vòng lặp lồng nhau, trong đó vòng lặp trong vẽ hình bát giác (octagon), còn vòng lặp ngoài làm cho các bát giác lệch nhau 10 độ nhằm tạo hiệu ứng xoắn ốc.

``` py linenums="16"
for x in range(10, 120):
    # Set yellow to all edges
    p.pencolor(colors[2])

    # Set pen size from thin to thick 
    p.width(x // 100)        
    
    for _ in range(8):
        # Draw 1 edge
        p.forward(x)
        
        # Turn left by 45 degrees for octagon
        p.left(45)
    
    # Turn left by 10 degrees for spiral effect
    p.left(10)
```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Turtle/tree/main/Spiral){:target="_blank"}.