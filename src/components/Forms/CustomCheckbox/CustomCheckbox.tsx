import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useTheme, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { CheckboxBlock } from '../RegisterForm/styled';

import { CheckBoxIcon, CheckBoxCheckedIcon } from './CustomCheckboxIcons';
import { CheckboxTextConteiner, CheckboxText } from './styled';

interface CustomCheckboxProps {
  name: string;
}

const CustomCheckbox = ({ name }: CustomCheckboxProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { control } = useFormContext();

  const fieldName = `${name}` as const;

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CheckboxBlock>
          <Checkbox
            icon={<CheckBoxIcon theme={theme} />}
            checkedIcon={<CheckBoxCheckedIcon theme={theme} />}
            name="checkbox"
            onChange={onChange}
            checked={!!value}
          />
          <CheckboxTextConteiner display="flex" alignItems="center">
            <CheckboxText>
              {t('landingPage.registerBlock.checkbox')}
              <Typography>{t('footerText.privacyPolicy')}</Typography>
              {' & '}
              <Typography>{t('contactUsPage.form.termsAndConditions')}</Typography>
            </CheckboxText>
          </CheckboxTextConteiner>
        </CheckboxBlock>
      )}
    />
  );
};

export default CustomCheckbox;
