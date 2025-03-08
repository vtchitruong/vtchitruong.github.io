---
markmap:
  colorFreezeLevel: 3
  maxWidth: 300
---

# Danh sách liên kết đơn

## Khái niệm

- Mỗi node 

    - `data`: lưu dữ liệu
    - `next`: lưu địa chỉ node tiếp theo
        - Trỏ đến `None` nếu là node cuối cùng

- `head` lưu địa chỉ của node đầu tiên

## Duyệt

- `current = head`
- `while current is not None: làm_gì_đó`

## Chèn và xoá node

- Dùng hai con trỏ `previous` và `current`
