# Kiểm tra tính hợp lệ của dấu ngoặc - bài 2

!!! abstract "Tóm lược nội dung"

    Bài này trình bày bài toán kiểm tra các cặp ngoặc khác loại bằng cấu trúc ngăn xếp.

## Bài toán

**Yêu cầu:**

Viết chương trình kiểm tra một chuỗi các dấu ngoặc có cân bằng hay không (hoặc hợp lệ hay không).

Biết rằng chuỗi này là sự kết hợp của các loại dấu ngoặc sau: () {} [].

**Đầu vào:**

Dữ liệu đầu vào gồm nhiều dòng. Mỗi dòng là một chuỗi các ký tự dấu ngoặc.

**Đầu ra:**

Dữ liệu đầu ra là *hợp lệ* hoặc *không hợp lệ*.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| `({[()]})` | Hợp lệ |
| `({[([)])})` | Không hợp lệ |
| `({[]})` | Hợp lệ |
| `((())){}[]` | Hợp lệ |
| `((())` | Không hợp lệ |
| `({[ uranium ]})` | Hợp lệ |

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"

    1\. Duyệt từng ngoặc trong chuỗi đầu vào:

    - Nếu gặp ngoặc mở thì ta đẩy vào ngăn xếp.
    
    - Ngược lại, gặp ngoặc đóng, thì ta so khớp với ngoặc nằm đỉnh của ngăn xếp xem có tạo thành một cặp ngoặc hợp lệ hay không. Nếu hợp lệ, ta loại bỏ ngoặc nằm ở đỉnh ra khỏi ngăn xếp.
    
    Sau khi duyệt hết chuỗi, nếu ngăn xếp không còn ngoặc nào thì đồng nghĩa các cặp ngoặc đã được so khớp hết, dẫn đến chuỗi hợp lệ. Ngược lại, vẫn còn ngoặc mở, thì chuỗi không hợp lệ.

    2\. Bài toán này khác với bài trước ở chỗ: có ba loại ngoặc khác nhau.

??? tip "Viết chương trình"


    1\. Nạp lớp `LifoQueue` của module `queue`.    

    ```py linenums="1"
    from queue import LifoQueue
    ```

    2\. Viết hàm `is_balanced_parentheses()` dùng để kiểm tra tính hợp lệ (tính cân bằng) của các ngoặc trong một chuỗi.

    Hàm này gồm một tham số là chuỗi `s` cần kiểm tra.

    Giá trị trả về là `True` hoặc `False`, tương ứng với hợp lệ hoặc không hợp lệ.

    Hàm hoạt động như sau:

    - Khởi tạo dictionary `brackets` dùng cho việc so khớp ngoặc đóng và ngoặc mở. Trong đó:

        - `key` là các ngoặc đóng: `)`, `}`, `]`
        - `value` là các ngoặc mở: `(`, {, `[`

    - Khởi tạo ngăn xếp `stack` rỗng.
    - Dùng vòng lặp duyệt từng ngoặc `c` trong chuỗi `s`:

        - Trường hợp 1: Nếu gặp ngoặc mở thì đẩy nó vào ngăn xếp
        - Trường hợp 2: Nếu gặp ngoặc đóng thì xét các trường hợp con sau:
            
            - Trường hợp 2.1: Nếu ngăn xếp rỗng thì chuỗi `s` không hợp lệ.
            - Trường hợp 2.2: Nếu ngoặc nằm ở đỉnh ngăn xếp không khớp thì chuỗi `s` không hợp lệ.            
            - Trường hợp 2.3: Nếu ngoặc nằm ở đỉnh ngăn xếp khớp thì lấy nó ra khỏi ngăn xếp.

    ```py linenums="4"
    def is_balanced_parentheses(s):
        # Khởi tạo dictionary để so khớp ngoặc
        brackets = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        # Khởi tạo ngăn xếp rỗng
        stack = LifoQueue()

        # Duyệt từng ngoặc trong chuỗi
        for c in s:
            # TH1: Nếu gặp ngoặc mở thì đẩy nó vào ngăn xếp
            if c in brackets.values():
                stack.put(c)

            # TH2: Ngược lại, nếu gặp ngoặc đóng
            elif c in brackets:
                # TH2.1: Nếu ngăn xếp rỗng thì chuỗi không hợp lệ
                if stack.empty():
                    return False

                # Lấy ra ngoặc nằm ở đỉnh ngăn xếp để so sánh
                top_c = stack.get()

                # TH2.2: Nếu ngoặc nằm ở đỉnh không khớp thì chuỗi không hợp lệ
                if top_c != brackets[c]:
                    return False

                # TH2.3: Nếu ngoặc khớp thì không cần làm gì thêm vì top_c đã được get() ra rồi

        # Nếu ngăn xếp là rỗng thì các cặp ngoặc hợp lệ
        return stack.empty()
    ```

    3\. Viết chương trình chính:

    - Cho người dùng nhập vào một chuỗi, lưu vào biến `s`.
    - Gọi hàm `is_balanced_parentheses()` ra thực hiện.

    ```py linenums="41"
    if __name__ == '__main__':
        # Cho người dùng nhập chuỗi biểu thức
        s = input('Nhập chuỗi ngoặc: ')

        # Gọi hàm is_balanced_parentheses() ra thực hiện
        if is_balanced_parentheses(s):
            result = 'hợp lệ'
        else:
            result = 'không hợp lệ'

        # In ra kết quả
        print(f'{s} {result}')
    ```

    4\. Chạy chương trình trên, nhập một chuỗi trong bộ kiểm thử, kết quả như sau:

    ```pycon
    Nhập chuỗi ngoặc: ({[()]})
    ({[()]}) hợp lệ
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1Xt7WrNh0uClkZ13p0Yvc81MLUJmZZcWP?usp=sharing){target="_blank"}
