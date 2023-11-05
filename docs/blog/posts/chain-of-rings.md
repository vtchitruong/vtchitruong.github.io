---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2023-11-03
---

# Chuỗi vòng tròn

Bài toán bịa ra tình huống rằng, trên gác nhà, chợt ai đó tìm thấy một đống chuỗi, mỗi chuỗi là một chùm các vòng tròn đeo tay. Phải làm thế nào để mở những vòng tròn ra và nối các chuỗi lại với nhau đỡ tốn công nhất.

<!-- more -->

## Khái quát về bài toán

Bài toán này[^1] có thể dùng để luyện tập vòng lặp và mảng. 

[^1]: Bài toán do chủ thớt lấy từ bạn bè hoặc người quen nhưng giả vờ không nhớ chính xác là ai.

### Yêu cầu

Cho trước *n* chuỗi và mỗi chuỗi có số vòng tròn cũng cho trước.

Mỗi thao tác tháo mở một vòng tròn bất kỳ để móc nối hai chuỗi nào đó lại với nhau được tính là **một lần mở vòng**.

Xác định **số lần mở vòng** ít nhất để nối toàn bộ *n* chuỗi lại với nhau.

### Input và output

| Test case | Input | Output |
| --- | --- | --- |
| 0 | 2 <br> 3 3 | 1 |
| 1 | 3 <br> 1 1 1 | 1 |
| 2 | 5 <br> 4 3 5 7 9 | 3 |

### Giải thích

Test 0: Mở một vòng bất kỳ, rồi dùng vòng này nối hai chuỗi lại. Như vậy, chỉ cần 1 lần.

Test 1: Mở vòng ở giữa, rồi nối hai vòng hai bên lại. Như vậy, cũng chỉ cần 1 lần.

Test 2: Mở 3 vòng của chuỗi có 3 vòng, rồi dùng 3 vòng này nối các chuỗi còn lại. Như vậy, cần 3 lần.

## Cách giải đề xuất

### Ý tưởng chính

Hãy thử chắp nối những ý tưởng rời rạc sau:

- Mỗi lần mở vòng đồng nghĩa số vòng trong chuỗi giảm đi 1 đơn vị.

- Mỗi lần mở vòng, ta nối thêm được một chuỗi. Như vậy, số lần mở vòng ít nhất chính là số chuỗi cần nối vào ít nhất.

    Do đó, ta ưu tiên mở vòng của những chuỗi có ít vòng nhất. Nói cách khác, phải nhanh chóng "triệt tiêu" những chuỗi ít vòng nhất, giúp giảm bớt số chuỗi cần nối vào.

- Cùng ngữ cảnh trên, khi một chuỗi được nối vào, thì nó xem như đã bị "đồng hóa". Cho nên, ta xóa sổ nó khỏi danh sách những chuỗi còn lại cần nối.

- Việc mở vòng sẽ dừng khi chỉ còn một chuỗi. Vì nếu tiếp tục, cũng không còn chuỗi nào để nối vào.

### Các bước thực hiện

#### Bước 1

Đặt dãy số trong input là mảng `L`, với `L[i]` là số vòng của chuỗi `i`.

Sắp xếp mảng `L` tăng dần.

#### Bước 2

Lặp các thao tác mở vòng và nối chuỗi như sau:

- Mở 1 vòng: Giảm phần tử đầu tiên của `L` đi 1.
- Nối chuỗi cuối cùng vào: Xóa bỏ phần tử cuối của `L`.
- Hai động tác trên được tính là 1 lần mở vòng: `remove_times += 1`.
- Vòng lặp sẽ dừng khi mảng `L` chỉ còn một phần tử.
- Nếu chuỗi đầu tiên không còn vòng nào để mở, tức `L[0] == 0`, thì xóa bỏ `L[0]`, nhằm chuẩn bị mở vòng của chuỗi tiếp theo. Song cũng không quên kiểm tra số chuỗi còn lại có bằng 1 hay không để dừng vòng lặp. 

=== "C++"
    ``` c++ linenums="1"

        // Mở từng vòng, bắt đầu từ chuỗi đầu tiên, có ít vòng nhất (đã sort ở trên)
        while (L[0] > 0)
        {
            // Mở 1 vòng
            L[0]--;

            // Xóa bỏ chuỗi cuối cùng
            L.pop_back();

            // Cộng thêm 1 lần mở vòng
            remove_times++;
            
            // Nếu chỉ còn một chuỗi duy nhất thì dừng thuật toán
            if (L.size() == 1)
                return remove_times;

            // Nếu chuỗi đầu tiên không còn vòng nào để mở nữa
            // thì "xóa bỏ" chuỗi này khỏi vector L để chuẩn bị mở vòng của chuỗi tiếp theo
            if (L[0] == 0)
            {
                L.erase(L.begin());

                // Nếu chỉ còn một chuỗi duy nhất thì dừng thuật toán
                if (L.size() == 1)
                {
                    return remove_times;
                }
            }
        }
    ```
=== "Python"
    ``` py linenums="1"
        # Mở từng vòng, bắt đầu từ chuỗi đầu tiên, có ít vòng nhất (đã sort ở trên)
        while L[0] > 0:
            # Mở 1 vòng
            L[0] -= 1

            # Xóa bỏ chuỗi cuối cùng
            L.pop()

            # Cộng thêm 1 lần mở vòng
            remove_times += 1
            
            # Nếu chỉ còn một chuỗi duy nhất thì dừng thuật toán
            if len(L) == 1:
                return remove_times

            # Nếu chuỗi đầu tiên không còn vòng nào để mở nữa
            # thì "xóa bỏ" chuỗi này khỏi vector L để chuẩn bị mở vòng của chuỗi tiếp theo
            if L[0] == 0:        
                L.pop(0)

                # Nếu chỉ còn một chuỗi duy nhất thì dừng thuật toán
                if len(L) == 1:            
                    return remove_times
    ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/Ring-chain){:target="_blank"}.


