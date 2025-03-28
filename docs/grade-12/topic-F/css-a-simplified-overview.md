---
icon: material/language-css3
---

# Khái quát về CSS

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Khái quát về CSS.
    - Các cách tổ chức mã lệnh CSS cho trang web.

## Định nghĩa

CSS là ngôn ngữ dùng để định kiểu các phần tử HTML.

Cụ thể, CSS mô tả cách thể hiện của các phần tử HTML về các mặt như font chữ, màu sắc, kích thước, bố cục và các yếu tố trực quan khác. 

## Mục đích

Sử dụng CSS nhằm tách biệt nội dung và hình thức của trang web:

- HTML kiểm soát nội dung.
- CSS kiểm soát hình thức.

## Lợi ích

1. Linh hoạt về hình thức:

    - CSS có thể đáp ứng những yêu cầu phức tạp về hình thức, bố cục và hiệu ứng.

        Ví dụ:  
        CSS giúp tạo ra bố cục phức tạp như grid hoặc flexbox.

    - CSS giúp trang web thay đổi bố cục để có thể tương thích với nhiều loại màn hình khác nhau.

        Ví dụ:  
        CSS có media queries dùng để điều chỉnh bố cục trang web phù hợp với điện thoại, máy tính bảng và máy tính để bàn.

2. Nhất quán về hình thức:

    - CSS bảo đảm sự nhất quán về hình thức cho các trang web trong cùng một website.

        Ví dụ:  
        Ta có thể định nghĩa một cách thể hiện đồng bộ cho các phần tử HTML và áp dụng cho toàn bộ website.

3. Thuận tiện trong bảo trì và nâng cấp:

    - Khi muốn thay đổi hoặc nâng cấp, ta chỉ cần chỉnh sửa mã lệnh CSS, mà không cần quá quan tâm đến mã lệnh HTML.

        Ví dụ:  
        Màu sắc chủ đạo của website có thể thay đổi chỉ bằng cách sửa đổi một vài biến CSS, mà không làm ảnh hưởng nội dung hiện có.

4. Cải thiện hiệu suất tải trang:

    - CSS giúp giảm lượng mã HTML, từ đó cải thiện tốc độ tải trang.

        Ví dụ:  
        Mã lệnh CSS có thể được viết một lần nhưng áp dụng được cho nhiều phần tử HTML khác nhau.

## Các cách tổ chức mã lệnh CSS

### Cách 1. Viết CSS cho riêng một thẻ HTML 

Tình huống áp dụng: muốn thay đổi nhanh, thử nghiệm hoặc ghi đè các CSS tổng quát.

Thao tác thực hiện: 

1. Viết thêm thuộc tính `style` bên trong thẻ HTML cần định kiểu.
2. Viết mã lệnh CSS bên trong thuộc tính `style` này.

    ```html
    <tên_thẻ style="thuộc_tính: giá_trị; thuộc_tính: giá_trị; ...">
    ```

Ví dụ:

**Yêu cầu:** Định kiểu màu xanh cho một đề mục cấp 1 cụ thể nào đó.

**Mã lệnh:**

```html linenums="1"
<h1 style="color: #006bb0;">Đề mục cấp 1</h1>
```

??? info "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Giúp định kiểu nhanh.
        - Định kiểu đặc trưng cho một phần tử cụ thể.
    - Hạn chế:
        - Khó khăn trong việc bảo trì.
        - Khả năng tái sử dụng hạn chế.
        - Có thể làm rối mã lệnh.

### Cách 2. Viết CSS trong cặp thẻ `<head> </head>`

Tình huống áp dụng: muốn định kiểu cho một trang riêng lẻ, có thiết kế đặc trưng, hoặc muốn trang web tải nhanh, do không cần file CSS riêng.

Thao tác thực hiện:

1. Viết cặp thẻ `<style> </style>` bên trong cặp thẻ `<head> </head>`.
2. Viết mã lệnh CSS bên trong cặp thẻ `<style> </style>` này. 

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

Ví dụ:

**Yêu cầu:** Định kiểu màu xanh cho tất cả đề mục cấp 1 của trang web.

**Mã lệnh:**

```html linenums="1"
<head>
    <style>
        h1 {
            color: #006bb0;
        }
    </style>
</head>
```

??? info "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Tách rời hình thức và nội dung: hình thức nằm trong `<head>` và nội dung nằm trong `<body>`.
        - Áp dụng cho toàn trang web.
        - Không cần tập tin CSS riêng.
    - Hạn chế:
        - Không thể tái sử dụng cho các trang web khác.
        - Làm tăng kích thước trang.
        - Vẫn có khả năng gây ra sự lộn xộn của các phần tử.

### Cách 3. Viết CSS trong một tập tin riêng

Tình huống áp dụng: cách này được khuyến khích cho hầu hết các trường hợp, đặc biệt là các website lớn, có nhiều trang.

Thao tác thực hiện:

1. Tạo tập tin **.css** rỗng.
2. Viết tất cả mã lệnh CSS vào tập tin **.css** này.
3. Trong cặp thẻ `<head> </head>` của tập tin **.html**, viết thẻ `<link>` liên kết đến tập tin **.css** liên quan.

    ```html
    <link rel="stylesheet" type="text/css" href="đường_dẫn_tập_tin_CSS">
    ```

Ví dụ:

**Yêu cầu:** Định kiểu màu xanh cho tất cả đề mục cấp 1 của trang web.

**Mã lệnh:**

Các bước cụ thể của cách 3 như sau:

1. Tạo tập tin **style.css** nằm trong cùng thư mục với tập tin **.html**.

    ``` css title="style.css" linenums="1"
    h1 {
        color: #006bb0;
    }
    ```

2. Trong tập tin **.html**, viết thẻ `<link>` trong `<head> </head>` như sau:

    ```html title="portfolio.html" linenums="1"
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    ```

??? info "Ưu điểm và hạn chế"

    - Ưu điểm:
        - Khả năng tái sử dụng cao.
        - Tách biệt rõ ràng HTML và CSS.
        - Thuận tiện trong bảo trì.
    - Hạn chế:
        - Có thể đòi hỏi thêm các HTTP request, làm chậm việc tải trang, nhất là khi có nhiều tập tin CSS.
        - Nếu tập tin CSS không tải được thì sẽ gây ảnh hưởng đến trang web.
        - Nếu không quản lý tốt thì có thể gặp khó khi giải quyết xung đột giữa các mã lệnh.

!!! tip "Thứ tự ưu tiên"

    Trong trường hợp một phần tử HTML *được/bị* nhiều mã CSS định kiểu, trình duyệt web sẽ ưu tiên áp dụng mã CSS như sau:
    
    - Ưu tiên 1: Cách 1 (viết riêng cho phần tử HTML)
    - Ưu tiên 2: Cách 2 (viết trong `<head> </head>`)
    - Ưu tiên 3: Cách 3 (viết trong tập tin .css)

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/css-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bố cục | layout |
| các bảng định kiểu xếp chồng | CSS (Cascading Styling Sheets) |
| cách viết trực tiếp (cách 1) | Inline CSS |
| cách viết trong `<head> </head>` (cách 2) | Internal CSS |
| cách viết trong tập tin .css (cách 3) | External CSS | 
| định kiểu | styling |
| hình thức | appearance |
| nội dung | content |