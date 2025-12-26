---
icon: material/invoice-import-outline
---

# Input and output

!!! abstract "Content summary"

    This lesson explains how to read input and display output in Python.

## Overview

In programming, **input** means the program **receives data** from the user, while **output** means the program **displays information** on the screen.

---

## Reading input

!!! note "Input in Python"

    To let the user enter data into a program, we use the built-in function `input()`.

![Illustration of the input() function](./input-and-output/input.png){loading=lazy width=300}

Example:  
Lines 2 and 3 prompt the user to enter their username and password.

```py linenums="1"  hl_lines="2 3"
if __name__ == '__main__':
    username = input('Tên đăng nhập: ')
    password = input('Mật khẩu: ')
```

Running the code above produces the following result:

```pycon
Tên đăng nhập: mrschool
Mật khẩu: 12345678
```

---

## Displaying output

!!! note "Output in Python"

    To display information on the screen, we use the `print()` function.

![Illustration of the print() function](./input-and-output/print.png){loading=lazy width=300}

From now on, we will simply say: *"print to the screen"* or just *"print"*.

Example:  
Lines 5 and 6 print the username and password that the user just entered.

```py linenums="1" hl_lines="5 6"
if __name__ == '__main__':
    username = input('Tên đăng nhập: ')
    password = input('Mật khẩu: ')

    print(f'Tên đăng nhập của bạn là {username} và mật khẩu là {password}')
    print('Bạn đã bị hack 😆')
```

Running the code above produces the following result:

```pycon
Tên đăng nhập: mrschool
Mật khẩu: 12345678
Tên đăng nhập của bạn là mrschool và mật khẩu là 12345678
Bạn đã bị hack 😆
```

!!! info "f-string"

    **f-string** = formatted string.
    
    An f-string lets you insert variables directly into a string using this syntax:

    - Put the letter `f` before the string: `f'...'`  
    - Place the variable inside curly braces `{variable_name}`

    Using f-strings with `print()` is the modern, professional, and readable way in Python.

---

## Source code

The complete code is available at:

- [Google Colab](https://colab.research.google.com/drive/1u5xFZD97jD0R5hm8TREJ5y5Pd0gjKzmS?usp=sharing){target="_blank"}

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-10/topic-F/mindmaps/input-and-output.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| dữ liệu đầu vào | input |
| thông tin đầu ra | output |