# Mô phỏng hệ thống quản lý nhiệm vụ

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán quản lý các nhiệm vụ của hệ thống bằng cấu trúc hàng đợi.

## Bài toán

**Yêu cầu:**

Viết chương trình mô phỏng một hệ thống điều khiển thiết bị IoT thực thi các nhiệm vụ. Trong đó, hệ thống dùng cấu trúc hàng đợi để quản lý nhiệm vụ với các lệnh sau:

- `ADD task`: thêm nhiệm vụ `task` vào hàng đợi.
- `RUN`: thực hiện nhiệm vụ ở đầu hàng đợi.
- `CANCEL task`: hủy nhiệm vụ `task`.

    Khi hủy một nhiệm vụ `task` nào đó ở giữa hàng đợi, những nhiệm vụ đứng trước `task` sẽ lần lượt được lấy ra và đưa lại vào cuối hàng đợi nhằm bảo đảm nguyên tắc FIFO, cho đến khi tìm thấy nhiệm vụ `task` cần hủy nằm ở đầu hàng đợi.

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
RUN
ADD READ_SENSOR
ADD WRITE_LOG
CANCEL WRITE_LOG
ADD CLEAN_MEMORY
CANCEL CLEAN_MEMORY
ADD SYNC_SERVER
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

Đang thực thi nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG']

Thêm nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG', 'READ_SENSOR']

Thêm nhiệm vụ WRITE_LOG
Hàng đợi: ['WRITE_LOG', 'READ_SENSOR', 'WRITE_LOG']

hủy nhiệm vụ WRITE_LOG
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG']

Thêm nhiệm vụ CLEAN_MEMORY
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG', 'CLEAN_MEMORY']

hủy nhiệm vụ CLEAN_MEMORY
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG']

Thêm nhiệm vụ SYNC_SERVER
Hàng đợi: ['READ_SENSOR', 'WRITE_LOG', 'SYNC_SERVER']

Đang thực thi nhiệm vụ READ_SENSOR
Hàng đợi: ['WRITE_LOG', 'SYNC_SERVER']

Đang thực thi nhiệm vụ WRITE_LOG
Hàng đợi: ['SYNC_SERVER']

