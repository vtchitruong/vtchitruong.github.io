# Tìm kiếm theo chiều rộng

## Khái quát về thuật toán BFS


BFS (Breadth-First Search) là thuật toán duyệt đồ thị để khám phá và tìm đường đi trên cấu trúc dữ liệu đồ thị hoặc cây.  

Ý tưởng chính của thuật toán là xuất phát tại một đỉnh nào đó và duyệt các đỉnh khác theo hướng lan rộng ra. Nói cách khác, thuật toán này xét hết các đỉnh kề với đỉnh hiện hành, các đỉnh kề này đều cùng cấp, trước khi xét tiếp các đỉnh khác ở cấp tiếp theo. Thuật toán này vì thế còn được gọi là **thuật toán loang**.  

Ví dụ:  
Xét cây gia phả bằng BFS, ta có trình tự xét như sau:   

```
Ông cố →
Ông bác → Ông nội → Ông chú
Các con của ông bác → Các con của ông nội (bác, ba, chú) → Các con của ông chú
Các con của bác (anh họ 1, anh họ 2) → Các con của ba (anh, mình, em) → (em họ 1, em họ 2)
```
