---
icon: material/language-python
---

# Bắt đầu với Python

!!! abstract "Tóm lược nội dung"

    Bài này trình bày:
    
    - Hướng cài đặt Python lên máy tính
    - Viết chương trình Python đầu tiên

## Khái quát

**Python** là ngôn ngữ lập trình bậc cao, do [Guido van Rossum](https://gvanrossum.github.io/){:targer="_blank"} tạo ra và ra mắt lần đầu vào năm 1991.

![Chân dung Guido van Rossum](https://www.flickr.com/photo_download.gne?size=z&id=54898352234&secret=6560947aa8){loading=lazy width=240}

*Chân dung Guido van Rossum*

Python có cú pháp đơn giản, dễ đọc, dễ viết và dễ hiểu. Python giúp người lập trình tập trung vào giải quyết vấn đề thay vì lo lắng về cú pháp phức tạp.

Một số đặc điểm nổi bật của Python:

- Được xem ngôn ngữ thông dịch.
- Là ngôn ngữ hướng đối tượng.
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

![Tải tập tin cài đặt Python](https://www.flickr.com/photo_download.gne?size=l&id=54898352179&secret=56a4a7ac2a){loading=lazy width=540}

**Bước 2:**

Click đôi vào tập tin vừa tải **python-3.13.2-amd64.exe** để tiến hành cài đặt Python.

*Tập tin này là phiên bản Python 3.13.2 dành cho hệ điều hành Windows 64 bit.*

### Cài đặt extension Python cho Visual Studio Code

1. Trong **Visual Studio Code**, ở thanh bên trái, click vào nut **Extensions**.

2. Trong ô tìm kiếm, gõ từ khóa **python**.

3. Trong danh sách kết quả, chọn extension **Python** của Microsoft. 

4. Click nút **Install**.

    Trong hình dưới đây, nút màu xanh hiển thị là **Uninstall** do extension này đã được cài đặt.

    ![Tải và cài đặt extension Python cho VS Code](https://www.flickr.com/photo_download.gne?size=l&id=54898413590&secret=ae4927b2e8){loading=lazy width=540}

### Tạo tập tin Python

**Bước 1:**

Trong **File Explorer** (1) của Windows, tạo một thư mục mới trong ổ đĩa **D:**, ví dụ **Python**.
{ .annotate }

1.  Mở **File Explorer** bằng tổ hợp phím ++win+e++.

*Bước này chỉ thực hiện một lần duy nhất. Mỗi khi viết chương trình Python mới, ta chỉ cần mở thư mục này theo Bước 2 dưới đây.*

**Bước 2:**

1. Mở **Visual Studio Code**.

2. Ở giữa màn hình, chọn mục **Open Folder...**.

    Hoặc chọn menu **File**, rồi chọn **Open Folder...**.

    ![Mở thư mục trong VS Code](https://www.flickr.com/photo_download.gne?size=l&id=54897242772&secret=c361d67327){loading=lazy width=540}

3. Chọn thư mục **Python** đã tạo ở trên.

**Bước 3:**

1. Trong **Visual Studio Code**, tại thư mục **Python**, click nút **+** (**New file**).

    ![Tạo tập tin Python mới](https://www.flickr.com/photo_download.gne?size=l&id=54897242782&secret=d110477f17){loading=lazy width=540}

2. Gõ tên tập tin Python, ví dụ **my-first-python.py**.

    ![Nhập tên tập tin Python](https://www.flickr.com/photo_download.gne?size=l&id=54898352144&secret=185a8a46ae){loading=lazy width=540}

!!! info "Tên tập tin"

    Phần tên mở rộng của tập tin Python là **.py**

### Viết chương trình

1. Click chọn tập tin **my-first-python.py** vừa tạo, nhập đoạn mã sau:

    ```py linenums="1"
    if __name__ == '__main__': # (1)!
        print('Hello, Tèo!') # (2)!
    ```
    { .annotate }

    1.  Dòng lệnh này có thể được xem là điểm bắt đầu của chương trình chính.

    2.  Dòng lệnh này sẽ in chuỗi ký tự `Hello, Tèo!` ra màn hình.


    ![Mã lệnh của chương trình Python đầu tiên](https://www.flickr.com/photo_download.gne?size=l&id=54898352144&secret=185a8a46ae){loading=lazy width=540}

    !!! tips "Chuỗi trong Python"

        Bạn muốn Hello ai cũng được, chỉ cần đặt chuỗi trong cặp dấu nháy `'Hello ...'`.

2. Nhấn tổ hợp phím ++ctrl+s++ để lưu tập tin.

### Chạy chương trình

**Bước 1:**

1. Nhấn tổ hợp phím ++ctrl+shift+p++ để mở **Command Palette**.

2. Gõ từ khóa **Python**.

3. Tìm và chọn lệnh **Python File**.

    ![Chọn lệnh Python File](https://www.flickr.com/photo_download.gne?size=l&id=54898352104&secret=dec0a184aa){loading=lazy width=540}

4. Chọn tiếp lệnh **Python Debugger**.

    ![Chọn lệnh Python Debugger](https://www.flickr.com/photo_download.gne?size=l&id=54897242857&secret=b712bcf79d){loading=lazy width=540}

*Các thao tác tại Bước 1 này chỉ thực hiện một lần duy nhất. Những lần chạy sau này, ta chỉ cần làm theo Bước 2 dưới đây.*

**Bước 2:**

1. Để chạy chương trình vừa viết, ta nhấn tổ hợp phím ++f5++.

2. Xem kết quả trong cửa sổ **Terminal** ở bên dưới màn hình.

    ![Kết quả chạy chương trình trong cửa sổ Terminal](https://www.flickr.com/photo_download.gne?size=l&id=54898413540&secret=b193704c5f){loading=lazy width=540}

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

2. Chọn menu **File**.

3. Chọn **New notebook in Drive**.

**Bước 2:**

Đổi tên tập tin thành **my-first-python.ipynb**.

![Đổi tên tập tin trong Google Colab](https://www.flickr.com/photo_download.gne?size=l&id=54898109901&secret=10fe43ec45){loading=lazy width=540}

!!! info "Tên tập tin trong Google Colab"

    Phần tên mở rộng của tập tin trong Google Colab là **.ipynb**, viết tắt của **Interactive Python Notebook**.

### Viết chương trình

1. Click vào cell trống (1), nhập đoạn mã sau:
    { .annotate }

    1.  Trong Google Colab, có hai loại cell (tạm dịch là khối):

        - Khối **Code**: dùng để viết mã lệnh Python.
        - Khối **Text**: dùng để viết văn bản tự do theo định dạng Markdown.

    ```py linenums="1"
    if __name__ == '__main__': # (1)!
        print('Hello, Tèo!') # (2)!
    ```
    { .annotate }

    1.  Dòng lệnh này có thể được xem là điểm bắt đầu khi chạy chương trình Python.

    2.  Dòng lệnh này sẽ in chuỗi ký tự `Hello, Tèo!` ra màn hình.

    ![Mã lệnh của chương trình Python đầu tiên](https://www.flickr.com/photo_download.gne?size=l&id=54897242912&secret=484b8e82bd){loading=lazy width=540}

2. Google có thể tự động lưu tập tin.

    Nhưng ta nên tập thói quen tốt, là tự nhấn tổ hợp phím ++ctrl+s++ để lưu.

### Chạy chương trình

1.  Ở đầu mỗi khối, ta click vào nút **Run cell**.

    Hoặc nhấn tổ hợp phím ++ctrl+enter++.

    ![Nhấn nút Run cell để chạy chương trình](https://www.flickr.com/photo_download.gne?size=l&id=54898352219&secret=96ac1293bd){loading=lazy width=540}

2.  Xem kết quả ở ngay bên dưới khối.

    ![Kết quả chạy chương trình trong Google Colab](https://www.flickr.com/photo_download.gne?size=l&id=54898352204&secret=5f2a77a6ae){loading=lazy width=540}

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 500px" frameBorder=0 src="../mindmaps/getting-started-with-python.html">Sơ đồ tóm tắt</iframe>
</div>

## Some English words

| Vietnamese | Tiếng Anh |
| --- | --- |
| chương trình soạn thảo văn bản | text editor |
| ngôn ngữ lập trình | programming language |
