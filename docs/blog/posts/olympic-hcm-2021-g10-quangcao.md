<!-- ---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2024-01-30
--- -->

# Olympic HCM 04.2021 lớp 10: Đoạn quảng cáo

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Viết chương trình phân bố thời gian các đoạn quảng cáo sao cho đạt được các yêu cầu trong đề.

Đề bài trích từ đề thi Olympic Thành phố tháng 04.2021 dành cho lớp 10.

</div>

<br>
<br>
<br>

<!-- more -->

<br>

## Đề bài

    === "C++"
        ``` c++ linenums="1"
 
        ```
    === "Python"
        ``` py linenums="1"

        ```


            === "C++"
        ``` c++ linenums="1"
 
        ```
    === "Python"
        ``` py linenums="1"

        ```

## Cách giải đề xuất

### Ý tưởng chính

Ta sẽ sắp xếp các thời điểm đi ra khỏi siêu thị của các khách hàng theo thứ tự thời gian thực.

Vì mỗi khách hàng phải nghe quảng cáo ít nhất hai lần nên ta sẽ đặt lịch phát quảng cáo vào thời điểm họ đi ra khỏi siêu thị. Như vậy, mỗi khách có thể nghe được ít nhất hai lần: một lần là thời điểm họ đi vào, trong lúc quảng cáo đang phát, và một lần khác là thời điểm họ đi ra khỏi siêu thị.

### Bước 0

Đặt `customers` là mảng lưu thời điểm đi vào và đi ra của các khách hàng. Cụ thể, mỗi phần tử của `customers` là một cặp số tương ứng với hai thời điểm đó.

=== "C++"

    ``` c++ linenums="1"
    vector<pair<int, int>> customers;
    ```
=== "Python"

    ``` py linenums="1"

    ```

Đặt `adSchedule` là mảng kết quả, lưu các thời điểm phát quảng cáo.

### Bước 1

Tìm thời điểm đi vào của khách hàng đầu tiên. Đây là thời điểm đầu tiên phát quảng cáo.

=== "C++"

    ``` c++ linenums="1"
    // Find the minimum value of check-in points
    vector<pair<int, int>>::iterator firstCheckInCustomer = min_element(customers.begin(), customers.end(),
                                    [](const pair<int, int>& a, const pair<int, int>& b) {return a.first < b.first; });

    // The first customer, i.e the first check-in point
    int firstCheckIn = (*firstCheckInCustomer).first;

    // Store this point
    adSchedule.push_back(firstCheckIn);
    ```
=== "Python"

    ``` py linenums="1"

    ```

### Bước 2

Sắp xếp mảng `customers` theo thứ tự tăng dần của thời điểm đi ra.

=== "C++"
    ``` c++ linenums="1"
    // Sort by check-in of customers in ascending order
    sort(customers.begin(), customers.end(), Compare);
    ```
=== "Python"
    ``` py linenums="1"

    ```

Trước đó, ta cần viết hàm `Compare()` để phục vụ cho việc sắp xếp.

=== "C++"
    ``` c++ linenums="1"
    bool Compare(const pair<int, int>& a, const pair<int, int>& b)
    {
        return a.second < b.second;
    }
    ```
=== "Python"
    ``` py linenums="1"

    ```

### Bước 3

Đặt `lastCheckOut` là thời điểm cuối cùng đi ra khỏi siêu thị của tất cả khách hàng. Ta khởi tạo `lastCheckOut` mang giá trị âm vô cực.

Duyệt mảng `customers`, ứng với mỗi khách hàng, nếu thời điểm đi ra của người này là trước thời điểm đi ra cuối cùng (của mọi khách) 

            === "C++"
        ``` c++ linenums="1"
 
        ```
    === "Python"
        ``` py linenums="1"

        ```