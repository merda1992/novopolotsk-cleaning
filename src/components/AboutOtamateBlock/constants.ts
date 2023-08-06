export const PAID_PLAN_URL_PARAM = 'paid_plan';

export const EMAIL_PATTERN = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/,
);

export const EXTERNAL_URL = {
  LOG_IN: `${process.env.MAIN_APP_URL}/auth/login`,
  SIGN_UP: `${process.env.MAIN_APP_URL}/auth/register`,
  DASHBOARD: `${process.env.MAIN_APP_URL}/dashboard`,
};

export const MOBILE_DEVICES = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini'];

export const SHOW_UP_TO_TOP_BUTTON_STRESS_HEIGHT = 382;

export const SLIDE_TRANSITION_SPEED = 1000;

export const SLIDE_DELAY_LONG_TEXT = 20000;

export const SLIDE_DELAY_SHORT_TEXT = 6000;

export const SPACE_BETWEEN_SLIDES = 30;

export const validateTextFieldValue = (value: string) => {
  return value.trimStart().replace(/\s\s+/g, ' ');
};

export const STATIC_SEO_TITLE = 'Otomate PIM';

export enum Section {
  Top = 'header-background',
  About = 'about',
  Access = 'access',
  Faq = 'faq',
  PrivacyPolicy = 'privacy-policy',
  TermsAndConditions = 'terms-and-conditions',
}

export const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const LINK_TO_SURVEY =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaG51CmHgyS6qtAoN0RDtAvvFRBUqXUTcIbuRCL1fwMe4N1Q/viewform';
