---
categories:
    - Set up & Code down
authors: [mrschool]
date: 2021-07-10
---

# Biên dịch nhiều file C++ trong Visual Studio Code

<div class="result" markdown>
![Image title](./thumbnails/setup-codedown.jpg){ align=left width=360 }
Visual Studio Code cho phép biên dịch và chạy từng file một. Nếu bạn đã tách chương trình của mình thành nhiều file khác nhau thì có thể thử biên dịch theo hướng dẫn trong bài.

Hướng dẫn này áp dụng cho C++ và trình biên dịch GNU C++ Compiler (g++).
</div>

*Cập nhật: 21.01.2024*

<!-- more -->

<br>

## Biên dịch thành file .o

Gõ lệnh sau để biên dịch cùng lúc nhiều file.

``` ps1
g++ *.cpp
```

Hoặc gõ cụ thể tên từng file.

``` ps1
g++ file1.cpp file2.cpp main.cpp
```

Các file này sẽ được biên dịch thành các file **.o**

Nếu chỉ chỉnh sửa một file nào đó, ta biên dịch riêng file đó bằng lệnh sau.

``` ps1
g++ -c file1.cpp
```

## Biên dịch thành file .exe

Cuối cùng nối các file **.o** lại thành file thực thi **some_program.exe**

``` ps1
g++ file1.o file2.o main.o -o some_program.exe
```

Done.