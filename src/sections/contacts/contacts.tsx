import { SectionContacts, Wrapper } from './contacts.styled';
import { Container } from '../../layout/main';
import Card from './card';

function Contacts() {
  return (
    <SectionContacts id="contacts">
      <Container>
        <Wrapper>
          <Card />
        </Wrapper>
      </Container>
    </SectionContacts>
  );
}
export default Contacts;
