import { useRef, useState } from "react";
import { BrainIcon } from "./brain-icon";
import { RedDot } from "../red-dot";
import { BrainIconMobile } from "./brain-icon-mobile";
import { CogIcon } from "lucide-react";

export const BrainContainer = () => {
  const svgContainerRef = useRef(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnContainer, setMouseOnContainer] = useState(false);

  const handleMouseMove = (event) => {
    if (svgContainerRef.current !== null) {
      const rect = svgContainerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-2 w-full relative">
      <div
        onMouseEnter={() => setMouseOnContainer(true)}
        onMouseLeave={() => setMouseOnContainer(false)}
        ref={svgContainerRef}
        onMouseMove={(event) => handleMouseMove(event)}
        className="stroke-[0.15] w-full"
      >
        <BrainIcon
          cursor={cursor}
          svgContainerRef={svgContainerRef}
          mouseOnContainer={mouseOnContainer}
        />
        <BrainIconMobile />
      </div>
      <CogIcon className="absolute top-[18%] md:top-[16%] right-[16%] size-8 md:size-12 text-neutral-700 animate-[reverse_spin_50s_linear_infinite]" />
    </div>
  );
};
