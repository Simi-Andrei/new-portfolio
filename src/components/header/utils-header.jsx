import { DownloadIcon, FileDownIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import CV from "../../assets/resume/simigiuAndreiCV.pdf";

export const UtilsHeader = () => {
  return (
    <div className="md:hidden h-14 bg-[#171717]">
      <div className="size-full flex items-center justify-end px-4 gap-x-4">
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
              CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
