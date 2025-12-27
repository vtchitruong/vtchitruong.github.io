---
icon: material/format-list-numbered
---

# Thực hành danh sách - Phần 3

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn áp dụng các thao tác thêm và xoá đối danh sách lồng nhau (list trong list).

Cho bảng xếp hạng hộ chiếu các quốc gia như sau: [^1]

[^1]: Dữ liệu lấy từ [Passport Index](https://www.passportindex.org/byRank.php){target="_blank"} năm 2025.

| Thứ hạng | Quốc gia |
| --- | --- |
| 1 | United Arab Emirate |
| 2 | Singapore, Spain |
| 3 | Belgium, France, Sweden, Germany, v.v... |
| ... | ... |

## Bài 1

### Đề bài

**Yêu cầu:**

Tạo danh sách `P` gồm 100 hàng (ứng với 99 thứ hạng từ 0 đến 99).

### Cách giải đề xuất
    
??? tip "Viết chương trình"

    1\. Trong chương trình chính:
    
    - Dùng list comprehension khởi tạo danh sách `P` gồm `100` hàng. Mỗi hàng đều là một danh sách rỗng.

    ```py linenums="6"
    if __name__ == '__main__':
        P = [[] for _ in range(100)] # (1)!
        print(P)
    ```
    { .annotate }

    1.  Biểu thứ `[[] for _ in range(100)]` là một **list comprehension** giúp tạo ra `100` danh sách rỗng, có chỉ số từ `0` đến `99`.

        Mỗi danh sách rỗng là một hàng của `P` và chưa có phần tử nào.

    2\. Chạy chương trình trên, kết quả như sau:
    
    ```py
    [[], [], [], [], [], [], [], [], ..., []]
    ```

---

## Bài 2

### Đề bài

**Yêu cầu:**

Dùng hàm `append()` để thêm:

- United Arab Emirates vô nhóm hạng 1
- Estonia, Slovenia và Slovakia vô hạng 4
- Monaco vô nhóm hạng 10

### Cách giải đề xuất

??? tip "Viết chương trình"

    1\. Trong chương trình chính:
    
    - Đánh dấu `#` để vô hiệu hoá dòng lệnh `print(P)`.
    - Viết các dòng lệnh `append()` để thêm phần tử vô các hàng `1`, `4` và `10`.

    *Lưu ý:*  
    *Viết chương trình chính từ dòng 6 để chừa chỗ trống cho hàm ở những bài tiếp theo.*

    ```py linenums="6"
    if __name__ == '__main__':
        P = [[] for _ in range(100)]
        # print(P)

        P[1].append('United Arab Emirates')
        
        P[4].append('Estonia')
        P[4].append('Slovenia')
        P[4].append('Slovakia')

        P[10].append('Monaco')

        print(P)
    ```

    2\. Chạy chương trình trên, kết quả như sau:

    ```py
    [[], ['United Arab Emirates'], [], [], ['Estonia', 'Slovenia', 'Slovakia'], [], [], [], [], [], ['Monaco'], [], ..., []]
    ```

---

## Bài 3

### Đề bài

**Yêu cầu:**

Viết hàm in ra `n` thứ hạng đầu của bảng xếp hạng.

### Cách giải đề xuất

??? tip "Viết chương trình"

    1\. Viết hàm `head()` dùng để in ra `n` hàng đầu tiên (tức `n` phần tử đầu tiên) của danh sách. 

    Hàm gồm có hai tham số đầu vào là danh sách `L` và `n`, và không có giá trị trả về.

    Hàm hoạt động như sau:

    - Dùng vòng lặp `for` cho biến `i` chạy từ `1` đến `n` (Do cao nhất là hạng 1, không có hạng 0, nên hàng có chỉ số `0` được bỏ qua):

        In ra thứ hạng `i` và tên các nước trong hàng `i`.

    ```py linenums="1"
    def head(L, n):
        for i in range(1, n + 1):
            print(f'Rank {i}: {L[i]}')
    ```

    2\. Trong chương trình chính:

    - Đặt dấu `#` để vô hiệu hoá dòng lệnh `print(P)`.
    - Gọi hàm `head()` với tham số là `P` và `10`. 

    ```py linenums="6" hl_lines="13-14"
    if __name__ == '__main__':
        P = [[] for _ in range(100)]
        # print(P)

        P[1].append('United Arab Emirates')
        
        P[4].append('Estonia')
        P[4].append('Slovenia')
        P[4].append('Slovakia')

        P[10].append('Monaco')

        # print(P)
        head(P, 10)
    ```

    3\. Chạy chương trình trên, kết quả như sau:

    ```py
    Rank 1: ['United Arab Emirates']
    Rank 2: []
    Rank 3: []
    Rank 4: ['Estonia', 'Slovenia', 'Slovakia']
    Rank 5: []
    Rank 6: []
    Rank 7: []
    Rank 8: []
    Rank 9: []
    Rank 10: ['Monaco']
    ```

---

## Bài 4

### Đề bài

**Yêu cầu:**

Dùng hàm `extend()` để thêm:

- Singapore, Spain, United States of America vô nhóm hạng 2
- Belgium, France, Sweden, Japan vô nhóm hạng 3
- Benin, Madagascar, Tajikistan vô nhóm hạng 69

### Cách giải đề xuất

??? tip "Viết chương trình"

    1\. Trong chương trình chính:

    - Đánh dấu `#` để vô hiệu hoá dòng lệnh `head(P, 10)` cũ.
    - Viết lệnh `extends()` để thêm các nước vô hàng `2`, `3` và `69`.

    ```py linenums="6" hl_lines="13-20"
    if __name__ == '__main__':
        P = [[] for _ in range(100)]
        # print(P)

        P[1].append('United Arab Emirates')
        
        P[4].append('Estonia')
        P[4].append('Slovenia')
        P[4].append('Slovakia')

        P[10].append('Monaco')

        # print(P)
        # head(P, 10)

        P[2].extend(['Singapore', 'Spain', 'United States of America'])
        P[3].extend(['Belgium', 'France', 'Sweden', 'Japan'])
        P[69].extend(['Benin', 'Madagascar', 'Tajikistan'])
        
        head(P, 10)
    ```

    2\. Chạy chương trình trên, kết quả như sau:

    ```py
    Rank 1: ['United Arab Emirates']
    Rank 2: ['Singapore', 'Spain', 'United States of America']
    Rank 3: ['Belgium', 'France', 'Sweden', 'Japan']
    Rank 4: ['Estonia', 'Slovenia', 'Slovakia']
    Rank 5: []
    Rank 6: []
    Rank 7: []
    Rank 8: []
    Rank 9: []
    Rank 10: ['Monaco']  
    ```

---

## Bài 5

### Đề bài

**Yêu cầu:**

Xoá United States of America khỏi nhóm hạng 2, rồi thêm vô nhóm hạng 9.

### Cách giải đề xuất

??? tip "Viết chương trình"

    1\. Trong chương trình chính:

    - Đánh dấu `#` để vô hiệu hoá dòng lệnh `head(P, 10)` cũ.
    - Dùng hàm `remove()` để xoá khỏi hàng `2`.
    - Dùng hàm `append()` để thêm vô hàng `9`.

    ```py linenums="25"
        # head(P, 10)
        
        P[2].remove('United States of America')
        P[9].append('United States of America')
        
        head(P, 10)
    ```

    2\. Chạy chương trình trên, kết quả như sau:

    ```py
    Rank 1: ['United Arab Emirates']
    Rank 2: ['Singapore', 'Spain']
    Rank 3: ['Belgium', 'France', 'Sweden', 'Japan']
    Rank 4: ['Estonia', 'Slovenia', 'Slovakia']
    Rank 5: []
    Rank 6: []
    Rank 7: []
    Rank 8: []
    Rank 9: ['United States of America']
    Rank 10: ['Monaco']
    ```

---

## Bài 6

### Đề bài

**Yêu cầu:**

Thêm `Viet Nam` vô vị trí áp cuối của nhóm hạng `69`.

### Cách giải đề xuất

??? tip "Viết chương trình"

    1\. Trong chương trình chính:

    - Dùng hàm `len()` để lấy số phần tử hiện có trong hàng `69`, gán kết quả cho biến `n`.
    - Dùng hàm `insert()` để thêm vô vị trí áp cuối, là `n - 1`, của hàng `69`.

    ```py linenums="32"
        n = len(P[69])
        P[69].insert(n - 1, 'Viet Nam')

        print(f'Rank 69: {P[69]}')
    ```

    2\. Chạy chương trình trên, kết quả như sau:

    ```py
    Rank 69: ['Benin', 'Madagascar', 'Viet Nam', 'Tajikistan']
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1xh2Db9apAnRbYQJdMSNQOyzKu-fi344V?usp=sharing){target="_blank"}