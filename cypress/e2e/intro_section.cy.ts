describe('intro_section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 870);
  });

  it('should be a logo with h1 text and desc', () => {
    cy.getByData('logo_smile').should('exist');
    cy.get('h1').should('have.text', 'PokerFace');
    cy.getByData('logo_desc').should('have.text', 'Кавер группа');
  });
  it('should exist h2 and contain text', () => {
    cy.getByData('header_intro').should(
      'have.text',
      'Музыкальный коллектив для тех, кому нужен яркий праздник'
    );
  });
  it('should have a button and scroll to about_section after click', () => {
    cy.getByData('about_title').should('not.be.visible');

    cy.get('button').contains('Подробнее').click();
    cy.getByData('about_title').should('be.visible');
  });
});
