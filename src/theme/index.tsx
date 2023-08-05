import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material';

import palette from './palette';
import overrides from './overrides';
import typography from './typography';

const baseTheme = {
    palette,
    typography,
    components: overrides,
} as ThemeOptions;

export const theme = createTheme(baseTheme);
