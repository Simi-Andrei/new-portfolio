import { ButterflyContainer } from "../butterfly/butterfly-container";
import { CatContainer } from "../cat/cat-container";
import { KangarooContainer } from "../kangaroo/kangaroo-container";
import { RedDot } from "../red-dot";
import { TealDot } from "../teal-dot";
import { Separator } from "../ui/separator";
import { YellowDot } from "../yellow-dot";

export const TechStackMobile = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 shrink-0 lg:hidden">
      <div className="flex items-center justify-start gap-x-4">
        <div className="inner-shadow shadow-md shadow-black/50 border-2 border-[#525252] dark:bg-[#262626] dark:border-[#404040] rounded-[30px]">
          <CatContainer />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-start gap-x-2">
            <RedDot />
            <span className="font-medium">Curiosity</span>
          </div>
          <p className="text-[0.9rem]">
            Is what drives me to explore new technologies, experiment with
            ideas, and continuously improve my craft.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-start gap-x-4">
        <div className="inner-shadow shadow-md shadow-black/50 border-2 border-[#525252] dark:bg-[#262626] dark:border-[#404040] rounded-[30px]">
          <KangarooContainer />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-start gap-x-2">
            <YellowDot />
            <span className="font-medium">Ambition</span>
          </div>
          <p className="text-[0.9rem]">
            Ambition is the force behind every project I build. I strive to
            create scalable, high-performance applications that not only meet
            but exceed expectations.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-start gap-x-4">
        <div className="inner-shadow shadow-md shadow-black/50 border-2 border-[#525252] dark:bg-[#262626] dark:border-[#404040] rounded-[30px]">
          <ButterflyContainer />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-start gap-x-2">
            <TealDot />
            <span className="font-medium">Passion</span>
          </div>
          <p className="text-[0.9rem]">
            At the heart of everything I do is passion. I love writing clean,
            maintainable code, solving complex problems, and seeing a project
            come to life.
          </p>
        </div>
      </div>
    </div>
  );
};
