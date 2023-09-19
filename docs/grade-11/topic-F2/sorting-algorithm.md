# Bài toán và thuật toán sắp xếp

## Đặt vấn đề

Trong lập trình, sắp xếp dữ liệu là thao tác quan trọng vì nó làm cho tập dữ liệu trở nên dễ đọc hơn đối với mọi người. Đồng thời, sắp xếp cũng giúp cho việc tìm kiếm và xử lý dữ liệu được thuận tiện hơn.  

## Bài toán sắp xếp

### Phát biểu bài toán sắp xếp

Sắp xếp là quy trình tổ chức lại dữ liệu theo một thứ tự có nghĩa nào đó, chẳng hạn thứ tự theo bảng chữ cái, thứ tự từ thấp đến cao, thứ tự từ ngắn đến dài, hoặc một thứ tự phù hợp yêu cầu.    

Trong bài học này, ta chỉ xét bài toán đơn giản là sắp xếp mảng các số nguyên theo thứ tự *không giảm*, nghĩa là phần tử liền sau lớn hơn hoặc bằng phần tử liền trước. Từ đây trở đi gọi là thứ tự *tăng dần*.

!!! abstract "Phát biểu bài toán sắp xếp trên mảng"
    Input:  
    - Mảng một chiều *A* gồm *n* phần tử đều là số nguyên.  
 
    Output:  
    - Mảng một chiều *A* có thự tự tăng dần.  

??? info "Ứng dụng của bài toán sắp xếp"
    Nhìn chung, có hai loại ứng dụng quan trọng của thuật toán sắp xếp, đó là hỗ trợ tìm kiếm thông tin và so khớp dữ liệu. Ví dụ:
    - Sắp xếp mã định danh, họ tên, thời gian, nơi chốn, v.v... trong các ứng dụng quản lý.
    - Dữ liệu có thứ tự giúp tăng hiệu quả tìm kiếm thông qua việc sử dụng các thuật toán theo khoảng như tìm kiếm nhị phân.
    - Sắp xếp các cạnh theo trọng số trong các thuật toán liên quan đến đồ thị như Prim, Dijkstra, Kruscal, v.v...
    - Những bài toán liên quan đến xử lý chuỗi.
    - Những bài toán lập mô hình để mô phỏng thế giới thực.

    Hiện nay, các ngôn ngữ lập trình và hệ thống phần mềm đã có sẵn công cụ trợ giúp sắp xếp để người dùng thao tác tiện lợi hơn. Song việc tìm hiểu các thuật toán sắp xếp vẫn là cần thiết giúp người học phát triển tư duy và kỹ năng lập trình.


## Thuật toán sắp xếp

Một cách tổng quát, thuật toán sắp xếp là thuật toán đặt các phần tử của mảng vào đúng vị trí thỏa yêu cầu cho trước hoặc gom nhóm các phần tử có cùng tính chất.  

Có nhiều thuật toán sắp xếp mà hầu hết trong số đó thực hiện thao tác so sánh các phần tử với nhau để xác định một phần tử sẽ đứng trước hay đứng sau một phần tử khác.  

Đối với bài toán sắp mảng các số nguyên nêu trên, bài học này đề cập những thuật toán sau:  
- Sắp xếp chọn  
- Sắp xếp chèn  
- Sắp xếp nổi bọt  
- Sắp xếp tráo đổi  

### Sắp xếp chọn

#### Ý tưởng

Duyệt mảng từ đầu đến cuối, lặp lại nhiều lần thao tác:  
&emsp;- Với một phần tử `A[i]` đang xét, tìm phần tử nhỏ nhất `A[m]` tính từ vị trí `i` đến cuối mảng.  
&emsp;- Hoán vị `A[i]` và `A[m]`.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc9RkBSDPntP56FORrBZO6fr7DhPuf7UoMxNKnlRl8hbKD6v71qgP1I5elM08oOQtCq6_ZD4LLbd6upKLXn6oyC8TgTNBp856pnmoLp-eF537ZLxxjCy=w1200){loading=lazy}  
  <figcaption>Hình 1. Minh họa ý tưởng thuật toán sắp xếp chọn</figcaption>  
