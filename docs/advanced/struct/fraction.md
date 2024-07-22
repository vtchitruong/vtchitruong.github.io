# Phân số

## Khái quát kiểu cấu trúc

Trong C++, **struct** là kiểu dữ liệu do người dùng tự định nghĩa, cho phép gom nhóm các thành phần có kiểu khác nhau vào chung một đơn vị.

Cụ thể hơn, một struct có thể chứa nhiều thành phần (member) mà mỗi thành phần có kiểu dữ liệu chuẩn tuỳ ý (`int`, `float`, `bool`, v.v...), các thành phần này có thể là biến hoặc hàm (member variable, member function), nhằm biểu diễn một đối tượng nào đó có nhiều thuộc tính.

Ví dụ:

Để biểu diễn điểm trong mặt phẳng, ta có thể định nghĩa struct, đặt tên là `Point` hoặc `Diem`, gồm hai thành phần là x và y, ứng với hoành độ và tung độ.

Để biểu diễn đối tượng học sinh, ta có thể định nghĩa struct, đặt tên là `Student` hoặc `HocSinh`, gồm các thành phần như: họ tên kiểu `string`, năm sinh kiểu `int`, điểm trung bình kiểu `double`.

## Chương trình minh hoạ

Chương trình dưới đây mô tả một vài thao tác toán học liên quan đến phân số.

Vì một phân số gồm tử số và mẫu số nên ta có thể định nghĩa kiểu struct gồm hai thành phần biểu thị tử và mẫu.

### Định nghĩa kiểu struct phân số

Đoạn mã sau định nghĩa một kiểu dữ liệu `struct`, đặt tên là `fraction`, gồm hai thành phần: `n` và `d`, đều có kiểu `int`, biểu thị tử số và mẫu số.

``` c++ linenums="1"
struct fraction
{
    int n; // numerator: tử số
    int d; // denominator: mẫu số
};
```

### Khai báo biến kiểu phân số

Trong hàm `main()`, khai báo hai biến là `a` và `b`, biểu thị phân số thứ nhất và thứ hai.

Do biến `a` có kiểu `fraction`, nên `a` có hai thành phần `n` và `d`. Tương tự đối với biến `b`.

``` c++ linenums="1"
int main()
{    
    fraction a, b;
}
```

### Truy xuất biến kiểu phân số

Khi truy xuất biến `a`, ta truy xuất từng thành phần của `a` bằng toán tử dấu chấm `.`. Tương tự đối với biến `b`.

Đoạn mã sau gán giá trị cho từng phân số, lần lượt là $a = \frac{1}{4}$ và $b = \frac{3}{4}$.

``` c++ linenums="1"
int main()
{    
    fraction a, b;

    // Phân số a
    a.n = 1;
    a.d = 4;

    // Phân số b
    b.n = 3;
    b.d = 4;
}
```

### In giá trị phân số ra màn hình

Hàm `showFraction()` dùng để in giá trị của một phân số ra màn hình.

Nếu mẫu số bằng 1 thì ta chỉ in tử số. Ngược lại, mẫu số khác 1, thì ta in ký tự phân cách `/`.

``` c++ linenums="1"
void showFraction(string message, fraction f)
{
    cout << message;
    
    if (f.d == 1)
        cout << f.n << '\n';
    else
        cout << f.n << '/' << f.d << '\n';
}
```

Trong hàm `main()`, ta gọi hàm `showFraction()` ra thực hiện.

``` c++ linenums="1"
int main()
{    
    fraction a, b;

    // Phân số a
    a.n = 1;
    a.d = 4;
    showFraction("a = ", a);

    // Phân số b
    b.n = 3;
    b.d = 4;
    showFraction("b = ", b);
}
```

Output:

```pycon
a = 1/4
b = 3/4
```

### Cộng và chia và phân số

Hàm `addFractions()` dùng để cộng hai phân số với nhau.

Thao tác cộng hai phân số được thực hiện theo công thức:

$$ \frac{x}{y} + \frac{u}{w} = \frac{x.w + u.y}{y.w} $$


