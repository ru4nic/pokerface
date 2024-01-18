import styled from 'styled-components';

import icon from '../../../assets/images/icons/icons8-youtube-play.svg';
import { darkGrey } from '../../base_styles/Vars';

const IconPlay = styled.div`
  width: 25%;
  height: 25%;
  background: url(${icon}) no-repeat center/contain;
  position: absolute;
  left: 50%;
  opacity: 0.65;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
`;
const ItemDesc = styled.div<{ $desc?: string }>`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.882);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'IbmLight';
  width: 100%;
  font-weight: normal;
  height: fit-content;
  font-size: 1rem;
  padding: 0.5rem;
  /* color: ${darkGrey}; */
  display: ${(props) => (props.$desc ? '' : 'none')};
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  @media (max-height: 820px) and (orientation: landscape) {
    font-size: 0.9rem;
  }
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const VideoItem = styled.div<{ $src: string }>`
  background-image: ${(props) => `url(${props.$src})`};
  flex-basis: 32%;
  flex-grow: 1;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.75;
  border-radius: 0.3rem;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s ease;
  overflow: hidden;
  aspect-ratio: 16/9;
  min-width: 0;
  &:hover {
    cursor: pointer;
    opacity: 1;

    ${IconPlay} {
      width: 35%;
      height: 35%;
      opacity: 1;
    }
    ${ItemDesc} {
      background-color: transparent;
      color: white;
    }
  }

  @media screen and (max-width: 900px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 450px) {
    flex-basis: 100%;
    &:nth-last-child(1) {
      flex-basis: inherit;

      flex-grow: 1;
    }
  }
  @media (max-height: 820px) and (orientation: landscape) {
    flex-basis: 30%;
  }
  @media (max-height: 450px) and (orientation: landscape) {
    flex-basis: 40%;
  }
`;

type VideoPreviewProps = {
  link: string;
  isActive: boolean;
  handleVideoClick: () => void;
  src: string;
  desc?: string;
};
const VideoPreview = ({
  link,
  isActive,
  handleVideoClick,
  src,
  desc,
}: VideoPreviewProps) => {
  return (
    <VideoItem onClick={handleVideoClick} $src={src} className="video_item">
      {!isActive && (
        <>
          <IconPlay />
          <ItemDesc $desc={desc}>{desc}</ItemDesc>
        </>
      )}

      {isActive && (
        <StyledIframe
          title="video player"
          src={link}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </VideoItem>
  );
};

export default VideoPreview;
