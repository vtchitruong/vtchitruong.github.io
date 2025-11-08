---
tags:
    - BFS
---

# Robot trong mê cung

## Khái quát

Nhằm *"đu trend"* người người robot, nhà nhà robot, bài này nhắc đến robot nhưng mục đích chính là đề cập đến việc di chuyển giữa các ô trong lưới.

Bài toán trình bày dưới đây là một ví dụ về BFS áp dụng trên ma trận. (1)
{ .annotate }

1.  Bài toán do chủ thớt tham khảo trên Internet nhưng không nhớ lấy từ trang web nào.

## Bài toán

**Yêu cầu:**

Cho một mê cung được mô phỏng bằng ma trận, chỉ số hàng và cột được đánh thứ tự từ 1. Trong mê cung, những ô có giá trị `0` thì có thể đi vào, còn những ô có giá trị `1` thì không thể.

Robot có thể di chuyển qua ô khác theo một trong bốn hướng: lên, xuống, trái và phải. Hãy tìm đường để robot di chuyển từ ô (r1, c1) đến ô (r2, c2).

**Input:**

```pycon
4 7 1 3 2 6
1001000
0010100
0000000
1101000
```

**Output:**

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

**Giải thích:**

Input:

- Dòng đầu tiên gồm sáu số là: 4 hàng và 7 cột của ma trận, 1 và 3 là toạ độ ô xuất phát, 2 và 6 là toạ độ ô kết thúc. 
- Các dòng tiếp theo là các hàng của ma trận, mỗi hàng là một chuỗi ký tự mô tả mê cung.

Output là đường đi của robot từ ô xuất phát đến ô kết thúc.

<div>
    <iframe width="100%" height="230px" frameBorder=0 src="/advanced/graph/images/robot-in-the-maze.html"></iframe>
    <p style="margin: 0"><em>Minh họa mê cung và đường đi của robot</em></p>
</div>

## Cách giải đề xuất

### Ý tưởng chính

Dựa theo thuật toán BFS, ta thực hiện *"loang"* như sau:

- Từ ô xuất phát `start`, lần lượt xét bốn ô liền kề, ô nào robot có thể đi vào được thì đánh dấu vào mảng `trace` và nạp vào hàng đợi `q`.
- Lặp lại thao tác trên cho đến khi hàng đợi `q` không còn ô nào để duyệt hoặc ô cần duyệt là ô kết thúc `finish`.

### Khởi tạo

Khai báo mảng hai chiều `trace` có kích thước tương tự mê cung `maze`, dùng để đánh dấu các ô đã duyệt và truy vết đường đi.

Khởi tạo `trace` với mọi phần tử đều được là 'N' (Not yet). Riêng ô xuất phát `start` là 'S'.

=== "C++"

    ```c++ linenums="49"
        // Khởi tạo giá trị 'N' cho toàn bộ mảng trace
        trace.resize(number_of_rows + 1, vector<char>(number_of_cols + 1, 'N'));

        // Ô start được đánh dấu bằng ký tự 'S'
        trace[start.first][start.second] = 'S';
    ```

=== "Python"

    ```py linenums="41"
        # Khởi tạo giá trị 'N' cho toàn bộ mảng trace
        trace = [['N' for col in range(number_of_cols + 1)] for row in range(number_of_rows + 1)]
        
        # Ô start được đánh dấu bằng ký tự 'S'
        trace[start[0]][start[1]] = 'S'
    ```

### Thực hiện BFS

1\. Khai báo hàng đợi `q` và nạp ô `start` vào hàng đợi.

=== "C++"

    ```c++ linenums="55"
        // Hàng đợi q chứa các ô cần duyệt
        queue<pair<int, int>> q;

        // Nạp ô start vào hàng đợi
        q.push(start);
    ```

=== "Python"

    ```py linenums="47"
        # Hàng đợi q chứa các ô cần duyệt
        q = queue.Queue()

        # Nạp ô start vào hàng đợi
        q.put(start)
    ```

2\. Dùng vòng lặp duyệt từng phần tử trong hàng đợi, lặp các thao tác sau:

- Lấy ra phần tử đầu hàng đợi, gọi là ô `current`.
- Nếu ô `current` trùng với ô `finish` thì dừng vòng lặp, robot đã đến đích.
- Lần lượt xét bốn ô liền kề với ô `current` là: trên, dưới, trái và phải, gọi là ô `next`. Nếu ô liền kề thoả các điều kiện: 

    - Vẫn còn trong phạm vi của mê cung
    - Chưa được duyệt (chưa ghé thăm, chưa đánh dấu)
    - Có thể đi vào được

    thì đẩy ô `next` vào hàng đợi và đánh dấu ô `next` này bằng một trong bốn ký tự: `'U'`, `'D'`, `'L'` và `'R'` ứng với bốn hướng.

