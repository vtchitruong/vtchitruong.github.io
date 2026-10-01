---
icon: simple/bit
grade: "lớp 10"
grade_url: "/grade-10/grade-10-index/"

level: "phổ thông"
level_url: "/grade-10/grade-10-index/"

difficulty: "easy"
updated: "29/09/2026"
---

# Đơn vị đo dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về các đơn vị dùng để định lượng dữ liệu.

## bit

!!! note "bit"

    Đơn vị đo dữ liệu **nhỏ nhất** và cơ bản nhất là **bit** (1).
    { .annotate }

    1.  bit là viết tắt của **b** -inary dig- **it** (chữ số nhị phân).

    Ký hiệu: **b** (viết thường).

??? info "Giải thích thêm về bit"

    Máy tính (1) lưu trữ và xử lý dữ liệu ở **dạng nhị phân**.
    { .annotate }

    1.  Loại máy tính được đề cập trong các bài học đều mặc định hiểu là **máy tính điện tử**.

    Về mặt bản chất phần cứng, máy tính sử dụng hai mức tín hiệu điện áp (cao / thấp) hoặc trạng thái đóng / mở của linh kiện bán dẫn để đại diện cho hai trạng thái `0` và `1`. Mỗi chữ số `0` hoặc `1` này được gọi là một **bit**.

    Một cách hình tượng, bộ nhớ máy tính có thể chia nhỏ thành nhiều ô vuông, mỗi ô là một **bit**, và không thể chia nhỏ hơn được nữa.

    Tại một thời điểm, một **bit** chỉ chứa một trong hai trạng thái, hoặc là `0` hoặc là `1`, chứ không chứa hai trạng thái cùng lúc.  

---

## byte

Đơn vị **byte** được tạo thành bằng cách gom nhóm 8 bit liên tiếp lại với nhau.

<div>
    <iframe width="100%" height="150px" frameBorder=0 src="../images/bit-byte.html"></iframe>
</div>

!!! note "byte"

    Đơn vị đo dữ liệu thường dùng là **byte**.

    1 byte = 8 bit

    Ký hiệu: **B** (viết hoa).

??? info "Giải thích thêm về byte"

    Byte có thể dùng để biểu diễn:

    - **Ký tự**: tùy theo bảng mã mà mỗi ký tự có thể chiếm 1 byte, 2 byte hoặc nhiều hơn trên bộ nhớ.
    - **Số nguyên** hoặc **số thực**: tùy theo độ lớn hoặc độ chính xác mà một số có thể chiếm 1 byte, 2 byte, 4 byte hoặc 8 byte trên bộ nhớ.
    - **Kênh màu**: trong hệ màu RGB, mỗi kênh màu (R, G hoặc B) chiếm 1 byte. Mỗi điểm ảnh gồm 3 kênh màu sẽ chiếm 3 byte trên bộ nhớ. 

??? info "Phân biệt ký hiệu B và b"

    | | byte | bit |
    | --- | --- | --- |
    | Ký hiệu | **B** viết hoa | **b** viết thường |
    | Công dụng | Dùng để chỉ **dung lượng** như: kích thước tập tin, dung lượng RAM, đĩa cứng, v.v. | Dùng để chỉ **tốc độ truyền dữ liệu** của mạng máy tính |

---

## Các đơn vị khác

Người ta gắn thêm các *tiếp đầu ngữ* vào byte để tạo ra các đơn vị bội như sau: 

| Đơn vị | Ký hiệu | Quy đổi theo lũy thừa cơ số 2 | Giá trị tương đương |
| --- | --- | --- | --- |
| kilobyte | KB | $1\text{ KB} = 2^{10}\text{ B}$ | $1024\text{ B}$ |
| megabyte | MB | $1\text{ MB} = 2^{10}\text{ KB}$ | $1024\text{ KB}$ |
| gigabyte | GB | $1\text{ GB} = 2^{10}\text{ MB}$ | $1024\text{ MB}$ |
| terabyte | TB | $1\text{ TB} = 2^{10}\text{ GB}$ | $1024\text{ GB}$ |
| petabyte | PB | $1\text{ PB} = 2^{10}\text{ TB}$ | $1024\text{ TB}$ |
| exabyte | EB | $1\text{ EB} = 2^{10}\text{ PB}$ | $1024\text{ PB}$ |
| zettabyte | ZB | $1\text{ ZB} = 2^{10}\text{ EB}$ | $1024\text{ EB}$ |
| yottabyte | YB | $1\text{ YB} = 2^{10}\text{ ZB}$ | $1024\text{ ZB}$ |

??? info "Chuẩn quy đổi thập phân (SI) vs nhị phân (IEC)"

    Trên thực tế, tồn tại hai chuẩn quy đổi song song:

    1. **Chuẩn thập phân (chuẩn SI)** dùng cơ số 10:
    
        $1\text{ KB} = 1000\text{ B} = 10^3\text{ B}$

        Các nhà sản xuất thiết bị lưu trữ sử dụng cách tính này để ghi bao bì sản phẩm. Chẳng hạn như: đĩa cứng 1 TB = 1,000,000,000,000 byte.
    
    2. **Chuẩn nhị phân (chuẩn IEC)** dùng cơ số 2:
    
        $1\text{ KiB} = 1024\text{ B} = 2^{10}\text{ B}$
       
        Tên chuẩn đầy đủ là: Kibibyte (KiB), Mebibyte (MiB), Gibibyte (GiB), v.v..

        Hệ điều hành Windows tính toán theo cơ số 2 (tức 1024) nhưng lại ghi lầm ký hiệu thành KB, MB, GB, v.v.. Đây là lý do một đĩa cứng 1 TB khi cắm vào máy tính, Windows chỉ hiển thị khoảng 931 GB.

    Tham khảo thêm về quy đổi đơn vị tại [Units of measurement for storage data](https://www.ibm.com/docs/en/storage-insights?topic=overview-units-measurement-storage-data)

    Trong các chương trình học ở Việt Nam, bạn nên sử dụng $2^{10} = 1024$ để quy đổi. 

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/data-measurement-unit.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đơn vị đo dữ liệu | data measurement unit |