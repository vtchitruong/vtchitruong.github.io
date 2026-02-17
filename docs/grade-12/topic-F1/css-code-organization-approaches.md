---
icon: material/language-css3
---

# Cách tổ chức mã lệnh CSS

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các cách tổ chức mã lệnh CSS cho trang web.

## Cách 1. CSS nội dòng

Nghĩa là viết mã lệnh CSS **riêng cho từng phần tử HTML**.

!!! note "Thao tác thực hiện"

    Viết thêm thuộc tính `style` ngay bên trong thẻ mở của phần tử HTML.

    ```html
    <tên_thẻ style="thuộc_tính: giá_trị; thuộc_tính: giá_trị; ...">
    ```

Ví dụ:  
Đoạn mã sau đây định kiểu màu xanh cho một đề mục cấp 1 cụ thể.

```html title="portfolio.html" linenums="1"
<h1 style="color: #006bb0;">Đề mục cấp 1</h1>
```

!!! note "Tình huống áp dụng"

    Áp dụng khi muốn:
    
    - **Thử nghiệm** nhanh
    - **Ghi đè** các định kiểu hiện có
    - Soạn thảo email HTML.

??? info "Ưu điểm và hạn chế"

    1. Ưu điểm:
        - Thực hiện nhanh chóng.
        - Có độ ưu tiên cao, dễ ghi đè các quy tắc định kiểu khác.
    2. Hạn chế:
        - Không thể thay đổi nhiều phần tử cùng lúc.
        - Khả năng tái sử dụng hạn chế.
        - Có thể làm nhiễu mã nguồn, gây khóc đọc và tăng dung lượng tập tin.

---

## Cách 2. CSS nội bộ

Nghĩa là viết mã lệnh CSS **trong cặp thẻ `<head> </head>`**.

!!! note "Thao tác thực hiện"

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
Đoạn mã sau đây định kiểu màu xanh cho tất cả đề mục cấp 1 của trang web.

```html title="portfolio.html" linenums="1"
<head>
    <style>
        h1 {
            color: #006bb0;
        }
    </style>
</head>
```

!!! note "Tình huống áp dụng"

    Áp dụng khi muốn:

    - Định kiểu cho một trang đơn lẻ, có thiết kế đặc trưng.
    - Website chỉ có một trang duy nhất.

??? info "Ưu điểm và hạn chế"

    1. Ưu điểm:
        - Tách biệt hình thức (trong `<head>`) và nội dung (trong `<body>`) một cách tương đối trong cùng một tập tin.
        - Có thể định kiểu cho nhiều phần tử cùng loại trên cùng một trang chỉ bằng một đoạn mã.
        - Không phát sinh thêm yêu cầu tải tập tin CSS từ máy chủ.
    2. Hạn chế:
        - Không thể tái sử dụng cho các trang web khác.
        - Không tận dụng được bộ nhớ đệm, trình duyệt phải tải lại toàn bộ CSS mỗi khi người dùng tải trang.
        - Nếu mã lệnh CSS quá dài thì tập tin HTML sẽ trở nên cồng kềnh và khó kiểm soát.

---

## Cách 3. CSS bên ngoài

Nghĩa là viết mã lệnh CSS **bên trong tập tin .css riêng biệt**. Đây là phương pháp tiêu chuẩn và được khuyến khích nhất.

!!! note "Thao tác thực hiện"

    1. **Tạo tập tin** có phần tên mở rộng là **.css**.
    2. Viết tất cả mã lệnh CSS vào tập tin **.css** này.
    3. Viết thẻ `<link>` bên trong cặp thẻ `<head> </head>` của tập tin **.html** để liên kết đến tập tin **.css**.

        ```html
        <link rel="stylesheet" type="text/css" href="đường_dẫn_tập_tin_CSS">
        ```

Ví dụ:  
Các bước sau đây định kiểu màu xanh cho tất cả đề mục cấp 1 của trang web.

1\. Tạo tập tin **style.css** nằm cùng thư mục với tập tin **.html**.

2\. Trong tập tin **style.css**, viết mã lệnh CSS.

```css title="style.css" linenums="1"
h1 {
    color: #006bb0;
}
```

3\. Trong tập tin **.html**, viết thẻ `<link>` trong `<head> </head>`.

```html title="portfolio.html" linenums="1"
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

!!! note "Tình huống áp dụng"

    Áp dụng khi muốn:
    
    cách này được khuyến khích cho hầu hết các trường hợp, đặc biệt là các website lớn, có nhiều trang.

??? info "Ưu điểm và hạn chế"

    1. Ưu điểm:
        - Một tập tin CSS có thể được áp dụng cho nhiều trang HTML khác nhau.
        - Trình duyệt lưu tập tin CSS vào bộ nhớ đệm, giúp các trang tiếp theo tải được nhanh.
        - Tách biệt hoàn toàn logic nội dung và logic hình thức.
        - Thuận tiện trong bảo trì, chỉ cần chỉnh sửa một tập tin CSS liên quan. 
    2. Hạn chế:
        - Trình duyệt cần thêm thời gian để tải các tập tin riêng biệt.
        - Nếu tập tin CSS không tải được thì trang web sẽ bị hiển thị dưới dạng văn bản thuần túy, không có hình thức.
        - Khi dự án có nhiều tập tin CSS, có thể xảy ra tình trạng các quy tắc định kiểu chồng chéo hoặc ghi đè lẫn nhau.

## Thứ tự ưu tiên

Trong trường hợp một phần tử HTML chịu tác động của nhiều quy tắc CSS khác nhau, trình duyệt sẽ áp dụng theo thứ tự ưu tiên từ cao xuống thấp như sau:

!!! note "Thứ tự ưu tiên"

    1. **Ưu tiên cao nhất**: CSS nội dòng (cách 1).
    2. **Ưu tiên trung bình**: CSS nội bộ (cách 2) và CSS bên ngoài (cách 3)
    
        - Hai cách này có độ ưu tiên ngang nhau.
        - **Quy tắc xếp chồng**: mã lệnh nào xuất hiện **sau** (nằm dưới, nằm gần cuối hơn) trong tập tin HTML thì sẽ được trình duyệt ưu tiên hơn.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/css-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| CSS bên ngoài (viết trong tập tin .css) | external CSS |
| CSS nội bộ (viết trong `<head> </head>`) | internal CSS |
| CSS nội dòng (viết trực tiếp) | inline CSS |