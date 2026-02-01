---
icon: material/data-matrix
---

# Thực hành khoa học dữ liệu

!!! abstract "Tóm lược nội dung"

    Bài này hướng dẫn một số thao tác sắp xếp và lọc dữ liệu trên Microsoft Excel. 


## Khái quát

Dữ liệu Covid được lấy từ [GitHub](https://github.com/CSSEGISandData/COVID-19){target="_blank"} của [Đại học John Hopkins](https://coronavirus.jhu.edu/pandemic-data-initiative/data-outlook/u-s-surpasses-100-million-reported-covid-19-cases){target="_blank"}, và được Mr School chuyển đổi sang định dạng Excel để tiện cho việc thực hành.

Tải tập tin Excel [tại đây](./data-science/Covid-19-Global-2022-01.xlsx){target="_blank"}.

Bảng sau mô tả các trường dữ liệu trong tập tin:

| Trường dữ liệu | Mô tả |
| --- | --- | 
| FIPS | Mã Tiêu chuẩn Xử lý Thông tin Liên bang dùng để định danh duy nhất cho từng hạt (hoặc quận) tại Hoa Kỳ. |
| Admin2 | Tên của hạt (hoặc quận). Chỉ áp dụng cho Hoa Kỳ. |
| Province_State | Tên tỉnh, bang hoặc vùng lãnh thổ. |
| Country_Region | Tên quốc gia hoặc vùng lãnh thổ, tuân theo theo cách gọi chính thức của Bộ Ngoại giao Hoa Kỳ. |
| Last Update | Lần cập nhật cuối cùng, theo định dạng Tháng/Ngày/Năm. |
| Latitude và Longitude | Vĩ độ và kinh độ dùng để đánh dấu các điểm trên bảng điều khiển. Tất cả các điểm hiển thị trên bản đồ (ngoại trừ Úc) đều dựa trên tâm điểm địa lý, không đại diện cho một địa chỉ  cụ thể nào hoặc bất kỳ địa điểm nào chi tiết hơn cấp tỉnh hoặc bang. Các điểm tại Úc nằm ở trung tâm của thành phố lớn nhất trong mỗi bang. |
| Confirmed | Số ca gồm cả bị nhiễm có xác nhận lẫn nghi nhiễm (nếu có báo cáo). |
| Deaths | Số ca gồm cả tử vong có xác nhận lẫn nghi tử vong (nếu có báo cáo). |
| Recovered | Số ca hồi phục, ước tính dựa trên báo cáo của truyền thông địa phương hoặc báo cáo của chính quyền địa phương (nếu có). Do đó, có thể thấp hơn đáng kể so với con số thực tế. Sau một thời gian, dữ liệu này đã ngừng cập nhật. |
| Active | Số ca đang điều trị = tổng ca nhiễm - tổng ca hồi phục - tổng ca tử vong. Giá trị này chỉ mang tính chất tham khảo sau khi hệ thống ngừng báo cáo số ca hồi phục. |
| Incident rate | Tỷ lệ nhiễm = số ca nhiễm tính trên 100,000 dân. |
| Case fatality ratio | Tỷ lệ tử vong (%) = Số ca tử vong được ghi nhận / Số ca nhiễm. |

Tất cả trường hợp nhiễm bệnh, tử vong và hồi phục là dựa trên ngày báo cáo cho hệ thống. Các trường hợp ngoại lệ sẽ được ghi chú trong các phần bổ sung về "Điều chỉnh dữ liệu" hoặc "Báo cáo hồi cứu".

!!! warning "Về mục đích của bài tập"

    Bài tập chỉ hướng đến việc luyện tập thao tác với dữ liệu và quan sát dữ liệu, chứ không hướng đến việc xét mối liên hệ giữa các biến số cũng như không nhằm phân tích chuyên sâu về dịch bệnh.

## Làm quen dữ liệu

### Câu 1

**Yêu cầu:** Hãy hình dung độ lớn của dữ liệu bằng cách xem có tất cả bao nhiêu mẫu tin.

??? tip "Cách giải đề xuất"

    **Cách 1:**
    
    1. Cuộn dọc xuống cuối bảng dữ liệu.
    2. Quan sát số hàng ở cạnh trái của cửa sổ Excel để biết tổng số mẫu tin.

    **Cách 2:**
    
    1. Đặt trỏ chuột vào ô bất kỳ trong cột bất kỳ.
    2. Nhấn tổ hợp phím ++ctrl+arrow-down++ để di chuyển nhanh đến cuối cột dữ liệu.
    3. Quan sát số hàng ở cạnh trái của cửa sổ Excel để biết tổng số mẫu tin.

    **Đáp án:** 4016 mẫu tin.

### Câu 2

**Yêu cầu:** Có bao nhiêu khu vực của Bỉ được đề cập, kể cả vùng Unknown?

??? tip "Cách giải đề xuất"

    1. Trong cột **Country_Region**, cuộn xuống tìm `Belgium`.
    2. Đếm số hàng tương ứng trong cột **Country_Region**.

    **Đáp án:** 12 khu vực.

### Câu 3

**Yêu cầu:** Singapore có bao nhiêu ca nhiễm hoặc nghi nhiễm (Confirmed)?

??? tip "Cách giải đề xuất"

    1. Nhấn tổ hợp phím ++ctrl+f++ để mở hộp thoại tìm kiếm.
    2. Nhập từ khoá `Singapore` vào ô **Find what**.
    3. Click nút **Find All** hoặc **Find Next** để bắt đầu tìm.
    4. Xem hàng tương ứng ở cột **Confirmed**.

    **Đáp án:** 279,861 ca.


!!! note "Giữ cố định hàng tiêu đề"

    1. Chọn tab **View**.
    2. Click nút **Freeze Panes**.
    3. Chọn **Freeze Top Row**.

### Câu 4

**Yêu cầu:** Tỷ lệ tử vong (Case fatality ratio) của Madrid, Tây Ban Nha là bao nhiêu?

??? tip "Cách giải đề xuất"

    1. Nhấn tổ hợp phím ++ctrl+f++ để mở hộp thoại tìm kiếm.
    2. Nhập từ khoá `Madrid` vào ô **Find what**.
    3. Click nút **Find All** hoặc **Find Next** để bắt đầu tìm.
    4. Xem hàng tương ứng ở cột **Case_Fatality_Ratio**.

    **Đáp án:** ~1.4%.

## Sắp xếp dữ liệu

!!! note "Sắp xếp theo một cột"

    1. Click ô bất kỳ trong cột cần sắp xếp.
    2. Chọn tab **Data**.
    3. Click nút **Sort A to Z** để sắp xếp tăng dần.

        Hoặc click nút **Sort Z to A** để sắp xếp giảm dần.

!!! note "Sắp xếp theo nhiều cột"

    1. Nhấn tổ hợp phím ++ctrl+a++ để chọn toàn bộ bảng dữ liệu.
    2. Chọn tab **Data**.
    3. Click nút **Sort**.
    4. Trong hộp thoại **Sort** hiện ra, click nút **Add Level** để thêm các cấp độ sắp xếp.
    5. Với mỗi cấp độ, chọn các cột cần sắp xếp và thứ tự tăng dần hoặc giám dần.
    6. Click **OK**.

### Câu 1

**Yêu cầu:** Những quốc gia hoặc tỉnh, bang nào có số ca nhiễm (Confirmed) cao nhất?

??? tip "Cách giải đề xuất"

    1. Click ô bất kỳ trong cột **Confirmed**.
    2. Chọn tab **Data**.
    3. Click nút **Sort Z to A** để sắp xếp từ lớn đến nhỏ.
    4. Quan sát những hàng đầu tiên.

    **Đáp án:** United Kingdom, France, Turkey, India, v.v...    

### Câu 2

**Yêu cầu:** Những khu vực nào có tỷ lệ tử vong (Case fatality ratio) cao nhất?

??? tip "Cách giải đề xuất"

    1. Click ô bất kỳ trong cột **Case_Fatality_Ratio**.
    2. Chọn tab **Data**.
    3. Click nút **Sort Z to A** để sắp xếp giảm dần.
    4. Quan sát những hàng đầu tiên.

    **Đáp án:** Illinois, Florida, Unknown (Belgium), Puerto Rico, Nebraska, Maryland, Minnesota, v.v...

    Lưu ý:
    
    - Illinois và Florida có tỷ lệ tử vong lớn hơn 100% là sai thực tế. Trong khoa học dữ liệu, chúng được gọi là **dữ liệu nhiễu** (noise). Ta nên loại bỏ hoặc chỉnh sửa để không làm sai lệch kết quả thống kê cuối cùng.
    - Unknown của Belgium có tỷ lệ tử vong 81%. Trong khoa học dữ liệu, nó được gọi là **dữ liệu ngoại lai** (outlier), có thể đúng hoặc sai. Nếu ngoại lại mà đúng, ta phải giữ lại để nghiên cứu tại sao nó lại đặc biệt như vậy.

### Câu 3

**Yêu cầu:** Hãy sắp xếp bảng dữ liệu theo tên quốc gia và tên các tỉnh, bang của quốc gia đó theo thứ tự bảng chữ cái.

??? tip "Cách giải đề xuất"

    1. Nhấn ++ctrl+a++ để chọn toàn bộ dữ liệu.
    2. Chọn tab **Data**.
    3. Click nút **Sort**.
    4. Trong hộp thoại **Sort** hiện ra:
    
        - Mục **Column**, chọn **Country_Region**.
        - Mục **Sort On**, chọn **Cell Values**.
        - Mục **Order**, chọn **A to Z**.
        - Click nút **Add Level**.
        - Mục **Then by**, chọn **Province_State**.
        - Mục **Sort On**, chọn **Cell Values**.
        - Mục **Order**, chọn **A to Z**.
        - Click **OK**.

## Lọc dữ liệu

!!! note "Bật/tắt bộ lọc"

    1. Đặt trỏ chuột vào ô bất kỳ trong bảng dữ liệu.
    2. Chọn tab **Data**.
    3. Click nút **Filter** để bật hoặc tắt tính năng lọc.

!!! note "Lọc theo điều kiện mới"

    Trước khi lọc cho điều kiện tiếp theo, ta cần xoá bộ lọc hiện tại bằng cách:

    1. Chọn tab **Data**.
    2. Click nút **Clear**.

    Sau đó mới thực hiện lọc theo điều kiện mới.

### Câu 1

**Yêu cầu:** Việt Nam có bao nhiêu ca nhiễm và bao nhiêu ca tử vong vào thời điểm đó?

??? tip "Cách giải đề xuất"

    1. Đặt trỏ chuột vào ô bất kỳ trong bảng dữ liệu.
    2. Chọn tab **Data**.
    3. Click nút **Filter** để bật tính năng lọc dữ liệu.
    4. Click mũi tên của cột **Country_Region**.
    5. Bỏ chọn **Select All**.
    6. Chọn **Vietnam**.
    7. Xem hàng tương ứng ở cột **Confirmed** và cột **Deaths** .

    **Đáp án:** 1,746,092 ca nhiễm và 32,610 ca tử vong.

### Câu 2

**Yêu cầu:** Có bao nhiêu khu vực trên thế giới đã vượt quá 1 triệu ca nhiễm tại thời điểm đó?

??? tip "Cách giải đề xuất"

   

    1. Click mũi tên của cột **Confirmed**.
    2. Chọn **Number Filters** > **Greater Than...**.
    3. Nhập giá trị `1000000` vào ô bên phải.
    4. Click **OK**.
    4. Đếm số hàng còn lại.

    **Đáp án:** 53 khu vực.

### Câu 3

**Yêu cầu:** Những khu vực nào có tỷ lệ tử vong thấp hơn 0.5%?

??? tip "Cách giải đề xuất"

    1. Click mũi tên của cột **Case_Fatality_Ratio**.
    2. Chọn **Number Filters** > **Less Than...**.
    3. Nhập giá trị `0.5` vào ô bên phải.
    4. Click **OK**.
    5. Đếm số hàng còn lại. Hoặc nhìn góc trái dưới của cửa sổ Excel để biết số hàng đã lọc.

    **Đáp án:** 301 khu vực.

### Câu 4

**Yêu cầu:** Vùng nào của Ý có tỷ lệ tử vong cao nhất (Case fatality ratio) so với cả nước?

??? tip "Cách giải đề xuất"

    1. Click mũi tên của cột **Country_Region**.
    2. Bỏ chọn **Select All**.
    3. Gõ tìm hoặc chọn **Italy**.
    4. Click mũi tên của cột **Case_Fatality_Ratio**.
    5. Chọn **Sort Largest to Smallest**.
    6. Xem hàng đầu tiên của cột **Province_State**.

    **Đáp án:** Liguria với tỷ lệ tử vong là 3.02%.

### Câu 5

**Yêu cầu:** Quảng Tây xếp thứ mấy trong số các tỉnh của Trung Quốc về số lượng ca nhiễm (Confirmed)? Biết rằng số ca nhiễm nhiều nhất thì xếp hạng nhất.

??? tip "Cách giải đề xuất"

    1. Click mũi tên của cột **Country_Region**.
    2. Bỏ chọn **Select All**.
    3. Chọn **China**.
    4. Click mũi tên của cột **Confirmed**.
    5. Chọn **Sort Largest to Smallest**.
    6. Trong cột **Province_State**, tìm hàng `Guangxi`.

    **Đáp án:** hạng 23.

### Câu 6

**Yêu cầu:** Những quốc gia hoặc tỉnh, bang nào có số ca nhiễm (Confirmed) lớn hơn 500 ngàn và tỷ lệ tử vong (Case fatality ratio) nhỏ hơn 1%.

??? tip "Cách giải đề xuất"

    1. Click mũi tên của cột **Confirmed**.
    2. Chọn **Number Filters** > **Greater Than...**.
    3. Nhập giá trị `500000` vào ô bên phải.
    4. Click **OK**.
    5. Click mũi tên của cột **Case_Fatality_Ratio**.
    6. Chọn **Number Filters** > **Less Than...**.
    7. Nhập giá trị `1` vào ô bên phải.
    8. Click **OK**.
    9. Đếm số hàng còn lại.

    **Đáp án:** Assam (India), Serbia, Thailand, ..., Mongolia, Denmark, United Arab Emirates.

### Câu 7

**Yêu cầu:** Có bao nhiêu thành phố của bang California có tỉ lệ nhiễm (Incident rate) từ 50 ngàn trở lên?

??? tip "Cách giải đề xuất"

    1. Click mũi tên của cột **Province_State**.
    2. Bỏ chọn **Select All**.
    3. Chọn **California**.
    4. Click mũi tên của cột **Incident rate**.
    5. Chọn **Number Filters** > **Greater Than or Equal To...**.
    6. Nhập giá trị `50000` vào ô bên phải.
    7. Click **OK**.
    8. Đếm số hàng còn lại.

    **Đáp án:** Không có thành phố thoả yêu cầu.