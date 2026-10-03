---
icon: octicons/ai-model-24
grade: "lớp 12"
grade_url: "/grade-12/grade-12-index/"

level: "phổ thông"
level_url: "/grade-12/grade-12-index/"

difficulty: "easy"
updated: "01/10/2026"
---

# Giới thiệu Trí tuệ Nhân tạo

!!! abstract "Tóm lược nội dung"

    Bài này trình bày sơ lược về Trí tuệ Nhân tạo, bao gồm:
    
    - Khái niệm về Trí tuệ Nhân tạo
    - Năng lực của Trí tuệ Nhân tạo
    - Phân loại Trí tuệ Nhân tạo

## Khái niệm

!!! note "Trí tuệ Nhân tạo"

    Là một nhánh của Khoa học Máy tính, tập trung vào việc **nghiên cứu và phát triển các hệ thống** thông minh có năng lực thực hiện **các nhiệm vụ đòi hỏi trí tuệ như con người** (1). Từ đây viết tắt là **AI**.
    { .annotate }

    1. Các năng lực đòi hỏi hỏi trí tuệ như con người bao gồm:

        - Học tập
        - Suy luận
        - Nhận thức
        - Giải quyết vấn đề
        - Tự điều chỉnh

---

## Năng lực

Một hệ thống AI có các năng lực chủ yếu sau:

```kroki-plantuml
@startmindmap

<style>
mindmapDiagram {
  BackGroundColor transparent      /* works well with Material's light/dark themes */

  node {
    BackgroundColor #E3F2FD
    LineColor #1E88E5
    LineThickness 0.5
    FontColor #0D47A1
    FontSize 14
    RoundCorner 48                 /* border-radius: 0 = square, higher = rounder */
    Padding 10
    Margin 4
  }

  :depth(0) {                      /* root node */
    BackgroundColor #4682b4
    LineColor #4682b4
    FontColor white
    FontSize 16
    RoundCorner 48
  }

  :depth(1) {                      /* level-1 groups */
    BackgroundColor transparent
    LineColor #464e56
    FontColor #464e56
    RoundCorner 48
  }

  :depth(2) {                      /* leaf nodes */
    BackgroundColor #E8F5E9
    LineColor #43A047
    FontColor #1B5E20
    RoundCorner 8
  }

  arrow {                          /* connector lines */
    LineColor #9E9E9E
    LineThickness 2
  }
}
</style>

* Năng lực của AI
left side
**:==Tiếp nhận và xử lý
*** Học tập
*** Nhận thức
*** Phân tích
;
**:==Tư duy và quyết định
*** Suy luận
*** Ra quyết định
*** Khái quát hóa
;
right side
**:==Thực thi và tương tác
*** Tự động hóa
*** Tự chủ
*** Tương tác
*** Sáng tạo
;
@endmindmap
```

??? info "Nhóm năng lực tiếp nhận và xử lý"

    <div class="grid cards" markdown>

    -   :material-school:{ .lg .middle } **Học tập**
        
        Thu nhận kiến thức, kỹ năng hoặc hình mẫu mới thông qua việc tiếp xúc với dữ liệu và quá trình huấn luyện.

        Giúp hệ thống tự cải thiện hiệu suất và độ chính xác theo thời gian mà không cần lập trình lại một cách thủ công.

    -   :material-eye:{ .lg .middle } **Nhận thức**

        Thu nhận và giải mã dữ liệu từ môi trường thông qua các cảm biến.

        Là nền tảng của Thị giác máy tính và Xử lý âm thanh hoặc giọng nói.

    -   :material-chart-bar:{ .lg .middle } **Phân tích**

        Trích xuất và xử lý khối lượng dữ liệu lớn để tìm ra các mối liên hệ, quy luật hoặc xu hướng ẩn sâu bên trong.

        Trợ giúp con người hiểu được các tập dữ liệu phức tạp và đưa ra dự báo.

    </div>

