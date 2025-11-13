---
icon: octicons/database-24
---

# Securing database systems

!!! abstract "Content summary"

    This lesson covers the importance of database security and some key security measures for protecting database systems.

## Importance

Database security means protecting the database from threats such as:

- Unauthorized access
- Modification
- Desruction
- Theft*

If a database is compromised, the consequences can be very serious, for example:

1. **Misuse for harmful purposes**

   Leaked data can lead to fraud, extortion, or discrimination.

2. **Damage to reputation and finances**

   A business that suffers a data breach may lose trust, face lawsuits, and suffer financial losses.

3. **National or public safety risks**

   Government or organizational databases under attack can affect security and safety across society.

On the other hand, effective database security helps maintain:

1. **Confidentiality**

   Only authorized users can access the data.

2. **Availability**

   The database is always accessible when needed.

3. **Integrity**

   Data remains accurate and unaltered during access.

---

## Some security solutions

### User awareness

**User awareness** is the **most proactive and decisive factor** in ensuring the safety of a database system. It serves as both the first and last line of defense.

---

### Authorization and authentication

**Authorization** means **assigning specific permissions to users** to control how they interact with the database system. Each user account or role will have defined access rights.

Example:  
Common database permissions include:

- Read data
- Add records
- Delete records

??? info "Common database permissions"

    | Permission | Description | Example |
    | --- | --- | --- |
    | SELECT | Read data from tables/views | Students can view their own grades. |
    | INSERT | Add new records | Teachers can enter test scores. |
    | UPDATE | Modify existing records | Subject teachers can edit test scores. |
    | DELETE | Remove records | School administrators can delete records of withdrawn students. |
    | EXECUTE | Run stored procedures or functions | School admins can run a function to calculate average grades. |
    | CREATE | Create new objects | System admins can create new tables. |
    | ALTER | Change object structure | System admins can add a conduct score column. |
    | DROP | Delete objects | System admins can delete tables or databases. |
    | REFERENCES | Create foreign key constraints | Developers can link tables with foreign keys. |

**Authentication** is the process of **verifying the identity** of a user or device before allowing access to the database.

??? info "Three authentication factors"

    | Factor | Mechanism | Examples |
    | --- | --- | --- |
    | Something you know | Knowledge only the user has | password, PIN, security questions |
    | Something you have | Physical item only the user possesses | security card (chip or magnetic strip), hardware token, phone generating OTP |
    | Something you are | Biometric traits | fingerprint, face, iris, voice |

Example:  
Common authentication methods in database systems:

- Static passwords
- One-Time Password (OTP)
- Biometrics
- Two-Factor Authentication (2FA)

??? tip "Strong passwords"

    A password is considered strong if it includes:

    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Special characters
    - At least 12 characters long

---

### Data encryption

**Encryption** is the process of **transforming data into an unreadable form** using encryption algorithms.

This means that even if an attacker steals the data, they cannot read it because it has been encrypted.

Example:  
Data is typically encrypted in two states:

- At rest: Data encrypted on disk
- In transit: Data encrypted during transmission

---

### Data Backup and Recovery

**Regularly back up** data to a secure location, such as: external hard drives, cloud storage.

**Frequently test recovery procedures** to ensure data can be restored.

Example:  
Follow the 3-2-1 backup rule:  
3 copies, on 2 different types of storage, with 1 copy offsite.

---

### Updates and monitoring

**Always keep** the DBMS **up to date** to patch security vulnerabilities.

**Continuously monitor** system activity using tools like firewalls and intrusion detection systems.

---

!!! note "What is the most effective solution?"

    Database security is not just the job of experts — it requires awareness from every user.
    
    No single solution is perfect. Security relies on combining multiple measures.
    
    There is no unbreakable system — instead, maintain security through a continuous cycle of detection, updates, and patching.

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| bảo mật cơ sở dữ liệu | database security |
| mã hoá (dữ liệu) | encryption |
| phân quyền | authorization |
| quyền, đặc quyền | permission, privilege |
| tính bảo mật | confidentiality |
| tính sẵn sàng | availability |
| xác thực | authentication |