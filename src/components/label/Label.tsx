import React, { FC, ReactNode } from "react";
import { scaleUp, slideUp } from "@/config/motion";
import { motion } from "framer-motion";

interface LabelProps {
  children: ReactNode;
  icon: ReactNode;
  delay: number;
}

export const Label: FC<LabelProps> = ({ children, icon, delay }) => {
  return (
    <div className="relative flex items-center gap-2.5 rounded-full border-2 border-transparent px-5 py-4 font-gilroy text-base font-extrabold uppercase leading-none text-dark-200">
      <motion.div
        className="absolute -inset-0.5 z-50 rounded-full border-2 border-dark-200/50"
        initial={{ clipPath: "inset(0% 50% 100% 50%)" }}
        transition={{ duration: 1, delay: delay }}
        animate={{
          clipPath: [
            "inset(0% 50% 100% 50%)",
            "inset(0% 25% 65% 25%)",
            "inset(0% 0% 50% 0%)",
            "inset(0% 0% 0% 0%)",
          ],
        }}
      />
      <motion.div
        className="flex h-5 w-5 items-center justify-center"
        variants={scaleUp("all", delay)}
        initial="hidden"
        animate="show"
      >
        {icon}
      </motion.div>
      <div className="overflow-hidden">
        <motion.span
          variants={slideUp(delay)}
          initial="hidden"
          animate="show"
          className="flex"
        >
          {children}
        </motion.span>
      </div>
    </div>
  );
};
