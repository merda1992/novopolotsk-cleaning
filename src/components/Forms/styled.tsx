import { Box, TextField, experimentalStyled as styled } from '@mui/material';

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '588px',
  width: '100%',
  borderRadius: '20px',
  padding: '40px 78px',
  backgroundColor: theme.palette.primary.dark,

  '& .MuiFormControl-root': {
    marginBottom: '26px',
  },

  '& .MuiInputBase-root': {
    background: theme.palette.common.white,
  },
}));

export const ContactFieldsWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',

  '& .MuiFormControl-root': {
    '&:first-of-type': {
      marginRight: '24px',
    },
  },
}));

export const StyledTextField = styled(TextField)`
  &.MuiFormControl-root {
    width: 100%;
  }

  .MuiFormHelperText-root {
    bottom: 53px;
    left: 7px;
  }

  & legend {
    max-width: 0.01px;
  }

    .MuiOutlinedInput-root {
      border-radius: 12px;

      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme: { palette } }) => palette.primary.light};
      }
    }
    .MuiIconButton-root {
      margin-right: -4px;
    }
    .MuiSvgIcon-root {
      color: ${({ theme: { palette } }) => palette.text.disabled};
    }

    .MuiInputLabel-root {
      &.Mui-error {
        display: none;
      }
    }
  }
`;

export const StyledMultilineInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '100px',
    padding: '12px 5px 12px 20px',
    borderRadius: '12px',
  },

  '& .MuiInputLabel-root': {
    '&.Mui-error': {
      display: 'none',
    },
  },

  '& .MuiFormHelperText-root': {
    bottom: '105px',
    left: '7px',
  },

  '& legend': {
    maxWidth: '0.01px',
  },

  '& .MuiOutlinedInput-input': {
    padding: '0 15px 0 0',

    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '5px',
      border: `1px solid ${theme.palette.common.white}`,
      background: theme.palette.info.main,
      boxShadow: 'none',
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: '5px',
      border: 'none',
      background: theme.palette.common.white,
      boxShadow: 'inset 0px 0px 15px rgba(46, 96, 170, 0.15)',
    },
  },
}));
