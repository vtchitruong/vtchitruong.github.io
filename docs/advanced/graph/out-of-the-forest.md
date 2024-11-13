# Tìm đường thoát khỏi khu rừng

## Khái quát

Đôi khi vì quá đam mê cái gì đó mà ta bị lầm đường "*lạc trôi*". Nếu lỡ bị hút vào trận đồ và cảm thấy tuyệt vọng không lối thoát, bạn hãy học Tin học, nó sẽ cho bạn ánh sáng cuối đường hầm, giống như nhà thám hiểm nọ đã sử dụng thuật toán DFS để thoát khỏi khu rừng.

Bài toán trình bày dưới đây là một ví dụ về DFS. (1)
{ .annotate }

1.  Bài toán do chủ thớt tham khảo trên Internet nhưng không nhớ lấy từ trang web nào.

## Bài toán

### Yêu cầu

Cho một khu rừng được mô phỏng bằng ma trận hàng và cột, trong đó những ô mang ký tự `'O'` là đi vào được, còn những ô mang ký tự `'X'` là cạm bẫy, không đi vào được.

Nhà thám hiểm đang đứng tại ô mang ký tự `'E'` và phải tìm đường thoát ra khỏi khu rừng. Anh có thể di chuyển qua ô khác theo một trong bốn hướng: lên, xuống, trái và phải, và tìm cách đến được bìa rừng, chính là các cạnh biên của ma trận.

### Input

```pycon
5 5
XXXXX
XEOOX
XXXOX
XOOOX
XOXXX
```

### Output

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

### Giải thích

Trong input:

- Dòng đầu tiên là kích thước hàng và cột của ma trận.
- Các dòng tiếp theo là các hàng của ma trận, mỗi hàng là một chuỗi ký tự mô tả khu rừng.

Output là đường đi từ ô đang đứng của nhà thám hiểm ra đến bìa rừng.

<div>
    <iframe width="100%" height="256px" frameBorder=0 src="../out-of-the-forest.html"></iframe>
    <p style="margin: 0"><em>Minh họa khu rừng và đường đi của nhà thám hiểm</em></p>
</div>

## Cách giải đề xuất

### Ý tưởng chính

Nhà thám hiểm sẽ sử dụng tuyệt chiêu *phân thân chi thuật*, xuất ra một bản sao của cơ thể để đi thử qua các ô khác cho đến khi đến được bìa rừng.

Nhà thám hiểm áp dụng thuật toán DFS như sau:

- Xây dựng hàm đệ quy có tham số là ô mà nhà thám hiểm đang đứng, gọi là ô `current`.

- Ban đầu, xuất phát từ ô có ký tự `'E'`, đi thử qua một trong bốn ô liền kề, gọi là ô `next`.
    
- Nếu ô `next` chưa duyệt (chưa ghé thăm) và không có cạm bẫy (ký tự `'X'`), nghĩa là đi vào được, thì đánh dấu đã ô `next` đã duyệt, rồi gọi đệ quy với tham số là ô `next`. Ô `next` sẽ trở thành `current` để chuẩn bị cho bước duyệt tiếp theo.

- Trường hợp cơ sở của hàm đệ quy là ô `current` nằm ngay trên đường biên của ma trận khu rừng, tương ứng với hàng đầu, hoặc hàng cuối, hoặc cột đầu, hoặc cột cuối.

### Khởi tạo

1\. Xác định ô xuất phát của nhà thám hiểm.

=== "C++"

    ```c++ linenums="47"
        for (int r = 0; r < row_number; r++)
        {
            int c = forest[r].find('E');

            // Nếu tìm thấy nhà thám hiểm (tức ký tự E)
            if (c != string::npos)
            {
                // thì ghi nhận đó là ô xuất phát
                start.first = r;
                start.second = c;
                break;
            }
        }
    ```

=== "Python"

    ```py linenums="36"
        for r, row_data in enumerate(forest):
        # Nếu tìm thấy nhà thám hiểm (tức ký tự E)
        if 'E' in row_data:
            c = row_data.index('E')
            start = [r, c]
            break
    ```

2\. Khởi tạo bốn cách di chuyển: lên, xuống, trái và phải.   

=== "C++"

    ```c++ linenums="22"            
    vector<pair<int,int>> steps = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    ```

=== "Python"

    ```py linenums="21"
    steps = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    ```

3\. Khởi tạo ma trận `trace` với mọi ô đều là `-1`, nghĩa là chưa duyệt (chưa ghé thăm). Khi ô nào đi vào được, ta đánh dấu bằng bảng `trace`. Cách đánh dấu sẽ đề cập bên dưới.

=== "C++"

    ```c++ linenums="62"            
        trace.resize(row_number, vector<int>(col_number, -1));

        for (int r = 0; r < row_number; ++r)
        {
            trace[r].resize(col_number, -1);   
        }
    ```

=== "Python"

    ```py linenums="44"
        trace = [[-1 for col in range(col_number)] for row in range(row_number)]
    ```

### Thực hiện DFS

**1\. Trường hợp cơ sở:** Ô `current` nằm ngay trên cạnh biên của ma trận.

Điều này đồng nghĩa nhà thám hiểm đã ra đến bìa rừng. Do đó, ta ghi nhận đây chính là ô kết thúc, lưu vào biến `finish`.

