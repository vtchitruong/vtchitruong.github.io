# Số nguyên tố

## Khái quát

Số nguyên tố là số tự nhiên lớn hơn 1, chỉ chia hết cho 1 và chính nó.

Ví dụ:

2, 3, 5, 7, 11 và 13 là các số nguyên tố.

Số nguyên tố đóng vai trò quan trọng trong nhiều lĩnh vực của toán học và tin học, đặc biệt là mật mã học và bảo mật thông tin, chẳng hạn như: mã hoá RSA, giao thức trao đổi khoá Diffie-Hellman, hàm hash.

## Chương trình kiểm tra số nguyên tố

Hàm `isPrime()` dùng để kiểm tra một số tự nhiên `n` có phải là nguyên tố hay không.

Ý tưởng chính là xét các trường hợp:

- Trường hợp 1: Nếu `n` là số âm hoặc 0 hoặc 1 thì không phải nguyên tố.
- Trường hợp 2: Nếu `n` là 2 hoặc 3 thì là nguyên tố.
- Trường hợp 3: Nếu `n` chia hết cho 2 hoặc chia hết cho 3 thì không là nguyên tố.
- Trường hợp 4: Với các số `n` còn lại, ta không cần kiểm tra chia cho `i` = 2..`n - 1`, mà chỉ cần kiểm tra từ 5 và 7, và tăng `i` lên 6 trong mỗi lần lặp.

    Nói cách khác, chỉ kiểm tra xem `n` có chia hết cho `i` = 5, 7, 11, 13, 17, 19, v.v... Bởi vì các số nằm giữa những số trên đã thuộc về ba trường hợp đã xét.

    Ngoài ra, ta cũng không chia `i` đến `n - 1`, mà chỉ chia đến $\sqrt{n}$.

Như vậy, với hướng giải quyết như trên, ta đã bỏ qua được nhiều giá trị cần xét, giúp cải thiện đáng kể tốc độ của thuật toán. Độ phức tạp của thuật toán này là $O(\sqrt{n})$.


``` c++ linenums="1"
bool isPrime(int n)
{
    // Số âm, 0, 1 không là nguyên tố
    if (n < 2) return false;

    // 2 và 3 là nguyên tố
    if (n < 4) return true;

    // Hoặc chia hết cho 2, hoặc chia hết cho 3 thì không là nguyên tố
    if (n % 2 == 0) return false;
    if (n % 3 == 0) return false;
    
    // Kiểm tra n có chia hết cho 5, 7, 11, 13, 17, 19, v.v...
    for (int i = 5; i * i <= n; i += 6)
    {
        if (n % i == 0) return false;
        if (n % (i + 2) == 0) return false;
    }

    return true;
}
```

Trong hàm main(), ta tạo mảng numbers gồm các số cần kiểm tra tính nguyên tố, rồi gọi hàm isPrime() ra thực hiện.

``` c++ linenums="1"
int main()
{
    // Các số cần kiểm tra tính nguyên tố
    int numbers[] = {-1, 0, 1, 2, 3, 4, 5, 100000031, 100000032, 100000033, 100000037, 100000039};
    
    // Số phần tử của mảng numbers
    int size = 12; 

    // In ra kết quả
    for (int i = 0; i < size; i++)
    {
        bool check = isPrime(numbers[i]);

        cout << numbers[i] << ": " << check << endl;
    }

    return 0;
}
```

Output:

```pycon
-1: 0
0: 0
1: 0
2: 1
3: 1
4: 0
5: 1
100000031: 0
100000032: 0
100000033: 0
100000037: 1
100000039: 1
```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/General/blob/main/Prime/prime.cpp" target="_blank">GitHub</a>.