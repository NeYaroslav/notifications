import React, { useRef } from "react";
import classes from "./createNotificationForm.module.scss";
import { CheckBox } from "../../ui/checkbox/CheckBox";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { useAppDispatch } from "../../redux/hooks";
import { notificationActions } from "../../redux/services/notifications/notificationsSlice";

export const CreateNotificationForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!inputRef.current || !checkboxRef.current) {
      console.error("no input refs found");
      return;
    }
    if (!inputRef.current.value.trim()) return;
    dispatch(
      notificationActions.createNotification({
        isDisposable: checkboxRef.current.checked,
        title: inputRef.current.value,
      })
    );
    inputRef.current.value = "";
    checkboxRef.current.checked = false;
  };

  return (
    <form className={classes.form}>
      <Input
        placeholder="Notification"
        type="text"
        ref={inputRef}
      />
      <label className={classes["checkbox-wrapper"]}>
        <CheckBox
          ref={checkboxRef}
          id="123"
          className={classes.checkbox}
        />
        <span>Show once</span>
      </label>
      <Button onClick={onClick}>Add notification</Button>
    </form>
  );
};
