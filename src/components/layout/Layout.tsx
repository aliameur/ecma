import { FC, ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { Nav } from "@/components/nav";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className='grow relative'>
        <Nav />
        {children}
      </div>
      <Sidebar />
    </div>
  );
};
