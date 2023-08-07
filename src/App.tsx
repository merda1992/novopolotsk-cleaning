import React from 'react';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainBody from './components/MainBody';
import AboutServicesBlock from './components/AboutServicesBlock/AboutServicesBlock';

import { Box, experimentalStyled as styled } from '@mui/material';

const BodyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
}));

function App() {
  return (
    <BodyBox>
      <MainHeader />
      <MainBody />
      <AboutServicesBlock />
      <MainFooter />
    </BodyBox>
  );
}

export default App;
