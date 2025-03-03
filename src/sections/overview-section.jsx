import { CatContainer } from "@/components/cat/cat-container";
import { KangarooContainer } from "@/components/kangaroo/kangaroo-container";
import { ButterflyContainer } from "@/components/butterfly/butterfly-container";
import { CogIcon, HandIcon, MessageCircleMoreIcon } from "lucide-react";
import { RedDot } from "@/components/red-dot";
import { YellowDot } from "@/components/yellow-dot";
import { TealDot } from "@/components/teal-dot";
import { GiPipes } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaCogs } from "react-icons/fa";
import { CodeContainer } from "@/components/code/code-container";
import { BrainContainer } from "@/components/brain/brain-container";

export const OverviewSection = () => {
  return (
    <div className="w-full rounded-[30px] flex flex-col md:flex-row items-center justify-center py-10 px-2 md:px-10 h-[calc(80vh)] md:mt-2">
      <div className="md:flex-1 flex flex-col items-start justify-center h-full gap-y-2 cursor-default order-2 md:order-1">
        <p className="text-xl lg:text-3xl font-medium text-center md:text-left w-full">
          Hello there! I&apos;m
        </p>
        <h2 className="font-extrabold text-5xl lg:text-6xl bg-gradient-to-b from-teal-500 via-teal-700 to-teal-950 bg-clip-text text-transparent py-2 text-center md:text-left">
          Andrei Simigiu
        </h2>
        <div className="text-3xl lg:text-4xl font-medium flex items-center justify-center gap-x-2 w-full md:justify-start">
          <CodeContainer />
          <span>Web Developer</span>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-8 w-full md:justify-start">
          <Button
            className="rounded-[30px] bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-400 text-neutral-900 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-md group"
            asChild
          >
            <a href="#">
              Meet Me
              <HandIcon className="group-hover:text-teal-800 group-hover:scale-110 duration-150" />
            </a>
          </Button>
          <Separator orientation="vertical" className="!h-6 bg-neutral-600" />
          <Button
            className="rounded-[30px] bg-gradient-to-b from-neutral-800 to-neutral-900 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-md group"
            asChild
          >
            <a href="#">
              Let's Talk
              <MessageCircleMoreIcon className="group-hover:text-teal-800 group-hover:scale-110 duration-150" />
            </a>
          </Button>
        </div>
      </div>
      <div className="md:flex-1 rounded-[30px] flex flex-col items-center justify-center gap-y-6 cursor-default order-1 md:order-2">
        <BrainContainer />
      </div>
    </div>
  );
};
