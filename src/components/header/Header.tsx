"use client";
import { Label } from "@/components/label";
import { Selector } from "@/components/selector";
import { AnimationIcon, FilmIcon, MotionIcon, ThreeDIcon } from "@/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  TvIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { slideUp } from "@/config/motion";
import { IconCircle } from "@/components/icon-circle";

export const Header = () => {
  const [current, setCurrent] = useState(2);

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
            <Label icon={<FilmIcon className="h-full w-full" />} delay={0.1}>
              Full Trailer
            </Label>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-end pr-24">
          <p className="mb-9 mt-9 shrink-0 overflow-hidden font-gilroy font-extrabold uppercase leading-[14px] tracking-[5.17px] text-white">
            <motion.span
              variants={slideUp(0.1)}
              animate="show"
              initial="hidden"
              className="flex"
            >
              revolutionize your art
            </motion.span>
          </p>
          <div className="relative mb-8 font-league text-[242px] uppercase leading-[180px] tracking-[-4.84px] text-white">
            <h1 className="overflow-hidden">
              <motion.span
                variants={slideUp(0.05)}
                animate="show"
                initial="hidden"
                className="flex"
              >
                ANIMATE
              </motion.span>
            </h1>
            <ChevronRightIcon
              className="absolute right-0 top-1/2 h-8 w-8 -translate-y-7 translate-x-20 cursor-pointer text-dark-200 duration-300 ease-in-out hover:scale-105 hover:text-dark-100 active:scale-95 active:text-dark-200"
              onClick={increment}
            />
          </div>
          <div className="mb-8 mt-4 flex gap-16">
            <IconCircle divider delay={0.15} delay2={0.35}>
              <LightBulbIcon className="text-white" />
            </IconCircle>
            <IconCircle divider delay={0.2} delay2={0.15}>
              <TvIcon className="text-white" />
            </IconCircle>
            <IconCircle delay={0.25}>
              <CpuChipIcon className="text-white" />
            </IconCircle>
          </div>
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.69, -0.01, 0.27, 1],
            }}
            className="max-w-[400px] text-right font-gilroy text-[26px] font-extrabold text-dark-100"
          >
            Master basic 3D Principles and lay the foundation for the future
          </motion.p>
          <div className="mt-auto flex space-x-2">
            <Label
              icon={<AnimationIcon className="h-full w-full" />}
              delay={0.1}
            >
              animation
            </Label>
            <Label icon={<MotionIcon className="h-full w-full" />} delay={0.1}>
              motion graphics
            </Label>
            <Label icon={<ThreeDIcon className="h-full w-full" />} delay={0.1}>
              3d animation
            </Label>
          </div>
        </div>
      </div>
    </header>
  );
};
