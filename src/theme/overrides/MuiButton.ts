import palette from '../palette';

export default {
  defaultProps: {
    disableRipple: true,
    size: 'large',
  },
  styleOverrides: {
    root: {
      borderRadius: '25px',
      textTransform: 'none',
      fontWeight: 'normal',
      lineHeight: '16px',
      fontSize: '15px',
      boxShadow: '0 0 15px #1E90FF',
      '&:hover': {
        boxShadow: '0 0 15px #1E90FF',
      },
      '&.Mui-focusVisible': {
        boxShadow: '0 0 15px #F16152',
      },
    },
    contained: {
      color: palette.common.white,
      background: palette.secondary.dark,
      padding: '12px 30px',
      height: '42px',
      '&:hover': {
        backgroundColor: palette.secondary.dark,
      },
      '&:active': {
        background: palette.secondary.light,
        boxShadow: 'none',
      },
      '&.Mui-disabled': {
        background: palette.background.default,
        color: palette.text.disabled,
      },
    },
    outlined: {
      color: palette.secondary.dark,
      border: `1px solid ${palette.secondary.dark}`,
      backgroundColor: palette.common.white,
      '&.Mui-disabled': {
        color: palette.text.disabled,
        border: `1px solid ${palette.action.disabled}`,
        backgroundColor: palette.common.white,
      },
      '&:hover': {
        color: palette.secondary.dark,
        border: `1px solid ${palette.secondary.dark}`,
        backgroundColor: palette.common.white,
      },
      '&:active': {
        boxShadow: 'none',
        color: palette.secondary.light,
        border: `1px solid ${palette.secondary.dark}`,
        backgroundColor: palette.common.white,
      },
    },
    outlinedSizeSmall: {
      height: '24px',
      width: '24px',
      minWidth: '24px',
    },
    outlinedSizeMedium: {
      minWidth: '42px',
      padding: '12px 16px',
      span: {
        display: 'inline',
        fontWeight: '500',
        fontSize: '18px',
        background: palette.secondary.dark,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    outlinedSizeLarge: {
      height: '42px',
      padding: '12px 30px',
    },
  },
};
