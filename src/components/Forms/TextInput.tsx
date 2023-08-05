import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

import { validateTextFieldValue } from '../../constants';

import { StyledTextField } from './styled';

interface TextInputProps {
  name: string;
}

const TextInput = ({ name, ...props }: TextFieldProps & TextInputProps) => {
  const {
    control,
    formState: { isSubmitted },
  } = useFormContext();

  const fieldName = `${name}` as const;

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <StyledTextField
          helperText={isSubmitted ? error?.message : ''}
          error={!!error && isSubmitted}
          fullWidth
          variant="outlined"
          value={value || ''}
          autoComplete={fieldName}
          onChange={(event) => onChange(validateTextFieldValue(event.target.value))}
          {...props}
        />
      )}
    />
  );
};

export default TextInput;
