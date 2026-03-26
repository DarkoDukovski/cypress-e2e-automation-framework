class FormPage {
  // URL
  url = 'https://demoqa.com/automation-practice-form'

  // Selectors
  get firstName() { return cy.get('#firstName') }
  get lastName() { return cy.get('#lastName') }
  get email() { return cy.get('#userEmail') }
  get genderMale() { return cy.get('label[for="gender-radio-1"]') }
  get mobile() { return cy.get('#userNumber') }
  get dateOfBirth() { return cy.get('#dateOfBirthInput') }
  get monthSelect() { return cy.get('.react-datepicker__month-select') }
  get yearSelect() { return cy.get('.react-datepicker__year-select') }
  get subjectsInput() { return cy.get('#subjectsInput') }
  get hobbySports() { return cy.get('label[for="hobbies-checkbox-1"]') }
  get currentAddress() { return cy.get('#currentAddress') }
  get submitButton() { return cy.get('#submit') }
  get successModal() { return cy.contains('Thanks for submitting the form') }

  // Actions
  visit() {
    cy.visit(this.url)
  }

  fillPersonalInfo(data) {
    this.firstName.type(data.firstName)
    this.lastName.type(data.lastName)
    this.email.type(data.email)
    this.genderMale.click()
    this.mobile.type(data.mobile)
  }

  selectDateOfBirth(day, month, year) {
    this.dateOfBirth.click()
    this.monthSelect.select(month)
    this.yearSelect.select(year)
    cy.get(`.react-datepicker__day--${day}:not(.react-datepicker__day--outside-month)`).click()
  }

  fillAcademicInfo(subject) {
    this.subjectsInput.type(`${subject}{enter}`)
    this.hobbySports.click()
  }

  fillAddress(address) {
    this.currentAddress.type(address)
  }

  submitForm() {
    this.submitButton.scrollIntoView().click()
  }

  // Assertions
  verifyFormSubmitted() {
    this.successModal.should('be.visible')
  }
}

export default new FormPage()
