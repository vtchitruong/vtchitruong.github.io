# Đa phương tiện

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách tạo:
    
    - .

## Các cách viết mã lệnh CSS
Các cách bổ sung mã lệnh CSS trong trang web
Có ba cách thường được sử dụng để bổ sung mã lệnh CSS vào trang web.

### Cách 1. Viết CSS cho riêng mỗi phần tử HTML 

Ta viết thuộc tính style trực tiếp bên trong mỗi phần tử HTML cần định kiểu. 

``` html
<tên_thẻ style="thuộc_tính: giá_trị; thuộc_tính: giá_trị; ...">
```

Ví dụ 1:  
Định kiểu màu xanh cho một đề mục cấp 1 cụ thể nào đó.

``` html linenums="1"
<h1 style="color: #006bb0;">Đề mục cấp 1</h1>
```

??? note "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Giúp định kiểu nhanh.
        - Định kiểu đặc trưng cho một phần tử cụ thể.
    - Hạn chế:
        - Khó khăn trong việc bảo trì.
        - Khả năng tái sử dụng hạn chế.
        - Có thể khiến mã lệnh khó đọc.

### Cách 2. Viết CSS trong phần tử `<head>`

Ta viết mã lệnh CSS trong cặp thẻ `<style> </style>` và đặt `<style>` vào trong cặp thẻ `<head> </head>`. 

``` html
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

``` html linenums="1"
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
        - Phù hợp khi cần ghi đè lên các CSS tổng quát.
        - Thuận tiện trong việc bảo trì.
    - Hạn chế:
        - Khả năng tái sử dụng hạn chế.
        - Vẫn có khả năng gây ra sự lộn xộn của các phần tử.

### Cách 3. Viết CSS trong một tập tin riêng

Cách này gồm hai thao tác sau:

1. Viết tất cả mã lệnh CSS vào tập tin **.css**.
2. Trong phần tử `<head>` của tập tin **.html**, viết phần tử `<link>` liên kết đến tập tin **.css** này.

    ``` html
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

    ``` html title="portfolio.html" linenums="1"
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    ```

??? note "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Phù hợp khi cần ghi đè lên các CSS tổng quát.
        - Thuận tiện trong việc bảo trì.
    - Hạn chế:
        - Có thể đòi hỏi thêm các HTTP request, khiến làm chậm việc tải trang, nhất là khi có nhiều tập tin .css.
        - Nếu tập tin .css không tải được thì sẽ gây ảnh hưởng đến trang web.
        - Nếu không được quản lý tốt thì có thể gặp khó khi giải quyết xung đột giữa các mã lệnh CSS.

!!! note "Thứ tự ưu tiên của CSS"

    Trong trường hợp một phần tử HTML được/bị nhiều mã CSS định kiểu, thứ tự ưu tiên áp dụng CSS của trình duyệt như sau:
    
    - Ưu tiên 1: Cách 1
    - Ưu tiên 2: Cách 2
    - Ưu tiên 3: Cách 3