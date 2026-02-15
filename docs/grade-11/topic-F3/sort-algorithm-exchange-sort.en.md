---
icon: material/sort
---

# Exchange sort

!!! abstract "Content summary"

    This lesson introduces the exchange sort algorithm.

## Idea

The core idea of exchange sort is to repeatedly compare the current element with all elements that come after it and swap them whenever necessary, so that the smaller element moves forward and the larger one moves backward.

!!! note "How the exchange sort algorithm works"

    For each position `i` from the beginning of the array up to the second-to-last element:

    - For each position `j` from `i + 1` to the end of the array:

        - Compare `A[i]` and `A[j]`.
        - If `A[i] > A[j]`, swap them so that the smaller value ends up at index `i`.

After each complete pass of the outer loop (variable `i`), the smallest remaining element in the subarray `A[i..n-1]` is moved to its correct position at index `i`.

In other words:

- After the first pass, the smallest element is in position 0.
- After the second pass, the second-smallest element is in position 1.
- And so on.

This gradually builds the sorted portion at the beginning of the array.

The main idea is illustrated below:

![Illustration of the core idea](images/sort-algorithm-exchange-sort-illustration.svg){loading=lazy width=300}

!!! warning "A note about this algorithm"

    In many English-language textbooks and resources, exchange sort is considered a close relative of bubble sort, but it performs worse in practice because it carries out many more swaps.

    For this reason, most educators and authors agree that it is not worth teaching as a separate algorithm — the standard bubble sort (with the early-exit optimisation) is simpler, faster, and more commonly used.

---

## Example illustration

![Step-by-step example of exchange sort](images/sort-algorithm-exchange-sort-manual-run.svg){loading=lazy width=360px}

---

## Flowchart

![Flowchart of the exchange sort algorithm](images/sort-algorithm-exchange-sort-flowchart.svg){loading=lazy width=600}

---

## Visualization

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="/grade-11/topic-F3/visualize/exchange-sort.html"></iframe>
</div>   

---

## Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `exchange_sort()` to implement the exchange sort algorithm.

```py linenums="4"
def exchange_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ 0 đến áp cuối
    for i in range(n - 1):
        # Duyệt từng phần tử A[j] từ i + 1 đến cuối mảng
        for j in range(i + 1, n):
            # So sánh và tráo đổi A[i] và A[j]
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]
```

3\. Write the main program.

In the main program, we will not ask the user to input the entire array. Instead, we create a fixed array in the code and then call the `exchange_sort()` function to sort the array `Array`.

```py linenums="18"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm exchange_sort()
    exchange_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1dg_zTANTcBFwKDcV3MdsN5Ksw2Hy9fr_?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| hoán vị (hai phần tử) | swap |
| sắp xếp tráo đổi | exchange sort |
| so sánh | compare |