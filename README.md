# Playwright Automation Boilerplate 🎭

E2E test automation project using **Playwright** with **TypeScript**, structured with the **Page Object Model (POM)** pattern.
This project serves as a base and portfolio to demonstrate best practices in automated testing.

## 🚀 Tech Stack

- **Playwright**: Modern and fast E2E testing framework.
- **TypeScript**: JavaScript superset for static typing and safety.
- **Page Object Model**: Design pattern for organizing and maintaining code.

## ⚙️ Prerequisites

Make sure you have **Node.js** (version 18 or higher) installed on your machine.

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:paulrick32/my-portfolio-playwright.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ✅ Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Run a single test file:
  ```bash
  npx playwright test tests/login.spec.ts
  ```

## 📊 Reports

- An HTML report is generated in the playwright-report/ folder.
- Open the last report:
   ```bash
   npx playwright show-report
   ```

## 🤖 CI/CD (GitHub Actions)

This project includes a GitHub Actions workflow that runs Playwright tests on every push and pull request to main/master and publishes the HTML report to GitHub Pages.

Workflow file:

- .github/workflows/playwright.yml

What it does:

- Installs dependencies and Playwright browsers
- Runs `npx playwright test`
- Uploads the report as an artifact
- Deploys the report to GitHub Pages (main/master only)

## 🔐 Environment Variables

These variables are read in the tests and can be provided via your shell:

- E2E_USERNAME (default: standard_user)
- E2E_PASSWORD (default: secret_sauce)

## 🌐 Base URL

The tests run against:

- https://www.saucedemo.com

## 📁 Project Structure

- pages/ — Page Object Model classes (e.g., login.page.ts)
- tests/ — Playwright test specs (e.g., login.spec.ts)
- playwright.config.ts — Test configuration (reporter, baseURL, browser projects)