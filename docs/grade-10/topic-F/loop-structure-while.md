---
icon: simple/loop
---

# Vòng lặp while

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Vòng lặp while
    - Lệnh `break` và `continue`

## Khái quát

Vòng lặp `for` luôn đi kèm với một dãy số xác định từ hàm `range()`, đồng nghĩa ta biết rõ số lần thực hiện của thao tác.

Tuy nhiên, thực tế có nhiều tình huống mà ta không thể biết trước số lần thực hiện, chẳng hạn như:

- Đăng nhập tài khoản: người dùng phải nhập mật khẩu cho đến khi đúng thì thôi.
- Trò chơi điện tử: trong khi chưa vượt qua màn chơi, người chơi phải chơi lại.

Đối với những tình huống này, ta không thể dùng `for`, mà thay vào đó là vòng lặp `while`.

!!! note "Khái niệm vòng lặp while"

    Câu lệnh `while` là một dạng **cấu trúc lặp**, áp dụng khi ta **không biết trước số lần lặp** của một thao tác nào đó.

---

## Cú pháp

!!! note "Cú pháp vòng lặp while"

    ```py 
    while điều_kiện:
        khối_lệnh
    ```

Vòng lặp `while` hoạt động như sau:

1. Máy tính kiểm tra `điều_kiện`.
2. Nếu `điều_kiện` là `True` thì `khối_lệnh` sẽ được thực hiện. Sau đó quay về bước 1.
3. Nếu `điều_kiện` là `False` thì thoát khỏi vòng lặp.

Nói cách khác, cơ chế của `while` là: trong khi `điều_kiện` còn đúng thì còn làm.

Ví dụ:  
Dòng lệnh 5 và 6 thực hiện lặp nhiều lần thao tác `print()`.

!!! warning

    Vì điều kiện `i < n` luôn là `True` nên `print()` sẽ được lặp vô số lần.
    
    Do đó, hãy cẩn thận khi bấm nút Run. Tác giả chỉ code minh họa, chứ không tin lắm vào độ can đảm của bạn. 

```py linenums="1" hl_lines="5-6"
if __name__ == '__main__':
    n = 10

    i = 1
    while i < n:
        print('Coding is absolutely fun.')
```

Để vòng lặp while dừng lại sau một số lần lặp nào đó, ta phải có câu lệnh làm cho điều kiện trở thành `False`.

Ví dụ:  
Bổ sung dòng lệnh 7 để tăng giá trị của `i` trong mỗi lần lặp.

```py linenums="1" hl_lines="7"
if __name__ == '__main__':
    n = 10
    
    i = 1
    while i < n:
        print('Coding is absolutely fun.')
        i = i + 1 # (1)!
```
{ .annotate }

1.  Trong Python, `i = i + 1` có thể viết ngắn gọn thành `i += 1`.

Chạy đoạn mã trên, kết quả như sau:

```pycon
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
Coding is absolutely fun.
```

---

## Lệnh break

!!! note "break"

    Lệnh `break` dùng để **dừng vòng lặp** ở nửa chừng, bỏ qua toàn bộ các lệnh còn lại trong thân vòng lặp.

Nói cách khác, `break` hoạt động như một *"nút dừng khẩn cấp"*, *"ngắt ngang"* vòng lặp khi có điều kiện đặc biệt xảy ra.

Ví dụ:  
Dòng lệnh 9 sẽ ngắt vòng lặp khi điều kiện `i` đạt đến `4`.

```py linenums="1" hl_lines="8-9"
if __name__ == '__main__':
    n = 10
    
    i = 1
    while i < n:
        print(i)

        if i == 4:
            break

        i = i + 1
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
1
2
3
4
```

---

## Lệnh continue

!!! note "continue"

    Lệnh `continue` được dùng để **bỏ qua** các lệnh còn lại trong lần lặp hiện hành và chuyển sang lần lặp tiếp theo.

Ví dụ:  
Dòng lệnh 9 bỏ qua thao tác `print()` khi `i` đạt đến `3`, quay trở lại dòng lệnh 5 để kiểm tra điều kiện cho lần lặp mới.

```py linenums="1" hl_lines="8-9"
if __name__ == '__main__':
    n = 5

    i = 0
    while i < n:
        i = i + 1
        
        if i == 3:
            continue

        print(i)
```

Chạy đoạn mã trên, kết quả như sau:

```pycon
1
2
4
5
```

!!! tip "Lưu ý"

    Lệnh `break` và `continue` cũng áp dụng được trong vòng lặp `for`.  

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1HA1SOeJo2WxA6CEdvp7reF8a52JgTXkN?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/loop-structure-while.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| lặp với số lần không biết trước | indefinite iteration |
| ngắt (vòng lặp, chương trình) | break |
| vòng lặp vô tận | infinite loop |