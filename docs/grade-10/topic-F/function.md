---
icon: material/function
---

# Hàm

!!! abstract "Tóm lược nội dung"

    Bài này trình bày về hàm và cách viết hàm trong Python.

## Khái niệm

!!! note "Hàm trong lập trình"

    **Hàm** là một khối lệnh được viết riêng biệt để thực hiện một nhiệm vụ cụ thể.

Hàm có thể được xem là một chiếc máy mà khi ta đưa dữ liệu vào, chiếc máy sẽ xử lý bên trong rồi đưa ra kết quả.

---

## Phân loại

Python có ba loại hàm:

| STT | Loại hàm | Mô tả | Ví dụ |
| --- | --- | --- | --- |
| 1 | Hàm có sẵn | Do Python cung cấp sẵn. <br> Lập trình viên chỉ cần gọi hàm ra sử dụng. | `print()`, `input()`, `int()` |
| 2 | Hàm do người dùng định nghĩa | Do lập trình viên tự viết. <br> Có thể tái sử dụng và chia sẻ cho người khác. | `def area(a, b):` |
| 3 | Hàm ẩn danh | Hàm nhỏ do lập trình viên tự viết. <br> Hàm này không có tên và thường chỉ dùng một lần. | `lambda x: x * 2` |

---

## Lợi ích

1. **Tăng tính rõ ràng của mã nguồn**

    Hàm giúp cho mã nguồn của chương trình sạch, gọn, dễ đọc và dễ hiểu.

2. **Tái sử dụng**

    Thay vì viết mã lệnh nhiều lần, ta có thể viết thành hàm một lần và sử dụng lại nhiều lần.
    
3. **Dễ bảo trì**

    Khi sửa lỗi hoặc nâng cấp, ta chỉ cần thay đổi trong hàm mà không làm ảnh hưởng toàn bộ chương trình.

4. **Cùng nhau phát triển chương trình**

    Mỗi lập trình viên có thể viết các hàm riêng biệt, sau đó tích hợp lại.

4. **Trừu tượng hoá**

    Hàm giúp làm ẩn chi tiết triển khai bên trong đối với người dùng. Người dùng chỉ cần biết đầu vào và đầu ra của hàm.

5. **Phát triển tư duy**
    
    Viết chương trình theo hàm giúp phát triển tư duy thuật toán, giúp rèn luyện năng lực phân tích bài toán và giúp điểm môn Tin học cao hơn 🫡.

---

## Cách viết hàm tự định nghĩa

Khi tự viết hàm, ta cần chú ý những yếu tố sau:

| Yếu tố | Mô tả |
| --- | --- |
| `def` | Là từ khoá dùng để khai báo hàm. |
| Tên hàm | Đặt tuỳ ý, dễ hiệu và gợi nhớ. |
| Tham số | Được dùng để nhận dữ liệu đầu vào. <br> Một hàm có thể có hoặc không có tham số. |
| Thân hàm | Là nơi viết các dòng lệnh xử lý. |
| `return` | Là từ khoá dùng để trả về kết quả, chính là thông tin đầu ra. <br> Là dòng lệnh kết thúc hàm. | 

Ví dụ:  
Viết chương trình tính diện tích hình chữ nhật có sử dụng hàm.

**Bước 1:** viết hàm

Viết hàm `rectangle_area()` tính diện tích. Hàm này gồm có:

- Hai tham số `a` và `b` đại diện cho chiều dài và chiều rộng.
- Giá trị trả về là diện tích.

```py linenums="1"
def rectangle_area(a, b):
    s = a * b
    return s
```

**Bước 2:** viết chương trình chính

Trong chương trình chính, viết mã lệnh cho người dùng nhập vào chiều dài và chiều rộng.

Sau đó, gọi hàm `rectangle_area()` ra thực hiện (dòng 11).

```py linenums="6" hl_lines="11"
if __name__ == '__main__':
    length = int(input('Chiều dài: '))
    width = int(input('Chiều rộng: '))
    
    # Gọi hàm
    area = rectangle_area(length, width)

    print(f'Diện tích hình chữ nhật: {area}')
```

Chạy chương trình, kết quả như sau:

```pycon
Chiều dài: 18
Chiều rộng: 4
Diện tích hình chữ nhật: 72
```

---

## Mã nguồn

Code đầy đủ được đặt tại:

- [Google Colab](https://colab.research.google.com/drive/1lzwmaGXUisJYHCQDtQe7laH_fvMtTe5P?usp=sharing){target="_blank"}

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/function.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| giá trị trả về | return value |
| hàm | function |
| hàm ẩn danh | Python đặt là lambda function |
| hàm có sẵn | built-in function |
| hàm do người dùng định nghĩa | user-defined functions |
| tham số | parameter |