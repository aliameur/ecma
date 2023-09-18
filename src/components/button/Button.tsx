import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { scaleUp, slideUp } from "@/config/motion";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  type?: "primary" | "secondary";
  delay: number;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = "primary",
  delay,
  icon,
}) => {
  return (
    <button
      className={twMerge(
        "relative flex h-20 items-center gap-2.5 rounded-full px-10 font-league tracking-[3.84px]",
        type === "secondary" ? "pl-8 text-dark-100" : "",
      )}
    >
      {type === "primary" && (
        <motion.div
          className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-[#79b99e] to-[#48a49e]"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: delay + 0.1,
            ease: [0.69, -0.01, 0.27, 1],
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 z-0 rounded-full border-2 border-[#48a49e]"
        initial={{ clipPath: "inset(0% 50% 100% 50%)" }}
        transition={{ duration: 1, delay: delay, ease: [0.69, -0.01, 0.27, 1] }}
        animate={{
          clipPath: [
            "inset(0% 50% 100% 50%)",
            "inset(0% 25% 65% 25%)",
            "inset(0% 0% 50% 0%)",
            "inset(0% 0% 0% 0%)",
          ],
        }}
      />
      {icon && (
        <motion.div
          variants={scaleUp("all", delay)}
          initial="hidden"
          animate="show"
        >
          {icon}
        </motion.div>
      )}
      <div className="overflow-hidden text-[24px] leading-[20px]">
        <motion.span
          variants={slideUp(delay)}
          initial="hidden"
          animate="show"
          className="relative z-20 flex"
        >
          {children}
        </motion.span>
      </div>
    </button>
  );
};
