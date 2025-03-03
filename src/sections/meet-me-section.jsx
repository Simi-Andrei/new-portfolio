import { RedDot } from "@/components/red-dot";
import { TealDot } from "@/components/teal-dot";
import { YellowDot } from "@/components/yellow-dot";

export const MeetMeSection = () => {
  return (
    <div className="p-2 md:p-10">
      <h2 className="text-2xl font-bold mb-6">Meet Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-center gap-x-2 w-[7rem] h-9">
            <RedDot />
            <span className="text-xs">Curiosity</span>
          </div>

          <div className="flex items-center justify-center gap-x-2 w-[7rem] h-9">
            <YellowDot />
            <span className="text-xs">Ambition</span>
          </div>

          <div className="flex items-center justify-center gap-x-2 w-[7rem] h-9">
            <TealDot />
            <span className="text-xs">Passion</span>
          </div>
        </div>
        <div className="bg-blue-800">
          <p>
            Curiosity is the driving force that fuels my desire to constantly
            learn and grow. In the fast-paced world of technology, staying
            curious allows me to explore new tools, methodologies, and
            perspectives. It pushes me to not only understand how things work
            but to ask "why" and "how" they can be improved.
          </p>
        </div>
      </div>
    </div>
  );
};
