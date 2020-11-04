
describe('Projects', () => {
  
  it('displays a list of project cards', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-content').contains('Projects')
  })
  
  it('clicking on a card opens up the full project details', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-card').first().click()
    cy.contains('Music Visualiser').should('be.visible') 
  })

  it('has a button that close the pop up window', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-card').first().click()
    cy.get('.close-modal').click() 
    cy.get('.close-modal').should('not.be.visible') 
  })

  it('slider displays 3 images', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-card').first().click()
    cy.get('#goRight').click()
    cy.get('#goRight').click()
    cy.get('.slider').should('have.length', 3)
  })
})