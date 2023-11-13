describe('video_section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 870);
  });
  it('video_section should have 8 video elements', () => {
    cy.get('#video').should('exist');
    cy.get('.video_item').should('have.length', 8);
  });
  it.only('after click on fourth video element should have iframe', () => {
    cy.get('.video_item').eq(3).should('not.have.descendants', 'iframe');
    cy.get('.video_item').eq(3).click();
    cy.get('.video_item').eq(3).should('have.descendants', 'iframe');
  });
});
