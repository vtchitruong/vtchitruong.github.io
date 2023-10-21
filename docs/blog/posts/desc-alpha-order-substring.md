---
categories:
    - Solve to surpass
authors: [mrschool]
date: 2023-03-23
---

# Chuỗi con chấp nhận được

Một bài toán liên quan đến chuỗi con và thứ tự theo bảng chữ cái.

<!-- more -->

## Khái quát về bài toán

Bài toán này[^1] có thể dùng để luyện tập về vòng lặp và một chút đề cập đến việc sắp xếp các phần tử mà có hai thuộc tính. 

[^1]: Bài toán do chủ thớt lấy từ bạn bè hoặc người quen nhưng không còn nhớ chính xác là ai.

### Yêu cầu

Cho hai chuỗi *s1* và *s2* gồm các ký tự từ a đến z.  

Thực hiện xóa một số ký tự trong hai chuỗi và giữ nguyên vị trí tương đối của các ký tự còn lại, nếu hai chuỗi con *s* nhận được sau khi xóa mà giống nhau thì *s* được gọi là chuỗi *chấp nhận được*.  

Tìm chuỗi *s* có thứ tự từ điển lớn nhất. 

### Input
accacca  
abcda  

### Output
ca  

### Giải thích
Các chuỗi con *chấp nhận được* của *s1* và *s2* là: **a**, **aa**, **ac**, **aca**, **c**, **ca**. Trong đó **ca** là chuỗi *chấp nhận được* có thứ tự từ điển lớn nhất.  

## Cách giải đề xuất

### Ý tưởng chính

Ta không thực hiện xóa ký tự như yêu cầu bài toán, mà chọn ra những ký tự giống nhau theo hướng sau:

- Do yêu cầu là thứ tự từ điển lớn nhất, nên trước hết, ta sắp xếp các ký tự trong cùng một chuỗi theo thứ tự giảm dần từ z về a. Trường hợp ký tự xuất hiện nhiều lần, thì sắp xếp tăng dần theo vị trí xuất hiện.
- Sau khi sắp xếp, thực hiện duyệt các ký tự từ đầu đến cuối để chọn ra những ký tự giống nhau trong cả hai chuỗi mà vẫn đảm bảo vị trí tương đối của chúng.

### Các bước thực hiện

#### Bước 1
Khởi tạo vector `v1` và `v2` tương ứng với `s1` và `s2`, trong đó mỗi phần tử gồm hai thuộc tính là: ký tự và vị trí của ký tự đó trong chuỗi. 

Vector `v1`

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
Ký tự | a | c | c | a | c | c | a |
Vị trí | 0 | 1 | 2 | 3 | 4 | 5 | 6 |

Vector `v2`

| | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Ký tự | a | b | c | d | a |
| Vị trí | 0 | 1 | 2 | 3 | 4 |

=== "C++"
    ``` c++ linenums="1"
        for (int i = 0; i < s1.length(); ++i)
        {
            v1.push_back({s1[i], i});
        }

        for (int i = 0; i < s2.length(); ++i)
        {
            v2.push_back({s2[i], i});
        }
    ```
=== "Python"
    ``` py linenums="1"
        
    ```

#### Bước 2
Sắp xếp mỗi vector theo thứ tự ký tự giảm dần từ z về a. Nếu một ký tự xuất hiện nhiều lần thì sắp xếp theo vị trí tăng dần.  

Vector `v1`

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| c | c | c | c | a | a | a |
| 1 | 2 | 4 | 5 | 0 | 3 | 6 |

Vector `v2`

| 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| d | c | b | a | a |
| 3 | 2 | 1 | 0 | 4 |

Để sắp xếp, ta cần tạo hàm `compare` hỗ trợ việc so sánh hai phần tử.

=== "C++"
    ``` c++ linenums="1"
    bool compare(const pair<char, int>& a, const pair<char, int>& b)
    {
        if (a.first == b.first)
        {
            return a.second < b.second;
        }
        else
        {
            return a.first > b.first;    
        }
    }
    ```
=== "Python"
    ``` py linenums="1"
        
    ```

Sau đó, ta gọi hàm `sort()` của C++ để sắp xếp vector với tham số là hàm `compare` vừa viết. 

=== "C++"
    ``` c++ linenums="1"
        sort(v1.begin(), v1.end(), compare);
        sort(v2.begin(), v2.end(), compare);
    ```
=== "Python"
    ``` py linenums="1"
        
    ```

#### Bước 3

Đặt `res` là vector kết quả, lưu các ký tự giống nhau giữa hai chuỗi theo thứ tự z-a. 

:   Bước 3.1.  
    Xác định vị trí có ký tự giống nhau đầu tiên trong `v1` và `v2`, đặt vị trí giống nhau này là `p1` và `p2`. Đồng thời, nạp ký tự giống nhau này vào vector kết quả `res`.  

    === "C++"
        ``` c++ linenums="1"
        int p1 = -1;
        int p2 = -1;

        bool break_loop = false;
        for (int i1 = 0; i1 < v1.size(); ++i1)
        {
            for (int i2 = 0; i2 < v2.size(); ++i2)
            {
                // Nếu có ký tự giống nhau thì ghi nhận p1 và p2 và ngắt cả hai vòng lặp
                if (v1[i1].first == v2[i2].first)
                {
                    p1 = i1;
                    p2 = i2;

                    res.push_back(v1[i1].first);
                    
                    break_loop = true;
                    break;
                }
            }
            
            // Ngắt luôn vòng lặp i1
            if (break_loop) break;
        }            
        ```
    === "Python"
        ``` py linenums="1"
            
        ```

:   Bước 3.2.     
    Cho `i1` chạy từ `p1 + 1` đến hết vector `v1`, thực hiện lặp:  
    
    - Nếu ký tự `i1` đang xét mà nằm sau ký tự `p1`, tức có vị trí trong `s1` lớn hơn, thì cho `i2` chạy từ `p2 + 1` đến hết vector `v2`, thực hiện lặp:
    
        - Nếu ký tự `i2` đang xét mà nằm sau ký tự `p2`, tức có vị trí trong `s2` lớn hơn, và ký tự `i2` giống với ký tự `i1` thì:  
            - Ghi nhận vị trí `p1` và `p2` mới, là `i1` và `i2` đang xét.  
            - Nạp ký tự giống nhau này vào vector `res`.  

    === "C++"
        ``` c++ linenums="1"
        if (p1 != -1)
        {
            int i1 = p1 + 1;
            int i2;    
            while (i1 < v1.size())
            {
                if (v1[i1].second > v1[p1].second)
                {
                    i2 = p2 + 1;
                    while (i2 < v2.size())
                    {
                        if (v2[i2].second > v2[p2].second)
                        {
                            if (v1[i1].first == v2[i2].first)
                            {
                                res.push_back(v1[i1].first);

                                p1 = i1;
                                p2 = i2;

                                i1 += 1;
                                i2 += 1;
                            }
                            else
                            {
                                i2 += 1;
                            }
                        }
                        else
                        {
                            i2 += 1;
                        }
                    }
                }

                i1 += 1;
            }
        } // if p1
        ```
    === "Python"
        ``` py linenums="1"
            
        ```

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/HSG-UnknownSource/tree/main/ChonXau){:target="_blank"}.


