import { Box, experimentalStyled as styled, Typography } from '@mui/material';

interface ContentBoxProps {
  isActive: boolean;
}

export const StyledSpatialBlock = styled(Box)(() => ({
  display: 'block',
  borderTop: '85px solid transparent',
  marginTop: '-85px',
  MozBackgroundClip: 'padding',
  WebkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  background: 'white',
}));

export const StyledAboutOtomateBlock = styled(Box)(({ theme }) => ({
  maxWidth: '1248px',
  width: '100%',
  margin: '0 auto 180px',
  padding: '0 24px',

  [theme.breakpoints.down('mobile')]: {
    padding: '0 16px',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: '64px',
  textAlign: 'center',

  [theme.breakpoints.down('mobile')]: {
    fontSize: '28px',
    lineHeight: '36px',
    paddingBottom: '40px',
  },
}));

export const StyledSubTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: '12px',
  color: theme.palette.common.black,

  [theme.breakpoints.down('tabletM')]: {
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },

  [theme.breakpoints.down('mobile')]: {
    fontSize: '22px',
    lineHeight: '30px',
  },
}));

export const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 400,

  [theme.breakpoints.down('tabletM')]: {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
}));

export const StyledContentBox = styled(Box)<ContentBoxProps>(({ theme, isActive }) => ({
  borderRadius: '12px',
  background: isActive ? theme.palette.primary.light : 'none',
  padding: '20px 30px',

  '&:hover': {
    cursor: 'pointer',
  },

  [theme.breakpoints.down('desktop')]: {
    maxWidth: '408px',
  },

  [theme.breakpoints.down('laptop')]: {
    maxWidth: '350px',
    padding: '20px 20px',
  },
}));

export const StyledPicture = styled(Box)(({ theme }) => ({
  maxWidth: '610px',
  width: '100%',
  margin: '0 auto',

  img: {
    width: '100%',
    maxHeight: '399px',
    height: '100%',
    borderRadius: '12px',

    [theme.breakpoints.down('desktop')]: {
      maxHeight: '419px',
    },
  },
}));

export const StyledSliderContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '12px',
  width: '100%',
  maxWidth: '690px',
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('desktop')]: {
    padding: '55px 40px',
  },
}));

export const StyledContainerContentBlock = styled(Box)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.down('desktop')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export const StyledBoxWithText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '100px',

  [theme.breakpoints.down('desktop')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 0 48px',
  },
}));

export const StyledPictureMobileWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '12px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',

  img: {
    width: '100%',
    maxWidth: '560px',
    borderRadius: '12px',
    padding: '30px',
    minWidth: 0,

    [theme.breakpoints.down('mobile')]: {
      maxWidth: '283px',
    },
  },
}));
