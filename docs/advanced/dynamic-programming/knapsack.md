# Ba lô

## Khái quát

Trong chuyện cổ tích ăn khế trả vàng, con quạ chỉ cho phép mang theo túi ba gang. Người em nhờ học lập trình đàng hoàng nên lấy vàng vừa đủ, về được tới nhà. Còn người anh không chịu học Tin học, nên gom quá mức cho phép, dẫn đến kết cục "*rơi tự do*" dọc đường.

Bài toán trình bày dưới đây là một ví dụ về quy hoạch động và có thể được xếp vào dạng bài toán **chọn các vật sao cho tổng giá trị là lớn nhất mà không vượt quá trọng lượng cho phép**.

## Bài toán

### Yêu cầu

Có `n` đồ vật, trong đó vật thứ `i` có trọng lượng là `weight[i]` và giá trị là `value[i]`. Ta tìm cách chọn một số vật và đặt vào balo (1) sao cho tổng giá trị các vật được chọn là lớn nhất mà không được vượt quá sức chứa của balo. 
{ .annotate }

1.  Xuất phát từ chữ **ballot** của tiếng Pháp.

Viết chương trình cho biết tổng giá trị lớn nhất của các vật được chọn, đồng thời liệt kê các vật theo số thứ tự tăng dần. Biết rằng vật đầu tiên có số thứ tự là `1`, vật cuối cùng có số thứ tự là `n`.[^1]

[^1]: Tài liệu lập trình của Võ Ngọc Hà Sơn vnhason@gmail.com.

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

- Dòng thứ nhất: 6 là số đồ vật, đánh số thứ tự từ 1 đến 6. 10 là giới hạn trong lượng của balo.
- Từ dòng thứ hai trở đi: hai số lần lượt là trọng lượng và giá trị của vật.

Output:

- Dòng thứ nhất: tổng giá trị của các vật được chọn và là lớn nhất.
- Từ dòng thứ hai trở đi: ba số lần lượt là số thứ tự, trọng lượng và giá trị của vật được chọn.

Cụ thể, ta chọn vật 1 và vật 5. Tổng trọng lượng của chúng là 6 + 4 = 10, vừa đúng bằng trọng lượng balo. Tổng giá trị của chúng là 12 + 10 = 22, là lớn nhất trong số các cách lựa chọn.

## Cách giải đề xuất

### Xây dựng bảng quy hoạch

Bảng quy hoạch `D` là mảng hai chiều gồm:

- `n + 1` hàng, tính từ `0` đến `n`, chỉ số thứ tự của vật được chọn.
- `weight_limit + 1` cột, với `weight_limit` là giới hạn trọng lượng của balo. 

Mỗi phần tử `D[i][w]` lưu tổng giá trị lớn nhất khi chọn một số vật nào đó trong phạm vi `[0..i]` mà tổng trọng lượng không vượt quá `w`.

Như vậy, `D[n][weight_limit]` là kết quả của bài toán.

**Bước 1:** Khởi tạo

- Hàng `0`: nghĩa là chọn `0` vật, tức tổng giá trị là 0, nên ta gán `0` cho tất cả phần tử `D[0][w]`.
- Cột `0`: nghĩa là giới hạn trọng lượng là 0, tức không thể chọn vật nào cả, nên ta cũng gán `0` cho tất cả phần tử `D[i][0]`.

=== "C++"

    ```c++ linenums="1"
        // Khởi tạo giá trị 0 cho toàn bảng quy hoạch
        D.resize(n + 1, vector<int>(weight_limit + 1, 0)); // (1)!
    ```
    { .annotate }

    1.  Dòng lệnh này *vô tình* khởi tạo giá trị `0` cho toàn bộ bảng quy hoạch.

=== "Python"

    ```py linenums="1"
        # Khởi tạo giá trị 0 cho toàn bảng quy hoạch
        D = [[0 for col in range(weight_limit + 1)] for row in range(n + 1)] # (1)!
    ```
    { .annotate }

    1.  Dòng lệnh này *vô tình* khởi tạo giá trị `0` cho toàn bộ bảng quy hoạch.

