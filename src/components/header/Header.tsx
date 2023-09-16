import { Label } from "@/components/label";
import { Selector } from "@/components/selector";
import { AnimationIcon, FilmIcon, MotionIcon, ThreeDIcon } from "@/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  LightBulbIcon,
  TvIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  const [current, setCurrent] = useState(4);

  const decrement = () => {
    if (current > 1) setCurrent((current) => current - 1);
  };

  const increment = () => {
    if (current < 4) setCurrent((current) => current + 1);
  };

  return (
    <header className="relative h-screen bg-dark-900 px-[60px] py-12 pt-32 font-league">
      <div className="gradient-01" />
      <div className="flex h-full">
        <div className="flex flex-col items-start pt-32">
          <div className="flex space-x-10 pt-1.5">
            <ChevronLeftIcon
              className="z-50 mt-4 h-8 w-8 cursor-pointer text-dark-200 duration-300 ease-in-out hover:scale-105 hover:text-dark-100 active:scale-95 active:text-dark-200"
              onClick={decrement}
            />
            <Selector current={current} />
          </div>
          <div className="mt-auto">
            <Label icon={<FilmIcon className="h-full w-full" />}>
              Full Trailer
            </Label>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-end pr-24">
          <p className="mt-8 font-gilroy font-extrabold uppercase tracking-[5.17px] text-white">
            revolutionize your art
          </p>
          <h1 className="relative font-league text-[242px] uppercase leading-none tracking-[-4.84px] text-white">
            ANIMATE
            <ChevronRightIcon
              className="absolute right-0 top-1/2 h-8 w-8 -translate-y-7 translate-x-20 cursor-pointer text-dark-200 duration-300 ease-in-out hover:scale-105 hover:text-dark-100 active:scale-95 active:text-dark-200"
              onClick={increment}
            />
          </h1>
          <div className="mb-8 mt-4 flex gap-16">
            <div className="horizontal-divider h-16 w-16 rounded-full border-[3px] border-dark-200 p-4">
              <LightBulbIcon className="text-white" />
            </div>
            <div className="horizontal-divider h-16 w-16 rounded-full border-[3px] border-dark-200 p-4">
              <TvIcon className="text-white" />
            </div>
            <div className="h-16 w-16 rounded-full border-[3px] border-dark-200 p-4">
              <CpuChipIcon className="text-white" />
            </div>
          </div>
          <p className="font-gilroy text-[26px] font-extrabold text-dark-100">
            Master basic 3D Principles and
          </p>
          <div className="mt-auto flex space-x-2">
            <Label icon={<AnimationIcon className="h-full w-full" />}>
              animation
            </Label>
            <Label icon={<MotionIcon className="h-full w-full" />}>
              motion graphics
            </Label>
            <Label icon={<ThreeDIcon className="h-full w-full" />}>
              3d animation
            </Label>
          </div>
        </div>
      </div>
    </header>
  );
};
