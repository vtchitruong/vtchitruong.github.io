---
icon: material/sort
---

# Insertion sort

!!! abstract "Content summary"

    This lesson introduces the insertion sort algorithm.

---

## Idea

Imagine your class is lining up by height.

Now picture a student named Tèo. Everyone standing in front of Tèo who is taller than him steps one position back, making room. They keep moving back until they find someone shorter or equal to Tèo — then they stop. A gap appears exactly where Tèo should stand, and he slides into that spot.

This is exactly how insertion sort works: it repeatedly takes the next element and inserts it into its correct position among the elements that are already sorted.

!!! note "How the insertion sort algorithm works"

    For each element `A[i]` from the second position (`i = 1`) to the end of the array:

    1. Save the current value `A[i]` into a temporary variable `t`

    (because the original spot will soon be overwritten).

    2. Starting from position `j = i - 1`, move backward through the sorted part:

        - As long as `A[j]` is greater than `t`, shift `A[j]` one position to the right (`A[j + 1] = A[j]`).
        - Stop when:
            
            - You reach the beginning of the array (`j < 0`), or
            - You find an element `A[j]` that is not greater than `t` (`A[j] <= t`).

    3. Insert the saved value `t` into the gap that was created: `A[j + 1] = t`

        (After step 2 stops, `j + 1` is exactly the correct position for the element.)

This way, after each iteration, the first `i + 1` elements are always sorted — the sorted portion grows one element at a time, just like the line of students getting taller and taller from the front.

The main idea is illustrated below:

![Illustration of the core idea](images/sort-algorithm-insertion-sort-illustration.svg){loading=lazy width=300}

---

## Example illustration

![Step-by-step example of insertion sort](images/sort-algorithm-insertion-sort-manual-run.svg){loading=lazy width=360px}

---

## Flowchart

![Flowchart of the insertion sort algorithm](images/sort-algorithm-insertion-sort-flowchart.svg){loading=lazy width=600}

---

## Visualization

<div>
    <iframe width="100%" height="690px" frameBorder=0 src="/grade-11/topic-F3/visualize/insertion-sort.html"></iframe>
</div>   

---

## Writing the program

1\. Import the `numpy` library.

```py linenums="1"
import numpy as np
```

2\. Write the function `insertion_sort()` to implement the insertion sort algorithm.

```py linenums="4"
def insertion_sort(A):
    # Lấy số lượng phần tử của mảng A
    n = len(A)

    # Duyệt từng phần tử A[i] từ 1 đến cuối
    for i in range(1, n):
        # Lưu giá trị của A[i] vào biến tạm t
        t = A[i]

        # Cho j chạy từ i - 1
        j = i - 1

        # Trong khi vẫn còn A[j] và A[j] vẫn lớn hơn t
        while j >= 0 and A[j] > t:
            # Dịch chuyển A[j] sang phải một vị trí
            A[j + 1] = A[j]

            # Giảm j để xét A[j] tiếp theo
            j = j - 1

        # Chèn t vào vị trí j + 1
        A[j + 1] = t # (1)!
```
{ .annotate }

1.  When the `while` loop stops, `j` points to the element that is smaller than or equal to the value being inserted (`t`).

    Therefore, `j + 1` is the correct position where the original `A[i]` (saved in `t`) should be inserted.

3\. Write the main program.

In the main program, we will not ask the user to input the entire array. Instead, we create a fixed array in the code and then call the `insertion_sort()` function to sort the array `Array`.

```py linenums="29"
if __name__ == '__main__':
    # Khởi tạo mảng Array
    Array = np.array([1, 7, 4, 0, 9, 4, 8, 8])

    # In mảng ban đầu
    print(f'Mảng ban đầu chưa sắp xếp: {Array}')

    # Gọi hàm insertion_sort()
    insertion_sort(Array)

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

- [Google Colab](https://colab.research.google.com/drive/1zkDywixSi1Le7XikA4njlg72Kpz5E7dY?usp=sharing){target="_blank"}

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| biến tạm thời | temporatory variable |
| hoán vị (hai phần tử) | swap |
| sắp xếp chèn | insertion sort |
| so sánh | compare |