**Bước 2:** Thực hiện quy hoạch động

Đối với các hàng tiếp theo, **hàng dưới** được tính dựa theo **hàng trên**. Cụ thể, với mỗi phần tử `D[i][w]` ta xét hai trường hợp: chọn hay không chọn vật `i`.

- Nếu không chọn vật `i` thì tổng giá trị các vật được chọn không thay đổi, nghĩa là `D[i][w] = D[i - 1][w]`.

- Nếu (muốn) chọn vật `i` thì ta xét xem tổng giá trị khi không có vật `i` và tổng giá trị khi có thêm vật `i`, tổng nào lớn hơn: `D[i][w] = max(D[i][w], D[i - 1][w - weight[i]] + value[i])`. (1)
    { .annotate }

    1.  `D[i][w]` là tổng giá trị khi không có vật `i`, đã tính trong trường hợp 1.

        `w - weight[i]` là giới hạn trọng lượng còn lại khi đã chọn vật `i`.

        `D[i - 1][w - weight[i]]` là tổng giá trị lớn nhất khi chọn một số vật nào đó trong phạm vi `[0..i-1]` và giới hạn trọng lượng là `w - weight[i]`.

        `D[i - 1][w - weight[i]] + value[i]` là tổng giá trị lớn nhất của một số vật nào đó trong phạm vi `[0..i-1]` cộng thêm giá trị của vật `i`.

        Tổng giá trị lớn nhất mới sẽ là giá trị lớn hơn trong hai trường hợp này.

Dựa vào ý tưởng trên, ta duyệt và điền giá trị cho bảng quy hoạch `D` như sau:

Duyệt từng hàng (tức số thứ tự của vật) bằng biến `i` trong phạm vi `[1..n]`:

- Duyệt từng cột (tức giới hạn trọng lượng) bằng biến w trong phạm vi `[1..weight_limit]`:

    - Trường hợp 1: không chọn vật `i`, ta gán cho phần tử `D[i][w]` đang xét giá trị phần tử trước đó `D[i - 1][w]`.

    - Trường hợp 2: chọn vật `i`, ta lấy giá trị lớn hơn giữa trường hợp 1 và trường hợp 2: `D[i][w] = max(D[i][w], D[i - 1][w - weight[i]] + value[i])`.

=== "C++"

    ```c++ linenums="1"
        // Duyệt từng vật i trong phạm vi [1..n]
        for (int i = 1; i < n + 1; ++i)
        {
            // Duyệt từng giới hạn trọng lượng w trong phạm vi [1..weight_limit]
            for (int w = 1; w < weight_limit + 1; ++w)
            {
                // Giả sử không chọn vật i
                // Tổng giá trị các vật được chọn sẽ không thay đổi, tức vẫn là D[i - 1][w]
                D[i][w] = D[i - 1][w];
                
                // Nếu trọng lượng vật i không vượt quá giới hạn w
                if (weight[i] <=  w)
                {
                    // Xét xem giữa chọn và không chọn vật i, trường hợp nào làm cho tổng giá trị là lớn nhất
                    D[i][w] = max(D[i][w], D[i - 1][w - weight[i]] + value[i]);
                }
            }
        }
    ```
=== "Python"

    ```py linenums="1"
        # Duyệt từng vật i trong phạm vi [1..n]
        for i in range(1, n + 1):
            # Duyệt từng giới hạn trọng lượng w trong phạm vi [1..weight_limit]
            for w in range(1, weight_limit + 1):
                # Giả sử không chọn vật i
                # Tổng giá trị các vật được chọn sẽ không thay đổi, tức vẫn là D[i - 1][w]
                D[i][w] = D[i - 1][w]

                # Nếu trọng lượng vật i không vượt quá giới hạn w
                if weight[i] <= w:
                    # Xét xem giữa chọn và không chọn vật i, trường hợp nào làm cho tổng giá trị là lớn nhất
                    D[i][w] = max(D[i][w], D[i - 1][w - weight[i]] + value[i])
    ```

