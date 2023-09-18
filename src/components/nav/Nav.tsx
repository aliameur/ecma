import Link from "next/link";
import { Logo } from "@/components/logo";
import { DividerCircle } from "@/components/divider-circle";
import { motion } from "framer-motion";
import { slideUp } from "@/config/motion";
import { FC, ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
  inactive?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ children, href, inactive }) => {
  return (
    <Link
      href={href}
      className={`overflow-hidden font-gilroy text-lg font-extrabold uppercase leading-[15px] text-white ${
        inactive ? "cursor-not-allowed" : ""
      }`}
    >
      <motion.span
        variants={slideUp(0.15)}
        initial="hidden"
        animate="show"
        className="flex"
        whileHover="hover"
      >
        {children}
      </motion.span>
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="absolute z-50 flex h-32 w-full items-center justify-between px-[60px]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-20 pr-24">
        <NavLink href="/masterclass">Masterclass</NavLink>
        <DividerCircle delay={0.25} />
        <NavLink href="/courses">Courses</NavLink>
        <DividerCircle delay={0.25} />
        <NavLink inactive href="/">
          Prices
        </NavLink>
      </div>
    </nav>
  );
};
