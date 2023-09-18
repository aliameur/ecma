import React from "react";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { longSlideUp, slideUp } from "@/config/motion";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { AnimationIcon, MotionIcon, ThreeDIcon } from "@/icons";
import { Button } from "@/components/button";
import { RollingImage } from "@/components/rolling-image";

export default function Masterclass() {
  return (
    <Layout>
      <div className="min-h-screen bg-dark-400 text-white">
        <div className="ml-auto flex min-h-screen w-3/5 flex-col items-start bg-dark-900 pl-[82px] pr-24 pt-32">
          <p className="mb-5 shrink-0 overflow-hidden font-gilroy font-extrabold uppercase leading-[14px] tracking-[5.17px] text-white">
            <motion.span
              variants={slideUp(0.1)}
              animate="show"
              initial="hidden"
              className="flex"
            >
              revolutionize your art
            </motion.span>
          </p>
          <div className="relative mb-5 font-league text-[210px] uppercase leading-[160px] tracking-[-4.2px] text-white">
            <h1 className="-translate-x-2 overflow-hidden">
              <motion.span
                variants={slideUp(0.05)}
                animate="show"
                initial="hidden"
                className="flex"
              >
                DESIGN
              </motion.span>
            </h1>
          </div>
          <div className="relative flex w-[400px] items-center gap-4 overflow-y-hidden">
            <div className="relative my-auto h-16 w-16 shrink-0 rounded-full border-[3px] border-transparent duration-200 ease-in-out group-hover:opacity-0">
              <motion.div
                className="absolute -inset-0.5 z-50 rounded-full border-[3px] border-dark-200"
                initial={{ clipPath: "inset(100% 50% 0% 50%)" }}
                transition={{ duration: 1, delay: 0.1 + 0.1 }}
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
                  variants={longSlideUp(0.1)}
                  initial="hidden"
                  animate="show"
                  className="h-full w-full"
                >
                  <LightBulbIcon className="h-full w-full text-gold" />
                </motion.div>
              </div>
            </div>
            <div className="duration-200 group-hover:opacity-0">
              <motion.p
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + 0.1,
                  ease: [0.69, -0.01, 0.27, 1],
                }}
                className="shrink font-gilroy font-extrabold text-dark-100"
              >
                Modeling, lighting, animation, and many other important topics
                for 3D
              </motion.p>
            </div>
          </div>
          <div className="my-5 flex gap-4">
            <Button delay={0.1}>REGISTER NOW</Button>
            <Button delay={0.1} type="secondary" icon={<PlayIcon className="h-6 w-6 text-dark-100" />}>
              WATCH INTRO NOW
            </Button>
          </div>
          <motion.div
            className="h-40 w-[120%] -translate-x-[25%] overflow-hidden bg-dark-200 p-2"
            initial={{ clipPath: "inset(100% 50% 0% 50%)" }}
            animate={{
              clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
            }}
            transition={{
              duration: 1,
              ease: [0.69, -0.01, 0.27, 1],
              delay: 0.1,
            }}
          >
            <div className="flex h-full w-full">
              <RollingImage src="/masterclass 1.png" delay={0.2} />
              <RollingImage src="/masterclass 2.png" delay={0.3} />
              <RollingImage src="/masterclass 3.png" delay={0.4} />
              <RollingImage src="/masterclass 4.png" delay={0.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
