---
icon: material/sort
---

# Selection sort

!!! abstract "Content summary"

    This lesson introduces the selection sort algorithm.

## Idea

Imagine you need to pick the best possible starting lineup from a group of players.

You do it like this: First, pick the best player. Then, from the remaining players, pick the second-best. Then the third-best, and so on.

Now apply this to an array.

If we treat *"smallest"* as *"best"*, the strategy becomes: Find the smallest element and put it in the first position. Then find the next smallest and put it in the second position. Keep going until the array is fully sorted.

!!! note "How the selection sort algorithm works"

    For each position `i` from the beginning of the array up to the second-to-last element:

    - Scan the unsorted portion (from index `i` to the end) to find the smallest element and remember its index `min`.
    - Swap `A[i]` with `A[min]`.

This process gradually builds the sorted part at the beginning of the array.

The main idea is illustrated below:

![Illustration of the core idea](images/sort-algorithm-selection-sort-illustration.svg){loading=lazy width=300}

---

## Example illustration

![Step-by-step example of selection sort](images/sort-algorithm-selection-sort-manual-run.svg){loading=lazy width=360px}

---

## Flowchart

![Flowchart of the selection sort algorithm](images/sort-algorithm-selection-sort-flowchart.svg){loading=lazy width=600}

---

## Visualization

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="/grade-11/topic-F3/visualize/selection-sort.html"></iframe>
</div>  

---

## Writing the program

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

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp chọn | selection sort |
| so sánh | compare |