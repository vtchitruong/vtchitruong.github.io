# Danh sách liên kết

## Đặt vấn đề

Khi lưu trữ và xử lý tập hợp gồm nhiều phần tử, mảng là một lựa chọn phù hợp. Song mảng vẫn có những hạn chế như:  

- Kích thước của mảng là cố định. Nói cách khác, số lượng phần tử của mảng không thể tăng hoặc giảm một cách linh hoạt. Số lượng phần tử của mảng thường phải khai báo dư so với số lượng sử dụng thực tế.  

- Khi cần chèn hoặc xóa phần tử, mảng cần phải dịch chuyển các phần tử, dẫn đến hao phí về mặt thời gian và bộ nhớ. Thậm chí, có trường hợp phải khai báo mảng mới, rồi sao chép các phần tử từ mảng gốc sang mảng mới, hiệu quả thực thi lại càng kém hơn.  

Do đó, ta cần một cấu trúc dữ liệu khác có thể khắc phục những hạn chế này.  

## Khái niệm

**Danh sách liên kết** là một cấu trúc dữ liệu gồm các phần tử kết nối với nhau. Mỗi phần tử được gọi là một **node**, thường gồm hai thành phần:  

- Phần thứ nhất chứa dữ liệu, tạm gọi là `data`.  
- Phần thứ hai chứa địa chỉ của một node khác, tạm gọi là `next`.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc-j0l8knvNeiy5tuertecFPOjvA--z5s_2zza2i4VE9fateb8QA58e2J3zbp3DrQmz9maoOvD1Gw9etztPfInTxHlASXxgKKAv4jSCWZLVbQOpPBot2=w200){ width="100", loading=lazy }
  <figcaption>Hình 1. Minh họa một node</figcaption>
</figure>

Khi `next` của node liền trước chứa địa chỉ của node liền sau, ta nói theo thuật ngữ chuyên môn là *trỏ vào/trỏ tới/trỏ đến* node liền sau.  

Bên cạnh đó, danh sách liên kết còn có một biến được dùng để nắm giữ node đầu tiên, tạm gọi là `head`. Biến `head` đóng vai trò là điểm khởi đầu hoặc đầu vào của danh sách liên kết. Dựa vào `head`, ta có thể duyệt qua toàn bộ danh sách liên kết.  

Node cuối cùng có thành phần `next` trỏ đến `None`, là đối tượng mang ý nghĩa rỗng, không có giá trị trong Python. `None` là dấu hiệu giúp nhận biết không còn node nào nữa.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc8B01v34n__qS5MzH9AapgBFvCM0OKG72fetA25hP4D856T4eq1t9_pGW-2eLxAqy0QCknsq4L1tXx2_AsypHBxKLchudgtm3kV-tI7dsojVo4OJMNd=w400){ width="400", loading=lazy }
  <figcaption>Hình 2. Minh họa một danh sách liên kết</figcaption>
</figure>


