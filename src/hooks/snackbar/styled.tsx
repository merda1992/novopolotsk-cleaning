import { Box } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material';

export const ToastWrapper = styled(Box)`
  display: flex;
  max-width: 296px;
  min-width: 200px;
  min-height: 71px;
  height: auto;
  padding: 12px 34px 12px 19px;
  position: absolute;
  box-shadow: 0px 2px 10px rgba(46, 96, 170, 0.25);
  border-radius: 5px;
  align-items: center;
  background: ${({ theme: { palette } }) => palette.common.white};
  top: 0;
  right: 0;
`;

export const ToastIconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToastContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ToastCloseIconWrapper = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ToastContentDivider = styled(Box)`
  height: 41px;
  width: 1px;
  background: ${({ theme: { palette } }) => palette.background.default};
  margin: 0px 15px 0px 13px;
`;
