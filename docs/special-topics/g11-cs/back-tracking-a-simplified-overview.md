# Khái quát về quay lui

!!! abstract "Tóm lược nội dung"

    Bài này trình bày khái quát về phương pháp quay lui.

## Khái niệm

Giả sử ta đang đứng trong một mê cung rộng lớn.

Để tìm cửa ra, ta chọn một con đường, đi tiếp cho đến khi gặp một ngõ cụt. Lúc này, ta sẽ không đứng yên đó, mà sẽ lùi lại chỗ rẽ gần nhất và thử một hướng rẽ khác. Tiến trình này lặp lại nhiều lần cho đến khi tìm thấy cửa ra.

Đây là tư tưởng cốt lõi của **phương pháp quay lui**.

!!! note "Quay lui"

    Là phương pháp giải bài toán bằng cách **thử từng lựa chọn một**.
    
    Trong quá trình xây dựng một lời giải, nếu ta nhận thấy lựa chọn hiện tại không thể dẫn đến kết quả đúng thì ta bỏ qua và **quay lại bước trước đó** để thử một lựa chọn khác.

---

## Ý tưởng chính

Gọi:

- `option` (phương án) là một **dãy các `choice`** (lựa chọn) hoặc **dãy các phần tử được chọn**. Một bài toán có thể có nhiều `option`.
- `solutions` là mảng kết quả, dùng để lưu các `option` khi đã chúng đã thành các lời giải hoàn chỉnh của bài toán.

    Một `option` được xem là hoàn chỉnh nếu thỏa cả hai điều sau:

    - `option` đẩy đủ: đủ số lượng `choice` hoặc đủ số bước theo yêu cầu của bài toán.
    - `option` hợp lệ: thỏa mãn mọi yêu cầu của bài toán.

Ý tưởng chính của phương pháp quay lui được phác thảo như sau:

1. **Khởi tạo**

    Bắt đầu bằng `option` rỗng.

    Đây là bước `i = 1`. Ta chọn `choice` đầu tiên để nạp vô `option`.

2. **Xây dựng lời giải**

    Tại bước thứ `i`, ta thực hiện các thao tác sau:

    - Chọn thử một `choice` khả thi.
    - Kiểm tra tính hợp lệ của `option` sau khi nạp `choice` vô:

        - Nếu `option` không hợp lệ thì loại bỏ `choice` này và thử nạp `choice` khác.
        - Ngược lại, `option` hợp lệ, thì xét tiếp hai trường hợp sau:

            - Nếu `option` đã thành một lời giải hoàn chỉnh thì lưu `option` này vô `solutions`.
            - Ngược lại, `option` chưa phải là lời giải, thì tiến đến bước `i + 1` để thử nạp `choice` tiếp theo.

3. **Quay lui**

    Quay lui xảy ra trong hai trường hợp:

    - Trường hợp 1: đã đến bước `n`, tìm thấy một `option` hoàn chỉnh.

        - Lưu `option` hoàn chỉnh này vô `solutions`.
        - Quay lại bước `n - 1` để thử nạp `choice` khác.

    - Trường hợp 2: đang ở bước `i` mà gặp ngõ cụt (1).
        { .annotate }

        1. *Ngõ cụt* là trạng thái mà `option` hiện tại không thể tiếp tục phát triển thêm được nữa.

        - Quay lại bước `i - 1` để thử `choice` khác.

4. **Kết thúc**

    Thuật toán sẽ dừng lại khi đã duyệt hết các `choice` tại bước đầu tiên `i = 1`.
    
    Kết quả là ta có được `solutions` gồm tất cả các `option` là lời giải hoàn chỉnh.

---

## Mã giả

Hàm quay lui có thể được biểu diễn bằng mã giả theo một trong hai cách sau:

**Cách 1:** kiểm tra `option` hoàn chỉnh ở đầu hàm

