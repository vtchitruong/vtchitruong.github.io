---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2021-11-18
---

# Vẽ hình trăng tròn đan lưới bằng Python

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV85y89fTzNdT1a85IhCMDYejQB2FR_MwtlV9-Iwo3Io6HT9JZyUqGQhCy_R0oxN3Z3zJ-RIgV-7388TNsSOjKrhoJBgs_CvR0QryNtJp_Uf9g490epkD=w360){ align=left }

Cầm bút để vẽ cho đẹp trên giấy thực sự khó. Cho nên bạn có thể chuyển sang sống ảo, điều khiển máy tính vẽ giùm.

</div>

*Cập nhật: 25.01.2024*

<br>

<!-- more -->

<br>

Đây là ví dụ mẫu, cũng là ví dụ mở đầu cho các bài tập mang tính giải trí vẽ các hình cơ bản bằng Python. Bằng một cách nào đó, nó dễ thở hơn vẽ bằng bút rất nhiều.

## Khái quát

Để vẽ hình trong Python, ta sử dụng module `turtle`, có sẵn khi cài đặt Python.

Lúc chạy chương trình, một cửa sổ sẽ hiện ra như bức tranh ảo, bút vẽ sẽ di chuyển theo code của mình trong bức tranh để tạo hình. Bút vẽ này gọi là `turtle`, cùng tên với module.

## Cài đặt

Hoặc nếu cần, ta có thể cài đặt thư viện đồ họa Turtle như sau:

``` ps1
pip install PythonTurtle
```

Khai báo thư viện Turtle:

``` py linenums="1"
import turtle
```

## Khởi tạo

Đầu tiên, ta khai báo thư viện `turtle`.

``` py linenums="1"
import turtle
```

Tiếp theo, ta khởi tạo màn hình vẽ `s` và bút vẽ `p`.

``` py linenums="4"
s = turtle.getscreen()
p = turtle.Turtle()
```

Ta có thể thiết lập màu cho màn hình tùy ý, chẳng hạn màu đen như sau.

``` py linenums="7"
turtle.bgcolor('black') 
```

## Tiến hành vẽ

Dùng vòng lặp vẽ 50 hình tròn có bán kính 200, trong đó mỗi hình lệch nhau về bên phải 50 độ.

``` py linenums="14"
for _ in range(50):
    p.circle(200)
    p.right(50)
```

Về cơ bản, như vậy là xong. Tuy nhiên, ta có thể thiết lập thêm các thông số khác. Chẳng hạn, thay đổi độ dày của nét vẽ, tốc độ vẽ và màu của nét vẽ.

``` py linenums="10"
p.width(3)
p.speed(0)
p.color('#32cd32')
```

Tốc độ vẽ có giá trị từ 0 đến 10. Nếu tham số lớn hơn 10 hoặc nhỏ hơn 0.5 thì tốc độ sẽ được đặt thành 0. Chạy thử nghiệm thì nhận thấy 0 là nhanh nhất.

Cuối cùng, ta dừng cửa sổ lại để chiêm ngưỡng *tác phẩm*.

``` py linenums="18"
p.screen.mainloop()
```

Nếu không có lệnh này, cửa sổ sẽ đóng ngay khi vẽ xong.

Output như sau:

![Image title](https://lh3.googleusercontent.com/zkfen52HfHD2cvLSkcESb4w-69mzv7L7DytJWPM37_KcjxrEgnX8cPfpWLNQyjYGSNMZSeWsPtNiOVzvLDrFFKZGPVPwYWACHxLu3yOirgadXdUOx-QoZM-OUbixkahgbFBq6YshG80=w600){ loading=lazy }

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Turtle/blob/main/Overlapping_circles/overlap_circles.py){:target="_blank"}.