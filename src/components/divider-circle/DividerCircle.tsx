import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface DividerCircleProps {
  className?: string;
}

export const DividerCircle: FC<DividerCircleProps> = ({ className = "" }) => {
  return (
    <div
      className={twMerge("h-1.5 w-1.5 rounded-full bg-dark-200", className)}
    />
  );
};
