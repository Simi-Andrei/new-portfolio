import { Button } from "../ui/button";
import CV from "../../assets/resume/simigiuAndreiCV.pdf";
import { Logo } from "../logo";
import { DownloadIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className="h-20 place-items-center px-2 hidden md:grid fixed top-0 left-0 w-full z-50 backdrop-blur-xl">
      <nav
        data-glow
        className="h-14 w-full max-w-6xl mx-auto flex items-center justify-between p-2 relative inner-shadow shadow dark:shadow-neutral-950"
      >
        <div className="flex items-center justify-start gap-x-4">
          <Logo />
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
          <Button
            onClick={toggleDarkMode}
            className="rounded-[30px] h-9 w-9 cursor-pointer bg-[#ededed] dark:bg-[#262626] text-neutral-800 hover:bg-[#ededed] dark:text-[#ededed] shadow-none group"
          >
            {isDarkMode ? (
              <SunIcon className="size-4.5" />
            ) : (
              <MoonIcon className="size-4.5" />
            )}
          </Button>
          <Button
            asChild
            className="rounded-[30px] bg-gradient-to-b from-teal-800 to-teal-950 hover:opacity-95 transition-opacity duration-150 text-[#ededed]"
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
