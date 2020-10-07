describe('Contact Form', () => {
  
  const redirectFromHome = (to) => {
    cy.visit('http://localhost:3000/')
    cy.get(to)
    .click()
  }

  it('fills out the name section', () => {
    redirectFromHome('#contact')
    cy.get('#inputName').type('Michael Scofield')
    cy.get('#inputName').should('have.value', 'Michael Scofield');
  })

  it('fills out the email section', () => {
    redirectFromHome('#contact')
    cy.get('#inputEmail').type('test@testingcypress.com')
    cy.get('#inputEmail').should('have.value', 'test@testingcypress.com');
  })

  it('fills out the message section', () => {
    redirectFromHome('#contact')
    cy.get('#FormTextarea').type('This is a test message, can you help?')
    cy.get('#FormTextarea').should('have.value', 'This is a test message, can you help?');
  })

  it('sends an email and resets the input fields..', () => {
    redirectFromHome('#contact')
    cy.get('#inputName').type('Michael Scofield')
    cy.get('#inputEmail').type('test@testingcypress.com')
    cy.get('#FormTextarea').type('This is Mike, Im alive and I need a favour.')
    cy.get('#send').click() 
    cy.get('#inputName').should('have.value', '');
    cy.get('#inputEmail').should('have.value', '');
    cy.get('#FormTextarea').should('have.value', '');
  })
})