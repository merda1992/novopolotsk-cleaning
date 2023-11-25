/* eslint-disable import/no-anonymous-default-export */
import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      fontSize: '15px',
      lineHeight: '18px',
      marginTop: '11px !important',
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `1px solid`,
        borderColor: palette.secondary.main,
      },
    },
    input: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 30px ${palette.common.white} inset`,
        caretColor: palette.common.black,
        '&:hover': {
          caretColor: palette.common.black,
        },
        '&:focus': {
          caretColor: palette.common.black,
        },
        '&:active': {
          caretColor: palette.common.black,
        },
      },
    },
    underline: {
      color: palette.primary.main,
      '&:before': {
        borderBottom: '1px solid',
        borderColor: palette.text.disabled,
      },
      '&:after': {
        borderBottom: `1px solid`,
        borderColor: palette.secondary.main,
      },
    },
  },
};
