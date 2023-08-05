import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Cookies from 'js-cookie';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import Logo from './Logo';
import Popup from './Popup';
import Category from './Category';
import { useTranslation } from 'react-i18next';

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  maxHeight: '42px',
  height: '100%',
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
}));

const IconBox = styled(Box)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',

  ' svg': {
    height: '30px',
    width: '30px',
    color: theme.palette.primary.main,
  },
}));

const TypographyBox = styled(Box)(() => ({
  marginLeft: '20px',
  cursor: 'pointer',
}));

const IconsSoc = [FacebookIcon, YouTubeIcon, TwitterIcon, InstagramIcon, TelegramIcon];

const MainHeader = () => {
  const [popupIsOpen, serPopupIsOpen] = useState<boolean>(false);
  const handleClickByLink = (url: string) => window.open(url);
  const [token, setToken] = useState<string | undefined>(Cookies.get('_token'));
  const { t } = useTranslation();

  const handleClick = () => {
    if (token) {
      Cookies.remove('_token');
      setToken(undefined);
    } else {
      serPopupIsOpen(true);
    }
  };

  return (
    <HeaderBox>
      <Box display="flex" alignItems="center">
        <Logo fontSize="18px" imgHeight="16px" fontFamily="fantasy" marginRight="5px" otherColorText />
        {IconsSoc.map((Icon, idx) => (
          <IconBox key={idx} onClick={() => handleClickByLink('https://vk.com')}>
            <Icon fontSize="large" />
          </IconBox>
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        {['Search', 'Rating', 'Category'].map((item, idx) =>
          item !== 'Category' ? (
            <TypographyBox key={idx}>
              <Typography fontFamily="fantasy" whiteSpace="nowrap" fontWeight="600" color="primary.main">
                {item}
              </Typography>
            </TypographyBox>
          ) : (
            <Category key={idx} />
          ),
        )}
        {
          <Button sx={{ marginLeft: '20px' }} onClick={handleClick}>
            <Typography fontFamily="fantasy" whiteSpace="nowrap" fontWeight="600" color="primary.main">
              {t(`signupButon.${token ? 'logout' : 'signup'}`)}
            </Typography>
          </Button>
        }
      </Box>
      {popupIsOpen && <Popup updateToken={setToken} open={popupIsOpen} onClose={() => serPopupIsOpen(false)} />}
    </HeaderBox>
  );
};

export default MainHeader;
