Feature: Login functionality

  @login
  Scenario: Valid user can log in successfully
    Given The login page is opened
    When I enter valid username and password
    And I click the login button
    Then I should see the dashboard page
