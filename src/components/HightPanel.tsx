import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

const HightPanel = () => {
  const openSite = (url: string) => {
    window.open(url);
  };

  const scrollDown1 = () => {
    window.scrollTo(0, 250);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '10px',
            transition: '0.5s',
            '&:hover': {
              bgcolor: '#dcdcdc',
            },
          }}
          onClick={scrollDown1}
        >
          <Typography fontSize="14px" color="#4a4a4a" fontWeight="600">
            Услуги и Ценны
          </Typography>
        </Box>
        <Box
          sx={{
            '& img': {
              maxHeight: '55px',
            },
          }}
        >
          <img src="https://i.ibb.co/mBqK3r4/2022-08-07-23-56-07.png" alt="fdf" />
        </Box>
        <Box display="flex" alignItems="center">
          <Stack direction="row" mr="30px">
            <IconButton onClick={() => openSite('https://www.instagram.com/cleaning.novopolotsk/')}>
              <InstagramIcon />
            </IconButton>
          </Stack>
          <Box>
            <Typography fontWeight="800" fontSize="14px">
              +375 (29) 816-11-77
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default HightPanel;
