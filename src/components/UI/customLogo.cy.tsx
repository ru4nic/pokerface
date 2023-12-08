import CustomLogo from './customLogo';

describe('<CustomLogo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomLogo />);
    cy.getByData('logo_smile').should('exist');
    cy.get('h1').should('have.text', 'PokerFace');
    cy.getByData('logo_desc').should('have.text', 'Кавер группа');
  });
});
