describe('about_section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 870);
  });

  it('should be a link and after click scroll to the reperoire_section', () => {
    // cy.get('#for_clients').should('not.be.');
    cy.get('a').contains('репертуар').click();
    cy.get('#for_clients').contains('Заказчикам').should('be.visible');
  });
});
