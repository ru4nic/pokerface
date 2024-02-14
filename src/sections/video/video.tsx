import { useState } from 'react';

import { Box } from './video.styled';
import Preview from './preview/preview';
import { Section, Container, Title } from '../../layout/main';

import { videos } from './video.data';
import animation from '../../components/animation/animation';
import links from '../../data/links';

function Video() {
  const [videoIndex, setVideoIndex] = useState<null | number>(null);

  const handleVideoClick = (index: number) => {
    setVideoIndex(index);
  };
  return (
    <Section id={links.sections.video}>
      <Container $default>
        <Title {...animation}>Видео</Title>
        <Box>
          {/* {videos.map((video, index) => {
            const { src, link, id, desc } = video;
            return (
              <Preview
                key={id}
                link={link}
                src={src}
                isActive={videoIndex === index}
                desc={desc}
                handleVideoClick={() => handleVideoClick(index)}
              />
            );
          })} */}
        </Box>
      </Container>
    </Section>
  );
}

export default Video;
