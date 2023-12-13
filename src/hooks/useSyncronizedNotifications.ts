import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { notificationSelector } from "../redux/services/notifications/notificationsSlice";
import { useSynchronizedLocalStorage } from "./useSynchronizedLocalStorage";
