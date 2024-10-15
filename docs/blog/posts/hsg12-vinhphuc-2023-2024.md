---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2024-10-12
---

# HSG12 Vĩnh Phúc 2023-2024

<div class="result" markdown>
![Picture by AI](./thumbnails/students-coding.jpg){ align=left width=360 }
---

SỞ GIÁO DỤC VÀ ĐÀO TẠO VĨNH PHÚC  
KỲ THI CHỌN HSG LỚP 12 CHƯƠNG TRÌNH THPT NĂM HỌC 2023-2024  
Môn: Tin học  
Thời gian làm bài: 150 phút (không kể thời gian phát đề)  

</div>

<br>

<!-- more -->

<br>

## Bài 1

### Truy vấn đoạn

Cho dãy gồm N số nguyên dương đôi một phân biệt a₁, a₂, ..., aₙ. Tèo cần trả lời Q truy vấn, truy vấn thứ i cho ba số nguyên dương lᵢ, rᵢ, dᵢ với yêu cầu xác định xem có bao nhiêu số từ vị trí lᵢ đến rᵢ trong dãy là ước số hoặc bội số của dᵢ. Bạn hãy lập trình giúp Tèo trả lời các truy vấn nhé!

Dữ liệu:

- Dòng 1: Gồm hai số nguyên N, Q (1 ≤ N, Q ≤ 10⁵);
- Dòng 2: Gồm N số nguyên dương đôi một phân biệt a₁, a₂, ..., aₙ (1 ≤ aᵢ ≤ 2⋅10⁵, 1 ≤ i ≤ N);
- Tiếp theo là Q dòng, mỗi dòng mô tả một truy vấn gồm ba số nguyên lᵢ, rᵢ, dᵢ (1 ≤ lᵢ ≤ rᵢ ≤ N; 1 ≤ dᵢ ≤ 2⋅10⁵, 1 ≤ i ≤ Q).

Kết quả:

- Ghi trên một dòng duy nhất gồm Q số nguyên, số thứ i (1 ≤ i ≤ Q) là câu trả lời cho truy vấn thứ i.

Ví dụ:

| squery.inp | squery.out | Giải thích |
| --- | --- | --- |
| 8 5 <br> 12 10 3 18 6 72 28 42 <br> 1 8 6 <br> 2 7 5 <br> 1 5 3 <br> 3 7 3 <br> 4 4 1 | 6 1 3 1 2 | Trong truy vấn 1: Các số trong đoạn từ vị trí 1 đến 8 là ước hoặc bội của số 6 gồm: 12, 3, 18, 6, 72, 42. |

Ràng buộc:

- 80% số điểm có Q = 1;
- 10% số điểm có N, Q ≤ 1000;
- 10% số điểm không có ràng buộc bổ sung.

### Bài giải tham khảo

Để đếm số lượng ước hoặc bội của `d`, ta duyệt mảng `A` từ vị trí `l` đến `r` và xét từng phần tử trong phạm vi này.

=== "C++"

    ```c++ linenums="14"
    int count_dm(int l, int r, int d)
    {
        int cnt = 0;

        // Duyệt mảng A từ vị trí l đến vị trí r
        for (int i = l; i < r +  1; ++i)
        {
            // Xét A[i] là ước hoặc bội của d
            if (A[i] % d == 0 || d % A[i] == 0)
            {
                cnt += 1;
            }
        }

        return cnt;
    }
    ```

=== "Python"

    ```py linenums="12"
    def count_dm(l, r, d):
        cnt = 0
        
        # Duyệt mảng A từ vị trí l đến vị trí r
        for i in range(l, r + 1):
            # Xét A[i] là ước hoặc bội của d
            if A[i] % d == 0 or d % A[i] == 0:
                cnt += 1
        return cnt
    ```

## Bài 2

### Triển lãm tranh

Tèo có N bức tranh được đánh số từ 1 đến N. Bức tranh thứ i (1 ≤ i ≤ N) có kích thước Sᵢ và giá trị Vᵢ.  
Ngoài ra, Tèo có M khung tranh được đánh số từ 1 đến M. Khung tranh thứ j (1 ≤ j ≤ M) có kích thước Cⱼ chỉ chứa được một bức tranh có kích thước không vượt quá kích thước của khung tranh.

Tèo cần chọn ra một số bức tranh để trưng bày sao cho thỏa mãn các điều kiện sau:
- Tranh phải được đặt vào trong khung tranh;
- Kích thước của khung tranh bên phải luôn lớn hơn hoặc bằng kích thước bức tranh bên trái;
- Giá trị của bức tranh bên phải luôn lớn hơn hoặc bằng giá trị của bức tranh bên trái;
- Một khung tranh chỉ chứa được một bức tranh;
- Không bắt buộc chọn tất cả các bức tranh.