Xe lửa có thể xem là hình ảnh minh họa cho danh sách liên kết. Bởi xe lửa gồm nhiều toa, toa liền trước *móc nối* với toa liền sau.    

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc8fwaSEFCjEpd0hB_3VSMOaNzQ_yGG1F31kkr4U0-WSGeyl8CJIo_3_xvaorVS4p1JYMplZZARlMBUrcydro-agvumnj45bcwR5jvNSDbawo2yyhKTrjr9fGbO1IH6Ny76KvseTRyv-XJ6z_tydOU-WI3JxK6uyLa-AS4OxQHrXlJayBErCnonRYdN21dZzJL-zNTJfmgIl3RNsstbrQCWxffE01tPeHxLODSQHJs0dEZooVsaBTCUpUlHrfpwFrXx4tbo35SQSsiD6bCGhJiwWW9B3diXm_i4N6LviyHkyxmBBbAkB6eqwd4yjdVV1QkfCJU5Ph79H3vw61N46XN-D977ZeIMRRgKm2ZKXt9odbPn2kyOehhLM_E50mX1vrf9Le49uF7bUXI91Xb9UShMzZKwqLRMtb9YBr0LP0iySsYnnzMMNlpkYCfoUKEOpM7RQDniUgNnDu4BWGeGt7ZrBS3ERiLWBe_4oVjoRnsOLXQ7F12iZvejvP6d4iKl727F2e-C3pQI9Ca-dnpp4J0rSn7kkG8Xjqi115RTj7c9sVtbTd0e7q9tV02dBVEcAjF4whuIToQiIuOracVwlIPCPuuq7DpP_y4yBkZURa3mpOo9yKqTfOAcASQRc85y_xWCMSLJHAWsJvTTy0mRnTXVYnk33i7qneNadUABE46I2MlazS13Omo03GrcxTBMab1bBxXtzyHeI9I7eTgpE9N1vCl3DL7J3NDVieiUylzaTKXX2SeBz5XZ4f54gUxpGelOP8GkktpTpAHhR5fGgHWfNxI1rhZPg2iWO8OftPnXbOSwZeldUkTv7vdwlbR1PUoOG9IhO2-j9eTTJZ4tytLyKs8qEiLcW2gGwUd5S9RZ0TizM1W9-yjDEUp27BRD_7YiYEzioCgOSXCbeOaocyKEE7Xg=w400){ width="400", loading=lazy }
  <figcaption>Hình 3. Xe lửa, theo nghĩa nào đó, là một danh sách liên kết</figcaption>
</figure>

Danh sách liên kết được sử dụng hiệu quả trong trường hợp các thao tác chèn thêm hoặc xóa bớt thường xuyên diễn ra, hoặc trong trường hợp muốn quản lý bộ nhớ động, tức bộ nhớ thay đổi trong khi chạy chương trình, chứ không cố định từ đầu.  

!!! note "Các loại danh sách liên kết"
    Có nhiều loại danh sách liên kết, ví dụ như: danh sách liên kết đơn, danh sách liên kết đôi, danh sách liên kết vòng, v.v...   
    Mặc định, các nội dung trong bài này đều đề cập **danh sách liên kết đơn** và chỉ gọi tắt là *danh sách liên kết*.  

## Các thao tác trên danh sách liên kết

Ngoài thành phần `data`, mỗi node còn có thành phần `next` trỏ đến node liền sau nó, giúp các node liên kết được với nhau. Các thao tác thêm node và xóa node thực chất đều là thay đổi thành phần `next` này, nghĩa là thay đổi liên kết giữa các node.  

!!! warning "Về mã lệnh trong bài này"
    Việc viết mã lệnh để minh họa danh sách liên kết trong bài này đòi hỏi hiểu biết về lập trình hướng đối tượng và kỹ thuật lập trình, là kiến thức nằm ngoài chương trình phổ thông. Do đó, một số câu lệnh sẽ chỉ diễn giải sơ nét. Bạn có thể ghép các đoạn mã lệnh thành chương trình hoàn chỉnh để chạy mà không cần quá quan tâm chi tiết kỹ thuật, hoặc bạn chỉ cần nắm ý tưởng của danh sách liên kết, không cần quan tâm mã lệnh.   

### Khởi tạo danh sách liên kết

Để khởi tạo một danh sách liên kết gồm 3 node, ta thực hiện theo những bước sau. Giả sử, mỗi node chỉ chứa dữ liệu là một ký tự.  

**Bước 1:**  
Tạo kiểu dữ liệu `node` gồm hai thành phần `data` và `next`.  

``` py linenums="1"
# Tạo kiểu dữ liệu node gồm hai thành phần data và next
class node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

**Bước 2:**  
Tạo kiểu dữ liệu danh sách liên kết, đặt tên là `linked_list`. Kiểu dữ liệu `linked_list` này có thuộc tính `head` dùng để nắm giữ node đầu tiên trong danh sách liên kết.  

``` py linenums="7"
# Tạo kiểu dữ liệu danh sách liên kết, đặt tên là linked_list.
class linked_list:
    def __init__(self):
        self.head = None # (1)!
