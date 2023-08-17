# Kiểu dữ liệu chuỗi của Python

## Khái niệm

***Chuỗi*** là một dãy các ký tự. Một số tài liệu khác sử dụng thuật ngữ *xâu*.  

Trong Python, kiểu dữ liệu chuỗi là `str`. Một chuỗi được đặt trong **cặp nháy đơn** `' '` hoặc **cặp nháy kép** `" "`.  

Chuỗi cũng là danh sách mà mỗi phần tử là một *ký tự*.

## Truy xuất ký tự trong chuỗi

Vì chuỗi cũng là danh sách, nên chuỗi có những đặc điểm tương tự danh sách như:  
- Độ dài của chuỗi là số ký tự có trong chuỗi, biết được nhờ hàm `len()`.  
- Mỗi ký tự được truy xuất dựa trên chỉ số của ký tự đó, chẳng hạn `s[7]` là ký tự có chỉ số 7 của chuỗi `s`.  
- Ký tự đầu tiên có chỉ số là ***0***.  
- Ký tự cuối cùng có chỉ số là `len(s) - 1`.

Ví dụ 1:  

``` py linenums="1"
s = 'Lê Quý Đôn'
print(s[0])           # In ra ký tự đầu tiên (chữ L)
print(s[0])           # In ra ký tự có chỉ số 3 (khoảng trắng)
print(s[7])           # In ra ký tự có chỉ số 7 (chữ Đ)
print(s[len(s) - 1])  # In ra ký tự cuối cùng (chữ n)
```

Ví dụ 2:  
In mỗi ký tự của chuỗi trên một dòng.  

``` py linenums="1"
s = 'Lê Quý Đôn'

n = len(s)
for i in range(n):
    print(s[i])
```

Output:  
``` pycon
L
ê
 
Q
u
ý
 
Đ
ô
n
```


Ví dụ 3:  
In mỗi ký tự của chuỗi trên một dòng, viết theo cách sử dụng toán tử `in`:  

``` py linenums="1"
s = 'Lê Quý Đôn'

for c in s:
    print(c)
```

Ví dụ 4:  
In chuỗi trên cùng một dòng, các ký tự cách nhau bởi khoẳng trắng.  

``` py linenums="1"
s = 'Lê Quý Đôn'
print(*s, sep=' ')
```

Output:  
``` pycon
L ê   Q u ý   Đ ô n
```

## Một số hàm xử lý chuỗi của Python

Python cung cấp sẵn nhiều hàm giúp cho việc xử lý chuỗi được tiện lợi hơn. Dưới đây là một số hàm xử lý chuỗi phổ biến.

### split()
Hàm `split()` có tham số là *ký tự phân cách* các từ trong chuỗi, và *giá trị trả về* là một danh sách mà mỗi phần tử là một từ của chuỗi.


Ví dụ 5:  
Đế biết chuỗi có bao nhiêu từ, trước hết ta tách chuỗi thành một danh sách các từ. Sau đó tính số phần tử có trong danh sách này.  

``` py linenums="1"
s = 'Trường trung học phổ thông Lê Quý Đôn'
 
word_list = s.split(' ')         # (1) Tách chuỗi s thành danh sách word_list chứa các từ
print(word_list)                 # In danh sách
print('Số từ:', len(word_list))  # In ra số phần tử của word_list
```

1. Nếu hàm `split()` không có tham số, thì mặc định Python sẽ tách chuỗi theo *khoảng trắng*. Do đó, dòng lệnh này có thể viết là `word_list = s.split()`.


Output:  
``` pycon
['Trường', 'trung', 'học', 'phổ', 'thông', 'Lê', 'Quý', 'Đôn']
Số từ: 8
```


### join()
Hàm `join()` dùng để ghép các phần tử của danh sách lại thành một chuỗi.

Ví dụ 6:  
Ghép các phần tử trong danh sách `word_list` lại thành chuỗi `s`.  

``` py linenums="1"
word_list = ['Dĩ', 'bất', 'biến', 'ứng', 'vạn', 'biến']

s = ' '.join(word_list)
print(s)
```

Output:  
``` pycon
Dĩ bất biến ứng vạn biến
```

### Toán tử cộng `+`
Toán tử `+` cũng được dùng để nối chuỗi.  


