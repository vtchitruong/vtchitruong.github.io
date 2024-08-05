# Mảng hai chiều

## Khái quát

Mảng hai chiều (two-dimensional array) là cấu trúc dữ liệu lưu trữ các phần tử theo dạng bảng.

Mỗi phần tử được truy xuất bằng hai chỉ số: **chỉ số hàng** và **chỉ số cột**.

Trong nhiều ngôn ngữ lập trình, mảng hai chiều tĩnh (static) được khai báo với số hàng và số cột xác định trước. Kích thước bộ nhớ được cấp phát cố định khi khởi tạo và không thay đổi trong suốt thời gian chạy chương trình.

Bài viết này chỉ đề cập đến mảng hai chiều tĩnh.

## Một số thao tác xử lý

### Khai báo biến

Đầu tiên, ta khai báo hằng `MAX`, được dùng làm kích thước tối đa cho hàng và cột của mảng `Arr`.

Giả sử ta muốn khởi tạo mảng hai chiều có số hàng và số cột bằng nhau. Ta khai báo thêm biến `num` để nắm giữ và kiểm soát số lượng hàng và cột thực dùng.

Các biến trên có thể khai báo ở dạng toàn cục, nhằm cho phép truy xuất từ nhiều hàm khác nhau.

```c++ linenums="1"
const int MAX = 100; // hằng số
int Arr[MAX][MAX]; // Khai báo mảng Arr có MAX hàng và MAX cột
int num = 8; // Số phần tử thực dùng là 8x8 = 64 phần tử
```

### Khởi tạo

Để xử lý tất cả phần tử trong mảng một cách tương tự nhau, ta thường sử dụng vòng lặp `for`. Thông thường, vòng `for` dùng để duyệt hàng và vòng `for` trong dùng để duyệt cột.

Hàm `initArrray()` sau đây khởi tạo giá trị 0 cho tất cả phần tử. Hàm này có hai tham số cần truyền vào: thứ nhất là tên mảng cần khởi tạo, thứ hai là số phần tử thực dùng.

```c++ linenums="1"
void initArray(int a[][MAX], int n)
{
    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c < n; c++)
        {
            a[r][c] = 0;
        }
    }
}
```

### In mảng ra màn hình

Hàm `showArray()` in các phần tử ra màn hình theo dạng bảng, gồm 8 hàng và 8 cột. Tham số `message` kèm theo dùng để chứa thông điệp tương ứng với mỗi lần in ra.

```c++ linenums="1"
void showArray(int a[][MAX], int n, string message)
{
    cout << message << ":\n";
    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c < n; c++)
        {
            cout << a[r][c] << ' ';
        }
        cout << '\n';
    }
}
```

Trong hàm `main()`, ta gọi các hàm vừa viết ra thực hiện.

```c++ linenums="1"
int main()
{
    num = 8;
    initArray(Arr, num);
    showArray(Arr, num, "Initial array");

    return 0;
}
```

Output:

```pycon
Initial array:
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
```

### Truy xuất đường chéo chính

Mảng hai chiều đang xử lý còn được xem là ma trận vuông. Đường chéo chính bao gồm các phần tử nằm từ góc trên bên trái đến góc dưới bên phải của ma trận, trong đó chỉ số hàng bằng chỉ số cột (`a[i][i]`).

Hàm `fillMainDiagonal()` dùng để gán giá trị `value` cho các phần tử nằm trên đường chéo chính.

```c++ linenums="1"
void fillMainDiagonal(int a[][MAX], int n, int value)
{
    for (int i = 0; i < n; i++)
    {
        a[i][i] = value;
    }
}
```

Trong hàm `main()`, ta gọi hàm vừa viết để gán `1` cho đường chéo chính.

```c++ linenums="1"
int main()
{
    // ...

    // Gán 1 cho các phần tử nằm trên đường chéo chính
    fillMainDiagonal(Arr, num, 1);
    showArray(Arr, num, "Modify the main diagonal");

    return 0;
}
```

Output:

```pycon
Modify the main diagonal:
1 0 0 0 0 0 0 0
0 1 0 0 0 0 0 0
0 0 1 0 0 0 0 0
0 0 0 1 0 0 0 0
0 0 0 0 1 0 0 0
0 0 0 0 0 1 0 0
0 0 0 0 0 0 1 0
0 0 0 0 0 0 0 1
```

### Truy xuất nửa tam giác dưới

Hàm `fillLowerTriangle()` dùng để gán giá trị `value` cho các phần tử nằm trong vùng tam giác dưới so với đường chéo chính.

Ý tưởng:

Duyệt hàng bằng biến `r`. Ứng với mỗi hàng `r`, thực hiện:

&emsp;Duyệt cột bằng biến `c`, bắt đầu từ cột `0` cho đến cột liền trước cột `r`. Ứng với mỗi cột `c`, gán `value` cho `a[r][c]`.

```c++ linenums="1"
void fillLowerTriangle(int a[][MAX], int n, int value)
{
    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c < r; c++)
        {
            a[r][c] = value;
        }
    }
}
```

Trong hàm `main()`, ta gọi hàm vừa viết để gán `2` cho vùng tam giác dưới.

```c++ linenums="1"
int main()
{
    // ...

    // Gán 2 cho các phần tử nằm trong vùng tam giác dưới
    fillLowerTriangle(Arr, num, 2);
    showArray(Arr, num, "Modify the strictly lower triangle");

    return 0;
}
```

Output:

```pycon
Modify the strictly lower triangle:
1 0 0 0 0 0 0 0
2 1 0 0 0 0 0 0
2 2 1 0 0 0 0 0
2 2 2 1 0 0 0 0
2 2 2 2 1 0 0 0
2 2 2 2 2 1 0 0
2 2 2 2 2 2 1 0
2 2 2 2 2 2 2 1
```

### Truy xuất nửa tam giác trên

Hàm `fillUpperTriangle()` dùng để gán giá trị `value` cho các phần tử nằm trong vùng tam giác trên so với đường chéo chính.

Ý tưởng:

Duyệt hàng bằng biến `r`. Ứng với mỗi hàng `r`, thực hiện:

&emsp;Duyệt cột bằng biến `c`, bắt đầu từ cột liền sau cột `r` cho đến cột cuối cùng. Ứng với mỗi cột `c`, gán `value` cho `a[r][c]`.

```c++ linenums="1"
void fillUpperTriangle(int a[][MAX], int n, int value)
{
    for (int r = 0; r < n; r++)
    {
        for (int c = r + 1; c < n; c++)
        {
            a[r][c] = value;
        }
    }
}
```

Trong hàm `main()`, ta gọi hàm vừa viết để gán `3` cho vùng tam giác trên.

```c++ linenums="1"
int main()
{
    // ...

    // Gán 3 cho các phần tử nằm trong vùng tam giác trên
    fillUpperTriangle(Arr, num, 3);
    showArray(Arr, num, "Modify the strictly upper triangle");

    return 0;
}
```

Output:

```pycon
Modify the strictly upper triangle:
1 3 3 3 3 3 3 3
2 1 3 3 3 3 3 3 
2 2 1 3 3 3 3 3
2 2 2 1 3 3 3 3
2 2 2 2 1 3 3 3
2 2 2 2 2 1 3 3
2 2 2 2 2 2 1 3
2 2 2 2 2 2 2 1
```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/2DArray/blob/main/static_2d_array.cpp" target="_blank">GitHub</a>.