```

1. Thuộc tính `head` *tạm thời* trỏ đến `None`, do lệnh này chỉ là khai báo mang tính thủ tục.  

**Bước 3:**  
Trong chương trình chính, ta khai báo biến danh sách liên kết, đặt tên là `L`. Lúc này, danh sách liên kết `L` là rỗng, chưa có node nào, do thuộc tính `head` của `L` đang trỏ đến `None` như khai báo tại bước 2.  

``` py linenums="77"
# Chương trình chính
# Khai báo biến danh sách liên kết L
L = linked_list()
```

**Bước 4:**  
Khởi tạo 3 node, lần lượt đặt tên là `first_node`, `second_node` và `third_node`, chứa dữ liệu lần lượt là `'o'`, `'l'` và `'d'`. Lúc này, cả 3 node đều đơn lẻ, rời rạc, chưa có kết nối với nhau.  

``` py linenums="80"
# Khởi tạo 3 node đơn lẻ
first_node = node('o')
second_node = node('l')
third_node = node('d')
```

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc9PaDidMUbAdU-IeUMbjZzGevPkCz34HkCYVRQmLjQX7HUWdSqPVZVKkLcl-W9fmsulYTsqLDexmgdSNbRJCLNBPZ47j7FvZl9hP2kFKnHki-jejk3J=w420){ width="420", loading=lazy }
  <figcaption>Hình 4. Ba node đơn lẻ</figcaption>
</figure>


**Bước 5:**  
Liên kết các node với nhau bằng cách cho thuộc tính `head` của `L` trỏ đến một node nào đó, rồi cho node này trỏ đến một node khác, và cứ như thế đối với các node còn lại.   
- **Bước 5.1**: Cho `head` của `L` trỏ đến `first_node`.  
- **Bước 5.2**: Cho `next` của `first_node` trỏ đến `second_node`.  
- **Bước 5.3**: Cho `next` của `second_node` trỏ đến `third_node`.  

``` py linenums="85"
# Liên kết các node với nhau
# Cho head của L trỏ đến first_node
L.head = first_node

# Cho first_node trỏ đến second_node
first_node.next = second_node

# Cho second_node trỏ đến third_node
second_node.next = third_node
```

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc81kPoq8KzTa0EgAFH4NBgB8XPdlBL2zmMYw-xysFyZk2_D84nGfAam_FClimgpCgqP8BWE_GZnbuJNomcAVrX4hmJAzAzy72XEgIwENz2DVGR9JrLm=w420){ width="420", loading=lazy }
  <figcaption>Hình 5. Danh sách liên kết L gồm 3 node</figcaption>
</figure>

### Duyệt danh sách liên kết

Duyệt danh sách liên kết là tiến trình di chuyển lần lượt qua các node, xuất phát từ node đầu tiên, do biến `head` trỏ đến, cho đến node cuối cùng, là node có thành phần `next` trỏ đến `None`.  

Để duyệt danh sách liên kết, ta sử dụng một biến `current`, ban đầu trỏ đến node đầu tiên; rồi dùng vòng lặp cho biến `current` lần lượt trỏ đến các node tiếp theo, cho đến khi gặp `None`.  

Hàm sau đây thực hiện duyệt danh sách liên kết và in ra màn hình dữ liệu của từng node.  

``` py linenums="13"
# Hàm in ra dữ liệu của các node trong danh sách liên kết
def print_linked_list(l, message):
    print(message)  # In ra thông báo nào đó
    
    current =  l.head                       # Cho current trỏ đến head
    while current is not None:              # Trong khi chưa gặp None, tức vẫn còn node để duyệt
        print(current.data , end = ' -> ')  # thì in ra data của current, kèm theo mũi tên
        current = current.next              # Cho current trỏ đến node tiếp theo
    
    print()  # Xuống dòng
