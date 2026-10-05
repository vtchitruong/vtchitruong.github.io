---
icon: octicons/image-24
grade: "lớp 10"
grade_url: "/grade-10/grade-10-index/"

level: "phổ thông"
level_url: "/grade-10/grade-10-index/"

difficulty: "easy"
updated: "05/10/2026"
---

# Tổng quan về đồ họa máy tính

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về:
    
    - Hai loại đồ họa máy tính là bitmap và vector.
    - Phần mềm đồ họa.

## Khái niệm

Trong khoa học máy tính, đồ họa được chia thành **hai loại định dạng** chính dựa trên cách thức lưu trữ và biểu diễn dữ liệu: **đồ họa bitmap** và **đồ họa vector**.

Bảng sau đây so sánh đồ họa bitmap và đồ họa vector:

| Đặc điểm | Hình bitmap | Hình vector |
| :--- | :--- | :--- |
| Nguồn gốc cấu tạo | Được tạo thành từ **lưới các điểm ảnh** (pixel) cố định. | Được tạo thành từ **các đối tượng toán học** như đường thẳng, đường cong, đa giác. |
| Phụ thuộc độ phân giải | Chất lượng ảnh gắn liền với độ phân giải ban đầu. | Hình ảnh tự động tính toán lại theo tỷ lệ hiển thị. |
| Co giãn kích thước | Khi phóng to có thể sẽ gây hiện tượng **vỡ hình, nhòe nét**. | Khi phóng to hoặc thu nhỏ vẫn **giữ nguyên độ sắc nét**. |
| Thao tác xử lý | Chỉnh sửa trên từng pixel. | Chỉnh sửa các đường nét, hình khối, bố cục và màu sắc theo toán học. |
| Định dạng tập tin phổ biến | `JPEG`, `PNG`, `BMP`, `TIFF`, `GIF`, `WEBP` | `SVG`, `AI` (Adobe Illustrator), `EPS`, `CDR` |
| Dung lượng tập tin | Thường lớn. Tăng theo kích thước hình và số lượng pixel. | Thường nhẹ. Phụ thuộc vào độ phức tạp của hình khối toán học. |
| Ứng dụng thực tế | Dùng cho đối tượng có nhiều chi tiết phức tạp: ảnh chụp, tranh vẽ kỹ thuật số. | Dùng cho thiết kế đòi hỏi độ chính xác cao: logo, biểu tượng, kiểu chữ, biểu đồ, sơ đồ. |
| Khả năng chuyển đổi | Khó chuyển sang vector, dễ mất chi tiết. | Dễ dàng chuyển sang bitmap mà không mất chất lượng. |

??? info "Cơ chế chuyển đổi giữa bitmap và vector"

    <div class="grid cards" markdown>

    -   :material-vector-arrange-below:{ .lg .middle } **vector → bitmap**
        
        - **Khái niệm:** Là quá trình chuyển đổi các công thức toán học của hình vector thành mảng các **pixel** để hiển thị trên màn hình hoặc để in ấn.
        - **Đặc điểm:** Thực hiện rất nhanh, chính xác và được máy tính tự động xử lý khi xuất tập tin ra các định dạng như PNG, JPEG.

    -   :material-vector-combine:{ .lg .middle } **bitmap → vector**
        
        - **Khái niệm:** Là quá trình **dùng thuật toán phân tích lưới pixel** để tìm và tái tạo lại các đường cong, đường thẳng toán học.
        - **Đặc điểm:** Phức tạp và chỉ mang tính xấp xỉ. Với các bức ảnh chụp thực tế có hàng triệu màu, việc vector hóa sẽ làm mất chi tiết chân thực hoặc tạo ra tập tin vector rất nặng.

    </div>

---

## Phần mềm đồ họa

!!! note "Phần mềm đồ họa"

    Là các ứng dụng máy tính cung cấp công cụ giúp người dùng sáng tạo, hiệu chỉnh, xử lý và xuất bản các đối tượng hình ảnh kỹ thuật số.

Phần mềm đồ họa được ứng dụng rộng rãi trong nhiều lĩnh vực như:

- Thiết kế mỹ thuật
- Thiết kế giao diện web và ứng dụng
- Nhiếp ảnh
- Sản xuất phim và quảng cáo

Bảng sau đây liệt kê và phân loại một số phần mềm đồ họa phổ biến:

| Bản quyền | Bitmap | Vector |
| --- | --- | --- |
| Thương mại | - Adobe Photoshop<br>- Adobe Lightroom<br>- Corel PaintShop Pro | - Adobe Illustrator<br>- CorelDRAW<br>- Affinity Designer |
| Mã nguồn mở hoặc miễn phí | - GIMP<br>- Krita<br>- Paint.NET | - Inkscape<br>- Vectr |

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-E/mindmaps/computer-graphics-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đồ họa máy tinh | computer graphics |
| phần mềm đồ họa | graphics editor, graphics software |