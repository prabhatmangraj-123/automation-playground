# Automation Playground

Playwright test suite for practicing and portfolio.

## Project Structure

- `tests/` – All test files
- `pages/` – Page Object Model classes
- `fixtures/` – Custom test fixtures
- `auth.setup.spec.ts` – Global authentication setup
- `playwright.config.ts` – Playwright configuration


## Test Scenarios

- ✅ Login to Saucedemo
- ✅ Add items to cart
- ✅ Checkout flow
- ✅ Data-driven tests (multiple users)
- ✅ API testing with Playwright

## Features

- ✅ Page Object Model for maintainable tests
- ✅ Custom fixtures for reusable test setup  
- ✅ Authentication setup (storage state) — login once, run many tests
- ✅ Data-driven testing
- ✅ API testing with Playwright

## Technologies Used

- [Playwright](https://playwright.dev/) – Browser automation
- TypeScript – Type-safe test code
- Page Object Model – Maintainable test structure

## How to Run

### 1. Install dependencies
```bash
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/login.spec.ts

# View HTML report
npx playwright show-report