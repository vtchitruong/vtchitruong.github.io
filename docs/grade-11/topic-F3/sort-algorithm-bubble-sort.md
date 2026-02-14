---
icon: material/sort
---

# Sắp xếp nổi bọt

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán sắp xếp nổi bọt.

## Khái quát

Xem lại khái quát về bài toán và thuật toán sắp xếp [tại đây](sort-algorithm-selection-sort.md/#khai-quat){target="_blank"}.

---

## Thuật toán sắp xếp nổi bọt

### Ý tưởng

Hãy tưởng tượng hình ảnh các bọt nước ở dưới đáy nổi dần lên trên bề mặt.

Khi ở dưới đáy, bọt nước có kích thước nhỏ và khi đến gần bề mặt, bọt nước có kích thước lớn dần.

Nếu xem đầu mảng là đáy nước và cuối mảng là bề mặt, ta sắp xếp mảng bằng cách lần lượt cho các phần tử lớn hơn *"nổi lên"* bề mặt.

Cụ thể như sau:

Cho `i` chạy từ đầu đến áp cuối, lặp thao tác:

- Duyệt từng phần tử `A[j]` từ `0` đến vị trí trước `i` phần tử cuối, tức vị trí trước `n – 1 – i`, thực hiện:

    So sánh và hoán vị hai phần tử cạnh nhau `A[j]` và `A[j + 1]` sao cho phần tử nhỏ hơn đứng trước và phần tử lớn hơn đứng sau.

Như vậy, sau mỗi lần lặp của vòng lặp trong (biến `j`), các phần tử lớn sẽ *"trôi"* về phía cuối mảng, và sau mỗi lần lặp của vòng lặp ngoài (biến `i`), phần tử lớn nhất sẽ về đúng vị trí của nó ở cuối mảng.

Có thể thấy, với mỗi lần lặp tiếp theo của vòng lặp ngoài (biến `i`), phạm vi duyệt sẽ thu nhỏ lại, từ đầu mảng cho đến trước phần tử lớn nhất của lần duyệt trước đó.

Thuật toán có thể được phác họa như hình sau:

![Phác họa ý tưởng chính](images/sort-algorithm-bubble-sort-illustration.svg){loading=lazy width=300}

### Ví dụ minh họa

![Ví dụ minh họa tiến trình sắp xếp nổi bọt](images/sort-algorithm-bubble-sort-manual-run.svg){loading=lazy width=360px}

### Lưu đồ

![Lưu đồ sắp xếp nổi bọt](images/sort-algorithm-bubble-sort-flowchart.svg){loading=lazy width=600}

### Trực quan hóa

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../visualize/bubble-sort.html"></iframe>
</div>  

### Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `bubble_sort()` để thực hiện thuật toán sắp xếp nổi bọt.

```py linenums="4"
def bubble_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Cho i chạy từ 0 đến n - 2
    for i in range(n - 1):
        # Duyệt từng phần tử A[j] từ 0 đến trước n - 1 - i
        for j in range(n - 1 - i):
            # So sánh và hoán vị hai phần tử cạnh nhau
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định, rồi gọi hàm `bubble_sort()` để sắp xếp mảng `Array`.

```py linenums="18"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm bubble_sort()
    bubble_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1c3INW2H5BhjXAfn18KiXWXlA0vLvDo7n?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-bubble-sort.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp nổi bọt | bubble sort |
| so sánh | compare |