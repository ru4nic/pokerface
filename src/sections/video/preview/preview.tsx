import { ReactNode, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

import { CloseBtn, IconPlay, StyledIframe } from './preview.styled';

import { setShowVideoIndex } from '../../../slices/videoSlice';

import { RootState } from '../../../store/store';

type VideoPreviewProps = {
  link: string;
  index: number;
  children: ReactNode;
};

const Preview = ({ link, index, children }: VideoPreviewProps) => {
  const dispatch = useDispatch();
  const showVideoIndex = useSelector(
    (state: RootState) => state.video.showVideoIndex
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleVideoClick = (index: number) => {
    dispatch(setShowVideoIndex(index));
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <IconPlay onClick={() => handleVideoClick(index)} />
      {children}
      {index === showVideoIndex && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <>
            <CloseBtn>
              <IconButton color="white" onClick={handleCloseModal}>
                <CloseOutlined fontSize="large" />
              </IconButton>
            </CloseBtn>
            <StyledIframe
              title="video player"
              src={link}
              style={{ border: 'none' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </>
        </Modal>
      )}
    </>
  );
};

export default memo(Preview);
