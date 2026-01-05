---
icon: material/qrcode-scan
---

# Học máy

!!! abstract "Tóm lược nội dung"

    Bài này trình bày một số khía cạnh về Học máy, bao gồm:
    
    - Khái niệm
    - Tiến trình huấn luyện
    - Các loại dữ liệu
    - Các phương thức học
    - Vai trò trong thực tiễn
   
## Khái niệm

!!! note "Khái niệm về Học máy"

    **Học máy** là một lĩnh vực con của trí tuệ nhân tạo, tập trung vào việc nghiên cứu thuật toán cho phép máy tính tự **xây dựng các mô hình toán học** từ dữ liệu mẫu nhằm đưa ra các dự đoán hoặc quyết định mà không cần được lập trình cụ thể cho từng kịch bản.

Theo truyền thống, ta sử dụng lập trình tường minh, nghĩa là thiết kế thuật toán dựa trên logic *"nếu - thì"*, trong đó các quy tắc được xác định trước một cách cứng nhắc.

Ngược lại, Học máy chuyển dịch trọng tâm sang việc **xấp xỉ hàm số**. Trong đó:

- Đầu vào là $x$ và đầu ra là $y$.
- Mục tiêu của Học máy là tìm ra một hàm số $f$ sao cho: $y \approx f(x)$.

Máy tính sẽ tự tìm ra các tham số của hàm $f$ này thông qua quá trình huấn luyện trên dữ liệu thực tế.

??? info "Định nghĩa hình thức về Học máy"

    Một trong những định nghĩa mang tính học thuật cao và được thừa nhận rộng rãi trong giới khoa học là của Giáo sư Tom Mitchell (Đại học Carnegie Mellon):
    
    "Một chương trình máy tính được gọi là học (learn) từ kinh nghiệm $E$ (Experience) đối với một lớp các nhiệm vụ $T$ (Task) và thước đo hiệu suất $P$ (Performance measure), nếu hiệu suất của nó tại các nhiệm vụ trong $T$, được đo bởi $P$, cải thiện theo kinh nghiệm $E$."
    
    Ví dụ:  
    Thuật toán phân loại email rác:
    
    - Nhiệm vụ ($T$): phân loại email là "Hợp lệ" hay "Rác".
    - Kinh nghiệm ($E$): là tập dữ liệu gồm hàng ngàn email đã được con người dán nhãn trước đó.
    - Thước đo ($P$): là tỷ lệ phần trăm các email được phân loại đúng.

---

## Tiến trình huấn luyện

Về bản chất khoa học, tiến trình huấn luyện của máy tính thực chất là tiến trình **tối ưu hoá**, gồm bốn bước sau:

1. **Khởi tạo**

    Máy tính bắt đầu với một mô hình (là hàm số $f(x)$) có các tham số ngẫu nhiên.
    
    Bước này giống như một bạn học sinh chưa biết gì. Mô hình là kiến thức hiện có của bạn, nó chỉ mang tính phỏng đoán.

2. **Dự đoán**

    Máy tính đưa dữ liệu đầu vào $x$ qua mô hình (hàm số $f(x)$) để cho ra kết quả dự đoán $y$.

    Bước này giống như bạn học sinh bước vào kỳ thi thử (là $x$), bạn đưa ra câu trả lời dựa trên kiến thức của mình (là mô hình $f(x)$) ở bước trên. Câu trả lời (là $y$) có thể đúng hoặc sai, nhưng là cơ sở để đánh giá năng lực hiện tại của bạn.

3. **Tính toán mất mát**

    Thuật toán sử dụng một hàm toán học (1) để đo lường khoảng cách giữa kết quả máy dự đoán $\hat{y}$ và kết quả thực tế $y$. Hàm này gọi là hàm mất mát. Sai số càng lớn, giá trị của hàm mất mát càng cao.
    { .annotate }

    1. Chẳng hạn như Mean Squared Error - Sai số bình phương trung bình.

    Bước này giống như bạn học sinh đối chiếu câu trả lời của mình (là $\hat{y}$) với đáp án (là $y$). Điểm trừ (là giá trị của hàm mất mất) càng lớn nghĩa là kiến thức của bạn còn nhiều lỗ hổng, cần phải điều chỉnh.

