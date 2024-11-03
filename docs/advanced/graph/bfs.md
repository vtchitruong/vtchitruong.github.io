# Tìm kiếm theo chiều rộng

## Khái quát

**BFS** (Breadth-First Search) là thuật toán duyệt đồ thị để khám phá hoặc tìm đường đi trên cấu trúc dữ liệu đồ thị hoặc cây.

Ý tưởng chính của thuật toán là xuất phát từ một đỉnh nào đó, duyệt các đỉnh khác theo hướng lan rộng ra.

Nói cách khác, thuật toán này duyệt hết các đỉnh kề (hoặc cùng cấp) với đỉnh đang xét, rồi mới duyệt tiếp các đỉnh ở cấp tiếp theo. Vì thế, thuật toán này còn được gọi là **thuật toán loang**.

Ví dụ:  
Xét cây gia phả bằng BFS, ta có trình tự duyệt như sau:   

```
Ông cố →
Ông bác → Ông nội → Ông chú →
Các con của ông bác → Các con của ông nội (bác, ba, chú) → Các con của ông chú →
Các con của bác (anh họ 1, anh họ 2) → Các con của ba (anh, mình, em) → Các con của chú (em họ 1, em họ 2)
```

``` mermaid
---
title: Một phần trình tự khi duyệt bằng BFS
---
graph LR
    subgraph "Thế hệ 1"
        direction LR
        ong_noi([Ông nội])
    end

    subgraph "Thế hệ 2"
        direction LR
        bac([Bác]) --> ba([Ba]) --> chu([Chú])
    end

    subgraph "Thế hệ 3"
        direction LR
        anh([Anh]) --> minh([Mình]) --> em([Em])        
    end

    subgraph "Thế hệ 4"
        direction LR                
        con_1([Con 1]) --> con_2([Con 2])
    end

    ong_noi --> bac
    chu --> anh
    em --> con_1
```

## Các bước thực hiện

Trước hết, chọn một đỉnh làm đỉnh gốc để xuất phát, gọi là đỉnh `start`. Nạp đỉnh `start` vào hàng đợi.

Thuật toán BFS có thể thực thi bằng hàng đợi như sau:  

Duyệt hàng đợi, trong khi hàng đợi vẫn còn phần tử để duyệt, thì lặp thao tác:

- Lấy phần tử nằm ở đầu ra khỏi hàng đợi, gọi là đỉnh `current`.
- Duyệt các đỉnh `v` kề với đỉnh `current`, lặp các thao tác:    
    - Nếu đỉnh `v` chưa ghé thăm thì:
        - Thực hiện các thao tác nào đó theo yêu cầu tại đỉnh `v`.  
        - Đánh dấu đỉnh `v` đã ghé thăm.  
        - Nạp đỉnh `v` vào hàng đợi.  

Mã giả cho mô tả trên như sau:

```py
function bfs():
    enqueue(start)
    
    while queue is not empty:
        current = dequeue(phần_tử_đầu_queue)

        for v in các_đỉnh_kề_của_đỉnh_current:
            if v not in visited:
                do_something(v)
                visited.append(v)
                enqueue(v)
```

## Bài toán

### Yêu cầu

Tìm một đường đi từ đỉnh xuất phát đến đỉnh đích. Trả về -1 nếu không có đường đi.[^1]    

[^1]: Lê Minh Hoàng, Giải thuật và lập trình. Hà Nội: Nhà xuất bản Đại học Sư phạm Hà Nội, 1999-2002.

### Input

```pycon
10 11 1 5
1 2
1 3
2 3
2 4
3 5
3 7
3 8
4 6
7 8
8 5
9 10
```

### Output

```pycon
1 3 5
```

### Giải thích

Đồ thị có 10 đỉnh, 11 cạnh. Yêu cầu tìm đường đi từ đỉnh 1 đến đỉnh 5.

Đường đi tìm được: 1 --> 3 --> 5.

``` mermaid
---
title: Đồ thị của bài toán ví dụ
---
graph LR
    1([1]) --> 2([2]) & 3([3])
    2 --> 3 & 4([4])
    3 --> 5([5]) & 7([7]) & 8([8])
    4 --> 6([6])
    7 --> 8 --> 5
    9([9]) --> 10([10])
```

## Cách giải đề xuất

### Khởi tạo