=== "C++"

    ```c++ linenums="61"        
        pair<int, int> current;
        pair<int, int> next;

        // Trong khi hàng đợi vẫn còn ô chờ duyệt
        while (!q.empty())
        {
            // Lấy ô ở đầu hàng đợi
            current = q.front();
            q.pop();

            // Dừng vòng lặp khi ô sắp duyệt là ô finish, tức đã đến đích
            if (current == finish) return;

            // Thử đi lên một ô
            if (current.first > 1 && maze[current.first - 1][current.second] == 0 &&
                trace[current.first - 1][current.second] == 'N')
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
            if (current.first < number_of_rows && maze[current.first + 1][current.second] == 0 &&
                trace[current.first + 1][current.second] == 'N')
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
            if (current.second > 1 && maze[current.first][current.second - 1] == 0 &&
                trace[current.first][current.second - 1] == 'N')
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
            if (current.second < number_of_cols && maze[current.first][current.second + 1] == 0 &&
                trace[current.first][current.second + 1] == 'N')
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
    ```

=== "Python"

    ```py linenums="53"
        # Trong khi hàng đợi vẫn còn ô chờ duyệt
        while q:
            # Lấy ô ở đầu hàng đợi
            current = q.get()

            # Dừng vòng lặp khi ô sắp duyệt là ô kết thúc, tức đã đến đích
            if current == finish:
                return

            # Thử đi lên một ô
            if current[0] > 1 and maze[current[0] - 1][current[1]] == 0 and trace[current[0] - 1][current[1]] == 'N':
                # Lấy toạ độ của ô trên
                next = current.copy()
                next[0] -= 1

                # Đẩy vào hàng đợi
                q.put(next)

                # Đánh dấu đã duyệt bằng ký tự U: up
                trace[next[0]][next[1]] = 'U'

            # Thử đi xuống một ô
            if current[0] < number_of_rows and maze[current[0] + 1][current[1]] == 0 and trace[current[0] + 1][current[1]] == 'N':
                # Lấy toạ độ của ô dưới
                next = current.copy()
                next[0] += 1

                # Đẩy vào hàng đợi
                q.put(next)

                # Đánh dấu đã duyệt bằng ký tự D: down
                trace[next[0]][next[1]] = 'D'

            # Thử qua trái một ô
            if current[1] > 1 and maze[current[0]][current[1] - 1] == 0 and trace[current[0]][current[1] - 1] == 'N':
                # Lấy toạ độ của ô trái
                next = current.copy()
                next[1] -= 1

                # Đẩy vào hàng đợi
                q.put(next)

                # Đánh dấu đã duyệt bằng ký tự L: left
                trace[next[0]][next[1]] = 'L'

            # Thử qua phải một ô
            if current[1] < number_of_cols and maze[current[0]][current[1] + 1] == 0 and trace[current[0]][current[1] + 1] == 'N':
                # Lấy toạ độ của ô phải
                next = current.copy()
                next[1] += 1

                # Đẩy vào hàng đợi
                q.put(next)

                # Đánh dấu đã duyệt bằng ký tự R: right
                trace[next[0]][next[1]] = 'R'
    ```

### Xuất output

Ta dựa vào mảng `trace` để truy ngược bằng cách cho ô `finish` *"lùi dần"* về ô `start`. Trong đó, `finish` sẽ lùi *"ngược hướng"* với ký tự lưu trong `trace`. Ví dụ: ký tự lưu trong `trace` là `'U'`, đi lên, thì `finish` sẽ đi xuống.

=== "C++"

    ```c++ linenums="139"
        // Dùng ngăn xếp để lưu đường đi kết quả
        stack<pair<int, int>> path;

        // Nếu tồn tại đường đi đến ô finish thì mới bắt đầu cho ô finish lùi
        if (trace[finish.first][finish.second] != 'N')
        {
            // Dựa vào mảng trace để truy vết các ô nằm trước ô finish
            while (trace[finish.first][finish.second] != 'S')
            {
                // Đẩy ô finish vào ngăn xếp
                path.push(finish);

                // Tiếp tục lùi ô finish
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

            // Đẩy ô start vào ngăn xếp
            path.push(start);
        }
    ```

=== "Python"

    ```py linenums="114"
        # Dùng ngăn xếp để lưu đường đi kết quả
        path = list()

        # Nếu tồn tại đường đi đến ô finish thì mới bắt đầu cho ô finish lùi
        if trace[finish[0]][finish[1]] != 'N':
            # Dựa vào mảng trace để truy vết các ô nằm trước ô finish
            while not trace[finish[0]][finish[1]] == 'S':
                # Đẩy ô finish vào ngăn xếp
                path.append(finish.copy())

                # Tiếp tục lùi ô finish
                direction= trace[finish[0]][finish[1]]
                if direction== 'U':
                    finish[0] += 1
                elif direction== 'D':
                    finish[0] -= 1
                elif direction== 'L':
                    finish[1] += 1
                elif direction== 'R':
                    finish[1] -= 1
            
            # Đẩy ô start vào ngăn xếp
            path.append(start)
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/graph/robot-in-the-maze){:target="_blank"}.