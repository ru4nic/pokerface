import styled from 'styled-components';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import theme from '../../theme';

export const Wrapper = styled.div<{ $footer?: boolean }>`
  align-self: center;
  line-height: 1;
  margin: ${(props) => (props.$footer ? '' : '0 2rem')};
`;
export const StyledVk = styled(FaVk)`
  //Меняем цвет иконки
  color: ${theme.colors.dark};
`;
export const StyledTg = styled(FaTelegramPlane)`
  //Меняем цвет иконки
  color: ${theme.colors.dark};
`;
export const StyledWu = styled(RiWhatsappFill)`
  //Меняем цвет иконки
  color: ${theme.colors.dark};
`;
export const StyledYt = styled(RiYoutubeFill)`
  //Меняем цвет иконки
  color: ${theme.colors.dark};
`;
export const StyledIg = styled(AiFillInstagram)`
  //Меняем цвет иконки
  color: ${theme.colors.dark};
`;
export const Link = styled.a<{ $footer?: boolean; $appBar?: boolean }>`
  min-width: ${(props) =>
    props.$footer ? '2.2rem' : props.$appBar ? '2rem' : '1.5rem'};
  min-height: ${(props) =>
    props.$footer ? '2.2rem' : props.$appBar ? '2rem' : '1.5rem'};
  display: inline-block;
  background-color: ${theme.colors.secondaryText};
  border-radius: 50%;
  position: relative;
  padding: 0;
  margin-right: 0.3rem;
  opacity: 0.4;
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  &:nth-child(5) {
    margin-right: 0;
  }
  &:hover {
    opacity: 1;
    ${StyledVk} {
      color: #5181bb;
    }

    ${StyledYt} {
      color: red;
    }

    ${StyledTg} {
      color: rgb(90, 132, 216);
    }

    ${StyledIg} {
      color: rgb(224, 107, 228);
    }

    ${StyledWu} {
      color: rgb(22, 204, 22);
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: ${(props) =>
      props.$footer ? '1.6rem' : props.$appBar ? '1.55rem' : '1rem'};
    line-height: 1rem;
    transform: translate(-50%, -50%);
  }
`;
