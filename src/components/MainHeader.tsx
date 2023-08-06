import React from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';

import SocialMedia from './SocialMedia';

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  maxHeight: '44px',
  height: '100%',
  display: 'flex',
  padding: '10px 15px',
  justifyContent: 'space-between',
  borderBottom: 'solid #d4d2d2',
  position: 'fixed',
  width: '-webkit-fill-available',
}));

const TypographyBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  maxWidth: '220px',

  '& p': {
    fontWeight: 600,
    color: theme.palette.primary.main,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const CompanyNameBox = styled(Box)(({ theme }) => ({
  maxWidth: '220px',

  '& p': {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

const MainHeader = () => {
  const { t } = useTranslation();

  return (
    <HeaderBox>
      <Box width="100%" justifyContent="space-between" display="flex" alignItems="center">
        <CompanyNameBox>
          <Typography>{t('companyName')}</Typography>
        </CompanyNameBox>
        <TypographyBox>
          <Typography>{t('servicesAndPrices')}</Typography>
        </TypographyBox>

        <SocialMedia />
      </Box>
    </HeaderBox>
  );
};

export default MainHeader;
