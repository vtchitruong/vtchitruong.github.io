# Mô phỏng dịch vụ khách hàng

## Yêu cầu

Viết chương trình mô phỏng trung tâm dịch vụ khách hàng mà ở đó khách hàng được phục vụ từng người một. Chương trình phải sử dụng cấu trúc hàng đợi để quản lý những hoạt động của khách hàng trong khi chờ đến lượt phục vụ.

## Input

Dữ liệu đầu vào gồm nhiều dòng. Mỗi dòng biểu thị một hoạt động diễn ra trong hàng đợi của khách hàng.

Có ba loại hoạt động:

- `ARRIVE customer_name`: Một khách hàng mới đến và được thêm vào cuối hàng đợi.
- `SERVE`: Khách hàng đầu tiên trong hàng đợi được phục vụ và xóa khỏi hàng đợi.
- `LEAVE customer_name`: Một khách hàng rời khỏi hàng đợi mà không được phục vụ.

## Output

Dữ liệu đầu ra gồm:

- Thông báo các hoạt động diễn ra trong hàng đợi.
- Hàng đợi hiện hành.


## Bộ test

### Input mẫu

```pycon
ARRIVE Musk
ARRIVE Gates
ARRIVE Arnault
SERVE
ARRIVE Musk
LEAVE Arnault
ARRIVE Bezos
SERVE
ARRIVE Zuckerberg
LEAVE Gates
ARRIVE Ellison
SERVE
SERVE
SERVE
```

### Ouput mẫu

```pycon
Musk đã tới.
Gates đã tới.
Arnault đã tới.
Đang phục vụ Musk.
Musk đã tới.
Arnault buồn quá nên về rồi.
Bezos đã tới.
Đang phục vụ Gates.
Zuckerberg đã tới.
Không có Gates nên không có chuyện rời hàng.
Ellison đã tới.
Đang phục vụ Musk.
Đang phục vụ Bezos.
Đang phục vụ Zuckerberg.
Tình trạng hàng đợi hiện tại: ['Ellison']
```

## Cách giải đề xuất

### Khởi tạo

Khai báo lớp `Queue` của module `queue`.

```py linenums="1"
from queue import Queue
```

Khai báo biến `data` chứa dữ liệu đầu vào.

```py linenums="4"
data = '''
ARRIVE Musk
ARRIVE Gates
ARRIVE Arnault
SERVE
ARRIVE Musk
LEAVE Arnault
ARRIVE Bezos
SERVE
ARRIVE Zuckerberg
LEAVE Gates
ARRIVE Ellison
SERVE
SERVE
SERVE
'''

Khởi tạo hàng đợi `customer_queue` dùng để chứa các phần tử là tên của khách hàng.

```py linenums="22"
customer_queue = Queue()
```

### Đọc dữ liệu đầu vào

```py linenums="27"
def parse_data(d): #(1)!
    # Chuyển đổi input thành danh sách các dòng riêng lẻ
    lines = d.strip().splitlines() # (2)!

    # Chuyển đổi mỗi dòng thành danh sách các hoạt động gồm một hoặc hai phần tử gồm: tên hoạt động và tên khách hàng
    operations = [line.split() for line in lines] # (3)!

    return operations
```
{ .annotate }

1.  Tham số `d` dùng để nhận chuỗi dữ liệu đầu vào, cụ thể ở đây là biến `data`.

2.  `strip()` được thực hiện trước, dùng để cắt bỏ các khoảng trắng hoặc dòng trống ở hai đầu của `d`.

    `splitlines()` được thực hiện sau, dùng để phân chia các dòng thành các phần tử của danh sách `lines`.

3.  Ứng với mỗi dòng `line` trong danh sách `lines`, dựa vào khoảng trắng giữa các từ, hàm `split()` phân chia các từ thành các phần tử của danh sách con, ví dụ: `['ARRIVE', 'Musk']`.

    `operations` là danh sách lớn chứa các danh sách con.

### Xử lý

Ứng với mỗi hoạt động (ARRIVE, SERVE, LEAVE), ta viết một hàm xử lý hoạt động đó.

Việc xử lý mỗi hoạt động trong bài này không có gì phức tạp, chỉ đơn giản là gọi hàm `print()` để thông báo sự việc.

```py linenums="37"
# Hàm xử lý hoạt động ARRIVE
def arrive(customer_name): # (1)!
    customer_queue.put(customer_name)
    print(f'{customer_name} đã tới.')
