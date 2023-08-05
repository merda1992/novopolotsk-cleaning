import React from 'react';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainBody from './components/MainBody';

import { Box } from '@mui/material';
import { SnackbarProvider } from './hooks/snackbar';

function App() {
  return (
    <SnackbarProvider>
      <Box overflow="hidden" display="flex" height="100vh" flexDirection="column" justifyContent="space-between">
        <MainHeader />
        <MainBody />
        <MainFooter />
      </Box>
    </SnackbarProvider>
  );
}

export default App;
