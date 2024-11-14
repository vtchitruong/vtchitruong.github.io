# Robot trong mê cung

## Khái quát

Nhằm "*đu trend*" người người robot, nhà nhà robot, bài này mượn hình ảnh robot nhưng mục đích chính là đề cập vấn đề di chuyển giữa các ô trong lưới.

Bài toán trình bày dưới đây là một ví dụ về BFS. (1)
{ .annotate }

1.  Bài toán do chủ thớt tham khảo trên Internet nhưng không nhớ lấy từ trang web nào.

## Bài toán

### Yêu cầu

Cho một mê cung được mô phỏng bằng ma trận, hàng và cột đánh chỉ số bắt đầu từ 1. Trong đó những ô có giá trị `0` thì có thể đi vào, còn những ô có giá trị `1` thì không được đi vào.

Robot có thể di chuyển qua ô khác theo một trong bốn hướng: lên, xuống, trái và phải. Hãy tìm đường để robot di chuyển từ ô có tọa độ (r1, c1) đến ô (r2, c2).

### Input

```pycon
4 7 1 3 2 6
1001000
0010100
0000000
1101000
```

### Output

```pycon
1 3
1 2
2 2
3 2
3 3
3 4
3 5
3 6
2 6
```

### Giải thích

Trong input:

- Dòng đầu tiên gồm sáu số là: 4 hàng và 7 cột của ma trận, 1 và 3 là toạ độ ô xuất phát, 2 và 6 là toạ độ ô kết thúc. 
- Các dòng tiếp theo là các hàng của ma trận, mỗi hàng là một chuỗi ký tự mô tả mê cung.

Output là đường đi của robot từ ô xuất phát đến ô kết thúc.

<div>
    <iframe width="100%" height="230px" frameBorder=0 src="../robot-in-the-maze.html"></iframe>
    <p style="margin: 0"><em>Minh họa mê cung và đường đi của robot</em></p>
</div>

## Cách giải đề xuất

### Ý tưởng chính

Dựa theo thuật toán BFS, ta thực hiện *loang* như sau:

- Từ ô xuất phát `start`, lần lượt xét bốn ô liền kề, ô nào robot có thể đi vào được thì đánh dấu (để truy vết đường đi sau này) và nạp vào hàng đợi `q`.

- Lặp lại thao tác trên cho đến khi hàng đợi `q` không còn ô nào để duyệt hoặc ô cần duyệt là ô kết thúc `finish`.

### Khởi tạo

Khởi tạo mảng hai chiều `trace` dùng để đánh dấu các ô đã duyệt và truy vết đường đi.

Các phần tử trong mảng `trace` đều được đánh dấu là 'N', nghĩa là chưa duyệt (Not yet). Riêng ô xuất phát được đánh dấu là 'S'.

=== "C++"

    ```c++ linenums="49"
        // Khởi tạo giá trị 'N' cho toàn bộ mảng trace
        trace.resize(row_number + 1, vector<char>(col_number + 1, 'N'));

        // Ô xuất phát được đánh dấu bằng ký tự 'S'
        trace[start.first][start.second] = 'S';
    ```

=== "Python"

    ```py linenums="42"
        # Khởi tạo giá trị 'N' cho toàn bộ mảng trace
        trace = [['N' for col in range(col_number + 1)] for row in range(row_number + 1)]
        
        # Ô xuất phát được đánh dấu bằng ký tự 'S'
        trace[start[0]][start[1]] = 'S'
    ```

### Thực hiện BFS

1\. Khai báo hàng đợi `q` và nạp ô `start` vào hàng đợi.

=== "C++"

    ```c++ linenums="59"
        // Hàng đợi chứa các ô cần duyệt
        queue<pair<int, int>> q;

        // Nạp ô xuất phát vào hàng đợi
        q.push(start);
    ```

=== "Python"

    ```py linenums="50"
        # Hàng đợi chứa các ô cần duyệt
        q = queue.Queue()

        # Nạp ô xuất phát vào hàng đợi
        q.put(start)
    ```

