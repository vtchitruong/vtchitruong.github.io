---
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# Tạo bảng trong PostgreSQL

## Bảng có khoá chính gồm nhiều thuộc tính

- `primary key (thuộc_tính_1, thuộc tính_2,...)`

## Tạo khoá ngoại trong lệnh `CREATE TABLE`

- `foreign key (thuộc_tính_của_bảng_con) references bảng_cha(thuộc_tính_của_bảng_cha)`

## Kiểu dữ liệu

- `boolean`
- 'float'
- `text`
