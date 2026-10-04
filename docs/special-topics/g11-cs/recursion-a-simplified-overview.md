---
grade: "lớp 11"
grade_url: "/grade-11/grade-11-index/"

level: "chuyên để"
level_url: "/special-topics/g11-cs/topic-index/"

difficulty: "easy"
updated: "04/10/2026"
---

# Tổng quan về đệ quy

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái quát về kỹ thuật đệ quy, bao gồm:

    - Khái niệm
    - Cấu trúc chung của một hàm đệ quy

## Khái niệm

Một số bài toán phức tạp có thể được phân tách thành các bài toán con có **cấu trúc tương tự** nhưng với **kích thước nhỏ hơn**. 

Tận dụng đặc điểm này, **đệ quy** giúp giải quyết bài toán ban đầu bằng cách giải các bài toán con tương tự cho đến khi bài toán trở nên đủ nhỏ để giải trực tiếp.

!!! note "Đệ quy"

    Là kỹ thuật lập trình mà trong đó **một hàm gọi lại chính nó** để giải quyết các phiên bản nhỏ hơn của bài toán ban đầu.

---

## Ý tưởng chính

Một hàm đệ quy hợp lệ bắt buộc phải có hai thành phần chính:

1. **Trường hợp cơ sở**

    - Là trường hợp đơn giản nhất của bài toán mà có thể **giải quyết trực tiếp, không cần gọi đệ quy tiếp**.
    - Là điều kiện dừng bắt buộc. Nếu không có thì quá trình đệ quy sẽ lặp lại vô hạn, gây *"tràn ngăn xếp"* và làm chương trình bị lỗi.

2. **Trường hợp đệ quy**

    - Là phần mã lệnh chỉ ra **cách thức mà hàm gọi lại chính nó** với tham số đầu vào nhỏ hơn hoặc đơn giản hơn.
    - Mỗi lần gọi đệ quy phải bảo đảm tiến dần về trường hợp cơ sở.

---

## Mã giả

Hàm đệ quy có thể được viết tổng quát như sau:

```py
def recursion(n):
    # Trường hợp cơ sở: điều kiện dừng
    if n là trường_hợp_đơn_giản_nhất:
        return giá_trị_cơ_sở

    # Trường hợp đệ quy: giảm kích thước và kết hợp kết quả
    kết_quả_con = recursion(n_đơn_giản_hơn) 
    return kết_hợp(n, kết_quả_con)
```

---

## Một số bài toán đệ quy

Một số bài toán có thể giải bằng kỹ thuật đệ quy:

<div class="grid cards" markdown>

-   :material-calculator:{ .lg .middle } **Số học**

    - **Giai thừa**: $n! = n \times (n-1)!$ với $0! = 1$.
    - **Dãy số Fibonacci**: $F(n) = F(n-1) + F(n-2)$ với $F(0)=0, F(1)=1$.
    - **Lũy thừa**: $a^n = a \times a^{n-1}$ với $a^0 = 1$.
    - **Ước số chung lớn nhất**: $\text{gcd}(a, b) = \text{gcd}(b, a \pmod b)$ với $\text{gcd}(a, 0) = a$.

-   :material-code-string:{ .lg .middle } **Chuỗi và mảng**

    - **Đảo ngược chuỗi**: lấy phần chuỗi từ ký tự thứ hai đến hết đem đi đảo ngược đệ quy, rồi ghép ký tự đầu tiên vô cuối chuỗi.
    - **Chuỗi đối xứng**: so sánh ký tự đầu - cuối và gọi đệ quy kiểm tra phần còn lại ở giữa.
    
-   :material-sitemap-outline:{ .lg .middle } **Thuật toán sinh và quay lui** 

    - **Tháp Hà Nội**: di chuyển $n$ đĩa từ cọc này sang cọc khác qua cọc trung gian.
    - **Sinh hoán vị**: thử nghiệm đặt từng phần tử và đệ quy sinh các vị trí tiếp theo.
    - **8 quân hậu**: đặt 8 quân hậu lên bàn cờ sao cho không quân nào khống chế nhau.

-   :material-file-tree:{ .lg .middle } **Chia để trị**

    - **Thuật toán sắp xếp**: quick sort, merge sort.
    - **Duyệt cây nhị phân**: Duyệt tiền tố, trung tố và hậu tố.

</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |