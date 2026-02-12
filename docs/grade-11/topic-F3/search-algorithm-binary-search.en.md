---
icon: material/table-search
---

# Binary search

!!! abstract "Content summary"

    This lesson introduces the binary search algorithm.

## Overview

Review the general introduction to the search problem and search algorithms [here](search-algorithm-linear-search.en.md/#overview){target="_blank"}.

---

## Binary search algorithm

### Idea

Imagine you’re looking for a word that starts with the letter T in a dictionary.

The dictionary is already open to some page.

You don’t start from page 1. Instead, you look at the current page and decide: "Is the letter T before or after this page?". Then you continue searching only in the half that can contain T.

This is the key idea: keep cutting the search area in half.

Applying the above idea to an array, we need to:

- Determine the **middle element** to split the original array into two sub-arrays: the **left half** and the **right half**.
- **Compare** the middle element with the target value `k` in order to **eliminate** the half that cannot contain `k`.
- **Repeat** the above two steps on the remaining sub-array until either `k` is found or the array can no longer be divided in half.

!!! note "How binary search algorithm works"

    1. Set two pointers:

        - `left` = index of the first element
        - `right` = index of the last element

    2. While `left` is still less than or equal to `right`, repeat the following steps:

        - Calculate the middle index: `mid = (left + right) // 2` (integer division)
        - Compare the middle element with the target `k`:
            
            - If `A[mid] == k` then found! Return `mid` and stop.
            - If `A[mid] < k` then the target must be in the right half. Discard the left half: `left = mid + 1`
            - If `A[mid] > k` then the target must be in the left half. Discard the right half: `right = mid - 1`

    3. When the loop ends (`left > right`), we have no more elements to check. `k` is not in the array. Return `-1`.

        (`-1` is the standard convention for “not found”, since valid array indices start at 0.)

### Example illustration

![Step-by-step example of binary search](images/search-algorithm-binary-search-manual-run.svg){loading=lazy}

### Flowchart

![Flowchart of the binary search algorithm](images/search-algorithm-binary-search-flowchart.svg){loading=lazy}

### Visualization

<div>
    <iframe width="100%" height="760px" frameBorder=0 src="/grade-11/topic-F3/visualize/binary-search.html"></iframe>
</div>

### Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `binary_search()` to implement the binary search algorithm.

The function takes two input parameters:

- The array `A`
- The target value `k`

It returns:

- The index where `k` is found, or
- `-1` if `k` is not found.

``` py linenums="4"
def binary_search(A, k):
    # Khởi tạo mốc trái và mốc phải
    left = 0
    right = len(A) - 1

    # Trong khi left chưa vượt quá right    
    while left <= right:
        # Xác định mid
        mid = (left + right) // 2

        # So sánh A[mid] với k
        if A[mid] == k:
            return mid
        elif A[mid] < k:
            left = mid + 1
        else:
            right = mid - 1

    # Không tìm thấy, trả về -1
    return -1
```

3\. Write the main program.

For simplicity, we will not ask the user to input the entire array. Instead, we create a predefined sorted array in the code, and the user only needs to enter the value they want to search for.

```py linenums="27"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = [0, 1, 2, 4, 4, 4, 5, 5, 7, 8, 8, 9]

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))
```

!!! warning "Important note"

    Before using binary search, the array must be sorted (in ascending or descending order).

We use the `sort()` function from `numpy` to sort the array `Array` in **ascending order** (line 35). The sorted array is stored in `sorted_Array`.

```py linenums="27" hl_lines="9"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Sắp xếp mảng tăng dần
    sorted_Array = np.sort(Array)

    # In mảng sau khi sắp xếp
    print(f'Mảng có thứ tự: {sorted_Array}')
```

Call the `binary_search()` function and store the result (the index where the value was found, or `-1`) in the variable `found` (line 41).

```py linenums="27" hl_lines="15"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Sắp xếp mảng tăng dần
    sorted_Array = np.sort(Array)

    # In mảng sau khi sắp xếp
    print(f'Mảng có thứ tự: {sorted_Array}')

    # Gọi hàm binary_search()
    found = binary_search(sorted_Array, key)
```

Based on the value of `found`, print an appropriate message:

- If the value was found (`found ≠ -1`), display its index.
- If the value was not found (`found == -1`), display a "not found" message.

```py linenums="27" hl_lines="17-22"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5])

    # Cho người dùng nhập giá trị cần tìm
    key = int(input('Nhập giá trị cần tìm: '))

    # Sắp xếp mảng tăng dần
    sorted_Array = np.sort(Array)

    # In mảng sau khi sắp xếp
    print(f'Mảng có thứ tự: {sorted_Array}')

    # Gọi hàm binary_search()
    found = binary_search(sorted_Array, key)

    if found == -1:
        # Nếu chỉ số trả về là -1 thì in ra không tìm thấy
        print(f'Không tìm thấy {key}')
    else:
        # Ngược lại, khác -1, thì in ra tìm thấy tại found
        print(f'Tìm thấy {key} tại vị trí {found}')
```

4\. Run the program above and enter `4`. The output will be:

```pycon
Nhập giá trị cần tìm: 4
Mảng có thứ tự: [0 1 2 4 4 4 5 5 7 8 8 9]
Tìm thấy 4 tại vị trí 5
```

Run the program again and enter `6` as the value to search for. The output will be:

```pycon
Nhập giá trị cần tìm: 6
Mảng có thứ tự: [0 1 2 4 4 4 5 5 7 8 8 9]
Không tìm thấy 6
```

---

## Comparison of the two search algorithms

Here are the main differences between the two algorithms:

| Feature | Sequential search | Binary search |
| --- | --- | --- |
| Idea | Check each element one by one from the start until found. | Repeatedly check the middle element and decide which half to continue searching. |
| Position returned | The first occurrence from the beginning of the array. | Any occurrence (depends on the middle element checked). |
| Best suited for | Small datasets or unsorted data. | Large datasets that are already sorted. |
| Time complexity | $O(n)$ | $O(\log n)$ |

---

## Source code

The complete code is available at:

- [Google Colab](https://colab.research.google.com/drive/1xhy3RfkEaeQQuWfXm1b5Ev_txYnw9jjr?usp=sharing){target="_blank"}

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/search-algorithm-binary-search.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| tìm kiếm nhị phân | binary search |
| mảng con | subarray |
