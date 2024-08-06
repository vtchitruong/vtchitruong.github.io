# Practice Exam 1 - Project 7

## FusionTomo

You are the HR Director for FusionTomo. The store offers bonuses to employees who meet quarterly sales goals. You have been tasked with preparing the tables that track the sales and bonuses.

## Task 1

Use Autofill to copy the formula in cell H4 to calculate the Total Compensation for each employee in the Bonuses table.

???+ Tip "Hint"

    1. On the **Employee Bonuses** worksheet, confirm that cell **H4** is selected.

    2. In the lower-right corner of cell **H4**, click-drag the fill handle down through the **Total Compensation** column, beginning with cell **H4** through **H11**.

## Task 2

Insert a formula into cell G4 on the Employee Bonuses worksheet that evaluates whether the amount in Parts, Accessories, or Services exceed the Quarterly Goal. For each column that exceeds the goal, apply the Quarterly Bonus Rate.

???+ Tip "Hint"

    1. On the **Employee Bonuses** worksheet, select cell **G4**.

        (Hint: Always put your formula in the cell where you want the result to be displayed)

    2. On the **Formulas** tab, in the **Function Library**, click **Insert Function**.
    
    3. In the **Search for a function:** field, type **Sumif** and click **Go**.
    
    4. In the **Select a function** field, click **SUMIF** and Click **OK**.
    
    5. In the **SUMIF** pop-up window, configure the following:

        Range: B4:D4  
        
        Criteria: >100000  
    
        Sum_Range: B4:D4  

        (Hint: You can leave this field blank and the cells in the Range field will be used by default.)

    6. Click **OK**.

    7. In the **Formula Bar**, to the right of the **SUMIF** formula, multiply it by the **Quarterly Bonus Rate** so it reads as follows: **=SUMIF(B4:D4,">100000") * \$B\$17**
    
    8. Press the Enter key to accept the formula and calculate the result.

## Task 3

On the Parts worksheet, remove the row containing the salesperson named Allen.

???+ Tip "Hint"

    1. On the **Parts** worksheet, right-click row **11** and select **Delete**, and then click **Delete Row**.

## Task 4

On the Employee Bonuses worksheet, disable the headings on the Rates table.

???+ Tip "Hint"

    1. Click anywhere on the **Rates** table to select it.

    2. On the **Table Tools Design** tab, in the **Table Styles Options** group, click the **Header Row** box to clear it and disable the option.

## Task 5

In cell F4 on the Parts worksheet, insert a line that graphs the trend of sales from Jan through Mar.

???+ Tip "Hint"

    1. Select cell **F4** on the **Parts** worksheet.

    2. Select the **Insert** tab.

    3. In the **Sparklines** group, click **Line**.

    4. In the **Create Sparklines** pop-up window, configure the fields as follows:

        Data range: B4:D4

        Location range: \$F\$4

    5. Click **OK**.
