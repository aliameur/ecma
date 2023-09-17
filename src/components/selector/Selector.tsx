import { FC } from "react";
import { motion } from "framer-motion";
import { scaleUp, slideUp, staggerScaleX } from "@/config/motion";

interface SelectorProps {
  current: number;
}

export const Selector: FC<SelectorProps> = ({ current }) => {
  return (
    <div className="pt-32">
      <div className="flex items-end space-x-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <motion.div
            custom={idx}
            variants={staggerScaleX(0.1)}
            initial="hidden"
            animate="show"
            key={`selector-${idx}`}
            className="relative h-1 w-12 rounded-full bg-dark-200/50"
          >
            {idx === current - 1 && (
              <>
                <motion.div
                  variants={scaleUp("x", 0.5, 0)}
                  initial="hidden"
                  animate="show"
                  key={`selector-${idx}`}
                  className="h-1 w-12 rounded-full bg-gold opacity-100"
                  layoutId="selector-gold"
                />
                <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 -translate-y-28 overflow-hidden text-[64px] leading-[50px] text-white">
                  <motion.span
                    variants={slideUp(0.15)}
                    initial="hidden"
                    animate="show"
                    className="flex"
                  >
                    0{current}
                  </motion.span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
