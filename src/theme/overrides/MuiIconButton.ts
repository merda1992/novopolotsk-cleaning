export default {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      '&:hover': {
        background: 'none',
      },
      '&.Mui-focusVisible': {
        boxShadow: '0 0 7px rgba(0, 0, 0, 0.35)',
      },
    },
  },
};