4. **Tối ưu hoá**

    Thông qua các phương pháp toán học (1), máy tính sẽ điều chỉnh các tham số bên trong để giảm thiểu sai số ở lần thử tiếp theo.
    { .annotate }

    1.  Chẳng hạn như Gradient Descent - Cực tiểu hoá hàm mục tiêu.

    Bước này giống như bạn học sinh phân tích vì sao mình sai và điều chỉnh kiến thức để lần thi tiếp theo không mắc phải lỗi cũ (là làm cho giá trị của hàm mất mát trở nên nhỏ nhất).

Tiến trình này lặp lại hàng ngàn, hàng triệu lần cho đến khi mô hình đạt được độ chính xác mong muốn.

---

## Dữ liệu

**Dữ liệu** là **tập hợp các quan sát** (1), *"kinh nghiệm"* mà máy tính sử dụng để học. Trong Học máy, dữ liệu được phân loại dựa trên việc chúng được định danh hay chưa nhằm xác định phương thức học phù hợp.
{ .annotate }

1.  Một **quan sát** là sự ghi nhận một giá trị hoặc một đặc tính của một đối tượng cụ thể tại một thời điểm nhất định.

    Một **quan sát đơn lẻ** không mang lại nhiều giá trị cho Học máy. Nhưng khi ta có một tập hợp hàng triệu quan sát, ta sẽ bắt đầu thấy được những quy luật toán học.

### Dữ liệu có nhãn

**Dữ liệu có nhãn** là tập hợp các quan sát đã đi kèm với đáp án. Dữ liệu này gồm có các đặc trưng đầu vào là $x$ và đầu ra tương ứng là $y$.

Ví dụ:  
Trong tập hợp gồm 10,000 email, mỗi email đã được đánh dấu sẵn là `Spam` hoặc `Not Spam`. Trong đó, nội dung email là $x$ và các nhãn là $y$.

### Dữ liệu không nhãn

**Dữ liệu không nhãn** chỉ có các đặc trưng đầu vào ($x$) mà không có bất kỳ thông tin nào về phân loại ($y$).

Ví dụ:  
Ta có 10,000 email mới thu thập được từ Internet. Ta hoàn toàn không biết email nào là email rác hay email thường.

---

## Phương thức học

Tương ứng với hai loại dữ liệu đầu vào, Học máy có hai phương thức. Còn nếu dựa theo **mục tiêu toán học**, Học máy chia làm ba loại.

Bảng sau so sánh vắn tắt các phương thức học

| Phương thức học | Dữ liệu đầu vào | Mục tiêu toán học | Ý nghĩa |
| --- | --- | --- | --- |
| Có giám sát | Vector đặc trưng $x$ và nhãn $y$ | Cực tiểu hoá hàm mất mát | Dự báo dựa trên kinh nghiệm |
| Không giám sát | Chỉ có vector đặc trung $x$ | Tối ưu hoá hàm tương đồng hoặc hàm mật độ | Thấu hiểu bản chất và sự tương đồng |
| Tăng cường | Trạng thái $S$ và tín hiệu thưởng $R$ | Cực đại học phần thưởng tích luỹ | Ra quyết định hành động trong môi trường phức tạp |

### Học có giám sát

1. **Khái niệm**

    **Học có giám sát** là cách học mà máy tính **được cung cấp dữ liệu có nhãn** để huấn luyện.

