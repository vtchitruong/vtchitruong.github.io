# Chuỗi nhị phân

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán liệt kê chuỗi nhị phân bằng phương pháp quay lui.

## Bài toán

**Yêu cầu:**

Viết chương trình liệt kê tất cả các chuỗi nhị phân có số lượng ký tự cho trước.

**Đầu vào:**

Số nguyên dương $n$ biểu thị số ký tự của chuỗi nhị phân cần phát sinh.

**Đầu ra:**

Các chuỗi nhị phân có $n$ ký tự.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| n = 3 | 000 <br> 001 <br> 010 <br> 011 <br> 100 <br> 101 <br> 110 <br> 111 <br> |

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"

    1\. Đặt:
    
    - `binary_option` là mảng biểu thị cho một phương án chuỗi nhị phân. Từng vị trí trong `binary_option` sẽ được thử nạp số `0` hoặc số `1`.
    - `binary_strings` là mảng kết quả gồm các chuỗi hoàn chỉnh sẽ được in ra.

    Phương pháp quay lui được thực hiện như sau:

    **Bước 1: Thử**
 
    Thử nạp một trong hai số `0` hoặc `1` vào `binary_option`: `binary_option.append(digit)`.

    **Bước 2: Tiến**

    Gọi đệ quy để tiếp tục nạp chữ số `0` hoặc `1` ở vị trí tiếp theo cho đến khi đủ `n` chữ số: `len(binary_option) == n`.

    **Bước 3: Quay lui**

    Gỡ bỏ số vừa nạp ở cuối ra khỏi `binary_option`: `binary_option.pop()`.

    Ví dụ:  
    Tại ví trị `i` của `binary_option`, nếu bước trước đó đã nạp `0` thì gõ bỏ `0` để chuẩn bị nạp `1`.

    Hình dưới đây minh hoạ phương pháp quay lui khi chọn `0` và `1` cho chuỗi nhị phân gồm 3 ký tự.

    ```mermaid
    flowchart TD
        R[ø] --> 0[0] --> 00[0] --> 000[0]
        00 --> 001[1]

        0 --> 01[1] --> 010[0]
        01 --> 011[1]

        R[ø] --> 1[1] --> 10[0] --> 100[0]
        10 --> 101[1]

        1 --> 11[1] --> 110[0]
        11 --> 111[1]
    ```

    2\. Với số ký tự `n = 3`, số chuỗi nhị phân sẽ được tạo ra là: $2^n = 2^3 = 8$.

??? tip "Viết chương trình"

    1\. Viết hàm `generate_binary_string()` dùng để phát sinh chuỗi nhị phân.

    Hàm có một tham số là mảng `binary_option` biểu thị một phương án chuỗi nhị phân.

    Hàm không có giá trị trả về.

    ```py linenums="1"
    # Hàm quay lui dùng để phát sinh chuỗi nhị phân
    def generate_binary_string(binary_option):
        if len(binary_option) == n:
            # Nếu đã đủ số lượng thì ghép các phần tử của binary_option thành một chuỗi
            s = ''.join(map(str, binary_option))

            # Lưu chuỗi nhị phân hoàn chỉnh vào biến kết quả
            binary_strings.append(s)
            return

        # Duyệt các lựa chọn: 0 và 1
        for digit in [0, 1]:
            # Bước 1 - Thử: nạp số được chọn vào phương án
            binary_option.append(digit)

            # Bước 2 - Tiến: gọi đệ quy để nạp số ở vị trí tiếp theo
            generate_binary_string(binary_option)

            # Bước 3 - Quay lui: gỡ bỏ số vừa nạp ở cuối
            binary_option.pop()
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số lượng ký tự của chuỗi nhị phần cần phát sinh.
    - Khởi tạo mảng kết quả `binary_strings` là rỗng.
    - Khởi tạo phương án `init_option` là rỗng, dùng để truyền vào lời gọi hàm `generate_binary_string()`.
    - Gọi hàm `generate_binary_string()` ra thực hiện.
    - Dùng vòng lặp để in ra các chuỗi nhị phân hoàn chỉnh có trong `binary_strings`.

    ```py linenums="24"
    if __name__ == '__main__':
        # Số lượng ký tự của chuỗi nhị phân
        n = int(input('Nhập số ký tự: '))

        # Khởi tạo mảng kết quả binary_strings
        binary_strings = []

        # Khởi tạo phương án rỗng
        init_option = []

        # Gọi hàm generate_binary_string()
        generate_binary_string(init_option)

        # In ra các chuỗi nhị phân trong mảng kết quả binary_strings
        for s in binary_strings:
            print(s)
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1ertt7ZYcFs8GVdloIbY3VZgjTQEdBKLQ?usp=sharing){target="_blank"}