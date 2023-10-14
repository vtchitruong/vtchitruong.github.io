---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2021-12-06
---

# Tìm đường cho robot trong mê cung

Robot là loại đồ chơi thời thượng hiện nay. Trào lưu robot có vẻ đang lên khi thầy thầy chơi robot, trò trò chơi robot. Mặc dù không phải cuộc thi robot nào của học sinh phổ thông cũng đều ứng dụng thuật toán tìm đường, đây vẫn là một thuật toán thú vị nên tìm hiểu khi chơi robot.  

Đu theo trend này, bài viết mô tả bài toán tìm đường di chuyển của robot di chuyển trong mê cung. Đây cũng là ví dụ minh họa cho thuật toán BFS, mà giang hồ gọi *thuật toán loang*.

<!-- more -->

## Khái quát về bài toán

Bài toán này[^1] dùng để minh họa cho thuật toán tìm đường cơ bản là BFS. Nguyên tắc cơ bản của BFS là xét hết các phần tử của thế hệ kế cận, rồi mới đến các thế hệ xa hơn, hoặc **xoắn ốc từ trong ra ngoài, từ nhỏ đến lớn, từ hẹp đến rộng**.

[^1]: Bài toán do chủ thớt tham khảo trên Internet nhưng không còn nhớ lấy từ trang web nào.

### Yêu cầu

Cho một mê cung được mô phỏng bằng ma trận, hàng và cột đánh chỉ số bắt đầu từ 1. Trong đó những ô có giá trị `0` thì đi vào được, còn những ô có giá trị `1` thì không được.

Robot có thể di chuyển qua ô khác theo một trong bốn hướng: lên, xuống, trái và phải. Hãy tìm đường để robot di chuyển từ ô có tọa độ (r1, c1) đến ô (r2, c2), hai tọa độ này đều được cho trước.

### Input
4 7 1 3 2 6  
1001000  
0010100  
0000000  
1101000  

### Output
1 3  
1 2  
2 2  
3 2  
3 3  
3 4  
3 5  
3 6  
2 6  

### Giải thích

Trong Input, dòng dầu tiên gồm 6 số là:  

- 4 hàng và 7 cột của ma trận, đánh chỉ số từ 1.
- [1,3] là ô xuất phát và [2,6] là ô kết thúc. 

Output là đường đi từ ô xuất phát đến ô kết thúc.

<div>
    <iframe width="100%" height="230px" frameBorder=0 src="../../../../posts/robot-in-the-maze.html"></iframe>
    <p style="margin: 0">Hình 1. Minh họa input và output</p>
</div>

## Cách giải đề xuất

### Ý tưởng chính

Dựa theo thuật toán BFS, ta thực hiện *loang* như sau:

- Xuất phát từ ô `start`, lần lượt xét 4 ô liền kề, ô nào robot có thể đi vào được thì đánh dấu (để truy vết đường đi sau này) và nạp vào hàng đợi `q` (để chờ đến lượt xét các ô liền kề với nó).

- Lặp lại thao tác trên cho đến khi hàng đợi `q` không còn ô nào để xét hoặc chạm đến ô `finish`.

### Khởi tạo

Khởi tạo mảng hai chiều `trace` để đánh dấu các ô đã xét và dùng cho việc xuất đường đi kết quả.

Các phần tử trong mảng `trace` đều được đánh dấu là 'N', nghĩa là chưa đi vào (Not yet). Riêng ô `start` được đánh dấu là 'S'.

=== "C++"
    ``` c++ linenums="1"
        trace.resize(rows + 1);
        
        for (int r = 1; r < rows + 1; ++r)
        {
            trace[r].resize(cols + 1, 'N');
        }

        trace[start.first][start.second] = 'S';
    ```

=== "Python"
    ``` py linenums="1"
        global trace
        trace = [['N' for col in range(cols + 1)] for row in range(rows + 1)]
        trace[start[0]][start[1]] = 'S'
    ```

### Thực hiện BFS

1. Khai báo hàng đợi `q` và nạp ô `start` vào hàng đợi.

    === "C++"
        ``` c++ linenums="1"
            queue<pair<int, int>> q;
            q.push(start);
        ```
    === "Python"
        ``` py linenums="1"
            q = deque()
            q.append(start)
        ```

2. Sử dụng vòng lặp while để duyệt các phần tử trong hàng đợi.  

    - Trong vòng lặp, biến `current` dùng để xét phần tử đầu tiên của hàng đợi.
    - Một trong hai điều kiện để ngắt vòng lặp là ô `current` trùng với ô `finish`, nghĩa là đã tới đích. Điều kiện còn lại là hàng đợi không còn phần tử nào để xét nữa.

    === "C++"
        ``` c++ linenums="1"
            pair<int, int> current;
            pair<int, int> next;
            
            while (!q.empty())
            {
                current = q.front();

                if (current == finish)
                    return;
            
                ...
            }
        ```
    === "Python"
        ``` py linenums="1"
            while q:
                current = q[0]

                if current == finish:
                    return

                ...
        ```

