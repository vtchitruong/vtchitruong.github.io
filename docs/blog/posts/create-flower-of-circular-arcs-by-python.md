---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-12-16
---

# Vẽ hoa từ các cung tròn bằng Python

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV87CgUbJkLnJ2zp1Jm5B_X_Sj3bV9V03_zevHIzk9OncHINiG6Npm22BSv3am6l3nFvj5F_vKxqoOCYkMFDE08WCAwfCIuFtOzxnUN64rdPttXIdqzQQ=w360){ align=left }
Tiếp tục thú vui tao nhã *chơi hoa* bằng code, bài viết này hướng dẫn cách tạo hình bông hoa từ các cung tròn. Cụ thể, mỗi cánh hoa được dựng nên từ hai cung.

Hoa này cũng chưa biết nên gọi là gì cho đúng, bởi nó phảng phất một chút hoa cúc và một chút hoa đồng tiền.
</div>

*Cập nhật: 25.01.2024*

<!-- more -->

<br>

## Cài đặt

Xem hướng dẫn cài đặt và khai báo thư viện [tại đây](create-overlapping-circles-by-python.md/#khởi-tạo){:target="_blank"}.

## Khởi tạo

Thiết lập độ dày và màu vàng cho nét vẽ.

``` py linenums="7"
p.width(3)

p.color('#ffeb0f')
```

## Tiến hành vẽ

Đầu tiên, ta vẽ cung tròn 90°, tức ¼ đường tròn, để tạo **nét dưới** của cánh hoa.

``` py linenums="13"
    p.circle(radius=200, extent=90)
```

Tiếp theo, xoay bút vẽ về hướng trái 100° rồi tạo **nét trên** của cánh hoa, cũng là một cung tròn 90°.

``` py linenums="16"
    p.left(100)
    p.circle(radius=200, extent=90)
```

Để vẽ cánh hoa tiếp theo, ta lại cho bút vẽ rẽ trái 10°. Và bằng một cách nào đó, ta thấy cần phải đặt các thao tác trên vào vòng lặp `for` 36 lần nhằm tạo nên 36 cánh hoa.

Output như sau:

![Image title](https://lh3.googleusercontent.com/FDMIiqN4JIwXfhultC5pvrpIaKWZfGVR6RGPIsNUgO9f3B20xmMvjG6aqBaaqB5xxFoqvU7Z_dIc75j2lm6Ma_Oy9azd9YZpud28RwyLNmFKvRUoda1ExgurJYRVPwMPjGkhSMQDsbc=w600){ loading=lazy }

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Turtle/blob/main/Flowers/flower_circle.py){:target="_blank"}.
