import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  maxHeight: '42px',
  height: '100%',
  justifyContent: 'space-between',
}));

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterBox>
      <Box pl="20px">
        <Typography fontFamily="fantasy" fontSize="15px" fontWeight="400" color="primary.main">
          {t('footer.copyright')}
        </Typography>
      </Box>
      <Box pr="20px">
        <Link
          href="mailto:merda@tut.by"
          sx={{ textDecoration: 'none', fontFamily: 'fantasy', fontSize: '15px', fontWeight: 400 }}
          color="primary.main"
        >
          {t('footer.contactUs')}
        </Link>
      </Box>
    </FooterBox>
  );
};

export default MainFooter;
