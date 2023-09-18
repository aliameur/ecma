import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { League_Gothic } from "next/font/google";
import localFont from "next/font/local";

const league = League_Gothic({ subsets: ["latin"], variable: "--font-league" });

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        className={`${league.variable} ${gilroy.variable}`}
      >
        <Component {...pageProps} />

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.69, -0.01, 0.27, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.48, 0.09, 0.27, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
