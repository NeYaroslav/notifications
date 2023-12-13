import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../ui/button/Button";
import { useAppDispatch } from "../../redux/hooks";
import { notificationActions } from "../../redux/services/notifications/notificationsSlice";
import classes from "./notificationAlert.module.scss";

type NotificationAlertProps = { children: React.ReactNode };

export const NotificationAlert: React.FC<NotificationAlertProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return createPortal(
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.alert}>
          <h3>{children}</h3>
          <Button onClick={() => dispatch(notificationActions.removeFirstReceivedNotification())}>OK</Button>
        </div>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};