Trong bài này, ta muốn in ra đường đi theo trình tự từ đỉnh xuất phát đến đỉnh đích. Cho nên, ta không chỉ đánh dấu các đỉnh đã ghé thăm, mà còn phải lưu vết và truy vết.

Do đó, thay vì sử dụng mảng `visited`, ta sử dụng mảng `trace`, với `trace[u] = v`, nghĩa là liền trước đỉnh `u` là đỉnh `v`, hoặc nói cách khác, có đường đi từ `v` đến `u`.

Ban đầu, ta khởi tạo mảng `trace` gồm toàn các phần tử `0`, nghĩa là các đỉnh đều chưa có đỉnh liền trước. Riêng đỉnh xuất phát được gán `-1`.

=== "C++"

    ```c++ linenums="1"
    void init()
    {
        // Khởi tạo mảng trace gồm toàn 0, nghĩa là tất cả đỉnh đều chưa có đỉnh liền trước
        trace.resize(vertex + 1, 0);
        
        // Trước đỉnh start không có đỉnh nào
        trace[start] = -1;
    }
    ```

=== "Python"

    ```py linenums="1"
    def init():
        global trace
        
        # Khởi tạo mảng trace gồm toàn 0, nghĩa là tất cả đỉnh đều chưa có đỉnh liền trước
        trace = [0] * (vertex + 1)
        
        # Trước đỉnh start không có đỉnh nào  
        trace[start] = -1
    ```

### Thực hiện BFS

1. Nạp đỉnh `start` vào hàng đợi `q`.

2. Dùng vòng lặp while để duyệt hàng đợi `q`, trong khi `q` vẫn còn đỉnh để duyệt, thì lặp thao tác:

    - Lấy ra đỉnh nằm ở đầu hàng đợi `q`, gọi là `current`.
    - Dùng vòng lặp để duyệt các đỉnh kề với đỉnh `current` (dựa trên danh sách kề `A`), lặp các thao tác:  

        - Giả sử `u` là một đỉnh kề đang xét. Dựa trên mảng `trace` để xét xem `u` đã ghé thăm chưa.
            - Nếu `u` chưa ghé thăm: `trace[u] == 0` thì đánh dấu `u` được ghé thăm từ đỉnh `current`: `trace[u] = current`.
            - Nạp đỉnh `u` vào hàng đợi `q` để... đợi (!!!) đến lượt mình trở thành `current`. (Nghĩa là đỉnh `u` chuẩn bị trở thành *"mắt xích"* tiếp theo cho tiến trình loang/lây lan/lan rộng.)

=== "C++"

    ```c++ linenums="1"
    void bfs()
    {
        // Khởi tạo hàng đợi q, nạp đỉnh start vào q
        queue<int> q;
        q.push(start);

        // current là biến tạm, chỉ đỉnh hiện hành
        int current;
        
        // Trong khi hàng đợi q vẫn còn phần tử
        while (!q.empty())
        {
            // thì gán phần tử nằm ở đầu hàng đợi q vào biến tạm current
            current = q.front();

            // Duyệt các đỉnh kề với đỉnh current
            for (vector<int>::iterator i = A[current].begin(); i != A[current].end(); ++i)
            {
                // Nếu đỉnh *i chưa ghé thăm thì đánh dấu ghé thăm *i bằng mảng trace
                // rồi đẩy đỉnh *i vào hàng đợi q
                if (!trace[*i])
                {
                    trace[*i] = current;
                    q.push(*i);
                    
                }
            }

            // Xóa bỏ phần tử nằm ở đầu hàng đợi q, là đỉnh current
            q.pop();
        }
    }
    ```

=== "Python"

    ```py linenums="1"
    def bfs():
        global start
        global A, trace

        # Khởi tạo hàng đợi q, nạp đỉnh start vào q
        q = queue.Queue()
        q.put(start)
        
        # current là biến tạm, chỉ đỉnh hiện hành
        current = 0
        
        # Trong khi hàng đợi q vẫn còn phần tử
        while q.empty() == False:
            # thì gán phần tử nằm ở đầu hàng đợi q vào biến tạm current và xóa luôn khỏi hàng đợi
            current = q.get()
            
            # Duyệt các đỉnh kề với đỉnh current
            for u in A[current]:
                # Nếu đỉnh u chưa ghé thăm thì đánh dấu ghé thăm u bằng mảng trace
                # rồi đẩy đỉnh u vào hàng đợi q
                if not trace[u]:
                    trace[u] = current
                    q.put(u)
    ```

