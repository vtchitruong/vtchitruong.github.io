# Chuyển đổi số giữa các hệ đếm

## Hệ đếm

Hệ thống số đếm, gọi tắt là hệ đếm, là cách thức biểu diễn các con số bằng các ký tự hình tượng hoặc chữ số.  

Hệ đếm phổ biến nhất là **hệ thập phân**, được con người sử dụng hằng ngày. Hệ thập phân là hệ cơ số 10, sử dụng 10 ký số gồm `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` và `9` để tạo thành các con số khác nhau.  

:   Ví dụ 1:  
    39000 là giá của một ly cà phê sữa đá; 9.5 là điểm số của một bài kiểm tra. Hai con số này đều thuộc hệ thập lục phân.  

Máy tính lưu trữ và xử lý dữ liệu dưới dạng bit 0 và bit 1, gọi là **hệ nhị phân**. Các con số trong hệ nhị phân đều được tạo thành từ hai ký số `0` và `1`.  

:   Ví dụ 2:  
    1101 là số thuộc hệ nhị phân.  

!!! note "Quy ước ghi cơ số của hệ đếm"
    Số 1101 có thể bị hiểu nhầm là số nhị phân hoặc số thập phân, vì hai hệ đếm này đều có ký số 0 và 1. Do đó, để phân biệt, ta nên ghi cơ số kèm theo bên cạnh. Chẳng hạn:  

    - $1101_{10}$ là số thuộc hệ thập phân.  
    - $1101_2$ là số thuộc hệ nhị phân.

Một hệ đếm phổ biến khác là **hệ thập lục phân**. Hệ thập lục phân giúp biểu diễn các số nhị phân theo cách ngắn gọn hơn, từ đó dễ đọc hơn. Hệ thập lục phân thường dùng để biểu diễn: giá trị của màu sắc, địa chỉ trong bộ nhớ máy tính, địa chỉ mạng IPv6.  

Hệ thập lục phân sử dụng 16 ký số: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` và `A`, `B`, `C`, `D`, `E`, `F`. Trong đó, giá trị của các ký số dạng chữ là:  

| Ký số | Giá trị |
| --- | --- |
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |

## Chuyển đổi từ hệ nhị phân sang hệ thập phân

!!! abstract "Hệ 2 → hệ 10"

    1. Lấy mỗi chữ số nhân với cơ số 2 và lũy thừa với số mũ tương ứng.
    2. Số mũ được tính từ phải sang trái, bắt đầu từ 0, 1, 2, v.v...
    2. Cộng tất cả với nhau.

:   Ví dụ 3:

    $101_2 = 1.2^2 + 0.2^1 + 1.2^0 = 4 + 0 + 1 = 5_{10}$

    $1101_2 = 1.2^3 + 1.2^2 + 0.2^1 + 1.2^0 = 8 + 4 + 0 + 1 = 13_{10}$ 

    Vậy, số 101 nhị phân có giá trị là 5 trong hệ thập phân; số 1101 nhị phân có giá trị là 13 trong hệ thập phân.  

    Nói cách khác, máy tính *hiểu* và tính toán với số 101 giống như người hiểu và tính toán với số 5.   

## Chuyển đổi từ hệ thập phân sang hệ nhị phân

!!! abstract "Hệ 10 → hệ 2"

    1. Lấy số ban đầu chia 2, ghi nhận số dư.
    2. Lấy thương chia tiếp cho 2, ghi nhận số dư.
    3. Lặp lại thao tác chia như trên, cho đến khi thương bằng 0.
    4. Ghép các số dư theo hướng từ dưới ngược lên trên, ta được số nhị phân cần tìm.

:   Ví dụ 4:  
    <div>
        <iframe width="100%" height="200px" frameBorder=0 src="../convert-number-systems/dec-to-bin.html"></iframe>
    </div>

    Vậy $13_{10} = 1101_2$.  

    Nói cách khác, để lưu trữ số 13, máy tính lưu trữ 8 bit là 00001101.  

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| chuyển đổi | convert |
| hệ đếm | number system, numerical system |
| hệ nhị phân | binary |
| hệ thập phân | decimal |
| hệ thập lục phân | hexadecimal |

