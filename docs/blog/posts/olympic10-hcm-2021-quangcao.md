---
categories:
    - Solve to surpass
    - Set up & Code down
authors: [mrschool]
date: 2024-01-30
---

# Olympic lớp 10 HCM 04.2021: Đoạn quảng cáo

<div class="result" markdown>
![Image title](./thumbnails/students-coding.jpg){ align=left width=360 }

Viết chương trình phân bố thời gian các đoạn quảng cáo sao cho đạt được các yêu cầu trong đề.

Đề bài trích từ đề thi Olympic Thành phố tháng 04.2021 dành cho lớp 10.

</div>

<br>

<!-- more -->

<br>

## Đề bài

![Image title](https://lh3.googleusercontent.com/pw/ABLVV86ieS1k2CuG2GTzP9g8XHKW5659sZ7IkDfoPdPSJZMpEeSGD1NpBjUfKDCc0HlA5tmfjsmv634DYBZuF9roxYUYgje70ENsCqSDOFZWIVjUvWKagW3e=w800){ loading=lazy }

## Cách giải đề xuất

### Ý tưởng chính

Ta sẽ sắp xếp các thời điểm đi ra khỏi siêu thị của các khách hàng theo thứ tự thời gian thực.

Vì mỗi khách hàng phải nghe quảng cáo ít nhất hai lần nên ta sẽ đặt lịch phát quảng cáo vào thời điểm họ đi ra khỏi siêu thị. Như vậy, mỗi khách có thể nghe được ít nhất hai lần: một lần là thời điểm họ đi vào, trong lúc quảng cáo đang phát, và một lần khác là thời điểm họ đi ra khỏi siêu thị.

### Bước 0

Đặt `customers` là mảng lưu thời điểm đi vào và đi ra của các khách hàng. Cụ thể, mỗi phần tử của `customers` là một cặp số tương ứng với hai thời điểm đó.

Đặt `adSchedule` là mảng kết quả, lưu các thời điểm phát quảng cáo.

=== "C++"

    ``` c++ linenums="13"
    vector<pair<int, int>> customers;
    vector<int> adSchedule;
    ```
=== "Python"

    ``` py linenums="8"
    customers = []
    ad_schedule = []
    ```

### Bước 1

Tìm thời điểm đi vào của khách hàng đầu tiên. Đây cũng chính là thời điểm đầu tiên phát quảng cáo.

=== "C++"

    ``` c++ linenums="44"
        // Find the minimum value of check-in points
        vector<pair<int, int>>::iterator firstCheckInCustomer = min_element(customers.begin(), customers.end(),
                                        [](const pair<int, int>& a, const pair<int, int>& b) {return a.first < b.first; });

        // The first customer, i.e the first check-in point
        int firstCheckIn = (*firstCheckInCustomer).first;

        // Store this point
        adSchedule.push_back(firstCheckIn);
    ```
=== "Python"

    ``` py linenums="24"
        # The first customer, i.e. the first check-in point
        first_check_in = min(customers, key=lambda t: t[0])[0]

        # Store this point
        ad_schedule.append(first_check_in)
    ```

### Bước 2

Sắp xếp mảng `customers` theo thứ tự tăng dần của thời điểm đi ra.

=== "C++"

    ``` c++ linenums="54"
        // Sort by check-in of customers in ascending order
        sort(customers.begin(), customers.end(), Compare);
    ```
=== "Python"

    ``` py linenums="30"
        # Sort by check-in of customers in ascending order
        customers.sort(key=lambda t: t[1])
    ```

Đối với C++, ta cần viết hàm `Compare()` trước để phục vụ cho việc sắp xếp; còn đối với Python, ta đã chèn *lambda function* vào hàm `sort()`. 

``` c++ linenums="36"
bool Compare(const pair<int, int>& a, const pair<int, int>& b)
{
    return a.second < b.second;
}
```

### Bước 3

Đặt `lastBroadcast` là thời điểm cuối cùng phát quảng cáo, đồng thời khởi tạo `lastBroadcast` mang giá trị âm vô cực.

Duyệt mảng `customers`, ứng với mỗi khách hàng, nếu thời điểm đi ra của người này diễn ra sau thời điểm cuối cùng phát quảng cáo, thì ta ghi nhận thời điểm phát quảng cáo mới, chính là thời điểm người này đi ra, nhằm đảm bảo người này nghe quảng cáo thêm một lần nữa.


=== "C++"

    ``` c++ linenums="57"
        // The last ad broadcast
        // Init by getting the minimum value of int data type
        int lastBroadcast = numeric_limits<int>::min();

        for (pair<int, int> customer : customers)
        {
            // Get the check-out point of each customer
            int checkOut = customer.second;

            // If the check-out point happens after the latest ad broadcast
            // then store this check-out point as the new-latest ad broadcast
            if (checkOut <= lastBroadcast) continue;

            adSchedule.push_back(checkOut);
            lastBroadcast = checkOut;
        }
    ```
=== "Python"

    ``` py linenums="33"
        # The last ad broadcast
        # Init by getting the minimum value of int data type
        last_broadcast = float('-inf')

        for customer in customers:    
            # Get the check-out point of each customer
            check_in, check_out = customer

            # If the check-out point happens after the latest ad broadcast
            # then store this check-out point as the new-latest ad broadcast
            if check_out <= last_broadcast:
                continue

            ad_schedule.append(check_out)
            last_broadcast = check_out
    ```

## Những điểm cần lưu ý

Output mẫu của đề:

``` pycon
5
4 8 12 20 21
```

trong khi output của chương trình đề xuất:

``` pycon
4
1 8 12 21
```

Có hai điểm khác biệt trong output cần lưu ý:

1. Thời điểm phát quảng cáo đầu tiên theo output mẫu là `4`.

    Output này có vẻ mang tính ngẫu nhiên. Để lấy được giá trị ngẫu nhiên này, ta cần:

    - Tìm thời điểm vào của khách hàng đầu tiên.
    - Tìm thời điểm ra đầu tiên, có thể là của chính khách hàng đó hoặc của một khách hàng khác.
    - Chọn ngẫu nhiên một giá trị nằm giữa hai thời điểm vừa tìm để phát quảng cáo.

    Khác với cách làm trên, chương trình đề xuất chỉ tìm thời điểm vào của khách hàng đầu tiên rồi phát quảng cáo ngay. Hướng giải quyết này vẫn hợp lý và có vẻ nhanh hơn. 

2. Output mẫu phát quảng cáo vào thời điểm `20`.

    Thời điểm này có vẻ chưa ổn. Ta hoàn toàn có thể giữ lại trạng thái đang phát của đoạn quảng cáo phát tại thời điểm `12` mà không cần phát quảng cáo mới vào thời điểm `20`, vì:

    - Đề bài yêu cầu quảng cáo phải ít nhất có thể nhằm không làm ảnh hưởng nhân viên siêu thị.
    - Từ thời điểm `12` đến `20` không có khách hàng nào cả.
    - Khách hàng cuối cùng đi vào tại thời điểm `20`, chắc chắn nghe được quảng cáo phát từ thời điểm `12`.

Có lẽ vì vậy mà đề bài có câu lưu ý "*Nếu có nhiều kết quả thì đưa ra một kết quả bất kỳ trong số chúng*".

## Toàn bộ chương trình

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/OlympicT4/tree/main/2021-g10/doanqc){:target="_blank"}.