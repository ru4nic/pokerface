import { useState } from "react";
import styled from "styled-components";

import VideoPreview from "./VideoPreview";
import { Section, Container, Title } from "../../base_styles/styles";

import { videos } from "./data";
import animation from "../../settings/animation";
import links from "../../data/links";

const VideoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 6rem;
  column-gap: 2rem;
  max-width: 100%;
  height: 100%;
  /* margin-bottom: 2rem; */

  @media screen and (max-width: 900px) {
    row-gap: 5rem;
    column-gap: 2rem;
  }
  @media screen and (max-width: 450px) {
    row-gap: 4rem;
    column-gap: unset;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    align-items: center;
  }
`;

function Video() {
  const [videoIndex, setVideoIndex] = useState<null | number>(null);

  const handleVideoClick = (index: number) => {
    setVideoIndex(index);
  };
  return (
    <Section id={links.sections.video}>
      <Container $default>
        <Title {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          Видео
        </Title>
        <VideoWrapper>
          {videos.map((video, index) => {
            const { src, link, id, desc } = video;
            return (
              <VideoPreview
                key={id}
                link={link}
                src={src}
                isActive={videoIndex === index}
                desc={desc}
                handleVideoClick={() => handleVideoClick(index)}
              />
            );
          })}
        </VideoWrapper>
      </Container>
    </Section>
  );
}

export default Video;