### Xuất output

Để xuất ra các vật được chọn, ta thực hiện truy vết dựa trên bảng quy hoạch `D` dưới đây:

| | 0 | 1 | 2 | 3 | 4  | 5  | 6  | 7  | 8  | 9  | 10 |
| --- | --- | --- | --- | --- | --- -| --- -| --- -| --- -| --- -| --- -| --- |
| 0 | 0 | 0 | 0 | 0 | 0  | 0  | 0  | 0  | 0  | 0  | 0  |
| 1 | 0 | 0 | 0 | 0 | 0  | 0  | 12 | 12 | 12 | 12 | 12 |
| 2 | 0 | 0 | 0 | 1 | 1  | 1  | 12 | 12 | 12 | 13 | 13 |
| 3 | 0 | 0 | 0 | 8 | 8  | 8  | 12 | 12 | 12 | 20 | 20 |
| 4 | 0 | 0 | 0 | 8 | 8  | 8  | 12 | 12 | 12 | 20 | 20 |
| 5 | 0 | 0 | 0 | 8 | 10 | 10 | 12 | 18 | 18 | 20 | 22 |
| 6 | 0 | 0 | 0 | 8 | 10 | 10 | 12 | 18 | 18 | 20 | 22 |

Cụ thể, xuất phát từ phần tử cuối cùng `D[n][weight_limit]`, duyệt từ hàng cuối về hàng đầu (tức duyệt theo vật), lặp thao tác:

- Nếu **ô dưới** bằng **ô ngay trên** nó, tức `D[i][w] == D[i - 1][w]`, nghĩa là tổng giá trị không thay đổi, đồng nghĩa vật `i` không được chọn, thì ta bỏ qua ô này.

- Ngược lại, nếu hai ô này khác nhau, thì đẩy vật `i` vào ngăn xếp, đồng thời trừ bớt trọng lượng `weight[i]` để lùi cột. (Sở dĩ phải đẩy vào ngăn xếp vì yêu cầu bài toán là xuất các vật theo số thứ tự tăng dần)

=== "C++"

    ```c++ linenums="1"
        // Ngăn xếp chứa các vật được chọn
        stack<int> item_stack;
        
        // Biến tạm wl dùng để lưu giới hạn trọng lượng
        int wl = weight_limit;

        // Biến tạm i dùng để lưu số thứ tự của vật
        int i = n;

        // Lặp cho đến khi i == 0 thì dừng
        while (i)
        {
            // Nếu tổng giá trị có sự thay đổi, nghĩa là vật i được chọn
            if (D[i][wl] != D[i - 1][wl])
            {
                // thì đẩy vật i vào ngăn xếp
                item_stack.push(i);

                // Lấy giới hạn trọng lượng còn lại sau khi đẩy vật i vào ngăn xếp
                wl = wl - weight[i];
            }

            --i;
        }
    ```
=== "Python"

    ```py linenums="1"
        # Ngăn xếp chứa các vật được chọn
        item_stack = list()

        # Biến tạm wl dùng để lưu giới hạn trọng lượng
        wl = weight_limit

        # Biến tạm i dùng để lưu số thứ tự của vật
        i = n

        # Lặp cho đến khi i == 0 thì dừng
        while i:
            # Nếu tổng giá trị có sự thay đổi, nghĩa là vật i được chọn
            if not D[i][wl] == D[i - 1][wl]:
                # thì đẩy vật i vào ngăn xếp
                item_stack.append(i)

                # Lấy giới hạn trọng lượng còn lại sau khi đẩy vật i vào ngăn xếp
                wl = wl - weight[i]

            i -= 1
    ```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/DynamicProgramming/tree/main/Knapsack" target="_blank">GitHub</a>.