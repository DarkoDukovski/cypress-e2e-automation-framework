import SignupPage from '../pages/SignupPage'

describe('Signup functionality - Automation Exercise', () => {

  it('User can sign up with valid data', () => {
    cy.fixture('signupData').then((data) => {
      SignupPage.visit()

      // Fill signup form with dynamic email
      SignupPage.fillSignupForm(data.name, `darko_test_${Date.now()}@mail.com`)

      // Fill account & address information
      SignupPage.fillAccountInfo(data)
      SignupPage.fillAddressInfo(data)

      // Submit & verify
      SignupPage.submitAccount()
      SignupPage.verifyAccountCreated()
    })
  })

})
