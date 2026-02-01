# Khái quát về cây

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khái niệm chung về cây.

## Khái niệm

!!! note "Cây"

    **Cây** là cấu trúc dữ liệu phi tuyến tính dùng để biểu diễn các **mối quan hệ phân cấp giữa các phần tử**.

Trong cây:

- Mỗi **nút** là một **phần tử**.
- Mỗi **nhánh** là một **đường kết nối** giữa hai nút.

    Nhánh đại diện cho mối quan hệ phân cấp giữa một nút cha và nút con. Mỗi nhánh xuất phát từ một nút cha và dẫn đến một nút con.

---

## Các thành phần và thuộc tính

1. **Nút gốc** là nút đầu tiên của cây.

    Nút gốc không có nút cha.

2. **Nút lá** là các nút không có nút con. Nghĩa là, nút lá nằm ở cuối các nhánh.

3. **Nút trong**, hay còn gọi là nút nhánh, là nút có **ít nhất một nút con**.

    Nói cách khác, nút trong không phải là nút lá.

4. **Đường đi** từ nút X đến nút Y trong cây là một dãy các nút nối tiếp nhau, bắt đầu tại X và kết thúc tại Y.

5. **Mức** của một nút được xác định bằng **khoảng cách từ nút gốc**. Trong đó:

    - Mức của nút gốc bằng 0.
    - Mức của các nút con của nút gốc bằng 1.
    - Mức của một nút (khác gốc) bằng mức của nút cha cộng thêm 1.

6. **Chiều cao** của cây là **số cạnh nằm trên đường đi dài nhất** từ nút gốc đến nút lá.

    Nói cách khác, chiều cao của cây là mức lớn nhất của các nút lá.

    Chiều cao của một nút là số cạnh nằm trên đường đi dài nhất từ nút đó đến một nút lá.

7. **Độ sâu** của một nút là **số cạnh từ gốc đến nút đó**.

Ví dụ:  
Cho cây T như hình dưới đây.

![Cây T](./images/genealogy-tree.svg){loading=lazy}

- Nút gốc là `Ông cố`.
- Nút gốc có ba cây con: cây gốc `Ông bác`, cây gốc `Ông nội` và cây gốc `Ông chú`.
- Nút lá gồm: `Con bác 1`, `Con bác 2`, `Con anh ruột`, `Con gái`, `Con trai`, `Em ruột`, `Con chú 1` và `Con chú 2`.
- `Tôi` là một trong số các nút trong.
- Chiều cao của cây là 4.
- Độ sâu của nút `Tôi` là 3.

Bảng dưới đây giúp phân biệt chiều cao và độ sâu:

| | Chiều cao | Độ sâu|
| --- | --- | --- |
| Định nghĩa | Số cạnh trên đường đi dài nhất từ nút đang xét đến nút lá. | Số cạnh từ nút gốc đến nút đang xét. |
| Áp dụng | Nút đang xét hoặc toàn bộ cây | Nút đang xét |
| Hướng tính toán | Từ nút đang xét đi đến nút lá | Từ nút gốc đi đến đến nút đang xét |
| Nút gốc | `height(cây) == height(nút gốc)` | `depth(nút gốc) == 0` |
| Nút lá | `height(nút lá) == 0` | `depth(nút lá) == số cạnh từ nút gốc đến nút lá` |

## Một số loại cây phổ biến

- Cây nhị phân
- Cây cân bằng
- Cây biểu thức
- Cây đa nhánh

---

## Ứng dụng

Một số ứng dụng của cây bao gồm:

- Biểu diễn cấu trúc phân cấp:

    - Cấu trúc thư mục
    - Tổ chức công ty
    - Cây gia phả

- Xử lý ngôn ngữ và văn bản:

    - Cấu trúc HTML/XML
    - Sơ đồ phân tích cú pháp

- Trí tuệ nhân tạo: cây quyết định
- v.v...

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cây | tree |
| chiều cao | height |
| độ sâu | depth |
| mức | level |
| nhánh | branch |
| nút | node |
| nút cha | parent node |
| nút con | child node |
| nút gốc | root node |
| nút lá | leaf node |
| nút trong | internal node |