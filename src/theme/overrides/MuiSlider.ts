import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      width: '90%',
    },
    thumb: {
      height: 22,
      width: 22,
      color: palette.common.white,
      marginTop: -9,
      marginLeft: -11,
      '&::after': {
        position: 'absolute',
        top: -2,
        bottom: -2,
        left: -2,
        right: -2,
        background: palette.secondary.main,
        zIndex: -1,
      },
      '&:hover, &:focus, &:active': {
        boxShadow: 'none',
      },
      '&.Mui-focusVisible, &.Mui-active': {
        boxShadow: 'none',
      },
    },
    track: {
      backgroundColor: palette.secondary.main,
      height: 4,
      zIndex: -1,
    },
    rail: {
      color: palette.text.disabled,
      opacity: 1,
      height: 4,
      zIndex: -1,
      borderRadius: '5px',
    },
  },
};
