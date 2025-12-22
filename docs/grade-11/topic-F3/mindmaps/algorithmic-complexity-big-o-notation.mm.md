---
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Độ phức tạp

## Ký hiệu

- $O(f(n))$

  - Thường dùng cho trường hợp xấu nhất

## Cách xác định

- $T(n) = O(f(n))$

- Chọn $c$ và $n_0$ sao cho:
    
    $T(n) \le c \times f(n)$, với mọi $n \ge n_0$

## So sánh

- Nếu $f_1(n) < f_2(n)$ thì $O(f_1(n))$ được đánh giá tốt hơn.