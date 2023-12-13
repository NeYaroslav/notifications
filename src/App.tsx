import React from "react";
import { CreateNotificationForm } from "./components/createNotificationForm/CreateNotificationForm";
import { NotificationsList } from "./components/notificationsList/NotificationsList";
import { useAppSelector } from "./redux/hooks";
import {
  createdNotificationSelector,
  firstRecievedNotificationSelector,
} from "./redux/services/notifications/notificationsSlice";
import { useSynchronizedLocalStorage } from "./hooks/useSynchronizedLocalStorage";
import { NOTIFICATION_KEY } from "./data/variables";
import { NotificationAlert } from "./components/notificationAlert/NotificationAlert";

export const App: React.FC = () => {
  const notifications = useAppSelector(createdNotificationSelector);
  const receivedNotification = useAppSelector(firstRecievedNotificationSelector);
  useSynchronizedLocalStorage(NOTIFICATION_KEY, notifications);

  return (
    <main>
      <CreateNotificationForm />
      <NotificationsList />
      {receivedNotification && <NotificationAlert>{receivedNotification.title}</NotificationAlert>}
    </main>
  );
};
