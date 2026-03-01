---
tags:

---

# # 2025 - 2026 Quảng Ngãi


## Bài 3

### Đề bài


Sau nhiều năm nghiên cứu về người ngoài hành tinh, người ta đã thu được một thông tin mã hóa gồm $n$ đoạn mã. Sau phân tích người ta tính được đoạn mã thứ $i$ có giá trị $a_i (1 \le i \le n)$. Các chuyên gia nghiên cứu đang cần tìm mật mã của đoạn thông tin trên.

Mật mã gồm các đoạn mã liên tiếp mà giá trị của mỗi đoạn mã không vượt quá giá trị mẫu $x$ cho trước và số lượng đoạn mã là nhiều nhất.

**Yêu cầu:** Có $m$ chuyên gia, mỗi chuyên gia cần tìm mật mã với giá trị mẫu không quá $x_j (1 \le j \le m)$. Hãy giúp $m$ chuyên gia tìm ra mật mã theo giá trị mẫu riêng của họ?

**Đầu vào:** BAI3.INP

- Dòng đầu gồm 2 số nguyên $n$ và $m$ $(n,m \le 10^5)$$
- Dòng thứ 2 gồm $n$ số nguyên $a_1, a_2, \cdots, an (\left| a_i \right| \le 10^9)$
- $m$ dòng tiếp theo, mỗi đòng gồm một số nguyên $x_j (\left| x_j \right| \le 10^9)$

**Đầu ra:** BAI3.OUT

Gồm $m$ dòng, mỗi dòng ghi một số nguyên là độ đài của mật mã tương ứng theo
yêu cầu.


---

## Bài 4

### Đề bài

Cho số nguyên dương $n$ và dây số nguyên $A = (a_1, a_2, \cdots, a_n)$,

**Yêu cầu:** Tìm một dây con dài nhất gồm các phần tử liên tiếp của A thỏa măn: Tồn tại một số nguyên $d > 1$ sao cho mọi phần tử trong dãy con đó đều chia hết cho $d$.

**Đầu vào:** BAI4.INP

- Dòng 1 chứa số nguyên dương $T (T \le 106)$ là số test.
- T nhóm dòng tiếp theo, mỗi nhóm gồm 2 dòng mô tà một test:

    - Dòng 1 chứa số nguyên dương $n \le 10^6$;
    - Dòng 2 chứa $n$ số nguyên $a_1, a_2, \cdots, a_n$ cách nhau bởi dấu cách
($\forall i: \left| a_i \right| \le 10^6$).

**Đầu ra:** BAI4.OUT

$T$ dòng, mỗi dòng tương ứng với mỗi test, ghi ra một số nguyên duy nhất
trên một dòng là độ dài dãy con tìm được. Nếu không tồn tại dãy con thỏa
mãn điều kiện thì in ra số $0$.

**Ví dụ:**

| BAI4.INP | BAI4.OUT | Giải thích |
| --- | --- | --- |
| 5<br>3<br>1 2 3<br>8<br>2 6 12 15 27 1 81 5<br>6<br>2 4 6 8 10 12<br>12<br>4 5 7 9 4 5 7 9 4 5 7 9<br>3<br>1 1 1 | 1<br>4<br>6<br>1<br>0 | Test 1: dãy con tìm được chỉ có một phần tử có thể chọn: (2} hoặc (3}<br>Test 2: dãy con tìm được ${6, 12, 15, 27}$<br>Test 3: dây con tìm được chính là dãy A<br>Test 4: dãy con tìm được chỉ có một phần tử.<br>Test 5: không tìm được dãy con thỏa điều kiện yêu cầu. |

**Ràng buộc:**

- Subtask 1: 40% số test (40% số điểm): $T \le 100$ và $n \le 100$
- Subtask 2: 60% số test (60% số điểm): không có ràng buộc gì thêm

