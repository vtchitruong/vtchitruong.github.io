# Khái quát về đệ quy

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về khái quát về kỹ thuật đệ quy, bao gồm:
    - Khái niệm
    - Cấu trúc chung của một hàm đệ quy

## Khái niệm

Một số bài toán có thể được phân tách thành những bài toán con tương tự nhưng có kích thước nhỏ hơn.

Tận dụng đặc điểm này, đệ quy có thể giải quyết bài toán ban đầu bằng cách giải quyết những bài toán con.

!!! note "Đệ quy"

    **Đệ quy** là kỹ thuật lập trình mà trong đó **một hàm gọi lại chính nó** để giải quyết bài toán ban đầu.

---

## Ý tưởng chính

Trong một hàm đệ quy, ta cần xác định hai loại trường hợp sau:

1. **Trường hợp cơ sở**

    Loại trường hợp này là một bài toán con mà có thể **giải quyết trực tiếp, không cần đến đệ quy**. Và tại trường hợp này, quá trình đệ quy trước đó sẽ dừng lại.  
    
    Nói cách khác, nếu không chỉ ra trường hợp cơ sở thì quá trình đệ quy sẽ tiếp tục đến vô hạn, gây tràn bộ nhớ, khiến bài toán ban đầu không giải quyết được.

2. **Trường hợp đệ quy**

    Với loại trường hợp này, ta chỉ ra **cách thức mà hàm đệ quy gọi lại chính nó**. Trong đó, tham số truyền vào ứng với kích thước nhỏ hơn của bài toán. Cụ thể hơn, ta thường dựa vào công thức truy hồi để gọi đệ quy.

    Như vậy, mỗi lần gọi đệ quy sẽ giúp tiến gần hơn đến trường hợp cơ sở. Việc gọi đệ quy sẽ kết thúc khi đạt đến trường hợp cơ sở.

---

## Mã giả

Hàm đệ quy có thể được viết tổng quát như sau:

```py
def recursion(n):
    # Trường hợp cơ sở
    if n là trường_hợp_cơ_sở:
        return giá_trị_cơ_sở_nào_đó

    # Trường hợp đệ quy
    return recursion(n_đơn_giản_hơn)
```

---

## Một số bài toán đệ quy

Một số bài toán có thể giải bằng kỹ thuật đệ quy:

1. Tính giai thừa: $n!$
2. Dãy Fibonacci
3. Tháp Hà Nội
4. Tính lũy thừa: $a^n$
5. Tìm ước số chung lớn nhất theo Euclid
6. Đảo ngược chuỗi
7. Kiểm tra chuỗi Palindrome
8. Sinh hoán vị hoặc tổ hợp
9. Bài toán 8 quân hậu
10. Các bài toán chia để trị: quick sort, merge sort
11. Duyệt cây nhị phân: tiền tố, hậu tố, trung tố

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |