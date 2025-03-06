import { Separator } from "@/components/ui/separator";
import { Welcome } from "@/components/meetMe/welcome";
import { WelcomeMobile } from "@/components/meetMe/welcome-mobile";
import { TechStack } from "@/components/meetMe/tech-stack";
import { TechStackMobile } from "@/components/meetMe/tech-stack-mobile";

export const MeetMeSection = () => {
  return (
    <div id="meetMe" className="py-10 px-4 xl:px-0 my-10">
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
