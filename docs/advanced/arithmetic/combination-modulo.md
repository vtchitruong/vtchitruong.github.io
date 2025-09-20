# Tính tổ hợp modulo

## Yêu cầu

Tính tổ hợp modulo $C(n, k) \pmod{10^9 + 7}$.

## Input

```
n = 10
k = 5
```

## Ouput

```
C(10, 5) = 252
```

## Cách giải đề xuất

### Ý tưởng chính

Ta có:

C(n, k) = \frac{n!}{k!(n-k)!} = n! \cdot (k!(n-k)!)^{-1}

Định lý Fermat nhỏ (Fermat's Little Theorem) phát biểu rằng:

$a^p \equiv a \pmod p$

Suy ra nếu $a$ không chia hết cho $p$ thì:

$a^{p-1} \equiv 1 \pmod p$

Nhân cả hai vế với $a^{-1}$, ta được:

$a^{p-2} \equiv a^{-1} \pmod p$

Điều này có nghĩa rằng $a^{p-2}$ là nghịch đảo modulo $p$ của $a$.

Như vậy, ta cần có các hàm sau:

- Hàm tính nghịch đảo modulo
- Hàm tính luỹ thừa modulo
- Hàm tính tổ hợp modulo

### Viết chương trình

**Bước 1:**

Viết hàm tính nghịch đảo modulo.

=== "C++"

    ```c++ linenums="36"
    // Hàm tính nghịch đảo modulo M của a
    lli modulo_inverse(lli a)
    {
        return power_modulo(a, M - 2);
    }
    ```

**Bước 2:**

Viết hàm tính luỹ thừa modulo `power_modulo()`.

=== "C++"

    ```c++ linenums="10"
    // Hàm tính luỹ thừa modulo dựa trên thuật toán luỹ thừa nhanh
    lli power_modulo(lli a, lli b)
    {
        // Giảm a xuống modulo M để tránh tràn số
        a %= M;

        // Khởi tạo kết quả bằng 1
        lli res = 1;

        // Trong khi số mũ b vẫn chưa bằng 0
        while (b > 0)
        {
            // Nếu b là số lẻ thì nhân kết quả hiện hành với a và lấy modulo M 
            if (b & 1) res = (res * a) % M;

            // Dù b là chẵn hay lẻ thì vẫn tính luỹ thừa 2 của a
            a = (a * a) % M;

            // Dịch bit của b sang phải, tương đương với chia b cho 2
            b >>= 1;
        }

        return res;
    }
    ```

**Bước 3:**

Viết hàm tính tổ hợp modulo.


=== "C++"

    ```c++ linenums="43"
    // Hàm tính tổ hợp modulo
    lli combination(lli n, lli k)
    {
        if (k > n) return 0;

        // Khởi tạo mảng f (factorial) để lưu các giá trị giai thừa
        vector<lli> f(n + 1, 1);

        // Tính các giá trị giai thừa
        for (lli i = 1; i <= n; ++i)
        {
            f[i] = (f[i - 1] * i) % M;
        }

        // Tính tổ hợp modulo
        return (f[n] * modulo_inverse((f[k] * f[n - k]) % M)) % M;
    }
    ```

## Mã nguồn

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/thnc/blob/main/arithmetic/modulo/){:target="_blank"}.