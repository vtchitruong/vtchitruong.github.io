---
categories:
    - Moron in Python
    - Set up & Code down
authors: [mrschool]
date: 2023-06-09
---

# Một vài chiêu thức với dictionary của Python

<div class="result" markdown>
![Image title](./thumbnails/python.jpg){ align=left width=360 }

Bài này giới thiệu một vài cách viết mã lệnh đối với kiểu `dictionary` của Python, chủ yếu dựa vào những đặc trưng của ngôn ngữ này.[^1]
</div>

[^1]: Bài viết được tham khảo từ những website Python nổi tiếng.

<br>
<br>
<br>

<!-- more -->

<br>
<br>

## Trộn hai dictionary

Một cách code theo truyền thống là, dùng vòng lặp để lấy ra từng item của mỗi dictionary rồi nạp vào `dict_merged`.

``` py linenums="1"
# Code theo truyền thống
if __name__ == '__main__':
    dict1= {'a' : 1, 'b': 2}
    dict2 = {'c': 3, 'd': 4}

    dict_merged = {}

    for k, v in dict1.items():
        dict_merged.update({k: v})

    for k, v in dict2.items():
        dict_merged.update({k: v})

    print(dict_merged)
```

Output:

``` pycon
{'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

Thay cho cách viết trên và trông có vẻ tiện hơn, Python cung cấp toán tử `**` dùng để *tháo rời* mỗi dictionary rồi ghép vào `dict_merged`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    dict1= {'a' : 1, 'b': 2}
    dict2 = {'c': 3, 'd': 4}

    dict_merged = {**dict1, **dict2}
    print(dict_merged)
```

Output:

``` pycon
{'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

## Sắp xếp các phần tử trong dict

Trước hết, ta tạo dictionary mới `dict_sorted` bằng **dictionary comprehension**.

**Dictionary comprehension** có dạng `{key: value for (key, value) in iterable}`.

Tiếp theo, lồng vào đó hàm `sorted()` gồm hai tham số:

- Tham số thứ nhất là danh sách các cặp `key: value`.
- Tham số thứ hai là điều kiện sắp xếp. Trong đó `lambda x: x[0]` là sắp xếp theo `key`, còn `lambda x: x[1]` là sắp xếp theo `value`.

``` py linenums="1"
# Code theo Python-style
if __name__ == '__main__':
    dict = {'c': 12, 'd': 11, 'a': 14, 'b': 13}

    # Sắp xếp theo key
    dict_sorted_by_key = {k: v for k, v in sorted(dict.items(), key=lambda x: x[0])}
    print(dict_sorted_by_key)

    # Sắp xếp theo value
    dict_sorted_by_value = {k: v for k, v in sorted(dict.items(), key=lambda x: x[1])}
    print(dict_sorted_by_value)
```

Output:

``` pycon
{'a': 14, 'b': 13, 'c': 12, 'd': 11}
{'d': 11, 'c': 12, 'b': 13, 'a': 14}
```

## Google Colab

Các đoạn mã trong bài này được đặt tại <a href="https://colab.research.google.com/drive/15HAAnFykSYH20xsIVhOUDS4OSzDnsNB1?usp=sharing" target="_blank">Google Colab</a> để bạn có thể thử nghiệm theo cách của riêng mình.