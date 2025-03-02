---
icon: simple/postgresql
---

# Bài tập truy vấn dữ liệu trên một bảng

!!! abstract "Tóm lược nội dung"

    Đây là bài tập thực hành truy vấn dữ liệu từ một bảng trong cơ sở dữ liệu.

## Yêu cầu về cơ sở dữ liệu

1\. Tải tập tin [hogwarts.sql](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/hogwarts.sql){:target="_blank"} và mở bằng pgAdmin của PostgreSQL.

![Cách tải tập tin .sql trên GitHub](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsJEmHXZVuEyeWKir1A/root/content){loading=lazy}

2\. Chạy mã lệnh trong tập tin để tạo cơ sở dữ liệu `hogwarts` [^1].

[^1]: Dữ liệu được lấy từ website [Kaggle](https://www.kaggle.com/) và đã được chuyển đổi sang dạng SQL phù hợp với PostgreSQL.

Hình sau là lược đồ cơ sở dữ liệu Hogwarts:

![Lược đồ cơ sở dữ liệu Hogwarts](https://api.onedrive.com/v1.0/shares/s!ApQ3j6n6-2wNsJElGb4ge6mA02wA0A/root/content){loading=lazy}

## Toán tử so sánh theo mẫu

Ngoài toán tử `like` **so sánh chuỗi theo mẫu** (so sánh gần đúng), PosgreSQL còn có các toán tử khác dùng để so sánh chuỗi theo mẫu như sau:

| Toán tử |	Toán tử tương đương | Mô tả |
| --- | --- | --- |
| `~~` | `like` | có phân biệt chữ hoa chữ thường |
| `~~*` | `ilike` | không phân biệt chữ hoa chữ thường |

## Yêu cầu truy vấn

1\. Cho biết huyết thống lai (half-blood) là huyết thống như thế nào.

Output:

| blood_name | blood_description |
| --- | --- |
| Half-blood | Parents or grandparents split between Muggles and wizards |

??? tip "Đáp án đề xuất"

    Vì ta không biết `half-blood` được viết hoa hay thường nên ta dùng hàm `lower()` để chuyển đổi tất cả dữ liệu liên quan của mẫu tin sang chữ thường, rồi mới so sánh với chuỗi `half-blood` viết thường.

    ```sql linenums="2"
    select blood_name, blood_description
    from bloods
    where lower(blood_name) = 'half-blood';
    ```

2\. Cho biết họ tên đầy đủ của người sáng lập (founder) nhà Slytherin và hai màu sắc đặc trưng của nhà này (color_1, color_2).

Output:

| house_name | founder | color_1 | color_2 |
| --- | --- | --- | --- |
| Slytherin | Salazar Slytherin | green | silver |

??? tip "Đáp án đề xuất"

    ```sql linenums="7"
    select house_name, founder, color_1, color_2
    from houses
    where house_name = 'Slytherin';
    ```

3\. Đọc câu thần chú (incantation) có tác dụng (effect) triệu hồi đồ vật (Summons an object).

Output:

| incantation | effect |
| --- | --- |
| Accio | Summons an object |

??? tip "Đáp án đề xuất"

    Trong trường hợp ta biết `Summons an object` là giá trị chuỗi đầy đủ trong thuộc tính liên quan, ta dùng toán tử so sánh bằng `=`.

    ```sql linenums="12"
    select incantation, effect
    from spells
    where effect = 'Summons an object';
    ```

    Trong trường hợp ta biết `Summons an object` chỉ là phần bắt đầu của chuỗi lien quan, ta dùng toán tử **so sánh theo mẫu** (so sánh gần đúng) `like` và ký tự đại diện `%`.

    ```sql linenums="17"
    select incantation, effect
    from spells
    where effect like 'Summons an object%';
    ```

4\. Liệt kê các môn học bắt buộc (regular) trong trường Hogwarts. Sắp xếp tên môn học (subject_name) theo thứ tự bảng chữ cái.

Output:

| subject_name | subject_type |
| --- | --- |
| Alchemy | regular |
| Apparition | regular |
| Arithmancy | regular |
| Astronomy | regular |
| Care of Magical Creatures | regular |
| Charms | regular |
| Defence Against the Dark Arts | regular |
| Divination | regular |
| Flying | regular |
| Ghoul Studies | regular |
| Herbology | regular |
| History of Magic | regular |
| Magical Theory | regular |
| Muggle Studies | regular |
| Potions | regular |
| Study of Ancient Runes | regular |
| Transfiguration | regular |

??? tip "Đáp án đề xuất"

    Vì không rõ regular được viết hoa hay thường nên ta dùng hàm `lower()` để chuyển đổi thành chữ thường trước khi so sánh.

    Để sắp xếp từ A đến Z, nghĩa là tăng dần, ta chỉ cần viết thuộc tính cần sắp xếp, không cần viết rõ `asc` (do `asc` là mặc định).

    ```sql linenums="23"
    select subject_name, subject_type
    from subjects
    where lower(subject_type) = 'regular'
    order by subject_name;
    ```

5\. Cho biết những chủng loại nào có liên quan đến loài người (human).

Output:

| spec_name | spec_description |
| --- | --- |
| Goblin | Highly intelligent race of small humanoids with long fingers and feet that coexist with the wizard world |
| Half-giant | Beings with some, but not a total, amount of giant heritage or blood, as well as part human blood |
| Veela | Semi-human magical beings; beautiful women with white-gold hair and skin that appears to shine moon-bright
| Werewolf | Human being who, upon the complete rising of the full moon, becomes a fearsome and deadly near-wolf |

??? tip "Đáp án đề xuất"

    Cách 1:
    
    Theo suy đoán, `human` có thể chỉ là một phần của chuỗi mô tả chủng loại. Cho nên, ta dùng toán tử **so sánh theo mẫu** (so sánh gần đúng) `like`.

    Vì không biết `human` nằm ở đầu, giữa hay cuối chuỗi mô tả, ta đặt ký tự đại diện `%` ở cả hai bên chuỗi `human`: `like '%human%'`.

    Vì không biết `human` được viết hoa hay thường nên thay vì `like`, ta dùng toán tử `ilike`.

    ```sql linenums="29"
    select spec_name, spec_description
    from species
    where spec_description ilike '%human%';
    ```

    Cách 2:
    
    Ta có thể dùng toán tử `~~*`.

    ```sql linenums="34"
    select spec_name, spec_description
    from species
    where spec_description ~~* '%human%';
    ```

6\. Cho biết năng lực (skills) của các thành viên gia đình Potter (last_name là Potter). Sắp xếp tăng dần theo họ (last_name), nếu trùng họ thì sắp xếp giảm dần theo tên (first_name).

Output:

| first_name | last_name | skills |
| --- | --- | --- |
| Ronald | Weasley | Wizard chess | Quidditch goalkeeping |
| Percy | Weasley | Intelligent| hard-working| a model student |
| Ginevra  | Weasley | Chaser| Bat-Bogey hex |
| George | Weasley | Beater |
| Fred  | Weasley | Beater |
| Charles  | Weasley | Highly skilled dragon trainer| one-time Gryffindor Seeker |
| Arthur | Weasley | Muggle world works |
| (Bill) William | Weasley | Highly skilled curse-breaker for Gringotts Wizarding Bank| very intelligent| past Hogwarts Head Boy |
| Fleur | Weasley (née Delacour) | part Veela, and therefore possesses some of their magical powers. She was also selected to compete in the Triwizard Tournament |
| Angelina | Weasley (née Johnson) | Chaser |
| Molly | Weasley (née Prewett) | Household spells| healing magic |

??? tip "Đáp án đề xuất"

    Do sắp xếp theo họ (last_name) tăng dần, ta không cần viết rõ `asc` (do `asc` là mặc định). Còn sắp xếp theo tên (first_name) giảm dần, ta viết `desc`.

    ```sql linenums="40"
    select first_name, last_name, skills
    from characters
    where last_name ilike 'weasley%'
    order by last_name, first_name desc;
    ```

## Mã nguồn

Các đoạn mã trong bài được đặt tại [GitHub](https://github.com/vtchitruong/gdpt-2018/blob/main/grade-11/topic-f1/sql-query-on-one-table-pratice-hogwarts.sql){:target="_blank"}.
