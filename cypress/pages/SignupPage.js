class SignupPage {
  // URL
  url = 'https://automationexercise.com/login'

  // Selectors - Signup Form
  get signupName() { return cy.get('input[data-qa="signup-name"]') }
  get signupEmail() { return cy.get('input[data-qa="signup-email"]') }
  get signupButton() { return cy.get('button[data-qa="signup-button"]') }

  // Selectors - Account Info
  get genderMr() { return cy.get('#id_gender1') }
  get password() { return cy.get('#password') }
  get daySelect() { return cy.get('#days') }
  get monthSelect() { return cy.get('#months') }
  get yearSelect() { return cy.get('#years') }

  // Selectors - Address Info
  get firstName() { return cy.get('#first_name') }
  get lastName() { return cy.get('#last_name') }
  get address() { return cy.get('#address1') }
  get state() { return cy.get('#state') }
  get city() { return cy.get('#city') }
  get zipcode() { return cy.get('#zipcode') }
  get mobileNumber() { return cy.get('#mobile_number') }
  get createAccountButton() { return cy.get('button[data-qa="create-account"]') }

  // Selectors - Verification
  get accountCreated() { return cy.get('[data-qa="account-created"]', { timeout: 15000 }) }

  // Actions
  visit() {
    cy.visit(this.url)
  }

  fillSignupForm(name, email) {
    this.signupName.type(name)
    this.signupEmail.type(email)
    this.signupButton.click()
  }

  fillAccountInfo(data) {
    this.genderMr.check()
    this.password.type(data.password)
    this.daySelect.select(data.day)
    this.monthSelect.select(data.month)
    this.yearSelect.select(data.year)
  }

  fillAddressInfo(data) {
    this.firstName.type(data.firstName)
    this.lastName.type(data.lastName)
    this.address.type(data.address)
    this.state.type(data.state)
    this.city.type(data.city)
    this.zipcode.type(data.zipcode)
    this.mobileNumber.type(data.mobileNumber)
  }

  submitAccount() {
    this.createAccountButton.click()
  }

  // Assertions
  verifyAccountCreated() {
    this.accountCreated.should('be.visible')
  }
}

export default new SignupPage()
