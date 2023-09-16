import React, { FC, ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  icon: ReactNode;
}

export const Label: FC<LabelProps> = ({ children, icon }) => {
  return (
    <div className="font-gilroy flex items-center gap-2.5 rounded-full border-2 border-dark-200 border-opacity-50 px-5 py-4 text-base font-extrabold uppercase leading-none text-dark-200">
      <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
      {children}
    </div>
  );
};
