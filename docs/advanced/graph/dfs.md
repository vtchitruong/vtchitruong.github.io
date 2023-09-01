# Tìm kiếm theo chiều sâu

## Khái quát về thuật toán DFS

DFS (Depth-First Search) là thuật toán duyệt đồ thị để khám phá và tìm đường đi trên cấu trúc dữ liệu đồ thị hoặc cây. 

Ý tưởng chính của thuật toán là xuất phát tại một đỉnh nào đó và đi đến đỉnh xa nhất có thể, trước khi quay lui về để xét tiếp các đỉnh khác.  

Ví dụ:  
Xét cây gia phả bằng DFS, ta có thể có một *đường đi* như sau:   

```
Đường đi:
Ông sơ → Ông tổ → Ông cố → Ông nội → Ba → Mình → Con mình → Cháu mình → Chắt mình → Chút mình → Chít mình  
```

Mỗi đối tượng trong đường đi trên là một đỉnh. Tại đỉnh (đối tượng) hiện hành, DFS không xét tiếp những *đối tượng* cùng thế hệ, mà xét tiếp một đối tượng thuộc thế hệ tiếp theo. Chẳng hạn: `Ông nội` sinh ra ba người con là `Bác`, `Ba` và `Chú`. Tại đỉnh `Ông nội`, DFS không xét những người cùng thế hệ với `Ông nội`, mà xét một trong những đỉnh của thế hệ kế tiếp, ví dụ như `Ba`. Từ `Ba`, xét đỉnh của thế hệ kế tiếp, có thể là `Anh mình`, có thể là `Mình`, có thể là `Em mình`. Cứ như thế, đi đến một đỉnh của thế hệ xa nhất có thể, trước khi quay về thế hệ liền trước để xét các đỉnh còn lại của thế hệ liền trước đó.  

``` mermaid
---
title: Hình 1. Minh họa một đường đi khi duyệt bằng DFS
---

graph TD
    ong_noi([Ông nội]):::currentNode --> bac([Bác])
    ong_noi ==> ba([Ba]):::currentNode
    ong_noi --> chu([Chú])
    
    ba --> anh([Anh mình])
    ba ==> minh([Mình]):::currentNode
    ba --> em([Em mình])
    
    minh ==> con_1([Con 1]):::currentNode
    minh --> con_2([Con 2])

    con_1 ==> chau_1([Cháu 1]):::currentNode
    con_1 --> chau_2([Cháu 2])

%% Link Color %%
linkStyle 1,4,6,8 stroke: #0694eb

classDef currentNode color:#fff, fill: #0694eb
```

## Các bước của thuật toán

Thuật toán DFS có thể thực hiện bằng đệ quy hoặc stack. Các bước sau đây được thể hiện theo cách đệ quy.  

:   **Bước 1:**  
    Chọn một đỉnh làm đỉnh gốc để xuất phát, đặt là đỉnh S.  

:   **Bước 2:**  
    Duyệt các đỉnh N kề với đỉnh S, lặp các thao tác:  
    &emsp;&emsp;Nếu đỉnh N chưa ghé thăm:  
    &emsp;&emsp;&emsp;&emsp;- Thực hiện các thao tác nào đó theo yêu cầu tại đỉnh N.  
    &emsp;&emsp;&emsp;&emsp;- Đánh dấu đỉnh N đã ghé thăm.  
    &emsp;&emsp;&emsp;&emsp;- Xem đỉnh N là đỉnh gốc S, gọi đệ quy đối với N để quay lại đầu bước 2.  

Mã giả:  

``` py
function dfs(S):
    for đỉnh_N in các_đỉnh_kề_của_S:        
        if đỉnh_N not in visited:
            do_something(đỉnh_N)
            visited.add(đỉnh_N)
            dfs(đỉnh_N)
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
1 2 3 5  

### Giải thích

Đồ thị có 10 đỉnh, 11 cạnh. Yêu cầu tìm đường đi từ đỉnh 1 đến đỉnh 5.  

Đường đi tìm được: 1 --> 2 --> 3 --> 5.  

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

Hàm `Dfs()` có một tham số là `current` dùng để chỉ đỉnh hiện hành ở mỗi lần gọi đệ quy. Trong lần đầu tiên gọi hàm `Dfs()`, ta truyền vào tham số là đỉnh xuất phát, đặt là `start`: 

``` c++ linenums="1"
    Dfs(start);