=== "C++"

    ```c++ linenums="74"            
        if (current.first == 0 || current.first == row_number - 1 || current.second == 0 || current.second == col_number - 1)
        {
            // Ghi nhận vị trí ở bìa rừng là ô kết thúc
            finish.first = current.first;
            finish.second = current.second;
            return;
        }
    ```
=== "Python"

    ```py linenums="51"
        if current[0] == 0 or current[0] == row_number - 1 or current[1] == 0 or current[1] == col_number - 1:
        # Ghi nhận vị trí ở bìa rừng là ô kết thúc
        finish = current
        return
    ```

**2\. Trường hợp đệ quy:**

Duyệt từng cách di chuyển (mảng `step`), tức thử đi qua các ô liền kề với ô `current`, lặp các thao tác sau:

Gọi ô liền kề là `next`. Nếu ô `next` thỏa các điều kiện:

- Vẫn còn trong phạm vi khu rừng
- Chưa được duyệt (chưa ghé thăm)
- Không có bẫy

thì đánh dấu ô `next` bằng mảng `trace`, rồi gọi đệ quy với tham số là ô `next` này.

Vì mỗi phần tử của mảng `trace` chỉ có thể chứa một số nguyên duy nhất, nên ta sử dụng chiêu thức "*lưỡng long hợp thể*", tức kết hợp chỉ số hàng và chỉ số cột thành một số nguyên. Khi nào output kết quả, ta sẽ "*giải nén*" trở lại.

=== "C++"

    ```c++ linenums="82"            
        pair<int, int> next;

        // Duyệt từng cách di chuyển
        for (int s = 0; s < 4; ++s)
        {
            next.first = current.first + steps[s].first;
            next.second = current.second + steps[s].second;

            // Nếu nhà thám hiểm vẫn còn trong bên trong phạm vi khu rừng
            // và nếu ô next chưa đánh dấu đã duyệt
            // và nếu ô next không có bẫy
            if (next.first >= 0)
                if (next.first < row_number)
                    if (next.second >= 0)
                        if (next.second < col_number)
                            if (trace[next.first][next.second] == -1)
                                if (forest[next.first][next.second] == 'O')
                                {
                                    // thì đánh dấu ô next đã duyệt và dùng để truy vết sau này
                                    // bằng cách dùng công thức để gộp toạ độ hàng và toạ độ cột vào chung một giá trị
                                    trace[next.first][next.second] = current.second * MAX + current.first;

                                    // Gọi đệ quy đối với ô next
                                    dfs(next);
                                }
        }
    ```

=== "Python"

    ```py linenums="56"
        # Duyệt từng cách di chuyển
        for s in steps:
            next = [current[0] + s[0], current[1] + s[1]]

            # Nếu nhà thám hiểm vẫn còn trong bên trong phạm vi khu rừng
            # và nếu ô next chưa đánh dấu đã duyệt
            # và nếu ô next không có bẫy
            if 0 <= next[0] < row_number and 0 <= next[1] < col_number:
                if trace[next[0]][next[1]] == -1:
                    if forest[next[0]][next[1]] == 'O':
                        # thì đánh dấu ô next đã duyệt và dùng để truy vết sau này
                        # bằng cách dùng công thức để gộp toạ độ hàng và toạ độ cột vào chung một giá trị
                        trace[next[0]][next[1]] = current[1] * MAX + current[0]
                        dfs(next)
    ```

### Output đường đi

Trong phần đệ quy trên, ta đã dùng biến `finish` để ghi nhận tọa độ của ô kết thúc ở bìa rừng. Bây giờ, dựa vào mảng `trace`, ta cho `finish` "*lui dần*" về ô xuất phát ban đầu của nhà thám hiểm, tức ô có ký tự `'E'`.

Mặt khác, do ở trên đã "*lưỡng long hợp thể*", nên tại đây ta "*giải nén*" bằng cách sử dụng phép chia lấy phần dư và thương, ứng với chỉ số hàng và chỉ số cột.

=== "C++"

    ```c++ linenums="120"            
        // Đường đi kết quả
        stack<pair<int, int>> path;

        // Nạp ô kết thúc (ở bìa rừng) vào ngăn xếp path
        path.push(finish);

        // Dựa vào mảng trace để truy vết các ô nằm trước ô kết thúc
        while (trace[finish.first][finish.second] != -1)
        {
            // Tách giá trị đã gộp ở dfs() trở lại thành hai thành phần toạ độ riêng lẻ
            int r = trace[finish.first][finish.second] % MAX;
            int c = trace[finish.first][finish.second] / MAX;

            // Đẩy toạ độ vào ngăn xếp
            path.push({r, c});

            // Tiếp tục lùi ô kết thúc đến vị trí mới
            finish.first = r;
            finish.second = c;
        }
    ```

=== "Python"

    ```py linenums="81"
       # Đường đi kết quả
        path = list()
        
        # Nạp ô kết thúc (ở bìa rừng) vào ngăn xếp path
        path.append(finish)
        
        # Dựa vào mảng trace để truy vết các ô nằm trước ô kết thúc
        while not trace[finish[0]][finish[1]] == -1:
            # Tách giá trị đã gộp ở dfs() trở lại thành hai thành phần toạ độ riêng lẻ
            r = trace[finish[0]][finish[1]] % MAX
            c = trace[finish[0]][finish[1]] // MAX

            # Đẩy toạ độ vào ngăn xếp
            path.append([r, c])

            # Tiếp tục lùi ô kết thúc đến vị trí mới
            finish = [r, c]
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Graph/tree/main/Forest){:target="_blank"}.


