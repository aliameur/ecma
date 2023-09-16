import { HTMLProps } from "react";

export const MenuIcon = (props: HTMLProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="31"
      height="19"
      viewBox="0 0 31 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 2H29.5M1.5 9.5H29.5M1.5 17H29.5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
