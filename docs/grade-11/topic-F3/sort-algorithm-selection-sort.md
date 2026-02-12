---
icon: material/sort
---

# Sắp xếp chọn

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Bài toán sắp xếp
    - Thuật toán sắp xếp chọn

## Khái quát

### Đặt vấn đề

Với bảng điểm của lớp, làm sao để lấy ra 10 bạn có điểm số cao nhất?

Một cách làm đơn giản là sắp xếp bảng điểm giảm dần, sau đó lấy ra 10 bạn đầu tiên. Đó là 10 bạn có điểm số cao nhất.

### Bài toán sắp xếp

Sắp xếp dữ liệu là tác vụ cơ bản và quan trọng trong xử lý dữ liệu, tạo thuận lợi cho việc tìm kiếm, truy xuất và phân tích dữ liệu.

**Sắp xếp dữ liệu** là tiến trình **tổ chức lại dữ liệu theo một trật tự có nghĩa** nào đó.

Trong chủ đề F, ta chỉ xét bài toán đơn giản là sắp xếp mảng một chiều theo thứ tự tăng dần (1).
{ .annotate }

1.  **Tăng dần** được hiểu theo nghĩa cho phép bằng nhau, phần tử liền sau **lớn hơn hoặc bằng** phần tử liền trước.

    Còn **tăng nghiêm ngặt** thì không cho phép bằng nhau, phần tử liền sau phải lớn hơn phần tử liền trước.

Cụ thể, bài toán sắp xếp được phát biểu như sau:
    
| Đầu vào | Đầu ra |
| --- | --- |
| Mảng một chiều `A` gồm `n` phần tử đều là số nguyên. | Mảng một chiều `A` có thứ tự tăng dần. |

### Thuật toán sắp xếp

Có nhiều thuật toán sắp xếp khác nhau, hầu hết thực hiện thao tác so sánh các phần tử với nhau để xác định một phần tử sẽ đứng trước hay đứng sau một phần tử khác.

Bài học này đề cập thuật toán **sắp xếp chọn**.

??? info "Lợi ích và ứng dụng"
        
    Trong lập trình, sắp xếp dữ liệu giúp cho tập dữ liệu trở nên dễ đọc hơn cũng như việc tìm kiếm và xử lý dữ liệu thuận tiện hơn.

    Nhìn chung, thuật toán sắp xếp được ứng dụng trong các vấn đề về tìm kiếm thông tin và so khớp dữ liệu. Một số bài toán liên quan là:

    - Bài toán quản lý, trong đó cần sắp xếp mã định danh, họ tên, thời gian, nơi chốn, v.v...
    - Bài toán đồ thị như Prim, Dijkstra, Kruscal, v.v..., trong đó cần sắp xếp các cạnh theo trọng số.
    - Bài toán thống kê như tìm trung vị, tìm tứ phân vị.
    - Bài toán tìm phần tử trùng lắp, trộn các tập dữ liệu, chia để trị, tìm kiếm theo khoảng.
    - Bài toán sắp xếp sự kiện theo thời gian trong mô phỏng, trò chơi, lịch trình công việc, xử lý gói tin mạng, v.v...

    Hiện nay, các ngôn ngữ lập trình và hệ thống phần mềm đã có sẵn công cụ sắp xếp để người dùng dễ dàng sử dụng. Song việc tìm hiểu các thuật toán sắp xếp vẫn là cần thiết giúp người học phát triển tư duy và kỹ năng lập trình.

---

## Thuật toán sắp xếp chọn

### Ý tưởng

Hãy tưởng tượng, ta cần chọn đội hình gồm những cầu thủ có phong độ tốt nhất từ những cầu thủ hiện có để thi đấu.

Ta thực hiện bằng cách: chọn cầu thủ có phong độ tốt nhất, chọn cầu thủ có phong độ tốt thứ hai, chọn cầu thủ có phong độ tốt thứ ba, v.v...

Áp dụng cách trên cho mảng, nếu xem *"nhỏ nhất"* đồng nghĩa *"tốt nhất"*, thì ta sẽ chọn phần tử nhỏ nhất trước, rồi chọn tiếp phần tử nhỏ nhất tiếp theo, rồi chọn tiếp phần tử nhỏ nhất tiếp theo nữa, v.v...

Cụ thể như sau:
    
Duyệt từng phần tử `A[i]` từ đầu đến áp cuối, lặp các thao tác sau:

- Tìm vị trí `min` của phần tử nhỏ nhất trong mảng con từ vị trí `i` đến cuối mảng.
- Hoán vị `A[i]` và `A[min]`.

Thuật toán có thể được phác hoạ như hình sau:

![Phác hoạ ý tưởng chính](images/sort-algorithm-selection-sort-illustration.svg){loading=lazy width=300}

### Ví dụ minh hoạ

![Ví dụ minh hoạ tiến trình sắp xếp chọn](images/sort-algorithm-selection-sort-manual-run.svg){loading=lazy width=360px}

### Lưu đồ

![Lưu đồ sắp xếp chọn](images/sort-algorithm-selection-sort-flowchart.svg){loading=lazy width=600}

### Trực quan hóa

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../visualize/selection-sort.html"></iframe>
</div>  

### Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `selection_sort()` để thực hiện thuật toán sắp xếp chọn.

```py linenums="4"
def selection_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ đầu đến áp cuối
    for i in range(n - 1):
        # Tìm vị trí của phần tử nhỏ nhất từ i đến cuối
        min = i
        for j in range(i + 1, n):
            if A[j] < A[min]:
                min = j

        # Hoán vị A[i] và A[min]
        A[i], A[min] = A[min], A[i]
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định, rồi gọi hàm `selection_sort()` để sắp xếp mảng `Array`.

```py linenums="21"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm selection_sort()
    selection_sort(Array)

    # In mảng mới
    print(f'Mảng mới sau khi sắp xếp: {Array}')
```

4\. Chạy chương trình trên, kết quả như sau:

```pycon
Mảng ban đầu chưa sắp xếp: [1 7 4 0 9 4 8 8]
Mảng mới sau khi sắp xếp: [0 1 4 4 7 8 8 9]
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1VBtZAQbqQTRyQx1hsF0Ez68VPa5h3I7Y?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-selection-sort.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp chọn | selection sort |
| so sánh | compare |