```py
def back_tracking(bước_i, option):
    if kiểm_tra_hoàn_chỉnh(option):
        # Lưu option vô solutions
        solutions.append(option)
        return

    for choice in danh_sách_choice_khả_thi_tại_bước_i:
        # Bước 1 - Thử: nạp choice vô option
        option.append(choice)

        if kiểm_tra_hợp_lệ(option):
            # Bước 2 - Tiến: gọi đệ quy cho bước tiếp theo
            back_tracking(bước_i + 1, option)

        # Bước 3 - Quay lui: gỡ bỏ choice vừa nạp vô (tức choice nằm ở cuối)
        option.pop()
```

**Cách 2:** kiểm tra `option` hoàn chỉnh trong phần kiểm tra hợp lệ

```py
def back_tracking(bước_i, option):
    for choice in danh_sách_choice_khả_thi_tại_bước_i:
        # Bước 1 - Thử: nạp choice vô option
        option.append(choice)

        if kiểm_tra_hợp_lệ(option):
            if kiểm_tra_hoàn_chỉnh(option):
                # Lưu option vô solutions
                solutions.append(option)
            else:
                # Bước 2 - Tiến: gọi đệ quy cho bước tiếp theo
                back_tracking(bước_i + 1, option)

        # Bước 3 - Quay lui: gỡ bỏ choice vừa nạp vô (tức choice nằm ở cuối)
        option.pop()
```

Hàm quay lui có thể được gọi ra thực hiện như sau:

```py
if __name__ == '__main__':
    # Mảng kết quả
    solutions = []

    # Khởi tạo phương án rỗng
    init_solution = []

    back_tracking(1, init_solution)
```

---

## Mối liên quan giữa quay lui và đệ quy

Trong lập trình, quay lui hầu như được cài đặt bằng kỹ thuật đệ quy.

- Đệ quy: mỗi lần gọi đệ quy tương ứng với việc tiến đến bước tiếp theo trong quá trình xây dựng `option`, tức từ bước `i` đến bước `i + 1`.
- Quay lui: là trở về bước trước đó. Mỗi lần quay lui tương ứng với việc kết thúc một lần đệ quy và trở về trạng thái của hàm đã gọi trước đó, tức từ bước `i + 1` trở về bước `i`.

---

## Một số bài toán quay lui

Quay lui là phương pháp hữu dụng để giải quyết các bài toán **tìm kiếm trong một không gian lựa chọn** khổng lồ.

Thay vì phải kiểm tra từng lời giải một cách mù quáng, phương pháp này giúp ta duyệt qua tất cả các tổ hợp, hoán vị hoặc cách sắp đặt khả thi để tìm ra lời giải tối ưu hoặc các kết quả thỏa mãn yêu cầu.

Nhóm các bài toán quay lui được phân loại theo độ khó tăng dần như sau:

**Nhóm 1: Các bài toán liệt kê**

- Liệt kê dãy nhị phân độ dài $n$.
- Liệt kê các tập con của một tập hợp.
- Liệt kê hoán vị của $n$ phần tử.

**Nhóm 2: Các bài toán giải đố và trò chơi**

- Quân hậu: Đặt $n$ quân hậu trên bàn cờ sao cho không con nào ăn nhau.
- Mã đi tuần: Tìm cách để con mã đi qua tất cả các ô trên bàn cờ đúng một lần.
- Mê cung: Tìm đường đi từ điểm bắt đầu đến điểm kết thúc.
- Sudoku: Điền số vô bảng sao cho thỏa mãn các quy tắc về hàng, cột và vùng.

**Nhóm 3: Các bài toán tối ưu hoá**

Nhóm bài này áp dụng quay lui kết hợp với việc ghi nhận giá trị tốt nhất (thường gọi là kỹ thuật nhánh cận):

- Ba lô: Chọn các đồ vật sao cho tổng giá trị lớn nhất mà không vượt quá trọng lượng cho phép.
- Người đi du lịch (TSP): Tìm quãng đường ngắn nhất đi qua tất cả các thành phố và quay trở lại điểm xuất phát.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lời giải hoàn chỉnh | complete solution |
| lời giải hợp lệ | valid solution |
| lựa chọn khả thi | candidate choice, possible choice |
| ngõ cụt | dead end |
| quay lui | back tracking |