---
tags:
    - DFS
    - Ánh xạ toạ độ 2D thành 1D
    - Ma trận
---

# Thoát khỏi khu rừng

## Khái quát

Đôi khi vì quá đam mê cái gì đó mà bạn bị lầm đường lạc... trôi. Nếu lỡ bị hút vào trận đồ không lối thoát, bạn hãy nghĩ ngay đến một thuật toán tìm đường của Tin học.

Bài toán trình bày dưới đây là một ví dụ về DFS áp dụng trên ma trận. (1)
{ .annotate }

1.  Bài toán do chủ thớt tham khảo trên Internet nhưng không nhớ lấy từ trang web nào.

## Bài toán

**Yêu cầu:**

Cho một khu rừng được mô phỏng bằng ma trận hàng và cột, trong đó những ô mang ký tự `'O'` là đi vào được, còn những ô mang ký tự `'X'` là cạm bẫy, không thể đi vào.

Nhà thám hiểm đang đứng tại ô mang ký tự `'E'` và phải tìm đường thoát ra khỏi khu rừng. Anh có thể di chuyển qua ô khác theo một trong bốn hướng: lên, xuống, trái và phải, và tìm cách đến được bìa rừng, chính là các cạnh biên của ma trận.

**Input:**

```pycon
5 5
XXXXX
XEOOX
XXXOX
XOOOX
XOXXX
```

**Output:**

```pycon
1 1
1 2
1 3
2 3
3 3
3 2
3 1
4 1
```

**Giải thích:**

Input:

- Dòng đầu tiên là kích thước hàng và cột của ma trận.
- Các dòng tiếp theo là các hàng của ma trận, mỗi hàng là một chuỗi ký tự mô tả khu rừng.

Output là đường đi từ ô đang đứng của nhà thám hiểm ra đến bìa rừng.

<div>
    <iframe width="100%" height="256px" frameBorder=0 src="/advanced/graph/images/escape-from-the-forest.html"></iframe>
    <p style="margin: 0"><em>Minh họa khu rừng và đường đi của nhà thám hiểm</em></p>
</div>

## Cách giải đề xuất

### Ý tưởng chính

Nhà thám hiểm sẽ sử dụng tuyệt chiêu *"phân thân chi thuật"*, xuất hồn ra thể để đi thử qua các ô khác cho đến khi đến được bìa rừng, theo thuật toán DFS như sau:

- Xây dựng hàm đệ quy có một tham số là ô mà nhà thám hiểm đang đứng, gọi là ô `current`.

- Ban đầu, xuất phát từ ô có ký tự `'E'`, đi thử qua một trong bốn ô liền kề, gọi là ô `next`.
    
- Nếu ô `next` chưa duyệt (chưa ghé thăm, chưa đánh dấu) và không có cạm bẫy (ký tự `'X'`) thì đánh dấu ô `next`, rồi gọi đệ quy với tham số là ô `next`. Ô `next` sẽ trở thành `current` để chuẩn bị cho bước duyệt tiếp theo.

- Trường hợp cơ sở của hàm đệ quy là ô `current` đang xét nằm ngay trên đường biên của ma trận, tương ứng với hàng đầu, hoặc hàng cuối, hoặc cột đầu, hoặc cột cuối.

### Khởi tạo

1\. Khởi tạo biến `start` (1) là vị trí xuất phát của nhà thám hiểm.
{ .annotate }

1.  `pair<int, int> start, finish;`

=== "C++"

    ```c++ linenums="85"
        for (int r = 0; r < number_of_rows; r++)
        {
            int c = forest[r].find('E');

            if (c != string::npos)
            {
                start.first = r;
                start.second = c;
                break;
            }
        }
    ```

=== "Python"

    ```py linenums="63"
        for r, row_data in enumerate(forest):
            if 'E' in row_data:
                c = row_data.index('E')
                start = [r, c]
                break
    ```

2\. Khai báo ma trận `trace` có kích thước tương tự ma trận khu rừng `forest`, dùng để đánh dấu và truy vết đường đi.

Khởi tạo `trace` với mọi phần tử đều là `-1`, nghĩa là chưa duyệt (chưa ghé thăm, chưa đánh dấu).

Khi ô nào của `forest` đi vào được, ta đánh dấu ô tương ứng trong `trace`. Cách đánh dấu sẽ đề cập bên dưới.

=== "C++"

    ```c++ linenums="98"            
        trace.resize(number_of_rows, vector<int>(number_of_cols, -1));
    ```

=== "Python"

    ```py linenums="70"
        trace = [[-1 for col in range(number_of_cols)] for row in range(number_of_rows)]
    ```

2\. Khởi tạo mảng `steps` lưu bốn hướng di chuyển: lên, xuống, trái và phải.   

=== "C++"

    ```c++ linenums="22"            
    vector<pair<int, int>> steps = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    ```

=== "Python"

    ```py linenums="21"
    steps = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    ```

### Thực hiện DFS

**1\. Trường hợp cơ sở:** ô `current` nằm trên cạnh biên của ma trận.

Điều này đồng nghĩa nhà thám hiểm đã ra đến bìa rừng. Do đó, ta cập nhật toạ độ của ô kết thúc vào biến `finish` và kết thúc DFS.

