Feature: OrangeHRM Login Functionality

  Background:
    Given I open the OrangeHRM login page

  Scenario: Successful login
    When I enter username "Admin" and password "admin123"
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Unsuccessful login with invalid credentials
    When I enter username "wrongUser" and password "wrongPass"
    And I click the login button
    Then I should see an error message "Invalid credentials"

  Scenario: Login attempts with multiple credential sets
    When I attempt login with the following credentials:
      | username     | password     |
      | Admin        | admin123     |
      | invalidUser  | invalid123   |
      | admin        | wrongpass    |
    Then I should validate each login attempt accordingly
