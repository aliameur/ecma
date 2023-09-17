import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Test() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ clipPath: 'inset(0% 0% 0% 0%)' });
      await controls.start({ clipPath: 'inset(0% 100% 0% 0%)' });
      await controls.start({ clipPath: 'inset(0% 0% 0% 0%)' });
      await controls.start({ clipPath: 'inset(100% 0% 0% 0%)' });
    };
    sequence();
  }, [controls]);

  return (
    <div className="wife flowers border-love-my-wife flex justify-center items-center min-h-screen">
      <motion.div className='px-5 py-2 bg-red-600 rounded-full relative'>
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={controls}
          style={{
            border: '2px solid black',
            borderRadius: 'inherit',
            zIndex: -1
          }}
        />
        <span>Test Button</span>
      </motion.div>
    </div>
  );
}