import FormPage from '../pages/FormPage'

describe('Practice Form - DemoQA', () => {

  it('User can submit the practice form', () => {
    cy.fixture('formData').then((data) => {
      FormPage.visit()

      // Fill personal information
      FormPage.fillPersonalInfo(data)

      // Select date of birth
      FormPage.selectDateOfBirth(data.dateOfBirth.day, data.dateOfBirth.month, data.dateOfBirth.year)

      // Fill academic info
      FormPage.fillAcademicInfo(data.subject)

      // Fill address
      FormPage.fillAddress(data.address)

      // Submit & verify
      FormPage.submitForm()
      FormPage.verifyFormSubmitted()
    })
  })

})
