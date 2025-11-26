---
icon: material/sort
---

# Sắp xếp tráo đổi

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán sắp xếp tráo đổi.

## Khái quát

Xem lại khái quát về bài toán và thuật toán sắp xếp [tại đây](sort-algorithm-selection-sort.md/#khai-quat){target="_blank"}.

---

## Thuật toán sắp xếp tráo đổi

### Ý tưởng

Ý tưởng chính của thuật toán sắp xếp tráo đổi là lặp lại nhiều lần thao tác so sánh phần tử đang xét với các phần tử theo sau nó và tráo đổi (hoán vị) sao cho phần tử nhỏ hơn lên trước và phần tử lớn hơn ra sau.

Cụ thể như sau:

Duyệt từng phần tử `A[i]` từ đầu đến áp cuối, lặp thao tác:

- Duyệt từng phần tử `A[j]` từ `i + 1` đến cuối mảng, lặp thao tác:

    So sánh và tráo đổi (hoán vị) `A[i]` và `A[j]` sao cho phần tử nhỏ hơn đứng trước và phần tử lớn hơn đứng sau.

Như vậy, sau mỗi lần duyệt của vòng lặp ngoài (biến `i`), phần tử nhỏ nhất của mảng con `A[i..n - 1]` được đưa về vị trí đầu của mảng con đó, cũng chính là vị trí `i`.

Thuật toán có thể được phác hoạ như hình sau:

![Phác hoạ ý tưởng chính](images/sort-algorithm-exchange-sort-illustration.svg){loading=lazy width=300}

!!! warning "Nói thêm về thuật toán này"

    Trong một số sách tiếng Anh, sắp xếp tráo đổi thường được xem là "anh em họ" của sắp xếp nổi bọt nhưng hiệu năng kém hơn. Vì thế, người ta cho rằng không đáng để dạy thuật toán này.

### Ví dụ minh hoạ

![Ví dụ minh hoạ tiến trình sắp tráo đổi](images/sort-algorithm-exchange-sort-manual-run.svg){loading=lazy width=360px}

### Lưu đồ

![Lưu đồ sắp xếp tráo đổi](images/sort-algorithm-exchange-sort-flowchart.svg){loading=lazy width=600}

### Trực quan hoá

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../visualize/exchange-sort.html"></iframe>
</div>   

### Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `exchange_sort()` để thực hiện thuật toán sắp xếp tráo đổi.

```py linenums="4"
def exchange_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ 0 đến áp cuối
    for i in range(n - 1):
        # Duyệt từng phần tử A[j] từ i + 1 đến cuối mảng
        for j in range(i + 1, n):
            # So sánh và tráo đổi A[i] và A[j]
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định, rồi gọi hàm `exchange_sort()` để sắp xếp mảng `Array`.

```py linenums="18"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm exchange_sort()
    exchange_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1dg_zTANTcBFwKDcV3MdsN5Ksw2Hy9fr_?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-exchange-sort.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp tráo đổi | exchange sort |
| so sánh | compare |