??? info "Nhóm năng lực tư duy và quyết định"

    <div class="grid cards" markdown>

    -   :material-head-cog:{ .lg .middle } **Suy luận**

        Áp dụng các quy tắc logic để rút ra kết luận, giải quyết vấn đề hoặc đưa ra diễn giải từ thông tin sẵn có.

        Vượt qua việc so khớp dữ liệu đơn thuần để tham gia vào quá trình suy luận.

    -   :material-lightning-bolt:{ .lg .middle } **Ra quyết định**

        Đánh giá các lựa chọn, cân nhắc rủi ro hoặc lợi ích và tự động chọn phương án tối ưu theo mục tiêu đã định.

        Đưa ra đề xuất hoặc tự động thực thi trong thời gian thực.

    -   :material-transit-connection-variant:{ .lg .middle } Khái quát hóa

        Áp dụng kỹ năng đã học từ ngữ cảnh quen thuộc vào một tình huống mới hoàn toàn.

    </div>

??? info "Nhóm năng lực thực thi và tương tác"

    <div class="grid cards" markdown>

    -   :material-cogs:{ .lg .middle } **Tự động hóa**

        Thực hiện các quy trình hoặc công việc phức tạp ở quy mô lớn với tốc độ cao và độ chính xác ổn định.

        Giúp con người giảm bớt các công việc nhàm chán, lặp đi lặp lại và tối ưu hóa năng suất lao động.

    -   :material-robot-industrial:{ .lg .middle } **Tự chủ**

        Hoạt động độc lập và tự điều hướng trong môi trường biến động mà không cần sự can thiệp từ con người.

        Ứng dụng điển hình: xe tự hành, robot thám hiểm và drone cứu hộ.

        Giúp hệ thống linh hoạt thích ứng với các tình huống chưa từng gặp trong tập dữ liệu huấn luyện.

    -   :material-forum:{ .lg .middle } **Tương tác**

        Hiểu ngôn ngữ và giao tiếp với con người một cách tự nhiên bằng nhánh nghiên cứu Xử lý ngôn ngữ tự nhiên.

        Trợ giúp hội thoại thông qua văn bản, giọng nói hoặc cử chỉ.

    -   :material-palette:{ .lg .middle } **Sáng tạo**
        
        Dựa trên các mô hình AI tạo sinh để tổng hợp và biến tấu dữ liệu.

        Sinh ra các ý tưởng, giải pháp hoặc sản phẩm mới dưới dạng văn bản, hình ảnh, âm nhạc, mã nguồn.

        </div>

---

## Phân loại

Dựa theo năng lực tư duy, AI được phân thành hai loại chính:

1. **AI hẹp** (còn gọi là **AI yếu**)

    !!! note "Đặc điểm của AI hẹp"

        - Được thiết kế và huấn luyện để giải quy cho các nhiệm vụ hoặc lĩnh vực cụ thể.
        - Chỉ hoạt động tối ưu trong phạm vi các tham số đã được xác định trước.
        - Không thể chuyển giao tri ​​thức sang lĩnh vực khác.

    Ví dụ:  
    Trợ lý ảo, nhận diện khuôn mặt, dịch thuật, đánh cờ.

    Tất cả các hệ thống AI hiện nay đều thuộc nhóm AI hẹp.

2. **AI tổng quát** (còn gọi là **AI mạnh**)

    !!! note "Đặc điểm của AI tổng quát"

        - Tương đương với trí tuệ của con người trên mọi lĩnh vực.
        - Có thể tự học, suy luận trừu tượng, giải quyết vấn đề mới và chuyển giao tri thức giữa các lĩnh vực khác nhau.
        - Có tính chủ động và năng lực tự nhận thức (Self-awareness).
    
    Hiện nay vẫn chưa có hệ thống AGI thực tế nào.

