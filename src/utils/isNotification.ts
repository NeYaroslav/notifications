import { Notification } from "../data/types";

export function isNotification(entity: unknown): entity is Notification {
  const isValidObject = typeof entity === "object" && entity != null;
  if (!isValidObject) return false;
  const isValidId = "id" in entity && typeof entity.id == "number";
  const isValidTitle = "title" in entity && typeof entity.title == "string";
  const isValidIsDisposable = "isDisposable" in entity && typeof entity.isDisposable === "boolean";

  return isValidId && isValidTitle && isValidIsDisposable;
}
