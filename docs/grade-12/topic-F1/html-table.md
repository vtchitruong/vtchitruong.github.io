---
icon: octicons/table-24
---

# Tạo bảng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các phần tử HTML dùng để tạo bảng.

## Phần tử tạo bảng

Các phần tử dùng để tạo bảng:

| Phần tử | Công dụng |
| --- | --- |
| `<table>` | Tạo bảng |
| `<tr>` | Tạo hàng |
| `<th>` | Tạo ô của hàng tiêu đề |
| `<td>` | Tạo ô của hàng dữ liệu (các hàng còn lại) |

Ví dụ:  
Trong tập tin **portfolio.html**, ta tạo một bảng gồm 1 hàng tiêu đề, 3 hàng dữ liệu và 4 cột.

``` html title="porfolio.html" linenums="63"
    <h2>Một vài bạn bè thân thiết</h2>
    <table border="1"> <!-- (1)! -->
        <tr>
            <th>Hạng</th>
            <th>Tên</th>
            <th>Nguồn gốc</th>
            <th>Tài sản</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Bernard Arnault</td>
            <td>LVMH</td>
            <td>$211 B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Elon Musk</td>
            <td>Tesla, SpaceX</td>
            <td>$180 B</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Bill Gates</td>
            <td>Microsoft</td>
            <td>$104 B</td>
        </tr>
    </table>
```
{ .annotate }

1.  `border="1"` giúp vẽ thêm đường viền dày 1 pixel xung quanh bảng và xung quanh mỗi ô. Nếu không có thuộc tính `border`, bảng sẽ không có đường viền nào cả.

    Nếu muốn *vẽ* đường viền đẹp hơn, ta phải nhờ đến CSS, được đề cập trong những bài sau. 

[Click để xem kết xuất trang portfolio trong tab mới](html-table/portfolio.html#end){:target="_blank"}

## Thuộc tính của bảng

Để thêm phần *linh hoạt* cho bảng, ta có thể sử dụng các thuộc tính sau:

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `border` | Đường viền |
| `cellspacing` | Khoảng cách giữa các ô |
| `cellpadding`  | Khoảng cách từ nội dung đến các đường viền của ô |
| `colspan="4"` | Số ô gộp vào trên cùng một hàng. Ví dụ: gộp 4 ô |
| `rowspan="2"` | Số ô gộp trên cùng một cột. Ví dụ: gộp 2 ô |
| `width="75%"` | Chiều rộng chiếm 75% |
| `height="50px` | Chiều cao 50 pixel |
| `bgcolor` | Màu nền |
| `align` | Căn lề bảng với trang hoặc căn lề nội dung bên trong một hàng hoặc ô |

!!! tip "Lưu ý về định dạng bảng"

    Trên thực tế, người ta không định dạng bảng những thuộc tính HTML này, thay vào đó sử dụng CSS.

## Sơ đồ tóm tắt nội dung

{!grade-12/topic-F/html-table.mm.md!}
*Sơ đồ tóm tắt cách tạo bảng*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảng | table |
| hàng | row |
| ô của hàng tiêu đề | header cell |
| ô của hàng dữ liệu | data cell |