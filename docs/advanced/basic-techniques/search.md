# Tìm kiếm

<div class="result" markdown>
![Image title](./thumbnails/searching.svg){ align=left width=360 }

Trong quá trình luyện công, người học phải tự mình viết những hàm **tìm kiếm** nhằm rèn luyện tư duy và kỹ thuật lập trình. Tuy nhiên, khi làm bài thi, thời gian là yếu tố quan trọng, thí sinh nên sử dụng những công cụ có sẵn của ngôn ngữ, hạn chế viết lại hoặc tạo lại nhằm dành thời giờ và công sức cho ý tưởng.

Bài viết này hướng dẫn cách sử dụng một số hàm có sẵn liên quan đến *tìm kiếm* trên một vector.

## Tìm giá trị của phần tử nhỏ nhất

Đặt `vec` là vector gồm các số nguyên.

=== "C++"

    ``` c++ linenums="1"
    vector<int> vec;
    ```
=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Các phần tử của `vec` được phát sinh ngẫu nhiên bằng đoạn mã sau:

=== "C++"

    ``` c++ linenums="1"
    void generate()
    {
        int x;
        for (int i = 0; i < n; ++i)
        {
            x = rand() % 10; // (1)
            vec.push_back(x);
        }
    }
    ```
    { .annotate }

    1.  `rand() % 10` dùng để phát sinh ngẫu nhiên một số nằm trong [0, 10).

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Vector ban đầu:
1 7 4 0 9 4 8 8 2 4 5 5 1 7 1 1 5 2 7 6
```

Trong C++, để tìm **vị trí** của phần tử nhỏ nhất và lớn nhất trong vector, ta sử dụng hàm `min_element()` và `max_element()` của thư viện `algorithm`.

Hai hàm này đều trả về ***con duyệt***, có kiểu là `vector<int>::iterator`, trỏ vào phần tử nhỏ nhất hoặc lớn nhất.

Sau khi có được con duyệt, ta dùng toán tử `*` để lấy giá trị tại vị trí tương ứng.

Đoạn mã sau tìm giá trị của phần tử nhỏ nhất trong vector. 

=== "C++"

    ``` c++ linenums="1" hl_lines="1"
        int min_value = *min_element(vec.begin(), vec.end());
        cout << "Giá trị nhỏ nhất: " << min_value << endl;
    ```
=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Giá trị nhỏ nhất: 0
```

## Tìm chỉ số của phần tử lớn nhất

Để lấy được chỉ số tại vị trí tương ứng, ta đem con duyệt trả về trừ đi `vector.begin()`.

Đoạn mã sau tìm chỉ số của phần tử lớn nhất.

=== "C++"

    ``` c++ linenums="1" hl_lines="2"
        vector<int>::iterator max_it = max_element(vec.begin(), vec.end());
        int max_position = max_it - vec.begin();
        cout << "Chỉ số của phần tử lớn nhất: " << max_position << endl;
    ```
=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Vị trí của phần tử lớn nhất: 4
```

Nếu có nhiều phần tử lớn nhất thì hàm `max_element` trỏ vào vị trí lớn nhất đầu tiên. 

## Tìm phần tử có giá trị k

Đoạn mã sau tìm phần tử có giá trị *k* bằng cách dùng hàm `find()`.

=== "C++"

    ``` c++ linenums="1" hl_lines="2 6"
        int k = 8;
        vector<int>::iterator it = find(vec.begin(), vec.end(), k);
        
        if (it != vec.end()) // (1)
        {
            int found_at = it - vec.begin();
            cout << "Tìm thấy k = " << k << " tại vị trí: " << found_at << endl;
        }
        else
        {
            cout << "Không tìm thấy" << endl;
        }
    ```
    { .annotate }

    1.  `vec.end()` trỏ ra ***sau*** vector, chứ không phải trỏ vào phần tử cuối.

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Tìm thấy k = 8 tại vị trí: 6
```

## Tìm phần tử thỏa điều kiện cho trước

Giả sử ta muốn tìm phần tử vừa chẵn vừa lớn hơn 5.

Trước hết, ta viết hàm kiểm tra điều kiện vừa chẵn vừa lớn hơn 5, đặt là hàm `check()`.

=== "C++"

    ``` c++ linenums="1"
    bool check(int x)
    {
        return x % 2 == 0 && x > 5;
    }
    ```

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Sau đó, ta truyền hàm `check()` vừa viết vào hàm `find_if()`.

=== "C++"

    ``` c++ linenums="1" hl_lines="1"
        int first_match = find_if(vec.begin(), vec.end(), check) - vec.begin();
        cout << "Phần tử đầu tiên thỏa điều kiện: " <<  first_match << endl;
    ```

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Phần tử đầu tiên thỏa điều kiện: 6
```

## Đếm phần tử thỏa điều kiện cho trước

Giả sử ta muốn đếm số phần tử vừa chẵn vừa lớn hơn 5.

Vẫn dùng hàm `check()` như trên, lần này ta truyền `check()` vào hàm `count_if()`.

=== "C++"

    ``` c++ linenums="1" hl_lines="1"
        int count_match = count_if(vec.begin(), vec.end(), check);
        cout << "Số phần tử thỏa điều kiện: " <<  count_match << endl;
    ```

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Số phần tử thỏa điều kiện: 3
```

## Lọc ra các phần tử thỏa và không thỏa điều kiện cho trước

Giả sử ta muốn lọc/trích ra các phần tử vừa chẵn vừa lớn hơn 5.

Vẫn dùng hàm `check()` như trên, lần này ta truyền `check()` vào hàm `copy_if()` và đính kèm hàm `back_inserter()` dành cho vector kết quả.

=== "C++"

    ``` c++ linenums="1" hl_lines="2"
        vector<int> match_elements;
        copy_if(vec.begin(), vec.end(), back_inserter(match_elements), check);
        show("Các phần tử thỏa điều kiện:", match_elements);
    ```

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Các phần tử thỏa điều kiện:
8 8 6
```

Tương tự, ta dùng hàm `remove_copy_if()` để lọc ra các phần tử *không* thỏa điều kiện.

=== "C++"

    ``` c++ linenums="1" hl_lines="2"
        vector<int> unmatch_elements;
        remove_copy_if(vec.begin(), vec.end(), back_inserter(unmatch_elements), check);
        show("Các phần tử không thỏa điều kiện:", unmatch_elements);
    ```

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)

Output:

```pycon
Các phần tử không thỏa điều kiện:
1 7 4 0 9 4 2 4 5 5 1 7 1 1 5 2 7
```

## Toàn bộ chương trình

=== "C++"

    Chương trình C++ hoàn chỉnh đặt tại [Gist của GitHub](https://gist.github.com/vtchitruong/8dba28b943f7e7595a526186fd809e3e){target="_blank"}.

=== "Python"

    Nội dung này sẽ cập nhật sau khi chủ thớt được đồ-nét :)