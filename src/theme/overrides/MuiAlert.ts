import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      borderRadius: '5px',
      '&.MuiAlert-standardError': {
        border: '1px solid',
        borderColor: palette.error.main,
        '& .MuiAlert-message': {
          marginTop: '1px',
          color: palette.error.main,
        },
        '& .MuiAlert-action': {
          '& .MuiButtonBase-root': {
            color: palette.error.main,
            svg: {
              width: '20px',
              height: '20px',
            },
            '& .MuiTouchRipple-root': {
              display: 'none',
            },
            '&:hover': {
              background: 'none',
            },
          },
        },
      },
      '&.MuiAlert-standardWarning': {
        border: '1px solid',
        borderColor: palette.warning.main,
        '& .MuiAlert-message': {
          marginTop: '1px',
          color: palette.warning.main,
        },
        '& .MuiAlert-action': {
          '& .MuiButtonBase-root': {
            color: palette.warning.main,
            svg: {
              width: '20px',
              height: '20px',
            },
            '& .MuiTouchRipple-root': {
              display: 'none',
            },
            '&:hover': {
              background: 'none',
            },
          },
        },
      },
      '&.MuiAlert-standardSuccess': {
        border: '1px solid',
        borderColor: palette.success.main,
        '& .MuiAlert-message': {
          marginTop: '1px',
          color: palette.success.main,
        },
        '& .MuiAlert-action': {
          '& .MuiButtonBase-root': {
            color: palette.success.main,
            svg: {
              width: '20px',
              height: '20px',
            },
            '& .MuiTouchRipple-root': {
              display: 'none',
            },
            '&:hover': {
              background: 'none',
            },
          },
        },
      },
    },
  },
};
