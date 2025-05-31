Feature: SauaceDemo LoginFlow

Background: 
Given I open the SauaceDemo website login page

Scenario: Login with valid credentails 
When i login with valid username "standard_user" and password "secret_sauce"
And click on the Login button
Then I should land on the product page

Scenario: User should see the product list
Given I'm logged in as a standard user
Then i should see at least 6 products listed 

Scenario: User Logout
Given im logged in as a standard user
When i open the sidebar menu
And i click Logout
Then I should be redirected to the login page.



