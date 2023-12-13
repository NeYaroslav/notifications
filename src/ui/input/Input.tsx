import React, { forwardRef } from "react";
import classes from "./input.module.scss";
import { uniteClassNames } from "../../utils/uniteClassNames";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={uniteClassNames(classes.input, className)}
      {...rest}
    />
  );
});
