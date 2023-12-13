import React, { forwardRef } from "react";
import classes from "./button.module.scss";
import { uniteClassNames } from "../../utils/uniteClassNames";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={uniteClassNames(classes.button, className)}
      {...rest}
    />
  );
});
