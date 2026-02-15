---
icon: material/sort
---

# The sorting problem

!!! abstract "Content summary"

    This lesson introduces the sorting problem.

## Motivation

Given a class gradebook, how can we quickly find the top 10 students with the highest scores?

One simple and effective solution is to sort the entire list in descending order. After that, the first 10 students in the sorted list are exactly the ones with the highest grades.

---

## Problem definition

Sorting data is a fundamental and important task in data processing. It makes searching, retrieving, and analyzing data much easier and faster.

**Sorting** means **rearranging data into a meaningful order**.

In topic F, we only study the simple case of sorting a one-dimensional array in non-decreasing order (1).
{ .annotate }

1.  **Non-decreasing** allows equal values: each next element is greater than or equal to the previous one.

    Meanwhile, **strictly increasing** does not allow duplicates — each next element must be strictly greater than the previous one.

!!! note "Formal problem statement"

    | Input | Output |
    | --- | --- |
    | A one-dimensional array `A` with `n` integers | The same array `A`, now sorted in non-decreasing order |

---

## Sorting algorithms

!!! note "Some sorting algorithms"

    - Selection sort
    - Insertion sort
    - Bubble sort
    - Exchange sort
    - Quick sort
    - Merge sort

Most of them work by comparing elements with each other to decide which one should come first.

---

## Benefits and applications

Sorting data makes it easier to read, faster to search, and simpler to process.

In practice, sorting algorithms are used in a wide variety of problems, including:

- Management systems — sorting IDs, names, dates, locations, etc.
- Graph algorithms such as Prim, Kruskal, and Dijkstra — sorting edges by weight.
- Statistics — finding the median, quartiles, percentiles.
- Removing duplicates, merging datasets, divide-and-conquer strategies, range searches.
- Scheduling and simulation — ordering events by time in games, job schedulers, operating systems, or network packet processing.

Today, almost every programming language and software library already provides built-in, highly efficient sorting functions.

Even so, learning how sorting algorithms work remains very valuable — it helps you develop logical thinking, understand performance differences, and write better code.

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-11/topic-F3/mindmaps/sort-algorithm-sorting-problem.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bài toán sắp xếp | sorting problem |