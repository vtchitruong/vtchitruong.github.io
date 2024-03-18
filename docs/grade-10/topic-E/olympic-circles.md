# Vẽ vòng tròn Olympic

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn cách vẽ biểu tượng Olympic gồm 5 vòng tròn lồng vào nhau.  
    Các thao tác đề cập:  

    - Nhập tọa độ **X** và **Y** cho đối tượng
    - Nhân đôi đối tượng bằng **Ctrl+D**
    - Nhập mã màu bằng bảng **Fill and Stroke**
    - **Difference** và **Intersection**
    - Tách đối tượng ra nhiều phần bằng lệnh **Break Apart**

## Bước 1. Vẽ hai hình tròn đồng tâm

1. Vẽ hình tròn xám:
    - **Fill**: màu xám
    - **Stroke**: không màu
    - **Width** và **Height**: 100

2. Vẽ hình tròn cam:
    - **Fill**: màu cam
    - **Stroke**: không màu
    - **Width** và **Height**: 80

3. Đặt hình tròn cam nằm trên hình tròn xám và đồng tâm bằng các nút lệnh trong **Align and Distribute**. Kết quả như hình 1.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHcbblUUZv1FMeSzab4-MSk6BOQbnUI2h3sapNragEB3SjUxPABmA9ICwqFdiGeJp4Ihc_5bELajpaqAKzDlnZRGpzV68-FlU6Rzo9jEec-Qf2dbK8kH=w1200){ width=480 loading=lazy}

    Hình 1. Hai hình tròn đồng tâm

## Bước 2. Tạo vòng tròn Olympic đầu tiên

1. Quét chọn cả hai hình tròn.
2. Chọn menu **Path**.
3. Chọn mục **Difference** (1) để tạo vòng tròn Olympic.
    { .annotate }

    1. **Difference** dùng để lấy phần hiệu của hai đối tượng, là phần còn lại sau khi đã xóa phần giao.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHdvvyGKzH5lsjMDDtQDCO8YRiNRXWV60VWt8_C-ptxa5xyrb2Cc8GiEE8hQQUXKWeNrG1VFlDGsQ3n8lVtLmn-g8z0WqmCPalpXhzc43FkAfKumbNw3=w1200){ width=480 loading=lazy}

    Hình 2a. Thao tác Difference

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHeChPMnWs4cOn3LelCQoN7HLcxuGQDwt9NLUIh7IJxPZHP7Y5XbU0nqRpfVdkIj6g786FM0hQ2X6p92SACvKwSBMsBCqcTVWks15EIgnIMaPbvEgsNg=w1200){ width=480 loading=lazy}

    Hình 2b. Vòng tròn Olympic đầu tiên   

## Bước 3. Tạo các vòng tròn Olympic còn lại

1. Chọn vòng tròn đầu tiên vừa tạo.
2. Nhấn ++ctrl+d++ bốn lần để sao chép ra bốn vòng tròn khác.
3. Kéo các vòng tròn đến các vị trí bất kỳ, tách rời nhau để dễ quan sát.
4. Lần lượt nhập tọa độ của các vòng tròn như sau:

    - Vòng tròn 1: (**X**: 0, **Y**: 0)
    - Vòng tròn 2: (110, 0)
    - Vòng tròn 3: (220, 0)
    - Vòng tròn 4: (55, 50)
    - Vòng tròn 5: (165, 50)

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHf7rCC22LWHeOARc-Pni_DNYH0wkDcSTK5V0DVYhLnOhgWEAZn4PWh5v8ZuvlAwdmlzRolL0xoWf3TGE85GbYg5BWMZlTS2Qp2gNNAUema8DmHj1rhj=w1200){ width=600 loading=lazy}

    Hình 3. Vị trí đúng của các vòng tròn

!!! note "Ghi chú"

    Việc tính toán tọa độ chủ yếu dựa trên kích thước của mỗi vòng tròn, cụ thể ở đây, đường kính là 100 và độ dày của phần viền là 10.  

    Hệ trục tọa độ gồm: gốc tọa độ nằm ở góc trên bên trái của trang vẽ, Ox hướng sang phải và Oy hướng xuống. (Khác với lý thuyết trong môn Toán là Oy hướng lên.)  

    Ta cũng có thể căn chỉnh một cách tương đối bằng các nút lệnh trong **Align and Distribute**.

## Bước 4. Tô màu

1. Click chọn vòng tròn 1.
2. Chọn menu **Object**.
3. Chọn mục **Fill and Stroke**.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHfiAHXHuq8VtdqhMJQBiGp7gnOHcjIjSxCCJVeLrgz_sKgWRP9NDpctLJ1bid-2AGEOgbOOVcewtkiomwTdRt86pqDBuAYjY3R0UXSYJeHSo9WHJjE4=w1200){ width=360 loading=lazy}
    
    Hình 4a. Thao tác Fill and Stroke

