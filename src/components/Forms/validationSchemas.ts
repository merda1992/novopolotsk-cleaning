import * as yup from 'yup';

const EXCEEDED_LIMIT_VALUE = 35;

export const EMAIL_PATTERN = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/,
);

export const PASSWORD_PATTERN = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);

const password = yup
  .string()
  .required('Password is required')
  .matches(PASSWORD_PATTERN, 'Please enter a valid password')
  .max(EXCEEDED_LIMIT_VALUE, 'Max 35 symbols');

const email = yup
  .string()
  .required('Email is required')
  .matches(EMAIL_PATTERN, 'Please, enter valid email')
  .max(EXCEEDED_LIMIT_VALUE, 'Max 35 symbols');

const name = yup
  .string()
  .max(EXCEEDED_LIMIT_VALUE, 'Max 35 symbols');

export const sendMessageFormSchema = yup
  .object()
  .shape({
    password,
    email,
    phone: yup.string().max(EXCEEDED_LIMIT_VALUE, 'Max 255 symbols'),
    companyName: yup.string().max(EXCEEDED_LIMIT_VALUE, 'Max 255 symbols'),
    description: yup.string().required('Description is required').max(EXCEEDED_LIMIT_VALUE, 'Max 255 symbols'),
  })
  .required();

export const registerFormSchema = yup.object().shape({ email, password, name }).required();

export const descriptionFormSchema = yup.object().shape({
  description: yup.string().max(EXCEEDED_LIMIT_VALUE, 'Max 255 symbols'),
});