2\. Duyệt từng phần tử trong hàng đợi, lặp các thao tác sau:

- Lấy ra phần tử đầu hàng đợi, gọi là ô `current`.

- Nếu ô `current` trùng với ô kết thúc thì dừng vòng lặp, robot đã đến đích.

- Lần lượt xét bốn ô liền kề với ô `current` là: trên, dưới, trái và phải, gọi là ô `next`. Nếu ô liền kề thoả các điều kiện: 

    - Vẫn còn trong phạm vi của mê cung.
    - Chưa được duyệt (chưa ghé thăm).
    - Có thể đi vào được.

    thì đẩy ô `next` vào hàng đợi và đánh dấu ô `next` này bằng bốn ký tự: `'U'`, `'D'`, `'L'` và `'R'` ứng với bốn hướng.

=== "C++"

    ```c++ linenums="65"        
        pair<int, int> current;
        pair<int, int> next;

        // Trong khi hàng đợi vẫn còn ô chờ duyệt
        while (!q.empty())
        {
            // Lấy ô ở đầu hàng đợi
            current = q.front();
            q.pop();

            // Dừng vòng lặp khi ô sắp duyệt là ô kết thúc, tức đã đến đích
            if (current == finish)
                return;

            // Thử đi lên một ô
            if (current.first > 1)
                if (maze[current.first - 1][current.second] == 0)
                    if (trace[current.first - 1][current.second] == 'N')
                    {
                        // Lấy toạ độ của ô trên
                        next = current;
                        next.first--;

                        // Đẩy vào hàng đợi
                        q.push(next);

                        // Đánh dấu đã duyệt bằng ký tự U: up
                        trace[next.first][next.second] = 'U';
                    }
            
            // Thử đi xuống một ô
            if (current.first < row_number)
                if (maze[current.first + 1][current.second] == 0)
                    if (trace[current.first + 1][current.second] == 'N')
                    {
                        // Lấy toạ độ của ô dưới
                        next = current;
                        next.first++;

                        // Đẩy vào hàng đợi
                        q.push(next);

                        // Đánh dấu đã duyệt bằng ký tự D: down
                        trace[next.first][next.second] = 'D';
                    }

            // Thử qua trái một ô
            if (current.second > 1)
                if (maze[current.first][current.second - 1] == 0)
                    if (trace[current.first][current.second - 1] == 'N')
                    {
                        // Lấy toạ độ của ô trái
                        next = current;
                        next.second--;

                        // Đẩy vào hàng đợi
                        q.push(next);

                        // Đánh dấu đã duyệt bằng ký tự L: left
                        trace[next.first][next.second] = 'L';
                    }
            
            // Thử qua phải một ô
            if (current.second < col_number)
                if (maze[current.first][current.second + 1] == 0)
                    if (trace[current.first][current.second + 1] == 'N')
                    {
                        // Lấy toạ độ của ô phải
                        next = current;
                        next.second++;

                        // Đẩy vào hàng đợi
                        q.push(next);

                        // Đánh dấu đã duyệt bằng ký tự R: right
                        trace[next.first][next.second] = 'R';
                    }
        }
    }
    ```