```
{ .annotate }

1.  Tham số `customer_name` dùng để nhận vào tên của khách hàng trong hoạt động ARRIVE.

```py linenums="43"
# Hàm xử lý hoạt động SERVE
def serve():
    if customer_queue.empty():
        print('Ế rồi, hiện giờ không còn ai cả.')
    else:
        served_customer = customer_queue.get()
        print(f'Đang phục vụ {served_customer}.')
```

```py linenums="52"
# Hàm xử lý thao tác LEAVE
def leave(customer_name): # (1)!
    # Lấy kích thước hàng đợi
    size = customer_queue.qsize()

    found = False # (2)!

    # Duyệt toàn bộ hàng đợi
    for _ in range(size):
        # Lấy khách hàng đầu tiên và xoá khách hàng khỏi hàng đợi
        current_customer = customer_queue.get()

        # Nếu khách hàng này là người mang tên trong hoạt động LEAVE
        if current_customer == customer_name:
            # Thông báo khách hàng này đã rời khỏi hàng đợi
            print(f'{customer_name} buồn quá nên về rồi.')

            # Đánh dấu đã tìm thấy khách hàng rời hàng đợi
            found = True
        else:
            # Ngược lại, khách hàng này không phải là người mang tên trong LEAVE, thì đưa khách hàng này vào cuối hàng đợi
            customer_queue.put(current_customer)

    # Nếu found == false thì thông báo hoạt động LEAVE không thể diễn ra
    if not found:
        print(f'Không có {customer_name} nên không có chuyện rời hàng.')
```
{ .annotate }

1.  Tham số `customer_name` dùng để nhận vào tên của khách hàng trong hoạt động LEAVE.

2.  `found` là biến cờ hiệu ghi nhận đã tìm thấy tên của khách hàng trong hoạt động LEAVE hay chưa.  

Tiếp theo, ta viết hàm `process()` để gôm việc xử lý các hàm trên lại.

Trong đó, dùng vòng lặp for để duyệt từng hoạt động trong danh sách, ứng với mỗi hoạt động (ARRIVE, SERVE, LEAVE), ta gọi hàm tương ứng ra xử lý.

```py linenums="81"
def process(op_list): # (1)!
    for op in op_list:
        if op[0] == 'ARRIVE':
            arrive(op[1])
        elif op[0] == 'SERVE':
            serve()
        elif op[0] == 'LEAVE':
            leave(op[1])
```
{ .annotate }

1.  Tham số `op_list` dùng để nhận vào danh sách các hoạt động cần xử lý, cụ thể ở đây là biến `operations_list`.

### In dữ liệu đầu ra

Trong chương trình chính, ta chỉ việc gọi các hàm đã viết ra thực hiện và xem kết quả.

```py linenums="91"
if __name__ == '__main__':
    # Đọc dữ liệu input và đưa vào operations_list
    operations_list = parse_data(data)

    # In danh sách các hoạt động
    print(operations_list)

    # Gọi hàm process() để tiến hành xử lý các hoạt động
    process(operations_list)

    # Xem tình trạng hàng đợi khách hàng sau khi xử lý
    print(f'Tình trạng hàng đợi hiện tại: {list(customer_queue.queue)}')
```

## Mã nguồn

Chương trình Python hoàn chỉnh đặt tại [Google Colab](https://colab.research.google.com/drive/1jJNGIjOvSYgt-yWBc6UxpYPsqc3knVBn?usp=sharing){:target="_blank"}