```

Trong chương trình chính, ta gọi hàm vừa viết trên.  

``` py linenums="95"
# Gọi hàm print_linked_list để in ra danh sách liên kết
print_linked_list(L, 'Danh sách liên kết ban đầu')
```

Output:
``` pycon
Danh sách liên kết ban đầu
o -> l -> d -> 
```

### Chèn vào trước một node có dữ liệu key

Giả sử node có dữ liệu `key` đã tồn tại trong danh sách liên kết và không phải là node đầu tiên.  

Để chèn node mới vào trước node `key`, ta thực hiện các bước sau:  

**Bước 0:**  
Tạo node mới, đặt tên là `new_node`, chứa dữ liệu `new_data`.  

**Bước 1:**  
Duyệt danh sách liên kết bằng hai biến `previous` và `current` cho đến khi tìm thấy node `key`:  
- **Bước 1.1:** Cho `current` trỏ đến node đầu tiên.  
- **Bước 1.2:** Dùng vòng lặp để tìm node có dữ liệu `key`:  
&emsp;&emsp;- Nếu tìm thấy `key` thì ngắt vòng lặp. Chuyển sang bước 2.  
&emsp;&emsp;- Ngược lại, chưa tìm thấy, thì cho `previous` thay thế `current` và cho `current` di chuyển đến node tiếp theo.  

Bước 1.2 mang ý nghĩa rằng, biến `previous` luôn bước *nối gót* theo biến `current`.  

**Bước 2:**
Cho `next` của node mới trỏ đến `current`.  

**Bước 3:**
Cho `next` của `previous` trỏ đến node mới.  

Bước 2 và bước 3 mang ý nghĩa thay đổi các liên kết để node mới được chèn vào giữa node `previous` và node `current`.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc_9topMzhZ-8RTRXzsHVmnZh4MTLseD2RM2JnJVilG9SEVRoflwAZyr-aaQgpjHln9vFg1sgqnWAk-GQqn6f5y_8boXV-bbSTs6EdtCA2RKmVnXr3-s=w480){ width="480", loading=lazy }
  <figcaption>Hình 6. Minh họa thao tác chèn trước</figcaption>
</figure>

Hàm chèn thêm một node mới vào trước node có dữ liệu `key` được viết như sau:  

``` py linenums="25"
# Hàm chèn vào trước một node có dữ liệu key
def insert_before(l, key, new_data):        
    # Tạo node mới
    new_node = node(new_data) 
    
    # Cho current trỏ đến node đầu tiên
    current = l.head
    
    # Dùng vòng lặp để tìm node có dữ liệu key
    while current is not None:
         # Nếu tìm thấy key thì ngắt vòng lặp
        if current.data == key:
            break

        # Ngược lại, chưa tìm thấy, thì cho previous thay thế current
        previous = current
        
        # và cho current di chuyển đến node tiếp theo
        current = current.next

    # Cho next của node mới trỏ đến current
    new_node.next = current
    
    # Cho next của previous trỏ đến node mới
    previous.next = new_node
```

Trong chương trình chính, ta gọi hàm vừa viết trên.  

``` py linenums="98"
# Gọi hàm insert_before để chèn thêm node mới có dữ liệu 'y' vào trước node có dữ liệu 'd'
insert_before(L, 'd', 'y')

