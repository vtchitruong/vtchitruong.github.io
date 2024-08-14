# Khái quát về đệ quy

## Khái niệm đệ quy

Có những bài toán có thể được phân tách thành những bài toán con tương tự nhưng có kích thước nhỏ hơn.

Tận dụng đặc điểm này, kỹ thuật đệ quy có thể giúp giải quyết bài toán ban đầu bằng cách giải quyết những bài toán con.

**Đệ quy** là kỹ thuật lập trình mà trong đó một hàm gọi lại chính nó để giải quyết bài toán ban đầu.

## Cấu trúc chung của hàm đệ quy

Trong một hàm đệ quy, ta cần xác định hai loại trường hợp sau:

1. **Trường hợp cơ sở**

    Loại trường hợp này là một bài toán con mà có thể giải quyết dễ dàng, không cần đến đệ quy. Và tại trường hợp này, quá trình đệ quy trước đó sẽ dừng lại.  
    
    Nói cách khác, nếu không chỉ ra trường hợp cơ sở, thì quá trình đệ quy sẽ tiếp tục đến vô tận, gây tràn bộ nhớ khiến bài toán ban đầu không giải quyết được.

2. **Trường hợp đệ quy**

    Với loại trường hợp này, ta chỉ ra cách thức mà hàm đệ quy gọi lại chính nó, với tham số truyền vào ứng với kích thước nhỏ hơn của bài toán. Cụ thể hơn, ta thường dựa vào công thức truy hồi để gọi đệ quy.

    Như vậy, mỗi lần gọi đệ quy sẽ giúp tiến gần hơn đến trường hợp cơ sở, việc gọi đệ quy sẽ kết thúc khi đạt đến trường hợp cơ sở.

Như vây, hàm đệ quy có thể được viết tổng quát như sau:

```py
def hàm_đệ_quy(n):
    # Trường hợp cơ sở
    if n là trường_hợp_cơ_sở:
        return giá_trị_cơ_sở_nào_đó

    # Trường hợp đệ quy
    return hàm_đệ_quy(n_đơn_giản_hơn)
```

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |