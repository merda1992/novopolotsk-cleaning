import React from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import { useTranslation } from 'react-i18next';
import Iconography from './Iconography/Iconography';

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

const IconBox = styled(Box)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',

  ' svg': {
    fontSize: '16p',
    height: '30px',
    width: '30px',
    color: theme.palette.primary.main,
  },
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

const TelNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'Marker Felt, fantasy',
  color: theme.palette.primary.main,
  fontSize: '15px',
}));

const IconsSoc = [InstagramIcon, TelegramIcon];

const MainHeader = () => {
  const handleClickByLink = (url: string) => window.open(url);
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

        <Box display="flex">
          <Box alignItems="center" display="flex" marginRight="10px">
            <TelNumber>{t('number')}</TelNumber>
          </Box>
          <Box borderLeft="solid #80694d" display="flex">
            <IconBox>
              <Iconography iconName="viber" />
            </IconBox>
            {IconsSoc.map((Icon, idx) => (
              <IconBox key={idx} onClick={() => handleClickByLink('https://vk.com')}>
                <Icon fontSize="large" />
              </IconBox>
            ))}
          </Box>
        </Box>
      </Box>
    </HeaderBox>
  );
};

export default MainHeader;
