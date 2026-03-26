class LoginPage {
  // URL
  url = 'https://the-internet.herokuapp.com/login'

  // Selectors
  get usernameInput() { return cy.get('#username') }
  get passwordInput() { return cy.get('#password') }
  get submitButton() { return cy.get('button[type="submit"]') }
  get successMessage() { return cy.contains('You logged into a secure area') }
  get errorMessage() { return cy.contains('Your username is invalid') }

  // Actions
  visit() {
    cy.visit(this.url)
  }

  login(username, password) {
    this.usernameInput.type(username)
    this.passwordInput.type(password)
    this.submitButton.click()
  }

  // Assertions
  verifySuccessLogin() {
    cy.url().should('include', '/secure')
    this.successMessage.should('be.visible')
  }

  verifyFailedLogin() {
    cy.url().should('include', '/login')
    this.errorMessage.should('be.visible')
  }
}

export default new LoginPage()
