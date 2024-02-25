---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2024-02-24
---

# Olympic lớp 11 HCM 04.2015: Thả diều

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Viết chương trình xếp hạng cho các con diều.

Bài toán trích từ đề thi Olympic Thành phố tháng 04.2015 dành cho lớp 11.

</div>

<br>

<!-- more -->

<br>

## Đề bài

![Image title](https://lh3.googleusercontent.com/pw/ABLVV85fXdsnnddhV3vwpIVWc0PjKauA1ZQXdO9_ZBB0sG4GdFxOiG_cjlMBIZHXdy1qnfNDM8HpEQNKaWAuhvS4NowYWPYDDCT5dP2TIk4z8TZ0NnhI27V7=w2400){ width=800 loading=lazy }

## Cách giải đề xuất

### Ý tưởng chính

Ứng với một con diều được mới vừa thả, ta chèn độ cao của con diều này vào vị trí thích hợp của **mảng độ cao giảm dần**, và thứ hạng của con diều này sẽ là thứ hạng của con diều cao hơn nó cộng thêm 1.

### Bước 1

Gọi: 

- mảng `heightDesc` là mảng độ cao giảm dần. Trong đó, mỗi phần tử là một cặp số gồm **độ cao** và **thứ hạng**.

- mảng `ranks` là mảng các thứ hạng dùng để in ra tập tin output.

Khởi tạo:

- mảng `heightDesc` bằng cách nạp vào độ cao của con diều thả đầu tiên và thứ hạng 1.

- mảng `ranks` bằng cách nạp vào thứ hạng 1 của con diều đầu tiên. 

=== "C++"

    ``` c++ linenums="34"
        // Mảng độ cao giảm dần. Mỗi phần tử là một cặp số gồm độ cao và thứ hạng
        vector<pair<int, int>> heightsDesc;
        heightsDesc.push_back(make_pair(heights[0], 1));

        // Mảng thứ hạng dành cho output
        vector<int> ranks;    
        ranks.push_back(1);
    ```
=== "Python"

    ``` py linenums="23"
        # Mảng độ cao giảm dần. Mỗi phần tử là một cặp số gồm độ cao và thứ hạng
        heights_desc = []
        heights_desc.append([heights[0], 1])

        # Mảng thứ hạng dành cho output
        ranks = []
        ranks.append(1)
    ```

## Bước 2

Dùng vòng lặp duyệt độ cao của những con diều sẽ được thả tiếp theo, đồng thời thực hiện tương tự thuật toán sắp xếp chèn (insertion sort) với thứ tự giảm dần.

Nói cách khác, ta tìm cách chèn một con diều vừa thả vào vị trí phù hợp sao cho mảng `heightDesc` luôn đảm bảo giảm dần.

### Bước 2.1

Thêm con diều vừa thả vào cuối mảng `heightsDesc`.

=== "C++"

    ``` c++ linenums="44"
            // Xét con diều vừa thả, tạm cho thứ hạng là 0
            // Thêm vào cuối mảng heightsDesc
            int tmpHeight = heights[i];
            int tmpRank = 0;

            heightsDesc.push_back(make_pair(tmpHeight, tmpRank));
    ```
=== "Python"

    ``` py linenums="32"
            # Xét con diều vừa thả, tạm cho thứ hạng là 0
            # Thêm vào cuối mảng heights_desc
            tmp_height = heights[i]
            tmp_rank = 0

            heights_desc.append([tmp_height, tmp_rank])
    ```

### Bước 2.2

Xét những con diều đứng trên, cho những con diều mà có độ cao nhỏ hơn hạ xuống một vị trí.

Cụ thể hơn, đó là tìm vị trí `j` của con diều có độ cao lớn hơn con diều vừa thả. 

=== "C++"

    ``` c++ linenums="51"
            // Tìm vị trí j của con diều có độ cao lớn hơn con diều vừa thả
            int j = heightsDesc.size() - 2;

            while (j >= 0 && tmpHeight > heightsDesc[j].first)
            {
                heightsDesc[j + 1] = heightsDesc[j];
                j = j - 1;
            }
    ```
=== "Python"

    ``` py linenums="39"
            # Tìm vị trí j của con diều có độ cao lớn hơn con diều vừa thả
            j = len(heights_desc) - 2

            while j >= 0 and tmp_height > heights_desc[j][0]:
                heights_desc[j + 1] = heights_desc[j]
                j = j - 1
    ```

### Bước 2.3

Chèn con diều vừa thả vào vị trí `j + 1`, tức đứng trên nó chỉ gồm những con diều có độ cao lớn hơn. 

=== "C++"

    ``` c++ linenums="60"
            // Lấy thứ hạng của con diều cao hơn cộng thêm 1
            tmpRank = heightsDesc[j].second + 1;

            // Chèn con diều vừa thả vào vị trí j + 1
            heightsDesc[j + 1] = make_pair(tmpHeight, tmpRank);

            // Ghi nhận thứ hạng của con diều này để output
            ranks.push_back(tmpRank);
    ```
=== "Python"

    ``` py linenums="46"
            # Lấy thứ hạng của con diều cao hơn cộng thêm 1
            tmp_rank = heights_desc[j][1] + 1

            # Chèn con diều vừa thả vào vị trí j + 1
            heights_desc[j + 1] = [tmp_height, tmp_rank]

            # Ghi nhận thứ hạng của con diều này để output
            ranks.append(tmp_rank)
    ```

## Toàn bộ chương trình

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/OlympicT4/tree/main/2015-g11/kite){:target="_blank"}.