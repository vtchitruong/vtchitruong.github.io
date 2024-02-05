---
categories:
    - Chase the database
    - Set up & Code down
authors: [mrschool]
date: 2021-10-17
---

# Hướng dẫn thực hành truy vấn cơ sở dữ liệu trực tuyến

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV85P8CrHQf_Yu2YtFvzBlOPOGbhd0nkJ0mmIpySorqSHXy1tEHUTe6CJxrTO6G6uxMk6P_MRDcHZaGs6jlTtlOWvPkQpDw9fhTerCS2cbU2SkbnisfzT=w360){ align=left }
Thế giới bị đại dịch tấn công, thầy trò phải ở nhà. Thêm nữa, máy tính của trò không có Microsoft Access hay DBMS khác.
</div>

Song việc học không bao giờ dừng lại, dù bất kỳ hoàn cảnh nào. Thực hành môn Tin học cũng vậy.

Thế nên bài viết này ra đời, đề xuất một giải pháp thay thế khi dạy học thực hành truy vấn dữ liệu, xin dành tặng cho các thầy cô đồng nghiệp và các em học sinh phổ thông.

<!-- more -->

<br>

## Giải pháp đề xuất

Hệ quản trị cơ sở dữ liệu thay thế Microsoft Access: **SQLite**.

