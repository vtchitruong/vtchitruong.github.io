# Chia lấy dư

## Khái quát

**Phép toán modulo**, ký hiệu `%` trong lập trình, là một cách để **quy đồng** (normalize) các giá trị lớn về một hệ số hữu hạn, giúp chúng "*quay vòng*" trong một khoảng giới hạn thay vì tăng vô hạn.

Trong phép toán modulo, một số chia (modulus) phổ biến là $10^9 + 7 (1,000,000,007)$, thường được dùng trong các bài toán liên quan đến giá trị lớn, chẳng hạn như: tính số cách thực hiện, tính toán liên quan đến giai thừa, tổ hợp.

## Lý do chọn 10^9 + 7

Việc chọn $10^9 + 7$ không phải ngẫu nhiên mà nhằm hướng đến sự cân bằng giữa toán học, hiệu suất phần cứng và thực tiễn.

- **Về mặt toán học:**

    $10^9 + 7$ là số nguyên tố.
    
    Với số chia là số nguyên tố, phép toán modulo (phép chia lấy dư) sẽ có thêm những tính chất quan trọng, chẳng hạn như: mọi số không chia hết cho số nguyên tố $p$ sẽ có nghịch đảo modulo $p$. Nói cách khác, nếu $p$ không phải nguyên tố, một số số nguyên sẽ không có nghịch đảo modulo, dẫn tới lỗi trong các phép tính như chia hoặc lũy thừa.
    
    Ta có thể chọn số nguyên tố khác như $998,244,353$ hoặc $10^9 + 9$, nhưng $10^9 + 7$ nên được ưu tiên chọn vì nó là số nguyên tố nhỏ nhất lớn hơn $10^9$.

- **Về mặt hiệu suất:**

    Kết quả của phép toán modulo $10^9 + 7$ luôn nằm trong đoạn $\lbrack 0, 10^9 + 6 \rbrack$, vừa khớp với kiểu `int` 32-bit (tối đa $2^{31}-1 \approx 2 \times 10^9$) hoặc `long long` 64-bit.

    Khi nhân hai số lớn, chẳng hạn: $a \times b$, với $a, b \approx 10^9$, kết quả trung gian có thể lên đến $10^{18}$ – vẫn nằm trong `long long` (tối đa $9 \times 10^{18}$). Sau đó lấy modulo mà không lo tràn bộ nhớ (overflow).

    Nếu chọn số lớn hơn thì có thể gây tràn bộ nhớ sớm hơn khi nhân.
    
    Ngoài ra, với $10^9 + 7$, các phép tính modulo sẽ nhanh hơn vì nó gần với lũy thừa của 10.
    
- **Về mặt thực tiễn:**

    $10^9 + 7$ đã trở thành tiêu chuẩn thực tế được áp dụng rộng rãi (de facto standard) trên các hệ thống, nền tảng, thư viện, template code và thuật toán.

## Các phép toán modulo cơ bản

### Cộng modulo

Cộng hai số và lấy dư:

```cpp
(a + b) % M = ((a % M) + (b % M)) % M
```

Ví dụ:

Nếu $a = 10^9, b = 8$ và $M = 10^9+7$ thì

$$
\begin{align*}
&(10^9 + 8) \% (10^9+7) \\
&= (10^9 \% (10^9+7) + 8 \% (10^9+7)) \% (10^9+7) \\
&= 1
\end{align*}
$$

Sau đây ta thử viết một hàm để kiểm tra biểu thức biến đổi trên.

=== "C++"

    ```cpp linenums="12"
    void check_add_modulo(lli a, lli b)
    {
        // vế trái
        lli left = (a + b) % M; 
        
        // vế phải
        lli right = (a % M + b % M) % M;

        cout << "a = " << a << "\n";
        cout << "b = " << b << "\n";

        cout << "vế trái == vế phải: ";
        
        if (left == right)
            cout << "true\n";
        else
            cout << "false\n"; 
    }
    ```

### Trừ modulo

Trừ hai số và lấy dư, bảo đảm kết quả không âm:

```cpp
(a - b) % M = ((a % M) - (b % M) + M) % M
```

Ví dụ:

Nếu $a = 5, b = 8$ và $M = 10^9+7$ thì

$$
\begin{align*}
&(5 - 8) \% (10^9+7) \\
&= ((5 \% (10^9+7)) - (8 \% (10^9+7)) + (10^9+7)) \% (10^9+7) \\
&= (5 - 8 + 10^9+7) \% (10^9+7) \\
&= (10^9+4)
\end{align*}
$$

### Nhân modulo

Nhân hai số và lấy dư:

```cpp
(a * b) % M = ((a % M) * (b % M)) % M
```

Ví dụ:

Nếu $a = 10^5, b = 10^4$ và $M = 10^9+7$ thì

$$
\begin{align*}
&(10^5 * 10^4) \% (10^9+7) \\
&= ((10^5 \% (10^9+7)) * (10^4 \% (10^9+7))) \% (10^9+7) \\
&= (10^5 * 10^4) \% (10^9+7) \\
&= 10^9 \% (10^9+7) = 10^9
\end{align*}
$$

### Chia modulo

Chia modulo là nhân với nghịch đảo modulo (modular inverse).

```cpp
(a / b) % M = (a * b^(-1)) % M
```

Trong đó, `b^(-1)` là nghịch đảo modulo của `b` sao cho `(b * b^(-1)) % M = 1`

### Lũy thừa modulo

Để tính `a^b % M`, ta sử dụng thuật toán lũy thừa nhanh (exponentiation by squaring):

=== "C++"

    ```cpp linenums="33"
    lli power_modulo(lli a, lli b)
    {
        // Giảm a xuống modulo M để tránh tràn số
        a %= M;

        // Khởi tạo kết quả bằng 1
        long long res = 1;
        
        // Trong khi số mũ b vẫn chưa bằng 0
        while (b > 0)
        {
            // Nếu b là số lẻ
            // thì nhân kết quả hiện hành với a và lấy modulo M 
            if (b & 1)                
                res = (res * a) % M;
            
            // Dù b là chẵn hay lẻ thì vẫn tính luỹ thừa 2 của a
            a = (a * a) % M;
            
            // Dịch bit của b sang phải, tương đương với chia b cho 2
            b >>= 1;
        }
        
        return res;
    }
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/tree/main/arithmetic/modulo){:target="_blank"}.