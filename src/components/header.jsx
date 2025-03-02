import { Button } from "./ui/button";
import CV from "../assets/resume/simigiuAndreiCV.pdf";
import { Logo } from "./logo";
import { DownloadIcon, SunIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 grid place-items-center bg-neutral-900 px-2">
      <nav
        data-glow
        className="h-14 w-full max-w-6xl mx-auto rounded-[30px] flex items-center justify-between p-2 relative inner-shadow"
      >
        <div className="flex items-center justify-start gap-x-4">
          <div className="w-10 h-10 bg-[#262626] rounded-full grid place-items-center border border-neutral-600 shadow-sm shadow-neutral-950">
            <Logo />
          </div>
          <ul className="flex items-center justify-between gap-x-4">
            <li>
              <a
                href="#"
                className="grid place-items-center px-3 h-9 rounded-full text-sm font-semibold"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid place-items-center px-3 h-9 rounded-full text-sm font-semibold"
              >
                Meet Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid place-items-center px-3 h-9 rounded-full text-sm font-semibold"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid place-items-center px-3 h-9 rounded-full text-sm font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid place-items-center px-3 h-9 rounded-full text-sm font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <Button className="rounded-[30px] h-9 w-9 cursor-pointer bg-[#202020] hover:bg-[#262626] duration-150 transition-colors border border-[#202020] hover:border-neutral-700/50">
            <SunIcon className="size-4.5" />
          </Button>
          <Button
            asChild
            className="rounded-[30px] bg-gradient-to-b from-teal-800 to-teal-950 hover:opacity-95 transition-opacity duration-150"
          >
            <a href={CV} download>
              <DownloadIcon />
              Resume
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
