---
markmap:
  colorFreezeLevel: 4
  maxWidth: 240
---

# Quy tắc xác định độ phức tạp

## Độ phức tạp hằng số $O(1)$

- Áp dụng cho phép toán cơ bản trên biến đơn

## Quy tắc lược bỏ hằng số

- $O(c \times f(n)) = O(f(n))$
- $c \times O(f(n)) = O(f(n))$

## Quy tắc cộng

- Còn gọi là *quy tắc lấy max*
- Áp dụng cho:
  
  - Các đoạn mã tuần tự
  - Cấu trúc rẽ nhánh

- $O(f_1(n)) + O(f_2(n)) = O(max(f_1(n), f_2(n)))$

## Quy tắc nhân

- Áp dụng cho vòng lặp
- $O(f_1(n)) \times O(f_2(n)) = O(f_1(n) \times f_2(n))$
