---
categories:
    - Algorithmic frolic
    - Set up & Code down
authors: [mrschool]
date: 2015-01-25
---

# Sàng nguyên tố Eratosthenes

<div class="result" markdown>
![Image title](./thumbnails/algorithm.jpg){ align=left width=360 }

Sàng Eratosthenes (The Sieve of Eratosthenes) là thuật toán cổ do nhà toán học Hy Lạp Eratosthenes, sống trong khoảng 276-194 BCE, phát triển nên, dùng để tìm ra tất cả số nguyên tố trong một phạm vi nhất định.
</div>

*Cập nhật: 21.01.2024*

<!-- more -->

<br>

## Ý tưởng

Thuật toán này dựa trên cơ sở, nếu một số tự nhiên $p$ là nguyên tố thì các bội số của $p$ không còn là nguyên tố nữa.

Theo đó, ý tưởng chính của thuật toán là dùng vòng lặp duyệt qua các số tự nhiên và đánh dấu các bội số của $p$.

## Khởi tạo

Ta khởi tạo mảng `prime` có `n` phần tử. Sàng Eratosthenes có thể áp dụng cho giới hạn $10^7$, nên ta gán `n` là 10 triệu, hoặc 100 triệu nếu chấp nhận chạy hơn chậm một chút.

Giả sử mọi số đều là nguyên tố, ta gán giá trị `True` cho tất cả phần tử.

=== "C++"
    ``` c++ linenums="1"
        prime.resize(n + 1, true);
        
        // 0 và 1 không phải số nguyên tố
        prime[0] = false;
        prime[1] = false; 
    ```
=== "Python"
    ``` py linenums="1"
        global n
        global prime
        prime = [True for i in range(n + 1)]   

        # 0 và 1 không phải số nguyên tố
        prime[0] = False
        prime[1] = False
    ```

## Đánh dấu các bội số

Với `p` là một số nguyên tố, thì `2p`, `3p`, `4p`, `5p`, ... đều là số không nguyên tố.

Do đó, ta dùng vòng lặp xuất phát từ `p * p`, với bước nhảy `+p`, để đánh dấu các bội số của `p` là `False`.

=== "C++"
    ``` c++ linenums="1"
        for (int p = 2; p * p <= n; ++p)
        {
            // Nếu p là nguyên tố thì đánh dấu false cho bội của p
            if (prime[p] == true)
            {
                for (int i = p * p; i <= n; i += p)
                {
                    prime[i] = false;
                }
            }
        }
    ```
=== "Python"
    ``` py linenums="1"
        for p in range(2, math.floor(math.sqrt(n)) + 1):
            # Nếu p là nguyên tố thì đánh dấu False cho bội của p
            if prime[p] == True:
                for i in range(p * p, n + 1, p):
                    prime[i] = False
    ```

Sở dĩ xuất phát từ `p * p`, chứ không phải là `p + p`, vì các bội số như `2 * p`, `3 * p`, `4 * p`, `5 * p`, ... đã được xử lý trước đó *khi gặp* các số nguyên tố nhỏ hơn như 2, 3, 5, ...

Sau khi đánh dấu xong, các phần tử còn lại của mảng `prime` mà có giá trị `True` chính là các số nguyên tố.

## Toàn bộ chương trình¶

Code đầy đủ được đặt tại [GitHub](https://github.com/vtchitruong/General/tree/main/Prime){:target="_blank"}.