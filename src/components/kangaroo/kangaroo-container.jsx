import { useRef, useState } from "react";
import { KangarooIcon } from "./kangaroo-icon";
import { YellowDot } from "../yellow-dot";
import { KangarooIconMobile } from "./kangaroo-icon-mobile";

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
    <div className="p-5">
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
        <KangarooIconMobile className="lg:hidden" />
      </div>
    </div>
  );
};
