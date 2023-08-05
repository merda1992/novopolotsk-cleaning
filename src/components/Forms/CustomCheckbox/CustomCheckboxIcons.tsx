import React from 'react';

import { Theme } from '@mui/material';

import Iconography from '../../Iconography/Iconography';

export const CheckBoxIcon = ({ theme }: { theme: Theme }) => (
  <Iconography width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke={theme.palette.text.primary} />
  </Iconography>
);

export const CheckBoxCheckedIcon = ({ theme }: { theme: Theme }) => (
  <Iconography viewBox="0 0 20 20" width="20" height="20" fill="none">
    <rect width="20" height="20" rx="6" fill={theme.palette.info.light}></rect>
    <path
      d="M7.71569 14.923C7.41766 14.9179 7.13377 14.795 6.92606 14.5811L6.88505 14.5333L3.53512 10.5572C3.38871 10.384 3.31708 10.1598 3.33599 9.93376C3.3549 9.70775 3.4628 9.49852 3.63596 9.35208C3.80912 9.20565 4.03335 9.134 4.25932 9.15292C4.48529 9.17183 4.69449 9.27975 4.84091 9.45294L7.73962 12.8991L15.1847 4.9367C15.3397 4.77077 15.5543 4.67322 15.7812 4.66553C16.0081 4.65784 16.2288 4.74062 16.3947 4.89567C16.5606 5.05072 16.6582 5.26534 16.6659 5.4923C16.6735 5.71927 16.5908 5.94 16.4357 6.10593L8.51557 14.5811C8.41209 14.689 8.28792 14.7749 8.15048 14.8336C8.01304 14.8924 7.86515 14.9228 7.71569 14.923V14.923Z"
      fill="white"
    />
  </Iconography>
);
