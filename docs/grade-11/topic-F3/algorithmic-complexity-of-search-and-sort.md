---
icon: material/chart-bell-curve-cumulative
---

# Độ phức tạp của các thuật toán tìm kiếm và sắp xếp

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về cách xác định độ phức tạp của các thuật toán tìm kiếm và sắp xếp đã học.

## Trình tự xác định độ phức tạp

- Bước 1: Xác định phép toán tích cực.  
- Bước 2: Đánh giá số lần thực hiện phép toán tích cực.  
- Bước 3: Áp dụng các quy tắc đã học để xác định độ phức tạp.  

---

## Tìm kiếm tuần tự

```py linenums="1" hl_lines="5"
def linear_search(A, k):
    n = len(A)

    for i in range(n):
        if A[i] == k:
            return i
    
    return -1
```

**Bước 1:**

Trong vòng lặp for, thao tác quan trọng nhất để quyết định có tìm thấy phần tử hay không chính là so sánh phần tử đang xét `A[i]` với giá trị cần tìm `k`.

Như vậy, phép toán tích cực là phép so sánh `A[i] == k` tại dòng 5.

**Bước 2:**

Xét trường hợp xấu nhất: Giá trị `k` nằm ở cuối mảng hoặc không tồn tại trong mảng.

Khi đó, vòng lặp chạy `n` lần. Nghĩa là, phép toán tích cực được thực hiện `n` lần.

**Bước 3:**

Theo quy tắc vòng lặp đơn, độ phức tạp của thuật toán tìm kiếm tuần tự là:

$n \times O(1) = O(n)$

---

## Tìm kiếm nhị phân

```py linenums="1" hl_lines="8"
def binary_search(A, k):
    left = 0
    right = len(A) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if A[mid] == k:
            return mid
        
        if A[mid] < k:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```
**Bước 1:**

Trong vòng lặp while, phép toán quan trọng nhất được thực hiện lặp đi lặp lại để kiểm tra giá trị chính là phép so sánh giữa phần tử ở giữa `A[mid]` và giá trị cần tìm `k`.

Như vậy, phép toán tích cực là phép so sánh `A[mid] == k` tại dòng 8.

**Bước 2:**

Gọi $n$ là kích thước của mảng `A`.

Giả sử trong trường hợp xấu nhất, phép toán tích cực phải thực hiện $t$ lần cho đến khi phạm vi tìm kiếm thu hẹp lại chỉ còn 1 phần tử:

- Lần 1: Số phần tử còn lại là $\frac{n}{2} = \frac{n}{2^1}$
- Lần 2: Số phần tử còn lại là $\frac{n}{4} = \frac{n}{2^2}$
- Lần 3: Số phần tử còn lại là $\frac{n}{8} = \frac{n}{2^3}$
- ...

Suy ra, sau lần thứ $t$, số phần tử còn lại là $\frac{n}{2^t}$.

Khi phạm vi tìm kiếm chỉ còn 1 phần tử, ta có:

$\frac{n}{2^t} = 1 \Rightarrow 2^t = n \Rightarrow t = \log_2(n)$

Điều này có nghĩa số lần lặp xấp xỉ $\log_2 n$.

**Bước 3:**

Theo quy tắc vòng lặp đơn, độ phức tạp của thuật toán tìm kiếm nhị phân là:

$\log_2 n \times O(1) = O(\log_2 n)$

---

## Sắp xếp chọn

```py linenums="1" hl_lines="7"
def selection_sort(A):
    n = len(A)

    for i in range(n - 1):
        min = i
        for j in range(i + 1, n):
            if A[j] < A[min]:
                min = j

        A[i], A[min] = A[min], A[i]
```

**Bước 1:**

Mục tiêu của vòng lặp trong `for j` là tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp. Để làm điều này, máy tính phải liên tục so sánh các phần tử với nhau.

Như vậy, phép toán tích cực là phép so sánh `A[j] < A[min]` tại dòng 7.

**Bước 2:**

Xét số lần thực hiện phép so sánh qua từng lượt của vòng lặp ngoài `for i`:

- $i = 0$: Vòng lặp trong chạy từ $1$ đến $n-1$, tức có $n-1$ lần so sánh.
- $i = 1$: Vòng lặp trong chạy từ $2$ đến $n-1$, tức có $n-2$ lần so sánh.
- ...
- $i = n-2$: Vòng lặp trong chạy $1$ lần, tức có $1$ lần so sánh.

Tổng số lần thực hiện phép toán tích cực là tổng của một cấp số cộng:

$T(n) = (n-1) + (n-2) + ... + 1$

Áp dụng công thức tính tổng:

$T(n) = \frac{n(n-1)}{2} = \frac{n^2 - n}{2} = \frac{1}{2}n^2 - \frac{1}{2}n$

**Bước 3:**

