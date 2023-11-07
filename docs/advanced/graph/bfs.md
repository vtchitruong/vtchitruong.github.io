# Tìm kiếm theo chiều rộng

## Khái quát về thuật toán BFS

BFS (Breadth-First Search) là thuật toán duyệt đồ thị để khám phá và tìm đường đi trên cấu trúc dữ liệu đồ thị hoặc cây.  

Ý tưởng chính của thuật toán là xuất phát tại một đỉnh nào đó và duyệt các đỉnh khác theo hướng lan rộng ra. Nói cách khác, thuật toán này xét hết các đỉnh kề với đỉnh hiện hành, các đỉnh kề này đều cùng cấp, rồi mới xét tiếp các đỉnh khác ở cấp tiếp theo. Thuật toán này vì thế còn được gọi là **thuật toán loang**.  

Ví dụ:  
Xét cây gia phả bằng BFS, ta có trình tự xét như sau:   

```
Ông cố →
Ông bác → Ông nội → Ông chú →
Các con của ông bác → Các con của ông nội (bác, ba, chú) → Các con của ông chú →
Các con của bác (anh họ 1, anh họ 2) → Các con của ba (anh, mình, em) → Các con của chú (em họ 1, em họ 2)
```

``` mermaid
---
title: Hình 1. Một phần trình tự khi duyệt bằng BFS
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

## Các bước của thuật toán

Thuật toán BFS có thể thực hiện bằng hàng đợi như sau:  

:   **Bước 1:**  
    Chọn một đỉnh làm đỉnh gốc để xuất phát, đặt là đỉnh S. Nạp đỉnh S vào hàng đợi.  

:   **Bước 2:**  
    Duyệt hàng đợi, trong khi hàng đợi vẫn còn phần tử để xét, thì lặp thao tác:  
    &emsp;&emsp;Lấy phần tử nằm ở đầu hàng đợi ra khỏi hàng đợi, đặt là đỉnh C.  
    &emsp;&emsp;Duyệt các đỉnh N kề với đỉnh C, lặp các thao tác:  
    &emsp;&emsp;&emsp;&emsp;Nếu đỉnh N chưa ghé thăm:  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Thực hiện các thao tác nào đó theo yêu cầu tại đỉnh N.  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Đánh dấu đỉnh N đã ghé thăm.  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Nạp đỉnh N vào hàng đợi.  

Mã giả:  

``` py
function bfs():
    enqueue(đỉnh_S)
    
    while queue is not empty:
        đỉnh_C = dequeue(phần_tử_đầu_queue)

        for đỉnh_N in các_đỉnh_kề_của_C:        
            if đỉnh_N not in visited:
                do_something(đỉnh_N)
                visited.add(đỉnh_N)
                enqueue(đỉnh_N)
```

## Bài toán ví dụ

### Yêu cầu

Tìm một đường đi từ đỉnh xuất phát đến đỉnh đích. Trả về -1 nếu không có đường đi.[^1]    

[^1]: Bài toán này được tham khảo từ:  
    Lê Minh Hoàng. *Giải thuật & lập trình*. Đại học Sư phạm Hà Nội, 1999-2002. 

### Input
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

### Output
1 3 5  

### Giải thích

Đồ thị có 10 đỉnh, 11 cạnh. Yêu cầu tìm đường đi từ đỉnh 1 đến đỉnh 5.  

Đường đi tìm được: 1 --> 3 --> 5.  

``` mermaid
---
title: Hình 2. Đồ thị của bài toán ví dụ
---
graph LR
    1([1]) --> 2([2]) & 3([3])
    2 --> 3 & 4([4])
    3 --> 5([5]) & 7([7]) & 8([8])
    4 --> 6([6])
    7 --> 8 --> 5
    9([9]) --> 10([10])
