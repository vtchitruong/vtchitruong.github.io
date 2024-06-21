---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2023-11-17
---

# Vẽ bàn cờ vua bằng Python

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV87AuilmZngr7ttCUvjCOsVTLiXKnizVA1ie0i8-Tvt71gaJwZ1Gy1yhszH_Z7yNiE0g-Qjausdrt5j3eVO2Od_4Ix8DX78ei6_E0rljVE5AQbbFuZog=w1200){ width=360 align=left }

Với chương trình phổ thông, ta có thể biểu diễn bàn cờ vua bằng mảng hai chiều, trong đó các phần tử `0` và `1` đan xen lẫn nhau.

Để thêm phần màu mè, bài viết này hướng dẫn cách vẽ hình bàn cờ vua, thay vì chỉ mô phỏng bằng những con số.

</div>

*Cập nhật: 30.01.2024*

<!-- more -->

## Cài đặt

Xem hướng dẫn cài đặt và khai báo thư viện [tại đây](create-overlapping-circles-by-python.md/#khoi-tao){:target="_blank"}.

## Khởi tạo

Bên cạnh việc khởi tạo biến `s` cho màn hình (screen) và biến `p` cho bút vẽ (pen) như những bài trước, ta có thể khởi tạo kích thước của màn hình hiển thị kết quả.

``` py linenums="58"
    # set screen size
    s.setup(600, 600)
```

## Tiến hành vẽ

Đầu tiên, ta tạo hàm vẽ một ô vuông.

Hàm này dùng `for` để lặp 4 lần, tương ứng với 4 cạnh của một ô vuông, bắt đầu từ cạnh phải → cạnh trên → cạnh trái → cạnh dưới.

Ngoài ra, cạnh dưới còn được vẽ kéo dài thêm để chuẩn bị cho ô vuông tiếp theo.

``` py linenums="8"
def draw_cell():
    for e in range(4):
        # move the pen forward 50 units
        p.forward(50)

        # turn left for the next edge
        p.left(90)
    
    # move the pen forward 50 units after finish a cell
    p.forward(50)
```

Sau đó, ta dùng `for` để lặp 8 lần, ứng với 8 ô vuông của cùng một hàng.

Trong hàm này, ta thiết lập trước màu đen hoặc trắng cho mỗi ô, bằng cách dựa vào chỉ số hàng và chỉ số cột của ô. 

``` py linenums="21"
def draw_row(r):
    for c in range(8):
        # change color for each cell
        if (r + c) % 2 == 0:
            cell_color = '#ffaa00' # can be 'black'
        else:
            cell_color = '#f2f2f2' # can be 'white'
        
        # set fill color for the cell
        p.fillcolor(cell_color)
        p.pencolor('#ffaa00')

        # start filling the cell with cell_color
        p.begin_fill()

        # call the draw_cell function
        draw_cell()
        p.end_fill()
```

Cuối cùng, ta lại dùng `for` để lặp 8 lần, ứng với 8 hàng của bàn cờ.

Trong hàm này, ta dùng phương thức `setpos()` để định vị trí xuất phát của bút vẽ `p` tương ứng với từng hàng. Bên cạnh đó, thêm `-200` để làm cho bàn cờ nằm giữa màn hình `s`.

``` py linenums="42"
def draw_board():
    for r in range(8):

        # lift up the pen, not to draw    
        p.up()

        # set the position of the pen
        p.setpos(-200, 50 * r - 200)

        # start drawing again
        p.down()

        draw_row(r)
```

Output như sau:

![Image title](https://lh3.googleusercontent.com/pw/ABLVV84lyT6yyMTNPJikIaLkOiiOfA5Hb64b4ilCWMvA6lAJAtwzD30lY_D3rJyOMwg1poEpDknQlIEDRXl3_qHaQuLQLIbbxiIisecRk9gAT66WFCwDtb-2=w1200){ width=600 loading=lazy }

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Turtle/blob/main/ChessBoard/chessboard.py){:target="_blank"}.