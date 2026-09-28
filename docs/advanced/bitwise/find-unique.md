---
tags:
    - bitwise
    - toán tử xor
    - xuất hiện một lần
level: "nâng cao"
updated: "28/09/2026"
---

# Phần tử xuất hiện một lần

## Đề bài

Cho mảng một chiều gồm các số nguyên.

Mỗi phần tử trong mảng này đều xuất hiện hai lần, chỉ có duy nhất một phần tử xuất hiện một lần.

**Yêu cầu**: hãy tìm phần tử này.

**Input**: mảng gồm các số nguyên.

```pycon
2, 3, 5, 5, 2, 4, 3
```

**Output**: số nguyên mà chỉ xuất hiện một lần.

```pycon
4
```

---

## Bài giải đề xuất

### Ý tưởng chính

Vì `x XOR x = 0` nên ta sẽ dùng toán tử `XOR` để triệt tiêu các phần tử xuất hiện hai lần.

### Viết chương trình

**Cách 1:**

Dùng vòng lặp for và `XOR` dồn từng phần tử.

=== "C++"

    ```c++ linenums="10"
    int find_unique(vector<int> A)
    {
        // Khởi tạo
        int unique_element = 0;

        // Duyệt từng phần tử trong mảng A
        for (int a : A)
        {
            unique_element ^= a;
        }

        return unique_element;
    }
    ```
=== "Python"

    ```py linenums="8"
    def find_unique(A):
        # Khởi tạo
        unique_element = 0

        # Duyệt từng phần tử trong mảng A
        for a in A:
            unique_element ^= a

        return unique_element
    ```

**Cách 2:**

Trong C++, ta dùng hàm `accumulate()` và truyền vào tham số là **đối tượng hàm** (function object hoặc functor) `bit_xor<int>()`.

Trong Python, ta dùng hàm `reduce()` và truyền vào tham số là hàm `operator.xor()`.

=== "C++"

    ```c++ linenums="25"
    int find_unique_2(vector<int> A)
    {
        return accumulate(A.begin(), A.end(), 0, bit_xor<int>());
    }
    ```
=== "Python"

    ```py linenums="20"
    def find_unique_2(A):
        return reduce(xor, A, 0)
    ```

!!! note "Lưu ý"

    Ngoại trừ phần tử cần tìm chỉ xuất hiện một lần, các phần tử còn lại đều phải có số lần xuất hiện là chẵn.
    
    Nếu các phần tử này xuất hiện lẻ lần thì cách dùng `XOR` này không áp dụng được. Ví dụ: số 5 xuất hiện 3 lần, ta có `5 ^ 5 ^ 5 = (5 ^ 5) ^ 5 = 0 ^ 5 = 5`. Kết quả là `5`, nghĩa là không bị triệt tiêu như mong muốn.

---

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/bitwise/find_unique){:target="_blank"}.
