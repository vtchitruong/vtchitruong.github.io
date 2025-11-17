# Mô phỏng hệ thống quản lý nhiệm vụ

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán quản lý các nhiệm vụ của hệ thống bằng cấu trúc hàng đợi.

## Bài toán

**Yêu cầu:**

Viết chương trình mô phỏng một hệ thống điều khiển thiết bị IoT thực thi các nhiệm vụ. Trong đó, hệ thống dùng cấu trúc hàng đợi để quản lý nhiệm vụ với các lệnh sau:

- `ADD task`: thêm nhiệm vụ `task` vào hàng đợi.
- `RUN`: thực hiện nhiệm vụ ở đầu hàng đợi.
- `CANCEL task`: huỷ nhiệm vụ `task`.

    Khi huỷ một nhiệm vụ `task` nào đó ở giữa hàng đợi, những nhiệm vụ đứng trước `task` sẽ lần lượt được lấy ra và đưa lại vào cuối hàng đợi nhằm bảo đảm nguyên tắc FIFO, cho đến khi tìm thấy nhiệm vụ `task` cần huỷ nằm ở đầu hàng đợi.

Với mỗi lệnh và nhiệm vụ, ta chỉ cần in ra thông báo về lệnh và nhiệm vụ đó. 

**Đầu vào:**

Gồm nhiều dòng, mỗi dòng biểu thị một lệnh.

- `ADD task`
- `RUN`
- `CANCEL task`

**Đầu ra:**

Các thông báo và tình trạng của hàng đợi tương ứng với mỗi dòng lệnh trong dữ liệu đầu vào.

**Bộ kiểm thử:**

Đầu vào:

```pycon
ADD READ_SENSOR
ADD WRITE_LOG
ADD UPDATE_STATUS
RUN
ADD READ_SENSOR
ADD WRITE_LOG
CANCEL UPDATE_STATUS
ADD SYNC_SERVER
RUN
ADD CLEAN_MEMORY
CANCEL WRITE_LOG
ADD BACKUP_DB
RUN
RUN
RUN
```

Đầu ra:

```pycon
Thêm nhiệm vụ READ_SENSOR
Hàng đợi: ['READ_SENSOR']

Thêm nhiệm vụ WRITE_LOG
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG']

Thêm nhiệm vụ UPDATE_STATUS
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG', 'UPDATE_STATUS']

Đang thực thi nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG', 'UPDATE_STATUS']

Thêm nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG', 'UPDATE_STATUS', 'READ_SENSOR']

Thêm nhiệm vụ WRITE_LOG
Hàng đợi: ['WRITE_LOG', 'UPDATE_STATUS', 'READ_SENSOR', 'WRITE_LOG']

Huỷ nhiệm vụ UPDATE_STATUS
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG', 'WRITE_LOG']

Thêm nhiệm vụ SYNC_SERVER
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG', 'WRITE_LOG', 'SYNC_SERVER']

Đang thực thi nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG', 'WRITE_LOG', 'SYNC_SERVER']

Thêm nhiệm vụ CLEAN_MEMORY
Hàng đợi: ['WRITE_LOG', 'WRITE_LOG', 'SYNC_SERVER', 'CLEAN_MEMORY']

Huỷ nhiệm vụ WRITE_LOG
Hàng đợi: ['WRITE_LOG', 'SYNC_SERVER', 'CLEAN_MEMORY']

Thêm nhiệm vụ BACKUP_DB
Hàng đợi: ['WRITE_LOG', 'SYNC_SERVER', 'CLEAN_MEMORY', 'BACKUP_DB']

Đang thực thi nhiệm vụ WRITE_LOG
Hàng đợi: ['SYNC_SERVER', 'CLEAN_MEMORY', 'BACKUP_DB']

Đang thực thi nhiệm vụ SYNC_SERVER
Hàng đợi: ['CLEAN_MEMORY', 'BACKUP_DB']

Đang thực thi nhiệm vụ CLEAN_MEMORY
Hàng đợi: ['BACKUP_DB']
```

## Cách giải đề xuất

### Ý tưởng chính

Ta viết các hàm `add()`, `run()` và `cancel()` để xử lý các lệnh tương ứng.

- Trong mỗi hàm, việc xử lý lệnh và nhiệm vụ không có gì phức tạp, chỉ đơn giản là gọi hàm `print()` để in ra thông báo liên quan.

- Đối với hàm huỷ `cancel()`, ta dùng vòng lặp để lấy ra từng nhiệm vụ trong hàng đợi cho đến khi tìm thấy nhiệm vụ cần huỷ.

Viết thêm hàm `process()` để xử lý từng dòng trong dữ liệu đầu vào. Với mỗi dòng, ta gọi hàm tương ứng một trong ba hàm đã viết trên ra xử lý.

### Viết chương trình

#### 1. Nạp module và khai báo biến

Nạp lớp `Queue` của module `queue`.

```py linenums="1"
from queue import Queue
```

Khai báo biến `data` chứa dữ liệu đầu vào.

```py linenums="5"
data = '''
ADD READ_SENSOR
ADD WRITE_LOG
ADD UPDATE_STATUS
RUN
ADD READ_SENSOR
ADD WRITE_LOG
CANCEL UPDATE_STATUS
ADD SYNC_SERVER
RUN
ADD CLEAN_MEMORY
CANCEL WRITE_LOG
ADD BACKUP_DB
RUN
RUN
RUN
'''
```

Khởi tạo hàng đợi `task_queue` dùng để chứa các phần tử là nhiệm vụ.

```py linenums="25"
task_queue = Queue()
```

#### 2. Đọc dữ liệu đầu vào

