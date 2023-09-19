# Bài toán và thuật toán tìm kiếm

## Đặt vấn đề

Nhu cầu về thông tin của con người là thiết yếu, trong khi lượng dữ liệu lưu trữ trên các hệ thống là rất lớn. Làm sao con người có thể truy xuất được ngay thông tin mình đang cần trong bể thông tin cực lớn đó?  

## Bài toán tìm kiếm

### Phát biểu bài toán tìm kiếm

Bài toán tìm kiếm là bài toán đề cập đến việc tìm ra một phần tử cụ thể trong một tập hợp cho trước.   

!!! abstract "Bài toán tìm kiếm có thể được phát biểu tổng quát như sau:"
    Các yếu tố cho trước:  
    - Một tập hợp gồm hữu hạn phần tử.  
    - Một phần tử đích cần tìm đang nằm trong tập hợp này.  

    Nhiệm vụ:  
    - Xác định phần tử đích có tồn tại trong tập hợp đang xét hay không.  
    - Nếu có, chỉ ra vị trí hoặc những thông tin liên quan của phần tử này.  

Trong bài viết này, phạm vi của bài toán tìm kiếm được giới hạn trong mảng một chiều, với phần tử đích cần tìm là phần tử có giá trị *key* nào đó.  

!!! abstract "Phát biểu bài toán tìm kiếm trên mảng"
    Input:  
    - Mảng một chiều *A* gồm *n* phần tử đều là số nguyên.  
    - Giá trị *key* của phần tử cần tìm.  

    Output:  
    - Vị trí của phần tử *key* trong mảng *A* hoặc *-1* nếu không tìm thấy.  

??? info "Lợi ích và ứng dụng của bài toán tìm kiếm"
    Về cơ bản, *tìm kiếm* là cách tương tác với dữ liệu đem lại nhiều lợi ích. *Tìm kiếm* giúp phát hiện ra thông tin liên quan, hiểu rõ hơn về một sự vật, hiện tượng từ lượng dữ liệu khổng lồ, giúp đưa ra quyết định, tự động hóa các quy trình. Nói chung, *tìm kiếm* là cải thiện khả năng tương tác và sử dụng thông tin trong thế giới số ngày nay.  

    Bài toán tìm kiếm diễn ra trong những tình huống sau:  
    - Tìm một mẫu thông tin trong hệ thống. Đó có thể là một từ ngữ trong tài liệu, một số điện thoại trong danh bạ, một tập tin trong máy, một quyển sách trong thư viện.  
    - Truy vấn cơ sở dữ liệu để lấy được các mẫu tin liên quan. Chẳng hạn, khách hàng truy vấn cơ sở dữ liệu của một sàn thương mại điện tử để tìm sản phẩm, giá cả, khuyến mãi.  
    - Bộ máy tìm kiếm giúp người dùng *truy hồi* được thông tin theo nhu cầu, chẳng hạn *truy hồi* những tài liệu hoặc trang web liên quan từ các tài nguyên trên mạng.  
    - Tìm ra giải pháp tối ưu trong số các giải pháp khả thi cho một bài toán nào đó, chẳng hạn tìm đường đi ngắn nhất hoặc tốn chi phí ít nhất.  
    - Các chuyên gia phân tích dữ liệu thực hiện tìm kiếm để xác định các mẫu của thông tin, các xu hướng, các điểm tương quan trong các tập dữ liệu, từ đó rút ra những hiểu biết và kết luận về đối tượng liên quan.
    - Phát hiện những điểm bất thường giúp hệ thống xác định những vấn đề tiềm ẩn, để kích hoạt cảnh báo hoặc có hành động tương ứng.  
    - v.v...  

## Thuật toán tìm kiếm

Có nhiều thuật toán tìm kiếm khác nhau ứng với các yếu tố khác nhau như: loại dữ liệu, kích thước của tập dữ liệu, cách thức tổ chức và lưu trữ dữ liệu.  

Đối với bài toán phát biểu ở mục trên, bài viết này chỉ đề cập đến hai thuật toán cơ bản là: **tìm kiếm tuần tự** và **tìm kiếm nhị phân**.

### Tìm kiếm tuần tự

#### Ý tưởng

- Duyệt toàn bộ mảng từ phần tử đầu đến phần tử cuối, lặp thao tác sau:  
&nbsp;&nbsp;&nbsp;&nbsp;Nếu phần tử `A[i]` đang xét bằng `key` cần tìm thì trả về `i`, là vị trí tìm thấy.  
- Nếu đã duyệt hết mảng mà chưa trả về `i` nào, thì trả về `-1`. (`-1` là tín hiệu quy ước cho biết không tìm thấy)  

#### Lưu đồ thuật toán

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc-lkJCvcFt-LTcZslNT6vC3CrVoLyA4NZp11LnCCFaLW4-jPAvFwCqNAr3SP0GHAJaYaNC9C9ZKqjG-buN4CQkk0KJSvpj3axacjL_4bmgGwI9qPvdM=w2400){ width="1200", loading=lazy }
  <figcaption>Hình 1. Lưu đồ thuật toán tìm kiếm tuần tự</figcaption>
</figure>

