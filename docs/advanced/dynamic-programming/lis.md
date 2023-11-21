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
7  
3 4 -1 0 6 2 3

### Output
4  
-1 0 2 3

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

#### 


=== "Python"
    ``` py linenums="1"

    ```

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

=== "C++"
    ``` c++ linenums="1"

    ```

=== "Python"
    ``` py linenums="1"

    ```