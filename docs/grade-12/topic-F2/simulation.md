---
icon: material/globe-model
---

# Kỹ thuật mô phỏng

!!! abstract "Tóm lược nội dung"

    Bài này trình bày đôi nét về kỹ thuật mô phỏng.

## Khái niệm

**Mô phỏng** là quá trình **thiết kế mô hình toán học của một hệ thống thực tế** và thực hiện các **thí nghiệm trên mô hình** đó nhằm hiểu rõ hành vi của hệ thống hoặc đánh giá các chiến lược.

Ví dụ:  
Một số hệ thống được xem là mô phỏng:

- Các trò chơi như: The Sims, Minecraft, Roblox.
- Dự báo thời tiết.
- Thử nghiệm va chạm xe hơi .
- Lây lan virus.

---

## Lợi ích

1. **Tiết kiệm chi phí**

    Xây dựng đối tượng ảo trên máy tính để thử nghiệm rẻ hơn nhiều so với xây dựng đối tượng thật và chờ đợi rủi ro xảy ra.

2. **An toàn**

    Có những điều mà ta không thể thử nghiệm trên người hay vật thật. Trong khi đó, mô phỏng cho phép ta thoải mái thử sai mà vẫn triệt tiêu được rủi ro vật lý và hạn chế thiệt hại. 

3. **Thay đổi thang đo thời gian**

    Mô phỏng cho phép ta chủ động thay đổi thang đo thời gian để quan sát các hệ thống diễn biến chậm.

    Nói cách khác, ta không thể chờ đợi kết quả xảy ra trong thời gian lâu dài như hàng chục hoặc hàng trăm năm tới. Trong khi đó, máy tính có thể đưa ra câu trả lời sau vài giờ tính toán.

---

## Quy trình tạo một hệ thống mô phỏng

Có ba bước chính để tạo ra một hệ thống mô phỏng:

1. **Mô hình hoá:**

    Chuyển các quy luật của thế giới thực thành các công thức toán học.
    
    Ví dụ:  
    Để mô phỏng một chiếc máy bay, ta cần đưa vào các công thức về lực nâng, lực cản, trọng lực và các thông số của vật liệu làm cánh máy bay. 

2. **Thực thi:**

    Máy tính sẽ tính toán hàng triệu phép tính mỗi giây để xem các công thức đó thay đổi thế nào theo thời gian.

    Ví dụ:  
    Khi *"đẩy cần ga"*, máy tính sẽ ngay lập tức tính toán: Với lực đẩy $F$ này, cộng với sức gió hiện tại, vận tốc của máy bay sẽ thay đổi bao nhiêu trong 0.01 giây tới?

3. **Trực quan hoá:**

    Chuyển các con số khô khan thành hình ảnh hoặc biểu đồ để con người dễ dàng quan sát.

    Ví dụ:  
    
    - Thay vì hiển thị số 0.52 rad, máy tính sẽ vẽ hình ảnh cánh máy bay hơi nghiêng.
    - Thay vì hiển thị số 100°C, tức đang quát nhiệt, máy tính sẽ tô màu đỏ lên phần động cơ.

    Trong các hệ thống mô phỏng chuyên nghiệp, bước này còn bao gồm cả âm thanh và tình trạng rung lắc.

Trong thực tế, quy trình này có thể được thực hiện lên đến hàng triệu lần trên máy tính.

---

## Lĩnh vực ứng dụng

Kỹ thuật mô phỏng đang hiện diện trong hầu hết các lĩnh vực trọng yếu của đời sống. Điểm chung trong các lĩnh vực này là dùng sức mạnh của máy tính để thay thế cho những rủi ro và chi phí khổng lồ của thế giới thực.

1. **Y tế và y sinh**

    Bác sĩ phẫu thuật có thể thực tập trên bệnh nhân ảo trước khi bước vào phòng mổ thật.
    
    Thử nghiệm tác động của thuốc mới lên các tế bào giả lập, giúp rút ngắn thời gian nghiên cứu và giảm thiểu rủi ro cho tình nguyện viên.

2. **Giao thông vận tải**

    Các phi công phải trải qua hàng ngàn giờ trên buồng lái giả lập để xử lý các tình huống khẩn cấp.

    Các hãng xe tự hành cho chương trình máy tính chạy hàng tỷ km trong môi trường ảo để học cách nhận diện vật cản và xử lý giao thông trước khi đưa xe ra đường thật.

3. **Dự báo thời tiết và thiên tai**

    Các siêu máy tính phân tích dữ liệu về áp suất, độ ẩm và nhiệt độ nhằm dự báo lộ trình của một cơn bão trước nhiều ngày.

4. **Kiến trúc và xây dựng**

    Trước khi một tòa nhà chọc trời hay một cây cầu được khởi công, các kỹ sư sẽ mô phỏng các tác động của động đất và sức gió nhằm tìm ra điểm yếu trong kết cấu và điều chỉnh ngay từ khâu thiết kế.

5. **Giải trí**

    Các trò chơi như Roblox, Flight Simulator, đua xe F1, v.v... thực chất là những hệ thống mô phỏng vật lý cực kỳ phức tạp.

6. **Quân sự**
    
    Mô phỏng các chiến dịch thực địa hoặc diễn tập chiến thuật giúp binh sĩ làm quen với môi trường chiến đấu mà không cần sử dụng đạn thật hay di chuyển khí tài tốn kém.

---

## Những bài toán thực tế cần mô phỏng

1. **Quy hoạch đô thị và giải toả ùn tắc giao thông**

    Bài toán: Làm sao biết trước một vòng xoay mới sẽ giúp giảm ùn tắc hay lại tạo ra một điểm nghẽn khác?

    Giải pháp: Mô phỏng hàng vạn chiếc xe ảo với các hành vi khác nhau vào sơ đồ đường sá mới để quan sát dòng chảy giao thông.

2. **Thiết kế và thử nghiệm độ bền vật liệu mới**

    Bài toán: Trong việc chế tạo vỏ phi thuyền hoặc áo chống đạn, vật liệu sẽ phản ứng thế nào khi bị va chạm ở vận tốc cực cao?

    Giải pháp: Mô phỏng ở cấp độ phân tử giúp *"nhìn thấy"* cách các nguyên tử liên kết bị phá vỡ khi chịu lực, từ đó tìm ra công thức vật liệu tối ưu trước khi bắt tay vào sản xuất.

3. **Quản lý đám đông và thoát hiểm khẩn cấp**

    Bài toán: Tại sân vận động lớn hoặc nhà ga tàu điện ngầm, lối thoát hiểm có đủ rộng trong trường hợp hoả hoạn không?

    Giải pháp: Mô phỏng tác tử (agent-based simulation), trong đó mỗi người ảo có tâm lý đám đông, tốc độ di chuyển và khả năng quan sát riêng, có thể giúp tìm ra các điểm thắt nút cổ chai trong khu vực liên quan.

4. **Dự báo tác động của biến đổi khí hậu**

    Bài toán: Nước biển dâng thêm 0.5m sẽ ảnh hưởng đến bao nhiêu diện tích canh tác lúa ở đồng bằng sông Cửu Long trong những năm tới?

    Giải pháp: Mô phỏng khí hậu kết hợp dữ liệu thủy văn, địa hình và lượng mưa để vẽ ra các kịch bản nhằm đưa ra các chính sách ứng phó phù hợp ngay từ bây giờ.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/simulation.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| mô phỏng | simulation |