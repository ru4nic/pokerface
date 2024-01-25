import Socials from '../../../components/socials';
import { Copyright, StyledLink, MadeBy, Underline } from '../link';
import { Wrapper } from './bottommenu.styled';

const BottomMenu = () => {
  return (
    <Wrapper>
      <Copyright>
        <MadeBy>
          Разработчик{' '}
          <StyledLink
            href="https://t.me/ru4nic"
            as="a"
            $copyright
            target="_blank"
            rel="noreferrer"
          >
            <Underline>Ru4nic</Underline>
          </StyledLink>
        </MadeBy>
        <MadeBy>
          Дизайнер{' '}
          <StyledLink
            href="https://vk.com/yuriykuldo"
            as="a"
            $copyright
            target="_blank"
            rel="noreferrer"
          >
            <Underline>Yuriy Kuldo</Underline>
          </StyledLink>
        </MadeBy>
      </Copyright>
      <Socials section="footer" />
    </Wrapper>
  );
};

export default BottomMenu;
