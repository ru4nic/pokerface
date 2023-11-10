import Tooltip from "@mui/material/Tooltip";
import { Wrapper, Item } from "./styles";
import links from "./data";

type SocialsProps = {
  section?: string;
  inView?: boolean;
};
function Socials({ section }: SocialsProps) {
  const socialsProps = { [`$${section}`]: true };
  return (
    <Wrapper {...socialsProps}>
      {links.map((link) => {
        const { id, href, title, icon: Icon } = link;
        return (
          <Tooltip title={title} key={id}>
            <Item
              {...socialsProps}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon {...socialsProps} className="icon" />
            </Item>
          </Tooltip>
        );
      })}
    </Wrapper>
  );
}
export default Socials;
