import { Container } from '../../layout/main';
import BottomMenu from './bottom/bottommenu';
import { SectionFooter } from './footer.styled';
import TopMenu from './topmenu';

function Footer() {
  return (
    <SectionFooter>
      <Container $footer>
        <TopMenu />
        <BottomMenu />
      </Container>
    </SectionFooter>
  );
}
export default Footer;
