# Practice Exam 1 - Project 7

## Computer Hotline

You are assistant manager of the Computer Hotline business. The business offers overtime bonuses to employees who work extra hours. You've been tasked with preparing the tables.

## Task 1

On the Average Call Time worksheet, use an Excel feature to copy the sparkline into all the vacant cells of the Trendcolumn.

???+ Tip "Hint"

    1. On the **Average Call Time** worksheet, select cell **G4**.

    2. In the lower-right corner of cell **G4**, click-drag the fill handle down the **Trend** column beginning with cell **G4** through **G16**. 

## Task 2

On the Employee Hours worksheet, add a row to the table that automatically calculates total hours worked by all employees.

???+ Tip "Hint"

    1. On the **Employee Hours** worksheet, click on any cell in the table to select the table.

    2. On the **Table Tools Design** tab, in the **Table Style Options** group, click the **Total Row** to enable it.
 
## Task 3

Add a function to the Overtime column cell H4 on the Employee Hours worksheet that will display the word Yesif the value in cell J4 is higher than 40, otherwise display the word No.

???+ Tip "Hint"

    1. On the **Employee Hours** worksheet, click cell **H4**.

    2. In the **Formula Bar**, type **=IF**, then press the tab key on your keyboard.

    3. To the left of the **Formula Bar**, click fx to open the **Function Arguments** wizard.

    4. In the **Function Arguments** wizard, configure the following:
    
        Logical_test: J4>40

        Value_if_true: Yes

        Value_if_false: No

    5. Click **OK**.

## Task 4

In cell I4 of the Employee Hours sheet, use a function to copy the name from cell A4 and format the name so the first letter is upper case and the remaining letters are lower case.

???+ Tip "Hint"

    1. On the **Employee Hours** worksheet, select cell **I4**.
    
        (Hint: Always put your formula in the cell where you want the result displayed.)

    2. In the ****Formula Bar****, type **=PROPER**, then press the tab key on your keyboard.

    3. To the left of the ****Formula Bar****, click fx to open the **Function Arguments** wizard.

    4. In the **Function Arguments** wizard, configure the following:
    Text: A4

    5. Click **OK**.
    
    (Hint: The result should be Emilio)

## Task 5

On the Average Call Time worksheet, create a 3-D Clustered Column chart that shows only the Call Time for Friday by each Salesperson. Position the new chart to the right of the table and change the colors of the chart toColorful Palette 4.

???+ Tip "Hint"

    1. On the **Average Call Time** worksheet, Click the **Insert** tab.

    2. In the **Charts** group, click the **Insert Column Chart** icon and select **3-D Clustered Column**.

    3. In the **Chart Tools Design** tab, in the **Data** group, click **Select Data**.

    4. Enter **Chart** data range as: **=Parts[Fri]** and click arrow at end of field twice.

    5. Under **Horizontal (Category) Axis Labels** click **Edit**. Then select cells **A4** through **A16** and click **OK** twice.

    6. On the **Chart Tools Design** tab, in the Chart **Styles** group, click Change Colors and select Colorful Palete 4.

    7. Move the chart to the right side of the table.
