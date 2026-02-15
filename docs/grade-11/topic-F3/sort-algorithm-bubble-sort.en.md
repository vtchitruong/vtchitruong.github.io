---
icon: material/sort
---

# Bubble sort

!!! abstract "Content summary"

    This lesson introduces the bubble sort algorithm.

## Idea

Imagine bubbles rising from the bottom of a glass of water to the surface.

Small bubbles start at the bottom, and as they rise, larger bubbles appear closer to the surface.

If we think of the beginning of the array as the bottom of the water and the end of the array as the surface, we can sort the array by repeatedly letting the larger elements "bubble up" toward the end.

!!! note "How the insertion sort algorithm works"

    For `i` from the first element to the second-to-last element:

    - Traverse the array from index `0` up to `n - 1 - i` (i.e., stop before the last `i` elements that are already in place), and for each pair of adjacent elements `A[j]` and `A[j + 1]`:

        - Compare them.
        - If `A[j] > A[j + 1]`, swap them so the larger one moves to the right.

This way:

- After each pass of the inner loop (variable `j`), the largest remaining element "bubbles up" to its correct position near the end.
- After each full pass of the outer loop (variable `i`), the largest element so far is in its final position at the end of the array.

With every new pass of the outer loop, the unsorted portion of the array shrinks by one from the end — because the largest element is now correctly placed.

This is why the algorithm is called bubble sort — the big elements gradually "float" to the top (the end of the array) like bubbles rising in water.

The main idea is illustrated below:

![Illustration of the core idea](images/sort-algorithm-bubble-sort-illustration.svg){loading=lazy width=300}

---

## Example illustration

![Step-by-step example of bubble sort](images/sort-algorithm-bubble-sort-manual-run.svg){loading=lazy width=360px}

---

## Flowchart

![Flowchart of the bubble sort algorithm](images/sort-algorithm-bubble-sort-flowchart.svg){loading=lazy width=600}

---

## Visualization

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="/grade-11/topic-F3/visualize/bubble-sort.html"></iframe>
</div>  

---

## Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `bubble_sort()` to implement the bubble sort algorithm.

```py linenums="4"
def bubble_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Cho i chạy từ 0 đến n - 2
    for i in range(n - 1):
        # Duyệt từng phần tử A[j] từ 0 đến trước n - 1 - i
        for j in range(n - 1 - i):
            # So sánh và hoán vị hai phần tử cạnh nhau
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
```

3\. Write the main program.

In the main program, we will not ask the user to input the entire array. Instead, we create a fixed array in the code and then call the `bubble_sort()` function to sort the array `Array`.

```py linenums="18"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm bubble_sort()
    bubble_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1c3INW2H5BhjXAfn18KiXWXlA0vLvDo7n?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp nổi bọt | bubble sort |
| so sánh | compare |