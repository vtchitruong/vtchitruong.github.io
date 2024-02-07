---
categories:
    - Work wild web
    - Set up & Code down
authors: [mrschool]
date: 2021-12-30
---

# Hiển thị dữ liệu từ Google Sheets lên trang web

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV86WPJXM4IDZhOXy--rqB9TdRFa3k1G6eHrZBe_yr2iq29mjMk2guvu3S6cxSKsffLdshmiBEPuMOO6IwH6CGqJ6pxcSmV496mVse1Fb_CGIDGxBxvcb=w1200){ width=360 align=left }

Google Sheets là công cụ phổ biến và thuận tiện để chia sẻ dữ liệu dạng bảng.

Bài viết này hướng dẫn cách lấy dữ liệu từ Google Sheets để hiển thị lên trang web.

</div>

<br>

<!-- more -->

<br>

## Ý tưởng chính

Dùng **Google Apps Script** tạo một web app có chức năng sau:

- Lấy dữ liệu từ tập tin Google Sheets.
- Dựng bảng hiển thị dữ liệu.

Sau đó nhúng URL của web app vào trang web của mình.

## Cách thực hiện

### Tạo tập tin Google Sheets

Tập tin Google Sheets dùng để minh họa đặt [tại đây](https://docs.google.com/spreadsheets/d/1zbau6OQ-jM8LR-HhgiOccP5RyxHaBbmMzHceYOU_gSI/edit?usp=sharing){:target="_blank"}.

Tập tin này chứa dữ liệu là các câu thần chú của Harry Potter.

### Tạo Google Apps Script

Vào **Google Drive** > Nhấn nút **New** > **More** > **Google Apps Script**.

Tiếp theo:

1. Ở cột bên trái, chọn **<> Editor**.
2. Nhấn dấu **+** trong mục **Services**.
3. Trong hộp thoại hiện ra, chọn mục **Google Sheets API**.
4. Nhấn nút **Add**.

![Image title](https://lh3.googleusercontent.com/xeBSGX-8BxkllZcNjbo3C8pdexXw0xhQVRCE7ZIIXXY7aqykuN2-SOUX8dctkW2Cel4OaIRVNd7W9kEqWCUvWh0z_dXde9x94qkrB2-oFqnGyVfuzinnli1diEocGhOP7RlpnH28Im0=w720){ loading=lazy }

### Viết mã cho tập tin Code.gs

Chọn tập tin **Code.gs** ở cột trái rồi sao chép đoạn mã dưới đây vào.

``` js linenums="1" title="Code.gs"
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
 
// Hàm này lấy dữ liệu từ file Google Sheets và trả về một array
function getData(){
  var spreadSheetId = "1zbau6OQ-jM8LR-HhgiOccP5RyxHaBbmMzHceYOU_gSI"; // lấy ID của file tương ứng
  var dataRange     = "Sheet1!A2:F"; // tên sheet và vùng tương ứng, không tính dòng tiêu đề
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
// Hàm này khai báo các file javascript và css
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
```

Thay đổi giá trị của các biến cho phù hợp. Chẳng hạn, ID của tập tin Google Sheets được lấy từ URL như hình sau.

![Image title](https://lh3.googleusercontent.com/zH1B39QTaT1U9QerMQur3jpEL1HzaAzU0yF7ZgQHzjRwNSyZksLwvK2hVEatsistmeGztB1xQMP45OBr9E_6kKRcDALokW-FvxQYhXksIAxcf7NjOwOMv_6CeGilWSiVsnBYVKsK9v8=w720){ loading=lazy }

Bạn nên thường xuyên nhấn ++ctrl+s++ để lưu.

### Viết mã cho tập tin JavaScript.html và Index.html

Tạo thêm hai tập tin là **JavaScript.html** và **Index.html** bằng cách:

1. Trong mục **Files** ở cột trái, nhấn nút **+**.
2. Chọn mục **HTML**
3. Gõ tên tập tin, ví dụ **JavaScript**, không cần gõ phần tên mở rộng.
4. Sao chép các đoạn mã dưới đây vào tập tin tương ứng.

``` html linenums="1" title="JavaScript.html"
<script>
  // Hàm này gọi hàm getData() trong file Code.gs 
  // và truyền array trả về của getData() vào hàm showData() 
  google.script.run.withSuccessHandler(showData).getData();
 
  // Hàm này sẽ tạo bảng dữ liệu từ array trả về của getData()
  function showData(dataArray){
    $(document).ready(function(){
      $('#data-table').DataTable({
        data: dataArray,
        
        // Gõ tiêu đề ứng với tất cả các cột của bảng dữ liệu
        columns: [
          {"title":"ID"},
          {"title":"Tên câu thần chú"},
          {"title":"Cách đọc thần chú"},
          {"title":"Loại"},
          {"title":"Tác dụng"},
          {"title":"Ánh sáng phát ra"}          
        ]
      });
    });
  }
</script>
```

``` html linenums="1" title="Index.html"
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <!-- Chỗ này khai báo các thư viện JavaScript và CSS. Có thể xem site datatables.net -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.23/js/dataTables.bootstrap4.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap4.min.css">
 
    <?!= include('JavaScript'); ?> <!--INCLUDE JavaScript.html FILE-->
  </head>
 
  <body>
    <div class="container">
      <br>
      <div class="row">
        <table id="data-table" class="table table-striped table-sm table-hover table-bordered">
          <!-- Bảng dữ liệu sẽ hiển thị ở đây nhờ hàm showData()  -->
        </table>
      </div>
    </div>  
  </body>
</html>
```

### Triển khai web app

Nhấn nút **Deploy** màu xanh ở góc trên bên phải, rồi chọn **New Deployment**.

Trong hộp thoại hiện ra:

1. Gõ mô tả tùy ý vào ô **Description**.
2. Chọn email của mình ở mục **Execute as**.
3. Chọn **Anyone** ở mục còn lại.
4. Nhấn **Deploy**.

![Image title](https://lh3.googleusercontent.com/VRawmcsuhj0_yplHwk59UYbsLStfoEkFfscITnIWzLyunCZNHkfJAOigC74hCteJJFuRKqZCsfPNYmL5rN2Lu1bu8zPmH9b102nqhHGOmRwR44VjDeREdqbsxlfJnRji8xsoiiGJr60=w480){ loading=lazy }

Trong hộp thoại hiện ra tiếp theo, nhấn nút **Authorize access** để cấp quyền cho web app truy xuất vào Google Sheets. Chọn tài khoản Google của mình.

Trong cửa sổ tiếp theo:

1. Nhấn **Advanced** (sau khi nhấn sẽ đổi thành **Hide Advanced**).
2. Nhấn tiếp link **Go to Untitled project** ở dưới cùng.

    (Tên app hiện đang là **Untitled project**, bạn có thể thay đổi tùy ý vào lúc khác.)

![Image title](https://lh3.googleusercontent.com/0c9Hi4CZylGNcKPUgiFW_-378TSpBFRITgC8DoxEe0ctyATllI1n1uNje2ZnJUsPuHPR-EO018VbMHYVAXaYMXY51cki5mT-QZQeN3fu3rPUsSpMOnEWwIJB6ttKH7ThTfMwl6xpIOY=w480){ loading=lazy }

Nhấn nút **Allow**.

Trong hộp thoại hiện ra, nhấn vào URL để xem kết quả.

![Image title](https://lh3.googleusercontent.com/awPzHNWHALa6n2tCyQpSPRAWqQ7F2k354ONVQEyCLEVqr_215pnc86YuCe6y_tYlAl_uQf9GOs7UiQ5B23cfm6uFDXt_5Vr7eYPZs_kov-_rd_C1WhZGiWKSa8ZeYuYRvyLoHsYLd38=w600){ loading=lazy }

Nếu tập tin Google Sheets có ô nào đó rỗng thì thông báo lỗi sẽ xuất hiện. Bạn cứ nhấn nút **OK** để bỏ qua và điều chỉnh sau.

Kết quả hiển thị như hình dưới đây:

![Image title](https://lh3.googleusercontent.com/rBNmtuJk-NSqukhlWjFqFP0P5B60WmqSZj0GREoEe5rShdTEOczgExnkcSf-T4ysd32Z3YnkZ6czYrXH6kHTGDcSbCMs6mCe_7q9UqS9PHUGxkAl_LYV5I7rN0fn5i6FdzHpen3Qhzo=w720){ loading=lazy }

!!! note "Lưu ý"

    1. Khi tạo lần đầu cũng như chạy thử lần đầu, bạn phải chọn **Deploy** > **New deployment**.
    2. Mỗi lần sửa mã lệnh, bạn có thể chạy thử bằng cách chọn **Deploy** > **Test deployments**.
    3. Khi hoàn tất, không còn điều chỉnh gì, bạn chọn lại **Deploy** > **New deployment** rồi chuyển sang bước 4.

### Hiển thị lên trang web

Bạn chỉ cần nhúng URL của web wpp vào tag `iframe` là xong.

``` html linenums="1" title="your_web_page.html"
<iframe src="https://script.google.com/macros/s/AKfycbw6CV_I-zZSs7wqgMEcPyqtoTb2f7B9XkPUVkL_NGP0IajY2-5bNgNmN-jRP9JltiKcRg/exec" height="800px" width="1200px"></iframe>
```

!!! warning "Lưu ý quan trọng"

    Kết quả hiển thị tại bước 3 là ở chế độ fullscreen, bảng hiển thị với kích thước nguyên vẹn. Nhưng khi nhúng vào web ở bước 4, bảng sẽ bị co giãn, và bạn phải tìm cách responsive cho bảng.

### Tùy biến bảng

Bảng tạo ra trong bài này là nhờ công cụ **DataTables**. Bạn có thể tham khảo các vấn đề liên quan, kể cả responsive, tại [DataTables | Table plug-in for jQuery](https://datatables.net/){:target="_blank"}.

Bạn có thể viết thêm các class CSS và bổ sung các tag HTML cần thiết trong tập tin **Index.html**.

Cũng tham khảo từ site DataTables, bạn có thể điều chỉnh các tham số trong các hàm của tập tin **JavaScript.html**.

Ví dụ:

Một số ô trong tập tin Google Sheets *bị* rỗng, khiến xuất hiện thông báo lỗi. Cách khắc phục là khởi tạo chuỗi rỗng làm mặc định.

``` js linenums="12"
columns: [
          {"title":"ID", "defaultContent": ""},
          {"title":"Tên câu thần chú", "defaultContent": ""},
          {"title":"Cách đọc thần chú", "defaultContent": ""},
          {"title":"Loại", "defaultContent": ""},
          {"title":"Tác dụng", "defaultContent": ""},
          {"title":"Ánh sáng phát ra", "defaultContent": ""}          
        ]
```