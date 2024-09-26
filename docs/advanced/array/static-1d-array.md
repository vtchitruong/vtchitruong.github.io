# Mảng một chiều

## Khái quát

**Mảng một chiều** (one-dimensional array) là cấu trúc dữ liệu cơ bản trong lập trình, lưu trữ một tập hợp các phần tử có cùng kiểu dữ liệu.

Mỗi phần tử có hai thông tin cần quan tâm: **giá trị** và **chỉ số**.

Giá trị của mỗi phần tử được truy xuất thông qua chỉ số của nó. Chỉ số, hay còn gọi là **vị trí** của mỗi phần tử, được đánh từ `0` đến `n - 1`, trong đó, `n` là số phần tử hoặc kích thước của mảng.

Xét theo khía cạnh quản lý bộ nhớ, mảng được phân thành hai loại: mảng tĩnh và mảng động.

Bảng 1. Những điểm khác nhau cơ bản giữa mảng tĩnh và mảng động

| &nbsp; | Mảng tĩnh | Mảng động |
| --- | --- | --- |
| Kích thước | Cố định, được xác định khi khai báo | Có thể thay đổi trong quá trình chạy chương trình |
| Bộ nhớ | Được cấp phát trước khi chương trình chạy | Được cấp phát và giải phóng linh hoạt |
| Quản lý bộ nhớ | Đơn giản hơn | Phức tạp hơn, có thể gây rò rỉ bộ nhớ nếu không cẩn thận |

Bài viết này chỉ đề cập đến mảng tĩnh (static array).

## Một số thao tác xử lý

### Khai báo biến

Đầu tiên, ta khai báo hằng `MAX`, được dùng làm kích thước tối đa của mảng `Arr`.

Song tuỳ vào bài toán, chỉ sử dụng một số lượng phần tử nào đó, nên ta khai báo thêm biến `num` để nắm giữ và kiểm soát số lượng thực dùng này.

Các biến trên có thể khai báo ở dạng toàn cục, nhằm cho phép truy xuất từ nhiều hàm khác nhau.

```c++ linenums="1"
const int MAX = 1000; // hằng số, đồng thời là kích thước tối đa của mảng
int Arr[MAX]; // khai báo mảng Arr có MAX phần tử
int num; // số phần tử thực dùng
```

### Khởi tạo

Để xử lý tất cả phần tử trong mảng một cách tương tự nhau, ta thường sử dụng vòng lặp `for`.

Hàm `initArrray()` sau đây khởi tạo giá trị ngẫu nhiên cho tất cả phần tử. Hàm này có hai tham số cần truyền vào: thứ nhất là tên mảng cần khởi tạo, thứ hai là số phần tử thực dùng.

```c++ linenums="1"
void initArray(int a[], int n)
{
    // Seed the random number generator
    srand(time(0)); // (1)!

    for (int i = 0; i < n; i++)
    {
        a[i] = rand() % 10; // (2)!
    }
}
```
{ .annotate. }

1.  `srand()` dùng để khởi tạo bộ sinh số ngẫu nhiên, với hạt giống là thời gian hiện tai do `time(0)` trả về.

    Nếu không dùng `srand()` thì bộ số ngẫu nhiên luôn là cố định trong bất kỳ lần chạy chương trình nào.

2.  `rand() % 10` sẽ làm cho `a[i]` nhận giá trị ngẫu nhiên từ 0 đến 9.

### In mảng ra màn hình

Hàm `showArray()` in các phần tử ra màn hình trên cùng một dòng, phân cách nhau bằng khoảng trắng. Tham số `message` kèm theo dùng để chứa thông điệp tương ứng với mỗi lần in ra.

```c++ linenums="1"
void showArray(int a[], int n, const string& message)
{
    cout << message << endl;
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << ' ';
    }
    cout << '\n';
}
```

Trong hàm `main()`, ta gọi các hàm vừa viết ra thực hiện.

```c++ linenums="1"
int main()
{ 
    num = 10; 
    initArray(Arr, num);
    showArray(Arr, num, "Initial array:");
}
```

Output:

```pycon
Initial array:
1 7 4 0 9 4 8 8 2 4
```

### Tính tổng và trung bình cộng

Hàm `sumArray()` dùng để tính tổng các phần tử trong mảng bằng cách cộng dồn lần lượt từng phần tử.

Hàm này được viết theo dạng truyền vào hai tham số, do đó, có thể áp dụng cho mảng một chiều khác bất kỳ.

```c++ linenums="1"
int sumArray(int a[], int n)
{
    int s = 0;
    for (int i = 0; i < n; i++)
    {
        s += a[i];
    }
    return s;
}
```

Hàm `average()` dùng để tính trung bình cộng của các phần tử, bằng cách gọi lại hàm `sumArray()`, rồi chia cho `n` là số lượng phần tử thực dùng.

```c++ linenums="1"
float average(int a[], int n)
{
    float res = (float) sumArray(a, n) / n; // (1)!
    return res;
}
```
{ .annotate. }

