import React, { FC, ReactNode } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { longSlideUp, scaleUp, slideUp } from "@/config/motion";

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
    <div className="relative flex h-64 w-full overflow-hidden bg-dark-900 px-[60px]">
      <div className="flex w-32 flex-col items-center justify-center">
        <p className="text-dark-150 flex overflow-hidden font-league text-3xl leading-[23px]">
          <motion.span
            variants={slideUp(0.1 * number + 0.05)}
            initial="hidden"
            animate="show"
            className="flex"
          >
            0{number}
          </motion.span>
        </p>
        <motion.div
          variants={scaleUp("x", 0.1 * number, 0)}
          initial="hidden"
          animate="show"
          className="bg-dark-150 mt-4 h-[3px] w-4"
        />
      </div>
      <div className="flex min-w-[310px] shrink-0 items-center justify-center">
        <h3 className="shrink-0 overflow-hidden font-league text-[150px] uppercase leading-[115px] tracking-[-2.55px] text-white">
          <motion.span
            variants={slideUp(0.1 * number + 0.1)}
            initial="hidden"
            animate="show"
            className="flex"
          >
            {title}
          </motion.span>
        </h3>
      </div>
      <div className="flex w-1/3 items-center gap-4 px-12">
        <div className="relative my-auto h-16 w-16 shrink-0 rounded-full border-[3px] border-transparent">
          <motion.div
            className="absolute -inset-0.5 z-50 rounded-full border-[3px] border-dark-200"
            initial={{ clipPath: "inset(100% 50% 0% 50%)" }}
            transition={{ duration: 1, delay: 0.1 + 0.1 * number }}
            animate={{
              clipPath: [
                "inset(100% 25% 0% 25%)",
                "inset(65% 25% 0% 25%)",
                "inset(50% 0% 0% 0%)",
                "inset(0% 0% 0% 0%)",
              ],
            }}
          />
          <div className="h-full w-full overflow-hidden rounded-full p-4">
            <motion.div
              variants={longSlideUp(0.1 * number + 0.1)}
              initial="hidden"
              animate="show"
              className="h-full w-full"
            >
              {icon}
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.15 + 0.1 * number,
            ease: [0.69, -0.01, 0.27, 1],
          }}
          className="shrink font-gilroy font-extrabold text-dark-100"
        >
          {description}
        </motion.p>
      </div>
      <div className="my-auto ml-auto mr-8 flex max-w-[300px] flex-wrap gap-2">
        {labels}
      </div>
      <div className="relative my-auto h-20 w-20 shrink-0 rounded-full border-2 border-transparent">
        <motion.div
          className="absolute -inset-0.5 z-50 rounded-full border-2 border-dark-200/50"
          initial={{ clipPath: "inset(50% 100% 50% 0%)" }}
          transition={{ duration: 1, delay: 0.1 + 0.1 * number }}
          animate={{
            clipPath: [
              "inset(50% 100% 50% 0%)",
              "inset(25% 65% 25% 0%)",
              "inset(0% 50% 0% 0%)",
              "inset(0% 0% 0% 0%)",
            ],
          }}
        />
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0.1 * number + 0.4,
              ease: [0.69, -0.01, 0.27, 1],
            }}
          >
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute inset-[10%] bg-dark-150 pointer-events-none"
        initial={{
          // background: "white",
          filter: "blur(1200px)",
          opacity: 0,
        }}
        animate={{ opacity: 0.4 }}
        transition={{
          duration: 1,
          ease: [0.69, -0.01, 0.27, 1],
          delay: 0.1 * number + 0.1,
        }}
      />
    </div>
  );
};
