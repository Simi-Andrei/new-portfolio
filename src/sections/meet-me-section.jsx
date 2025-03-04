import { ButterflyContainer } from "@/components/butterfly/butterfly-container";
import { CatContainer } from "@/components/cat/cat-container";
import { KangarooContainer } from "@/components/kangaroo/kangaroo-container";
import { RedDot } from "@/components/red-dot";
import { TealDot } from "@/components/teal-dot";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { YellowDot } from "@/components/yellow-dot";

export const MeetMeSection = () => {
  return (
    <div className="py-10 px-4 xl:px-0 my-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-4">
        <div
          data-glow
          className="flex-1 h-[28rem] flex flex-col items-center justify-center p-4 shrink-0 inner-shadow shadow-md shadow-black/50 relative mb-4 lg:mb-0"
        >
          <Badge className="absolute top-4 left-4 cursor-default bg-teal-900 text-[#ededed] font-normal">
            Meet Me
          </Badge>
          <h2 className="text-center mb-6 text-2xl font-medium">Welcome!</h2>
          <p className="text-center text-[0.9rem]">
            I'm a web developer with a passion for building seamless, full-stack
            applications. While coding is my main focus, I also have a love for
            design, and I enjoy creating pixel-perfect layouts and styling with
            attention to detail. My goal is to build clean, responsive, and
            user-friendly websites that not only work great but also look
            amazing. Take a look around my portfolio – I’m excited to share my
            work with you and explore how we can bring your ideas to life!
            <br />
            <br />
            My tech stack? It's fueled by three key ingredients
          </p>
        </div>
        <Separator orientation="vertical" className="hidden lg:block" />
        <div className="flex-1 flex flex-col gap-y-4 shrink-0">
          <div className="flex items-center justify-start gap-x-4">
            <div data-glow className="inner-shadow shadow-md shadow-black/50">
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
            <div data-glow className="inner-shadow shadow-md shadow-black/50">
              <KangarooContainer />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-start gap-x-2">
                <YellowDot />
                <span className="font-medium">Ambition</span>
              </div>
              <p className="text-[0.9rem]">
                Ambition is the force behind every project I build. I strive to
                create scalable, high-performance applications that not only
                meet but exceed expectations.
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-start gap-x-4">
            <div data-glow className="inner-shadow shadow-md shadow-black/50">
              <ButterflyContainer />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-start gap-x-2">
                <TealDot />
                <span className="font-medium">Passion</span>
              </div>
              <p className="text-[0.9rem]">
                At the heart of everything I do is passion. I love writing
                clean, maintainable code, solving complex problems, and seeing a
                project come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
