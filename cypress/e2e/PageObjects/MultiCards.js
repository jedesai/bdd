import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = "https://rushdaansari.github.io/trello-clone/";
let cardArray = [];

Given("I am in board detail", () => {
  cy.visit(baseUrl);

  // Create a board/column to hold the cards
  cy.get(".add-new-column").click();
  cy.get("input[placeholder='Enter List Title...']").type("My List");
  cy.get(".btn.btn-secondary").click();
});

When("I create cards with names", (dataTable) => {
  // Convert row into array of card names
  cardArray = dataTable.raw()[0];

  // Loop over the array and add each card
  cardArray.forEach((cardName) => {
    cy.get(".column").first().find(".footer-action").click();
    cy.get("textarea[placeholder='Enter card title...']").type(cardName);
    cy.get(".add-new-card .btn.btn-secondary").click();
  });
});

Then("{int} cards are visible", (count) => {
  cy.get(".card-list").should("have.length", count);

  // Optionally, validate each card name
  cardArray.forEach((cardName) => {
    cy.get(".card-list").contains(cardName).should("be.visible");
  });
});
