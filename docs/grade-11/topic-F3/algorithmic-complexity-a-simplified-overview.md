---
icon: material/chart-bell-curve-cumulative
---

# Khái quát độ phức tạp thuật toán

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khía cạnh liên quan đến độ phức tạp thuật toán.

## Đặt vấn đề

Giả sử mảng gồm 1 triệu phần tử đã sắp xếp tăng dần.

Khi cần kiểm tra sự tồn tại của một giá trị nào đó trong mảng, ta nên sử dụng thuật toán *tìm kiếm tuần tự* hay *tìm kiếm nhị phân*? Căn cứ vào đâu mà ta cho rằng thuật toán này nhanh hơn thuật toán kia?

Câu hỏi tổng quát là, khi có nhiều thuật toán giải quyết cùng một bài toán, thuật toán nào hiệu quả nhất?

---

## Khái niệm

Một thuật toán hiệu quả có thể được hiểu theo nghĩa: chạy nhanh và tốn ít tài nguyên máy tính.

Để đánh giá điều này mà không phụ thuộc vào cấu hình máy tính (mạnh hay yếu), người ta dùng khái niệm **độ phức tạp (của) thuật toán**.


!!! note "Khái niệm độ phức tạp"

    **Độ phức tạp thuật toán** là **thước đo định lượng** (hay còn gọi là **độ đo**) dùng để đánh giá hiệu quả của thuật toán dựa trên lượng tài nguyên cần có để thực hiện thuật toán khi kích thước dữ liệu đầu vào thay đổi.

---

## Phân loại
    
Ứng với hai dạng tài nguyên chính là bộ nhớ và thời gian, độ phức tạp thuật toán được phân thành hai loại: 

1. **Độ phức tạp không gian**:

    Dùng để đánh giá dung lượng bộ nhớ cần thiết để thực hiện thuật toán.

2. **Độ phức tạp thời gian**:

    Dùng để đánh giá thời gian thực hiện thuật toán.

Ngày nay, sự phát triển của phần cứng giúp dung lượng bộ nhớ trở nên dồi dào, nên trong các bài toán cơ bản, ta thường chấp nhận tốn thêm chút bộ nhớ để đổi lấy tốc độ, tức là ta ưu tiên cho việc tối ưu hoá thời gian xử lý.

Do đó, bài này chỉ đề cập độ phức tạp thời gian của thuật toán. Từ nay gọi tắt là *độ phức tạp*.  

---

## Ý tưởng

Thời gian chạy thực tế của chương trình (1) phụ thuộc vào nhiều yếu tố khác nhau như ngôn ngữ lập trình, trình biên dịch, hệ điều hành, tốc độ CPU, RAM, v.v... Vì thế, để đánh giá thuật toán một cách công bằng, ta cần một đơn vị đo khác, độc lập với các yếu tố trên.
{ .annotate }

1.  được tính bằng giây hoặc milli-giây

Cụ thể hơn, thay vì bấm giờ, ta sẽ *"đếm"* **số lượng phép toán**.

!!! note "Ý tưởng xác định độ phức tạp"
    
    Độ phức tạp phải được xác định dựa trên **sự tương quan** giữa **số lượng phép toán** và **kích thước của dữ liệu đầu vào**.

    Theo đó, độ phức tạp thời gian được xác định bằng cách ước lượng số lần thực hiện **phép toán tích cực** khi dữ liệu đầu vào tăng lên.

---

## Phép toán tích cực và phép toán cơ bản

**Phép toán tích cực** là phép toán cơ bản được thực hiện **thường xuyên nhất**, hay nhiều lần nhất, trong thuật toán.  

**Phép toán cơ bản** bao gồm:

- So sánh: `<`, `<=`, `>`, `>=`, `==`, `!=`
- Số học: `+`, `-`, `*`, `/`, `%`
- Gán biến đơn: `x = 5`
- Truy xuất bộ nhớ: `A[i]`
- Nhập, xuất biến đơn: `input()`, `print(x)`

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/algorithmic-complexity-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| độ phức tạp thuật toán | algorithmic complexity |
| độ phức tạp không gian | space complexity |
| độ phức tạp thời gian | time complexity |
| giây, milli-giây | second, millisecond |
| phép toán cơ bản | primitive operation, elementary operation |
| phép toán tích cực | basic operation |

Trong tiếng Anh, phép toán *cơ bản* không được gọi là *basic*, mà là *primitive* hoặc *elementary*, tức phép toán *nguyên thuỷ*, phép toán *sơ cấp*.

Còn phép toán *tích cực* thì mới gọi là *basic operation*.

Đây là sự *"vênh"* nhau giữa hai ngôn ngữ.

Một số thuật ngữ khác chỉ *phép toán tích cực* nhưng ít phổ biến hơn là: *bottleneck operation* (phép toán nút thắt cổ chai), *critical operation* (phép toán then chốt).