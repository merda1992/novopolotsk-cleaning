import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      backgroundColor: palette.background.default,
      color: palette.text.secondary,
      boxShadow: '0 2px 10px rgba(46, 96, 170, 0.25)',
      width: '100%',
      borderRadius: '5px',
      '&:hover': {
        boxShadow: '0 2px 15px rgba(241, 97, 82, 0.35)',
        cursor: 'pointer',
      },
    },
  },
};
