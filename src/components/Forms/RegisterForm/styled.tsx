import { Box, Link, experimentalStyled as styled } from '@mui/material';

export const StyledRegisterBlock = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .MuiFormControl-root': {
    paddingBottom: '20px',
    maxWidth: '306px',
  },

  '& .MuiButtonBase-root': {
    maxWidth: '226px',
  },
}));

export const CheckboxBlock = styled(Box)(() => ({
  marginTop: '11px',
  display: 'flex',
  alignItems: 'flex-start',
  position: 'absolute',

  span: {
    width: '20px',
    height: '20px',
  },

  svg: {
    fontSize: '1.25rem',
    fill: 'none',
  },
}));

export const NewUserLink = styled(Link)(() => ({
  cursor: 'pointer',
  marginTop: '15px',
  fontSize: '14px',
}));
