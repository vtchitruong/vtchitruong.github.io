# Practice Exam 1 - Project 6
Grain Production
You are writing a report about the top countries in the world for grain production. To support your report, you are constructing a worksheet using Excel 2016.

TASK 1
 
Remove all hidden properties and personal information from the workbook.

1. Click the FILE tab.
2. On the default Info page, click the Check for Issues button.
3. Select Inspect Document. (Hint: If prompted to save your changes, click Yes)

 

4. In the Document Inspector pop-up window, accept all of the default selections and click Inspect.
5. On the results page, next to Document Properies and Personal information, click Remove All.
6. Click Close. 
7. Click the circled arrow located in the upper-left of the FILE tab to return to the Grain Production worksheet.

 

TASK 2

In the Grain Production worksheet, apply the Title style to cell A1.

1. Select cell A1.
2. On the HOME tab, in the Styles group, click the more drop down.
3. Beneath Titles and Headings section, click Title.

 

TASK 3

In the Grain Production worksheet, modify the table style to remove the shading that appears on every other row.

1. Click anywhere in the first table to select it.
2. On the TABLE TOOLS DESIGN contextual tab, in the Table Styles Options group, click the box Banded Rows to clear it.
(Hint: The shading on the table rows should now be removed.)

 

TASK 4

In the Grain Production worksheet, change the sort order of the first table to alphabetize the countries from A to Z.

1. On the first table, click the Country column heading (cell A3).
2. On the HOME tab, in the Editing group, click Sort & Filter and select Sort A to Z.


 

TASK 5

Enter a formula in cell E4 that calculates the total production of Barley and updates the results even if the row order is changed.

1. Select cell E4.
(Hint: Always put your formula in the cell where you want the result to be displayed)
2. On the FORMULAS tab, in the Function Library, click Insert Function.
3. In the Search for a function: field, type Sumif and click Go.
4. In the Select a function field, click SUMIF and click OK.
5. In the Function Arguments pop-up window for SUMIF, configure the following:
Range: B4:B31 (Hint: If you drag to select the cells instead of typing, the structured reference will be Table1[Product])
Criteria: Barley
Sum_Range: C4:C31 (Hint: If you drag to select the cells instead of typing, the structured reference will be Table1[Metric Tons])
6. Click OK.
(Hint: The formula in cell E3 should be =SUMIF(B4:B31,"Barley",C4:C31). The result displayed should be 30,270,882).
 
