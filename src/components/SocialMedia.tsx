import React from 'react';

import { Box, Typography, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import { useTranslation } from 'react-i18next';
import Iconography from './Iconography/Iconography';

interface SocialMediaProps extends BoxProps {
  borderLine?: 'vertical' | 'horizaontal';
  borderPadding?: string;
}

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

const TelNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'Marker Felt, fantasy',
  color: theme.palette.primary.main,
  fontSize: '15px',
}));

const IconsSoc = [InstagramIcon, TelegramIcon];

const SocialMedia = ({ borderLine = 'vertical', borderPadding, ...props }: SocialMediaProps) => {
  const handleClickByLink = (url: string) => window.open(url);
  const { t } = useTranslation();

  return (
    <Box {...props} display="flex">
      <Box alignItems="center" display="flex" marginRight="10px">
        <TelNumber>{t('number')}</TelNumber>
      </Box>
      <Box
        paddingTop={borderPadding}
        borderLeft={borderLine === 'vertical' ? 'solid #80694d' : undefined}
        borderTop={borderLine === 'horizaontal' ? 'solid #80694d' : undefined}
        display="flex"
      >
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
  );
};

export default SocialMedia;
