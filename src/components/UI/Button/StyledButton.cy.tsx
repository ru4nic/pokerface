import { StyledButton } from './StyledButton';
import { ImFilePdf } from 'react-icons/im';

describe('<StyledButton />', () => {
  it('renders', () => {
    cy.mount(
      <StyledButton
        endIcon={<ImFilePdf />}
        fullWidth={true}
        sx={{ height: '2rem' }}
        href="https://pokerfaceband.ru/Pokerface_songs.pdf"
      >
        Репертуар
      </StyledButton>
    );
  });
});
