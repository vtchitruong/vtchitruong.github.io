# Khái quát về quay lui

## Khái niệm quay lui

Có những bài toán đòi hỏi phải tìm ra những phương án thỏa yêu cầu, mà trong đó mỗi phương án là một tổ hợp nhiều phần tử, khiến cho việc áp dụng những kỹ thuật duyệt thông thường không hiệu quả. Thay vào đó, ta cần một giải pháp vét cạn. Cụ thể, bài viết này trình bày kỹ thuật quay lui.

**Quay lui** là một kỹ thuật trong đó ta xây dựng giải pháp từng bước một. Đây là kỹ thuật đặc biệt hữu dụng đối với những bài toán mà ta cần phải xét tất cả tổ hợp, hoán vị hoặc cách sắp đặt khả thi để tìm ra được lời giải tối ưu hoặc tất cả các lời giải thỏa mãn yêu cầu cho trước.

## Ý tưởng chính

Gọi `phương_án` là một tổ hợp gồm nhiều phần tử. Bài toán có thể có nhiều `phương_án`.

Gọi `tập_lời_giải` là những `phương_án` hợp lệ, thỏa yêu cầu cho trước của bài toán.

1. **Khởi tạo**

    Tạo một `phương_án` rỗng hoặc một phần của `phương_án`, tức gồm một số phần tử nào đó.

2. **Lựa chọn**
    
    Chọn một phần tử có khả năng để thêm vào `phương_án`. Kiểm tra xem `phương_án` này có hợp lệ hoặc có dẫn đến `tập_lời_giải` không.   
    
    - Nếu có, thì ghi nhận `phương_án` hoặc tiếp tục lựa chọn phần tử.
    - Ngược lại, thì thực hiện quay lui về trạng thái trước đó (lúc chưa thêm phần tử) để xét `phương_án` khác. 

3. **Dừng thuật toán**

    Thuật toán dừng khi đã xét tất cả phương án có thể hoặc tìm thấy một phương án hợp lệ. 

## Mã giả

Đoạn mã giả sau thể hiện kỹ thuật quay lui:

``` py
def hàm_quay_lui(phương_án):
    if tập_lời_giải hoàn tất:
        return
    
    for phần_tử in các_khả_năng_lựa_chọn:
        Thêm phần_tử vào phương_án
        if phương_án hợp lệ:
            Nạp phương_án vào tập_lời_giải
            Gọi đệ quy: hàm_quay_lui(phương_án)
            Gỡ bỏ phần_tử khỏi phương_án


if __name__ == '__main__':
    tập_giải_pháp = []
    hàm_quay_lui(phương_án_ban_đầu)
```

## Some English words

| Vietnamese | Tiếng Anh |
| ----------- | ----- |
| quay lui | back-tracking |