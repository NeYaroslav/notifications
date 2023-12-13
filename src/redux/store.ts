import { configureStore } from "@reduxjs/toolkit";
import { notificationsSlice } from "./services/notifications/notificationsSlice";

export const store = configureStore({ reducer: { [notificationsSlice.name]: notificationsSlice.reducer } });

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
