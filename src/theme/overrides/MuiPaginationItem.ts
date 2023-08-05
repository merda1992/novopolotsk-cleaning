import palette from '../palette';

export default {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      margin: '0 5px',
      '&.Mui-selected': {
        backgroundColor: palette.common.white,
        background: palette.secondary.main,
        color: palette.primary.main,
      },
    },
  },
};
