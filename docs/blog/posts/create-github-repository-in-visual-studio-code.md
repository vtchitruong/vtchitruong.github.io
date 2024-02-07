---
categories:
    - Set up & Code down
authors: [mrschool]
date: 2021-11-25
---

# Tạo GitHub repository với Visual Studio Code

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV854HuqDfekYYzbtOrMhmxgkZ_6l8gC-f4bCyAmevwUZtIcr_X_uRdX_iW4g8Q36gpnPBVfFigPGK9r5KpmDSZAi5hMZ22-M34JkYHF51XTrTMk20oUc=w360){ align=left }

GitHub là nền tảng hàng đầu thế giới có chức năng hỗ trợ việc phát triển phần mềm và quản lý mã nguồn (version control).

Bài này hướng dẫn các thao tác cơ bản tạo repository bằng command line trong Visual Studio Code (VS Code).
</div>

<br>

<!-- more -->

<br>

**Repository** được hiểu là nơi lưu lữu riêng cho một project nào đó, trong đó chứa các tập tin, thư mục, hình ảnh, dataset, v.v...

Để tạo repository, bạn thực hiện theo các công đoạn sau.

## Tạo remote repository

**Bước 1**

Vào trang [github.com](https://github.com/){:target="_blank} > Nhấn nút **New** bên trái hoặc nút dấu **+** bên phải để tạo repository mới.

![Image title](https://lh3.googleusercontent.com/ABTjXWF4NzfQ20Ytwkvc3eoOkhUF_QJtbzilmzphqvBKij4HtM1MY_v_f6SkgN4uOVwCd7Jv0fKLDgd2HvNCB61wJOJ7HkhQd1Qy5Sc3LJPkUfDmLhXcDqlpONTzaYG1a3uwUkynzZU=w360){ align=left loading=lazy }

![Image title](https://lh3.googleusercontent.com/5IVjAgD6Bm80uv_CqdNloOOmxI9HOJDyB8RgBhS9F_SjzQ7OB4NfHVS9in35WOI468VcAcgw6UDr_VUu3AyBYRu0zP6H0tz-fkhYb2ohpCw92SYPZaUCGvpPEfw-Bf2ezJvwMSMjHHM=w360){ loading=lazy }

**Bước 2**

Tại ô **Repository name**, gõ tên repository tùy thích > Chọn **Public** > Check mục **Add a README file** nếu cần >  Bấm nút **Create repository**.

![Image title](https://lh3.googleusercontent.com/oWbaquzflFPA5YSZaSzTUy54Ib2Pilkjg7DGiN-OEardddSao2MVFN_wwzvZ9f-AfveFKKkXkpYOuGDXSBAc3OZJnkgGxp7_dczLTiT6ln5U7pgt-GMxhxk5TeGW7XJ8u-MNQOOqUFg=w720){ loading=lazy }

Vậy là bạn đã tạo xong repository trên server, gọi là **remote repository**.

## Tạo project

Nếu đã có project thì bạn mở lên bằng VS Code và bỏ qua bước này. Còn nếu chưa thì thực hiện như sau.

**Bước 1**

Trong VS Code gõ tổ hợp phím ++ctrl+shift+tilde++ để mở cửa tab **Terminal**.

**Bước 2**

Tạo thư mục mới, có thể trùng tên với repository trên cho dễ nhớ.

``` ps1
PS C:\cpp> mkdir MyGitDemo
    Directory: C:\cpp
Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d-----     Thu/25/11/2021 6:37 AM            MyGitDemo
PS C:\cpp> cd MyGitDemo
```

**Bước 3**

Báo cho thiên hạ biết mình chuẩn bị code trong đó.

``` ps1
PS C:\cpp\mygitdemo> code .
```

Một cửa sổ VS Code mới sẽ hiện ra.

**Bước 4**

Giả sử viết C++. Bạn tạo tập tin .cpp mới bằng cách nhấn **New File** hoặc trong **Terminal** gõ lệnh:

``` ps1
PS C:\cpp\mygitdemo> code hello_teo.cpp
```

**Bước 5**

Viết vài ba dòng code cho người ta thấy mình biết code, nhớ bấm ++ctrl+s++ để lưu.

## Tạo local repository

Bây giờ, bạn sẽ tạo repository trên máy của mình, gọi là **local repository**, và kết nối với remote repository.

**Bước 1**

Khởi tạo local repository.

``` ps1
PS C:\cpp\mygitdemo> git init
Initialized empty Git repository in C:/CPP/MyGitDemo/.git/
```

**Bước 2**

Quay lại trang GitHub, sao chép URL của remote repository đã tạo ở trên.

![Image title](https://lh3.googleusercontent.com/mbJibu1dxSfuZ-2q4YYcRKoVexrlSIvmjXPSFXgVtdJEmSGswS7CpJvRriMnJM2nlLzcrCOnto5_m-y4WSpZB6xs8pROywS_tjYsBv4HAirQfhR8u7_1osmLmVKM0X_WKwYSOcZkuwE=w720){ loading=lazy }

**Bước 3**

Kết nối với remote repository.

``` ps1
PS C:\cpp\mygitdemo> git remote add mygitdemo https://github.com/vtchitruong/MyGitDemo.git
```

Trong đó, `mygitdemo` gọi là **remote name**, đặt tùy ý. Thường các tài liệu hướng dẫn đặt là `origin`. Nếu quên, bạn gõ lệnh `git remote show` để xem.

**Bước 4**

Lúc này về lý thuyết là xong. Song bằng một cách nào đó, hai repository local và remote vẫn chưa hợp nhất. Vì thế, bạn nên gõ thêm hai dòng lệnh sau để *lưỡng long hợp thể*.

``` ps1
PS C:\cpp\mygitdemo> git config --global init.defaultBranch main
PS C:\cpp\mygitdemo> git pull --rebase mygitdemo main
From https://github.com/vtchitruong/MyGitDemo
* branch main -> FETCH_HEAD
Successfully rebased and updated refs/heads/main.
```

Trong đó, `main` là tên mặc định của branch chính. Khi phát triển project, bạn có thể test thử chức năng mới lên các branch khác để tránh ảnh hưởng project, vốn đang chạy ổn định trên branch main.

Vậy là xong, bạn đã có thể đẩy project của mình lên GitHub bất cứ lúc nào bạn muốn.

## Đẩy project lên remote repository

**Bước 1**

Chọn các tập tin muốn đẩy lên.

``` ps1
PS C:\cpp\mygitdemo> git add hello_teo.cpp
```

!!! note "Lưu ý"

    Nếu muốn chọn hết các tập tin, kể cả trong thư mục con, bạn gõ lệnh `git add .` (dấu chấm).

    Nếu muốn chọn một số tập tin nào đó, bạn có thể dùng ký tự đại diện, chẳng hạn `hello_teo*.*`, và hình như có phân biệt chữ in và thường.

**Bước 2**

Chốt kèo bằng lệnh `commit`, với thông điệp gõ tùy thích.

``` ps1
PS C:\cpp\mygitdemo> git commit -m "init my git demo for fun"
[main (root-commit) b5eda8e] init my git demo for fun
1 file changed, 3 insertions(+)
create mode 100644 hello_teo.cpp
```

**Bước 3**

Đẩy lên GitHub.

``` ps1
PS C:\cpp\mygitdemo> git push mygitdemo main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 665 bytes | 665.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/vtchitruong/MyGitDemo.git
85a15eb..250f1f5 main -&gt; main
```

Load lại trang GitHub để thấy tập tin vừa tải lên. Nhấn vào tập tin để xem mã nguồn.

![Image title](https://lh3.googleusercontent.com/2ZDEVDr3JSBVK-XIviQ_gj2iod_g2uTtRfMPcXIjmKegTsTiCZgTYm6-R4KEgc1O0FGUU1DLJ-dbHsLmqz7Jr_qHmfaBxdRFN1C0migM2Ph-IOsooWsxNLSR7Ep_CnGb8Iz3hLJUuoo=w720){ loading=lazy }