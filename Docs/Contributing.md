# Developer Guide

This guide will help you understand:

- The structure of the project
- The important classes and how they interact
- How to run the project and tests
- How to contribute to the codebase

## Project Architecture

The project is a shopping cart and wallet system written in modern JavaScript (ES Modules) and Express. It is structured around three main concerns:

### 1. Cart & Discount Logic (from NPM package)

These part are imported directly from my own NPM package:

- Cart: The main class that manages products, quantities, and totals.
- DiscountManager: Handles all discount logic, such as:
   - Free shipping thresholds
   - “Buy X, Pay for Y” rules
   - Discount codes

See the full module structure here: [L2-Module on GitHub](https://github.com/Cappe99/L2-Module) 

##  2. Wallet & Validation

- WalletService: Manages wallet balance, top-ups, and deductions.
- Validator: Ensures that operations like checkout, top-ups, or purchases are valid before they proceed.

## 3. Controllers & Repositories

- Controllers: (CartController, WalletController, ProductController) handle HTTP requests, call services, and render views.
- Repositories: (ProductRepository, WalletRepository) encapsulate data storage and retrieval for products and transactions.

## Project Structure

![Structure](../public/images/Modules.PNG)

- Controllers: Handle incoming HTTP requests and coordinate services.
- Services: Contain core business logic.
- Repositories: Encapsulate data access.
- Data: Data such as product lists.
- Validator: Ensures correctness of operations.
- views: Contains EJS templates for the UI
- Routes: Routes define endpoints and delegate logic to controllers.

# Test Structure

The project currently includes UI-based acceptance tests that are directly derived from the requirements listed in the project [backlog](https://github.com/users/Cappe99/projects/1).

Each test simulates real user interactions through the applications interface, such as adding products to the cart, applying discounts, checking out, and managing the wallet balance.

[Link to test specification](https://github.com/Cappe99/L3-App-1DV610/blob/main/Docs/Testspecifikation.md)

Tests are executed manually through browser interactions, ensuring that the entire flow matches the expected behavior from the backlog.

### Extending the Test Suite

Whenever a new feature or implementation is added to the system, a corresponding UI test must be created or updated to reflect the new functionality.

This ensures that:
- All user stories are continuously verified end-to-end.
- The backlog remains synchronized with actual implemented behavior.
- Regressions are minimized when modifying or extending the system.

## Coding Norms & Expectations

When contributing, please follow these guidelines:

**Keep concerns separated**:
- Controllers handle flow
- Services handle logic
- Repositories handle data
- Views handle presentation

**Add or update tests if you add/change functionality.**

**Follow existing naming conventions (camelCase for functions, PascalCase for classes).**

## Contributing

The contribution flow is:

1. Fork the repository (your changes won’t affect the original until you make a Pull Request).
2. Clone your fork and create a feature branch.
3. Make your changes and update test specifikation
4. Submit a Pull Request with a clear description.

Forks are safe: they create your own copy of the repo. You can push changes to your fork freely, and the original repo will only change if the maintainers review and merge your Pull Request.

## External Resources

- l2-module-cart-and-discounts: Custom NPM module providing cart, discount, and shipping logic, etc.
- Express.js: Web server and routing

**All dependencies are listed in package.json.**