---
icon: material/language-css3
---

# Giới thiệu CSS

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Khái quát về CSS.
    - Các cách tổ chức mã lệnh CSS cho trang web.

## Khái quát

### Định nghĩa

CSS là ngôn ngữ dùng để định kiểu các phần tử HTML. Cụ thể, CSS mô tả cách thể hiện của các phần tử HTML về các khía cạnh như font chữ, màu sắc, kích thước, bố cục và các khía cạnh trực quan khác. 

### Mục đích

Sử dụng CSS nhằm tách biệt nội dung và hình thức của trang web. CSS hướng đến việc kiểm soát hình thức, trong khi HTML kiểm soát nội dung.

### Lợi ích

1. Khả năng linh hoạt khi xây dựng hình thức 

    - CSS có thể đáp ứng những yêu cầu phức tạp về hình thức, bố cục và hiệu ứng.

        Ví dụ:  
        Ta có thể tạo ra bố cục phức tạp như grid hoặc flexbox chỉ với bằng dòng lệnh.

    - CSS giúp trang web thay đổi bố cục để có thể tương thích với nhiều loại màn hình khác nhau.

        Ví dụ:  
        Ta có thể sử dụng media queries để điều chỉnh bố cục trang web sao cho phù hợp với điện thoại, máy tính bảng và máy tính để bàn.

2. Sự nhất quán về hình thức

    - CSS giúp đảm bảo sự nhất quán về hình thức cho các trang web trong cùng một website.

        Ví dụ:  
        Ta có thể định nghĩa một cách thể hiện đồng bộ cho các phần tử HTML và áp dụng cho toàn bộ website.

3. Sự thuận tiện trong bảo trì và nâng cấp

    - Do sự chia tách về nội dung và hình thức, khi cần thay đổi và nâng cấp, nhà phát triển chỉ cần chỉnh sửa mã lệnh CSS.

        Ví dụ:  
        Ta có thể thay đổi màu sắc chủ đạo của website chỉ bằng cách sửa đổi một vài biến CSS, mà không làm ảnh hưởng nội dung hiện có.

4. Khả năng cải thiện hiệu suất tải trang

    - CSS giúp giảm lượng mã HTML, từ đó cải thiện tốc độ tải trang.

        Ví dụ:  
        Ta có thể viết mã lệnh CSS một lần nhưng áp dụng được cho nhiều phần tử HTML khác nhau.

## Các cách tổ chức mã lệnh CSS

Có ba cách tổ chức mã lệnh CSS cho trang web. Tuỳ tình huống mà ta áp dụng cho phù hợp.

### Cách 1. Viết CSS cho riêng từng phần tử HTML 


Tình huống áp dụng: muốn thay đổi nhanh, thử nghiệm hoặc ghi đè các CSS tổng quát.

Tình huống áp dụng: viết thuộc tính `style` trực tiếp bên trong phần tử HTML cần định kiểu. 

```html
<tên_thẻ style="thuộc_tính: giá_trị; thuộc_tính: giá_trị; ...">
```

Ví dụ 1:  
Định kiểu màu xanh cho một đề mục cấp 1 cụ thể nào đó.

```html linenums="1"
<h1 style="color: #006bb0;">Đề mục cấp 1</h1>
```

??? note "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Giúp định kiểu nhanh.
        - Định kiểu đặc trưng cho một phần tử cụ thể.
    - Hạn chế:
        - Khó khăn trong việc bảo trì.
        - Khả năng tái sử dụng hạn chế.
        - Có thể làm rối mã lệnh.


### Cách 2. Viết CSS trong phần tử `<head>`

Tình huống áp dụng: muốn định kiểu cho một trang riêng lẻ, có thiết kế đặc trưng, hoặc muốn trang web tải nhanh, do không cần file CSS riêng.

Thao tác thực hiện: viết mã lệnh CSS trong cặp thẻ `<style> </style>` và đặt `<style>` vào trong cặp thẻ `<head> </head>`. 

```html
<head>
    <style>
        tên_kiểu {
            thuộc_tính: giá_trị;
            thuộc_tính: giá_trị; 
            ...
        }
    </style>
</head>
```

Ví dụ 2:  
Định kiểu màu xanh cho tất cả đề mục cấp 1 của trang web.

```html linenums="1"
<head>
    <style>
        h1 {
            color: #006bb0;
        }
    </style>
</head>
```

??? note "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Tách rời hình thức và nội dung: hình thức nằm trong `<head>` và nội dung nằm trong `<body>`.
        - Áp dụng cho toàn trang web.
        - Không cần tập tin CSS riêng.
    - Hạn chế:
        - Không tái sử dụng cho các trang khác trong website.
        - Có thể làm tăng kích thước trang.
        - Vẫn có khả năng gây ra sự lộn xộn của các phần tử.

### Cách 3. Viết CSS trong một tập tin riêng

Tình huống áp dụng: cách này được khuyến khích cho hầu hết các trường hợp, đặc biệt là các website lớn, có nhiều trang.

Thao tác thực hiện:

1. Viết tất cả mã lệnh CSS vào tập tin **.css**.
2. Trong phần tử `<head>` của tập tin **.html**, viết phần tử `<link>` liên kết đến tập tin **.css** này.

    ```html
    <link rel="stylesheet" type="text/css" href="đường_dẫn_tập_tin_CSS">
    ```

Ví dụ 3:  
Các bước cụ thể của cách 3 như sau:

1. Tạo tập tin **style.css** trong cùng thư mục với tập tin **.html**.

    ``` css title="style.css" linenums="1"
    h1 {
        color: #006bb0;
    }
    ```

2. Trong tập tin **.html**, viết `<link>` trong `<head>` như sau:

    ```html title="portfolio.html" linenums="1"
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    ```

??? note "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Khả năng tái sử dụng cao.
        - Tách biệt rõ ràng HTML và CSS.
        - Thuận tiện trong bảo trì.
    - Hạn chế:
        - Có thể đòi hỏi thêm các HTTP request, làm chậm việc tải trang, nhất là khi có nhiều tập tin CSS.
        - Nếu tập tin CSS không tải được thì sẽ gây ảnh hưởng đến trang web.
        - Nếu không được quản lý tốt thì có thể gặp khó khi giải quyết xung đột giữa các mã lệnh.

!!! note "Thứ tự ưu tiên của CSS"

    Trong trường hợp một phần tử HTML được/bị nhiều mã CSS định kiểu, thứ tự ưu tiên áp dụng CSS của trình duyệt như sau:
    
    - Ưu tiên 1: Cách 1
    - Ưu tiên 2: Cách 2
    - Ưu tiên 3: Cách 3

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/css-what-is.mm.md!}
*Sơ đồ tóm tắt về CSS*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bố cục | layout |
| các bảng định kiểu xếp chồng | CSS (Cascading Styling Sheets) |
| cách viết trực tiếp (cách 1) | Inline CSS |
| cách viết trong `<head>` (cách 2) | Internal CSS |
| cách viết trong tập tin .css (cách 3) | External CSS | 
| định kiểu | styling |
| hình thức | appearance |
| nội dung | content |