Môi trường: [SQL Online IDE](https://sqliteonline.com/){:target="_blank"}.

## Cách thực hiện

### Tải cơ sở dữ liệu

Cơ sở dữ liệu minh họa trong bài là Coffee shop, tải [tại đây](https://1drv.ms/u/s!ApQ3j6n6-2wNmL9RUuC6EcJSY-2nJQ?e=ohB03r){:target="_blank"}.

Đây là cơ sở dữ liệu theo dạng SQLite, phần mở rộng của tập tin là **.sqlite** hoặc **.sqlite3**

Nếu link hết hạn, bạn có thể liên lạc theo email vtchitruong@gmail.com hoặc tự tìm trên mạng một cơ sở dữ liệu SQLite khác.

Lược đồ cơ sở dữ liệu **Coffee shop** như sau:

- customers(<ins>customer_id</ins>, customer_name, phone, district, province, customer_type, major, achievements)

- menu(<ins>item_id</ins>, item_name, item_type, price, description, real_name)

- invoice(<ins>invoice_id</ins>, invoice_date, customer_id, item_id, amount, actual_price, total)

### Mở cơ sở dữ liệu

Trong [SQL Online IDE](https://sqliteonline.com/){:target="_blank"}:

1. Click nút **File**.
2. Chọn mục **Open DB**.
3. Chọn tập tin **coffee_shop.sqlite3** trên máy của mình.

![Image title](https://lh3.googleusercontent.com/kyYzhk6_cwoqhK6hgGZQVT7-sZ387jpb0T1K-KF3zJkbPDHwW5OHVALKxnfVKxh14bXn6mwBj506Ei8FYTbz0xdcWie7JNbTGrlK9lPSG5_B9fKTIcXcUQKpBkONyRuqnI6SEb7etsY=w800){ loading=lazy }

Các bảng trong cơ sở dữ liệu sẽ hiển thị bên cột trái.

Bấm nút mũi tên ở mỗi bảng để xem các thuộc tính (cột) của mỗi bảng.

!!! note "Lưu ý"

    Hình ảnh chỉ mang tính gợi ý. Nguyên nhân là chủ thớt có thể "lỡ tay" cập nhật cơ sở dữ liệu trong tương lai, bao gồm cả việc thay đổi tên bảng và tên cột.

![Image title](https://lh3.googleusercontent.com/V0m99nbw--VO953CzQMju-GYoQ3SfPYSVck65c4mBQpptAz_W2Jv3RW-4OuRaAV2tU0SeDMX4US2Kek1uHeS1C9CRf8MnA3MoDegL43TZQgdDuAWZU7iExtzpL22FG9hGm-pmxzUpZs=w720){ loading=lazy }

#### Nhập và thực thi truy vấn

Trong khi nhập câu truy vấn, chương trình sẽ hiển thị gợi ý các từ khóa, tên bảng và tên thuộc tính. Ta gõ phím **Tab** để chọn một trong những gợi ý này.

![Image title](https://lh3.googleusercontent.com/SMPolo13XDTYpiWXHk2f5BV9nAWoJTJJ5VpVIVR9iaHNvzvYdiW3Es9s92fCAo7AWCOuXwc6UW2S4K067rgOACw8cdumUJtFWcwNHuSduZIAXSuTIsxRY_n8V-v15nuHrqlK3oessE4=w720){ loading=lazy }

!!! note "Lưu ý"

    SQLite Online có phân biệt chữ in hoa và thường.

Bấm nút **Run** để thực thi truy vấn.

![Image title](https://lh3.googleusercontent.com/KcQ3a08DfJifE_u3xbZIqTr74kuWp9JuygQpCZZ0Orjs_Q1Xi92f4m3xZu2dbw93x1TSFwRGMMnE3AV3sWXHEmeAF44eCk85CH56EP9unnftTra8jmJytjy2_US_tu4dDCV1epUpVgk=w720){ loading=lazy }

#### Xem kết quả truy vấn trên điện thoại

Màn hình trên điện thoại vốn nhỏ nên ta có thể không thấy được toàn bộ mẫu tin.

Để tăng độ rộng cột, ta nhấn giữ tiêu đề cột, rồi chọn mục **auto-Width**.

![Image title](https://lh3.googleusercontent.com/3IjeVWKEFbUJ3VDpBHlp9Yj3BvMi9g7Cna0smtVuD1xTj_2ZKboI4Wj3WqIlktT9Tw7QsoXsrumAzuRVBhQjCk5nDuNL4pbTdUDJAtIzmM2y8LqNYHkca7pxOA2rTo6dNGY8ffTtjwA=w360){ loading=lazy }

Để xem đầy đủ mẫu tin, ta nhấn giữ mẫu tin, rồi chọn mục **Open Row**.

![Image title](https://lh3.googleusercontent.com/tSmlKpUNaw5hICG7BuySn6CmXG61BA-cWS_VBjmdylMox2YM61tRvlfCKV6Gfwc26ESQyZtRv-esCOyaAk5-Icl-dTteRQlT1nyuWjThqrDpswTVW0IkzEKeZyHiFG9GbrG7nxTy70k=w360){ loading=lazy }

![Image title](https://lh3.googleusercontent.com/HT2Ljwa0EeMLSBntWQ0ZKqGNG2eD1uL2GlClEIbJ7JdqpGvfiQToL4MqLjIz_mZCn1ctFqggM3Q1rcasTjj5VpjvDP3PgkAayvg1EeypNUHZ5qian2CYq26NRrScnctiqDbtcu3h6IU=w360){ loading=lazy }

#### Lưu truy vấn

Bấm nút hình cái đĩa bên phải để lưu truy vấn.

- Mỗi lần bấm nút lưu, chỉ lưu được truy vấn ở tab hiện hành.
- Truy vấn sẽ được tải về với tên tập tin như đang hiển thị trên tab hiện hành.
- Tập tin tải về này có thể mở lên xem bằng Notepad.

![Image title](https://lh3.googleusercontent.com/pJOTeS0DFs4Tx3l9dNq084bZdym5ljKtEYA3dC4b90-DjihFw1pK9KNlP6enKXN132J2ALIS55gDTa0zQOmAI53Wcp0ghOo8UDtsS9BJFfyUZvgMikLN4c9SQJcKvNISgmNS0ato06s=w600){ loading=lazy }

Nếu cần đổi tên trước khi lưu, ta click phải lên tab, chọn **Rename**.

![Image title](https://lh3.googleusercontent.com/Yu8nPpYkf-CklkYWWaNuVHmFJOHTvipcQ7zBmKVKx5VmR6Iuj9h7QeaLKEp_Yvr5hp_YBkNfGs3fDemP5DgJyNK7ybxUTm5ig3ju8z6GBFUPTNDLXK7ZYe_UesSm8RdToh_Y__H_iAY=w600){ loading=lazy }

#### Thêm truy vấn mới

Bấm nút hình dấu cộng **+**. Một tab mới sẽ mở ra để nhập truy vấn mới.

![Image title](https://lh3.googleusercontent.com/hkxO1IOuMNfY1gGRhWVHNRCXhZz9L_W-MkCz_TM9ShmlBD7tZj8MxUJupTYTR6Alq6QrdFZBw7j274DdPVSEnUaQ6ML3h6fqdCUhgJAW9RaN7_0-h6IijA-J0ci_VP6LjAylPpKZIcg=w600){ loading=lazy }

### Một số truy vấn ví dụ

Lập danh sách các khách hàng sống ở Thành phố Hồ Chí Minh.

``` sql linenums="1"
SELECT customer_name, province, major
FROM customers
WHERE province = "Ho Chi Minh City"
```

Lập danh sách các khách hàng sống ở Thành phố và hoạt động trong lĩnh vực giải trí.

``` sql linenums="1"
SELECT customer_name, province, major
FROM customers
WHERE province = "Ho Chi Minh City" AND major = "Entertainment"
```

Lập danh sách các vị khách có tên bắt đầu bằng chữ T.

``` sql linenums="1"
SELECT customer_name, province, major
FROM customers
WHERE customer_name LIKE "T%"
```

Cho biết những món nào có giá dưới 40 ngàn.

``` sql linenums="1"
SELECT *
FROM menu
WHERE price < 40000
```

Lập danh sách các thức uống.

``` sql linenums="1"
SELECT *
FROM menu
WHERE item_type <> "Food"
```