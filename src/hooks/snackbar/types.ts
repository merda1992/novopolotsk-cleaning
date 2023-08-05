import { AlertProps } from "@mui/material";

export type SnackbarContextType = (message: string, color?: AlertProps['severity']) => void;
