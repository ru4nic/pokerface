import { forwardRef, Ref } from 'react';

import Button from '@mui/material/Button';

type StyledButtonProps = {
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  sx?: object;
  fullWidth?: boolean;
};
export const StyledButton = forwardRef(
  (
    { children, endIcon, href, sx, fullWidth }: StyledButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <Button
        endIcon={endIcon}
        href={href}
        sx={sx}
        fullWidth={fullWidth ? true : false}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
