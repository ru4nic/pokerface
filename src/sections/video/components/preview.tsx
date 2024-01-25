import { IconPlay, Desc, StyledIframe, Video } from './preview.styled';

type VideoPreviewProps = {
  link: string;
  isActive: boolean;
  handleVideoClick: () => void;
  src: string;
  desc?: string;
};
const Preview = ({
  link,
  isActive,
  handleVideoClick,
  src,
  desc,
}: VideoPreviewProps) => {
  return (
    <Video onClick={handleVideoClick} $src={src} className="video_item">
      {!isActive && (
        <>
          <IconPlay />
          <Desc $desc={desc}>{desc}</Desc>
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
    </Video>
  );
};

export default Preview;
