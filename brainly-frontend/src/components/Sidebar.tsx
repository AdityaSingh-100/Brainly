import { LogoIcon } from "../icons/Logo";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SideBarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-76 absolute left-0 top-0 pl-6">
      <div className="flex text-2xl pt-6 items-center">
        <div className="pr-2 text-purple-600">
          <LogoIcon />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-4">
        <SidebarItem text="X" icon={<XIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