```

Hàm `Dfs()` hoạt động như sau:  

Dùng vòng lặp để duyệt các đỉnh kề với đỉnh `current` dựa trên danh sách kề `a`, lặp các thao tác:  
&emsp;&emsp;Giả sử `u` là một đỉnh kề đang xét. Dựa trên mảng `trace` để xét xem `u` đã ghé thăm chưa. Nếu `u` chưa ghé thăm, `trace[u] == 0`, thì đánh dấu `u` được ghé thăm từ đỉnh `current`: `trace[u] = current`, rồi gọi đệ quy `Dfs()`, truyền vào tham số là đỉnh `u`, nghĩa là tiến thêm một nấc theo ý tưởng chính là *đi xa nhất có thể*.  

=== "C++"
    ``` c++ linenums="1"
    void Dfs(int current)
    {
        // Duyệt các đỉnh kề với đỉnh current
        for (vector<int>::iterator i = a[current].begin(); i != a[current].end(); ++i)
        {
            // Nếu đỉnh *i chưa ghé thăm thì đánh dấu ghé thăm *i bằng mảng trace
            // rồi xem *i là đỉnh gốc, gọi đệ quy tiếp từ đỉnh *i
            if (!trace[*i])
            {
                trace[*i] = current;
                Dfs(*i);
            }
        }
    }
    ```

=== "Python"
    ``` py linenums="1"
    def dfs(current):
        global a, trace
            
        # Duyệt các đỉnh kề với đỉnh current
        for u in a[current]:
            # Nếu đỉnh u chưa ghé thăm thì đánh dấu ghé thăm u bằng mảng trace
            # rồi xem u là đỉnh gốc, gọi đệ quy tiếp từ đỉnh u
            if not trace[u]:
                trace[u] = current
                dfs(u)
    
    ```

Sau khi hàm `Dfs()` hoàn tất, mảng `trace` được điền đầy đủ như sau:  

| Đỉnh u | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 
| --- | --- | --- |---| --- | --- | --- | --- | --- | --- | --- |
| trace[u]| -1 | 1 | 2 | 2 | 3 | 4 | 3 | 7 | 0 | 0 | 

Nếu dựa vào mảng `trace` để in ra đường đi thì trình tự sẽ bị ngược: 5 ← 3 ← 2 ← 1. Vì vậy, ta giải quyết bằng cách: Nạp các đỉnh của đường đi vào `stack` trước, rồi duyệt `stack` để in ra, thì đường đi sẽ *thuận chiều* lại.  

Cách nạp các đỉnh của đường đi vào `stack` như sau:  

Dùng vòng lặp while, cho một biến `tmp` xuất phát từ đỉnh đích (đỉnh `finish`) lùi dần về đỉnh xuất phát (đỉnh `start`) bằng mảng `trace`. Ứng với mỗi lần *lùi*, ta nạp đỉnh tương ứng (là biến `tmp`) vào `stack`.  

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
    
    Cũng liên quan điều trên, chương trình có thể được viết theo hướng khác tốt hơn. Chương trình trong bài này chỉ có tính đề xuất, có vẻ là *một pha xử lý cồng kềnh*, chủ yếu để người học luyện ngón.  

Sau khi có stack, ta in ra đường đi bằng cách:  

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
                f << path.top() << " --> ";

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

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/Graph/tree/main/DFS" target="_blank">GitHub</a>.  


!!! abstract "Nhận xét"

    DFS không dùng để tìm ra đường đi ngắn nhất, mà chỉ dùng để tìm đường liên thông, nghĩa là có đường đi.  

    Có thể có nhiều đường đi từ đỉnh `start` đến đỉnh `finish`, nhưng DFS luôn trả về đường đi có thứ tự từ điển nhỏ nhất.

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