Viết hàm `parse_data()` để đọc dữ liệu đầu vào trong biến `data`.

Hàm này trả về danh sách các dòng lệnh.

```py linenums="27"
def parse_data(d): #(1)!
    # Chuyển đổi dữ liệu đầu vào thành danh sách các dòng lệnh
    return d.strip().splitlines() # (2)!
```
{ .annotate }

1.  Tham số `d` dùng để nhận dữ liệu đầu vào.

2.  `strip()` được thực hiện trước, dùng để cắt bỏ các khoảng trắng ở hai đầu của `d`.

    `splitlines()` được thực hiện sau, dùng để phân tách thành các dòng lệnh riêng lẻ.

#### 3. Xử lý

Viết hàm `add()` để xử lý lệnh `ADD`. Việc xử lý bao gồm:

- Đưa nhiệm vụ vào hàng đợi `task_queue`.
- In ra thông báo liên quan.

Hàm này gồm một tham số là nhiệm vụ cần đưa vào hàng đợi, đặt là `task`.

```py linenums="35"
def add(task):
    # Đưa nhiệm vụ vào hàng đợi
    task_queue.put(task)

    # In ra thông báo
    print(f'Thêm nhiệm vụ {task}')
```

Viết hàm `run()` để xử lý lệnh `RUN`. Việc xử lý bao gồm:

- Lấy ra nhiệm vụ nằm ở đầu hàng đợi.
- In ra thông báo liên quan.

Hàm này không có tham số vì nhiệm vụ là giá trị của phần tử nằm ở đầu hàng đợi.

```py linenums="44"
def run():
    if task_queue.empty():
        # Nếu hàng đợi rỗng thì thông báo hết nhiệm vụ
        print('Đã hết nhiệm vụ')
    else:
        # Ngược lại, nếu không rỗng thì lấy ra nhiệm vụ ở đầu hàng đợi
        t = task_queue.get() # (1)!

        # In ra thông báo
        print(f'Đang thực thi nhiệm vụ {t}')
```
{ .annotate }

1.  `get()` vừa lấy giá trị của phần tử ở đầu hàng đợi, vừa xoá nó khỏi hàng đợi.

Viết hàm `cancel()` để xử lý lệnh `CANCEL`.

Hàm này gồm một tham số là nhiệm vụ cần huỷ, đặt là `task`.

Ta dùng vòng lặp while để xác định xem phần tử nằm ở đầu hàng đợi có phải là nhiệm vụ cần huỷ `task` hay không:

- Nếu phần tử đầu hàng đợi là nhiệm vụ cần huỷ thì in ra thông báo liên quan.
- Ngược lại, nếu phần tử đầu hàng đợi không phải là nhiệm vụ cần huỷ thì đưa nhiệm vụ này ra sau cùng, tức đưa lại vào cuối hàng đợi `task_queue`.

```py linenums="57"
def cancel(task):
    # biến cờ hiệu dùng để đánh dấu việc tìm thấy nhiệm vụ cần huỷ
    found = False

    # Trong khi hàng đợi vẫn còn nhiệm vụ
    while not task_queue.empty():
        # Lấy ra phần tử ở đầu hàng đợi để xét
        t = task_queue.get()

        if t == task:
            # Nếu phần tử này là nhiệm vụ cần huỷ thì in ra thông báo
            print(f'Huỷ nhiệm vụ {task}')

            # Đánh dấu đã tìm thấy nhiệm vụ cần huỷ
            found = True

            # Ngắt vòng lặp
            break
        else:
            # Ngược lại, nếu phần tử này không phải là nhiệm vụ cần huỷ thì đưa nó vào cuối hàng
            task_queue.put(t)

    if not found:
        # Nếu found == False thì thông báo lệnh CANCEL không thể xử lý
        print(f'Không tồn tại nhiệm vụ {task} nên không thể xử lý lệnh huỷ')
```

Viết hàm `process()` để gọi các hàm trên.

Hàm này gồm một tham số là danh sách các dòng lệnh có được từ hàm `parse_data()`, đặt là `lines`.

Ta dùng vòng lặp for để duyệt từng dòng lệnh, lặp thao tác:

- Phân tách hai thành phần trong mỗi dòng vào một danh sách `C`.
- Xét thành phần đầu tiên, là `C[0]`, đang chứa lệnh gì.
- Ứng với mỗi lệnh `C[0]`, ta gọi hàm tương ứng đã viết ở trên.

```py linenums="85"
def process(lines):
    # Duyệt từng lệnh
    for line in lines:
        # Phân tách các thành phần trong một dòng vào danh sách C
        C = line.split()

        # Xét lệnh C[0]
        if C[0] == 'ADD':
            add(C[1]) 
        elif C[0] == 'RUN':
            run()
        elif C[0] == 'CANCEL':
            cancel(C[1])
    
        # Xem tình trạng hiện tại của hàng đợi nhiệm vụ
        print(f'Hàng đợi: {list(task_queue.queue)}')
        print()
```


#### 4. Chương trình chính

Trong chương trình chính, ta gọi các hàm đã viết ra thực hiện:

- Hàm `parse_data()` để đọc dữ liệu đầu vào.
- Hàm `process()` để xử lý dữ liệu.

```py linenums="105"
if __name__ == '__main__':
    # Đọc dữ liệu đầu vào và đưa vào danh sách command_lines
    command_lines = parse_data(data)

    # In danh sách các dòng lệnh
    print(*command_lines, sep='\n')
    print()

    # Gọi hàm process() để tiến hành xử lý các lệnh
    process(command_lines)
```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1a102wuY12iUGtefQb2Bt_jdPzsZIkXc0?usp=sharing){target="_blank"}