3. Lần lượt xét bốn ô liền kề với ô `current` là: trên, dưới, trái và phải. Đầu tiên, xét ô-bên-trên, có những điều kiện cần phải đáp ứng như sau:

    - Thứ nhất, để robot có thể đi lên, thì robot không được nằm trên đường-biên-trên của mê cung, nghĩa là chỉ số hàng của `current` phải lớn hơn 1.
    - Thứ hai, điều kiện tiếp theo là ô-bên-trên phải đi vào được, tức ô có giá trị 0.    
    - Thứ ba, ô-bên-trên chưa được ghé thăm, tức giá trị tương ứng trong mảng `trace` là `'N'`.

    Nếu thỏa cả ba điều kiện này, ta nạp ô-bên-trên vào hàng đợi và đánh dấu là 'U', viết tắt của **Up**.

    === "C++"
        ``` c++ linenums="1"
            if (current.first > 1)
                if (trace[current.first - 1][current.second] == 'N')
                    if (maze[current.first - 1][current.second] == 0)
                    {
                        next = current;
                        next.first--;

                        q.push(next);
                        trace[next.first][next.second] = 'U';
                    }
        ```
    === "Python"
        ``` py linenums="1"
            if current[0] > 1:
                if trace[current[0] - 1][current[1]] == 'N':
                    if maze[current[0] - 1][current[1]] == 0:
                        next = current.copy()
                        next[0] -= 1
                        q.append(next)
                        trace[next[0]][next[1]] = 'U'
        ```

4. Thực hiện tương tự cho ba ô liền kề còn lại, thay đổi giá trị tương ứng cho các biến liên quan. Sau đó, *ngắt* bỏ ô `current` ra khỏi hàng đợi.

    === "C++"
        ``` c++ linenums="1"
            if (current.first < rows)
                if (trace[current.first + 1][current.second] == 'N')
                    if (maze[current.first + 1][current.second] == 0)
                    {
                        next = current;
                        next.first++;

                        q.push(next);
                        trace[next.first][next.second] = 'D';
                    }

            if (current.second > 1)
                if (trace[current.first][current.second - 1] == 'N')
                    if (maze[current.first][current.second - 1] == 0)
                    {
                        next = current;
                        next.second--;

                        q.push(next);
                        trace[next.first][next.second] = 'L';
                    }
            
            if (current.second < cols)
                if (trace[current.first][current.second + 1] == 'N')
                    if (maze[current.first][current.second + 1] == 0)
                    {
                        next = current;
                        next.second++;

                        q.push(next);
                        trace[next.first][next.second] = 'R';
                    }

            q.pop();
        ```
    === "Python"
        ``` py linenums="1"
            if current[0] < rows:
                if trace[current[0] + 1][current[1]] == 'N':
                    if maze[current[0] + 1][current[1]] == 0:
                        next = current.copy()
                        next[0] += 1
                        q.append(next)
                        trace[next[0]][next[1]] = 'D'

            if current[1] > 1:
                if trace[current[0]][current[1] - 1] == 'N':
                    if maze[current[0]][current[1] - 1] == 0:
                        next = current.copy()
                        next[1] -= 1
                        q.append(next)
                        trace[next[0]][next[1]] = 'L'

            if current[1] < cols:
                if trace[current[0]][current[1] + 1] == 'N':
                    if maze[current[0]][current[1] + 1] == 0:
                        next = current.copy()
                        next[1] += 1
                        q.append(next)
                        trace[next[0]][next[1]] = 'R'
            
            q.popleft()
        ```

### Output đường đi kết quả

Để xuất đường đi kết quả, ta truy ngược bằng cách cho ô `finish` **lui dần** về ô `start` dựa theo mảng `trace`. Trong đó, `finish` sẽ lùi **ngược hướng** với ký tự lưu trong `trace`. Ví dụ: ký tự lưu trong trace là `'U'`, đi lên, thì `finish` sẽ *đi xuống*.

=== "C++"
    ``` c++ linenums="1"
        stack<pair<int, int>>

        if (trace[finish.first][finish.second] != 'N')
        {
            while (start != finish)
            {
                p.push(finish);

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
            p.push(start);
        }
    ```
=== "Python"
    ``` py linenums="1"
        path = list()

        if trace[finish[0]][finish[1]] != 'N':
            while not trace[finish[0]][finish[1]] == 'S':
                tmp = finish.copy()
                path.append(tmp)
                t = trace[finish[0]][finish[1]]
                if t == 'U':
                    finish[0] += 1
                elif t == 'D':
                    finish[0] -= 1
                elif t == 'L':
                    finish[1] += 1
                elif t == 'R':
                    finish[1] -= 1
        
        path.append(start)
    ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/Graph/tree/main/RobotMove){:target="_blank"}.