```

### Cách giải đề xuất

#### Khởi tạo

Trong bài này, ta muốn in ra đường đi theo trình tự từ đỉnh xuất phát đến đỉnh đích. Cho nên, ta không chỉ đánh dấu các đỉnh đã ghé thăm, mà còn phải lưu vết và truy vết. Để lưu và truy vết, ta sử dụng một mảng các số nguyên, đặt là `trace`, trong đó `trace[u] = v` với ý nghĩa liền trước đỉnh u là đỉnh v, hoặc nói cách khác, có đường đi v → u.  

Trước hết, ta khởi tạo mảng `trace` gồm toàn các phần tử 0, nghĩa là các đỉnh đều chưa có đỉnh liền trước. Riêng đỉnh xuất phát được gán -1.

=== "C++"
    ``` c++ linenums="1"
    void Init()
    {
        // Khởi tạo mảng trace gồm toàn 0, nghĩa là các đỉnh trong trace đều chưa có đỉnh liền trước
        trace.resize(vertex + 1, 0);
        
        // Trước đỉnh start không có đỉnh nào
        trace[start] = -1;
    }
    ```

=== "Python"
    ``` py linenums="1"
    def init():
        global trace
        
        # Khởi tạo mảng trace gồm toàn 0, nghĩa là các đỉnh trong trace đều chưa có đỉnh liền trước
        trace = [0] * (vertex + 1)
        
        # Trước đỉnh start không có đỉnh nào  
        trace[start] = -1
    ```

#### Thực hiện BFS

1. Nạp đỉnh `start` vào queue.  

2. Dùng vòng lặp while để duyệt `queue`, trong khi `queue` vẫn còn đỉnh để xét, thì lặp thao tác:  

    - Lấy ra đỉnh nằm ở đầu `queue`, đặt là `current`.  
    - Dùng vòng lặp để duyệt các đỉnh kề với đỉnh `current` dựa trên danh sách kề `a`, lặp các thao tác:  

    &emsp;&emsp;Giả sử `u` là một đỉnh kề đang xét. Dựa trên mảng `trace` để xét xem `u` đã ghé thăm chưa. Nếu `u` chưa ghé thăm, `trace[u] == 0`, thì đánh dấu `u` được ghé thăm từ đỉnh `current`: `trace[u] = current`, rồi nap đỉnh `u` vào hàng đợi `queue` để... đợi (!!!) tới lượt mình trở thành `current`, nghĩa là đỉnh `u` chuẩn bị trở thành một *mắt xích* tiếp theo cho tiến trình lây lan/loang/lan rộng.  

=== "C++"
    ``` c++ linenums="1"
    void Bfs()
    {
        // Khởi tạo queue, nạp đỉnh start vào queue
        queue<int> q;
        q.push(start);

        // current là biến tạm, chỉ đỉnh hiện hành
        int current;
        
        // Trong khi queue vẫn còn phần tử
        while (!q.empty())
        {
            // thì gán phần tử nằm ở đầu queue vào biến tạm current
            current = q.front();

            // Duyệt các đỉnh kề với đỉnh current
            for (vector<int>::iterator i = a[current].begin(); i != a[current].end(); ++i)
            {
                // Nếu đỉnh *i chưa ghé thăm thì đánh dấu ghé thăm *i bằng mảng trace
                // rồi đẩy *i vào queue
                if (!trace[*i])
                {
                    trace[*i] = current;
                    q.push(*i);                    
                }
            }

            // Xóa bỏ phần tử nằm ở đầu queue, là đỉnh current
            q.pop();
        }
    }
    ```

=== "Python"
    ``` py linenums="1"
    def bfs():
        global start
        global a, trace

        # Khởi tạo queue, nạp đỉnh start vào queue
        q = queue.Queue()
        q.put(start)
        
        # current là biến tạm, chỉ đỉnh hiện hành
        current = 0
        
        # Trong khi queue vẫn còn phần tử
        while q.empty() == False:
            # thì gán phần tử nằm ở đầu queue vào biến tạm current và xóa luôn khỏi queue
            current = q.get()
            
            # Duyệt các đỉnh kề với đỉnh current
            for u in a[current]:
                # Nếu đỉnh u chưa ghé thăm thì đánh dấu ghé thăm u bằng mảng trace
                # rồi đẩy u vào queue
                if not trace[u]:
                    trace[u] = current
                    q.put(u)
    ```

Sau khi hàm `Bfs()` hoàn tất, mảng `trace` được điền đầy đủ như sau:  

| Đỉnh u | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 
| --- | --- | --- |---| --- | --- | --- | --- | --- | --- | --- |
| trace[u]| -1 | 1 | 1 | 2 | 3 | 4 | 3 | 3 | 0 | 0 | 

#### Output

Nếu dựa vào mảng `trace` để in ra đường đi thì trình tự sẽ bị ngược: 5 ← 3 ← 1. Vì vậy, ta giải quyết bằng cách: Nạp các đỉnh của đường đi vào `stack` trước, rồi duyệt `stack` để in ra, thì đường đi sẽ *thuận chiều* lại.  

Cách nạp các đỉnh của đường đi vào `stack` như sau:  

1. Dùng vòng lặp while, cho một biến `tmp` xuất phát từ đỉnh đích (đỉnh `finish`) lùi dần về đỉnh xuất phát (đỉnh `start`) bằng mảng `trace`. Ứng với mỗi lần *lùi*, ta nạp đỉnh tương ứng (là biến `tmp`) vào `stack`.  

    === "C++"
        ``` c++ linenums="1"
            // Khai báo stack path lưu các đỉnh của đường đi cần tìm
            stack<int> path; 

            // Dùng tmpFinish để không làm mất giá trị của finish khi truy ngược
            int tmpFinish = finish;

            // Nếu có đường đi đến đỉnh finish thì mới thực hiện truy ngược trace
            if (trace[tmpFinish])
            {
                // Dựa vào mảng trace, cho tmpFinish "lùi" dần về start
                while (tmpFinish != start)
                {
                    // Trong khi chưa đụng đỉnh start, thì nạp đỉnh tmpFinish vào đường đi
                    path.push(tmpFinish);

                    // "Lùi" tmpFinish về đỉnh liền trước đó
                    tmpFinish = trace[tmpFinish];
                }

                // Nạp đỉnh start vào đường đi
                path.push(start);
            }
        ```
    === "Python"
        ``` py linenums="1"
            # Khai báo stack path lưu các đỉnh của đường đi cần tìm
            # Module collections của Python không có kiểu stack
            # Thay vào đó deque dùng để biểu diễn cả queue lẫn stack
            path = deque()

            # Dùng tmpFinish để không làm mất giá trị của finish khi truy ngược
            tmpFinish = finish
            
            # Nếu có đường đi đến đỉnh finish thì mới thực hiện truy ngược trace
            if trace[tmpFinish]:
                # Dựa vào mảng trace, cho tmpFinish "lùi" dần về start
                while tmpFinish != start:
                    # Trong khi chưa đụng đỉnh start, thì nạp đỉnh tmpFinish vào đường đi
                    path.append(tmpFinish)
                    
                    # "Lùi" tmpFinish về đỉnh liền trước đó
                    tmpFinish = trace[tmpFinish]
                
                # Nạp đỉnh start vào đường đi
                path.append(start)
        ```
    !!! note "Lưu ý"
        Stack ở đây chỉ mang ý nghĩa lật ngược/đảo chiều trình tự hiển thị của đường đi, chứ không nhất thiết phải đúng kiểu dữ liệu `stack`. Ta có thể sử dụng bất kỳ kiểu dữ liệu nào miễn là phù hợp, tiện lợi, có hỗ trợ đảo chiều. Chẳng hạn, mặc dù C++ và Python đều có kiểu `stack`, ta vẫn có thể sử dụng kiểu `vector` đối với C++ hoặc `list` đối với Python, vì chúng đều có hàm `reverse()`.
        
        Tương tự, queue trong hàm Bfs() mang ý nghĩa là cách thức duyệt và xử lý các đỉnh. Ta hoàn toàn có thể sử dụng những kiểu dữ liệu khác miễn là phù hợp, có hỗ trợ lấy ra phần tử nằm ở đầu và nạp phần tử vào từ đuôi.  

        Cũng liên quan điều trên, chương trình có thể được viết theo hướng khác tốt hơn. Chương trình trong bài này chỉ có tính đề xuất, có vẻ là *một pha xử lý cồng kềnh*, chủ yếu để người học luyện ngón.  

2. Sau khi có stack, ta in ra đường đi bằng cách:  

    Dùng vòng lặp while để duyệt stack, lặp các thao tác:  
    &emsp;&emsp;- In ra đỉnh đầu của stack.  
    &emsp;&emsp;- Xóa bỏ đỉnh đầu này.  

    === "C++"
        ``` c++ linenums="1"
            // Nếu không có phần tử nào trong stack path
            // thì in ra -1, nghĩa là không có đường đi
            if (path.empty())
            {
                f << -1;
            }
            else
            {
                // Trong khi stack path vẫn còn phần tử
                while (!path.empty())
                {
                    // thì in ra phần tử nằm ở đầu stack
                    f << path.top();

                    // nếu stack path còn hơn một phần tử thì in dấu phân cách
                    if (path.size() != 1)
                        f << " --> ";

                    // rồi xóa bỏ phần tử đầu stack này
                    path.pop();
                }
            }
        ```
    === "Python"
        ``` py linenums="1"
            # Nếu không có phần tử nào trong stack path
            # thì in ra -1, nghĩa là không có đường đi
            if len(path) == 0:
                f.write(str(-1))
            else:      
                # Đảo chiều của path rồi ghép thành chuỗi
                output_path = ' --> '.join([str(u) for u in reversed(path)])
                f.write(output_path)
        ```

### Toàn bộ chương trình

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/Graph/tree/main/BFS" target="_blank">GitHub</a>.

!!! abstract "Nhận xét"

    Vì BFS duyệt các đỉnh theo từng cấp/từng thế hệ, hết cấp trên mới đến cấp dưới tiếp theo, nên hàng đợi của BFS chứa các đỉnh theo thứ tự cấp/thế hệ tăng dần, trong cùng cấp thì thứ tự các đỉnh cũng tăng dần. Bằng cách đó, hàng đợi trở thành trình tự duyệt của tất cả các đỉnh. Nói cách khác, một đỉnh muốn biết, từ đỉnh xuất phát, khi nào tới lượt mình, thì *nhìn* vào hàng đợi.  

    Cũng vì thế, kết quả của BFS chính là đường đi ngắn nhất từ đỉnh xuất phát đến một đỉnh nào đó. Và điều này đúng với đồ thị không có trọng số, sai đối với đồ thị có trọng số.  

## So sánh DFS và BFS

Cả hai thuật toán đều được dùng để duyệt đồ thị hoặc cây. Độ phức tạp đều là $O(số đỉnh + số cạnh)$.   

Những điểm khác nhau được thể hiện trong bảng sau:  

| &nbsp;| DFS | BFS |
| --- | --- | --- |
| Chiến lược | Đi đến đỉnh xa nhất của riêng một nhánh trước khi quay lui. | Đi hết các đỉnh trong cùng cấp, rồi mới đến các đỉnh ở cấp khác. |
| Ưu tiên duyệt đỉnh | Ưu tiên đi sâu hơn ưu tiên các đỉnh anh em. | Ưu tiên các đỉnh anh em cùng cấp hơn ưu tiên cấp tiếp theo. |
| Cấu trúc dữ liệu sử dụng | Đệ quy, ngăn xếp | Hàng đợi |
| Bộ nhớ | Trong trường hợp xấu nhất, đồ thị phức tạp, có thể dẫn đến tràn bộ nhớ do gọi đệ quy quá nhiều. | Thường sử dụng nhiều bộ nhớ hơn do phải lưu tất cả đỉnh trong cùng một cấp. |
| Khả năng hoàn tất | Có thể không hoàn tất nếu gặp phải đồ thị có chu trình (đường đi tuần hoàn giữa các đỉnh). | Hoàn tất được, miễn là đồ thị có số đỉnh hữu hạn và các đỉnh đều liên thông. |
| Thứ tự các đỉnh của đường đi kết quả | Có thứ tự từ điển nhỏ nhất (trong số các phương án). | Có thứ tự khoảng cách tăng dần tính từ đỉnh xuất phát. |
| Đường đi ngắn nhất | Không đảm bảo tìm được đường đi ngắn nhất. | Đảm bảo tìm được đường đi ngắn nhất đối với đồ thị không trọng số. |
| Ứng dụng | Tìm đường trong mê cung, phát hiện chu trình, khám phá các cây có kích thước lớn. | Tìm đường trong mê cung, tìm đường đi ngắn nhất, giải đố, phân tích mạng. |