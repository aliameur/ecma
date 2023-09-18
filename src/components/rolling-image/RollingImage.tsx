import React, { FC } from "react";
import { motion } from "framer-motion";

interface RollingImageProps {
  src: string;
  delay: number;
}

export const RollingImage: FC<RollingImageProps> = ({src, delay}) => {
  return (
    <motion.img
      src={src}
      alt=""
      className="w-1/4 object-cover"
      initial={{ clipPath: "inset(100% 50% 0% 50%)" }}
      animate={{
        clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
      }}
      transition={{
        duration: 1,
        ease: [0.69, -0.01, 0.27, 1],
        delay: delay,
      }}
    />
  );
};
