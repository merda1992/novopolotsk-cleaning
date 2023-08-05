import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Logo from './Logo';

const BodyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  display: 'flex',
}));

const ContentBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  ' img': {
    width: '100%',
    height: 'max-content',
  },
}));

const MainBody = () => {
  return (
    <BodyBox>
      <ContentBox />
      <Logo openSiteButton />
      <ContentBox />
    </BodyBox>
  );
};

export default MainBody;