</figure>

Xem mô phỏng thuật toán tại mục [Trực quan hóa](#truc-quan-hoa-thuat-toan-sap-xep) ở gần cuối bài này.  

#### Chương trình minh họa

``` py linenums="1"
# Hàm tìm vị trí của phần tử nhỏ nhất trong mảng tính từ vị trí start
def min_position(A, start):
    n = len(A)

    min = start
    for i in range(start + 1, n):
        if A[i] < A[min]:
            min = i
    return min

# Hàm sắp xếp chọn
def selection_sort(A):
    n = len(A)
    
    for i in range(n - 1):
        # Tìm vị trí của phần tử nhỏ nhất tính từ i
        m = min_position(A, i)

        # Hoán đổi A[i] và A[m]
        A[i], A[m] = A[m], A[i]

#---------------------------------
# Chương trình chính
array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
selection_sort(array)   # Gọi hàm selection_sort

print('Mảng sau khi sắp xếp:', array)
```

### Sắp xếp chèn
#### Ý tưởng

Ý tưởng của thuật toán có thể được minh họa qua hình ảnh cả lớp đang xếp một hàng dọc. Tại một bạn Tèo nào đó đang xét, lần lượt các bạn đứng trước Tèo mà cao hơn Tèo lùi về sau một vị trí, cho đến khi *gặp* một bạn không cao hơn Tèo thì dừng. Lúc này, do các bạn cao đã lùi về sau, một chỗ trống sẽ *lộ ra* để Tèo đứng chèn vào.   

Dựa vào hình ảnh trên, thuật toán sắp xếp chèn được mô tả như sau:  

Duyệt mảng từ đầu đến cuối, lặp các thao tác:  
&nbsp;&nbsp;&nbsp;&nbsp;- Tại một phần tử `A[i]` đang xét, lần lượt duyệt các phần tử `A[j]` đứng trước `A[i]` theo hướng từ `i` ngược về đầu mảng, cho đến khi *gặp* được một `A[j]` không lớn hơn`A[i]` thì dừng. Trong khi duyệt ngược, cho các `A[j]` lùi về sau một vị trí.    
&nbsp;&nbsp;&nbsp;&nbsp;- Cho `A[i]` chèn vào *chỗ trống* được tạo ra do các `A[j]` lùi về sau để lại.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc8Ob8ZlZeKTqBsNuxA7nG1u3RvcBDtTMOEhrpHvQUAKKlV0AE_YiX4RdccEgTHG5LCcysq9vSTmPZc84Z65hbMfxRDDzErkFrsItxEIpMBB1tluH94n=w1200){loading=lazy}  
  <figcaption>Hình 2. Minh họa ý tưởng thuật toán sắp xếp chèn</figcaption>  
</figure>

Xem mô phỏng thuật toán tại mục [Trực quan hóa](#truc-quan-hoa-thuat-toan-sap-xep) ở gần cuối bài này.  

#### Chương trình minh họa

``` py linenums="1"
# Hàm sắp xếp chèn
def insertion_sort(A):
    n = len(A)

    for i in range(1, n):
        # Lưu A[i] vào biến tạm tmp vì A[i] sẽ bị ghi đè
        tmp = A[i]

        # Xuất phát từ phần tử đứng trước A[i]
        j = i - 1

        # Nếu A[j] nào lớn hơn A[i] (được lưu trong tmp)
        # thì cho A[j] đó "lùi" ra sau (ghi đè lên phần tử đứng sau)
        while j >= 0 and A[j] > tmp:
            A[j + 1] = A[j]
            j = j - 1

        # Chèn A[i] (được lưu trong tmp) vào “chỗ trống”
        A[j + 1] = tmp
```

### Sắp xếp nổi bọt
#### Ý tưởng

Ý tưởng này xuất phát từ hình ảnh các bọt nước ở dưới đáy nổi dần lên trên bề mặt. Khi ở dưới đáy, bọt nước có kích thước nhỏ và khi đến gần bề mặt, bọt nước có kích thước lớn dần.  

Tạm xem đầu mảng là đáy nước và cuối mảng là bề mặt, ta sắp xếp mảng bằng cách lần lượt cho các phần tử lớn hơn *nổi* lên bề mặt. Cụ thể như sau:  

- Duyệt mảng từ đầu đến cuối, lặp thao tác:  
&nbsp;&nbsp;&nbsp;&nbsp;Đổi chỗ 2 phần tử đứng cạnh nhau sao cho phần tử nhỏ lên trước và phần tử lớn ra sau.
- Cứ như thế, các phần tử lớn sẽ *trôi* về phía cuối mảng, và khi duyệt xong, phần tử lớn nhất sẽ về đúng vị trí của nó là ở cuối mảng.
- Với mỗi lần duyệt tiếp theo, phạm vi duyệt sẽ thu nhỏ lại, từ đầu mảng đến phần tử lớn nhất của lần duyệt trước đó, chứ không duyệt hết mảng.  

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc_bsuEeJ8BMLv7hpvBYkIKV6T-lPrO6ECa9qV8co_GTVcP1YLSu2CIELhmiJYoRhc9Kd70Hz4euc6y442hgqnQaU9wZ0cYoA4OGPFFpPHOjQV-PZUTl=w1200){loading=lazy}  
  <figcaption>Hình 3. Minh họa ý tưởng thuật toán sắp xếp nổi bọt</figcaption>  