2. **Cơ chế**

    Thuật toán Học cố gắng **thiết lập hàm số $f(x)$ sao cho sai số giữa dự đoán $\hat{y}$ và nhãn thực tế $y$ là nhỏ nhất**.

    Cách này giống như một bạn học sinh ôn thi mà có sách giải bài tập. Sau khi làm xong một bài (là $x$), bạn lật sách giải để xem đáp án (là $y$). Nếu sai, bạn tự điều chỉnh để lần sau làm đúng hơn.

    ??? info "Một số nhiệm vụ của học có giám sát"

        1. **Phân loại:** dự đoán nhãn.

            Ứng dụng thực tế:

            - Lọc email.
            - Nhận diện gương mặt để biết nam hay nữ.
            - Chẩn đoán có bệnh hay khoẻ mạnh.
            
        2. **Hồi quy:** dự đoán một giá trị số thực cụ thể (liên tục).

            Ứng dụng thực tế:

            - Dự đoán giá nhà.
            - Dự báo nhiệt độ ngày mai.
            - Dự báo doanh số bán hàng.

        3. **Ánh xạ chuỗi sang chuỗi:** biến đổi một chuỗi đầu vào thành một chuỗi đầu ra, trong đó độ dài của hai chuỗi không nhất thiết phải bằng nhau.

            Ứng dụng thực tế:
            
            - Dịch thuật ngôn ngữ.
            - Tóm tắt văn bản.

### Học không giám sát

1. **Khái niệm**

    **Học không giám sát** là cách học mà máy tính **đối mặt với dữ liệu không nhãn**.

2. **Cơ chế**

    Thuật toán Học không tìm cách dự đoán một giá trị cụ thể, mà **tìm cách phát hiện các cấu trúc ẩn hoặc các mối liên hệ đặc biệt bên trong dữ liệu**.

    Cách này giống như một bạn học sinh được đưa vào một thư viện mà có các cuốn sách bị mất bìa. Dù không biết rõ từng cuốn, bạn vẫn có thể tự phân loại: sách này toàn số thì chắc là sách toán, sách kia nhiều hình thì chắc là sách thiếu nhi.

    ??? info "Một số nhiệm vụ của học không giám sát"
        
        1. **Phân cụm:** xác định các phân vùng dữ liệu có mật độ cao và gom nhóm các dữ liệu có sự tương đồng về đặc trưng.

            Ứng dụng thực tế:

            - Xác định phân khúc khách hàng dựa trên hành vi tiêu dùng.
            - Nhận diện các chủ đề tự phát trong một tập hợp văn bản.

        2. **Giảm chiều dữ liệu:** ánh xạ dữ liệu từ không gian nhiều chiều về không gian ít chiều hơn nhưng vẫn bảo toàn được các thông tin trọng yếu. Nhiệm vụ này giúp loại bỏ các biến số gây nhiễu và làm lộ diện hình thái thực sự của dữ liệu.

            Ứng dụng thực tế:
        
            - Nén hình ảnh.
            - Trực quan hoá các tập dữ liệu sinh học phức tạp trên mặt phẳng 2D để tìm ra mối liên hệ giữa các gen.

        3. **Học luật kết hợp:**: khám phá các mối quan hệ nhân quả hoặc sự đồng xuất hiện mang tính quy luật giữa các biến số trong các tập dữ liệu.

            Ứng dụng thực tế:

            - Phân tích giỏ hàng để phát hiện các mặt hàng thường được mua cùng nhau.

        4. **Phát hiện bất thường:** tìm kiếm sự khác biệt về cấu trúc.

            Ứng dụng thực tế:
            
            - Phát hiện các hành vi gian lận trong lĩnh vực ngân hàng, tức những hành vi bất thường so với số đông.

### Học tăng cường

1. **Khái niệm**

    **Học tăng cường** là cách học mà không có dữ liệu có nhãn (là $y$), cũng không đơn thuần phân cụm dữ liệu (là $x$), thay vào đó, máy tính **tương tác với một môi trường**.

