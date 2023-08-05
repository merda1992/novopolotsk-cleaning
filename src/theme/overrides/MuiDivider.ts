import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      background: palette.error.main,
      '&.MuiDivider-light': {
        borderColor: 'white',
      },
    },
  },
};
