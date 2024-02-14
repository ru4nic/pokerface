import styled from 'styled-components';

import icon from '../../../assets/images/icons/icons8-youtube-play.svg';

export const IconPlay = styled.button`
  width: 25%;
  height: 25%;
  background: url(${icon}) no-repeat center/contain;
  position: absolute;
  left: 50%;
  opacity: 0.8;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  border: none;
  &:hover {
    width: 28%;
    height: 28%;
    opacity: 1;
    cursor: pointer;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  aspect-ratio: 16/9;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-width: 1000px) {
    width: 80%;
  }
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
