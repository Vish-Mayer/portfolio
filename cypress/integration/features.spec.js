describe('Features', () => {

  it('it redirects the user to the projects page', () => {
   
    cy.visit('http://localhost:3000')
    cy.get('.projects')
    .click()
    cy.url().should('eq', 'http://localhost:3000/projects/#project-content')
  })
})