// ***********************************************
// Custom Cypress Commands
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Login command for The Internet Herokuapp
 * @param {string} username
 * @param {string} password
 */
Cypress.Commands.add('loginHerokuapp', (username, password) => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button[type="submit"]').click()
})