4. Điền mã màu vào mục **RGBA**: <span style="color: #fff; background-color: #2b75c1">#2b75c1</span>

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHdCj8qFD22gJn_Go2xWxNiiE4nUm7r7XpUXrin0MKnnXgq47ovaxmIrDWzPK7MA7RnkQwr-ZlKuekcMhbTGkatWk4tLWVTFO9f4CPsJwrf4TuxujmGU=w1200){ width=300 loading=lazy}
    
    Hình 4b. Thao tác điền mã màu RGBA

5. Thực hiện tương tự cho 4 vòng tròn còn lại:
    - Vòng tròn 2: <span style="color: #fff; background-color: #000">#000000</span>
    - Vòng tròn 3: <span style="color: #fff; background-color: #ee1641">#ee1641</span>
    - Vòng tròn 4: <span style="color: #fff; background-color: #faad3a">#faad3a</span>
    - Vòng tròn 5: <span style="color: #fff; background-color: #00a34d">#00a34d</span>

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHe1ffLNokMK056N-KM19E6IoOf0I8e-qElTymLDJE5kRLy02U8zMglaLqxLwcBmHCYuIU-SjS8YSsZrS789IfWgQNFeOHLxBiVrmtvWpZ6vLBX-MEXW=w1200){ width=600 loading=lazy}
    
    Hình 4c. Các vòng tròn sau khi tô màu

## Bước 5. Móc các vòng tròn vào nhau

1. Chọn vòng tròn xanh dương và vòng tròn vàng.
2. Nhấn ++ctrl+d++ để sao chép hai vòng tròn này, để chúng không bị mất trong thao tác tiếp theo.
3. Chọn menu **Path**.
4. Chọn mục **Intersection** để lấy ra phần giao của hai vòng tròn.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHcjNZMwvchWKKx92TJnDpV-M6pn3S4o6Fotp9m15dbW7wQ8JM1dkamoSkbDBBN9kOqZlPv0R8cf5jYZEH4MFGb5qGGhxKOutgCe4Cs8_XdecISCN44G=w1200){ width=720 loading=lazy}
    
    Hình 5a. Thao tác lấy phần giao

5. Chọn màu xanh lá để làm nổi bật phần giao.
6. Chọn menu **Path**.
7. Chọn mục **Break Apart** để tách phần giao ra làm hai, tạm gọi là hai *hình thoi*.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHdak7K8Pvxp5iBw6Zj0MgDOe6I2MjjY0x2HI6XWTwEoJzN2UV6bhrXsASDMlFSLD0GvGxpCJeRRtYGSyA-Kr-Xd8D5pP0GkhyFHCP4ozhmYliyM99MI=w1200){ width=720 loading=lazy}
    
    Hình 5b. Phần giao của hai vòng tròn

8. Chọn hình thoi bên dưới và vòng tròn xanh.
9. Chọn menu **Path**.
10. Chọn mục **Difference**. Lúc này, vòng tròn xanh sẽ nằm dưới vòng tròn vàng.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHe8U4U2sQ9FrYfak-G9owsBZol__sW5bug94nXew4Cp8xAvLFT9krCojGCHkC44m2RaSc6t6eLvD4qLV24CGMylZqyA-vvfgmX7fk5H78w6gYcUK-sf=w1200){ width=480 loading=lazy}
    
    Hình 5c. Vòng tròn xanh nằm dưới vòng tròn vàng

11. Chọn hình thoi còn lại và vòng tròn vàng. Thực hiện lại bước 9 và bước 10, để vòng tròn vàng nằm dưới vòng tròn xanh.

    ![Image title](https://lh3.googleusercontent.com/pw/ADCreHcn4CoY_LH2lzWSTY9bF56LslSaCiVlw4jLVUGm0GKPMUMDaOYxZ8uUlvdpqm4x15crOyFd3meLoH32Ga93doHoLl8iPKpDkOaUYZRqyovq2QlrTnY2=w1200){ width=360 loading=lazy}
    
    Hình 5d. Vòng tròn vàng năm dưới vòng tròn xanh

12. Lặp lại các bước từ 1 đến 11 cho các cặp còn lại, ta sẽ được biểu tượng Olympic hoàn chỉnh.

    ![Image title](../topic-E/olympic-circles-600px.svg){loading=lazy}
    
    Hình 5e. Kết quả cuối cùng

## Tải bản vẽ hoàn chỉnh

Bản vẽ hoàn chỉnh đặt tại [Google Drive](https://drive.google.com/file/d/1drwTezgk2Zv0iGbFFXUxIQ9cXpqGz2GW/view?usp=sharing){:target="_blank"}.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| lấy phần giao | intersection |
| lấy phần không giao | difference |
| tác rời các phần | break apart |