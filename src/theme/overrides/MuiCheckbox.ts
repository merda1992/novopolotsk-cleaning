import palette from '../palette';

export default {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: '16px',
      height: '16px',
      marginRight: '10px',
      color: palette.secondary.main,
      '&.Mui-checked': {
        color: palette.secondary.main,
        '&:hover': {
          background: 'none',
        },
      },
      '&:hover': {
        background: 'none',
      },
      '&.Mui-focusVisible': {
        boxShadow: '0 0 15px #F16152',
      },
    },
  },
};
