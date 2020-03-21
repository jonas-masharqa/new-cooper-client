describe('User authenticate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('successfully with valid credentials', () => {
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('email'.type('user@mail.com'));
      cy.get('#password').type('password');
      cy.get('button')
        .contains('Submit')
        .click();
    });
    cy.get('#message').should('contain', 'Hi user@mail.com');
  });

  it('unsuccessfully wiht invalid credentials', () => {
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com');
      cy.get('#password').type('wrongpassword');
      cy.get('button')
        .contains('Submit')
        .click();
    });
    cy.get('#message').should(
      'contain',
      'Invalid login credentials. Please try again.'
    );
  });
});
