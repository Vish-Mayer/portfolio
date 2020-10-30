describe('Contact Form', () => {

  it('user must fill in name', () => {
    cy.visit('http://localhost:3000/#contact')
    cy.get('#send').click({ force: true})
    cy.contains('Please enter a name').should('be.visible') 
  })

  it('user must fill in a valid email', () => {
    cy.visit('http://localhost:3000/#contact')
    cy.get('#inputName').type('a', { force: true})
    cy.get('#send').click({ force: true})
    cy.get('#inputEmail').type('testmail.com', {force: true})
    cy.contains('Please enter a valid email').should('be.visible') 
  })

  it('user must fill in a message', () => {
    cy.visit('http://localhost:3000/#contact')
    cy.get('#inputName').type('Michael Scofield', {force: true})
    cy.get('#inputEmail').type('test@testingcypress.com', {force: true})
    cy.get('#send').click({ force: true})
    cy.contains('Please enter a message').should('be.visible') 
  })

  it('sends an email and resets the input fields..', () => {
    cy.visit('http://localhost:3000/#contact')
    cy.get('#inputName').type('Michael Scofield', {force: true})
    cy.get('#inputEmail').type('test@testingcypress.com', {force: true})
    cy.get('#FormTextarea').type('This is Mike, Im alive and I need a favour.', {force: true})
    cy.get('#send').click({ force: true})
    cy.contains('Thanks for your message').should('be.visible') 
    cy.get('#inputName').should('have.value', '');
    cy.get('#inputEmail').should('have.value', '');
    cy.get('#FormTextarea').should('have.value', '');
  })
})