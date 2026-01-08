---
icon: octicons/table-24
---

# Tạo bảng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số phần tử HTML dùng để tạo bảng.

## Phần tử tạo bảng

| Phần tử | Công dụng |
| --- | --- |
| `<table>` | Tạo bảng |
| `<tr>` (table row) | Tạo hàng |
| `<th>` (table header) | Tạo ô của hàng tiêu đề |
| `<td>` (table data) | Tạo ô của hàng dữ liệu (các hàng còn lại) |

!!! note "Quy tắc hộp trong hộp"

    1. `<table>` là phần khung ngoài cùng.
    
    2. `<tr>` (table row) là từng hàng một.
    
    3. `<th>` hoặc `<td>` là các ô nằm bên trong hàng đó.

    Không thể có một cái ô (`<td>`) nếu chưa có một cái hàng (`<tr>`)

Ví dụ:  
Đoạn mã sau tạo bảng gồm 1 hàng tiêu đề, 3 hàng dữ liệu và 4 cột.

```html title="portfolio.html" linenums="63"
    <h2>Một vài bạn bè thân thiết</h2>
    <table border="1">
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

[Click dòng này để xem kết xuất trang portfolio trong tab mới](html-table/portfolio.html#end){:target="_blank"}

!!! info "Đường viền"

    Theo mặc định, bảng HTML không hiển thị đường viền.

    Để thấy đường viền, ta thêm thuộc tính `border="1"`.

    Nếu muốn đường viền đẹp hơn, ta phải nhờ đến CSS, được đề cập trong những bài sau. 

??? info "Một số phần tử tạo bảng khác"

    Ngoài các phần tử cơ bản trên, các phần tử tạo bảng dưới đây giúp phân cấp rõ ràng hơn và tối ưu cho trình duyệt cũng như cỗ máy tìm kiếm. 

    | Phần tử | Công dụng | Vị trí |
    | --- | --- | --- |
    | `<thead>` (table head) | Gom nhóm các hàng tiêu đề | Bao bọc các `<tr>` |
    | `<tbody>` (table body) | Gom nhóm các hàng dữ liệu | Bao bọc các `<tr>` |
    | `<tfoor>` (table foot) | Gom nhóm các hàng tổng kết ở cuối bảng | Bao bọc các `<tr>` |
    | `<caption>` | Tạo chú thích cho bảng | Nằm ngay dưới `<table>` |
    | `<colgroup>` | Gom nhóm nhiều cột để định dạng | Bao bọc các `<col>` |
    | `<col>` | Thiết lập thuộc tính cho từng cột riêng biệt | Nằm trong bên trong `<colgroup>` |

---

## Thuộc tính của bảng

Để thêm phần *"linh hoạt"* cho bảng, ta có thể sử dụng các thuộc tính sau:

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `border="1"` | Đường viền. Ví dụ: đường viền dày 1 pixel |
| `cellspacing` | Khoảng cách giữa các ô |
| `cellpadding`  | Khoảng cách từ nội dung đến các đường viền của ô |
| `colspan="4"` | Số ô gộp vào trên cùng một hàng. Ví dụ: gộp 4 ô |
| `rowspan="2"` | Số ô gộp trên cùng một cột. Ví dụ: gộp 2 ô |
| `width="75%"` | Chiều rộng chiếm 75% |
| `height="50px"` | Chiều cao 50 pixel |
| `bgcolor` | Màu nền |
| `align` | Căn lề bảng với trang hoặc căn lề nội dung bên trong một hàng hoặc ô |

!!! tip "Lưu ý"

    Các thuộc tính trên giúp định dạng nhanh. Nhưng để làm cho bảng tinh tế hơn, ta cần sử dụng CSS.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/html-table.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảng | table |
| hàng | row |
| ô của hàng tiêu đề | header cell |
| ô của hàng dữ liệu | data cell |