Ví dụ 7:  

``` py linenums="1"
phrase_1 = 'Many thanks'
phrase_2 = 'for reading my website'

s = phrase_1 + ' ' + phrase_2
print(s)
```

Output:

``` pycon
Many thanks for reading my website
```

###  title(), upper(), lower()
- Hàm `title()`: in hoa ký tự đầu tiên của các từ.  
- Hàm `upper()`: in hoa tất cả ký tự.  
- Hàm `lower()`: chuyển tất cả ký tự thành dạng viết thường.  

Ví dụ 8:  

``` py linenums="1"
s = 'Phi điểu tận, lương cung tàng. Giảo thố tử, tẩu cẩu phanh.'

s1 = s.title()
print('Hàm title():', s1)

s2 = s.upper()
print('Hàm upper():', s2)

s3 = s.lower()
print('Hàm lower():', s3)
```

Output:  

``` pycon
Hàm title(): Phi Điểu Tận, Lương Cung Tàng. Giảo Thố Tử, Tẩu Cẩu Phanh.
Hàm upper(): PHI ĐIỂU TẬN, LƯƠNG CUNG TÀNG. GIẢO THỐ TỬ, TẨU CẨU PHANH.
Hàm lower(): phi điểu tận, lương cung tàng. giảo thố tử, tẩu cẩu phanh.
```

### find()

Hàm `find()` dùng để tìm tìm chuỗi trong chuỗi. *Giá trị trả về* của hàm này là ***vị trí xuất hiện đầu tiên*** của *chuỗi con* cần tìm trong chuỗi gốc, hoặc ***-1*** nếu không tìm thấy *chuỗi con*.  

Ta cũng có thể chỉ định ***vị trí bắt đầu*** và ***vị trí kết thúc*** tìm kiếm. Mặc định, hàm `find()` luôn bắt đầu từ vị trí ***0***, nghĩa là bắt đầu từ ký tự đầu tiên, và tìm hết chuỗi, nghĩa là kết thúc ở ký tự cuối cùng.  

Ví dụ 9:  
Xác định xem có chuỗi con 'chi' có trong chuỗi gốc hay không.  

``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.”'

position = s.find('chi')
print(position)
```

Output:  
``` pycon
8
```

Trong ví dụ 9, chuỗi con 'chi' xuất hiện 3 lần trong chuỗi gốc. Tuy nhiên, hàm `find()` chỉ cho biết vị trí xuất hiện đầu tiên, là 8.  

Ví dụ 10:  
Xác định xem từ dấu phẩy đầu tiên trở đi, chuỗi con 'chi' còn xuất hiện hay không.  

``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.'
start = 15

position = s.find('chi', start)
print(position)
```
Output:  

``` pycon
43
```

Trong ví dụ 10, hàm `find()` bắt đầu tìm từ ký tự có chỉ số 15, là dấu phẩy, cho đến hết chuỗi. Lúc này, chuỗi con 'chi' xuất hiện 2 lần, trong đó lần đầu tiên tại vị trí 43.   

Ví dụ 11:  
Xác định xem có ký tự 'T' trong chuỗi hay không.  

``` py linenums="1"
s = 'Hợp bao chi mộc, sinh vu hào mạt; Cửu tằng chi thái, khỏi vu lũy thổ; Thiên lý chi hành, thủy vu túc hạ.'

position = s.find('T')
print(position)
```

Output:  
``` pycon
70
```

Trong ví dụ 11, chuỗi gốc có nhiều ký tự 't', song ký tự cần tìm là 'T' in hoa. Chỉ có một ký tự 'T' in hoa trong chuỗi gốc, xuất hiện tại vị trí 70.  

## Google Colab

Một phiên bản của bài này được đặt trên <a href="https://colab.research.google.com/drive/1wo26gDR7lTDnUH9aMLgAv_UuETyY0KbQ?usp=sharing" target="_blank">Google Colab</a> để người học có thể chạy các đoạn mã ví dụ và thử nghiệm chương trình của riêng mình.  

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| chuỗi, xâu | string |
| dấu nháy đơn `' '`| apostrophe |
| dấu nháy kép `" "` | quotation mark |
| ký tự | character |
| viết in hoa | upper |
| viết thường | lower |
 