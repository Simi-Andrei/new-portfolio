import { BriefcaseIcon, HandIcon, MailIcon } from "lucide-react";
import { Logo } from "../logo";
import { PiLadderSimpleBold } from "react-icons/pi";
import { Button } from "../ui/button";

export const MobileHeader = () => {
  return (
    <header className="fixed bottom-0 left-0 w-full h-24 grid place-items-center p-4 bg-transparent md:hidden z-50">
      <nav className="bg-[#ededed] dark:bg-[#262626] size-full flex items-center justify-between gap-x-2 px-2 border-2 border-[#a1a1a1] dark:border-[#404040] rounded-[30px]  inner-shadow shadow dark:shadow-neutral-950">
        <Logo />
        <Button
          asChild
          variant="ghost"
          className="[&_svg:not([class*='size-'])]:size-5"
        >
          <a href="#">
            <HandIcon />
          </a>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="[&_svg:not([class*='size-'])]:size-5"
        >
          <a href="#">
            <PiLadderSimpleBold />
          </a>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="[&_svg:not([class*='size-'])]:size-5"
        >
          <a href="#">
            <BriefcaseIcon />
          </a>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="[&_svg:not([class*='size-'])]:size-5"
        >
          <a href="#">
            <MailIcon />
          </a>
        </Button>
      </nav>
    </header>
  );
};
