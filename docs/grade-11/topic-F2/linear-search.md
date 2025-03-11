---
icon: material/table-search
---

# Tìm kiếm tuần tự

!!! abstract "Tóm lược nội dung"

    Bài này trình bày bài toán tìm kiếm và thuật toán tìm kiếm tuần tự.

## Đặt vấn đề

Nhu cầu về thông tin của con người là thiết yếu, trong khi lượng dữ liệu lưu trữ trên các hệ thống là rất lớn. Làm sao con người có thể truy xuất được ngay thông tin mình cần trong bể thông tin rộng lớn đó?

## Bài toán và thuật toán tìm kiếm

Một cách tổng quát, bài toán tìm kiếm đề cập đến việc xác định một hoặc nhiều đối tượng thoả điều kiện trong tập hợp.

Trong bài này, phạm vi của bài toán tìm kiếm được giới hạn trong mảng một chiều và chỉ tìm một phần tử có giá trị *k* cho trước. Cụ thể, bài toán được phát biểu như sau:

!!! note "Thuật toán tìm kiếm tuần tự"

    Dữ liệu đầu vào:

    - Mảng một chiều `A` gồm `n` phần tử đều là số nguyên.
    - Giá trị `k` cần tìm.

    Dữ liệu đầu ra:

    - Vị trí (tức chỉ số) của phần tử có giá trị `k` trong mảng `A`.

Đối với bài toán trên, có hai thuật toán cơ bản là **tìm kiếm tuần tự** và **tìm kiếm nhị phân**.

Bài học này chỉ đề cập thuật toán tìm kiếm tuần tự, hay còn gọi là **tìm kiếm tuyến tính** (1).
{ .annotate }

1.  Cả hai thuật ngữ này đều có thể được sử dụng thay thế cho nhau, trong đó **tìm kiếm tuyến tính** (linear search) được sử dụng rộng rãi hơn trong các tài liệu nước ngoài. Song bằng một cách nào đó, sách giáo khoa ở nước ta dịch là **tìm kiếm tuần tự** (sequential search).

??? info "Lợi ích và ứng dụng của thuật toán tìm kiếm"

    Tìm kiếm là hoạt động tương tác với dữ liệu mang lại nhiều lợi ích quan trọng. Nó giúp phát hiện thông tin liên quan, nâng cao hiểu biết về sự vật từ dữ liệu có sẵn và hỗ trợ việc ra quyết định.

    Các ứng dụng phổ biến của thuật toán tìm kiếm bao gồm:

    1. Tìm kiếm mẫu thông tin: từ ngữ trong tài liệu, số điện thoại trong danh bạ, tập tin trong máy tính, sách trong thư viện.
    
    2. Truy vấn cơ sở dữ liệu: khách hàng tìm kiếm sản phẩm, giá cả, khuyến mãi trên sàn thương mại điện tử.

    3. Truy hồi thông tin: bộ máy tìm kiếm giúp người dùng truy cập tài liệu hoặc trang web liên quan từ các nguồn trên mạng.
    
    4. Tối ưu hóa: tìm giải pháp tối ưu trong số các phương án khả thi, như tìm đường đi ngắn nhất hoặc tiết kiệm chi phí nhất.

    5. Phân tích dữ liệu: xác định mẫu thông tin, xu hướng, điểm tương quan trong tập dữ liệu để rút ra hiểu biết và kết luận.

    6. Phát hiện bất thường: giúp hệ thống xác định vấn đề tiềm ẩn, kích hoạt cảnh báo hoặc thực hiện hành động phù hợp.

!!! question "Hỏi chút chơi - phần 1"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../linear-search/quiz1.html">Hỏi chút chơi</iframe>
    </div>

## Thuật toán tìm kiếm tuần tự

### Ý tưởng

Hãy tưởng tượng hình ảnh tất cả lá bài đều úp, ta tìm xem một lá 3 nút (bất kỳ trong số bốn lá 3 nút) nằm ở vị trí nào.

