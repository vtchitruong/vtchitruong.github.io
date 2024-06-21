---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-12-08
---

# Vẽ hoa từ các hình lục giác bằng Python

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV876yM16jGYzR-Uj1a8cqCrxbEOOPtp3Ha-71W_RVFQWd8dZL2gl6c8bFJFw_cwf3oWIuUQoJKDadQ6p7_-7QOsA81GcKhCO3RRXshEOxyd3alBiY7Yy=w1200){ width=360 align=left }
Chơi hoa là một thú vui tao nhã. Vấn đề là chơi sao cho ngầu? Trả lời rằng: chơi bằng code, dùng mã lệnh để chăm hoa.

Bài viết này hướng dẫn cách ghép các lục giác quanh một tâm, cũng là gốc tọa độ, để tạo hình một bông hoa.

</div>

*Cập nhật: 26.01.2024*

<!-- more -->

<br>

Bài viết cũng nằm trong loạt bài vẽ hình học đơn giản bằng Python, phù hợp và có thể tạo cảm hứng cho học sinh phổ thông khi ban đầu làm quen ngôn ngữ.

## Cài đặt

Xem hướng dẫn cài đặt và khai báo thư viện [tại đây](create-overlapping-circles-by-python.md/#khoi-tao){:target="_blank"}.

## Khởi tạo

Thiết lập màu xanh cyan cho nét vẽ và màu đen cho nền.

``` py linenums="9"
t.color('cyan')
turtle.bgcolor('black')
```

## Tiến hành vẽ

Để vẽ lục giác, ta dùng hàm `circle()`. Tên hàm nghe như vẽ hình tròn, nhưng ta có thể tận dụng nó để vẽ một đa giác nội tiếp đường tròn, bằng cách đặt giá trị cụ thể cho tham số `steps`. Trong trường hợp lục giác, `steps` bằng 6.

Đầu tiên, ta thử vẽ hai lục giác có đỉnh nằm ở tâm và lệch nhau 100°, trong đó bán kính đường tròn ngoại tiếp là 180 pixel.

Output như sau:

![Image title](https://lh3.googleusercontent.com/oXbX0pT5sCbhnRttzVNdY85hKbjhM-WPSGAX_GCnRXcQI7jfFsk_FqF0dNtRIm5qycquZ95A3xiuly5gyXicFLqBeIwT2_GKWnZXMXkVt2KE4vFonWh4V8Nh0w_gj5DLdEnwU--RALs=w1200){ width=600 loading=lazy }

Dựa vào các đường chéo của hai lục giác, ta dễ dàng tính được góc ở tâm của phần giao nhau là 20°.

Mà một vòng tròn là 360°. Do đó ta cần đặt vào vòng lặp 18 phần giao như trên.

``` py linenums="12"
for i in range(18):
    t.circle(180, steps=6)
    t.right(100)
```

Output như sau:

![Image title](https://lh3.googleusercontent.com/lVTLDAadLPxVAyPWjPfhcpvf_1Z5-gj0-Q5DNLUebDFv14TYXEzt2S1MzAX_1wzppK92s8LY4wuIp12ZLthzpk_DfYxqlDetS4yoAyQG9vQEzupmyUBJtiPqPrZIIGN1Hs3VsXJTAP4=w1200){ width=600 loading=lazy }

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Turtle/blob/main/Flowers/flower_hexagon.py){:target="_blank"}.
