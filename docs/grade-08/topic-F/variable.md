---
icon: material/variable
---

# Sử dụng biến

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách sử dụng biến trong Scratch.

## Biến

## Khái niệm

Trong lập trình, **biến** là đại lượng dùng để **lưu trữ** dữ liệu.

Dữ liệu của biến **có thể thay đổi** trong quá trình thực hiện chương trình.

Một chương trình thường có nhiều biến.

## Kiểu dữ liệu

Trong Scratch, **giá trị của một biến** có thể thuộc một trong những **kiểu dữ liệu** sau:

- số
- chuỗi ký tự
- logic

Ví dụ:

- Khi ta gán `123` cho biến, Scratch sẽ hiểu đó là một số để thực hiện các phép toán.
- Khi ta gán `xin chào` cho biến, Scratch sẽ hiểu đó là một chuỗi ký tự.
- Khi tác gán `<5 > 3>`, Scratch sẽ lưu chuỗi ký tự `"true"` hoặc `"false"` và hiểu đó là các giá trị logic đúng hoặc sai.

## Phạm vi

Trong Scratch, **phạm vi của một biến** có thể là:

- **chung** cho tất cả nhân vật
- **riêng** cho một nhân vật

Khi tạo biến, Scratch có thể sẽ hỏi "For all sprites" hay "For this sprite only".

## Chương trình ví dụ

### Yêu cầu

Tạo chương trình Scratch tính chỉ số khối cơ thể theo công thức:

$BMI = \frac{cân nặng}{{chiều cao}^2}$

### Thuật toán

Trước khi tạo chương trình, ta cần xác định thuật toán như sau:

``` mermaid
flowchart TD
    classDef roundedStyle fill:#c6f0ff,stroke:#c6f0ff,stroke-width:1px,rx:30px,ry:30px;

    b1("Tạo 3 biến: can_nang, chieu_cao, bmi"):::roundedStyle
    b2("Yêu cầu người dùng nhập cân nặng (đơn vị kilogram) và lưu giá trị vào biến can_nang"):::roundedStyle
    b3("Yêu cầu người dùng nhập chiều cao (đơn vị mét) và lưu giá trị vào biến chieu_cao"):::roundedStyle
    b4("Cho máy tính tính chỉ số BMI theo công thức và lưu kết quả vào biến bmi"):::roundedStyle
    b5("Cho Mèo nói ra kết quả BMI"):::roundedStyle

    b1 --> b2 --> b3 --> b4 --> b5
```