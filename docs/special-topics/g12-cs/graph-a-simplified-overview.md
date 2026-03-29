# Khái quát về đồ thị

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khái niệm về đồ thị.

## Khái niệm

!!! note "Đồ thị"

    Là một cấu trúc toán học bao gồm tập hợp các **đỉnh** và các **cạnh** nối chúng.

    Ký hiệu: $G = (V, E)$

    Trong đó:

    - $V$: tập hợp các đỉnh, thường dùng để biểu diễn các thực thể như địa điểm hoặc người.
    - $E$: tập hợp các cạnh, dùng để biểu diễn mối quan hệ giữa hai thực thể.

Một số khái niệm liên quan:

1. **Kề nhau**:

    Hai đỉnh được gọi là kề nhau nếu có một cách nối trực tiếp giữa chúng.

    Hai cạnh được gọi là kề nhau nếu chúng cùng đi qua một đỉnh chung.

2. **Cạnh song song** là những cạnh khác nhau nhưng kết nối cùng một cặp đỉnh.

    **Khuyên** là cạnh đặc biệt mà đỉnh đầu và đỉnh cuối là một.

3. **Đường đi** là dãy các đỉnh mà mỗi cặp đỉnh liên tiếp đều kề nhau.

    **Chu trình** là đường đi khép kín, bắt đầu và kết thúc tại cùng một đỉnh.

4. **Đồ thị liên thông** là đồ thị mà giữa bất kỳ cặp đỉnh nào cũng tồn tại ít nhất một đường đi.

    **Cây** là một dạng đồ thị liên thông không chứa chu trình.

---

## Phân loại

Việc phân loại đồ thị giúp ta xác định được thuật toán nào áp dụng hiệu quả nhất.

!!! note "Đơn và đa"

    1. **Đơn đồ thị**

        Là đồ thị không có khuyên và không có cạnh song song.

    2. **Đa đồ thị**

        Là đồ thị cho phép có nhiều cạnh nối giữa cùng một cặp đỉnh.
        
        Nếu có thêm khuyên thì đồ thị có thể được gọi là **giả đồ thị**.

!!! note "Có hướng và vô hướng"

    1. **Đồ thị có hướng**

        Là độ thị mà mỗi cạnh có một hướng xác định. Nghĩa là, nếu có cạnh đi từ đỉnh `u` đến đỉnh `v` thì chỉ đi được một chiều duy nhất, không thể đi ngược từ `v` đến `u`.

    2. **Đồ thị vô hướng**

        Là đồ thị mà các cạnh không có hướng. Nghĩa là, nếu có cạnh nối hai đỉnh `u` và `v` thì có thể đi từ `u` đến `v` và ngược lại.

Ví dụ:  
Việc "follow" trên mạng xã hội X là đồ thị có hướng.  
Việc "add friend" trên mạng xã hội Facebook là đồ thị vô hướng.

!!! note "Có và không có trọng số"

    1. **Đồ thị có trọng số**

        Là đồ thị mà mỗi cạnh mang một giá trị.

        Giá trị đó có thể là khoảng cách hoặc chi phí, gọi chung là trọng số.

    2. **Đồ thị không trọng số**

        Là đồ thị mà các cạnh có vai trò như nhau.

---

## Những thao tác phổ biến

1. **Duyệt đồ thị**

    Đây là thao tác cơ bản để ghé thăm các đỉnh. Có hai phương pháp chính:
    
    - Duyệt theo chiều rộng (BFS)
    - Duyệt theo chiều sâu (DFS)

2. **Tìm đường ngắn nhất**
    
    Tùy theo loại đồ thị mà ta lựa chọn thuật toán phù hợp để bảo đảm hiệu suất:

    - BBFS: tối ưu cho đồ thị không trọng số.
    - Dijkstra: dùng cho đồ thị có trọng số không âm.
    - Bellman-Ford: xử lý được đồ thị có trọng số âm.
    - Floyd-Warshall: tìm đường đi ngắn nhất giữa mọi cặp đỉnh.

3. **Kiểm tra liên thông**
    
    Xác định các đỉnh có thể "tìm thấy" nhau hay không. Thao tác này giúp phân chia đồ thị thành các thành phần liên thông riêng biệt.

---

## Ứng dụng

1. **Mạng lưới giao thông và xã hội**

    - Đường đi ngắn nhất: tìm đường đi tối ưu trên bản đồ hoặc trong các hệ thống giao thông công cộng.
    - Mạng xã hội: tìm kiếm "bạn của bạn", đề xuất kết bạn hoặc xác định khoảng cách giữa hai người dùng.

2. **Công nghệ thông tin và AI**

    - Web crawling: các bộ máy tìm kiếm sử dụng BFS để thu thập dữ liệu từ các trang web, giúp khám phá các liên kết theo cấp độ để không bỏ sót các trang quan trọng.
    - Trí tuệ nhân tạo: giải quyết các bài toán trạng thái, chẳng hạn như giải đố hoặc trò chơi, để tìm ra phương án có số bước di chuyển ít nhất.

3. **Quản lý hệ thống và quy trình**

    - Thu dọn rác: một số ngôn ngữ lập trình sử dụng BFS để xác định các đối tượng còn đang được sử dụng trong bộ nhớ để giải phóng những phần không còn dùng đến.
    - Kiểm tra tính liên thông: xác định xem một hệ thống mạng có bị chia cắt hay không, từ đó đưa ra các phương án dự phòng.

4. **Kiểm tra đồ thị hai phía**

    BFS được dùng để phân chia các đỉnh vào hai tập hợp riêng biệt sao cho không có hai đỉnh nào trong cùng một tập hợp kề nhau. Ứng dụng này rất quan trọng trong việc sắp xếp lịch trình hoặc phân bổ tài nguyên.

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cạnh | edge |
| đỉnh | node, vertex |
| đồ thị | graph |
| đồ thị có hướng, vô hướng | directed, undirected graph |
| đồ thị có trọng số, không trọng số | weighted, unweighted graph |
| đơn đồ thị, đa đồ thị | simple graph, multigraph |