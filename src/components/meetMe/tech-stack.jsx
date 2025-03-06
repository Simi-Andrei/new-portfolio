import { ButterflyContainer } from "../butterfly/butterfly-container";
import { CatContainer } from "../cat/cat-container";
import { KangarooContainer } from "../kangaroo/kangaroo-container";
import { RedDot } from "../red-dot";
import { TealDot } from "../teal-dot";
import { Separator } from "../ui/separator";
import { YellowDot } from "../yellow-dot";

export const TechStack = () => {
  return (
    <div className="flex-1 flex-col justify-between shrink-0 hidden lg:flex h-[28rem]">
      <div className="flex items-center justify-start gap-x-4">
        <div
          data-glow
          className="inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950"
        >
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
        <div
          data-glow
          className="inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950"
        >
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
        <div
          data-glow
          className="inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950"
        >
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
