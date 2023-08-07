import { Box, experimentalStyled as styled, Typography } from '@mui/material';

interface StateProps {
  isactive: string;
}

export const StyledSpatialBlock = styled(Box)(({ theme }) => ({
  display: 'block',
  borderTop: 'solid transparent',
  paddingTop: '65px',
  MozBackgroundClip: 'padding',
  WebkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  background: theme.palette.secondary.dark,
  zIndex: 0,
}));

export const StyledAboutOtomateBlock = styled(Box)(({ theme }) => ({
  margin: '0 auto 130px',
  padding: '0 16px',

  [theme.breakpoints.down('mobile')]: {
    padding: '0 16px',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: '80px',
  textAlign: 'center',

  [theme.breakpoints.down('mobile')]: {
    fontSize: '30px',
    lineHeight: '36px',
    paddingBottom: '50px',
  },
}));

export const StyledSubTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: '12px',
  color: theme.palette.common.black,

  [theme.breakpoints.down('desktopX')]: {
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },

  [theme.breakpoints.down('mobile')]: {
    fontSize: '22px',
    lineHeight: '30px',
  },
}));

export const StyledContent = styled(Typography)<StateProps>(({ theme, isactive }) => ({
  color: isactive ? theme.palette.common.white : theme.palette.primary.main,
  fontWeight: 400,

  [theme.breakpoints.down('desktopX')]: {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
}));

export const StyledContentBox = styled(Box)<StateProps>(({ theme, isactive }) => ({
  borderRadius: '12px',
  background: isactive ? theme.palette.secondary.main : 'none',
  padding: '20px 30px',

  '&:hover': {
    cursor: 'pointer',
  },

  '& h6': {
    color: isactive && 'white',
  },

  [theme.breakpoints.down('desktop')]: {
    maxWidth: '408px',
  },

  [theme.breakpoints.down('laptop')]: {
    maxWidth: '350px',
    padding: '20px 20px',
  },
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('desktopX')]: {
    minHeight: '142px',
  },

  [theme.breakpoints.down('mobile')]: {
    minHeight: '168px',
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
  justifyContent: 'center',

  [theme.breakpoints.down('desktop')]: {
    flexWrap: 'wrap',
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
  maxWidth: '650px',

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
