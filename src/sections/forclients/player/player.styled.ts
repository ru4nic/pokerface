import styled from 'styled-components';
import theme from '../../../theme';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 103;
`;

export const Box = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  .rhap_container {
    background-color: #ffffffff;
    backdrop-filter: blur(20px);
    border-radius: 7px 0 0 0;
  }
  .rhap_main-controls {
    flex: 1 1 auto;
  }
  .rhap_additional-controls {
    flex: 0 0 auto;
    @media (max-width: 900px) {
      flex: 1 0 auto;
    }
  }
  .rhap_volume-controls {
    justify-content: flex-start;
  }
  .rhap_progress-filled {
    background-color: ${theme.colors.primary};
  }
  .rhap_progress-bar-show-download {
    background-color: ${theme.colors.primary}40;
  }
  .rhap_volume-filled {
    background: ${theme.colors.primary};
  }
  .rhap_volume-bar {
    background-color: ${theme.colors.primary}40;
  }
  .rhap_volume-indicator {
    background: #fff;
    opacity: 1;
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 12px 0px;
  }
  .rhap_time {
    color: #777;
    font-family: ${theme.fonts.IbmLight};
  }
  .rhap_button-clear {
    color: ${theme.colors.primary};
  }

  .rhap_progress-indicator {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const CloseBtn = styled.div`
  align-self: flex-end;
  background-color: #ffffffff;
  backdrop-filter: blur(20px);
  border-radius: 6px 6px 0 0;
  border: 1px solid #00000012;
`;
