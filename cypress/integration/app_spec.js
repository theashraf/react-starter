describe('Landing Page', () => {
  it('should has a react starter header', () => {
    cy.visit('http://localhost:3000')
    cy.findByText(/react tdd starter/i).should('exist')
  })
})
