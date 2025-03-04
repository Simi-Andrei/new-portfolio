import { useRef, useState } from "react";
import { ButterflyIcon } from "./butterfly-icon";
import { TealDot } from "../teal-dot";
import { ButterflyIconMobile } from "./butterfly-icon-mobile";

export const ButterflyContainer = () => {
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
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div
        onMouseEnter={() => setMouseOnContainer(true)}
        onMouseLeave={() => setMouseOnContainer(false)}
        ref={svgContainerRef}
        onMouseMove={(event) => handleMouseMove(event)}
        className="stroke-[0.15]"
      >
        <ButterflyIcon
          cursor={cursor}
          svgContainerRef={svgContainerRef}
          mouseOnContainer={mouseOnContainer}
        />
        <ButterflyIconMobile />
      </div>
      <div className="flex items-center justify-start gap-x-2 py-1.5 px-4 dark:inner-dark-shadow">
        <TealDot />
        <span className="font-medium">Passion</span>
      </div>
    </div>
  );
};
