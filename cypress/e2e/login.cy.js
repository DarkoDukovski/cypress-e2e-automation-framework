import LoginPage from '../pages/LoginPage'

describe('Login functionality', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Successful login with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      LoginPage.login(data.validUser.username, data.validUser.password)
      LoginPage.verifySuccessLogin()
    })
  })

  it('Unsuccessful login with invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      LoginPage.login(data.invalidUser.username, data.invalidUser.password)
      LoginPage.verifyFailedLogin()
    })
  })

})
