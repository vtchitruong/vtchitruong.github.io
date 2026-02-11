# Kiểm tra tính hợp lệ của dấu ngoặc - bài 1

!!! abstract "Tóm lược nội dung"

    Bài này trình bày bài toán kiểm tra các cặp ngoặc đơn bằng cấu trúc ngăn xếp.

## Bài toán

**Yêu cầu:**

Viết chương trình kiểm tra tính cân bằng (tính hợp lệ) của các cặp ngoặc trong một biểu thức.

Biết rằng chuỗi này chỉ chứa dấu ngoặc đơn ().

Ví dụ:  
`(())` → Hợp lệ  
`(()` → Không hợp lệ

**Đầu vào:**

Một chuỗi là biểu thức toán học có chứa dấu ngoặc.

**Đầu ra:**

Thông báo *hợp lệ* hoặc *không hợp lệ*.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| ((a + b) * (c - d)) | Hợp lệ |

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"

    Duyệt từng ký tự trong chuỗi biểu thức:

    - Nếu ký tự đang xét là ngoặc mở `(` thì nạp vào ngăn xếp nhằm đánh dấu một cặp chưa hoàn chỉnh.
    - Nếu ký tự đang xét là ngoặc đóng `)` thì loại bỏ phần tử ở đỉnh của ngăn xếp. Vì phần tử đỉnh chính là một ngoặc mở `(` tương ứng.

        Nếu không còn phần tử nào để loại bỏ, nghĩa là không còn ngoặc mở `(` tương ứng, dư thừa ngoặc đóng `)`, thì không hợp lệ.

    Sau khi duyệt hết chuỗi biểu thức, nếu ngăn xếp không còn phần tử nào thì hợp lệ. Ngược lại, vẫn còn phần tử, chính là các ngoặc mở `(`, thì không hợp lệ.

??? tip "Viết chương trình"

    1\. Nạp lớp `LifoQueue` của module `queue`.    

    ```py linenums="1"
    from queue import LifoQueue
    ```

    2\. Viết hàm `is_balanced_parentheses()` dùng để kiểm tra tính hợp lệ (tính cân bằng) của các ngoặc trong một chuỗi biểu thức.

    Hàm này gồm một tham số là chuỗi biểu thức `expression` cần kiểm tra.

    Giá trị trả về là `True` hoặc `False`, tương ứng với hợp lệ hoặc không hợp lệ.

    Hàm hoạt động như sau:

    - Khởi tạo ngăn xếp `stack` rỗng.
    - Dùng vòng lặp duyệt từng ký tự `c` trong chuỗi biểu thức `expression`:

        - Nếu `c` là `(` là nạp vào `stack`.
        - Nếu `c` là `)` thì:

            - Kiểm tra `stack`, nếu rỗng thì trả về `False`.
            - Ngược lại, không rỗng, thì loại bỏ phần tử đỉnh.

    - Kết thúc vòng lặp:

        - Nếu `stack` rỗng thì trả về `True`.
        - Nếu `stack` còn phần tử thì trả về `False`.

    ```py linenums="4"
    def is_balanced_parentheses(expression):
        # Khởi tạo ngăn xếp rỗng
        stack = LifoQueue()

        # Duyệt từng ký tự trong chuỗi biểu thức
        for c in expression:
            if c == '(':
                # Nếu gặp ngoặc mở thì nạp vào ngăn xếp
                stack.put(c)
            elif c == ')':
                # Nếu không còn ngoặc mở tương ứng thì trả về False 
                if stack.empty():
                    return False

                # Nếu gặp ngoặc mở thì loại bỏ ngoặc mở đó khỏi ngăn xếp
                stack.get()

        # Nếu ngăn xếp là rỗng thì các cặp ngoặc hợp lệ
        return stack.empty()
    ```

    3\. Viết chương trình chính:

    - Cho người dùng nhập vào một chuỗi biểu thức.
    - Gọi hàm `is_balanced_parentheses()` ra thực hiện.

    ```py linenums="26"
    if __name__ == '__main__':
        # Cho người dùng nhập chuỗi biểu thức
        e = input('Nhập biểu thức: ')

        # Gọi hàm is_balanced_parentheses() ra thực hiện
        if is_balanced_parentheses(e):
            print('Các ngoặc trong biểu thức là hợp lệ')
        else:
            print('Các ngoặc trong biểu thức không hợp lệ')
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1cNMcjLMJn4IRAJqs4b4wqDtB3Nogykry?usp=sharing){target="_blank"}
