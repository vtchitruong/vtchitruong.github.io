---
grade: "lớp 11"
grade_url: "/grade-11/grade-11-index/"

level: "chuyên để"
level_url: "/special-topics/g11-cs/topic-index/"

difficulty: "easy"
updated: "04/10/2026"
---

# The Fibonacci sequence

!!! abstract "Abstract"

    This lesson presents the Fibonacci sequence problem using recursion.

## Problem statement

The Fibonacci sequence is defined as follows:

- $F_0 = 0$
- $F_1 = 1$
- $F_n = F_{n - 1} + F_{n - 2} \quad \text{for } n \ge 2$

**Task:**  
Using recursion, write a program to calculate the value of the $n$-th Fibonacci number.

**Input:**  
A non-negative integer $n$.

**Output:**  
The value of the $n$-th Fibonacci number.

**Test cases:**

| No. | Input | Output |
| --- | --- | --- |
| 1 | 0 | 0 |
| 2 | 1 | 1 |
| 3 | 2 | 1 |
| 4 | 3 | 2 | 
| 5 | 4 | 3 |
| 6 | 5 | 5 |
| 7 | 10 | 55 |
| 8 | 30 | 832040 |

---

## Proposed solution

??? tip "Core idea"

    1. **Base cases:**

        This problem has two base cases:

        - When $n = 0$: return `0`.
        - When $n = 1$: return `1`.

    2. **Recursive case:**

        When $n \ge 2$: return $F_n = F_{n - 1} + F_{n - 2}$.

    Example:  
    The diagram below illustrates the process of calculating $\text{fibonacci}(4)$:
        
    ```mermaid
    %%{
    init: {
        'theme': 'default',
        'look': 'classic',
        'flowchart': { 'padding': 15 }
    }
    }%%
    flowchart TD
        F4["fibonacci(4)"] --> F3["fibonacci(3)"]
        F4 --> F2_1["fibonacci(2)"]
        
        F3 --> F2_2["fibonacci(2)"]
        F3 --> F1_1["fibonacci(1) = 1"]
        
        F2_1 --> F1_2["fibonacci(1) = 1"]
        F2_1 --> F0_1["fibonacci(0) = 0"]
        
        F2_2 --> F1_3["fibonacci(1) = 1"]
        F2_2 --> F0_2["fibonacci(0) = 0"]

        classDef root fill:#e0f2fe,stroke:#0284c7,color:#0369a1,rx:1.5rem,ry:1.5rem
        classDef base1 fill:#fef3c7,stroke:#d97706,color:#92400e,rx:1.5rem,ry:1.5rem
        classDef base0 fill:#fce7f3,stroke:#db2777,color:#9d174d,rx:1.5rem,ry:1.5rem

        class F4,F3,F2_1,F2_2 root
        class F1_1,F1_2,F1_3 base1
        class F0_1,F0_2 base0
    ```

??? tip "Writing the program"

    1\. Define the `fibonacci()` function.
    
    The function takes a single parameter `n` and returns the `n`-th Fibonacci number.

    ```py linenums="1"
    def fibonacci(n):
        # Trường hợp cơ sở
        if n == 0:
            return 0
        
        if n == 1:
            return 1

        # Trường hợp đệ quy
        return fibonacci(n - 1) + fibonacci(n - 2)
    ```

    2\. Write the main program:

    - Prompt the user to enter a non-negative integer and store it in the variable `number`.
    - Call the `fibonacci()` function with `number` as the argument and store the returned value in the variable `result`.
    - Print the result.

    ```py linenums="13"
    if __name__ == '__main__':
        number = int(input('Nhập số nguyên không âm: '))

        result = fibonacci(number)
        print(f'Fibonacci[{number}] = {result}')
    ```

    3\. Run the program and enter `10`; the output is as follows:

    ```pycon
    Nhập số nguyên không âm: 10
    Fibonacci[10] = 55
    ```

---

## Source code

The complete source code is available at:

- [Google Colab](https://colab.research.google.com/drive/176a-A851JGV_YITz7kM-qWzTde6STgBn?usp=sharing){target="_blank"}
- [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/special-topics/recursion/fibonacci.py){target="_blank"}