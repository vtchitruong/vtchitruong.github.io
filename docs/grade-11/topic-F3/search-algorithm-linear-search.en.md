---
icon: material/table-search
---

# Sequential search

!!! abstract "Content summary"

    This lesson covers:

    - The search problem
    - The sequential search algorithm

## Overview

### Problem statement

People need information constantly, yet the amount of data stored in systems is enormous.

How can we quickly find the exact piece of information we need in such a vast sea of data?

### The search problem

In general, the **search problem** involves **finding one or more items** that satisfy a given condition within a collection.

In this lesson, we focus on a specific version of the search problem:

- The data is stored in a one-dimensional array.
- We are looking for exactly one element with a given value *k*.

Formal problem statement:

| Input | Output |
| --- | --- |
| - A one-dimensional array `A` containing `n` integers.<br>- A target value `k` to search for. | - The index (position) of the element equal to `k` in array `A` or `-1` if `k` is not found. |

### Search algorithms

For the problem described above, there are two fundamental search algorithms:

- **Sequential search**
- **Binary search**

This lesson focuses only on sequential search, also known as **linear search** (1).
{ .annotate }

1.  Both terms can be used interchangeably. Internationally, **linear search** is the more common term. In Vietnamese textbooks, however, it is usually translated as **sequential search** (tìm kiếm tuần tự).

??? info "Benefits and applications of search algorithms"

    Searching is a fundamental way of interacting with data and brings many important benefits. It helps discover relevant information, deepens understanding of the world from existing data, and supports better decision-making.

    Common real-world applications of search algorithms include:

    1. Searching for specific information

        Words in a document, a phone number in a contact list, a file on a computer, or a book in a library.

    2. Database queries

        Customers searching for products, prices, or promotions on e-commerce platforms.

    3. Information retrieval

        Search engines helping users find relevant documents or websites on the internet.

    4. Optimization problems

        Finding the best solution among many possibilities — e.g., the shortest path or the cheapest option.

    5. Data analysis

        Identifying patterns, trends, or correlations in large datasets to gain insights and draw conclusions.

    6. Anomaly detection

        Helping systems spot potential problems, trigger alerts, or take appropriate actions.

---

## Sequential search algorithm

### Idea

Imagine a deck of cards all face down. You need to find where one of the 3s is (any of the four 3s).

The natural way is to flip the cards one by one, starting from the top, until you see a 3.

We apply the same idea to an array:

We compare each element with the target value `k`, from the beginning to the end, and stop as soon as we find it.

Here’s how it works step by step:

1. Go through the array from the first element to the last (`A[i]`), and for each position `i`:

    - If `A[i] == k`, return `i` — that’s the index where the value was found.

2. If we finish checking all elements and never found `k`, return `-1` (meaning: not found).

    (`-1` is a common convention for "not found" because array indices start at 0 — there are no negative indices.)

### Flowchart

![Flowchart of the sequential search algorithm](images/search-algorithm-linear-search-flowchart.svg){loading=lazy}

### Visualization

<div>
    <iframe width="100%" height="680px" frameBorder=0 src="/grade-11/topic-F3/visualize/linear-search.html"></iframe>
</div>

### Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `linear_search()` to implement the sequential search algorithm.

The function takes two input parameters:

- The array `A`
- The target value `k`

It returns:

- The index `i` where `k` is found, or
- `-1` if `k` is not found.

```py linenums="4"
def linear_search(A, k):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử từ đầu đến cuối mảng
    for i in range(n):
        if A[i] == k:
            # Nếu A[i] nào đó bằng k thì trả về chỉ số i
            return i

    # Không tìm thấy, trả về -1
    return -1
```

3\. Write the main program.

For simplicity in this example, we will skip asking the user to input the entire array. Instead, we create a fixed array in the code, and the user only needs to enter the value they want to search for.

```py linenums="19"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))
```

Call the `linear_search()` function and store the result (the found index or -1) in a variable named `found`.

```py linenums="19" hl_lines="9"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)
```

Use the variable `found` to print an appropriate message:

- If `found` is not `-1`, display that the value was found and show its position.
- If `found` is `-1`, display that the value was not found.

```py linenums="19" hl_lines="11-16"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Gọi hàm linear_search()
    found = linear_search(Array, key)

    if found == -1:
        # Nếu chỉ số trả về là -1 thì in ra không tìm thấy
        print(f'Không tìm thấy {key}')
    else:
        # Ngược lại, khác -1, thì in ra tìm thấy tại found
        print(f'Tìm thấy {key} tại vị trí {found}')
```

4\. Run the program above and enter `9`. The output will be:

```pycon
Nhập giá trị cần tìm: 9
Tìm thấy 9 tại vị trí 4
```

Run the program again and enter `6` as the value to search for. The output will be:

```pycon
Nhập giá trị cần tìm: 6
Không tìm thấy 6
```

!!! tip "Note"

    If the value `k` appears multiple times in the array, the sequential search algorithm will return only the **first occurrence** (the one found earliest during the traversal).
---

## Source code

The complete code is available at:

- [Google Colab](https://colab.research.google.com/drive/1t09XEPd79MLfHUT2LGX3KVdKByfLAeCq?usp=sharing){target="_blank"}

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/search-algorithm-linear-search.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán tìm kiếm | search problem |
| so sánh | compare |
| thuật toán tìm kiếm | search algorithm |
| tìm kiếm tuần tự | sequential search, linear search |
| tìm thấy, không tìm thấy | found, not found |