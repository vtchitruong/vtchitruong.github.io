# Phép toán trong hệ nhị phân

!!! abstract "Tóm lược nội dung"

    Bài này trình bày những phép toán dành cho số nhị phân gồm: cộng, nhân, NOT, AND, OR và XOR. 

## Phép toán số học

Phần này trình bày hai phép toán số học là **cộng** và **nhân**.

### Bảng quy ước

Giá trị của phép cộng và nhân hai bit được thể hiện trong bảng dưới đây.

| a | b | a + b | a &#215 b|
| --- | --- | --- | --- | 
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 10 | 1 |

!!! note "Cộng và nhân hai bit"
    Trong hệ nhị phân, phép toán được thực hiện tương tự như cộng và nhân trong hệ thập phân, ngoại trừ $1 + 1 = 10$.

### Cách thực hiện

Ta có thể tính toán trên giấy bằng cách xếp các toán hạng[^1] theo hàng dọc rồi thực hiện cộng hoặc nhân như trong hệ thập phân.

[^1]: Toán hạng là số hạng trong phép cộng hoặc thừa số trong phép nhân.

!!! note "Cộng và nhân theo hàng dọc"

    1. Xếp các toán hạng theo hàng dọc theo hướng từ phải qua trái.
    2. Thực hiện cộng hoặc nhân tương tự như trong hệ thập phân, tức bắt đầu từ hàng đơn vị, rồi hàng chục, hàng trăm, v.v... Các chữ số của kết quả thành phần (đối với phép nhân) và kết quả cuối cùng cũng phải được căn phải và đúng vị trí so với các chữ số của toán hạng.
    2. Trường hợp cộng hoặc nhân ra 10 hoặc 11, ta vẫn *nhớ* 1 cho phép toán của chữ số tiếp theo bên trái.

:   Ví dụ 1:  
    Trong hệ thập phân, ta biết rằng 19 + 11 = 30. Phép toán này được thực hiện trong hệ nhị phân như sau:
    <div>
        <iframe width="100%" height="90px" frameBorder=0 src="../operations-in-binary/addition.html"></iframe>
    </div>

:   Ví dụ 2:  
    Trong hệ thập phân, 21 &#215 5 = 105. Phép toán này được thực hiện trong hệ nhị phân như sau:
    <div>
        <iframe width="100%" height="172px" frameBorder=0 src="../operations-in-binary/multiplication.html"></iframe>
    </div>

## Phép toán logic

Phần này trình bày các phép toán logic gồm: **NOT**, **AND**, **OR** và **XOR**.

### Bảng chân trị

| a | b | NOT a | a AND b | a OR b | a XOR b |
| --- | --- | --- | --- | --- | --- |
| F | F | T | F | F | F |
| F | T | T | F | T | T |
| T | F | F | F | T | T |
| T | T | F | T | T | F |

!!! note "Tóm tắt các phép toán logic"

    - NOT là phép toán phủ định trạng thái hiện có.
    - AND chỉ cho kết quả True khi cả a và b đều True.
    - OR chỉ cho kết quả False khi cả a và b đều False.
    - XOR cho kết quả True khi a và b có trạng thái khác nhau.

:   Ví dụ 3:  
    <div>
        <iframe width="100%" height="114px" frameBorder=0 src="../operations-in-binary/not.html"></iframe>
    </div>

:   Ví dụ 4:  
    <div>
        <iframe width="100%" height="114px" frameBorder=0 src="../operations-in-binary/and.html"></iframe>
    </div>

:   Ví dụ 5:  
    <div>
        <iframe width="100%" height="114px" frameBorder=0 src="../operations-in-binary/or.html"></iframe>
    </div>

:   Ví dụ 6:  
    <div>
        <iframe width="100%" height="114px" frameBorder=0 src="../operations-in-binary/xor.html"></iframe>
    </div>

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-A2/operations-in-binary/operations.mm.md!}
Hình 1. Sơ đồ tóm tắt các phép toán trên hệ nhị phân

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| phép toán logic | logical operation |
| phép toán số học | arithmetic operation |
| toán hạng | operand |
| toán tử (ví dụ: `+`, `&#215`, `AND`, `OR`, v.v...) | operator |