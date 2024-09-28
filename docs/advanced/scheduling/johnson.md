# Johnson

## Khái quát

Thuật toán Johnson là được sử dụng để tối ưu hóa thời gian hoàn thành công việc trong các bài toán lập lịch, đặc biệt là các bài toán với hai máy và một loạt các công việc cần được xử lý theo thứ tự.

Mục tiêu của thuật toán là tìm ra thứ tự thực hiện các công việc nhằm giảm thiểu thời gian hoàn thành tất cả công việc.

## Bài toán

### Yêu cầu

Giả sử có n công việc, mỗi công việc phải được xử lý trên hai máy theo thứ tự cố định, máy 1 trước rồi đến máy 2.

Ta cần tìm thứ tự thực hiện sao cho tổng thời gian hoàn thành là nhỏ nhất.


### Input

```pycon
5
1 3 5
2 2 1
3 4	6
4 1 7
5 6	4
```

### Output

```pycon
4 1 3 5 2 
```

### Giải thích

Input:

- Dòng đầu tiên chứa `n` là số công việc.
- Mỗi dòng tiếp theo gồm ba số: mã ID công việc, thời gian hoàn thành trên máy 1 và thời gian hoàn thành trên máy 2.

Output:

- Dòng đầu tiên là thứ tự thực hiện các công việc.

## Các bước của thuật toán Johnson

1\. Chia các công việc thành hai nhóm:

- Nhóm 1 gồm các công việc có thời gian xử lý trên máy 1 nhỏ hơn hoặc bằng trên máy 2.
- Nhóm 2 gồm các công việc có thời gian xử lý trên máy 1 lớn hơn trên máy 2.

2\. Sắp xếp các nhóm:

- Sắp xếp nhóm 1 theo thứ tự tăng dần của thời gian xử lý trên máy 1.
- Sắp xếp nhóm 2 theo thứ tự giảm dần của thời gian xử lý trên máy 2.

3\. Lập lịch:

Thực hiện các công việc theo thứ tự: nhóm 1 trước, rồi đến nhóm 2.

## Viết chương trình

### Đọc input

Khởi tạo cấu trúc `job` gồm ba thuộc tính: `id`, `time_1` (thời gian thực hiện trên máy 1) và `time_2` (thời gian thực hiện trên máy 2).

Trong C++, ta sử dụng `struct`, còn trong Python, ta sử dụng `tuple`.

=== "C++"

    ```c++ linenums="1"
    struct job
    {
        int id;      // ID công việc
        int time_1;  // Thời gian trên máy 1
        int time_2;  // Thời gian trên máy 2
    };
    ```


Lưu input vào mảng `jobs`.

=== "C++"

    ```c++ linenums="1"
        cin >> n;

        job j;
        for (int i = 0; i < n; ++i)
        {
            cin >> j.id >> j.time_1 >> j.time_2;
            jobs.push_back(j);
        }
    ```
=== "Python"

    ```py linenums="1"
        global n
        n = int(f.readline())

        global jobs
        jobs = []

        for i in range(n):
            j = tuple(map(int, f.readline().split()))
            jobs.append(j)
    ```

### Thực hiện Johnson

1\. Chia các công việc thành hai nhóm:

=== "C++"

    ```c++ linenums="1"
        // Phân nhóm
        // Nhóm 1: các công việc có time_1 <= time_2
        // Nhóm 2: các công việc có time_1 > time_2
        vector<job> group_1, group_2;

        for (int i = 0; i < n; ++i)
        {
            if (jobs[i].time_1 <= jobs[i].time_2)
            {
                group_1.push_back(jobs[i]);
            }
            else
            {
                group_2.push_back(jobs[i]);
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        # Phân nhóm
        # Nhóm 1: các công việc có time_1 <= time_2
        # Nhóm 2: các công việc có time_1 > time_2
        group_1 = []
        group_2 = []
        
        global jobs
        for job in jobs:
            if job[1] <= job[2]:
                group_1.append(job)
            else:
                group_2.append(job)
    ```

2\. Sắp xếp các nhóm.

Trong C++, trước khi gọi hàm `sort()` sắp xếp các nhóm, ta tạo hàm so sánh thời gian hoàn thành để làm tham số cho hàm `sort()`.

=== "C++"

    ```c++ linenums="1"
    // Hàm dùng cho sắp xếp tăng dần nhóm 1
    bool compare_group_1(const job &a, const job &b)
    {
        return a.time_1 < b.time_1;
    }

    // Hàm dùng cho sắp xếp tăng dần nhóm 2
    bool compare_group_2(const job &a, const job &b)
    {
        return a.time_2 > b.time_2;
    }
    ```

Gọi hàm `sort()` để sắp xếp các nhóm.

=== "C++"

    ```c++ linenums="1"
        // Sắp xếp nhóm 1 theo time_1 tăng dần
        sort(group_1.begin(), group_1.end(), compare_group_1);
        
        // Sắp xếp nhóm 2 theo time_2 giảm dần
        sort(group_2.begin(), group_2.end(), compare_group_2);
    ```
=== "Python"

    ```py linenums="1"
        # Sắp xếp nhóm 1 theo time_1 tăng dần
        group_1.sort(key=lambda x: x[1])

        # Sắp xếp nhóm 2 theo time_2 giảm dần
        group_2.sort(key=lambda x: x[2], reverse=True)
    ```

3\. Lập lịch.

Lần lượt đưa công việc trong nhóm 1 và nhóm 2 vào mảng `schedule`.

