# Practice Exam 1 - Project 3

## Ice Cream

A shop you manage sells custom flavored ice cream. You are tracking the cost and profit of each flavor and summarizing the information in a workbook.

## Task 1

Simultaneously replace all occurrences of the word Choco with Chocolate in the workbook.

???+ Tip "Hint"

    1. On the **Home** tab, in the Editing group, click Find & Select and choose Replace...
    2. In the Find and Replace pop-up window, type the following in the fields:

    Find what: **Choco**
    Replace with: **Chocolate**

    3. Click the Options button and set the Within: field to Workbook.
    4. Click Replace All once. (Hint: You can verify that the change happened by looking at cells A4 and A18 on the Costs worksheet to see whether it says "Choco" or "Chocolate.")
    5. Click Close to exit the pop-up window.

## Task 2

On the Costs worksheet, repeat the rows containing the company logo and column headings so they appear on all printed pages.

???+ Tip "Hint"

    1. On the PAGE LAYOUT tab, in the Page Setup group, click Print Titles.
    2. In the Page Setup pop-up window, on the Sheet tab, type the following in the fields:
    Rows to repeat at top: $1:$3
    (Hint: You can also autopopulate this field by selecting the rows with your mouse.)
        3. Click OK
    (Hint: You can see the result by clicking Print Titles again, then clicking Print Preview. The first page will display in the Print Preview window. At the bottom of the window, advance to the second page by clicking the Next Page arrow located right of 1 of 2. You should see the column headings displayed at the top of the table on both pages. Click the return arrow in the upper left corner of the window to go back to the spreadsheet.)

## Task 3

In cell B28 on the Profits worksheet, insert a formula that displays the number of Sales greater than 250.

???+ Tip "Hint"

    1. Click the Profits worksheet tab to select that worksheet.
    2. Click cell B28 to select it.
        3. On the **Formulas** tab, on the far left click Insert Function.
    4. In the Insert Function pop-up window, in the Search for a function: field, type COUNTIF. Click Go.
    5. In the Select a function: window, select COUNTIF and Click **OK**.
    6. In the Function Arguments pop-up window for COUNTIF, type the following in the fields:
    Range: D4:D26
    Criteria: ">250"
    7. Click **OK**.
    (Hint: The completed entry in the Formula Bar should read =COUNTIF(D4:D26,">250") )


## Task 4

Modify the chart on the Profits worksheet so the Flavors are displayed as Horizontal Axis Labels and Expense and Income are the Legend Series.

???+ Tip "Hint"

    1. If the Profits worksheet Is not already displayed, click the Profits worksheet tab to select it.
    2. Click the chart to reveal the CHART TOOLS tabs.
        3. On the **Chart Tools Design** tab, in the Data group, click Switch Row / Column.

## Task 5

Modify the chart on the Profits worksheet so the Legend appears at the Top.

???+ Tip "Hint"

    1. If the Profits worksheet Is not already displayed, click the Profits worksheet tab to select it.
    2. Click the chart to reveal the CHART TOOLS tabs.
        3. On the far left of the **Chart Tools Design** tab, in the Chart Layouts group, click Add Chart Element, select Legend and click Top.