describe('Cooper Client calculates successfully', () => {
  it('calculates cooper performance', () => {
    cy.visit('/')
    cy.get('select#gender').select('female')
    cy.get('input#gender').type('23')
    cy.get('p#cooper-message').should('contain', '23 y/o female running 1000 meters.')
  });
  cy.get('p#cooper-result').should('contain', 'result: Poor')
})
