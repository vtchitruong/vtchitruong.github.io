# Dãy con tăng dần dài nhất

## Khái quát về bài toán

Sông có khúc, người có lúc. Sự vật, hiện tượng nào cũng có lúc thăng lúc trầm, chứ thăng mãi thì không khéo thăng luôn. Do đó, ta chỉ có thể quan tâm sự vật thăng/tăng trong một mức nào đó hoặc một giai đoạn nào đó.

Bài toán tìm dãy con tăng dần dài nhất (LIS - Longest Increasing Subsequence) là một bài toán kinh điển trong khoa học máy tính và có thể được giải bằng phương pháp quy hoạch động.

Bài toán được phát biểu sơ nét như sau:

Cho một mảng các số nguyên không có thứ tự. Tìm độ dài của dãy con tăng dần dài nhất. Biết rằng dãy con không nhất thiết phải gồm các phần tử liên tiếp nhau trong mảng ban đầu.

Một vài đặc điểm chung của dạng bài này là:

- Nhiều bài dạng này liên quan đến việc tìm dãy con, chứ không phải mảng con. Dãy con thì không đòi hỏi các phần tử phải nằm ở vị trí liên tiếp nhau trong mảng ban đầu.

- Có thể sử dụng phương pháp quy hoạch động để giải quyết bài toán, cụ thể bằng cách xây dựng mảng một chiều hoặc hai chiều để lưu trữ các giá trị trung gian và từng bước xây dựng đáp án. Mặt khác, những bài toán này thường thể hiện theo dạng cấu trúc con tối ưu. Nghĩa là, từ các đáp án tối ưu của các bài toán con, ta có thể xây dựng đáp án tối ưu của bài toán tổng thể.

- Những bài toán tương tự có thể kể đến là: xác định dãy con dài nhất thỏa điều kiện nào đó, tối đa hóa hoặc tối thiểu hóa điều kiện, tìm cách sắp xếp tối ưu các phần tử liên quan.

- Một số bài toán LIS có thể được giải hay hơn theo hướng của thuật toán tìm kiếm nhị phân.

## Bài toán ví dụ

### Yêu cầu

Cho mảng a gồm các số nguyên. Tìm ra dãy con thỏa hai điều kiện: tăng dần và có độ dài lớn nhất.

### Input

```pycon
7
3 4 -1 0 6 2 3
```

### Output

```pycon
4
-1 0 2 3
```

### Giải thích

Mảng a có 7 phần tử.

Dãy con tăng dần dài nhất gồm 4 phần tử là -1 0 2 3.

### Cách giải đề xuất

#### Xây dựng bảng quy hoạch

Bảng quy hoạch `d` là mảng một chiều có số phần tử như mảng `a`, trong đó `d[i]` lưu độ dài của dãy con dài nhất tính từ đầu đến phần tử `a[i]`.

Như vậy, `d[i]` nào có giá trị lớn nhất thì chính là độ dài của dãy con cần tìm.

#### Khởi tạo

Trong trường hợp xấu nhất, mảng `a` là giảm dần. Lúc này, độ dài lớn nhất (dài nhất) của dãy con tăng dần là 1, tức mỗi dãy con chỉ có một phần tử, không có phần tử thứ hai làm cho nó tăng nữa.

Bên cạnh đó, để xuất ra dãy con sau khi tính xong bảng quy hoạch `d`, ta khởi tạo mảng `trace` để kết nối các phần tử thuộc cùng một dãy con tăng dần. Cụ thể, `trace[i] = j`, nghĩa là trước phần tử `a[i]` là phần tử `a[j]`.

Ban đầu, ta gán giá trị `-1` toàn bộ mảng `trace`.

=== "C++"
    ``` c++ linenums="1"
        d.resize(n, 1);

        trace.resize(n, -1);
    ```
=== "Python"
    ``` py linenums="1"
        global d
        d = [1 for _ in range(n)]

        global trace
        trace = [-1 for _ in range(n)]
    ```

