---
categories:
    - Set up & Code down
authors: [mrschool]
date: 2021-11-26
---

# Xóa tập tin trong GitHub repository

<div class="result" markdown>
![Image title](https://lh3.googleusercontent.com/pw/ABLVV854HuqDfekYYzbtOrMhmxgkZ_6l8gC-f4bCyAmevwUZtIcr_X_uRdX_iW4g8Q36gpnPBVfFigPGK9r5KpmDSZAi5hMZ22-M34JkYHF51XTrTMk20oUc=w360){ align=left }

Có những thứ bạn không nên vương vấn làm gì, cứ mạnh dạn buông tay buông bỏ. Chẳng hạn, nếu tập tin nào đó trong GitHub repo không còn cần thiết, hãy xóa theo hướng dẫn trong bài này.

</div>

*Cập nhật: 31.12.2021*

<br>

<!-- more -->

<br>

Bài này hướng dẫn thực hiện theo hướng xóa tập tin trên remote repo trước rồi đồng bộ xuống máy cá nhân sau.

Mở ngoặc, đây chỉ là một cách, vẫn có cách khác tốt hơn.

## Xóa trên remote repository

Đầu tiên, trong trang GitHub, bạn nhấn chọn tập tin cần xóa. Sau đó: 

1. Nhấn nút có biểu tượng **thùng rác** để xóa.
2. Nhấn nút **Commit changes** để xác nhận bạn đang tỉnh hay đang *tửng*.

![Image title](https://lh3.googleusercontent.com/gr4EOCeCEp6Cx6GOfRh9cSc5vz6K0AaHqAkheVGoTzB_pQi2Zk_9KnTsUdqac6l03VWJvygxDXZneoIP4f_8uV-7vz79gtaK5GXZWBAuAd9bXNjxGfeojAD5C3lJL6d4OqIqTZ1UFtg=w1200){ width=720 loading=lazy }

![Image title](https://lh3.googleusercontent.com/aBpJtqlL8SK_Do2TaN6dosWqeOcTXEe3S-0-aHc2Y9RsoQ6DCAACerCI03gi6TVkekfMv5mCPACGaMOrToQtnodNKEBk-tFYobFUpQaASBRGUBzpMarYCwmY1Dmo6M5ITsEwl79e0Lg=w1200){ width=720 loading=lazy }

## Xóa ở local repo

Trong **terminal**, bạn gõ lệnh `git fetch` để truy hồi các meta-data mới nhất. Nói cách khác, là để kiểm tra các thay đổi trên remote repo.

Lưu ý: nhớ thay `mygitdemo` và `main` bằng remote name và branch của bạn.

``` ps1
PS C:\cpp\mygitdemo> git fetch mygitdemo main
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 0), reused 1 (delta 0), pack-reused 0
Unpacking objects: 100% (2/2), 654 bytes | 163.00 KiB/s, done.
From https://github.com/vtchitruong/MyGitDemo
 * branch            main       -> FETCH_HEAD
   800c9f9..4d492a6  main       -> mygitdemo/main
```

Tiếp theo, bạn gõ lệnh `git pull` để tải toàn bộ remote repo về và cập nhật vào local repo.

``` ps1
PS C:\cpp\mygitdemo> git pull mygitdemo main
From https://github.com/vtchitruong/MyGitDemo
 * branch            main       -> FETCH_HEAD
Updating 800c9f9..4d492a6Fast-forward
 file_to_delete.cpp | 10 ----------
 1 file changed, 10 deletions(-)
 delete mode 100644 file_to_delete.cpp
```

Done. Tập tin của bạn không còn nữa, kể cả trong Recycle Bin.