import React from 'react';

import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

import IconographySprite from './iconography.svg';

interface IconographyProps extends SvgIconProps {
  iconName?: string;
}

function Iconography({ iconName, ...props }: IconographyProps) {
  return (
    <>
      <MuiSvgIcon {...props}>
        {!!iconName?.length && <use href={IconographySprite + `#${iconName}`} />}
        {!iconName && props.children && <>{props.children}</>}
      </MuiSvgIcon>
    </>
  );
}

export default Iconography;