Sau khi hàm `bfs()` hoàn tất, mảng `trace` được điền đầy đủ như sau:  

| Đỉnh `u` | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 
| --- | --- | --- |---| --- | --- | --- | --- | --- | --- | --- |
| `trace[u]`| -1 | 1 | 1 | 2 | 3 | 4 | 3 | 3 | 0 | 0 | 

### Xuất output

Nếu dựa vào mảng `trace` để in ra đường đi thì trình tự sẽ bị ngược: 5 ← 3 ← 1. Do đó, ta giải quyết tình huống này bằng cách: nạp các đỉnh của đường đi vào ngăn xếp, gọi ngăn xếp là `path`, rồi duyệt `path` để in ra.

Cách nạp các đỉnh của đường đi vào `path` như sau:  

1\. Dùng vòng lặp while:

- Dựa vào mảng `trace`, cho biến `tmp_finish` xuất phát từ đỉnh đích (đỉnh `finish`) lùi dần về đỉnh xuất phát (đỉnh `start`).
- Ứng với mỗi lần *lùi*, ta nạp đỉnh `tmp_finish` vào `path`.

=== "C++"

    ```c++ linenums="1"
        // Khai báo ngăn xếp path lưu các đỉnh của đường đi cần tìm
        stack<int> path; 

        // Dùng tmp_finish để không làm mất giá trị của finish khi truy ngược
        int tmp_finish = finish;

        // Nếu có đường đi đến đỉnh finish thì mới thực hiện truy ngược trace
        if (trace[tmp_finish])
        {
            // Dựa vào mảng trace, cho tmp_finish "lùi" dần về start
            while (tmp_finish != start)
            {
                // Trong khi chưa đụng đỉnh start, thì nạp đỉnh tmp_finish vào đường đi
                path.push(tmp_finish);

                // "Lùi" tmp_finish về đỉnh liền trước đó
                tmp_finish = trace[tmp_finish];
            }

            // Nạp đỉnh start vào đường đi
            path.push(start);
        }
    ```
=== "Python"

    ```py linenums="1"
        # Khai báo ngăn xếp path lưu các đỉnh của đường đi cần tìm
        path = deque() # (1)!

        # Dùng tmp_finish để không làm mất giá trị của finish khi truy ngược
        tmp_finish = finish
        
        # Nếu có đường đi đến đỉnh finish thì mới thực hiện truy ngược trace
        if trace[tmp_finish]:
            # Dựa vào mảng trace, cho tmp_finish "lùi" dần về start
            while tmp_finish != start:
                # Trong khi chưa đụng đỉnh start, thì nạp đỉnh tmp_finish vào đường đi
                path.append(tmp_finish)
                
                # "Lùi" tmp_finish về đỉnh liền trước đó
                tmp_finish = trace[tmp_finish]
            
            # Nạp đỉnh start vào đường đi
            path.append(start)
    ```
    { .annotate }

    1.  Module `collections` của Python không có kiểu stack. Thay vào đó, `deque` dùng để biểu diễn cả queue lẫn stack.

!!! note "Lưu ý"

    Stack ở đây chỉ dùng cho mục đích lật ngược/đảo chiều trình tự hiển thị của đường đi, chứ không nhất thiết phải đúng kiểu dữ liệu `stack`. Ta có thể sử dụng bất kỳ kiểu dữ liệu nào miễn là tiện lợi, có hỗ trợ đảo chiều, chẳng hạn như: kiểu `vector` đối với C++ hoặc `list` đối với Python. Chúng chúng đều có hàm `reverse()` hoặc đều có thể duyệt ngược bằng vòng lặp for.
    
    Tương tự, queue trong hàm `bfs()` chỉ dùng để minh hoạ việc duyệt theo hàng đợi. Ta hoàn toàn có thể sử dụng những kiểu dữ liệu khác miễn là phù hợp, có hỗ trợ lấy phần tử ra ở đầu và nạp phần tử vào cuối.

    Cũng liên quan điều trên, chương trình có thể được viết theo hướng khác tốt hơn. Chương trình trong bài này chỉ có tính đề xuất, có vẻ là *một pha xử lý cồng kềnh*, chủ yếu để người học luyện ngón.