=== "C++"

    ```c++ linenums="1"
        // Lần lượt đưa nhóm 1 và nhóm 2 vào lịch
        for (int i = 0; i < group_1.size(); ++i)
        {
            schedule.push_back(group_1[i].id);
        }

        for (int i = 0; i < group_2.size(); ++i)
        {
            schedule.push_back(group_2[i].id);
        }
    ```
=== "Python"

    ```py linenums="1"
        # Lần lượt đưa nhóm 1 và nhóm 2 vào lịch
        global schedule
        schedule = []
        schedule = [i for i, _, _ in group_1] + [i for i, _, _ in group_2]
    ```

4\. Tính tổng thời gian hoàn thành.

Để tính tổng thời gian hoàn thành tất cả công việc, ta cần tính:

- Thời điểm bắt đầu và kết thúc của mỗi công việc trên máy 1. 
- Thời điểm bắt đầu và kết thúc của mỗi công việc trên máy 2.

Lưu các thời điểm này trong mảng `start_1`, `finish_1`, `start_2` và `finish_2`. Thứ tự của các phần tử trong bốn mảng này tương ứng với thứ tự của mảng `schedule`.

Ta có một số công thức sau:

- Vì thời điểm kết thúc công việc `i - 1` cũng chính là thời điểm bắt đầu công việc `i` nên thời điểm bắt đầu công việc thứ `i` trên máy 1 là: `start_1[i] = finish_1[i - 1]`.
- Thời điểm kết thúc công việc `i` trên máy 1 là: `finish_1[i] = start_1[i] + time_1`.
- Thời điểm bắt đầu công việc `i` trên máy 2 là: `start_2[i] = max(finish_1[i], finish_2[i - 1])`.
- Thời điểm kết thúc công việc `i` trên máy 2 là: `finish_2[i] = start_2[i] + time_2`.

Thời gian hoàn thành tất cả công việc được tính tới thời điểm hoàn thành công việc cuối cùng trên máy 2: `finish_2[n - 1]`.

Hàm `calculateTime()` sau thực hiện theo ý tưởng trên.

=== "C++"

    ```c++ linenums="1"
    int calculateTime(vector<job>& J, vector<int>& S) // (1)!
    {
        vector<int> start_1(n), finish_1(n), start_2(n), finish_2(n);

        // Thời điểm bắt đầu và kết thúc của công việc đầu tiên
        start_1[0] = 0;
        finish_1[0] = J[S[0] - 1].time_1; // (2)!

        start_2[0] = finish_1[0];
        finish_2[0] = start_2[0] + J[S[0] - 1].time_2;

        // Thời điểm bắt đầu và kết thúc của các công việc còn lại
        for (int i = 1; i < n; i++) {
            start_1[i] = finish_1[i - 1];
            finish_1[i] = start_1[i] + J[S[i] - 1].time_1;

            start_2[i] = max(finish_1[i], finish_2[i - 1]);
            finish_2[i] = start_2[i] + J[S[i] - 1].time_2;
        }

        // Thời gian hoàn thành của công việc cuối cùng trên máy 2
        return finish_2[n - 1];
    }
    ```
    { .annotate }

    1.  Tham số `J` dùng để truyền mảng input các công việc `job`.
    
        Tham số `S` dùng để truyền mảng output các công việc đã sắp xếp `schedule`.

    2.  `S[0]` là ID của công việc đầu tiên trong thứ tự đã sắp xếp tối ưu `schedule`.

        `[S[0] - 1]` là nhằm lấy chỉ số của công việc này trong mảng input `jobs`. Do ID và chỉ số chênh lệch nhau 1 đơn vị.

        `J[S[0] - 1].time_1` là thời gian hoàn thành công việc này trên máy 1.

=== "Python"

    ```py linenums="1"
    def calculate_time(J, S): # (1)!
        global n

        start_1 = [0] * n
        finish_1 = [0] * n
        start_2 = [0] * n
        finish_2 = [0] * n

        # Thời điểm bắt đầu và kết thúc của công việc đầu tiên
        first_job = J[S[0] - 1]
        start_1[0] = 0 
        finish_1[0] = first_job[1] # (2)!

        start_2[0] = finish_1[0]
        finish_2[0] = start_2[0] + first_job[2]


        # Thời điểm bắt đầu và kết thúc của các công việc còn lại
        for i in range(1, n):
            current_job = J[S[i] - 1]

            start_1[i] = finish_1[i - 1]
            finish_1[i] = start_1[i] + current_job[1]

            start_2[i] = max(finish_1[i], finish_2[i - 1])
            finish_2[i] = start_2[i] + current_job[2]

        # Thời gian hoàn thành của công việc cuối cùng trên máy 2
        return finish_2[n - 1]
    ```
    { .annotate }

    1.  Tham số `J` dùng để truyền mảng input các công việc `job`.
    
        Tham số `S` dùng để truyền mảng output các công việc đã sắp xếp `schedule`.

    2.  `S[0]` là ID của công việc đầu tiên trong thứ tự đã sắp xếp tối ưu `schedule`.

        `[S[0] - 1]` là nhằm lấy chỉ số của công việc này trong mảng input `jobs`. Do ID và chỉ số chênh lệch nhau 1 đơn vị.

        `J[S[0] - 1]` là công việc có chỉ số `S[0] - 1` trong mảng input `jobs`. Gán công việc này cho biến `first_job`.
        
        `first_job[1]` là thời gian hoàn thành công việc này trên máy 1.

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/scheduling" target="_blank">GitHub</a>.