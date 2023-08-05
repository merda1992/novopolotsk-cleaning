import { Box, Typography, experimentalStyled as styled } from '@mui/material';

export const CheckboxTextConteiner = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontFamily: 'Roboto',
    lineHeight: '22px',
    fontSize: '14px',
  },
}));

export const CheckboxText = styled(Typography)(() => ({
  '&>.MuiTypography-root': {
    textDecoration: 'underline',
    display: 'inline',
    cursor: 'pointer',
  },
}));
