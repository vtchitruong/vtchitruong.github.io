# Kiểm tra tính hợp lệ của dấu ngoặc

## Yêu cầu

Viết chương trình kiểm tra một chuỗi các dấu ngoặc có cân bằng hay không (hoặc hợp lệ hay không).

Biết rằng chuỗi này là sự kết hợp của các loại dấu ngoặc sau: () {} [].

Ví dụ:

`({[()]})` → Hợp lệ

`({[([)])})` → Không hợp lệ

## Input

Dữ liệu đầu vào gồm nhiều dòng. Mỗi dòng là một chuỗi các ký tự dấu ngoặc.

## Output

Dữ liệu đầu ra là *hợp lệ* hoặc *không hợp lệ*.

## Bộ test

### Input mẫu

```pycon
({[()]})
({[([)])})
({[]})
((())){}[]
((())
```

### Ouput mẫu

```pycon
({[()]}) -> Hợp lệ
({[([)])}) -> Không hợp lệ
({[]}) -> Hợp lệ
((())){}[] -> Hợp lệ
((()) -> Không hợp lệ
```

## Cách giải đề xuất

### Ý tưởng

Ta sử dụng một ngăn xếp để lưu trữ từng dấu ngoặc mở `{` `[` `(` hoặc dấu ngoặc đóng `}` `]` `)`.

Khi gặp dấu ngoặc mở, ta đẩy vào ngăn xếp. Còn khi gặp dấu ngoặc đóng, ta so khớp với phần tử đỉnh của ngăn xếp xem chúng (dấu ngoặc đóng và phần tử đỉnh) có tạo thành một cặp ngoặc hợp lệ hay không.

Nếu hợp lệ, ta loại bỏ phần tử đỉnh khỏi ngăn xếp. Và cứ như thế, khi đã xét hết các ký tự trong chuỗi, thì kiểm tra ngăn xếp xem đã lấy hết các dấu ngoặc ra chưa. Nếu đã lấy ra hết, tức toàn bộ dấu ngoặc đã khớp nhau, thì nghĩa là chuỗi ban đầu hợp lệ. 

*(Phần diễn giải trên mang tính đại khái. Khi đi vào chi tiết, cần chú ý xét các trường hợp chưa đề cập đến.)*


### Đọc dữ liệu đầu vào

Khai báo biến `data` chứa dữ liệu đầu vào.

```py linenums="1"
data = '''
({[()]})
({[([)])})
({[]})
((())){}[]
((())
'''
```

Trong chương trình chính, ta đọc dữ liệu đầu vào thành danh sách các chuỗi, lưu trong biến `lines`.

```py linenums="73"
if __name__ == '__main__':
    # Chuyển đổi dữ liệu đầu vào thành danh sách các dòng riêng lẻ
    lines = data.strip().split('\n') # (1)!
```
{ .annotate }

1.  `strip()` được thực hiện trước, dùng để cắt bỏ các khoảng trắng ở hai đầu của `data`.

    `split('\n')` được thực hiện sau, dựa trên ký tự xuống dòng `'\n'` để phân chia các dòng  thành các phần tử của danh sách `lines`.

### Các hàm cơ bản trên ngăn xếp

Trước hết, ta viết các hàm đã học dùng để thao tác với ngăn xếp.

```py linenums="10"
# Hàm thêm phần tử vào ngăn xếp
def push(stack, item):
    stack.append(item)


# Hàm lấy phần tử ra khỏi ngăn xếp
def pop(stack):
    if (len(stack) > 0):
        return stack.pop()
    else:
        return None


# Hàm truy xuất giá trị của phần tử đỉnh mà không loại bỏ phần tử này
def peek(stack):
    if (len(stack) > 0):
        return stack[-1]
    else:
        return None


# Hàm kiểm tra ngăn xếp có rỗng không
def is_empty(stack):
    return len(stack) == 0
```

### Xử lý

Ta viết hàm `is_balanced_parentheses` dùng để kiểm tra một chuỗi ngoặc là hợp lệ hay không.

Hàm này gồm một tham số là chuỗi `s` cần kiểm tra và giá trị trả về là `True` hoặc `False`, tương ứng với hợp lệ hoặc không hợp lệ.

```py linenums="36"
def is_balanced_parentheses(s):
```

