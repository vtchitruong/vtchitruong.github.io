---
tags:
    - bitwise
    - mặt nạ bit
level: "nâng cao"
updated: "28/09/2026"
---

# Tổng quan về bitwise

## Khái quát

**Thao tác bitwise** (1) là thuật ngữ để chỉ chung tập hợp các phép toán xử lý trực tiếp trên chuỗi nhị phân.
{ .annotate }

1.  **wise** là tiếp vĩ ngữ có nghĩa là *"theo"* hoặc *"liên quan đến"*. **Bitwise** nghĩa là *"xét riêng từng bit"*.

Trong C++, thao tác ở cấp độ bit giúp:

- Tiết kiệm dung lượng lưu trữ.
- Có thể đạt được tốc độ xử lý tối ưu.

---

## Một số toán tử trên bit

| Toán tử | Tên gọi | Ý nghĩa |
| --- | --- | --- |
| `&` | AND | Chỉ trả về bit `1` khi hai bit ở vị trí tương ứng đều là bit `1`. |
| `|` | OR | Chỉ trả về bit `1` khi ít nhất một trong hai bit ở vị trí tương ứng là bit `1`. |
| `^` | XOR | Chỉ trả về bit `1` khi hai bit ở vị trí tương ứng là khác nhau. |
| `~` | NOT | Đảo ngược các bit: `0` thành `1`, `1` thành `0`. |
| `<<` | Dịch trái (left shift) | Dịch các bit sang trái `p` vị trí. Điền các vị trí trống ở bên phải bằng bit `0`. |
| `>>` | Dịch phải (right shift) | Dịch các bit sang phải `p` vị trí. Loại bỏ các bit ở bên phải. Đối với các bit bên trái thì thì cần xét thêm. |

---

## Tạo chuỗi bit

Tạo chuỗi gồm toàn bit `0` hoặc gồm toàn bit `1`.

=== "C++"

    ```c++ linenums="9"
        // Tạo chuỗi bit 0
        int zeros = 0;
        cout << "Chuỗi 8 bit 0: " << bitset<8>(zeros) << '\n';

        // Tạo chuỗi bit 1
        int ones = ~0;
        cout << "Chuỗi 8 bit 1: " << bitset<8>(ones) << '\n';
    ```

Output:  
```pycon
Chuỗi 8 bit 0: 00000000
Chuỗi 8 bit 1: 11111111
```

---

## OR

Với phép toán OR `|`:

- Để bảo toàn bit `b` bất kỳ, ta dùng bit `0`.
- Để bật/đặt bit `b` bất kỳ thành bit `1`, ta dùng bit `1`.

=== "C++"

    ```c++ linenums="19"
        uint8_t n = 0b10001101;
        uint8_t mask = 0b11110000;

        // Dùng phép toán OR để bật nửa trái thành 1 và bảo toàn nửa phải
        uint8_t or_result = n | mask;

        cout << bitset<8>(n) << " (n)\n";
        cout << "OR\n";
        cout << bitset<8>(mask) << " (mask)\n";
        cout << "--------\n";
        cout << bitset<8>(or_result) << '\n';
    ```

Output:  
```pycon
10001101 (n)
OR
11110000 (mask)
--------
11111101
```

---

## AND

Với phép toán AND `&`:

- Để bảo toàn bit `b` bất kỳ, ta dùng bit `1`.
- Để tắt/xóa bỏ bit `b` bất kỳ, ta dùng bit `0`.

=== "C++"

    ```c++ linenums="34"
        // Dùng phép toán AND để bảo toàn nửa trái và xóa bỏ nửa phải
        uint8_t and_result = n & mask;

        cout << bitset<8>(n) << " (n)\n";
        cout << "AND\n";
        cout << bitset<8>(mask) << " (mask)\n";
        cout << "--------\n";
        cout << bitset<8>(and_result) << '\n';
    ```

Output:  
```pycon
10001101 (n)
AND
11110000 (mask)
--------
10000000
```

---

## Dịch trái

Dịch các bit của một số nguyên `x` sang trái **một vị trí** tương đương với nhân `x` với 2. 

Tương tự, để tính $2^p$, thay vì dùng vòng lặp for để nhân 2 nhiều lần, ta chỉ cần dịch bit `1` (ở hàng đơn vị) sang trái `p` vị trí. Độ phức tạp chỉ là $O(1)$.

=== "C++"

    ```c++ linenums="44"
        int p = 3;

        // Tính 2^p
        unsigned int power = 1U << p;
        cout << "2^" << p << " = " << power << '\n';
    ```

Output:  
```pycon
2^3 = 8
```

---

## Tạo mặt nạ trái

**Mặt nạ trái** là chuỗi gồm `p` bit thấp (nằm bên phải) đều là bit `0` và các bit cao còn lại (nằm bên trái) đều là bit `1`.

Cách tạo:

- Đảo ngược toàn bộ chuỗi bit `0` thành toàn bit `1`.
- Dịch các bit `1` này sang trái `p` vị trí.

=== "C++"

    ```c++ linenums="52"
        // Tạo mặt nạ trái
        uint8_t left = ~0 << p;
        cout << "Mặt nạ trái: " << bitset<8>(left) << '\n';
    ```

Output:  
```pycon
Mặt nạ trái: 11111000
```

---

## Tạo mặt nạ phải

**Mặt nạ phải** là chuỗi gồm `p` bit thấp (nằm bên phải) đều là bit `1` và các bit cao còn lại (nằm bên trái) đều là bit `0`.

Cách tạo:

- Số 1 có duy nhất bit `1`. Dịch bit `1` này sang trái `p` vị trí.
- Đem kết quả trừ đi 1 để lật toàn bộ `p` bit bên phải thành các bit `1`.

=== "C++"

    ```c++ linenums="56"
        // Tạo mặt nạ phải
        uint right = (1U << p) - 1;
        cout << "Mặt nạ phải: " << bitset<8>(right) << '\n';
    ```

Giải thích:  
```pycon
1U << p = 0000 0001 << 3
        = 0000 1000

(1U << p) - 1 = 0000 1000 - 1
              = 0000 1000 - 0000 0001
              = 0000 0111
```

Output:  
```pycon
Mặt nạ phải: 00000111
```

!!! tip "$2^p - 1$"

    $2^p - 1$ luôn là một chuỗi gồm đúng `p` bit `1`.

---

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/bitwise/basic-bitwise){target="_blank"}.