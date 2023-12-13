import React, { forwardRef } from "react";
import classes from "./checkBox.module.scss";
import { uniteClassNames } from "../../utils/uniteClassNames";
import { Icon } from "../icon/Icon";
// import path from "../../../public/";

type CheckBoxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({ id, className, ...rest }, ref) => {
  return (
    <div className={uniteClassNames(classes.wrapper, className)}>
      <input
        ref={ref}
        type="checkbox"
        name=""
        id={id}
        className={classes.input}
        {...rest}
      />
      <label
        className={classes.label}
        htmlFor={id}>
        <Icon
          className={classes.tick}
          name="tick"
        />
      </label>
    </div>
  );
});
