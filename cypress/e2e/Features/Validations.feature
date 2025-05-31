Feature: Validations for invalid fields

@Validations
Scenario: Enter invalid input and check Validations
    Given website page is opened
    When Enter invalid username and click on the submit
    Then Check for inavlid fields