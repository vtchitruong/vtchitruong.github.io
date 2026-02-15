---
icon: material/sort
---

# Sắp xếp chọn

!!! abstract "Tóm lược nội dung"

    Bài này trình bày thuật toán sắp xếp chọn.

## Ý tưởng

Hãy tưởng tượng, ta cần chọn đội hình gồm những cầu thủ có phong độ tốt nhất từ những cầu thủ hiện có để thi đấu.

Ta thực hiện bằng cách: chọn cầu thủ có phong độ tốt nhất, chọn cầu thủ có phong độ tốt thứ hai, chọn cầu thủ có phong độ tốt thứ ba, v.v...

Áp dụng cách trên cho mảng, nếu xem *"nhỏ nhất"* đồng nghĩa *"tốt nhất"*, thì ta sẽ chọn phần tử nhỏ nhất trước, rồi chọn tiếp phần tử nhỏ nhất tiếp theo, rồi chọn tiếp phần tử nhỏ nhất tiếp theo nữa, v.v...

!!! note "Thuật toán sắp xếp chọn"
    
    Duyệt từng phần tử `A[i]` từ đầu đến áp cuối, lặp các thao tác sau:

    - Tìm vị trí `min` của phần tử nhỏ nhất trong mảng con từ vị trí `i` đến cuối mảng.
    - Hoán vị `A[i]` và `A[min]`.

Thuật toán có thể được phác họa như hình sau:

![Phác họa ý tưởng chính](images/sort-algorithm-selection-sort-illustration.svg){loading=lazy width=300}

---

## Ví dụ minh họa

![Ví dụ minh họa tiến trình sắp xếp chọn](images/sort-algorithm-selection-sort-manual-run.svg){loading=lazy width=360px}

---

## Lưu đồ

![Lưu đồ sắp xếp chọn](images/sort-algorithm-selection-sort-flowchart.svg){loading=lazy width=600}

---

## Trực quan hóa

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="../visualize/selection-sort.html"></iframe>
</div>  

---

## Viết chương trình

1\. Nạp thư viện `numpy`.

```py linenums="1"
import numpy as np
```

2\. Viết hàm `selection_sort()` để thực hiện thuật toán sắp xếp chọn.

```py linenums="4"
def selection_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ đầu đến áp cuối
    for i in range(n - 1):
        # Tìm vị trí của phần tử nhỏ nhất từ i đến cuối
        min = i
        for j in range(i + 1, n):
            if A[j] < A[min]:
                min = j

        # Hoán vị A[i] và A[min]
        A[i], A[min] = A[min], A[i]
```

3\. Viết chương trình chính.

Trong chương trình chính, ta tạm thời bỏ qua việc cho người dùng nhập mảng. Thay vào đó, ta khởi tạo mảng cố định, rồi gọi hàm `selection_sort()` để sắp xếp mảng `Array`.

```py linenums="21"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm selection_sort()
    selection_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1VBtZAQbqQTRyQx1hsF0Ez68VPa5h3I7Y?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp chọn | selection sort |
| so sánh | compare |