# Dãy con tăng dần dài nhất

## Khái quát về bài toán

Bài toán tìm dãy con tăng dần dài nhất (LIS - Longest Increasing Subsequence) là một bài toán kinh điển trong khoa học máy tính và có thể được giải bằng phương pháp quy hoạch động.

Bài toán được phát biểu sơ nét như sau:

Cho một mảng các số nguyên không có thứ tự. Tìm độ dài của dãy con tăng dần dài nhất. Biết rằng dãy con không nhất thiết phải gồm các phần tử liên tiếp nhau trong mảng ban đầu.

Một vài đặc điểm chung của dạng bài này là:

- Có thể sử dụng phương pháp quy hoạch động để giải quyết bài toán, cụ thể bằng cách xây dựng mảng một chiều hoặc hai chiều để lưu trữ các giá trị trung gian và từng bước xây dựng đáp án.

- Nhiều bài dạng này liên quan đến việc tìm dãy con, chứ không phải mảng con. Dãy con thì không đòi hỏi các phần tử phải nằm ở vị trí liên tiếp nhau trong mảng ban đầu.

- Những bài toán tương tự có thể kể đến là: tìm cách sắp xếp tối ưu các phần tử liên quan, tối đa hóa hoặc tối thiểu hóa điều kiện, xác định dãy con dài nhất thỏa điều kiện nào đó.


Application to Real-World Scenarios:
These problems often model real-world scenarios, such as finding the optimal arrangement of elements, maximizing/minimizing certain criteria, or determining the longest sequence that satisfies a specific condition.

Optimal Substructure:
The problems often exhibit optimal substructure, meaning that the optimal solution to the overall problem can be constructed from optimal solutions of its subproblems.

Recurrence Relation:
The core of the dynamic programming solution is often expressed in terms of a recurrence relation. In the LIS problem, for example, the recurrence relation is used to express the length of the LIS ending at the current element in terms of the lengths of LIS ending at previous elements.

Greedy Approach (in some cases):
While dynamic programming is a common approach, some variations might have a greedy solution. For example, the "Russian Doll Envelopes" problem can be solved using a greedy approach.


Ordering Constraints:
The solution often involves maintaining or finding a specific ordering of elements, such as increasing, decreasing, or meeting certain criteria.

Variations in Constraints:
There may be variations of the original problem with additional constraints, such as finding the number of solutions, handling duplicates, or considering subsets with certain properties.

Binary Search Optimization:
Some LIS problems can be further optimized using binary search. For example, the "Longest Increasing Subsequence" problem can be solved more efficiently using a binary search-based algorithm.

Multiple Solutions or Counts:
In some variations, you might be asked to find the length of the LIS, the LIS itself, the number of distinct LIS, or other variations that require additional information.

