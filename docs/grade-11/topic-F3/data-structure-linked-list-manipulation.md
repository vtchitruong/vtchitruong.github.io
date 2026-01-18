---
icon: material/link
---

# Thao tác với danh sách liên kết

!!! abstract "Tóm lược nội dung"

    Bài này trình bày các thao tác thêm và xoá node trong danh sách liên kết.

## Định nghĩa các lớp

!!! warning "Về mã lệnh trong bài này"
    
    Việc viết mã lệnh cho danh sách liên kết trong bài này đòi hỏi kiến thức về lập trình hướng đối tượng và kỹ thuật lập trình, vốn nằm ngoài chương trình phổ thông. Do đó, một số câu lệnh sẽ chỉ diễn giải sơ nét. Bạn có thể ghép các đoạn mã thành chương trình hoàn chỉnh mà không cần quá quan tâm chi tiết kỹ thuật.

1\. Định nghĩa lớp `node` gồm hai thành phần `data` và `next`, đóng vai trò làm khuôn mẫu cho mỗi node.

```py linenums="1"
# Định nghĩa lớp Node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

2\. Định nghĩa lớp `LinkedList`, đóng vai trò làm khuôn mẫu cho danh sách liên kết.

```py linenums="8"
# Định nghĩa lớp LinkedList
class LinkedList:
    def __init__(self):
        self.head = None
```

Trong danh sách liên kết, thuộc tính `head` dùng để nắm giữ node đầu tiên. `head` đóng vai trò là điểm khởi đầu của danh sách liên kết. Dựa vào `head`, ta có thể duyệt từng node trong danh sách liên kết.

---

## Khởi tạo

1\. Trong chương trình chính, ta khai báo biến `char_list` có kiểu `LinkedList` vừa định nghĩa.

```py linenums="14"
# Chương trình chính
if __name__ == '__main__':
    # Khai báo danh sách liên kết char_list
    char_list = LinkedList()
```

Lúc này, danh sách liên kết `char_list` là rỗng, chưa có node nào.

2\. Khởi tạo ba node, lần lượt đặt tên là `first`, `second` và `third`. Thành phần `data` của mỗi node chứa một ký tự.

```py linenums="14" hl_lines="6-9"
# Chương trình chính
if __name__ == '__main__':
    # Khai báo danh sách liên kết char_list
    char_list = LinkedList()

    # Khởi tạo ba node đơn lẻ
    first = Node('o')
    second = Node('l')
    third = Node('d')
```

Lúc này, cả ba node đều là đơn lẻ, chưa liên kết với nhau. Xem hình dưới đây.

![Ba node chưa liên kết với nhau](images/init-3-single-nodes.svg){loading=lazy}

*Ba node chưa liên kết với nhau*

3\. Liên kết các node bằng cách:

3.1. Đặt `first` làm node đầu tiên của danh sách liên kết `char_list`.

![`first` là node đầu tiên của `char_list`](images/init-step-5-1.svg){loading=lazy}

3.2. Liên kết `first` với `second`.

![`first` trỏ đến `second`](images/init-step-5-2.svg){loading=lazy}

3.3. Liên kết `second` với `third`.

![`second` trỏ đến `third`](images/init-step-5-3.svg){loading=lazy}

```py linenums="14" hl_lines="11-18"
# Chương trình chính
if __name__ == '__main__':
    # Khai báo danh sách liên kết char_list
    char_list = LinkedList()

    # Khởi tạo ba node đơn lẻ
    first = Node('o')
    second = Node('l')
    third = Node('d')

    # Đặt first làm node đầu tiên của char_list
    char_list.head = first

    # Liên kết first với second
    first.next = second

    # Liên kết second với third
    second.next = third
```

---

## Duyệt và in

!!! note "Duyệt danh sách liên kết"

    Duyệt danh sách liên kết là tiến trình di chuyển qua từng node, xuất phát từ node đầu tiên (do biến `head` trỏ đến) và đi đến node cuối cùng (là node trỏ đến `None`).

Cụ thể, ta dùng một biến phụ, gọi là `current`, để lần lượt trỏ đến từng node như sau:

1. Cho `current` trỏ đến node đầu tiên (do `head` trỏ đến).
2. In ra dữ liệu của node mà `current` đang trỏ đến.
3. Cho `current` trỏ đến node kế tiếp.
4. Lặp lại bước 2 và bước 3 cho đến khi `current` trỏ đến `None`.

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `print_linked_list()` dùng để duyệt danh sách liên kết và in ra dữ liệu của từng node.

```py linenums="15"
def print_linked_list(L):
    # Cho current trỏ đến head
    current = L.head

    # Trong khi current chưa gặp None
    while current is not None:
        # thì in ra data của current và mũi tên
        print(f'[{current.data}]', end = ' -> ')

        # Di chuyển current đến node kế tiếp
        current = current.next

    # In ra None báo hiệu kết thúc danh sách liên kết
    print('None')
