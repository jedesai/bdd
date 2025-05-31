import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("Home page is opened", function () {
  cy.visit("https://www.saucedemo.com/");
  cy.wait(7000);
});
