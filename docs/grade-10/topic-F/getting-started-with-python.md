---
icon: material/language-python
---

# Bắt đầu với Python

!!! abstract "Tóm lược nội dung"

    Bài này trình bày hướng cài đặt Python lên máy tính và viết chương trình Python đầu tiên.

## Khái quát

**Python** là ngôn ngữ lập trình bậc cao, do [Guido van Rossum](https://gvanrossum.github.io/){:targer="_blank"} tạo ra và ra mắt lần đầu vào năm 1991.

![Chân dung Guido van Rossum](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtgaHBJem_v2HIv1Q/root/content){loading=lazy width=240}  
*Chân dung Guido van Rossum*

Python được xem là ngôn ngữ thông dịch, hướng đối tượng và đa mục đích.

Python có cú pháp đơn giản, dễ đọc, dễ viết và dễ hiểu. Python giúp người lập trình tập trung vào giải quyết vấn đề thay vì lo lắng về cú pháp phức tạp.

Một số đặc điểm nổi bật của Python:

- Dễ học và dễ sử dụng.
- Có nhiều thư viện và công cụ trợ giúp.
- Đa năng và đa mục đích, đặc biệt là ứng dụng rộng rãi trong lĩnh vực phân tích dữ liệu và trí tuệ nhân tạo.
- Mã nguồn mở và cộng đồng lớn.

## Công cụ viết mã lệnh

Để viết mã lệnh Python, ta có thể sử dụng bất kỳ chương trình soạn thảo văn bản (1) nào tùy ý.
{ .annotate }

1.  Mặc dù **text editor** và **word processor** đều là chương trình làm việc với văn bản, chúng vẫn khác nhau về tính năng và mục đích.

    Bằng một cách nào đó, một số tài liệu tiếng Việt, bao gồm sách giáo khoa, dịch chung là **chương trình soạn thảo văn bản**, nên có thể dẫn tới một vài nhầm lẫn nho nhỏ.

Bài này chỉ đề cập hai chương trình là:

- [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"}
- [Google Colab](https://colab.research.google.com/){:target="_blank"}

## Sử dụng Visual Studio Code

### Cài đặt Python

**Bước 1:**

Tải Python từ trang chủ [Python](https://www.python.org/){:target="_blank"}.

![Tải tập tin cài đặt Python](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsJFALBb6LLvHLpWe3g/root/content){loading=lazy}

**Bước 2:**

Click đôi vào tập tin vừa tải **python-3.13.2-amd64.exe** để tiến hành cài đặt Python.

*Tập tin này là phiên bản Python 3.13.2 dành cho hệ điều hành Windows 64 bit.*

### Cài đặt extension Python cho Visual Studio Code

1. Trong **Visual Studio Code**, click vào nut **Extensions** ở thanh bên trái.

2. Trong ô tìm kiếm, gõ từ khóa **python**.

3. Trong danh sách kết quả, chọn extension **Python** của Microsoft, rồi click nút **Install**.

    ![Tải và cài đặt extension Python cho VS Code](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKs7N_cCG_xjUFxgRQ/root/content){loading=lazy}

### Tạo tập tin Python

**Bước 1:**

Trong **File Explorer** của Windows, tạo một thư mục mới trong ổ đĩa **D:**, ví dụ **Python**.

*Bước này chỉ thực hiện một lần duy nhất. Mỗi khi viết chương trình Python mới, ta chỉ cần mở thư mục này theo Bước 2 dưới đây.*

**Bước 2:**

1. Mở **Visual Studio Code**.

2. Chọn mục **Open Folder...** ở giữa màn hình hoặc chọn menu **File** > **Open Folder...**.

    ![Mở thư mục trong VS Code](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtArTIt7NUA3SAkgQ/root/content){loading=lazy}

3. Chọn thư mục **Python** đã tạo ở trên.

**Bước 3:**

1. Trong **Visual Studio Code**, tại thư mục **Python**, click nút **+** (**New file**).

    ![Tạo tập tin Python mới](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtELWdNWXY2gm7pZg/root/content){loading=lazy width=540}

2. Gõ tên tập tin Python, ví dụ **my-first-python.py**.

    ![Nhập tên tập tin Python](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtFSCvrctDuVvx4cA/root/content){loading=lazy width=540}

!!! info "Tên tập tin"

    Phần tên mở rộng của tập tin Python là **.py**

### Viết chương trình

1. Click chọn tập tin **my-first-python.py** vừa tạo, nhập đoạn mã sau:

```py linenums="1"
if __name__ == '__main__': # (1)!
    print('Hello, World!') # (2)!
```
{ .annotate }

1.  Dòng lệnh này có thể được xem là điểm bắt đầu của chương trình chính.

2.  Dòng lệnh này sẽ in chuỗi ký tự `Hello, World!` ra màn hình.

    ![Mã lệnh của chương trình Python đầu tiên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtQKsNaVVwwxXkgxw/root/content){loading=lazy width=540}

2. Nhấn tổ hợp phím ++ctrl+s++ để lưu tập tin.

### Chạy chương trình

**Bước 1:**

1. Nhấn tổ hợp phím ++ctrl+shift+p++ để mở **Command Palette**.

2. Gõ từ khóa **Python**.

3. Tìm và chọn lệnh **Python File**.

    ![Chọn lệnh Python File](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtVUeCR5E3n6sMw_A/root/content){loading=lazy}

4. Chọn tiếp lệnh **Python Debugger**.

    ![Chọn lệnh Python Debugger](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtR1yyKNKujVWKzyw/root/content){loading=lazy}

*Các thao tác tại Bước 1 này chỉ thực hiện một lần duy nhất. Những lần sau, mỗi khi cần chạy chương trình, ta chỉ cần làm theo Bước 2 dưới đây.*

**Bước 2:**

1. Để chạy chương trình vừa viết, ta nhấn tổ hợp phím ++f5++.

2. Xem kết quả trong cửa sổ **Terminal** ở bên dưới màn hình.

    ![Kết quả chạy chương trình trong cửa sổ Terminal](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtfWWkmY4GN8JYsOw/root/content){loading=lazy}

## Sử dụng Google Colab

### Tạo tập tin

**Bước 1:**

Tạo tập tin Google Colab mới theo một trong hai cách sau:

Cách 1:

1. Mở [Google Drive](https://drive.google.com/){:target="_blank"}.

2. Trong **Google Drive**, click **New**.

3. Chọn menu **More**.

4. Chọn **Google Colaboratory**.

Cách 2:

1. Mở [Google Colab](https://colab.research.google.com/){:target="_blank"}.

2. Chọn menu **File** 

3. Chọn **New notebook in Drive**.

**Bước 2:**

Đổi tên tập tin thành **my-first-python.ipynb** (1).
{ .annotate }

1.  **.ipynb** là viết tắt của **Interactive Python Notebook**. Đây là phần tên mở rộng của tập tin Google Colab, không phải của Python.

    ![Đổi tên tập tin trong Google Colab](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtq47BDJsvRPAX32Q/root/content){loading=lazy width=540}

### Viết chương trình

1. Click vào cell trống, nhập đoạn mã sau:

    ```py linenums="1"
    if __name__ == '__main__': # (1)!
        print('Hello, World!') # (2)!
    ```
    { .annotate }

    1.  Dòng lệnh này có thể được xem là điểm bắt đầu của chương trình chính.

    2.  Dòng lệnh này sẽ in chuỗi ký tự `Hello, World!` ra màn hình.

    ![Mã lệnh của chương trình Python đầu tiên](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtsENYqhQUm9B38kA/root/content){loading=lazy width=540}

2. Nhấn tổ hợp phím ++ctrl+s++ để lưu tập tin, hoặc Google sẽ tự động lưu.

### Chạy chương trình

1.  Để chạy chương trình vừa viết, ta click vào nút **Run cell** ở đầu mỗi ô, hoặc nhấn tổ hợp phím ++ctrl+enter++.

    ![Nhấn nút Run cell để chạy chương trình](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtpSqMAT5t7Sr-Gsw/root/content){loading=lazy width=540}

2.  Xem kết quả ở ngay bên dưới cell.

    ![Kết quả chạy chương trình trong Google Colab](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsKtkkzo3TYSS1-V4pg/root/content){loading=lazy width=540}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 500px" frameBorder=0 src="../mindmaps/getting-started-with-python.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| chương trình soạn thảo văn bản | text editor |
| ngôn ngữ lập trình | programming language |
