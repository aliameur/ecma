import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { scaleUp } from "@/config/motion";

interface IconCircleProps {
  delay: number;
  delay2?: number;
  children: ReactNode;
  divider?: boolean;
}

export const IconCircle: FC<IconCircleProps> = ({
  delay,
  delay2 = 0,
  children,
  divider,
}) => {
  return (
    <motion.div
      variants={scaleUp("all", delay)}
      initial="hidden"
      animate="show"
      className="relative h-16 w-16 rounded-full border-[3px] border-dark-200 p-4"
    >
      <motion.div
        variants={scaleUp("all", delay + 0.1)}
        initial="hidden"
        animate="show"
        className="h-full w-full"
      >
        {children}
      </motion.div>
      {divider && (
        <motion.div
          variants={scaleUp("x", delay + delay2)}
          initial="hidden"
          animate="show"
          className="absolute right-0 top-1/2 h-[3px] w-[70px] -translate-y-1/2 translate-x-full bg-dark-200"
        />
      )}
    </motion.div>
  );
};