=== "Python"

    ```py linenums="56"
        # Trong khi hàng đợi vẫn còn ô chờ duyệt
        while q:
            # Lấy ô ở đầu hàng đợi
            current = q.get()

            # Dừng vòng lặp khi ô sắp duyệt là ô kết thúc, tức đã đến đích
            if current == finish:
                return

            # Thử đi lên một ô
            if current[0] > 1: # if robot could go up
                if maze[current[0] - 1][current[1]] == 0:
                    if trace[current[0] - 1][current[1]] == 'N':
                        # Lấy toạ độ của ô trên
                        next = current.copy()
                        next[0] -= 1

                        # Đẩy vào hàng đợi
                        q.put(next)

                        # Đánh dấu đã duyệt bằng ký tự U: up
                        trace[next[0]][next[1]] = 'U'

            # Thử đi xuống một ô
            if current[0] < row_number:
                if maze[current[0] + 1][current[1]] == 0:
                    if trace[current[0] + 1][current[1]] == 'N':
                        # Lấy toạ độ của ô dưới
                        next = current.copy()
                        next[0] += 1

                        # Đẩy vào hàng đợi
                        q.put(next)

                        # Đánh dấu đã duyệt bằng ký tự D: down
                        trace[next[0]][next[1]] = 'D'

            # Thử qua trái một ô
            if current[1] > 1:
                if maze[current[0]][current[1] - 1] == 0:
                    if trace[current[0]][current[1] - 1] == 'N':
                        # Lấy toạ độ của ô trái
                        next = current.copy()
                        next[1] -= 1

                        # Đẩy vào hàng đợi
                        q.put(next)

                        # Đánh dấu đã duyệt bằng ký tự L: left
                        trace[next[0]][next[1]] = 'L'

            # Thử qua phải một ô
            if current[1] < col_number:
                if maze[current[0]][current[1] + 1] == 0:
                    if trace[current[0]][current[1] + 1] == 'N':
                        # Lấy toạ độ của ô phải
                        next = current.copy()
                        next[1] += 1

                        # Đẩy vào hàng đợi
                        q.put(next)

                        # Đánh dấu đã duyệt bằng ký tự R: right
                        trace[next[0]][next[1]] = 'R'
    ```

### Output đường đi

Để xuất đường đi kết quả, ta dựa vào mảng `trace` để truy ngược bằng cách cho ô `finish` "*lui dần*" về ô xuất phát. Trong đó `finish` sẽ lùi "*ngược hướng*" với ký tự lưu trong mảng `trace`. Ví dụ: ký tự lưu trong `trace` là `'U'`, đi lên, thì `finish` sẽ đi xuống.

=== "C++"

    ```c++ linenums="155"
        // Đường đi kết quả
        stack<pair<int, int>> path;

        if (trace[finish.first][finish.second] != 'N')
        {
            // Dựa vào mảng trace để truy vết các ô nằm trước ô kết thúc
            while (trace[finish.first][finish.second] != 'S')
            {
                // Đẩy ô kết thúc vào ngăn xếp path
                path.push(finish);

                // Tiếp tục lùi ô kết thúc đến vị trí mới
                switch (trace[finish.first][finish.second])
                {
                    case 'U': finish.first++;
                        break;
                    case 'D': finish.first--;
                        break;
                    case 'L': finish.second++;
                        break;
                    case 'R': finish.second--;
                        break;
                }
            }

            // Đẩy ô xuất phát vào ngăn xếp
            path.push(start);
        }
    ```

=== "Python"

    ```py linenums="128"
        # Đường đi kết quả
        path = list()

        if trace[finish[0]][finish[1]] != 'N':
            # Dựa vào mảng trace để truy vết các ô nằm trước ô kết thúc
            while not trace[finish[0]][finish[1]] == 'S':
                # Đẩy ô kết thúc vào ngăn xếp path
                path.append(finish.copy())

                # Tiếp tục lùi ô kết thúc đến vị trí mới
                direction= trace[finish[0]][finish[1]]
                if direction== 'U':
                    finish[0] += 1
                elif direction== 'D':
                    finish[0] -= 1
                elif direction== 'L':
                    finish[1] += 1
                elif direction== 'R':
                    finish[1] -= 1
            
            # Đẩy ô xuất phát vào ngăn xếp
            path.append(start)
        
        with open(output_file, 'w') as f:
            if not path:
                f.write('-1')
            else:
                f.writelines([f'{path[i][0]} {path[i][1]}\n' for i in range(len(path) - 1, 0, -1)])
                f.write(f'{path[0][0]} {path[0][1]}')
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Graph/tree/main/RobotMove){:target="_blank"}.