---
markmap:
    colorFreezeLevel: 2
    maxWidth: 360
---

# Xây dựng cơ sở dữ liệu

## Thêm thuộc tính cho bảng

- Cú pháp SQL `ALTER TABLE ... ADD COLUMN`

## Liên kết hai bảng

- Bước 1: xác định thuộc tính chung: **khoá ngoại** trong bảng con và **khoá chính** trong bảng cha. 
- Bước 2: tạo tham chiếu từ khoá ngoại đến khoá chính (tạo ràng buộc khoá ngoại)
        
    - Cú pháp SQL `ALTER TABLE ... ADD CONSTRAINT`

## Cập nhật dữ liệu

- Cú pháp SQL `UPDATE ... SET`
