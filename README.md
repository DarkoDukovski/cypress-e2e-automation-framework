# 🧪 Cypress Automated Testing Project

Automated end-to-end and API tests built with [Cypress](https://www.cypress.io/), following the **Page Object Model (POM)** design pattern.

## 📋 Test Coverage

| Test File | Type | Website | Scenarios |
|---|---|---|---|
| `login.cy.js` | E2E | [The Internet](https://the-internet.herokuapp.com/login) | Valid login, invalid login |
| `signup.cy.js` | E2E | [Automation Exercise](https://automationexercise.com/login) | Full signup flow |
| `form.cy.js` | E2E | [DemoQA](https://demoqa.com/automation-practice-form) | Practice form submission |
| `navigation.cy.js` | E2E | [The Internet](https://the-internet.herokuapp.com) | Checkbox, dropdown interaction |
| `api.cy.js` | API | [JSONPlaceholder](https://jsonplaceholder.typicode.com) | GET, POST, PUT, DELETE |

## 🛠️ Tech Stack

- **Cypress** v15.9.0
- **JavaScript**
- **Page Object Model** (POM) design pattern
- **GitHub Actions** CI/CD pipeline

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

```bash
git clone https://github.com/DarkoDukovski/cypress-e2e-automation-framework.git
cd cypress-e2e-automation-framework
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner (interactive mode)
npm run cy:open

# Run all tests headlessly in terminal
npm run cy:run

# Run a specific test file
npm run cy:run -- --spec "cypress/e2e/login.cy.js"
```

## 📁 Project Structure

```
cypress-e2e-automation-framework/
├── .github/
│   └── workflows/
│       └── cypress.yml          # CI/CD pipeline
├── cypress/
│   ├── e2e/
│   │   ├── api.cy.js            # API tests (GET, POST, PUT, DELETE)
│   │   ├── form.cy.js           # Practice form test
│   │   ├── login.cy.js          # Login test cases
│   │   ├── navigation.cy.js     # Navigation & UI tests
│   │   └── signup.cy.js         # Signup flow test
│   ├── fixtures/
│   │   ├── formData.json        # Form test data
│   │   ├── loginData.json       # Login credentials
│   │   └── signupData.json      # Signup test data
│   ├── pages/
│   │   ├── FormPage.js          # Form page object
│   │   ├── LoginPage.js         # Login page object
│   │   └── SignupPage.js        # Signup page object
│   └── support/
│       ├── commands.js           # Custom Cypress commands
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## 🏗️ Design Patterns

### Page Object Model (POM)
Each page has its own class in `cypress/pages/` with:
- **Selectors** — UI element references
- **Actions** — reusable interaction methods
- **Assertions** — verification methods

### Data-Driven Testing
Test data is stored in `cypress/fixtures/` as JSON files, keeping tests clean and maintainable.

## ⚙️ CI/CD

Tests run automatically on every **push** and **pull request** to `main` via GitHub Actions. Failed test screenshots are uploaded as artifacts.

## 👤 Author

**Darko Dukovski**