</figure>

Xem mô phỏng thuật toán tại mục [Trực quan hóa](#truc-quan-hoa-thuat-toan-sap-xep) ở gần cuối bài này.  

#### Chương trình minh họa

``` py linenums="1"
# Hàm sắp xếp nổi bọt
def bubble_sort(A):
    n = len(A)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            # So sánh và hoán đổi hai phần tử kề nhau
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]

#---------------------------------
# Chương trình chính
array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
bubble_sort(array)  # Gọi hàm bubble_sort

print('Mảng sau khi sắp xếp:', array)
```

### Sắp xếp tráo đổi
#### Ý tưởng

- Duyệt mảng từ đầu đến cuối, lặp các thao tác:  
&nbsp;&nbsp;&nbsp;&nbsp;- Tại phần tử `A[i]` đang xét, so sánh `A[i]` với các phần tử nằm bên phải `A[i]`, tạm gọi là `A[j]`, thực hiện *tráo đổi* sao cho phần tử nhỏ qua bên trái và phần tử lớn qua bên phải.  
- Như vậy, sau mỗi lần duyệt, phần tử nhỏ nhất của mảng con (tính từ vị trí `i` đến cuối mảng), sẽ được đưa về vị trí đầu của mảng con đó.

<figure markdown>
  ![Image title](https://lh3.googleusercontent.com/pw/AIL4fc9FXtJjMR06hoP2-aGvoXldgDOfzDrnndiq3eT0k2mJ_WBzvdF9V6-3f_0DC_b5xT6r4kkSLQj2CwPp17LJKCmypjVjTO9LMowclf4UZgiDkprcwii1=w1200){loading=lazy}  
  <figcaption>Hình 4. Minh họa ý tưởng thuật toán sắp xếp tráo đổi</figcaption>  
</figure>

Xem mô phỏng thuật toán tại mục [Trực quan hóa](#truc-quan-hoa-thuat-toan-sap-xep) ở gần cuối bài này.  

#### Chương trình minh họa

``` py linenums="1"
# Hàm sắp xếp tráo đổi
def exchange_sort(A):
    n = len(A)

    for i in range(n - 1):
        # So sánh và “tráo đổi” phần tử ở vị trí i với các phần tử bên phải
        for j in range(i + 1, n):
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]

#---------------------------------
# Chương trình chính
array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
exchange_sort(array)  # Gọi hàm exchange_sort

print('Mảng sau khi sắp xếp:', array)
```

## Trực quan hóa thuật toán sắp xếp

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../sorting-visualize/sort-visualization.html"></iframe>
</div>

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1zkDywixSi1Le7XikA4njlg72Kpz5E7dY?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán đổi (hai phần tử) | swap |
| sắp xếp chèn | insertion sort |
| sắp xếp chọn | selection sort |
| sắp xếp nổi bọt | bubble sort |
| sắp xếp tráo đổi | exchange sort |
| so sánh | compare |