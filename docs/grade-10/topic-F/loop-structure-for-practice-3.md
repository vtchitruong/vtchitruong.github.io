---
icon: simple/loop
---

# Thực hành vòng lặp for - Phần 3

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số bài toán có áp dụng vòng lặp for:

    - Tạo hình chữ nhật
    - Tạo hình tam giác cân
    - Tạo hình mũi tên

## Bài 1

### Đề bài

**Yêu cầu:**

Viết chương trình tạo hình chữ nhật như sau:

```pycon
* * * * * * * * * * 
*                 * 
*                 * 
*                 * 
* * * * * * * * * * 
```

**Đầu vào:**

Số hàng và số cột của hình chữ nhật.

**Đầu ra:**

Hình chữ nhật.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Đối với hai cạnh trên và dưới, thao tác lặp là in ra ký tự sao kèm theo khoảng trắng.

    Đối với các hàng giữa, thao tác lặp là in ra khoảng trắng.

??? tip "Viết chương trình"

    1\. Viết hàm `render()` dùng để tạo hình chữ nhật.

    Hàm gồm có hai tham số đầu vào là số hàng `row` và số cột `col`, và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Đặt biến `star` lưu ký tự sao kèm khoảng trắng.
    - Đặt biến `space` lưu hai ký tự khoảng trắng.
    - In cạnh trên: số lượng `star` cũng là số cột `col`.
    - Dùng vòng lặp `for`, cho biến `r` chạy từ `0` đến trước `row - 2`. Ứng với mỗi `r`:
    
        In ra hàng giữa:
        
        - `star` ở hai đầu
        - `space` ở giữa, với số lượng là `col - 2`

    - In cạnh dưới: số lượng `star` cũng là số cột `col`.

    ```py linenums="1"
    def render(row, col):
        star = '*' + ' '
        space = ' ' * 2

        print(f'{star * col}') # (1)!

        for r in range(row - 2):
            print(f'{star}{space * (col - 2)}{star}')
        
        print(f'{star * col}')
    ```
    { .annotate }

    1.  In ra chuỗi gồm `col` lần chuỗi `star`.

    2\. Viết chương trình chính:

    - Cho người dùng nhập số hàng và số cột, lưu vào biến `r` và `c`.
    - Gọi hàm `render()` ra thực hiện.

    ```py linenums="13"
    if __name__ == '__main__':
        r = int(input('Nhập số hàng: '))
        c = int(input('Nhập số cột: '))

        render(r, c)
    ```

    3\. Chạy chương trình trên, nhập vô `5` và `10`, kết quả như sau:

    ```py
    Nhập số hàng: 5
    Nhập số cột: 10
    * * * * * * * * * * 
    *                 * 
    *                 * 
    *                 * 
    * * * * * * * * * * 
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Viết chương trình tạo hình tam giác cân như sau:

```pycon
         *
        * *
       * * *
      * * * *
     * * * * *
```

**Đầu vào:**

Số hàng của tam giác cân.

**Đầu ra:**

Hình tam giác cân.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Hàng `r` có số lượng `r` ký tự sao. Mỗi ký tự sao có kèm theo khoảng trắng.

    Tại hàng `r`, số khoảng trắng đứng trước ký tự sao đầu tiên bằng tổng số hàng từ đi `r`.

??? tip "Viết chương trình"

    1\. Viết hàm `render()` dùng để tạo hình tam giác cân.

    Hàm gồm có một tham số đầu vào là `row`, và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Đặt biến `star` lưu ký tự sao kèm khoảng trắng.
    - Đặt biến `space` lưu một ký tự khoảng trắng.

    - Dùng vòng lặp `for`, cho biến `r` chạy từ `0` đến `row - 1`. Ứng với mỗi `r`:
    
        In ra:
        
        - `space`, với số lượng là `row - r - 1` 
        - `star`, với số lượng là `r + 1`

    ```py linenums="1"
    def render(row):
        star = '*' + ' '
        space = ' '

        for r in range(row):
            print(f'{space * (row - r - 1)}{star * (r + 1)}')
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số hàng, lưu vào biến `r`.
    - Gọi hàm `render()` ra thực hiện.

    ```py linenums="9"
    if __name__ == '__main__':
        r = int(input('Nhập số hàng: '))
        render(r)
    ```

    3\. Chạy chương trình trên, nhập vô `10`, kết quả như sau:

    ```py
    Nhập số hàng: 10
             * 
            * * 
           * * * 
          * * * * 
         * * * * * 
        * * * * * * 
       * * * * * * * 
      * * * * * * * * 
     * * * * * * * * * 
    * * * * * * * * * * 
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết chương trình tạo hình mũi tên như sau:

```pycon
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
```

**Đầu vào:**

Số hàng của mũi tên.

**Đầu ra:**

Hình mũi tên.

### Cách giải đề xuất

??? tip "Ý tưởng chính"

    Mũi tên gồm nửa tam giác trên và nửa tam giác dưới.

    - Nửa tam giác trên:
    
        Bao gồm luôn hàng dài nhất, có số lượng ký tự sao bằng với tổng số hàng chia 2 cộng thêm 1.

        Hàng `r` có số lượng `r` ký tự sao.

    - Nửa tam giác dưới:

        Hàng `r` có số lượng ký tự sao là tổng số hàng trừ đi `r`.

??? tip "Viết chương trình"

    1\. Viết hàm `render()` dùng để tạo hình tam giác cân.

    Hàm gồm có một tham số đầu vào là `row`, và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Đặt biến `star` lưu ký tự sao kèm khoảng trắng.
    - Đặt biến `space` lưu hai ký tự khoảng trắng.

    - Đối với nửa tam giác trên: dùng vòng lặp `for`, cho biến `r` chạy từ `0` đến trước `row // 2 + 1`. Ứng với mỗi `r`:
        
        In ra `star`, với số lượng là `r + 1`.
            
    - Đối với nửa tam giác dưới: dùng vòng lặp `for`, cho biến `r` chạy từ `row // 2 + 1` đến trước `row`. Ứng với mỗi `r`:

        In ra `star`, với số lượng là `row - r`.

    ```py linenums="1"
    def render(row):
        star = '*' + ' '
        space = ' ' * 2

        if row % 2 == 0:
            row = row - 1

        for r in range(row // 2 + 1):
            print(f'{star * (r + 1)}')
        
        for r in range(row // 2 + 1, row):
            print(f'{star * (row - r)}')
    ```

    2\. Viết chương trình chính:

    - Cho người dùng nhập số hàng, lưu vào biến `r`.
    - Gọi hàm `render()` ra thực hiện.

    ```py linenums="15"
    if __name__ == '__main__':
        r = int(input('Nhập số hàng: '))
        render(r)
    ```

    3\. Chạy chương trình trên, nhập vô `9`, kết quả như sau:

    ```py
    Nhập số hàng: 9
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
    ```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/13FiksfMbinKxv304sQV3RCJ16o5dUT6Q?usp=sharing){target="_blank"}