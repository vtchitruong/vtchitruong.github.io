---
categories:
    - Set up && Code down


date: 2023-10-07
---

# My post

# Hello world!

Đôi khi vì quá đam mê cái gì đó mà ta bị lầm đường lạc trôi or lạc lối. Nếu lỡ bị hút vào trận đồ và cảm thấy tuyệt vọng không lối thoát, bạn hãy học Tin học, nó sẽ cho bạn ánh sáng cuối đường hầm. Giống như nhà thám hiểm trong bài toán sau đây, anh đã sử dụng thuật toán DFS để thoát khỏi khu rừng spooky.

<!-- more -->


Đây vẫn là bài toán tìm đường cơ bản với thuật toán minh họa DFS, nói bình dân là vươn xa đến tận cùng.

Khu rừng được mô phỏng bằng một ma trận hàng và cột, trong đó các ô đánh dấu O nghĩa là nhảy vào được, còn các ô đánh dấu X là có cạm bẫy, nhà thám hiểm không đi vào được.

Nhà thám hiểm đang đứng tại một ô có đánh dấu là E. Anh phải thoát ra khỏi khu rừng bằng cách tìm đường đi đến bìa rừng, tức 1 trong 4 cạnh biên của ma trận.

Trong input dưới đây, dòng đầu tiên là kích thước hàng và cột của ma trận.

Các hàng còn lại mô tả khu rừng.

Output là tọa độ từng ô dẫn từ vị trí của nhà thám hiểm ra đến bìa rừng.


### Input
5 5
XXXXX
XEOOX
XXXOX
XOOOX
XOXXX

### Output
1 1
1 2
1 3
2 3
3 3
3 2
3 1
4 1

### Giải thích
HTML code

## Cách giải đề xuất

### Ý tưởng chính
Nhà thám hiểm sẽ sử dụng tuyệt chiêu *phân thân chi thuật*, xuất ra một bản sao của cơ thể để đi thử qua các ô khác cho đến khi ra đến bìa rừng.

Lúc đến bìa rừng thì ghi nhận ô đang đứng là ô đích, thực hiện truy ngược về ô xuất phát ban đầu.

Theo ý tưởng này, ta áp dụng thuật toán DFS như sau:

Xây dựng hàm đệ quy có tham số là ô nào đó mà nhà thám hiểm đang đứng, đặt là ô `current`.
    
    Ban đầu, xuất phát từ ô có ký tự E, đi thử qua 1 trong 4 ô liền kề.  
    
    Giả sử đi thử vào ô nằm ngay bên trên, đặt là ô `next`. Nếu ô `next` chưa đánh dấu đã ghé thăm và không có cạm bẫy (ký tự X), đồng nghĩa là đi vào được, thì đánh dấu ghé thăm ô `next`, rồi gọi đệ quy với tham số là ô `next`, tức ô `next` đóng vai trò là ô `current` để chuẩn bị duyệt tiếp theo tinh thần duyệt theo chiều sâu.

    Trường hợp cơ sở của hàm đệ quy là ô `current` nằm ngay đường biên của ma trận khu rừng, tương ứng với hàng đầu hoặc hàng cuối hoặc cột đầu hoặc cột cuối.


