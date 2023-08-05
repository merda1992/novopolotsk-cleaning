import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Drums from '../pictures/drums.png';
import Guitar from '../pictures/guitar.png';

interface LogoProps {
  imgHeight?: string;
  fontSize?: string;
  fontFamily?: string;
  marginRight?: string;
  openSiteButton?: boolean;
  otherColorText?: boolean;
}

const Logo = ({
  imgHeight = '50px',
  fontSize = '58px',
  fontFamily = 'Bradley Hand, cursive',
  marginRight,
  openSiteButton,
  otherColorText,
}: LogoProps) => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" mr={marginRight} width="100%">
      <Box display="flex" alignItems="center">
        <Typography
          fontFamily={fontFamily}
          color={otherColorText ? 'primary.main' : 'primary.light'}
          fontSize={fontSize}
          marginLeft="auto"
          whiteSpace="nowrap"
        >
          The C
        </Typography>

        <Box>
          <img height={imgHeight} src={Drums} alt="guitar" />
        </Box>
        <Box>
          <img height={imgHeight} src={Guitar} alt="guitar" />
        </Box>
        <Typography
          fontFamily={fontFamily}
          color={otherColorText ? 'primary.main' : 'primary.light'}
          fontSize={fontSize}
          marginRight="auto"
          alignItems="center"
        >
          eyStar
        </Typography>
      </Box>
      {openSiteButton && (
        <Box mt="30px">
          <Button sx={{ fontWeight: 600 }}>{t('welcomeButon.name')}</Button>
        </Box>
      )}
    </Box>
  );
};

export default Logo;
