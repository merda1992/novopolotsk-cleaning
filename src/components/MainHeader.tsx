import React, { useCallback, useEffect, useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';
import { useWindowWidth } from '../hooks/useWindowWidth';

import SocialMedia from './SocialMedia';
import { DeviceSizes } from './AboutServicesBlock/types';

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
  zIndex: 1,
}));

const TypographyBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  maxWidth: '220px',
  margin: '0 20px',

  [theme.breakpoints.down('tabletS')]: {
    margin: 0,
  },

  '& p': {
    fontWeight: 600,
    color: theme.palette.primary.main,

    [theme.breakpoints.down('mobile')]: {
      fontSize: '14px',
      lineHeight: '14px',
    },

    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.text.primary,
    },
  },
}));

const CompanyNameBox = styled(Box)(({ theme }) => ({
  maxWidth: '220px',
  cursor: 'pointer',

  '& p': {
    fontWeight: 600,
    color: theme.palette.primary.main,

    [theme.breakpoints.down('mobile')]: {
      fontSize: '14px',
      lineHeight: '14px',
    },
  },
}));

const MainHeader = () => {
  const { t } = useTranslation();
  const { windowWidth } = useWindowWidth();
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState<boolean>(false);

  const handleSectionChange = () => {
    const el = document.getElementById('about');

    if (el) {
      const yOffset = el.offsetTop;

      window.scrollTo({ top: yOffset - 64, behavior: 'smooth' });

      window.onscroll = () => {
        if (yOffset === window.scrollY) {
          window.onscroll = null;
        }
      };
    }
  };

  const startWindow = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const checkActiveLink = useCallback(() => {
    const el = document.getElementById('about');

    if (el?.offsetTop && window.scrollY >= el?.offsetTop - 64 && !activeLink) {
      setActiveLink(true);
    } else if (activeLink && el?.offsetTop && window.scrollY < el?.offsetTop - 64) {
      setActiveLink(false);
    }
  }, [activeLink]);

  useEffect(() => {
    document.addEventListener('scroll', checkActiveLink);

    return () => document.removeEventListener('scroll', checkActiveLink);
  }, [checkActiveLink]);

  return (
    <HeaderBox>
      <Box width="100%" justifyContent="space-between" display="flex" alignItems="center">
        <CompanyNameBox onClick={startWindow}>
          <Typography>{t('companyName')}</Typography>
        </CompanyNameBox>
        <TypographyBox onClick={handleSectionChange}>
          <Typography
            sx={{
              textDecoration: activeLink ? 'underline' : 'none',
              color: activeLink ? `${theme.palette.text.primary} !important` : 'none',
            }}
          >
            {t('servicesAndPrices')}
          </Typography>
        </TypographyBox>
        {windowWidth > DeviceSizes.mobileVerticalOrientitaion && <SocialMedia />}
      </Box>
    </HeaderBox>
  );
};

export default MainHeader;
