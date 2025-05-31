import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let products = [];

Given("I'm on product list page", () => {
  cy.visit("https://demowebshop.tricentis.com/");
});

When("I add the following products to wishlist", (dataTable) => {
  products = dataTable.rawTable.slice(1).flat();
  products.forEach((product) => {
    cy.get("#small-searchterms").clear().type(product);
    cy.get("input[value='Search']").click();
    cy.get("h2.product-title a").first().click();
    cy.get("input[value='Add to wishlist']").click();
    cy.wait(3000);
  });
});

Then("the wishlist should contain {int} products", (count) => {
  cy.get(".wishlist-qty")
    .invoke("text")
    .then((text) => {
      const match = text.match(/\d+/);
      expect(parseInt(match[0])).to.eq(count);
    });
});
