import palette from '../palette';

export default {
  styleOverrides: {
    paper: {
      backgroundColor: palette.common.white,
      textAlign: 'center',
      borderRadius: '20px !important', //in mui was set 4px, I couldn't override it another way
    },
    paperWidthSm: {
      width: '496px',
    },
    paperWidthLg: {
      width: '100%',
    },
  },
};