1.  `(float)` dùng để chuyển đổi (cast) kiểu dữ liệu cho `sumArray(a, n)` từ `int` sang `float`.

    Trong C++, khi một số `float` chia cho một số `int` (trường hợp này là `n`), thì số `int` đó cũng được chuyển đổi thành `float`.

### Thêm phần tử vào mảng

Hàm `append()` dùng để thêm một phần tử vào cuối mảng.

Hàm này kiểm tra xem số phần tử thực dùng, là `num`, có vượt quá sức chứa tối đa của mảng hay chưa. Nếu chưa, nghĩa là vẫn còn chỗ để thêm phần tử mới, thì thêm bằng cách: gán giá trị mới cho phần tử tại vị trí `num` và tăng `num` thêm một đơn vị.

```c++ linenums="1"
void append(int a[], int *n, int value)
{
    if (*n == MAX)
    {
        cout << "The array is full.\n";
    }
    
    a[(*n)++] = value; // (1)!
}
```
{ .annotate. }

1.  Trình tự thực thi của dòng lệnh này như sau:

    1. Truy xuất `Arr[num]` dựa trên `num`.
    2. Gán `value` cho `Arr[num]`.
    3. Tăng `num` thêm một đơn vị.

Hàm `insert()` dùng để thêm một phần tử mới có giá trị `value` vào vị trí cho trước `pos` trong mảng.

Ý tưởng chính của hàm này là dịch chuyển từng phần tử trong phạm vi `pos..num` về cuối mảng một vị trí nhằm để chỗ trống `pos` cho phần tử mới chèn vào.

```c++ linenums="1"
void insert(int a[], int *n, int position, int value)
{
    // Kiểm tra position nằm ngoài phạm vi cho phép
    if (position < 0 || position > *n)
    {
        cout << "Position out of range.\n";
        return;
    }

    // Kiểm tra mảng đã đầy
    if (*n >= MAX)
    {
        cout << "Array is full.\n";
        return;
    }

    // Đẩy các phần tử ra sau một vị trí
    for (int i = *n; i > position; i--)
    {
        a[i] = a[i - 1];
    }

    // Chèn phần tử mới vào vị trí trống
    a[position] = value;
    (*n)++;
}
```

Trong hàm `main()`, ta gọi các hàm vừa viết ra thực hiện.

```c++ linenums="1"
int main()
{ 
    // ...

    int valueToAppend = 999;
    append(Arr, &num, valueToAppend);
    showArray(Arr, num, "Append:");

    int valueToInsert = 777;
    int positionToInsert = 6;
    insert(Arr, &num, positionToInsert, valueToInsert);
    showArray(Arr, num, "Insert:");

    return 0;
}
```

Output:

```pycon
Mảng trước đó:
1 7 4 0 9 4 8 8 2 4
Append:
1 7 4 0 9 4 8 8 2 4 999
Insert:
1 7 4 0 9 4 777 8 8 2 4 999
```

### Xoá phần tử khỏi mảng

Hàm `removeLast()` dùng để xoá phần tử cuối cùng trong mảng.

Trong hàm này, ta chỉ cần giảm `num` đi một đơn vị, do `num` là biến dùng để kiểm soát số lượng phần tử thực dùng.

```c++ linenums="1"
void removeLast(int a[], int *n)
{
    if (*n == 0)
    {
        cout << "Array is already empty.\n";
        return;
    }
    
    // Giảm số phần tử
    (*n)--;
}
```

Hàm `removeAt()` dùng để xoá phần tử tại vị trí `position` cho trước.

Ý tưởng chính là dịch chuyển từng phần tử trong phạm vi `[position + 1..n - 1]` lên trước một vị trí nhằm *ghi đè* phần tử tại `position`.

```c++ linenums="1"
void removeAt(int a[], int *n, int position)
{
    if (position < 0 || position >= *n)
    {
        cout << "Position out of range.\n";
    }

    // Đẩy các phần tử qua trái một vị trí
    for (int i = position; i < *n - 1; i++)
    {
        a[i] = a[i + 1];
    }

    (*n)--;
}
```

Trong hàm `main()`, ta gọi các hàm vừa viết ra thực hiện.

```c++ linenums="1"
int main()
{ 
    // ...

    removeLast(Arr, &num);
    showArray(Arr, num, "Remove last:");

    int positionToRemove = 6;
    removeAt(Arr, &num, positionToRemove);
    showArray(Arr, num, "Remove at some position:");

    return 0;
}
```

Output:

```pycon
Mảng trước đó:
1 7 4 0 9 4 777 8 8 2 4 999
Remove last:
1 7 4 0 9 4 777 8 8 2 4
Remove at some position:
1 7 4 0 9 4 8 8 2 4
```

## Mã nguồn

Code đầy đủ được đặt tại <a href="https://github.com/vtchitruong/Array/blob/main/static_1d_array.cpp" target="_blank">GitHub</a>.
