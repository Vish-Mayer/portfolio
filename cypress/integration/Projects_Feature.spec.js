import { italic } from "ansi-colors"

describe('Projects', () => {
  
  it('displays a list of project cards', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-content').contains('Projects')
  })
})