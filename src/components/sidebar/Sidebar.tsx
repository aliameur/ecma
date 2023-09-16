import { FacebookIcon, MenuIcon, TwitterIcon } from "@/icons";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { DividerCircle } from "@/components/divider-circle";

export const Sidebar = () => {
  return (
    <div className="h-full min-h-screen w-32 z-50 shadow-2xl">
      <div className="fixed right-0 flex h-screen w-32 flex-col items-center justify-between bg-dark-400 py-[60px] z-50 shadow-2xl">
        <MenuIcon className="cursor-pointer stroke-teal" />
        <div className="flex flex-col items-center gap-y-8 py-10">
          <TwitterIcon className="fill-teal" />
          <DividerCircle />
          <YoutubeIcon className="fill-teal" />
          <DividerCircle />
          <FacebookIcon className="fill-teal" />
        </div>
      </div>
    </div>
  );
};
