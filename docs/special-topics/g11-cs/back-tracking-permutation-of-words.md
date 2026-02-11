# Hoán vị các từ trong câu

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán hoán vị các từ trong câu.

## Bài toán

**Yêu cầu:**

Viết chương trình liệt kê tất cả các hoán vị của các từ trong câu: Hôm bữa đi học chưa.

**Đầu vào:**

Mảng gồm các phần tử là từ trong câu: `['hôm', 'bữa', 'đi', 'học', 'chưa']`

**Đầu ra:**

Các câu được tạo từ việc đổi chỗ (hoán vị) của các từ.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| `['hôm', 'bữa', 'đi', 'học', 'chưa']` | hôm bữa đi học chưa<br>hôm bữa đi chưa học<br>hôm bữa học đi chưa<br>hôm bữa học chưa đi<br>hôm bữa chưa đi học<br>... |

---

## Cách giải đề xuất

??? tip "Ý tưởng chính"

    1\. Đặt:
    
    - `words` là mảng chứa các từ của dữ liệu đầu vào: `words = ['hôm', 'bữa', 'đi', 'học', 'chưa']`
    - `option` là mảng biểu thị cho một phương án hoán vị, dùng để chứa các từ trong dữ liệu đầu vào. Từng từ trong `words` sẽ lần lượt được nạp vào `option`.
    - `used` là mảng dùng để đánh dấu từ nào đã được nạp vào `option` nhằm không sử dụng lại lần nữa: `used[i] = True` nghĩa là từ `words[i]` đã được nạp.
    - `sentences` là mảng kết quả gồm câu hoàn chỉnh sẽ được in ra.

    Phương pháp quay lui được thực hiện như sau:

    **Bước 1: Thử**
 
    - Thử nạp một từ trong `words` vào `option`: `option.append(words[i])`.
    - Đánh dấu từ này để các bước đệ quy tiếp theo không thử lại từ này nữa: `used[i] = True`.

    **Bước 2: Tiến**

    Gọi đệ quy để tiếp tục thử các từ còn lại cho đến khi đủ 5 từ: `len(option) == len(words)`.

    **Bước 3: Quay lui**

    - Gỡ từ ở cuối ra khỏi `option`: `option.pop()`. 
    - Đồng thời trả lại trạng thái chưa dùng từ này: `used[i] = False`.

    2\. Bài toán này khác với bài trước ở chỗ: mỗi từ chỉ được dùng một lần, đã dùng rồi thì được dùng lại.

    3\. Với số từ là 5, số hoán vị sẽ được tạo ra là: $5! = 120$.

??? tip "Viết chương trình"

    1\. Viết hàm `generate_permutations()` dùng để phát sinh các hoán vị.

    Hàm gồm có hai tham số:

    - Mảng `option` biểu thị một phương án hoán vị đang được xây dựng.
    - Mảng `used` cho biết từ nào đã được nạp.

    Hàm không có giá trị trả về.

    ```py linenums="1"
    # Hàm quay lui dùng để tạo các hoán vị
    def generate_permutations(option, used):
        if len(option) == len(words):
            # Nếu đã đủ số từ thì dùng hàm join() để ghép thành câu
            s = ' '.join(option)

            # Lưu câu hoàn chỉnh vào biến kết quả
            sentences.append(s)
            return

        # Duyệt từng từ trong mảng words
        for i in range(len(words)):
            if not used[i]:
                # Bước 1: Thử
                option.append(words[i])
                used[i] = True

                # Bước 2: Tiến
                generate_permutations(option, used)

                # Bước 3: Quay lui
                option.pop()
                used[i] = False
    ```

    2\. Viết chương trình chính:

    - Khởi tạo mảng `words` chứa các từ của dữ liệu đầu vào.
    - Khởi tạo mảng kết quả `sentence` là rỗng.
    - Khởi tạo phương án `init_option` là rỗng, dùng để truyền vào lời gọi hàm `generate_permutations()`.
    - Khởi tạo mảng `used` dùng để đánh dấu các từ đã sử dụng. Ban đầu, `used` gồm toàn các phần tử `False`, nghĩa là chưa sử dụng.
    - Gọi `hàm generate_permutations()` ra thực hiện.
    - Duyệt vòng lặp để in ra các câu hoàn chỉnh trong `sentences`.

    ```py linenums="27"
    if __name__ == '__main__':
        words = ['hôm', 'bữa', 'đi', 'học', 'chưa']

        # Khởi tạo mảng kết quả sentence
        sentences = []

        # Khởi tạo phương án rỗng
        init_option = []

        # Khởi tạo mảng used dùng để đánh dấu các từ đã sử dụng 
        used_status = [False] * len(words)

        # Gọi hàm generate_permutations
        generate_permutations(init_option, used_status)

        # In ra các câu trong mảng kết quả sentence
        for s in sentences:
            print(s)
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/10OCVrrP29KFygYy4IT7_L5kTsDkXavgj?usp=sharing){target="_blank"}