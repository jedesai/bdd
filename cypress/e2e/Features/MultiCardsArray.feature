Feature: Creating cards functionality

  Scenario: Create multiple cards
    Given I am in board detail
    When I create cards with names
    | Milk | Bread | Butter | Jam |
    Then 4 cards are visible
