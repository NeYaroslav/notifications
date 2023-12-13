import path from "./icons.sprite.svg";
import React from "react";

type IconProps = {
  className?: string;
  name: string;
};

export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  return (
    <svg {...rest}>
      <use href={`${path}#${name}`} />
    </svg>
  );
};
