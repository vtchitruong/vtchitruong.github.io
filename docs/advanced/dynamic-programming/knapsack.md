# Bài toán ba lô

## Khái quát về bài toán

Đây là một trong những bài toán quy hoạch động kinh điển mà dân i tờ nào cũng phải học qua.

Trong chuyện cổ tích ăn khế trả vàng, con quạ chỉ cho phép mang theo túi ba gang. Người em nhờ học lập trình đàng hoàng nên lấy vàng vừa đủ, về được tới nhà. Còn người anh không chịu học Tin học, vốn là môn học *chữa lành*, nên gom quá mức cho phép, dẫn đến kết cục "*rơi tự do*" dọc đường.

Ngữ cảnh khái quát của bài toán này trong cuộc sống là ta có quyền chọn lấy nhiều thứ nhưng chỉ trong một giới hạn nào đó của khả năng. Nếu muốn có được lợi ích lớn, ta cần tính toán nhằm đạt lợi ích lớn nhất có thể mà vẫn nằm trong giới hạn khả năng cho phép.

## Bài toán ví dụ

### Yêu cầu

Có n đồ vật, trong đó vật thứ i có trọng lượng là weight[i] và giá trị là value[i]. Ta tìm cách bỏ một số vật vào balo[^1] sao cho tổng giá trị các vật là lớn nhất mà không được vượt quá sức chứa của balo. 

Cho biết tổng giá trị lớn nhất của các vật được chọn, đồng thời liệt kê các vật theo thứ tự tăng dần của số thứ tự mỗi vật. Biết rằng vật đầu tiên có số thứ tự là 1, vật cuối cùng có số thứ tự là n.[^2]

[^1]: Xuất phát từ chữ **ballot** của tiếng Pháp.

[^2]: Nội dung chính được tham khảo từ tài liệu lập trình của Võ Ngọc Hà Sơn vnhason@gmail.com.

### Input

```pycon
6 10
6 12
3 1
3 8
7 1
4 10
3 3
```

### Ouput

```pycon
22
1 6 12
5 4 10
```

### Giải thích

Input:

- Dòng 1: 6 là số đồ vật, đánh số thứ tự từ 1 đến 6. 10 là giới hạn trong lượng của balo.
- Từ dòng 2 trở đi: Hai số lần lượt là trọng lượng và giá trị của vật.

Output:

- Dòng 1: Tổng giá trị lớn nhất của các vật được chọn.
- Từ dòng 2 trở đi: Ba số lần lượt là số thứ tự, trọng lượng và giá trị của vật.

Cụ thể, ta chọn vật 1 và vật 5. Tổng trọng lượng của chúng là 6 + 4 = 10, vừa đúng bằng trọng lượng balo. Tổng giá trị của chùng là 12 + 10 = 22, là lớn nhất trong số các lựa chọn.

### Cách giải đề xuất

#### Xây dựng bảng quy hoạch

Bảng quy hoạch `d` là mảng hai chiều gồm:

- `n + 1` hàng, tính từ `0` đến `n`, chỉ số thứ tự của vật được chọn.
- `weightLimit + 1` cột, với `weightLimit` là input trọng lượng giới hạn. 

Mỗi ô trong bảng, `d[i][w]`, lưu tổng giá trị lớn nhất khi chọn một số vật nào đó từ `0` đến `i` mà có tổng trọng lượng không vượt quá `w`.

Như vậy, `d[n][weightLimit]` là kết quả của bài toán.

#### Khởi tạo

Hàng 0: Các ô `d[0][w]` có nghĩa là chọn 0 vật, nên đều bằng `0`.

Cột 0: Các ô `d[i][0]` có nghĩa là trọng lượng giới hạn bằng 0, đồng nghĩa không thể chọn vật nào. Như vậy, các ô này cũng được gán giá trị `0`.

=== "C++"
    ``` c++ linenums="1"
        vector<vector<int>> d;
        d.resize(n + 1, vector<int>(weightLimit + 1, 0));
    ```
=== "Python"
    ``` py linenums="1"
        global d
        d = [[0 for col in range(weight_limit + 1)] for row in range(n + 1)]
    ```

Code trên cũng vô tình khởi tạo giá trị 0 cho toàn bộ bảng `d`.

#### Thực hiện quy hoạch động

Đối với các hàng tiếp theo, **hàng dưới** được tính dựa theo **hàng trên**. Cụ thể, tại mỗi ô `d[i][w]` ta xét hai trường hợp: chọn hay không chọn vật `i`.

- Nếu không chọn vật `i`, thì tổng giá trị các vật được chọn không thay đổi, nghĩa là `d[i][w] = d[i - 1][w]`.

- Nếu (muốn) chọn vật `i`, thì ta xét xem tổng giá trị khi không có vật `i` và tổng giá trị khi có thêm vật `i`, tổng nào lớn hơn.

    `d[i][w] = max(d[i][w], d[i - 1][w - weight[i]] + value[i])`

