import { useRef, useState } from "react";
import { KangarooIcon } from "./kangaroo-icon";
import { YellowDot } from "../yellow-dot";

export const KangarooContainer = () => {
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
    <div className="flex flex-col items-center jsutify-center gap-y-2">
      <div
        onMouseEnter={() => setMouseOnContainer(true)}
        onMouseLeave={() => setMouseOnContainer(false)}
        ref={svgContainerRef}
        onMouseMove={(event) => handleMouseMove(event)}
        className="stroke-[0.15]"
      >
        <KangarooIcon
          cursor={cursor}
          svgContainerRef={svgContainerRef}
          mouseOnContainer={mouseOnContainer}
        />
      </div>
      <div
        data-glow
        className="flex items-center justify-start gap-x-2 py-1.5 px-4 rounded-[30px] inner-shadow"
      >
        <YellowDot />
        <span className="font-medium">Ambition</span>
      </div>
    </div>
  );
};
