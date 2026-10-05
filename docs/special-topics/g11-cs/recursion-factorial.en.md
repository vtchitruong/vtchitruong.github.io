---
grade: "lớp 11"
grade_url: "/grade-11/grade-11-index/"

level: "chuyên để"
level_url: "/special-topics/g11-cs/topic-index/"

difficulty: "easy"
updated: "04/10/2026"
---

# Factorial

!!! abstract "Abstract"

    This lesson presents the factorial calculation problem using recursion.

## Problem statement

**Task:**  
Using recursion, write a program to calculate $n!$.

Given that $0! = 1$ and $1! = 1$.

**Input:**  
A non-negative integer $n$.

**Output:**  
An integer representing the factorial of $n$.

**Test cases:**

| No. | Input | Output |
| --- | --- | --- |
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 6 | 720 |
| 4 | 21 | 51090942171709440000 |

---

## Proposed solution

??? tip "Core idea"

    We have the recurrence relation for calculating the factorial as follows:

    $$n! = \begin{cases} 1 & \text{if } n = 0 \text{ or } n = 1 \\ (n - 1)! \times n & \text{if } n > 1 \\ \end{cases}$$

    According to the formula above:

    1. **Base case:** $n = 0$ or $n = 1$.
        
        No further recursive calls are made; the function simply returns `1`. 

    2. **Recursive case:** all remaining values of $n$ (assuming $n$ is not a negative integer).

        The function calls itself with `n - 1` as the parameter to calculate $(n - 1)!$, and then multiplies the result by $n$.

        Example:  
        To calculate $5!$, the function calls itself to compute $(5 - 1)! = 4!$, and then multiplies the result by $5$.  

        Specifically:

        - The `factorial(5)` function recursively calls `factorial(4)`.
        - The `factorial(4)` function recursively calls `factorial(3)`.
        - The `factorial(3)` function recursively calls `factorial(2)`.
        - The `factorial(2)` function recursively calls `factorial(1)`.
        - The `factorial(1)` function makes no further recursive calls and returns `1`.

??? tip "Writing the program"

    1\. Write the `factorial()` function with a single parameter `n`.

    ```py linenums="1"
    def factorial(n):
        # Trường hợp cơ sở
        if n == 0 or n == 1:
            return 1

        # Trường hợp đệ quy
        return factorial(n - 1) * n
    ```

    2\. Write the main program:

    - Prompt the user to enter a non-negative integer and store it in the variable `number`.
    - Call the `factorial()` function with `number` as the argument and store the returned value in the variable `result`.
    - Print the result.

    ```py linenums="10"
    if __name__ == '__main__':
        number = int(input('Nhập số nguyên không âm: '))

        result = factorial(number)
        print(f'{number}! = {result}')
    ```

    3\. Run the program and enter `6`; the output is as follows:

    ```pycon
    Nhập n nguyên dương: 6
    6! = 720
    ```

---

## Source code

The complete source code is available at:

- [Google Colab](https://colab.research.google.com/drive/14yRy1G-tFj5Fov1NgeT8_V8qtWGDPeaQ?usp=sharing){target="_blank"}
- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/special-topics/recursion/factorial.py){target="_blank"}