``` c++ linenums="1"
fraction addFractions(fraction f1, fraction f2)
{
    fraction res;

    // Thực hiện quy đồng mẫu số
    res.n = f1.n * f2.d + f2.n * f1.d;
    res.d = f1.d * f2.d;

    // Rút gọn phân số
    res = reduceFraction(res);

    return res;
}
```

Hàm `divideFractions()` dùng để chia phân số thứ nhất cho phân số thứ hai.

Khi chia cho một phân số, ta nhân nghịch đảo của phân số đó:

$$ \frac{x}{y} : \frac{u}{w} = \frac{x}{y} . \frac{w}{u} $$

``` c++ linenums="1"
fraction divideFractions(fraction f1, fraction f2)
{
    fraction res;
    
    // Chia phân số là nhân nghịch đảo
    res.n = f1.n * f2.d;
    res.d = f1.d * f2.n;

    // Rút gọn phân số
    res = reduceFraction(res);

    return res;
}
```

Trong hai hàm cộng và chia trên, hàm `reductionFraction()` được gọi để rút gọn phân số kết quả.

Để rút gọn phân số, ta chia tử và mẫu cho ước chung lớn nhất của chúng. Do đó, ta viết thêm hàm `gcd()` dùng để tìm ước chung lớn nhất của hai số nguyên. 

``` c++ linenums="1"
int gcd(int a, int b)
{
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

fraction reduceFraction(fraction f)
{
    int g = gcd(f.n, f.d);
    
    // Chia tử và mẫu cho cùng một số
    f.n /= g;
    f.d /= g;
    return f;
}
```

Trong hàm `main()`, ta gọi hai hàm `addFractions()` và `divideFractions()` ra thực hiện.

``` c++ linenums="1"
int main()
{    
    // ...

    // a + b
    fraction s = addFractions(a, b);
    showFraction("Sum = ", s);

    // a : b
    fraction q = divideFractions(a, b);
    showFraction("Quotient = ", q);
}
```

Output:

```pycon
Sum = 1
Quotient = 1/3
```

### Chuyển đổi phân số thành số thập phân

Hàm `fractionToDecimal()` dùng để chuyển đổi một phân số thành dạng thập phân, bằng cách lấy tử chia cho mẫu.

Do sử dụng phép chia, ta ép kiểu cho thành phần tử số `n` sang kiểu `double` để kết quả trả về cũng có kiểu `double`.

``` c++ linenums="1"
double fractionToDecimal(fraction f)
{
    return (double) f.n / f.d;
}
```

Trong hàm `main()`, ta gọi hàm `fractionToDecimal()` ra thực hiện.

``` c++ linenums="1"
int main()
{    
    // ...

    // Chuyển phân số q thành thập phân
    double dec = fractionToDecimal(q);
    cout << "To decimal: " << dec << '\n';
}
```

Output:

```pycon
To decimal: 0.333333
```

### So sánh hai phân số

Hàm `compareFractions()` dùng để so sánh hai phân số với nhau. 

Để so sánh, ta nhân chéo tử và mẫu của hai phân số cho nhau, rồi so sánh hai tích này.

Giá trị trả về của hàm là `-1`, `0` và `1`, tương ứng với các trường hợp nhỏ hơn, bằng và lớn hơn.

``` c++ linenums="1"
int compareFractions(fraction f1, fraction f2)
{
    // Nhân chéo và so sánh
    int x = f1.n * f2.d;
    int y = f2.n * f1.d;

    if (x < y) return -1;
    if (x == y) return 0;
    return 1;
}
```

Trong hàm `main()`, ta khai báo phân số thứ ba $c = \frac{1}{8}$, rồi gọi hàm `compareFractions()` để so sánh `a` và `c`.

``` c++ linenums="1"
int main()
{    
    // ...

    // Phân số c
    fraction c;
    c.n = 1;
    c.d = 8;

    // So sánh a và c
    int res = compareFractions(a, c);

    if (res == -1)
        cout << "a < c";
    else if (res == 0)
        cout << "a = c";
    else
        cout << "a > c";

    return 0;
}
```

Output:

```pycon
a > c
```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/Struct/blob/main/fraction.cpp" target="_blank">GitHub</a>.