2. **Cơ chế**

    Mỗi khi thực hiện một hành động, máy tính sẽ nhận được một tín hiệu thưởng hoặc phạt. Thuật toán Học cố gắng **tìm ra một chiến lược sao cho tổng số điểm thưởng là lớn nhất**.

    Cách này giống như một bạn học sinh học cách chơi cầu lông. Không ai có thể đưa cho bạn một tập dữ liệu có nhãn để bạn giỏi ngay được. Bạn phải cầm vợt ra sân, đánh hụt thì phạt, đánh trúng thì thưởng. Sau hàng ngàn lần thử sai, não bộ của bạn (là mô hình) sẽ tự hình thành phản xạ và chiến thuật tối ưu.

    ??? info "Một số nhiệm vụ của học tăng cường"

        **Kiểm soát và điều khiển:** tìm ra chuỗi hành động tối ưu để đạt mục tiêu.

        Ứng dụng thực tế:

        - Robot học cách đi bộ trên địa hình gồ ghề.
        - Hệ thống học cách chơi cờ thắng con người.
        - Xe tự hành.

---

## Vai trò của Học máy trong thực tiễn

Vai trò của Học máy được thể hiện rõ nhất qua khả năng tối ưu hoá các công việc đòi hỏi phân tích dữ liệu quy mô lớn và nhận diện các quy luật phức tạp.

1. **Lọc thư rác**

    Học máy đóng vai trò là một **hệ thống phân loại tự động**, một *"người gác cổng"* thông minh.
    
    Thay vì dựa vào các từ khóa cố định vốn dễ bị kẻ xấu vượt qua, mô hình học từ hàng triệu mẫu thư rác để nhận diện các đặc trưng tinh vi như: sự bất thường trong cấu trúc tiêu đề, địa chỉ của người gửi, các tập tin đính kèm có chứa mã độc.

2. **Chẩn đoán y khoa**

    Học máy đóng vai trò là một **hệ thống hỗ trợ ra quyết định** dựa trên bằng chứng.

    Các thuật toán học sâu được huấn luyện trên các tập dữ liệu hình ảnh y khoa quy mô lớn để thực hiện nhiệm vụ phát hiện đối tượng và phân vùng hình ảnh.

3. **Phân tích thị trường**

    Học máy đóng vai trò là một **công cụ dự báo và phân khúc**, một *"nhà tiên tri"*.

    - Sử dụng các mô hình Hồi quy và chuỗi thời gian để phân tích các biến số kinh tế, từ đó đưa ra các ước tính về biến động giá hoặc nhu cầu tiêu dùng.
    - Sử dụng thuật toán Phân cụm để chia tập khách hàng thành các nhóm có đặc tính hành vi tương đồng, giúp tối ưu hoá các mô hình phân phối và tiếp thị.

4. **Nhận dạng giọng nói và chữ viết**

    Học máy đóng vai trò **giải mã tín hiệu và nhận diện mẫu**.

    Máy tính trích xuất các đặc trưng từ tín hiệu âm thanh hoặc hình ảnh chữ viết tay, sau đó sử dụng các mô hình mạng thần kinh để ánh xạ các tín hiệu này sang các ký tự văn bản tương ứng.

5. **Dịch tự động**

    Học máy đóng vai trò là một **mô hình chuyển đổi ngôn ngữ dựa trên ngữ cảnh**.

    Thay vì dịch dựa trên từ điển đơn thuần, mô hình học cách biểu diễn ngữ nghĩa của các đơn vị ngôn ngữ trong không gian vector đa chiều.

---

## Sơ đồ tóm tắt

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="../mindmaps/machine-learning.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| machine learning | Học máy |
| dữ liệu có nhãn | labeled data |
| dữ liệu không nhãn | unlabelled data | 
| học có giám sát | supervised learning |
| học không giám sát | unsupervised learning |
| học tăng cường | reinforcement learning |