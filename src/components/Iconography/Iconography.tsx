import React from 'react';

import { useTheme, SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material';

import GradientIconographySprite from './gradient-iconography.svg';
import IconographySprite from './iconography.svg';

interface IconographyProps extends SvgIconProps {
  iconName?: string;
}

const gradientBackgroundUrl = 'url(#paint0_linear)';

function Iconography({ iconName, ...props }: IconographyProps) {
  const theme = useTheme();

  return (
    <>
      {props.htmlColor === 'secondary' ? (
        <MuiSvgIcon {...props}>
          {iconName && (
            <svg fill={gradientBackgroundUrl}>
              <use href={GradientIconographySprite + `#${iconName}`} />
            </svg>
          )}
          {!iconName && props.children && React.isValidElement(props.children) && (
            <>
              {React.cloneElement(props.children as React.ReactElement, { style: { fill: gradientBackgroundUrl } })}
              <defs>
                <linearGradient id="paint0_linear" gradientUnits="userSpaceOnUse">
                  <stop stopColor={theme.palette.secondary.main} />
                  <stop offset="1" stopColor="#F99746" />
                </linearGradient>
              </defs>
            </>
          )}
        </MuiSvgIcon>
      ) : (
        <MuiSvgIcon {...props}>
          {!!iconName?.length && <use href={IconographySprite + `#${iconName}`} />}
          {!iconName && props.children && <>{props.children}</>}
        </MuiSvgIcon>
      )}
    </>
  );
}

export default Iconography;
