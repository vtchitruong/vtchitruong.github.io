---
icon: material/table-search
---

# Tìm kiếm tuần tự

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Bài toán tìm kiếm
    - Thuật toán tìm kiếm tuần tự

## Khái quát

### Đặt vấn đề

Nhu cầu về thông tin của con người là thiết yếu, trong khi lượng dữ liệu lưu trữ trên các hệ thống là rất lớn. Làm sao con người có thể truy xuất được ngay thông tin mình cần trong bể thông tin rộng lớn đó?

### Bài toán tìm kiếm

Một cách tổng quát, **bài toán tìm kiếm** đề cập đến việc **xác định một hoặc nhiều đối tượng thoả điều kiện** trong tập hợp.

Trong bài này, giới hạn của bài toán tìm kiếm như sau:

- Phạm vi tìm kiếm là mảng một chiều.
- Đối tượng tìm kiếm là chỉ một phần tử có giá trị *k* cho trước.

Cụ thể, bài toán tìm kiếm được phát biểu như sau:

| Đầu vào | Đầu ra |
| --- | --- |
| - Mảng một chiều `A` gồm `n` phần tử đều là số nguyên.<br>- Giá trị `k` cần tìm. | - Chỉ số của phần tử có giá trị `k` hoặc `-1` nếu không tồn tại `k`. |

### Thuật toán tìm kiếm

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

---

## Thuật toán tìm kiếm tuần tự

### Ý tưởng

Hãy tưởng tượng hình ảnh tất cả lá bài đều úp. Ta cần tìm xem một lá 3 nút (bất kỳ trong số bốn lá 3 nút) nằm ở vị trí nào.

Cách làm là lần lượt lật từng lá bài lên cho đến khi thấy được lá 3 nút.

Áp dụng cách trên cho mảng, ta lần lượt (tuần tự) so sánh từng phần tử với giá trị `k`, bắt đầu từ phần tử đầu tiên cho đến phần tử cuối cùng, khi nào "*bắt gặp*" `k` thì dừng. Cụ thể như sau:

1. Duyệt từng phần tử `A[i]` từ đầu đến cuối mảng, lặp thao tác sau:

    - Nếu `A[i]` đang duyệt mà bằng `k` thì trả về `i`, đây chính là chỉ số (vị trí) chỉ số tìm thấy.

2. Khi đã duyệt hết mảng mà vẫn chưa có `i` nào trả về, nghĩa là không có `A[i]` nào bằng `k`, thì trả về `-1`.

    (`-1` là giá trị quy ước cho trường hợp không tìm thấy, vì chỉ số của mảng bắt đầu từ `0`, không có chỉ số âm).

### Lưu đồ

![Lưu đồ thuật toán tìm kiếm tuần tự](images/search-algorithm-linear-search-flowchart.svg){loading=lazy}

### Trực quan hoá

<div>
    <iframe width="100%" height="680px" frameBorder=0 src="/grade-11/topic-F3/visualize/linear-search.html"></iframe>
</div>

### Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `linear_search()` để thực hiện thuật toán tìm kiếm tuần tự.

Hàm gồm hai tham số đầu vào: mảng `A` và giá trị cần tìm `k`.

Giá trị trả về là chỉ số `i` nào đó hoặc `-1`.

```py linenums="4"
def linear_search(A, k):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử từ đầu đến cuối mảng
    for i in range(n):
        if A[i] == k:
            # Nếu A[i] nào đó bằng k thì trả về chỉ số i
            return i

    # Không tìm thấy, trả về -1
    return -1
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định và người dùng chỉ phải nhập giá trị cần tìm.

```py linenums="19"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))
```

Gọi hàm `linear_search()` ra thực hiện, gán chỉ số (vị trí) tìm thấy cho biến `found`. 

```py linenums="19" hl_lines="9"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)
```

Dựa vào biến `found`, in ra thông báo tìm thấy hoặc không tìm thấy.

```py linenums="19" hl_lines="11-16"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)

    if found == -1:
        # Nếu chỉ số trả về là -1 thì in ra không tìm thấy
        print(f'Không tìm thấy {key}')
    else:
        # Ngược lại, khác -1, thì in ra tìm thấy tại found
        print(f'Tìm thấy {key} tại vị trí {found}')
```

4\. Chạy chương trình trên, nhập vào `9`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 9
Tìm thấy 9 tại vị trí 4
```

Chạy lại chương trình trên, nhập giá trị cần tìm khác là `6`, kết quả như sau:

```pycon
Nhập giá trị cần tìm: 6
Không tìm thấy 6
```

!!! tip "Nhận xét"
    
    Nếu `k` xuất hiện nhiều lần thì thuật toán tìm kiếm tuần tự chỉ trả về **vị trí xuất hiện đầu tiên** của `k` theo trình tự duyệt mảng.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1t09XEPd79MLfHUT2LGX3KVdKByfLAeCq?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/search-algorithm-linear-search.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán tìm kiếm | search problem |
| so sánh | compare |
| thuật toán tìm kiếm | search algorithm |
| tìm kiếm tuần tự | sequential search, linear search |
| tìm thấy, không tìm thấy | found, not found |