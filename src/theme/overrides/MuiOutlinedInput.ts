import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      borderRadius: '2px',
      color: palette.primary.main,
      fontSize: '15px',
      lineHeight: '18px',
      padding: 0,
      '& fieldset': {
        '& legend': {
          height: '14px',
          fontSize: '12px',
          lineHeight: '14px',
          '& span': {
            paddingRight: '10px',
          },
        },
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.main,
        borderWidth: '1px',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.main,
        borderWidth: '1px',
      },
      '&.Mui-disabled': {
        background: palette.background.default,
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.text.disabled,
      },
    },
    input: {
      padding: '12px 20px',
      height: 'auto',

      '&::placeholder': {
        color: palette.text.disabled,
        opacity: 1,
      },

      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 30px ${palette.common.white} inset`,
      },
    },
  },
};
