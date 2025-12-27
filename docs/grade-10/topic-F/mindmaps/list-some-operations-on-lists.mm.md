---
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Thao tác trên list

## Chỉ số âm

- Phần tử cuối cùng có chỉ số `-1`

## Lát cắt

- `new_list = L[start:stop:step]`

## Thêm

- `L.append(e)`

  - Thêm vô cuối

- `L.insert(p, e)`

  - Chèn vô vị trí cụ thể

- `L.extend(E)`

  - Thêm danh sách `E` vô danh sách `L`

## Xoá phần tử

- `L.remove(e)`

  - Xoá phần tử theo giá trị

- `L.pop(p)`

  - Xoá phần tử theo vị trí

- `L.clear()`

  - Xoá toàn bộ phần tử

## Đếm

- `L.count(e)`

  - Đếm số lần xuất hiện của `e`

## Tìm kiếm

- `L.index(e)`

  - Tìm vị trí xuất hiện đầu tiên của `e`

## Sắp xếp

- `L.sort()` hoặc `sorted(L)`

  - Sắp xếp tăng dần

- `L.sort(reverse=True)`hoặc<br>`sorted(L, reverse=True)`

  - Sắp xếp giảm dần