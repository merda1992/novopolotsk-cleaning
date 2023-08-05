import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { gql, useQuery } from '@apollo/client';
import { AlertProps, Typography, Snackbar } from '@mui/material';
import { SnackbarCloseReason } from '@mui/material';

import palette from '../../theme/palette';

import Iconography from '../../components/Iconography/Iconography';

import SnackbarContext from './context';
import {
  ToastCloseIconWrapper,
  ToastContentDivider,
  ToastContentWrapper,
  ToastIconWrapper,
  ToastWrapper,
} from './styled';

interface AlertState {
  message: string;
  severity: AlertProps['severity'];
}

enum ToastMessageTypes {
  Success = 'success',
  Info = 'info',
  Error = 'error',
}

export const TOAST_MESSAGES = {
  [ToastMessageTypes.Success]: {
    iconName: 'check-circle',
    type: 'generalSnackbarMessageTypes.success',
    color: palette.success.main as string,
  },
  [ToastMessageTypes.Info]: {
    iconName: 'info-fill',
    type: 'generalSnackbarMessageTypes.info',
    color: palette.secondary.dark as string,
  },
  [ToastMessageTypes.Error]: {
    iconName: 'cancel-circle',
    type: 'generalSnackbarMessageTypes.error',
    color: palette.error.main as string,
  },
};

export const GET_ERROR_MESSAGE = gql`
  {
    errorMessage @client
    severity @client
  }
`;

function SnackbarProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({
    message: '',
    severity: 'success',
  });

  const { data, client } = useQuery(GET_ERROR_MESSAGE);

  const showMessage = useCallback(
    (message: string, severity: AlertProps['severity'] = 'error') => {
      const customMessage =
        (message.includes('status code 400') && t('contactToSupportErrorMessage')) ||
        (message.includes('Data too long') && t('currentNameTooLongErrorMessage')) ||
        (message.includes('Duplicate entry') && t('emailIsAlreadyRegisteredErrorMessage'));

      if (message) {
        setAlert({
          message: (customMessage as string) || message,
          severity,
        });

        setOpen(true);
      }
    },
    [t],
  );

  useEffect(() => {
    if (data?.errorMessage) {
      showMessage(data.errorMessage, data?.severity || 'error');
    }
  }, [client, data, showMessage]);

  const handleClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);

      if (data && data.errorMessage) {
        client.cache.modify({
          fields: {
            errorMessage: () => '',
          },
        });
      }
    },
    [client, data],
  );

  return (
    <>
      <SnackbarContext.Provider value={showMessage}>{children}</SnackbarContext.Provider>
      <Snackbar
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <ToastWrapper>
          <ToastIconWrapper>
            <Iconography
              iconName={TOAST_MESSAGES[alert.severity as keyof typeof TOAST_MESSAGES].iconName}
              htmlColor={TOAST_MESSAGES[alert.severity as keyof typeof TOAST_MESSAGES].color}
            />
          </ToastIconWrapper>
          <ToastContentDivider />
          <ToastContentWrapper>
            <Typography variant="h4" color="text.primary">
              {t(TOAST_MESSAGES[alert.severity as keyof typeof TOAST_MESSAGES].type)}
            </Typography>
            <Typography variant="h4" color="text.primary" fontWeight="400" mt="5px">
              {alert.message}
            </Typography>
          </ToastContentWrapper>
          <ToastCloseIconWrapper onClick={handleClose}>
            <Iconography iconName="cancel" color="disabled" fontSize="small" />
          </ToastCloseIconWrapper>
        </ToastWrapper>
      </Snackbar>
    </>
  );
}

export default SnackbarProvider;