#### Thực hiện quy hoạch động

Dùng vòng lặp duyệt mảng `a` từ đầu đến cuối, ứng với phần tử thứ `i`:

&emsp;&emsp;Dùng vòng lặp với biến `j` duyệt từ đầu mảng `a` đến trước phần tử thứ `i`:

&emsp;&emsp;&emsp;&emsp;Xét xem `a[i]` có được *tính vào* dãy con mà `a[j]` đang có mặt trong đó hay không.

&emsp;&emsp;&emsp;&emsp;Nói cách khác, với `d[j]` đang chứa độ dài lớn nhất của dãy con tính từ đầu đến phần tử thứ `j`, ta xét xem `a[i]` có được *kết nạp* vào dãy con này hay không. Muốn được *kết nạp*, `a[i]` phải thỏa hai điều kiện sau:

&emsp;&emsp;&emsp;&emsp;1. `a[j] < a[i]` để đảm bảo dãy con vẫn tăng.

&emsp;&emsp;&emsp;&emsp;2. `d[j] + 1 > d[i]`, tức khi `d[j]` *dài thêm* một đơn vị thì nó phải dài hơn độ dài của dãy con nào đó mà tính từ đầu đến `i`, do d[i] đang lưu.

&emsp;&emsp;&emsp;&emsp;Nếu tại vị trí thứ `i` mà hai điều kiện này được thỏa, thì ta lưu độ dài lớn nhất mới và ghi nhận sự kết nối của hai phần tử vào mảng `trace`.

=== "C++"
    ``` c++ linenums="1"
        for (int i = 1; i < n; ++i)
        {
            for (int j = 0; j < i; ++j)
            {
                if (a[j] < a[i])
                {
                    if (d[j] + 1 > d [i])
                    {
                        d[i] = d[j] + 1;
                        trace[i] = j;
                    }
                }
            }
        }
    ```
=== "Python"
    ``` py linenums="1"
        for i in range(1, n):
            for j in range(i):
                if a[j] < a[i]:
                    if d[j] + 1 > d[i]:
                        d[i] = d[j] + 1
                        trace[i] = j
    ```

#### Output

Trước hết, ta tìm xem phần tử nào của mảng `d` đang lưu giá trị lớn nhất. Giả sử vị trí đó là `finish`.

| | 0 | 1 | 2 | 3 | 4 | 5 |6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a | 3 | 4 | -1 | 0 | 6 | 2 | 3 |
| d | 1 | 2 | 1 | 2 | 3 | 3 | 4 |
| trace | -1 | 0 | -1 | 2 | 1 | 3 | 5 |

Bảng 1. Bảng quy hoạch `d` và các mảng liên quan sau khi hoàn thành

=== "C++"
    ``` c++ linenums="1"
        vector<int>::iterator max_len = max_element(d.begin(), d.end());
        int finish = max_len - d.begin();
    ```
=== "Python"
    ``` py linenums="1"
        max_length = max(d)
        finish = d.index(max_length)
    ```

Khi đã có `finish`, ta dựa vào mảng `trace`, cho `finish` *lui dần* về phía đầu của mảng `a` để xuất ra dãy con có độ dài lớn nhất.

=== "C++"
    ``` c++ linenums="1"
        stack<int> sub_seq; // subsequence
        while (!(trace[finish] == -1))
        {
            sub_seq.push(a[finish]);
            finish = trace[finish]; // trace backward
        }
        sub_seq.push(a[finish]);
    ```
=== "Python"
    ``` py linenums="1"
        sub_seq = deque()
        while not trace[finish] == -1:
            sub_seq.append(a[finish])
            finish = trace[finish]
        sub_seq.append(a[finish])
    ```

### Toàn bộ chương trình

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/DynamicProgramming/tree/main/LongestIncreasingSubsequence" target="_blank">GitHub</a>.
