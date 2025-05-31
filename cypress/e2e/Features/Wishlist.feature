Feature: Add product to wishlist

  Scenario: Products added to wishlist
    Given I'm on product list page
    When I add the following products to wishlist
      | product Name  |
      | Smartphone    |
      | Health Book   |
    Then the wishlist should contain 2 products
