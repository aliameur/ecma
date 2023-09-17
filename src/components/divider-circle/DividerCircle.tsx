import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { scaleUp, slideUp } from "@/config/motion";

interface DividerCircleProps {
  className?: string;
  delay?: number;
}

export const DividerCircle: FC<DividerCircleProps> = ({
  className,
  delay = 0 ,
}) => {
  return (
    <motion.div
      variants={scaleUp("all", delay)}
      initial="hidden"
      animate="show"
      className={twMerge("h-1.5 w-1.5 rounded-full bg-dark-200", className)}
    />
  );
};
