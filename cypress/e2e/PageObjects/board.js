import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const baseUrl = "https://rushdaansari.github.io/trello-clone/";

Given("I'm on the home page", () => {
  cy.visit(baseUrl);
});

When("I create a board named {string}", (boardName) => {
  cy.get(".add-new-column").click();
  cy.get("input[placeholder='Enter List Title...']").type(boardName);
  cy.get(".btn.btn-secondary").click();
});

And("I add a list named {string} to the board", (listName) => {
  cy.get(
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > footer:nth-child(3) > div:nth-child(1) > i:nth-child(1)"
  ).click();
  cy.get("textarea[placeholder='Enter card title...']").type(listName);
  cy.get("div[class='add-new-card'] button[class='btn btn-secondary']").click();
});

Then("the list {string} should be visible on the board", (listName) => {
  cy.get(".card-item").contains(listName).should("be.visible");
});
