import Tooltip from '@mui/material/Tooltip';
import { Wrapper, Link } from './socials.styled';
import links from './socials.data';

type SocialsProps = {
  section?: 'appBar' | 'footer';
};
function Socials({ section }: SocialsProps) {
  const socialsProps = { [`$${section}`]: true };
  return (
    <Wrapper {...socialsProps}>
      {links.map((link) => {
        const { id, href, title, icon: Icon } = link;

        return (
          <Tooltip title={title} key={id}>
            <Link
              {...socialsProps}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon {...socialsProps} className="icon" />
            </Link>
          </Tooltip>
        );
      })}
    </Wrapper>
  );
}
export default Socials;
