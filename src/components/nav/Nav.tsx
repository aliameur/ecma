import Link from "next/link";
import { Logo } from "@/components/logo";
import { DividerCircle } from "@/components/divider-circle";

export const Nav = () => {
  return (
    <nav className="px-[60px] absolute flex h-32 w-full items-center justify-between z-50">
      <Logo />
      <div className="flex items-center gap-x-20 pr-24">
        <Link
          href="/"
          className="font-gilroy text-lg font-extrabold uppercase text-white"
        >
          Masterclasses
        </Link>
        <DividerCircle />
        <Link
          href="/"
          className="font-gilroy text-lg font-extrabold uppercase text-white"
        >
          Courses
        </Link>
        <DividerCircle />
        <Link
          href="/"
          className="font-gilroy text-lg font-extrabold uppercase text-white"
        >
          Prices
        </Link>
      </div>
    </nav>
  );
};
