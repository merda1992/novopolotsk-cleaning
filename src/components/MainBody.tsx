import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';

const MainTypography = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  textAlign: 'center',
  fontWeight: 400,
  color: theme.palette.common.white,
  lineHeight: '50px',
  position: 'relative',

  '&::after': {
    display: 'block',
    width: '180px',
    height: '3px',
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    content: '""',
  },
}));

const ListTypography = styled('li')(({ theme }) => ({
  fontFamily: ['Marker Felt, fantasy'].join(','),
  fontSize: '30px',
  fontWeight: 400,
  color: theme.palette.common.white,
  lineHeight: '32px',
  position: 'relative',
}));

const ListsBox = styled(Box)(({ theme }) => ({
  width: 'max-content',
  margin: 'auto',
  marginTop: '50px',
  padding: '10px',
  borderRadius: '15px',
  backgroundColor: theme.palette.secondary.main,
  paddingBottom: '1px',
}));

const MainBody = () => {
  const { t } = useTranslation();

  const arrayAdvantages: string[] = useMemo(
    () => [
      t('advantages.qualifiedEmployees'),
      t('advantages.fastAndHighQualityCleaning'),
      t('advantages.serviceGuarantee'),
      t('advantages.acceptablePrices'),
      t('advantages.modernEquipment'),
    ],
    [t],
  );

  return (
    <Box marginTop="130px">
      <Box display="flex" justifyContent="center" sx={{ backdropFilter: 'blur(1px)' }}>
        <MainTypography>{t('companyName')}</MainTypography>
      </Box>

      <ListsBox>
        <Typography textAlign="center" fontSize="28px" lineHeight="28px" color="white">
          {t('ourAdvantages')}
        </Typography>
        <ul style={{ paddingLeft: '25px' }}>
          {arrayAdvantages.map((advantage, idx) => (
            <ListTypography key={idx}>{advantage}</ListTypography>
          ))}
        </ul>
      </ListsBox>
    </Box>
  );
};

export default MainBody;