Cách làm là lần lượt lật từng lá bài lên cho đến khi thấy được lá 3 nút.

Áp dụng cách trên cho mảng, ta lần lượt (tuần tự) so sánh từng phần tử với giá trị `k`, bắt đầu từ phần tử đầu tiên cho đến phần tử cuối cùng, khi nào "*bắt gặp*" `k` thì dừng. Cụ thể như sau:

!!! note "Thuật toán tìm kiếm tuần tự"

    Duyệt từng phần tử `A[i]` từ đầu đến cuối mảng, lặp thao tác sau:

    - Nếu `A[i]` đang duyệt mà bằng `k` thì trả về `i`, đây chính là vị trí (chỉ số) tìm thấy.
    
    Ngược lại, nếu đã duyệt hết mảng mà vẫn chưa có `i` nào trả về, đồng nghĩa không có `A[i]` nào bằng `k`, thì trả về `-1`.
    
    (`-1` là tín hiệu quy ước cho biết không tìm thấy, vì chỉ số của mảng bắt đầu từ `0`, không có chỉ số âm).

### Lưu đồ

![Lưu đồ thuật toán tìm kiếm tuần tự](images/linear-search-flowchart.svg){loading=lazy}

### Trực quan hoá

<div>
    <iframe width="100%" height="680px" frameBorder=0 src="../visualize/linear-search.html"></iframe>
</div>

### Viết chương trình

Khai báo thư viện `numpy`.

```py linenums="1"
import numpy as np
```

Viết hàm `linear_search()` để thực hiện thuật toán tìm kiếm tuần tự.

```py linenums="4"
def linear_search(A, k):
    # n là số lượng phần tử
    n = len(A)

    # Duyệt từng phần tử từ đầu đến cuối mảng
    # Nếu A[i] nào đó bằng k thì trả về vị trí i
    for i in range(n):
        if A[i] == k:
            return i

    # Trả về -1, không tìm thấy
    return -1
```

Trong chương trình chính, ta cho người dùng nhập giá trị cần tìm, rồi gọi hàm `linear_search()` ra thực hiện tìm kiếm.

Dựa vào kết quả trả về của hàm `linear_search()`, ta viết mã lệnh thông báo tìm thấy hoặc không tìm thấy.

```py linenums="18"
# Chương trình chính
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])
    
    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found_position = linear_search(Array, key)

    # Nếu kết quả trả về -1 thì thông báo không tìm thấy
    # Ngược lại, thì thông báo vị trí tìm thấy 
    if found_position == -1:
        print(f'Không tìm thấy {key}')
    else:
        print(f'Tìm thấy {key} tại vị trí {found_position}')
```

Output:

```pycon
Nhập giá trị cần tìm: 9
Tìm thấy 9 tại vị trí 4
```

Output:

```pycon
Nhập giá trị cần tìm: 6
Không tìm thấy 6
```

!!! tip "Nhận xét"
    
    Nếu `k` xuất hiện nhiều lần thì thuật toán tìm kiếm tuần tự chỉ trả về **vị trí xuất hiện đầu tiên** của `k` theo trình tự duyệt mảng.

!!! question "Hỏi chút chơi - phần 2"
    
    <div>
        <iframe style="width: 100%; height: 400px" frameBorder=0 src="../linear-search/quiz2.html">Hỏi chút chơi</iframe>
    </div>

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/linear-search.html">Sơ đồ tóm tắt</iframe>
</div>

## Mã nguồn

Các đoạn mã trong bài được đặt tại:

1. [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f2/linear-search.py){:target="_blank"}

2. [Google Colab](https://colab.research.google.com/drive/1t09XEPd79MLfHUT2LGX3KVdKByfLAeCq?usp=sharing){:target="_blank"}

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán tìm kiếm | searching problem |
| so sánh | compare |
| thuật toán tìm kiếm | searching algorithm |
| tìm kiếm tuần tự | sequential search, linear search |
| tìm thấy, không tìm thấy | found, not found |