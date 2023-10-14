# Khái quát về cơ sở dơ dữ liệu

## Cơ sở dữ liệu

### Khái niệm

Cơ sở dữ liệu được sử dụng để lưu trữ và quản lý lượng lớn dữ liệu, thông tin của cá nhân lẫn tổ chức trong nhiều lĩnh vực khác nhau.

!!! note "Cơ sở dữ liệu"

    Cơ sở dữ liệu là một tập hợp dữ liệu được tổ chức và lưu trữ sao cho việc tìm kiếm, xử lý và quản lý dữ liệu được hiệu quả.

### Tính chất


Tính cấu trúc
Dữ liệu có cấu trúc là dữ liệu được tổ chức và lưu trữ theo một định dạng nhất định.

Ví dụ:

Dữ liệu được tổ chức thành các bảng gồm nhiều hàng và nhiều cột, hàng và cột đều tuân theo những quy ước đặt ra ban đầu.


Tính nhất quán

Là một phần của tính chính xác và tính tin cậy của dữ liệu. Cụ thể, trong quá trình cập nhật, dữ liệu phải được đảm bảo không có lỗi, không sai lệch hay mâu thuẫn. 

Ví dụ:

Khi bạn Tèo chuyển từ lớp 11A sang lớp 11D, thì dữ liệu của hai lớp này và dữ liệu liên quan đến Tèo đều phải được cập nhật sao cho không xảy ra mâu thuẫn, chẳng hạn cả hai lớp đều có dữ liệu về học sinh Tèo, hoặc kết quả thi đua vẫn tính cho lớp 11A mà lẽ ra phải tính cho lớp 11D.




 In the context of data and information, consistency refers to the accuracy and reliability of data over time and across various sources. Consistent data is free from errors, discrepancies, or contradictions

1. Tính toàn vẹn

Là tính đúng đắn, tính tin cậy và bao gồm cả tính nhất quán của dữ liệu. Cụ thể, trước khi chính thức được lưu vào cơ sở dữ liệu, dữ liệu phải tuân theo các quy định và ràng buộc để đảm bảo luôn đúng đắn, không có dữ liệu "*rác*".




Tính an toàn 
Là khả năng kiểm soát các truy xuất vào cơ sở dữ liệu nhằm đảm bảo không có truy xuất trái phép, giả mạo, đảm bảo ngăn chặn các thay đổi không hợp lệ đối với dữ liệu.


## Hệ quản trị cơ sở dữ liệu

A Database Management System (DBMS) is a software system designed to manage, store, retrieve, and manipulate data in a database. It serves as an intermediary between users or applications and the database, providing an efficient and secure way to interact with and control access to the stored data. Here are the key components and functions of a DBMS:

1. **Data Storage:** DBMS manages the physical storage of data, including how data is stored on disk, data file organization, and data indexing to optimize data retrieval.

2. **Data Retrieval:** Users and applications can retrieve data from the database using query languages such as SQL (Structured Query Language). DBMS translates queries into low-level commands to access and retrieve data efficiently.

3. **Data Manipulation:** DBMS allows users to insert, update, and delete data in the database. It enforces data integrity constraints (e.g., unique keys, foreign keys) to ensure data quality.

4. **Data Security:** DBMS manages user authentication and authorization to control who can access and modify data. It ensures that sensitive data is protected and complies with security policies.

5. **Concurrency Control:** When multiple users or applications access the database concurrently, DBMS ensures that transactions do not interfere with each other. It uses techniques like locking and multi-version concurrency control (MVCC) to maintain data consistency.

6. **Backup and Recovery:** DBMS provides mechanisms for data backup and recovery to protect against data loss due to hardware failures, software errors, or other unforeseen events.

7. **Data Definition:** DBMS allows the definition of the database schema, including tables, columns, data types, relationships, and integrity constraints. It supports schema evolution as application requirements change.

8. **Query Optimization:** DBMS includes query optimization mechanisms to improve query performance by choosing efficient query execution plans.

9. **Data Integrity Constraints:** DBMS enforces data integrity constraints (e.g., primary keys, foreign keys, check constraints) to ensure that data remains accurate and consistent.

10. **Transaction Management:** Transactions are sequences of one or more database operations treated as a single unit of work. DBMS ensures that transactions adhere to the ACID properties (Atomicity, Consistency, Isolation, Durability) to maintain data reliability.

11. **Reporting and Analytics:** DBMS often supports reporting and analytics tools that allow users to generate reports, perform data analysis, and visualize data from the database.

12. **Data Recovery:** In case of system crashes or failures, DBMS provides recovery mechanisms to bring the database back to a consistent state.

13. **Multi-user Support:** DBMS handles multiple users and applications accessing the database concurrently, providing mechanisms to manage concurrent access and prevent data conflicts.

Popular DBMS software includes both relational database management systems (RDBMS) like MySQL, Oracle, and PostgreSQL, as well as NoSQL databases like MongoDB, Cassandra, and Redis. The choice of DBMS depends on factors such as data structure, scalability requirements, and specific application needs. DBMS plays a critical role in modern information systems, enabling efficient and secure data management for a wide range of applications and industries.