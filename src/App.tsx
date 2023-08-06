import React from 'react';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainBody from './components/MainBody';
import AboutServicesBlock from './components/AboutOtamateBlock/AboutServicesBlock';

import Logo from '../src/components/img/cleaningBgc.svg';

import { Box, experimentalStyled as styled } from '@mui/material';

const BodyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: `url("${Logo}") no-repeat bottom center`,
  backgroundSize: 'cover',
  opacity: '0.8',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'scroll',
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
