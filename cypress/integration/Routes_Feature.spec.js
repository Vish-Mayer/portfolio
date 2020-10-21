describe('Routes', () => {
  
  const redirectFromHome = (to) => {
    cy.visit('http://localhost:3000/')
    cy.get(to)
    .click()
  }

  const redirectFromProjects = (to) => {
    cy.visit('http://localhost:3000/projects/#project-list')
    cy.get(to)
    .click()
  }

  it('it directs the user to the about section', () => {
    redirectFromHome('.about')
    cy.url().should('eq', 'http://localhost:3000/#about')
  })

  it('it directs the user to the contact section', () => {
    redirectFromHome('.contact')
    cy.url().should('eq', 'http://localhost:3000/#contact')
  })

  it('it directs the user to the projects page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.projects')
    .click()
    cy.url().should('eq', 'http://localhost:3000/projects/#project-list')
  })

  it('it redirects the user from the projects page to the home page', () => {
    redirectFromProjects('.home')
    cy.url().should('eq', 'http://localhost:3000/#home')
  })

  it('it redirects the user from the projects page to the about section', () => {
    redirectFromProjects('.about')
    cy.url().should('eq', 'http://localhost:3000/#about')
  })

  it('it redirects the user from the projects page to the contact section', () => {
    redirectFromProjects('.contact')
    cy.url().should('eq', 'http://localhost:3000/#contact')
  })

  it('it directs the user to a 404 page if an unspecified path is entered', () => {
    cy.visit('http://localhost:3000/unspecified-path')
    cy.url().should('eq', 'http://localhost:3000/404-page-not-found')
  })
})