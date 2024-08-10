# Practice Exam 1 - Project 2

## Lunch Trucks

You and a partner own a small fleet of Lunch Trucks. You are creating a workbook to track your inventory and analyze your revenue.

## Task 1
 
Remove all duplicate records from the Food Inventory worksheet. Do not remove any other records.

???+ Tip "Hint"

    1. At the bottom of the workbook, click the **Food Inventory** tab.

    2. Click any cell within the table to select it.

    3. On the **Data** tab, in the Data **Tools** group, click **Remove Duplicates**.
    
        (Hint: Notice the entire table is automatically selected.)

    4. Accept all defaults in the **Remove Duplicates** pop-up window and click **OK**.

    (Hint: A pop-up window should confirm that 4 duplicate records were removed.)

    5. Click **OK**.

## Task 2

On the Food Inventory worksheet, enter a function in cell G1 that counts the number of Food Items.

???+ Tip "Hint"

    1. At the bottom of the workbook, click the **Food Inventory** tab.

    2. Select cell **G1**. (Hint: Always put your formula in the cell where you want the result to be displayed)

    3. On the **Formulas** tab, in the **Function Library**, click **Insert Function**.

    4. In the **Search for a function:** field, type **Count** and click **Go**.
    
    5. In the **Select a function** field, click **COUNTA** and click **OK**.

    (Hint: COUNTA will count any cell that is not empty. It does not need to contain numbers.).

    6. In the **Function Arguments** pop-up window, configure the following:

        Value1**: _[Food Item]
    
    7. Click **OK**.
    
    (Hint: The formula in cell G1 should be =COUNTA(_[Food Item]))  

## Task 3

On the Revenue worksheet, enter a formula in cell J10 that uses a function to calculate the average revenue from the January column.

???+ Tip "Hint"

    1.  At the bottom of the workbook, click the **Revenue** tab.
???+ Tip "Hint"

    1.  Select cell **J10**. (Hint:  Always put your formula in the cell where you want the result to be displayed)

    2.  In the **Formula Bar**, type **=AVERAGE**, then press the tab key on your keyboard.

    3.  To the left of the **Formula Bar**, click **fx** to open the **Function Arguments** wizard.
        
    4.  In the **Function Arguments** wizard, configure the following:
    
        Number1: C10:C44
    
        (Hint:  If you drag to select the cells instead of typing, the structured reference will be  Table1[January])
    
    5.  Click **OK**.
    
    (Hint: The formula in cell J10 should be either **=AVERAGE(C10:C44)** or **=AVERAGE(Table1[January]**).  The result displayed should be $2,806.40)

## Task 4

On the Revenue worksheet, in cell range C5:C7, insert the food-truck.png image from the **GMetrixTemplates** folder. Size the image to a width of 1".

???+ Tip "Hint"

    1. On the **Revenue** worksheet, click on cell **C5**.

    2. On the **Insert** tab, in the **Illustrations** group, click **Pictures**. Browse to the **GMetrixTemplates** folder, select the file, **food-truck.png**.

    3. Click the **Insert** button.

    4. Click the **Picture Tools Format** tab.

    5. In the **Size** group, change the **Width**: to **1**.
