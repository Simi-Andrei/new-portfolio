import { useEffect, useState } from "react";

export const CodeIcon = ({ cursor, svgContainerRef, mouseOnContainer }) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (svgContainerRef.current && cursor.x !== null && cursor.y !== null) {
      const containerRect = svgContainerRef.current.getBoundingClientRect();

      const cxPercentage = (cursor.x / containerRect.width) * 100;
      const cyPercentage = (cursor.y / containerRect.height) * 100;
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, svgContainerRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-14 h-14 hidden md:block"
    >
      <defs>
        <radialGradient
          id="codeGradient"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnContainer && <stop stopColor="#ec003f" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke="url(#codeGradient)"
        className="fill-[#171717]"
        d="M30 20 L10 50 L30 80"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="yellowGradient"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnContainer && <stop stopColor="#e17100" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke="url(#yellowGradient)"
        className="fill-[#171717]"
        d="M55 20 L45 80"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="tealGradient"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnContainer && <stop stopColor="#009689" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke="url(#tealGradient)"
        className="fill-[#171717]"
        d="M70 20 L90 50 L70 80"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
