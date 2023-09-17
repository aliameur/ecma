import { Variants } from "framer-motion";

export const slideUp = (delay: number): Variants => ({
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: [0.69, -0.01, 0.27, 1], delay: delay },
  },
});

export const longSlideUp = (delay: number): Variants => ({
  hidden: { y: "200%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: [0.69, -0.01, 0.27, 1], delay: delay },
  },
});

export const scaleUp = (
  direction: "all" | "x",
  delay: number,
  initialX?: string | number,
): Variants => ({
  hidden: {
    scale: direction === "all" ? "0%" : undefined,
    scaleX: direction === "x" ? "0%" : undefined,
    x: direction === "x" ? initialX ?? "100%" : undefined,
    opacity: 0.5,
    transformOrigin: direction === "all" ? "center%" : "left",
  },
  show: {
    scale: direction === "all" ? "100%" : undefined,
    scaleX: direction === "x" ? "100%" : undefined,
    opacity: 1,
    transition: { duration: 1, ease: [0.69, -0.01, 0.27, 1], delay: delay },
  },
});

export const staggerScaleX = (delay: number): Variants => ({
  hidden: {
    scaleX: "0%",
    transformOrigin: "left",
  },
  show: (i) => ({
    scaleX: "100%",
    transition: {
      duration: 0.15,
      ease:
        i === 0
          ? [0.73, 0, 0.99, 0.99]
          : i === 3
          ? [0, -0.01, 0.09, 0.99]
          : "linear",
      delay: i * 0.15 + delay,
    },
  }),
});
