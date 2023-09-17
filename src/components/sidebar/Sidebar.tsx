import { motion } from "framer-motion";
import { FacebookIcon, MenuIcon, TwitterIcon } from "@/icons";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { DividerCircle } from "@/components/divider-circle";
import { scaleUp } from "@/config/motion";

export const Sidebar = () => {
  return (
    <div className="z-50 h-full min-h-screen w-32 shadow-2xl">
      <div className="fixed right-0 z-50 flex h-screen w-32 flex-col items-center justify-between bg-dark-400 py-[60px] shadow-2xl">
        <MenuIcon className="cursor-pointer stroke-teal" />
        <div className="flex flex-col items-center gap-y-8 py-10">
          <motion.div
            variants={scaleUp("all", 0.1)}
            initial="hidden"
            animate="show"
          >
            <TwitterIcon className="fill-teal" />
          </motion.div>
          <DividerCircle delay={0.1} />
          <motion.div
            variants={scaleUp("all", 0.1)}
            initial="hidden"
            animate="show"
          >
            <YoutubeIcon className="fill-teal" />
          </motion.div>
          <DividerCircle delay={0.1} />
          <motion.div
            variants={scaleUp("all", 0.1)}
            initial="hidden"
            animate="show"
          >
            <FacebookIcon className="fill-teal" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
