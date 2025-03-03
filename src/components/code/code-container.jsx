import { useRef, useState } from "react";
import { CodeIcon } from "./code-icon";
import { RedDot } from "../red-dot";
import { CodeIconMobile } from "./code-icon-mobile";

export const CodeContainer = () => {
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
    <div
      onMouseEnter={() => setMouseOnContainer(true)}
      onMouseLeave={() => setMouseOnContainer(false)}
      ref={svgContainerRef}
      onMouseMove={(event) => handleMouseMove(event)}
      className="stroke-[0.15]"
    >
      <CodeIcon
        cursor={cursor}
        svgContainerRef={svgContainerRef}
        mouseOnContainer={mouseOnContainer}
      />
      <CodeIconMobile />
    </div>
  );
};
