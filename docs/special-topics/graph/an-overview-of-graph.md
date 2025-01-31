# Khái quát về đồ thị

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một vài khái niệm chung về đồ thị.

## Khái niệm

1. **Đồ thị** là một cấu trúc bao gồm tập hợp các **đỉnh** và tập hợp các **cạnh** nối giữa các đỉnh.

    Ký hiệu: G = (V, E)

    Trong đó:

    - G: đồ thị
    - V: tập hợp các đỉnh
    - E: tập hợp các cạnh

2. **Đỉnh**

    Là điểm trong đồ thị, thường dùng để biểu diễn các thực thể như địa điểm, người hoặc đối tượng.

3. **Cạnh**

    Là kết nối giữa hai đỉnh, biểu diễn mối quan hệ hoặc sự tương tác giữa hai thực thể.
    
    Cạnh có thể có hướng hoặc không có hướng.

4. **Hai đỉnh kề nhau** là hai đỉnh được nối với nhau bằng một cạnh.

5. **Hai cạnh kề nhau** là hai cạnh có chung một đỉnh.

6. **Cạnh song song** là những cạnh khác nhau nhưng kết nối cùng một cặp đỉnh.

7. **Khuyên** là cạnh đặc biệt mà đỉnh đầu và đỉnh cuối là một.

8. **Đường đi** là dãy các đỉnh nối với nhau bởi các cạnh.

9. **Chu trình** là đường đi bắt đầu và kết thúc tại cùng một đỉnh.

10. **Đồ thị liên thông** là đồ thị có đường đi giữa mọi cặp đỉnh.

11. **Cây** là đồ thị liên thông không có chu trình.

## Phân loại

1. **Đơn đồ thị**

    Là đồ thị không có khuyên và không có cạnh song song.

2. **Đa đồ thị**

    Là đồ thị có khuyên hoặc cạnh song song.

3. **Đồ thị có hướng**

    Mỗi cạnh có một hướng xác định, nghĩa là nếu có cạnh từ đỉnh u đến v thì chỉ có thể đi từ u đến v, mà không thể đi ngược từ v đến u.

4. **Đồ thị vô hướng**

    Các cạnh không có hướng, nghĩa là nếu có cạnh nối hai đỉnh u và v thì có thể đi từ u đến v và ngược lại.
   
5. **Đồ thị có trọng số**

    Mỗi cạnh được gán một giá trị, thường gọi là trọng số, dùng để biểu diễn độ dài, chi phí hoặc khối lượng của mối quan hệ.
   
6. **Đồ thị không trọng số**

    Các cạnh không có trọng số, chỉ đơn thuần thể hiện mối quan hệ giữa các đỉnh.

## Những thao tác phổ biến

1. **Duyệt đồ thị**

    Có hai phương pháp chính:
    
    - **Duyệt theo chiều sâu**
    - **Duyệt theo chiều rộng**

2. **Tìm đường ngắn nhất**

    Để tìm đường đi ngắn nhất giữa hai đỉnh, ta sử dụng một số thuật toán phổ biến như:
    
    - **Dijkstra**
    - **Bellman-Ford**
    - **Floyd-Warshall** 

3. **Kiểm tra liên thông**

    Là xác định xem các đỉnh có thể kết nối với nhau hay không.

## Ứng dụng

Đồ thị đóng một vai trò quan trọng trong khoa học máy tính, đặc biệt trong việc biểu diễn và xử lý các mối quan hệ giữa các đối tượng.

Đồ thị giúp mô hình hóa nhiều vấn đề thực tế, chẳng hạn như:

- Mô phỏng mạng lưới giao thông, mạng xã hội.
- Giải các bài toán về tối ưu hóa như tìm đường đi ngắn nhất, giải quyết luồng mạng.
- Xác định chu trình trong các quy trình hoặc công việc (sơ đồ Gantt, sơ đồ mạng).

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cạnh | edge |
| cạnh song song | parallel edges |
| chu trình | cycle |
| duyệt đồ thị | graph traversal |
| duyệt theo chiều sâu | DFS – Depth First Search |
| duyệt theo chiều rộng | BFS – Breadth First Search |
| đỉnh | node, vertex |
| đồ thị | graph |
| đồ thị có hướng | directed graph |
| đồ thị vô hướng | undirected graph |
| đồ thị liên thông | connected graph |
| đường đi | path |
| kề nhau | adjacent |
| khuyên | self-loop |
| tìm đường ngắn nhất | finding shortest path |