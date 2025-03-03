import { DownloadIcon, FileDownIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import CV from "../../assets/resume/simigiuAndreiCV.pdf";
import { useState } from "react";

export const UtilsHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="md:hidden h-14 bg-[#ededed] dark:bg-[#171717]">
      <div className="size-full flex items-center justify-end px-4 gap-x-4">
        <div className="flex items-center justify-between gap-x-4">
          <Button
            onClick={toggleDarkMode}
            className="rounded-[30px] h-9 w-9 cursor-pointer bg-[#ededed] dark:bg-[#171717] md:dark:bg-[#262626] text-neutral-800 hover:bg-[#ededed] dark:text-[#ededed] shadow-none group"
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
      </div>
    </div>
  );
};
