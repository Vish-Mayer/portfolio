import { italic } from "ansi-colors"

describe('Projects', () => {
  
  const redirectFromHome = (to) => {
    cy.visit('http://localhost:3000/')
    cy.get(to)
    .click()
  }

  it('displays a list of project cards', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-content').contains('Projects')
  })
})