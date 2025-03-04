import { ButterflyContainer } from "@/components/butterfly/butterfly-container";
import { CatContainer } from "@/components/cat/cat-container";
import { KangarooContainer } from "@/components/kangaroo/kangaroo-container";
import { RedDot } from "@/components/red-dot";
import { TealDot } from "@/components/teal-dot";
import { Separator } from "@/components/ui/separator";
import { Welcome } from "@/components/meetMe/welcome";
import { WelcomeMobile } from "@/components/meetMe/welcome-mobile";
import { YellowDot } from "@/components/yellow-dot";
import { TechStack } from "@/components/meetMe/tech-stack";
import { TechStackMobile } from "@/components/meetMe/tech-stack-mobile";

export const MeetMeSection = () => {
  return (
    <div className="py-10 px-4 xl:px-0 my-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-4">
        <Welcome />
        <WelcomeMobile />
        <Separator orientation="vertical" className="hidden lg:block" />
        <TechStack />
        <TechStackMobile />
      </div>
    </div>
  );
};
