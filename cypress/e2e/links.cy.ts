describe('checking for links on page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 870);
  });
  it('for_clients section checking links', () => {
    cy.get('#for_clients')
      .contains('Репертуар')
      .should('have.attr', 'href', '/Pokerface_songs.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
    cy.get('#for_clients')
      .contains('Бытовой райдер')
      .should('have.attr', 'href', '/Pokerface_Bytovoi_Rider.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
    cy.get('#for_clients')
      .contains('Технический райдер')
      .should('have.attr', 'href', '/Pokerface_Tech_Rider.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
  });
  it('contacts section checking links', () => {
    cy.get('#contacts')
      .contains('+7 (926) 461-02-36')
      .should('have.attr', 'href', 'tel:+79264610236');
  });
  it('footer section checking links', () => {
    cy.get('footer')
      .contains('Репертуар')
      .should('have.attr', 'href', '/Pokerface_songs.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('equal', 200);
      });
    cy.get('footer')
      .contains('Бытовой райдер')
      .should('have.attr', 'href', '/Pokerface_Bytovoi_Rider.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('equal', 200);
      });
    cy.get('footer')
      .contains('Технический райдер')
      .should('have.attr', 'href', '/Pokerface_Tech_Rider.pdf')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('equal', 200);
      });

    cy.get('footer')
      .contains('Recastman studio')
      .should('have.attr', 'href', 'https://vk.com/recastman_studio')
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('equal', 200);
      });
  });

  it.only('should be correct links of partners', () => {
    cy.get('footer')
      .contains('Recastman studio')
      .should('have.attr', 'href', 'https://vk.com/recastman_studio')
      .click();
    cy.visit('http://localhost:3000');
    cy.get('footer')
      .contains('Svetlana Samoletova')
      .should('have.attr', 'href', 'https://ru4nic.github.io/s_samoletova/')
      .click();
  });
});
