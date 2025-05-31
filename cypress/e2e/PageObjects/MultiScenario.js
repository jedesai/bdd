import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the OrangeHRM login page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When(
  "I enter username {string} and password {string}",
  (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  }
);

When("I click the login button", () => {
  cy.get('button[type="submit"]').click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
  cy.get("h6").should("contain", "Dashboard");
});

Then("I should see an error message {string}", (message) => {
  cy.get(".oxd-alert-content-text").should("contain", message);
});

When("I attempt login with the following credentials:", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').clear().type(row.username);
    cy.get('input[name="password"]').clear().type(row.password);
    cy.get('button[type="submit"]').click();

    if (row.username === "Admin" && row.password === "admin123") {
      cy.url().should("include", "/dashboard");
      cy.get("h6").should("contain", "Dashboard");
    } else {
      cy.get(".oxd-alert-content-text").should(
        "contain",
        "Invalid credentials"
      );
    }
  });
});

Then("I should validate each login attempt accordingly", () => {
  cy.log("Each login attempt has been validated");
});
