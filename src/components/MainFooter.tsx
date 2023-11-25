import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';
import SocialMedia from './SocialMedia';

const ContactUsLink = styled(Link)(() => ({
  textDecoration: 'none',
  fontFamily: ['Marker Felt, fantasy'].join(','),
  fontSize: '18px',
  lineHeight: '21px',
  fontWeight: 600,
}));

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  height: '110px',
  justifyContent: 'space-between',
  borderTop: 'solid #d4d2d2',
}));

const MailOrUnp = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '14px',
  lineHeight: '18px',
}));

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterBox>
      <Box pl="20px">
        <SocialMedia flexDirection="column" borderLine="horizaontal" borderPadding="10px" />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" pr="20px">
        <ContactUsLink href="mailto:markevich161992@mail.ru" color="primary.main">
          {t('footer.contactUs')}
        </ContactUsLink>
        <MailOrUnp>{t('footer.mail')}</MailOrUnp>
        <MailOrUnp mt="10px" mb="5px">
          {t('unp')}
        </MailOrUnp>
      </Box>
    </FooterBox>
  );
};

export default MainFooter;
