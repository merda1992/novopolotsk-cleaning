import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material';

import palette from './palette';
import overrides from './overrides';
import typography from './typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tabletS: true;
    tabletM: true;
    laptop: true;
    desktop: true;
    desktopX: true;
  }
}

const baseTheme = {
  palette,
  typography,
  components: overrides,
  breakpoints: {
    values: {
      mobile: 426,
      tabletS: 600,
      tabletM: 769,
      laptop: 1050,
      desktop: 1200,
      desktopX: 1300,
    },
  },
} as ThemeOptions;

export const theme = createTheme(baseTheme);
