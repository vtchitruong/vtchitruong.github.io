---
icon: material/sort
---

# Selection sort

!!! abstract "Content summary"

    This lesson covers:

    - The sorting problem
    - The selection sort algorithm

## Overview

### Problem statement

Given a class gradebook, how can we quickly find the top 10 students with the highest scores?

One simple and effective solution is to sort the entire list in descending order. After that, the first 10 students in the sorted list are exactly the ones with the highest grades.

### The sorting problem

Sorting data is a fundamental and important task in data processing. It makes searching, retrieving, and analyzing data much easier and faster.

**Sorting** means **rearranging data into a meaningful order**.

In topic F, we only study the simple case of sorting a one-dimensional array in non-decreasing order (1).
{ .annotate }

1.  **Non-decreasing** allows equal values: each next element is greater than or equal to the previous one.

    Meanwhile, **strictly increasing** does not allow duplicates — each next element must be strictly greater than the previous one.

Formal problem statement:

| Input | Output |
| --- | --- |
| A one-dimensional array `A` with `n` integers | The same array `A`, now sorted in non-decreasing order |

### Sorting algorithms

There are many different sorting algorithms. Most of them work by comparing elements with each other to decide which one should come first.

This lesson focuses on the **selection sort** algorithm.

??? info "Benefits and real-world applications"

    Sorting data makes it easier to read, faster to search, and simpler to process.

    In practice, sorting algorithms are used in a wide variety of problems, including:

    - Management systems — sorting IDs, names, dates, locations, etc.
    - Graph algorithms such as Prim, Kruskal, and Dijkstra — sorting edges by weight.
    - Statistics — finding the median, quartiles, percentiles.
    - Removing duplicates, merging datasets, divide-and-conquer strategies, range searches.
    - Scheduling and simulation — ordering events by time in games, job schedulers, operating systems, or network packet processing.

    Today, almost every programming language and software library already provides built-in, highly efficient sorting functions.

    Even so, learning how sorting algorithms work remains very valuable — it helps you develop logical thinking, understand performance differences, and write better code.

---

## Selection sort algorithm

### Idea

Imagine you need to pick the best possible starting lineup from a group of players.

You do it like this: First, pick the best player. Then, from the remaining players, pick the second-best. Then the third-best, and so on.

Now apply this to an array.

If we treat *"smallest"* as *"best"*, the strategy becomes: Find the smallest element and put it in the first position. Then find the next smallest and put it in the second position. Keep going until the array is fully sorted.

Here’s how it works step by step:

For each position `i` from the beginning of the array up to the second-to-last element:

- Scan the unsorted portion (from index `i` to the end) to find the smallest element and remember its index `min`.
- Swap `A[i]` with `A[min]`.

This process gradually builds the sorted part at the beginning of the array.

The main idea is illustrated below:

![Illustration of the core idea](images/sort-algorithm-selection-sort-illustration.svg){loading=lazy width=300}

### Example illustration

![Step-by-step example of selection sort](images/sort-algorithm-selection-sort-manual-run.svg){loading=lazy width=360px}

### Flowchart

![Flowchart of the selection sort algorithm](images/sort-algorithm-selection-sort-flowchart.svg){loading=lazy width=600}

### Visualization

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="/grade-11/topic-F3/visualize/selection-sort.html"></iframe>
</div>  

### Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `selection_sort()` to implement the selection sort algorithm.

```py linenums="4"
def selection_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ đầu đến áp cuối
    for i in range(n - 1):
        # Tìm vị trí của phần tử nhỏ nhất từ i đến cuối
        min = i
        for j in range(i + 1, n):
            if A[j] < A[min]:
                min = j

        # Hoán vị A[i] và A[min]
        A[i], A[min] = A[min], A[i]
```

3\. Write the main program.

In the main program, we will not ask the user to input the entire array. Instead, we create a fixed array in the code and then call the `selection_sort()` function to sort the array `Array`.

```py linenums="21"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm selection_sort()
    selection_sort(Array)

    # In mảng mới
    print(f'Mảng mới sau khi sắp xếp: {Array}')
```

4\. Run the program above. The output will be:

```pycon
Mảng ban đầu chưa sắp xếp: [1 7 4 0 9 4 8 8]
Mảng mới sau khi sắp xếp: [0 1 4 4 7 8 8 9]
```

---

## Source code

The complete code is available at:

- [Google Colab](https://colab.research.google.com/drive/1VBtZAQbqQTRyQx1hsF0Ez68VPa5h3I7Y?usp=sharing){target="_blank"}

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-selection-sort.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp chọn | selection sort |
| so sánh | compare |