# Gọi hàm print_linked_list để in ra danh sách liên kết
print_linked_list(L, 'Danh sách liên kết sau khi chèn thêm')
```

Output:  
``` pycon
Danh sách liên kết ban đầu
o -> l -> d -> 
Danh sách liên kết sau khi chèn thêm
o -> l -> y -> d -> 
```

!!! warning "Lưu ý"
    Như đã nói trên, hàm này áp dụng cho trường hợp lý tưởng, đó là node `key` có tồn tại trong danh sách liên kết và không phải là node đầu tiên.  
    Khi viết đầy đủ, ta cần xét thêm các trường hợp:  
    - Danh sách liên kết rỗng, chưa có node nào.  
    - Node `key` là node đầu tiên.  
    - Node `key` không tồn tại, nghĩa là duyệt hết danh sách liên kết mà vẫn không tìm thấy `key`.  

### Xóa node có dữ liệu key

Giả sử node có dữ liệu `key` đã tồn tại trong danh sách liên kết và không phải là node đầu tiên.  

Để xóa node có dữ liệu `key`, ta thực hiện các bước sau:  

**Bước 1:**  
Duyệt danh sách liên kết bằng hai biến `previous` và `current` cho đến khi tìm thấy node `key`:  
- **Bước 1.1:** Cho `current` trỏ đến node đầu tiên.  
- **Bước 1.2:** Dùng vòng lặp để tìm node có dữ liệu `key`:  
&emsp;&emsp;- Nếu tìm thấy `key` thì ngắt vòng lặp. Chuyển sang bước 2.  
&emsp;&emsp;- Ngược lại, chưa tìm thấy, thì cho `previous` thay thế `current` và cho `current` di chuyển đến node tiếp theo.  

Tương tự thao tác chèn, tại bước 1.2 này, ta cũng cho biến `previous` di chuyển *nối gót* biến `current`.  

**Bước 2:**  
Ngắt liên kết đến `current` (là node chứa dữ liệu `key` cần xóa) bằng cách cho `next` của `previous` trỏ đến node liền sau `current`.  

**Bước 3:**  
Xóa `current`.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc9khpjHOo9_7Yz3a0hNC49a0u1qAfbBgWsf6i4N9s4JQxye20J98Il2uw1lyNYdTDuWQTS-wOJFsjBqF3r2TBWLVhna63xOr1RJ8Cw80cXoIA2A9Xf0=w480){ width="480", loading=lazy }
  <figcaption>Hình 7. Minh họa thao tác xóa</figcaption>
</figure>

``` py linenums="52"
# Hàm xóa node có dữ liệu key
def remove(self, key):
    # Cho current trỏ đến node đầu tiên
    current = self.head

    # Dùng vòng lặp để tìm node có dữ liệu key
    while current is not None:
        # Nếu tìm thấy key thì ngắt vòng lặp
        if current.data == key:
            break

        # Ngược lại, nếu chưa tìm thấy, thì cho previous thay thế current
        previous = current

        # và current di chuyển đến node tiếp theo
        current = current.next

    # Ngắt liên kết đến current bằng cách cho next của previous trỏ đến node liền sau current 
    previous.next = current.next

    # Xóa curent
    del current
```

Trong chương trình chính, ta gọi hàm vừa viết trên.  

``` py linenums="95"
# Gọi hàm print_linked_list để in ra danh sách liên kết
print_linked_list(L, 'Danh sách liên kết ban đầu')

# Gọi hàm insert_before để chèn thêm node mới có dữ liệu 'y' vào trước node có dữ liệu 'l'
insert_before(L, 'l', 'y')

# Gọi hàm print_linked_list để in ra danh sách liên kết
print_linked_list(L, 'Danh sách liên kết sau khi chèn thêm')

# Gọi hàm remove để xóa node có dữ liệu 'y'
remove(L, 'y')

# Gọi hàm print_linked_list để in ra danh sách liên kết
print_linked_list(L, 'Danh sách liên kết sau khi  xóa node')
```

Output:  
``` pycon
Danh sách liên kết ban đầu
o -> l -> d -> 
Danh sách liên kết sau khi chèn thêm
o -> l -> y -> d -> 
Danh sách liên kết sau khi  xóa node
o -> l -> d -> 
```

!!! warning "Lưu ý"
    Hàm này cũng áp dụng cho trường hợp lý tưởng, đó là node `key` cần xóa có tồn tại trong danh sách liên kết và không phải là node đầu tiên.  
    Khi viết đầy đủ, ta cần xét thêm các trường hợp:  
    - Danh sách liên kết rỗng, chưa có node nào.  
    - Node `key` là node đầu tiên.  
    - Node `key` không tồn tại, nghĩa là duyệt hết danh sách liên kết mà vẫn không tìm thấy `key`.  

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1erfVlrVQm3g5DRsLROjWFEjDlhLEglPu?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| danh sách liên kết đôi | doubly linked list |
| danh sách liên kết đơn | singly linked list |
| danh sách liên kết vòng | circular linked list |