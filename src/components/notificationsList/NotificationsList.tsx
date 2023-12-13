import React from "react";
import classes from "./notificationList.module.scss";
import { NotificationListItem } from "../notificationListItem/NotificationListItem";
import {
  notificationActions,
  createdNotificationSelector,
} from "../../redux/services/notifications/notificationsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const NotificationsList: React.FC = () => {
  const notifications = useAppSelector(createdNotificationSelector);
  const dispatch = useAppDispatch();

  return (
    <ul className={classes.list}>
      {notifications.map((notification) => (
        <NotificationListItem
          key={notification.id}
          className={classes.item}
          onDelete={() => dispatch(notificationActions.deleteNotification(notification.id))}
          children={notification.title}
        />
      ))}
    </ul>
  );
};
