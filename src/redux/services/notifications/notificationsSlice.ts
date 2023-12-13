import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { isNotification } from "../../../utils/isNotification";
import { Notification } from "../../../data/types";
import { NOTIFICATION_KEY } from "../../../data/variables";

type InitialState = { receivedNotification: Notification[]; createdNotification: Notification[] };

const storedValue = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) as string);
const IsStoredValueNotificationArr = Array.isArray(storedValue) && storedValue.every(isNotification);

const receivedNotifications: Notification[] =
  IsStoredValueNotificationArr && storedValue.length
    ? storedValue
    : [{ id: 1, isDisposable: true, title: "Create notifications and reload the page to receive them" }];

const initialState: InitialState = {
  receivedNotification: receivedNotifications,
  createdNotification: receivedNotifications.filter((receivedNotification) => !receivedNotification.isDisposable),
};

export const notificationsSlice = createSlice({
  initialState: initialState,
  name: NOTIFICATION_KEY,
  reducers: {
    deleteNotification(state, { payload }: PayloadAction<Notification["id"]>) {
      state.createdNotification = state.createdNotification.filter((notification) => notification.id !== payload);
    },
    createNotification(state, { payload }: PayloadAction<Pick<Notification, "title" | "isDisposable">>) {
      const lastNotificationId = state.createdNotification.at(-1)?.id;
      state.createdNotification.push({ id: lastNotificationId ? lastNotificationId + 1 : 1, ...payload });
    },
    removeFirstReceivedNotification(state) {
      state.receivedNotification.shift();
    },
  },
});

export const createdNotificationSelector = (state: AppState) => state.notifications.createdNotification;
export const firstRecievedNotificationSelector = (state: AppState) => state.notifications.receivedNotification[0];
export const notificationActions = notificationsSlice.actions;
