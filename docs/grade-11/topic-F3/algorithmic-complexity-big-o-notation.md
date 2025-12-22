---
icon: material/chart-bell-curve-cumulative
---

# Ký pháp Big O

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về ký pháp Big O và diễn giải cách xác định độ phức tạp.

## Các trường hợp đánh giá thuật toán

Cùng một thuật toán, thời gian chạy có thể thay đổi tuỳ theo dữ liệu đầu vào. Có thể phân thành ba trường hợp sau:

1. **Trường hợp tốt nhất:**
    
    Dữ liệu đầu vào ở thế thuận lợi nhất, thuật toán chạy nhanh nhất.

2. **Trường hợp xấu nhất:**
    
    Dữ liệu đầu vào ở thế bất lợi nhất, thuật toán phải thực hiện nhiều việc nhất.

3. **Trường hợp trung bình:**

    Tính trung bình mọi khả năng của dữ liệu.

Trong lập trình, ta thường quan tâm đến trường hợp xấu nhất.

## Ký hiệu

Mỗi trường hợp có một ký hiệu riêng. Trong đó, ký hiệu $O$, đọc là **Big-Oh**, có thể xem là phổ biến nhất và thường áp dụng cho trường hợp xấu nhất.

!!! note "Ký pháp Big O"

    Độ phức tạp thời gian được biểu diễn dưới dạng $O(f(n))$, với:

    - $n$ là kích thước của dữ liệu đầu vào.
    - $f(n)$ là hàm số theo $n$ thể hiện mức độ tăng trưởng của số lượng phép toán tích cực.

## Diễn giải cách xác định

Gọi $T(n)$ là hàm số biểu diễn tổng số phép toán cơ bản mà thuật toán thực hiện theo kích thước dữ liệu đầu vào $n$.

Trong thực tế, hàm $T(n)$ có thể phức tạp. Để đơn giản hoá việc đánh giá, ta cần tìm một hàm $f(n)$ gọn gàng hơn mà vẫn bao quát được độ lớn của $T(n)$.

Mối quan hệ này được xác định qua định nghĩa sau:

!!! note "Định nghĩa Big O theo toán học"

    Ta nói: "Độ phức tạp của $T(n)$ là $O(f(n))$" hoặc "$T(n)$ thuộc lớp độ phức tạp $O(f(n))$", ký hiệu là $T(n) = O(f(n))$,
    
    nếu tồn tại các hằng số dương $c$ và $n_0$ sao cho:
    
    $T(n) \le c \times f(n)$, với mọi $n \ge n_0$

Nghĩa là, khi dữ liệu đủ lớn ($n \ge n_0$), thời gian chạy của thuật toán $T(n)$ sẽ luôn *"nằm dưới"*, tức bị chặn bởi đường đồ thị của hàm $c \times f(n)$.

Nói cách khác, $O(f(n))$ giống như cái *"trần nhà"* để giới hạn lại $T(n)$.

Ví dụ 1:  
Thời gian thực hiện thực tế được tính bởi hàm $T(n) = n^2$.

Chọn hàm $f(n) = n^2$, ta có:

$T(n) \le c . f(n) \Leftrightarrow n^2 \le c . n^2$

Chọn $c = 1$ và $n_0 = 1$: bất đẳng thức trên luôn đúng.

Vậy $T(n) = O(n^2)$.

Ví dụ 2:  
Thời gian thực hiện thực tế được tính bởi hàm $T(n) = 2n + 5$.

Chọn hàm $f(n) = n$, ta có:

$2n + 5 \le c.n$

Chọn $c = 3$ và $n_0 = 5$: $2n + 5 \le 2n + n = 3n$ (đúng).

Vậy $T(n) = O(n)$.

Ví dụ 3:  
Thời gian thực hiện thực tế được tính bởi hàm số $T(n) = 3n^2 + 10n + 5$

Chọn hàm $f(n) = n^2$, ta có:

$3n^2 + 10n + 5 \le c . n^2$

Để dễ so sánh, ta tìm cách biến đổi tất cả các số hạng của vế trái về cùng bậc $n^2$. Chọn $n_0 = 1$, ta có:

- $3n^2$ giữ nguyên
- $10n \le 10n^2$ 
- $5 \le 5n^2$

