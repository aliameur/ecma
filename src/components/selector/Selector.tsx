"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface SelectorProps {
  current: number;
}

export const Selector: FC<SelectorProps> = ({ current }) => {
  return (
    <div className="pt-32">
      <div className="flex items-end space-x-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={`selector-${idx}`}
            className="relative h-1 w-12 rounded-full bg-dark-200/50"
          >
            {idx === current - 1 && (
              <>
                <motion.div
                  key={`selector-${idx}`}
                  className="bg-gold h-1 w-12 rounded-full opacity-100"
                  layoutId="selector-gold"
                />
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-32 text-[64px] leading-none text-white"
                >
                  0{current}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
