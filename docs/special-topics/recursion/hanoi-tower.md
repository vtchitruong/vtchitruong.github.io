# Tháp Hà Nội

!!! abstract "Tóm lược nội dung"

    Bài này trình bày cách giải bài toán tháp Hà Nội bằng kỹ thuật đệ quy.

## Bài toán

Bài toán tháp Hà Nội (còn có tên khác là bài toán Benares Temple, Tower of Brahma, Lucas' Tower hoặc Kim Tự Tháp) là một trò chơi gồm ba cột và nhiều đĩa có đường kính khác nhau được đặt vào các cột.

Ở trạng thái ban đầu, các đĩa nằm chồng lên nhau trên cùng một cột, đĩa nhỏ nằm trên đĩa lớn, cả chồng đĩa tạo thành hình nón.

Người chơi cần phải chuyển toàn bộ đĩa đến cột đích theo quy định sau:

- Mỗi lần chỉ được chuyển một đĩa.
- Mỗi lần chỉ được lấy một đĩa nằm trên cùng của một cột và đặt đĩa này lên trên cùng của một cột khác.
- Đĩa nhỏ phải luôn nằm trên đĩa lớn.

![Minh họa trò chơi có 4 đĩa](/special-topics/recursion/images/ha-noi-tower.svg){width="75%" loading=lazy}

*Minh họa trò chơi có 4 đĩa*

**Yêu cầu:**

In ra màn hình các câu hướng dẫn sao cho người chơi chỉ cần làm theo là hoàn thành trò chơi. Mỗi câu hướng dẫn phải có nội dung cụ thể: chuyển đĩa $d$ từ cột $x$ đến cột $y$.  

**Đầu vào:**

Ba số nguyên lần lượt là số lượng đĩa, cột bắt đầu và cột đích.

**Đầu ra:**

Các câu hướng dẫn chuyển đĩa.

**Bộ kiểm thử:**

| Đầu vào | Đầu ra |
| --- | --- |
| 3 1 3 | Chuyển đĩa 1: từ cột 1 đến cột 3 <br> Chuyển đĩa 2: từ cột 1 đến cột 2 <br> Chuyển đĩa 1: từ cột 3 đến cột 2 <br> Chuyển đĩa 3: từ cột 1 đến cột 3 <br> Chuyển đĩa 1: từ cột 2 đến cột 1 <br> Chuyển đĩa 2: từ cột 2 đến cột 3 <br> Chuyển đĩa 1: từ cột 1 đến cột 3 |

## Cách giải đề xuất

### Ý tưởng chính

Gọi:
    
- Đĩa nhỏ nhất (nằm trên cùng) là đĩa `1`.
- Đĩa lớn nhất (nằm dưới cùng) là đĩa `n`.
    
Ta *"giả vờ"* xem tất cả các đĩa chỉ là hai nhóm:

- Nhóm thứ nhất: `n - 1` đĩa nằm trên.
- Nhóm thứ hai: đĩa `n` nằm dưới.

Với chỉ hai nhóm, ta có thể chuyển đĩa như sau:

- Bước 1: chuyển `n - 1` đĩa từ **cột bắt đầu** đến **cột trung gian**.
- Bước 2: chuyển đĩa `n` từ **cột bắt đầu** đến **cột đích**.
- Bước 3: chuyển `n - 1` đĩa từ **cột trung gian** đến **cột đích**.

Ta nhận thấy tại bước 1 và bước 3, bài toán được lặp lại với kích thước nhỏ hơn. Đây là chỗ có thể gọi thực hiện đệ quy.

Như vậy, bài toán có thể được phân tích như sau:

1. **Trường hợp cơ sở:** `n == 1` đĩa.

    Đây là trường hợp mà ta chuyển một đĩa cụ thể từ cột xác định này đến một cột xác định khác.

2. **Trường hợp đệ quy:** `n - 1` đĩa còn lại.

    Đây là trường hợp dành cho bước 1 và bước 3.

    Trong đó, ta cần xác định cột trung gian là cột nào, vì không phải lúc nào cũng là cột 2. Chẳng hạn, khi chuyển đĩa từ cột 2 đến cột 1, thì cột trung gian là cột 3.

    Ta có: tổng số thứ tự của ba cột là $1 + 2 + 3 = 6$.

    Do đó, để xác định cột trung gian, ta lấy tổng trừ đi cột bắt đầu và cột đích.

    Ví dụ: nếu cột bắt đầu là cột 2, cột đích là cột 1, thì cột trung gian là $6 - 2 - 1 = 3$.

### Viết chương trình

1. Viết hàm `hanoi_tower()` để thực hiện chuyển đĩa bằng kỹ thuật đệ quy.

    Hàm này gồm ba tham số:
    
    - `disc`: vừa là số lượng đĩa, vừa là số thứ tự của đĩa cuối cùng
    - `source`: cột bắt đầu
    - `target`: cột đích 

    ```py linenums="1"
    def hanoi_tower(disc, source, target):
        # Trường hợp cơ sở
        if disc == 1:
            print(f'Chuyển đĩa 1: từ cột {source} đến cột {target}')
            return

        # Xác định cột trung gian
        spare = 6 - (source + target)

        # Đệ quy: chuyển n - 1 đĩa nằm trên từ cột source đến cột spare
        hanoi_tower(disc - 1, source, spare)

        # Chuyển đĩa disc nằm dưới cùng từ cột source đến cột target
        print(f'Chuyển đĩa {disc}: từ cột {source} đến cột {target}')

        # Đệ quy: chuyển n - 1 đĩa còn lại từ cột spare đến cột target
        hanoi_tower(disc - 1, spare, target)
    ```

2. Viết chương trình chính.

    ```py linenums="20"
    if __name__ == '__main__':
        n = int(input('Số lượng đĩa: '))
        s = int(input('Cột bắt đầu: '))
        t = int(input('Cột đích: '))

        hanoi_tower(n, s, t)
    ```

3. Chạy chương trình trên, kết quả như sau:

    ```pycon
    Số lượng đĩa: 4
    Cột bắt đầu: 1
    Cột đích: 3
    Chuyển đĩa 1: từ cột 1 đến cột 2
    Chuyển đĩa 2: từ cột 1 đến cột 3
    Chuyển đĩa 1: từ cột 2 đến cột 3
    Chuyển đĩa 3: từ cột 1 đến cột 2
    Chuyển đĩa 1: từ cột 3 đến cột 1
    Chuyển đĩa 2: từ cột 3 đến cột 2
    Chuyển đĩa 1: từ cột 1 đến cột 2
    Chuyển đĩa 4: từ cột 1 đến cột 3
    Chuyển đĩa 1: từ cột 2 đến cột 3
    Chuyển đĩa 2: từ cột 2 đến cột 1
    Chuyển đĩa 1: từ cột 3 đến cột 1
    Chuyển đĩa 3: từ cột 2 đến cột 3
    Chuyển đĩa 1: từ cột 1 đến cột 2
    Chuyển đĩa 2: từ cột 1 đến cột 3
    Chuyển đĩa 1: từ cột 2 đến cột 3
    ```

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1MDK_03352u5FH6YLMl37J3pHSFF7YWXe?usp=sharing){target="_blank"}