2\. Sau khi có ngăn xếp `path`, ta in ra đường đi bằng cách:  

Dùng vòng lặp while để duyệt `path`, lặp các thao tác:

- In ra phần tử nằm ở đầu của `path`.
- Xóa bỏ phần tử này.

=== "C++"

    ```c++ linenums="1"
        // Nếu không có phần tử nào trong ngăn xếp path
        // thì in ra -1, nghĩa là không có đường đi
        if (path.empty())
        {
            cout << -1;
        }
        else
        {
            // Trong khi ngăn xếp path vẫn còn phần tử
            while (!path.empty())
            {
                // thì in ra phần tử nằm ở đầu ngăn xếp
                cout << path.top();

                // nếu ngăn xếp path còn hơn một phần tử thì in dấu phân cách
                if (path.size() != 1)
                    cout << " --> ";

                // rồi xóa bỏ phần tử đầu ngăn xếp này
                path.pop();
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        with open(output_file, 'w') as f:
            # Nếu không có phần tử nào trong ngăn xếp path
            # thì in ra -1, nghĩa là không có đường đi
            if len(path) == 0:
                f.write(str(-1))
            else:
                # Đảo chiều của path rồi ghép thành chuỗi
                output_path = ' --> '.join([str(u) for u in reversed(path)])
                f.write(output_path)
    ```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/Graph/tree/main/BFS" target="_blank">GitHub</a>.

## Nhận xét chung

Vì BFS duyệt các đỉnh theo từng cấp/từng thế hệ, hết cấp trên mới đến cấp dưới tiếp theo, nên hàng đợi của BFS chứa các đỉnh theo thứ tự cấp/thế hệ tăng dần, trong cùng cấp thì thứ tự các đỉnh cũng tăng dần. Bằng cách này, hàng đợi trở thành trình tự duyệt của tất cả đỉnh. Nói cách khác, một đỉnh muốn biết khi nào đến lượt mình, tính từ đỉnh xuất phát, thì "*nhìn*" vào hàng đợi.

Cũng vì thế, kết quả của BFS chính là đường đi ngắn nhất từ đỉnh xuất phát đến một đỉnh nào đó. Điều này đúng với đồ thị không có trọng số và sai đối với đồ thị có trọng số.

## So sánh DFS và BFS

Cả hai thuật toán đều được dùng để duyệt đồ thị hoặc cây. Độ phức tạp đều là $O(số đỉnh + số cạnh)$.

Những điểm khác nhau được thể hiện trong bảng sau:  

| | DFS | BFS |
| --- | --- | --- |
| Chiến lược | Đi đến đỉnh xa nhất của riêng một nhánh trước khi quay lui. | Đi hết các đỉnh trong cùng cấp, rồi mới đến các đỉnh ở cấp khác. |
| Ưu tiên duyệt đỉnh | Ưu tiên duyệt sâu hơn ưu tiên các đỉnh anh em. | Ưu tiên các đỉnh anh em cùng cấp hơn ưu tiên cấp tiếp theo. |
| Cấu trúc dữ liệu sử dụng | Đệ quy, ngăn xếp | Hàng đợi |
| Bộ nhớ | Trong trường hợp xấu nhất, đồ thị phức tạp, có thể dẫn đến tràn bộ nhớ do gọi đệ quy quá nhiều. | Thường sử dụng nhiều bộ nhớ hơn do phải lưu tất cả đỉnh trong cùng một cấp. |
| Khả năng hoàn tất | Có thể không hoàn tất nếu gặp phải đồ thị có chu trình (đường đi tuần hoàn giữa các đỉnh). | Hoàn tất được, miễn là đồ thị có số đỉnh hữu hạn và các đỉnh đều liên thông. |
| Thứ tự các đỉnh của đường đi kết quả | Có thứ tự từ điển nhỏ nhất (trong số các lời giải). | Có thứ tự khoảng cách tăng dần tính từ đỉnh xuất phát. |
| Đường đi ngắn nhất | Không đảm bảo tìm được đường đi ngắn nhất. | Đảm bảo tìm được đường đi ngắn nhất đối với đồ thị không trọng số. |
| Ứng dụng | Tìm đường trong mê cung, phát hiện chu trình, khám phá các cây có kích thước lớn. | Tìm đường trong mê cung, tìm đường đi ngắn nhất, giải đố, phân tích mạng. |