=== "C++"

    ```c++ linenums="47"            
        bool border =  (current.first == 0 || current.first == number_of_rows - 1 ||
                        current.second == 0 || current.second == number_of_cols - 1);
        
        if (border)
        {
            // Cập nhật ô kết thúc
            finish.first = current.first;
            finish.second = current.second;
            return;
        }
    ```

=== "Python"

    ```py linenums="36"
        border = (current[0] == 0 or current[0] == number_of_rows - 1 or 
              current[1] == 0 or current[1] == number_of_cols - 1)
    
        if border:
            # Cập nhật ô kết thúc
            finish = current
            return
    ```

**2\. Trường hợp đệ quy:**

Duyệt từng hướng đi trong mảng `step` nhằm đi qua các ô liền kề với ô `current`. Ứng với mỗi hướng đi, lặp các thao tác sau:

Gọi ô liền kề là `next`. Nếu ô `next` thỏa các điều kiện:

- Vẫn còn trong phạm vi khu rừng
- Chưa được duyệt (chưa ghé thăm, chưa đánh dấu)
- Không có bẫy

thì đánh dấu ô `next` vào mảng `trace`, rồi gọi đệ quy với tham số là ô `next` này.

Vì mỗi phần tử của mảng `trace` chỉ có thể chứa một số nguyên duy nhất, nên ta sử dụng chiêu thức "*lưỡng long hợp thể*", tức kết hợp chỉ số hàng và chỉ số cột thành một số nguyên. Khi nào output kết quả, ta sẽ "*giải nén*" trở lại.

Kỹ thuật này có thể gọi tên là **ánh xạ toạ độ 2D thành 1D**.

=== "C++"

    ```c++ linenums="58"            
        pair<int, int> next;

        // Duyệt từng hướng đi
        for (int s = 0; s < 4; ++s)
        {
            // Lấy toạ độ của ô next
            next.first = current.first + steps[s].first;
            next.second = current.second + steps[s].second;

            // Nếu nhà thám hiểm vẫn còn trong bên trong phạm vi khu rừng
            // và ô next chưa duyệt và không có bẫy
            if (next.first >= 0 && next.first < number_of_rows && next.second >= 0 && next.second < number_of_cols
                && trace[next.first][next.second] == -1 && forest[next.first][next.second] == 'O')
            {
                // thì đánh dấu ô next bằng cách gộp toạ độ hàng và cột vào chung một giá trị
                trace[next.first][next.second] = current.second * MAX + current.first;

                // Gọi đệ quy đối với ô next
                dfs(next);
            }
        }
    ```

=== "Python"

    ```py linenums="44"
        # Duyệt từng hướng đi
        for s in steps:
            # Lấy toạ độ của ô next
            next = [current[0] + s[0], current[1] + s[1]]

            # Nếu nhà thám hiểm vẫn còn trong bên trong phạm vi khu rừng
            # và ô next chưa duyệt và không có bẫy
            if 0 <= next[0] < number_of_rows and 0 <= next[1] < number_of_cols and trace[next[0]][next[1]] == -1 and forest[next[0]][next[1]] == 'O':
                # thì đánh dấu ô next bằng cách gộp toạ độ hàng và cột vào chung một giá trị                    
                trace[next[0]][next[1]] = current[1] * MAX + current[0]

                # Gọi đệ quy đối với ô next
                dfs(next)
    ```

### Xuất output

Trong phần đệ quy trên, ta đã dùng biến `finish` để ghi nhận tọa độ của ô kết thúc ở bìa rừng. Bây giờ, dựa vào mảng `trace`, ta cho `finish` *"lùi dần"* về ô xuất phát ban đầu của nhà thám hiểm, tức ô có ký tự `'E'`.

Mặt khác, do ở trên đã *"lưỡng long hợp thể"*, tại đây ta *"giải nén"* bằng cách sử dụng phép chia lấy phần dư và thương, ứng với chỉ số hàng và chỉ số cột.

=== "C++"

    ```c++ linenums="107"            
        // Dùng ngăn xếp để lưu đường đi kết quả
        stack<pair<int, int>> path;

        // Nạp ô finish ở bìa rừng vào ngăn xếp
        path.push(finish);

        // Dựa vào mảng trace để truy vết các ô nằm trước ô finish
        while (trace[finish.first][finish.second] != -1)
        {
            // Tách giá trị đã gộp ở dfs() thành hai thành phần toạ độ riêng lẻ
            int r = trace[finish.first][finish.second] % MAX;
            int c = trace[finish.first][finish.second] / MAX;

            // Đẩy toạ độ riêng lẻ vào ngăn xếp
            path.push({r, c});

            // Tiếp tục lùi ô finish
            finish.first = r;
            finish.second = c;
        }
    ```

=== "Python"

    ```py linenums="79"
       # Dùng ngăn xếp để lưu đường đi kết quả
        path = list()
        
        # Nạp ô finish ở bìa rừng vào ngăn xếp
        path.append(finish)
        
        # Dựa vào mảng trace để truy vết các ô nằm trước ô finish
        while not trace[finish[0]][finish[1]] == -1:
            # Tách giá trị đã gộp ở dfs() thành hai thành phần toạ độ riêng lẻ
            r = trace[finish[0]][finish[1]] % MAX
            c = trace[finish[0]][finish[1]] // MAX

            # Đẩy toạ độ riêng lẻ vào ngăn xếp
            path.append([r, c])

            # Tiếp tục lùi ô finish
            finish = [r, c]
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/graph/escape-from-the-forest){:target="_blank"}.