describe('My First Visit Page', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Visits the Kitchen Sink Find Type Then Click', () => {
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('sample@email.com')
    cy.get('.action-email').should('have.value','sample@email.com')
  });
});