#### Chương trình minh họa
``` py linenums="1"
def linear_search(A, key):
    for i in range(len(A)):  # Duyệt mảng từ đầu đến cuối
        if A[i] == key:      # Nếu phần tử đang xét A[i] bằng key cần tìm
            return i         # thì trả về i, là vị trí tìm thấy
    
    return -1                # Trả về -1 vì đã duyệt hết mảng mà chưa trả về  i nào

#---------------------------------
# Chương trình chính
array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
key = int(input('Please enter the key to be searched for: '))

found_at = linear_search(array, key)  # Gợi hàm linear_search

if found_at == -1:
    print('Not found')
else:
    print('Found at position', found_at)
```

Output:  
``` pycon
Please enter the key to be searched for: 8
Found at position 6
```

??? note "Nhận xét"
    Nếu `key` xuất hiện nhiều lần trong mảng, thì thuật toán tìm kiếm tuần tự sẽ trả về **vị trí xuất hiện đầu tiên** của `key` theo trình tự duyệt mảng.  

### Tìm kiếm nhị phân
#### Ý tưởng

Ý tưởng chính của thuật toán là chia mảng thành hai mảng con *trái* và *phải*, và xét xem `key` cần tìm nằm ở mảng con nào. Việc chia đôi mảng được lặp lại nhiều lần, nghĩa là mảng dần dần thu nhỏ lại, cho đến khi tìm thấy `key` hoặc không còn chia đôi được nữa. Cụ thể:

- Đặt mốc trái `left` là 0, mốc phải `right` là vị trí cuối của mảng.  

- Trong khi mốc trái vẫn chưa vượt quá mốc phải, lặp các thao tác sau:  
&nbsp;&nbsp;&nbsp;&nbsp;- Xác định vị trí giữa `mid` bằng mốc trái cộng mốc phải chia 2.  
&nbsp;&nbsp;&nbsp;&nbsp;- Nếu `A[mid]` bằng `key` cần tìm thì trả về `mid`, là vị trí tìm thấy.  
&nbsp;&nbsp;&nbsp;&nbsp;- Nếu `A[mid]` nhỏ hơn `key` thì *dời* mốc trái `left` để xét mảng con bên phải.  
&nbsp;&nbsp;&nbsp;&nbsp;- Nếu `A[mid]` lớn hơn `key` thì *dời* mốc phải `right` để xét mảng con bên trái.    

- Nếu mốc trái đã vượt quá mốc phải mà chưa trả về `mid` nào thì trả về -1. (-1 là tín hiệu quy ước cho biết không tìm thấy)  

#### Lưu đồ thuật toán

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc-shb1iP3_sml0YcU4G-uEDweNAsx9FYmZNlefhk0qelzhte5UGEcFHyNAGYCepFTYFQB-P5xvKZ_nZJGYGyPG7WYZ3ZKmAbXOen7bFfIiFFTINtlqI=w1200){ width="1200", loading=lazy }
  <figcaption>Hình 2. Lưu đồ thuật toán tìm kiếm nhị phân</figcaption>
</figure>

#### Chương trình minh họa

``` py linenums="1"
def binary_search(A, key):
    left = 0            # Mốc trái
    right = len(A) - 1  # Mốc phải
    
    while left <= right:           # Trong khi mốc trái chưa vượt quá mốc phải
        mid = (left + right) // 2  # thì xác định vị trí giữa
        
        if A[mid] == key:          # Nếu phần tử giữa bằng key
            return mid             # thì trả về vị trí giữa
        elif A[mid] < key:         # Nếu phần tử giữa nhỏ hơn key
            left = mid + 1         # thì xét đoạn bên phải
        else:                      # Ngược lại, phần tử giữa lớn hơn key
            right = mid - 1        # thì xét đoạn bên trái
    
    return -1  # Trả về -1 vì mốc trái đã vượt quá mốc phải

#---------------------------------
# Chương trình chính
array = [0, 1, 2, 4, 4, 4, 7, 8, 8, 9]
key = int(input('Please enter the key to be searched for: '))

found_at = binary_search(array, key)  # Gọi hàm binary_search

if found_at == -1:
    print('Not found')
else:
    print('Found at position', found_at)
```

Output:

``` pycon
Please enter the key to be searched for: 8
Found at position 7
```

??? note "Nhận xét"
    - Muốn thực hiện tìm kiếm nhị phân, trước hết mảng phải được sắp thứ tự, tăng dần hoặc giảm dần.  
    - Nếu `key` xuất hiện nhiều lần trong mảng, thì vị trí trả về của tìm kiếm nhị phân không phải là vị trí xuất hiện đầu tiên của `key` tính từ đầu mảng, mà phụ thuộc vào các yếu tố như: phép chia khi tính `mid`, trình tự của các câu lệnh if. Với chương trình minh họa trên, vị trí trả về sẽ là **vị trí gần `mid` nhất**.  

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1xhy3RfkEaeQQuWfXm1b5Ev_txYnw9jjr?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán và thuật toán tìm kiếm | searching problem, searching algorithm |
| tìm kiếm nhị phân | binary search | 
| tìm kiếm tuần tự | sequential search, linear search[^1] | 


 [^1]: Cả hai thuật ngữ này đều có thể được sử dụng thay thế cho nhau, trong đó *linear search*, nghĩa là *tìm kiếm tuyến tính*, được sử dụng rộng rãi hơn trong các tài liệu nước ngoài. Song bằng một cách nào đó, sách giáo khoa ở nước ta lại chỉ dịch là *tìm kiếm tuần tự*.  