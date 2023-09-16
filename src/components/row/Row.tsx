import { FC, ReactNode } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface RowProps {
  number: number;
  title: string;
  description: string;
  labels: ReactNode;
  icon: ReactNode;
}

export const Row: FC<RowProps> = ({
  number,
  title,
  description,
  labels,
  icon,
}) => {
  return (
    <div className="flex h-64 w-full bg-dark-900 px-[60px]">
      <div className="flex flex-col items-center justify-center w-32">
        <span className="text-dark-150 font-league text-3xl">0{number}</span>
        <div className="bg-dark-150 mt-4 h-[3px] w-4" />
      </div>
      <div className="flex items-center justify-center shrink-0 min-w-[310px]">
        <h3 className="shrink-0 font-league text-[150px] uppercase leading-none tracking-[-2.55px] text-white">
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-4 px-12 w-1/3">
        <div className="my-auto h-16 w-16 rounded-full border-[3px] border-dark-200 p-4 shrink-0">
          {icon}
        </div>
        <p className="shrink font-gilroy font-extrabold text-dark-100">
          {description}
        </p>
      </div>
      <div className="my-auto flex flex-wrap gap-2 mr-8 max-w-[300px] ml-auto">{labels}</div>
      <div className="my-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-dark-200">
        <ChevronRightIcon className="h-8 w-8 text-dark-200" />
      </div>
    </div>
  );
};