??? info "Siêu AI (Superintelligence - ASI)"

    Một số nhà nghiên cứu cũng thảo luận về một loại AI thứ ba, đó là **Siêu AI**.
    
    Đặc điểm của Siêu AI là vượt xa trí tuệ và năng lực sáng tạo của những con người kiệt xuất nhất trên tất cả các lĩnh vực.
    
    Hiện nay, Siêu AI vẫn chỉ là giả thuyết, đồng thời là chủ đề của nhiều cuộc tranh luận về đạo đức và tương lai của loài người.

    Sự chuyển dịch từ AI hẹp sang AI tổng quát và hướng tới Siêu AI vẫn là chặng đường dài của Khoa học Máy tính.

??? info "So sánh các loại AI"

    | Tiêu chí | AI hẹp | AI tổng quát | Siêu AI |
    | --- | --- | --- | --- |
    | Tình trạng | Đang được ứng dụng rộng rãi | Lý thuyết, là mục tiêu hướng tới | Giả thuyết |
    | Phạm vi hoạt động | Lĩnh vực hẹp | Toàn diện như con người | Vượt xa giới hạn trí tuệ của con người |
    | Chuyển giao tri thức | Không thể | Tự chuyển giao linh hoạt | Tự phát minh tri thức mới |
    | Cảm xúc, ý thức | Không có | Tương đương con người | Vượt xa mức độ nhận thức của con người |

??? info "Các nhánh nghiên cứu chính của AI"

    AI là lĩnh vực rộng lớn gồm nhiều nhánh nghiên cứu. Các nhánh này thường không hoạt động riêng rẽ mà phối hợp chặt chẽ với nhau trong các hệ thống AI phức tạp.

    <div class="grid cards" markdown>
    
    -   :material-brain:{ .lg .middle } **Nhóm thuật toán và mô hình**

        - **Học máy** (Machine learning): thuật toán tự động cải thiện hiệu suất bằng kinh nghiệm hoặc dữ liệu.
        - **Học sâu** (Deep learning): kỹ thuật học máy tiên tiến dựa trên mạng thần kinh nhiều lớp để tự động trích xuất các đặc trưng của dữ liệu.
        - **Mạng thần kinh nhân tạo** (Artificial neural networks): mô hình tính toán lấy cảm hứng từ cấu trúc mạng thần kinh sinh học của não bộ.
        - **Logic mờ** (Fuzzy logic): là dạng logic đa giá trị giúp máy tính xử lý các khái niệm xấp xỉ, mập mờ, thay vì chỉ có 0 và 1.
        - **Tính toán tiến hóa** (Evolutionary computation): là thuật toán giải quyết bài toán tối ưu dựa trên cơ chế tiến hóa sinh học, chẳng hạn như chọn lọc tự nhiên, đột biến, lai ghép.

    -   :material-eye-outline:{ .lg .middle } **Nhóm giác quan và tương tác**
    
        - **Thị giác máy tính** (Computer vision): máy tính thu nhận, xử lý và hiểu nội dung của hình ảnh hoặc video.
        - **Xử lý ngôn ngữ tự nhiên** (Natural language processing): máy tính hiểu, phân tích và tạo ra ngôn ngữ tự nhiên của con người.
        - **Nhận dạng giọng nói** (Speech recognition): chuyển đổi ngôn ngữ nói từ tín hiệu âm thanh thành văn bản để máy tính xử lý.

    -   :material-sitemap-outline:{ .lg .middle } **Nhóm tri thức và tư duy**

        - **Biểu diễn tri thức và suy luận** (Knowledge representation and reasoning): mã hóa thông tin về thế giới thực dưới dạng mà máy tính có thể suy luận.
        - **Hệ thống chuyên gia (Expert system): là chương trình máy tính mô phỏng năng lực ra quyết định của các chuyên gia trong một lĩnh vực hẹp.
        - **Lập kế hoạch và ra quyết định (Automated planning and Decision making): tự động xây dựng trình tự các hành động tối ưu để đạt mục tiêu cụ thể.
        - **Người máy học (Robotics): thiết kế và chế tạo các robot tích hợp AI để tương tác với thế giới thực.

    </div>

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/ai-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| AI hẹp | ANI - Artificial Narrow Intelligence |
| AI tổng quát | AGI - Artificial General Intelligence |
| Siêu AI | ASI - Artificial Superintelligence |