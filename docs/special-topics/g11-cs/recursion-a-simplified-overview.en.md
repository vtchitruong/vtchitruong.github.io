---
grade: "lớp 11"
grade_url: "/grade-11/grade-11-index/"

level: "chuyên để"
level_url: "/special-topics/g11-cs/topic-index/"

difficulty: "easy"
updated: "04/10/2026"
---

# Overview of recursion

!!! abstract "Abstract"

    This lesson provides an overview of recursion, including:

    - The concept
    - The general structure of a recursive function

## Concept

Some complex problems can be broken down into subproblems that have a **similar structure** but a **smaller input size**.

Leveraging this property, **recursion** solves the original problem by solving similar subproblems until the problem becomes small enough to be solved directly.

!!! note "Recursion"

    A programming technique in which **a function calls itself** to solve smaller instances of the original problem.

---

## Core idea

A valid recursive function must consist of two main components:

1. **Base case**

    - The simplest instance of the problem that can be **solved directly without making further recursive calls**.
    - The mandatory termination condition. Without it, the recursive process will repeat infinitely, causing a call stack overflow and crashing the program.

2. **Recursive case**

    - The section of code that specifies **how the function calls itself** with smaller or simpler input parameters.
    - Every recursive call must guarantee progress toward the base case.

---

## Pseudocode

A recursive function can be expressed in general as follows:

```py
def recursion(n):
    # Base case: stopping condition
    if n is simplest_case:
        return base_value

    # Recursive case: reduce size and combine results
    sub_result = recursion(simpler_n) 
    return combine(n, sub_result)
```

---

## Some recursive problems

Some problems that can be solved using recursion:

<div class="grid cards" markdown>

-   :material-calculator:{ .lg .middle } **Arithmetic**

    - **Factorial**: $n! = n \times (n-1)!$ where $0! = 1$.
    - **Fibonacci sequence**: $F(n) = F(n-1) + F(n-2)$ where $F(0)=0, F(1)=1$.
    - **Exponentiation**: $a^n = a \times a^{n-1}$ where $a^0 = 1$.
    - **Greatest common divisor**: $\text{gcd}(a, b) = \text{gcd}(b, a \pmod b)$ where $\text{gcd}(a, 0) = a$.

-   :material-code-string:{ .lg .middle } **Strings and arrays**

    - **String reversal**: recursively reverse the substring from the second character onward, then append the first character to the end.
    - **Palindrome checking**: compare the first and last characters, then recursively check the remaining inner substring.
    
-   :material-sitemap-outline:{ .lg .middle } **Generation and backtracking algorithms** 

    - **Tower of Hanoi**: move $n$ disks from a source peg to a target peg using an auxiliary peg.
    - **Permutation generation**: place each element sequentially and recursively generate subsequent positions.
    - **Eight queens puzzle**: place 8 queens on a chessboard such that no two queens attack each other.

-   :material-file-tree:{ .lg .middle } **Divide and conquer**

    - **Sorting algorithms**: Quicksort, Mergesort.
    - **Binary tree traversal**: preorder, inorder, and postorder traversal.

</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |