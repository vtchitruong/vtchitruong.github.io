---
categories:
    - Chase the database
    - Set up & Code down
authors: [mrschool]
date: 2021-10-26
---

# Truy vấn SQLite bằng SQL Server Management Studio

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV84UNK0R0ILZZphCU9j0zeCh0W3KfD7pgwuoGAdJxOnY1UKOjvWZt9tsMOOh2wOr9FMFW2q-HCTtA6Ksfh7uV41nFw8OOrARWIStjaToIVFfQeadt_7h=w1200){ width=360 align=left }

Thông thường để mở cơ sở dữ liệu SQLite, ta có thể sử dụng các chương trình gọn nhẹ như [DB Browser for SQLite](https://sqlitebrowser.org/){:target="_blank"}, [SQLiteStudio](https://sqlitestudio.pl/){:target="_blank"} hoặc [DBeaver Community](https://dbeaver.io/){:target="_blank"}.

Bài này đề xuất một chiêu khác, kiểu búa tạ đập ruồi, đó là mở SQLite bằng công cụ SQL Server Management Studio (SSMS).

</div>

<!-- more -->

<br>

## Cài đặt

### Bước 1

Tải và cài đặt **Microsoft SQL Server Management Studio v18.10** theo link [https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15){:target="_blank"}.

### Bước 2

Tải đồ chơi **SQL Server Compact/SQLite Toolbox for SSMS** tại [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ErikEJ.SQLServerCompactSQLiteToolboxforSSMS#overview){:target="_blank"}.

Tập tin tải xuống có đuôi là **.visx** (Visual Studio Extension).

### Bước 3

Tại thư mục **%PROGRAMFILES(X86)%\Microsoft SQL Server Management Studio 18\Common7\IDE\Extensions**, tạo thư mục mới tên **SqlCeToolbox**.

### Bước 4

Dùng WinRar, hoặc trình giải nén khác tùy ý, mở tập tin **.vsix** đã tải ở bước 2.

Sau đó, giải nén vào thư mục ở bước 3.

Done!!

## Sử dụng

### Mở SSMS

SSMS sau khi "độ" thêm đồ chơi thì có một bảng bên trái như hình sau.

![Image title](https://lh3.googleusercontent.com/jiwZJCYKTvaVDSt1W6bUHff5r_W0x2vmHNa9QP21f7IwIPHR3PsRt1f7HedzL8N3ErJ4xszzJexADJqp68pshP2moj-8YMJDLg6Etrvw3zbb_52WfQ_ZKkvaqYTiqWnmus6Gk9Kzjzg=w1200){ width=720 loading=lazy }

Nếu chưa thấy, ta có thể tìm trong menu **View** hoặc **Tools**.

![Image title](https://lh3.googleusercontent.com/qWLisOr-TLHo89Dp2A9ydTA7x5w9ALO8BnHnN9lNYjQaMYq2h0ENrmO4s4anBoRsGXoWDFkyajRCGW724cXYQ3HLDb9AyJYatKjVLLnYfa8A3XUiHQAqLK_SjvUCb8CPahnc198hXkY=w1200){ width=720 loading=lazy }

![Image title](https://lh3.googleusercontent.com/b0KWHKa0Axm9aZdIeM2yRVAwXuz3eL4W-ZcKX2U1f9NxaRgIJPQhtmy7NkjnyaKfRSNWo7i7Le-v5elvzi_zH7HE3GwDdgTB9iZ6YkXXQBG5Ib1MDT_FRBHQyZT5ybRORlcI6yXCQqo=w1200){ width=720 loading=lazy }

### Mở tập tin SQLite

Mở tập tin SQLite bằng cách click phải vào **Data Connections** hoặc nhấn hàng nút ngay bên trên.

![Image title](https://lh3.googleusercontent.com/IEOT0Dl76UEXKLO2IAW9deJn3WvRWlcP6Ve_8_gNaQjN0Dy_FESFWpylRTEyUNb_fn6-KHKfNWEbyt7C76aTT6GqJdeZoTC6WvnsSd8woTAdLhADM0AmFeK3JjgkVydezx-B5oAPouE=w1200){ width=720 loading=lazy }

Bấm nút **Browse** để chọn tập tin. Nhớ bấm nút **Close**.

![Image title](https://lh3.googleusercontent.com/_2oWgQeKrXNuFgYcHHITWeL5sUEu-hxQvZ0qps_RWIwKVu2QMAu58xO8jOAXHpnRXkZ3SDfHcHHoTOrlxS7LMoLOzD-SsKjLgzuRQeZpOXPWHtzyLezv3Mp-BAL8UDYXZmpWgbExLAM=w1200){ width=240 loading=lazy }

### Thực hiện truy vấn

Bấm nút **New Query** ngay trên **Data Connections** để gõ truy vấn. 

Ưu điểm của SSMS là chạy được nhiều truy vấn cùng lúc bằng từ khóa `go`.

Kết quả hiển thị hai câu truy vấn như hình sau.

![Image title](https://lh3.googleusercontent.com/nAUfDfMVLlep4aNXh74PNfuaPRoRMdi8f_IduMsGPco5OS1fFJumngcweMcNTq9ownz1j3jVicA1K9LGeeAmoC9nGQ_mcaV9Ikfl6kBkKDBtYWj2JY6T7AQEuknkEZxvAP2rQM1Qj58=w1200){ width=720 loading=lazy }

### Một vài tùy chọn

Để hiển thị dạng lưới cho kết quả, vào **Tools** > **Options** > Trong hộp thoại **Options**, chọn **SQLite/SQLCE Toolbox** > **General**.

Chọn **True**/**False** cho hai mục trong hình sau. Mục đầu để hiển thị dạng lưới. Mục sau có chức năng *sorting* và *grouping*.

Sau khi nhấn **OK**, phải tắt và mở lại thì cửa số truy vấn mới thay đổi.

![Image title](https://lh3.googleusercontent.com/18LK5WqbnrHpqMo8Q-pRAKd6n8sSjRyejjv8I5iegcbJ6E46lNMQCLiLYrVMBr5em70htJA79z9_HlJl14MbtjL6r0HcorhbwgU-hYiBLPSE54Lx4ehfLn7NhSpD5NbgDxBiGA73Mmg=w1200){ width=720 loading=lazy }