Dựa vào hàm $T(n)$ vừa tính được:

- Giữ lại thành phần bậc cao nhất: $n^2$ (vì $n^2$ tăng trưởng nhanh hơn $n$).
- Quy tắc lược bỏ hằng số: lược bỏ hệ số $\frac{1}{2}$.

Vậy độ phức tạp của thuật toán sắp xếp chọn là $O(n^2)$.

!!! tip "Một cách khác đơn giản hơn"

    Mặc dù số lần lặp của vòng lặp trong `for j` giảm dần, về mặt cấp độ lớn, nó vẫn tương đương với việc thực hiện hai vòng lặp lồng nhau kích thước $n$.
    
    Do đó, ta cũng có thể ước lượng nhanh bằng quy tắc nhân:
    
    $O(n) \times O(n) = O(n^2)$

---

## Sắp xếp chèn

```py linenums="1" hl_lines="9"
def insertion_sort(A):
    n = len(A)

    for i in range(1, n):
        t = A[i]

        j = i - 1

        while j >= 0 and A[j] > t:
            A[j + 1] = A[j]

            j = j - 1

        A[j + 1] = t 
```

**Bước 1:**

Trong vòng lặp while, thao tác quyết định việc có dời các phần tử về sau để tạo chỗ trống hay không là phép so sánh giữa phần tử đang xét `A[j]` và giá trị cần chèn `t`.

Như vậy, phép toán tích cực là phép so sánh `A[j] > t` tại dòng 9 (trong điều kiện của vòng lặp while).

**Bước 2:**

Xét trường hợp xấu nhất khi mảng đang trong trạng thái giảm dần.

Khi đó, ứng với mỗi phần tử `t`, ta phải so sánh với tất cả các phần tử đứng trước nó.

- $i = 1$: phải so sánh với 1 phần tử đứng trước (A[0])
- $i = 2$: phải so sánh với 2 phần tử đứng trước (A[1], A[0])
- ...
- $i = n - 1$: phải so sánh với $n - 1$ phần tử đứng trước.

Tổng số lần thực hiện phép so sánh là:

$T(n) = 1 + 2 + ... + (n - 1)$

Áp dụng công thức tính tổng:

$T(n) = \frac{n(n - 1)}{2} = \frac{1}{2}n^2 - \frac{1}{2}n$

**Bước 3:**

Dựa vào hàm $T(n)$ vừa tính được:

- Giữ lại thành phần bậc cao nhất: $n^2$.
- Quy tắc lược bỏ hằng số: lược bỏ hệ số $\frac{1}{2}$.

Độ phức tạp của thuật toán sắp xếp chèn là $O(n^2)$.

---

## Sắp xếp nổi bọt

```py linenums="1" hl_lines="6"
def bubble_sort(A):
    n = len(A)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
```

**Bước 1:**

Trong vòng lặp trong `for j`, thao tác luôn luôn được thực hiện để kiểm tra xem hai phần tử kề nhau có cần hoán vị hay không là phép so sánh.

Như vậy, phép toán tích cực là phép so sánh `A[j] > A[j + 1]` tại dòng 6.

**Bước 2:**

Xét số lần thực hiện phép so sánh của vòng lặp ngoài `for i`:

- $i = 0$: Vòng lặp trong chạy từ $0$ đến $n-2$, tức $n-1$ lần so sánh.
- $i = 1$: Vòng lặp trong chạy từ $0$ đến $n-3$, tức $n-2$ lần so sánh.
- ...
- $i = n - 2$: Có $1$ lần so sánh.

Tổng số lần thực hiện phép so sánh là tổng của cấp số cộng:

$T(n) = (n - 1) + (n - 2) + ... + 1$

Áp dụng công thức tính tổng:

$T(n) = \frac{n(n - 1)}{2} = \frac{1}{2}n^2 - \frac{1}{2}n$

**Bước 3:**

Dựa vào hàm $T(n)$ vừa tính được:

- Giữ lại thành phần bậc cao nhất: $n^2$.
- Quy tắc lược bỏ hằng số: lược bỏ hệ số $\frac{1}{2}$.

Độ phức tạp của thuật toán sắp xếp nổi bọt là $O(n^2)$.

!!! tip "Xác định nhanh các thuật toán sắp xếp"

    Sắp xếp chọn, sắp xếp chèn và sắp xếp nổi bọt đều có cùng độ phức tạp là $O(n^2)$ do chúng đều sử dụng cấu trúc hai vòng lặp lồng nhau phụ thuộc vào $n$.

??? tip "Mẹo vặt"

    Với các đoạn mã gồm nhiều vòng lặp lồng nhau, phép toán tích cực thường nằm ở vòng lặp trong cùng.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/algorithmic-complexity-of-search-and-sort.html">Sơ đồ tóm tắt</iframe>
</div>