**Bước 1:** Khởi tạo ngăn xếp chứa các ngoặc và biến `brackets` có kiểu `dictionary` chứa các cặp ngoặc khớp nhau.

```py linenums="36"
def is_balanced_parentheses(s):
    # Khởi tạo một ngăn xếp
    stack = []

    # Khởi tạo dictionary để so khớp ngoặc
    brackets = { # (1)!
        ')': '(',
        '}': '{',
        ']': '[',
    }
```
{ .annotate }

1.  `dictionary` là kiểu dữ liệu của Python, dùng để chứa các cặp `key: value`. Trong đó:

    - `key` là duy nhất, nghĩa là không có key nào trùng nhau, và được dùng để truy xuất `value`.
    - `value` có kiểu dữ liệu tuỳ ý.

    Ví dụ: cặp thứ nhất có `key` là `')'` và `value` là `'('`.

**Bước 2:** 

Dùng vòng lặp for duyệt các ký tự trong chuỗi `s`:

- Trường hợp 1: Nếu ký tự đang xét là dấu ngoặc mở thì "*đẩy*" vào ngăn xếp.
- Trường hợp 2: Ngược lại, nếu ký tự đang xét là dấu ngoặc đóng thì:
    - Trường hợp 2.1: Nếu ngăn xếp rỗng, nghĩa là ngăn xếp không có ngoặc mở để khớp với ký tự đang xét, dẫn đến chuỗi `s` không hợp lệ.
    - Trường hợp 2.2: Nếu không rỗng nhưng phần tử đỉnh của ngăn xếp không khớp với ký tự đang xét thì chuỗi `s` cũng không hợp lệ.
    - Trường hợp 2.3: Nếu phần tử đỉnh khớp với ký tự đang xét thì loại bỏ phần tử đỉnh này.

```py linenums="47"
    # Duyệt các ký tự trong chuỗi
    for char in s:
        # TH1: Nếu ký tự là dấu ngoặc mở thì đẩy nó vào ngăn xếp
        if char in brackets.values():
            push(stack, char)

        # TH2: Ngược lại, nếu ký tự là dấu ngoặc đóng
        elif char in brackets:
            # TH2.1: Nếu ngăn xếp rỗng thì chuỗi không hợp lệ
            if is_empty(stack) == True:
                return False

            # TH2.2: Nếu phần tử đỉnh không khớp thì chuỗi không hợp lệ
            if peek(stack) != brackets[char]: # (1)!
                return False

            # TH2.3: Nếu phần tử đỉnh khớp thì lấy phần tử đỉnh ra khỏi ngăn xếp
            top = pop(stack)
```
{ .annotate }

1.  `char` là ký tự đang xét. `brackets[char]` là lấy `value` của `char`, tức lấy "*cột bên phải*" của dictionary `brackets`, đồng nghĩa là một dấu ngoặc mở.

    Nếu dấu ngoặc mở này không giống phần tử đỉnh `peek(stack)` thì chuỗi `s` không hợp lệ.

**Bước 3:**

Sau khi kết thúc vòng lặp for, nghĩa là đã hết ký tự cần xét trong `s`, thì ta kiểm tra ngăn xếp.

Nếu ngăn xếp không còn phần tử nào, tức toàn bộ ngoặc đã khớp, đã được lấy ra khỏi ngăn xếp trước đó, thì đồng nghĩa chuỗi `s` hợp lệ.

Ngược lại, nếu ngăn xếp vẫn còn dấu ngoặc nào đó, tức "*nó*" không khớp với dấu ngoặc đóng nào cả, thì đồng nghĩa chuỗi `s` không hợp lệ.

```py linenums="69"
    return is_empty(stack)
```

### In kết quả

Trong chương trình chính, ta gọi hàm `is_balanced_parentheses()` để kiểm tra tính hợp lệ của từng chuỗi.

```py linenums="79"
    for line in lines:
        if is_balanced_parentheses(line) == True:
            result = 'Hợp lệ'
        else:
            result = 'Không hợp lệ'

        print(f'{line} -> {result}')
```

## Mã nguồn

Chương trình Python hoàn chỉnh đặt tại [Google Colab](https://colab.research.google.com/drive/1Xt7WrNh0uClkZ13p0Yvc81MLUJmZZcWP?usp=sharing){:target="_blank"}.
