describe('API Testing', () => {

  it('GET - Fetch list of users', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(10)
      expect(response.body[0]).to.have.property('name')
      expect(response.body[0]).to.have.property('email')
    })
  })

  it('POST - Create a new user', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/users', {
      name: 'Darko Dukovski',
      username: 'darko',
      email: 'darko@test.com'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'Darko Dukovski')
      expect(response.body).to.have.property('email', 'darko@test.com')
      expect(response.body).to.have.property('id')
    })
  })

  it('PUT - Update an existing user', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/users/1', {
      name: 'Updated Name',
      email: 'updated@test.com'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'Updated Name')
    })
  })

  it('DELETE - Remove a user', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

})
