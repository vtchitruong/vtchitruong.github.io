# Cấu trúc dữ liệu danh sách liên kết

## Đặt vấn đề

Khi xử lý bảng điểm môn Tin học của một lớp gồm 30 học sinh, việc đặt 30 biến có vẻ không ổn. Thử xem đoạn mã khai báo sau đây bất tiện như thế nào.  

``` py
hs1 = 10
hs2 = 9
hs3 = 9.5 
.
.
# vân vân mây mây, còn nữa nha...

hs29 = 9.1
hs30 = 9.4
```

Nếu số học sinh nhiều hơn, chẳng hạn 500 học sinh cả khối, thì việc khai báo từng biến là hoàn toàn bất khả thi.  

May thay, các ngôn ngữ lập trình đều có hỗ trợ những *kiểu dữ liệu* dành cho trường hợp bảng điểm như trên.  

Python cũng vậy. Một trong những *kiểu dữ liệu* của Python có thể giúp xử lý tập hợp nhiều dữ liệu là kiểu `list`.  

## Khái niệm

`list` là  1 trong 4 kiểu dữ liệu *chuẩn* của Python.  

`list` được dùng để lưu trữ và xử lý tập hợp dữ liệu gồm nhiều **phần tử**.  Các phần tử có thể có kiểu dữ liệu khác nhau, chẳng hạn phần tử này kiểu `int`, phần tử kia kiểu `float`, một phần tử khác kiểu `bool`, thậm chí một phần tử khác nữa kiểu `list`.  

`list` cho phép thay đổi, chẳng hạn như thêm phần tử, xóa phần tử, thay đổi giá trị của phần tử.  

## Khai báo danh sách

Một *danh sách* được khai báo bằng cách đặt các phần tử trong **cặp ngoặc vuông** `[ ]`, các phần tử phân cách nhau bằng **dấu phẩy** `,`  

Ví dụ 1:  
Khai báo bảng điểm Tin học của 10 học sinh. Giả sử điểm số chỉ là số nguyên.  

``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]
print(bangdiem)     # In ra toàn bộ danh sách
print(bangdiem[9])  # In ra phần tử có chỉ số 9
```

Ví dụ 2:  
Khai báo danh sách rỗng, chưa có phần tử.  

``` py linenums="1"
bangdiem = []
print(bangdiem)
```

## Truy xuất phần tử

Mỗi phần tử của một *danh sách* có *chỉ số* riêng (index), bắt đầu từ ***0***.  
Nói cách khác, phần tử đầu tiên có chỉ số là ***0***,  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;phần tử tiếp theo có chỉ số là ***1***,  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;phần tử tiếp theo nữa có chỉ số là ***2***,  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;phần tử cuối cùng có chỉ số là ***n - 1***, với *n* là số lượng phần tử của danh sách đó.  

Như vậy, mỗi phần tử có 2 yếu tố: ***chỉ số*** và ***giá trị***.

Để truy xuất phần tử, ta sử dụng *chỉ số* đặt trong *cặp ngoặc vuông* `[]`.  

Ví dụ 3:  

``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

print(bangdiem[0])     # In phần tử đầu tiên
print(bangdiem[1])     # In phần tử có chỉ số là 1

n = len(bangdiem)      # Hàm len cho biết số lượng phần tử của danh sách này
print(bangdiem[n - 1]) # In phần tử cuối cùng
```

## Duyệt các phần tử trong danh sách

Trong cùng một danh sách, các phần tử thường được xử lý như nhau. Nghĩa là, những thao tác nào được thực hiện đối với phần tử này, cũng sẽ được thực hiện đối với phần tử khác.  

Nói cách khác, các thao tác xử lý sẽ được lặp đi lặp lại nhiều lần. Do đó, khi xử lý danh sách, ta thường sử dụng vòng lặp `for`.  

Ví dụ 4:  
In các điểm số trên từng dòng.  

``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

n = len(bangdiem)
for i in range(n):
    print(bangdiem[i])
```

### Toán tử in
Một cách khác để duyệt danh sách mà không cần dùng chỉ số, là sử dụng toán tử `in`.  

Ví dụ 5:  

``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

for diem in bangdiem:
    print(diem)
```

Nếu muốn xử lý các phần tử theo các hướng khác nhau, ta có thể sử dụng lệnh `if` bên trong thân vòng lặp `for`.

Ví dụ 6:  
In ra những điểm số dưới trung bình (điểm nhỏ hơn 5).  

``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

n = len(bangdiem)
for i in range(n):
    if bangdiem[i] < 5:
        print(bangdiem[i])
```

## Các lệnh xử lý danh sách có sẵn của Python

Python cung cấp sẵn nhiều lệnh giúp cho việc thao tác với danh sách được tiện lợi. Sau đây là một số lệnh phổ biến:  

### Thêm phần tử

`append`: Thêm phần tử vào cuối danh sách.  
`insert`: Thêm phần tử vào vị trí cụ thể.

### Xóa phần tử

`remove`: Xóa phần tử có giá trị cụ thể.  
`pop`: Xóa phần tử có chỉ số cụ thể. 
`del`: Xóa phần tử có chỉ số cụ thể, gần giống `pop`. 

### Xóa danh sách

`clear`: Xóa tất cả phần tử trong danh sách, nhưng danh sách vẫn còn, nghĩa là trở thành danh sách rỗng.  
`del`: Xóa cả danh sách.  

Ví dụ 7:  
``` py linenums="1"
bangdiem = [8, 9, 3, 5, 10, 10, 7, 8, 4, 6]

#------------------------------------------------------------
bangdiem.append(5) # Thêm 5 vào cuối danh sách
bangdiem.append(7) # Thêm 7 vào cuối danh sách

bangdiem.insert(0, 10) # Thêm 10 vào đầu danh sách
bangdiem.insert(0, 2)  # Tiếp tục thêm 2 vào đầu danh sách

print('Sau khi thêm phần tử:', bangdiem)

#------------------------------------------------------------
bangdiem.remove(10) # Xóa điểm 10 đầu tiên trong số 3 điểm 10
bangdiem.pop(0)     # Xóa phần tử đầu tiên
bangdiem.pop()      # Nếu không chỉ định chỉ số, mặc định pop sẽ xóa phần tử cuối cùng

print('Sau khi xóa phần tử:', bangdiem)

#------------------------------------------------------------
bangdiem.clear() # Xóa tất cả phần tử
print('Sau khi xóa tất cả phần tử:', bangdiem)

#------------------------------------------------------------
del bangdiem      # Xóa luôn danh sách bangdiem
# print(bangdiem) # Lệnh này sẽ gặp lỗi, vì lúc này không còn bangdiem nào nữa
```

!!! warning "Lưu ý"
    Mặc dù có lệnh xóa danh sách, song nói chung, xóa toàn bộ dữ liệu là việc không nên.

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1H_MnLvHvWfn22yIZWVBJH2Sr7nsv6Mkl?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

