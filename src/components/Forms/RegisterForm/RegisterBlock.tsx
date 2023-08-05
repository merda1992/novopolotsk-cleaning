import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import { BoxProps } from '@mui/material';
import { LoginOrRegister } from '../../Popup';
import Cookies from 'js-cookie';

import { useMutation, ApolloError } from '@apollo/client';
import { Mutation, MutationLoginArgs, login, createUser, MutationCreateUserArgs } from '../../../gql';
import { useSnackbar } from '../../../hooks/snackbar';

import TextInput from '../TextInput';
import { registerFormSchema } from '../validationSchemas';

import { StyledRegisterBlock, NewUserLink } from './styled';

interface SendUserDataProps {
  email: string;
  password: string;
  name?: string;
}

enum InputNames {
  password = 'password',
  email = 'email',
  name = 'name',
}

interface RegisterBlockProps extends BoxProps {
  loginOrRegister: LoginOrRegister;
  setLoginOrRegister: React.Dispatch<React.SetStateAction<LoginOrRegister>>;
  onClose: () => void;
  updateToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RegisterBlock = (props: RegisterBlockProps) => {
  const { loginOrRegister, setLoginOrRegister, onClose, updateToken, ...rest } = props;

  const { t } = useTranslation();
  const snackbar = useSnackbar();

  const [loginUser] = useMutation<Pick<Mutation, 'login'>, MutationLoginArgs>(login);
  const [createNewUser] = useMutation<Pick<Mutation, 'login'>, MutationCreateUserArgs>(createUser);

  const loginUserByData = async (email: string, password: string) => {
    try {
      await loginUser({
        variables: {
          auth: {
            email,
            password,
          },
        },
      }).then(({ data }) => {
        Cookies.set('_token', data?.login.token || '');
        updateToken(Cookies.get('_token'));
        snackbar(t('snackbar.userSuccessfullyLogin'), 'success');
        onClose();
      });
    } catch (error) {
      const { graphQLErrors, message: errorText } = error as ApolloError;
      const message = graphQLErrors && graphQLErrors.length ? graphQLErrors[0].message : errorText;
      if (error) {
        snackbar(message);
        onClose();
      }
    }
  };

  const registerNewUser = async (email: string, password: string, name: string) => {
    try {
      await createNewUser({
        variables: {
          user: {
            email,
            name,
            password,
          },
        },
      }).then(() => {
        snackbar(t('snackbar.userSuccessfullyRegistered'), 'success');
        onClose();
      });
    } catch (error) {
      const { graphQLErrors, message: errorText } = error as ApolloError;
      const message = graphQLErrors && graphQLErrors.length ? graphQLErrors[0].message : errorText;
      if (error) {
        snackbar(message);
        onClose();
      }
    }
  };

  const formMethods = useForm<SendUserDataProps>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const handleSendUserData = ({ email, password, name }: SendUserDataProps) => {
    if (isValid) {
      loginOrRegister === LoginOrRegister.login
        ? loginUserByData(email, password)
        : registerNewUser(email, password, name || '');
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSendUserData)}>
        <Box position="relative" {...rest}>
          <StyledRegisterBlock>
            {loginOrRegister === LoginOrRegister.register && <TextInput name={InputNames.name} label="Name" />}
            <TextInput name={InputNames.email} label="Email" />
            <TextInput type="password" name={InputNames.password} label="Password" />
            <Button disabled={!isValid} type="submit">
              {t('header.signUp')}
            </Button>
            {loginOrRegister === LoginOrRegister.login ? (
              <NewUserLink onClick={() => setLoginOrRegister(LoginOrRegister.register)}>
                {t('signUpPopup.createNewUser')}
              </NewUserLink>
            ) : (
              <NewUserLink onClick={() => setLoginOrRegister(LoginOrRegister.login)}>
                {t('signUpPopup.title')}
              </NewUserLink>
            )}
          </StyledRegisterBlock>
        </Box>
      </form>
    </FormProvider>
  );
};

export default RegisterBlock;
