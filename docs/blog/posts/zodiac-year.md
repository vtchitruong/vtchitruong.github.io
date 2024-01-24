---
categories:
    - Algorithmic frolic
    - Set up & Code down
authors: [mrschool]
date: 2021-11-27
---

# Gọi tên con giáp của năm dương lịch

<div class="result" markdown>
![Image title](./thumbnails/algorithm.jpg){ align=left width=360 }
Chương trình này dùng để cho biết tên con giáp của năm dương lịch. Một cách khác diễn đạt đề bài này là chuyển đổi năm từ dạng số của dương lịch sang dạng can chi của âm lịch.

Thật thú vị khi bài toán cơ bản của môn Tin học đã được đưa vào đề thi tuyển sinh lớp 10 TP.HCM năm học 2020 - 2021.
</div>

*Cập nhật: 22.01.2024*

<!-- more -->

<br>

## Ý tưởng

Tên của một con giáp theo theo âm lịch (có nơi gọi là lịch hoàng đạo 12 con giáp) gồm hai phần là **thiên can** và **địa chi**. Có tất cả 10 can và 12 chi, đồng nghĩa một can sẽ lặp lại theo chu kì 10 năm, còn một chi sẽ lặp lại theo chu kì 12 năm.

Nói thêm: như vậy, chu kỳ của tên một con giáp là 60 năm, do 60 là bội số chung nhỏ nhất của 10 và 12.

## Khởi tạo

Trước hết, ta khởi tạo một mảng gồm 10 phần tử can và một mảng gồm 12 phần tử chi.

Để liệt kê đúng thứ tự, ta lấy một năm bất kỳ và dựa vào ý tưởng trên để tính. Ví dụ 2021 chia 10 dư 1, và chia 12 dư 5. Mà 2021 là *Tân Sửu*. Do đó `can[1]` là `'Tân'` và `chi[5]` là `'Sửu'`.

=== "C++"
    ``` c++ linenums="1"

        vector<string> can = {"Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"};
        vector<string> chi = {"Thân", "Dậu", "Tuất", "Hợi", "Tí", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"};
    ```
=== "Python"
    ``` py linenums="1"

        can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ']
        chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi']
    ```

## Lấy giá trị can và chi

Vẫn theo ý tưởng trên, để lấy giá trị của một phần tử trong mảng `can`, ta lấy số dư của phép chia: năm dương lịch chia 10. Tương tự với `chi`, lấy số dư của phép chia: năm dương lịch chia 12.

=== "C++"
    ``` c++ linenums="1"

        string vn = can[y % 10] + ' ' + chi[y % 12];
    ```
=== "Python"
    ``` py linenums="1"

        vn = f'{can[y % 10]} {chi[y % 12]}'
    ```

!!! note "Lưu ý"

    Mặc dù được minh họa bằng C++ và Python theo hướng sử dụng mảng, bài tập này có thể dùng để thực hành cấu trúc `switch` đối với C++. (Python không có switch case).

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/String/tree/main/ZodiacCalendar){:target="_blank"}.