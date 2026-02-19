---
icon: octicons/table-24
---

# Định kiểu bảng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các bộ chọn và thuộc tính CSS dành cho các phần tử tạo bảng.

## Bộ chọn và thuộc tính dành cho đường viền

Trong CSS, việc định kiểu đường viền của bảng đòi hỏi kết hợp giữa các thuộc tính dành cho `<table>` và `<td>`, `<th>`.

Mặc định, các trình duyệt kết xuất bảng theo mô hình Separated Borders (1), tạo ra khoảng hở giữa các ô. Để tạo ra đường viền đơn nét, ta dùng thuộc tính `border-collapse`.
{ .annotate }

1.  Mô hình **Separated Borders**, tạm dịch *"đường viền tách biệt"*, là mô hình mặc định của trình duyệt.

    Mỗi ô trong bảng (`<td>` hoặc `<th>`) là một hộp riêng biệt nằm cạnh nhau.

    Vì mỗi ô có 4 đường viền riêng nên với hai ô nằm cạnh nhau, đường viền phải của ô bên trái và đường viền trái của ô bên phải sẽ tạo thành hai đường kẻ song song.

    Mặc định, luôn có một khoảng cách nhỏ giữa các ô này, thường là 2px. Đây là lý do ta thấy có những *"khe hở"* màu trắng chạy dọc ngang, hoặc thấy như thể các đường kẻ bảng là nét đôi.

    Hệ quả là khi ta tô màu đường viền cho `<td>`, bảng trông sẽ rất "dày" và thô vì các đường kẻ bị nhân đôi.

Ví dụ:  
Đoạn mã sau minh họa cách định kiểu đơn nét cho đường viền của bảng.

```css title="style.css" linenums="52"
table {
    border-collapse: collapse;
}

td {
    border: 1px solid #0097be;
}
```

## Bộ chọn và thuộc tính dành cho hàng tiêu đề

Hàng tiêu đề (phần tử `<th>`) thường chứa các thông tin mô tả cột, cho nên cần có định dạng khác biệt để tăng tính phân cấp thị giác.

Ví dụ:  
Đoạn mã sau minh họa cách định kiểu cho các ô của hàng tiêu đề.

```css title="style.css" linenums="60"
th {
    background-color: #0097be;
    height: 1.5rem;
    min-width: 80px;
}
```

## Bộ chọn và thuộc tính dành cho hàng nội dung

Để tối ưu khả năng đọc đối với các bảng có dữ liệu dày đặc, ta có thể sử dụng kỹ thuật Zebra Stripes bằng lớp giả `:nth-child()`.

!!! note "Lớp giả `:nth-child`"

    - `:nth-child(even)`: là bộ chọn lớp giả áp dụng cho các phần tử con ở vị trí chẵn (2, 4, 6, 8, v.v...).
    
    - `:nth-child(odd)`: áp dụng tương tự cho các hàng lẻ.

Ví dụ:  
Đoạn mã sau minh họa cách định kiểu màu nền xen kẽ cho các hàng chẵn và lẻ.

```css title="style.css" linenums="66"
tr:nth-child(even) {
    background-color: #e5e5e5;
}
```

## Hiệu ứng tương tác

Lớp giả `:hover` được dùng để làm cho hàng trở nên nổi bật khi người dùng di chuyển trỏ chuột trong hàng. Việc này giúp cải thiện trải nghiệm tương tác và giúp định vị chính xác hàng đang quan tâm.

Ví dụ:  
Đoạn mã sau đổi màu cho hàng khi rê chuột vào.

```css title="style.css" linenums="70"
tr:hover {
    background-color: #ceeaff;
}
```

Ngoài ra, ta có thể thêm `cursor: default;` để giữ trỏ chuột ở dạng mặc định.

[Click để xem kết xuất trang portfolio trong tab mới](css-table/portfolio.html#friendlist){:target="_blank"}