Hãy lập trình tính xem Tèo có thể trưng bày nhiều nhất bao nhiêu bức tranh.

#### Dữ liệu:
- Dòng 1: Gồm hai số nguyên N, M (1 ≤ N, M ≤ 10⁵) tương ứng với số bức tranh và số khung tranh;
- Tiếp theo là N dòng, mỗi dòng gồm hai số nguyên dương Sᵢ, Vᵢ (1 ≤ Sᵢ, Vᵢ ≤ 10⁹) là kích thước và giá trị của bức tranh thứ i;
- Cuối cùng là M dòng, mỗi dòng gồm một số nguyên Cⱼ (1 ≤ Cⱼ ≤ 10⁹) là kích thước của khung tranh thứ j.

#### Kết quả:
- In ra một số nguyên là số lượng bức tranh nhiều nhất mà Tèo có thể trưng bày.

#### Ví dụ:

```
picture.inp
3 4
10 20
5 15
1 5
5 6 3 7

picture.out
2
```

**Giải thích:**  
Tèo có thể trưng bày nhiều nhất 2 bức tranh, trong đó có một cách trưng bày theo thứ tự như sau:  
[Tranh 2 đặt trong Khung 2] và [Tranh 1 đặt trong Khung 3]

#### Ràng buộc:
- Subtask 1: 50% số điểm có N, M ≤ 10;
- Subtask 2: 30% số điểm có N, M ≤ 1000;
- Subtask 3: 20% số điểm không có ràng buộc bổ sung.

---

## Bài 3

### Thám hiểm

Khu rừng nguyên sinh X nằm trên một trục đường thẳng dài mà ta có thể coi như trục tọa độ. Chỉ có thể di chuyển vào cảnh rừng bằng cách sử dụng trực thăng để bay tới một trong m điểm tập kết đã được xây dựng sẵn trong khu rừng. Điểm tập kết thứ i nằm ở tọa độ aᵢ, chuyến bay tới đó tốn bᵢ đơn vị nhiên liệu. Mỗi đội thám hiểm sau khi hạ cánh ở một điểm tập kết sẽ tiếp tục sử dụng phương tiện đường bộ để di chuyển đến điểm thám hiểm. Chỉ chi phí di chuyển bằng phương tiện đường bộ là c đơn vị nhiên liệu cho mỗi đơn vị khoảng cách.

Tèo có n đội thám hiểm, đội thứ j (1 ≤ j ≤ n) muốn đến thám hiểm ở vị trí tọa độ dⱼ, họ có thể chọn bay tới một điểm tập kết bất kỳ, sau đó di chuyển đến vị trí họ lựa chọn.

Mỗi đội thám hiểm, hãy tính xem họ tốn ít nhất bao nhiêu đơn vị nhiên liệu để tới được điểm thám hiểm của mình.

#### Dữ liệu:
- Dòng 1: chứa ba số nguyên n, m, c (1 ≤ n, m ≤ 10⁵; 1 ≤ c ≤ 10⁹);
- Tiếp theo là m dòng, mỗi dòng mô tả một điểm tập kết gồm hai số nguyên aᵢ, bᵢ (0 ≤ aᵢ, bᵢ ≤ 10⁹), không có hai điểm tập kết nào cùng tọa độ;
- Cuối cùng là n dòng, mỗi dòng gồm một số nguyên dⱼ (0 ≤ dⱼ ≤ 10⁹) mô tả tọa độ cần đến của các đội thám hiểm.

#### Kết quả:
- Ghi trên m dòng, dòng thứ j (1 ≤ j ≤ m) ghi tổng chi phí nhỏ nhất để đội thám hiểm thứ i đến được tọa độ dⱼ.

#### Ví dụ:

```
expfuel.inp
3 2 1
200 100
300 100
100 250
150

expfuel.out
250
260
```

**Giải thích:**  
- Đội 1: bay đến điểm tập kết tọa độ 300, tiêu tốn 100 đơn vị nhiên liệu, sau đó di chuyển tới 150, tốn thêm 150 đơn vị nhiên liệu.  
- Đội 2: bay đến điểm tập kết tọa độ 300, tiêu tốn 100 đơn vị nhiên liệu, sau đó di chuyển tới 110, tốn thêm 10 đơn vị nhiên liệu.

#### Ràng buộc

:
- Subtask 1: 40% số điểm có n, m ≤ 20;
- Subtask 2: 20% số điểm có n, m ≤ 1000;
- Subtask 3: 40% số điểm không có ràng buộc bổ sung.

---

### Bài giải tham khảo

=== "C++"

    ```c++ linenums="43"