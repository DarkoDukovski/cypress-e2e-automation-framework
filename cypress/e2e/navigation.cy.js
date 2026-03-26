describe('Navigation & UI checks', () => {

  it('User can navigate to Checkboxes page and interact', () => {
    cy.visit('https://the-internet.herokuapp.com')

    cy.contains('Checkboxes').click()
    cy.url().should('include', '/checkboxes')

    cy.get('input[type="checkbox"]').first().check().should('be.checked')
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
  })

  it('User can open Dropdown page and select option', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown')

    cy.get('#dropdown').select('Option 1')
    cy.get('#dropdown').should('have.value', '1')

    cy.get('#dropdown').select('Option 2')
    cy.get('#dropdown').should('have.value', '2')
  })

})