Dựa vào ý tưởng trên, ta duyệt và điền giá trị cho bảng quy hoạch `d` như sau:

Dùng vòng lặp với biến `i` duyệt từ hàng `1` đến hàng `n` (hay nói cách khác là từ vật `1` đến vật `n`):

&emsp;&emsp;Dùng vòng lặp với biến `w` duyệt từ cột `1` đến cột `weightLimit` (hay nói cách khác là giới hạn của trọng lượng từ `1` đến `weightLimit`), thực hiện hai thao tác sau:

&emsp;&emsp;&emsp;&emsp;1. Giả sử không chọn vật `i`. Ta gán giá trị vào `d[i][w]` trước rồi lấy ô này so sánh tiếp với trường hợp chọn vật `i`.

&emsp;&emsp;&emsp;&emsp;2. Nếu trọng lượng của vật `i` nhỏ hơn giới hạn `w` thì so sánh và lấy ra giá trị lớn nhất trong hai trường hợp chọn hoặc không chọn vật `i`.

=== "C++"
    ``` c++ linenums="1"
        for (int i = 1; i < n + 1; ++i)
        {          
            for (int w = 1; w < weightLimit + 1; ++w)
            {
                // suppose item i-th is not selected
                d[i][w] = d[i - 1][w];

                // re-assign d[i][w] when item i-th will be selected for better total value
                if (weight[i] <=  w)
                {
                    d[i][w] = max(d[i][w], d[i - 1][w - weight[i]] + value[i]);
                }
            }
        }
    ```
=== "Python"
    ``` py linenums="1"
        for i in range(1, n + 1):
            for w in range(1, weight_limit + 1):
                # suppose item i-th is not taken
                d[i][w] = d[i - 1][w]

                # re-assign d[i][w] when item i-th will be selected for better total value
                if weight[i] <= w:
                    d[i][w] = max(d[i][w], d[i - 1][w - weight[i]] + value[i])
    ```

#### Output

Để xuất ra các vật được chọn, ta thực hiện truy vết dựa trên bảng quy hoạch `d`.

| | 0 | 1 | 2 | 3 | 4  | 5  | 6  | 7  | 8  | 9  | 10 |
| --- | --- | --- | --- | --- | --- -| --- -| --- -| --- -| --- -| --- -| --- |
| 0 | 0 | 0 | 0 | 0 | 0  | 0  | 0  | 0  | 0  | 0  | 0  |
| 1 | 0 | 0 | 0 | 0 | 0  | 0  | 12 | 12 | 12 | 12 | 12 |
| 2 | 0 | 0 | 0 | 1 | 1  | 1  | 12 | 12 | 12 | 13 | 13 |
| 3 | 0 | 0 | 0 | 8 | 8  | 8  | 12 | 12 | 12 | 20 | 20 |
| 4 | 0 | 0 | 0 | 8 | 8  | 8  | 12 | 12 | 12 | 20 | 20 |
| 5 | 0 | 0 | 0 | 8 | 10 | 10 | 12 | 18 | 18 | 20 | 22 |
| 6 | 0 | 0 | 0 | 8 | 10 | 10 | 12 | 18 | 18 | 20 | 22 |

Bảng 1. Bảng quy hoạch `d` sau khi hoàn thành

Cụ thể, xuất phát từ ô cuối cùng `d[n][weighLimit]`, dùng vòng lặp duyệt từ hàng cuối về hàng đầu, thực hiện thao tác sau:

- Nếu **ô dưới** bằng **ô ngay trên** nó, tức `d[i][w] == d[i - 1][w]`, nghĩa là tổng giá trị không thay đổi, đồng nghĩa vật `i` không được chọn, thì ta bỏ qua ô này.

- Ngược lại, nếu hai ô này khác nhau, thì đẩy `i` vào stack, đồng thời trừ bớt trọng lượng `weight[i]` của nó để lùi cột.

    Sở dĩ phải nạp vào stack vì yêu cầu bài toán là xuất các vật theo số thứ tự tăng dần.

=== "C++"
    ``` c++ linenums="1"
        stack<int> itemStack;
        
        int wl = weightLimit;
        int i = n;
        while (i)
        {
            // The weight changes due to item i
            if (d[i][wl] != d[i - 1][wl])
            {
                itemStack.push(i);
                wl = wl - weight[i];
            }
            --i;
        }
    ```
=== "Python"
    ``` py linenums="1"
        item_stack = list()

        wl = weight_limit
        i = n
        while i:
            # The weight changes due to item i
            if not d[i][wl] == d[i - 1][wl]:
                item_stack.append(i)
                wl = wl - weight[i]
            i -= 1
    ```

### Toàn bộ chương trình

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/DynamicProgramming/tree/main/Knapsack" target="_blank">GitHub</a>.