```

2\. Trong chương trình chính, gọi hàm `print_linked_list()` ra thực hiện.

```py linenums="50"
    # In ra danh sách liên kết
    print('Danh sách liên kết ban đầu:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
```

---

## Thêm node mới

Khi thêm hoặc xoá một node trong danh sách liên kết, ta không hề di chuyển các node, mà chỉ đang tái thiết lập các liên kết giữa chúng.

!!! note "Thêm và xoá node"

    Về bản chất, các thao tác thêm hoặc xoá node đều là thay đổi giá trị của thành phần `next` của các node.

### Chèn vào đầu

Để chèn một node mới vào đầu danh sách, ta thực hiện các bước sau:

1. Khởi tạo node mới, đặt tên là `new_node`, chứa dữ liệu cần chèn `new_data`.
2. Liên kết `new_node` với node đầu tiên của danh sách liên kết (do `head` đang trỏ đến).
3. Cập nhật `head` để nó chuyển sang trỏ đến `new_node`.

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `insert_at_head()` dùng để chèn một node mới vào đầu danh sách liên kết.

```py linenums="32"
def insert_at_head(L, new_data):
    # Khởi tạo node mới
    new_node = Node(new_data)

    # Cho node mới trỏ đến node đầu
    new_node.next = L.head

    # Cập nhật head để trỏ đến node mới
    L.head = new_node
```

2\. Trong chương trình chính, gọi hàm `insert_at_head()` ra thực hiện.

```py linenums="66"
    # Chèn node mới vào đầu
    new_data = 'c'
    insert_at_head(char_list, new_data)

    # In ra danh sách liên kết
    print(f'Chèn [{new_data}] vào đầu danh sách liên kết:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
```

### Thêm vào cuối

Để thêm một node mới vào cuối danh sách liên kết, ta thực hiện các bước sau:

1. Khởi tạo node mới, đặt tên là `new_node`, chứa dữ liệu cần chèn `new_data`.
2. Kiểm tra danh sách liên kết: nếu danh sách đang rỗng thì ta chỉ cần cho `head` trỏ vào `new_node`.
3. Ngược lại, danh sách không rỗng, thì tìm node cuối bằng cách:

    Dùng biến tạm `current` để duyệt danh sách liên kết cho đến khi tìm được node cuối.

4. Liên kết node cuối cùng với `new_node`. 

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `insert_at_end()` dùng để chèn một node mới vào cuối danh sách liên kết.

```py linenums="44"
def insert_at_end(L, new_data):
    # Khởi tạo node mới
    new_node = Node(new_data)

    if L.head is None:
        # Nếu danh sách rỗng thì cho head trỏ đến node mới
        L.head = new_node
        return

    # Ngược lại, danh sách không rỗng, tìm node cuối
    current = L.head
    while current.next is not None:
        current = current.next

    # Cho node cuối trỏ đến node mới
    current.next = new_node
```

2\. Trong chương trình chính, gọi hàm `insert_at_end()` ra thực hiện.

```py linenums="93"
    # Thêm node mới vào cuối
    new_data = 'y'
    insert_at_end(char_list, new_data)

    # In ra danh sách liên kết
    print(f'Thêm [{new_data}] vào cuối danh sách liên kết:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
Thêm [y] vào cuối danh sách liên kết: [c] -> [o] -> [l] -> [d] -> [y] -> None
```

### Chèn vào trước một node xác định

Giả sử node có dữ liệu `k` đã **tồn tại** trong danh sách liên kết và **không phải là node đầu tiên**.

Để chèn node mới vào trước node `k`, thử thách là phải tìm được node liền trước node `k`. Vì khi quá node `k`, ta không thể quay lại được.

Để giải quyết thử thách này, ta áp dụng kỹ thuật "hai người dắt tay nhau" như sau:

- Biến `current` đi trước để tìm node `k`.
- Biến `previous` đi *"nôi gót"* theo sau.

Khi `current` tìm thấy node `k`, thì `previous` chính là node liền trước node `k`, đóng vai trò điểm tựa để ta chèn node mới vào.

Cụ thể, ta thực hiện các bước sau:

1. Khởi tạo node mới, đặt tên là `new_node`, chứa dữ liệu `new_data`.

2. Cho `current` xuất phát từ  node đầu tiên, còn `previous` là `None`.
3. Duyệt danh sách liên kết bằng `current` cho đến khi tìm thấy node `k`:

    - Nếu tìm thấy `k` thì ngắt vòng lặp.
    - Ngược lại, chưa tìm thấy, thì cho `previous` thay thế `current`, rồi cho `current` di chuyển đến node kế tiếp.

    ![Tìm node `k`](images/insert-step-1.svg){loading=lazy}

4. Liên kết `new_node` với `current`.

    ![Liên kết `new_node` với `current`](images/insert-step-2.svg){loading=lazy}

5. Liên kết `previous` với `new_node`.

    ![Liên kết `previous` với `new_node`](images/insert-step-3.svg){loading=lazy}

Dựa theo thuật toán trên, ta viết chương trình như sau:

```py linenums="62"
# Hàm chèn node mới vào trước node k
def insert_before(L, k, new_data):
    # Khởi tạo node mới
    new_node = Node(new_data)

    # Khởi tạo current và previous
    current = L.head             
    previous = None
    
    # Duyệt danh sách liên kết để tìm node có dữ liệu k
    while current is not None:
        # Nếu tìm thấy k thì ngắt vòng lặp
        if current.data == k:
            break

        # Ngược lại, chưa tìm thấy, thì cho previous thay thế current
        previous = current

        # Cho current di chuyển đến node kế tiếp
        current = current.next   

    # Cho node mới trỏ đến current
    new_node.next = current

    # Cho previous trỏ đến node mới     
    previous.next = new_node
```

2\. Trong chương trình chính, ta gọi hàm `insert_before()` ra thực hiện.

```py linenums="129"
    # Thêm node mới vào trước node key
    key = 'd'
    new_data = 'y'
    insert_before(char_list, key, new_data)

    # In ra danh sách liên kết
    print(f'Chèn [{new_data}] vào trước [{key}]:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
Thêm [y] vào cuối danh sách liên kết: [c] -> [o] -> [l] -> [d] -> [y] -> None
Chèn [y] vào trước [d]: [c] -> [o] -> [l] -> [y] -> [d] -> [y] -> None
```

!!! warning "Về việc chèn vào trước một node"

    Hàm `insert_before()` vừa viết chỉ áp dụng cho trường hợp lý tưởng, đó là node `k` đã tồn tại trong danh sách liên kết và không phải là node đầu tiên.

    Khi viết đầy đủ, ta cần xét thêm các trường hợp:

    - Danh sách liên kết rỗng.
    - Node `k` là node đầu tiên.
    - Node `k` không tồn tại.

---

## Xoá node

### Xoá node đầu tiên

Để xoá node đầu tiên trong danh sách liên kết, ta thực hiện các bước sau:

1. Kiểm tra danh sách liên kết: nếu danh sách rỗng thì không có gì để xoá, ta kết thúc hàm.
2. Ngược lại, danh sách không rỗng, ta cập nhật `head` để nó chuyển sang trỏ đến node kế tiếp của `current`.
    
    Node đầu tiên không còn ai quản lý sẽ tự động bị hệ thống loại bỏ.

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `remove_head()` dùng để xoá node đầu tiên trong danh sách liên kết.

```py linenums="91"
def remove_head(L):
    if L.head is None:
        # Nếu danh sách rỗng thì không có gì để xoá
        return

    # Ngược lại, danh sách không rỗng, cập nhật head để trỏ đến node kế tiếp
    L.head = L.head.next
```

2\. Trong chương trình chính, ta gọi hàm `remove_head()` ra thực hiện.

```py linenums="148"
    # Xoá node đầu tiên
    remove_head(char_list)

    # In ra danh sách liên kết
    print('Xoá node đầu tiên:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
Thêm [y] vào cuối danh sách liên kết: [c] -> [o] -> [l] -> [d] -> [y] -> None
Chèn [y] vào trước [d]: [c] -> [o] -> [l] -> [y] -> [d] -> [y] -> None
Xoá node đầu tiên: [o] -> [l] -> [y] -> [d] -> [y] -> None
```

### Xoá node cuối cùng

Để xoá node cuối cùng trong danh sách liên kết, ta thực hiện các bước sau:

1. Kiểm tra danh sách liên kết: nếu danh sách rỗng thì không có gì để xoá, ta kết thúc hàm.
2. Nếu danh sách chỉ có một node thì ta cho `head` trỏ đến `None`.
3. Ngược lại, danh sách có nhiều hơn một node, ta lại dùng kỹ thuật *"hai người dắt tay nhau"* để duyệt đến node cuối cùng:

    - Biến `current` đi trước để tìm node cuối.
    - Biến `previous` đi *"nôi gót"* theo sau.

    Khi `current` đến node cuối cùng, thì `previous` chính là node liền trước node cuối.

4. Ngắt liên kết từ `previous` đến `current` bằng cách liên kết `previous` với `None`.

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `remove_tail()` dùng để xoá node cuối cùng trong danh sách liên kết.

```py linenums="101"
def remove_tail(L):
    if L.head is None:
        # Nếu danh sách rỗng thì không có gì để xoá
        return

    if L.head.next is None:
        # Nếu danh sách chỉ có một node thì cho head trỏ đến None
        L.head = None
        return

    # Ngược lại, danh sách có nhiều hơn một node, tìm node cuối
    current = L.head
    previous = None

    while current.next is not None:
        # Cho previous thay thế current
        previous = current
        
        # Cho current di chuyển đến node kế tiếp
        current = current.next

    # Ngắt liên kết từ previous đến current
    previous.next = None
```

2\. Trong chương trình chính, ta gọi hàm `remove_tail()` ra thực hiện.

```py linenums="78"
    # Xoá node cuối cùng
    remove_tail(char_list)

    # In ra danh sách liên kết
    print('Xoá node cuối cùng:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
Thêm [y] vào cuối danh sách liên kết: [c] -> [o] -> [l] -> [d] -> [y] -> None
Chèn [y] vào trước [d]: [c] -> [o] -> [l] -> [y] -> [d] -> [y] -> None
Xoá node đầu tiên: [o] -> [l] -> [y] -> [d] -> [y] -> None
Xoá node cuối cùng: [o] -> [l] -> [y] -> [d] -> None
```

### Xoá một node xác định

Giả sử node có dữ liệu `k` đã **tồn tại** trong danh sách liên kết và **không phải là node đầu tiên**.

Để xoá node có dữ liệu `k`, ta lại áp dụng kỹ thuật "hai người dắt tay nhau" như sau:

1. Duyệt tìm `k`: Cho `current` đi trước và `previous` *"nối gót"* theo sau. Vòng lặp dừng lại khi `current` tìm thấy node `k`.

    ![Tìm node `k`](images/remove-step-1.svg){loading=lazy}

2. Liên kết `previous` với node liền sau `current`.

    ![Liên kết `previous` với node liền sau `current`](images/remove-step-2.svg){loading=lazy}
   
    Thao tác này tạo ra một *"chiếc cầu"* đi xuyên qua nút.

    `current` (là node chứa dữ liệu `k`) bị cô lập hoàn toàn. Python sẽ tự động thu hồi bộ nhớ của node này.

    ![Kết quả của việc xoá node `k`](images/remove-step-3.svg){loading=lazy}

Dựa theo thuật toán trên, ta viết chương trình như sau:

1\. Viết hàm `remove()` dùng để xoá node có dữ liệu `k`.

```py linenums="127"
def remove(L, k):
    # Khởi tạo current và previous
    current = L.head
    previous = None

    # Duyệt danh sách liên kết để tìm node có dữ liệu k
    while current is not None:
        # Nếu tìm thấy k thì ngắt vòng lặp
        if current.data == k:
            break

        # Ngược lại, chưa tìm thấy, thì cho previous thay thế current
        previous = current

        # Cho current di chuyển đến node kế tiếp
        current = current.next

    # Cho previous trỏ đến node liền sau current
    previous.next = current.next
```

2\. Trong chương trình chính, ta gọi hàm `remove()` ra thực hiện.

```py linenums="210"
    # Xoá node có dữ liệu key
    key = 'y'
    remove(char_list, key)

    # In ra danh sách liên kết
    print(f'Xoá [{new_data}] khỏi danh sách liên kết:', end=' ')
    print_linked_list(char_list)
```

3\. Chạy chương trình trên, kết quả như sau:

```pycon
Danh sách liên kết ban đầu: [o] -> [l] -> [d] -> None
Chèn [c] vào đầu danh sách liên kết: [c] -> [o] -> [l] -> [d] -> None
Thêm [y] vào cuối danh sách liên kết: [c] -> [o] -> [l] -> [d] -> [y] -> None
Chèn [y] vào trước [d]: [c] -> [o] -> [l] -> [y] -> [d] -> [y] -> None
Xoá node đầu tiên: [o] -> [l] -> [y] -> [d] -> [y] -> None
Xoá node cuối cùng: [o] -> [l] -> [y] -> [d] -> None
Xoá [y] khỏi danh sách liên kết: [o] -> [l] -> [d] -> None
```

!!! warning "Về việc xoá node"
    
    Hàm `remove()` vừa viết cũng áp dụng cho trường hợp lý tưởng, đó là node `k` cần xoá đã tồn tại trong danh sách liên kết và không phải là node đầu tiên.

    Khi viết đầy đủ, ta cần xét thêm các trường hợp:

    - Danh sách liên kết rỗng.
    - Node `k` cần xoá là node đầu tiên.
    - Node `k` cần xoá không tồn tại.

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1erfVlrVQm3g5DRsLROjWFEjDlhLEglPu?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/data-structure-linked-list-manipulation.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| duyệt (danh sách liên kết) | traverse (a linked list) |