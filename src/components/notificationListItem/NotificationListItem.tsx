import React from "react";
import classes from "./notificationListItem.module.scss";
import { Button } from "../../ui/button/Button";
import { uniteClassNames } from "../../utils/uniteClassNames";

type NotificationListItemProps = {
  className?: string;
  onDelete(): void;
  children?: React.ReactNode;
};

export const NotificationListItem: React.FC<NotificationListItemProps> = ({ onDelete, children, className }) => {
  return (
    <li className={uniteClassNames(classes.item, className)}>
      <div>
        <span>{children}</span>
      </div>
      <Button onClick={onDelete}>Delete</Button>
    </li>
  );
};
