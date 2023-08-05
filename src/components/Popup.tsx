import * as React from 'react';

import { Button, Dialog, DialogTitle } from '@mui/material';
import Iconography from './Iconography/Iconography';

import { useTranslation } from 'react-i18next';

import RegisterBlock from './Forms/RegisterForm/RegisterBlock';

export enum LoginOrRegister {
  register = 'register',
  login = 'login',
}

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  updateToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Popup = (props: SimpleDialogProps) => {
  const { onClose, open, updateToken } = props;
  const { t } = useTranslation();
  const [loginOrRegister, setLoginOrRegister] = React.useState<LoginOrRegister>(LoginOrRegister.login);

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ paddingBottom: 0 }}>
        {t(loginOrRegister === LoginOrRegister.login ? 'signUpPopup.title' : 'signUpPopup.createNewUser')}
      </DialogTitle>
      <RegisterBlock
        onClose={onClose}
        loginOrRegister={loginOrRegister}
        setLoginOrRegister={setLoginOrRegister}
        updateToken={updateToken}
        margin="30px"
      />
      <Button onClick={onClose} sx={{ position: 'absolute', minWidth: 'auto', right: 0 }}>
        <Iconography iconName="close-icon" />
      </Button>
    </Dialog>
  );
};

export default Popup;
