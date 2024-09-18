---
icon: simple/bit
---

# Đơn vị đo dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về các đơn vị dùng để định lượng dữ liệu.

## Đơn vị bit

Máy tính (1) lưu trữ và xử lý dữ liệu ở **dạng nhị phân**.
{ .annotate }

1.  Loại máy tính được đề cập trong các bài học đều mặc định hiểu là máy tính điện tử.

Nghĩa là, máy tính chỉ sử dụng hai tín hiệu đại diện cho hai trạng thái khác nhau của một sự vật hoặc sự kiện, ký hiệu là `0` và `1`. Những chữ số `0` và `1` này được gọi là **bit**.  

Như vậy, một cách hình tượng, bộ nhớ máy tính có thể chia nhỏ thành nhiều ô vuông, mỗi ô là một bit, và không thể chia nhỏ hơn được nữa. Tại một thời điểm, một bit chỉ chứa một trong hai trạng thái, hoặc là `0` hoặc là `1`, chứ không chứa hai trạng thái cùng lúc.  

!!! abstract "bit"

    Đơn vị đo dữ liệu nhỏ nhất và cơ bản (nhất) là **bit** (1). Ký hiệu: **b**.
    { .annotate }

    1.  bit là viết tắt của **b** -inary dig- **it** (chữ số nhị phân).

## Đơn vị byte

Để tiện lợi và hiệu quả, người ta gom nhóm nhiều bit lại, tạo ra những đơn vị lớn hơn. Cụ thể, cứ mỗi 8 bit liên tiếp được gom thành 1 byte.  

<div>
    <iframe width="100%" height="150px" frameBorder=0 src="../bit-byte/bit-byte.html"></iframe>
</div>

!!! abstract "byte"

    Đơn vị đo dữ liệu thường dùng là **byte** (B). Ký hiệu: **B**.

Byte có thể dùng để biểu diễn:

- ký tự
- số nguyên hoặc số có phần thập phân
- kênh màu

!!! note "Lưu ý về ký hiệu"

    **B** in hoa là byte, **b** thường là bit.  

    Kích thước của tập tin và dung lượng của thiết bị lưu trữ thường ghi theo **B** -yte; trong khi đó, tốc độ đường truyền mạng thường ghi theo **b** -it.

## Các đơn vị bội của byte

Để tiện lợi hơn nữa, người ta gắn các *tiếp đầu ngữ* vào byte, như các đơn vị đo lường khác, để tạo ra các đơn vị bội của byte, liệt kê trong bảng sau:   

| Đơn vị | Ký hiệu | Quy đổi |
| --- | --- | --- |
| kilobyte | KB | 1 KB = $2^{10}$ B |
| megabyte | MB | 1 MB = $2^{10}$ KB |
| gigabyte | GB | 1 GB = $2^{10}$ MB |
| terabyte | TB | 1 TB = $2^{10}$ GB |
| petabyte | PB | 1 PB = $2^{10}$ TB |
| exabyte | EB | 1 EB = $2^{10}$ PB |
| zettabyte | ZB | 1 ZB = $2^{10}$ EB |
| yottabyte | YB | 1 YB = $2^{10}$ ZB |

??? note "Cách quy đổi khác"

    Trên thực tế, người ta còn một cách quy đổi khác, đó là **đơn vị sau** bằng $10^3$ **đơn vị trước**, thay vì $2^{10}$ như bảng trên. Chẳng hạn:   

    1 kilobyte = 1,000 byte  
    1 megabyte = 1,000 kilobyte = 1,000,000 byte  
    1 gigabyte = 1,000 megabyte = 1,000,000 kilobyte[^1]

    [^1]: Tham khảo thêm về quy đổi đơn vị tại [Units of measurement for storage data](https://www.ibm.com/docs/en/storage-insights?topic=overview-units-measurement-storage-data)

    Vì các nhà sản xuất thiết bị lưu trữ tính theo cách này, cộng thêm vài lý do khác, nên dung lượng của thiết bị lưu trữ mà máy tính nhận biết sẽ có sự chênh lệch với dung lượng ghi trên bao bì sản phẩm.  

    Trong các chương trình học ở Việt Nam, bạn nên sử dụng $2^{10}$ để quy đổi.

## Sơ đồ tóm tắt nội dung

{!grade-10/topic-A1/data-measurement-unit.mm.md!}
*Sơ đồ tóm tắt đơn vị đo dữ liệu*

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đơn vị đo dữ liệu | data measurement unit |