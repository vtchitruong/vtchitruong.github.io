# Practice Exam 1 - Project 5

## Bike Sales

You are the administrative assistant for a retail store that sells bicycles. You have been tasked to modify a workbook to report the sales for the first quarter.

## Task 1

Configure the Q1 Sales worksheet so rows 1 through 3 remain visible as you scroll vertically.

???+ Tip "Hint"

    1. On the Q1 Sales worksheet, select row 4.
    (Hint: When freezing frames vertically, select the row below the last row you want to remain visible.)
    2. On the View tab, in the Window group, click the Freeze Panes down-arrow and select Freeze Panes.

## Task 2

Add the Subject Equipment Draft to the document properties.

???+ Tip "Hint"

    1. Click the FILE tab.
    2. In the bottom right corner of the Info page, click the Show All Properties link.
        3. In the Subject field, type Equipment Draft.
    4. Click the return arrow in the upper-left corner of the Info window to display the document.

## Task 3

Configure Excel to always print cell range A1:F17 on the Q1 Sales worksheet.

???+ Tip "Hint"

    1. On the Q1 Sales worksheet, select cell range A1:F17.
    2. Click the PAGE LAYOUT tab.
        3. In the Page Setup group, click Print Area and select Set Print Area.

## Task 4

On the Q1 Sales worksheet, insert a function in cell B19 that calculates all sales from the Total column.

???+ Tip "Hint"

    1. On the Q1 Sales worksheet, select cell B19.
    2. In the formula field, type =SUM(F4:F17)
        3. Click Enter on the keyboard to display the result.

        (Hint: The result displayed should be $251,422.00)

## Task 5

In cell B4 on the Q1 Sales worksheet, insert a function that joins Description and Style from the Catalog worksheet, separated by a hyphen. Include a space on both sides of the hyphen. (Example: Cross Country - Hardtail).

???+ Tip "Hint"

    1. On the Q1 Sales worksheet, select cell B4.
    2. Click the **Formulas** tab and click Insert Function.
        3. In the Search for a function field, type the keyword, Join and then click GO.
    4. In the Select a function field, select CONCATENATE. Click **OK**.
    5. In the Function Arguments pop-up window for CONCATENATE, do the following:
    a. Click in the Text1 field.
    b. Click the Catalog worksheet tab. In the Description column, select cell D4.
    c. Click in the Text2 field
    d. Type a set of quotes containing a space, a hypen, and a space. Example: " - "
    e. Click in the Text3 field.
    f. Click the Catalog worksheet tab. In the Style column, select cell C4.
    6. Click **OK**.