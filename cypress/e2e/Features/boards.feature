Feature: Boards Functionality

Scenario Outline: Creating a <listname> list within a board
Given I'm on the home page
When I create a board named "<boardName>"
And I add a list named "<listName>" to the board
Then the list "<listName>" should be visible on the board

Examples:
    | boardName | listName |
    | Shopping list  | Clothes |
    |Movie List | Mission impossibe|