Đang thực thi nhiệm vụ SYNC_SERVER
Hàng đợi: []
```

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"

    1\. Viết các hàm `add()`, `run()` và `cancel()` để xử lý các lệnh tương ứng.

    - Trong mỗi hàm, việc xử lý lệnh và nhiệm vụ không có gì phức tạp, chỉ đơn giản là gọi hàm `print()` để in ra thông báo liên quan.

    - Đối với hàm hủy `cancel()`, ta dùng vòng lặp để lấy ra từng nhiệm vụ trong hàng đợi cho đến khi tìm thấy nhiệm vụ cần hủy.

    2\. Viết thêm hàm `process()` để xử lý từng dòng trong dữ liệu đầu vào. Với mỗi dòng, ta gọi tương ứng một trong ba hàm đã viết trên ra xử lý.

??? tip "Viết chương trình"

    1\. Nạp lớp `Queue` của module `queue`.

    ```py linenums="1"
    from queue import Queue
    ```

    2\. Khai báo biến `data` chứa dữ liệu đầu vào.

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

    3\. Khởi tạo hàng đợi `task_queue` dùng để chứa các phần tử là nhiệm vụ.

    ```py linenums="22"
    task_queue = Queue()
    ```

    4\. Viết hàm `parse_data()` dùng để đọc và phân tách dữ liệu đầu vào.
    
    Hàm gồm một tham số `d` là là dữ liệu đầu vào.

    Giá trị trả về là danh sách các dòng lệnh.

    ```py linenums="26"
    def parse_data(d):
        # Chuyển đổi dữ liệu đầu vào thành danh sách các dòng lệnh
        return d.strip().splitlines() # (1)!
    ```

    1.  `strip()` được thực hiện trước, dùng để cắt bỏ các khoảng trắng ở hai đầu của `d`.

        `splitlines()` được thực hiện sau, dùng để phân tách thành các dòng lệnh riêng lẻ.

    5\. Viết hàm `add()` dùng để xử lý lệnh `ADD`.
    
    Hàm gồm một tham số `task` là nhiệm vụ cần đưa vào hàng đợi.

    Hàm hoạt động như sau:

    - Đưa nhiệm vụ vào hàng đợi `task_queue`.
    - In ra thông báo liên quan.

    ```py linenums="32"
    def add(task):
        # Đưa nhiệm vụ vào hàng đợi
        task_queue.put(task)

        # In ra thông báo
        print(f'Thêm nhiệm vụ {task}')
    ```

    6\. Viết hàm `run()` dùng để xử lý lệnh `RUN`.

    Hàm này không có tham số vì nhiệm vụ là giá trị của phần tử nằm ở đầu hàng đợi.

    Hàm hoạt động như sau:

    - Lấy ra nhiệm vụ nằm ở đầu hàng đợi.
    - In ra thông báo liên quan.    

    ```py linenums="41"
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

    1.  `get()` vừa lấy giá trị của phần tử ở đầu hàng đợi, vừa xóa nó khỏi hàng đợi.

    
    7\. Viết hàm `cancel()` dùng để xử lý lệnh `CANCEL`.

    Hàm này gồm một tham số `task` là nhiệm vụ cần hủy.

    Hàm hoạt động như sau:

    Dùng vòng lặp while để xác định xem phần tử nằm ở đầu hàng đợi có phải là nhiệm vụ cần hủy `task` hay không:

    - Nếu phần tử đầu hàng đợi là nhiệm vụ cần hủy thì in ra thông báo liên quan.
    - Ngược lại, nếu phần tử đầu hàng đợi không phải là nhiệm vụ cần hủy thì đưa nhiệm vụ này ra sau cùng, tức đưa lại vào cuối hàng đợi `task_queue`.

    ```py linenums="54"
    def cancel(task):
        # biến cờ hiệu dùng để đánh dấu việc tìm thấy nhiệm vụ cần hủy
        found = False

        # Trong khi hàng đợi vẫn còn nhiệm vụ
        while not task_queue.empty():
            # Lấy ra phần tử ở đầu hàng đợi để xét
            t = task_queue.get()

            if t == task:
                # Nếu phần tử này là nhiệm vụ cần hủy thì in ra thông báo
                print(f'hủy nhiệm vụ {task}')

                # Đánh dấu đã tìm thấy nhiệm vụ cần hủy
                found = True

                # Ngắt vòng lặp
                break
            else:
                # Ngược lại, nếu phần tử này không phải là nhiệm vụ cần hủy thì đưa nó vào cuối hàng
                task_queue.put(t)

        if not found:
            # Nếu found == False thì thông báo lệnh CANCEL không thể xử lý
            print(f'Không tồn tại nhiệm vụ {task} nên không thể xử lý lệnh hủy')
    ```

    8\. Viết hàm `process()` dùng để gọi các hàm trên.

    Hàm này gồm một tham số `lines` là danh sách các dòng lệnh có được từ hàm `parse_data()`.

    Hàm hoạt động như sau:

    Dùng vòng lặp for để duyệt từng dòng lệnh, lặp thao tác:

    - Phân tách hai thành phần trong mỗi dòng vào một danh sách `c`.
    - Xét thành phần đầu tiên, là `c[`0]`, đang chứa lệnh gì.
    - Ứng với mỗi lệnh `c[`0]`, ta gọi hàm tương ứng đã viết ở trên.

    ```py linenums="82"
    def process(lines):
        # Duyệt từng lệnh
        for line in lines:
            # Phân tách các thành phần trong một dòng vào danh sách c
            c = line.split()

            # Xét lệnh c[0]
            if c[0] == 'ADD':
                add(c[1]) 
            elif c[0] == 'RUN':
                run()
            elif c[0] == 'CANCEL':
                cancel(c[1])
        
            # Xem tình trạng hiện tại của hàng đợi nhiệm vụ
            print(f'Hàng đợi: {list(task_queue.queue)}')
            print()
    ```

    9\. Viết chương trình chính:

    - Gọi hàm `parse_data()` để đọc dữ liệu đầu vào.
    - Gọi hàm `process()` để xử lý dữ liệu.

    ```py linenums="102"
    if __name__ == '__main__':
        # Đọc dữ liệu đầu vào và đưa vào danh sách command_lines
        command_lines = parse_data(data)

        # In danh sách các dòng lệnh
        print(*command_lines, sep='\n')
        print()

        # Gọi hàm process() để tiến hành xử lý các lệnh
        process(command_lines)
    ```

    10\. Chạy chương trình trên và đối chiếu kết quả với đầu ra trong bộ kiểm thử.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1a102wuY12iUGtefQb2Bt_jdPzsZIkXc0?usp=sharing){target="_blank"}