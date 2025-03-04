import { HandIcon, MessageCircleMoreIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BrainContainer } from "@/components/brain/brain-container";
import { CodeIcon } from "@/components/code/code-icon";

export const OverviewSection = () => {
  return (
    <div
      id="overview"
      className="w-full rounded-[30px] py-10 pb-24 md:pb-10 px-2 md:px-10 h-[calc(100vh-56px)] md:h-[calc(100vh-80px)] md:mt-2 flex flex-col justify-evenly max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:flex-1 flex flex-col items-start justify-center h-full gap-y-0 md:gap-y-2 cursor-default order-2 md:order-1">
          <p className="text-xl lg:text-3xl font-medium text-center md:text-left w-full">
            Hello there! I&apos;m
          </p>
          <h2 className="font-extrabold text-5xl lg:text-6xl bg-gradient-to-b from-teal-700 via-teal-800 to-teal-950 dark:from-teal-500 dark:via-teal-700 dark:to-teal-950 bg-clip-text text-transparent py-2 text-center md:text-left">
            Andrei Simigiu
          </h2>
          <div className="text-3xl lg:text-4xl font-medium flex items-center justify-center gap-x-2 w-full md:justify-start">
            <CodeIcon />
            <span>Web Developer</span>
          </div>
          <div className="flex items-center justify-center gap-x-4 mt-8 w-full md:justify-start">
            <Button
              className="rounded-[30px] bg-gradient-to-b from-neutral-200 to-neutral-300 text-neutral-900 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-none group"
              asChild
            >
              <a href="#">
                Meet Me
                <HandIcon className="group-hover:text-rose-700 dark:group-hover:text-teal-800 group-hover:scale-110 duration-150" />
              </a>
            </Button>
            <Separator orientation="vertical" className="!h-6 bg-neutral-600" />
            <Button
              className="rounded-[30px] bg-gradient-to-b from-neutral-700 to-neutral-800 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-none group text-[#ededed]"
              asChild
            >
              <a href="#">
                Let's Talk
                <MessageCircleMoreIcon className="group-hover:text-rose-700 dark:group-hover:text-teal-800 group-hover:scale-110 duration-150" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:flex-1 rounded-[30px] flex flex-col items-center justify-center gap-y-6 cursor-default order-1 md:order-2">
          <BrainContainer />
        </div>
      </div>

      <div className="order-3 py-10 grid place-items-center">
        <p className="text-muted-foreground text-sm">
          Web developer with passion for Design.
        </p>
      </div>
    </div>
  );
};
