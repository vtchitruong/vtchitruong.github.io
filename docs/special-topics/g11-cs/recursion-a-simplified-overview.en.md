# Overview of recursion

!!! abstract "Content summary"

    This lesson covers recursion, including:
    - The concept
    - The general structure of a recursive function

## Concept

Some problems can be broken down into smaller, similar subproblems.

Recursion takes advantage of this by solving the original problem through solving these smaller subproblems.

!!! note "Recursion"

    **Recursion** is a programming technique where **a function calls itself** to solve the original problem.

---

## Core concept

In a recursive function, we must define two types of cases:

1. **Base case**

    This is a subproblem that can be solved **directly**, without further recursion.

    When this case is reached, the recursion stops.

    In other words, if the base case is not defined, recursion will continue forever, causing stack overflow (memory error), and the problem will never be solved.

2. **Recursive case**

    This defines **how the function calls itself** with a smaller version of the problem. Usually, we use a recurrence relation to make the recursive call.

    Each recursive call brings us closer to the base case. Recursion ends when the base case is reached.

---

## Pseudocode

A recursive function can be written in this general form:

```py
def recursion(n):
    # Base case
    if n is base_case:
        return some_base_value

    # Recursive case
    return recursion(simpler_n)
```

---

# Some problems solved using recursion

Here are common problems that can be solved with recursion:

1. Factorial: $n!$
2. Fibonacci sequence
3. Tower of Hanoi
4. Power: $a^n$
5. Greatest Common Divisor (GCD) using Euclid’s algorithm
6. Reverse a string
7. Check if a string is a palindrome
8. Generate permutations or combinations
9. N-Queens problem
10. Divide-and-conquer algorithms: quick sort, merge sort
11. Binary tree traversal: preorder, postorder, inorder

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| đệ quy | recursion |
| trường hợp cơ sở | base case |
| trường hợp đệ quy | recursive case |