# Thuật toán sắp xếp nổi bọt và sắp xếp tráo đổi

!!! abstract "Tóm lược nội dung"

    Bài này trình bày hai thuật toán sắp xếp:

    - Sắp xếp nổi bọt
    - Sắp xếp tráo đổi

## Đặt vấn đề

Với bảng điểm của lớp, làm sao để lấy ra 10 bạn có điểm số cao nhất hoặc thấp nhất?

Một cách làm đơn giản là ta sắp xếp bảng điểm trước, sau đó mới lấy ra 10 phần tử đầu tiên hoặc 10 phần tử cuối cùng tùy theo yêu cầu.

## Bài toán và thuật toán sắp xếp

Tương tự [bài học trước](https://vtchitruong.github.io/grade-11/topic-F2/sorting-algorithm-selection-insertion/){:target="_blank"}., ta chỉ xét bài toán đơn giản là sắp xếp mảng các số nguyên theo thứ tự **tăng dần**.

Bài viết này đề cập hai thuật toán sau:

- Sắp xếp nổi bọt
- Sắp xếp tráo đổi

## Thuật toán sắp xếp nổi bọt

### Ý tưởng

Ý tưởng của thuật toán xuất phát từ hình ảnh các bọt nước ở dưới đáy nổi dần lên trên bề mặt. Khi ở dưới đáy, bọt nước có kích thước nhỏ và khi đến gần bề mặt, bọt nước có kích thước lớn dần. 

Tạm xem đầu mảng là đáy nước và cuối mảng là bề mặt, ta sắp xếp mảng bằng cách lần lượt cho các phần tử lớn hơn *nổi lên* bề mặt. Cụ thể như sau:  

!!! note "Ý tưởng thuật toán sắp xếp nổi bọt"

    Duyệt mảng từ đầu đến cuối, lặp thao tác:  
    
    - Đổi chỗ hai phần tử đứng cạnh nhau sao cho phần tử nhỏ lên trước và phần tử lớn ra sau.

    Cứ như thế, các phần tử lớn sẽ *trôi* về phía cuối mảng, và sau mỗi lần duyệt, phần tử lớn nhất sẽ về đúng vị trí của nó là ở cuối mảng.

    Với mỗi lần duyệt tiếp theo, phạm vi duyệt sẽ thu nhỏ lại, xuất phát từ đầu mảng cho đến trước phần tử lớn nhất của lần duyệt trước đó.  

<figure markdown>
  ![Image title](sorting-algorithm/bubble-sort-illustration.svg){loading=lazy} 
  <figcaption>Hình 1. Minh họa ý tưởng thuật toán sắp xếp nổi bọt</figcaption>  
</figure>

### Lưu đồ thuật toán

<figure markdown>
  ![Image title](sorting-algorithm/bubble-sort-flowchart.svg){loading=lazy}
  <figcaption>Hình 2. Lưu đồ thuật toán sắp xếp nổi bọt</figcaption>
</figure>

### Trực quan hóa thuật toán

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../sorting-visualize/bubble-sort.html"></iframe>
</div>  

### Chương trình minh họa

``` py linenums="1"
# Hàm sắp xếp nổi bọt
def bubble_sort(A):
    n = len(A)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            # So sánh và hoán vị hai phần tử kề nhau
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]


# Chương trình chính
if __name__ == '__main__':
    array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
    bubble_sort(array)  # Gọi hàm bubble_sort

    print('Mảng sau khi sắp xếp:', array)
```

## Thuật toán sắp xếp tráo đổi

### Ý tưởng

!!! note "Ý tưởng thuật toán sắp xếp tráo đổi"

    Duyệt mảng từ đầu đến cuối, lặp các thao tác:

    - Ứng với mỗi phần tử `A[i]`, so sánh `A[i]` với các phần tử nằm bên phải `A[i]`, tạm gọi là `A[j]`, thực hiện ***tráo đổi*** phần tử đang ở vị trí `i` với phần tử `A[j]` sao cho phần tử nhỏ qua bên trái và phần tử lớn qua bên phải.

    Như vậy, sau mỗi lần duyệt, phần tử nhỏ nhất của mảng con (tính từ vị trí `i` đến cuối mảng), sẽ được đưa về vị trí đầu của mảng con đó, chính là vị trí `i`. 

<figure markdown>
  ![Image title](sorting-algorithm/exchange-sort-illustration.svg){loading=lazy} 
  <figcaption>Hình 3. Minh họa ý tưởng thuật toán sắp xếp tráo đổi</figcaption>  
</figure>

### Lưu đồ thuật toán

<figure markdown>
  ![Image title](sorting-algorithm/exchange-sort-flowchart.svg){loading=lazy}
  <figcaption>Hình 4. Lưu đồ thuật toán sắp xếp tráo đổi</figcaption>
</figure>

### Trực quan hóa thuật toán

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../sorting-visualize/exchange-sort.html"></iframe>
</div>   

### Chương trình minh họa

``` py linenums="1"
# Hàm sắp xếp tráo đổi
def exchange_sort(A):
    n = len(A)
    for i in range(n - 1):
        # So sánh và “tráo đổi” phần tử ở vị trí i với các phần tử bên phải
        for j in range(i + 1, n):
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]


# Chương trình chính
if __name__ == '__main__':
    array = [1, 7, 4, 0, 9, 4, 8, 8, 2, 4]
    exchange_sort(array)  # Gọi hàm exchange_sort

    print('Mảng sau khi sắp xếp:', array)
```

## Sơ đồ tóm tắt nội dung

{!grade-11/topic-F2/sorting-algorithm-bubble-exchange.mm.md!}
*Hình 5. Sơ đồ tóm tắt thuật toán sắp xếp nổi bọt và sắp xếp tráo đổi*

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/1dg_zTANTcBFwKDcV3MdsN5Ksw2Hy9fr_?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp nổi bọt | bubble sort |
| sắp xếp tráo đổi | exchange sort |
| so sánh | compare |