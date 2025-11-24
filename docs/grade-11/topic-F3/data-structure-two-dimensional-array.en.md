---
icon: material/table-large
---

# Two-dimensional arrays

!!! abstract "Content summary"

    This lesson introduces two-dimensional arrays.

## Problem statement

How do we handle data that is no longer just a simple list of numbers, but a table of values? For example:

- A class gradebook with multiple columns (subjects).
- A mathematical matrix.
- An image, which is essentially a grid of pixels.

In such cases, a one-dimensional array is no longer sufficient. We need a new structure that can represent data in rows and columns — this is called a **two-dimensional array**.

---

## Concept

A **two-dimensional array** is a data structure used to store elements in a table format with rows and columns.

Each element is identified by two indices:

- The row index
- The column index

Every row has the same number of elements (equal to the number of columns), and all rows are of equal length.

The image below illustrates a two-dimensional array A.

![Illustration of two-dimensional array A](images/data-structure-two-dimensional-array.svg){loading=lazy}

In other words, a two-dimensional array can be thought of as an **array of arrays** — each element in the main array is itself a one-dimensional array (a row).

Real-life examples of two-dimensional arrays:

- A chessboard
- A Sudoku grid
- An Excel spreadsheet

Two-dimensional arrays are ideal for working with:

- Tables
- Grids
- Matrices

---

## Two-dimensional arrays in Python

As in the previous lesson, we will use the open-source library [numpy](https://numpy.org/){target="_blank"} to work with two-dimensional arrays.

### Installing the numpy Library

Refer back to the installation instructions for the `numpy` library [here](data-structure-one-dimensional-array.en.md/#installing-the-numpy-library){target="_blank"}.

### Importing the Library

After installation, import the `numpy` library using the `import` statement. By convention, we use `np` as its short name.

```py linenums="1"
import numpy as np
```

### Initialization  

To create a two-dimensional array, we use the `array()` function from `numpy`.

The elements are listed inside **nested square brackets**: `[[ ], [ ], ..., [ ]]`

Example:  
Line 5 creates the two-dimensional array `A` by explicitly listing its elements.

```py linenums="1" hl_lines="5"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}') # (1)!
```
{ .annotate }

1.  `\n` is the newline character.

Running the code above produces the following output:

```pycon
Mảng A:
[[1 7 4 0]
 [9 4 8 8]
 [2 4 5 5]]
```

To create a two-dimensional array where all elements have the same value, we use the `full()` function from `numpy`.

Example:  
Line 13 creates an array called `zeros` with 3 rows and 4 columns, where every element is `0`.

```py linenums="1" hl_lines="10-14"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}')

    # Khởi tạo mảng zeros gồm 3 hàng, 4 cột, tất cả phần tử đều mang giá trị 0
    row = 3
    col = 4
    zeros = np.full((row, col), 0)
    print(f'Mảng zeros:\n{zeros}')
```

Running the code above produces the following output:

```pycon
Mảng zeros:
[[0 0 0 0]
 [0 0 0 0]
 [0 0 0 0]]
```

### Accessing elements  

Each element is accessed using its **row index** and **column index**, placed inside two pairs of square brackets `[][]`, with the **row index first** and the **column index second**.

Example:  
Lines 11 and 14 print:

- The first element of array `A`
- The element at row 2, column 3 (which is also the last element in this case)

```py linenums="1" hl_lines="11 14"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In mảng
    print(f'Mảng A:\n{A}')

    # In ra phần tử đầu tiên
    print(f'Phần tử đầu tiên: {A[0][0]}')

    # In ra phần tử nằm ở hàng 2, cột 3
    print(f'Phần tử nằm ở hàng 2, cột 3: {A[2][3]}')
```

Running the code above produces the following output:

```pycon
Mảng A:
[[1 7 4 0]
 [9 4 8 8]
 [2 4 5 5]]
Phần tử đầu tiên: 1
Phần tử nằm ở hàng 2, cột 3: 5
```

### Traversing the array

If we treat the two-dimensional array `A` as a list of rows, then each element of `A` is a one-dimensional array (a row).

- To get the number of rows, use `len(A)`.
- To get the number of columns (i.e., the number of elements in each row), apply `len()` to any row — usually the first one: `len(A[0])`.

Example:  
Lines 8 and 12 get the number of rows and columns of array `A` and store them in the variables `row` and `col`.

```py linenums="1" hl_lines="8 12"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In ra số hàng của mảng A
    row = len(A)
    print(f'Số hàng: {row}')

    # In ra số cột của mảng A
    col = len(A[0])
    print(f'Số cột: {col}')
```

Running the code above produces the following output:

```pycon
Số hàng: 3
Số cột: 4
```

When traversing a two-dimensional array, we usually use **two nested loops**:

- The **outer loop** iterates over the **rows**.
- The **inner loop** iterates over the **columns** (i.e., the elements of the current row).

Example:  
Lines 16 to 23 use two nested `for` loops** to print the array `A` in a table-like format.

```py linenums="1" hl_lines="15-23"
import numpy as np

if __name__ == '__main__':
    # Khởi tạo mảng hai chiều A
    A = np.array([[1, 7, 4, 0], [9, 4, 8, 8], [2, 4, 5, 5]])

    # In ra số hàng của mảng A
    row = len(A)
    print(f'Số hàng: {row}')

    # In ra số cột của mảng A
    col = len(A[0])
    print(f'Số cột: {col}')

    # Duyệt hàng từ 0 đến row - 1
    for r in range(row):
        # Duyệt cột từ 0 đến col - 1
        for c in range(col):
            # In ra phần tử tại hàng r, cột c
            print(A[r][c], end=' ') # (1)!

        # Xuống hàng tiếp theo
        print()
```
{ .annotate }

1.  Prints an extra space after each element.

Running the code above produces the following output:

```pycon
Số hàng: 3
Số cột: 4
1 7 4 0 
9 4 8 8 
2 4 5 5 
```

---

## Source code

The complete code is available at:

- [Google Colab](https://colab.research.google.com/drive/1M7LQMTxdGAOcC6tyqgz-1wE6mtlK5bXF?usp=sharing){target="_blank"}

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 500px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/data-structure-two-dimensional-array.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| cột | column |
| hàng | row |
| mảng của mảng | array of arrays |
| mảng hai chiều | two-dimensional array |