Cộng dồn các bất đẳng thức trên lại:

$3n^2 + 10n + 5 \le 3n^2 + 10n^2 + 5n^2 = (3 + 10 + 5)n^2 = 18n^2$

Chọn $c = 18$ và $n_0 = 1$: $T(n) \le 18.n^2$ (đúng)

Vậy $T(n) = O(n^2)$

## So sánh

Khi phân tích độ phức tạp, ta thường tập trung vào trường hợp xấu nhất, là trường hợp cho thấy được **giới hạn cận trên** (ngưỡng tối đa) của thuật toán.

Do Big O thường được dùng để biểu diễn giới hạn này, ta có thể dựa vào Big O để so sánh hiệu quả của các thuật toán khác nhau mà không cần chạy thử.

!!! note "So sánh độ phức tạp"
    
    Cho hai thuật toán có độ phức tạp lần lượt là $O(f_1(n))$ và $O(f_2(n))$.

    Khi kích thước dữ liệu đầu vào $n$ đủ lớn (tăng dần đến vô cùng):
    
    Nếu $f_1(n) < f_2(n)$ (1) 
    { .annotate }

    1.  Được hiểu là $f_1(n)$ có mức độ tăng trưởng thấp hơn $f_2(n)$.
        
        Khi đề cập mức độ tăng trưởng trong bối cảnh Big O, ta ngầm hiểu là đang so sánh *bậc của đa thức*.
        
    thì thuật toán thứ nhất nhanh hơn thuật toán thứ hai. 

Ví dụ:  
Bảng dưới đây so sánh độ phức tạp của hai thuật toán: tìm kiếm tuần tự và tìm kiếm nhị phân trong trường hợp xấu nhất, với dữ liệu đầu vào là mảng gồm $n$ phần tử đã sắp xếp tăng dần. 

| Kích thước dữ liệu | Tìm kiếm tuần tự<br>Độ phức tạp $(O(n))$ | Tìm kiếm nhị phân<br>Độ phức tạp $(O(logn))$ |
| --- | --- | --- |
| $n = 10$ | $10$ phép toán | $log_2{10} \simeq 3.32 \simeq 4$ phép toán |
| $n = 100$ | $100$ phép toán | $log_2{100} \simeq 6.64 \simeq 7$ phép toán |
| $n = 1,000,000$ | $1,000,000$ phép toán | $log_2{1,000,000} \simeq 19.93 \simeq 20$ phép toán |

Lưu ý:

- Phép toán được hiểu là "phép toán so sánh với giá trị cần tìm $k$".
- Trong tin học, $log n$ thường được hiểu là hàm logarit cơ số 2 của $n$. Ví dụ: $log_2{100} = 7$.

Nhận xét:  
Dễ thấy, $log n < n$ nên thuật toán tìm kiếm nhị phân nhanh hơn thuật toán tìm kiếm tuần tự.

## Một số Big O phổ biến

Bảng sau liệt kê một số Big O phổ biến và tên gọi của chúng.

| Big O | Tên gọi |
| --- | --- |
| $O(1)$ | (Độ phức tạp) hằng số |
| $O(logn)$ | logarit |
| $O(n)$ | tuyến tính |
| $O(n logn)$ | n log n hoặc siêu tuyến tính |
| $O(n^2)$ | bình phương |
| $O(n^3)$ | lập phương |
| $O(n^p)$ | đa thức |
| $O(c^n)$ | hàm mũ |
| $O(n!)$ |	giai thừa |

Biểu đồ dưới đây biểu diễn sự tương quan giữa các Big O trên, trừ $O(n^p)$ nhằm tránh bị rối. Trong đó, các Big O được minh hoạ từ màu xanh, nghĩa là thuật toán *chạy nhanh*, chuyển dần cho đến màu đỏ, tức *chạy rất chậm*.

*Lưu ý:*  
*Biểu đồ chỉ là một phác thảo mang tính minh hoạ, giúp người học dễ hình dung về các độ phức tạp, chứ không chính xác một cách chi tiết.*

<div>
    <iframe width="100%" height="480px" frameBorder=0 src="../images/big-o-chart.html"></iframe>
</div>

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/algorithmic-complexity-big-o-notation.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| ký pháp $O$ | Big O notation |