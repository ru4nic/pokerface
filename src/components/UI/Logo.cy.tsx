import Logo from './Logo';

describe('<Logo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Logo section="appBar" />);
  });
});
