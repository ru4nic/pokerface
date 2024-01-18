import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`;

const PageLoad = () => {
  return (
    <Wrapper>
      <CircularProgress disableShrink color="error" />
    </Wrapper>
  );
};

export default PageLoad;
