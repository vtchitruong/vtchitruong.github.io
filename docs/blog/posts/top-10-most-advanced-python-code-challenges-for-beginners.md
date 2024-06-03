---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2023-01-19
---

# 10 thử thách Python khủng khiếp dành cho người mới bắt đầu

<div class="result" markdown>
![Image title](./thumbnails/python-challenges-for-beginners.svg){ align=left width=360 }

Nếu bạn, một binh nhì trong thế giới Python, cảm thấy đã đủ kinh nghiệm với những bài tập vỡ lòng như đếm chẵn lẻ thì đã đến lúc bạn cần nâng trình lên một tầm cao mới, hoặc ít ra là tự kiểm tra lại kiến thức hiện có.

"Khủng khiếp" chỉ là một từ để câu view, những thử thách này thực ra không quá khó. Nếu vượt qua, bạn có thể mơ đến những điều cao hơn. [^1]
</div>

[^1]: Các đề bài được tham khảo từ [Analytics Insight](https://www.analyticsinsight.net/latest-news/top-10-advanced-python-code-challenges-for-beginners-in-2023){:target="_blank"}.

<br>

<!-- more -->

Vài quy ước cần lưu ý là, hạn chế sử dụng những hàm có sẵn mà Python ban cho. Bạn có thể tra cứu cú pháp trên mạng, song không được tìm bài giải. Và tuyệt đối không nhờ AI trợ giúp dưới mọi hình thức. Nếu gặp lỗi thì hãy kiên nhẫn và chịu khó sửa từ từ.

## Tính tiền sau giảm giá

Việt hàm nhận vào hai tham số gồm: giá tiền của món hàng và phần trăm giảm giá, trả về số tiền cần thanh toán sau khi giảm.

| Input | Output |
| --- | --- |
| Giá tiền: 1590000 <br> Phần trăm giảm giá: 25 | Số tiền cần thanh toán: 1192500 |

## Chuyển đổi đơn vị từ radian sang độ

Viết hàm nhận vào một tham số là số đo góc ở đơn vị radian và trả về số đo góc ở đơn vị độ. Biết rằng $radians = degrees \times \frac{\pi}{180}$.

Cho phép sử dụng giá trị `pi` trong module `math` của Python. 

## Thực hiện phép tính đơn giản

Viết hàm nhận vào một tham số là biểu thức tính toán cơ bản và trả về kết quả của biểu thức đó.

| Input | Output |
| --- | --- |
|19 * 11 | 19 * 11 = 209 |

## Chuyển đổi số từ hệ thập phân sang hệ nhị phân

Viết hàm nhận vào một tham số là số thập phân và trả về số nhị phân tương ứng.

Biết rằng số thập phân sẽ luôn nhỏ hơn 1024.

## So sánh số ký tự x và o

Viết hàm nhận vào một tham số là chuỗi và trả về kết quả 'bằng nhau' hoặc 'không bằng nhau' đối với số ký tự x và o trong chuỗi.

| Input | Output |
| --- | --- |
| 'ooxx' | Bằng nhau |
| 'xooxx' | Không bằng nhau |
| 'ooxXm' | Bằng nhau |
| 'zpzpzpp' | Bằng nhau |
| 'zzoo' | Không bằng nhau |

## Nhân đôi ký tự

Viết hàm nhận vào một tham số là chuỗi và trả về chuỗi mới mà trong đó mỗi ký tự đều được nhân đôi.

| Input | Output |
| --- | --- |
| password | ppaasssswwoorrdd |

## Che các chữ số trong thẻ

Viết hàm nhận vào một tham số là số của thẻ ghi nợ hoặc thẻ tín dụng và trả về kết quả là dãy số bị che bằng ký tự sao *, ngoại trừ 4 chữ số cuối.

| Input | Output |
| --- | --- |
| 1234567890129999 | ************9999 |

## Đếm số lượng nguyên âm trong câu

Viết hàm nhận vào một tham số là chuỗi và trả về số lượng nguyên âm có trong chuỗi này. Biết rằng nguyên âm gồm: a, e, i, o và u.

## Sắp xếp danh sách

Viết hàm nhận vào hai tham số: danh sách các số nguyên và chuỗi chỉ định thứ tự gồm asc và desc, trả về mảng có thứ tự tương ứng với tham số đã chỉ định. Trong đó, asc là tăng dần, desc là giảm dần.

## Lọc các số nguyên

Viết hàm nhận vào một tham số là danh sách gồm các phần tử là số vả chuỗi, và trả về danh sách chỉ gồm các số nguyên.

| Input | Output |
| --- | --- |
| [0, '1', 2, 'three', 4, '5', 6.7, 8] | [0, 2, 4, 8] |

## Google Colab

Bài giải đề xuất được đặt tại <a href="https://colab.research.google.com/drive/1dI7VV1hk2dhUfmyM92Yd4nhrkPMy5EIy?usp=sharing" target="_blank">Google Colab</a>.