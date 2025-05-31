import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const url = "https://practicetestautomation.com/practice-test-login/";
Given("website page is opened", () => {
  cy.visit(url);
});
When("Enter invalid username and click on the submit", () => {
  cy.get("#username").type("student123");
  cy.get("#password").type("Password123");
  cy.get("#submit").click();
});
// And("Enter invalid password and click on the submit", () => {
//   cy.get("#password").type("Password");
//   cy.get("#submit").click();
// });
Then("Check for inavlid fields", () => {
  cy.get("#error").should("have.text", "Your username is invalid!");
  //   cy.get("#error").should("have.text", "Your password is invalid!");
});
