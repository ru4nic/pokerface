// import TiltParalax from './TiltParalax';
import Card from '../sections/contacts/card';
import { Wrapper } from '../sections/contacts/contacts.styled';
// import { Container } from '../layout';
describe('<TiltParalax />', () => {
  it('renders', () => {
    cy.mount(
      //   <Container>
      <Wrapper>
        <Card />
      </Wrapper>
      //   </Container>
    );
  });
});
